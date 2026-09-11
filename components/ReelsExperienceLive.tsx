'use client';
import {dailyContent} from '@/lib/daily-content';
import {curiosityCollections} from '@/lib/curiosity-collections';
import {applyCurrentCuriosityRotation} from '@/lib/current-curiosity-rotation';
import {applyCurrentReelPatches20260911} from '@/lib/current-reel-patches-2026-09-11';
import {applyCurrentReelPatches202609110553} from '@/lib/current-reel-patches-2026-09-11-0553';
import ReelsExperienceV27 from './ReelsExperienceV27';

export default function ReelsExperienceLive(){
  applyCurrentCuriosityRotation(curiosityCollections);
  applyCurrentReelPatches20260911(dailyContent);
  applyCurrentReelPatches202609110553(dailyContent);
  return <ReelsExperienceV27/>;
}
