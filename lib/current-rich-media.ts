import { findRichMediaForStory, type RichMediaEntry } from './rich-media';
import { dailyRichMedia20260820 } from './daily-rich-media-2026-08-20';
import { dailyRichMedia20260819 } from './daily-rich-media-2026-08-19';

const labelAliases: Record<string, string> = {
  Cyber: 'Cyber Security',
  AppSec: 'AppSec / SSDLC',
  // Legacy catalogs used the old label. The current edition uses "Zona Leste em Foco",
  // so exact-label matching must happen before this compatibility alias is consulted.
  'Zona Leste em Foco': 'Segurança ZL',
};

function matchesTitle(entry: RichMediaEntry, title: string) {
  return entry.matches.some((match) => title.includes(match.toLocaleLowerCase('pt-BR')));
}

export function findCurrentRichMedia(label: string, storyTitle: string): RichMediaEntry | undefined {
  const canonicalLabel = labelAliases[label] ?? label;
  const normalizedTitle = storyTitle.toLocaleLowerCase('pt-BR');

  // Prefer the exact current UI label. This prevents a compatibility alias from
  // hiding a newly curated current-edition media entry (e.g. Zona Leste em Foco).
  const currentExact = dailyRichMedia20260820.find((entry) =>
    entry.label === label && matchesTitle(entry, normalizedTitle),
  );
  if (currentExact) return currentExact;

  const currentCanonical = dailyRichMedia20260820.find((entry) =>
    entry.label === canonicalLabel && matchesTitle(entry, normalizedTitle),
  );
  if (currentCanonical) return currentCanonical;

  // A edição anterior só é fallback quando o título ainda corresponde semanticamente ao mesmo assunto.
  const historicalExact = dailyRichMedia20260819.find((entry) =>
    entry.label === label && matchesTitle(entry, normalizedTitle),
  );
  if (historicalExact) return historicalExact;

  const historicalCanonical = dailyRichMedia20260819.find((entry) =>
    entry.label === canonicalLabel && matchesTitle(entry, normalizedTitle),
  );

  return historicalCanonical ?? findRichMediaForStory(canonicalLabel, storyTitle);
}
