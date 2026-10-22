import {createHash} from 'node:crypto';
import {validateEdition} from '../../../../lib/father-v6/engine.mjs';
import {verifyEditionMediaBinding} from '../../../../lib/father-v6/manifest-binding.mjs';

export const dynamic='force-dynamic';
export const revalidate=0;
const SHA=/^[a-f0-9]{64}$/;
const APP_SHA=/^[a-f0-9]{40}$/;
const ID=/^\d{4}-\d{2}-\d{2}-r\d{2,}$/;
const headers={'Cache-Control':'no-store, max-age=0','X-Content-Type-Options':'nosniff'};
const unavailable=()=>Response.json({status:'NOT_READY'},{status:503,headers});
const validProject=(url,ref)=>{
 try{
  const u=new URL(url);
  return u.protocol==='https:'&&u.hostname===ref+'.supabase.co'&&!u.port&&!u.username&&!u.password&&u.pathname==='/'&&!u.search&&!u.hash;
 }catch{return false;}
};
const MAX_MANIFEST_BYTES=1024*1024;
async function readBoundedManifest(response){
 const length=response.headers.get('content-length');
 if(length!==null&&(!/^[0-9]+$/.test(length)||Number(length)>MAX_MANIFEST_BYTES))throw Error('MANIFEST_SIZE_INVALID');
 const reader=response.body?.getReader();
 if(!reader)throw Error('MANIFEST_BODY_MISSING');
 const chunks=[];let total=0;
 try{
  while(true){
   const {done,value}=await reader.read();
   if(done)break;
   total+=value.byteLength;
   if(total>MAX_MANIFEST_BYTES){
    await reader.cancel();
    throw Error('MANIFEST_SIZE_INVALID');
   }
   chunks.push(Buffer.from(value));
  }
 }finally{reader.releaseLock();}
 if(total===0)throw Error('MANIFEST_EMPTY');
 return Buffer.concat(chunks,total);
}
export async function GET(){
 const env=process.env;
 if(env.FATHER_V6_ENABLED!=='true')return unavailable();
 const ref=env.FATHER_V6_PROJECT_REF||'';
 const base=env.FATHER_V6_SUPABASE_URL||'';
 const key=env.FATHER_V6_SUPABASE_ANON_KEY||'';
 const appSha=env.FATHER_V6_APP_SHA||'';
 const origin=env.FATHER_V6_MEDIA_ORIGIN||'';
 if(!/^[a-z0-9]{20}$/.test(ref)||!validProject(base,ref)||key.length<20||!APP_SHA.test(appSha))return unavailable();
 let allowed;
 try{
  allowed=new URL(origin);
  const validBucketPath=allowed.pathname==='/' || (allowed.hostname===ref+'.supabase.co'&&allowed.pathname==='/storage/v1/object/public/father-news-v6-media');
  if(allowed.protocol!=='https:'||allowed.username||allowed.password||allowed.port||!validBucketPath||allowed.search||allowed.hash)return unavailable();
 }catch{return unavailable();}
 try{
  const rpc=await fetch(base+'/rest/v1/rpc/father_news_current',{
   method:'POST',headers:{'apikey':key,'Authorization':'Bearer '+key,'Content-Type':'application/json'},
   body:'{}',cache:'no-store',redirect:'error',signal:AbortSignal.timeout(8000)
  });
  if(!rpc.ok)return unavailable();
  const rows=await rpc.json();
  if(!Array.isArray(rows)||rows.length!==1)return unavailable();
  const row=rows[0];
  if(!ID.test(row.release_id)||!Number.isSafeInteger(row.generation)||row.generation<1||
     !SHA.test(row.manifest_sha256)||row.app_commit_sha!==appSha||
     !Number.isInteger(row.card_count)||row.card_count!==25)return unavailable();
  const mediaUrl=new URL(row.manifest_url);
  const scopedRoot=allowed.pathname==='/'?'':allowed.pathname;
  const prefix=scopedRoot+'/editions/'+row.release_id+'/';
  const canonical=mediaUrl.pathname===prefix+'manifests/'+row.manifest_sha256+'.json'||
   mediaUrl.pathname===prefix+row.manifest_sha256+'/edition.json';
  if(mediaUrl.origin!==allowed.origin||!canonical||mediaUrl.username||mediaUrl.password||
     mediaUrl.search||mediaUrl.hash)return unavailable();
  const res=await fetch(mediaUrl,{cache:'no-store',redirect:'error',signal:AbortSignal.timeout(8000)});
  if(!res.ok)return unavailable();
  const bytes=await readBoundedManifest(res);
  if(createHash('sha256').update(bytes).digest('hex')!==row.manifest_sha256)return unavailable();
  const edition=JSON.parse(bytes.toString('utf8'));
  const checked=validateEdition(edition);
  if(!checked.ok||edition.editionId!==row.release_id||checked.cardCount!==row.card_count)return unavailable();
  verifyEditionMediaBinding(edition,{releaseId:row.release_id,mediaOrigin:origin,cardCount:25});
  return Response.json({releaseId:row.release_id,generation:row.generation,manifestSha256:row.manifest_sha256,edition},{status:200,headers});
 }catch{return unavailable();}
}
