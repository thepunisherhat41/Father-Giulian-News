import { readFileSync, existsSync } from 'node:fs';

const requiredFiles = [
  'components/EditorialQualityGuard.tsx','app/editorial-quality.css','lib/editorial-clarity-overrides.ts','components/LocalSecurityHubCurrent.tsx','components/LocalSecurityPortal.tsx','lib/local-security-current.ts','lib/local-east-news-current.ts','components/VehicleComparisonHub.tsx','lib/vehicle-media.ts','components/PoliticalCandidateAnalysisPortal.tsx','components/PregnancyPostpartumGuide.tsx','components/EditorialDeepReadPortal.tsx','components/EditorialFreshnessPortal.tsx','lib/editorial-freshness-current.ts','app/mobile-v10.css',
];
const failures = [];
for (const file of requiredFiles) if (!existsSync(file)) failures.push(`Arquivo obrigatório ausente: ${file}`);
const text = (file) => existsSync(file) ? readFileSync(file,'utf8') : '';

const checks = [
  { file:'components/LocalSecurityHubCurrent.tsx', forbidden:['<span>ZE</span>','<b>RADAR</b>','NEWS://ZONA-LESTE','NEWS://RECENT'], reason:'Zona Leste deve usar linguagem clara.' },
  { file:'components/VehicleComparisonHub.tsx', forbidden:['GARAGE RADAR','MOTO RADAR','>1.0 · ≤70K'], reason:'Comparadores não devem usar rótulos ambíguos.' },
  { file:'components/Switch2Radar.tsx', forbidden:['<h4>Switch 2 Radar</h4>','◌ NO RADAR','COMO LER O RADAR'], reason:'Nintendo Switch 2 deve usar linguagem explícita.' },
  { file:'lib/current-rich-media.ts', forbidden:['intradayRichMedia20260819'], reason:'Mídia atual não pode depender do catálogo intradiário antigo.' },
];
for (const check of checks) for (const token of check.forbidden) if (text(check.file).includes(token)) failures.push(`${check.file}: rótulo/estado proibido “${token}”. ${check.reason}`);

const categories = text('lib/categories.ts');
if (!categories.includes("import './daily-overrides-2026-08-21';")) failures.push('lib/categories.ts: edição de 21/08 não está carregada como override atual.');
if (categories.includes("subcategories: ['Lançamentos', 'PS5 Radar'")) failures.push('lib/categories.ts: não reintroduzir “PS5 Radar”.');

const portal = text('components/LocalSecurityPortal.tsx');
if (!portal.includes("title === 'Zona Leste em Foco'")) failures.push('LocalSecurityPortal: o hub precisa montar com o título atual “Zona Leste em Foco”.');
if (!portal.includes('./LocalSecurityHubCurrent')) failures.push('LocalSecurityPortal: o hub precisa usar o feed atual da Zona Leste.');

const localCurrent = text('lib/local-security-current.ts');
for (const token of ['21 AGO 2026','aricanduva-homicidio-20ago','ponte-rasa-oficina-20ago','sao-mateus-motorista-refem-19ago']) if (!localCurrent.includes(token)) failures.push(`lib/local-security-current.ts: feed recente incompleto; ausente “${token}”.`);
const localEast = text('lib/local-east-news-current.ts');
for (const token of ['21 AGO 2026','Corinthians vence Rosario Central','Córrego Rio Verde','vacinação contra sarampo']) if (!localEast.includes(token)) failures.push(`lib/local-east-news-current.ts: pauta regional atual incompleta; ausente “${token}”.`);

const postpartum = text('components/PregnancyPostpartumGuide.tsx');
for (const token of ['PUERPÉRIO · PLANO DO PARCEIRO','CDC · Hear Her','WHO · Positive postnatal experience']) if (!postpartum.includes(token)) failures.push(`PregnancyPostpartumGuide: conteúdo obrigatório ausente “${token}”.`);

const vehicleMedia = text('lib/vehicle-media.ts');
if (!vehicleMedia.includes("'cruze-lt-auto-2014'") || !vehicleMedia.includes("'nc750x-2016'")) failures.push('lib/vehicle-media.ts: catálogo precisa cobrir carros e motos atuais.');

const mobile = text('app/mobile-v10.css');
for (const token of ['grid-template-columns:minmax(0,1fr)!important','flex-direction:column!important','.zlCurrentNewsGrid']) if (!mobile.includes(token)) failures.push(`app/mobile-v10.css: hardening mobile incompleto; ausente “${token}”.`);
const layout = text('app/layout.tsx');
if (!layout.includes("import './mobile-v10.css';")) failures.push('app/layout.tsx: mobile-v10.css precisa estar carregado.');
const cssImports = [...layout.matchAll(/import '\.\/(.+\.css)';/g)].map((m) => m[1]);
if (cssImports.at(-1) !== 'mobile-v10.css') failures.push(`app/layout.tsx: mobile-v10.css deve ser o último CSS; último atual: ${cssImports.at(-1) ?? 'nenhum'}.`);

const freshness = text('lib/editorial-freshness-current.ts');
if (freshness) {
  const parts = new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
  const byType = Object.fromEntries(parts.map((part) => [part.type,part.value]));
  const today = `${byType.year}-${byType.month}-${byType.day}`;
  const declared = freshness.match(/editorialFreshnessDate\s*=\s*['"]([^'"]+)['"]/)?.[1];
  if (declared !== today) failures.push(`Auditoria editorial diária desatualizada: esperado ${today}, encontrado ${declared ?? 'sem data'}.`);
  const requiredSlugs = ['brasil','seguranca-zl','politica','mundo','planeta','animais','tempo','curiosidades','musica','games','gravidez','pai','carros','motos','mecanica','nautica','viagens','financas','tecnologia','security-briefing','seguranca','appsec-ssdlc'];
  for (const slug of requiredSlugs) {
    const re = new RegExp(`slug\\s*:\\s*['"]${slug}['"]`);
    if (!re.test(freshness)) failures.push(`Auditoria editorial diária incompleta: aba ${slug} não foi validada.`);
  }
  const entryCount = (freshness.match(/\{\s*slug\s*:\s*['"]/g) ?? []).length;
  if (entryCount !== 22) failures.push(`Auditoria editorial diária deve conter exatamente 22 áreas; encontrado ${entryCount}.`);
}

if (failures.length) {
  console.error('\nEDITORIAL QUALITY GATE: FALHOU\n');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('EDITORIAL QUALITY GATE: OK');
