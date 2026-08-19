export type LocalSecuritySignal = {
  id: string;
  type: 'DADO' | 'AÇÃO' | 'ALERTA' | 'SERVIÇO';
  area: string;
  date: string;
  freshness: 'RECENTE' | 'CONTEXTO';
  ageLabel?: string;
  title: string;
  summary: string;
  whyItMatters: string;
  source: { label: string; url: string };
};

export type LocalSecurityCase = {
  id: string;
  status: 'PROCURADO' | 'PRESO' | 'EM INVESTIGAÇÃO' | 'CAPTURADO';
  area: string;
  date: string;
  subject: string;
  title: string;
  summary: string;
  legalStatus: string;
  lastVerified: string;
  source: { label: string; url: string };
};

export type LocalSecurityArticle = {
  id: string;
  eyebrow: string;
  area: string;
  date: string;
  title: string;
  summary: string;
  takeaway: string;
  source: { label: string; url: string };
};

export const localSecurityUpdatedAt = '19 AGO 2026 · 20H';

export const localSecurityTodayStatus = {
  date: '19 AGO 2026',
  status: 'CHECAGEM AMPLIADA ÀS 20H',
  note: 'A revisão foi ampliada para notícias, casos com suspeitos oficialmente investigados, procurados com ordem judicial divulgada, prisões e matérias de contexto em Itaquera, Artur Alvim, Penha, Vila Matilde, Vila Prudente, Sapopemba, São Mateus, Cidade Tiradentes, Guaianases, Itaim Paulista, São Miguel, Ermelino Matarazzo e Aricanduva/Vila Formosa. Não foi encontrada nova ocorrência criminal de 19/08 com confirmação suficiente para entrar como notícia do dia; casos anteriores permanecem com data e status explícitos.',
  nextCheck: 'próxima revisão editorial: nova confirmação pública ou janela agendada',
};

export const localSecurityRegions = [
  'Aricanduva / Formosa',
  'Artur Alvim',
  'Cidade Tiradentes',
  'Ermelino Matarazzo',
  'Guaianases',
  'Itaim Paulista',
  'Itaquera',
  'Penha',
  'São Mateus',
  'São Miguel',
  'Sapopemba',
  'Tatuapé',
  'Vila Matilde',
  'Vila Prudente',
];

export const localSecurityCases: LocalSecurityCase[] = [
  {
    id: 'artur-alvim-sequestro-procurado-14ago',
    status: 'PROCURADO',
    area: 'Artur Alvim · Zona Leste',
    date: '14 AGO 2026',
    subject: 'Policial civil investigado',
    title: 'Justiça decretou prisão em investigação sobre agressão e sequestro em Artur Alvim',
    summary: 'A Justiça decretou a prisão de um policial civil investigado por suspeita de participação na agressão e no sequestro de um jovem em Artur Alvim. Buscas realizadas em endereços ligados ao agente não o localizaram na atualização publicada em 14 de agosto. A Corregedoria e o Decap investigam o caso, que tramita sob sigilo.',
    legalStatus: 'Investigado, com prisão decretada. A última confirmação pública localizada nesta revisão, de 14/08, informava que ele estava foragido. Isso não equivale a condenação pelo caso investigado.',
    lastVerified: 'Última confirmação pública localizada: 14/08/2026',
    source: { label: 'Folha de S.Paulo · 14/08/2026', url: 'https://www1.folha.uol.com.br/cotidiano/2026/08/justica-decreta-prisao-de-policial-civil-envolvido-em-sequestro-em-sao-paulo.shtml' },
  },
  {
    id: 'itaquera-violencia-tres-mulheres-07ago',
    status: 'PRESO',
    area: 'Itaquera · Zona Leste',
    date: '07 AGO 2026',
    subject: 'Homem investigado',
    title: 'Polícia Civil prendeu suspeito de roubar e violentar três mulheres na Zona Leste',
    summary: 'Policiais do 32º DP, em Itaquera, prenderam um homem investigado por roubo e violência sexual contra três mulheres em um salão de beleza. A reportagem informa que o suspeito havia deixado o sistema penitenciário em janeiro após cumprir pena anterior.',
    legalStatus: 'Suspeito/investigado, com prisão noticiada em 07/08. O card não trata a suspeita atual como condenação e não publica endereço, rotina ou outros identificadores pessoais.',
    lastVerified: 'Publicação localizada: 07/08/2026',
    source: { label: 'Band · Brasil Urgente · 07/08/2026', url: 'https://www.band.com.br/noticias/brasil-urgente/ultimas/homem-e-preso-apos-roubar-e-abusar-de-tres-mulheres-na-zona-leste-de-sp-202608071736' },
  },
  {
    id: 'guaianases-tentativa-sequestro-19jun',
    status: 'PRESO',
    area: 'Guaianases · Zona Leste',
    date: '19 JUN 2026',
    subject: 'Suspeito de tentativa de sequestro',
    title: 'Suspeito de tentativa de sequestro de criança em Guaianases foi preso',
    summary: 'A Polícia Militar prendeu no centro de São Paulo um homem apontado como envolvido em uma tentativa de sequestro de uma criança de 10 anos em Guaianases. Segundo a reportagem, ele foi reconhecido durante patrulhamento e levado ao 2º DP.',
    legalStatus: 'Suspeito preso. A investigação sobre outros possíveis envolvidos continuava na publicação consultada; o site não transforma hipótese investigativa em fato consumado.',
    lastVerified: 'Publicação localizada: 19/06/2026',
    source: { label: 'UOL · 19/06/2026', url: 'https://noticias.uol.com.br/cotidiano/ultimas-noticias/2026/06/19/suspeito-de-tentar-sequestrar-crianca-na-zona-leste-de-sp-e-preso.ghtm' },
  },
  {
    id: 'tatuape-bilhete-premiado-11jun',
    status: 'PRESO',
    area: 'Tatuapé · Zona Leste',
    date: '11 JUN 2026',
    subject: 'Casal suspeito de estelionato',
    title: 'Casal foi preso no Tatuapé em investigação sobre golpe do bilhete premiado',
    summary: 'A SSP-SP informou que a Rota prendeu um casal suspeito de aplicar o golpe do bilhete premiado contra uma mulher de 70 anos, que havia transferido R$ 60 mil após promessa de participação em um prêmio milionário.',
    legalStatus: 'Prisão em flagrante divulgada pela SSP. O conteúdo mantém a qualificação de suspeitos e não presume condenação definitiva.',
    lastVerified: 'Fonte oficial publicada em 11/06/2026',
    source: { label: 'SSP-SP · 11/06/2026', url: 'https://www.ssp.sp.gov.br/noticia/60489' },
  },
];

export const localSecurityArticles: LocalSecurityArticle[] = [
  {
    id: 'smartcop-cobre-06jul',
    eyebrow: 'INFRAESTRUTURA URBANA',
    area: 'Zona Leste',
    date: '06 JUL 2026',
    title: 'SmartCop acompanhou ocorrência de queima irregular de fios e prisão por suspeita de receptação',
    summary: 'A Prefeitura informou que a plataforma acompanhou em tempo real o deslocamento de um veículo ligado à queima de fios de cobre e auxiliou a GCM na abordagem. Cerca de 25 kg de cobre sem procedência comprovada foram apreendidos.',
    takeaway: 'Furto e receptação de cabos não afetam só patrimônio: podem comprometer energia, iluminação, telecomunicações e serviços urbanos.',
    source: { label: 'Prefeitura de São Paulo · Segurança Urbana', url: 'https://prefeitura.sp.gov.br/web/seguranca_urbana/w/smartcop-flagra-queima-irregular-de-fios-de-cobre-e-auxilia-gcm-na-pris%C3%A3o-de-homem-por-recepta%C3%A7%C3%A3o-na-zona-leste' },
  },
  {
    id: 'cop-leste-explicada-10jun',
    eyebrow: 'COMO FUNCIONA',
    area: 'Zona Leste',
    date: '10 JUN 2026',
    title: 'O que a nova central operacional da GCM muda na Zona Leste',
    summary: 'A COP Leste centraliza planejamento e acompanhamento das equipes da GCM e integra acesso a milhares de câmeras do Smart Sampa na área do Comando Operacional Leste.',
    takeaway: 'É infraestrutura de coordenação e resposta. O número de câmeras ou prisões não deve ser lido isoladamente como indicador de risco de um bairro.',
    source: { label: 'Prefeitura de São Paulo · Segurança Urbana', url: 'https://prefeitura.sp.gov.br/web/seguranca_urbana/w/zona-leste-ganha-nova-central-de-opera%C3%A7%C3%B5es-da-gcm-integrada-ao-smart-sampa' },
  },
  {
    id: 'itaquera-dois-foragidos-2025',
    eyebrow: 'CAPTURA DE PROCURADOS · CONTEXTO',
    area: 'Terminal Itaquera',
    date: '16 NOV 2025',
    title: 'Smart Sampa identificou dois foragidos na mesma plataforma do Terminal Itaquera',
    summary: 'A Prefeitura relatou duas capturas em intervalo inferior a cinco minutos, após reconhecimento facial no Terminal Itaquera. Os dois homens tinham condenações e mandados em aberto e foram detidos pela GCM.',
    takeaway: 'O caso ajuda a entender como reconhecimento facial está sendo usado para localizar pessoas já procuradas pela Justiça — diferente de classificar alguém como suspeito apenas por comportamento.',
    source: { label: 'Prefeitura de São Paulo · Sampa News', url: 'https://prefeitura.sp.gov.br/web/sampa-news/w/smart-sampa-identifica-e-leva-%C3%A0-pris%C3%A3o-dois-foragidos-na-mesma-plataforma-e-em-menos-de-cinco-minutos-no-terminal-itaquera' },
  },
  {
    id: 'monitoramento-agressor-tornozeleira',
    eyebrow: 'VIOLÊNCIA CONTRA A MULHER · PROTEÇÃO',
    area: 'São Paulo · exemplo em Itaquera',
    date: 'PROGRAMA ESTADUAL',
    title: 'Como funciona o monitoramento de agressores com tornozeleira e zona de exclusão',
    summary: 'A SSP descreve o fluxo em que alertas são emitidos se uma pessoa monitorada ultrapassa o perímetro definido pela Justiça, permitindo acionamento policial e proteção da vítima.',
    takeaway: 'É um mecanismo de proteção judicial e resposta antecipada; não substitui denúncia, medida protetiva ou atendimento emergencial quando houver risco imediato.',
    source: { label: 'SSP-SP · explicação oficial', url: 'https://www.ssp.sp.gov.br/noticia/59096' },
  },
];

export const localSecuritySignals: LocalSecuritySignal[] = [
  {
    id: 'artur-alvim-sequestro-14ago',
    type: 'ALERTA',
    area: 'Artur Alvim · Zona Leste',
    date: '14 AGO 2026',
    freshness: 'RECENTE',
    ageLabel: '5D',
    title: 'Justiça decretou prisão de policial civil investigado por sequestro em Artur Alvim',
    summary: 'A Justiça decretou a prisão de um policial civil investigado por participação na agressão e no sequestro de um jovem ocorrido em Artur Alvim. A Corregedoria e o Decap investigam o caso, que tramita sob sigilo.',
    whyItMatters: 'É uma ocorrência grave ainda dentro da janela recente de 7 dias. O caso é apresentado como investigação em andamento e não é extrapolado para uma tendência do bairro.',
    source: { label: 'Folha de S.Paulo · 14/08/2026', url: 'https://www1.folha.uol.com.br/cotidiano/2026/08/justica-decreta-prisao-de-policial-civil-envolvido-em-sequestro-em-sao-paulo.shtml' },
  },
  {
    id: 'roubo-celular-vila-prudente-1s2026',
    type: 'DADO',
    area: 'Vila Prudente · 29º DP',
    date: '1º SEM 2026 · PUBLICADO 10 AGO',
    freshness: 'CONTEXTO',
    ageLabel: '9D',
    title: 'Vila Prudente apareceu entre DPs com alta de roubos de celular no 1º semestre',
    summary: 'Levantamento publicado em 10 de agosto com base em dados da SSP-SP apontou alta de 19,5% nos roubos de celular na área do 29º DP (Vila Prudente) no primeiro semestre de 2026 versus o mesmo período de 2025. Na capital como um todo, o indicador caiu 14,8%.',
    whyItMatters: 'O dado mostra por que a média da cidade não pode ser aplicada automaticamente a cada região. Como a publicação já passou da janela de 7 dias, fica na camada de contexto, não nas notícias recentes.',
    source: { label: 'Levantamento de 10/08/2026 com dados SSP-SP', url: 'https://yaconews.com/veja-quais-bairros-de-sp-tiveram-aumento-nos-roubos-de-celular-em-2026/' },
  },
  {
    id: 'capital-junho-2026',
    type: 'DADO',
    area: 'Capital · contexto para ZL',
    date: 'JUN 2026',
    freshness: 'CONTEXTO',
    title: 'Roubos de veículos caíram 32,08% na capital em junho; roubos em geral recuaram 12,78%',
    summary: 'A Prefeitura, com base em dados da SSP, informou 504 roubos de veículos em junho de 2026 contra 742 em junho de 2025. Roubos de carga caíram 26,52% e furtos de veículos, 5,95%.',
    whyItMatters: 'É pano de fundo consolidado para a cidade. Ajuda a contextualizar a Zona Leste, mas não substitui recorte por distrito policial ou bairro.',
    source: { label: 'Prefeitura de São Paulo · Segurança Urbana · 04/08/2026', url: 'https://prefeitura.sp.gov.br/web/seguranca_urbana/w/roubos-de-ve%C3%ADculos-apresentam-queda-de-32-no-m%C3%AAs-de-junho-de-2026-em-compara%C3%A7%C3%A3o-com-mesmo-per%C3%ADodo-do-ano-passado' },
  },
  {
    id: 'smartcop-julho-2026',
    type: 'AÇÃO',
    area: 'Belém · Zona Leste',
    date: '08 JUL 2026',
    freshness: 'CONTEXTO',
    title: 'SmartCop foi usado em operação na Zona Leste com apoio aéreo e georreferenciamento',
    summary: 'A Prefeitura informou que o SmartCop auxiliou a GCM em uma ocorrência no Belém usando câmeras térmicas, visão infravermelha, georreferenciamento e transmissão em tempo real.',
    whyItMatters: 'Mostra como a cidade está combinando monitoramento terrestre e aéreo. É uma ocorrência específica, não uma medida de risco do bairro.',
    source: { label: 'Prefeitura de São Paulo · SmartCop · 08/07/2026', url: 'https://prefeitura.sp.gov.br/w/smartcop-d%C3%A1-localiza%C3%A7%C3%A3o-em-tempo-real-e-impede-fuga-de-traficantes-na-zona-leste' },
  },
  {
    id: 'cop-leste-2026',
    type: 'AÇÃO',
    area: 'Zona Leste',
    date: '10 JUN 2026',
    freshness: 'CONTEXTO',
    title: 'Zona Leste ganhou central operacional da GCM integrada ao Smart Sampa',
    summary: 'A COP Leste passou a centralizar planejamento e acompanhamento das equipes da GCM, com acesso a aproximadamente 4 mil câmeras na área do Comando Operacional Leste e funcionamento 24/7.',
    whyItMatters: 'A infraestrutura cobre 11 inspetorias regionais e cria um canal único de monitoramento e coordenação operacional para boa parte da Zona Leste.',
    source: { label: 'Prefeitura de São Paulo · Segurança Urbana · 10/06/2026', url: 'https://prefeitura.sp.gov.br/web/seguranca_urbana/w/zona-leste-ganha-nova-central-de-opera%C3%A7%C3%B5es-da-gcm-integrada-ao-smart-sampa' },
  },
  {
    id: 'zl-janeiro-2026',
    type: 'DADO',
    area: 'São Mateus · Cidade Tiradentes · Guaianases · Itaquera',
    date: 'JAN 2026',
    freshness: 'CONTEXTO',
    title: 'Parte da Zona Leste abriu 2026 com queda em roubos e roubo de veículos',
    summary: 'Segundo balanço divulgado pela Prefeitura com dados da SSP, São Mateus, Cidade Tiradentes e Guaianases tiveram redução conjunta de 42,2% nos roubos em janeiro. A região da Seccional de Itaquera registrou queda superior a 48% nos roubos de veículos.',
    whyItMatters: 'É um recorte regional oficial, mas antigo para uma atualização diária. Permanece apenas como contexto histórico e nunca como notícia atual.',
    source: { label: 'Prefeitura de São Paulo · janeiro/2026', url: 'https://prefeitura.sp.gov.br/web/seguranca_urbana/w/capital-paulista-registra-queda-hist%C3%B3rica-da-criminalidade-em-janeiro' },
  },
  {
    id: 'delegacia-eletronica',
    type: 'SERVIÇO',
    area: 'Estado de São Paulo',
    date: '24/7',
    freshness: 'CONTEXTO',
    title: 'Roubo/furto de veículo, celular, documentos, objetos e fraude podem ser registrados pela Delegacia Eletrônica',
    summary: 'A SSP mantém registro eletrônico 24 horas para várias naturezas, incluindo roubo e furto de veículos, celulares, documentos/objetos e fraude/estelionato.',
    whyItMatters: 'Registrar ocorrência alimenta investigação e também os indicadores oficiais. Casos que exigem atendimento presencial devem seguir a orientação da SSP.',
    source: { label: 'SSP-SP · Delegacia Eletrônica', url: 'https://www.ssp.sp.gov.br/servicos/delegacia-eletronica' },
  },
];

export const localSecurityMedia = {
  commandCenter: {
    url: 'https://prefeitura.sp.gov.br/documents/7625478/0/smart%2Bzl%2B2.jpg/5e546fc7-04a3-4464-57d5-9063e212ca96?t=1781107114188',
    alt: 'Central de Operações da GCM na Zona Leste integrada ao Smart Sampa',
    caption: 'Central de Operações da GCM na Zona Leste, inaugurada em junho de 2026.',
    credit: 'Prefeitura de São Paulo · Secretaria Municipal de Segurança Urbana',
    sourceUrl: 'https://prefeitura.sp.gov.br/web/seguranca_urbana/w/zona-leste-ganha-nova-central-de-opera%C3%A7%C3%B5es-da-gcm-integrada-ao-smart-sampa',
  },
  smartCopVideo: 'https://www.youtube-nocookie.com/embed/RFdtalnlLpg?rel=0',
};
