import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {GET} from '../app/api/edition/current/route.js';
const keys=['FATHER_V6_ENABLED','FATHER_V6_PROJECT_REF','FATHER_V6_SUPABASE_URL','FATHER_V6_SUPABASE_ANON_KEY','FATHER_V6_APP_SHA','FATHER_V6_MEDIA_ORIGIN'];
const ref='a'.repeat(20),app='b'.repeat(40),hash='c'.repeat(64);
const env={FATHER_V6_ENABLED:'true',FATHER_V6_PROJECT_REF:ref,FATHER_V6_SUPABASE_URL:'https://'+ref+'.supabase.co',FATHER_V6_SUPABASE_ANON_KEY:'public-anon-test-key-long-enough',FATHER_V6_APP_SHA:app,FATHER_V6_MEDIA_ORIGIN:'https://media.example.org'};
const release={release_id:'2026-10-20-r01',generation:1,manifest_sha256:hash,app_commit_sha:app,card_count:25,manifest_url:'https://media.example.org/editions/2026-10-20-r01/manifest-'+hash+'.json'};
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

const sections=[
 'Papo de hoje','Desafio do casal','Curiosidades · Ciência','Curiosidades · Espaço',
 'Curiosidades · Natureza','Curiosidades · História','Gravidez','Ser Pai','Brasil',
 'Mundo','Política','Tempo','Corinthians','Viagens','Música','Sertanejo da Roça',
 'Games','Tecnologia','Finanças','Security Briefing','Cyber','AppSec',
 'Carros até R$70 mil','Motos','Mecânica'
];
const digest=bytes=>createHash('sha256').update(bytes).digest('hex');
function completeEdition(){
 const cards=sections.map((section,i)=>{
  const news=['Brasil','Mundo','Política','Tempo','Corinthians','Finanças'].includes(section);
  return {
   id:'card-'+i,section,order:i+1,kind:news?'FATO':'GUIA',
   title:'Título de teste da seção editorial número '+i,
   summary:'Resumo sintético de teste com contexto editorial suficiente para o leitor '+i,
   details:['Detalhe sintético número um.','Detalhe sintético número dois.'],
   eventDate:news?'2026-10-20':null,reportedAt:null,
   sources:news?[{title:'Fonte sintética de teste',url:'https://example.org/source',publishedOn:'2026-10-20'}]:[],
   mediaId:'media-'+i,conceptId:'concept-'+i,visualConceptId:'visual-'+i
  };
 });
 const mediaCatalog=Object.fromEntries(cards.map((card,i)=>{
  const sha=digest('asset-'+i);
  return [card.mediaId,{kind:'art',url:'https://media.example.org/editions/2026-10-20-r01/objects/'+sha+'.png',
   sha256:sha,mimeType:'image/png',alt:'Arte editorial sintética de teste número '+i,
   credit:'Test fixture only',width:720,height:1280}];
 }));
 return {schemaVersion:6,editionId:'2026-10-20-r01',editionDate:'2026-10-20',
  timezone:'America/Sao_Paulo',revision:1,generatedAt:'2026-10-20T10:00:00-03:00',
  cards,mediaCatalog,omissions:[{section:'Zona Leste',reason:'Sem notícia local confirmada para este teste'}]};
}
async function readSignedEdition(edition,options={}){
 const bytes=Buffer.from(JSON.stringify(edition));
 const sha=digest(bytes);
 const row={...release,manifest_sha256:sha,manifest_url:'https://media.example.org/editions/2026-10-20-r01/manifest-'+sha+'.json'};
 let requests=0;
 const result=await run(env,async()=>{
  requests++;
  if(requests===1)return Response.json([row]);
  return new Response(options.manifestBytes||bytes);
 });
 return {result,requests,sha};
}
test('read-only API returns one pinned 25-card edition with immutable media and manifest SHA',async()=>{
 const {result,requests,sha}=await readSignedEdition(completeEdition());
 assert.equal(requests,2);
 assert.equal(result.status,200);
 const body=await result.json();
 assert.equal(body.releaseId,'2026-10-20-r01');
 assert.equal(body.generation,1);
 assert.equal(body.manifestSha256,sha);
 assert.equal(body.edition.cards.length,25);
 assert.equal(new Set(body.edition.cards.map(card=>card.mediaId)).size,25);
 assert.match(result.headers.get('cache-control'),/no-store/);
});
test('valid signed manifest with foreign media origin is still denied',async()=>{
 const edition=completeEdition();
 edition.mediaCatalog['media-0'].url=edition.mediaCatalog['media-0'].url.replace('media.example.org','attacker.example.org');
 const {result}=await readSignedEdition(edition);
 assert.equal(result.status,503);
});
test('valid signed manifest with duplicated asset bytes is denied',async()=>{
 const edition=completeEdition();
 const source=edition.mediaCatalog['media-0'];
 const target=edition.mediaCatalog['media-1'];
 target.sha256=source.sha256;
 target.url=source.url;
 const {result}=await readSignedEdition(edition);
 assert.equal(result.status,503);
});
test('oversized streamed manifest is denied without unbounded buffering',async()=>{
 const edition=completeEdition();
 const {result}=await readSignedEdition(edition,{manifestBytes:Buffer.alloc(1024*1024+1,32)});
 assert.equal(result.status,503);
});
test('manifest URL with only a digest prefix cannot impersonate an immutable object',async()=>{
 const edition=completeEdition();
 const bytes=Buffer.from(JSON.stringify(edition));
 const sha=digest(bytes);
 const row={...release,manifest_sha256:sha,manifest_url:'https://media.example.org/editions/2026-10-20-r01/manifests/'+sha.slice(0,20)+'.json'};
 let requests=0;
 const result=await run(env,async()=>{requests++;return Response.json([row]);});
 assert.equal(result.status,503);
 assert.equal(requests,1);
});

test('Supabase dedicated public bucket supports exact release and object hash paths',async()=>{
 const scoped='https://'+ref+'.supabase.co/storage/v1/object/public/father-news-v6-media';
 const edition=completeEdition();
 for(const entry of Object.values(edition.mediaCatalog))
  entry.url=scoped+new URL(entry.url).pathname;
 const bytes=Buffer.from(JSON.stringify(edition)),sha=digest(bytes);
 const row={...release,manifest_sha256:sha,manifest_url:scoped+'/editions/2026-10-20-r01/manifest-'+sha+'.json'};
 const vars={...env,FATHER_V6_MEDIA_ORIGIN:scoped};
 let count=0;
 const result=await run(vars,async()=>++count===1?Response.json([row]):new Response(bytes));
 assert.equal(result.status,200);assert.equal(count,2);
});
test('Supabase bucket manifest outside its isolated storage prefix is refused',async()=>{
 const scoped='https://'+ref+'.supabase.co/storage/v1/object/public/father-news-v6-media';
 const vars={...env,FATHER_V6_MEDIA_ORIGIN:scoped};
 let count=0;
 const result=await run(vars,async()=>{count++;return Response.json([{...release,manifest_url:'https://'+ref+'.supabase.co/editions/2026-10-20-r01/'+hash+'/edition.json'}]);});
 assert.equal(result.status,503);assert.equal(count,1);
});
