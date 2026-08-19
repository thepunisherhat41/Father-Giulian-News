'use client';

import { useEffect } from 'react';
import { findCurrentRichMedia } from '@/lib/current-rich-media';

function attachMedia(card: HTMLElement) {
  if (card.dataset.homeMediaReady === 'true') return;

  const label = card.querySelector('.dropCopy small')?.textContent?.trim() ?? '';
  const title = card.querySelector('.dropCopy strong')?.textContent?.trim() ?? '';
  if (!label || !title) return;

  const media = findCurrentRichMedia(label, title);
  const image = media?.images?.[0];
  if (!media || !image) {
    card.dataset.homeMediaReady = 'true';
    return;
  }

  const link = document.createElement('a');
  link.className = 'dropMedia';
  link.href = image.sourceUrl;
  link.target = '_blank';
  link.rel = 'noreferrer';
  link.setAttribute('aria-label', `Abrir fonte da imagem de ${title}`);
  link.addEventListener('click', (event) => event.stopPropagation());

  const img = document.createElement('img');
  img.src = image.url;
  img.alt = image.alt;
  img.loading = 'lazy';
  img.referrerPolicy = 'no-referrer';

  const shade = document.createElement('span');
  shade.className = 'dropMediaShade';

  const meta = document.createElement('span');
  meta.className = 'dropMediaMeta';
  meta.textContent = image.kind === 'CHART' || image.kind === 'REFERENCE' ? 'FONTE VISUAL' : 'IMAGEM REAL';

  link.append(img, shade, meta);
  card.prepend(link);
  card.classList.add('withMedia');
  card.dataset.homeMediaReady = 'true';
}

export default function HomeMediaEnhancer() {
  useEffect(() => {
    const sync = () => {
      const active = document.querySelector('.stage h1')?.textContent?.trim();
      if (active !== 'Hoje') return;
      document.querySelectorAll<HTMLElement>('.dropCard').forEach(attachMedia);
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
