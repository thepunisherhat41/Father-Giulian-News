'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { securityBriefingStories, type SecurityBriefingStory } from '@/lib/security-briefing-content';
import { securityBriefingAnalystNotes } from '@/lib/security-briefing-analyst-notes';

type AnalystHost = {
  story: SecurityBriefingStory;
  element: HTMLElement;
};

function openWhatsApp(text: string) {
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

function buildEvidencePlanShare(story: SecurityBriefingStory) {
  const analyst = securityBriefingAnalystNotes[story.id];
  if (!analyst) return '';
  return [
    `*SECURITY EVIDENCE PLAN · ${story.priority} · ${story.pillar}*`,
    `*${story.title}*`,
    '',
    '*EVIDÊNCIA A COLETAR*',
    ...analyst.evidenceToCollect.map((item) => `- ${item}`),
    '',
    '*ESCALAR SE*',
    ...analyst.escalationTriggers.map((item) => `- ${item}`),
    '',
    `*DECISION GATE*\n${analyst.decisionGate}`,
    '',
    `Fonte primária: ${story.source.label}`,
    story.source.url,
  ].join('\n');
}

function AnalystPanel({ story }: { story: SecurityBriefingStory }) {
  const note = securityBriefingAnalystNotes[story.id];
  if (!note) return null;

  return (
    <section className="briefingAnalystLayer" aria-label={`Plano de evidência de ${story.title}`}>
      <div className="briefingAnalystHeader">
        <div>
          <span>ANALYST LAYER / EVIDENCE PLAN</span>
          <h5>O que precisamos provar antes de encerrar este tópico</h5>
        </div>
        <button type="button" onClick={() => openWhatsApp(buildEvidencePlanShare(story))}>
          ↗ WHATSAPP · EVIDENCE PLAN
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
      const cards = Array.from(document.querySelectorAll<HTMLElement>('.briefingV2Story'));

      cards.forEach((card) => {
        const title = card.querySelector('.briefingV2TitleLine h4')?.textContent?.trim();
        const story = securityBriefingStories.find((item) => item.title === title);
        if (!story || !securityBriefingAnalystNotes[story.id]) return;

        let host = card.querySelector<HTMLElement>(`[data-analyst-layer-host="${story.id}"]`);
        if (!host) {
          host = document.createElement('div');
          host.dataset.analystLayerHost = story.id;
          const detailsBody = card.querySelector<HTMLElement>('.briefingV2DetailsBody');
          const operational = detailsBody?.querySelector<HTMLElement>('.briefingV2Operational');
          if (detailsBody && operational) detailsBody.insertBefore(host, operational);
          else detailsBody?.appendChild(host);
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
