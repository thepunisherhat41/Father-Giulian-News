import test from 'node:test';
import assert from 'node:assert/strict';
import {GET} from '../app/api/edition/current/route.js';
const keys=['FATHER_V6_ENABLED','FATHER_V6_PROJECT_REF','FATHER_V6_SUPABASE_URL','FATHER_V6_SUPABASE_ANON_KEY','FATHER_V6_APP_SHA','FATHER_V6_MEDIA_ORIGIN'];
const ref='a'.repeat(20),app='b'.repeat(40),hash='c'.repeat(64);
const env={FATHER_V6_ENABLED:'true',FATHER_V6_PROJECT_REF:ref,FATHER_V6_SUPABASE_URL:'https://'+ref+'.supabase.co',FATHER_V6_SUPABASE_ANON_KEY:'public-anon-test-key-long-enough',FATHER_V6_APP_SHA:app,FATHER_V6_MEDIA_ORIGIN:'https://media.example.org'};
const release={release_id:'2026-10-20-r01',generation:1,manifest_sha256:hash,app_commit_sha:app,card_count:25,manifest_url:'https://media.example.org/editions/2026-10-20-r01/'+hash+'.json'};
async function run(vars,fetcher){
 const previous=Object.fromEntries(keys.map(k=>[k,process.env[k]]));
 const original=globalThis.fetch;
 try{
  for(const k of keys)delete process.env[k];
  Object.assign(process.env,vars);
  globalThis.fetch=fetcher;
  return await GET();
 }finally{
  globalThis.fetch=original;
  for(const k of keys){if(previous[k]===undefined)delete process.env[k];else process.env[k]=previous[k];}
 }
}
test('feature flag defaults to 503 without fetching',async()=>{
 const r=await run({},()=>{throw Error('unexpected network')});
 assert.equal(r.status,503);assert.match(r.headers.get('cache-control'),/no-store/);
});
test('untrusted or missing Supabase project scope fails closed',async()=>{
 const r=await run({...env,FATHER_V6_SUPABASE_URL:'https://evil.example.org'},()=>{throw Error('unexpected network')});
 assert.equal(r.status,503);
});
test('unpublished pointer does not expose edition',async()=>{
 const r=await run(env,async()=>Response.json([]));
 assert.equal(r.status,503);
});
test('manifest host is pinned to dedicated media origin',async()=>{
 let count=0;
 const r=await run(env,async()=>{count++;return Response.json([{...release,manifest_url:'https://evil.example.org/editions/2026-10-20-r01/'+hash+'.json'}]);});
 assert.equal(r.status,503);assert.equal(count,1);
});
test('altered app SHA or card count cannot be published',async()=>{
 const r=await run(env,async()=>Response.json([{...release,app_commit_sha:'d'.repeat(40)}]));
 assert.equal(r.status,503);
});
test('manifest bytes with wrong SHA-256 are rejected',async()=>{
 let count=0;
 const r=await run(env,async()=>{count++;return count===1?Response.json([release]):new Response('{"editionId":"fake"}');});
 assert.equal(r.status,503);assert.equal(count,2);
});
