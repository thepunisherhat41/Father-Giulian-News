import { findRichMediaForStory, type RichMediaEntry } from './rich-media';
import { dailyRichMedia20260820 } from './daily-rich-media-2026-08-20';
import { dailyRichMedia20260819 } from './daily-rich-media-2026-08-19';

const labelAliases: Record<string, string> = {
  Cyber: 'Cyber Security',
  AppSec: 'AppSec / SSDLC',
  'Zona Leste em Foco': 'Segurança ZL',
};

export function findCurrentRichMedia(label: string, storyTitle: string): RichMediaEntry | undefined {
  const canonicalLabel = labelAliases[label] ?? label;
  const normalizedTitle = storyTitle.toLocaleLowerCase('pt-BR');

  const current = dailyRichMedia20260820.find((entry) =>
    entry.label === canonicalLabel && entry.matches.some((match) => normalizedTitle.includes(match.toLocaleLowerCase('pt-BR'))),
  );
  if (current) return current;

  // A edição anterior só é fallback quando o título ainda corresponde semanticamente ao mesmo assunto.
  const historicalStillMatching = dailyRichMedia20260819.find((entry) =>
    entry.label === canonicalLabel && entry.matches.some((match) => normalizedTitle.includes(match.toLocaleLowerCase('pt-BR'))),
  );

  return historicalStillMatching ?? findRichMediaForStory(canonicalLabel, storyTitle);
}
