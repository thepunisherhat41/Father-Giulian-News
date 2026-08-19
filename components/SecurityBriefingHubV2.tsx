'use client';

import { useMemo, useState } from 'react';
import {
  securityBriefingPillars,
  securityBriefingStories,
  securityBriefingUpdatedAt,
  type BriefingPriority,
  type SecurityBriefingStory,
} from '@/lib/security-briefing-content';
import { securityBriefingMedia } from '@/lib/security-briefing-media';
import { securityBriefingDeepDive } from '@/lib/security-briefing-deep-dive';
import { securityBriefingEnrichment } from '@/lib/security-briefing-enrichment';

const priorityRank: Record<BriefingPriority, number> = { P0: 0, P1: 1, P2: 2, WATCH: 3 };
const containMedia = new Set(['storm-2949-cloud-identity', 'mastra-npm-supply-chain', 'ai-assisted-vulnerability-management', 'open-source-supply-chain-2026']);

function whatsapp(text: string) {
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

async function copy(text: string) {
  await navigator.clipboard.writeText(text);
}

function StoryVisual({ story }: { story: SecurityBriefingStory }) {
  const media = securityBriefingMedia[story.id];
  if (!media) return null;
  const fit = containMedia.has(story.id) ? 'contain' : 'cover';
  return (
    <figure className={`briefingV2Media fit-${fit}`}>
      <a href={media.sourceUrl} target="_blank" rel="noreferrer" aria-label={`Abrir fonte da imagem: ${story.title}`}>
        <img src={media.url} alt={media.alt} loading="lazy" referrerPolicy="no-referrer" />
      </a>
      <figcaption>
        <span>REAL SOURCE MEDIA</span>
        <strong>{media.caption}</strong>
        <small>{media.credit}</small>
      </figcaption>
    </figure>
  );
}

function topicText(story: SecurityBriefingStory, mode: 'executive' | 'technical' | 'full') {
  const deepDive = securityBriefingDeepDive[story.id];
  const enrichment = securityBriefingEnrichment[story.id];
  const base = [
    `*SECURITY BRIEFING · ${story.pillar} · ${story.priority}*`,
    `${story.status} · ${story.signalType} · ${story.confidence} confidence`,
    `Publicado: ${story.publishedAt}`,
    '',
    `*${story.title}*`,
    '',
    story.deck,
    '',
    `*WHY NOW*\n${story.whyNow}`,
    '',
    `*DECISÃO SUGERIDA*\n${story.decision}`,
  ];

  if (mode === 'executive') {
    return [...base, '', `*IMPACTO PARA NEGÓCIO*\n${story.businessImpact}`, '', `Público: ${story.audience.join(' · ')}`, `Fonte: ${story.source.label}`, story.source.url].join('\n');
  }

  const technical = [
    ...base,
    '',
    `*IMPACTO TÉCNICO*\n${story.technicalImpact}`,
    '',
    '*EVIDÊNCIAS*',
    ...story.evidence.map((item) => `- ${item.label}: ${item.value}`),
    '',
    '*PERGUNTAS DE EXPOSIÇÃO*',
    ...story.exposureQuestions.map((item) => `- ${item}`),
    '',
    '*AÇÕES SUGERIDAS*',
    ...story.actionNow.map((item) => `- ${item}`),
  ];

  if (mode === 'technical') {
    return [...technical, '', `Frameworks: ${story.frameworks.join(' · ')}`, `Fonte: ${story.source.label}`, story.source.url].join('\n');
  }

  return [
    ...technical,
    '',
    ...(enrichment ? ['*FATOS CONFIRMADOS NA FONTE*', ...enrichment.sourceFacts.map((item) => `- ${item}`), '', '*O QUE AINDA NÃO SABEMOS / NÃO DEVEMOS ASSUMIR*', ...enrichment.unknowns.map((item) => `- ${item}`), '', '*GATILHOS DE DECISÃO*', ...enrichment.decisionTriggers.map((item) => `- SE ${item.condition} → ${item.action}`), ''] : []),
    ...(deepDive ? ['*ATTACK / EXPOSURE PATH*', ...deepDive.attackPath.map((item, index) => `${index + 1}. ${item}`), '', '*CONTROLES A VALIDAR*', ...deepDive.controlsToValidate.map((item) => `- ${item}`), '', '*TELEMETRIA / EVIDÊNCIA INTERNA*', ...deepDive.telemetryToCheck.map((item) => `- ${item}`), '', `Owner: ${deepDive.decisionOwner}`, `Horizonte: ${deepDive.horizon}`, `Critério de sucesso: ${deepDive.successCriteria}`, `Pergunta para o time: ${deepDive.discussionPrompt}`, ''] : []),
    `Frameworks: ${story.frameworks.join(' · ')}`,
    `Fonte primária: ${story.source.label}`,
    story.source.url,
    '',
    '_Prioridade editorial deve ser contextualizada à exposição, criticidade e controles do ambiente._',
  ].join('\n');
}

function dailyBriefText(stories: SecurityBriefingStory[]) {
  const top = stories.filter((story) => story.priority === 'P0' || story.status === 'ACT NOW').slice(0, 4);
  return [
    '*SECURITY BRIEFING · DECISÕES DO DIA*',
    `Atualizado: ${securityBriefingUpdatedAt}`,
    '',
    ...top.flatMap((story, index) => [`*${index + 1}. ${story.title}*`, `${story.priority} · ${story.status} · ${story.pillar}`, `Decisão: ${story.decision}`, `Fonte: ${story.source.url}`, '']),
    '_Fonte primária primeiro. Prioridade editorial não substitui análise da exposição real._',
  ].join('\n');
}

export default function SecurityBriefingHubV2() {
  const [pillar, setPillar] = useState('TODOS');
  const [priority, setPriority] = useState<'TODOS' | BriefingPriority>('TODOS');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [briefCopied, setBriefCopied] = useState(false);

  const orderedStories = useMemo(() => [...securityBriefingStories].sort((a, b) => priorityRank[a.priority] - priorityRank[b.priority]), []);
  const stories = useMemo(() => orderedStories.filter((story) => (pillar === 'TODOS' || story.pillar === pillar) && (priority === 'TODOS' || story.priority === priority)), [orderedStories, pillar, priority]);
  const p0 = orderedStories.filter((story) => story.priority === 'P0').length;
  const p1 = orderedStories.filter((story) => story.priority === 'P1').length;
  const actNow = orderedStories.filter((story) => story.status === 'ACT NOW').length;
  const decisionQueue = orderedStories.filter((story) => story.priority === 'P0' || story.status === 'ACT NOW').slice(0, 3);

  const copyTopic = async (story: SecurityBriefingStory) => {
    try {
      await copy(topicText(story, 'full'));
      setCopiedId(story.id);
      window.setTimeout(() => setCopiedId(null), 1600);
    } catch {
      setCopiedId(null);
    }
  };

  const copyDaily = async () => {
    try {
      await copy(dailyBriefText(orderedStories));
      setBriefCopied(true);
      window.setTimeout(() => setBriefCopied(false), 1600);
    } catch {
      setBriefCopied(false);
    }
  };

  return (
    <section className="securityBriefingV2">
      <section className="briefingV2Command">
        <div className="briefingV2Hero">
          <div>
            <span>SECURITY INTELLIGENCE / DECISION DESK</span>
            <h3>Security Briefing</h3>
            <p>Notícia vira decisão: fatos confirmados, limites do que sabemos, impacto técnico e de negócio, exposição, controles, telemetria e share pronto para o time.</p>
            <div className="briefingV2Tags"><b>UPDATED {securityBriefingUpdatedAt}</b><b>SOURCE-FIRST</b><b>NO CLICKBAIT</b><b>WHATSAPP PER TOPIC</b></div>
          </div>
          <div className="briefingV2HeroActions">
            <button onClick={copyDaily}>{briefCopied ? '✓ COPIADO' : '⧉ COPIAR DECISÕES DO DIA'}</button>
            <button className="wa" onClick={() => whatsapp(dailyBriefText(orderedStories))}>↗ WHATSAPP · DAILY BRIEF</button>
          </div>
        </div>

        <div className="briefingV2Pulse">
          <article className="p0"><small>P0 / IMMEDIATE</small><strong>{p0}</strong><span>sinais</span></article>
          <article><small>P1 / PRIORITY</small><strong>{p1}</strong><span>sinais</span></article>
          <article><small>ACT NOW</small><strong>{actNow}</strong><span>decisões</span></article>
          <article><small>INTEL SET</small><strong>{orderedStories.length}</strong><span>tópicos curados</span></article>
        </div>

        <div className="briefingV2DecisionHead"><span>DECISION QUEUE</span><h4>O que merece conversa com o time primeiro</h4></div>
        <div className="briefingV2DecisionQueue">
          {decisionQueue.map((story, index) => (
            <article key={story.id}>
              <div><span>{String(index + 1).padStart(2, '0')}</span><b className={`p-${story.priority.toLowerCase()}`}>{story.priority}</b><em>{story.pillar}</em></div>
              <h5>{story.title}</h5>
              <p>{story.decision}</p>
              <button onClick={() => whatsapp(topicText(story, 'executive'))}>↗ WHATSAPP</button>
            </article>
          ))}
        </div>
      </section>

      <section className="briefingV2Filters">
        <div>{(['TODOS', 'P0', 'P1', 'P2', 'WATCH'] as const).map((item) => <button key={item} className={priority === item ? 'active' : ''} onClick={() => setPriority(item)}>{item}</button>)}</div>
        <div>{securityBriefingPillars.map((item) => <button key={item} className={pillar === item ? 'active' : ''} onClick={() => setPillar(item)}>{item}</button>)}</div>
      </section>

      <div className="briefingV2StreamHead"><div><span>INTELLIGENCE STREAM</span><h4>{stories.length} tópicos</h4></div><p>O resumo não repete o deep dive. Abra os detalhes quando quiser sair da notícia e entrar na validação operacional.</p></div>

      <div className="briefingV2Stream">
        {stories.map((story, index) => {
          const deepDive = securityBriefingDeepDive[story.id];
          const enrichment = securityBriefingEnrichment[story.id];
          return (
            <article className="briefingV2Story" key={story.id}>
              <header className="briefingV2StoryHeader">
                <div className="briefingV2StoryMeta"><span>{story.pillar}</span><b>{story.signalType}</b><em>{story.publishedAt}</em><em>{story.confidence} CONFIDENCE</em></div>
                <div className="briefingV2TitleLine">
                  <div className={`briefingV2Priority p-${story.priority.toLowerCase()}`}>{story.priority}</div>
                  <div><small>{story.status} · {story.freshness}</small><h4>{story.title}</h4></div>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="briefingV2TopShare">
                  <button className="wa" onClick={() => whatsapp(topicText(story, 'full'))}>↗ WHATSAPP · COMPARTILHAR TÓPICO</button>
                  <button onClick={() => copyTopic(story)}>{copiedId === story.id ? '✓ COPIADO' : '⧉ COPIAR COMPLETO'}</button>
                  <a href={story.source.url} target="_blank" rel="noreferrer">FONTE PRIMÁRIA ↗</a>
                </div>
              </header>

              <StoryVisual story={story} />

              <div className="briefingV2StoryBody">
                <p className="briefingV2Deck">{story.deck}</p>
                <div className="briefingV2Core">
                  <section className="why"><small>WHY NOW</small><p>{story.whyNow}</p></section>
                  <section className="decision"><small>DECISÃO SUGERIDA</small><strong>{story.decision}</strong></section>
                </div>

                <div className="briefingV2Evidence">{story.evidence.map((item) => <div key={`${story.id}-${item.label}`}><small>{item.label}</small><strong>{item.value}</strong></div>)}</div>

                <details className="briefingV2Details" open={story.priority === 'P0'}>
                  <summary><span>ABRIR DEEP DIVE</span><small>fatos · limites · impacto · exposição · controles · telemetria</small></summary>
                  <div className="briefingV2DetailsBody">
                    {enrichment && (
                      <div className="briefingV2FactGrid">
                        <section><small>FATOS CONFIRMADOS NA FONTE</small><ul>{enrichment.sourceFacts.map((item) => <li key={item}>{item}</li>)}</ul></section>
                        <section className="unknown"><small>O QUE NÃO DEVEMOS ASSUMIR</small><ul>{enrichment.unknowns.map((item) => <li key={item}>{item}</li>)}</ul></section>
                      </div>
                    )}

                    <div className="briefingV2ImpactGrid">
                      <section><small>IMPACTO TÉCNICO</small><p>{story.technicalImpact}</p></section>
                      <section><small>IMPACTO PARA NEGÓCIO</small><p>{story.businessImpact}</p></section>
                    </div>

                    {enrichment && <section className="briefingV2Triggers"><small>GATILHOS DE DECISÃO</small>{enrichment.decisionTriggers.map((item) => <div key={item.condition}><b>SE</b><span>{item.condition}</span><strong>ENTÃO</strong><p>{item.action}</p></div>)}</section>}

                    <div className="briefingV2OpsGrid">
                      <section><small>PERGUNTAS DE EXPOSIÇÃO</small><ul>{story.exposureQuestions.map((item) => <li key={item}>{item}</li>)}</ul></section>
                      <section><small>O QUE FAZER AGORA</small><ul>{story.actionNow.map((item) => <li key={item}>{item}</li>)}</ul></section>
                    </div>

                    {deepDive && (
                      <section className="briefingV2Operational">
                        <div className="briefingV2OpHead"><div><span>OPERATIONAL VALIDATION</span><h5>Transforme o sinal externo em evidência interna</h5></div><div><small>OWNER</small><strong>{deepDive.decisionOwner}</strong><small>HORIZONTE</small><strong>{deepDive.horizon}</strong></div></div>
                        <div className="briefingV2Path"><small>ATTACK / EXPOSURE PATH</small><div>{deepDive.attackPath.map((item, i) => <span key={item}><b>{String(i + 1).padStart(2, '0')}</b>{item}</span>)}</div></div>
                        <div className="briefingV2OpsGrid"><section><small>CONTROLES A VALIDAR</small><ul>{deepDive.controlsToValidate.map((item) => <li key={item}>{item}</li>)}</ul></section><section><small>TELEMETRIA / EVIDÊNCIA INTERNA</small><ul>{deepDive.telemetryToCheck.map((item) => <li key={item}>{item}</li>)}</ul></section></div>
                        <div className="briefingV2Outcome"><section><small>CRITÉRIO DE SUCESSO</small><p>{deepDive.successCriteria}</p></section><section><small>PERGUNTA PARA A REUNIÃO</small><p>{deepDive.discussionPrompt}</p></section></div>
                      </section>
                    )}

                    <div className="briefingV2Refs">
                      {story.frameworks.map((item) => <span key={item}>{item}</span>)}
                      {enrichment?.references.map((item) => <a key={item.url} href={item.url} target="_blank" rel="noreferrer">{item.label} ↗</a>)}
                    </div>
                  </div>
                </details>

                <div className="briefingV2ShareDock">
                  <span>SHARE THIS INTEL</span>
                  <button onClick={() => whatsapp(topicText(story, 'executive'))}>💼 WHATSAPP · EXEC</button>
                  <button onClick={() => whatsapp(topicText(story, 'technical'))}>🧬 WHATSAPP · TÉCNICO</button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <footer className="briefingV2Method"><span>METHODOLOGY</span><p>Incidente, vulnerabilidade, threat trend, guidance e estratégia permanecem separados. P0/P1 é prioridade editorial para discussão, não score automático. O conteúdo distingue fatos observados, limites do que a fonte permite concluir e hipóteses que precisam ser validadas no ambiente.</p></footer>
    </section>
  );
}
