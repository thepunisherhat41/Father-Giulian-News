import test from 'node:test';
import assert from 'node:assert/strict';
import {verifyGitHubQaRuns} from '../lib/father-v6/github-attestation.mjs';
const SHA='a'.repeat(40), PR=255;
const IDS={editorial:101,engine:102,media:103};
const NAMES={
 101:['Father News V2 Quality Gate','.github/workflows/father-news-quality-gate.yml',['editorial-build-browser'],'father-news-v2-mobile-evidence'],
 102:['Father News 6 Atomic Engine - Isolated Tests','.github/workflows/father-news-v6-engine.yml',['integrity','postgres-isolation'],null],
 103:['Father News 6 Immutable Media QA','.github/workflows/father-news-v6-media.yml',['media'],'father-v6-raster-ready-staging-only']
};
function fixtures(){
 const routes={};
 for(const [id,info] of Object.entries(NAMES)){
  const [name,path,jobNames,artifact]=info;
  routes['/actions/runs/'+id]={id:Number(id),name,path,head_sha:SHA,head_repository:{full_name:'thepunisherhat41/Father-Giulian-News'},event:'pull_request',status:'completed',conclusion:'success',run_attempt:1,pull_requests:[{number:PR,head:{sha:SHA},base:{ref:'main'}}]};
  routes['/actions/runs/'+id+'/jobs?per_page=100']={total_count:jobNames.length,jobs:jobNames.map((n,i)=>({id:i,name:n,status:'completed',conclusion:'success',head_sha:SHA}))};
  if(artifact)routes['/actions/runs/'+id+'/artifacts?per_page=100']={total_count:1,artifacts:[{name:artifact,expired:false,size_in_bytes:5000}]};
 }
 return routes;
}
function mock(routes){
 return async url=>{
  const key=new URL(url).pathname.replace('/repos/thepunisherhat41/Father-Giulian-News','')+new URL(url).search;
  return {ok:key in routes,json:async()=>routes[key]};
 };
}
const verify=(routes)=>verifyGitHubQaRuns({appSha:SHA,prNumber:PR,runIds:IDS,fetchImpl:mock(routes)});
test('three exact workflow identities, jobs and artifacts pass',async()=>{
 const x=await verify(fixtures());assert.equal(x.runs.media.headSha,SHA);assert.equal(Object.keys(x.runs).length,3);
});
test('wrong app commit fails closed',async()=>{
 const r=fixtures();r['/actions/runs/103'].head_sha='b'.repeat(40);
 await assert.rejects(verify(r),/wrong repository or app SHA/);
});
test('green run with failed required job is denied',async()=>{
 const r=fixtures();r['/actions/runs/102/jobs?per_page=100'].jobs[1].conclusion='failure';
 await assert.rejects(verify(r),/failed job/);
});
test('wrong PR or base branch cannot attest',async()=>{
 const r=fixtures();r['/actions/runs/101'].pull_requests[0].number=254;
 await assert.rejects(verify(r),/PR binding mismatch/);
});
test('legacy source-only media artifact cannot substitute raster-ready evidence',async()=>{
 const r=fixtures();r['/actions/runs/103/artifacts?per_page=100'].artifacts[0].name='father-v6-media-staging-only';
 await assert.rejects(verify(r),/required evidence artifact absent/);
});
test('missing or expired media artifact cannot attest',async()=>{
 const r=fixtures();r['/actions/runs/103/artifacts?per_page=100'].artifacts[0].expired=true;
 await assert.rejects(verify(r),/required evidence artifact absent/);
});
test('workflow impersonation by name with wrong path denied',async()=>{
 const r=fixtures();r['/actions/runs/103'].path='.github/workflows/fake.yml';
 await assert.rejects(verify(r),/wrong workflow identity/);
});
test('incomplete job pagination and unavailable API fail closed',async()=>{
 const r=fixtures();r['/actions/runs/102/jobs?per_page=100'].total_count=100;
 await assert.rejects(verify(r),/incomplete jobs/);
 delete r['/actions/runs/101'];
 await assert.rejects(verify(r),/GitHub API unavailable/);
});
test('invalid caller inputs cannot attest',async()=>{
 await assert.rejects(verifyGitHubQaRuns({appSha:'bad',prNumber:PR,runIds:IDS,fetchImpl:mock(fixtures())}),/invalid app SHA/);
 await assert.rejects(verifyGitHubQaRuns({appSha:SHA,prNumber:PR,runIds:{},fetchImpl:mock(fixtures())}),/missing workflow runs/);
});
