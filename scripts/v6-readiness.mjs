import {readFileSync} from 'node:fs';
import {sha256} from '../lib/father-v6/engine.mjs';
// Diagnostic only: NO uploads, NO publish, NO file edits.
const legacy=JSON.parse(readFileSync('data/current-edition.json','utf8'));
const images=JSON.parse(readFileSync('data/media-2026-10-20.json','utf8'));
const cards=legacy.cards||[];
const missing=cards.filter(c=>!images[c.id]).map(c=>c.id);
const legacyImages=Object.keys(images);
const report={
 status:'MIGRATION_NOT_READY',releaseActivated:false,editionDate:legacy.editionDate,
 appEditionSHA:sha256(readFileSync('data/current-edition.json')),
 cards:cards.length,externalImages:legacyImages.length,generatedArtToFreeze:missing.length,
 pending:[
  'Mirror every photo/video with license and verify exact downloaded bytes; avoid remote mutable URLs',
  'Generate and freeze all missing card artwork as immutable 9:16 objects',
  'Validate correct SHA-256/MIME/dimensions for 100% of visible media',
  'Create dedicated Father News Postgres and object storage scope (not shared unrelated project)',
  'Verify external GitHub Actions attestation, app SHA and exact pinned snapshot in real Chromium',
  'Apply audited SQL compare-and-swap migration only after isolated DB integration tests'
 ],
 mediaNeedingSnapshot:missing
};
console.log(JSON.stringify(report,null,2));

