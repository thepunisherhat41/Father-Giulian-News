import type { RichMediaEntry } from './rich-media';
import { dailyRichMediaCurrent } from './daily-rich-media-current';
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

  // HARD GATE: o catálogo visual da data corrente sempre tem precedência.
  const current = findIn(dailyRichMediaCurrent, label, canonicalLabel, normalizedTitle);
  if (current) return current;

  // Zona Leste só pode renderizar com mídia da própria edição corrente.
  if (canonicalLabel === 'Zona Leste em Foco') return undefined;

  for (const catalog of olderCatalogs) {
    const exact = findIn(catalog, label, canonicalLabel, normalizedTitle);
    if (exact) return exact;
  }

  return undefined;
}
