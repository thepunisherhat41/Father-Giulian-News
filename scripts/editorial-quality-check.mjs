import { readFileSync, existsSync } from 'node:fs';

const requiredFiles = [
  'components/EditorialQualityGuard.tsx','app/editorial-quality.css','lib/editorial-clarity-overrides.ts','components/LocalSecurityHubCurrent.tsx','components/LocalSecurityPortal.tsx','lib/local-security-current.ts','lib/local-east-news-current.ts','components/VehicleComparisonHub.tsx','lib/vehicle-media.ts','components/PoliticalCandidateAnalysisPortal.tsx','components/PregnancyPostpartumGuide.tsx','components/EditorialDeepReadPortal.tsx','components/EditorialFreshnessPortal.tsx','lib/editorial-freshness-current.ts','lib/daily-rich-media-2026-08-21.ts','lib/editorial-deep-read-2026-08-21.ts','lib/daily-overrides-2026-08-21-depth.ts','components/PolicyConversationPortal.tsx','lib/policy-conversation-current.ts','app/policy-conversation-v11.css','app/policy-conversation-dedupe-v11.css','app/mobile-v10.css',
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
if (!categories.includes("import './daily-overrides-2026-08-21-depth';")) failures.push('lib/categories.ts: aprofundamento de 21/08 precisa ser carregado depois da edição base.');
if (categories.includes("subcategories: ['Lançamentos', 'PS5 Radar'")) failures.push('lib/categories.ts: não reintroduzir “PS5 Radar”.');

const portal = text('components/LocalSecurityPortal.tsx');
if (!portal.includes("title === 'Zona Leste em Foco'")) failures.push('LocalSecurityPortal: o hub precisa montar com o título atual “Zona Leste em Foco”.');
if (!portal.includes('./LocalSecurityHubCurrent')) failures.push('LocalSecurityPortal: o hub precisa usar o feed atual da Zona Leste.');

const localCurrent = text('lib/local-security-current.ts');
for (const token of ['21 AGO 2026','aricanduva-homicidio-20ago','ponte-rasa-oficina-20ago','sao-mateus-motorista-refem-19ago']) if (!localCurrent.includes(token)) failures.push(`lib/local-security-current.ts: feed recente incompleto; ausente “${token}”.`);
const localEast = text('lib/local-east-news-current.ts');
for (const token of ['21 AGO 2026','Corinthians vence Rosario Central','Córrego Rio Verde','vacinação contra sarampo']) if (!localEast.includes(token)) failures.push(`lib/local-east-news-current.ts: pauta regional atual incompleta; ausente “${token}”.`);

const currentMedia = text('lib/current-rich-media.ts');
if (!currentMedia.includes('dailyRichMedia20260821')) failures.push('lib/current-rich-media.ts: catálogo visual de 21/08 precisa ser prioridade.');
const media21 = text('lib/daily-rich-media-2026-08-21.ts');
for (const label of ['Brasil','Zona Leste em Foco','Política','Mundo','Planeta','Mundo Animal','Tempo e Clima','Curiosidades','Música','Games','Gravidez','Ser Pai','Carros','Motos','Mecânica','Náutica','Viagens','Finanças','Tecnologia','Security Briefing','Cyber Security','AppSec / SSDLC']) {
  if (!media21.includes(`reuse('${label}'`)) failures.push(`Mídia 21/08: cobertura ausente para ${label}.`);
}

const deepPortal = text('components/EditorialDeepReadPortal.tsx');
if (!deepPortal.includes('editorial-deep-read-2026-08-21')) failures.push('EditorialDeepReadPortal: leitura ampliada ainda não aponta para a edição de 21/08.');
if (!deepPortal.includes("'brasil'")) failures.push('EditorialDeepReadPortal: Brasil deve evitar a camada genérica quando o Decision Tracker especializado estiver ativo.');
const deep21 = text('lib/editorial-deep-read-2026-08-21.ts');
for (const slug of ['brasil','mundo','planeta','animais','tempo','curiosidades','pai','mecanica','nautica','viagens','financas','tecnologia','seguranca']) {
  if (!new RegExp(`slug\\s*:\\s*['"]${slug}['"]`).test(deep21)) failures.push(`Leitura ampliada 21/08: ausente para ${slug}.`);
}

const policyData = text('lib/policy-conversation-current.ts');
for (const token of ['Fim da escala 6x1: o que realmente foi discutido','voices:','CENÁRIO D','49 votos','ANPT','statusCaveat']) {
  if (!policyData.includes(token)) failures.push(`Policy Decision Tracker: conteúdo obrigatório ausente “${token}”.`);
}
const policyPortal = text('components/PolicyConversationPortal.tsx');
for (const token of ['O que cada lado disse','Quais decisões podem sair','O que observar nos próximos dias','policy-conversation-v11-host']) {
  if (!policyPortal.includes(token)) failures.push(`PolicyConversationPortal: experiência incompleta; ausente “${token}”.`);
}
const depthOverride = text('lib/daily-overrides-2026-08-21-depth.ts');
for (const token of ['O que foi falado no debate','Próximos passos','Decisões possíveis','49 votos']) {
  if (!depthOverride.includes(token)) failures.push(`Aprofundamento Brasil 21/08: ausente “${token}”.`);
}

const postpartum = text('components/PregnancyPostpartumGuide.tsx');
for (const token of ['PUERPÉRIO · PLANO DO PARCEIRO','CDC · Hear Her','WHO · Positive postnatal experience']) if (!postpartum.includes(token)) failures.push(`PregnancyPostpartumGuide: conteúdo obrigatório ausente “${token}”.`);

const vehicleMedia = text('lib/vehicle-media.ts');
if (!vehicleMedia.includes("'cruze-lt-auto-2014'") || !vehicleMedia.includes("'nc750x-2016'")) failures.push('lib/vehicle-media.ts: catálogo precisa cobrir carros e motos atuais.');

const mobile = text('app/mobile-v10.css');
for (const token of ['grid-template-columns:minmax(0,1fr)!important','flex-direction:column!important','.zlCurrentNewsGrid']) if (!mobile.includes(token)) failures.push(`app/mobile-v10.css: hardening mobile incompleto; ausente “${token}”.`);
const layout = text('app/layout.tsx');
if (!layout.includes("import './policy-conversation-v11.css';")) failures.push('app/layout.tsx: CSS do Policy Decision Tracker não está carregado.');
if (!layout.includes("import './policy-conversation-dedupe-v11.css';")) failures.push('app/layout.tsx: dedupe do Policy Decision Tracker não está carregado.');
if (!layout.includes('PolicyConversationPortal')) failures.push('app/layout.tsx: PolicyConversationPortal precisa estar montado globalmente.');
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
  for (const slug of requiredSlugs) if (!new RegExp(`slug\\s*:\\s*['"]${slug}['"]`).test(freshness)) failures.push(`Auditoria editorial diária incompleta: aba ${slug} não foi validada.`);
  const entryCount = (freshness.match(/\{\s*slug\s*:\s*['"]/g) ?? []).length;
  if (entryCount !== 22) failures.push(`Auditoria editorial diária deve conter exatamente 22 áreas; encontrado ${entryCount}.`);
}

if (failures.length) {
  console.error('\nEDITORIAL QUALITY GATE: FALHOU\n');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('EDITORIAL QUALITY GATE: OK');
