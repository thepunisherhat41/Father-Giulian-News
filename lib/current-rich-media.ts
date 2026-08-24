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
  const canonicalLabel = labelAliases[label] ?? label;
  const normalizedTitle = storyTitle.toLocaleLowerCase('pt-BR');

  for (const catalog of catalogs) {
    const exact = findIn(catalog, label, canonicalLabel, normalizedTitle);
    if (exact) return exact;
  }

  // Nunca mutar dailyContent durante busca de mídia. A antiga chamada ao override
  // de 21/08 regravava editorias atuais e fazia conteúdo velho reaparecer no feed.
  // Também não usamos imagem genérica apenas por pertencer à mesma editoria:
  // sem correspondência semântica, é melhor o Reel usar arte neutra até receber
  // mídia validada da pauta do que mostrar um carro/pessoa/evento errado.
  return findRichMediaForStory(canonicalLabel, storyTitle);
}
