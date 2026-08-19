import type { RichMediaEntry } from './rich-media';

const commonsFile = (name: string) =>
  `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(name).replace(/%2F/g, '/')}`;

export const dailyRichMedia20260819: RichMediaEntry[] = [
  {
    label: 'Política',
    matches: ['voto em trânsito', 'prazo termina amanhã', 'habilitação para voto em trânsito'],
    tag: 'STORY MEDIA / TSE',
    title: 'Voto em trânsito em imagem oficial da Justiça Eleitoral',
    caption: 'Imagem publicada pelo TSE em conteúdo oficial sobre voto em trânsito. O prazo e as regras devem ser conferidos na fonte eleitoral oficial.',
    images: [
      {
        url: 'https://www.tse.jus.br/imagens/fotos/voto-em-transito-em-15-10-2021-1634301707189/@@images/image-1140-cfce65db0ae305329359fb66f5bffb40.jpeg',
        alt: 'Eleitor utilizando urna eletrônica em imagem oficial relacionada ao voto em trânsito',
        caption: 'Imagem oficial usada pelo TSE em matéria sobre voto em trânsito.',
        credit: 'Tribunal Superior Eleitoral · Justiça Eleitoral',
        sourceUrl: 'https://www.tse.jus.br/comunicacao/noticias/2026/Julho/prazo-para-solicitar-voto-em-transito-comeca-na-proxima-segunda-feira-20',
        kind: 'PHOTO',
      },
    ],
    relatedLabel: 'TSE · perguntas e respostas sobre voto em trânsito 2026',
    relatedHref: 'https://www.tse.jus.br/eleicoes/eleicoes-2026-content/voto-em-transito-perguntas-e-respostas',
  },
  {
    label: 'Planeta',
    matches: ['ressurgência', 'água fria do fundo', 'nutrientes'],
    tag: 'STORY MEDIA / OCEANOGRAFIA',
    title: 'Como a ressurgência leva água profunda para a superfície',
    caption: 'Diagrama de ressurgência costeira mostrando a substituição de água superficial por água profunda, fria e rica em nutrientes.',
    images: [
      {
        url: commonsFile('Upwelling.svg'),
        alt: 'Diagrama explicando o processo de ressurgência oceânica costeira',
        caption: 'Esquema de upwelling/ressurgência costeira.',
        credit: 'Lichtspiel · Wikimedia Commons · domínio público',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Upwelling.svg',
        kind: 'CHART',
      },
    ],
  },
  {
    label: 'Mundo Animal',
    matches: ['bigodes de foca', 'sensores hidrodinâmicos', 'vibrissas'],
    tag: 'STORY MEDIA / VIBRISSAE',
    title: 'A geometria dos bigodes de focas em imagem científica',
    caption: 'A figura compara a superfície de vibrissas de leão-marinho e foca-comum, estrutura estudada por sua resposta a perturbações hidrodinâmicas.',
    images: [
      {
        url: commonsFile('Sea-lion seal vibrissa.png'),
        alt: 'Comparação científica da superfície de vibrissas de leão-marinho e foca-comum',
        caption: 'Estrutura superficial de vibrissas de pinípedes; a foca-comum apresenta geometria ondulada característica.',
        credit: 'Murphy et al. · PLOS ONE · CC BY',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sea-lion_seal_vibrissa.png',
        kind: 'REFERENCE',
      },
    ],
  },
  {
    label: 'Curiosidades',
    matches: ['metal parece mais frio', 'madeira na mesma sala', 'condutividade térmica'],
    tag: 'STORY MEDIA / FÍSICA',
    title: 'Condutividade térmica explica a sensação ao tocar materiais',
    caption: 'O gráfico reúne valores experimentais de condutividade térmica e ajuda a visualizar por que materiais retiram calor da mão em velocidades diferentes.',
    images: [
      {
        url: commonsFile('Thermal conductivity.svg'),
        alt: 'Gráfico comparando valores experimentais de condutividade térmica de materiais',
        caption: 'Valores experimentais de condutividade térmica de diferentes materiais.',
        credit: 'Grzegorz Knor · Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Thermal_conductivity.svg',
        kind: 'CHART',
      },
    ],
  },
  {
    label: 'Mecânica',
    matches: ['correia de acessórios', 'tensor', 'polia', 'desalinhamento'],
    tag: 'STORY MEDIA / MOTOR',
    title: 'Tensor e correia serpentina no conjunto real do motor',
    caption: 'A foto mostra um tensionador instalado e atuando sobre a correia serpentina, diretamente relacionado ao diagnóstico de ruídos discutido na matéria.',
    images: [
      {
        url: commonsFile('Tensioner.jpg'),
        alt: 'Tensor automotivo instalado sobre uma correia serpentina em motor',
        caption: 'Tensionador em posição, mantendo a correia serpentina sob tensão.',
        credit: 'Una Smith · Wikimedia Commons · licença aberta',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tensioner.jpg',
        kind: 'PHOTO',
      },
    ],
  },
  {
    label: 'Náutica',
    matches: ['trim muda consumo', 'trim', 'ângulo de proa'],
    tag: 'STORY MEDIA / TRIM',
    title: 'Trim do motor de popa em referência visual real',
    caption: 'A fotografia mostra um motor de popa ajustado para dentro. É uma referência visual do mecanismo de trim; o ajuste seguro depende de embarcação, carga e condição de navegação.',
    images: [
      {
        url: commonsFile('Trimmed in outboard.JPG'),
        alt: 'Motor de popa ajustado com trim para dentro',
        caption: 'Motor de popa em posição de trim para dentro.',
        credit: 'Dusty.crockett · Wikimedia Commons · domínio público',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Trimmed_in_outboard.JPG',
        kind: 'PHOTO',
      },
    ],
  },
  {
    label: 'Viagens',
    matches: ['Paranapiacaba', 'patrimônio ferroviário', 'neblina'],
    tag: 'STORY MEDIA / PARANAPIACABA',
    title: 'Paranapiacaba vista da passarela',
    caption: 'Fotografia real da vila ferroviária de Paranapiacaba, em Santo André, usada como referência visual do destino da matéria.',
    images: [
      {
        url: commonsFile('Paranapiacaba SP.jpg'),
        alt: 'Vista panorâmica de Paranapiacaba em Santo André, São Paulo',
        caption: 'Paranapiacaba vista do alto da passarela.',
        credit: 'Belle Oliveira · Wikimedia Commons · CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Paranapiacaba_SP.jpg',
        kind: 'PHOTO',
      },
    ],
  },
  {
    label: 'Tecnologia',
    matches: ['data center de IA', 'projeto elétrico', 'potência não é a mesma coisa que energia', 'MW', 'MWh'],
    tag: 'STORY MEDIA / DATA CENTER',
    title: 'Infraestrutura física por trás de capacidade computacional',
    caption: 'Fotografia real de racks em data center para contextualizar a diferença entre potência instantânea disponível e energia consumida ao longo do tempo.',
    images: [
      {
        url: commonsFile('Datacenter Server Racks (22370909788).jpg'),
        alt: 'Fileiras de racks de servidores em um data center',
        caption: 'Racks de servidores em ambiente de data center.',
        credit: 'Carl Lender · Wikimedia Commons · CC BY 2.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Datacenter_Server_Racks_(22370909788).jpg',
        kind: 'PHOTO',
      },
    ],
  },
  {
    label: 'Cyber Security',
    matches: ['Teams virou vetor', 'engenharia social', 'canal interno', 'Microsoft Teams'],
    tag: 'STORY MEDIA / COLLABORATION SECURITY',
    title: 'Microsoft Teams é o canal citado na ameaça',
    caption: 'Ícone atual do Microsoft Teams usado apenas para identificar o produto discutido. A imagem não representa um incidente específico nem comprova comprometimento.',
    images: [
      {
        url: commonsFile('Microsoft Office Teams (2025–present).svg'),
        alt: 'Ícone do Microsoft Teams usado desde 2025',
        caption: 'Microsoft Teams — produto citado no cenário de engenharia social.',
        credit: 'Microsoft · Wikimedia Commons · marca registrada / PD-textlogo',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Microsoft_Office_Teams_(2025%E2%80%93present).svg',
        kind: 'REFERENCE',
      },
    ],
  },
];
