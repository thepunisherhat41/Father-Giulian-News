import {existsSync,readFileSync,readdirSync} from 'node:fs';
import path from 'node:path';

const failures=[];
const fail=(message)=>failures.push(message);
const read=(file)=>existsSync(file)?readFileSync(file,'utf8'):'';

const dateParts=new Intl.DateTimeFormat('en-CA',{
  timeZone:'America/Sao_Paulo',
  year:'numeric',month:'2-digit',day:'2-digit'
}).formatToParts(new Date());
const p=Object.fromEntries(dateParts.map(x=>[x.type,x.value]));
const today=p.year+'-'+p.month+'-'+p.day;
const todayMs=Date.parse(today+'T12:00:00Z');
const currentPatchFile='lib/current-reel-patches-'+today+'.ts';
const currentMediaFile='lib/daily-rich-media-'+today+'.ts';
const curiosityFile='lib/current-curiosity-rotation.ts';
const historyFile='data/freshness-history.json';

for(const file of [currentPatchFile,currentMediaFile,curiosityFile,historyFile]){
  if(!existsSync(file)) fail('Freshness Gate: arquivo obrigatório ausente: '+file);
}

const normalize=(value)=>String(value??'')
  .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
  .toLowerCase()
  .replace(/\b(papo de hoje|desafio do casal|curiosidade|de hoje|hoje)\b/g,' ')
  .replace(/\b\d{1,2}[\/-]\d{1,2}(?:[\/-]\d{2,4})?\b/g,' ')
  .replace(/[^a-z0-9\s]/g,' ')
  .replace(/\s+/g,' ')
  .trim();

const STOP=new Set([
  'a','o','as','os','um','uma','uns','umas','de','da','do','das','dos','e','em','no','na','nos','nas',
  'para','por','com','sem','que','qual','quais','como','mais','menos','se','ao','aos','sua','seu','suas','seus',
  'voces','voce','nosso','nossa','nossos','nossas','ele','ela','eles','elas','ja','vai','vao','pode','podem'
]);
const tokens=(value)=>new Set(normalize(value).split(' ').filter(t=>t.length>2&&!STOP.has(t)));
const intersection=(a,b)=>[...a].filter(x=>b.has(x)).length;
const jaccard=(a,b)=>{const A=tokens(a),B=tokens(b);if(!A.size||!B.size)return 0;const hit=intersection(A,B);return hit/(A.size+B.size-hit);};
const overlap=(a,b)=>{const A=tokens(a),B=tokens(b);if(!A.size||!B.size)return 0;return intersection(A,B)/Math.min(A.size,B.size);};
const bigrams=(value)=>{const s=normalize(value).replaceAll(' ','');const out=[];for(let i=0;i<s.length-1;i++)out.push(s.slice(i,i+2));return out;};
const dice=(a,b)=>{const A=bigrams(a),B=bigrams(b);if(!A.length||!B.length)return 0;const counts=new Map();for(const x of A)counts.set(x,(counts.get(x)??0)+1);let hit=0;for(const x of B){const n=counts.get(x)??0;if(n>0){hit++;counts.set(x,n-1);}}return(2*hit)/(A.length+B.length);};
const semanticScore=(a,b)=>Math.max(jaccard(a,b),overlap(a,b)*0.92,dice(a,b)*0.88);

const esc=(s)=>s.replace(/[.*+?^$()|[\]\\]/g,'\\$&');
function fieldNearSlug(source,slug,field){
  const S=esc(slug),F=esc(field);
  const patterns=[
    new RegExp("patch\\('"+S+"',\\{[\\s\\S]{0,2400}?"+F+":'([^']+)'"),
    new RegExp("Object\\.assign\\(dailyContent\\."+S+",\\{[\\s\\S]{0,2400}?"+F+":'([^']+)'"),
    new RegExp("Object\\.assign\\(dailyContent\\['"+S+"'\\],\\{[\\s\\S]{0,2400}?"+F+":'([^']+)'"),
    new RegExp("dailyContent\\['"+S+"'\\]\\s*=\\s*\\{[\\s\\S]{0,2400}?"+F+":'([^']+)'")
  ];
  for(const re of patterns){const m=source.match(re);if(m)return m[1];}
  return null;
}
function slugPresent(source,slug){
  const S=esc(slug);
  return [
    new RegExp("patch\\('"+S+"',\\{"),
    new RegExp("Object\\.assign\\(dailyContent\\."+S+",\\{"),
    new RegExp("Object\\.assign\\(dailyContent\\['"+S+"'\\],\\{"),
    new RegExp("dailyContent\\['"+S+"'\\]\\s*=\\s*\\{")
  ].some(re=>re.test(source));
}
const ageDays=(date)=>Math.floor((todayMs-Date.parse(date+'T12:00:00Z'))/86400000);

let history={version:1,policy:{semanticWindowDays:30,visualWindowDays:7,curiosityWindowDays:30},entries:[]};
try{history=JSON.parse(read(historyFile));}catch{fail('Freshness Gate: histórico JSON inválido.');}
const semanticWindow=Number(history.policy?.semanticWindowDays??30);
const visualWindow=Number(history.policy?.visualWindowDays??7);
const curiosityWindow=Number(history.policy?.curiosityWindowDays??30);

const patch=read(currentPatchFile);
const dailyRequired=[
  'papo','desafio','gravidez','pai','brasil','mundo','politica','tempo','seguranca-zl','corinthians',
  'viagens','musica','sertanejo-da-roca','games','tecnologia','financas','security-briefing','seguranca',
  'appsec-ssdlc','carros','motos','mecanica'
];
for(const slug of dailyRequired){
  if(!slugPresent(patch,slug))fail('Freshness Gate: '+slug+' não foi explicitamente renovado no patch diário '+today+'.');
}

const currentCore=[];
for(const kind of ['papo','desafio']){
  const title=fieldNearSlug(patch,kind,'title');
  const conceptId=fieldNearSlug(patch,kind,'conceptId');
  const visualConceptId=fieldNearSlug(patch,kind,'visualConceptId');
  if(!title)fail('Freshness Gate: '+kind+' sem título atual.');
  if(!conceptId)fail('Freshness Gate: '+kind+' sem conceptId obrigatório.');
  if(!visualConceptId)fail('Freshness Gate: '+kind+' sem visualConceptId obrigatório.');
  currentCore.push({date:today,kind,title,conceptId,visualConceptId});
}
for(const field of ['conceptId','visualConceptId']){
  if(!fieldNearSlug(patch,'sertanejo-da-roca',field))fail('Freshness Gate: Sertanejo da Roça sem '+field+' diário.');
}

const curios=read(curiosityFile);
const curiosityMatches=[...curios.matchAll(/conceptId:'([^']+)'[\s\S]{0,450}?visualConceptId:'([^']+)'[\s\S]{0,450}?title:'([^']+)'/g)]
  .map(m=>({date:today,kind:'curiosity',conceptId:m[1],visualConceptId:m[2],title:m[3]}));
if(curiosityMatches.length!==3)fail('Freshness Gate: esperado 3 curiosidades com conceptId + visualConceptId, encontrado '+curiosityMatches.length+'.');
currentCore.push(...curiosityMatches);

for(const current of currentCore){
  const historyCurrent=(history.entries??[]).some(e=>e.date===today&&e.kind===current.kind&&e.conceptId===current.conceptId&&e.status==='current');
  if(!historyCurrent)fail('Freshness Gate: histórico não registra como current '+current.kind+' / '+current.conceptId+' em '+today+'.');

  const priors=(history.entries??[]).filter(e=>{
    const d=ageDays(e.date);
    if(d<0)return false;
    if(e.date===today&&e.conceptId===current.conceptId&&e.status==='current')return false;
    return d<=Math.max(semanticWindow,visualWindow,curiosityWindow);
  });

  const conceptWindow=current.kind==='curiosity'?curiosityWindow:semanticWindow;
  for(const prior of priors){
    const d=ageDays(prior.date);
    if(prior.kind===current.kind&&d<=conceptWindow&&prior.conceptId===current.conceptId){
      fail('Freshness Gate: conceito repetido em '+current.kind+': '+current.conceptId+' já apareceu em '+prior.date+'.');
    }
    if(prior.kind===current.kind&&d<=visualWindow&&prior.visualConceptId===current.visualConceptId){
      fail('Freshness Gate: conceito visual repetido em '+current.kind+': '+current.visualConceptId+' já apareceu em '+prior.date+'.');
    }
    if(prior.kind===current.kind&&d<=conceptWindow&&current.title&&prior.title){
      const score=semanticScore(current.title,prior.title);
      const limit=current.kind==='curiosity'?0.64:0.68;
      if(score>=limit){
        fail('Freshness Gate: similaridade alta ('+score.toFixed(2)+') em '+current.kind+': "'+current.title+'" ~ "'+prior.title+'" ('+prior.date+').');
      }
    }
  }
}

for(const file of readdirSync('lib')){
  const m=file.match(/^current-reel-patches-(\d{4}-\d{2}-\d{2})(?:[^.]*)?\.ts$/);
  if(!m||m[1]===today)continue;
  const d=ageDays(m[1]);
  if(d<0||d>semanticWindow)continue;
  const source=read(path.join('lib',file));
  for(const current of currentCore.filter(x=>x.kind==='papo'||x.kind==='desafio')){
    const previous=fieldNearSlug(source,current.kind,'title');
    if(!previous)continue;
    const score=semanticScore(current.title,previous);
    if(score>=0.70)fail('Freshness Gate: '+current.kind+' muito parecido com '+file+' ('+score.toFixed(2)+'): "'+previous+'".');
  }
}

const mediaEntries=(source)=>[...source.matchAll(/img\('([^']+)',\[[^\]]*\],'([^']+)'/g)].map(m=>({label:m[1],url:m[2]}));
const currentMedia=mediaEntries(read(currentMediaFile));
const guardedLabels=new Set(['Papo de hoje','Desafio do casal','Curiosidades']);
for(const file of readdirSync('lib')){
  const m=file.match(/^daily-rich-media-(\d{4}-\d{2}-\d{2})(?:[^.]*)?\.ts$/);
  if(!m||m[1]===today)continue;
  const d=ageDays(m[1]);
  if(d<0||d>visualWindow)continue;
  const previous=mediaEntries(read(path.join('lib',file)));
  for(const now of currentMedia.filter(x=>guardedLabels.has(x.label))){
    if(previous.some(old=>old.label===now.label&&old.url===now.url)){
      fail('Freshness Gate: mídia repetida em '+now.label+' dentro de '+visualWindow+' dias ('+m[1]+'): '+now.url);
    }
  }
}

if(failures.length){
  console.error('\nFRESHNESS GATE: FALHOU\n');
  failures.forEach(f=>console.error('- '+f));
  process.exit(1);
}
console.log('FRESHNESS GATE: OK · '+today+' · diário completo + anti-repetição semântica/visual ativo');
