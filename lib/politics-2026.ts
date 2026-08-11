export type PoliticalProfile = {
  name: string;
  party: string;
  office: string;
  ticket?: string;
  status: string;
  trajectory: string[];
  sourceLabel: string;
  sourceUrl: string;
};

export type CivicFact = {
  eyebrow: string;
  title: string;
  text: string;
  sourceLabel?: string;
  sourceUrl?: string;
};

export const politicsTracker = {
  updatedAt: '11/08/2026',
  registrationDeadline: '15/08/2026 às 19h',
  notice:
    'As convenções partidárias terminaram em 5 de agosto, mas o prazo para pedir registro à Justiça Eleitoral termina em 15 de agosto às 19h. Por isso, esta edição mostra nomes já oficializados em convenção ou publicamente confirmados nas fontes acompanhadas; a lista jurídica definitiva deve ser conferida no TSE após o fechamento dos registros.',
};

export const officesInSP2026 = [
  { office: 'Presidente', votes: '1 voto', note: 'chapa inclui vice-presidente' },
  { office: 'Governador de SP', votes: '1 voto', note: 'chapa inclui vice-governador' },
  { office: 'Senado por SP', votes: '2 votos', note: 'duas vagas em disputa em 2026' },
  { office: 'Deputado Federal', votes: '1 voto', note: 'candidaturas são estaduais, não por bairro' },
  { office: 'Deputado Estadual', votes: '1 voto', note: 'candidaturas são estaduais, não por bairro' },
];

export const presidentialProfiles: PoliticalProfile[] = [
  {
    name: 'Luiz Inácio Lula da Silva',
    party: 'PT',
    office: 'Presidência',
    ticket: 'Vice: Geraldo Alckmin (PSB)',
    status: 'Chapa em campanha pela reeleição; situação jurídica deve ser consolidada após o prazo de registro',
    trajectory: [
      'Metalúrgico e dirigente sindical antes de entrar na política partidária.',
      'Presidente da República de 2003 a 2010 e novamente desde 2023.',
      'Disputou eleições presidenciais desde a redemocratização e venceu em 2002, 2006 e 2022.',
    ],
    sourceLabel: 'Reuters · corrida presidencial em 11/08/2026',
    sourceUrl: 'https://www.reuters.com/world/americas/lulas-lead-over-flavio-bolsonaro-narrows-brazil-election-second-round-cntmda-2026-08-11/',
  },
  {
    name: 'Flávio Bolsonaro',
    party: 'PL',
    office: 'Presidência',
    ticket: 'Vice: Alfredo Gaspar (PL)',
    status: 'Candidatura oficializada em convenção do PL',
    trajectory: [
      'Senador pelo Rio de Janeiro no mandato 2019–2027.',
      'Exerceu quatro mandatos como deputado estadual no Rio de Janeiro.',
      'Sua atuação parlamentar teve forte presença em temas de segurança pública e administração penitenciária.',
    ],
    sourceLabel: 'Agência Brasil · PL oficializa candidatura',
    sourceUrl: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-07/pl-oficializa-candidatura-de-flavio-bolsonaro-presidencia',
  },
  {
    name: 'Ronaldo Caiado',
    party: 'PSD',
    office: 'Presidência',
    ticket: 'Vice: Gilberto Kassab (PSD)',
    status: 'Candidatura oficializada em convenção do PSD',
    trajectory: [
      'Médico e produtor rural.',
      'Foi deputado federal por cinco mandatos e senador por Goiás.',
      'Governou Goiás de 2019 até março de 2026, quando deixou o cargo para a disputa nacional.',
    ],
    sourceLabel: 'Agência Brasil · PSD oficializa Caiado',
    sourceUrl: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-07/psd-oficializa-candidatura-de-caiado-presidencia-da-republica',
  },
  {
    name: 'Romeu Zema',
    party: 'NOVO',
    office: 'Presidência',
    ticket: 'Vice: ainda não confirmado na fonte desta edição',
    status: 'Candidatura oficializada em convenção do NOVO',
    trajectory: [
      'Administrador e empresário antes de ingressar na política eleitoral.',
      'Foi eleito governador de Minas Gerais em 2018 e reeleito em 2022.',
      'Deixou o governo mineiro em março de 2026 para disputar a Presidência.',
    ],
    sourceLabel: 'Agência Brasil · NOVO oficializa Zema',
    sourceUrl: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-07/novo-oficializa-candidatura-de-romeu-zema-presidencia-da-republica',
  },
  {
    name: 'Renan Santos',
    party: 'MISSÃO',
    office: 'Presidência',
    status: 'Candidatura oficializada em convenção do partido Missão',
    trajectory: [
      'É uma das lideranças ligadas à formação do Movimento Brasil Livre (MBL).',
      'O partido Missão foi registrado pelo TSE em 2025 e disputa sua primeira eleição nacional em 2026.',
      'A legenda antecipou sua convenção para julho e formalizou o nome para a disputa presidencial.',
    ],
    sourceLabel: 'Agência Brasil · Missão oficializa Renan Santos',
    sourceUrl: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-07/partido-missao-oficializa-renan-santos-como-candidato-presidencia',
  },
  {
    name: 'Samara Martins',
    party: 'UP',
    office: 'Presidência',
    ticket: 'Vice: Raquel Bricio (UP)',
    status: 'Candidatura oficializada em convenção da Unidade Popular',
    trajectory: [
      'Cirurgiã-dentista e trabalhadora do Sistema Único de Saúde.',
      'Atua em movimentos de mulheres, movimento negro e pautas ligadas à moradia.',
      'Em 2022 foi candidata a vice-presidente na chapa da Unidade Popular.',
    ],
    sourceLabel: 'Agência Brasil · UP formaliza candidatura',
    sourceUrl: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-07/unidade-popular-formaliza-candidatura-de-samara-martins-presidente',
  },
];

export const spGovernorProfiles: PoliticalProfile[] = [
  {
    name: 'Tarcísio de Freitas',
    party: 'Republicanos',
    office: 'Governo de São Paulo',
    status: 'Busca a reeleição; alianças estaduais já formalizaram apoio em convenções',
    trajectory: [
      'Engenheiro e servidor público federal.',
      'Foi ministro da Infraestrutura no governo Jair Bolsonaro.',
      'Foi eleito governador de São Paulo em 2022 e permanece no cargo durante a disputa pela reeleição.',
    ],
    sourceLabel: 'TSE · trajetória e eleição de Tarcísio em 2022',
    sourceUrl: 'https://www.tse.jus.br/comunicacao/noticias/2022/Outubro/tarcisio-de-freitas-republicanos-vence-disputa-pelo-governo-de-sao-paulo',
  },
  {
    name: 'Fernando Haddad',
    party: 'PT',
    office: 'Governo de São Paulo',
    ticket: 'Vice: Márcio França (PSB)',
    status: 'Candidatura oficializada em convenção estadual',
    trajectory: [
      'Professor e acadêmico com formação em Direito, Economia e Filosofia.',
      'Foi ministro da Educação entre 2005 e 2012 e prefeito da cidade de São Paulo entre 2013 e 2016.',
      'Foi candidato à Presidência em 2018 e ministro da Fazenda de 2023 a março de 2026.',
    ],
    sourceLabel: 'Convenção estadual · candidatura Haddad / Márcio França',
    sourceUrl: 'https://noticias.uol.com.br/eleicoes/2026/07/25/pt-lanca-haddad-com-criticas-a-privatizacoes-e-alta-de-feminicidios-em-sp.ghtm',
  },
  {
    name: 'Vivian Mendes',
    party: 'UP',
    office: 'Governo de São Paulo',
    status: 'Nome lançado pela Unidade Popular na convenção nacional da legenda',
    trajectory: [
      'É fundadora do Movimento de Mulheres Olga Benário.',
      'Integra a direção estadual da Unidade Popular em São Paulo.',
      'Foi escolhida pelo partido para disputar o Palácio dos Bandeirantes em 2026.',
    ],
    sourceLabel: 'Agência Estado/UOL · UP lança Vivian Mendes em SP',
    sourceUrl: 'https://noticias.uol.com.br/ultimas-noticias/agencia-estado/2026/07/26/unidade-popular-oficializa-candidatura-de-samara-martins-a-presidencia-da-republica.htm',
  },
];

export const spSenateProfiles: PoliticalProfile[] = [
  {
    name: 'Guilherme Derrite',
    party: 'PP',
    office: 'Senado por São Paulo',
    status: 'Candidatura oficializada em convenção da Federação União-PP em SP',
    trajectory: [
      'Policial militar de carreira e deputado federal por São Paulo.',
      'Exerceu o cargo de secretário de Segurança Pública do Estado de São Paulo em períodos do governo Tarcísio.',
      'Na Câmara, atuou em comissões de segurança e foi relator do projeto conhecido como PL Antifacção.',
    ],
    sourceLabel: 'Câmara dos Deputados · biografia parlamentar',
    sourceUrl: 'https://www.camara.leg.br/deputados/204531/biografia',
  },
  {
    name: 'Marina Silva',
    party: 'REDE',
    office: 'Senado por São Paulo',
    status: 'Candidatura oficializada na chapa estadual liderada por Fernando Haddad',
    trajectory: [
      'Historiadora, ambientalista e ex-senadora pelo Acre.',
      'Foi ministra do Meio Ambiente entre 2003 e 2008 e novamente de 2023 a abril de 2026.',
      'Também foi vereadora, deputada estadual e deputada federal, além de ter disputado a Presidência da República.',
    ],
    sourceLabel: 'MMA · galeria de ministros / trajetória pública',
    sourceUrl: 'https://www.gov.br/mma/pt-br/acesso-a-informacao/institucional-quem-e-quem/1-1-estrutura-organizacional-organograma/galeria-de-ministros',
  },
  {
    name: 'Simone Tebet',
    party: 'PSB',
    office: 'Senado por São Paulo',
    status: 'Candidatura oficializada na chapa estadual liderada por Fernando Haddad',
    trajectory: [
      'Advogada e professora de Direito.',
      'Foi prefeita de Três Lagoas, vice-governadora de Mato Grosso do Sul e senadora por aquele estado.',
      'Disputou a Presidência em 2022 e foi ministra do Planejamento e Orçamento de 2023 a março de 2026.',
    ],
    sourceLabel: 'Ministério do Planejamento · balanço da gestão de Simone Tebet',
    sourceUrl: 'https://www.gov.br/planejamento/pt-br/assuntos/noticias/2026/marco/simone-tebet-se-despede-do-ministerio-do-planejamento-e-orcamento-defendendo-um-brasil-democratico-justo-e-inclusivo',
  },
  {
    name: 'André do Prado',
    party: 'PL',
    office: 'Senado por São Paulo',
    status: 'Nome anunciado para a disputa; situação deve ser conferida no registro eleitoral após 15/08',
    trajectory: [
      'Deputado estadual por São Paulo.',
      'Preside a Assembleia Legislativa do Estado de São Paulo desde março de 2023.',
      'Sua atuação recente inclui a condução institucional da Alesp e articulação da bancada estadual.',
    ],
    sourceLabel: 'Alesp · Presidentes da Assembleia',
    sourceUrl: 'https://www.al.sp.gov.br/institucional/assembleia/historia-da-alesp/presidentes-da-assembleia/',
  },
  {
    name: 'Ricardo Salles',
    party: 'NOVO',
    office: 'Senado por São Paulo',
    status: 'Candidatura oficializada em convenção estadual do NOVO',
    trajectory: [
      'Advogado e deputado federal por São Paulo no mandato 2023–2027.',
      'Foi secretário estadual do Meio Ambiente de São Paulo.',
      'Foi ministro do Meio Ambiente entre janeiro de 2019 e junho de 2021.',
    ],
    sourceLabel: 'Convenção do NOVO em SP · candidatura ao Senado',
    sourceUrl: 'https://diarioesp.com.br/sao-paulo/2026/07/20/partido-novo-oficializa-ricardo-salles-ao-senado-e-166-candidatos-em-sp.html',
  },
];

export const civicFacts: CivicFact[] = [
  {
    eyebrow: 'ELEITORADO',
    title: 'São Paulo concentra mais de um quinto do eleitorado brasileiro',
    text: 'O TSE contabilizou 34.104.226 eleitoras e eleitores aptos em São Paulo para 2026, equivalentes a 21,48% do eleitorado do país. Isso torna decisões políticas e campanhas no estado particularmente relevantes para a disputa nacional.',
    sourceLabel: 'TSE · Eleitorado 2026',
    sourceUrl: 'https://www.tse.jus.br/comunicacao/noticias/2026/Julho/mais-de-158-milhoes-de-eleitores-estao-aptos-votar-nas-eleicoes-2026',
  },
  {
    eyebrow: 'ITAQUERA / HISTÓRIA',
    title: '“Itaquera” vem do tupi e significa “pedra dura”',
    text: 'A Prefeitura registra referência ao nome desde 1686. O desenvolvimento da região ganhou força após a inauguração da estação ferroviária local em 6 de novembro de 1875, data celebrada como aniversário de Itaquera.',
    sourceLabel: 'Prefeitura de São Paulo · Histórico de Itaquera',
    sourceUrl: 'https://prefeitura.sp.gov.br/web/itaquera/historico/',
  },
  {
    eyebrow: 'ITAQUERA / ESCALA',
    title: 'A Subprefeitura de Itaquera reúne quatro distritos',
    text: 'Itaquera, Parque do Carmo, José Bonifácio e Cidade Líder formam a região administrada pela Subprefeitura. A Prefeitura informa uma área de aproximadamente 54,3 km² e mais de 530 mil moradores.',
    sourceLabel: 'Prefeitura de São Paulo · Subprefeitura Itaquera',
    sourceUrl: 'https://prefeitura.sp.gov.br/web/itaquera/w/subprefeitura-itaquera-hist%C3%B3ria-desenvolvimento-e-compromisso-com-a-zona-leste',
  },
  {
    eyebrow: 'COMO O VOTO FUNCIONA',
    title: 'Deputados não são eleitos por bairro',
    text: 'Em São Paulo, candidaturas a deputado federal e estadual disputam votos no estado inteiro. Portanto, não existe uma “vaga de deputado de Itaquera”. O bairro pode ser uma base política de candidatos, mas o mandato representa a circunscrição estadual correspondente.',
    sourceLabel: 'TSE · Registro de candidaturas',
    sourceUrl: 'https://www.tse.jus.br/eleicoes/historia/processo-eleitoral-brasileiro/candidaturas/registro-de-candidatos',
  },
  {
    eyebrow: 'DEPUTADOS / PRÓXIMO PASSO',
    title: 'Depois de 15 de agosto, vale usar o DivulgaCand como fonte principal',
    text: 'O sistema do TSE reúne as pessoas que pediram registro à Justiça Eleitoral e dados de contas de campanha. Para deputado federal e estadual, isso permite pesquisar nomes e partidos sem tentar manter uma lista manual de centenas de candidaturas no hub.',
    sourceLabel: 'TSE · DivulgaCandContas',
    sourceUrl: 'https://www.tse.jus.br/administracao/painel/divulgacao-de-candidaturas-e-contas-eleitorais',
  },
];
