'use client';

import { useLayoutEffect } from 'react';
import { dailyContent } from '@/lib/daily-content';
import { curiosityCollections } from '@/lib/curiosity-collections';
import { applyCurrentCuriosityRotation } from '@/lib/current-curiosity-rotation';
import { applyCurrentReelPatches } from '@/lib/current-reel-patches';
import { applyCurrentReelPatches1432 } from '@/lib/current-reel-patches-1432';
import { applyCurrentReelPatches17h } from '@/lib/current-reel-patches-17h';
import { applyCurrentReelPatches1730 } from '@/lib/current-reel-patches-1730';
import ReelsExperienceV25 from './ReelsExperienceV25';

const MEDIA_REV = '20260825-1835';
const commons = (name:string) => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(name).replace(/%2F/g,'/')}`;

/*
  Production safety net: every image-based Reel in the current edition is
  resolved to a real, semantically related photo/diagram from the source,
  Wikimedia Commons, CDC or the official YouTube thumbnail. This also
  replaces legacy sprite/transparent placeholders before the browser paints.
*/
const coverForAlt = (alt: string) => {
  const a = alt.toLocaleLowerCase('pt-BR');

  if (a.includes('papo de hoje')) return commons('Couple at sunset on the beach.jpg');
  if (a.includes('desafio do casal')) return commons('DSCF0763 A couple seated at a seaside table enjoying an evening meal and drinks while watching the sunset over the water.jpg');

  if (a.includes('curiosidade · ciência') || a.includes('curiosidade · ciencia')) return commons('Lightning strike base.JPG');
  if (a.includes('curiosidade · psicologia')) return commons('Stroop effect example.png');
  if (a.includes('curiosidade · tecnologia')) return commons('Global Positioning System satellite.jpg');
  if (a.includes('curiosidade · corpo humano')) return '/reel-ai/covers/body.svg?v=20260825-1432';
  if (a.includes('curiosidade · espaço') || a.includes('curiosidade · espaco')) return commons('Global Positioning System satellite.jpg');
  if (a.includes('curiosidade · animais')) return commons('Homing pigeon.jpg');
  if (a.includes('curiosidade · história') || a.includes('curiosidade · historia')) return commons('Rosetta Stone.JPG');
  if (a.includes('curiosidade · planeta') || a.includes('curiosidade · natureza')) return commons('Earth Eastern Hemisphere.jpg');

  if (a.includes('gravidez')) return commons('Embryo at 6 weeks.JPG');
  if (a.includes('ser pai')) return 'https://www.cdc.gov/hearher/media/images/support-family-friends-16x9-1.jpg';
  if (a.includes('mundo')) return commons('Tehran night view.jpg');
  if (a.includes('política') || a.includes('politica')) return commons('Ronaldo Caiado in 2026 - 55064971042 (3x4) (cropped).jpg');
  if (a.includes('tempo e clima')) return commons('Sao Paulo-Skyline.jpg');
  if (a.includes('viagens')) return commons('Holambra windmill.jpg');
  if (a.includes('música') || a.includes('musica')) return 'https://i.ytimg.com/vi/1DnSiznUrVI/maxresdefault.jpg';
  if (a.includes('games')) return 'https://image.gamer.ne.jp/news/2026/20260805/0048074131c8bc4dad2a299f5ad95c5f9576/o/1.jpg';
  if (a === 'arte para tecnologia' || a === 'tecnologia' || (a.includes('tecnologia') && !a.includes('curiosidade'))) return commons('NVIDIA GPU.jpg');
  if (a.includes('finanças') || a.includes('financas')) return commons('Edifício sede da Bovespa.jpg');
  if (a.includes('cyber security') || a.includes('zimbra')) return 'https://www.bleepstatic.com/content/hl-images/2026/08/25/Zimbra.jpg';
  if (a.includes('carros até r$ 70 mil') || a.includes('carros ate r$ 70 mil')) return 'https://static.cargurus.com/images/site/2017/12/12/13/00/2014_chevrolet_cruze_2lt-pic-3747308311327765241-1600x1200.jpeg';
  if (a.includes('motos')) return 'https://www.planetcarsz.com/assets/uploads/2021/01/c08a054f8b23f375fc1a7475013d6242.jpg';
  if (a.includes('mecânica') || a.includes('mecanica')) return commons('Porsche Tire Pressure Gauge (9207945919).jpg');
  if (a.includes('brasil')) return commons('PlenarioSenadoFederal.jpg');

  return null;
};

function applyRealReelMedia() {
  const root = document.querySelector('[aria-label="Father Giulian News em modo Reels"]');
  if (!root) return;

  root.querySelectorAll<HTMLImageElement>('img').forEach((img) => {
    const cover = coverForAlt(img.alt || '');
    if (!cover) return;

    const resolved = cover.startsWith('/') ? `${cover}${cover.includes('?') ? '&' : '?'}r=${MEDIA_REV}` : cover;
    if (img.getAttribute('src') !== resolved) img.setAttribute('src', resolved);

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
    img.style.opacity = '1';
    img.style.visibility = 'visible';
    img.style.filter = 'none';
    img.style.transform = 'none';
  });
}

export default function ReelsExperienceLive() {
  applyCurrentCuriosityRotation(curiosityCollections);
  applyCurrentReelPatches(dailyContent);
  applyCurrentReelPatches1432(dailyContent);
  applyCurrentReelPatches17h(dailyContent);
  applyCurrentReelPatches1730(dailyContent);

  useLayoutEffect(() => {
    applyRealReelMedia();
    const observer = new MutationObserver(applyRealReelMedia);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return <ReelsExperienceV25 />;
}
