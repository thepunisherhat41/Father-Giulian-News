'use client';
import {useEffect,useRef,useState} from 'react';
import './news-reels-v2.css';
type Source={label:string,url:string,publishedAt?:string};
type Card={id:string,group:string,type:string,title:string,summary:string,details:string[],visual:string,eventDate:string,news:boolean,sources:Source[]};
type Edition={editionDate:string,timezone:string,updatedAt:string,cards:Card[]};
function br(d:string){return d.split('-').reverse().join('/')}
function today(){const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());const p=Object.fromEntries(parts.map(x=>[x.type,x.value]));return [p.year,p.month,p.day].join('-')}
export default function NewsReels({edition}:{edition:Edition}){
 const [current,setCurrent]=useState(0),[indexOpen,setIndexOpen]=useState(false),[more,setMore]=useState(false),[favorites,setFavorites]=useState<string[]>([]),[localToday,setLocalToday]=useState(edition.editionDate);
 const rail=useRef<HTMLDivElement>(null);
 const cards=edition.cards,card=cards[current];
 useEffect(()=>{setLocalToday(today());try{const saved=JSON.parse(localStorage.getItem('father-saved-v2')||'[]');if(Array.isArray(saved))setFavorites(saved)}catch{}},[]);
 useEffect(()=>{const root=rail.current;if(!root)return;const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&e.intersectionRatio>.6)setCurrent(Number((e.target as HTMLElement).dataset.index))}),{root,threshold:.65});root.querySelectorAll('article').forEach(el=>obs.observe(el));return()=>obs.disconnect()},[]);
 function jump(i:number){setIndexOpen(false);setMore(false);setCurrent(i);rail.current?.querySelectorAll('article')[i]?.scrollIntoView({block:'start',behavior:'smooth'})}
 function star(){const next=favorites.includes(card.id)?favorites.filter(v=>v!==card.id):[...favorites,card.id];setFavorites(next);try{localStorage.setItem('father-saved-v2',JSON.stringify(next))}catch{}}
 async function share(){const data={title:card.title,text:card.summary,url:location.origin+'/#'+card.id};try{if(navigator.share)await navigator.share(data);else await navigator.clipboard.writeText(data.title+' — '+data.text+' '+data.url)}catch{}}
 useEffect(()=>{function k(e:KeyboardEvent){if(indexOpen||more)return; if(['ArrowDown','ArrowRight'].includes(e.key)){e.preventDefault();jump(Math.min(current+1,cards.length-1))}if(['ArrowUp','ArrowLeft'].includes(e.key)){e.preventDefault();jump(Math.max(0,current-1))}}window.addEventListener('keydown',k);return()=>window.removeEventListener('keydown',k)},[current,indexOpen,more]);
 const stale=localToday!==edition.editionDate;
 return <div className="fg-stage" data-ui-theme="gamer-boy-v2" data-edition-date={edition.editionDate} data-edition-cards={cards.length}>
  <div className="fg-device">
   <header className="fg-header"><div className="fg-brand"><div className="fg-symbol">F<span>//</span>N</div><div><b>FATHER GIULIAN</b><small>NEWS · DAILY EDITION</small></div></div><button className="fg-menu" onClick={()=>setIndexOpen(true)} aria-label="Abrir índice de assuntos">☰ <span>ÍNDICE</span></button></header>
   <div className="fg-status"><span>EDIÇÃO {br(edition.editionDate)}</span><span>REEL {String(current+1).padStart(2,'0')} / {cards.length}</span></div>
   <div className="fg-progress" aria-hidden="true">{cards.map((c,i)=><i className={i===current?'is-active':''} key={c.id}/>)}</div>
   {stale&&<div className="fg-stale" role="status">EDIÇÃO ANTERIOR: {br(edition.editionDate)}. Notícias ainda não renovadas hoje.</div>}
   <main className="fg-reels" ref={rail} data-testid="reel-container">
    {cards.map((c,i)=><article className="fg-reel" key={c.id} id={c.id} data-reel="true" data-index={i} data-category={c.group} data-mission={c.id}>
      <div className="fg-visual"><img src={'/api/art?id='+encodeURIComponent(c.id)} alt={'Arte editorial '+c.group+': '+c.title} loading={i<2?'eager':'lazy'}/></div><div className="fg-fade"/>
      <span className="fg-coordinate">F//N · {String(i+1).padStart(2,'0')} · {c.visual.toUpperCase()}</span>
      <section className="fg-info"><div className="fg-kickers"><span className="fg-type">{c.type}</span><span className="fg-group">{c.group}</span></div><h1>{c.title}</h1><p>{c.summary}</p><div className="fg-dates"><span>{c.news?c.type:'EDIÇÃO'} · {br(c.eventDate)}</span><span>ATUALIZADO {new Date(edition.updatedAt).toLocaleTimeString('pt-BR',{timeZone:'America/Sao_Paulo',hour:'2-digit',minute:'2-digit'})}</span></div><div className="fg-read"><button aria-label={'Ler detalhes de '+c.title} onClick={()=>{setCurrent(i);setMore(true)}}>VER DETALHES ↗</button><small>DESLIZE ↑ PARA O PRÓXIMO</small></div></section>
     </article>)}
   </main>
   <aside className="fg-actions"><button onClick={star} aria-label="Salvar matéria" className={favorites.includes(card.id)?'on':''}><b>{favorites.includes(card.id)?'★':'☆'}</b><small>SALVAR</small></button><button onClick={share} aria-label="Compartilhar matéria"><b>↗</b><small>ENVIAR</small></button><button onClick={()=>setMore(true)} aria-label="Abrir fontes"><b>≡</b><small>FONTES</small></button></aside>
   <nav className="fg-bottom"><button aria-label="Reel anterior" disabled={current===0} onClick={()=>jump(Math.max(0,current-1))}>↑</button><b>{card.group}</b><button aria-label="Próximo reel" disabled={current===cards.length-1} onClick={()=>jump(Math.min(cards.length-1,current+1))}>↓</button></nav>
   {indexOpen&&<div className="fg-mask" onClick={()=>setIndexOpen(false)}><div className="fg-sheet" role="dialog" aria-modal="true" aria-label="Índice editorial" onClick={e=>e.stopPropagation()}><div className="fg-sheethead"><b>SELECIONE O CANAL</b><button onClick={()=>setIndexOpen(false)} aria-label="Fechar índice">✕</button></div><p>{cards.length} cards, fontes datadas e conteúdo selecionado para esta edição.</p><div className="fg-list">{cards.map((c,i)=><button key={c.id} onClick={()=>jump(i)}><span>{String(i+1).padStart(2,'0')}</span><b>{c.group}</b><small>{c.type}</small></button>)}</div></div></div>}
   {more&&<div className="fg-mask" onClick={()=>setMore(false)}><div className="fg-sheet fg-details" role="dialog" aria-modal="true" aria-label="Detalhes e fontes" onClick={e=>e.stopPropagation()}><div className="fg-sheethead"><b>{card.group.toUpperCase()}</b><button onClick={()=>setMore(false)} aria-label="Fechar detalhes">✕</button></div><span className="fg-type">{card.type}</span><h2>{card.title}</h2><p>{card.summary}</p><ul>{card.details.map((d,i)=><li key={i}>{d}</li>)}</ul><h3>FONTES / CONTEXTO</h3>{card.sources.length?card.sources.map(s=><a key={s.url} href={s.url} rel="noopener noreferrer" target="_blank">{s.label} ↗</a>):<p>Atividade ou curadoria original; não é notícia de última hora.</p>}<p className="fg-footnote">Edição {br(edition.editionDate)} · {card.news?'Confira se o evento indicado ainda está válido.':'Guia ou atividade editorial.'}</p></div></div>}
  </div>
  <div className="fg-desktop"><div>F//N 2.0</div><h2>Seu feed.<br/>Seu universo.<br/><em>Todo dia.</em></h2><p>Família, atualidades, curiosidades e cultura gamer. Notícias com fontes e conteúdo que muda de verdade.</p><strong>{cards.length} REELS · {br(edition.editionDate)}</strong></div>
 </div>
}