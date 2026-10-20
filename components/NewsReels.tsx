'use client';
import {useEffect,useRef,useState} from 'react';
import './news-reels-v2.css';
import './news-reels-v3.css';
import mediaCatalog from '@/data/media-2026-10-20.json';
import insights from '@/data/reader-insights-2026-10-20.json';
import ReaderExplore from './ReaderExplore';
import './reader-experience.css';
import './native-mobile-v5.css';
type Source={label:string,url:string,publishedAt?:string};
type Quiz={question:string,options:string[],answer:number,explanation:string};
type Card={id:string,group:string,type:string,title:string,summary:string,details:string[],visual:string,eventDate:string,news:boolean,sources:Source[],quiz?:Quiz,layout?:string,questXp?:number,reportedAt?:string};
type Edition={editionDate:string,timezone:string,updatedAt:string,cards:Card[]};
function br(d:string){return d.split('-').reverse().join('/')}
function today(){const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());const p=Object.fromEntries(parts.map(x=>[x.type,x.value]));return [p.year,p.month,p.day].join('-')}
type NativeIcon='home'|'compass'|'bookmark'|'next'|'share';
function MobileIcon({name}:{name:NativeIcon}){
 const paths:Record<NativeIcon,React.ReactNode>={
  home:<><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/></>,
  compass:<><circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.4 5.2-5.2 2.4 2.4-5.2z"/></>,
  bookmark:<><path d="M6 3h12v18l-6-4-6 4z"/></>,
  next:<><path d="M12 4v16m-7-7 7 7 7-7"/></>,
  share:<><path d="M12 16V3m-5 5 5-5 5 5"/><path d="M5 14v6h14v-6"/></>,
 };
 return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
export default function NewsReels({edition}:{edition:Edition}){
 const [current,setCurrent]=useState(0),[indexOpen,setIndexOpen]=useState(false),[more,setMore]=useState(false),[favorites,setFavorites]=useState<string[]>([]),[localToday,setLocalToday]=useState(edition.editionDate);
 const [seen,setSeen]=useState<string[]>([]),[resume,setResume]=useState(0);
 const [exploreTab,setExploreTab]=useState<'Todos'|'Salvos'>('Todos');
 const [failedPhotos,setFailedPhotos]=useState<string[]>([]),[answers,setAnswers]=useState<Record<string,number>>({}),[completed,setCompleted]=useState<string[]>([]);
 const photos=mediaCatalog as Record<string,{url:string;source?:string;credit?:string;title?:string}>;
 const insight=insights as Record<string,string>;
 const rail=useRef<HTMLDivElement>(null);
 const cards=edition.cards,card=cards[current];
 useEffect(()=>{if('serviceWorker' in navigator){navigator.serviceWorker.register('/sw.js').catch(()=>{});}setLocalToday(today());try{const saved=JSON.parse(localStorage.getItem('father-saved-v2')||'[]');if(Array.isArray(saved))setFavorites(saved);const done=JSON.parse(localStorage.getItem('father-quests-v3')||'[]');if(Array.isArray(done))setCompleted(done);const already=JSON.parse(localStorage.getItem('father-seen-'+edition.editionDate)||'[]');if(Array.isArray(already))setSeen(already);const last=Number(localStorage.getItem('father-resume-'+edition.editionDate)||0);if(Number.isFinite(last))setResume(Math.min(Math.max(0,last),edition.cards.length-1))}catch{}},[]);
 useEffect(()=>{const root=rail.current;if(!root)return;const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&e.intersectionRatio>.6)setCurrent(Number((e.target as HTMLElement).dataset.index))}),{root,threshold:.65});root.querySelectorAll('article').forEach(el=>obs.observe(el));return()=>obs.disconnect()},[]);
 function jump(i:number){setIndexOpen(false);setMore(false);setCurrent(i);setResume(i);try{localStorage.setItem('father-resume-'+edition.editionDate,String(i))}catch{};rail.current?.querySelectorAll('article')[i]?.scrollIntoView({block:'start',behavior:'smooth'})}
 function openStory(i:number){setCurrent(i);const next=Array.from(new Set([...seen,cards[i].id]));setSeen(next);try{localStorage.setItem('father-seen-'+edition.editionDate,JSON.stringify(next))}catch{};setMore(true)}
 function finishQuest(){const next=Array.from(new Set([...completed,card.id]));setCompleted(next);try{localStorage.setItem('father-quests-v3',JSON.stringify(next))}catch{}}
 function star(){const next=favorites.includes(card.id)?favorites.filter(v=>v!==card.id):[...favorites,card.id];setFavorites(next);try{localStorage.setItem('father-saved-v2',JSON.stringify(next))}catch{}}
 async function share(){const data={title:card.title,text:card.summary,url:location.origin+'/#'+card.id};try{if(navigator.share)await navigator.share(data);else await navigator.clipboard.writeText(data.title+' — '+data.text+' '+data.url)}catch{}}
 useEffect(()=>{function k(e:KeyboardEvent){if(indexOpen||more)return; if(['ArrowDown','ArrowRight'].includes(e.key)){e.preventDefault();jump(Math.min(current+1,cards.length-1))}if(['ArrowUp','ArrowLeft'].includes(e.key)){e.preventDefault();jump(Math.max(0,current-1))}}window.addEventListener('keydown',k);return()=>window.removeEventListener('keydown',k)},[current,indexOpen,more]);
 useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==='Escape'){setIndexOpen(false);setMore(false)}};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[]);
 const stale=localToday!==edition.editionDate;
 function showExplore(tab:'Todos'|'Salvos'='Todos'){setExploreTab(tab);setIndexOpen(true)}
 return <div className="fg-stage" data-ui-theme="father-native-v5" data-edition-date={edition.editionDate} data-edition-cards={cards.length}>
  <div className="fg-device">
    <header className="fg-header">
      <button className="mn-brand-control" aria-label="Voltar ao início da edição" onClick={()=>jump(0)}>
        <span className="fg-symbol" aria-hidden="true">FN</span>
        <span className="mn-brand-words"><b>Father News</b><small>EDIÇÃO {br(edition.editionDate)}</small></span>
      </button>
      <button className="fg-menu" onClick={()=>showExplore('Todos')} aria-label="Abrir índice de assuntos"><MobileIcon name="compass"/><span>EXPLORAR</span></button>
    </header>
   <div className="fg-status"><span><i className="fg-online"/> EDIÇÃO {br(edition.editionDate)}</span><span>HISTÓRIA {String(current+1).padStart(2,'0')} / {cards.length}</span></div>
   <div className="fg-progress" aria-hidden="true">{cards.map((c,i)=><i className={i===current?'is-active':''} key={c.id}/>)}</div>
   {stale&&<div className="fg-stale" role="status">EDIÇÃO ANTERIOR: {br(edition.editionDate)}. Notícias ainda não renovadas hoje.</div>}
   <main className="fg-reels" ref={rail} data-testid="reel-container">
    {cards.map((c,i)=><article className={"fg-reel fg-layout-"+(c.layout||"guide")} key={c.id} id={c.id} data-reel="true" data-index={i} data-category={c.group} data-mission={c.id} data-template={c.layout||'guide'} data-media-kind={photos[c.id]&&!failedPhotos.includes(c.id)?'photo':'illustration'}>
      <div className="fg-visual"><img src={photos[c.id]&&!failedPhotos.includes(c.id)?photos[c.id].url:'/api/art?id='+encodeURIComponent(c.id)} alt={photos[c.id]&&!failedPhotos.includes(c.id)?'Foto contextual: '+photos[c.id].title:'Arte editorial '+c.group+': '+c.title} loading={i<2?'eager':'lazy'} decoding="async" referrerPolicy="no-referrer" onError={()=>setFailedPhotos(prev=>prev.includes(c.id)?prev:[...prev,c.id])}/></div><div className="fg-fade"/>
      <span className="fg-coordinate">{c.layout==='quest'?'MISSÃO DO DIA':c.layout==='discover'?'VOCÊ SABIA?':c.layout==='spotlight'?'RADAR DE HOJE':'GUIA PRÁTICO'} · F//N {String(i+1).padStart(2,'0')}</span>
      {photos[c.id]&&!failedPhotos.includes(c.id)&&<span className="fg-phototag">◉ FOTO DE ARQUIVO</span>}
      {c.layout==='quest'&&<div className="fg-floating-tag">{completed.includes(c.id)?'✓ MISSÃO FEITA':'+'+(c.questXp||20)+' XP'}</div>}
      {c.layout==='discover'&&<div className="fg-floating-tag fg-tag-discover">? · QUIZ DISPONÍVEL</div>}
      {c.layout==='spotlight'&&<div className="fg-floating-tag fg-tag-news">{c.type} · {c.eventDate===edition.editionDate?'FATO / AGENDA DE HOJE':'FATO DE '+br(c.eventDate)}</div>}
      <section className="fg-info"><div className="fg-kickers"><span className="fg-type">{c.type}</span><span className="fg-group">{c.group}</span><span className="rx-time-chip">1 MIN DE LEITURA</span></div><h1>{c.title}</h1><p>{c.summary}</p><div className="rx-card-context"><span>O ESSENCIAL</span><strong>{insight[c.id]}</strong></div><div className="fg-dates"><span>{c.news?'DATA DO FATO / AGENDA':'EDIÇÃO'} · {br(c.eventDate)}</span><span>ATUALIZADO {new Date(edition.updatedAt).toLocaleTimeString('pt-BR',{timeZone:'America/Sao_Paulo',hour:'2-digit',minute:'2-digit'})}</span></div><div className="fg-read"><button aria-label={'Ler detalhes de '+c.title} onClick={()=>openStory(i)}>{c.quiz?'FAZER QUIZ':c.layout==='quest'?'ABRIR MISSÃO':'LER AGORA'} <span aria-hidden="true">↗</span></button><small>DESLIZE PARA AVANÇAR ↑</small></div></section>
     </article>)}
   </main>
    <aside className="fg-actions"><button onClick={star} aria-label="Salvar matéria" className={favorites.includes(card.id)?'on':''}><b>{favorites.includes(card.id)?'★':'☆'}</b><small>SALVAR</small></button><button onClick={share} aria-label="Compartilhar matéria"><b>↗</b><small>ENVIAR</small></button><button onClick={()=>openStory(current)} aria-label="Abrir fontes"><b>≡</b><small>FONTES</small></button></aside>
    <nav className="fg-bottom" aria-label="Navegação entre Reels"><button aria-label="Reel anterior" disabled={current===0} onClick={()=>jump(Math.max(0,current-1))}>↑</button><div className="fg-bottom-info"><b>{card.group}</b><small>{completed.filter(id=>cards.some(c=>c.id===id)).length} MISSÕES CONCLUÍDAS</small></div><button aria-label="Próximo reel" disabled={current===cards.length-1} onClick={()=>jump(Math.min(cards.length-1,current+1))}>↓</button></nav>
    <nav className="mn-tabbar" aria-label="Navegação do aplicativo">
      <button aria-label="Ir para início" onClick={()=>jump(0)} className={current===0?'mn-tab-active':''}><MobileIcon name="home"/><span>Início</span></button>
      <button aria-label="Explorar assuntos" onClick={()=>showExplore('Todos')}><MobileIcon name="compass"/><span>Explorar</span></button>
      <button aria-label="Ver matérias salvas" onClick={()=>showExplore('Salvos')}><MobileIcon name="bookmark"/><span>Salvos{favorites.length?' · '+favorites.length:''}</span></button>
      <button aria-label="Próximo reel" disabled={current===cards.length-1} onClick={()=>jump(Math.min(cards.length-1,current+1))}><MobileIcon name="next"/><span>Próximo</span></button>
    </nav>
   {indexOpen&&<ReaderExplore cards={cards} active={current} saved={favorites} seen={seen} finished={completed} resume={resume} initialFilter={exploreTab} formatDate={br(edition.editionDate)} onGo={jump} onClose={()=>setIndexOpen(false)}/>}
   {more&&<div className="fg-mask" onClick={()=>setMore(false)}><div className="fg-sheet fg-details" role="dialog" aria-modal="true" aria-label="Detalhes e fontes" onClick={e=>e.stopPropagation()}><div className="fg-sheethead"><b>{card.group.toUpperCase()}</b><button onClick={()=>setMore(false)} aria-label="Fechar detalhes">✕</button></div><span className="fg-type">{card.type}</span><div className="rx-modal-meta"><span>{br(card.eventDate)}</span><span>1 MIN DE LEITURA</span><span>{card.sources.length} FONTE(S)</span></div><h2>{card.title}</h2><p className="rx-modal-lead">{card.summary}</p><div className="rx-insight-panel"><small>POR QUE ISSO IMPORTA</small><strong>{insight[card.id]}</strong></div><div className="fg-read-heading">EM TRÊS PONTOS</div><ul>{card.details.map((d,i)=><li key={i}>{d}</li>)}</ul>
   {card.quiz&&<div className="fg-quiz"><span>QUIZ DE CURIOSIDADE</span><h3>{card.quiz.question}</h3>{card.quiz.options.map((o,i)=><button key={i} className={answers[card.id]===i?'is-selected':''} onClick={()=>setAnswers(prev=>({...prev,[card.id]:i}))}>{String.fromCharCode(65+i)} · {o}</button>)}{answers[card.id]!==undefined&&<p className={answers[card.id]===card.quiz.answer?'is-correct':'is-wrong'}>{answers[card.id]===card.quiz.answer?'✓ ACERTOU':'↻ TENTE OUTRA VEZ'} — {card.quiz.explanation}</p>}</div>}
   {card.layout==='quest'&&<button className="fg-quest-complete" onClick={finishQuest}>{completed.includes(card.id)?'✓ MISSÃO CONCLUÍDA':'CONCLUIR MISSÃO · +'+(card.questXp||20)+' XP'}</button>}
   <div className="mn-reading-actions"><button onClick={star} aria-label="Salvar matéria" className={favorites.includes(card.id)?'mn-is-saved':''}><MobileIcon name="bookmark"/>{favorites.includes(card.id)?'Salvo':'Salvar'}</button><button onClick={share} aria-label="Compartilhar matéria"><MobileIcon name="share"/>Compartilhar</button></div>
    <div className="fg-read-heading">FONTES E CRÉDITOS</div>{card.sources.length?card.sources.map(s=><a key={s.url} href={s.url} rel="noopener noreferrer" target="_blank">{s.label} ↗</a>):<p>Atividade ou curadoria original; não é notícia de última hora.</p>}{photos[card.id]?.source&&<a href={photos[card.id].source} target="_blank" rel="noopener noreferrer">Crédito da imagem: {photos[card.id].credit||'Wikimedia Commons'} ↗</a>}
   <div className="rx-next-story"><div><span>CONTINUE EXPLORANDO</span><strong>{cards[(current+1)%cards.length].group}</strong><small>{cards[(current+1)%cards.length].title}</small></div><button onClick={()=>jump((current+1)%cards.length)} aria-label="Próxima história">PRÓXIMA →</button></div>
   <p className="fg-footnote">Edição {br(edition.editionDate)} · {card.reportedAt?'Reportagem de '+br(card.reportedAt)+' sobre fato ocorrido em '+br(card.eventDate)+'.':card.news?'Confira a data do fato ou da agenda.':'Guia ou atividade editorial.'}</p></div></div>}
  </div>
  <div className="fg-desktop"><div>F//N · VISUAL EDITION</div><h2>Seu feed.<br/>Seu universo.<br/><em>Todo dia.</em></h2><p>Família, atualidades, curiosidades e cultura gamer. Notícias com fontes e conteúdo que muda de verdade.</p><strong>{cards.length} REELS · {br(edition.editionDate)}</strong></div>
 </div>
}