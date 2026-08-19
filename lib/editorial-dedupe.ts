import { dailyContent, todayDrops, type DailyIntel, type IntelSection } from './daily-content';

const norm = (value?: string) => (value ?? '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/https?:\/\/\S+/g, '')
  .replace(/[^a-z0-9]+/g, ' ')
  .trim()
  .replace(/\s+/g, ' ');

function uniqueBy<T>(items: T[] | undefined, key: (item: T) => string) {
  if (!items?.length) return items;
  const seen = new Set<string>();
  return items.filter((item) => {
    const fingerprint = key(item);
    if (!fingerprint || seen.has(fingerprint)) return false;
    seen.add(fingerprint);
    return true;
  });
}

function mergeSections(sections: IntelSection[]) {
  const map = new Map<string, IntelSection>();
  const order: string[] = [];

  for (const section of sections) {
    const key = norm(section.title);
    if (!key) continue;
    const existing = map.get(key);
    if (!existing) {
      map.set(key, { ...section, paragraphs: [...(section.paragraphs ?? [])], bullets: [...(section.bullets ?? [])] });
      order.push(key);
      continue;
    }
    existing.paragraphs = [...(existing.paragraphs ?? []), ...(section.paragraphs ?? [])];
    existing.bullets = [...(existing.bullets ?? []), ...(section.bullets ?? [])];
  }

  return order.map((key) => map.get(key)!);
}

function dedupeInside(content: DailyIntel) {
  const summaryFingerprints = new Set([norm(content.summary), norm(content.shareSummary)].filter(Boolean));
  const seenBody = new Set<string>();

  content.sources = uniqueBy(content.sources, (source) => norm(source.url.replace(/\/$/, '')));
  content.stats = uniqueBy(content.stats, (stat) => `${norm(stat.label)}|${norm(stat.value)}|${norm(stat.note)}`);

  content.sections = mergeSections(content.sections)
    .map((section) => {
      const paragraphs = uniqueBy(section.paragraphs, norm)?.filter((item) => {
        const key = norm(item);
        if (!key || summaryFingerprints.has(key) || seenBody.has(key)) return false;
        seenBody.add(key);
        return true;
      });
      const bullets = uniqueBy(section.bullets, norm)?.filter((item) => {
        const key = norm(item);
        if (!key || summaryFingerprints.has(key) || seenBody.has(key)) return false;
        seenBody.add(key);
        return true;
      });
      return { ...section, paragraphs, bullets };
    })
    .filter((section) => (section.paragraphs?.length ?? 0) > 0 || (section.bullets?.length ?? 0) > 0);
}

Object.values(dailyContent).forEach(dedupeInside);

// Entre abas, removemos apenas cópia textual exata e longa. O mesmo acontecimento
// continua permitido quando cada área traz um ângulo realmente diferente.
const editorialOrder = [
  'brasil', 'seguranca-zl', 'politica', 'mundo', 'planeta', 'animais', 'tempo', 'curiosidades', 'musica', 'games',
  'gravidez', 'pai', 'carros', 'motos', 'mecanica', 'nautica', 'viagens', 'financas', 'tecnologia',
  'security-briefing', 'seguranca', 'appsec-ssdlc',
];
const globalOwner = new Map<string, string>();

for (const slug of editorialOrder) {
  const content = dailyContent[slug];
  if (!content) continue;
  content.sections = content.sections
    .map((section) => {
      const keep = (item: string) => {
        const key = norm(item);
        if (key.length < 120) return true;
        const owner = globalOwner.get(key);
        if (owner && owner !== slug) return false;
        globalOwner.set(key, slug);
        return true;
      };
      return { ...section, paragraphs: section.paragraphs?.filter(keep), bullets: section.bullets?.filter(keep) };
    })
    .filter((section) => (section.paragraphs?.length ?? 0) > 0 || (section.bullets?.length ?? 0) > 0);
}

const seenSlugs = new Set<string>();
for (let index = todayDrops.length - 1; index >= 0; index -= 1) {
  const drop = todayDrops[index];
  if (!drop?.slug || seenSlugs.has(drop.slug)) todayDrops.splice(index, 1);
  else seenSlugs.add(drop.slug);
}

if (dailyContent.hoje) dailyContent.hoje.readTime = `${todayDrops.length} MISSÕES`;
