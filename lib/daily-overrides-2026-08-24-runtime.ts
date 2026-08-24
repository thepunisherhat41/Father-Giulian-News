import { dailyContent, edition, todayDrops } from './daily-content';
import './daily-overrides-2026-08-24';

const selectedSlugs = ['hoje','politica','tempo','games','gravidez','pai','tecnologia','security-briefing','seguranca','appsec-ssdlc'] as const;

const editionSnapshot = { ...edition };
const contentSnapshot = Object.fromEntries(
  selectedSlugs.map((slug) => [slug, { ...dailyContent[slug], sections: dailyContent[slug]?.sections?.map((section) => ({ ...section, paragraphs: section.paragraphs ? [...section.paragraphs] : undefined, bullets: section.bullets ? [...section.bullets] : undefined })), sources: dailyContent[slug]?.sources ? dailyContent[slug].sources.map((source) => ({ ...source })) : undefined }]),
) as Record<string, any>;
const dropSnapshot = Object.fromEntries(
  todayDrops.filter((drop) => selectedSlugs.includes(drop.slug as any)).map((drop) => [drop.slug, { ...drop }]),
) as Record<string, any>;

export function applyDailyOverride20260824Runtime() {
  Object.assign(edition, editionSnapshot);

  for (const slug of selectedSlugs) {
    if (contentSnapshot[slug] && dailyContent[slug]) Object.assign(dailyContent[slug], contentSnapshot[slug]);
  }

  for (const [slug, patch] of Object.entries(dropSnapshot)) {
    const index = todayDrops.findIndex((drop) => drop.slug === slug);
    if (index >= 0) todayDrops[index] = { ...todayDrops[index], ...patch };
  }
}
