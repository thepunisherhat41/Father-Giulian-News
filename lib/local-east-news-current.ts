import { localEastNews as baseNews, type LocalEastNewsItem } from './local-east-news';

export type { LocalEastNewsItem } from './local-east-news';
export const localEastNewsUpdatedAt = '21 AGO 2026 · madrugada';

const fresh: LocalEastNewsItem[] = [
  {
    id:'itaquera-corinthians-classificado-20ago-noite',
    scope:'ITAQUERA',
    category:'ESPORTE',
    date:'20 AGO 2026 · NOITE',
    freshness:'HOJE',
    emoji:'⚽',
    title:'Corinthians vence Rosario Central na Arena e avança às quartas da Libertadores',
    summary:'O Corinthians venceu o Rosario Central por 1 a 0 na Neo Química Arena e garantiu vaga nas quartas de final. Breno Bidon marcou após assistência de Memphis Depay; a equipe terminou a partida com um jogador a menos.',
    details:[
      'O jogo de ida havia terminado 0 a 0 em Rosario, portanto a vitória em Itaquera definiu a classificação sem pênaltis.',
      'A partida movimentou o eixo Corinthians-Itaquera até o fim da noite; impacto operacional específico de transporte deve ser confirmado em Metrô, CPTM, SPTrans e CET, e não inferido apenas pelo público do estádio.',
      'O próximo adversário será o Estudiantes, com jogos das quartas previstos para setembro.',
    ],
    whyItMatters:'Além do resultado esportivo, jogos de grande porte na Arena alteram fluxo de pessoas, comércio e transporte do entorno. A aba separa o fato esportivo confirmado de qualquer operação viária que ainda dependa de comunicado oficial.',
    watchNext:'Acompanhar comunicados de transporte no início da madrugada, jogo de domingo pelo Brasileiro e a definição de datas/horários das quartas.',
    sourceKind:'JORNALISMO',
    source:{ label:'UOL Esporte · 20/08/2026', url:'https://www.uol.com.br/esporte/futebol/ultimas-noticias/2026/08/20/libertadores-corinthians-x-rosario-central.ghtm' },
    media:{
      type:'IMAGE',
      url:'https://conteudo.imguol.com.br/c/esporte/2026/08/20/memphis-depay-do-corinthians-durante-jogo-contra-o-rosario-central-pela-libertadores-1787289329401_v2_900x506.jpg',
      alt:'Partida entre Corinthians e Rosario Central na Neo Química Arena',
      credit:'UOL Esporte · cobertura da partida',
      sourceUrl:'https://www.uol.com.br/esporte/futebol/ultimas-noticias/2026/08/20/libertadores-corinthians-x-rosario-central.ghtm',
    },
  },
  {
    id:'itaquera-corrego-rio-verde-21ago',
    scope:'ITAQUERA',
    category:'CIDADE',
    date:'21 AGO 2026 · OBRA EM ANDAMENTO',
    freshness:'HOJE',
    emoji:'🚧',
    title:'Obra no Córrego Rio Verde segue em andamento em Itaquera, com conclusão prevista para setembro',
    summary:'A Prefeitura informa que estão em andamento trabalhos de contenção de talude e recomposição do pavimento no Córrego Rio Verde, com investimento de R$ 11 milhões.',
    details:[
      'O projeto aparece no portal Obras Abertas como intervenção em andamento na região de Itaquera.',
      'A previsão pública consultada aponta conclusão em setembro de 2026.',
      'Intervenções desse tipo buscam recuperar estabilidade e pavimento; alterações de circulação devem ser verificadas nos canais oficiais de trânsito antes de cada deslocamento.',
    ],
    whyItMatters:'É uma obra de infraestrutura local com impacto potencial no deslocamento e na resiliência urbana. Quem circula pela região ganha ao acompanhar avanço e eventuais mudanças operacionais.',
    watchNext:'Acompanhar atualização do percentual executado, cronograma de setembro e comunicados de trânsito relacionados à obra.',
    sourceKind:'OFICIAL',
    source:{ label:'Prefeitura de São Paulo · Obras Abertas', url:'https://obrasabertas.prefeitura.sp.gov.br/' },
  },
  {
    id:'itaquera-vacinacao-21ago-current',
    scope:'ITAQUERA',
    category:'SAÚDE',
    date:'21 AGO 2026 · 10H–20H',
    freshness:'HOJE',
    emoji:'💉',
    title:'Corinthians-Itaquera tem vacinação contra sarampo nesta sexta, das 10h às 20h',
    summary:'A campanha de vacinação no Metrô inclui a estação Corinthians-Itaquera nesta sexta-feira. A ação busca facilitar atualização vacinal no próprio eixo de transporte.',
    details:[
      'A programação publicada inclui Corinthians-Itaquera e São Mateus em 17, 19 e 21 de agosto, das 10h às 20h.',
      'A indicação individual e o histórico de doses devem ser conferidos com a equipe de saúde; a presença do posto não significa que toda pessoa precise da mesma dose.',
      'Levar documento e carteira de vacinação, quando disponível, ajuda a equipe a avaliar o histórico.',
    ],
    whyItMatters:'É um serviço disponível hoje em um dos principais pontos de transporte da região, reduzindo a necessidade de deslocamento extra para parte da população.',
    watchNext:'Confirmar no canal da Secretaria Municipal da Saúde qualquer alteração operacional antes de ir.',
    sourceKind:'OFICIAL',
    source:{ label:'Secretaria Municipal da Saúde / Metrô', url:'https://prefeitura.sp.gov.br/web/saude/w/prefeitura-amplia-vacina%C3%A7%C3%A3o-contra-o-sarampo-com-equipes-de-sa%C3%BAde-em-cinco-esta%C3%A7%C3%B5es-do-metr%C3%B4' },
    media:{
      type:'IMAGE',
      url:'https://prefeitura.sp.gov.br/documents/11422308/0/WhatsApp%2BImage%2B2026-08-08%2Bat%2B11.38.33.jpeg/c97aaa5f-8757-5b91-af50-a0580aea021a?t=1786200435563',
      alt:'Campanha de vacinação da cidade de São Paulo',
      credit:'Secretaria Municipal da Saúde / Prefeitura de São Paulo',
      sourceUrl:'https://prefeitura.sp.gov.br/web/saude/w/capital-aplica-mais-de-109-mil-doses-de-vacinas-em-um-%C3%BAnico-dia-durante-campanha-de-multivacina%C3%A7%C3%A3o',
    },
  },
  {
    id:'zl-frente-fria-21ago',
    scope:'ZONA LESTE',
    category:'CIDADE',
    date:'21 AGO 2026',
    freshness:'HOJE',
    emoji:'🌬️',
    title:'Sexta começa mais fria na capital e vento merece atenção nos deslocamentos',
    summary:'Após o calor de quinta, a previsão para São Paulo indica queda de temperatura. A Defesa Civil alertou para rajadas associadas à passagem de frente fria na Grande São Paulo.',
    details:[
      'A mudança de massa de ar reduz a temperatura em comparação com quinta-feira.',
      'Rajadas aumentam risco de queda de galhos e objetos soltos; o risco é localizado e não significa que toda a Zona Leste terá dano.',
      'Para transporte e atividades externas, vale verificar alertas atualizados e condições do trajeto antes de sair.',
    ],
    whyItMatters:'Clima muda mobilidade, conforto e risco urbano. Na prática, vento forte costuma merecer mais atenção a árvores, placas e estruturas que a chuva isoladamente.',
    watchNext:'Acompanhar alertas da Defesa Civil/CGE e atualizações de transporte durante a manhã.',
    sourceKind:'JORNALISMO',
    source:{ label:'Band · Defesa Civil · 20/08/2026', url:'https://www.band.com.br/noticias/sp-defesa-civil-alerta-para-frente-fria-com-temporais-e-ventos-de-75-kmh-202608201449' },
  },
];

const replacedIds = new Set(fresh.map((item) => item.id));
const replacedTopics = new Set(['itaquera-libertadores-20ago-noite','itaquera-vacinacao-metro-21ago']);

export const localEastNews: LocalEastNewsItem[] = [
  ...fresh,
  ...baseNews.filter((item) => !replacedIds.has(item.id) && !replacedTopics.has(item.id)),
];
