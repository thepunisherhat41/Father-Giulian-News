type CuriosityCollectionLike = {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  accent: string;
  coverWords: string[];
  description: string;
  stories: any[];
};

const TODAY_STORIES: CuriosityCollectionLike[] = [
  {
    id: 'ciencia-hoje-20260826',
    title: 'Ciência',
    subtitle: 'Forças invisíveis que aparecem em uma gota d’água',
    emoji: '💧',
    accent: 'blue',
    coverWords: ['ÁGUA', 'SUPERFÍCIE', 'COESÃO'],
    description: 'Conceito novo em relação à janela editorial dos sete dias anteriores.',
    stories: [{
      id: 'tensao-superficial-20260826',
      title: 'Por que uma gota de água tenta ficar redonda?',
      hook: 'Na superfície, as moléculas de água sentem uma atração resultante para dentro; a gota tende a reduzir sua área superficial.',
      explanation: [
        'Moléculas no interior do líquido são atraídas em várias direções. Na superfície, essa distribuição é assimétrica e produz o efeito macroscópico conhecido como tensão superficial.',
        'Para um mesmo volume, a esfera é a forma com menor área superficial. Por isso gotas pequenas, quando gravidade e contato com outras superfícies não dominam, tendem a formas arredondadas.'
      ],
      connection: 'O mesmo fenômeno ajuda a explicar insetos que se apoiam na superfície da água e gotas que permanecem sobre materiais hidrofóbicos.',
      remember: 'A gota não tem uma “pele”: a forma vem das forças intermoleculares e da minimização da energia da superfície.',
      shareText: 'Uma gota tende a ficar redonda porque a tensão superficial faz o líquido buscar a menor área possível para aquele volume.',
      sourceLabel: 'USGS · Surface Tension and Water',
      sourceUrl: 'https://www.usgs.gov/special-topics/water-science-school/science/surface-tension-and-water'
    }]
  },
  {
    id: 'psicologia-hoje-20260826',
    title: 'Psicologia',
    subtitle: 'Quando o cérebro mede linhas iguais como se fossem diferentes',
    emoji: '👁️',
    accent: 'violet',
    coverWords: ['VISÃO', 'CONTEXTO', 'ILUSÃO'],
    description: 'Conceito visual e cognitivo diferente do efeito Stroop usado em 25/08.',
    stories: [{
      id: 'muller-lyer-20260826',
      title: 'Duas linhas podem ter o mesmo tamanho e ainda parecer diferentes',
      hook: 'Na ilusão de Müller-Lyer, pequenas “setas” nas extremidades alteram a percepção do comprimento mesmo quando as linhas centrais são iguais.',
      explanation: [
        'A percepção visual não mede cada trecho como uma régua independente: o cérebro interpreta relações, contornos e contexto espacial.',
        'A força da ilusão varia entre pessoas e condições, mas ela mostra de forma simples que perceber é interpretar, não apenas registrar pixels.'
      ],
      connection: 'Ilusões geométricas ajudam pesquisadores a estudar como contexto e pistas visuais influenciam julgamentos aparentemente básicos.',
      remember: 'Ver duas linhas como diferentes não significa que seus olhos falharam; significa que o sistema visual está usando contexto para inferir tamanho.',
      shareText: 'Na ilusão de Müller-Lyer, linhas do mesmo comprimento parecem diferentes por causa das formas nas extremidades.',
      sourceLabel: 'Wikimedia Commons · Müller-Lyer illusion',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:M%C3%BCller-Lyer_illusion.svg'
    }]
  },
  {
    id: 'tecnologia-hoje-20260826',
    title: 'Tecnologia',
    subtitle: 'Como a internet consegue guiar luz dentro de um fio',
    emoji: '🌐',
    accent: 'cyan',
    coverWords: ['FIBRA', 'LUZ', 'REFLEXÃO'],
    description: 'Tema novo em relação a GPS/relatividade da edição anterior.',
    stories: [{
      id: 'fibra-optica-reflexao-20260826',
      title: 'A fibra óptica consegue “prender” luz e fazê-la contornar curvas',
      hook: 'O sinal viaja pelo núcleo da fibra e é mantido ali por reflexão interna total na interface com o revestimento.',
      explanation: [
        'O núcleo e o revestimento têm índices de refração diferentes. Acima de determinado ângulo, a luz que tenta sair do núcleo é refletida de volta para dentro.',
        'Isso permite transportar pulsos de luz por grandes distâncias com baixa perda e alta largura de banda, embora curvas excessivas, conexões e impurezas ainda introduzam atenuação.'
      ],
      connection: 'É uma aplicação direta de óptica básica em uma infraestrutura que carrega enorme parte do tráfego de internet do mundo.',
      remember: 'A luz não faz uma curva livremente: a geometria e os materiais da fibra mantêm o sinal confinado.',
      shareText: 'Fibra óptica guia luz usando reflexão interna total entre o núcleo e o revestimento, permitindo transportar dados com alta capacidade.',
      sourceLabel: 'RP Photonics · Total Internal Reflection',
      sourceUrl: 'https://www.rp-photonics.com/total_internal_reflection.html'
    }]
  }
];

export function applyCurrentCuriosityRotation(collections: CuriosityCollectionLike[]) {
  collections.splice(0, collections.length, ...TODAY_STORIES);
}
