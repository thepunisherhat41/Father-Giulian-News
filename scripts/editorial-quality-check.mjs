import { readFileSync, existsSync } from 'node:fs';

const requiredFiles = [
  'components/EditorialQualityGuard.tsx',
  'app/editorial-quality.css',
  'lib/editorial-clarity-overrides.ts',
  'components/LocalSecurityHub.tsx',
  'components/VehicleComparisonHub.tsx',
  'components/PoliticalCandidateAnalysisPortal.tsx',
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
];

for (const check of checks) {
  if (!existsSync(check.file)) continue;
  const content = readFileSync(check.file, 'utf8');
  for (const token of check.forbidden) {
    if (content.includes(token)) failures.push(`${check.file}: rótulo proibido “${token}”. ${check.reason}`);
  }
}

const categories = existsSync('lib/categories.ts') ? readFileSync('lib/categories.ts', 'utf8') : '';
if (categories && categories.includes("subcategories: ['Lançamentos', 'PS5 Radar'")) {
  failures.push('lib/categories.ts: navegação de Games não deve reintroduzir “PS5 Radar”.');
}

if (failures.length) {
  console.error('\nEDITORIAL QUALITY GATE: FALHOU\n');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('EDITORIAL QUALITY GATE: OK');
