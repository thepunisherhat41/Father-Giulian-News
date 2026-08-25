import type { RichMediaEntry } from './rich-media';
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

  // The current edition always wins. This keeps media semantically tied to today's story.
  const current = findIn(dailyRichMedia20260825, label, canonicalLabel, normalizedTitle);
  if (current) return current;

  // Local news is especially sensitive to a wrong person/place being shown.
  // It can only receive media from the explicit current-day catalog above.
  if (canonicalLabel === 'Zona Leste em Foco') return undefined;

  for (const catalog of olderCatalogs) {
    const exact = findIn(catalog, label, canonicalLabel, normalizedTitle);
    if (exact) return exact;
  }

  // Never fall back to a merely category-compatible old photo. ReelsExperience
  // supplies a contextual visual only when an exact photo/video is absent.
  return undefined;
}
