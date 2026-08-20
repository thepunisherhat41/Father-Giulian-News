'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const phases = [
  { time:'PRIMEIRAS 24–72H', title:'Recuperar e observar', text:'Dor, sangramento, contrações uterinas, cansaço, alimentação do bebê e adaptação à nova rotina podem acontecer ao mesmo tempo. O parceiro reduz demandas, facilita água e comida, ajuda a registrar orientações e mantém contato com a equipe de saúde quando necessário.' },
  { time:'DIAS 3–14', title:'Hormônios, sono e carga emocional', text:'Oscilações de humor e choro podem aparecer nos primeiros dias. Apoio concreto significa proteger descanso, assumir tarefas sem ela precisar coordenar tudo, controlar visitas e abrir espaço para ela dizer quando algo não está bem.' },
  { time:'SEMANAS 2–6', title:'Recuperação não é corrida', text:'Recuperação de parto vaginal ou cesariana, assoalho pélvico, mamas, sono e emoções têm ritmos individuais. O acompanhamento pós-natal é parte do cuidado, não uma formalidade.' },
  { time:'DEPOIS DE 6 SEMANAS', title:'O suporte continua', text:'A OMS usa as primeiras seis semanas como período pós-natal, mas sono, alimentação do bebê, cicatrização, saúde mental, sexualidade e adaptação familiar podem continuar exigindo apoio bem depois desse marco.' },
];

const partnerDo = [
  'Escute antes de tentar resolver. Pergunte se ela quer ser ouvida, ajuda prática ou apoio para procurar a equipe de saúde.',
  'Assuma tarefas inteiras — comida, louça, roupa, limpeza, compras e cuidados possíveis com o bebê — sem transformar a mãe em gerente das suas tarefas.',
  'Proteja períodos de descanso. Quando a rotina de alimentação do bebê permitir, assuma colo, troca, arrotar e organização do ambiente.',
  'Controle visitas junto com ela: duração curta, liberdade para cancelar e nenhuma obrigação de receber pessoas enquanto estiver cansada ou com dor.',
  'Acompanhe consultas e ajude a levar dúvidas e sintomas para a equipe se ela desejar.',
  'Não pressione sexo, exercício, aparência física, visitas ou uma forma específica de alimentar o bebê. Recuperação e decisões sobre o corpo pertencem a ela.',
];

const safety = [
  ['PREVISIBILIDADE','Diga o que você vai assumir e cumpra. Segurança emocional cresce quando ela não precisa adivinhar se terá apoio.'],
  ['VALIDAÇÃO','Em vez de minimizar, reconheça: “Estou vendo que isso está difícil. Vamos entender juntos e buscar ajuda se precisar.”'],
  ['AUTONOMIA','Pergunte antes de tocar, fotografar, chamar visita ou compartilhar detalhes íntimos. Puerpério não elimina consentimento e privacidade.'],
  ['REDE DE APOIO','Combine quem pode ajudar com comida, casa, transporte e consultas. Apoio bom reduz trabalho; não cria obrigação social.'],
];

const urgent = [
  'dor de cabeça intensa ou que piora, desmaio/tontura importante ou alteração visual;',
  'falta de ar, dor no peito ou palpitações importantes associadas a mal-estar;',
  'febre de 38 °C ou mais;',
  'sangramento vaginal muito intenso ou associado a fraqueza/mal-estar;',
  'dor abdominal intensa que não melhora ou piora;',
  'inchaço, vermelhidão ou dor importante em uma perna, principalmente de um lado;',
  'mudança emocional ou de comportamento intensa que gere preocupação com a segurança da mãe ou do bebê.',
];

export default function PregnancyPostpartumGuide() {
  const [host, setHost] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const id='pregnancy-postpartum-guide-host';
    const sync=()=>{
      const pregnancy=document.querySelector('.pregnancyHUD');
      const anchor=document.getElementById('pregnancy-vomiting-care-host') || document.getElementById('baby-discovery-lab-host') || pregnancy;
      const existing=document.getElementById(id);
      if(!pregnancy || !anchor){existing?.remove();setHost(null);return;}
      if(existing && existing.previousElementSibling===anchor){setHost(existing);return;}
      existing?.remove();
      const node=document.createElement('div');node.id=id;anchor.insertAdjacentElement('afterend',node);setHost(node);
    };
    sync();
    const observer=new MutationObserver(sync);observer.observe(document.body,{childList:true,subtree:true});
    return()=>{observer.disconnect();document.getElementById(id)?.remove();};
  },[]);
  if(!host)return null;

  return createPortal(
    <section className="postpartumGuideV7" aria-label="Guia de puerpério e apoio do parceiro">
      <header className="postpartumHeroV7">
        <div className="postpartumHeroCopyV7">
          <span>PUERPÉRIO · PLANO DO PARCEIRO</span>
          <h3>Depois do parto, cuidar dela também é cuidado com o bebê</h3>
          <p>O pós-parto combina recuperação física, mudanças hormonais, privação de sono e adaptação emocional. O melhor apoio não é esperar um pedido: é dividir responsabilidade, observar mudanças importantes e construir segurança.</p>
        </div>
        <figure className="postpartumHeroMediaV7">
          <img src="https://www.cdc.gov/hearher/media/images/support-family-friends-16x9-1.jpg" alt="Família oferecendo apoio a uma mulher durante o período materno" loading="lazy" referrerPolicy="no-referrer" />
          <figcaption>CDC · Hear Her · apoio de família e amigos</figcaption>
        </figure>
      </header>

      <div className="postpartumPhaseGridV7">{phases.map((phase)=><article key={phase.time}><small>{phase.time}</small><h4>{phase.title}</h4><p>{phase.text}</p></article>)}</div>

      <section className="postpartumPartnerPlanV7">
        <header><span>COMO SE COMPORTAR</span><h4>Seis atitudes que transformam apoio em segurança</h4></header>
        <ol>{partnerDo.map((item,index)=><li key={item}><b>{String(index+1).padStart(2,'0')}</b><p>{item}</p></li>)}</ol>
      </section>

      <section className="postpartumSafetyGridV7">{safety.map(([title,text])=><article key={title}><small>{title}</small><p>{text}</p></article>)}</section>

      <section className="postpartumShiftV7">
        <div><span>CHECKLIST PRÁTICO DO DIA</span><h4>Faça a casa trabalhar a favor da recuperação</h4></div>
        <ul>
          <li>água e comida acessíveis sem ela precisar organizar;</li>
          <li>medicações somente conforme orientação profissional, com horários organizados se ela quiser;</li>
          <li>itens de higiene, roupas confortáveis e carregador por perto;</li>
          <li>troca de fralda, colo, arrotar e tarefas da casa distribuídos;</li>
          <li>documentos, contatos da maternidade/obstetra/pediatra e transporte fáceis de encontrar;</li>
          <li>um período diário em que ela possa tomar banho, dormir ou ficar sozinha sem precisar coordenar a casa.</li>
        </ul>
      </section>

      <section className="postpartumVideoV7">
        <div><span>VÍDEO · APOIO DO PARCEIRO</span><h4>Leve as preocupações dela a sério</h4><p>O CDC orienta familiares e amigos a escutar, incentivar atendimento quando algo preocupa e ajudar a pessoa a ser ouvida pela equipe de saúde.</p></div>
        <iframe title="CDC Hear Her - apoio de família e amigos" src="https://www.youtube-nocookie.com/embed/iEqVIG7GpTY" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </section>

      <aside className="postpartumUrgentV7">
        <div><small>SINAIS MATERNOS DE ALERTA</small><strong>Alguns sintomas pedem avaliação médica imediata.</strong></div>
        <ul>{urgent.map((item)=><li key={item}>{item}</li>)}</ul>
        <p>Esta lista é educativa e resume sinais destacados pelo CDC. A equipe do parto/pós-parto deve orientar quais serviços procurar em cada situação.</p>
      </aside>

      <footer className="postpartumSourcesV7">
        <span>FONTES MÉDICAS</span>
        <a href="https://www.who.int/publications/i/item/9789240045989" target="_blank" rel="noreferrer">WHO · Positive postnatal experience ↗</a>
        <a href="https://www.cdc.gov/hearher/support/index.html" target="_blank" rel="noreferrer">CDC Hear Her · How to support ↗</a>
        <a href="https://www.cdc.gov/hearher/maternal-warning-signs/index.html" target="_blank" rel="noreferrer">CDC · Urgent maternal warning signs ↗</a>
      </footer>
    </section>, host
  );
}
