'use client';

import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import styles from './ReelsExperience.module.css';
import { categories } from '@/lib/categories';
import { dailyContent } from '@/lib/daily-content';
import { curiosityCollections } from '@/lib/curiosity-collections';
import { findCurrentRichMedia } from '@/lib/current-rich-media';
import { freshnessForSlug } from '@/lib/editorial-freshness-current';

type Reel = any;
type DailyTalk = { title:string; detail:string; conversation:string };
type DailyChallenge = { title:string; detail:string };
type Theme = 'conversation'|'challenge'|'science'|'psychology'|'technology'|'pregnancy'|'parenthood'|'travel'|'music'|'games'|'finance'|'security'|'cars'|'motos'|'mechanic'|'world'|'weather';

const MONTHS=['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];
function saoPauloToday(){const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());const p=Object.fromEntries(parts.map(x=>[x.type,x.value]));return{date:`${p.day}/${p.month}/${p.year}`,label:`${p.day} ${MONTHS[Number(p.month)-1]} ${p.year}`,seed:Number(`${p.year}${p.month}${p.day}`)};}
const CURRENT=saoPauloToday();

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

const REAL_FALLBACKS:Record<Theme,string>={
conversation:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Couple%20enjoys%20coffee%20together%20at%20home.jpg',
challenge:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Album%20Photos-(1).jpg',
science:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Water%20droplet%20lying%20on%20a%20damask.jpg',
psychology:'https://commons.wikimedia.org/wiki/Special:Redirect/file/M%C3%BCller-Lyer%20illusion.svg',
technology:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Fibre-optic%20cable%20in%20a%20Telstra%20pit.jpg',
pregnancy:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Embryo%20at%206%20weeks.JPG',
parenthood:'https://www.cdc.gov/hearher/media/images/support-family-friends-16x9-1.jpg',
travel:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Holambra%20windmill.jpg',
music:'https://i.ytimg.com/vi/1DnSiznUrVI/maxresdefault.jpg',
games:'https://i.ytimg.com/vi/qwC9EFT6EFk/maxresdefault.jpg',
finance:'https://commons.wikimedia.org/wiki/Special:Redirect/file/US%20Treasury%20Building.jpg',
security:'https://commons.wikimedia.org/wiki/Special:Redirect/file/SOC%20Security%20Monitors.jpg',
cars:'https://static.cargurus.com/images/site/2017/12/12/13/00/2014_chevrolet_cruze_2lt-pic-3747308311327765241-1600x1200.jpeg',
motos:'https://www.planetcarsz.com/assets/uploads/2021/01/c08a054f8b23f375fc1a7475013d6242.jpg',
mechanic:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Porsche%20Tire%20Pressure%20Gauge%20(9207945919).jpg',
world:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Strait%20of%20Hormuz-svg-en.svg',
weather:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sao%20Paulo-Skyline.jpg'
};

function fallback(theme:Theme){return{src:REAL_FALLBACKS[theme],style:{position:'absolute',inset:0,width:'100%',height:'100%',maxWidth:'none',objectFit:'cover',objectPosition:'center',display:'block'} as CSSProperties};}
function themeFor(reel:Reel):Theme{if(reel.theme)return reel.theme;if(reel.slug==='gravidez')return'pregnancy';if(reel.slug==='pai')return'parenthood';if(reel.slug==='viagens')return'travel';if(reel.slug==='musica')return'music';if(reel.slug==='games')return'games';if(reel.slug==='financas')return'finance';if(reel.slug==='security-briefing')return'security';if(reel.slug==='carros')return'cars';if(reel.slug==='motos')return'motos';if(reel.slug==='mecanica')return'mechanic';if(reel.slug==='mundo')return'world';if(reel.slug==='tempo')return'weather';return'science';}
function getImage(label:string,title:string){const m=findCurrentRichMedia(label,title)?.images?.[0];return m?{url:m.url,alt:m.alt??label}:undefined;}

function categoryReel(slug:string):Reel|undefined{const category=categories.find(i=>i.slug===slug);const content=dailyContent[slug];if(!category||!content)return;return{slug,label:category.label,emoji:category.emoji,kind:'editorial',title:content.title,detail:content.summary,content,image:getImage(category.label,content.title)};}
function journalisticReel(slug:string){if(freshnessForSlug(slug)?.state!=='ATUALIZADO')return undefined;return categoryReel(slug);}
function curiosityReels():Reel[]{return curiosityCollections.map((collection,index)=>{const story=collection.stories[(CURRENT.seed+index)%collection.stories.length];const content={badge:`CURIOSIDADE · ${collection.title.toUpperCase()}`,title:story.title,summary:story.hook,shareSummary:story.shareText,sections:[{title:'Como isso funciona',paragraphs:story.explanation},{title:'Conexão inesperada',paragraphs:[story.connection]},{title:'Para guardar',paragraphs:[story.remember]}],sources:story.sourceLabel&&story.sourceUrl?[{label:story.sourceLabel,url:story.sourceUrl}]:[]};const title=story.title;const label='Curiosidades';const normalized=String(collection.title).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();const theme:Theme=normalized.includes('psicolog')?'psychology':normalized.includes('tecnolog')?'technology':'science';return{slug:`curiosidade-${collection.id}`,label:`Curiosidade · ${collection.title}`,emoji:collection.emoji,kind:'curiosity',title,detail:story.hook,content,image:getImage(label,title),theme};});}

function buildTalk():Reel{const t=pickDaily(TALK_LIBRARY);return{slug:'papo-do-dia',label:'Papo de hoje',emoji:'💬',kind:'special',title:t.title,detail:t.detail,conversation:t.conversation,theme:'conversation',image:{url:REAL_FALLBACKS.conversation,alt:'Casal conversando enquanto toma café em casa'},content:{sections:[]}};}
function buildChallenge():Reel{const c=pickDaily(CHALLENGE_LIBRARY,7);return{slug:'desafio-do-casal',label:'Desafio do casal',emoji:'💞',kind:'special',title:c.title,detail:c.detail,theme:'challenge',image:{url:REAL_FALLBACKS.challenge,alt:'Fotografias impressas organizadas para recordar momentos'},content:{sections:[]}};}
const SERTANEJO:Reel={slug:'sertanejo-da-roca',label:'Sertanejo da Roça',emoji:'🪕',kind:'special-media',title:'Moda de viola do dia: Chico Mineiro',detail:'Tonico e Tinoco contam uma das narrativas mais conhecidas da música caipira brasileira. Hoje o foco é a interpretação histórica registrada no acervo da TV Cultura.',conversation:'Qual história de família ou estrada daria uma moda de viola?',videoEmbed:'https://www.youtube.com/embed/cz8i7UrvKds?playsinline=1&rel=0',content:{badge:'SERTANEJO DA ROÇA',title:'Chico Mineiro',summary:'Moda de viola, história e interpretação em rotação diária.',sections:[],sources:[{label:'TV Cultura · Tonico e Tinoco · Chico Mineiro',url:'https://www.youtube.com/watch?v=cz8i7UrvKds'}]}};

function mediaReady(reel:Reel){return Boolean(reel.videoEmbed||reel.image||REAL_FALLBACKS[themeFor(reel)]);}
function shareText(reel:Reel){const c=reel.content;const bullets=c?.sections?.flatMap((s:any)=>s.bullets??[]).slice(0,3)??[];return[`*${String(reel.label).toUpperCase()} · ${CURRENT.date}*`,'',`*${reel.title}*`,'',reel.detail,...(reel.conversation?['',`💬 ${reel.conversation}`]:[]),...(bullets.length?['',...bullets.map((b:string)=>`- ${b}`)]:[]),...(c?.sources?.[0]?['',`Fonte: ${c.sources[0].label}`,c.sources[0].url]:[])].join('\n');}
function openShare(reel:Reel){window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText(reel))}`,'_blank','noopener,noreferrer');}
function ReelMedia({reel,detail=false}:{reel:Reel;detail?:boolean}){if(reel.videoEmbed)return <figure className={detail?styles.detailVideo:styles.videoMedia}><iframe src={reel.videoEmbed} title={`Vídeo de ${reel.label}`} allow="encrypted-media; picture-in-picture" allowFullScreen /></figure>;const f=fallback(themeFor(reel));const src=reel.image?.url??f.src;const alt=reel.image?.alt??`Imagem relacionada a ${reel.label}`;return <figure className={detail?styles.detailMedia:styles.media}><img src={src} alt={alt} referrerPolicy="no-referrer" style={reel.image?undefined:f.style} onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src=f.src;Object.assign(e.currentTarget.style,f.style);}} /></figure>;}

export default function ReelsExperienceV26(){
  const[detailSlug,setDetailSlug]=useState<string|null>(null);const feedRef=useRef<HTMLDivElement>(null);
  const reels=useMemo<Reel[]>(()=>{
    const family=['gravidez','pai'].map(categoryReel).filter(Boolean) as Reel[];
    const news=['brasil','mundo','politica','tempo','seguranca-zl'].map(journalisticReel).filter(Boolean) as Reel[];
    const lifestyle=['viagens','musica'].map(categoryReel).filter(Boolean) as Reel[];
    const tech=['games','tecnologia','financas','security-briefing','seguranca','appsec-ssdlc'].map(journalisticReel).filter(Boolean) as Reel[];
    const auto=['carros','motos','mecanica'].map(categoryReel).filter(Boolean) as Reel[];
    return[buildTalk(),buildChallenge(),...curiosityReels(),...family,...news,...lifestyle,SERTANEJO,...tech,...auto].filter(mediaReady);
  },[]);
  const detail=detailSlug?reels.find(r=>r.slug===detailSlug):undefined;
  useEffect(()=>{const mq=window.matchMedia('(max-width: 900px)');const sync=()=>{document.documentElement.style.overflow=mq.matches?'hidden':'';document.body.style.overflow=mq.matches?'hidden':'';};sync();mq.addEventListener('change',sync);return()=>{mq.removeEventListener('change',sync);document.documentElement.style.overflow='';document.body.style.overflow='';};},[]);
  return <div className={styles.root} aria-label="Father Giulian News em modo Reels"><div className={styles.feed} ref={feedRef}>{reels.map((reel,index)=><article className={`${styles.reel} ${reel.kind==='special'?styles.special:''}`} data-reel-index={index} key={reel.slug}><ReelMedia reel={reel}/><div className={styles.top}><div className={styles.brand}><span className={styles.mark}>FG</span><span>NEWS · {CURRENT.label}</span></div><div className={styles.counter}>{index+1} / {reels.length}</div></div><div className={styles.content}><div className={styles.category}><span>{reel.emoji}</span>{reel.label}</div><h2 className={styles.title}>{reel.title}</h2><p className={styles.summary}>{reel.detail}</p>{reel.conversation&&<p className={styles.conversation}>💬 {reel.conversation}</p>}<div className={styles.hint}>↑ deslize para descobrir a próxima</div></div><div className={styles.actions}>{reel.kind!=='special'&&<button className={`${styles.action} ${styles.read}`} onClick={()=>setDetailSlug(reel.slug)} aria-label={`Ler ${reel.label}`}><span className={styles.actionIcon}>↗</span><span>Ler</span></button>}<button className={styles.action} onClick={()=>openShare(reel)} aria-label={`Compartilhar ${reel.label}`}><span className={styles.actionIcon}>◉</span><span>WhatsApp</span></button></div><div className={styles.progress}><i style={{width:`${((index+1)/reels.length)*100}%`}}/></div>{index<reels.length-1&&<div className={styles.swipeCue}>⌃</div>}</article>)}</div>{detail&&detail.kind!=='special'&&<div className={styles.detail} role="dialog" aria-modal="true" aria-label={detail.label}><button className={styles.back} onClick={()=>setDetailSlug(null)}>← Voltar</button><button className={styles.detailShare} onClick={()=>openShare(detail)}>↗</button><div className={styles.detailFeed}><section className={styles.detailReel}><ReelMedia reel={detail} detail/><div className={styles.detailShade}/><div className={styles.detailCopy}><small>{detail.emoji} {detail.label} · {detail.content?.badge??'EDIÇÃO DE HOJE'}</small><h2>{detail.title}</h2><p>{detail.detail}</p><p><strong>Continue deslizando para ler.</strong></p></div></section>{(detail.content?.sections??[]).map((section:any,i:number)=><section className={styles.detailReel} key={`${detail.slug}-${i}`}><ReelMedia reel={detail} detail/><div className={styles.detailShade}/><div className={styles.detailCopy}><small>{detail.label} · {i+1}/{detail.content.sections.length}</small><h3>{section.title}</h3>{section.paragraphs?.map((p:string)=><p key={p}>{p}</p>)}{section.bullets?.length?<ul>{section.bullets.map((b:string)=><li key={b}>{b}</li>)}</ul>:null}{i===detail.content.sections.length-1&&detail.content.sources?.length?<div className={styles.sources}>{detail.content.sources.map((s:any)=><a className={styles.source} href={s.url} target="_blank" rel="noreferrer" key={s.url}>Fonte: {s.label} ↗</a>)}</div>:null}</div></section>)}</div></div>}</div>;
}
