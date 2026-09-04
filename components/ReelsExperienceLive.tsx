'use client';
import {dailyContent} from '@/lib/daily-content';
import {curiosityCollections} from '@/lib/curiosity-collections';
import {applyCurrentCuriosityRotation} from '@/lib/current-curiosity-rotation';
import {applyCurrentReelPatches20260904} from '@/lib/current-reel-patches-2026-09-04';
import {applyCurrentReelPatches202609040528} from '@/lib/current-reel-patches-2026-09-04-0528';
import ReelsExperienceV27 from './ReelsExperienceV27';

export default function ReelsExperienceLive(){
  applyCurrentCuriosityRotation(curiosityCollections);
  applyCurrentReelPatches20260904(dailyContent);
  applyCurrentReelPatches202609040528(dailyContent);
  return <ReelsExperienceV27/>;
}
