import test from 'node:test';
import assert from 'node:assert/strict';
import {verifyEditionMediaBinding} from '../lib/father-v6/manifest-binding.mjs';
const id='2026-10-21-r01',origin='https://father-media.example.org';
function fixture(){
 const cards=[],mediaCatalog={};
 for(let i=0;i<25;i++){
  const mediaId='card-'+i,sha=i.toString(16).padStart(64,'0');
  cards.push({id:mediaId,mediaId});
  mediaCatalog[mediaId]={sha256:sha,mimeType:'image/webp',kind:'image',url:origin+'/editions/'+id+'/objects/'+sha+'.webp'};
 }
 return {editionId:id,cards,mediaCatalog};
}
const verify=(edition,opts={})=>verifyEditionMediaBinding(edition,{releaseId:id,mediaOrigin:origin,...opts});
test('25 distinct cards bind to 25 full-SHA immutable scoped URLs',()=>{
 assert.equal(verify(fixture()).distinctObjects,25);
});
test('alternate assets directory is supported',()=>{
 const x=fixture(),c=x.mediaCatalog['card-0'];c.url=c.url.replace('/objects/','/assets/');
 assert.equal(verify(x).cardCount,25);
});
test('wrong release and wrong origin fail closed',()=>{
 const x=fixture();x.mediaCatalog['card-0'].url=x.mediaCatalog['card-0'].url.replace(id,'2026-10-20-r01');
 assert.throws(()=>verify(x),/noncanonical immutable media path/);
 const y=fixture();y.mediaCatalog['card-0'].url=y.mediaCatalog['card-0'].url.replace(origin,'https://elsewhere.example.org');
 assert.throws(()=>verify(y),/untrusted media URL/);
});
test('partial digest, unsigned query and MIME mismatch fail closed',()=>{
 const x=fixture();x.mediaCatalog['card-0'].url=x.mediaCatalog['card-0'].url.replace('.webp','-changed.webp');
 assert.throws(()=>verify(x),/noncanonical immutable media path/);
 const y=fixture();y.mediaCatalog['card-0'].url+='?mutable=1';
 assert.throws(()=>verify(y),/untrusted media URL/);
 const z=fixture();z.mediaCatalog['card-0'].mimeType='image/png';
 assert.throws(()=>verify(z),/noncanonical immutable media path/);
});
test('SVG artwork is not allowed until offline rasterization',()=>{
 const x=fixture();x.mediaCatalog['card-0'].mimeType='image/svg+xml';
 assert.throws(()=>verify(x),/unapproved MIME/);
});
test('missing, extra, reused and duplicate media fail closed',()=>{
 const x=fixture();delete x.mediaCatalog['card-0'];assert.throws(()=>verify(x),/catalog must match/);
 const y=fixture();y.cards[0].mediaId='card-1';assert.throws(()=>verify(y),/distinct media ID/);
 const z=fixture();z.mediaCatalog.extra={...z.mediaCatalog['card-0']};assert.throws(()=>verify(z),/catalog must match/);
 const w=fixture();w.mediaCatalog['card-1']={...w.mediaCatalog['card-0']};
 assert.throws(()=>verify(w),/duplicate media bytes/);
});
test('wrong card count and mismatched release fail closed',()=>{
 const x=fixture();x.cards.pop();assert.throws(()=>verify(x),/card count mismatch/);
 assert.throws(()=>verify(fixture(),{releaseId:'2026-10-22-r01'}),/release ID mismatch/);
});
test('encoded path tricks and invalid origin fail closed',()=>{
 const x=fixture();x.mediaCatalog['card-0'].url=origin+'/editions/'+id+'/objects/%2e%2e/'+x.mediaCatalog['card-0'].sha256+'.webp';
 assert.throws(()=>verify(x),/noncanonical immutable media path/);
 assert.throws(()=>verify(fixture(),{mediaOrigin:'http://father-media.example.org'}),/invalid media origin/);
});
