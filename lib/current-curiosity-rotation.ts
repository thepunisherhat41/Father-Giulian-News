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
    id: 'ciencia-hoje-20260827',
    title: 'Ciência',
    subtitle: 'Uma propriedade incomum da água que muda lagos e oceanos',
    emoji: '🧊',
    accent: 'blue',
    coverWords: ['GELO', 'DENSIDADE', 'ÁGUA'],
    description: 'Conceito novo em relação à janela editorial dos sete dias anteriores.',
    stories: [{
      id: 'gelo-flutua-20260827',
      title: 'Por que o gelo flutua se ele também é água?',
      hook: 'Ao congelar, a água organiza suas moléculas numa estrutura mais aberta; o gelo fica menos denso do que a água líquida.',
      explanation: [
        'As ligações de hidrogênio organizam as moléculas de água no gelo em uma rede cristalina que ocupa mais volume para a mesma massa.',
        'Como densidade é massa dividida por volume, esse aumento de volume reduz a densidade do gelo e permite que ele flutue.'
      ],
      connection: 'Se o gelo afundasse, lagos poderiam congelar de baixo para cima com muito mais facilidade; o gelo superficial ajuda a isolar a água abaixo.',
      remember: 'A maioria dos sólidos é mais densa que seu líquido correspondente; a água é uma exceção importante.',
      shareText: 'O gelo flutua porque a estrutura cristalina da água congelada ocupa mais espaço e fica menos densa que a água líquida.',
      sourceLabel: 'USGS · Water Density',
      sourceUrl: 'https://www.usgs.gov/special-topics/water-science-school/science/water-density'
    }]
  },
  {
    id: 'psicologia-hoje-20260827',
    title: 'Psicologia',
    subtitle: 'Quando dois tons idênticos parecem diferentes por causa do contexto',
    emoji: '◻️',
    accent: 'violet',
    coverWords: ['SOMBRA', 'CONTEXTO', 'PERCEPÇÃO'],
    description: 'Conceito visual novo, diferente de Stroop e Müller-Lyer usados nas edições anteriores.',
    stories: [{
      id: 'checker-shadow-20260827',
      title: 'Dois quadrados podem ter exatamente o mesmo tom e ainda parecer diferentes',
      hook: 'Na ilusão checker-shadow, o cérebro compensa sombra e iluminação ao estimar a cor de uma superfície.',
      explanation: [
        'O sistema visual interpreta brilho de forma relativa: ele usa o contexto ao redor, as bordas e a iluminação provável da cena.',
        'Por isso dois pixels ou áreas fisicamente iguais podem ser percebidos como tons diferentes quando estão em contextos diferentes.'
      ],
      connection: 'A mesma lógica ajuda a manter objetos reconhecíveis sob iluminação muito diferente ao longo do dia.',
      remember: 'Percepção de brilho não é leitura direta do valor de cada pixel; o cérebro tenta inferir a superfície por trás da luz.',
      shareText: 'Na ilusão checker-shadow, duas áreas com o mesmo tom parecem diferentes porque o cérebro corrige mentalmente sombra e contexto.',
      sourceLabel: 'Wikimedia Commons · Checker shadow illusion',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Grey_square_optical_illusion_proof2.svg'
    }]
  },
  {
    id: 'tecnologia-hoje-20260827',
    title: 'Tecnologia',
    subtitle: 'Como um QR Code ainda funciona mesmo depois de perder pedaços',
    emoji: '▦',
    accent: 'cyan',
    coverWords: ['QR', 'REDUNDÂNCIA', 'REED-SOLOMON'],
    description: 'Tema novo em relação a GPS/relatividade e fibra óptica das edições anteriores.',
    stories: [{
      id: 'qr-error-correction-20260827',
      title: 'Um QR Code pode continuar funcionando mesmo danificado',
      hook: 'QR Codes usam redundância e códigos de correção de erros para reconstruir parte dos dados perdidos ou ilegíveis.',
      explanation: [
        'O padrão usa correção Reed-Solomon. Parte dos símbolos armazenados funciona como informação redundante capaz de recuperar erros dentro de certos limites.',
        'Existem diferentes níveis de correção: aumentar a tolerância a danos reduz a capacidade disponível para dados.'
      ],
      connection: 'A mesma família de técnicas de correção de erros aparece em armazenamento, transmissão digital e outros sistemas onde bits podem se perder ou corromper.',
      remember: 'O QR Code não “adivinha” o pedaço faltante: ele carrega redundância matemática planejada desde a geração.',
      shareText: 'QR Codes sobrevivem a certos danos porque carregam códigos Reed-Solomon de correção de erros e dados redundantes.',
      sourceLabel: 'Wikimedia Commons · QR Code Damaged',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:QR_Code_Damaged.jpg'
    }]
  }
];

export function applyCurrentCuriosityRotation(collections: CuriosityCollectionLike[]) {
  collections.splice(0, collections.length, ...TODAY_STORIES);
}
