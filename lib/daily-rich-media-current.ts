// Ponteiro do catálogo visual da edição ativa.
// HARD GATE: a revisão de 17h28 tem precedência; o catálogo-base de 30/08 entra como fallback da própria data.
import {dailyRichMedia20260830_17h28} from './daily-rich-media-2026-08-30-17h28';
import {dailyRichMedia20260830} from './daily-rich-media-2026-08-30';
export const dailyRichMediaCurrent=[...dailyRichMedia20260830_17h28,...dailyRichMedia20260830];
