import { readFileSync, existsSync } from 'node:fs';

const failures = [];
const text = (file) => existsSync(file) ? readFileSync(file, 'utf8') : '';
const requireFile = (file) => { if (!existsSync(file)) failures.push(`Arquivo obrigatório ausente: ${file}`); };

[
  'app/layout.tsx',
  'components/ReelsExperienceLive.tsx',
  'components/ReelsExperienceV26.tsx',
  'components/ReelsExperience.module.css',
  'lib/editorial-freshness-current.ts',
  'lib/current-rich-media.ts',
  'lib/current-reel-patches-2026-08-27-0944.ts',
  'app/mobile-v10.css',
  'vercel.json'
].forEach(requireFile);

const layout = text('app/layout.tsx');
if (!layout.includes('ReelsExperienceLive')) failures.push('app/layout.tsx: ReelsExperienceLive precisa estar montado.');
if (!layout.includes("import './mobile-v10.css';")) failures.push('app/layout.tsx: mobile-v10.css precisa estar carregado.');
if (layout.includes('PolicyConversationPortal') || layout.includes('SecurityBriefingPortal') || layout.includes('{children}')) failures.push('app/layout.tsx: camada editorial legada não pode coexistir com a experiência Reels em produção.');
const cssImports = [...layout.matchAll(/import '\.\/(.+\.css)';/g)].map((m) => m[1]);
if (cssImports.at(-1) !== 'mobile-v10.css') failures.push(`app/layout.tsx: mobile-v10.css deve ser o último CSS; último atual: ${cssImports.at(-1) ?? 'nenhum'}.`);

const live = text('components/ReelsExperienceLive.tsx');
if (!live.includes('ReelsExperienceV26')) failures.push('ReelsExperienceLive: engine V26 precisa estar ativo.');
if (!live.includes('applyCurrentReelPatches20260827_0944')) failures.push('ReelsExperienceLive: patch verificado mais recente de 27/08 não está aplicado.');
const patchPos = live.lastIndexOf('applyCurrentReelPatches20260827_0944(dailyContent)');
const olderPos = live.lastIndexOf('applyCurrentReelPatches20260827_0835(dailyContent)');
if (patchPos < olderPos) failures.push('ReelsExperienceLive: patch mais recente precisa ser aplicado por último.');

const reels = text('components/ReelsExperienceV26.tsx');
if (/['"]nautica['"]/.test(reels) || /Náutica/i.test(reels)) failures.push('ReelsExperienceV26: Náutica foi removida e não pode reaparecer.');
for (const slug of ['gravidez','pai','brasil','mundo','politica','tempo','seguranca-zl','corinthians','viagens','musica','games','tecnologia','financas','security-briefing','seguranca','appsec-ssdlc','carros','motos','mecanica']) {
  if (!reels.includes(`'${slug}'`)) failures.push(`ReelsExperienceV26: área esperada não referenciada: ${slug}.`);
}
for (const token of ['Papo de hoje','Desafio do casal','curiosityReels','America/Sao_Paulo']) {
  if (!reels.includes(token)) failures.push(`ReelsExperienceV26: lógica diária incompleta; ausente “${token}”.`);
}
if (!reels.includes("CURRENT.date")) failures.push('ReelsExperienceV26: conteúdo diário precisa usar a data corrente de São Paulo.');
if (!reels.includes('freshnessForSlug')) failures.push('ReelsExperienceV26: Reels jornalísticos precisam respeitar o gate de atualidade.');
if (!reels.includes("state!=='ATUALIZADO'")) failures.push('ReelsExperienceV26: jornalismo sem ATUALIZADO deve ser omitido.');
if (!reels.includes('if(!reel?.image)return undefined')) failures.push('ReelsExperienceV26: Reel jornalístico sem mídia validada deve ser omitido.');

const freshness = text('lib/editorial-freshness-current.ts');
const parts = new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
const byType = Object.fromEntries(parts.map((part) => [part.type,part.value]));
const today = `${byType.year}-${byType.month}-${byType.day}`;
const declared = freshness.match(/editorialFreshnessDate\s*=\s*['"]([^'"]+)['"]/)?.[1];
if (declared !== today) failures.push(`Auditoria editorial diária desatualizada: esperado ${today}, encontrado ${declared ?? 'sem data'}.`);
const requiredSlugs = ['brasil','seguranca-zl','politica','mundo','planeta','animais','tempo','curiosidades','musica','games','gravidez','pai','carros','motos','mecanica','viagens','financas','tecnologia','security-briefing','seguranca','appsec-ssdlc'];
for (const slug of requiredSlugs) if (!new RegExp(`slug\\s*:\\s*['"]${slug}['"]`).test(freshness)) failures.push(`Auditoria editorial diária incompleta: aba ${slug} não foi validada.`);
const entryCount = (freshness.match(/\{\s*slug\s*:\s*['"]/g) ?? []).length;
if (entryCount !== 21) failures.push(`Auditoria editorial diária deve conter exatamente 21 áreas; encontrado ${entryCount}.`);
if (/slug\s*:\s*['"]nautica['"]/.test(freshness)) failures.push('Auditoria editorial diária contém Náutica, área removida.');
if (!/slug:'security-briefing', state:'VALIDADO'/.test(freshness)) failures.push('Security Briefing não verificável deve permanecer fora do feed jornalístico nesta revisão.');

const appsecPatch = text('lib/current-reel-patches-2026-08-27-0944.ts');
for (const token of ['ATUALIZAÇÃO · 27/08','descoberta original é anterior','Avada 7.16.1','Fusion Builder 3.16.1']) {
  if (!appsecPatch.includes(token)) failures.push(`Patch AppSec 09h44 incompleto; ausente “${token}”.`);
}

const vercel = text('vercel.json');
if (!vercel.includes('"deploymentEnabled": false')) failures.push('vercel.json: deploy automático por Git deve permanecer desabilitado; publicação é independente após o gate.');

const mobile = text('app/mobile-v10.css');
if (!mobile) failures.push('app/mobile-v10.css: hardening mobile ausente.');

if (failures.length) {
  console.error('\nEDITORIAL QUALITY GATE: FALHOU\n');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('EDITORIAL QUALITY GATE: OK');
