export type LocalEastMedia = {
  type: 'IMAGE' | 'YOUTUBE';
  url?: string;
  youtubeId?: string;
  alt: string;
  credit: string;
  sourceUrl: string;
};

export type LocalEastNewsItem = {
  id: string;
  scope: 'ITAQUERA' | 'ZONA LESTE';
  category: 'SAÚDE' | 'MOBILIDADE' | 'CULTURA' | 'ESPORTE' | 'CIDADE' | 'POLÍTICA';
  date: string;
  freshness: 'HOJE' | 'RECENTE' | 'CONTEXTO' | 'AMANHÃ';
  emoji: string;
  title: string;
  summary: string;
  details: string[];
  whyItMatters: string;
  watchNext?: string;
  sourceKind: 'OFICIAL' | 'JORNALISMO' | 'SOCIAL OFICIAL';
  source: { label: string; url: string };
  media?: LocalEastMedia;
};

export const localEastNewsUpdatedAt = '20 AGO 2026 · 18H30';

export const localEastNews: LocalEastNewsItem[] = [
  {
    id: 'itaquera-libertadores-20ago-noite',
    scope: 'ITAQUERA',
    category: 'ESPORTE',
    date: '20 AGO 2026 · 21H30',
    freshness: 'HOJE',
    emoji: '⚽',
    title: 'Itaquera recebe decisão de Libertadores hoje à noite',
    summary: 'Corinthians e Rosario Central jogam às 21h30 na Neo Química Arena, pelas oitavas de final. A ida terminou 0 a 0; uma nova igualdade leva a disputa aos pênaltis.',
    details: [
      'A partida é a volta das oitavas de final da Libertadores 2026 e concentra grande fluxo de torcedores no eixo Corinthians-Itaquera.',
      'O UOL informa transmissão pela ESPN e Disney+ e destaca os retornos de Memphis Depay pelo Corinthians e a presença de Ángel Di María pelo Rosario Central.',
      'Não publicamos bloqueios viários genéricos de partidas antigas: qualquer operação especial de trânsito precisa ser confirmada especificamente por CET/SPTrans/Metrô/CPTM para esta data.',
    ],
    whyItMatters: 'Mesmo para quem não vai ao jogo, eventos grandes na Arena podem alterar o volume de pessoas no transporte e no comércio do entorno. A informação útil é separar o jogo confirmado de alterações operacionais que ainda precisam de fonte específica.',
    watchNext: 'Acompanhar resultado, eventual operação de saída do estádio e comunicados oficiais de transporte no fim da noite.',
    sourceKind: 'JORNALISMO',
    source: { label: 'UOL Esporte · 20/08/2026 · 16h30', url: 'https://www.uol.com.br/esporte/ultimas-noticias/2026/08/20/onde-vai-passar-corinthians-x-rosario-central-pela-libertadores-como-assistir-ao-vivo.ghtm' },
    media: {
      type: 'YOUTUBE',
      youtubeId: 'ESrwLvqIqDo',
      alt: 'Vídeo relacionado a Corinthians x Rosario Central publicado na cobertura do UOL',
      credit: 'UOL Esporte / YouTube',
      sourceUrl: 'https://www.uol.com.br/esporte/ultimas-noticias/2026/08/20/onde-vai-passar-corinthians-x-rosario-central-pela-libertadores-como-assistir-ao-vivo.ghtm',
    },
  },
  {
    id: 'itaquera-vacinacao-metro-21ago',
    scope: 'ITAQUERA',
    category: 'SAÚDE',
    date: '21 AGO 2026 · 10H–20H',
    freshness: 'AMANHÃ',
    emoji: '💉',
    title: 'Corinthians-Itaquera terá vacinação contra sarampo amanhã',
    summary: 'A Secretaria Municipal da Saúde programou posto temporário de vacinação contra o sarampo na estação Corinthians-Itaquera nesta sexta-feira, 21 de agosto, das 10h às 20h.',
    details: [
      'A ação faz parte da campanha de multivacinação e da intensificação contra o sarampo, que segue até 1º de setembro.',
      'Durante a campanha, a oferta contra sarampo foi ampliada para pessoas de 6 meses a 59 anos; a indicação individual deve ser conferida com a equipe de saúde.',
      'A Prefeitura também programou Dia D em 22 de agosto, com as 483 UBSs da capital abertas das 8h às 17h.',
    ],
    whyItMatters: 'É um serviço de saúde no próprio eixo de transporte de Itaquera, útil para quem precisa atualizar a situação vacinal sem deslocamento adicional grande.',
    watchNext: 'Conferir na sexta-feira se houve alteração de horário ou ponto e levar documento/carteira de vacinação quando disponível.',
    sourceKind: 'OFICIAL',
    source: { label: 'Secretaria Municipal da Saúde · Prefeitura de São Paulo', url: 'https://prefeitura.sp.gov.br/web/saude/w/prefeitura-amplia-vacina%C3%A7%C3%A3o-contra-o-sarampo-com-equipes-de-sa%C3%BAde-em-cinco-esta%C3%A7%C3%B5es-do-metr%C3%B4' },
    media: {
      type: 'IMAGE',
      url: 'https://prefeitura.sp.gov.br/documents/11422308/0/WhatsApp%2BImage%2B2026-08-08%2Bat%2B11.38.33.jpeg/c97aaa5f-8757-5b91-af50-a0580aea021a?t=1786200435563',
      alt: 'Profissional de saúde aplicando vacina durante a Campanha de Multivacinação de São Paulo',
      credit: 'Secretaria Municipal da Saúde / Prefeitura de São Paulo',
      sourceUrl: 'https://prefeitura.sp.gov.br/web/saude/w/capital-aplica-mais-de-109-mil-doses-de-vacinas-em-um-%C3%BAnico-dia-durante-campanha-de-multivacina%C3%A7%C3%A3o',
    },
  },
  {
    id: 'itaquera-parque-carmo-drenagem-12ago',
    scope: 'ITAQUERA',
    category: 'CIDADE',
    date: '12 AGO 2026 · OBRA EM ANDAMENTO',
    freshness: 'RECENTE',
    emoji: '🌳',
    title: 'Parque do Carmo amplia drenagem dos lagos para reduzir risco de cheias',
    summary: 'Obras no Parque do Carmo incluem nova galeria, vertedouro e estruturas para aumentar a capacidade de reservação de água dos lagos.',
    details: [
      'A Prefeitura informa investimento de R$ 7,6 milhões e previsão de conclusão até o fim de 2026.',
      'A capacidade de reservação deve passar de 13.110 m³ para 22.950 m³ após as intervenções previstas.',
      'A nova galeria entre os lagos 1 e 2 já foi concluída; as equipes trabalhavam na construção do vertedouro na atualização oficial de 12 de agosto.',
    ],
    whyItMatters: 'É uma intervenção de infraestrutura dentro de um dos principais parques da Zona Leste e tem relação direta com drenagem, erosão e resiliência a chuvas intensas.',
    watchNext: 'Acompanhar avanço do vertedouro, reabertura das áreas interditadas e conclusão prevista para o fim do ano.',
    sourceKind: 'OFICIAL',
    source: { label: 'SIURB · Prefeitura de São Paulo · 12/08/2026', url: 'https://prefeitura.sp.gov.br/web/obras/w/parque-do-carmo-em-itaquera-ganha-refor%C3%A7o-em-sua-rede-de-drenagem' },
    media: {
      type: 'IMAGE',
      url: 'https://prefeitura.sp.gov.br/documents/d/obras/20260803_obras_de_vertedouro_lago_parque_do_carmo_rp-3-jpg',
      alt: 'Obras do vertedouro no lago do Parque do Carmo, em Itaquera',
      credit: 'Renato Pinheiro / Prefeitura de São Paulo',
      sourceUrl: 'https://prefeitura.sp.gov.br/web/obras/w/parque-do-carmo-em-itaquera-ganha-refor%C3%A7o-em-sua-rede-de-drenagem',
    },
  },
  {
    id: 'zl-sao-miguel-vila-formosa-campanha-20ago',
    scope: 'ZONA LESTE',
    category: 'POLÍTICA',
    date: '20 AGO 2026 · ATUALIZADA 16H06',
    freshness: 'HOJE',
    emoji: '🏛️',
    title: 'Agendas de campanha em São Miguel e Vila Formosa tiveram protestos nesta quinta',
    summary: 'Duas agendas de Flávio Bolsonaro na Zona Leste foram marcadas por protestos de moradores, segundo cobertura do UOL. Houve compromissos no Mercado Municipal de São Miguel e em um CDC na Vila Formosa.',
    details: [
      'No Mercado Municipal de São Miguel, o candidato visitou o Armazém Solidário acompanhado do prefeito Ricardo Nunes.',
      'Na Vila Formosa, participou de atividade em um clube da comunidade; o UOL registrou protestos também nessa etapa da agenda.',
      'A matéria atribui as críticas aos manifestantes e separa as acusações políticas dos fatos observáveis da agenda. Esta seção não transforma protesto em medição de intenção de voto.',
    ],
    whyItMatters: 'A Zona Leste é território relevante na disputa eleitoral paulistana e nacional. A presença de candidatos, lideranças locais e protestos mostra como a campanha está ocupando os bairros, mas não substitui pesquisa eleitoral.',
    watchNext: 'Acompanhar novas agendas na região, propostas específicas para a Zona Leste e eventual resposta dos candidatos às pautas apresentadas localmente.',
    sourceKind: 'JORNALISMO',
    source: { label: 'UOL Notícias · 20/08/2026 · atualizada 16h06', url: 'https://noticias.uol.com.br/eleicoes/2026/08/20/protesto-flavio-bolsonaro-zona-leste-de-sao-paulo.ghtm' },
    media: {
      type: 'IMAGE',
      url: 'https://conteudo.imguol.com.br/c/noticias/83/2026/08/20/protestos-contra-flavio-e-tarcisio-marcam-a-estreia-da-agenda-de-campanha-eleitoral-do-candidato-a-presidencia-no-extremo-leste-de-sao-paulo-1787229271634_v2_750x421.jpg',
      alt: 'Manifestantes durante agenda de campanha na Zona Leste de São Paulo em 20 de agosto de 2026',
      credit: 'Ana Paula Bimbati / UOL',
      sourceUrl: 'https://noticias.uol.com.br/eleicoes/2026/08/20/protesto-flavio-bolsonaro-zona-leste-de-sao-paulo.ghtm',
    },
  },
  {
    id: 'zl-heliopolis-teatro-15a22ago',
    scope: 'ZONA LESTE',
    category: 'CULTURA',
    date: '15–22 AGO 2026',
    freshness: 'RECENTE',
    emoji: '🎭',
    title: 'Mostra de Teatro de Heliópolis segue até sábado com programação gratuita',
    summary: 'A 7ª Mostra de Teatro de Heliópolis segue até 22 de agosto com espetáculos, rodas de conversa, oficinas e feira literária.',
    details: [
      'A programação mistura produções do território e convidados, com atividades ligadas a teatro épico, cultura popular e formação.',
      'Como o evento ainda está em andamento, horários e disponibilidade de cada atividade devem ser checados na programação da fonte antes de sair.',
    ],
    whyItMatters: 'É programação cultural gratuita produzida no próprio território e uma alternativa concreta de lazer e formação na Zona Leste neste fim de semana.',
    watchNext: 'Conferir a agenda de sexta e sábado e eventuais mudanças de capacidade/horário.',
    sourceKind: 'JORNALISMO',
    source: { label: 'Folha de S.Paulo · 14/08/2026', url: 'https://www1.folha.uol.com.br/ilustrada/2026/08/em-setima-edicao-mostra-em-heliopolis-destaca-teatro-epico-e-cultura-popular.shtml' },
  },
  {
    id: 'zl-vacinacao-dia-d-22ago',
    scope: 'ZONA LESTE',
    category: 'SAÚDE',
    date: '22 AGO 2026 · 8H–17H',
    freshness: 'RECENTE',
    emoji: '🩺',
    title: 'Dia D de multivacinação abre UBSs da capital neste sábado',
    summary: 'A Prefeitura programou para 22 de agosto um Dia D da Campanha de Multivacinação, com as 483 UBSs da cidade abertas das 8h às 17h.',
    details: [
      'A campanha reforça atualização de cadernetas e vacinação contra sarampo.',
      'A Prefeitura informou mais de 400 mil doses aplicadas na primeira semana da campanha em toda a capital.',
      'Moradores devem conferir indicação individual e unidade de referência pelos canais oficiais, especialmente para crianças e pessoas com condições específicas.',
    ],
    whyItMatters: 'É um serviço de fim de semana que amplia acesso para quem não consegue ir à UBS em horário comercial.',
    watchNext: 'Na sexta-feira, confirmar a UBS escolhida e verificar fila/disponibilidade nos canais da Secretaria da Saúde.',
    sourceKind: 'OFICIAL',
    source: { label: 'Secretaria Municipal da Saúde · Prefeitura de São Paulo', url: 'https://prefeitura.sp.gov.br/web/saude/w/campanha-multivacinacao-2026' },
    media: {
      type: 'IMAGE',
      url: 'https://prefeitura.sp.gov.br/documents/11422308/0/WhatsApp%2BImage%2B2026-08-08%2Bat%2B11.38.33.jpeg/c97aaa5f-8757-5b91-af50-a0580aea021a?t=1786200435563',
      alt: 'Vacinação durante a Campanha de Multivacinação da cidade de São Paulo',
      credit: 'Secretaria Municipal da Saúde / Prefeitura de São Paulo',
      sourceUrl: 'https://prefeitura.sp.gov.br/web/saude/w/capital-aplica-mais-de-109-mil-doses-de-vacinas-em-um-%C3%BAnico-dia-durante-campanha-de-multivacina%C3%A7%C3%A3o',
    },
  },
  {
    id: 'itaquera-terminal-contexto',
    scope: 'ITAQUERA',
    category: 'MOBILIDADE',
    date: 'AGO 2026 · OBRA EM ANDAMENTO',
    freshness: 'CONTEXTO',
    emoji: '🚌',
    title: 'Novo Terminal Itaquera segue como obra estrutural de mobilidade',
    summary: 'A Prefeitura informa que o novo terminal terá 36 mil m² e integração com a Linha 3-Vermelha do Metrô e a Linha 11-Coral da CPTM.',
    details: [
      'A proposta é reorganizar um dos maiores nós de integração de transporte da Zona Leste.',
      'Por ser projeto de longo prazo, ele fica marcado como contexto, não como notícia de hoje.',
    ],
    whyItMatters: 'Mudanças no terminal podem afetar integração, conforto e circulação de quem usa Itaquera diariamente.',
    watchNext: 'Acompanhar cronograma físico, entregas parciais e alterações operacionais oficialmente anunciadas.',
    sourceKind: 'OFICIAL',
    source: { label: 'Prefeitura de São Paulo · Mobilidade', url: 'https://coleta.prefeitura.sp.gov.br/web/mobilidade/w/s%C3%A3o-paulo-amplia-mobilidade-urbana-com-mais-de-r-13-bilh%C3%B5es-investidos-em-obras-que-reduzem-o-tempo-de-deslocamento' },
  },
  {
    id: 'zl-brt-aricanduva-contexto',
    scope: 'ZONA LESTE',
    category: 'MOBILIDADE',
    date: 'AGO 2026 · OBRA EM ANDAMENTO',
    freshness: 'CONTEXTO',
    emoji: '🚍',
    title: 'BRT Aricanduva permanece em acompanhamento como obra estrutural',
    summary: 'O projeto prevê 13,6 km de corredor, estações com pagamento antecipado e ciclovia, com estimativa oficial de atendimento a 290 mil passageiros por dia.',
    details: [
      'A escala do projeto faz com que impactos e benefícios apareçam em etapas, e não como uma única entrega.',
      'Mudanças de trânsito, cronograma e frentes de obra precisam ser acompanhadas pelos canais oficiais para não misturar previsão com situação atual.',
    ],
    whyItMatters: 'É uma intervenção de longo prazo capaz de alterar integração e tempo de deslocamento no eixo Aricanduva.',
    watchNext: 'Acompanhar novas frentes, estações e mudanças operacionais anunciadas pela Prefeitura.',
    sourceKind: 'OFICIAL',
    source: { label: 'Prefeitura de São Paulo · Mobilidade · 03/08/2026', url: 'https://prefeitura.sp.gov.br/web/mobilidade/w/prefeitura-inicia-obras-do-brt-aricanduva-para-transportar-290-mil-passageiros-por-dia-na-zona-leste' },
  },
];
