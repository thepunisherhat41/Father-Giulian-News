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

export const localSecurityUpdatedAt = '19 AGO 2026 · 17H';

export const localSecurityTodayStatus = {
  date: '19 AGO 2026',
  status: 'SEM NOVA OCORRÊNCIA CONFIRMADA',
  note: 'Na revisão das 17h foram pesquisadas Itaquera, Artur Alvim, Penha, Vila Matilde, Vila Prudente, Sapopemba, São Mateus, Cidade Tiradentes, Guaianases, Itaim Paulista, São Miguel, Ermelino Matarazzo e Aricanduva/Vila Formosa. Não apareceu publicação criminal nova, suficientemente confirmada e diretamente atribuível à Zona Leste nesta tarde. Notícias anteriores continuam separadas como contexto.',
  nextCheck: 'próxima revisão editorial',
};

export const localSecurityRegions = [
  'Aricanduva / Formosa',
  'Cidade Tiradentes',
  'Ermelino Matarazzo',
  'Guaianases',
  'Itaim Paulista',
  'Itaquera',
  'Penha',
  'São Mateus',
  'São Miguel',
  'Sapopemba',
  'Vila Prudente',
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
    summary: 'A Folha informou em 14 de agosto que a Justiça decretou a prisão de um policial civil investigado por participação na agressão e sequestro de um jovem ocorrido em Artur Alvim na noite de 10 de agosto. A Corregedoria e o Decap investigam o caso, que tramita sob sigilo.',
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
