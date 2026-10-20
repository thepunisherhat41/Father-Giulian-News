import {createHash} from 'node:crypto';
import {validateEdition} from '../../../../lib/father-v6/engine.mjs';

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
  return u.protocol==='https:'&&u.hostname===ref+'.supabase.co'&&!u.port&&!u.username&&!u.password&&!u.pathname.replaceAll('/','');
 }catch{return false;}
};
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
  if(allowed.protocol!=='https:'||allowed.username||allowed.password||allowed.port||allowed.pathname!=='/')return unavailable();
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
  if(mediaUrl.origin!==allowed.origin||!mediaUrl.pathname.startsWith('/editions/'+row.release_id+'/')||
     !mediaUrl.pathname.includes(row.manifest_sha256.slice(0,20))||
     mediaUrl.search||mediaUrl.hash)return unavailable();
  const res=await fetch(mediaUrl,{cache:'no-store',redirect:'error',signal:AbortSignal.timeout(8000)});
  if(!res.ok)return unavailable();
  const bytes=Buffer.from(await res.arrayBuffer());
  if(bytes.length===0||bytes.length>1024*1024)return unavailable();
  if(createHash('sha256').update(bytes).digest('hex')!==row.manifest_sha256)return unavailable();
  const edition=JSON.parse(bytes.toString('utf8'));
  const checked=validateEdition(edition);
  if(!checked.ok||edition.editionId!==row.release_id||checked.cardCount!==row.card_count)return unavailable();
  return Response.json({releaseId:row.release_id,generation:row.generation,edition},{status:200,headers});
 }catch{return unavailable();}
}
