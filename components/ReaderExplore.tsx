'use client';
import {useMemo,useState} from 'react';
type Card={id:string,group:string,type:string,title:string,summary:string,news:boolean,layout?:string};
type Props={cards:Card[],active:number,finished:string[],saved:string[],seen:string[],resume:number,onGo:(n:number)=>void,onClose:()=>void,formatDate:string,initialFilter?:Filter};
type Filter='Todos'|'Notícias'|'Descobertas'|'Família'|'Guias'|'Salvos';
const filters:Filter[]=['Todos','Notícias','Descobertas','Família','Guias','Salvos'];
export default function ReaderExplore({cards,active,finished,saved,seen,resume,onGo,onClose,formatDate,initialFilter="Todos"}:Props){
 const [tab,setTab]=useState<Filter>(initialFilter);
 const [search,setSearch]=useState('');
 const filtered=useMemo(()=>cards.map((c,i)=>({c,i})).filter(({c})=>{
 const family=['Papo de hoje','Desafio do casal','Gravidez','Ser Pai'].includes(c.group);
 const typeOk=tab==='Todos'||(tab==='Notícias'&&c.news)||(tab==='Descobertas'&&(c.layout==='discover'||c.group.startsWith('Curiosidades')))||(tab==='Família'&&family)||(tab==='Guias'&&!c.news&&!family&&c.layout!=='discover')||(tab==='Salvos'&&saved.includes(c.id));
 const normal=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const q=normal(search.trim());
 return typeOk&&(!q||normal(c.title+' '+c.group+' '+c.summary).includes(q));
 }),[cards,tab,search,saved]);
 return <div className="fg-mask rx-mask" onClick={onClose}>
 <section className="fg-sheet rx-sheet" role="dialog" aria-modal="true" aria-label="Índice editorial" onClick={e=>e.stopPropagation()}>
  <div className="fg-sheethead rx-head"><div><span className="rx-overline">F//N • SEU UNIVERSO</span><strong>Escolha o que ler.</strong><small>EDIÇÃO {formatDate} · {cards.length} HISTÓRIAS</small></div><button onClick={onClose} aria-label="Fechar índice">✕</button></div>
  <div className="rx-feature"><span className="rx-feature-icon">↳</span><div><b>Continue sua leitura</b><small>{cards[resume]?.group||cards[0].group} · {Math.round(seen.length/cards.length*100)}% explorado</small></div><button onClick={()=>onGo(Math.min(resume,cards.length-1))}>RETOMAR →</button></div>
  <label className="rx-search"><span>⌕</span><input type="search" aria-label="Buscar assuntos" placeholder="Buscar notícia, assunto ou curiosidade" value={search} onChange={e=>setSearch(e.target.value)}/>{search&&<button onClick={()=>setSearch('')} aria-label="Limpar busca">✕</button>}</label>
  <div className="rx-filters" role="group" aria-label="Filtrar assuntos">{filters.map(f=><button key={f} className={tab===f?'rx-selected':''} aria-pressed={tab===f} onClick={()=>setTab(f)}>{f}{f==='Salvos'&&saved.length>0?' · '+saved.length:''}</button>)}</div>
  <div className="rx-list-head"><strong>{tab==='Todos'?'A edição completa':tab}</strong><span>{filtered.length} RESULTADOS</span></div>
  <div className="rx-list">{filtered.length?filtered.map(({c,i})=><button className={'rx-story'+(i===active?' rx-current':'')} key={c.id} onClick={()=>onGo(i)} aria-label={'Abrir '+c.group+': '+c.title}>
   <div className={'rx-story-num rx-num-'+(c.layout||'guide')}><strong>{String(i+1).padStart(2,'0')}</strong><small>{c.layout==='discover'?'?':c.layout==='quest'?'★':c.news?'◉':'↗'}</small></div>
   <div className="rx-story-copy"><div className="rx-story-meta">{c.group.toUpperCase()} <span>· {c.type}</span></div><b>{c.title}</b><small>{seen.includes(c.id)?'✓ JÁ ABERTO · ':''}LEITURA RÁPIDA · 1 MIN</small></div>
   <span className="rx-story-arrow">{saved.includes(c.id)?'★':'→'}</span>
  </button>):<div className="rx-empty"><strong>Nenhuma história encontrada.</strong><p>Tente outra palavra ou mude o filtro.</p><button onClick={()=>{setTab('Todos');setSearch('')}}>VER TODOS OS ASSUNTOS</button></div>}</div>
  <div className="rx-footer">{finished.length>0?finished.length+' missão(ões) concluída(s)':'Explore no seu ritmo'} · fontes sempre acessíveis</div>
 </section></div>;


}
