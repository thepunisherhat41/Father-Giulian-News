#!/usr/bin/env python3
"""Stage one v6 daily edition with 25 exact-byte media objects. STAGING ONLY.
Run in CI with reviewed inputs. No database, storage or deployment writes.
"""
import argparse
import hashlib
import html
import io
import json
import pathlib
import re
import subprocess
import sys
import textwrap
import urllib.parse
import urllib.request

from PIL import Image, ImageOps

PROJECT="sqlywvoqktdebubjmskn"
ORIGIN=f"https://{PROJECT}.supabase.co/storage/v1/object/public/father-news-v6-media"
ALLOWED_HOSTS={"upload.wikimedia.org","thumb.wikimedia.org","commons.wikimedia.org"}
MAX_SOURCE=24*1024*1024
Image.MAX_IMAGE_PIXELS=35_000_000
SHA=re.compile(r"^[a-f0-9]{40}$")
REL=re.compile(r"^\d{4}-\d{2}-\d{2}-r\d{2,}$")
PALETTES={
 "papo":("#0d3751","#43c6aa"),"desafio":("#4e235e","#ffb95a"),
 "pai":("#244562","#95b5ee"),"brasil":("#145248","#c8cf4d"),
 "corinthians":("#303444","#e25d59"),"viagens":("#20486d","#ffc575"),
 "musica":("#4b2775","#f68ac7"),"sertanejo":("#775130","#cfa96c"),
 "tecnologia":("#202b61","#73d9e7"),"financas":("#184b4d","#8ce7ac"),
 "security-briefing":("#193c54","#b9e7fa"),"cyber":("#202858","#a58ee7"),
 "motos":("#4c2428","#ef986e")
}
MOTIFS={
 "papo":'<rect x="190" y="330" width="340" height="220" rx="76" fill="none" stroke="#fff" stroke-width="17"/><path d="M245 548L214 612 325 551" fill="none" stroke="#fff" stroke-width="17"/><circle cx="285" cy="444" r="14" fill="#fff"/><circle cx="360" cy="444" r="14" fill="#fff"/><circle cx="435" cy="444" r="14" fill="#fff"/>',
 "desafio":'<rect x="174" y="352" width="372" height="250" rx="34" fill="none" stroke="#fff" stroke-width="17"/><path d="M190 369L362 511 530 367" fill="none" stroke="#fff" stroke-width="14"/><circle cx="481" cy="327" r="66" fill="#ffd67a"/><path d="M481 280v48l32 18" fill="none" stroke="#3f2656" stroke-width="11" stroke-linecap="round"/>',
 "pai":'<path d="M210 580Q130 450 215 395Q300 352 361 440Q424 352 505 395Q592 452 510 581L360 700Z" fill="none" stroke="#fff" stroke-width="21" stroke-linejoin="round"/><path d="M270 573Q360 620 450 573" fill="none" stroke="#fff" stroke-width="15"/>',
 "brasil":'<rect x="188" y="362" width="350" height="292" rx="30" fill="none" stroke="#fff" stroke-width="17"/><path d="M250 460L338 548 473 404" fill="none" stroke="#fff" stroke-width="28" stroke-linecap="round" stroke-linejoin="round"/><path d="M210 360L360 270 511 360" fill="none" stroke="#fff" stroke-width="16"/>',
 "corinthians":'<circle cx="360" cy="471" r="176" fill="none" stroke="#fff" stroke-width="18"/><path d="M184 471h352M360 295v352" fill="none" stroke="#fff" stroke-width="13"/><circle cx="360" cy="471" r="52" fill="none" stroke="#fff" stroke-width="12"/><circle cx="360" cy="471" r="21" fill="#fff"/>',
 "viagens":'<path d="M100 648L260 400 352 537 440 360 630 648Z" fill="none" stroke="#fff" stroke-width="18" stroke-linejoin="round"/><circle cx="548" cy="319" r="51" fill="#fff3ce"/>',
 "musica":'<path d="M400 325v284a59 59 0 1 1-26-52V390l173-35v216a59 59 0 1 1-26-52V299Z" stroke="#fff" stroke-width="14" fill="none" stroke-linejoin="round"/>',
 "sertanejo":'<ellipse cx="335" cy="543" rx="116" ry="151" fill="none" stroke="#fff" stroke-width="18" transform="rotate(-27 335 543)"/><path d="M405 449L562 284 596 320 442 482" fill="none" stroke="#fff" stroke-width="21"/><circle cx="336" cy="552" r="35" fill="none" stroke="#fff" stroke-width="11"/>',
 "tecnologia":'<rect x="202" y="318" width="314" height="315" rx="24" fill="none" stroke="#fff" stroke-width="19"/><rect x="278" y="394" width="164" height="165" rx="17" fill="none" stroke="#fff" stroke-width="14"/><path d="M202 365h-65M202 463h-65M202 570h-65M516 365h65M516 463h65M516 570h65M258 318v-59M359 318v-59M459 318v-59M258 633v59M359 633v59M459 633v59" stroke="#fff" stroke-width="13"/>',
 "financas":'<path d="M180 320v322h375" fill="none" stroke="#fff" stroke-width="17"/><path d="M217 576L310 493 380 523 478 383 555 336" fill="none" stroke="#fff" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/><circle cx="478" cy="383" r="14" fill="#fff"/>',
 "security-briefing":'<path d="M360 276L535 353v162Q530 620 360 692Q190 625 185 515V353Z" fill="none" stroke="#fff" stroke-width="19"/><path d="M274 477L337 540 459 417" fill="none" stroke="#fff" stroke-width="26" stroke-linecap="round"/>',
 "cyber":'<circle cx="360" cy="479" r="78" fill="none" stroke="#fff" stroke-width="16"/><circle cx="206" cy="314" r="44" fill="none" stroke="#fff" stroke-width="14"/><circle cx="534" cy="347" r="44" fill="none" stroke="#fff" stroke-width="14"/><circle cx="235" cy="646" r="44" fill="none" stroke="#fff" stroke-width="14"/><circle cx="517" cy="628" r="44" fill="none" stroke="#fff" stroke-width="14"/><path d="M270 380L310 421M465 422L500 385M306 546L266 603M432 541L484 601" stroke="#fff" stroke-width="15"/>',
 "motos":'<circle cx="195" cy="575" r="80" fill="none" stroke="#fff" stroke-width="17"/><circle cx="527" cy="575" r="80" fill="none" stroke="#fff" stroke-width="17"/><path d="M196 575L290 439 367 578H196M367 578L458 419 526 575M289 439h-50m218-21h83" fill="none" stroke="#fff" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/>'
}
def hash_bytes(b): return hashlib.sha256(b).hexdigest()
def json_bytes(o): return (json.dumps(o,ensure_ascii=False,sort_keys=True,indent=2)+"\n").encode()
def fail(reason): raise ValueError(reason)
class OnlyWikimediaRedirect(urllib.request.HTTPRedirectHandler):
 def redirect_request(self,req,fp,code,msg,headers,newurl):
  validate_url(newurl)
  return super().redirect_request(req,fp,code,msg,headers,newurl)
def validate_url(url):
 u=urllib.parse.urlparse(url)
 if u.scheme!="https" or u.hostname not in ALLOWED_HOSTS or u.port or u.username or u.password:fail("unapproved image origin")
def retrieve(url):
 validate_url(url)
 opener=urllib.request.build_opener(OnlyWikimediaRedirect())
 with opener.open(urllib.request.Request(url,headers={"User-Agent":"FatherNews-EditorialMedia/6 (+https://github.com/thepunisherhat41/Father-Giulian-News)"}),timeout=35) as response:
  if response.status!=200:fail("source download did not return 200")
  b=response.read(MAX_SOURCE+1)
  if not b or len(b)>MAX_SOURCE:fail("source image outside size limit")
  return b
def photo_jpg(url):
 b=retrieve(url)
 try:
  with Image.open(io.BytesIO(b)) as im:
   if im.format not in ("JPEG","PNG","WEBP"):fail("source is not an image")
   im=ImageOps.exif_transpose(im).convert("RGB")
   im.thumbnail((1440,1440),Image.Resampling.LANCZOS)
   if min(im.size)<300:fail("photo below minimum resolution")
   out=io.BytesIO();im.save(out,format="JPEG",quality=88,optimize=True,progressive=True)
   return out.getvalue(),im.width,im.height,hash_bytes(b)
 except Exception as exc:
  fail("image decode or conversion invalid: "+str(exc))
def original_svg(card):
 id=card["id"]
 if id not in PALETTES or id not in MOTIFS:fail("no bespoke art motif for "+id)
 start,end=PALETTES[id]
 title=card["title"]
 lines=textwrap.wrap(title,width=25,break_long_words=False)
 if len(lines)>4:fail("illustrated title too long: "+id)
 label=html.escape(card["group"])
 title_e=[html.escape(line) for line in lines]
 texts="".join(f'<text x="64" y="{931+67*i}" font-size="46" font-weight="750" fill="#fff">{line}</text>' for i,line in enumerate(title_e))
 return f'''<svg xmlns="http://www.w3.org/2000/svg" width="720" height="1280" viewBox="0 0 720 1280">
 <defs><linearGradient id="grad" x2="1" y2="1"><stop stop-color="{start}"/><stop offset="1" stop-color="{end}"/></linearGradient></defs>
 <rect width="720" height="1280" fill="url(#grad)"/>
 <circle cx="80" cy="132" r="195" fill="#fff" fill-opacity=".06"/>
 <circle cx="664" cy="690" r="246" fill="#fff" fill-opacity=".08"/>
 <path d="M-10 734Q230 612 730 748V1280H-10Z" fill="#071527" fill-opacity=".54"/>
 <g stroke-linecap="round" stroke-linejoin="round">{MOTIFS[id]}</g>
 <text x="64" y="115" font-family="DejaVu Sans" font-size="23" fill="#fff" opacity=".92" letter-spacing="2">FATHER NEWS / 22.10.2026</text>
 <text x="64" y="850" font-family="DejaVu Sans" font-size="26" fill="#f7ead3">{label}</text>
 <g font-family="DejaVu Sans">{texts}</g>
 <text x="64" y="1204" font-family="DejaVu Sans" font-size="22" fill="#e8edef">Original editorial artwork · Father News</text>
 </svg>'''.encode()
def art_png(card):
 svg=original_svg(card)
 rendered=subprocess.run(["rsvg-convert","--format","png","--width","720","--height","1280"],input=svg,stdout=subprocess.PIPE,stderr=subprocess.PIPE,timeout=25,check=False)
 if rendered.returncode!=0:fail("SVG rasterize error: "+rendered.stderr.decode(errors="replace")[:100])
 with Image.open(io.BytesIO(rendered.stdout)) as im:
  im.verify()
 return rendered.stdout,720,1280,hash_bytes(svg)
def run(args):
 if not SHA.fullmatch(args.app_sha):fail("exact app SHA required")
 if not REL.fullmatch(args.release_id):fail("invalid release id")
 edition_path=pathlib.Path(args.edition)
 photo_path=pathlib.Path(args.photos)
 ed=json.loads(edition_path.read_bytes());photos=json.loads(photo_path.read_bytes())
 if ed.get("editionDate")!=args.release_id[:10] or len(ed.get("cards",[]))!=25:fail("edition/date/25-card mismatch")
 ids=[c["id"] for c in ed["cards"]]
 if len(set(ids))!=25:fail("duplicate card ID")
 if len(photos)!=12 or not set(photos).issubset(ids):fail("expected exactly 12 photo mappings")
 root=pathlib.Path(args.output).resolve()
 if root.exists() and any(root.iterdir()):fail("output staging directory must start empty")
 (root/"objects").mkdir(parents=True,exist_ok=True)
 staged=[];media={};used=set()
 for idx,card in enumerate(ed["cards"]):
  cid=card["id"]
  if cid in photos:
   p=photos[cid]
   if any(not p.get(k) for k in ("url","source","credit","license")):fail("missing source attribution "+cid)
   raw,w,h,source_sha=photo_jpg(p["url"]);ext,mime,kind="jpg","image/jpeg","image"
   source_url=p["source"];credit=p["credit"];license=p["license"];origin="wikimedia"
  else:
   raw,w,h,source_sha=art_png(card);ext,mime,kind="png","image/png","art"
   source_url=None;credit="Father News · original editorial artwork";license="Original editorial artwork";origin="generated"
  if len(raw)<1000 or len(raw)>12*1024*1024:fail("bad object size "+cid)
  digest=hash_bytes(raw); name=f"objects/{digest}.{ext}"
  if digest in used:fail("same image bytes mapped to multiple cards")
  used.add(digest)
  (root/name).write_bytes(raw)
  path=f"editions/{args.release_id}/{name}"
  staged.append(dict(card_id=cid,sha256=digest,bytes=len(raw),width=w,height=h,object_path=name,storage_path=path,
                     media_kind=kind,mime=mime,origin=origin,source_sha256=source_sha,source_url=source_url,
                     credit=credit,license=license,alt="Arte editorial sobre "+card["group"]+": "+card["title"] if kind=="art" else "Fotografia editorial relacionada a "+card["group"]+": "+card["title"]))
  media["media-"+cid]=dict(kind=kind,url=ORIGIN+"/"+path,sha256=digest,mimeType=mime,
                           alt=staged[-1]["alt"],credit=credit,license=license,width=w,height=h)
  if source_url:media["media-"+cid]["sourceUrl"]=source_url
 v6cards=[]
 for idx,c in enumerate(ed["cards"]):
  src=[]
  for s in c.get("sources",[]):
   if not s.get("url","").startswith("https://"):fail("invalid source URL "+c["id"])
   entry=dict(title=s["label"],url=s["url"],publisher=s["label"])
   if s.get("publishedAt") and re.fullmatch(r"\d{4}-\d{2}-\d{2}",s["publishedAt"]):entry["publishedOn"]=s["publishedAt"]
   else:
    if c.get("news"):fail("dated proof required for news "+c["id"])
    entry["undatedReason"]="Evergreen reference with no publisher-confirmed publication date"
   src.append(entry)
  v6cards.append(dict(id=c["id"],section=c["group"],order=idx+1,kind=c["type"],title=c["title"],
                      summary=c["summary"],details=c["details"],eventDate=c["eventDate"],
                      reportedAt=None,sources=src,mediaId="media-"+c["id"],layout=c.get("layout","guide"),
                      **({"conceptId":c["conceptId"]} if c.get("conceptId") else {}),
                      **({"visualConceptId":c["visualConceptId"]} if c.get("visualConceptId") else {}),
                      **({"questXp":c["questXp"]} if c.get("questXp") is not None else {}),
                      **({"quiz":c["quiz"]} if c.get("quiz") else {})))
 v6=dict(schemaVersion=6,editionId=args.release_id,editionDate=ed["editionDate"],timezone=ed["timezone"],revision=1,
         generatedAt=ed["updatedAt"],cards=v6cards,mediaCatalog=media,
         omissions=[dict(section="Zona Leste",reason="Sem pauta local inédita datada e confirmada em fonte verificável para esta edição.")],
         editorialNote=ed["editorialNote"])
 v6bytes=json_bytes(v6);manifest_sha=hash_bytes(v6bytes)
 (root/f"manifest-{manifest_sha}.json").write_bytes(v6bytes)
 audit=dict(schema_version=6,immutable=True,edition_id=args.release_id,app_sha=args.app_sha,
            edition_sha256=hash_bytes(edition_path.read_bytes()),photo_catalog_sha256=hash_bytes(photo_path.read_bytes()),
            manifest_sha256=manifest_sha,manifest_path=f"manifest-{manifest_sha}.json",cards=staged)
 (root/"candidate-media-manifest.json").write_bytes(json_bytes(audit))
 print(json.dumps({"status":"STAGED_ONLY","releaseId":args.release_id,"appSha":args.app_sha,"media":len(staged),
                   "photos":len(photos),"arts":25-len(photos),"manifestSha256":manifest_sha,"objectBytes":sum(x["bytes"] for x in staged)}))
def main():
 p=argparse.ArgumentParser()
 p.add_argument("--edition",required=True);p.add_argument("--photos",required=True)
 p.add_argument("--output",required=True);p.add_argument("--release-id",required=True);p.add_argument("--app-sha",required=True)
 run(p.parse_args())
if __name__=="__main__":
 try:main()
 except Exception as exc:print("FAIL CLOSED: "+str(exc),file=sys.stderr);sys.exit(1)
