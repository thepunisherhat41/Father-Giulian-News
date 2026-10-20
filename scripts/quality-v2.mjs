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
 if(c.news&���q�^