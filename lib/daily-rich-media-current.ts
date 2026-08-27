// Ponteiro do catálogo visual da edição ativa.
// HARD GATE: somente mídia explicitamente validada para 27/08 tem precedência de edição corrente.
import { dailyRichMedia20260827_0835 } from './daily-rich-media-2026-08-27-0835';
import { dailyRichMedia20260827Family } from './daily-rich-media-2026-08-27-family';
import { dailyRichMedia20260827 } from './daily-rich-media-2026-08-27';

export const dailyRichMediaCurrent = [
  ...dailyRichMedia20260827_0835,
  ...dailyRichMedia20260827Family,
  ...dailyRichMedia20260827,
];
