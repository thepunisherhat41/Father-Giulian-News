'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './ReelsExperience.module.css';
import { categories } from '@/lib/categories';
import { dailyContent, edition, todayDrops } from '@/lib/daily-content';
import { findCurrentRichMedia } from '@/lib/current-rich-media';
import { applyDailyOverride20260821_10h } from '@/lib/daily-overrides-2026-08-21-10h';

type Reel = any;

const LOVE_REEL = {
  slug: 'amor-do-dia', label: 'Amor do dia', emoji: '❤️', kind: 'special',
  title: 'Para Bruna e para o nosso bebê',
  detail: 'Bruna, eu amo construir esta vida com você. E para você, nosso pequeno amor que ainda estamos conhecendo: já existe um lugar enorme para você na nossa história. Que hoje a nossa casa tenha carinho, paciência e a certeza de que somos uma família crescendo juntos.',
  category: { slug: 'amor-do-dia', label: 'Amor do dia' },
  content: { badge: 'TODO DIA · COM AMOR', title: 'Uma mensagem para vocês dois', summary: 'Um pequeno lembrete diário de amor para Bruna e para o bebê.', sections: [] },
};

const CHALLENGE_REEL = {
  slug: 'desafio-do-casal', label: 'Desafio do casal', emoji: '💞', kind: 'special',
  title: 'Desafio de hoje: 10 minutos só de vocês',
  detail: 'Guardem os celulares por 10 minutos. Cada um conta uma coisa boa do dia, uma coisa que admira no outro e um desejo simples para viverem juntos antes do bebê chegar. Sem corrigir, sem resolver: só ouvir e curtir o momento.',
  category: { slug: 'desafio-do-casal', label: 'Desafio do casal' },
  content: { badge: 'MISSÃO DO DIA', title: '10 minutos só de vocês', summary: 'Uma missão simples para criar conexão e boas memórias durante a gravidez.', sections: [] },
};

function getImage(label: string, title: string) { return findCurrentRichMedia(label, title)?.images?.[0]; }

function isFreshToday(item: any) {
  if (item.kind === 'special') return true;
  const content = item.content;
  if (!content) return false;
  const haystack = [content.badge, content.title, content.summary, content.shareSummary, ...(content.sources ?? []).flatMap((s:any)=>[s.label,s.url])].filter(Boolean).join(' ').toLowerCase();
  const todayTokens = [edition.date?.toLowerCase?.(), edition.dateLabel?.toLowerCase?.(), '24/08/2026', '24 ago 2026', '24 de agosto de 2026', '2026-08-24'];
  return todayTokens.some((token) => token && haystack.includes(token)) || /hoje|nesta segunda|segunda-feira \(24\)|24\/08/.test(haystack);
}

function shareText(slug: string, reel?: Reel) {
  if (reel?.kind === 'special') return `*${reel.label.toUpperCase()} · ${edition.date}*\n\n*${reel.title}*\n\n${reel.detail}`;
  const content = dailyContent[slug];
  const category = categories.find((item) => item.slug === slug);
  if (!content || !category) return '';
  const bullets = content.sections.flatMap((section) => section.bullets ?? []).slice(0, 3);
  return [`*${category.label.toUpperCase()} · ${edition.date}*`,'',`*${content.title}*`,'',content.shareSummary ?? content.summary,...(bullets.length ? ['', ...bullets.map((item) => `- ${item}`)] : []),...(content.sources?.[0] ? ['', `Fonte: ${content.sources[0].label}`, content.sources[0].url] : [])].join('\n');
}

function openShare(slug: string, reel?: Reel) { const text=shareText(slug,reel); if(text) window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,'_blank','noopener,noreferrer'); }

export default function ReelsExperience() {
  applyDailyOverride20260821_10h(true);
  const [detailSlug,setDetailSlug]=useState<string|null>(null);
  const [current,setCurrent]=useState(0);
  const feedRef=useRef<HTMLDivElement>(null);

  const reels=useMemo(()=>{
    const editorial=todayDrops.map((drop)=>({...drop,kind:'editorial',category:categories.find((item)=>item.slug===drop.slug),content:dailyContent[drop.slug],image:getImage(drop.label,drop.title)})).filter((item)=>item.category&&item.content).filter(isFreshToday);
    return [LOVE_REEL,CHALLENGE_REEL,...editorial];
  },[]);
  const detail=detailSlug?reels.find((item)=>item.slug===detailSlug):undefined;

  useEffect(()=>{const mq=window.matchMedia('(max-width: 900px)');const sync=()=>{document.documentElement.style.overflow=mq.matches?'hidden':'';document.body.style.overflow=mq.matches?'hidden':''};sync();mq.addEventListener('change',sync);return()=>{mq.removeEventListener('change',sync);document.documentElement.style.overflow='';document.body.style.overflow=''}},[]);
  useEffect(()=>{const root=feedRef.current;if(!root)return;const nodes=Array.from(root.querySelectorAll<HTMLElement>('[data-reel-index]'));const observer=new IntersectionObserver((entries)=>{const visible=entries.filter((entry)=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)setCurrent(Number((visible.target as HTMLElement).dataset.reelIndex??0));},{root,threshold:[.55,.72,.9]});nodes.forEach((node)=>observer.observe(node));return()=>observer.disconnect()},[reels.length]);

  return <div className={styles.root} aria-label="Father Giulian News em modo Reels"><div className={styles.feed} ref={feedRef}>
    {reels.map((reel,index)=><article className={`${styles.reel} ${reel.kind==='special'?styles.special:''}`} data-reel-index={index} key={reel.slug}>
      {reel.image?<figure className={styles.media}><img src={reel.image.url} alt={reel.image.alt} referrerPolicy="no-referrer" /></figure>:<div className={styles.art} aria-hidden="true"><span>{reel.emoji}</span></div>}
      <div className={styles.top}><div className={styles.brand}><span className={styles.mark}>FG</span><span>NEWS · {edition.dateLabel}</span></div><div className={styles.counter}>{index+1} / {reels.length}</div></div>
      <div className={styles.content}><div className={styles.category}><span>{reel.emoji}</span>{reel.label}</div><h2 className={styles.title}>{reel.title}</h2><p className={styles.summary}>{reel.detail}</p><div className={styles.hint}>↑ deslize para o próximo reel</div></div>
      <div className={styles.actions}>{reel.kind!=='special'&&<button className={`${styles.action} ${styles.read}`} onClick={()=>setDetailSlug(reel.slug)}><span className={styles.actionIcon}>↗</span><span>Ler</span></button>}<button className={styles.action} onClick={()=>openShare(reel.slug,reel)}><span className={styles.actionIcon}>◉</span><span>WhatsApp</span></button></div>
      <div className={styles.progress}><i style={{width:`${((index+1)/reels.length)*100}%`}} /></div>{index<reels.length-1&&<div className={styles.swipeCue}>⌃</div>}
    </article>)}
  </div>
  {detail&&detail.kind!=='special'&&<div className={styles.detail} role="dialog" aria-modal="true" aria-label={detail.label}><button className={styles.back} onClick={()=>setDetailSlug(null)}>← Voltar</button><button className={styles.detailShare} onClick={()=>openShare(detail.slug,detail)}>↗</button><div className={styles.detailFeed}><section className={styles.detailReel}>{detail.image&&<figure className={styles.detailMedia}><img src={detail.image.url} alt="" referrerPolicy="no-referrer" /></figure>}<div className={styles.detailShade}/><div className={styles.detailCopy}><small>{detail.emoji} {detail.label} · {detail.content.badge??'EDIÇÃO DE HOJE'}</small><h2>{detail.content.title}</h2><p>{detail.content.summary}</p><p><strong>Continue deslizando para ler a matéria.</strong></p></div></section>{detail.content.sections.map((section:any,index:number)=><section className={styles.detailReel} key={`${detail.slug}-${section.title}-${index}`}>{detail.image&&<figure className={styles.detailMedia}><img src={detail.image.url} alt="" referrerPolicy="no-referrer" /></figure>}<div className={styles.detailShade}/><div className={styles.detailCopy}><small>{detail.label} · {index+1}/{detail.content.sections.length}</small><h3>{section.title}</h3>{section.paragraphs?.map((p:string)=><p key={p}>{p}</p>)}{section.bullets?.length?<ul>{section.bullets.map((b:string)=><li key={b}>{b}</li>)}</ul>:null}{index===detail.content.sections.length-1&&detail.content.sources?.[0]?<a className={styles.source} href={detail.content.sources[0].url} target="_blank" rel="noreferrer">Fonte: {detail.content.sources[0].label} ↗</a>:null}</div></section>)}</div></div>}
  </div>;
}
