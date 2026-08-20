import type { RichMediaEntry } from './rich-media';
import { editorialInlineMedia20260820 } from './editorial-inline-media-2026-08-20';

const labels: Record<string, string> = {
  brasil: 'Brasil', mundo: 'Mundo', planeta: 'Planeta', animais: 'Mundo Animal', tempo: 'Tempo e Clima', curiosidades: 'Curiosidades',
  pai: 'Ser Pai', mecanica: 'Mecânica', nautica: 'Náutica', viagens: 'Viagens', financas: 'Finanças', tecnologia: 'Tecnologia', seguranca: 'Cyber Security',
};

const matches: Record<string, string[]> = {
  brasil: ['fiscal', 'arcabouço', 'ajuste em 2027'],
  mundo: ['energia e dívida', 'risco global', 'inflação'],
  planeta: ['correntes de retorno', 'mar puxar', 'zona de arrebentação'],
  animais: ['polvos exploram', 'polvos “provam”', 'sentem química', 'quimiotáteis'],
  tempo: ['ar seco', 'umidade baixa', 'hidratação'],
  curiosidades: ['colher “quebrada”', 'colher parece', 'refração'],
  pai: ['kit pós-enjoo', 'zona segura pós-enjoo', 'ação prática'],
  mecanica: ['teste de compressão', 'compressão não fecha'],
  nautica: ['colete salva-vidas', 'coletes não são todos iguais', 'flutuabilidade'],
  viagens: ['holambra', 'flores'],
  financas: ['juro longo', 'yields', 'financiamento'],
  tecnologia: ['ia em escala', 'infraestrutura física', 'chips são só'],
  seguranca: ['exploração conhecida', 'vulnerabilidade explorada', 'hunting'],
};

export const dailyRichMedia20260820: RichMediaEntry[] = editorialInlineMedia20260820.map((media) => ({
  label: labels[media.slug] ?? media.slug,
  matches: matches[media.slug] ?? [],
  tag: 'MÍDIA DA EDIÇÃO · 20 AGO',
  title: media.caption,
  caption: media.caption,
  images: media.type === 'IMAGE' && media.url ? [{
    url: media.url,
    alt: media.alt,
    caption: media.caption,
    credit: media.credit,
    sourceUrl: media.sourceUrl,
    kind: 'REFERENCE' as const,
  }] : [],
  relatedLabel: `Fonte visual · ${media.credit}`,
  relatedHref: media.sourceUrl,
  youtubeId: media.type === 'YOUTUBE' ? media.youtubeId : undefined,
}));
