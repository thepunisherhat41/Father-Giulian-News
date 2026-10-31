#!/usr/bin/env node
// Fail-closed binding of daily files and release identity; safe for untrusted PR data.
import {readFileSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const fail=m=>{throw Error('FATHER_V6_DAILY_BINDING_FAILED: '+m)};
const digest=x=>createHash('sha256').update(x).digest('hex');
const parse=x=>JSON.parse(x.toString('utf8'));
const parts=Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()).map(p=>[p.type,p.value]));
const today=[parts.year,parts.month,parts.day].join('-');
export function validateBinding(currentBytes,candidateBytes,rootMediaBytes,candidateMediaBytes,day){
 const edition=parse(currentBytes),candidate=parse(candidateBytes),photos=parse(rootMediaBytes);
 if(!/^20\d{2}-\d{2}-\d{2}$/.test(edition.editionDate||'')||edition.timezone!=='America/Sao_Paulo'||edition.editionDate!==day)fail('stale, malformed or wrong-timezone edition');
 const releaseId=edition.releaseId||edition.editionDate+'-r01';
 if(!new RegExp('^'+edition.editionDate+'-r\\d{2,}$').test(releaseId))fail('invalid release binding');
 if(digest(currentBytes)!==digest(candidateBytes)||digest(rootMediaBytes)!==digest(candidateMediaBytes))fail('candidate differs from checked-in current edition or photo catalog');
 if(candidate.editionDate!==edition.editionDate||!Array.isArray(edition.cards)||edition.cards.length!==25||Object.keys(photos).length!==12)fail('daily 25/12 cardinality mismatch');
 return {date:edition.editionDate,releaseId};
}
if(process.argv[1] && import.meta.url===new URL('file://'+process.argv[1]).href){
 try{
  const current=readFileSync('data/current-edition.json');const parsed=parse(current);
  const date=parsed.editionDate;
  if(!/^20\d{2}-\d{2}-\d{2}$/.test(date||''))fail('unsafe date');
  const cand='data/candidates/'+date+'/edition-v2.json',cat='data/candidates/'+date+'/media-'+date+'.json',root='data/media-'+date+'.json';
  const result=validateBinding(current,readFileSync(cand),readFileSync(root),readFileSync(cat),today);
  if(process.env.GITHUB_ENV)appendFileSync(process.env.GITHUB_ENV,[
   'FATHER_V6_EDITION_DATE='+result.date,'FATHER_V6_RELEASE_ID='+result.releaseId,
   'FATHER_V6_CANDIDATE_EDITION='+cand,'FATHER_V6_CANDIDATE_MEDIA='+cat,
   'FATHER_V6_ROOT_MEDIA='+root].join('\n')+'\n');
  console.log(JSON.stringify({status:'FRESH_DAILY_BINDING',...result,editionSha256:digest(current),photoCatalogSha256:digest(readFileSync(root))}));
 }catch(e){console.error(String(e));process.exitCode=1;}
}
