'use client';

import ReelsExperience from './ReelsExperience';
import { edition } from '@/lib/daily-content';

// This wrapper executes inside the same client module graph as ReelsExperience.
// Legacy portals still evaluate dated side-effect modules; pin the current
// edition after those imports so the Reel freshness filter cannot regress.
Object.assign(edition, {
  date: '25/08/2026',
  dateLabel: '25 AGO 2026',
  title: 'Daily Intelligence · 25 de agosto',
});

export default function ReelsExperienceCurrent() {
  return <ReelsExperience />;
}
