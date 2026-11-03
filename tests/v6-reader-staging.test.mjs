import test from 'node:test';
import assert from 'node:assert/strict';
import {GET} from '../app/api/edition/staging/route.js';
const keys=['VERCEL_ENV','FATHER_V6_STAGING_ENABLED','FATHER_V6_STAGING_RELEASE_ID','FATHER_V6_STAGING_APP_SHA','FATHER_V6_PROJECT_REF','FATHER_V6_SUPABASE_URL','FATHER_V6_SUPABASE_ANON_KEY','FATHER_V6_MEDIA_ORIGIN'];
const ref='a'.repeat(20),sha='b'.repeat(40),release='2026-11-03-r01';
const env={VERCEL_ENV:'preview',FATHER_V6_STAGING_ENABLED:'true',FATHER_V6_STAGING_RELEASE_ID:release,FATHER_V6_STAGING_APP_SHA:sha,FATHER_V6_PROJECT_REF:ref,FATHER_V6_SUPABASE_URL:'https://'+ref+'.supabase.co',FATHER_V6_SUPABASE_ANON_KEY:'public-anon-key-long-enough',FATHER_V6_MEDIA_ORIGIN:'https://'+ref+'.supabase.co/storage/v1/object/public/father-news-v6-media'};
async function run(vars,fetcher){
 const previous=Object.fromEntries(keys.map(k=>[k,process.env[k]]));
 const original=globalThis.fetch;
 try{for(const k of keys)delete process.env[k];Object.assign(process.env,vars);globalThis.fetch=fetcher;return await GET();}
 finally{globalThis.fetch=original;for(const k of keys){if(previous[k]===undefined)delete process.env[k];else process.env[k]=previous[k];}}
}
test('staging API defaults to closed; never queries the DB',async()=>{
 const r=await run({},()=>{throw Error('unexpected remote access')});
 assert.equal(r.status,503);assert.match(r.headers.get('cache-control'),/no-store/);
});
test('staging API is disabled for production even with feature flag enabled',async()=>{
 const r=await run({...env,VERCEL_ENV:'production'},()=>{throw Error('unexpected remote access')});
 assert.equal(r.status,503);
});
test('staging API rejects missing or malformed selected release and app SHA',async()=>{
 const a=await run({...env,FATHER_V6_STAGING_RELEASE_ID:'../../admin'},()=>{throw Error('unexpected remote access')});
 const b=await run({...env,FATHER_V6_STAGING_APP_SHA:'bad'},()=>{throw Error('unexpected remote access')});
 assert.equal(a.status,503);assert.equal(b.status,503);
});
test('staging RPC is read-only and bound to one exact requested release',async()=>{
 let calls=0,body=null,url=null;
 const r=await run(env,async(endpoint,request)=>{calls++;url=endpoint;body=request.body;return Response.json([]);});
 assert.equal(r.status,503);assert.equal(calls,1);
 assert.equal(url,env.FATHER_V6_SUPABASE_URL+'/rest/v1/rpc/father_news_staging_release');
 assert.deepEqual(JSON.parse(body),{p_release_id:release});
});
test('staging refuses unapproved app SHA, wrong release, wrong manifest shape',async()=>{
 const row={release_id:release,generation:1,manifest_sha256:'f'.repeat(64),app_commit_sha:'c'.repeat(40),card_count:25,manifest_url:env.FATHER_V6_MEDIA_ORIGIN+'/editions/'+release+'/manifest-'+'f'.repeat(64)+'.json'};
 let calls=0;
 const r=await run(env,async()=>{calls++;return Response.json([row]);});
 assert.equal(r.status,503);assert.equal(calls,1);
});
