/** Offline diagnostic only. Assertions require independent verification. */
const sha40=x=>/^[a-f0-9]{40}$/.test(x||'');
const sha64=x=>/^[a-f0-9]{64}$/.test(x||'');
export function assessV6Prepublish(e,{appSha,manifestSha,prNumber=255}={}){
 const blockers=[],check=(ok,code)=>{if(!ok)blockers.push(code)};
 check(sha40(appSha)&&sha64(manifestSha),'INVALID_DIGEST');
 if(!e||typeof e!=='object')return {ready:false,blockers:[...blockers,'NO_EVIDENCE']};
 check(e.pr?.draft===true&&e.pr?.merged===false&&e.pr?.number===prNumber&&e.pr?.headSha===appSha,'STALE_PR');
 check(e.editorial?.sourcesDated===true&&e.editorial?.qualityGateGreen===true,'EDITORIAL');
 check(e.storage?.dedicated===true&&e.storage?.approved===true&&e.storage?.durable===true&&e.storage?.verifiedObjects===25,'STORAGE');
 check(e.database?.dedicated===true&&e.database?.approved===true&&e.database?.rls===true&&e.database?.cas===true,'DATABASE');
 check(e.manifest?.sha256===manifestSha&&e.manifest?.appSha===appSha&&e.manifest?.cardCount===25&&e.manifest?.mediaCount===25&&e.manifest?.objectsVerified===true,'MANIFEST');
 const q=e.chromium,s=q?.screenshots;
 check(q?.appSha===appSha&&q?.manifestSha===manifestSha&&q?.width===390&&q?.height===844&&q?.loadedMedia===25&&q?.jsErrors===0&&q?.overflowCount===0&&q?.verifiedArtifact===true&&Array.isArray(s)&&s.length===25&&s.every((x,i)=>x?.index===i+1&&sha64(x.sha256)),'CHROMIUM');
 check(e.github?.verifiedViaGithubApi===true&&e.github?.headSha===appSha&&e.github?.prNumber===prNumber&&e.github?.allRequiredRunsGreen===true,'GITHUB');
 check(e.preview?.appSha===appSha&&e.preview?.manifestSha===manifestSha&&e.preview?.httpStatus===200&&e.preview?.domCards===25&&e.preview?.verifiedHttpDom===true,'PREVIEW');
 check(e.rollback?.isolatedDrillPassed===true&&e.rollback?.restoredPriorPointer===true&&e.rollback?.auditRecorded===true,'ROLLBACK');
 check(e.production?.version==='v5'&&e.production?.untouched===true,'V5_UNCHANGED');
 return {ready:blockers.length===0,blockers};
}
