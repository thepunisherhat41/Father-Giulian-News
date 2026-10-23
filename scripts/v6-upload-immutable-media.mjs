#!/usr/bin/env node
// Protected CI ONLY. Upload immutable, preverified v6 raster objects.
// No service-role token; Storage RLS authorizes a dedicated Auth identity.
// NEVER changes the production release pointer.
import {readFile, realpath} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {resolve, sep} from 'node:path';

const PROJECT='sqlywvoqktdebubjmskn';
const ORIGIN='https://'+PROJECT+'.supabase.co';
const BUCKET='father-news-v6-media';
const SHA=/^[a-f0-9]{64}$/;
const APP_SHA=/^[a-f0-9]{40}$/;
const RELEASE=/^\d{4}-\d{2}-\d{2}-r\d{2,}$/;
const sha256=bytes=>createHash('sha256').update(bytes).digest('hex');
const fail=message=>{throw new Error(message)};

if(process.env.GITHUB_ACTIONS!=='true' ||
   process.env.GITHUB_REPOSITORY!=='thepunisherhat41/Father-Giulian-News' ||
   !(process.env.GITHUB_EVENT_NAME==='workflow_dispatch' ||
   (process.env.GITHUB_EVENT_NAME==='pull_request' &&
    process.env.GITHUB_HEAD_REF==='architecture/father-news-6-atomic-editions' &&
    process.env.FATHER_V6_APPROVED_UPLOAD==='1')))fail('Protected manually approved GitHub Actions context required');
const appSha=process.env.FATHER_V6_APP_SHA;
const releaseId=process.env.FATHER_V6_RELEASE_ID;
if(!APP_SHA.test(appSha||'')||!RELEASE.test(releaseId||''))fail('Explicit immutable app SHA and release ID required');
if(process.env.FATHER_V6_SUPABASE_URL!==ORIGIN)fail('Unexpected Supabase project origin');
const key=process.env.FATHER_V6_PUBLISHABLE_KEY;
const email=process.env.FATHER_V6_PUBLISHER_EMAIL;
const password=process.env.FATHER_V6_PUBLISHER_PASSWORD;
if(!key||!email||!password)fail('Missing protected uploader identity/environment');
if(!process.argv[2])fail('Usage: node scripts/v6-upload-immutable-media.mjs <verified-raster-root>');
const root=await realpath(resolve(process.argv[2]));
const manifest=JSON.parse(await readFile(resolve(root,'candidate-media-manifest.json'),'utf8'));
if(manifest.schema_version!==6||manifest.immutable!==true ||
   manifest.app_sha!==appSha||manifest.edition_id!==releaseId ||
   !SHA.test(manifest.edition_sha256||'') ||
   !Array.isArray(manifest.cards)||manifest.cards.length!==25)fail('Invalid bound candidate manifest');
if(!releaseId.startsWith(manifest.edition_id.slice(0,10)+'-r'))fail('Release date mismatch');
const objects=[], seen=new Set(), cards=new Set();
for(const item of manifest.cards){
 const ext=item.mime==='image/png'?'png':item.mime==='image/jpeg'?'jpg':null;
 if(!ext||!SHA.test(item.sha256||'')||!item.card_id||
    cards.has(item.card_id)||seen.has(item.sha256))fail('Unexpected/duplicate candidate media');
 cards.add(item.card_id);seen.add(item.sha256);
 const rel='objects/'+item.sha256+'.'+ext;
 const keyPath='editions/'+releaseId+'/'+rel;
 if(item.object_path!==rel ||item.storage_path!==keyPath ||
    !Number.isSafeInteger(item.bytes)||item.bytes<1000 ||
    !item.credit||!item.alt||!item.license)fail('Media metadata or content address mismatch');
 const full=await realpath(resolve(root,rel));
 if(!full.startsWith(root+sep))fail('Object escaped staging root');
 const bytes=await readFile(full);
 if(bytes.length!==item.bytes||sha256(bytes)!==item.sha256)fail('Staged object checksum failed');
 if(ext==='png'&&!bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])))fail('Invalid PNG signature');
 if(ext==='jpg'&&!(bytes[0]===255&&bytes[1]===216))fail('Invalid JPEG signature');
 objects.push({keyPath, bytes, digest:item.sha256, mime:item.mime});
}
const login=await fetch(ORIGIN+'/auth/v1/token?grant_type=password',{
 method:'POST',redirect:'error',
 headers:{apikey:key,'content-type':'application/json'},
 body:JSON.stringify({email,password})
});
if(!login.ok)fail('Publisher authentication rejected HTTP '+login.status);
const session=await login.json();
if(!session.access_token)fail('Missing publisher session');
const apiHeaders={apikey:key,Authorization:'Bearer '+session.access_token};
const publicUrl=p=>ORIGIN+'/storage/v1/object/public/'+BUCKET+'/'+p;
async function verifyPublic(object,missingAllowed){
 const res=await fetch(publicUrl(object.keyPath),{redirect:'error',cache:'no-store'});
 if(missingAllowed&&res.status===404)return false;
 if(!res.ok)fail('Remote object read failed HTTP '+res.status);
 const bytes=Buffer.from(await res.arrayBuffer());
 if(sha256(bytes)!==object.digest||bytes.length!==object.bytes.length)fail('Remote object SHA mismatch');
 return true;
}
let created=0,alreadyThere=0;
for(const object of objects){
 if(await verifyPublic(object,true)){alreadyThere++;continue;}
 const upload=await fetch(ORIGIN+'/storage/v1/object/'+BUCKET+'/'+object.keyPath,{
  method:'POST',redirect:'error',
  headers:{...apiHeaders,'content-type':object.mime,'cache-control':'31536000','x-upsert':'false'},
  body:object.bytes
 });
 if(!upload.ok&&upload.status!==409)fail('RLS upload rejected HTTP '+upload.status);
 if(upload.ok)created++;
 await verifyPublic(object,false);
}
console.log(JSON.stringify({status:'IMMUTABLE_MEDIA_REMOTE_VERIFIED',releaseId,appSha,verified:objects.length,created,alreadyThere}));
