import { dailyContent, todayDrops, type DailyIntel, type IntelSection } from './daily-content';

const norm = (value?: string) => (value ?? '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/https?:\/\/\S+/g, '')
  .replace(/[^a-z0-9]+/g, ' ')
  .trim()
  .replace(/\s+/g, ' ');

const STOP_WORDS = new Set([
  'para', 'como', 'com', 'que', 'uma', 'uns', 'das', 'dos', 'por', 'mais', 'isso', 'este', 'esta',
  'esse', 'essa', 'sobre', 'entre', 'tambem', 'ainda', 'pode', 'podem', 'deve', 'devem', 'quando',
  'onde', 'sem', 'seu', 'sua', 'seus', 'suas', 'the', 'and', 'with', 'from', 'into', 'this', 'that',
]);

function meaningfulTokens(value: string) {
  return new Set(
    norm(value)
      .split(' ')
      .filter((token) => token.length >= 4 && !STOP_WORDS.has(token)),
  );
}

function jaccard(left: Set<string>, right: Set<string>) {
  if (!left.size || !right.size) return 0;
  let intersection = 0;
  left.forEach((token) => {
    if (right.has(token)) intersection += 1;
  });
  return intersection / (left.size + right.size - intersection);
}

function sameIdea(a: string, b: string, threshold = 0.90) {
  const left = norm(a);
  const right = norm(b);
  if (!left || !right) return false;
  if (left === right) return true;

  const shorter = left.length <= right.length ? left : right;
  const longer = left.length > right.length ? left : right;
  if (shorter.length >= 90 && longer.includes(shorter) && shorter.length / longer.length >= 0.88) return true;

  const leftTokens = meaningfulTokens(left);
  const rightTokens = meaningfulTokens(right);
  if (Math.min(leftTokens.size, rightTokens.size) < 8) return false;
  return jaccard(leftTokens, rightTokens) >= threshold;
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

function uniqueText(items: string[] | undefined, seenOutside: string[] = []) {
  if (!items?.length) return items;
  const local: string[] = [];

  return items.filter((item) => {
    if (!norm(item)) return false;
    if (local.some((existing) => sameIdea(existing, item))) return false;
    if (seenOutside.some((existing) => sameIdea(existing, item))) return false;
    local.push(item);
    seenOutside.push(item);
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
  const summaryItems = [content.summary, content.shareSummary].filter((item): item is string => Boolean(item));
  const seenBody: string[] = [];

  content.sources = uniqueBy(content.sources, (source) => norm(source.url.replace(/\/$/, '')));
  content.stats = uniqueBy(content.stats, (stat) => `${norm(stat.label)}|${norm(stat.value)}|${norm(stat.note)}`);

  content.sections = mergeSections(content.sections)
    .map((section) => {
      const paragraphs = uniqueText(section.paragraphs, seenBody)?.filter(
        (item) => !summaryItems.some((summary) => sameIdea(summary, item, 0.94)),
      );
      const bullets = uniqueText(section.bullets, seenBody)?.filter(
        (item) => !summaryItems.some((summary) => sameIdea(summary, item, 0.94)),
      );
      return { ...section, paragraphs, bullets };
    })
    .filter((section) => (section.paragraphs?.length ?? 0) > 0 || (section.bullets?.length ?? 0) > 0);
}

Object.values(dailyContent).forEach(dedupeInside);

// Entre abas, removemos cópia textual longa quando ela é efetivamente a mesma ideia.
// Conteúdos relacionados continuam permitidos se cada área trouxer ângulo próprio.
const editorialOrder = [
  'brasil', 'seguranca-zl', 'politica', 'mundo', 'planeta', 'animais', 'tempo', 'curiosidades', 'musica', 'games',
  'gravidez', 'pai', 'carros', 'motos', 'mecanica', 'nautica', 'viagens', 'financas', 'tecnologia',
  'security-briefing', 'seguranca', 'appsec-ssdlc',
];
const globalOwnedText: { slug: string; text: string }[] = [];

for (const slug of editorialOrder) {
  const content = dailyContent[slug];
  if (!content) continue;

  const keep = (item: string) => {
    const key = norm(item);
    if (key.length < 120) return true;

    const duplicate = globalOwnedText.find(
      (owned) => owned.slug !== slug && sameIdea(owned.text, item, 0.93),
    );
    if (duplicate) return false;

    globalOwnedText.push({ slug, text: item });
    return true;
  };

  content.sections = content.sections
    .map((section) => ({
      ...section,
      paragraphs: section.paragraphs?.filter(keep),
      bullets: section.bullets?.filter(keep),
    }))
    .filter((section) => (section.paragraphs?.length ?? 0) > 0 || (section.bullets?.length ?? 0) > 0);
}

const seenSlugs = new Set<string>();
const seenDropTitles: string[] = [];
for (let index = todayDrops.length - 1; index >= 0; index -= 1) {
  const drop = todayDrops[index];
  const duplicateTitle = drop?.title && seenDropTitles.some((title) => sameIdea(title, drop.title, 0.94));
  if (!drop?.slug || seenSlugs.has(drop.slug) || duplicateTitle) {
    todayDrops.splice(index, 1);
    continue;
  }
  seenSlugs.add(drop.slug);
  if (drop.title) seenDropTitles.push(drop.title);
}

if (dailyContent.hoje) dailyContent.hoje.readTime = `${todayDrops.length} MISSÕES`;
