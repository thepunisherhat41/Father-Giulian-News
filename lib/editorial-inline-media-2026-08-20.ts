export type EditorialInlineMedia = {
  slug: string;
  type: 'IMAGE' | 'YOUTUBE';
  url?: string;
  youtubeId?: string;
  alt: string;
  caption: string;
  credit: string;
  sourceUrl: string;
};

const commons = (name: string) => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(name).replace(/%2F/g, '/')}`;

export const editorialInlineMedia20260820: EditorialInlineMedia[] = [
  {
    slug: 'brasil', type: 'IMAGE',
    url: 'https://static.poder360.com.br/2026/03/dario-durigan-em-evento-rumos-2026-2-mar-2026-848x477.png',
    alt: 'Dario Durigan, ministro da Fazenda do Brasil',
    caption: 'Dario Durigan é o ministro citado na pauta fiscal do dia. A imagem identifica a autoridade; os números e declarações devem ser conferidos na fonte da matéria.',
    credit: 'Poder360 · imagem de arquivo',
    sourceUrl: 'https://www.gov.br/fazenda/pt-br/composicao/ministro/dario-carnevalli-durigan',
  },
  {
    slug: 'mundo', type: 'IMAGE',
    url: commons('Strait of Hormuz Transits.webp'),
    alt: 'Gráfico de trânsitos marítimos no Estreito de Hormuz',
    caption: 'Hormuz é um dos pontos em que energia e geopolítica se encontram. O gráfico ajuda a visualizar o fluxo marítimo; a matéria também discute juros e dívida.',
    credit: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Strait_of_Hormuz_Transits.webp',
  },
  {
    slug: 'planeta', type: 'IMAGE',
    url: 'https://www.nesdis.noaa.gov/s3/styles/webp/s3/2025-09/rip-current-700.jpg.webp?itok=DQshy_1j',
    alt: 'Diagrama mostrando o canal de uma corrente de retorno entre ondas que quebram na praia',
    caption: 'A corrente escoa para fora da zona de arrebentação. O desenho ajuda a entender por que nadar lateralmente pode permitir sair do canal.',
    credit: 'NOAA / NESDIS',
    sourceUrl: 'https://www.nesdis.noaa.gov/about/k-12-education/oceans-coasts/how-do-i-escape-rip-currents',
  },
  {
    slug: 'animais', type: 'IMAGE',
    url: 'https://www.oist.jp/sites/default/files/styles/embed_lg_1x/public/2026-04/20260403-chemotactile_receptors-hectocotylus.jpeg?itok=t36_VSbg',
    alt: 'Detalhe de braço de polvo usado em pesquisa sobre receptores quimiotáteis',
    caption: 'Os braços de polvos combinam tato e detecção química. A imagem vem de divulgação científica relacionada a receptores quimiotáteis.',
    credit: 'Okinawa Institute of Science and Technology · OIST',
    sourceUrl: 'https://www.oist.jp/news-center/news/2026/4/3',
  },
  {
    slug: 'tempo', type: 'IMAGE',
    url: commons('São Paulo Skyline.jpg'),
    alt: 'Vista do skyline da cidade de São Paulo',
    caption: 'A pauta de umidade baixa é aplicada à rotina paulistana. Use os dados meteorológicos da edição, não a fotografia, para interpretar as condições do dia.',
    credit: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:S%C3%A3o_Paulo_Skyline.jpg',
  },
  {
    slug: 'curiosidades', type: 'IMAGE',
    url: commons('Pencil in a bowl of water.svg'),
    alt: 'Diagrama de um lápis aparentemente deslocado ao atravessar a superfície da água',
    caption: 'A refração muda a direção dos raios de luz na passagem entre água e ar e desloca a posição aparente do objeto.',
    credit: 'Wikimedia Commons · diagrama de refração',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pencil_in_a_bowl_of_water.svg',
  },
  {
    slug: 'pai', type: 'IMAGE',
    url: 'https://www.cdc.gov/hearher/media/images/support-family-friends-16x9-1.jpg',
    alt: 'Família apoiando uma mulher no período materno',
    caption: 'Apoio prático começa por escutar, levar sintomas a sério e ajudar a buscar cuidado quando necessário.',
    credit: 'CDC · Hear Her',
    sourceUrl: 'https://www.cdc.gov/hearher/support/index.html',
  },
  {
    slug: 'mecanica', type: 'IMAGE',
    url: 'https://cdn.autoservicepraxis.de/thumb_675x675/media/5172/motordiagnose-3.jpg',
    alt: 'Manômetro conectado ao motor durante teste de compressão',
    caption: 'O manômetro mede pressão no cilindro. O valor precisa ser comparado entre cilindros e interpretado junto com outros testes.',
    credit: 'Auto Service Praxis · referência técnica',
    sourceUrl: 'https://www.autoservicepraxis.de/nachrichten/kfz-werkstatt/der-ist-doch-nicht-ganz-dicht-3679344',
  },
  {
    slug: 'nautica', type: 'IMAGE',
    url: 'https://d1ldvf68ux039x.cloudfront.net/thumbs/photos/2505/9055262/1000w_q95.jpg',
    alt: 'Integrante da Guarda Costeira dos Estados Unidos demonstrando um colete salva-vidas',
    caption: 'Colete precisa estar adequado ao corpo, atividade e norma aplicável. A foto ilustra um equipamento real de flutuação.',
    credit: 'U.S. Coast Guard / DVIDS',
    sourceUrl: 'https://www.dvidshub.net/image/9055262/coast-guard-promotes-life-jacket-safety-during-national-safe-boating-week',
  },
  {
    slug: 'viagens', type: 'IMAGE',
    url: 'https://stat.ameba.jp/user_images/20220616/12/hiro-latinoamerica/7b/23/j/o0900067515133694385.jpg',
    alt: 'Moinho e jardins floridos em Holambra, São Paulo',
    caption: 'Holambra combina identidade holandesa, jardins e turismo de flores. Confirme programação, ingressos e horários nos canais oficiais antes do bate-volta.',
    credit: 'Imagem de referência de Holambra · Caramba!',
    sourceUrl: 'https://www.holambra.sp.gov.br/',
  },
  {
    slug: 'financas', type: 'IMAGE',
    url: 'https://exportfinancecdn.azureedge.net/media/behd3u10/wrd_nov_australia_graph.jpg',
    alt: 'Gráfico histórico de rendimento do Treasury de 10 anos dos Estados Unidos',
    caption: 'A curva longa varia com inflação, oferta/demanda de títulos, crescimento e política monetária. O gráfico é histórico e serve para visualizar o conceito, não o nível de hoje.',
    credit: 'Export Finance Australia · gráfico com fonte Federal Reserve',
    sourceUrl: 'https://www.exportfinance.gov.au/resources/world-risk-developments/2024/november/australia-prospects-for-inward-looking-us-policies-create-export-risks/',
  },
  {
    slug: 'tecnologia', type: 'IMAGE',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Wikimedia_Foundation_Servers-8055_08.jpg',
    alt: 'Fileiras de servidores instalados em racks de data center',
    caption: 'IA em escala depende de infraestrutura física: servidores, rede, armazenamento, energia, refrigeração e capital.',
    credit: 'Wikimedia Foundation / Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Wikimedia_Foundation_Servers-8055_08.jpg',
  },
  {
    slug: 'seguranca', type: 'IMAGE',
    url: 'https://img2.helpnetsecurity.com/posts2022/CISA-KEV-Catalog.jpg',
    alt: 'Interface do catálogo Known Exploited Vulnerabilities da CISA',
    caption: 'O KEV diferencia vulnerabilidade conhecida de vulnerabilidade com exploração observada. A edição usa esse conceito para puxar hunting e mitigação além do patch.',
    credit: 'CISA KEV · captura reproduzida por Help Net Security',
    sourceUrl: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog',
  },
];

export function inlineMediaForSlug(slug: string) {
  return editorialInlineMedia20260820.find((item) => item.slug === slug);
}
