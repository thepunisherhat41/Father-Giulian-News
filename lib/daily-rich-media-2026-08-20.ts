import type { RichMediaEntry } from './rich-media';
import { editorialInlineMedia20260820 } from './editorial-inline-media-2026-08-20';
import { vehicleMediaById } from './vehicle-media';
import { appSecPostMedia } from './appsec-feed-media';

const labels: Record<string, string> = {
  brasil: 'Brasil', mundo: 'Mundo', planeta: 'Planeta', animais: 'Mundo Animal', tempo: 'Tempo e Clima', curiosidades: 'Curiosidades',
  pai: 'Ser Pai', mecanica: 'Mecânica', nautica: 'Náutica', viagens: 'Viagens', financas: 'Finanças', tecnologia: 'Tecnologia', seguranca: 'Cyber Security',
};

const matches: Record<string, string[]> = {
  brasil: ['fiscal', 'arcabouço', 'despesas obrigatórias', '2027'],
  mundo: ['petróleo e juros', 'juros longos', 'hormuz', 'brent', 'treasuries'],
  planeta: ['correntes de retorno', 'mar puxar', 'zona de arrebentação', 'fluxo é mais útil'],
  animais: ['polvos exploram', 'polvos “provam”', 'polvos combinam', 'detecção química', 'quimiotáteis'],
  tempo: ['ar seco', 'umidade baixa', 'baixa umidade', 'vira o tempo', 'queda de temperatura'],
  curiosidades: ['colher “quebrada”', 'colher parece', 'parece quebrar', 'refração'],
  pai: ['kit pós-enjoo', 'zona segura pós-enjoo', 'ação prática', 'reduzir carga', 'puerpério'],
  mecanica: ['teste de compressão', 'compressão não fecha', 'compressão x leak-down', 'leak-down'],
  nautica: ['colete salva-vidas', 'coletes não são todos iguais', 'flutuabilidade', 'homologação'],
  viagens: ['holambra', 'flores', 'expoflora'],
  financas: ['juro longo', 'juros longos', 'yields', 'financiamento', 'treasuries'],
  tecnologia: ['ia em escala', 'infraestrutura física', 'chips são só', 'data center de ia', 'energia, rede'],
  seguranca: ['exploração conhecida', 'vulnerabilidade explorada', 'hunting', 'exploração antes do patch', 'zero-day'],
};

const baseMedia: RichMediaEntry[] = editorialInlineMedia20260820.map((media) => ({
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

const car = vehicleMediaById['cruze-lt-auto-2014'];
const moto = vehicleMediaById['cb-twister-abs-2020'];
const appsec = appSecPostMedia['sbom-provenance'];

const extraMedia: RichMediaEntry[] = [
  {
    label: 'Zona Leste em Foco',
    matches: ['zona leste hoje', 'são miguel', 'vila formosa', 'arena em itaquera', 'ocorrências confirmadas'],
    tag: 'ZONA LESTE · HOJE',
    title: 'Agenda atual da Zona Leste em imagem jornalística',
    caption: 'A imagem é da cobertura de 20 de agosto sobre agendas de campanha e protestos no extremo leste; a aba também separa esporte, saúde e segurança em cards próprios.',
    images: [{
      url: 'https://conteudo.imguol.com.br/c/noticias/83/2026/08/20/protestos-contra-flavio-e-tarcisio-marcam-a-estreia-da-agenda-de-campanha-eleitoral-do-candidato-a-presidencia-no-extremo-leste-de-sao-paulo-1787229271634_v2_750x421.jpg',
      alt: 'Manifestantes durante agenda de campanha na Zona Leste de São Paulo em 20 de agosto de 2026',
      caption: 'Agenda de campanha na Zona Leste em 20 de agosto de 2026.',
      credit: 'Ana Paula Bimbati / UOL',
      sourceUrl: 'https://noticias.uol.com.br/eleicoes/2026/08/20/protesto-flavio-bolsonaro-zona-leste-de-sao-paulo.ghtm',
      kind: 'PHOTO',
    }],
    relatedLabel: 'Cobertura UOL · 20/08/2026',
    relatedHref: 'https://noticias.uol.com.br/eleicoes/2026/08/20/protesto-flavio-bolsonaro-zona-leste-de-sao-paulo.ghtm',
  },
  {
    label: 'Política',
    matches: ['voto em trânsito', 'prazo termina hoje', 'campanha segue'],
    tag: 'JUSTIÇA ELEITORAL · 20 AGO',
    title: 'Voto em trânsito em imagem oficial da Justiça Eleitoral',
    caption: 'Urna eletrônica em material oficial do TSE relacionado ao voto em trânsito.',
    images: [{
      url: 'https://www.tse.jus.br/imagens/fotos/voto-em-transito-em-15-10-2021-1634301707189/@@images/image-1140-cfce65db0ae305329359fb66f5bffb40.jpeg',
      alt: 'Eleitor utilizando urna eletrônica em imagem oficial relacionada ao voto em trânsito',
      caption: 'Imagem oficial relacionada ao voto em trânsito.',
      credit: 'Tribunal Superior Eleitoral · Justiça Eleitoral',
      sourceUrl: 'https://www.tse.jus.br/eleicoes/eleicoes-2026-content/voto-em-transito-perguntas-e-respostas',
      kind: 'PHOTO',
    }],
  },
  {
    label: 'Música',
    matches: ['festival histórias', 'encontro de gerações do sertanejo', 'sertanejo; rock'],
    tag: 'MÚSICA · FIM DE SEMANA',
    title: 'Histórias 2026 reúne gerações do sertanejo',
    caption: 'Arte de divulgação da turnê Histórias 2026, que chega a São Paulo em 22 de agosto.',
    images: [{
      url: 'https://www.oshowdoseculo.com.br/img/banner-mobile1.png',
      alt: 'Arte de divulgação Histórias 2026 com artistas do sertanejo brasileiro',
      caption: 'Histórias 2026 · São Paulo · 22 de agosto.',
      credit: 'Histórias 2026 · divulgação oficial',
      sourceUrl: 'https://www.oshowdoseculo.com.br/',
      kind: 'REFERENCE',
    }],
    relatedLabel: 'Detalhes do Festival Histórias',
    relatedHref: 'https://billboard.com.br/festival-historias-em-sp-detalhes/',
  },
  {
    label: 'Games',
    matches: ['gamescom entra', 'gamescom 2026', 'dev começa dia 23', 'feira principal dia 26'],
    tag: 'GAMESCOM 2026',
    title: 'A semana da gamescom já tem datas e expositores confirmados',
    caption: 'Material de uma das participações confirmadas para a gamescom 2026; datas gerais devem ser conferidas na agenda oficial.',
    images: [{
      url: 'https://image.gamer.ne.jp/news/2026/20260805/0048074131c8bc4dad2a299f5ad95c5f9576/o/1.jpg',
      alt: 'Arte de participação da Level Infinite na gamescom 2026 com datas de 26 a 30 de agosto',
      caption: 'Level Infinite na gamescom 2026 · material de divulgação.',
      credit: 'Level Infinite / Gamer',
      sourceUrl: 'https://dev.gamescom.global/conference/',
      kind: 'REFERENCE',
    }],
    relatedLabel: 'Agenda oficial · gamescom dev',
    relatedHref: 'https://dev.gamescom.global/conference/',
  },
  {
    label: 'Gravidez',
    matches: ['6 semanas + 4 dias', 'puerpério', 'enjoo', 'desenvolvimento'],
    tag: 'GRAVIDEZ · SEMANA ATUAL',
    title: 'Referência visual de gestação inicial',
    caption: 'Imagem de referência de gestação em torno de 6 semanas. Avaliação individual depende do pré-natal e do ultrassom clínico.',
    images: [{
      url: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Embryo%20at%206%20weeks.JPG',
      alt: 'Imagem de ultrassom de referência de uma gestação em torno de 6 semanas',
      caption: 'Referência visual aproximada da fase gestacional.',
      credit: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Embryo_at_6_weeks.JPG',
      kind: 'REFERENCE',
    }],
    relatedLabel: 'CDC · apoio materno e puerpério',
    relatedHref: 'https://www.cdc.gov/hearher/support/index.html',
  },
  ...(car ? [{
    label: 'Carros', matches: ['comparativo de usados', 'até r$70 mil', 'histórico, laudo'], tag: 'CARROS · MODELO REAL',
    title: car.caption, caption: car.caption,
    images: [{ url: car.url, alt: car.alt, caption: car.caption, credit: car.credit, sourceUrl: car.sourceUrl, kind: 'PHOTO' as const }],
    relatedLabel: car.credit, relatedHref: car.sourceUrl,
  } satisfies RichMediaEntry] : []),
  ...(moto ? [{
    label: 'Motos', matches: ['moto usada', 'ciclística', 'marcas de queda'], tag: 'MOTOS · MODELO REAL',
    title: moto.caption, caption: moto.caption,
    images: [{ url: moto.url, alt: moto.alt, caption: moto.caption, credit: moto.credit, sourceUrl: moto.sourceUrl, kind: 'PHOTO' as const }],
    relatedLabel: moto.credit, relatedHref: moto.sourceUrl,
  } satisfies RichMediaEntry] : []),
  {
    label: 'Security Briefing',
    matches: ['security briefing revalidado', 'supply chain', 'iam/cloud', 'exploração acelerada por ia'],
    tag: 'SECURITY INTELLIGENCE',
    title: 'Exploração real e decisão baseada em exposição',
    caption: 'O catálogo KEV é uma das referências para separar vulnerabilidade teórica de exploração conhecida; o briefing cruza isso com identidade, supply chain e contexto do ativo.',
    images: [{
      url: 'https://img2.helpnetsecurity.com/posts2022/CISA-KEV-Catalog.jpg',
      alt: 'Interface do catálogo Known Exploited Vulnerabilities da CISA',
      caption: 'CISA Known Exploited Vulnerabilities Catalog.',
      credit: 'CISA KEV · captura de referência',
      sourceUrl: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog',
      kind: 'REFERENCE',
    }],
  },
  ...(appsec ? [{
    label: 'AppSec / SSDLC', matches: ['supply chain e agentes', 'pipeline, identidade', 'provenance', 'sbom'], tag: 'APPSEC · SUPPLY CHAIN',
    title: appsec.caption, caption: appsec.caption,
    images: [{ url: appsec.url, alt: appsec.alt, caption: appsec.caption, credit: appsec.credit, sourceUrl: appsec.sourceUrl, kind: 'REFERENCE' as const }],
    relatedLabel: appsec.credit, relatedHref: appsec.sourceUrl,
  } satisfies RichMediaEntry] : []),
];

export const dailyRichMedia20260820: RichMediaEntry[] = [...extraMedia, ...baseMedia];
