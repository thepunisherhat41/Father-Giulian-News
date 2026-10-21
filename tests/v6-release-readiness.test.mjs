import test from 'node:test';
import assert from 'node:assert/strict';
import {assessV6Prepublish} from '../lib/father-v6/release-readiness.mjs';
const appSha='a'.repeat(40),manifestSha='b'.repeat(64);
const opts={appSha,manifestSha,prNumber:255};
function evidence(){
 return {
  pr:{number:255,draft:true,merged:false,headSha:appSha},
  editorial:{sourcesDated:true,qualityGateGreen:true},
  storage:{dedicated:true,approved:true,durable:true,verifiedObjects:25},
  database:{dedicated:true,approved:true,rls:true,cas:true},
  manifest:{sha256:manifestSha,appSha,cardCount:25,mediaCount:25,objectsVerified:true},
  chromium:{appSha,manifestSha,width:390,height:844,loadedMedia:25,jsErrors:0,overflowCount:0,verifiedArtifact:true,
   screenshots:Array.from({length:25},(_,i)=>({index:i+1,sha256:(i+1).toString(16).padStart(64,'0')}))},
  github:{verifiedViaGithubApi:true,headSha:appSha,prNumber:255,allRequiredRunsGreen:true},
  preview:{appSha,manifestSha,httpStatus:200,domCards:25,verifiedHttpDom:true},
  rollback:{isolatedDrillPassed:true,restoredPriorPointer:true,auditRecorded:true},
  production:{version:'v5',untouched:true}
 };
}
const check=e=>assessV6Prepublish(e,opts);
test('synthetic complete checklist passes (not actual release attestation)',()=>assert.equal(check(evidence()).ready,true));
test('missing evidence always fails closed',()=>assert.equal(check({}).ready,false));
test('moved PR SHA, mismatched manifest and stale preview fail',()=>{
 for(const [change,reason] of [
  [e=>{e.pr.headSha='c'.repeat(40)},'STALE_PR'],
  [e=>{e.manifest.sha256='c'.repeat(64)},'MANIFEST'],
  [e=>{e.preview.appSha='c'.repeat(40)},'PREVIEW']]){
  const e=evidence();change(e);assert.ok(check(e).blockers.includes(reason));
 }
});
test('partial or unverified Chromium screenshots cannot pass',()=>{
 for(const change of [e=>e.chromium.screenshots.pop(),e=>e.chromium.screenshots[3].index=2,
  e=>e.chromium.verifiedArtifact=false,e=>e.chromium.loadedMedia=24]){
  const e=evidence();change(e);assert.ok(check(e).blockers.includes('CHROMIUM'));
 }
});
test('unapproved storage, unverified GitHub, missing rollback or modified v5 block',()=>{
 for(const [change,reason] of [
  [e=>{e.storage.approved=false},'STORAGE'],
  [e=>{e.github.verifiedViaGithubApi=false},'GITHUB'],
  [e=>{e.rollback.auditRecorded=false},'ROLLBACK'],
  [e=>{e.production.untouched=false},'V5_UNCHANGED']]){
  const e=evidence();change(e);assert.ok(check(e).blockers.includes(reason));
 }
});
