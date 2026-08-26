'use client';

import { useLayoutEffect } from 'react';
import { dailyContent } from '@/lib/daily-content';
import { curiosityCollections } from '@/lib/curiosity-collections';
import { applyCurrentCuriosityRotation } from '@/lib/current-curiosity-rotation';
import { applyCurrentReelPatches } from '@/lib/current-reel-patches';
import { applyCurrentReelPatches1432 } from '@/lib/current-reel-patches-1432';
import { applyCurrentReelPatches17h } from '@/lib/current-reel-patches-17h';
import { applyCurrentReelPatches1730 } from '@/lib/current-reel-patches-1730';
import { applyCurrentReelPatches1835 } from '@/lib/current-reel-patches-1835';
import { applyCurrentReelPatches20h } from '@/lib/current-reel-patches-20h';
import { applyCurrentReelPatches23h } from '@/lib/current-reel-patches-23h';
import { applyCurrentReelPatches20260826 } from '@/lib/current-reel-patches-2026-08-26';
import ReelsExperienceV25 from './ReelsExperienceV25';

const commons = (name:string) => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(name).replace(/%2F/g,'/')}`;

function applySpecialMedia() {
  const root = document.querySelector('[aria-label="Father Giulian News em modo Reels"]');
  if (!root) return;

  root.querySelectorAll<HTMLElement>('article[data-reel-index]').forEach((article) => {
    const category = article.querySelector<HTMLElement>('[class*="ReelsExperience_category"]')?.textContent?.toLocaleLowerCase('pt-BR') ?? '';
    const img = article.querySelector<HTMLImageElement>('figure img');
    if (!img) return;

    let cover:string|undefined;
    if (category.includes('papo de hoje')) cover = commons('Couple enjoys coffee together at home.jpg');
    if (category.includes('desafio do casal')) cover = commons('Album Photos-(1).jpg');
    if (!cover) return;

    if (img.getAttribute('src') !== cover) img.setAttribute('src', cover);
    img.style.position = 'absolute';
    img.style.inset = '0';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.maxWidth = 'none';
    img.style.objectFit = 'cover';
    img.style.objectPosition = 'center';
    img.style.display = 'block';
    img.style.opacity = '1';
    img.style.visibility = 'visible';
    img.style.filter = 'none';
    img.style.transform = 'none';
  });
}

/* The base component still contains some 25/08 OSINT objects. On 26/08 only
   current-date journalistic cards are allowed to remain visible. This safety
   layer prevents a stale card from being badged as HOJE while the next base
   refactor is performed. */
function pruneStaleJournalisticReels() {
  const root = document.querySelector('[aria-label="Father Giulian News em modo Reels"]');
  if (!root) return;

  const allowedJournalistic = new Set(['tempo e clima', 'games', 'security briefing']);
  const journalisticLabels = [
    'brasil','mundo','política','politica','tempo e clima','zona leste em foco','corinthians hoje',
    'games','tecnologia','finanças','financas','security briefing','cyber security','appsec / ssdlc'
  ];

  root.querySelectorAll<HTMLElement>('article[data-reel-index]').forEach((article) => {
    const categoryEl = article.querySelector<HTMLElement>('[class*="ReelsExperience_category"]');
    const label = (categoryEl?.textContent ?? '').replace(/HOJE/g,'').trim().toLocaleLowerCase('pt-BR');
    const isJournalistic = journalisticLabels.some((candidate) => label.includes(candidate));
    if (isJournalistic && !Array.from(allowedJournalistic).some((allowed) => label.includes(allowed))) {
      article.remove();
    }
  });

  const articles = Array.from(root.querySelectorAll<HTMLElement>('article[data-reel-index]'));
  const total = articles.length;
  articles.forEach((article,index) => {
    article.dataset.reelIndex = String(index);
    const counter = article.querySelector<HTMLElement>('[class*="ReelsExperience_counter"]');
    if (counter) counter.textContent = `${index + 1} / ${total}`;
    const progress = article.querySelector<HTMLElement>('[class*="ReelsExperience_progress"] i');
    if (progress) progress.style.width = `${((index + 1) / total) * 100}%`;
  });
}

function hardenLiveReels() {
  applySpecialMedia();
  pruneStaleJournalisticReels();
}

export default function ReelsExperienceLive() {
  applyCurrentCuriosityRotation(curiosityCollections);
  applyCurrentReelPatches(dailyContent);
  applyCurrentReelPatches1432(dailyContent);
  applyCurrentReelPatches17h(dailyContent);
  applyCurrentReelPatches1730(dailyContent);
  applyCurrentReelPatches1835(dailyContent);
  applyCurrentReelPatches20h(dailyContent);
  applyCurrentReelPatches23h(dailyContent);
  applyCurrentReelPatches20260826(dailyContent);

  useLayoutEffect(() => {
    hardenLiveReels();
    const observer = new MutationObserver(hardenLiveReels);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return <ReelsExperienceV25 />;
}
