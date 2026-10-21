#!/usr/bin/env python3
"""Offline conversion of 25 pinned Father News source media to v6-safe immutable PNG/JPEG.
No network requests, no DB writes, no production deploy.
Run after v6-freeze-media.py --verify-lock and v6-verify-staged-media.py.
"""
import argparse
import hashlib
import json
import pathlib
import shutil
import struct
import subprocess
import sys
import zlib

def sha256(b): return hashlib.sha256(b).hexdigest()
def read_json(path): return json.loads(pathlib.Path(path).read_text(encoding='utf-8'))
def check_rel(path):
 p=pathlib.PurePosixPath(path)
 if p.is_absolute() or '..' in p.parts or len(p.parts)!=2 or p.parts[0]!='objects':
  raise ValueError('invalid object path: '+str(path))
 return p
def inspect_png(data):
 if not data.startswith(b'\x89PNG\r\n\x1a\n') or data[12:16]!=b'IHDR':
  raise ValueError('converted art is not PNG')
 w,h=struct.unpack('>II',data[16:24])
 if (w,h)!=(720,1280):raise ValueError('converted art must be 720x1280')
 # The renderer output must contain pixel content, not an empty artifact.
 if len(data)<1000 or b'IDAT' not in data:raise ValueError('PNG has no meaningful pixel data')
 return w,h
def main():
 p=argparse.ArgumentParser()
 p.add_argument('--source',required=True,help='directory with frozen source objects and media-manifest.json')
 p.add_argument('--output',required=True,help='empty independent candidate staging directory')
 p.add_argument('--source-lock',default='data/v6-media-lock-2026-10-20-r01.json')
 p.add_argument('--edition',default='data/current-edition.json')
 p.add_argument('--release-id',default='2026-10-20-r01')
 p.add_argument('--app-sha',required=True)
 a=p.parse_args()
 if not __import__('re').fullmatch(r'[0-9a-f]{40}',a.app_sha):raise ValueError('exact commit SHA required')
 if a.release_id!='2026-10-20-r01':raise ValueError('this pipeline only supports locked historical edition')
 source=pathlib.Path(a.source).resolve()
 output=pathlib.Path(a.output).resolve()
 if output.exists() and any(output.iterdir()):raise ValueError('output must be empty: fail closed')
 if source==output or source in output.parents or output in source.parents:raise ValueError('source/output overlap')
 lock=read_json(a.source_lock)
 edition_path=pathlib.Path(a.edition)
 edition=read_json(edition_path)
 if sha256(edition_path.read_bytes())!=lock['edition_sha256']:raise ValueError('edition digest drift')
 current=read_json(source/'media-manifest.json')
 if current.get('cards')!=lock['cards'] or current.get('edition_sha256')!=lock['edition_sha256']:
  raise ValueError('source lock/manifest mismatch')
 if current.get('app_sha')!=a.app_sha:raise ValueError('app SHA drift')
 if len(lock['cards'])!=25 or len(edition['cards'])!=25:raise ValueError('expected 25 cards')
 cardmap={c['id']:c for c in edition['cards']}
 if len(cardmap)!=25 or [c['id'] for c in edition['cards']] != [c['card_id'] for c in lock['cards']]:
  raise ValueError('editorial order drift')
 (output/'objects').mkdir(parents=True,exist_ok=True)
 catalog=[]
 for source_entry in lock['cards']:
  cid=source_entry['card_id']
  src=(source/check_rel(source_entry['object_path'])).resolve()
  if not src.is_relative_to(source/'objects') or not src.is_file():raise ValueError('missing source '+cid)
  raw=src.read_bytes()
  if sha256(raw)!=source_entry['sha256'] or len(raw)!=source_entry['bytes']:
   raise ValueError('SOURCE_SHA_MISMATCH: '+cid)
  if source_entry['origin']=='generated':
   if source_entry['mime']!='image/svg+xml' or (source_entry['width'],source_entry['height'])!=(720,1280):
    raise ValueError('source SVG mismatch: '+cid)
   proc=subprocess.run(['rsvg-convert','--format','png','--width','720','--height','1280',str(src)],
    stdout=subprocess.PIPE,stderr=subprocess.PIPE,timeout=25,check=False)
   if proc.returncode:raise ValueError('SVG conversion failed for '+cid+': '+proc.stderr.decode(errors='replace')[:180])
   rendered=proc.stdout
   width,height=inspect_png(rendered)
   ext,mime='png','image/png'
  elif source_entry['origin']=='wikimedia':
   if source_entry['mime']!='image/jpeg' or not raw.startswith(b'\xff\xd8'):
    raise ValueError('source photo mismatch '+cid)
   rendered=raw
   width,height=source_entry['width'],source_entry['height']
   if min(width,height)<300:raise ValueError('small photo: '+cid)
   ext,mime='jpg','image/jpeg'
  else:raise ValueError('unknown media origin: '+cid)
  if not (1000<=len(rendered)<=12*1024*1024):raise ValueError('unexpected output size '+cid)
  digest=sha256(rendered)
  object_path='objects/'+digest+'.'+ext
  destination=output/check_rel(object_path)
  if destination.exists():raise ValueError('two cards share media bytes unexpectedly: '+cid)
  destination.write_bytes(rendered)
  if destination.stat().st_size!=len(rendered) or sha256(destination.read_bytes())!=digest:
   raise ValueError('persisted byte mismatch: '+cid)
  card=cardmap[cid]
  catalog.append({
   'card_id':cid,'mime':mime,'origin':source_entry['origin'],'source_sha256':source_entry['sha256'],
   'sha256':digest,'bytes':len(rendered),'width':width,'height':height,
   'object_path':object_path,'storage_path':'editions/'+a.release_id+'/'+object_path,'media_kind':'art' if source_entry['origin']=='generated' else 'image',
   'credit':source_entry['credit'],'license':source_entry['license'],
   'source_url':source_entry['source_url'],
   'alt':('Arte editorial sobre '+card['group']+': '+card['title']) if source_entry['origin']=='generated' else ('Fotografia de arquivo relacionada a '+card['group']+': '+card['title'])
  })
 out={'schema_version':6,'edition_id':a.release_id,'edition_sha256':lock['edition_sha256'],
  'app_sha':a.app_sha,'original_source_lock_sha256':sha256(pathlib.Path(a.source_lock).read_bytes()),
  'renderer':'librsvg PNG offline','immutable':True,'cards':catalog}
 (output/'candidate-media-manifest.json').write_text(json.dumps(out,sort_keys=True,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 print(json.dumps({'status':'STAGED_ONLY','releaseId':a.release_id,'cardCount':len(catalog),
  'artRasterized':sum(c['media_kind']=='art' for c in catalog),'photosVerified':sum(c['media_kind']=='image' for c in catalog),
  'outputBytes':sum(c['bytes'] for c in catalog),'manifestSha256':sha256((output/'candidate-media-manifest.json').read_bytes())}))
if __name__=='__main__':
 try:main()
 except Exception as exc:
  print('FAIL CLOSED: '+str(exc),file=sys.stderr)
  sys.exit(1)

