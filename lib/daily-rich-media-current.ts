// Ponteiro do catálogo visual da edição ativa.
// HARD GATE: somente catálogos da data corrente podem ficar ativos; revisão mais nova tem precedência.
import {dailyRichMedia20260901_2026} from './daily-rich-media-2026-09-01-2026';
import {dailyRichMedia20260901_1732} from './daily-rich-media-2026-09-01-1732';
import {dailyRichMedia20260901_1428} from './daily-rich-media-2026-09-01-1428';
import {dailyRichMedia20260901_0834} from './daily-rich-media-2026-09-01-0834';
import {dailyRichMedia20260901} from './daily-rich-media-2026-09-01';
export const dailyRichMediaCurrent=[...dailyRichMedia20260901_2026,...dailyRichMedia20260901_1732,...dailyRichMedia20260901_1428,...dailyRichMedia20260901_0834,...dailyRichMedia20260901];
