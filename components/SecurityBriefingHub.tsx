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

function whatsapp(text: string) {
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

async function copy(text: string) {
  await navigator.clipboard.writeText(text);
}

const priorityRank: Record<BriefingPriority, number> = { P0: 0, P1: 1, P2: 2, WATCH: 3 };

function StoryVisual({ story }: { story: SecurityBriefingStory }) {
  const media = securityBriefingMedia[story.id];
  if (!media) return null;

  return (
    <a className="briefingVisual real" href={media.sourceUrl} target="_blank" rel="noreferrer" aria-label={`Abrir fonte da imagem: ${story.title}`}>
      <img src={media.url} alt={media.alt} loading="lazy" referrerPolicy="no-referrer" />
      <div className="briefingVisualShade" />
      <div className="briefingVisualCredit">
        <small>REAL SOURCE MEDIA</small>
        <strong>{media.caption}</strong>
        <span>{media.credit}</span>
      </div>
      <div className={`briefingPriority priority-${story.priority.toLowerCase()}`}>{story.priority}</div>
    </a>
  );
}

function storyText(story: SecurityBriefingStory, mode: 'executive' | 'technical') {
  if (mode === 'executive') {
    return [
      `*SECURITY BRIEFING · ${story.pillar} · ${story.priority}*`,
      `Status: ${story.status} · ${story.signalType}`,
      '',
      `*${story.title}*`,
      '',
      `Por que importa agora: ${story.whyNow}`,
      '',
      `Decisão sugerida: ${story.decision}`,
      '',
      `Impacto para negócio: ${story.businessImpact}`,
      '',
      `Público: ${story.audience.join(' · ')}`,
      `Fonte: ${story.source.label}`,
      story.source.url,
    ].join('\n');
  }

  return [
    `*TECHNICAL SECURITY BRIEF · ${story.pillar} · ${story.priority}*`,
    `Status: ${story.status} · Confiança: ${story.confidence}`,
    '',
    `*${story.title}*`,
    '',
    `Why now: ${story.whyNow}`,
    '',
    `Decisão: ${story.decision}`,
    '',
    `Impacto técnico: ${story.technicalImpact}`,
    '',
    '*Perguntas de exposição*',
    ...story.exposureQuestions.map((item) => `- ${item}`),
    '',
    '*Ações sugeridas*',
    ...story.actionNow.map((item) => `- ${item}`),
    '',
    `Frameworks: ${story.frameworks.join(' · ')}`,
    `Fonte: ${story.source.label}`,
    story.source.url,
  ].join('\n');
}

function dailyBriefText(stories: SecurityBriefingStory[]) {
  const top = stories.filter((story) => story.priority === 'P0' || story.status === 'ACT NOW').slice(0, 4);
  return [
    '*SECURITY BRIEFING · DECISÕES DO DIA*',
    `Atualizado: ${securityBriefingUpdatedAt}`,
    '',
    ...top.flatMap((story, index) => [
      `*${index + 1}. ${story.title}*`,
      `${story.priority} · ${story.status} · ${story.pillar}`,
      `Decisão: ${story.decision}`,
      `Fonte: ${story.source.url}`,
      '',
    ]),
    '_Curadoria baseada em fontes primárias/autoritativas. Prioridade editorial não substitui análise de exposição do ambiente._',
  ].join('\n');
}

export default function SecurityBriefingHub() {
  const [pillar, setPillar] = useState('TODOS');
  const [priority, setPriority] = useState<'TODOS' | BriefingPriority>('TODOS');
  const [mode, setMode] = useState<'executive' | 'technical'>('executive');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [briefCopied, setBriefCopied] = useState(false);

  const orderedStories = useMemo(
    () => [...securityBriefingStories].sort((a, b) => priorityRank[a.priority] - priorityRank[b.priority]),
    [],
  );

  const stories = useMemo(
    () => orderedStories.filter((story) => (pillar === 'TODOS' || story.pillar === pillar) && (priority === 'TODOS' || story.priority === priority)),
    [orderedStories, pillar, priority],
  );

  const p0Count = orderedStories.filter((story) => story.priority === 'P0').length;
  const p1Count = orderedStories.filter((story) => story.priority === 'P1').length;
  const actNowCount = orderedStories.filter((story) => story.status === 'ACT NOW').length;
  const leadStories = orderedStories.filter((story) => story.priority === 'P0' || story.status === 'ACT NOW').slice(0, 3);

  const copyStory = async (story: SecurityBriefingStory) => {
    try {
      await copy(storyText(story, mode));
      setCopiedId(story.id);
      window.setTimeout(() => setCopiedId(null), 1600);
    } catch {
      setCopiedId(null);
    }
  };

  const copyDailyBrief = async () => {
    try {
      await copy(dailyBriefText(orderedStories));
      setBriefCopied(true);
      window.setTimeout(() => setBriefCopied(false), 1800);
    } catch {
      setBriefCopied(false);
    }
  };

  return (
    <section className="securityBriefingHub">
      <section className="briefingCommandCenter">
        <header className="briefingHero">
          <div className="briefingHeroCopy">
            <span>SECURITY INTELLIGENCE / COMMAND CENTER</span>
            <h3>Security Briefing</h3>
            <p>Threat intel, AppSec, Cloud, IAM, supply chain, IA e negócio convertidos em decisões que o time consegue discutir e executar.</p>
            <div className="briefingHeroMeta">
              <span>UPDATED / {securityBriefingUpdatedAt}</span>
              <span>SOURCE-FIRST</span>
              <span>NO CLICKBAIT</span>
            </div>
          </div>
          <div className="briefingHeroActions">
            <button onClick={copyDailyBrief}>{briefCopied ? '✓ BRIEFING COPIADO' : '⧉ COPIAR DECISÕES DO DIA'}</button>
            <button className="wa" onClick={() => whatsapp(dailyBriefText(orderedStories))}>↗ WHATSAPP · DAILY BRIEF</button>
          </div>
        </header>

        <div className="briefingPulseGrid">
          <article className="critical"><small>P0 / IMMEDIATE</small><strong>{p0Count}</strong><span>sinais críticos</span></article>
          <article><small>P1 / PRIORITY</small><strong>{p1Count}</strong><span>para avaliar</span></article>
          <article><small>ACT NOW</small><strong>{actNowCount}</strong><span>decisões sugeridas</span></article>
          <article><small>INTEL SET</small><strong>{orderedStories.length}</strong><span>fontes curadas</span></article>
        </div>

        <section className="briefingDecisionQueue">
          <div className="briefingSectionHead">
            <div><span>DECISION QUEUE</span><h4>As três conversas que eu colocaria na mesa hoje</h4></div>
            <b>01 → 03</b>
          </div>
          <div className="briefingDecisionGrid">
            {leadStories.map((story, index) => (
              <article key={story.id}>
                <div className="briefingDecisionMeta"><span>{String(index + 1).padStart(2, '0')}</span><b className={`priority-${story.priority.toLowerCase()}`}>{story.priority}</b><em>{story.pillar}</em></div>
                <h5>{story.title}</h5>
                <p>{story.decision}</p>
                <div><small>{story.status}</small><span>{story.signalType}</span></div>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="briefingControls">
        <div className="briefingModeSwitch" aria-label="Modo de leitura">
          <button className={mode === 'executive' ? 'active' : ''} onClick={() => setMode('executive')}>💼 EXECUTIVE VIEW</button>
          <button className={mode === 'technical' ? 'active' : ''} onClick={() => setMode('technical')}>🧬 TECHNICAL VIEW</button>
        </div>

        <div className="briefingPriorityFilters" aria-label="Prioridade">
          {(['TODOS', 'P0', 'P1', 'P2', 'WATCH'] as const).map((item) => <button key={item} className={priority === item ? 'active' : ''} onClick={() => setPriority(item)}>{item}</button>)}
        </div>

        <div className="briefingFilters" aria-label="Pilar">
          {securityBriefingPillars.map((item) => <button key={item} className={pillar === item ? 'active' : ''} onClick={() => setPillar(item)}>{item}</button>)}
        </div>
      </section>

      <div className="briefingStreamHeader">
        <div><span>INTELLIGENCE STREAM</span><h4>{stories.length} sinais no recorte atual</h4></div>
        <p>Prioridade = curadoria editorial. A decisão real deve considerar exposição, criticidade, controles e contexto do ambiente.</p>
      </div>

      <div className="briefingGrid">
        {stories.map((story, index) => {
          const hasMedia = Boolean(securityBriefingMedia[story.id]);
          return (
            <article className={`briefingStory ${hasMedia ? 'withVisual' : 'textOnly'}`} key={story.id}>
              <StoryVisual story={story} />
              <div className="briefingStoryBody">
                <div className="briefingStoryMeta">
                  <div><span>{story.pillar}</span><b>{story.signalType}</b></div>
                  <div><em>{story.publishedAt}</em><strong>{story.confidence} CONFIDENCE</strong></div>
                </div>

                <div className="briefingStoryTitleRow">
                  {!hasMedia && <div className={`briefingInlinePriority priority-${story.priority.toLowerCase()}`}>{story.priority}</div>}
                  <div><small>{story.status} · {story.freshness}</small><h4>{story.title}</h4></div>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>

                <p className="briefingDeck">{story.deck}</p>

                <section className="briefingWhyNow">
                  <small>WHY NOW</small>
                  <p>{story.whyNow}</p>
                </section>

                <section className="briefingDecision">
                  <small>DECISÃO SUGERIDA</small>
                  <strong>{story.decision}</strong>
                </section>

                <div className="briefingEvidenceGrid">
                  {story.evidence.map((item) => <div key={`${story.id}-${item.label}`}><small>{item.label}</small><strong>{item.value}</strong></div>)}
                </div>

                <div className="briefingImpactGrid">
                  <section><small>IMPACTO TÉCNICO</small><p>{story.technicalImpact}</p></section>
                  <section><small>IMPACTO PARA NEGÓCIO</small><p>{story.businessImpact}</p></section>
                </div>

                <div className="briefingOperationalGrid">
                  <section className="briefingExposure"><small>PERGUNTAS DE EXPOSIÇÃO</small><ul>{story.exposureQuestions.map((item) => <li key={item}>{item}</li>)}</ul></section>
                  <section className="briefingAction"><small>O QUE FAZER AGORA</small><ul>{story.actionNow.map((item) => <li key={item}>{item}</li>)}</ul></section>
                </div>

                <div className="briefingFrameworks">{story.frameworks.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="briefingAudience"><small>PARA QUEM</small><span>{story.audience.join(' · ')}</span></div>

                <div className="briefingActions">
                  <button onClick={() => copyStory(story)}>{copiedId === story.id ? '✓ COPIADO' : mode === 'executive' ? '⧉ COPIAR PARA TEAMS' : '⧉ COPIAR TÉCNICO'}</button>
                  <button className="wa" onClick={() => whatsapp(storyText(story, mode))}>↗ WHATSAPP</button>
                  <a href={story.source.url} target="_blank" rel="noreferrer">FONTE PRIMÁRIA ↗</a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <footer className="briefingMethodNote">
        <span>METHODOLOGY / SOURCE-FIRST</span>
        <p>Incidente observado, vulnerabilidade, threat trend, guidance e estratégia são rotulados separadamente. P0/P1 não é CVSS: é uma prioridade editorial para discussão, sempre sujeita ao contexto real de exposição.</p>
      </footer>
    </section>
  );
}
