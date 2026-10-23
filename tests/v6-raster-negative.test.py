#!/usr/bin/env python3
"""Negative tests for immutable 25-card media candidate. No DB/network/deploy."""
import copy
import importlib.util
import json
import pathlib
import shutil
import sys
import tempfile
import unittest

ROOT=pathlib.Path(__file__).resolve().parents[1]
STAGED_ROOT=pathlib.Path(sys.argv.pop()).resolve() if __name__=='__main__' and len(sys.argv)==2 else None
spec=importlib.util.spec_from_file_location('rasterverify',ROOT/'scripts/v6-verify-raster-media.py')
checker=importlib.util.module_from_spec(spec);spec.loader.exec_module(checker)
class CandidateSecurity(unittest.TestCase):
 @classmethod
 def setUpClass(cls):
  cls.base=STAGED_ROOT
  cls.lock=ROOT/'data/v6-media-lock-2026-10-20-r01.json'
  cls.edition=ROOT/'data/candidates/2026-10-20/edition-v2.json'
  cls.app_sha=__import__('json').loads((cls.base/'candidate-media-manifest.json').read_text())['app_sha']
 def check(self,root):return checker.verify(root,self.lock,self.edition,self.app_sha)
 def mutate_manifest(self,mutator):
  with tempfile.TemporaryDirectory() as d:
   tmp=pathlib.Path(d)
   shutil.copytree(self.base,tmp/'candidate')
   dest=tmp/'candidate'
   path=dest/'candidate-media-manifest.json'
   data=json.loads(path.read_text())
   mutator(data)
   path.write_text(json.dumps(data,indent=2))
   with self.assertRaises(ValueError):self.check(dest)
 def test_valid_25_media(self):
  self.assertEqual(self.check(self.base)['cards'],25)
 def test_reject_invalid_app_sha(self):
  with self.assertRaises(ValueError):checker.verify(self.base,self.lock,self.edition,'f'*40)
 def test_reject_unverified_source_digest(self):
  self.mutate_manifest(lambda data:data.update(original_source_lock_sha256='0'*64))
 def test_reject_missing_media(self):
  self.mutate_manifest(lambda data:data['cards'].pop())
 def test_reject_duplicate_card(self):
  self.mutate_manifest(lambda data:data['cards'][1].update(card_id=data['cards'][0]['card_id']))
 def test_reject_png_as_svg(self):
  self.mutate_manifest(lambda data:data['cards'][0].update(mime='image/svg+xml'))
 def test_reject_unbound_storage_path(self):
  self.mutate_manifest(lambda data:data['cards'][0].update(storage_path='editions/another-release/objects/fake.png'))
 def test_reject_mutated_asset_bytes(self):
  with tempfile.TemporaryDirectory() as d:
   tmp=pathlib.Path(d)/'candidate'
   shutil.copytree(self.base,tmp)
   m=json.loads((tmp/'candidate-media-manifest.json').read_text())
   obj=tmp/m['cards'][0]['object_path']
   data=obj.read_bytes();obj.write_bytes(data[:-1]+bytes([data[-1]^0x01]))
   with self.assertRaises(ValueError):self.check(tmp)
if __name__=='__main__':
 if STAGED_ROOT is None:
  print('Usage: v6-raster-negative.test.py /staged/candidate',file=sys.stderr)
  sys.exit(2)
 unittest.main(verbosity=2)
