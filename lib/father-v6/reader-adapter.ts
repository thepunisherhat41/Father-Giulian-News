export type StorySource={label:string,url:string,publishedAt?:string};
export type StoryQuiz={question:string,options:string[],answer:number,explanation:string};
export type ReaderCard={id:string;group:string;type:string;title:string;summary:string;details:string[];visual:string;eventDate:string;news:boolean;sources:StorySource[];quiz?:StoryQuiz;layout?:string;questXp?:number;reportedAt?:string};
export type ReaderEdition={editionDate:string;timezone:string;updatedAt:string;cards:ReaderCard[]};
export type ReaderMedia={url:string;source?:string;credit?:string;title?:string;alt?:string;kind:'image'|'art'|'video'};
export type EditionBridge={releaseId:string;generation:number;edition:ReaderEdition;media:Record<string,ReaderMedia>;context:Record<string,string>};
type V6Source={title:string;url:string;publishedAt?:string;publisher?:string};
type V6Media={kind:'image'|'art'|'video';url:string;sha256:string;mimeType:string;alt:string;credit:string;sourceUrl?:string};
type V6Card={id:string;section:string;kind:string;title:string;summary:string;details:string[];eventDate:string|null;reportedAt?:string|null;sources:V6Source[];mediaId:string;layout?:string;questXp?:number;quiz?:StoryQuiz};
type V6Edition={schemaVersion:number;editionId:string;editionDate:string;timezone:string;generatedAt:string;cards:V6Card[];mediaCatalog:Record<string,V6Media>};
type Published={releaseId:string;generation:number;manifestSha256:string;edition:V6Edition};
const HEX=/^[a-f0-9]{64}$/;
const NEWS=new Set(['FATO','AGENDA','PESQUISA','DECLARAÇÃO','APURAÇÃO/REPORTAGEM','ATUALIZAÇÃO','RUMOR','PREVISÃO']);
const layout=(card:V6Card):string=>{
 if(['quest','discover','spotlight','guide'].includes(card.layout||''))return card.layout!;
 if(card.section==='Papo de hoje'||card.section==='Desafio do casal')return 'quest';
 if(card.section.startsWith('Curiosidades'))return 'discover';
 if(NEWS.has(card.kind))return 'spotlight';
 return 'guide';
};
export function adaptPublishedEdition(p:Published):EditionBridge {
 if(!p||!p.edition||p.edition.schemaVersion!==6||p.edition.editionId!==p.releaseId||
 !/^\d{4}-\d{2}-\d{2}-r\d{2,}$/.test(p.releaseId)||!HEX.test(p.manifestSha256||'')||
 !Number.isSafeInteger(p.generation)||p.generation<1)throw new Error('UNTRUSTED_EDITION_RELEASE');
 const e=p.edition;
 if(e.timezone!=='America/Sao_Paulo'||!e.editionId.startsWith(e.editionDate+'-')||
 !Array.isArray(e.cards)||e.cards.length!==25||
 !e.mediaCatalog||typeof e.mediaCatalog!=='object'||Object.keys(e.mediaCatalog).length!==25){
  throw new Error('INVALID_EDITION_SHAPE');
 }
 const media:Record<string,ReaderMedia>={},context:Record<string,string>={},ids=new Set<string>(),digests=new Set<string>();
 const cards:ReaderCard[]=e.cards.map((c,i)=>{
  if(!c?.id||ids.has(c.id)||!c.mediaId||!c.title||!c.summary||!Array.isArray(c.details)||
   !Array.isArray(c.sources)||c.details.length<2)throw new Error('INVALID_STORY_CARD_'+i);
  ids.add(c.id);
  const picture=e.mediaCatalog[c.mediaId];
  if(!picture||!HEX.test(picture.sha256)||digests.has(picture.sha256)||
   !['image','art'].includes(picture.kind)||!picture.credit||!picture.alt)throw new Error('INVALID_STORY_MEDIA_'+i);
  digests.add(picture.sha256);
  const parsed=new URL(picture.url);
  const allowed='/editions/'+p.releaseId+'/objects/'+picture.sha256+'.';
  if(parsed.protocol!=='https:'||!parsed.pathname.includes(allowed)||parsed.search||parsed.hash||
   !/\.(png|jpg|webp|avif|mp4|webm)$/.test(parsed.pathname))throw new Error('UNVERIFIED_MEDIA_PATH_'+i);
  media[c.id]={url:picture.url,source:picture.sourceUrl,credit:picture.credit,title:c.title,alt:picture.alt,kind:picture.kind};
  context[c.id]=c.summary;
  const news=NEWS.has(c.kind);
  return {id:c.id,group:c.section,type:c.kind,title:c.title,summary:c.summary,details:c.details,
   visual:'',eventDate:c.eventDate||e.editionDate,news,
   sources:c.sources.map(s=>({label:s.publisher||s.title,url:s.url,publishedAt:s.publishedAt})),
   layout:layout(c),questXp:c.questXp,...(c.quiz?{quiz:c.quiz}:{}),
   ...(c.reportedAt?{reportedAt:c.reportedAt.slice(0,10)}:{})};
 });
 return {releaseId:p.releaseId,generation:p.generation,edition:{editionDate:e.editionDate,timezone:e.timezone,updatedAt:e.generatedAt,cards},media,context};
}
