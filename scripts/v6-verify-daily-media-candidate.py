#!/usr/bin/env python3
"""Independent, fail-closed offline integrity check for a new 25-media edition."""
import argparse, hashlib, io, json, pathlib, re, sys
from PIL import Image
def sha(b):return hashlib.sha256(b).hexdigest()
def fail(m):raise ValueError(m)
def check(root,edpath,photopath,app_sha):
 root=pathlib.Path(root).resolve()
 snap=json.loads((root/"candidate-media-manifest.json").read_bytes())
 if snap.get("schema_version")!=6 or snap.get("immutable") is not True:fail("not an immutable candidate")
 if snap.get("app_sha")!=app_sha or not re.fullmatch(r"[a-f0-9]{40}",app_sha):fail("app SHA mismatch")
 if snap.get("edition_sha256")!=sha(pathlib.Path(edpath).read_bytes()):fail("source edition bytes changed")
 if snap.get("photo_catalog_sha256")!=sha(pathlib.Path(photopath).read_bytes()):fail("photo source catalogue drift")
 photos=json.loads(pathlib.Path(photopath).read_bytes())
 ed=json.loads(pathlib.Path(edpath).read_bytes())
 release=snap.get("edition_id")
 if not isinstance(release,str) or not re.fullmatch(r"\d{4}-\d{2}-\d{2}-r\d{2,}",release) or release[:10]!=ed.get("editionDate"):fail("release date invalid")
 cards=snap.get("cards",[])
 if len(cards)!=len(ed.get("cards",[])) or len(cards)!=25:fail("25-media requirement failed")
 if [x["card_id"] for x in cards]!=[x["id"] for x in ed["cards"]]:fail("editorial order mismatch")
 if len(photos)!=12:fail("twelve verified photographs required")
 file=snap.get("manifest_path")
 if file!="manifest-"+snap.get("manifest_sha256","")+".json":fail("manifest filename mismatch")
 mb=(root/file).read_bytes()
 if sha(mb)!=snap.get("manifest_sha256"):fail("manifest byte integrity mismatch")
 v6=json.loads(mb)
 if v6.get("editionId")!=release or v6.get("editionDate")!=ed["editionDate"]:fail("v6 manifest/release mismatch")
 if len(v6.get("cards",[]))!=25 or len(v6.get("mediaCatalog",{}))!=25:fail("incomplete v6 manifest")
 all_files=set();all_hashes=set()
 for i,(obj,card) in enumerate(zip(cards,ed["cards"])):
  cid=card["id"]
  kind="image" if cid in photos else "art"
  ext="jpg" if kind=="image" else "png"
  mime="image/jpeg" if kind=="image" else "image/png"
  digest=obj.get("sha256")
  if not re.fullmatch(r"[a-f0-9]{64}",digest or "") or digest in all_hashes:fail("duplicate or malformed digest")
  all_hashes.add(digest)
  rel="objects/"+digest+"."+ext
  storage="editions/"+release+"/"+rel
  if obj.get("object_path")!=rel or obj.get("storage_path")!=storage or obj.get("media_kind")!=kind or obj.get("mime")!=mime:fail("media path/type mismatch "+cid)
  absolute=(root/rel).resolve()
  if not absolute.is_relative_to(root/"objects") or not absolute.is_file():fail("unsafe/missing file "+cid)
  b=absolute.read_bytes()
  if sha(b)!=digest or len(b)!=obj["bytes"] or not (1000<=len(b)<=12*1024*1024):fail("object content differs "+cid)
  with Image.open(io.BytesIO(b)) as im:
   if im.format!=("JPEG" if kind=="image" else "PNG") or im.size!=(obj["width"],obj["height"]):fail("decoded dimensions/type mismatch "+cid)
   im.verify()
  if kind=="art" and (obj["width"],obj["height"])!=(720,1280):fail("not a 9:16 art "+cid)
  if kind=="image" and min(obj["width"],obj["height"])<300:fail("photo too small "+cid)
  if not obj.get("alt") or len(obj["alt"])<20 or not obj.get("credit") or not obj.get("license"):fail("missing rights or alt text "+cid)
  m=v6["mediaCatalog"].get("media-"+cid,{})
  if m.get("kind")!=kind or m.get("sha256")!=digest or m.get("mimeType")!=mime or m.get("url")!="https://sqlywvoqktdebubjmskn.supabase.co/storage/v1/object/public/father-news-v6-media/"+storage:fail("remote path/manifest mismatch "+cid)
  if v6["cards"][i].get("mediaId")!="media-"+cid:fail("card/media mapping mismatch "+cid)
  all_files.add(absolute)
 actual={x.resolve() for x in (root/"objects").iterdir() if x.is_file()}
 if all_files!=actual:fail("unknown files in staging")
 return dict(status="VERIFIED_OFFLINE_ONLY",releaseId=release,appSha=app_sha,mediaCount=len(cards),photos=len(photos),arts=13,manifestSha256=sha(mb),totalBytes=sum(x["bytes"] for x in cards))
if __name__=="__main__":
 try:
  p=argparse.ArgumentParser()
  p.add_argument("--root",required=True);p.add_argument("--edition",required=True);p.add_argument("--photos",required=True);p.add_argument("--app-sha",required=True)
  a=p.parse_args();print(json.dumps(check(a.root,a.edition,a.photos,a.app_sha)))
 except Exception as exc:print("FAIL CLOSED: "+str(exc),file=sys.stderr);sys.exit(1)
