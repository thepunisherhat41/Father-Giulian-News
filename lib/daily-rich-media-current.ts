// Ponteiro do catálogo visual da edição ativa.
// HARD GATE: somente catálogos da data corrente podem ficar ativos; revisão mais nova tem precedência.
import {dailyRichMedia202609040528} from './daily-rich-media-2026-09-04-0528';
import {dailyRichMedia20260904} from './daily-rich-media-2026-09-04';
export const dailyRichMediaCurrent=[...dailyRichMedia202609040528,...dailyRichMedia20260904];
