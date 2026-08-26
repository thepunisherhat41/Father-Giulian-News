import type { RichMediaEntry } from './rich-media';
import { dailyRichMedia20260826_1128 } from './daily-rich-media-2026-08-26-1128';
import { dailyRichMedia20260826 } from './daily-rich-media-2026-08-26';
import { dailyRichMedia20260825Evening } from './daily-rich-media-2026-08-25-evening';
import { dailyRichMedia20260825 } from './daily-rich-media-2026-08-25';
import { dailyRichMedia20260821_17h } from './daily-rich-media-2026-08-21-17h';
import { dailyRichMedia20260821_10h } from './daily-rich-media-2026-08-21-10h';
import { dailyRichMedia20260821 } from './daily-rich-media-2026-08-21';
import { dailyRichMedia20260820 } from './daily-rich-media-2026-08-20';
import { dailyRichMedia20260819 } from './daily-rich-media-2026-08-19';

const labelAliases: Record<string, string> = {
  Cyber: 'Cyber Security',
  AppSec: 'AppSec / SSDLC',
  'Segurança ZL': 'Zona Leste em Foco',
  'Carros até R$ 70 mil': 'Carros',
};

const olderCatalogs = [
  dailyRichMedia20260825Evening,
  dailyRichMedia20260825,
  dailyRichMedia20260821_17h,
  dailyRichMedia20260821_10h,
  dailyRichMedia20260821,
  dailyRichMedia20260820,
  dailyRichMedia20260819,
];

function matchesTitle(entry: RichMediaEntry, title: string) {
  return entry.matches.some((match) => title.includes(match.toLocaleLowerCase('pt-BR')));
}

function findIn(catalog: RichMediaEntry[], label: string, canonicalLabel: string, normalizedTitle: string) {
  return catalog.find((entry) => entry.label === label && matchesTitle(entry, normalizedTitle))
    ?? catalog.find((entry) => entry.label === canonicalLabel && matchesTitle(entry, normalizedTitle));
}

export function findCurrentRichMedia(label: string, storyTitle: string): RichMediaEntry | undefined {
  const canonicalLabel = labelAliases[label] ?? label;
  const normalizedTitle = storyTitle.toLocaleLowerCase('pt-BR');

  const latestToday = findIn(dailyRichMedia20260826_1128, label, canonicalLabel, normalizedTitle);
  if (latestToday) return latestToday;

  const today = findIn(dailyRichMedia20260826, label, canonicalLabel, normalizedTitle);
  if (today) return today;

  if (canonicalLabel === 'Zona Leste em Foco') return undefined;

  for (const catalog of olderCatalogs) {
    const exact = findIn(catalog, label, canonicalLabel, normalizedTitle);
    if (exact) return exact;
  }

  return undefined;
}
