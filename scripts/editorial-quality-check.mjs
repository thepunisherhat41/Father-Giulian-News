import { readFileSync, existsSync } from 'node:fs';

const failures=[];
const text=(file)=>existsSync(file)?readFileSync(file,'utf8'):'';
const requireFile=(file)=>{if(!existsSync(file)) failures.push(`Arquivo obrigatório ausente: ${file}`);};
const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
const p=Object.fromEntries(parts.map(x=>[x.type,x.value]));
const today=`${p.year}-${p.month}-${p.day}`;
const ymd=today.replaceAll('-','');
const currentMediaFile=`lib/daily-rich-media-${today}.ts`;
const currentPatchFile=`lib/current-reel-patches-${today}.ts`;

['app/layout.tsx','components/ReelsExperienceLive.tsx','components/ReelsExperienceV26.tsx','components/ReelsExperience.module.css','lib/editorial-freshness-current.ts','lib/current-curiosity-rotation.ts','lib/current-rich-media.ts','lib/daily-rich-media-current.ts',currentMediaFile,currentPatchFile,'app/mobile-v10.css','vercel.json'].forEach(requireFile);

const layout=text('app/layout.tsx');
if(!layout.includes('ReelsExperienceLive')) failures.push('Layout: ReelsExperienceLive não está montado.');
if(layout.includes('PolicyConversationPortal')||layout.includes('SecurityBriefingPortal')||layout.includes('{children}')) failures.push('Layout: camada editorial legada não pode coexistir com Reels.');
if(!layout.includes("import './mobile-v10.css';")) failures.push('Layout: mobile-v10.css ausente.');

const live=text('components/ReelsExperienceLive.tsx');
if(!live.includes('ReelsExperienceV26')) failures.push('Live: engine ReelsExperienceV26 ausente.');
if(!live.includes('applyCurrentReelPatches20260828(dailyContent)')) failures.push('Live: patch jornalístico de 28/08 não está aplicado.');
if(!live.includes('applyCurrentReelPatches20260828Family(dailyContent)')) failures.push('Live: patch família de 28/08 não está aplicado.');
if(live.lastIndexOf('applyCurrentReelPatches20260828Family(dailyContent)')<live.lastIndexOf('applyCurrentReelPatches20260827_1130(dailyContent)')) failures.push('Live: patch de 28/08 precisa ser aplicado depois dos patches antigos.');

const reels=text('components/ReelsExperienceV26.tsx');
if(/['"]nautica['"]/.test(reels)||/Náutica/i.test(reels)) failures.push('Reels: Náutica foi reintroduzida.');
if(/mensagem romântica|mensagem romantica/i.test(reels)) failures.push('Reels: mensagem romântica artificial foi reintroduzida.');
for(const token of ['Papo de hoje','Desafio do casal','curiosityReels','America/Sao_Paulo','CURRENT.date','freshnessForSlug',"state!=='ATUALIZADO'",'if(!reel?.image)return undefined']) if(!reels.includes(token)) failures.push(`Reels: regra obrigatória ausente: ${token}`);
for(const slug of ['gravidez','pai','brasil','mundo','politica','tempo','seguranca-zl','corinthians','viagens','musica','games','tecnologia','financas','security-briefing','seguranca','appsec-ssdlc','carros','motos','mecanica']) if(!reels.includes(`'${slug}'`)) failures.push(`Reels: área editorial não referenciada: ${slug}`);
for(const forbidden of ['/reel-ai/sprite','sprite.jpg','sprite-news.jpg','clean-covers.jpg','data:image/gif','transparent.gif']) if(reels.includes(forbidden)) failures.push(`Reels: fallback proibido encontrado: ${forbidden}`);
if(!reels.includes("CURRENT.date!=='28/08/2026'")) failures.push('Corinthians: hard gate de data 28/08 ausente.');
for(const token of ['Dia D por André','10º com 32 pontos','Breno Bidon','Rodrigo Garro','30/08']) if(!reels.includes(token)) failures.push(`Corinthians 28/08 incompleto: ${token}`);
if(!reels.includes('Cabocla Tereza')||!reels.includes('kv2jknSIBGc')) failures.push('Sertanejo: rotação legítima de 28/08 ausente.');
if(reels.includes("badge:'SERTANEJO DA ROÇA · 27/08'")) failures.push('Sertanejo: data antiga 27/08 ainda hardcoded.');

const curios=text('lib/current-curiosity-rotation.ts');
if(!curios.includes(ymd)) failures.push(`Curiosidades: rotação não está identificada com ${ymd}.`);
for(const token of ['arco-íris','ponto cego','USB-C']) if(!curios.includes(token)) failures.push(`Curiosidades 28/08: conceito ausente: ${token}`);
for(const old of ['gelo-flutua-20260827','checker-shadow-20260827','qr-error-correction-20260827']) if(curios.includes(old)) failures.push(`Curiosidades: conceito de 27/08 ainda ativo: ${old}`);

const freshness=text('lib/editorial-freshness-current.ts');
const declared=freshness.match(/editorialFreshnessDate\s*=\s*['"]([^'"]+)['"]/)?.[1];
if(declared!==today) failures.push(`Freshness: esperado ${today}, encontrado ${declared??'sem data'}.`);
const required=['brasil','seguranca-zl','politica','mundo','planeta','animais','tempo','curiosidades','musica','games','gravidez','pai','carros','motos','mecanica','viagens','financas','tecnologia','security-briefing','seguranca','appsec-ssdlc'];
for(const slug of required) if(!new RegExp(`slug\\s*:\\s*['"]${slug}['"]`).test(freshness)) failures.push(`Freshness: área ausente: ${slug}`);
if((freshness.match(/\{\s*slug\s*:\s*['"]/g)??[]).length!==21) failures.push('Freshness: deve conter exatamente 21 áreas.');
if(/slug\s*:\s*['"]nautica['"]/.test(freshness)) failures.push('Freshness: Náutica reapareceu.');
for(const slug of ['seguranca-zl','politica','mundo','tempo','games','financas','tecnologia','security-briefing','seguranca']) if(!new RegExp(`slug:'${slug}', state:'ATUALIZADO'`).test(freshness)) failures.push(`Freshness: ${slug} deve estar ATUALIZADO em 28/08.`);
for(const slug of ['brasil','appsec-ssdlc']) if(!new RegExp(`slug:'${slug}', state:'VALIDADO'`).test(freshness)) failures.push(`Freshness: ${slug} deve permanecer omitido/VALIDADO nesta janela.`);

const patch=text(currentPatchFile);
for(const token of ['28/08','FATO CONFIRMADO','AGENDA CONFIRMADA','APURAÇÃO','INTRADIÁRIO','EXPLORAÇÃO CONFIRMADA','ServiceNow','PaperCut']) if(!patch.includes(token)) failures.push(`Patch 28/08 incompleto: ${token}`);
if(!patch.includes('Nenhuma pesquisa presidencial nacional nova de 28/08')) failures.push('Política: falta declaração explícita sobre ausência de pesquisa nacional nova de hoje.');

const pointer=text('lib/daily-rich-media-current.ts');
if(!pointer.includes(`./daily-rich-media-${today}`)) failures.push('Mídia: ponteiro não aponta para catálogo de hoje.');
if(/2026-08-27/.test(pointer)) failures.push('Mídia: catálogo de 27/08 ainda está no ponteiro ativo.');
const currentMedia=text(currentMediaFile);
for(const forbidden of ['/reel-ai/sprite','sprite.jpg','sprite-news.jpg','clean-covers.jpg','data:image/gif','transparent.gif','Father Giulian News screenshot']) if(currentMedia.includes(forbidden)) failures.push(`Mídia do dia contém item proibido: ${forbidden}`);
for(const label of ['Curiosidades','Zona Leste em Foco','Política','Mundo','Tempo e Clima','Corinthians','Games','Finanças','Tecnologia','Security Briefing','Cyber Security']) if(!currentMedia.includes(`label:'${label}'`)) failures.push(`Mídia 28/08: cobertura ausente para ${label}.`);
const imageCount=(currentMedia.match(/images:\s*\[\s*\{/g)??[]).length;
if(!imageCount) failures.push('Mídia 28/08: nenhuma imagem validada.');
if((currentMedia.match(/\balt\s*:/g)??[]).length<imageCount) failures.push('Mídia 28/08: há imagem sem alt descritivo.');
if((currentMedia.match(/\bsourceUrl\s*:/g)??[]).length<imageCount) failures.push('Mídia 28/08: há imagem sem sourceUrl.');

const vercel=text('vercel.json');
if(!vercel.includes('"deploymentEnabled": false')) failures.push('Deploy: integração Git automática deve permanecer desabilitada.');
if(!/R\$\s*70\s*mil|70K|70 mil/i.test(reels+text('lib/editorial-freshness-current.ts')+text('lib/categories.ts'))) failures.push('Carros: limite de R$70 mil não está evidenciado.');

if(failures.length){console.error('\nEDITORIAL QUALITY GATE: FALHOU\n');failures.forEach(f=>console.error(`- ${f}`));process.exit(1);}
console.log('EDITORIAL QUALITY GATE: OK');
