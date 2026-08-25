'use client';

import '@/lib/daily-overrides-2026-08-25-05h';
import ReelsExperienceV25 from './ReelsExperienceV25';

// O wrapper garante que os overrides da janela editorial atual sejam avaliados
// no mesmo grafo client-side antes de o feed consultar dailyContent.
export default function ReelsExperienceLive() {
  return <ReelsExperienceV25 />;
}
