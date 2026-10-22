import test from 'node:test';
import assert from 'node:assert/strict';
import {observeFatherNewsDomain} from '../scripts/v6-domain-observation.mjs';
const id='2026-10-21-r01',sha='a'.repeat(64);
const html=(mode='v5',extra='')=>`<!doctype html><html><body><main data-ui-theme="father-native-${mode}" data-edition-date="2026-10-21" data-edition-cards="25" ${extra}></main></body></html>`;
const page=(s=html(),status=200)=>new Response(s,{status,headers:{'Content-Type':'text/html; charset=utf-8'}});
const api=(body,headers={})=>Response.json(body,{headers:{'Cache-Control':'no-store',...headers}});
const fixture=(res)=>async(url,options)=>{
 assert.equal(options.method,'GET');assert.equal(options.redirect,'error');assert.equal(options.cache,'no-store');
 assert.match(url,/^https:\/\/father-giulian-news-livid\.vercel\.app\//);
 return typeof res==='function'?res(url):res;
};
const body={releaseId:id,manifestSha256:sha,generation:4,edition:{editionId:id,editionDate:'2026-10-21',cards:Array.from({length:25},(_,i)=>({id:String(i)}))}};
test('v5 read-only baseline is explicitly not v6 release evidence',async()=>{
 const r=await observeFatherNewsDomain({fetchImpl:fixture(page())});
 assert.equal(r.cardCount,25);assert.equal(r.mode,'v5');assert.equal(r.releaseVerified,false);
});
test('non-200, redirect, wrong MIME and wrong DOM theme fail closed',async()=>{
 for(const response of [page('not found',404),new Response('',{status:302,headers:{Location:'https://evil.example'}}),
  Response.json({ok:true}),page(html('v6')),page(html().replace('data-edition-cards="25"','data-edition-cards="24"'))]){
  await assert.rejects(observeFatherNewsDomain({fetchImpl:fixture(response)}),/FATHER_DOMAIN_OBSERVATION_FAILED/);
 }
});
test('v6 requires explicit immutable release identity, not a v5 green report',async()=>{
 await assert.rejects(observeFatherNewsDomain({mode:'v6',fetchImpl:fixture(page())}),/v6 requires pinned/);
});
test('v6 HTTP/DOM/API binding succeeds as observation only',async()=>{
 const p=page(html('v6',`data-release-id="${id}" data-manifest-sha256="${sha}"`));
 const r=await observeFatherNewsDomain({mode:'v6',expectedReleaseId:id,expectedManifestSha256:sha,expectedGeneration:4,
  fetchImpl:fixture(url=>url.endsWith('/api/edition/current')?api(body):p)});
 assert.equal(r.releaseId,id);assert.equal(r.releaseVerified,false);
});
test('v6 rejects API/DOM disagreement and missing no-store',async()=>{
 const p=page(html('v6',`data-release-id="${id}" data-manifest-sha256="${sha}"`));
 for(const bad of [api({...body,generation:5}),api({...body,manifestSha256:'b'.repeat(64)}),api(body,{'Cache-Control':'public, max-age=60'})]){
  await assert.rejects(observeFatherNewsDomain({mode:'v6',expectedReleaseId:id,expectedManifestSha256:sha,expectedGeneration:4,
   fetchImpl:fixture(url=>url.endsWith('/api/edition/current')?bad:p)}),/FATHER_DOMAIN_OBSERVATION_FAILED/);
 }
 await assert.rejects(observeFatherNewsDomain({mode:'v6',expectedReleaseId:id,expectedManifestSha256:sha,expectedGeneration:4,
  fetchImpl:fixture(url=>url.endsWith('/api/edition/current')?api(body):page(html('v6')))}),/DOM release binding mismatch/);
});
test('oversized HTML is rejected before parsing',async()=>{
 const r=new Response('x',{headers:{'Content-Type':'text/html','Content-Length':String(5*1024*1024)}});
 await assert.rejects(observeFatherNewsDomain({fetchImpl:fixture(r)}),/oversized response/);
});
