'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { sixByOneConversation } from '@/lib/policy-conversation-current';

function Conversation() {
  const d = sixByOneConversation;
  return (
    <section className="policyConversationV11">
      <header className="policyConversationHeroV11">
        <div>
          <span>{d.eyebrow}</span>
          <h3>{d.title}</h3>
          <p>{d.status}</p>
        </div>
        <div className="policyStatusV11"><i />EM TRAMITAÇÃO</div>
      </header>

      <aside className="policyRealityV11">
        <strong>O QUE A MANCHETE NÃO PODE ESCONDER</strong>
        <p>{d.statusCaveat}</p>
      </aside>

      <section className="policyProposalV11">
        <div className="policySectionTitleV11"><span>01</span><div><small>O TEXTO EM JOGO</small><h4>O que a PEC pretende mudar</h4></div></div>
        <ul>{d.proposal.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <details className="policyDetailsV11" open>
        <summary><span>02</span><div><small>CONVERSA REAL</small><strong>O que cada lado disse</strong></div><em>abrir / fechar</em></summary>
        <div className="policyVoicesV11">
          {d.voices.map((voice) => (
            <article key={voice.side}>
              <small>{voice.side}</small>
              <h5>{voice.position}</h5>
              <p>{voice.detail}</p>
            </article>
          ))}
        </div>
      </details>

      <details className="policyDetailsV11" open>
        <summary><span>03</span><div><small>ONDE TRAVA</small><strong>Qual é o conflito de verdade</strong></div><em>abrir / fechar</em></summary>
        <ul className="policyConflictV11">{d.conflict.map((item) => <li key={item}>{item}</li>)}</ul>
      </details>

      <section className="policyStepsSectionV11">
        <div className="policySectionTitleV11"><span>04</span><div><small>PRÓXIMOS PASSOS</small><h4>O caminho legislativo daqui para frente</h4></div></div>
        <div className="policyStepsV11">
          {d.steps.map((step, index) => (
            <article key={step.title} data-status={step.status}>
              <div><b>{String(index + 1).padStart(2, '0')}</b><i /></div>
              <section><small>{step.status === 'DONE' ? 'CONCLUÍDO' : step.status === 'NEXT' ? 'PRÓXIMO' : 'PENDENTE'}</small><h5>{step.title}</h5><p>{step.detail}</p></section>
            </article>
          ))}
        </div>
      </section>

      <details className="policyDetailsV11" open>
        <summary><span>05</span><div><small>DECISION TREE</small><strong>Quais decisões podem sair</strong></div><em>abrir / fechar</em></summary>
        <div className="policyScenariosV11">
          {d.scenarios.map((scenario) => (
            <article key={scenario.label}>
              <small>{scenario.label}</small>
              <h5>{scenario.title}</h5>
              <p>{scenario.consequence}</p>
            </article>
          ))}
        </div>
      </details>

      <section className="policyWatchV11">
        <div className="policySectionTitleV11"><span>06</span><div><small>WATCHLIST</small><h4>O que observar nos próximos dias</h4></div></div>
        <ul>{d.watch.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="policyPracticalV11">
        <article><small>SE VOCÊ É TRABALHADOR</small><p>{d.practical.worker}</p></article>
        <article><small>SE VOCÊ É EMPRESA / GESTOR</small><p>{d.practical.company}</p></article>
      </section>

      <footer className="policySourcesV11">
        <small>FONTES PARA ACOMPANHAR A CONVERSA</small>
        <div>{d.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>)}</div>
      </footer>
    </section>
  );
}

export default function PolicyConversationPortal() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let frame = 0;
    const id = 'policy-conversation-v11-host';
    const sync = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const shell = document.querySelector<HTMLElement>('.magazineShell');
        const slug = shell?.dataset.active ?? '';
        const title = document.querySelector('.articlePanel > h2')?.textContent?.toLocaleLowerCase('pt-BR') ?? '';
        const panel = document.querySelector<HTMLElement>('.articlePanel');
        const existing = document.getElementById(id);

        if (slug !== 'brasil' || !title.includes('6x1') || !panel) {
          existing?.remove();
          setHost(null);
          return;
        }

        if (existing) { setHost(existing); return; }
        const node = document.createElement('div');
        node.id = id;
        const media = panel.querySelector('#daily-rich-media-host');
        const stack = panel.querySelector('.intelStack');
        if (media?.nextSibling) panel.insertBefore(node, media.nextSibling);
        else if (stack) panel.insertBefore(node, stack);
        else panel.appendChild(node);
        setHost(node);
      });
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-active'] });
    return () => { cancelAnimationFrame(frame); observer.disconnect(); document.getElementById(id)?.remove(); };
  }, []);

  return host ? createPortal(<Conversation />, host) : null;
}
