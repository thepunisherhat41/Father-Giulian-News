'use client';

import { useLayoutEffect } from 'react';
import { dailyContent } from '@/lib/daily-content';
import { applyCurrentReelPatches } from '@/lib/current-reel-patches';
import ReelsExperienceV25 from './ReelsExperienceV25';

const COVER_REV = '20260825-1414';

const coverForAlt = (alt: string) => {
  if (alt.includes('Papo de hoje')) return `/reel-ai/covers/conversation.svg?v=${COVER_REV}`;
  if (alt.includes('Desafio do casal')) return `/reel-ai/covers/challenge.svg?v=${COVER_REV}`;
  if (alt.includes('Ciência')) return `/reel-ai/covers/science.svg?v=${COVER_REV}`;
  if (alt.includes('Corpo Humano')) return `/reel-ai/covers/body.svg?v=${COVER_REV}`;
  if (alt.includes('Espaço')) return `/reel-ai/covers/space.svg?v=${COVER_REV}`;
  if (alt.includes('História')) return `/reel-ai/covers/history.svg?v=${COVER_REV}`;
  if (alt.includes('Animais')) return `/reel-ai/covers/animals.svg?v=${COVER_REV}`;
  if (alt.includes('Planeta')) return `/reel-ai/covers/nature.svg?v=${COVER_REV}`;
  if (alt.includes('Natureza')) return `/reel-ai/covers/nature.svg?v=${COVER_REV}`;
  return null;
};

function applyRealReelCovers() {
  const root = document.querySelector('[aria-label="Father Giulian News em modo Reels"]');
  if (!root) return;

  root.querySelectorAll<HTMLImageElement>('img').forEach((img) => {
    const cover = coverForAlt(img.alt || '');
    if (!cover) return;

    if (img.getAttribute('src') !== cover) img.setAttribute('src', cover);
    img.style.position = 'absolute';
    img.style.inset = '0';
    img.style.left = '0';
    img.style.top = '0';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.maxWidth = 'none';
    img.style.objectFit = 'cover';
    img.style.objectPosition = 'center';
    img.style.display = 'block';
    img.style.filter = 'none';
  });
}

export default function ReelsExperienceLive() {
  applyCurrentReelPatches(dailyContent);

  useLayoutEffect(() => {
    applyRealReelCovers();
    const observer = new MutationObserver(applyRealReelCovers);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return <ReelsExperienceV25 />;
}
