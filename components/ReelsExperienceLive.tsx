'use client';
import {dailyContent} from '@/lib/daily-content';
import {curiosityCollections} from '@/lib/curiosity-collections';
import {applyCurrentCuriosityRotation} from '@/lib/current-curiosity-rotation';
import {applyCurrentReelPatches20260912} from '@/lib/current-reel-patches-2026-09-12';
import {applyCurrentReelPatches202609120550} from '@/lib/current-reel-patches-2026-09-12-0550';
import {applyCurrentReelPatches202609120842} from '@/lib/current-reel-patches-2026-09-12-0842';
import {applyCurrentReelPatches202609121114} from '@/lib/current-reel-patches-2026-09-12-1114';
import {applyCurrentReelPatches202609121717} from '@/lib/current-reel-patches-2026-09-12-1717';
import {applyCurrentReelPatches202609122032} from '@/lib/current-reel-patches-2026-09-12-2032';
import {applyCurrentReelPatches202609122338} from '@/lib/current-reel-patches-2026-09-12-2338';
import {applyCurrentReelPatches20260913} from '@/lib/current-reel-patches-2026-09-13';
import {applyCurrentReelPatches202609132346} from '@/lib/current-reel-patches-2026-09-13-2346';
import ReelsExperienceV27 from './ReelsExperienceV27';

export default function ReelsExperienceLive(){
  applyCurrentCuriosityRotation(curiosityCollections);
  applyCurrentReelPatches20260912(dailyContent);
  applyCurrentReelPatches202609120550(dailyContent);
  applyCurrentReelPatches202609120842(dailyContent);
  applyCurrentReelPatches202609121114(dailyContent);
  applyCurrentReelPatches202609121717(dailyContent);
  applyCurrentReelPatches202609122032(dailyContent);
  applyCurrentReelPatches202609122338(dailyContent);
  applyCurrentReelPatches20260913(dailyContent);
  applyCurrentReelPatches202609132346(dailyContent);
  return <ReelsExperienceV27/>;
}
