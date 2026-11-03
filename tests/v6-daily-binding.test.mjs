import test from 'node:test';
import assert from 'node:assert/strict';
import {validateBinding} from '../scripts/v6-resolve-daily-candidate.mjs';
const day='2026-10-31';
const current=Buffer.from(JSON.stringify({editionDate:day,timezone:'America/Sao_Paulo',releaseId:day+'-r01',cards:Array.from({length:25},(_,i)=>({id:'c'+i}))}));
const photos=Buffer.from(JSON.stringify(Object.fromEntries(Array.from({length:12},(_,i)=>['c'+i,{credit:'licensed'}]))));
test('matching current date, 25 cards, 12 photo sources and immutable bound bytes',()=>{assert.equal(validateBinding(current,current,photos,photos,day).releaseId,day+'-r01')});
test('reject stale date even with perfectly matching staging bytes',()=>assert.throws(()=>validateBinding(current,current,photos,photos,'2026-11-01'),/stale/));
test('reject modified candidate bytes and photo catalogue',()=>{
 const changed=Buffer.from(current.toString().replace('c0','changed'));
 assert.throws(()=>validateBinding(current,changed,photos,photos,day),/differs/);
 assert.throws(()=>validateBinding(current,current,photos,Buffer.from('{}'),day),/differs/);
});
test('reject edition release id inconsistent with date',()=>{
 const invalid=Buffer.from(current.toString().replace(day+'-r01','2026-10-30-r01'));
 assert.throws(()=>validateBinding(invalid,invalid,photos,photos,day),/invalid release/);
});
