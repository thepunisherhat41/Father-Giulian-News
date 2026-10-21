#!/usr/bin/env python3
"""Verify the full 25-card raster candidate BEFORE any immutable storage upload.
Offline. Any deviation from source lock or disk bytes must fail closed.
"""
import argparse, hashlib, json, pathlib, struct, sys

def digest(b):return hashlib.sha256(b).hexdigest()
def media_dimensions(data,mime):
 if mime=='image/png':
  if not data.startswith(b'\x89PNG\r\n\x1a\n') or data[12:16]!=b'IHDR':raise ValueError('PNG signature invalid')
  return struct.unpack('>II',data[16:24])
 if mime=='image/jpeg':
  if data[:2]!=b'\xff\xd8':raise ValueError('JPEG signature invalid')
  p=2
  while p<len(data)-12:
   if data[p]!=255:p+=1;continue
   while p<len(data) and data[p]==255:p+=1
   marker=data[p];p+=1
   if marker in (0xD9,0xDA):break
   if marker in range(0xD0,0xD8) or marker==1:continue
   size=int.from_bytes(data[p:p+2],'big')
   if size<2 or p+size>len(data):raise ValueError('JPEG segment invalid')
   if marker in (0xC0,0xC1,0xC2,0xC3,0xC5,0xC6,0xC7,0xC9,0xCA,0xCB,0xCD,0xCE,0xCF):
    return int.from_bytes(data[p+5:p+7],'big'),int.from_bytes(data[p+3:p+5],'big')
   p+=size
  raise ValueError('JPEG dimensions unknown')
 raise ValueError('unsupported media MIME')
def verify(root,lock,edition,app_sha):
 root=pathlib.Path(root).resolve()
 original=json.loads(pathlib.Path(lock).read_bytes())
 data=json.loads((root/'candidate-media-manifest.json').read_bytes())
 ed=json.loads(pathlib.Path(edition).read_bytes())
 if data['schema_version']!=6 or data['immutable'] is not True:raise ValueError('not immutable v6')
 if data['app_sha']!=app_sha:raise ValueError('app SHA mismatch')
 if data['edition_sha256']!=original['edition_sha256'] or digest(pathlib.Path(edition).read_bytes())!=data['edition_sha256']:raise ValueError('edition mismatch')
 if data['original_source_lock_sha256']!=digest(pathlib.Path(lock).read_bytes()):raise ValueError('source lock fingerprint mismatch')
 if data['edition_id']!='2026-10-20-r01':raise ValueError('unexpected release ID')
 cards=data['cards'];sources=original['cards']
 if len(cards)!=len(sources)!=len(ed['cards']) or len(cards)!=25:raise ValueError('not all 25 media present')
 if [c['card_id'] for c in cards]!=[c['card_id'] for c in sources] or [c['card_id'] for c in cards]!=[c['id'] for c in ed['cards']]:raise ValueError('editorial order/card mapping mismatch')
 seen=set();paths=set()
 for a,b in zip(cards,sources):
  cid=a['card_id'];sha=a['sha256'];rel=a['object_path']
  if not isinstance(sha,str) or len(sha)!=64 or set(sha)-set('0123456789abcdef'):raise ValueError('invalid SHA '+cid)
  kind='art' if b['origin']=='generated' else 'image'
  mime='image/png' if kind=='art' else 'image/jpeg'
  ext='png' if kind=='art' else 'jpg'
  expected='objects/'+sha+'.'+ext
  storage='editions/'+data['edition_id']+'/'+expected
  if rel!=expected or a.get('storage_path')!=storage:raise ValueError('not content/release addressed '+cid)
  if cid in seen or rel in paths:raise ValueError('duplicate card/media '+cid)
  seen.add(cid);paths.add(rel)
  if a['source_sha256']!=b['sha256'] or a['media_kind']!=kind or a['mime']!=mime:raise ValueError('source mismatch '+cid)
  if a['license']!=b['license'] or a['credit']!=b['credit'] or a['source_url']!=b['source_url']:raise ValueError('attribution mismatch '+cid)
  if not a.get('alt') or len(a['alt'])<20:raise ValueError('missing meaningful alt '+cid)
  path=(root/rel).resolve()
  if not path.is_relative_to(root/'objects') or not path.is_file():raise ValueError('asset path invalid '+cid)
  content=path.read_bytes()
  if digest(content)!=sha or a['bytes']!=len(content) or len(content)<1000:raise ValueError('byte integrity mismatch '+cid)
  w,h=media_dimensions(content,mime)
  if (w,h)!=(a['width'],a['height']):raise ValueError('header/manifest dimensions differ '+cid)
  if kind=='art' and (w,h)!=(720,1280):raise ValueError('art must be exact 9:16 '+cid)
  if kind=='image' and min(w,h)<300:raise ValueError('photo below minimum '+cid)
 existing={x.relative_to(root).as_posix() for x in (root/'objects').iterdir() if x.is_file()}
 if existing!=paths:raise ValueError('unknown/unverified object(s) present')
 return {'status':'VERIFIED_OFFLINE','releaseId':data['edition_id'],'cards':len(cards),'png':sum(c['mime']=='image/png' for c in cards),'jpeg':sum(c['mime']=='image/jpeg' for c in cards),'bytes':sum(c['bytes'] for c in cards),'manifest_sha256':digest((root/'candidate-media-manifest.json').read_bytes())}
def main():
 p=argparse.ArgumentParser();p.add_argument('--root',required=True);p.add_argument('--lock',default='data/v6-media-lock-2026-10-20-r01.json');p.add_argument('--edition',default='data/current-edition.json');p.add_argument('--app-sha',required=True);a=p.parse_args()
 print(json.dumps(verify(a.root,a.lock,a.edition,a.app_sha),ensure_ascii=False))
if __name__=='__main__':
 try:main()
 except Exception as e:print('FAIL CLOSED: '+str(e),file=sys.stderr);sys.exit(1)

