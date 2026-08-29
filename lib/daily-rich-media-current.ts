// Ponteiro do catálogo visual da edição ativa.
// HARD GATE: a revisão da tarde tem precedência; o catálogo-base de 29/08 entra como fallback da própria data.
import {dailyRichMedia20260829Afternoon} from './daily-rich-media-2026-08-29-afternoon';
import {dailyRichMedia20260829} from './daily-rich-media-2026-08-29';
export const dailyRichMediaCurrent=[...dailyRichMedia20260829Afternoon,...dailyRichMedia20260829];
