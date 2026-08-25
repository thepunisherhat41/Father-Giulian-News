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
    id: 'ciencia-hoje-20260825',
    title: 'Ciência',
    subtitle: 'Fenômenos do cotidiano explicados pelo mecanismo real',
    emoji: '🧪',
    accent: 'magenta',
    coverWords: ['ENERGIA', 'ATMOSFERA', 'SOM'],
    description: 'Curiosidade científica inédita na janela móvel dos últimos sete dias.',
    stories: [{
      id: 'raio-aquece-ar-20260825',
      title: 'O relâmpago aquece o ar a temperaturas maiores que a superfície do Sol',
      hook: 'O clarão dura muito pouco, mas o canal elétrico consegue aquecer o ar ao redor para algo próximo de 50 mil °F.',
      explanation: [
        'O raio em si é movimento de cargas; o aquecimento aparece porque o ar oferece resistência à passagem dessa corrente elétrica.',
        'Segundo o National Weather Service, o ar no canal de um relâmpago pode chegar perto de 50.000 °F, aproximadamente cinco vezes a temperatura da superfície do Sol.'
      ],
      connection: 'Esse aquecimento extremamente rápido faz o ar expandir de forma explosiva. A onda de choque resultante é o que ouvimos como trovão.',
      remember: 'O trovão é consequência mecânica da expansão ultrarrápida do ar aquecido pelo relâmpago.',
      shareText: 'Um relâmpago pode aquecer o ar do seu canal a cerca de 50 mil °F. O ar se expande violentamente em uma fração de segundo e essa onda de choque produz o trovão.',
      sourceLabel: 'NOAA/National Weather Service · Lightning Science',
      sourceUrl: 'https://www.weather.gov/safety/lightning-temperature'
    }]
  },
  {
    id: 'psicologia-hoje-20260825',
    title: 'Psicologia',
    subtitle: 'A mente tentando fazer duas tarefas incompatíveis ao mesmo tempo',
    emoji: '🧠',
    accent: 'violet',
    coverWords: ['ATENÇÃO', 'LEITURA', 'CONFLITO'],
    description: 'Curiosidade de psicologia cognitiva inédita na janela móvel dos últimos sete dias.',
    stories: [{
      id: 'stroop-20260825',
      title: 'Uma palavra pode atrapalhar você mesmo quando sua missão é ignorá-la',
      hook: 'Se a palavra “VERDE” aparece escrita em vermelho, dizer a cor da tinta costuma ficar mais lento do que parece que deveria.',
      explanation: [
        'Esse conflito é conhecido como efeito Stroop. Ler é um processo altamente treinado e a informação da palavra compete com a resposta exigida pela tarefa de nomear a cor.',
        'Estudos mostram que a interferência depende também de atenção e do objetivo da tarefa; não é simplesmente uma máquina automática impossível de modular.'
      ],
      connection: 'O experimento virou uma maneira clássica de estudar atenção, controle cognitivo e competição entre processos mentais.',
      remember: 'Ser bom em uma habilidade pode torná-la tão rápida que ela interfere quando você precisa fazer outra coisa.',
      shareText: 'No efeito Stroop, uma palavra de cor escrita em outra cor atrasa a resposta quando você tenta nomear apenas a tinta. O conflito ajuda a revelar como leitura, atenção e controle cognitivo competem.',
      sourceLabel: 'PubMed Central · pesquisa sobre o efeito Stroop',
      sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6600873/'
    }]
  },
  {
    id: 'tecnologia-hoje-20260825',
    title: 'Tecnologia',
    subtitle: 'Quando uma teoria de Einstein vira infraestrutura do seu celular',
    emoji: '🛰️',
    accent: 'blue',
    coverWords: ['GPS', 'RELATIVIDADE', 'TEMPO'],
    description: 'Curiosidade tecnológica inédita na janela móvel dos últimos sete dias.',
    stories: [{
      id: 'gps-relatividade-20260825',
      title: 'O ponto azul do seu celular precisa de correções previstas pela relatividade',
      hook: 'Relógios atômicos em satélites não marcam o tempo exatamente no mesmo ritmo que relógios na Terra.',
      explanation: [
        'Velocidade e gravidade afetam o ritmo dos relógios. No GPS, os efeitos da relatividade especial e geral não se cancelam: juntos fazem os relógios dos satélites tenderem a correr cerca de 38 microssegundos por dia mais rápido que relógios equivalentes na Terra.',
        'O sistema incorpora correções relativísticas para que o tempo transmitido pelos satélites continue útil para posicionamento preciso.'
      ],
      connection: 'Uma diferença de microssegundos parece minúscula, mas localização por satélite depende de medir o tempo de propagação dos sinais com enorme precisão.',
      remember: 'Relatividade não é só cosmologia: ela participa do funcionamento cotidiano do GPS.',
      shareText: 'Relógios dos satélites GPS sofrem efeitos de velocidade e gravidade. Sem correções relativísticas, o sistema acumularia erro rapidamente e o posicionamento deixaria de ser preciso.',
      sourceLabel: 'NIST · GPS e relatividade',
      sourceUrl: 'https://www.nist.gov/atomic-clocks/a-powerful-tool-for-science/putting-einstein-test'
    }]
  }
];

export function applyCurrentCuriosityRotation(collections: CuriosityCollectionLike[]) {
  // A edição de 25/08 usa três conceitos novos que não existiam no catálogo diário
  // dos sete dias anteriores. Em novas datas, a automação editorial deve substituir
  // este conjunto somente depois de comparar o histórico recente do repositório.
  collections.splice(0, collections.length, ...TODAY_STORIES);
}
