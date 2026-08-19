import { findRichMediaForStory, type RichMediaEntry } from './rich-media';
import { dailyRichMedia20260819 } from './daily-rich-media-2026-08-19';
import { intradayRichMedia20260819 } from './intraday-rich-media-2026-08-19';

const labelAliases: Record<string, string> = {
  Cyber: 'Cyber Security',
  AppSec: 'AppSec / SSDLC',
};

export function findCurrentRichMedia(label: string, storyTitle: string): RichMediaEntry | undefined {
  const canonicalLabel = labelAliases[label] ?? label;
  const normalizedTitle = storyTitle.toLocaleLowerCase('pt-BR');
  const currentEdition = [...intradayRichMedia20260819, ...dailyRichMedia20260819];

  const current = currentEdition.find((entry) =>
    entry.label === canonicalLabel && entry.matches.some((match) => normalizedTitle.includes(match.toLocaleLowerCase('pt-BR'))),
  );

  return current ?? findRichMediaForStory(canonicalLabel, storyTitle);
}
