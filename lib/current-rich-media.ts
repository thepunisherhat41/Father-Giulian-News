import { applyDailyOverride20260821_10h } from './daily-overrides-2026-08-21-10h';
import { findRichMediaForStory, type RichMediaEntry } from './rich-media';
import { dailyRichMedia20260821 } from './daily-rich-media-2026-08-21';
import { dailyRichMedia20260820 } from './daily-rich-media-2026-08-20';
import { dailyRichMedia20260819 } from './daily-rich-media-2026-08-19';

const labelAliases: Record<string, string> = {
  Cyber: 'Cyber Security',
  AppSec: 'AppSec / SSDLC',
  'Segurança ZL': 'Zona Leste em Foco',
};

function matchesTitle(entry: RichMediaEntry, title: string) {
  return entry.matches.some((match) => title.includes(match.toLocaleLowerCase('pt-BR')));
}

function findIn(catalog: RichMediaEntry[], label: string, canonicalLabel: string, normalizedTitle: string) {
  return catalog.find((entry) => entry.label === label && matchesTitle(entry, normalizedTitle))
    ?? catalog.find((entry) => entry.label === canonicalLabel && matchesTitle(entry, normalizedTitle));
}

export function findCurrentRichMedia(label: string, storyTitle: string): RichMediaEntry | undefined {
  // O magazine consulta mídia durante o render. Reaplicar a revisão aqui garante
  // que overrides intraday vençam qualquer camada-base carregada antes do JSX.
  applyDailyOverride20260821_10h(true);

  const canonicalLabel = labelAliases[label] ?? label;
  const normalizedTitle = storyTitle.toLocaleLowerCase('pt-BR');

  const current = findIn(dailyRichMedia20260821, label, canonicalLabel, normalizedTitle);
  if (current) return current;

  // Historical catalogs are fallbacks only while the current headline still matches the same idea.
  const previous = findIn(dailyRichMedia20260820, label, canonicalLabel, normalizedTitle);
  if (previous) return previous;

  const older = findIn(dailyRichMedia20260819, label, canonicalLabel, normalizedTitle);
  if (older) return older;

  return findRichMediaForStory(canonicalLabel, storyTitle);
}
