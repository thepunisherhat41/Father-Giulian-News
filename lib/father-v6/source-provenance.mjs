// Source provenance must never invent a publication timestamp.
const DATE=/^\d{4}-\d{2}-\d{2}$/;
const INSTANT=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
export const realDate=x=>typeof x==='string'&&DATE.test(x)&&Number.isFinite(Date.parse(x+'T00:00:00Z'))&&new Date(x+'T00:00:00Z').toISOString().slice(0,10)===x;
export const realInstant=x=>typeof x==='string'&&INSTANT.test(x)&&Number.isFinite(Date.parse(x));
export function validateSourceProvenance(source,{news=false,editionDate}={}){
 const errors=[];
 if(!source||typeof source!=='object'||Array.isArray(source))return ['source must be an object'];
 const fields=['publishedAt','publishedOn','undatedReason'].filter(k=>source[k]!==null&&source[k]!==undefined);
 if(fields.length!==1)return ['exactly one of publishedAt, publishedOn, undatedReason is required'];
 if(fields[0]==='publishedAt'&&!realInstant(source.publishedAt))errors.push('publishedAt must be a real offset-aware timestamp');
 if(fields[0]==='publishedOn'&&!realDate(source.publishedOn))errors.push('publishedOn must be a real calendar date');
 if(fields[0]==='undatedReason'){
  if(typeof source.undatedReason!=='string'||source.undatedReason.trim().length<12)errors.push('undatedReason must explain missing publication date');
  if(news)errors.push('news source must be dated');
 }
 const date=source.publishedOn||(typeof source.publishedAt==='string'?source.publishedAt.slice(0,10):null);
 if(date&&realDate(date)&&realDate(editionDate)&&date>editionDate)errors.push('source cannot postdate edition');
 return errors;
}
export function validateReportProvenance(card,{historical=false,editionDate}={}){
 const errors=[];
 const at=card.reportedAt!==null&&card.reportedAt!==undefined;
 const on=card.reportedOn!==null&&card.reportedOn!==undefined;
 if(at&&on)errors.push('reportedAt and reportedOn are mutually exclusive');
 if(at&&!realInstant(card.reportedAt))errors.push('reportedAt requires actual offset-aware timestamp');
 if(on&&!realDate(card.reportedOn))errors.push('reportedOn requires actual calendar date');
 if(historical&&!at&&!on)errors.push('historical report requires real reportedAt or reportedOn');
 const date=on?card.reportedOn:(at?card.reportedAt.slice(0,10):null);
 if(date&&realDate(date)&&realDate(editionDate)&&date>editionDate)errors.push('report cannot postdate edition');
 return errors;
}
