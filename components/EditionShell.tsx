'use client';
import {useCallback,useEffect,useRef,useState} from 'react';
import NewsReels from './NewsReels';
import {adaptPublishedEdition,type EditionBridge,type ReaderEdition} from '@/lib/father-v6/reader-adapter';
type LoadState={state:'loading'|'legacy'|'ready';published?:EditionBridge};
export default function EditionShell({legacy,v6Enabled}:{legacy:ReaderEdition;v6Enabled:boolean}){
 const [load,setLoad]=useState<LoadState>({state:v6Enabled?'loading':'legacy'});
 const generation=useRef(0);
 const refresh=useCallback(async()=>{
  if(!v6Enabled)return;
  const seq=++generation.current;
  const controller=new AbortController();
  const deadline=setTimeout(()=>controller.abort(),8500);
  try{
   const response=await fetch('/api/edition/current',{method:'GET',cache:'no-store',credentials:'omit',signal:controller.signal});
   if(!response.ok)throw new Error('NO_VALIDATED_EDITION');
   const next=adaptPublishedEdition(await response.json());
   if(seq!==generation.current)return;
   setLoad(previous=>{
    if(previous.published?.generation===next.generation&&previous.published.releaseId===next.releaseId)return previous;
    return {state:'ready',published:next};
   });
  }catch{
   if(seq===generation.current)setLoad(previous=>previous.state==='ready'?previous:{state:'legacy'});
  }finally{clearTimeout(deadline);}
 },[v6Enabled]);
 useEffect(()=>{
  if(!v6Enabled)return;
  void refresh();
  const onVisible=()=>{if(document.visibilityState==='visible')void refresh();};
  const interval=setInterval(()=>{if(document.visibilityState==='visible')void refresh();},5*60*1000);
  document.addEventListener('visibilitychange',onVisible);
  return ()=>{generation.current++;clearInterval(interval);document.removeEventListener('visibilitychange',onVisible);};
 },[v6Enabled,refresh]);
 if(load.state==='loading')return <div className="fn-v6-initial" role="status" aria-live="polite">
  <div className="fn-v6-logo">FN</div><b>Father News</b><span>Verificando a última edição validada…</span>
 </div>;
 const dynamic=load.published;
 return <>
  {v6Enabled&&load.state!=='ready'&&<div className="fn-v6-fallback" role="status">Edição anterior: {legacy.editionDate.split('-').reverse().join('/')} · atualização indisponível</div>}
  <NewsReels key={dynamic?.releaseId||'legacy'} edition={dynamic?.edition||legacy}
   mediaOverride={dynamic?.media} contextOverride={dynamic?.context} editionEngine={dynamic?'v6':'legacy'}/>
 </>;
}

