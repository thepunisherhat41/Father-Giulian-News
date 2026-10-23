#!/usr/bin/env python3
"""Extract GitHub staging media archives safely before protected publisher secrets are used."""
import argparse
import pathlib
import re
import sys
import tarfile
def extract(archive,output):
 out=pathlib.Path(output).resolve()
 out.mkdir(parents=True,exist_ok=True)
 if any(out.iterdir()):raise ValueError("output must start empty")
 sizes=0
 with tarfile.open(archive,"r:gz") as tar:
  members=tar.getmembers()
  if len(members)>80:raise ValueError("too many files in artifact")
  for item in members:
   rel=pathlib.PurePosixPath(item.name)
   if item.name.startswith("/") or ".." in rel.parts or not (item.isfile() or item.isdir()):
    raise ValueError("unsafe archive member")
   parts=[p for p in rel.parts if p!="."]
   if item.isfile():
    is_object = len(parts)==2 and parts[0]=="objects" and bool(re.fullmatch(r"[a-f0-9]{64}\.(png|jpg)",parts[1]))
    is_manifest = len(parts)==1 and (parts[0]=="candidate-media-manifest.json" or bool(re.fullmatch(r"manifest-[a-f0-9]{64}\.json",parts[0])))
    if not (is_object or is_manifest):
     raise ValueError("unrecognized archive file path")
    sizes+=item.size
    if not 0<item.size<13*1024*1024 or sizes>85*1024*1024:raise ValueError("unsafe artifact size")
   elif parts and (len(parts)!=1 or parts[0]!="objects"):
    raise ValueError("unrecognized archive directory")
  tar.extractall(out,members=members,filter="data")
 return len(members),sizes
if __name__=="__main__":
 try:
  ap=argparse.ArgumentParser();ap.add_argument("archive");ap.add_argument("output")
  args=ap.parse_args();print("Verified archived media members and bytes:",extract(args.archive,args.output))
 except Exception as exc:
  print("FAIL CLOSED:",str(exc),file=sys.stderr);sys.exit(1)
