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
import { applyCurrentReelPatches20260826_1128 } from '@/lib/current-reel-patches-2026-08-26-1128';
import { applyCurrentReelPatches20260826_17h } from '@/lib/current-reel-patches-2026-08-26-17h';
import { applyCurrentReelPatches20260826_1735 } from '@/lib/current-reel-patches-2026-08-26-1735';
import { applyCurrentReelPatches20260826_23h } from '@/lib/current-reel-patches-2026-08-26-23h';
import { applyCurrentReelPatches20260827 } from '@/lib/current-reel-patches-2026-08-27';
import { applyCurrentReelPatches20260827Family } from '@/lib/current-reel-patches-2026-08-27-family';
import { applyCurrentReelPatches20260827_0835 } from '@/lib/current-reel-patches-2026-08-27-0835';
import ReelsExperienceV26 from './ReelsExperienceV26';

export default function ReelsExperienceLive() {
  applyCurrentCuriosityRotation(curiosityCollections);
  applyCurrentReelPatches(dailyContent);
  applyCurrentReelPatches1432(dailyContent);
  applyCurrentReelPatches17h(dailyContent);
  applyCurrentReelPatches1730(dailyContent);
  applyCurrentReelPatches1835(dailyContent);
  applyCurrentReelPatches20h(dailyContent);
  applyCurrentReelPatches23h(dailyContent);
  applyCurrentReelPatches20260826(dailyContent);
  applyCurrentReelPatches20260826_1128(dailyContent);
  applyCurrentReelPatches20260826_17h(dailyContent);
  applyCurrentReelPatches20260826_1735(dailyContent);
  applyCurrentReelPatches20260826_23h(dailyContent);
  applyCurrentReelPatches20260827(dailyContent);
  applyCurrentReelPatches20260827Family(dailyContent);
  // Patch mais recente do dia sempre por último.
  applyCurrentReelPatches20260827_0835(dailyContent);

  return <ReelsExperienceV26 />;
}
