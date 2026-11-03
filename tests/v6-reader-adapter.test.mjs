import test from 'node:test';
import assert from 'node:assert/strict';
import {adaptPublishedEdition} from '../lib/father-v6/reader-adapter.ts';
const release='2026-10-22-r01', digest='a'.repeat(64);
const sections=['Papo de hoje','Desafio do casal','Curiosidades · Ciência','Curiosidades · Espaço','Curiosidades · Natureza','Curiosidades · História','Gravidez','Ser Pai','Brasil','Mundo','Política','Tempo','Corinthians','Viagens','Música','Sertanejo da Roça','Games','Tecnologia','Finanças','Security Briefing','Cyber','AppSec','Carros até R$70 mil','Motos','Mecânica'];
function fixture(){
 const cards=sections.map((section,i)=>({id:'card-'+i,section,order:i+1,
 kind:i===8?'FATO':i===9?'ATUALIZAÇÃO':'GUIA',title:'A headline about topic '+i,summary:'A summary about validated release and scoped media '+i,
 details:['Evidence paragraph one','Evidence paragraph two'],eventDate:i===9?'2026-10-21':'2026-10-22',reportedAt:i===9?'2026-10-22T11:00:00-03:00':null,
 sources:i===8||i===9?[{title:'Example Official Report',url:'https://example.org/source',publishedAt:'2026-10-22T11:00:00-03:00'}]:[],
 mediaId:'media-'+i,conceptId:'idea-'+i,visualConceptId:'visual-'+i}));
 const mediaCatalog=Object.fromEntries(cards.map((c,i)=>{
 const sha=i.toString(16).padStart(64,'0');return [c.mediaId,{kind:i%2?'image':'art',url:'https://cdn.example.org/editions/'+release+'/objects/'+sha+'.png',sha256:sha,mimeType:'image/png',alt:'Illustration for '+c.section,credit:'Editorial desk'}];
 }));
 return {releaseId:release,generation:1,manifestSha256:digest,edition:{schemaVersion:6,editionId:release,editionDate:'2026-10-22',timezone:'America/Sao_Paulo',generatedAt:'2026-10-22T11:30:00-03:00',cards,mediaCatalog}};
}
test('25/25 cards and object-scoped media are kept in original editorial order',()=>{
 const x=adaptPublishedEdition(fixture());
 assert.equal(x.edition.cards.length,25);assert.equal(Object.keys(x.media).length,25);
 assert.equal(x.edition.cards[0].group,'Papo de hoje');assert.equal(x.edition.cards[24].group,'Mecânica');
 assert.equal(x.edition.cards[8].news,true);assert.equal(x.edition.cards[9].reportedAt,'2026-10-22');
 assert.equal(x.edition.cards[0].layout,'quest');assert.equal(x.edition.cards[2].layout,'discover');
 assert.equal(x.edition.cards[8].sources[0].url,'https://example.org/source');
});
test('refuses mixed edition release ID and malformed published generation',()=>{
 const x=fixture();x.edition.editionId='2026-10-20-r01';
 assert.throws(()=>adaptPublishedEdition(x),/UNTRUSTED/);
 const y=fixture();y.generation=0;assert.throws(()=>adaptPublishedEdition(y),/UNTRUSTED/);
});
test('refuses missing and duplicate media, never substitutes old edition image',()=>{
 const x=fixture();delete x.edition.mediaCatalog['media-0'];
 assert.throws(()=>adaptPublishedEdition(x),/INVALID_EDITION_SHAPE/);
 const y=fixture();y.edition.mediaCatalog['media-2'].sha256=y.edition.mediaCatalog['media-1'].sha256;
 assert.throws(()=>adaptPublishedEdition(y),/INVALID_STORY_MEDIA/);
});
test('refuses object from previous release',()=>{
 const x=fixture();
 x.edition.mediaCatalog['media-4'].url=x.edition.mediaCatalog['media-4'].url.replace('2026-10-22','2026-10-20');
 assert.throws(()=>adaptPublishedEdition(x),/UNVERIFIED_MEDIA_PATH/);
});
test('refuses unsafe non-HTTPS and digest mismatched media URL',()=>{
 const x=fixture();x.edition.mediaCatalog['media-0'].url='http://example.org/editions/'+release+'/objects/'+'0'.repeat(64)+'.png';
 assert.throws(()=>adaptPublishedEdition(x),/UNVERIFIED_MEDIA_PATH/);
});

