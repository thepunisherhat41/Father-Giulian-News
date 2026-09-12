'use client';
import {dailyContent} from '@/lib/daily-content';
import {curiosityCollections} from '@/lib/curiosity-collections';
import {applyCurrentCuriosityRotation} from '@/lib/current-curiosity-rotation';
import {applyCurrentReelPatches20260912} from '@/lib/current-reel-patches-2026-09-12';
import ReelsExperienceV27 from './ReelsExperienceV27';

export default function ReelsExperienceLive(){
  applyCurrentCuriosityRotation(curiosityCollections);
  applyCurrentReelPatches20260912(dailyContent);
  return <ReelsExperienceV27/>;
}
