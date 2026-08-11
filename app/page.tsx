'use client';

import { useMemo, useState } from 'react';
import { categories } from '@/lib/categories';
import { getPregnancyStatus } from '@/lib/pregnancy';

const today: Record<string,{title:string;body:string;source?:string}> = {
 hoje:{title:'Seu briefing de 11 de agosto',body:'Uma seleção para aprender, acompanhar o mundo e guardar o que realmente vale seu tempo.'},
 brasil:{title:'Brasil em contexto',body:'Acompanhe decisões políticas e econômicas pelo impacto real: inflação, juros, emprego, serviços e custo de vida.'},
 politica:{title:'Política sem torcida',body:'Fato, contexto, posições e impacto. Proposta não é lei; declaração não é fato comprovado.'},
 mundo:{title:'Petróleo e Estreito de Hormuz no radar',body:'Mercados acompanham as negociações entre EUA e Irã e seus possíveis efeitos sobre energia e inflação. A reabertura plena do estreito ainda não é garantida.',source:'Reuters · 11/08/2026'},
 planeta:{title:'A Terra não é uma esfera perfeita',body:'A rotação faz o planeta ser ligeiramente achatado nos polos e mais largo no equador. Gravidade e rotação moldam até a forma do mundo.'},
 animais:{title:'Como baleias conseguem descansar sem “esquecer” de respirar?',body:'Cetáceos precisam controlar a respiração conscientemente. Algumas espécies apresentam sono uni-hemisférico, mantendo parte do cérebro mais ativa durante o descanso.'},
 tempo:{title:'Tempo e clima não são a mesma coisa',body:'Tempo descreve condições atmosféricas de curto prazo. Clima é o padrão estatístico observado por períodos longos. Um dia frio não contradiz sozinho uma tendência climática.'},
 curiosidades:{title:'Você nunca vê exatamente o presente do Sol',body:'A luz solar leva cerca de 8 minutos e 20 segundos para chegar à Terra. Quando olhamos o Sol, vemos como ele era alguns minutos atrás.'},
 gravidez:{title:'Semana 5 + 2 dias',body:'Nesta fase inicial há desenvolvimento embrionário intenso. A prioridade é acompanhamento pré-natal, alimentação segura e seguir as orientações da equipe de saúde. DPP estimada: 11/04/2027.'},
 pai:{title:'Missão do pai: presença prática',body:'Hoje: pergunte como ela está, assuma uma tarefa sem esperar pedido e participe das decisões da gestação. Ser um bom pai começa antes do nascimento: presença consistente vale mais que perfeição.'},
 carros:{title:'Garagem inteligente: R$ 30–60 mil',body:'Nesta faixa, o melhor negócio não é só o menor preço: histórico de manutenção, estado, versão, seguro e peças podem valer mais que ano ou quilometragem isolados. Em breve: comparador com FIPE e anúncios.'},
 motos:{title:'Moto usada: km não conta a história toda',body:'Uma moto rodada e bem mantida pode ser compra melhor que uma pouco usada e negligenciada. Verifique pneus, relação, suspensão, vazamentos, partida a frio e histórico.'},
 mecanica:{title:'Por que o motor precisa de óleo?',body:'O óleo reduz atrito, ajuda a remover calor, limpa partículas e protege superfícies internas. Nível correto e especificação adequada importam tanto quanto a troca.'},
 nautica:{title:'Ter barco é mais que comprar o casco',body:'O custo real inclui marina ou guarda, seguro, combustível, limpeza, documentação, revisões, motor e manutenção preventiva. Vamos transformar isso numa calculadora náutica.'},
 viagens:{title:'Viagem curta também merece planejamento',body:'Para destinos próximos de São Paulo, compare tempo de estrada, pedágios, estacionamento, hospedagem, clima e lotação. O melhor destino depende mais do perfil do passeio que da distância.'},
 financas:{title:'Dica financeira: transforme gastos anuais em mensais',body:'IPVA, seguro, manutenção, presentes e viagens parecem “surpresas” porque chegam de uma vez. Divida o valor anual por 12 e reserve mensalmente: despesas previsíveis deixam de virar emergência.'},
 tecnologia:{title:'IA exige cada vez mais infraestrutura',body:'O mercado acompanha grandes iniciativas de financiamento para data centers e infraestrutura de IA. A disputa deixou de ser apenas por modelos: energia, chips, rede e capital viraram parte central da corrida.',source:'Reuters · 11/08/2026'},
 seguranca:{title:'Security Mission: pense em cadeias, não só findings',body:'Um finding moderado pode desbloquear outro e formar um caminho até um ativo crítico. Priorize exploração ativa, exposição, reachability, identidade e blast radius — não apenas CVSS.',source:'CISA / prática AppSec'},
};

function shareText(label:string, item:{title:string;body:string;source?:string}){
 return `*${label.toUpperCase()}*\n\n*${item.title}*\n\n${item.body}${item.source?`\n\n_Fonte: ${item.source}_`:''}\n\n☀️ Father Giulian News`;
}

export default function HomePage(){
 const pregnancy=getPregnancyStatus();
 const [active,setActive]=useState('hoje');
 const category=useMemo(()=>categories.find(c=>c.slug===active) ?? categories[0],[active]);
 const item=today[active] ?? today.hoje;
 const share=async()=>{const text=shareText(category.label,item); if(navigator.share){try{await navigator.share({text});return}catch{}} window.open(`https://wa.me/?text=${encodeURIComponent(text)}`,'_blank');};
 return <div className="appShell">
  <aside className="sidebar">
   <div className="brand"><span className="brandMark">FG</span><div><b>FATHER GIULIAN</b><small>DAILY INTELLIGENCE</small></div></div>
   <div className="player"><span>PLAYER 01</span><b>GIULIAN</b><div className="xp"><i/></div><small>LVL 05 · KNOWLEDGE RUN</small></div>
   <nav>{categories.map(c=><button key={c.slug} className={active===c.slug?'active':''} onClick={()=>setActive(c.slug)}><span>{c.emoji}</span>{c.label}<em>›</em></button>)}</nav>
  </aside>
  <main className="content">
   <header className="topbar"><button className="mobileMenu">☰</button><div><span className="statusDot"/> DAILY SYSTEM ONLINE</div><div className="date">11 AGO 2026</div></header>
   <section className="stage">
    <div className="hud"><span>MISSION / {category.label.toUpperCase()}</span><span>SCORE 0206</span></div>
    <div className="heroIcon">{category.emoji}</div><p className="kicker">TODAY'S INTELLIGENCE DROP</p><h1>{category.label}</h1><p className="lead">{category.description}</p>
   </section>
   <section className="articlePanel">
    <div className="articleMeta"><span>NEW DROP</span><span>3 MIN READ</span></div>
    <h2>{item.title}</h2><p>{item.body}</p>
    {active==='gravidez'&&<div className="pregnancyHUD"><div><small>GESTAÇÃO</small><strong>{pregnancy.gestationalWeek}S + {pregnancy.gestationalDay}D</strong></div><div><small>DPP</small><strong>11/04/2027</strong></div><div><small>CONTAGEM</small><strong>{pregnancy.daysRemaining} DIAS</strong></div></div>}
    {category.subcategories&&<div className="chips">{category.subcategories.map(x=><span key={x}>{x}</span>)}</div>}
    {item.source&&<p className="source">Fonte: {item.source}</p>}
    <div className="articleActions"><button onClick={()=>navigator.clipboard?.writeText(shareText(category.label,item))}>⧉ COPIAR</button><button className="share" onClick={share}>↗ COMPARTILHAR NO WHATSAPP</button></div>
   </section>
   <section className="missions"><div><span>DAILY STREAK</span><b>🔥 01 DIA</b></div><div><span>CONTEÚDOS</span><b>18 ÁREAS</b></div><div><span>STATUS</span><b>● ONLINE</b></div></section>
  </main>
 </div>;
}
