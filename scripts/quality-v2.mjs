import{readFileSync,existsSync}from'node:fs';
const e=JSON.parse(readFileSync('data/current-edition.json','utf8')),fails=[];
const p=Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()).map(x=>[x.type,x.value]));
const now=[p.year,p.month,p.day].join('-');
if(now!==e.editionDate)fails.push('edição antiga: '+e.editionDate+' versus '+now);
const order=['Papo de hoje','Desafio do casal','Curiosidades','Gravidez','Ser Pai','Brasil','Mundo','Política','Tempo','Zona Leste','Corinthians','Viagens','Música','Sertanejo da Roça','Games','Tecnologia','Finanças','Security Briefing','Cyber','AppSec','Carros até R$70 mil','Motos','Mecânica'];
const kinds=['ATIVIDADE','CURIOSIDADE','GUIA','FATO','AGENDA','PESQUISA','DECLARAÇÃO','APURAÇÃO/REPORTAGEM','ATUALIZAÇÃO','RUMOR','PREVISÃO'];
let prev=-1;const ids=new Set();
if(e.cards?.length<20)fails.push('menos de 20 cards');
for(const c of e.cards||[]){
 if(ids.has(c.id))fails.push('duplicação '+c.id);ids.add(c.id);
 if(!kinds.includes(c.type)||!c.title||!c.summary||!c.details?.length||!c.visual)fails.push('conteúdo inválido '+c.id);
 const idx=order.findIndex(x=>x===c.group||(x==='Curiosidades'&&c.group.startsWith('Curiosidades ·')));
 if(idx<prev||idx===-1)fails.push('ordem editorial '+c.id);prev=idx;
 if(/náutica|nautica|mensagem romântica artificial/i.test(JSON.stringify(c)))fails.push('tema proibido '+c.id);
 if(c.news&&(!c.sources?.length||c.eventDate!==now))fails.push('jornalismo sem fonte/data '+c.id);
 for(const s of c.sources||[])if(!s.url.startsWith('https://'))fails.push('fonte inválida '+c.id);
}
if(e.cards?.filter(c=>c.group.startsWith('Curiosidades ·')).length<3)fails.push('faltam curiosidades por tipos');
if(!e.cards?.some(c=>c.group==='Carros até R$70 mil'))fails.push('faltam carros');
if(e.cards?.some(c=>c.id==='carros'&&/R\$\s*(?:8\d|9\d|1\d\d)\s*mil/i.test(JSON.stringify(c))))fails.push('preço carro maior que teto');
for(let n=1;n<=7;n++){
 const d=new Date(now+'T12:00:00Z');d.setUTCDate(d.getUTCDate()-n);
 const file='lib/current-reel-patches-'+d.toISOString().slice(0,10)+'.ts';
 if(!existsSync(file))continue;
 const old=readFileSync(file,'utf8').toLowerCase();
 for(const id of ['papo','desafio']){
 const c=e.cards.find(x=>x.id===id);
 if(old.includes(c?.conceptId?.toLowerCase())||old.includes(c?.visualConceptId?.toLowerCase())||old.includes(c?.title?.toLowerCase()))fails.push('conceito repetido '+id);
 }
}
if(!existsSync('tests/mobile-v2.spec.ts'))fails.push('sem Chromium QA de todos Reels');
if(fails.length){console.error('EDITORIAL QUALITY GATE FAILED:\n'+fails.join('\n'));process.exit(1)}
console.log('EDITORIAL QUALITY GATE PASSED · '+now+' · '+e.cards.length+' Reels');
