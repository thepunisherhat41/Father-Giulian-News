// Ponteiro do catálogo visual da edição ativa.
// HARD GATE: o catálogo canônico da data corrente tem prioridade absoluta.
import { dailyRichMedia20260827 } from './daily-rich-media-2026-08-27';
import { dailyRichMedia20260827_0835 } from './daily-rich-media-2026-08-27-0835';
import { dailyRichMedia20260827Family } from './daily-rich-media-2026-08-27-family';

export const dailyRichMediaCurrent = [
  ...dailyRichMedia20260827,
  ...dailyRichMedia20260827_0835,
  ...dailyRichMedia20260827Family,
];
