import { findRichMediaForStory, type RichMediaEntry } from './rich-media';
import { dailyRichMedia20260819 } from './daily-rich-media-2026-08-19';

export function findCurrentRichMedia(label: string, storyTitle: string): RichMediaEntry | undefined {
  const normalizedTitle = storyTitle.toLocaleLowerCase('pt-BR');
  const daily = dailyRichMedia20260819.find((entry) =>
    entry.label === label && entry.matches.some((match) => normalizedTitle.includes(match.toLocaleLowerCase('pt-BR'))),
  );

  return daily ?? findRichMediaForStory(label, storyTitle);
}
