'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { securityBriefingStories, type SecurityBriefingStory } from '@/lib/security-briefing-content';
import { securityBriefingDeepDive } from '@/lib/security-briefing-deep-dive';
import { securityBriefingAnalystNotes } from '@/lib/security-briefing-analyst-notes';

type AnalystHost = {
  story: SecurityBriefingStory;
  element: HTMLElement;
};

function openWhatsApp(text: string) {
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

function buildAnalystShare(story: SecurityBriefingStory) {
  const deepDive = securityBriefingDeepDive[story.id];
  const analyst = securityBriefingAnalystNotes[story.id];

  return [
    `*SECURITY ANALYST BRIEF · ${story.priority} · ${story.pillar}*`,
    `Status: ${story.status} · ${story.signalType} · Confiança: ${story.confidence}`,
    `Publicado: ${story.publishedAt} · ${story.freshness}`,
    '',
    `*${story.title}*`,
    story.deck,
    '',
    `*POR QUE IMPORTA AGORA*\n${story.whyNow}`,
    '',
    `*DECISÃO SUGERIDA*\n${story.decision}`,
    '',
    `*IMPACTO TÉCNICO*\n${story.technicalImpact}`,
    '',
    `*IMPACTO PARA O NEGÓCIO*\n${story.businessImpact}`,
    '',
    '*EVIDÊNCIAS DA FONTE*',
    ...story.evidence.map((item) => `- ${item.label}: ${item.value}`),
    '',
    ...(deepDive ? [
      '*ATTACK / EXPOSURE PATH*',
      ...deepDive.attackPath.map((item, index) => `${index + 1}. ${item}`),
      '',
      '*CONTROLES A VALIDAR*',
      ...deepDive.controlsToValidate.map((item) => `- ${item}`),
      '',
      '*TELEMETRIA PARA CHECAR*',
      ...deepDive.telemetryToCheck.map((item) => `- ${item}`),
      '',
    ] : []),
    ...(analyst ? [
      '*EVIDÊNCIA QUE PRECISAMOS COLETAR*',
      ...analyst.evidenceToCollect.map((item) => `- ${item}`),
      '',
      '*ESCALAR SE*',
      ...analyst.escalationTriggers.map((item) => `- ${item}`),
      '',
      `*DECISION GATE*\n${analyst.decisionGate}`,
      '',
    ] : []),
    '*PERGUNTAS DE EXPOSIÇÃO*',
    ...story.exposureQuestions.map((item) => `- ${item}`),
    '',
    '*AÇÕES AGORA*',
    ...story.actionNow.map((item) => `- ${item}`),
    '',
    ...(deepDive ? [
      `*OWNER* ${deepDive.decisionOwner}`,
      `*HORIZONTE* ${deepDive.horizon}`,
      `*CRITÉRIO DE SUCESSO* ${deepDive.successCriteria}`,
      `*PERGUNTA PARA O TIME* ${deepDive.discussionPrompt}`,
      '',
    ] : []),
    `*Frameworks:* ${story.frameworks.join(' · ')}`,
    `*Público:* ${story.audience.join(' · ')}`,
    '',
    `*Fonte primária:* ${story.source.label}`,
    story.source.url,
    '',
    '_A prioridade editorial precisa ser validada contra exposição, criticidade e controles reais do ambiente._',
  ].join('\n');
}

function AnalystPanel({ story }: { story: SecurityBriefingStory }) {
  const note = securityBriefingAnalystNotes[story.id];
  if (!note) return null;

  return (
    <section className="briefingAnalystLayer" aria-label={`Camada de análise operacional de ${story.title}`}>
      <div className="briefingAnalystHeader">
        <div>
          <span>ANALYST LAYER / DECISION QUALITY</span>
          <h5>O que precisamos provar antes de encerrar este tópico</h5>
        </div>
        <button type="button" onClick={() => openWhatsApp(buildAnalystShare(story))}>
          ↗ WHATSAPP · ANALYST BRIEF
        </button>
      </div>

      <div className="briefingAnalystGrid">
        <section>
          <small>EVIDÊNCIA QUE PRECISAMOS COLETAR</small>
          <ul>{note.evidenceToCollect.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section className="escalation">
          <small>ESCALAR SE</small>
          <ul>{note.escalationTriggers.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      </div>

      <div className="briefingDecisionGate">
        <small>DECISION GATE</small>
        <p>{note.decisionGate}</p>
      </div>
    </section>
  );
}

export default function SecurityBriefingAnalystLayer() {
  const [hosts, setHosts] = useState<AnalystHost[]>([]);

  useEffect(() => {
    const sync = () => {
      const pageTitle = document.querySelector('.stage h1')?.textContent?.trim();
      if (pageTitle !== 'Security Briefing') {
        document.querySelectorAll<HTMLElement>('[data-analyst-layer-host]').forEach((node) => node.remove());
        setHosts([]);
        return;
      }

      const next: AnalystHost[] = [];
      const cards = Array.from(document.querySelectorAll<HTMLElement>('.briefingStory'));

      cards.forEach((card) => {
        const title = card.querySelector('.briefingStoryTitleRow h4')?.textContent?.trim();
        const story = securityBriefingStories.find((item) => item.title === title);
        if (!story || !securityBriefingAnalystNotes[story.id]) return;

        let host = card.querySelector<HTMLElement>(`[data-analyst-layer-host="${story.id}"]`);
        if (!host) {
          host = document.createElement('div');
          host.dataset.analystLayerHost = story.id;
          const body = card.querySelector<HTMLElement>('.briefingStoryBody');
          const actions = body?.querySelector<HTMLElement>('.briefingActions');
          if (body && actions) body.insertBefore(host, actions);
          else body?.appendChild(host);
        }

        if (host) next.push({ story, element: host });
      });

      setHosts(next);
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      document.querySelectorAll<HTMLElement>('[data-analyst-layer-host]').forEach((node) => node.remove());
    };
  }, []);

  return (
    <>
      {hosts.map(({ story, element }) => createPortal(
        <AnalystPanel story={story} />,
        element,
        story.id,
      ))}
    </>
  );
}
