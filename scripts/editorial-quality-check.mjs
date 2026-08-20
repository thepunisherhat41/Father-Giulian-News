import { readFileSync, existsSync } from 'node:fs';

const requiredFiles = [
  'components/EditorialQualityGuard.tsx',
  'app/editorial-quality.css',
  'lib/editorial-clarity-overrides.ts',
  'components/LocalSecurityHub.tsx',
  'components/LocalEastMediaEnhancer.tsx',
  'lib/local-east-news.ts',
  'components/VehicleComparisonHub.tsx',
  'lib/vehicle-media.ts',
  'components/PoliticalCandidateAnalysisPortal.tsx',
  'components/PregnancyPostpartumGuide.tsx',
  'lib/daily-rich-media-2026-08-20.ts',
  'lib/editorial-inline-media-2026-08-20.ts',
  'components/EditorialDeepReadPortal.tsx',
  'lib/editorial-deep-read-2026-08-20.ts',
];

const failures = [];

for (const file of requiredFiles) {
  if (!existsSync(file)) failures.push(`Arquivo obrigatório ausente: ${file}`);
}

const checks = [
  {
    file: 'components/LocalSecurityHub.tsx',
    forbidden: ['<span>ZE</span>', '<b>RADAR</b>', 'NEWS://ZONA-LESTE', 'NEWS://RECENT', 'EDITORIAL RULE'],
    reason: 'Segurança ZL deve usar ZL e linguagem editorial explícita.',
  },
  {
    file: 'components/VehicleComparisonHub.tsx',
    forbidden: ['GARAGE RADAR', 'MOTO RADAR', '>1.0 · ≤70K'],
    reason: 'Comparadores de veículos não devem usar badges/rótulos ambíguos.',
  },
  {
    file: 'components/Switch2Radar.tsx',
    forbidden: ['<h4>Switch 2 Radar</h4>', '◌ NO RADAR', 'COMO LER O RADAR'],
    reason: 'Nintendo Switch 2 deve usar linguagem de acompanhamento explícita.',
  },
  {
    file: 'lib/current-rich-media.ts',
    forbidden: ['intradayRichMedia20260819'],
    reason: 'O resolvedor de mídia atual não pode voltar a depender do catálogo intradiário de 19/08.',
  },
];

for (const check of checks) {
  if (!existsSync(check.file)) continue;
  const content = readFileSync(check.file, 'utf8');
  for (const token of check.forbidden) {
    if (content.includes(token)) failures.push(`${check.file}: rótulo/estado proibido “${token}”. ${check.reason}`);
  }
}

const categories = existsSync('lib/categories.ts') ? readFileSync('lib/categories.ts', 'utf8') : '';
if (categories && categories.includes("subcategories: ['Lançamentos', 'PS5 Radar'")) {
  failures.push('lib/categories.ts: navegação de Games não deve reintroduzir “PS5 Radar”.');
}

const currentMedia = existsSync('lib/current-rich-media.ts') ? readFileSync('lib/current-rich-media.ts', 'utf8') : '';
if (currentMedia && !currentMedia.includes('dailyRichMedia20260820')) {
  failures.push('lib/current-rich-media.ts: o catálogo da edição atual de 20/08 precisa ser prioridade.');
}

const localEast = existsSync('lib/local-east-news.ts') ? readFileSync('lib/local-east-news.ts', 'utf8') : '';
if (localEast) {
  for (const token of ['details:', 'whyItMatters:', 'sourceKind:', 'media?: LocalEastMedia']) {
    if (!localEast.includes(token)) failures.push(`lib/local-east-news.ts: padrão rico incompleto; ausente “${token}”.`);
  }
}

const postpartum = existsSync('components/PregnancyPostpartumGuide.tsx') ? readFileSync('components/PregnancyPostpartumGuide.tsx', 'utf8') : '';
if (postpartum) {
  for (const token of ['PUERPÉRIO · PLANO DO PARCEIRO', 'CDC · Hear Her', 'WHO · Positive postnatal experience']) {
    if (!postpartum.includes(token)) failures.push(`PregnancyPostpartumGuide: conteúdo obrigatório ausente “${token}”.`);
  }
}

const vehicleMedia = existsSync('lib/vehicle-media.ts') ? readFileSync('lib/vehicle-media.ts', 'utf8') : '';
if (vehicleMedia && !vehicleMedia.includes("'cruze-lt-auto-2014'") || vehicleMedia && !vehicleMedia.includes("'nc750x-2016'")) {
  failures.push('lib/vehicle-media.ts: catálogo precisa cobrir carros e motos da edição atual.');
}

if (failures.length) {
  console.error('\nEDITORIAL QUALITY GATE: FALHOU\n');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('EDITORIAL QUALITY GATE: OK');
