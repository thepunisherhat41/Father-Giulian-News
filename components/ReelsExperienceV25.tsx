'use client';

import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import styles from './ReelsExperience.module.css';
import { categories } from '@/lib/categories';
import { dailyContent } from '@/lib/daily-content';
import { findCurrentRichMedia } from '@/lib/current-rich-media';
import { curiosityCollections } from '@/lib/curiosity-collections';

type Reel = any;
type AiTheme = 'conversation'|'challenge'|'science'|'space'|'body'|'animals'|'history'|'psychology'|'nature'|'pregnancy'|'parenthood'|'brazil'|'world'|'politics'|'weather'|'local'|'travel'|'music'|'games'|'technology'|'finance'|'security'|'cyber'|'appsec'|'cars'|'motos'|'mechanic';

const CURRENT = { date: '25/08/2026', label: '25 AGO 2026', iso: '2026-08-25' } as const;
const NEWS_ORDER = ['brasil','mundo','politica','tempo','seguranca-zl'];
const LIFESTYLE_ORDER = ['viagens','musica'];
const TECH_ORDER = ['games','tecnologia','financas','security-briefing','seguranca','appsec-ssdlc'];
const AUTO_ORDER = ['carros','motos','mecanica'];
const ALWAYS_DAILY = new Set(['gravidez','pai','viagens','musica','games','carros','motos','mecanica']);

const TALK_REEL: Reel = {
  slug:'papo-do-dia', label:'Papo de hoje', emoji:'💬', kind:'special',
  title:'Qual foi a coisa mais pequena que melhorou o seu dia sem você planejar?',
  detail:'Pode ser uma mensagem, uma comida, uma música, um caminho diferente, uma piada ou cinco minutos de paz. Cada um escolhe uma e conta por que aquilo chamou atenção.',
  conversation:'Depois escolham uma dessas pequenas coisas que valeria a pena repetir de propósito nesta semana.',
  category:{slug:'papo-do-dia',label:'Papo de hoje'}, content:{badge:'PAPO DE HOJE',title:'Uma pergunta simples para conversar',summary:'Sem resposta certa e sem clima artificial.',sections:[]}, aiTheme:'conversation'
};
const CHALLENGE_REEL: Reel = {
  slug:'desafio-do-casal', label:'Desafio do casal', emoji:'💞', kind:'special',
  title:'Desafio de hoje: 15 minutos sem tela para escolher uma coisa da semana',
  detail:'Guardem os celulares por 15 minutos. Cada um propõe uma coisa simples que gostaria de fazer até domingo — comida, passeio, filme, jogo ou descanso — e vocês escolhem uma para realmente colocar na agenda.',
  category:{slug:'desafio-do-casal',label:'Desafio do casal'}, content:{badge:'DESAFIO DO DIA',title:'Uma decisão pequena e concreta',summary:'Menos performance, mais vida real.',sections:[]}, aiTheme:'challenge'
};
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
  title:'Corinthians: último resultado, elenco e próximo clássico',
  detail:'O último resultado confirmado foi a derrota por 2 a 1 para o Coritiba. O próximo jogo oficial é contra o Santos, domingo (30), às 16h, na Neo Química Arena.',
  videoEmbed:'https://www.youtube.com/embed/wNwIwusgns8?autoplay=1&mute=1&loop=1&playlist=wNwIwusgns8&playsinline=1&rel=0',
  category:{slug:'corinthians-hoje',label:'Corinthians Hoje'},
  content:{badge:'CORINTHIANS · 24/08',title:'Corinthians: último resultado e próximos jogos',summary:'Contexto do último dia sem fingir que é notícia de 25/08.',sections:[],sources:[{label:'ge · Corinthians · 24/08/2026',url:'https://ge.globo.com/futebol/times/corinthians/'}]}
};

const EXACT_COVERS: Partial<Record<AiTheme,string>> = {
  conversation:'./reel-ai/covers/conversation.svg', challenge:'./reel-ai/covers/challenge.svg', science:'./reel-ai/covers/science.svg', body:'./reel-ai/covers/body.svg'
};
const CLEAN_POS: Partial<Record<AiTheme,[number,number]>> = { space:[0,1],history:[1,1],animals:[2,1],nature:[3,1],psychology:[2,0],technology:[2,0] };
const MAIN_POS: Record<string,[number,number]> = { pregnancy:[0,3],brazil:[1,3],travel:[2,3],music:[0,4],games:[1,4],security:[2,4],cars:[0,5],motos:[1,5],mechanic:[2,5],conversation:[0,0],challenge:[1,0],science:[2,0],space:[0,1],body:[1,1],animals:[2,1],history:[0,2],psychology:[1,2],nature:[2,2] };
const NEWS_POS: Record<string,[number,number]> = { world:[0,0],politics:[1,0],weather:[2,0],local:[0,1],finance:[1,1],technology:[2,1],cyber:[0,2],appsec:[1,2],parenthood:[2,2] };

function normalize(value:string){return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();}
function curiosityTheme(value:string):AiTheme{const v=normalize(value);if(v.includes('espaco')||v.includes('astronom'))return'space';if(v.includes('corpo')||v.includes('humano'))return'body';if(v.includes('animal'))return'animals';if(v.includes('historia')||v.includes('cultura'))return'history';if(v.includes('psicolog')||v.includes('mente')||v.includes('comportamento'))return'psychology';if(v.includes('natureza')||v.includes('terra')||v.includes('planeta')||v.includes('oceano'))return'nature';if(v.includes('tecnolog'))return'technology';return'science';}
function aiThemeFor(reel:Reel):AiTheme{if(reel.aiTheme)return reel.aiTheme;if(reel.slug==='papo-do-dia')return'conversation';if(reel.slug==='desafio-do-casal')return'challenge';if(reel.kind==='curiosity')return curiosityTheme(`${reel.label} ${reel.title}`);const m:Record<string,AiTheme>={gravidez:'pregnancy',pai:'parenthood',brasil:'brazil',mundo:'world',politica:'politics',tempo:'weather','seguranca-zl':'local',viagens:'travel',musica:'music','sertanejo-da-roca':'music',games:'games',tecnologia:'technology',financas:'finance','security-briefing':'security',seguranca:'cyber','appsec-ssdlc':'appsec',carros:'cars',motos:'motos',mecanica:'mechanic'};return m[reel.slug]??'science';}
function cropStyle(cols:number,rows:number,col:number,row:number):CSSProperties{return{position:'absolute',width:`${cols*100}%`,height:`${rows*100}%`,maxWidth:'none',left:`-${col*100}%`,top:`-${row*100}%`,objectFit:'fill',display:'block',filter:'none'};}
function localArtwork(theme:AiTheme){const exact=EXACT_COVERS[theme];if(exact)return{src:exact,style:{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'} as CSSProperties};const clean=CLEAN_POS[theme];if(clean)return{src:'/reel-ai/clean-covers.jpg?rev=20260825',style:cropStyle(4,2,clean[0],clean[1])};const news=NEWS_POS[theme];if(news)return{src:'/reel-ai/sprite-news.jpg?rev=20260825',style:cropStyle(3,3,news[0],news[1])};const pos=MAIN_POS[theme]??MAIN_POS.science;return{src:'/reel-ai/sprite.jpg?rev=20260825',style:cropStyle(3,6,pos[0],pos[1])};}
function getImage(label:string,title:string){const image=findCurrentRichMedia(label,title)?.images?.[0];return image?{url:image.url,alt:image.alt??label}:undefined;}
function withMedia(reel:Reel){return reel.videoEmbed||reel.image?reel:{...reel,aiTheme:aiThemeFor(reel)};}
function todayTokens(){return[CURRENT.date.toLowerCase(),CURRENT.iso,'25/08','25 ago 2026'];}
function contentText(content:any){return[content?.badge,content?.title,content?.summary,content?.shareSummary,...(content?.sources??[]).flatMap((s:any)=>[s.label,s.url])].filter(Boolean).join(' ').toLowerCase();}
function hasToday(content:any){const text=contentText(content);return todayTokens().some(t=>text.includes(t));}
function hasTodaySource(content:any){const text=(content?.sources??[]).flatMap((s:any)=>[s.label,s.url]).filter(Boolean).join(' ').toLowerCase();return todayTokens().some(t=>text.includes(t));}
function isFreshToday(item:Reel){if(item.kind==='special'||item.kind==='special-media'||item.kind==='curiosity')return true;if(ALWAYS_DAILY.has(item.slug))return true;if(!item.content)return false;if(item.kind==='osint'||item.kind==='local-osint')return hasTodaySource(item.content);return hasToday(item.content);}
function categoryReel(slug:string):Reel|undefined{const category=categories.find(i=>i.slug===slug);const content=dailyContent[slug];if(!category||!content)return;return withMedia({slug,label:category.label,emoji:category.emoji,kind:slug==='seguranca-zl'?'local-osint':'editorial',title:content.title,detail:content.summary,category,content,image:getImage(category.label,content.title)});}
function curiosityReels():Reel[]{const seed=25082026;return curiosityCollections.map((collection,index)=>{const story=collection.stories[(seed+index)%collection.stories.length];const content={badge:`CURIOSIDADE · ${collection.title.toUpperCase()}`,title:story.title,summary:story.hook,shareSummary:story.shareText,sections:[{title:'Como isso funciona',paragraphs:story.explanation},{title:'Conexão inesperada',paragraphs:[story.connection]},{title:'Para guardar',paragraphs:[story.remember]}],sources:story.sourceLabel&&story.sourceUrl?[{label:story.sourceLabel,url:story.sourceUrl}]:[]};return withMedia({slug:`curiosidade-${collection.id}`,label:`Curiosidade · ${collection.title}`,emoji:collection.emoji,kind:'curiosity',title:story.title,detail:story.hook,category:{slug:`curiosidade-${collection.id}`,label:collection.title},content,image:getImage('Curiosidades',story.title)});});}
function shareText(reel:Reel){const content=reel.content;if(reel.kind==='special'||reel.kind==='special-media')return[`*${reel.label.toUpperCase()} · ${CURRENT.date}*`,'',`*${reel.title}*`,'',reel.detail,...(reel.conversation?['',`💬 ${reel.conversation}`]:[])].join('\n');const bullets=content?.sections?.flatMap((s:any)=>s.bullets??[]).slice(0,3)??[];return[`*${String(reel.label).toUpperCase()} · ${CURRENT.date}*`,'',`*${reel.title}*`,'',content?.shareSummary??reel.detail,...(bullets.length?['',...bullets.map((b:string)=>`- ${b}`)]:[]),...(content?.sources?.[0]?['',`Fonte: ${content.sources[0].label}`,content.sources[0].url]:[])].join('\n');}
function openShare(reel:Reel){window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText(reel))}`,'_blank','noopener,noreferrer');}
function ReelMedia({reel,detail=false}:{reel:Reel;detail?:boolean}){if(reel.videoEmbed)return <figure className={detail?styles.detailVideo:styles.videoMedia}><iframe src={reel.videoEmbed} title={`Vídeo de ${reel.label}`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /></figure>;if(reel.image)return <figure className={detail?styles.detailMedia:styles.media}><img src={reel.image.url} alt={reel.image.alt??reel.label} referrerPolicy="no-referrer" onError={e=>{const fb=localArtwork(aiThemeFor(reel));e.currentTarget.onerror=null;e.currentTarget.src=fb.src;Object.assign(e.currentTarget.style,fb.style);}} /></figure>;const fb=localArtwork(aiThemeFor(reel));return <figure className={detail?styles.detailMedia:styles.media}><img src={fb.src} alt={`Arte para ${reel.label}`} style={fb.style} /></figure>;}

export default function ReelsExperienceV25(){
  const [detailSlug,setDetailSlug]=useState<string|null>(null);const feedRef=useRef<HTMLDivElement>(null);
  const reels=useMemo<Reel[]>(()=>{const family=['gravidez','pai'].map(categoryReel).filter(Boolean) as Reel[];const news=NEWS_ORDER.map(categoryReel).filter(Boolean) as Reel[];const lifestyle=LIFESTYLE_ORDER.map(categoryReel).filter(Boolean) as Reel[];const tech=TECH_ORDER.map(categoryReel).filter(Boolean) as Reel[];const auto=AUTO_ORDER.map(categoryReel).filter(Boolean) as Reel[];return[withMedia(TALK_REEL),withMedia(CHALLENGE_REEL),...curiosityReels(),...family,...news,withMedia(CORINTHIANS_REEL),...lifestyle,withMedia(SERTANEJO_REEL),...tech,...auto].filter(isFreshToday);},[]);
  const detail=detailSlug?reels.find(r=>r.slug===detailSlug):undefined;
  useEffect(()=>{const mq=window.matchMedia('(max-width: 900px)');const sync=()=>{document.documentElement.style.overflow=mq.matches?'hidden':'';document.body.style.overflow=mq.matches?'hidden':'';};sync();mq.addEventListener('change',sync);return()=>{mq.removeEventListener('change',sync);document.documentElement.style.overflow='';document.body.style.overflow='';};},[]);
  return <div className={styles.root} aria-label="Father Giulian News em modo Reels"><div className={styles.feed} ref={feedRef}>{reels.map((reel,index)=><article className={`${styles.reel} ${reel.kind==='special'?styles.special:''}`} data-reel-index={index} key={reel.slug}><ReelMedia reel={reel}/><div className={styles.top}><div className={styles.brand}><span className={styles.mark}>FG</span><span>NEWS · {CURRENT.label}</span></div><div className={styles.counter}>{index+1} / {reels.length}</div></div><div className={styles.content}><div className={styles.category}><span>{reel.emoji}</span>{reel.label}{(reel.kind==='osint'||reel.kind==='local-osint')&&<b className={styles.verified}>HOJE</b>}</div><h2 className={styles.title}>{reel.title}</h2><p className={styles.summary}>{reel.detail}</p>{reel.conversation&&<p className={styles.conversation}>💬 {reel.conversation}</p>}<div className={styles.hint}>↑ deslize para descobrir a próxima</div></div><div className={styles.actions}>{reel.kind!=='special'&&<button className={`${styles.action} ${styles.read}`} onClick={()=>setDetailSlug(reel.slug)} aria-label={`Ler ${reel.label}`}><span className={styles.actionIcon}>↗</span><span>Ler</span></button>}<button className={styles.action} onClick={()=>openShare(reel)} aria-label={`Compartilhar ${reel.label}`}><span className={styles.actionIcon}>◉</span><span>WhatsApp</span></button></div><div className={styles.progress}><i style={{width:`${((index+1)/reels.length)*100}%`}}/></div>{index<reels.length-1&&<div className={styles.swipeCue}>⌃</div>}</article>)}</div>{detail&&detail.kind!=='special'&&<div className={styles.detail} role="dialog" aria-modal="true" aria-label={detail.label}><button className={styles.back} onClick={()=>setDetailSlug(null)}>← Voltar</button><button className={styles.detailShare} onClick={()=>openShare(detail)}>↗</button><div className={styles.detailFeed}><section className={styles.detailReel}><ReelMedia reel={detail} detail/><div className={styles.detailShade}/><div className={styles.detailCopy}><small>{detail.emoji} {detail.label} · {detail.content?.badge??'EDIÇÃO DE HOJE'}</small><h2>{detail.title}</h2><p>{detail.detail}</p><p><strong>Continue deslizando para ler.</strong></p></div></section>{(detail.content?.sections??[]).map((section:any,i:number)=><section className={styles.detailReel} key={`${detail.slug}-${i}`}><ReelMedia reel={detail} detail/><div className={styles.detailShade}/><div className={styles.detailCopy}><small>{detail.label} · {i+1}/{detail.content.sections.length}</small><h3>{section.title}</h3>{section.paragraphs?.map((p:string)=><p key={p}>{p}</p>)}{section.bullets?.length?<ul>{section.bullets.map((b:string)=><li key={b}>{b}</li>)}</ul>:null}{i===detail.content.sections.length-1&&detail.content.sources?.length?<div className={styles.sources}>{detail.content.sources.map((s:any)=><a className={styles.source} href={s.url} target="_blank" rel="noreferrer" key={s.url}>Fonte: {s.label} ↗</a>)}</div>:null}</div></section>)}</div></div>}</div>;
}
