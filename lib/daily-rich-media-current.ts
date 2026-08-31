// Ponteiro do catálogo visual da edição ativa.
// HARD GATE: a revisão de 23h36 tem precedência; os catálogos anteriores de 30/08 entram como fallback da própria data.
import {dailyRichMedia20260830_23h36} from './daily-rich-media-2026-08-30-23h36';
import {dailyRichMedia20260830_20h29} from './daily-rich-media-2026-08-30-20h29';
import {dailyRichMedia20260830_17h28} from './daily-rich-media-2026-08-30-17h28';
import {dailyRichMedia20260830} from './daily-rich-media-2026-08-30';
export const dailyRichMediaCurrent=[...dailyRichMedia20260830_23h36,...dailyRichMedia20260830_20h29,...dailyRichMedia20260830_17h28,...dailyRichMedia20260830];
