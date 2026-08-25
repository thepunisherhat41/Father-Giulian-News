'use client';

import { dailyContent } from '@/lib/daily-content';
import { applyCurrentReelPatches } from '@/lib/current-reel-patches';
import ReelsExperienceV25 from './ReelsExperienceV25';

export default function ReelsExperienceLive() {
  applyCurrentReelPatches(dailyContent);
  return <ReelsExperienceV25 />;
}
