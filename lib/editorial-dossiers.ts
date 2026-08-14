import { editorialWorld } from './editorial-world';
import { editorialKnowledge } from './editorial-knowledge';
import { editorialLife } from './editorial-life';
import { editorialTech } from './editorial-tech';
import { editorialDaily20260812 } from './editorial-daily-2026-08-12';
import { editorialDaily20260813 } from './editorial-daily-2026-08-13';
import { editorialDaily20260814 } from './editorial-daily-2026-08-14';
import type { EditorialDossier } from './editorial-dossier-types';

export const editorialDossiers: Record<string, EditorialDossier> = {
  ...editorialWorld,
  ...editorialKnowledge,
  ...editorialLife,
  ...editorialTech,
  ...editorialDaily20260812,
  ...editorialDaily20260813,
  ...editorialDaily20260814,
};