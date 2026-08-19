import { dailyContent, todayDrops, type DailyIntel, type IntelSection } from './daily-content';

function normalize(value?: string) {
  return (value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/https?:\/\/\S+/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

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
  const merged = new Map<string, IntelSection>();
  const order: string[] = [];

  sections.forEach((section) => {
    const key = normalize(section.title);
    if (!key) return;
    if (!merged.has(key)) {
      merged.set(key, { ...section, paragraphs: [...(section.paragraphs ?? [])], bullets: [...(section.bullets ?? [])] });
      order.push(key);
      return;
    }
    const current = merged.get(key)!;
    current.paragraphs = [...(current.paragraphs ?? []), ...(section.paragraphs ?? [])];
    current.bullets = [...(current.bullets ?? []), ...(section.bullets ?? [])];
  });

  return order.map((key) => merged.get(key)!);
}

function dedupeInsideContent(content: DailyIntel) {
  const summaryFingerprints = new Set([normalize(content.summary), normalize(content.shareSummary)].filter(Boolean));
  const seenText = new Set<string>();

  content.stats = uniqueBy(content.stats, (item) => `${normalize(item.label)}|${normalize(item.value)}|${normalize(item.note)}`);
  content.sources = uniqueBy(content.sources, (item) => normalize(item.url));

  content.sections = mergeSections(content.sections)
    .map((section) => {
      const paragraphs = uniqueBy(section.paragraphs, (item) => normalize(item))?.filter((item) => {
        const key = normalize(item);
        if (!key || summaryFingerprints.has(key) || seenText.has(key)) return false;
        seenText.add(key);
        return true;
      });
      const bullets = uniqueBy(section.bullets, (item) => normalize(item))?.filter((item) => {
        const key = normalize(item);
        if (!key || summaryFingerprints.has(key) || seenText.has(key)) return false;
        seenText.add(key);
        return true;
      });
      return { ...section, paragraphs, bullets };
    })
    .filter((section) => (section.paragraphs?.length ?? 0) > 0 || (section.bullets?.length ?? 0) > 0);
}

const tabOrder = [
  'brasil', 'seguranca-zl', 'politica', 'mundo', 'planeta', 'animais', 'tempo', 'curiosidades', 'musica', 'games',
  'gravidez', 'pai', 'carros', 'motos', 'mecanica', 'nautica', 'viagens', 'financas', 'tecnologia',
  'security-briefing', 'seguranca', 'appsec-ssdlc',
];

Object.values(dailyContent).forEach(dedupeInsideContent);

// Remove apenas cópia textual exata entre abas. Assuntos relacionados continuam permitidos
// quando o ângulo editorial e a redação são diferentes.
const globalOwner = new Map<string, string>();
for (const slug of tabOrder) {
  const content = dailyContent[slug];
  if (!content) continue;

  content.sections = content.sections
    .map((section) => {
      const filterGlobal = (item: string) => {
        const key = normalize(item);
        if (key.length < 120) return true;
        const owner = globalOwner.get(key);
        if (owner && owner !== slug) return false;
        globalOwner.set(key, slug);
        return true;
      };
      return {
        ...section,
        paragraphs: section.paragraphs?.filter(filterGlobal),
        bullets: section.bullets?.filter(filterGlobal),
      };
    })
    .filter((section) => (section.paragraphs?.length ?? 0) > 0 || (section.bullets?.length ?? 0) > 0);
}

const seenDropSlugs = new Set<string>();
for (let index = todayDrops.length - 1; index >= 0; index -= 1) {
  const slug = todayDrops[index]?.slug;
  if (!slug || seenDropSlugs.has(slug)) todayDrops.splice(index, 1);
  else seenDropSlugs.add(slug);
}

if (dailyContent.hoje) dailyContent.hoje.readTime = `${todayDrops.length} MISSÕES`;
