export type LocalSecuritySignal = {
  id: string;
  type: 'DADO' | 'AÇÃO' | 'ALERTA' | 'SERVIÇO';
  area: string;
  date: string;
  title: string;
  summary: string;
  whyItMatters: string;
  source: { label: string; url: string };
};

export const localSecurityUpdatedAt = '18 AGO 2026 · 17H';

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
    id: 'capital-junho-2026',
    type: 'DADO',
    area: 'Capital · contexto para ZL',
    date: 'JUN 2026',
    title: 'Roubos de veículos caíram 32,08% na capital em junho; roubos em geral recuaram 12,78%',
    summary: 'A Prefeitura, com base em dados da SSP, informou 504 roubos de veículos em junho de 2026 contra 742 em junho de 2025. Roubos de carga caíram 26,52% e furtos de veículos, 5,95%.',
    whyItMatters: 'É o pano de fundo mais recente consolidado para a cidade. A tendência da capital ajuda a contextualizar a Zona Leste, mas não substitui o recorte por distrito policial ou bairro.',
    source: { label: 'Prefeitura de São Paulo · Segurança Urbana · 04/08/2026', url: 'https://prefeitura.sp.gov.br/web/seguranca_urbana/w/roubos-de-ve%C3%ADculos-apresentam-queda-de-32-no-m%C3%AAs-de-junho-de-2026-em-compara%C3%A7%C3%A3o-com-mesmo-per%C3%ADodo-do-ano-passado' },
  },
  {
    id: 'zl-janeiro-2026',
    type: 'DADO',
    area: 'São Mateus · Cidade Tiradentes · Guaianases · Itaquera',
    date: 'JAN 2026',
    title: 'Parte da Zona Leste abriu 2026 com forte queda em roubos e roubo de veículos',
    summary: 'Segundo balanço divulgado pela Prefeitura com dados da SSP, São Mateus, Cidade Tiradentes e Guaianases tiveram redução conjunta de 42,2% nos roubos em janeiro. A região da Seccional de Itaquera registrou queda superior a 48% nos roubos de veículos.',
    whyItMatters: 'É um recorte regional oficial e ajuda a observar direção de tendência. O dado é de janeiro; não deve ser tratado como retrato instantâneo de agosto.',
    source: { label: 'Prefeitura de São Paulo · 2026', url: 'https://prefeitura.sp.gov.br/web/seguranca_urbana/w/capital-paulista-registra-queda-hist%C3%B3rica-da-criminalidade-em-janeiro' },
  },
  {
    id: 'cop-leste-2026',
    type: 'AÇÃO',
    area: 'Zona Leste',
    date: '10 JUN 2026',
    title: 'Zona Leste ganhou uma central operacional da GCM integrada ao Smart Sampa',
    summary: 'A COP Leste passou a centralizar planejamento e acompanhamento das equipes da GCM, com acesso a aproximadamente 4 mil câmeras na área do Comando Operacional Leste e funcionamento 24/7.',
    whyItMatters: 'A infraestrutura cobre 11 inspetorias regionais e cria um canal único de monitoramento e coordenação operacional para boa parte da Zona Leste.',
    source: { label: 'Prefeitura de São Paulo · Segurança Urbana', url: 'https://prefeitura.sp.gov.br/web/seguranca_urbana/w/zona-leste-ganha-nova-central-de-opera%C3%A7%C3%B5es-da-gcm-integrada-ao-smart-sampa' },
  },
  {
    id: 'smartcop-julho-2026',
    type: 'AÇÃO',
    area: 'Belém / Zona Leste',
    date: '08 JUL 2026',
    title: 'SmartCop foi usado em operação na Zona Leste com apoio aéreo e georreferenciamento',
    summary: 'A Prefeitura informou que o SmartCop auxiliou a GCM em uma ocorrência no Belém usando câmeras térmicas, visão infravermelha, georreferenciamento e transmissão em tempo real.',
    whyItMatters: 'Mostra como a cidade está combinando monitoramento terrestre e aéreo. É uma ocorrência específica, não uma medida de risco do bairro.',
    source: { label: 'Prefeitura de São Paulo · SmartCop', url: 'https://prefeitura.sp.gov.br/w/smartcop-d%C3%A1-localiza%C3%A7%C3%A3o-em-tempo-real-e-impede-fuga-de-traficantes-na-zona-leste' },
  },
  {
    id: 'operacao-veiculos-fev-2026',
    type: 'AÇÃO',
    area: 'Zona Leste',
    date: '27 FEV 2026',
    title: 'PM reforçou operação contra roubos e furtos de veículos e de pessoas na Zona Leste',
    summary: 'A Operação Impacto Força Total mobilizou cerca de 150 policiais e foi direcionada por análise criminal para ampliar presença e prevenção na região.',
    whyItMatters: 'Operações direcionadas podem alterar temporariamente presença policial e resposta em regiões priorizadas, mas não significam risco uniforme em toda a Zona Leste.',
    source: { label: 'Agência SP · Segurança Pública', url: 'https://www.agenciasp.sp.gov.br/operacao-da-pm-contra-roubos-e-furtos-de-veiculos-intensifica-policiamento-na-zona-leste-da-capital/' },
  },
  {
    id: 'delegacia-eletronica',
    type: 'SERVIÇO',
    area: 'Estado de São Paulo',
    date: '24/7',
    title: 'Roubo/furto de veículo, celular, documentos, objetos e fraude podem ser registrados pela Delegacia Eletrônica',
    summary: 'A SSP mantém registro eletrônico 24 horas para várias naturezas, incluindo roubo e furto de veículos, celulares, documentos/objetos e fraude/estelionato.',
    whyItMatters: 'Registrar ocorrência alimenta investigação e também os indicadores oficiais. Crimes graves específicos, como homicídio, latrocínio e extorsão mediante sequestro, exigem atendimento presencial conforme orientação da SSP.',
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
