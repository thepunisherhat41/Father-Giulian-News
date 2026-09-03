'use client';
import {dailyContent} from '@/lib/daily-content';
import {curiosityCollections} from '@/lib/curiosity-collections';
import {applyCurrentCuriosityRotation} from '@/lib/current-curiosity-rotation';
import {applyCurrentReelPatches20260903} from '@/lib/current-reel-patches-2026-09-03';
import {applyCurrentReelPatches20260903_0530} from '@/lib/current-reel-patches-2026-09-03-0530';
import {applyCurrentReelPatches20260903_0825} from '@/lib/current-reel-patches-2026-09-03-0825';
import {applyCurrentReelPatches20260903_1130} from '@/lib/current-reel-patches-2026-09-03-1130';
import {applyCurrentReelPatches20260903_1732} from '@/lib/current-reel-patches-2026-09-03-1732';
import ReelsExperienceV27 from './ReelsExperienceV27';

export default function ReelsExperienceLive(){
  applyCurrentCuriosityRotation(curiosityCollections);
  applyCurrentReelPatches20260903(dailyContent);
  applyCurrentReelPatches20260903_0530(dailyContent);
  applyCurrentReelPatches20260903_0825(dailyContent);
  applyCurrentReelPatches20260903_1130(dailyContent);
  applyCurrentReelPatches20260903_1732(dailyContent);
  return <ReelsExperienceV27/>;
}
