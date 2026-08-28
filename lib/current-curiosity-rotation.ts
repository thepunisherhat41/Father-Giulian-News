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
    id: 'ciencia-hoje-20260828',
    title: 'Ciência',
    subtitle: 'A geometria que faz cada observador receber um arco-íris diferente',
    emoji: '🌈',
    accent: 'blue',
    coverWords: ['LUZ', 'GOTAS', 'ÂNGULO'],
    description: 'Conceito novo na janela editorial dos sete dias anteriores.',
    stories: [{
      id: 'arco-iris-observador-20260828',
      title: 'Duas pessoas lado a lado não veem exatamente o mesmo arco-íris',
      hook: 'O arco depende da posição do Sol, das gotas e dos olhos de quem observa; cada pessoa recebe luz de um conjunto diferente de gotas.',
      explanation: [
        'A luz solar entra nas gotas, sofre refração, reflexão interna e nova refração ao sair. As cores chegam ao observador em ângulos específicos.',
        'Como cada observador ocupa uma posição diferente, as gotas que enviam a luz no ângulo correto também são diferentes.'
      ],
      connection: 'É por isso que não existe um “fim do arco-íris” fixo no chão: ao se mover, muda a geometria e outras gotas passam a formar o arco para você.',
      remember: 'O arco-íris é uma geometria entre Sol, gotas e observador, não um objeto parado no céu.',
      shareText: 'Cada pessoa vê um arco-íris formado por um conjunto diferente de gotas, porque a luz precisa chegar aos olhos em ângulos específicos.',
      sourceLabel: 'NOAA SciJinks · How Rainbows Form',
      sourceUrl: 'https://scijinks.gov/rainbow/'
    }]
  },
  {
    id: 'corpo-humano-hoje-20260828',
    title: 'Corpo Humano',
    subtitle: 'Um ponto sem fotorreceptores que o cérebro quase sempre esconde de você',
    emoji: '👁️',
    accent: 'violet',
    coverWords: ['RETINA', 'NERVO', 'VISÃO'],
    description: 'Conceito novo na janela editorial dos sete dias anteriores.',
    stories: [{
      id: 'ponto-cego-20260828',
      title: 'Existe um ponto cego real em cada olho — e você quase nunca percebe',
      hook: 'No local em que o nervo óptico sai da retina não existem cones nem bastonetes, mas o cérebro compensa a informação que falta.',
      explanation: [
        'O disco óptico é a região por onde fibras nervosas deixam o olho. Como ali não há fotorreceptores, existe uma pequena área do campo visual sem detecção direta.',
        'Com os dois olhos abertos, os campos visuais se sobrepõem. Mesmo com um olho, o cérebro usa padrões vizinhos e contexto para preencher perceptualmente a região ausente.'
      ],
      connection: 'Isso mostra que visão não é uma câmera: o cérebro interpreta, compara e completa informação o tempo inteiro.',
      remember: 'Você não percebe o ponto cego porque o sistema visual compensa uma lacuna física real da retina.',
      shareText: 'Cada olho tem um ponto cego onde o nervo óptico atravessa a retina e não há fotorreceptores; o cérebro normalmente completa a informação ausente.',
      sourceLabel: 'Wikimedia Commons · Eye blind spot',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Eye_blind_spot.svg'
    }]
  },
  {
    id: 'tecnologia-hoje-20260828',
    title: 'Tecnologia',
    subtitle: 'Por que o USB-C entra dos dois lados sem depender de sorte',
    emoji: '🔌',
    accent: 'cyan',
    coverWords: ['USB-C', 'PINOS', 'SIMETRIA'],
    description: 'Conceito novo na janela editorial dos sete dias anteriores.',
    stories: [{
      id: 'usb-c-reversivel-20260828',
      title: 'O USB-C é reversível porque o conector foi projetado com contatos espelhados',
      hook: 'Diferente do USB-A antigo, o Type-C distribui contatos de forma simétrica para que a orientação do plugue não determine o lado correto.',
      explanation: [
        'O conector Type-C possui contatos correspondentes em posições espelhadas. A controladora detecta a orientação e negocia funções como energia e dados.',
        'Nem todo cabo USB-C oferece as mesmas velocidades ou potência: o formato físico é comum, mas os recursos suportados variam conforme cabo, porta e protocolo.'
      ],
      connection: 'Isso explica por que dois cabos visualmente iguais podem ter comportamentos bem diferentes em carga, vídeo ou transferência de dados.',
      remember: 'USB-C descreve principalmente o conector; capacidade de energia e velocidade dependem das especificações implementadas.',
      shareText: 'USB-C entra dos dois lados graças ao arranjo simétrico de contatos, mas cabos com o mesmo formato podem suportar velocidades e potências diferentes.',
      sourceLabel: 'USB-IF · USB Type-C',
      sourceUrl: 'https://www.usb.org/usb-charger-pd'
    }]
  }
];

export function applyCurrentCuriosityRotation(collections: CuriosityCollectionLike[]) {
  collections.splice(0, collections.length, ...TODAY_STORIES);
}
