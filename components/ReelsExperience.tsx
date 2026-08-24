'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './ReelsExperience.module.css';
import { categories } from '@/lib/categories';
import { dailyContent, edition } from '@/lib/daily-content';
import { findCurrentRichMedia } from '@/lib/current-rich-media';

type Reel = any;
type ReelImage = { url: string; alt: string };

const TALK_REEL: Reel = {
  slug: 'papo-do-dia', label: 'Papo de hoje', emoji: '💬', kind: 'special',
  title: 'Uma pergunta que vocês talvez nunca tenham feito',
  detail: 'Se vocês pudessem guardar em uma cápsula do tempo apenas três coisas da vida de vocês hoje para o bebê conhecer no futuro, o que colocariam?',
  conversation: 'Cada um escolhe três coisas e explica por quê.',
  category: { slug: 'papo-do-dia', label: 'Papo do dia' },
  content: { badge: 'CONVERSA DO DIA', title: 'Uma pergunta para render conversa', summary: 'Um assunto leve para vocês conversarem sem parecer roteiro pronto.', sections: [] },
};

const CHALLENGE_REEL: Reel = {
  slug: 'desafio-do-casal', label: 'Desafio do casal', emoji: '💞', kind: 'special',
  title: 'Desafio de hoje: escolham uma música um para o outro',
  detail: 'Cada um escolhe uma música que lembra uma fase boa de vocês. Ouçam as duas sem mexer no celular e contem por que escolheram aquela música.',
  category: { slug: 'desafio-do-casal', label: 'Desafio do casal' },
  content: { badge: 'DESAFIO DO DIA', title: 'Duas músicas e uma memória', summary: 'Uma missão simples para criar conversa e memória boa.', sections: [] },
};

const SERTANEJO_REEL: Reel = {
  slug: 'sertanejo-da-roca', label: 'Sertanejo da Roça', emoji: '🪕', kind: 'special-media',
  title: 'Moda de viola do dia: Chico Mineiro',
  detail: 'Tonico & Tinoco transformaram uma história de amizade, estrada e perda em um dos grandes clássicos da música caipira brasileira. É daquelas para ouvir prestando atenção na letra e no jeito antigo de contar uma história cantando.',
  conversation: 'Qual música antiga de roça ou sertanejo raiz lembra família, viagem ou infância para vocês?',
  videoEmbed: 'https://www.youtube.com/embed/0MnPbJ8hmeE?autoplay=1&mute=1&loop=1&playlist=0MnPbJ8hmeE&playsinline=1&rel=0',
  category: { slug: 'sertanejo-da-roca', label: 'Sertanejo da Roça' },
  content: {
    badge: 'MODA DE VIOLA DO DIA',
    title: 'Chico Mineiro · Tonico & Tinoco',
    summary: 'Uma descoberta diária de moda de viola, sertanejo raiz e música caipira.',
    sections: [{ title: 'Para ouvir melhor', bullets: ['Preste atenção na narrativa, não só no refrão.', 'A canção é um exemplo clássico de música caipira como história oral cantada.'] }],
    sources: [{ label: 'Tonico & Tinoco · Topic', url: 'https://www.youtube.com/watch?v=0MnPbJ8hmeE' }],
  },
};

const CORINTHIANS_REEL: Reel = {
  slug: 'corinthians-hoje', label: 'Corinthians Hoje', emoji: '⚫⚪', kind: 'osint',
  title: 'Timão hoje: clássico no radar e bastidores pressionados',
  detail: 'Radar de 24/08: depois do 2 a 1 para o Coritiba, o Corinthians está em 10º com 32 pontos. O próximo jogo será o clássico contra o Santos, domingo (30), às 16h, na Neo Química Arena.',
  conversation: 'Palpite para Corinthians x Santos? E qual deveria ser a prioridade agora: Brasileirão ou Libertadores?',
  videoEmbed: 'https://www.youtube.com/embed/wNwIwusgns8?autoplay=1&mute=1&loop=1&playlist=wNwIwusgns8&playsinline=1&rel=0',
  category: { slug: 'corinthians-hoje', label: 'Corinthians Hoje' },
  content: {
    badge: 'OSINT DO DIA · 24/08', title: 'Corinthians: o que realmente importa hoje',
    summary: 'Radar diário cruzando notícias do dia, situação do elenco, resultado mais recente e agenda confirmada.',
    sections: [
      { title: 'O que aconteceu', paragraphs: ['O Corinthians perdeu por 2 a 1 para o Coritiba no domingo e chegou ao clássico com pressão por reação no Brasileiro.'], bullets: ['Breno Bidon recebeu o terceiro amarelo e está suspenso contra o Santos.', 'Rodrigo Garro, que cumpriu suspensão contra o Coritiba, pode voltar.'] },
      { title: 'Próximos jogos', bullets: ['30/08 · 16h — Corinthians x Santos · Neo Química Arena · Brasileirão.', '06/09 · 19h30 — Corinthians x Chapecoense · Neo Química Arena · Brasileirão.', 'Libertadores — Corinthians x Estudiantes nas quartas; datas-base em setembro.'] },
      { title: 'Bastidores', paragraphs: ['Reportagens de hoje também apontam pressão financeira envolvendo direitos de imagem. Como os valores vêm de apuração jornalística, o radar os apresenta como informação reportada, não como dado auditado oficial do clube.'] },
    ],
    sources: [
      { label: 'ge · Corinthians · 24/08/2026', url: 'https://ge.globo.com/futebol/times/corinthians/noticia/2026/08/24/analise-desfalques-e-falta-de-eficiencia-impedem-reacao-do-corinthians-no-brasileirao.ghtml' },
      { label: 'UOL · Corinthians · 24/08/2026', url: 'https://www.uol.com.br/esporte/futebol/ultimas-noticias/2026/08/24/corinthians-aguarda-entrada-de-recurso-para-cumprir-promessa-ao-elenco.ghtm' },
    ],
  },
};

const FEED_PRIORITY = [
  'papo-do-dia', 'desafio-do-casal',
  'curiosidade-ciencia', 'curiosidade-planeta', 'curiosidade-animais',
  'gravidez', 'pai',
  'brasil', 'mundo', 'politica', 'tempo', 'seguranca-zl', 'corinthians-hoje',
  'viagens', 'musica', 'sertanejo-da-roca', 'games', 'tecnologia', 'financas',
  'security-briefing', 'seguranca', 'appsec-ssdlc',
  'carros', 'motos', 'mecanica',
];

const CURIOSITY_TYPES = [
  { slug: 'curiosidade-ciencia', source: 'curiosidades', label: 'Curiosidade · Ciência', emoji: '🔬' },
  { slug: 'curiosidade-planeta', source: 'planeta', label: 'Curiosidade · Planeta', emoji: '🌎' },
  { slug: 'curiosidade-animais', source: 'animais', label: 'Curiosidade · Animais', emoji: '🐾' },
];

function priorityOf(slug: string) { const index = FEED_PRIORITY.indexOf(slug); return index === -1 ? 999 : index; }
function getImage(label: string, title: string): ReelImage | undefined { const image = findCurrentRichMedia(label, title)?.images?.[0]; return image ? { url: image.url, alt: image.alt ?? label } : undefined; }

const XML_ENTITIES: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' };
function escapeXml(value: string) { return value.replace(/[&<>"']/g, (char) => XML_ENTITIES[char] ?? char); }
function paletteFor(seed: string) {
  const palettes = [['#301934','#7b2cbf','#ef476f'],['#071b33','#0d5c63','#44a1a0'],['#151515','#333333','#c9a227'],['#132a13','#31572c','#90a955'],['#161a30','#31304d','#b6bbc4'],['#3c096c','#7b2cbf','#c77dff'],['#172554','#1d4ed8','#38bdf8'],['#3f1d0b','#9a3412','#fb923c']];
  let hash=0; for(let i=0;i<seed.length;i+=1) hash=((hash<<5)-hash+seed.charCodeAt(i))|0; return palettes[Math.abs(hash)%palettes.length];
}
function contextualVisual(reel: Reel): ReelImage {
  const [a,b,c]=paletteFor(`${reel.slug}-${reel.title}`); const label=escapeXml(String(reel.label??'Father Giulian News').slice(0,30)); const emoji=escapeXml(String(reel.emoji??'•'));
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920" viewBox="0 0 1080 1920"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${a}"/><stop offset=".55" stop-color="${b}"/><stop offset="1" stop-color="${c}"/></linearGradient><radialGradient id="glow"><stop stop-color="#fff" stop-opacity=".28"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><rect width="1080" height="1920" fill="url(#bg)"/><circle cx="850" cy="360" r="430" fill="url(#glow)"/><path d="M-80 1370 C260 1160 430 1510 760 1250 C940 1110 1080 1160 1200 1030 L1200 1920 L-80 1920Z" fill="#000" opacity=".27"/><text x="90" y="700" font-size="230" font-family="Apple Color Emoji,Segoe UI Emoji,sans-serif">${emoji}</text><text x="92" y="790" fill="#fff" fill-opacity=".78" font-size="44" font-weight="700" font-family="Arial,sans-serif" letter-spacing="4">${label.toUpperCase()}</text></svg>`;
  return { url:`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`, alt:`Ilustração editorial contextual para ${reel.label}` };
}
function withMandatoryMedia(reel: Reel): Reel { if(reel.videoEmbed||reel.image)return reel; return {...reel,image:contextualVisual(reel)}; }

function editionTokens(){const tokens=new Set<string>();const d=String(edition.date??'').trim();const l=String(edition.dateLabel??'').trim();if(d)tokens.add(d.toLowerCase());if(l)tokens.add(l.toLowerCase());const m=d.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);if(m){const[,day,month,year]=m;tokens.add(`${year}-${month}-${day}`);tokens.add(`${day}/${month}/${year}`);}return Array.from(tokens);}
function hasEditionToken(content:any){const h=[content?.badge,content?.title,content?.summary,content?.shareSummary,...(content?.sources??[]).flatMap((s:any)=>[s.label,s.url])].filter(Boolean).join(' ').toLowerCase();return editionTokens().some(t=>h.includes(t));}
function hasSameDaySource(content:any){const h=(content?.sources??[]).flatMap((s:any)=>[s.label,s.url]).filter(Boolean).join(' ').toLowerCase();return editionTokens().some(t=>h.includes(t));}
function isFreshToday(item:Reel){if(item.kind==='special'||item.kind==='special-media'||item.kind==='curiosity')return true;if(!item.content)return false;if(item.kind==='osint'||item.slug==='seguranca-zl')return hasSameDaySource(item.content);return hasEditionToken(item.content);}

function shareText(slug:string,reel?:Reel){if(reel?.kind==='special'||reel?.kind==='special-media'){return [`*${reel.label.toUpperCase()} · ${edition.date}*`,'',`*${reel.title}*`,'',reel.detail,...(reel.conversation?['',`💬 ${reel.conversation}`]:[])].join('\n');}const content=reel?.content??dailyContent[slug];const category=reel?.category??categories.find(i=>i.slug===slug);if(!content||!category)return'';const bullets=content.sections?.flatMap((s:any)=>s.bullets??[]).slice(0,3)??[];return [`*${category.label.toUpperCase()} · ${edition.date}*`,'',`*${content.title}*`,'',content.shareSummary??content.summary,...(bullets.length?['',...bullets.map((i:string)=>`- ${i}`)]:[]),...(content.sources?.[0]?['',`Fonte: ${content.sources[0].label}`,content.sources[0].url]:[])].join('\n');}
function openShare(slug:string,reel?:Reel){const text=shareText(slug,reel);if(text)window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,'_blank','noopener,noreferrer');}

export default function ReelsExperience(){
  const[detailSlug,setDetailSlug]=useState<string|null>(null); const feedRef=useRef<HTMLDivElement>(null);
  const reels=useMemo<Reel[]>(()=>{
    const specials=[TALK_REEL,CHALLENGE_REEL].map(withMandatoryMedia);
    const curiosities=CURIOSITY_TYPES.map(type=>{const content=dailyContent[type.source];if(!content)return undefined;return withMandatoryMedia({slug:type.slug,label:type.label,emoji:type.emoji,kind:'curiosity',title:content.title,detail:content.summary,content,category:{slug:type.slug,label:type.label},image:getImage(categories.find(c=>c.slug===type.source)?.label??type.label,content.title)});}).filter(Boolean) as Reel[];
    const excluded=new Set(['hoje','curiosidades','planeta','animais']);
    const editorial=categories.filter(category=>!excluded.has(category.slug)).map(category=>{const content=dailyContent[category.slug];if(!content)return undefined;return withMandatoryMedia({slug:category.slug,label:category.label,emoji:category.emoji,kind:category.slug==='seguranca-zl'?'local-osint':'editorial',title:content.title,detail:content.summary,category,content,image:getImage(category.label,content.title)});}).filter(Boolean).filter(item=>isFreshToday(item as Reel)) as Reel[];
    return [...specials,...curiosities,...editorial,withMandatoryMedia({...SERTANEJO_REEL}),withMandatoryMedia({...CORINTHIANS_REEL})].filter(isFreshToday).sort((a,b)=>priorityOf(a.slug)-priorityOf(b.slug));
  },[]);
  const detail=detailSlug?reels.find(item=>item.slug===detailSlug):undefined;
  useEffect(()=>{const mq=window.matchMedia('(max-width: 900px)');const sync=()=>{document.documentElement.style.overflow=mq.matches?'hidden':'';document.body.style.overflow=mq.matches?'hidden':''};sync();mq.addEventListener('change',sync);return()=>{mq.removeEventListener('change',sync);document.documentElement.style.overflow='';document.body.style.overflow=''}},[]);
  return <div className={styles.root} aria-label="Father Giulian News em modo Reels"><div className={styles.feed} ref={feedRef}>{reels.map((reel,index)=><article className={`${styles.reel} ${reel.kind==='special'?styles.special:''}`} data-reel-index={index} key={reel.slug}>{reel.videoEmbed?<figure className={styles.videoMedia}><iframe src={reel.videoEmbed} title={`Vídeo de ${reel.label}`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /></figure>:<figure className={styles.media}><img src={reel.image.url} alt={reel.image.alt??reel.label} referrerPolicy="no-referrer" /></figure>}<div className={styles.top}><div className={styles.brand}><span className={styles.mark}>FG</span><span>NEWS · {edition.dateLabel}</span></div><div className={styles.counter}>{index+1} / {reels.length}</div></div><div className={styles.content}><div className={styles.category}><span>{reel.emoji}</span>{reel.label}{(reel.kind==='osint'||reel.kind==='local-osint')&&<b className={styles.verified}>HOJE</b>}</div><h2 className={styles.title}>{reel.title}</h2><p className={styles.summary}>{reel.detail}</p>{reel.conversation&&<p className={styles.conversation}>💬 {reel.conversation}</p>}<div className={styles.hint}>↑ deslize para descobrir a próxima</div></div><div className={styles.actions}>{reel.kind!=='special'&&reel.kind!=='special-media'&&<button className={`${styles.action} ${styles.read}`} onClick={()=>setDetailSlug(reel.slug)} aria-label={`Ler ${reel.label}`}><span className={styles.actionIcon}>↗</span><span>Ler</span></button>}<button className={styles.action} onClick={()=>openShare(reel.slug,reel)} aria-label={`Compartilhar ${reel.label}`}><span className={styles.actionIcon}>◉</span><span>WhatsApp</span></button></div><div className={styles.progress}><i style={{width:`${((index+1)/reels.length)*100}%`}}/></div>{index<reels.length-1&&<div className={styles.swipeCue}>⌃</div>}</article>)}</div>{detail&&detail.kind!=='special'&&detail.kind!=='special-media'&&<div className={styles.detail} role="dialog" aria-modal="true" aria-label={detail.label}><button className={styles.back} onClick={()=>setDetailSlug(null)}>← Voltar</button><button className={styles.detailShare} onClick={()=>openShare(detail.slug,detail)}>↗</button><div className={styles.detailFeed}><section className={styles.detailReel}>{detail.videoEmbed?<figure className={styles.detailVideo}><iframe src={detail.videoEmbed} title={`Vídeo de ${detail.label}`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /></figure>:<figure className={styles.detailMedia}><img src={detail.image.url} alt={detail.image.alt??''} referrerPolicy="no-referrer" /></figure>}<div className={styles.detailShade}/><div className={styles.detailCopy}><small>{detail.emoji} {detail.label} · {detail.content.badge??'EDIÇÃO DE HOJE'}</small><h2>{detail.content.title}</h2><p>{detail.content.summary}</p><p><strong>Continue deslizando para ler.</strong></p></div></section>{detail.content.sections?.map((section:any,sectionIndex:number)=><section className={styles.detailReel} key={`${detail.slug}-${section.title}-${sectionIndex}`}><figure className={styles.detailMedia}><img src={detail.image.url} alt="" referrerPolicy="no-referrer" /></figure><div className={styles.detailShade}/><div className={styles.detailCopy}><small>{detail.label} · {sectionIndex+1}/{detail.content.sections.length}</small><h3>{section.title}</h3>{section.paragraphs?.map((p:string)=><p key={p}>{p}</p>)}{section.bullets?.length?<ul>{section.bullets.map((b:string)=><li key={b}>{b}</li>)}</ul>:null}{sectionIndex===detail.content.sections.length-1&&detail.content.sources?.length?<div className={styles.sources}>{detail.content.sources.map((source:any)=><a className={styles.source} href={source.url} target="_blank" rel="noreferrer" key={source.url}>Fonte: {source.label} ↗</a>)}</div>:null}</div></section>)}</div></div>}</div>;
}
