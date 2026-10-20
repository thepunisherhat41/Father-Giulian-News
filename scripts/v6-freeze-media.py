#!/usr/bin/env python3
"""Stage 25 content-addressed edition images; no DB/storage/production writes."""
import argparse, hashlib, json, re, struct, sys, time, urllib.parse, urllib.request, xml.etree.ElementTree as ET
from pathlib import Path

HOSTS = {'thumb.wikimedia.org','upload.wikimedia.org'}
LICENSES = {'Public domain','CC BY 2.0','CC BY 4.0','CC BY-SA 3.0','CC BY-SA 4.0'}
def sha(b): return hashlib.sha256(b).hexdigest()
def canon(v): return (json.dumps(v,sort_keys=True,ensure_ascii=False,indent=2)+'\n').encode()
class NoRedirect(urllib.request.HTTPRedirectHandler):
 def redirect_request(self,*args): raise ValueError('redirect blocked')
OPENER=urllib.request.build_opener(NoRedirect)
def fetch(url,remote):
 p=urllib.parse.urlparse(url)
 if remote:
  if p.scheme!='https' or p.hostname not in HOSTS or p.username or p.password: raise ValueError('URL outside Wikimedia allowlist')
 elif p.scheme!='http' or p.hostname!='127.0.0.1' or p.port is None: raise ValueError('art server must be loopback')
 for n in range(3):
  try:
   req=urllib.request.Request(url,headers={'User-Agent':'FatherNews/6.0 (immutable media QA)','Accept':'image/jpeg,image/png,image/webp,image/svg+xml'})
   with OPENER.open(req,timeout=25) as r:
    if remote and urllib.parse.urlparse(r.geturl()).hostname not in HOSTS: raise ValueError('redirected off allowlist')
    b=r.read(12*1024*1024+1)
    if not b or len(b)>12*1024*1024: raise ValueError('empty/oversized media')
    return b
  except (OSError,TimeoutError) as exc:
   if n==2: raise RuntimeError(f'download failed: {exc}') from exc
   time.sleep(n+1)
def inspect(b):
 if b[:2]==b'\xff\xd8':
  pos=2
  while pos<len(b)-10:
   if b[pos]!=255: pos+=1;continue
   while pos<len(b) and b[pos]==255:pos+=1
   marker=b[pos];pos+=1
   if marker in (0xD9,0xDA):break
   if marker in range(0xD0,0xD8) or marker==1:continue
   seg=int.from_bytes(b[pos:pos+2],'big')
   if seg<2 or pos+seg>len(b):break
   if marker in (0xC0,0xC1,0xC2,0xC3,0xC5,0xC6,0xC7,0xC9,0xCA,0xCB,0xCD,0xCE,0xCF):
    return 'image/jpeg','jpg',int.from_bytes(b[pos+5:pos+7],'big'),int.from_bytes(b[pos+3:pos+5],'big')
   pos+=seg
  raise ValueError('bad JPEG dimensions')
 if b.startswith(b'\x89PNG\r\n\x1a\n'):
  w,h=struct.unpack('>II',b[16:24]);return 'image/png','png',w,h
 if b.startswith(b'RIFF') and b[8:12]==b'WEBP':
  if b[12:16]==b'VP8X':w=1+int.from_bytes(b[24:27],'little');h=1+int.from_bytes(b[27:30],'little')
  elif b[12:16]==b'VP8 ':w,h=struct.unpack('<HH',b[26:30]);w&=0x3fff;h&=0x3fff
  elif b[12:16]==b'VP8L':
   bits=int.from_bytes(b[21:25],'little');w=(bits&0x3fff)+1;h=((bits>>14)&0x3fff)+1
  else:raise ValueError('unknown WEBP chunk')
  return 'image/webp','webp',w,h
 if b.lstrip().startswith(b'<svg'):
  root=ET.fromstring(b)
  if root.tag!='{http://www.w3.org/2000/svg}svg':raise ValueError('invalid SVG')
  for node in root.iter():
   if node.tag.split('}')[-1] in ('script','foreignObject','iframe','image','use'):raise ValueError('active SVG element')
   for k,v in node.attrib.items():
    if k.lower().startswith('on') or 'href' in k.lower() or re.search(r'url\s*\(\s*["\x27]?\s*(?:https?:|data:)',v,re.I):raise ValueError('unsafe SVG attribute')
  return 'image/svg+xml','svg',int(root.attrib.get('width','0')),int(root.attrib.get('height','0'))
 raise ValueError('unsupported media signature')
def main():
 p=argparse.ArgumentParser()
 p.add_argument('--art-origin',default='http://127.0.0.1:3001')
 p.add_argument('--out',default='/tmp/father-news-v6-media')
 p.add_argument('--lock',default='data/v6-media-lock-2026-10-20-r01.json')
 p.add_argument('--write-lock',action='store_true')
 p.add_argument('--verify-lock',action='store_true')
 p.add_argument('--app-sha',default='unknown')
 a=p.parse_args()
 if a.write_lock==a.verify_lock:p.error('choose exactly one lock mode')
 edbytes=Path('data/current-edition.json').read_bytes();ed=json.loads(edbytes)
 photos=json.loads(Path('data/media-2026-10-20.json').read_bytes())
 cards=ed['cards']
 if len(cards)!=25 or len({c['id'] for c in cards})!=25:raise ValueError('expected 25 unique cards')
 if set(photos)-{c['id'] for c in cards}:raise ValueError('unknown photo card')
 out=Path(a.out);obj=out/'objects';obj.mkdir(parents=True,exist_ok=True)
 entries=[]
 for i,c in enumerate(cards):
  cid=c['id'];photo=photos.get(cid)
  if photo:
   if photo.get('license') not in LICENSES or not photo.get('credit') or not photo.get('source'):raise ValueError(f'{cid}: invalid license/credit')
   url=photo['url'];origin='wikimedia'
  else:
   url=a.art_origin.rstrip('/')+'/api/art?id='+urllib.parse.quote(cid,safe='');origin='generated'
  b=fetch(url,bool(photo));mime,ext,w,h=inspect(b)
  if photo and mime not in ('image/jpeg','image/png','image/webp'):raise ValueError(f'{cid}: photo MIME invalid')
  if not photo and (mime!='image/svg+xml' or (w,h)!=(720,1280)):raise ValueError(f'{cid}: SVG 9:16 invalid')
  if not (w>=400 and h>=300 and w<=12000 and h<=12000):raise ValueError(f'{cid}: dimensions invalid')
  hash_=sha(b);dest=obj/(hash_+'.'+ext)
  if dest.exists():
   if sha(dest.read_bytes())!=hash_:raise ValueError('immutable object changed')
  else:
   with dest.open('xb') as f:f.write(b)
  entries.append(dict(card_id=cid,origin=origin,sha256=hash_,object_path='objects/'+dest.name,bytes=len(b),mime=mime,width=w,height=h,source_url=photo.get('source') if photo else None,credit=photo.get('credit') if photo else 'Father News editorial vector',license=photo.get('license') if photo else 'Original editorial artwork'))
  print(f'{i+1:02d}/25 {cid}: {mime} {w}x{h} sha256:{hash_[:12]}',flush=True)
 lock=dict(edition_date=ed['editionDate'],edition_sha256=sha(edbytes),cards=entries)
 lockpath=Path(a.lock)
 if a.verify_lock:
  if not lockpath.exists():raise ValueError('missing lockfile')
  if json.loads(lockpath.read_bytes())!=lock:raise ValueError('media checksum/attribution/edition lock mismatch')
 else:
  if lockpath.exists():raise ValueError('refusing to overwrite existing lockfile')
  lockpath.parent.mkdir(parents=True,exist_ok=True);lockpath.write_bytes(canon(lock))
 manifest=dict(lock,schema_version=6,release_id=ed['editionDate']+'-r01',app_sha=a.app_sha,immutable=True)
 raw=canon(manifest);(out/'media-manifest.json').write_bytes(raw)
 print(f'PASS 25/25 media; {len(photos)} photos, {25-len(photos)} art; manifest SHA256 {sha(raw)}')
 print('STAGING ONLY — no production release, storage upload or DB migration')
if __name__=='__main__':
 try:main()
 except Exception as exc:print(f'FAIL CLOSED: {exc}',file=sys.stderr);sys.exit(1)
