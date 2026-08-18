import { editorialWorld } from './editorial-world';
import { editorialKnowledge } from './editorial-knowledge';
import { editorialLife } from './editorial-life';
import { editorialTech } from './editorial-tech';
import { editorialDaily20260812 } from './editorial-daily-2026-08-12';
import { editorialDaily20260813 } from './editorial-daily-2026-08-13';
import { editorialDaily20260814 } from './editorial-daily-2026-08-14';
import { editorialDaily20260815 } from './editorial-daily-2026-08-15';
import { editorialDaily20260815_17h } from './editorial-daily-2026-08-15-17h';
import { editorialDaily20260816 } from './editorial-daily-2026-08-16';
import { editorialDaily20260817 } from './editorial-daily-2026-08-17';
import { editorialDaily20260817SecurityFix } from './editorial-daily-2026-08-17-security-fix';
import { editorialDaily20260817_10h } from './editorial-daily-2026-08-17-10h';
import { editorialDaily20260817_17h } from './editorial-daily-2026-08-17-17h';
import { editorialDaily20260818 } from './editorial-daily-2026-08-18';
import { editorialDaily20260818_10h } from './editorial-daily-2026-08-18-10h';
import type { EditorialDossier } from './editorial-dossier-types';

export const editorialDossiers: Record<string, EditorialDossier> = {
  ...editorialWorld,
  ...editorialKnowledge,
  ...editorialLife,
  ...editorialTech,
  ...editorialDaily20260812,
  ...editorialDaily20260813,
  ...editorialDaily20260814,
  ...editorialDaily20260815,
  ...editorialDaily20260815_17h,
  ...editorialDaily20260816,
  ...editorialDaily20260817,
  ...editorialDaily20260817SecurityFix,
  ...editorialDaily20260817_10h,
  ...editorialDaily20260817_17h,
  ...editorialDaily20260818,
  ...editorialDaily20260818_10h,
};
