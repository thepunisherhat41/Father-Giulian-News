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
};
