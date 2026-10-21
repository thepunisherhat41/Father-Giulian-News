/**
 * Read-only, fail-closed attestation for the three separate v6 PR gates.
 * Passing this is necessary but NOT sufficient for publishing: exact media
 * manifest bytes, trusted Chromium evidence and release pointer still need binding.
 */
const REQUIRED={
 editorial:{name:'Father News V2 Quality Gate',path:'.github/workflows/father-news-quality-gate.yml',jobs:['editorial-build-browser'],artifact:'father-news-v2-mobile-evidence'},
 engine:{name:'Father News 6 Atomic Engine - Isolated Tests',path:'.github/workflows/father-news-v6-engine.yml',jobs:['integrity','postgres-isolation']},
 media:{name:'Father News 6 Immutable Media QA',path:'.github/workflows/father-news-v6-media.yml',jobs:['media'],artifact:'father-v6-raster-ready-staging-only'}
};
const SHA=/^[a-f0-9]{40}$/;
const REPO='thepunisherhat41/Father-Giulian-News';
const deny=(msg)=>{throw new Error('GITHUB_QA_ATTESTATION_FAILED:'+msg)};
export async function verifyGitHubQaRuns({appSha,prNumber,runIds,fetchImpl=globalThis.fetch,token}){
 if(!SHA.test(appSha||''))deny('invalid app SHA');
 if(!Number.isInteger(prNumber)||prNumber<1)deny('invalid PR');
 if(!runIds||Object.keys(REQUIRED).some(k=>!Number.isSafeInteger(runIds[k])||runIds[k]<1))deny('missing workflow runs');
 if(typeof fetchImpl!=='function')deny('missing fetch');
 const root='https://api.github.com/repos/'+REPO;
 const headers={'Accept':'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'};
 if(token)headers.Authorization='Bearer '+token;
 async function api(path){
  const res=await fetchImpl(root+path,{headers,redirect:'error'});
  if(!res||!res.ok)deny('GitHub API unavailable '+path);
  return res.json();
 }
 const evidence={appSha,prNumber,runs:{}};
 for(const [key,rule] of Object.entries(REQUIRED)){
  const id=runIds[key];
  const run=await api('/actions/runs/'+id);
  if(run.id!==id||run.name!==rule.name||run.path!==rule.path)deny(key+' wrong workflow identity');
  if(run.head_sha!==appSha||run.head_repository?.full_name!==REPO)deny(key+' wrong repository or app SHA');
  if(run.event!=='pull_request'||run.status!=='completed'||run.conclusion!=='success')deny(key+' run not successful PR');
  if(!run.pull_requests?.some(p=>p.number===prNumber&&p.head?.sha===appSha&&p.base?.ref==='main'))deny(key+' PR binding mismatch');
  const jobs=await api('/actions/runs/'+id+'/jobs?per_page=100');
  if(!Array.isArray(jobs.jobs)||jobs.total_count!==jobs.jobs.length||jobs.jobs.length<rule.jobs.length)deny(key+' incomplete jobs');
  if(jobs.jobs.some(j=>j.status!=='completed'||j.conclusion!=='success'))deny(key+' failed job');
  for(const required of rule.jobs){
   if(!jobs.jobs.some(j=>j.name===required&&j.head_sha===appSha))deny(key+' missing required successful job '+required);
  }
  if(rule.artifact){
   const artifacts=await api('/actions/runs/'+id+'/artifacts?per_page=100');
   if(!Array.isArray(artifacts.artifacts)||artifacts.total_count!==artifacts.artifacts.length)deny(key+' incomplete artifact listing');
   if(!artifacts.artifacts.some(a=>a.name===rule.artifact&&!a.expired&&a.size_in_bytes>0))deny(key+' required evidence artifact absent');
  }
  evidence.runs[key]={runId:id,workflow:rule.name,headSha:appSha,runAttempt:run.run_attempt,conclusion:'success'};
 }
 return Object.freeze(evidence);
}
