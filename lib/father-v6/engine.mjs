import {createHash, timingSafeEqual} from 'node:crypto';
import {isIP} from 'node:net';
import {validateSourceProvenance,validateReportProvenance} from './source-provenance.mjs';

export const ORDER = Object.freeze([
 'Papo de hoje','Desafio do casal','Curiosidades','Gravidez','Ser Pai','Brasil','Mundo',
 'Política','Tempo','Zona Leste','Corinthians','Viagens','Música','Sertanejo da Roça',
 'Games','Tecnologia','Finanças','Security Briefing','Cyber','AppSec',
 'Carros até R$70 mil','Motos','Mecânica'
]);

const KINDS = new Set([
 'FATO','AGENDA','PESQUISA','DECLARAÇÃO','APURAÇÃO/REPORTAGEM','ATUALIZAÇÃO','RUMOR',
 'PREVISÃO','GUIA','CURIOSIDADE','ATIVIDADE'
]);
const NEWS_KINDS=new Set(['FATO','AGENDA','PESQUISA','DECLARAÇÃO','APURAÇÃO/REPORTAGEM','ATUALIZAÇÃO','RUMOR','PREVISÃO']);
const forbidden=/\b(n[aá]utica|sprite(?:-news)?\.jpg|clean-covers\.jpg|placeholder|rom[aâ]ntic[oa] artificial)\b/i;
const DATE=/^\d{4}-\d{2}-\d{2}$/;
const SHA=/^[a-f0-9]{64}$/;
const HEX40=/^[a-f0-9]{40}$/;
const MEDIA_TYPES={image:new Set(['image/jpeg','image/png','image/webp','image/avif']),art:new Set(['image/jpeg','image/png','image/webp','image/avif']),video:new Set(['video/mp4','video/webm'])};

export const sha256=(bytes)=>createHash('sha256').update(bytes).digest('hex');
const isDate=(x)=>typeof x==='string'&&DATE.test(x)&&!Number.isNaN(Date.parse(x+'T00:00:00Z'))&&new Date(x+'T00:00:00Z').toISOString().slice(0,10)===x;
const isIso=(x)=>typeof x==='string'&&Number.isFinite(Date.parse(x));
const isHttps=(str)=>{
 try{
  const u=new URL(str);
  const host=u.hostname.toLowerCase().replace(/[\[\]]/g,'');
  return u.protocol==='https:' && !u.username && !u.password && !u.hash && !u.port
   && !isIP(host) && host!=='localhost' && !host.endsWith('.localhost')
   && !host.endsWith('.internal') && host.includes('.');
 }catch{return false;}
};
const sectionIndex=(x)=>ORDER.findIndex(s=>s===x||(s==='Curiosidades'&&x.startsWith('Curiosidades ·')));

export function validateEdition(edition,opts={}){
 const errors=[];
 const err=(path,msg)=>errors.push({path,message:msg});
 const obj=edition&&typeof edition==='object'&&!Array.isArray(edition)?edition:{};
 if(obj.schemaVersion!==6)err('schemaVersion','schema version must equal 6');
 if(!/^\d{4}-\d{2}-\d{2}-r\d{2,}$/.test(obj.editionId||''))err('editionId','invalid release id');
 if(!isDate(obj.editionDate))err('editionDate','invalid date');
 if(obj.timezone!=='America/Sao_Paulo')err('timezone','must be America/Sao_Paulo');
 if(!Number.isInteger(obj.revision)||obj.revision<1)err('revision','positive integer required');
 if(!isIso(obj.generatedAt))err('generatedAt','ISO timestamp required');
 if(obj.editionId && isDate(obj.editionDate) && !obj.editionId.startsWith(obj.editionDate+'-r'))err('editionId','date must match edition date');
 if(!Array.isArray(obj.cards)||obj.cards.length<1)err('cards','nonempty card list required');
 if(!obj.mediaCatalog||typeof obj.mediaCatalog!=='object'||Array.isArray(obj.mediaCatalog))err('mediaCatalog','media catalog required');
 if(!Array.isArray(obj.omissions))err('omissions','omissions array required');
 const ids=new Set(),concepts=new Set(),visuals=new Set(),mediaUsed=new Set();let last=-1;
 for(const [idx,c] of (Array.isArray(obj.cards)?obj.cards:[]).entries()){
  const p='cards['+idx+']';
  if(!c||typeof c!=='object'){err(p,'card must be an object');continue;}
  if(!/^[a-z0-9][a-z0-9-]{0,63}$/.test(c.id||''))err(p+'.id','invalid card id');
  if(ids.has(c.id))err(p+'.id','duplicate');ids.add(c.id);
  const sec=typeof c.section==='string'?c.section:'';
  const order=sectionIndex(sec);
  if(order<0||order<last)err(p+'.section','invalid editorial sequence');
  last=order;
  if(c.order!==idx+1)err(p+'.order','must be contiguous and match placement');
  if(!KINDS.has(c.kind))err(p+'.kind','invalid editorial label');
  if(typeof c.title!=='string'||c.title.trim().length<16)err(p+'.title','title too short');
  if(typeof c.summary!=='string'||c.summary.trim().length<40)err(p+'.summary','summary too short');
  if(!Array.isArray(c.details)||c.details.length<2||c.details.some(t=>!t||typeof t!=='string'))err(p+'.details','at least two meaningful details');
  if(forbidden.test(JSON.stringify(c)))err(p,'forbidden subject/fallback');
  if(!c.mediaId||typeof c.mediaId!=='string')err(p+'.mediaId','media reference required');
  else mediaUsed.add(c.mediaId);
  if(!Array.isArray(c.sources))err(p+'.sources','sources required');
  if(NEWS_KINDS.has(c.kind)){
   if(!isDate(c.eventDate))err(p+'.eventDate','news requires actual event date');
   if(!Array.isArray(c.sources)||c.sources.length===0)err(p+'.sources','news requires verifiable source');
   // Historical event is never disguised as today. A dated report is allowed.
   if(c.eventDate!==obj.editionDate && !['ATUALIZAÇÃO','APURAÇÃO/REPORTAGEM'].includes(c.kind))
    err(p+'.eventDate','historic event must be clearly labeled as update/report');
   if(c.eventDate!==obj.editionDate && validateReportProvenance(c,{historical:true,editionDate:obj.editionDate}).length>0)
    err(p+'.reportedAt','dated report required for historical event');
  }
  for(const issue of validateReportProvenance(c,{editionDate:obj.editionDate}))err(p+'.reportedAt',issue);
  for(const [j,s] of (Array.isArray(c.sources)?c.sources:[]).entries()){
   if(!s||!isHttps(s.url)||validateSourceProvenance(s,{news:NEWS_KINDS.has(c.kind),editionDate:obj.editionDate}).length>0||!s.title)err(p+'.sources['+j+']','HTTPS source, title and publication timestamp required');
  }
  if(['Papo de hoje','Desafio do casal'].includes(sec)||sec.startsWith('Curiosidades ·')){
   if(typeof c.conceptId!=='string'||!c.conceptId.trim())err(p+'.conceptId','creative fingerprint required');
   if(typeof c.visualConceptId!=='string'||!c.visualConceptId.trim())err(p+'.visualConceptId','visual fingerprint required');
   if(concepts.has(c.conceptId))err(p+'.conceptId','duplicate fingerprint');
   if(visuals.has(c.visualConceptId))err(p+'.visualConceptId','duplicate visual fingerprint');
   concepts.add(c.conceptId);visuals.add(c.visualConceptId);
  }
  if(sec==='Carros até R$70 mil' && /R\$\s*(?:8\d|9\d|1\d\d)\s*mil/i.test(JSON.stringify(c)))
   err(p,'vehicle price above R$70,000');
 }
 for(const sec of ['Papo de hoje','Desafio do casal','Gravidez','Ser Pai','Brasil','Mundo','Política','Tempo','Corinthians','Finanças','Security Briefing','Cyber','AppSec','Carros até R$70 mil','Motos','Mecânica']){
  if(![...ids].length || !(obj.cards||[]).some(c=>c?.section===sec))err('cards','mandatory section missing: '+sec);
 }
 if(!(obj.cards||[]).some(c=>c?.section?.startsWith('Curiosidades ·')))err('cards','curiosities by type required');
 for(const [id,media] of Object.entries(obj.mediaCatalog||{})){
  const p='mediaCatalog.'+id;
  if(!media||!MEDIA_TYPES[media.kind]?.has(media.mimeType))err(p+'.mimeType','media type and MIME mismatch');
  if(!isHttps(media?.url))err(p+'.url','public HTTPS URL required (no private hosts or ports)');
  else if(obj.editionId&&!media.url.includes(obj.editionId)&&!media.url.includes((media.sha256||'').slice(0,20)))err(p+'.url','URL must embed release ID or content digest');
  if(!SHA.test(media?.sha256||''))err(p+'.sha256','sha256 required');
  if(!media?.alt||String(media.alt).length<12)err(p+'.alt','meaningful alternate text required');
  if(!media?.credit||String(media.credit).length<3)err(p+'.credit','copyright attribution required');
  if(forbidden.test(media?.url||''))err(p+'.url','forbidden media path');
  if(media.kind==='art'&&(!Number.isInteger(media.width)||!Number.isInteger(media.height)||Math.abs((media.width/media.height)-(9/16))>0.06))err(p+'.dimensions','art must approximate 9:16');
 }
 for(const id of mediaUsed)if(!obj.mediaCatalog?.[id])err('mediaCatalog.'+id,'visible card missing media');
 if(obj.cards?.length && (obj.cards[0]?.section!=='Papo de hoje'||obj.cards[1]?.section!=='Desafio do casal'))
  err('cards','opening editorial order incorrect');
 const omit=new Set();
 for(const [i,reason] of (Array.isArray(obj.omissions)?obj.omissions:[]).entries()){
  if(!reason?.section||!reason?.reason||String(reason.reason).length<10)err('omissions['+i+']','explain every omitted section');
  if(omit.has(reason.section))err('omissions['+i+']','duplicate omission');
  omit.add(reason.section);
 }
 for(const sec of ORDER.filter(x=>x!=='Curiosidades'))if(!obj.cards?.some(c=>c?.section===sec)&&!omit.has(sec))err('omissions','missing reason for '+sec);
 if(opts.previousEdits){
  const previous=opts.previousEdits.filter(x=>x.editionDate!==obj.editionDate).slice(-7);
  for(const old of previous){
   for(const c of obj.cards||[]){
    if(!(c.section==='Papo de hoje'||c.section==='Desafio do casal'||c.section?.startsWith('Curiosidades ·')))continue;
    for(const p of old.cards||[]){
     if((c.conceptId&&c.conceptId===p.conceptId)||(c.visualConceptId&&c.visualConceptId===p.visualConceptId)|| (c.title&&c.title.toLowerCase()===p.title?.toLowerCase()))
      err('cards.'+c.id,'creative repeat within previous seven editions');
    }
   }
  }
 }
 return {ok:errors.length===0,errors,cardCount:obj.cards?.length||0,mediaCount:Object.keys(obj.mediaCatalog||{}).length};
}
export function safeHexEqual(a,b){
 if(typeof a!=='string'||typeof b!=='string'||!SHA.test(a)||!SHA.test(b))return false;
 return timingSafeEqual(Buffer.from(a,'hex'),Buffer.from(b,'hex'));
}
export function verifyManifestBytes(bytes,expectedSha){
 const body=Buffer.isBuffer(bytes)?bytes:Buffer.from(bytes);
 if(body.length===0||body.length>2_000_000)throw Error('MANIFEST_SIZE_INVALID');
 if(!safeHexEqual(sha256(body),expectedSha))throw Error('MANIFEST_SHA_MISMATCH');
 let edition;try{edition=JSON.parse(body.toString('utf8'));}catch{throw Error('MANIFEST_INVALID_JSON');}
 const report=validateEdition(edition);
 if(!report.ok)throw Error('MANIFEST_INVALID: '+report.errors.map(e=>e.path).join(','));
 return {edition,report,sha256:expectedSha};
}
export function validateReleaseAttestation(release){
 if(!release||release.status!=='VALIDATED')throw Error('RELEASE_NOT_VALIDATED');
 if(!SHA.test(release.manifestSha256||'')||!safeHexEqual(release.qaManifestSha256,release.manifestSha256))throw Error('QA_MANIFEST_SHA_MISMATCH');
 if(!HEX40.test(release.appCommitSha||''))throw Error('APP_SHA_INVALID');
 if(!Number.isInteger(release.cardCount)||release.cardCount<1)throw Error('CARD_COUNT_INVALID');
 if(!/^https:\/\/github\.com\//.test(release.qaRunUrl||''))throw Error('QA_URL_INVALID');
 if(!isIso(release.qaVerifiedAt))throw Error('QA_TIMESTAMP_INVALID');
 if(release.gitHubConclusion!=='success')throw Error('GITHUB_QA_NOT_GREEN');
 return true;
}

