import test from 'node:test';
import assert from 'node:assert/strict';
import {sha256,validateEdition,verifyManifestBytes,validateReleaseAttestation} from '../lib/father-v6/engine.mjs';
import {AtomicEditionRegistry} from '../lib/father-v6/registry.mjs';
const day='2026-10-21';
function registry(){return new AtomicEditionRegistry({verifyExternalQa:r=>r.gitHubConclusion==='success',readMediaBytes:(id,media,edition)=>Buffer.from('media-'+Number(id.slice(1))+'-'+edition.revision)});}
const sections=['Papo de hoje','Desafio do casal','Curiosidades · Ciência','Curiosidades · Espaço','Curiosidades · Natureza','Gravidez','Ser Pai','Brasil','Mundo','Política','Tempo','Corinthians','Viagens','Música','Sertanejo da Roça','Games','Tecnologia','Finanças','Security Briefing','Cyber','AppSec','Carros até R$70 mil','Motos','Mecânica'];
function fixture(revision=1){
 const cards=sections.map((section,i)=>{
  const news=['Brasil','Mundo','Política','Tempo','Corinthians','Finanças'].includes(section);
  const id='c'+i;
  return {id,section,order:i+1,kind:news?'FATO':'GUIA',title:'Um título editorial verificável número '+i,summary:'Um resumo editorial com informação suficiente e contexto verificável para o leitor '+i,details:['Primeiro detalhe da notícia ou guia.','Segundo detalhe adicional e verificável.'],eventDate:news?day:null,reportedAt:null,sources:news?[{title:'Fonte oficial',url:'https://www.tse.jus.br/',publishedAt:day+'T09:00:00-03:00'}]:[],mediaId:'m'+i,conceptId:id+'-concept-v'+revision,visualConceptId:id+'-visual-v'+revision};
 });
 const mediaCatalog=Object.fromEntries(cards.map((card,i)=>[card.mediaId,{kind:'art',url:'https://cdn.example.org/editions/'+day+'-r0'+revision+'/'+card.mediaId+'.webp',sha256:sha256('media-'+i+'-'+revision),mimeType:'image/webp',alt:'Arte específica mostrando um assunto editorial.',credit:'Equipe editorial',width:720,height:1280}]));
 return {schemaVersion:6,editionId:day+'-r0'+revision,editionDate:day,timezone:'America/Sao_Paulo',revision,generatedAt:day+'T09:00:00-03:00',cards,mediaCatalog,omissions:[{section:'Zona Leste',reason:'Sem notícia local inédita confirmada para esta data'}]};
}
function release(manifest,appSha='a'.repeat(40)){
 return {releaseId:manifest.editionId,editionDate:manifest.editionDate,manifestSha256:sha256(Buffer.from(JSON.stringify(manifest))),qaManifestSha256:sha256(Buffer.from(JSON.stringify(manifest))),appCommitSha:appSha,qaRunUrl:'https://github.com/example/repo/actions/runs/123',qaVerifiedAt:'2026-10-21T10:00:00-03:00',gitHubConclusion:'success',cardCount:manifest.cards.length,status:'VALIDATED'};
}
test('full valid candidate manifest',()=>{const r=validateEdition(fixture());assert.equal(r.ok,true,JSON.stringify(r.errors));assert.equal(r.cardCount,24);});
test('missing media blocks publishing',()=>{const m=fixture();delete m.mediaCatalog['m3'];assert.equal(validateEdition(m).ok,false);});
test('duplicate card blocks publishing',()=>{const m=fixture();m.cards[1].id=m.cards[0].id;assert.equal(validateEdition(m).ok,false);});
test('broken editorial order blocks',()=>{const m=fixture();m.cards[3].section='Brasil';assert.equal(validateEdition(m).ok,false);});
test('historical event cannot be presented as fresh fact',()=>{const m=fixture();m.cards[7].eventDate='2026-10-20';assert.equal(validateEdition(m).ok,false);m.cards[7].kind='ATUALIZAÇÃO';m.cards[7].reportedAt=day+'T10:00:00-03:00';assert.equal(validateEdition(m).ok,true);});
test('wrong media shape / external resources block',()=>{const m=fixture();m.mediaCatalog.m1.width=720;m.mediaCatalog.m1.height=720;assert.equal(validateEdition(m).ok,false);m.mediaCatalog.m1.height=1280;m.mediaCatalog.m1.url='http://127.0.0.1/private';assert.equal(validateEdition(m).ok,false);});
test('creative collision with seven prior editions is blocked',()=>{const m=fixture();const prev=fixture(2);prev.cards[0].conceptId=m.cards[0].conceptId;prev.editionDate='2026-10-20';assert.equal(validateEdition(m,{previousEdits:[prev]}).ok,false);});
test('exact byte SHA binds candidate to validated preview',()=>{const m=fixture();const bytes=Buffer.from(JSON.stringify(m));assert.equal(verifyManifestBytes(bytes,sha256(bytes)).edition.editionId,m.editionId);assert.throws(()=>verifyManifestBytes(Buffer.from(' '+bytes),sha256(bytes)),/MANIFEST_SHA_MISMATCH/);});
test('attestation rejects unverified workflow / changed app SHA',()=>{const r=release(fixture());assert.equal(validateReleaseAttestation(r),true);r.gitHubConclusion='failure';assert.throws(()=>validateReleaseAttestation(r),/GITHUB_QA_NOT_GREEN/);});
test('candidate stays invisible until explicit promotion',()=>{const s=registry();const m=fixture();s.stage(m,release(m));assert.equal(s.current(),null);const x=s.promote({releaseId:m.editionId,expectedGeneration:0,actor:'qa-bot',attestedAppSha:'a'.repeat(40)});assert.equal(x.generation,1);assert.equal(s.current().edition.editionId,m.editionId);});
test('CAS prevents concurrent stale release promotion',()=>{const s=registry();const a=fixture(1),b=fixture(2);s.stage(a,release(a));s.stage(b,release(b));s.promote({releaseId:a.editionId,expectedGeneration:0,actor:'bot1',attestedAppSha:'a'.repeat(40)});assert.throws(()=>s.promote({releaseId:b.editionId,expectedGeneration:0,actor:'bot2',attestedAppSha:'a'.repeat(40)}),/GENERATION_CONFLICT/);assert.equal(s.current().edition.editionId,a.editionId);});
test('same release is idempotent only when expected generation matches',()=>{const s=registry();const m=fixture();s.stage(m,release(m));s.promote({releaseId:m.editionId,expectedGeneration:0,actor:'bot1',attestedAppSha:'a'.repeat(40)});assert.equal(s.promote({releaseId:m.editionId,expectedGeneration:1,actor:'bot1',attestedAppSha:'a'.repeat(40)}).generation,1);assert.throws(()=>s.promote({releaseId:m.editionId,expectedGeneration:0,actor:'bot1',attestedAppSha:'a'.repeat(40)}),/GENERATION_CONFLICT/);});
test('rollback changes pointer only, preserves immutable manifests and audit',()=>{const s=registry();const a=fixture(1),b=fixture(2);s.stage(a,release(a));s.stage(b,release(b));s.promote({releaseId:a.editionId,expectedGeneration:0,actor:'bot',attestedAppSha:'a'.repeat(40)});s.promote({releaseId:b.editionId,expectedGeneration:1,actor:'bot',attestedAppSha:'a'.repeat(40)});s.promote({releaseId:a.editionId,expectedGeneration:2,actor:'bot',attestedAppSha:'a'.repeat(40),action:'ROLLBACK'});assert.equal(s.current().edition.editionId,a.editionId);assert.equal(s.audit.length,3);assert.equal(s.releases.size,2);});
test('QA sha must match stored manifest; tampering refuses promotion',()=>{const s=registry();const m=fixture(),r=release(m);r.qaManifestSha256='f'.repeat(64);assert.throws(()=>s.stage(m,r),/QA_MANIFEST_SHA_MISMATCH/);});
test('validated app SHA must match the tested app version',()=>{const s=registry();const m=fixture();s.stage(m,release(m));assert.throws(()=>s.promote({releaseId:m.editionId,expectedGeneration:0,actor:'bot',attestedAppSha:'b'.repeat(40)}),/APP_SHA_MISMATCH/);});


test('refuse staging with no independent QA or media byte verifier',()=>{
 const m=fixture(),r=release(m);
 assert.throws(()=>new AtomicEditionRegistry().stage(m,r),/EXTERNAL_QA_NOT_VERIFIED/);
 assert.throws(()=>new AtomicEditionRegistry({verifyExternalQa:()=>true}).stage(m,r),/MEDIA_BYTES_NOT_VERIFIED/);
});
test('tampered asset bytes block a candidate before promotion',()=>{
 const m=fixture(),r=release(m);
 const s=new AtomicEditionRegistry({verifyExternalQa:()=>true,readMediaBytes:()=>Buffer.from('wrong')});
 assert.throws(()=>s.stage(m,r),/MEDIA_SHA_MISMATCH/);
 assert.equal(s.current(),null);
});
test('reject private host and non-content-addressed media URLs',()=>{
 const m=fixture();
 m.mediaCatalog.m1.url='https://127.0.0.1/'+m.editionId+'/m1.webp';
 assert.equal(validateEdition(m).ok,false);
 m.mediaCatalog.m1.url='https://cdn.example.org/latest/photo.webp';
 assert.equal(validateEdition(m).ok,false);
});
test('malformed omission data fails validation without throwing',()=>{
 const m=fixture();m.omissions='not-array';
 assert.equal(validateEdition(m).ok,false);
});
