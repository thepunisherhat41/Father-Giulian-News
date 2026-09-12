'use client';
import {dailyContent} from '@/lib/daily-content';
import {curiosityCollections} from '@/lib/curiosity-collections';
import {applyCurrentCuriosityRotation} from '@/lib/current-curiosity-rotation';
import {applyCurrentReelPatches20260912} from '@/lib/current-reel-patches-2026-09-12';
import {applyCurrentReelPatches202609120550} from '@/lib/current-reel-patches-2026-09-12-0550';
import {applyCurrentReelPatches202609120842} from '@/lib/current-reel-patches-2026-09-12-0842';
import {applyCurrentReelPatches202609121114} from '@/lib/current-reel-patches-2026-09-12-1114';
import {applyCurrentReelPatches202609121717} from '@/lib/current-reel-patches-2026-09-12-1717';
import ReelsExperienceV27 from './ReelsExperienceV27';

export default function ReelsExperienceLive(){
  applyCurrentCuriosityRotation(curiosityCollections);
  applyCurrentReelPatches20260912(dailyContent);
  applyCurrentReelPatches202609120550(dailyContent);
  applyCurrentReelPatches202609120842(dailyContent);
  applyCurrentReelPatches202609121114(dailyContent);
  applyCurrentReelPatches202609121717(dailyContent);
  return <ReelsExperienceV27/>;
}
