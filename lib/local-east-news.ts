export type LocalEastNewsItem = {
  id: string;
  scope: 'ITAQUERA' | 'ZONA LESTE';
  category: 'SAÚDE' | 'MOBILIDADE' | 'CULTURA' | 'ESPORTE' | 'CIDADE';
  date: string;
  freshness: 'HOJE' | 'RECENTE' | 'CONTEXTO';
  emoji: string;
  title: string;
  summary: string;
  whyItMatters: string;
  source: { label: string; url: string };
};

export const localEastNewsUpdatedAt = '19 AGO 2026 · 20H35';

export const localEastNews: LocalEastNewsItem[] = [
  {
    id: 'itaquera-vacinacao-sarampo-19ago',
    scope: 'ITAQUERA',
    category: 'SAÚDE',
    date: '19 AGO 2026',
    freshness: 'HOJE',
    emoji: '💉',
    title: 'Estação Corinthians-Itaquera recebe vacinação contra sarampo nesta quarta-feira',
    summary: 'A campanha de tríplice viral está em Corinthians-Itaquera nesta quarta (19), das 10h às 20h. A ação também contempla outras estações da Zona Leste em datas específicas, em resposta ao aumento de casos de sarampo no estado.',
    whyItMatters: 'É um serviço útil disponível hoje no próprio eixo de transporte de Itaquera. A vacina tríplice viral protege contra sarampo, caxumba e rubéola; critérios e situação vacinal devem ser confirmados com a equipe de saúde.',
    source: { label: 'Folha de S.Paulo · 10/08/2026, atualizado 10/08', url: 'https://www1.folha.uol.com.br/equilibrioesaude/2026/08/vacinacao-contra-o-sarampo-chega-a-estacoes-de-trem-e-metro-de-sao-paulo-saiba-quais.shtml' },
  },
  {
    id: 'itaquera-corinthians-libertadores-20ago',
    scope: 'ITAQUERA',
    category: 'ESPORTE',
    date: '20 AGO 2026 · AMANHÃ',
    freshness: 'HOJE',
    emoji: '⚽',
    title: 'Itaquera recebe decisão do Corinthians na Libertadores nesta quinta-feira',
    summary: 'Corinthians e Rosario Central decidem a vaga nas quartas de final da Libertadores na quinta (20), em Itaquera, após empate por 0 a 0 na Argentina. Organizadas também anunciaram novos protestos ligados à crise administrativa do clube para o dia da partida.',
    whyItMatters: 'Além do peso esportivo, partidas de grande porte alteram o fluxo de pessoas e veículos no entorno da Neo Química Arena. Antes de sair, vale consultar Metrô, CPTM, SPTrans e CET para a operação específica do dia.',
    source: { label: 'Folha de S.Paulo · 19/08/2026', url: 'https://www1.folha.uol.com.br/esporte/2026/08/torcedores-protestam-em-frente-ao-ministerio-publico-e-pedem-intervencao-no-corinthians.shtml' },
  },
  {
    id: 'itaquera-jacu-pessego-zeladoria-01ago',
    scope: 'ITAQUERA',
    category: 'CIDADE',
    date: '01 AGO 2026',
    freshness: 'RECENTE',
    emoji: '🏙️',
    title: 'Subprefeitura intensifica zeladoria na Jacu-Pêssego contra descarte irregular',
    summary: 'A Subprefeitura Itaquera informou uma megaoperação de limpeza e zeladoria na Avenida Jacu-Pêssego, com atuação diária para remover descarte irregular e conservar espaços públicos ao longo do corredor.',
    whyItMatters: 'A Jacu-Pêssego é um dos eixos estruturais da região. Limpeza, drenagem e descarte irregular afetam mobilidade, enchentes, saúde urbana e qualidade do espaço público.',
    source: { label: 'Subprefeitura Itaquera · Prefeitura de São Paulo · 01/08/2026', url: 'https://prefeitura.sp.gov.br/itaquera/noticias/' },
  },
  {
    id: 'zl-brt-aricanduva-03ago',
    scope: 'ZONA LESTE',
    category: 'MOBILIDADE',
    date: '03 AGO 2026',
    freshness: 'RECENTE',
    emoji: '🚌',
    title: 'Obras do BRT Aricanduva começaram com previsão de atender 290 mil passageiros por dia',
    summary: 'A Prefeitura iniciou as obras do BRT Aricanduva, com 13,6 km de extensão e valor contratual de R$ 646,8 milhões. O projeto prevê corredor exclusivo, estações com pagamento antecipado e ciclovia.',
    whyItMatters: 'É uma das maiores intervenções recentes de mobilidade da Zona Leste e pode alterar tempos de viagem, integração e o desenho viário de um corredor usado diariamente por centenas de milhares de pessoas.',
    source: { label: 'Prefeitura de São Paulo · Mobilidade · 03/08/2026', url: 'https://prefeitura.sp.gov.br/web/mobilidade/w/prefeitura-inicia-obras-do-brt-aricanduva-para-transportar-290-mil-passageiros-por-dia-na-zona-leste' },
  },
  {
    id: 'zl-aleitamento-ubs-12ago',
    scope: 'ZONA LESTE',
    category: 'SAÚDE',
    date: '12 AGO 2026',
    freshness: 'RECENTE',
    emoji: '🩺',
    title: 'UBSs da Zona Leste ampliam ações de apoio ao aleitamento materno',
    summary: 'A Secretaria Municipal da Saúde destacou a trajetória das UBSs da região em ações de promoção, proteção e apoio ao aleitamento materno, atendendo uma área de cerca de 2,5 milhões de habitantes nas supervisões de saúde da Zona Leste.',
    whyItMatters: 'É uma pauta de saúde local que conecta pré-natal, puerpério, atenção básica e apoio comunitário. Moradores podem consultar a UBS de referência para saber quais ações e grupos estão disponíveis.',
    source: { label: 'Secretaria Municipal da Saúde · 12/08/2026', url: 'https://prefeitura.sp.gov.br/web/saude/w/ubss-da-zona-leste-consolidam-trajet%C3%B3ria-pioneira-na-promo%C3%A7%C3%A3o-e-prote%C3%A7%C3%A3o-ao-aleitamento-materno-na-capital' },
  },
  {
    id: 'zl-heliopolis-teatro-15a22ago',
    scope: 'ZONA LESTE',
    category: 'CULTURA',
    date: '15–22 AGO 2026',
    freshness: 'RECENTE',
    emoji: '🎭',
    title: 'Mostra de Teatro de Heliópolis segue até sábado com programação gratuita',
    summary: 'A 7ª Mostra de Teatro de Heliópolis acontece de 15 a 22 de agosto com espetáculos, rodas de conversa, oficinas e feira literária. A programação valoriza criação comunitária, teatro épico e cultura popular.',
    whyItMatters: 'É uma opção cultural gratuita na Zona Leste e reforça a produção artística feita no próprio território, não apenas eventos concentrados no centro expandido.',
    source: { label: 'Folha de S.Paulo · 14/08/2026', url: 'https://www1.folha.uol.com.br/ilustrada/2026/08/em-setima-edicao-mostra-em-heliopolis-destaca-teatro-epico-e-cultura-popular.shtml' },
  },
];
