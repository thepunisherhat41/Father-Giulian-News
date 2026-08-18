export type RichMediaImage = {
  url: string;
  alt: string;
  caption: string;
  credit: string;
  sourceUrl: string;
  kind?: 'PHOTO' | 'CHART' | 'SCREENSHOT' | 'MEDICAL' | 'REFERENCE';
};

export type RichMediaEntry = {
  label: string;
  matches: string[];
  tag: string;
  title: string;
  caption: string;
  images: RichMediaImage[];
  relatedLabel?: string;
  relatedHref?: string;
  youtubeId?: string;
};

const commonsFile = (name: string) =>
  `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(name).replace(/%2F/g, '/')}`;

export const richMediaByStory: RichMediaEntry[] = [
  {
    label: 'Brasil',
    matches: ['BC PROTEGE+', 'BC Protege+'],
    tag: 'STORY MEDIA / SERVIÇO REAL',
    title: 'BC PROTEGE+ na prática',
    caption: 'A imagem mostra a interface real do serviço BC PROTEGE+ no ecossistema Meu BC. A referência normativa e operacional continua sendo o Banco Central.',
    images: [
      {
        url: 'https://images.squarespace-cdn.com/content/v1/631bf9f0f996ed256738e0e0/ed22e2c0-9c24-46aa-9ec7-455e175b501c/bcbprotege.png',
        alt: 'Captura de tela do serviço BC PROTEGE+',
        caption: 'Interface do BC PROTEGE+ — reprodução de tela do serviço.',
        credit: 'Interface: Banco Central / reprodução de captura publicada na web',
        sourceUrl: 'https://www.bcb.gov.br/meubc/faqs/s/bc-protege',
        kind: 'SCREENSHOT',
      },
    ],
    relatedLabel: 'Banco Central · FAQ oficial do BC PROTEGE+',
    relatedHref: 'https://www.bcb.gov.br/meubc/faqs/s/bc-protege',
  },
  {
    label: 'Política',
    matches: ['FEFC 2026', 'fotografia nacional de candidaturas', 'fotografia das candidaturas'],
    tag: 'STORY MEDIA / TSE',
    title: 'O dinheiro do FEFC em uma tabela oficial',
    caption: 'Em vez de uma ilustração genérica, a matéria mostra a própria tabela publicada pelo TSE com a distribuição do Fundo Especial de Financiamento de Campanha de 2026.',
    images: [
      {
        url: 'https://www.tse.jus.br/imagens/fotos/tse-divulga-distribuicao-do-fundo-especial-de-campanha-para-as-eleicoes-2026-03-06.2026/%40%40images/image-600-7d83ed0709573730b27481d12cfd81ff.jpeg',
        alt: 'Tabela oficial do TSE com distribuição do FEFC 2026 por partido',
        caption: 'Distribuição do FEFC 2026 por partido, conforme publicação do TSE.',
        credit: 'Tribunal Superior Eleitoral · Secom/TSE',
        sourceUrl: 'https://www.tse.jus.br/comunicacao/noticias/2026/Junho/tse-divulga-distribuicao-do-fundo-especial-de-financiamento-de-campanha-para-as-eleicoes-2026',
        kind: 'CHART',
      },
    ],
    relatedLabel: 'TSE · publicação oficial do FEFC 2026',
    relatedHref: 'https://www.tse.jus.br/comunicacao/noticias/2026/Junho/tse-divulga-distribuicao-do-fundo-especial-de-financiamento-de-campanha-para-as-eleicoes-2026',
  },
  {
    label: 'Mundo',
    matches: ['Hormuz', 'Ormuz', 'petróleo, títulos e ações'],
    tag: 'STORY MEDIA / HORMUZ 2026',
    title: 'O gargalo que o mercado está precificando',
    caption: 'O gráfico é baseado em dados de tráfego marítimo do IMF PortWatch durante a crise de 2026; a imagem geográfica mostra onde está o estreito.',
    images: [
      {
        url: commonsFile('Strait of Hormuz Transits.webp'),
        alt: 'Gráfico de trânsitos no Estreito de Hormuz em 2026',
        caption: 'Trânsitos no Estreito de Hormuz durante a crise de 2026, com dados do IMF PortWatch.',
        credit: 'Wikideas1 · dados IMF PortWatch · CC0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Strait_of_Hormuz_Transits.webp',
        kind: 'CHART',
      },
    ],
    relatedLabel: 'NASA · imagem e contexto geográfico do Estreito de Hormuz',
    relatedHref: 'https://modis.gsfc.nasa.gov/gallery/individual.php?db_date=2020-12-04',
  },
  {
    label: 'Planeta',
    matches: ['bússola', 'norte geográfico', 'declinação magnética'],
    tag: 'STORY MEDIA / NAVEGAÇÃO',
    title: 'Uma bússola real para falar de norte magnético',
    caption: 'A fotografia substitui o HUD abstrato e ajuda a visualizar o instrumento que materializa a diferença entre rumo magnético e norte geográfico.',
    images: [
      {
        url: commonsFile('64-point compass.jpg'),
        alt: 'Fotografia de uma rosa de bússola de 64 pontos',
        caption: 'Rosa de bússola usada como referência visual para orientação e rumos.',
        credit: 'John Maynard Friedman · Wikimedia Commons · CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:64-point_compass.jpg',
        kind: 'PHOTO',
      },
    ],
  },
  {
    label: 'Mundo Animal',
    matches: ['Pombos', 'pombos-correio', 'compasso magnético'],
    tag: 'STORY MEDIA / HOMING PIGEON',
    title: 'O animal da matéria, sem ilustração genérica',
    caption: 'A foto mostra um pombo-correio real, a espécie domesticada usada nos estudos e na história de navegação que contextualizam o tema.',
    images: [
      {
        url: commonsFile('Homing pigeon.jpg'),
        alt: 'Fotografia de um pombo-correio',
        caption: 'Pombo-correio em fotografia de referência.',
        credit: 'Andreas Trepte · www.avi-fauna.info · CC BY-SA 2.5',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Homing_pigeon.jpg',
        kind: 'PHOTO',
      },
    ],
  },
  {
    label: 'Tempo e Clima',
    matches: ['São Paulo entra em terça', 'calor crescente', 'ar seco'],
    tag: 'STORY MEDIA / SÃO PAULO',
    title: 'São Paulo no contexto da pauta de calor e ar seco',
    caption: 'Foto real da cidade usada apenas como contexto visual. Ela não é uma fotografia meteorológica em tempo real nem comprova, sozinha, a condição do dia.',
    images: [
      {
        url: commonsFile('São Paulo Skyline.jpg'),
        alt: 'Vista do skyline da cidade de São Paulo',
        caption: 'São Paulo — imagem de contexto urbano para a pauta meteorológica.',
        credit: 'Justin Thiele · Wikimedia Commons · CC BY 3.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:São_Paulo_Skyline.jpg',
        kind: 'PHOTO',
      },
    ],
  },
  {
    label: 'Curiosidades',
    matches: ['espelho não troca', 'espelho', 'frente e trás'],
    tag: 'STORY MEDIA / ÓPTICA',
    title: 'Reflexo real para uma pergunta sobre espelhos',
    caption: 'A fotografia permite observar diretamente a relação entre objeto, plano do espelho e imagem refletida discutida na curiosidade de hoje.',
    images: [
      {
        url: commonsFile('A Mirror Reflection.jpg'),
        alt: 'Fotografia de uma reflexão em espelho',
        caption: 'Reflexão em um espelho plano.',
        credit: 'CharMel Creations · Wikimedia Commons · CC BY 4.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:A_Mirror_Reflection.jpg',
        kind: 'PHOTO',
      },
    ],
  },
  {
    label: 'Gravidez',
    matches: ['6 semanas + 2 dias', '6 semanas', 'Semana 6'],
    tag: 'STORY MEDIA / REFERÊNCIA MÉDICA',
    title: 'Ultrassom de referência de 6 semanas',
    caption: 'É uma imagem real de referência de uma gestação em torno de 6 semanas. Não é o ultrassom desta gestação e não deve ser usada para comparar tamanho, viabilidade ou achados individuais.',
    images: [
      {
        url: commonsFile('Embryo at 6 weeks.JPG'),
        alt: 'Imagem real de ultrassom de referência de uma gestação em torno de 6 semanas',
        caption: 'Ultrassom de referência de aproximadamente 6 semanas; cada exame deve ser interpretado pelo obstetra.',
        credit: 'X. Compagnion · Wikimedia Commons · domínio público / licenças abertas',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Embryo_at_6_weeks.JPG',
        kind: 'MEDICAL',
      },
    ],
  },
  {
    label: 'Ser Pai',
    matches: ['assuma uma tarefa fixa', 'responsabilidade doméstica', 'ownership completo'],
    tag: 'STORY MEDIA / PRESENÇA',
    title: 'Apoio é comportamento, não só intenção',
    caption: 'Foto documental de um casal durante a gestação. É imagem de contexto e não representa a fase gestacional atual.',
    images: [
      {
        url: commonsFile('Pregnancy.jpg'),
        alt: 'Casal durante a gestação',
        caption: 'Casal durante a gestação — imagem de contexto para a pauta sobre presença e divisão de responsabilidades.',
        credit: 'Soul Flora · Wikimedia Commons · CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pregnancy.jpg',
        kind: 'PHOTO',
      },
    ],
  },
  {
    label: 'Carros',
    matches: ['Cruze, Sentra, 2008 e Fiesta', 'Cruze', 'Sentra'],
    tag: 'STORY MEDIA / GARAGE RADAR',
    title: 'Os carros do radar em imagens reais',
    caption: 'A galeria usa fotografias reais de modelos/gerações correspondentes como referência visual. Acabamento e especificação podem variar em relação às versões brasileiras avaliadas.',
    images: [
      {
        url: commonsFile("'16-'18 Chevrolet Cruze Sedan.jpg"),
        alt: 'Chevrolet Cruze Sedan da geração 2016 a 2018',
        caption: 'Chevrolet Cruze Sedan — referência visual da geração.',
        credit: 'Wikimedia Commons · licença indicada no arquivo',
        sourceUrl: "https://commons.wikimedia.org/wiki/File:'16-'18_Chevrolet_Cruze_Sedan.jpg",
        kind: 'PHOTO',
      },
      {
        url: commonsFile('2018 Nissan Sentra (facelift), front 7.7,19.jpg'),
        alt: 'Nissan Sentra 2018 facelift',
        caption: 'Nissan Sentra 2018 — referência visual da geração.',
        credit: 'Kevauto · Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:2018_Nissan_Sentra_(facelift),_front_7.7,19.jpg',
        kind: 'PHOTO',
      },
      {
        url: commonsFile('Peugeot 2008 Allure 2018 (44491428482).jpg'),
        alt: 'Peugeot 2008 Allure 2018',
        caption: 'Peugeot 2008 Allure 2018 — referência visual.',
        credit: 'Wikimedia Commons · licença indicada no arquivo',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Peugeot_2008_Allure_2018_(44491428482).jpg',
        kind: 'PHOTO',
      },
      {
        url: commonsFile('2018 Ford Fiesta SE hatchback in Blue, front right.jpg'),
        alt: 'Ford Fiesta SE hatchback 2018',
        caption: 'Ford Fiesta hatch 2018 — referência visual da geração.',
        credit: 'Mr.choppers · Wikimedia Commons · CC BY-SA',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:2018_Ford_Fiesta_SE_hatchback_in_Blue,_front_right.jpg',
        kind: 'PHOTO',
      },
    ],
  },
  {
    label: 'Motos',
    matches: ['Twister, Himalayan, G 310 R e NC 750X', 'Himalayan', 'G 310 R'],
    tag: 'STORY MEDIA / MOTO RADAR',
    title: 'As motos do radar em fotografias reais',
    caption: 'A galeria mostra modelos do radar em imagens reais de referência. Ano, mercado e acabamento podem variar; a ficha de compra continua sendo a fonte para a versão analisada.',
    images: [
      {
        url: commonsFile('Royal Enfield Himalayan.jpg'),
        alt: 'Royal Enfield Himalayan 411',
        caption: 'Royal Enfield Himalayan 411.',
        credit: 'Tritinum · Wikimedia Commons · CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Royal_Enfield_Himalayan.jpg',
        kind: 'PHOTO',
      },
      {
        url: commonsFile('BMW G 310 R.jpg'),
        alt: 'BMW G 310 R',
        caption: 'BMW G 310 R.',
        credit: 'Erluw · Wikimedia Commons · CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:BMW_G_310_R.jpg',
        kind: 'PHOTO',
      },
      {
        url: commonsFile('Honda NC750X front-left 2016 Auto China.jpg'),
        alt: 'Honda NC750X 2016',
        caption: 'Honda NC750X apresentada em 2016 — referência visual.',
        credit: 'Morio · Wikimedia Commons · CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Honda_NC750X_front-left_2016_Auto_China.jpg',
        kind: 'PHOTO',
      },
    ],
  },
  {
    label: 'Mecânica',
    matches: ['Rolamento de roda ou pneu', 'rolamento de roda', 'pneu serrilhado'],
    tag: 'STORY MEDIA / OFICINA',
    title: 'Rolamento de roda sendo removido de verdade',
    caption: 'A fotografia mostra manutenção real de rolamento de roda e substitui o desenho genérico de diagnóstico.',
    images: [
      {
        url: commonsFile('66th Transportation Vehicle Maintenance 140424-A-CU869-007.jpg'),
        alt: 'Mecânica removendo um rolamento de roda durante manutenção',
        caption: 'Remoção de rolamento de roda durante manutenção de veículo.',
        credit: 'Carl Burnett / U.S. Army · domínio público nos EUA',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:66th_Transportation_Vehicle_Maintenance_140424-A-CU869-007.jpg',
        kind: 'PHOTO',
      },
    ],
  },
  {
    label: 'Náutica',
    matches: ['Ânodo de sacrifício', 'ânodo de sacrifício', 'corrosão galvânica'],
    tag: 'STORY MEDIA / CASCO',
    title: 'O componente da pauta instalado em um casco real',
    caption: 'A imagem mostra um ânodo de sacrifício instalado no casco de uma embarcação, exatamente o componente discutido na matéria.',
    images: [
      {
        url: commonsFile('Sacrificial anode.jpg'),
        alt: 'Ânodo de sacrifício instalado no casco de um navio',
        caption: 'Ânodo de sacrifício instalado no casco de uma embarcação.',
        credit: 'Zwergelstern · Wikimedia Commons · CC BY-SA 3.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sacrificial_anode.jpg',
        kind: 'PHOTO',
      },
    ],
  },
  {
    label: 'Viagens',
    matches: ['Expoflora 2026', 'Holambra'],
    tag: 'STORY MEDIA / EXPOFLORA',
    title: 'A própria Expoflora como imagem da matéria',
    caption: 'A imagem vem da sala de imprensa oficial da Expoflora 2026, em vez de uma ilustração genérica de viagem.',
    images: [
      {
        url: 'https://expoflora.com.br/public/blog/16/16-expoflora-2026-resgata-tradicao-e-origens-em-uma-homenagem-a-sua-historia_g.jpg',
        alt: 'Imagem oficial de divulgação da Expoflora 2026 em Holambra',
        caption: 'Imagem de divulgação da 43ª Expoflora 2026.',
        credit: 'Expoflora · Sala de Imprensa 2026',
        sourceUrl: 'https://expoflora.com.br/saladeimprensa/noticia/16-expoflora-2026-resgata-tradicao-e-origens-em-uma-homenagem-a-sua-historia',
        kind: 'PHOTO',
      },
    ],
    relatedLabel: 'Expoflora · Sala de Imprensa 2026',
    relatedHref: 'https://expoflora.com.br/saladeimprensa/noticia/16-expoflora-2026-resgata-tradicao-e-origens-em-uma-homenagem-a-sua-historia',
  },
  {
    label: 'Finanças',
    matches: ['Treasury de 30 anos', 'Fed menos hawkish', 'juro longo'],
    tag: 'STORY MEDIA / DADOS',
    title: 'A curva deixa de ser abstrata',
    caption: 'O gráfico é gerado pelo FRED/Federal Reserve Bank of St. Louis para a série DGS30 e mostra a taxa do Treasury americano de 30 anos.',
    images: [
      {
        url: 'https://fred.stlouisfed.org/graph/fredgraph.png?id=DGS30',
        alt: 'Gráfico FRED da taxa do Treasury dos Estados Unidos de 30 anos',
        caption: 'Market Yield on U.S. Treasury Securities at 30-Year Constant Maturity (DGS30).',
        credit: 'Federal Reserve Bank of St. Louis · FRED',
        sourceUrl: 'https://fred.stlouisfed.org/series/DGS30',
        kind: 'CHART',
      },
    ],
  },
  {
    label: 'Tecnologia',
    matches: ['Nvidia oferece até US$ 105 bilhões', 'Nvidia', 'SB Energy', 'project finance'],
    tag: 'STORY MEDIA / AI INFRASTRUCTURE',
    title: 'O terreno por trás da corrida de IA',
    caption: 'Foto real da cerimônia de início do projeto da SB Energy no Portsmouth Site. Ela contextualiza a infraestrutura física citada na matéria; não implica que a Nvidia esteja retratada na foto.',
    images: [
      {
        url: 'https://www.energy.gov/sites/default/files/styles/full_article_width/public/2026-03/Portsmouth%20Site_SB%20Energy_Groundbreaking_2026_3_24.jpg?itok=yWnWp16e',
        alt: 'Cerimônia de início do projeto de data center de IA da SB Energy no Portsmouth Site, Ohio',
        caption: 'Groundbreaking do projeto da SB Energy no Portsmouth Site, em março de 2026.',
        credit: 'U.S. Department of Energy · Office of Environmental Management',
        sourceUrl: 'https://www.energy.gov/em/articles/partnership-ensures-affordable-energy-powers-ai-future-portsmouth-site',
        kind: 'PHOTO',
      },
    ],
    relatedLabel: 'U.S. DOE · Portsmouth Site / SB Energy',
    relatedHref: 'https://www.energy.gov/em/articles/partnership-ensures-affordable-energy-powers-ai-future-portsmouth-site',
  },
  {
    label: 'Cyber Security',
    matches: ['The Gentlemen', 'Gentlemen ransomware'],
    tag: 'STORY MEDIA / MICROSOFT THREAT INTELLIGENCE',
    title: 'A imagem da própria pesquisa sobre The Gentlemen',
    caption: 'A matéria passa a usar a imagem editorial publicada pela Microsoft Threat Intelligence no relatório técnico sobre o ransomware, em vez de um cadeado HUD genérico.',
    images: [
      {
        url: 'https://www.microsoft.com/en-us/security/blog/wp-content/uploads/2026/05/Gentlemen-ransomware-featured.webp',
        alt: 'Imagem editorial da Microsoft para a pesquisa sobre o ransomware The Gentlemen',
        caption: 'Imagem de abertura da análise técnica “The Gentlemen ransomware”.',
        credit: 'Microsoft Threat Intelligence / Microsoft Security Blog',
        sourceUrl: 'https://www.microsoft.com/en-us/security/blog/2026/05/28/the-gentlemen-ransomware-dissecting-a-self-propagating-go-encryptor/',
        kind: 'PHOTO',
      },
    ],
    relatedLabel: 'Microsoft Threat Intelligence · pesquisa completa',
    relatedHref: 'https://www.microsoft.com/en-us/security/blog/2026/05/28/the-gentlemen-ransomware-dissecting-a-self-propagating-go-encryptor/',
  },
];

export function findRichMediaForStory(label: string, storyTitle: string) {
  const normalizedTitle = storyTitle.toLocaleLowerCase('pt-BR');
  return richMediaByStory.find((entry) =>
    entry.label === label && entry.matches.some((match) => normalizedTitle.includes(match.toLocaleLowerCase('pt-BR'))),
  );
}
