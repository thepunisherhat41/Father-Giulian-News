// Ponteiro do catálogo visual da edição ativa.
// A ordem é intencional: revisão intradiária mais recente -> complemento do dia -> catálogo-base do dia.
import { dailyRichMedia20260826_23h } from './daily-rich-media-2026-08-26-23h';
import { dailyRichMedia20260826_1735 } from './daily-rich-media-2026-08-26-1735';
import { dailyRichMedia20260826_17h } from './daily-rich-media-2026-08-26-17h';
import { dailyRichMedia20260826_1128 } from './daily-rich-media-2026-08-26-1128';
import { dailyRichMedia20260826 } from './daily-rich-media-2026-08-26';

export const dailyRichMediaCurrent = [
  ...dailyRichMedia20260826_23h,
  ...dailyRichMedia20260826_1735,
  ...dailyRichMedia20260826_17h,
  ...dailyRichMedia20260826_1128,
  ...dailyRichMedia20260826,
];
