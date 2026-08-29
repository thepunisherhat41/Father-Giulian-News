import {readFileSync,existsSync} from 'node:fs';
const markerPath='release-control-20260829.json';
if(!existsSync(markerPath)) throw new Error('Release marker ausente.');
const marker=JSON.parse(readFileSync(markerPath,'utf8'));
if(marker.validatedSourceCommit!=='621dcf995382bf8a9ac2a8e1459fce015f17a6b4') throw new Error('Release source SHA inválido.');
if(marker.releaseDate!=='2026-08-29'||marker.requiredCards!==22||marker.requiredViewport!=='390x844') throw new Error('Release marker incompleto.');
process.env.VERCEL='1';
await import('./editorial-quality-check.mjs');
