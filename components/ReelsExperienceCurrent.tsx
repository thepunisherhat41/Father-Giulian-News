'use client';

import ReelsExperienceLive from './ReelsExperienceLive';

// Compatibility wrapper only. The live experience owns the current edition
// and resolves the date in America/Sao_Paulo at runtime.
export default function ReelsExperienceCurrent() {
  return <ReelsExperienceLive />;
}
