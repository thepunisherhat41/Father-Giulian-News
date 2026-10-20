import test from 'node:test';
import assert from 'node:assert/strict';
import {realDate,realInstant,validateSourceProvenance,validateReportProvenance} from '../lib/father-v6/source-provenance.mjs';
const editionDate='2026-10-20';
const opts={news:true,editionDate};
test('date-only publishedOn preserves actual precision without a fabricated hour',()=>{
 assert.deepEqual(validateSourceProvenance({publishedOn:editionDate},opts),[]);
});
test('publishedAt requires an actual offset-aware timestamp',()=>{
 assert.equal(realInstant(editionDate),false);
 assert.equal(realInstant('2026-10-20T09:00:00'),false);
 assert.equal(realInstant('2026-10-20T09:00:00-03:00'),true);
 assert.ok(validateSourceProvenance({publishedAt:editionDate},opts).length);
});
test('source precision must be unambiguous',()=>{
 assert.ok(validateSourceProvenance({publishedAt:editionDate+'T09:00:00-03:00',publishedOn:editionDate},opts).length);
 assert.ok(validateSourceProvenance({},opts).length);
 assert.ok(validateSourceProvenance({publishedOn:'2026-10-99'},opts).length);
 assert.ok(validateSourceProvenance({publishedOn:'2026-10-21'},opts).length);
});
test('undated official reference can support a guide but cannot prove news freshness',()=>{
 const source={undatedReason:'Publisher does not display a publication date'};
 assert.deepEqual(validateSourceProvenance(source,{news:false,editionDate}),[]);
 assert.ok(validateSourceProvenance(source,opts).length);
});
test('historical report may use reportedOn when exact clock time is unknown',()=>{
 assert.deepEqual(validateReportProvenance({reportedAt:null,reportedOn:editionDate},{historical:true,editionDate}),[]);
 assert.ok(validateReportProvenance({reportedAt:null},{historical:true,editionDate}).length);
 assert.ok(validateReportProvenance({reportedAt:editionDate},{historical:true,editionDate}).length);
});
test('reportedOn must not conflict with reportedAt, postdate edition or be invalid',()=>{
 assert.ok(validateReportProvenance({reportedOn:editionDate,reportedAt:editionDate+'T09:00:00-03:00'},{editionDate}).length);
 assert.ok(validateReportProvenance({reportedOn:'2026-10-21'},{editionDate}).length);
 assert.equal(realDate('2026-02-30'),false);
});
