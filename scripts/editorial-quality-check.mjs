import {readFileSync,existsSync} from 'node:fs';
const failures=[];
const text=f=>existsSync(f)?readFileSync(f,'utf8'):'';
const req=f=>{if(!existsSync(f))failures.push(`Arquivo obrigatório ausente: ${f}`)};
const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
const p=Object.fromEntries(parts.map(x=>[x.type,x.value]));
const today=`${p.year}-${p.month}-${p.day}`;
const ymd=today.replaceAll('-','');
const mediaFile=`lib/daily-rich-media-${today}.ts`;
const patchFile=`lib/current-reel-patches-${today}.ts`;
const requiredFiles=['app/layout.tsx','app/page.tsx','components/ReelsExperienceLive.tsx','components/ReelsExperienceCurrent.tsx','components/ReelsExperienceV26.tsx','lib/editorial-freshness-current.ts','lib/current-curiosity-rotation.ts','lib/current-rich-media.ts','lib/daily-rich-media-current.ts',mediaFile,patchFile,'tests/mobile-visual-gate.spec.ts','app/mobile-v10.css','vercel.json'];
requiredFiles.forEach(req);

const layout=text('app/layout.tsx');
if(!layout.includes('{children}'))failures.push('Layout: deve renderizar o conteúdo da rota via children.');
if(/ReelsExperienceLive|PolicyConversationPortal|SecurityBriefingPortal/.test(layout))failures.push('Layout: componente editorial não deve ser injetado fora da rota.');

const page=text('app/page.tsx');
if(!page.includes('ReelsExperienceLive'))failures.push('Page: ReelsExperienceLive ausente.');
for(const legacy of ['categoryGroups','applyDailyOverride','nautica','Náutica','magazineShell'])if(page.includes(legacy))failures.push(`Page: camada legada reapareceu (${legacy}).`);

const compat=text('components/ReelsExperienceCurrent.tsx');
if(!compat.includes('ReelsExperienceLive'))failures.push('Compat: wrapper deve delegar ao ReelsExperienceLive.');

const live=text('components/ReelsExperienceLive.tsx');
const fn=`applyCurrentReelPatches${ymd}`;
if(!live.includes(`from '@/lib/current-reel-patches-${today}'`))failures.push(`Live: import do patch ${today} ausente.`);
if(!live.includes(`${fn}(dailyContent)`))failures.push(`Live: patch ${today} não aplicado.`);
const allApply=[...live.matchAll(/applyCurrentReelPatches\w*\(dailyContent\)/g)].map(m=>m[0]);
const finalApply=allApply.at(-1)??'';
if(!finalApply.startsWith(fn))failures.push(`Live: o último patch deve pertencer à data ${today}.`);

const reels=text('components/ReelsExperienceV26.tsx');
if(/['"]nautica['"]/.test(reels)||/Náutica/i.test(reels))failures.push('Náutica foi reintroduzida.');
if(/mensagem romântica|mensagem romantica/i.test(reels))failures.push('Mensagem romântica artificial reapareceu.');
for(const t of ['Papo de hoje','Desafio do casal','curiosityReels','America/Sao_Paulo','CURRENT.date','freshnessForSlug',"state!=='ATUALIZADO'",'if(!reel?.image)return undefined'])if(!reels.includes(t))failures.push(`Reels: regra ausente ${t}`);
for(const f of ['/reel-ai/sprite','sprite.jpg','sprite-news.jpg','clean-covers.jpg','data:image/gif','transparent.gif'])if(reels.includes(f))failures.push(`Fallback proibido: ${f}`);

const curios=text('lib/current-curiosity-rotation.ts');
if(!curios.includes(ymd))failures.push(`Curiosidades: rotação não identificada com ${ymd}.`);
const storyCount=(curios.match(/stories:\[\{id:/g)??[]).length;
if(storyCount<3)failures.push(`Curiosidades: esperado ao menos 3 histórias atuais, encontrado ${storyCount}.`);
for(const stale of ['agua-ferve-vacuo-20260829','dedos-enrugados-20260829','gps-relatividade-20260829','moire-20260829','adaptacao-olfativa-20260829','dns-cache-ttl-20260829'])if(curios.includes(stale))failures.push(`Curiosidades: conteúdo anterior ainda ativo ${stale}.`);

const freshness=text('lib/editorial-freshness-current.ts');
const declared=freshness.match(/editorialFreshnessDate\s*=\s*['"]([^'"]+)['"]/)?.[1];
if(declared!==today)failures.push(`Freshness: esperado ${today}, encontrado ${declared??'sem data'}.`);
const requiredSlugs=['brasil','seguranca-zl','politica','mundo','planeta','animais','tempo','curiosidades','musica','games','gravidez','pai','corinthians','carros','motos','mecanica','viagens','financas','tecnologia','security-briefing','seguranca','appsec-ssdlc'];
for(const s of requiredSlugs)if(!new RegExp(`slug:'${s}'`).test(freshness))failures.push(`Freshness: área ausente ${s}`);
for(const s of ['seguranca-zl','security-briefing','appsec-ssdlc'])if(!new RegExp(`slug:'${s}',state:'VALIDADO'`).test(freshness))failures.push(`Freshness: ${s} deve permanecer VALIDADO quando não há fato novo confirmado.`);
const active=[...freshness.matchAll(/slug:'([^']+)',state:'ATUALIZADO'/g)].map(m=>m[1]);
if(!active.length)failures.push('Freshness: nenhuma área jornalística marcada ATUALIZADO.');

const patchFiles=[patchFile,...[...live.matchAll(new RegExp(`@/lib/(current-reel-patches-${today}[^']*)`,'g'))].map(m=>`lib/${m[1]}.ts`)].filter((v,i,a)=>a.indexOf(v)===i);
const patch=patchFiles.map(text).join('\n');
if(!patch.includes(ymd)&&!patch.includes(today.slice(8,10)+'/'))failures.push(`Patch ${today}: data corrente não evidenciada.`);
for(const staleDate of ['29/08 ·','REVISÃO DA TARDE · 29/08','REVISÃO DE MEIO-DIA · 29/08'])if(patch.includes(staleDate))failures.push(`Patch atual contém marcação vencida: ${staleDate}`);
if(!/R\$70 mil|R\$\s*70\s*mil|70 mil/i.test(freshness+reels+patch))failures.push('Carros: limite de R$70 mil não evidenciado.');

const pointer=text('lib/daily-rich-media-current.ts');
if(!pointer.includes(`./daily-rich-media-${today}`))failures.push('Mídia: ponteiro não aponta para o catálogo de hoje.');
const pointerImports=[...pointer.matchAll(/from ['"]\.\/(daily-rich-media-[^'"]+)['"]/g)].map(m=>m[1]);
for(const imp of pointerImports){if(!imp.startsWith(`daily-rich-media-${today}`))failures.push(`Mídia: catálogo de outra data ativo no ponteiro corrente (${imp}).`);}
const mediaFiles=[mediaFile,...pointerImports.map(i=>`lib/${i}.ts`)].filter((v,i,a)=>a.indexOf(v)===i);
const media=mediaFiles.map(text).join('\n');
for(const f of ['/reel-ai/sprite','sprite.jpg','sprite-news.jpg','clean-covers.jpg','data:image/gif','transparent.gif','Father Giulian News screenshot'])if(media.includes(f))failures.push(`Mídia proibida: ${f}`);
const imageCount=(media.match(/images:\[/g)??[]).length;
if(!imageCount)failures.push('Mídia: nenhuma imagem validada no catálogo corrente.');
if((media.match(/alt:/g)??[]).length<imageCount)failures.push('Mídia: alt text ausente.');
if((media.match(/sourceUrl:/g)??[]).length<imageCount)failures.push('Mídia: sourceUrl ausente.');
const labelBySlug={brasil:'Brasil','seguranca-zl':'Zona Leste em Foco',politica:'Política',mundo:'Mundo',tempo:'Tempo e Clima',games:'Games',corinthians:'Corinthians',financas:'Finanças',tecnologia:'Tecnologia','security-briefing':'Security Briefing',seguranca:'Cyber Security','appsec-ssdlc':'AppSec / SSDLC'};
for(const s of active){const label=labelBySlug[s];if(label&&!media.includes(`label:'${label}'`))failures.push(`Mídia corrente ausente para Reel ATUALIZADO: ${label}`);}
if(!media.includes("label:'Curiosidades'"))failures.push('Mídia corrente: Curiosidades sem mídia própria.');

const rich=text('lib/current-rich-media.ts');
if(!rich.includes('dailyRichMediaCurrent'))failures.push('Mídia: catálogo corrente não é consultado.');
if(!rich.includes("if (canonicalLabel === 'Zona Leste em Foco') return undefined"))failures.push('Zona Leste: hard gate de mídia corrente ausente.');

if(!text('vercel.json').includes('"deploymentEnabled": false')&&process.env.VERCEL!=='1')failures.push('Deploy automático Git deve permanecer desabilitado fora da execução controlada da Vercel.');

if(failures.length){console.error('\nEDITORIAL QUALITY GATE: FALHOU\n');failures.forEach(f=>console.error(`- ${f}`));process.exit(1);}console.log(`EDITORIAL QUALITY GATE: OK · ${today} · ativos: ${active.join(', ')}`);
