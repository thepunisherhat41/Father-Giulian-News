#!/usr/bin/env python3
"""Verify pinned media bytes in offline staging. Never publishes."""
import hashlib,json,subprocess,sys
from pathlib import Path
root=Path(sys.argv[1]).resolve()
lock=json.loads(Path('data/v6-media-lock-2026-10-20-r01.json').read_bytes())
manifest=json.loads((root/'media-manifest.json').read_bytes())
edition_file=Path(sys.argv[3]) if len(sys.argv)>3 else Path('data/current-edition.json')
assert hashlib.sha256(edition_file.read_bytes()).hexdigest()==lock['edition_sha256'], 'pinned edition digest mismatch'
for file,key in [('app/api/art/route.ts','renderer_git_blob_sha'),('data/media-2026-10-20.json','photo_catalog_git_blob_sha')]:
 assert subprocess.check_output(['git','hash-object',file],text=True).strip()==lock[key],file+' changed since media snapshot'
if len(sys.argv)>2:assert manifest['app_sha']==sys.argv[2], 'app SHA mismatch'
assert manifest['cards']==lock['cards'] and manifest['edition_sha256']==lock['edition_sha256']
assert manifest['schema_version']==6 and manifest['immutable'] is True
assert len(lock['cards'])==25 and len({c['card_id'] for c in lock['cards']})==25
used=set()
for c in lock['cards']:
 rel=Path(c['object_path'])
 assert not rel.is_absolute() and '..' not in rel.parts and len(rel.parts)==2 and rel.parts[0]=='objects'
 p=(root/rel).resolve()
 assert p.is_relative_to(root/'objects') and p.is_file()
 b=p.read_bytes();digest=hashlib.sha256(b).hexdigest()
 assert digest==c['sha256'] and len(b)==c['bytes'] and p.name.startswith(digest+'.')
 assert (b.startswith(b'\xff\xd8') and c['mime']=='image/jpeg') or (b.startswith(b'\x89PNG') and c['mime']=='image/png') or (b.lstrip().startswith(b'<svg') and c['mime']=='image/svg+xml') or (b.startswith(b'RIFF') and c['mime']=='image/webp')
 assert c['width']>0 and c['height']>0
 if c['origin']=='generated':assert c['mime']=='image/svg+xml' and (c['width'],c['height'])==(720,1280)
 else:assert c['origin']=='wikimedia' and c['source_url'] and c['credit'] and c['license']
 used.add(p)
assert {x.resolve() for x in (root/'objects').iterdir() if x.is_file()}==used
assert sum(c['origin']=='wikimedia' for c in lock['cards'])==12
print('PASS: 25/25 offline content-addressed media verified against pinned lockfile')
