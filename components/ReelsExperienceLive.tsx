'use client';

import { dailyContent } from '@/lib/daily-content';
import { curiosityCollections } from '@/lib/curiosity-collections';
import { applyCurrentCuriosityRotation } from '@/lib/current-curiosity-rotation';
import { applyCurrentReelPatches } from '@/lib/current-reel-patches';
import { applyCurrentReelPatches1432 } from '@/lib/current-reel-patches-1432';
import { applyCurrentReelPatches17h } from '@/lib/current-reel-patches-17h';
import { applyCurrentReelPatches1730 } from '@/lib/current-reel-patches-1730';
import { applyCurrentReelPatches1835 } from '@/lib/current-reel-patches-1835';
import { applyCurrentReelPatches20h } from '@/lib/current-reel-patches-20h';
import { applyCurrentReelPatches23h } from '@/lib/current-reel-patches-23h';
import { applyCurrentReelPatches20260826 } from '@/lib/current-reel-patches-2026-08-26';
import ReelsExperienceV26 from './ReelsExperienceV26';

export default function ReelsExperienceLive() {
  // Legacy content layers are still evaluated by the broader magazine shell.
  // Apply them first, then pin the current-date editorial patch last.
  applyCurrentCuriosityRotation(curiosityCollections);
  applyCurrentReelPatches(dailyContent);
  applyCurrentReelPatches1432(dailyContent);
  applyCurrentReelPatches17h(dailyContent);
  applyCurrentReelPatches1730(dailyContent);
  applyCurrentReelPatches1835(dailyContent);
  applyCurrentReelPatches20h(dailyContent);
  applyCurrentReelPatches23h(dailyContent);
  applyCurrentReelPatches20260826(dailyContent);

  // V26 gates journalistic Reels from editorialFreshness directly at render time.
  // Stale Politics/Zona Leste/Corinthians cards are not emitted into SSR at all.
  return <ReelsExperienceV26 />;
}
