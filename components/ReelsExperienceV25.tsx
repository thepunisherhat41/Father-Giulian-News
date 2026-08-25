'use client';

import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import styles from './ReelsExperience.module.css';
import { categories } from '@/lib/categories';
import { dailyContent } from '@/lib/daily-content';
import { findCurrentRichMedia } from '@/lib/current-rich-media';
import { curiosityCollections } from '@/lib/curiosity-collections';

type Reel = any;
type AiTheme = 'conversation'|'challenge'|'science'|'space'|'body'|'animals'|'history'|'psychology'|'nature'|'pregnancy'|'parenthood'|'brazil'|'world'|'politics'|'weather'|'local'|'travel'|'music'|'games'|'technology'|'finance'|'security'|'cyber'|'appsec'|'cars'|'motos'|'mechanic';

type DailyTalk = { title:string; detail:string; conversation:string };
type DailyChallenge = { title:string; detail:string };

const MONTHS = ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];
function saoPauloToday(){
  const parts = new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
  const byType = Object.fromEntries(parts.map(p=>[p.type,p.value]));
  const year=byType.year, month=byType.month, day=byType.day;
  return {date:`${day}/${month}/${year}`,label:`${day} ${MONTHS[Number(month)-1]} ${year}`,iso:`${year}-${month}-${day}`,seed:Number(`${year}${month}${day}`)};
}
const CURRENT = saoPauloToday();

const NEWS_ORDER = ['brasil','mundo','politica','tempo','seguranca-zl'];
const LIFESTYLE_ORDER = ['viagens','musica'];
const TECH_ORDER = ['games','tecnologia','financas','security-briefing','seguranca','appsec-ssdlc'];
const AUTO_ORDER = ['carros','motos','mecanica'];
const ALWAYS_DAILY = new Set(['gravidez','pai','viagens','musica','games','carros','motos','mecanica']);

const TALK_LIBRARY:DailyTalk[]=[
  {title:'O que aconteceu hoje e te deixou um pouco melhor?',detail:'Pode ser uma mensagem, uma comida, uma música, uma piada ou cinco minutos de paz. Cada um escolhe uma coisa e conta por quê.',conversation:'Depois escolham uma dessas pequenas coisas para repetir nesta semana.'},
  {title:'Qual foi a coisa mais inesperada que você aprendeu esta semana?',detail:'Vale qualquer assunto: trabalho, família, série, comida, notícia ou algo sobre você mesmo.',conversation:'Depois cada um escolhe uma pergunta para continuar o assunto.'},
  {title:'Se vocês ganhassem uma tarde livre amanhã, o que fariam?',detail:'Sem pensar em obrigação. Pode ser ficar em casa, comer algo diferente, passear, jogar ou simplesmente dormir.',conversation:'Tentem chegar numa opção que os dois realmente topariam.'},
  {title:'Qual hábito pequeno de vocês vale a pena manter quando a rotina ficar mais corrida?',detail:'Pensem em algo simples que já funciona hoje: jantar juntos, assistir algo, conversar antes de dormir ou sair para tomar um café.',conversation:'O desafio é escolher algo realista, não uma promessa bonita.'},
  {title:'Que lugar perto de casa vocês ainda não exploraram direito?',detail:'Pode ser um parque, restaurante, feira, bairro, café ou algum passeio simples que sempre fica para depois.',conversation:'Se algum lugar vier à cabeça, salvem para um próximo fim de semana.'},
  {title:'Qual música mudou de significado para você depois que vocês ficaram juntos?',detail:'Cada um escolhe uma. Não precisa ser “a música do casal”; basta ter ganhado uma memória nova.',conversation:'Ouçam pelo menos uma delas inteira hoje.'},
  {title:'Qual foi a melhor compra pequena que vocês fizeram no último ano?',detail:'Aquelas coisas que custaram pouco, mas melhoraram muito a rotina ou renderam boas memórias.',conversation:'Vale também uma compra que parecia inútil e acabou surpreendendo.'},
  {title:'Se o dia de hoje virasse uma foto, o que apareceria nela?',detail:'Não precisa ser o momento mais importante — pode ser justamente a cena mais comum que representa como foi o dia.',conversation:'Cada um descreve sua foto sem mostrar nenhuma imagem.'},
  {title:'Que comida vocês gostariam de aprender a fazer juntos?',detail:'Pode ser simples, difícil, sobremesa, receita de família ou algo que vocês sempre pedem pronto.',conversation:'Escolham uma e deixem anotada para testar algum dia.'},
  {title:'Qual coisa boba sempre consegue fazer você rir?',detail:'Vale meme, frase, situação, pessoa, vídeo antigo ou algum costume estranho de vocês.',conversation:'A regra é contar a história completa, não só responder o nome.'},
  {title:'O que você acha que vocês vão lembrar com carinho desta fase daqui a alguns anos?',detail:'Pode ser uma rotina, um lugar, uma preocupação que depois parece pequena ou algum detalhe da casa.',conversation:'Cada um escolhe uma coisa diferente.'},
  {title:'Qual assunto vocês dois conseguem conversar por horas sem perceber o tempo passar?',detail:'Filme, música, viagem, política, jogo, futuro, histórias antigas… qualquer coisa que sempre rende.',conversation:'Tentem lembrar quando esse assunto apareceu pela primeira vez entre vocês.'},
];

const CHALLENGE_LIBRARY:DailyChallenge[]=[
  {title:'Desafio: escolham uma coisa simples para fazer juntos até domingo',detail:'Sem gastar muito e sem complicar: filme, comida, passeio, jogo ou descanso. Cada um sugere uma opção e vocês escolhem uma.'},
  {title:'Desafio: cada um escolhe uma música para o outro',detail:'Ouçam as duas inteiras sem mexer no celular. Depois contem por que escolheram aquela música.'},
  {title:'Desafio: 20 minutos sem tela depois do jantar',detail:'Nada de resolver problema. É só conversar, comer alguma coisa ou ficar juntos sem notificação disputando atenção.'},
  {title:'Desafio: encontrem uma foto antiga que vocês gostam',detail:'Cada um escolhe uma foto e conta o que lembra daquele dia — inclusive algum detalhe que o outro talvez tenha esquecido.'},
  {title:'Desafio: escolham uma comida que nenhum dos dois pede há muito tempo',detail:'Pode ser para cozinhar, pedir ou deixar salva para o fim de semana. A graça é sair um pouco do automático.'},
  {title:'Desafio: façam um mini passeio de 30 minutos',detail:'Pode ser caminhar pelo bairro, ir tomar um café ou simplesmente mudar o caminho habitual. Sem transformar em compromisso grande.'},
  {title:'Desafio: cada um indica um vídeo de até 10 minutos para o outro',detail:'Pode ser curioso, engraçado, música, ciência, viagem ou qualquer coisa que você acha que o outro vai gostar.'},
  {title:'Desafio: escolham juntos um filme ou episódio sem rolar catálogo por meia hora',detail:'Cada um oferece duas opções, eliminem uma de cada lado e decidam entre as duas finalistas.'},
  {title:'Desafio: façam uma sobremesa ou lanche simples juntos',detail:'Não precisa inventar receita sofisticada. O objetivo é fazer alguma coisa lado a lado e comer depois.'},
  {title:'Desafio: façam uma lista de três coisas legais para viver antes do fim do ano',detail:'Nada de meta gigante. Pensem em experiências pequenas e possíveis que vocês realmente gostariam de fazer.'},
];

function pickDaily<T>(items:T[],offset=0){return items[(CURRENT.seed+offset)%items.length];}
function buildTalkReel():Reel{const talk=pickDaily(TALK_LIBRARY);return{slug:'papo-do-dia',label:'Papo de hoje',emoji:'💬',kind:'special',title:talk.title,detail:talk.detail,conversation:talk.conversation,category:{slug:'papo-do-dia',label:'Papo de hoje'},content:{badge:'PAPO DE HOJE',title:'Uma pergunta simples para conversar',summary:'Um assunto curto que muda todos os dias.',sections:[]},aiTheme:'conversation'};}
function buildChallengeReel():Reel{const challenge=pickDaily(CHALLENGE_LIBRARY,7);return{slug:'desafio-do-casal',label:'Desafio do casal',emoji:'💞',kind:'special',title:challenge.title,detail:challenge.detail,category:{slug:'desafio-do-casal',label:'Desafio do casal'},content:{badge:'DESAFIO DO DIA',title:'Uma missão pequena e concreta',summary:'Uma ideia diferente por dia, sem performance.',sections:[]},aiTheme:'challenge'};}

const SERTANEJO_REEL: Reel = {
  slug:'sertanejo-da-roca', label:'Sertanejo da Roça', emoji:'🪕', kind:'special-media',
  title:'Moda de viola do dia: Tristeza do Jeca',
  detail:'Um clássico do repertório caipira em que melodia, viola e narrativa carregam a sensação de saudade. Hoje o foco é ouvir a história e a interpretação, não apenas o refrão.',
  conversation:'Que música antiga lembra interior, família, estrada ou infância para vocês?',
  videoEmbed:'https://www.youtube.com/embed/Ij4EE4_6THI?autoplay=1&mute=1&loop=1&playlist=Ij4EE4_6THI&playsinline=1&rel=0',
  category:{slug:'sertanejo-da-roca',label:'Sertanejo da Roça'}, content:{badge:'SERTANEJO DA ROÇA',title:'Tristeza do Jeca',summary:'Clássicos, moda de viola e histórias em rotação diária.',sections:[],sources:[{label:'Tonico & Tinoco · YouTube',url:'https://www.youtube.com/watch?v=Ij4EE4_6THI'}]}
};
const CORINTHIANS_REEL: Reel = {
  slug:'corinthians-hoje',label:'Corinthians Hoje',emoji:'⚫⚪',kind:'osint',
  title:'Yuri Alberto avança na recuperação e pode voltar ao treino com o elenco nesta quarta',
  detail:'O atacante fez testes em campo nesta terça (25) sem desconforto e fará ultrassom na quarta para confirmar a cicatrização da lesão. O Corinthians trabalha para tê-lo contra o Santos no domingo (30), às 16h, na Neo Química Arena. Breno Bidon está suspenso; Rodrigo Garro volta após cumprir suspensão.',
  image:{url:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Yuri%20Alberto%20Corinthians.jpg',alt:'Yuri Alberto em treino pelo Corinthians'},
  category:{slug:'corinthians-hoje',label:'Corinthians Hoje'},
  content:{badge:'CORINTHIANS · 25/08',title:'Yuri Alberto pode avançar para retorno contra o Santos',summary:'Atualização médica e esportiva publicada nesta terça-feira.',shareSummary:'Corinthians 25/08: Yuri Alberto fez testes sem desconforto e pode voltar a treinar com o elenco após ultrassom. Santos é o próximo adversário, domingo às 16h.',sections:[{title:'Situação de Yuri Alberto',bullets:['Testes em campo nesta terça não provocaram desconforto.','Ultrassom está previsto para quarta-feira para verificar a cicatrização.','A eventual presença contra o Santos depende da liberação médica e da evolução nos treinos.']},{title:'Clássico de domingo',bullets:['Corinthians x Santos: 30/08, às 16h, na Neo Química Arena.','Breno Bidon cumpre suspensão automática.','Rodrigo Garro volta após cumprir suspensão contra o Coritiba.']}],sources:[{label:'ge · Corinthians · 25/08/2026',url:'https://ge.globo.com/futebol/times/corinthians/noticia/2026/08/25/corinthians-programa-retorno-de-yuri-alberto-aos-treinos-com-elenco-e-aguarda-exame-para-liberacao.ghtml'}]}
};

const REAL_FALLBACKS:Record<AiTheme,string>={
  conversation:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Couple%20at%20sunset%20on%20the%20beach.jpg',
  challenge:'https://commons.wikimedia.org/wiki/Special:Redirect/file/DSCF0763%20A%20couple%20seated%20at%20a%20seaside%20table%20enjoying%20an%20evening%20meal%20and%20drinks%20while%20watching%20the%20sunset%20over%20the%20water.jpg',
  science:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Lightning%20strike%20base.JPG',
  space:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Global%20Positioning%20System%20satellite.jpg',
  body:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Human%20body%20features.svg',
  animals:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Homing%20pigeon.jpg',
  history:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Rosetta%20Stone.JPG',
  psychology:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Stroop%20effect%20example.png',
  nature:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Earth%20Eastern%20Hemisphere.jpg',
  pregnancy:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Embryo%20at%206%20weeks.JPG',
  parenthood:'https://www.cdc.gov/hearher/media/images/support-family-friends-16x9-1.jpg',
  brazil:'https://commons.wikimedia.org/wiki/Special:Redirect/file/PlenarioSenadoFederal.jpg',
  world:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Tehran%20night%20view.jpg',
  politics:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Brazilian%20DRE%20voting%20machine%20for%202022%20elections.jpg',
  weather:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sao%20Paulo-Skyline.jpg',
  local:'https://commons.wikimedia.org/wiki/Special:Redirect/file/S%C3%A3o%20Paulo%20subway%20train.jpg',
  travel:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Holambra%20windmill.jpg',
  music:'https://i.ytimg.com/vi/1DnSiznUrVI/maxresdefault.jpg',
  games:'https://i.ytimg.com/vi/qwC9EFT6EFk/maxresdefault.jpg',
  technology:'https://commons.wikimedia.org/wiki/Special:Redirect/file/NVIDIA%20GPU.jpg',
  finance:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Edif%C3%ADcio%20sede%20da%20Bovespa.jpg',
  security:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Computer%20security%20lock.jpg',
  cyber:'https://www.bleepstatic.com/content/hl-images/2026/08/25/Zimbra.jpg',
  appsec:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Software-development.jpg',
  cars:'https://static.cargurus.com/images/site/2017/12/12/13/00/2014_chevrolet_cruze_2lt-pic-3747308311327765241-1600x1200.jpeg',
  motos:'https://www.planetcarsz.com/assets/uploads/2021/01/c08a054f8b23f375fc1a7475013d6242.jpg',
  mechanic:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Porsche%20Tire%20Pressure%20Gauge%20(9207945919).jpg'
};

function normalize(value:string){return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();}
function curiosityTheme(value:string):AiTheme{const v=normalize(value);if(v.includes('espaco')||v.includes('astronom'))return'space';if(v.includes('corpo')||v.includes('humano'))return'body';if(v.includes('animal'))return'animals';if(v.includes('historia')||v.includes('cultura'))return'history';if(v.includes('psicolog')||v.includes('mente')||v.includes('comportamento'))return'psychology';if(v.includes('natureza')||v.includes('terra')||v.includes('planeta')||v.includes('oceano'))return'nature';if(v.includes('tecnolog'))return'technology';return'science';}
function aiThemeFor(reel:Reel):AiTheme{if(reel.aiTheme)return reel.aiTheme;if(reel.slug==='papo-do-dia')return'conversation';if(reel.slug==='desafio-do-casal')return'challenge';if(reel.kind==='curiosity')return curiosityTheme(`${reel.label} ${reel.title}`);const m:Record<string,AiTheme>={gravidez:'pregnancy',pai:'parenthood',brasil:'brazil',mundo:'world',politica:'politics',tempo:'weather','seguranca-zl':'local',viagens:'travel',musica:'music','sertanejo-da-roca':'music',games:'games',tecnologia:'technology',financas:'finance','security-briefing':'security',seguranca:'cyber','appsec-ssdlc':'appsec',carros:'cars',motos:'motos',mecanica:'mechanic'};return m[reel.slug]??'science';}
function localArtwork(theme:AiTheme){return{src:REAL_FALLBACKS[theme]??REAL_FALLBACKS.science,style:{position:'absolute',inset:0,width:'100%',height:'100%',maxWidth:'none',objectFit:'cover',objectPosition:'center',display:'block',filter:'none'} as CSSProperties};}
function getImage(label:string,title:string){const image=findCurrentRichMedia(label,title)?.images?.[0];return image?{url:image.url,alt:image.alt??label}:undefined;}
function withMedia(reel:Reel){return reel.videoEmbed||reel.image?reel:{...reel,aiTheme:aiThemeFor(reel)};}
function todayTokens(){const short=CURRENT.date.slice(0,5);const [day,month,year]=CURRENT.date.split('/');return[CURRENT.date.toLowerCase(),CURRENT.iso,short,`${day} ${MONTHS[Number(month)-1].toLowerCase()} ${year}`];}
function contentText(content:any){return[content?.badge,content?.title,content?.summary,content?.shareSummary,...(content?.sources??[]).flatMap((s:any)=>[s.label,s.url])].filter(Boolean).join(' ').toLowerCase();}
function hasToday(content:any){const text=contentText(content);return todayTokens().some(t=>text.includes(t));}
function hasTodaySource(content:any){const text=(content?.sources??[]).flatMap((s:any)=>[s.label,s.url]).filter(Boolean).join(' ').toLowerCase();return todayTokens().some(t=>text.includes(t));}
function isFreshToday(item:Reel){if(item.kind==='special'||item.kind==='special-media'||item.kind==='curiosity')return true;if(ALWAYS_DAILY.has(item.slug))return true;if(!item.content)return false;if(item.kind==='osint'||item.kind==='local-osint')return hasTodaySource(item.content);return hasToday(item.content);}
function categoryReel(slug:string):Reel|undefined{const category=categories.find(i=>i.slug===slug);const content=dailyContent[slug];if(!category||!content)return;return withMedia({slug,label:category.label,emoji:category.emoji,kind:slug==='seguranca-zl'?'local-osint':'editorial',title:content.title,detail:content.summary,category,content,image:getImage(category.label,content.title)});}
function curiosityReels():Reel[]{const seed=CURRENT.seed;return curiosityCollections.map((collection,index)=>{const story=collection.stories[(seed+index)%collection.stories.length];const content={badge:`CURIOSIDADE · ${collection.title.toUpperCase()}`,title:story.title,summary:story.hook,shareSummary:story.shareText,sections:[{title:'Como isso funciona',paragraphs:story.explanation},{title:'Conexão inesperada',paragraphs:[story.connection]},{title:'Para guardar',paragraphs:[story.remember]}],sources:story.sourceLabel&&story.sourceUrl?[{label:story.sourceLabel,url:story.sourceUrl}]:[]};return withMedia({slug:`curiosidade-${collection.id}`,label:`Curiosidade · ${collection.title}`,emoji:collection.emoji,kind:'curiosity',title:story.title,detail:story.hook,category:{slug:`curiosidade-${collection.id}`,label:collection.title},content,image:getImage('Curiosidades',story.title)});});}
function shareText(reel:Reel){const content=reel.content;if(reel.kind==='special'||reel.kind==='special-media')return[`*${reel.label.toUpperCase()} · ${CURRENT.date}*`,'',`*${reel.title}*`,'',reel.detail,...(reel.conversation?['',`💬 ${reel.conversation}`]:[])].join('\n');const bullets=content?.sections?.flatMap((s:any)=>s.bullets??[]).slice(0,3)??[];return[`*${String(reel.label).toUpperCase()} · ${CURRENT.date}*`,'',`*${reel.title}*`,'',content?.shareSummary??reel.detail,...(bullets.length?['',...bullets.map((b:string)=>`- ${b}`)]:[]),...(content?.sources?.[0]?['',`Fonte: ${content.sources[0].label}`,content.sources[0].url]:[])].join('\n');}
function openShare(reel:Reel){window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText(reel))}`,'_blank','noopener,noreferrer');}
function ReelMedia({reel,detail=false}:{reel:Reel;detail?:boolean}){if(reel.videoEmbed)return <figure className={detail?styles.detailVideo:styles.videoMedia}><iframe src={reel.videoEmbed} title={`Vídeo de ${reel.label}`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /></figure>;if(reel.image)return <figure className={detail?styles.detailMedia:styles.media}><img src={reel.image.url} alt={reel.image.alt??reel.label} referrerPolicy="no-referrer" onError={e=>{const fb=localArtwork(aiThemeFor(reel));e.currentTarget.onerror=null;e.currentTarget.src=fb.src;Object.assign(e.currentTarget.style,fb.style);}} /></figure>;const fb=localArtwork(aiThemeFor(reel));return <figure className={detail?styles.detailMedia:styles.media}><img src={fb.src} alt={`Imagem relacionada a ${reel.label}`} style={fb.style} referrerPolicy="no-referrer" /></figure>;}

export default function ReelsExperienceV25(){
  const [detailSlug,setDetailSlug]=useState<string|null>(null);const feedRef=useRef<HTMLDivElement>(null);
  const reels=useMemo<Reel[]>(()=>{const family=['gravidez','pai'].map(categoryReel).filter(Boolean) as Reel[];const news=NEWS_ORDER.map(categoryReel).filter(Boolean) as Reel[];const lifestyle=LIFESTYLE_ORDER.map(categoryReel).filter(Boolean) as Reel[];const tech=TECH_ORDER.map(categoryReel).filter(Boolean) as Reel[];const auto=AUTO_ORDER.map(categoryReel).filter(Boolean) as Reel[];return[withMedia(buildTalkReel()),withMedia(buildChallengeReel()),...curiosityReels(),...family,...news,withMedia(CORINTHIANS_REEL),...lifestyle,withMedia(SERTANEJO_REEL),...tech,...auto].filter(isFreshToday);},[]);
  const detail=detailSlug?reels.find(r=>r.slug===detailSlug):undefined;
  useEffect(()=>{const mq=window.matchMedia('(max-width: 900px)');const sync=()=>{document.documentElement.style.overflow=mq.matches?'hidden':'';document.body.style.overflow=mq.matches?'hidden':'';};sync();mq.addEventListener('change',sync);return()=>{mq.removeEventListener('change',sync);document.documentElement.style.overflow='';document.body.style.overflow='';};},[]);
  return <div className={styles.root} aria-label="Father Giulian News em modo Reels"><div className={styles.feed} ref={feedRef}>{reels.map((reel,index)=><article className={`${styles.reel} ${reel.kind==='special'?styles.special:''}`} data-reel-index={index} key={reel.slug}><ReelMedia reel={reel}/><div className={styles.top}><div className={styles.brand}><span className={styles.mark}>FG</span><span>NEWS · {CURRENT.label}</span></div><div className={styles.counter}>{index+1} / {reels.length}</div></div><div className={styles.content}><div className={styles.category}><span>{reel.emoji}</span>{reel.label}{(reel.kind==='osint'||reel.kind==='local-osint')&&<b className={styles.verified}>HOJE</b>}</div><h2 className={styles.title}>{reel.title}</h2><p className={styles.summary}>{reel.detail}</p>{reel.conversation&&<p className={styles.conversation}>💬 {reel.conversation}</p>}<div className={styles.hint}>↑ deslize para descobrir a próxima</div></div><div className={styles.actions}>{reel.kind!=='special'&&<button className={`${styles.action} ${styles.read}`} onClick={()=>setDetailSlug(reel.slug)} aria-label={`Ler ${reel.label}`}><span className={styles.actionIcon}>↗</span><span>Ler</span></button>}<button className={styles.action} onClick={()=>openShare(reel)} aria-label={`Compartilhar ${reel.label}`}><span className={styles.actionIcon}>◉</span><span>WhatsApp</span></button></div><div className={styles.progress}><i style={{width:`${((index+1)/reels.length)*100}%`}}/></div>{index<reels.length-1&&<div className={styles.swipeCue}>⌃</div>}</article>)}</div>{detail&&detail.kind!=='special'&&<div className={styles.detail} role="dialog" aria-modal="true" aria-label={detail.label}><button className={styles.back} onClick={()=>setDetailSlug(null)}>← Voltar</button><button className={styles.detailShare} onClick={()=>openShare(detail)}>↗</button><div className={styles.detailFeed}><section className={styles.detailReel}><ReelMedia reel={detail} detail/><div className={styles.detailShade}/><div className={styles.detailCopy}><small>{detail.emoji} {detail.label} · {detail.content?.badge??'EDIÇÃO DE HOJE'}</small><h2>{detail.title}</h2><p>{detail.detail}</p><p><strong>Continue deslizando para ler.</strong></p></div></section>{(detail.content?.sections??[]).map((section:any,i:number)=><section className={styles.detailReel} key={`${detail.slug}-${i}`}><ReelMedia reel={detail} detail/><div className={styles.detailShade}/><div className={styles.detailCopy}><small>{detail.label} · {i+1}/{detail.content.sections.length}</small><h3>{section.title}</h3>{section.paragraphs?.map((p:string)=><p key={p}>{p}</p>)}{section.bullets?.length?<ul>{section.bullets.map((b:string)=><li key={b}>{b}</li>)}</ul>:null}{i===detail.content.sections.length-1&&detail.content.sources?.length?<div className={styles.sources}>{detail.content.sources.map((s:any)=><a className={styles.source} href={s.url} target="_blank" rel="noreferrer" key={s.url}>Fonte: {s.label} ↗</a>)}</div>:null}</div></section>)}</div></div>}</div>;
}