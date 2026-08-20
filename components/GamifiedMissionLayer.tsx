'use client';

import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

type MissionSnapshot = {
  label: string;
  emoji: string;
  objective: string;
  readTime: string;
  chapterCount: number;
  sourceCount: number;
  totalAreas: number;
  editionKey: string;
};

const EMPTY: MissionSnapshot = {
  label: 'Hoje',
  emoji: '☀️',
  objective: 'Explorar a edição do dia.',
  readTime: '—',
  chapterCount: 0,
  sourceCount: 0,
  totalAreas: 23,
  editionKey: 'daily',
};

function safeSlug(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'hoje';
}

function uniqueElements(selectors: string[]) {
  const items = new Set<Element>();
  selectors.forEach((selector) => document.querySelectorAll(selector).forEach((item) => items.add(item)));
  return items.size;
}

function countSources() {
  const hrefs = new Set<string>();
  const selectors = [
    '.sourceBlock a',
    '.dossierSources a',
    '.candidateSource',
    '.candidateAnalysisSources a',
    '.zlSourceLine a',
    '.zlOfficialLink',
    '.zlCaseActions a',
    '.zlArticleActions a',
    '.zlRegionalActions a',
    '.briefingV2Story a[href]',
    '.appSecStoryCard a[href]',
    '.dailyRichMedia a[href]',
    '.vehicleComparisonHub a[href]',
    '.babyDiscoveryLab a[href]',
    '.musicHub a[href]',
    '.gameHub a[href]',
  ];

  selectors.forEach((selector) => {
    document.querySelectorAll<HTMLAnchorElement>(selector).forEach((anchor) => {
      if (anchor.href) hrefs.add(anchor.href);
    });
  });
  return hrefs.size;
}

function readSnapshot(): MissionSnapshot {
  const label = document.querySelector('.stage h1')?.textContent?.trim() || 'Hoje';
  const activeQuick = document.querySelector('.magazineQuickNav button.active span')?.textContent?.trim();
  const activeSidebar = Array.from(document.querySelectorAll('.groupedNav button.active span'))[0]?.textContent?.trim();
  const emoji = activeQuick || activeSidebar || '✦';
  const objective = document.querySelector('.articlePanel > h2')?.textContent?.trim()
    || document.querySelector('.magazineFeatureCopy h3')?.textContent?.trim()
    || `Explorar ${label}`;
  const readTime = document.querySelector('.stageV3Meta small')?.textContent?.trim() || '—';
  const date = document.querySelector('.magazineMasthead .date')?.textContent?.trim()
    || document.querySelector('.sidebarEdition strong')?.textContent?.trim()
    || 'daily';
  const totalAreas = Math.max(1, document.querySelectorAll('.groupedNav button').length || 23);

  const chapterCount = uniqueElements([
    '.intelSection',
    '.dossierSection',
    '.briefingV2Story',
    '.candidateCardCollapsible',
    '.candidateCard',
    '.zlRegionalNewsCard',
    '.zlSignal',
    '.zlCaseCard',
    '.zlArticleCard',
    '.vehicleOptionCard',
    '.musicTrackList button',
    '.gameStoryGrid article',
    '.gameStoryGrid section',
    '.appSecStoryCard',
    '.babyMilestoneList article',
    '.babyCuriosityGrid article',
    '.magazineStoryCard',
  ]);

  return {
    label,
    emoji,
    objective,
    readTime,
    chapterCount,
    sourceCount: countSources(),
    totalAreas,
    editionKey: safeSlug(date),
  };
}

function GamifiedMissionLayer() {
  const [snapshot, setSnapshot] = useState<MissionSnapshot>(EMPTY);
  const [progress, setProgress] = useState(0);
  const [maxProgress, setMaxProgress] = useState(0);
  const [visitedCount, setVisitedCount] = useState(1);

  useEffect(() => {
    let frame = 0;
    const sync = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setSnapshot(readSnapshot()));
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    window.addEventListener('resize', sync);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', sync);
    };
  }, []);

  useEffect(() => {
    const mission = safeSlug(snapshot.label);
    const progressKey = `fgn:mission:${snapshot.editionKey}:${mission}`;
    const visitedKey = `fgn:visited:${snapshot.editionKey}`;

    try {
      const previous = Number(window.localStorage.getItem(progressKey) || 0);
      setMaxProgress(Number.isFinite(previous) ? previous : 0);

      const visited = JSON.parse(window.localStorage.getItem(visitedKey) || '[]') as string[];
      const nextVisited = Array.from(new Set([...visited, mission]));
      window.localStorage.setItem(visitedKey, JSON.stringify(nextVisited));
      setVisitedCount(nextVisited.length);
    } catch {
      setVisitedCount(1);
    }

    const syncProgress = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const current = Math.max(0, Math.min(100, Math.round((window.scrollY / maxScroll) * 100)));
      setProgress(current);
      setMaxProgress((previous) => {
        const next = Math.max(previous, current);
        if (next !== previous) {
          try { window.localStorage.setItem(progressKey, String(next)); } catch { /* storage may be unavailable */ }
        }
        return next;
      });
    };

    syncProgress();
    window.addEventListener('scroll', syncProgress, { passive: true });
    window.addEventListener('resize', syncProgress);
    return () => {
      window.removeEventListener('scroll', syncProgress);
      window.removeEventListener('resize', syncProgress);
    };
  }, [snapshot.editionKey, snapshot.label]);

  const xp = useMemo(() => Math.min(9999, visitedCount * 15 + Math.round(maxProgress * 1.2)), [maxProgress, visitedCount]);
  const level = Math.max(1, Math.min(99, 1 + Math.floor(xp / 100)));
  const levelProgress = xp % 100;
  const completed = maxProgress >= 95;
  const checkpoints = [25, 50, 75, 95];
  const badge = completed
    ? 'Missão concluída'
    : maxProgress >= 75
      ? 'Aprofundando'
      : maxProgress >= 50
        ? 'No ritmo'
        : maxProgress >= 25
          ? 'Exploração ativa'
          : 'Começando';

  return (
    <section className={`missionDeckV6 ${completed ? 'isComplete' : ''}`} aria-label="Progresso da missão de leitura">
      <div className="missionDeckGlow" aria-hidden="true" />

      <div className="missionDeckHeader">
        <div className="missionIdentityV6">
          <div className="missionIconV6" aria-hidden="true">{snapshot.emoji}</div>
          <div>
            <span className="missionLiveV6"><i /> MISSÃO ATIVA</span>
            <strong>{snapshot.label}</strong>
            <p>{snapshot.objective}</p>
          </div>
        </div>

        <div className="missionRankV6">
          <small>NÍVEL</small>
          <b>{String(level).padStart(2, '0')}</b>
          <span>{xp} XP</span>
        </div>
      </div>

      <div className="missionProgressV6">
        <div className="missionProgressTopV6">
          <div><small>PROGRESSO DA LEITURA</small><strong>{Math.max(progress, maxProgress)}%</strong></div>
          <span>{badge}</span>
        </div>
        <div className="missionTrackV6" aria-label={`${Math.max(progress, maxProgress)}% concluído`}>
          <i style={{ width: `${Math.max(progress, maxProgress)}%` }} />
          {checkpoints.map((point) => (
            <b key={point} className={maxProgress >= point ? 'reached' : ''} style={{ left: `${point}%` }} aria-hidden="true" />
          ))}
        </div>
        <div className="missionCheckpointLabelsV6" aria-hidden="true">
          <span>Entrada</span><span>25</span><span>50</span><span>75</span><span>Fim</span>
        </div>
      </div>

      <div className="missionStatsV6">
        <article><small>CAPÍTULOS / CARDS</small><strong>{snapshot.chapterCount || '—'}</strong><span>conteúdos nesta área</span></article>
        <article><small>FONTES ENCONTRADAS</small><strong>{snapshot.sourceCount || '—'}</strong><span>referências e links</span></article>
        <article><small>TEMPO ESTIMADO</small><strong>{snapshot.readTime}</strong><span>para a leitura-base</span></article>
        <article><small>CAMPANHA DO DIA</small><strong>{visitedCount}/{snapshot.totalAreas}</strong><span>áreas exploradas</span></article>
      </div>

      <div className="missionFooterV6">
        <div className="missionBadgesV6">
          <span className={visitedCount >= 3 ? 'earned' : ''}>◈ Explorador</span>
          <span className={maxProgress >= 50 ? 'earned' : ''}>◉ Leitor</span>
          <span className={maxProgress >= 75 ? 'earned' : ''}>◆ Profundidade</span>
          <span className={completed ? 'earned' : ''}>★ Concluída</span>
        </div>
        <div className="missionLevelTrackV6"><small>PRÓXIMO NÍVEL</small><i><b style={{ width: `${levelProgress}%` }} /></i><span>{100 - levelProgress} XP</span></div>
      </div>

      <small className="missionStorageNoteV6">Progresso salvo apenas neste navegador.</small>
    </section>
  );
}

export default function GamifiedMissionLayerPortal() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const id = 'gamified-mission-layer-host';
    const sync = () => {
      const stage = document.querySelector('.stage');
      if (!stage) return;
      let node = document.getElementById(id);
      if (!node) {
        node = document.createElement('div');
        node.id = id;
        stage.insertAdjacentElement('afterend', node);
      }
      if (node.previousElementSibling !== stage) stage.insertAdjacentElement('afterend', node);
      setHost(node);
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return host ? createPortal(<GamifiedMissionLayer />, host) : null;
}
