import { applyDailyOverride20260821_10h } from './daily-overrides-2026-08-21-10h';
import { findRichMediaForStory, type RichMediaEntry } from './rich-media';
import { dailyRichMedia20260821_17h } from './daily-rich-media-2026-08-21-17h';
import { dailyRichMedia20260821_10h } from './daily-rich-media-2026-08-21-10h';
import { dailyRichMedia20260821 } from './daily-rich-media-2026-08-21';
import { dailyRichMedia20260820 } from './daily-rich-media-2026-08-20';
import { dailyRichMedia20260819 } from './daily-rich-media-2026-08-19';

const labelAliases: Record<string, string> = {
  Cyber: 'Cyber Security',
  AppSec: 'AppSec / SSDLC',
  'Segurança ZL': 'Zona Leste em Foco',
};

const catalogs = [dailyRichMedia20260821_17h, dailyRichMedia20260821_10h, dailyRichMedia20260821, dailyRichMedia20260820, dailyRichMedia20260819];

function matchesTitle(entry: RichMediaEntry, title: string) {
  return entry.matches.some((match) => title.includes(match.toLocaleLowerCase('pt-BR')));
}

function findIn(catalog: RichMediaEntry[], label: string, canonicalLabel: string, normalizedTitle: string) {
  return catalog.find((entry) => entry.label === label && matchesTitle(entry, normalizedTitle))
    ?? catalog.find((entry) => entry.label === canonicalLabel && matchesTitle(entry, normalizedTitle));
}

export function findCurrentRichMedia(label: string, storyTitle: string): RichMediaEntry | undefined {
  applyDailyOverride20260821_10h(true);
  const canonicalLabel = labelAliases[label] ?? label;
  const normalizedTitle = storyTitle.toLocaleLowerCase('pt-BR');

  for (const catalog of catalogs) {
    const exact = findIn(catalog, label, canonicalLabel, normalizedTitle);
    if (exact) return exact;
  }

  const generic = findRichMediaForStory(canonicalLabel, storyTitle);
  if (generic) return generic;

  // Reels precisam de mídia. Quando uma pauta do dia é nova e ainda não ganhou
  // asset dedicado, reutilizamos apenas uma imagem contextual da MESMA área.
  // Isso evita puxar fotografia de outra editoria e é visualmente melhor que emoji gigante.
  for (const catalog of catalogs) {
    const byLabel = catalog.find((entry) => (entry.label === label || entry.label === canonicalLabel) && entry.images?.length);
    if (byLabel) return byLabel;
  }

  return undefined;
}
