import { dailyContent, todayDrops } from './daily-content';

const norm = (value: string) => value.toLowerCase().replace(/\s+/g, ' ').trim();

function uniqueStrings(items?: string[]) {
  if (!items) return items;
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = norm(item);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

for (const content of Object.values(dailyContent)) {
  if (content.sources) {
    const seen = new Set<string>();
    content.sources = content.sources.filter((source) => {
      const key = norm(source.url.replace(/\/$/, ''));
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  if (content.stats) {
    const seen = new Set<string>();
    content.stats = content.stats.filter((stat) => {
      const key = norm(`${stat.label}|${stat.value}|${stat.note ?? ''}`);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  const sectionsByTitle = new Map<string, (typeof content.sections)[number]>();
  for (const section of content.sections) {
    const titleKey = norm(section.title);
    const existing = sectionsByTitle.get(titleKey);
    if (!existing) {
      sectionsByTitle.set(titleKey, {
        ...section,
        paragraphs: uniqueStrings(section.paragraphs),
        bullets: uniqueStrings(section.bullets),
      });
      continue;
    }

    existing.paragraphs = uniqueStrings([...(existing.paragraphs ?? []), ...(section.paragraphs ?? [])]);
    existing.bullets = uniqueStrings([...(existing.bullets ?? []), ...(section.bullets ?? [])]);
  }

  content.sections = Array.from(sectionsByTitle.values())
    .map((section) => {
      const paragraphKeys = new Set((section.paragraphs ?? []).map(norm));
      return {
        ...section,
        bullets: (section.bullets ?? []).filter((bullet) => !paragraphKeys.has(norm(bullet))),
      };
    })
    .filter((section) => (section.paragraphs?.length ?? 0) > 0 || (section.bullets?.length ?? 0) > 0);
}

const seenSlugs = new Set<string>();
for (let index = todayDrops.length - 1; index >= 0; index -= 1) {
  const drop = todayDrops[index];
  if (seenSlugs.has(drop.slug)) todayDrops.splice(index, 1);
  else seenSlugs.add(drop.slug);
}
