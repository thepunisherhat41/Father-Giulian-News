import type { EditorialDossier } from './editorial-dossier-types';

export const editorialKnowledge: Record<string, EditorialDossier> = {
  planeta: {
    readingTime: '8 MIN DE LEITURA',
    title: 'A Terra não é uma bola perfeita — e isso muda como medimos o planeta',
    deck: 'Rotação, gravidade, oceanos, relevo e distribuição de massa tornam a forma da Terra muito mais interessante que a imagem simples de uma esfera.',
    opening: [
      'Se você pudesse retirar oceanos, florestas e cidades e observar apenas a geometria da Terra, ainda assim não encontraria uma esfera perfeita. A rotação faz o planeta ficar ligeiramente mais largo no equador e achatado nos polos. Mas essa ainda é só a primeira aproximação.',
      'Quando geodesistas precisam medir altitude, posicionamento ou o comportamento da gravidade, entram em cena modelos mais sofisticados. O geoide, por exemplo, representa uma superfície de mesmo potencial gravitacional que se aproxima do nível médio do mar. Ele ondula porque a distribuição de massa dentro do planeta não é uniforme.',
    ],
    sections: [
      {
        kicker: 'FORMA',
        title: 'Esfera, elipsoide e geoide não são sinônimos',
        paragraphs: [
          'A esfera é uma simplificação útil. O elipsoide representa melhor o achatamento polar e serve como referência geométrica para sistemas de posicionamento. Já o geoide tenta representar como a gravidade organiza uma superfície de referência física.',
          'Isso explica por que “altura medida por GPS” e “altura em relação ao nível médio do mar” não são exatamente a mesma coisa. Um receptor GNSS trabalha com um modelo geométrico; para obter altitude ortométrica, é necessário aplicar um modelo do geoide.',
        ],
      },
      {
        kicker: 'PLANETA VIVO',
        title: 'A forma da Terra muda — lentamente, mas muda',
        paragraphs: [
          'Tectônica desloca placas, vulcões acumulam material, grandes geleiras transferem massa quando derretem e terremotos reorganizam pequenas porções da crosta. Nenhuma dessas mudanças transforma o planeta de um dia para o outro, mas elas mostram que a Terra não é um objeto estático.',
          'Até grandes variações de água continental e gelo conseguem ser detectadas por missões de gravidade. Quando muita massa muda de lugar, a assinatura gravitacional do planeta muda junto.',
        ],
      },
      {
        kicker: 'CONEXÃO',
        title: 'Por que isso importa para mapas, obras e navegação',
        paragraphs: [
          'Definir uma referência de altitude parece detalhe até você projetar uma ponte, uma barragem, um sistema de drenagem ou uma carta náutica. Pequenas diferenças de referência podem virar grandes problemas em projetos extensos.',
          'É por isso que geodésia, satélites e modelos gravitacionais são infraestrutura invisível da vida moderna. Eles sustentam posicionamento, topografia, monitoramento costeiro e dezenas de aplicações que parecem “apenas GPS”.',
        ],
      },
    ],
    callout: {
      label: 'PARA MEMORIZAR',
      title: 'A Terra tem uma forma geométrica e uma forma gravitacional',
      text: 'O elipsoide simplifica a geometria; o geoide ajuda a representar a referência física ligada à gravidade.',
    },
    takeaways: [
      'A rotação deixa a Terra mais larga no equador do que nos polos.',
      'Geoide e elipsoide servem a propósitos diferentes em geodésia.',
      'Movimentos de massa no planeta podem alterar medições de gravidade ao longo do tempo.',
    ],
  },

  animais: {
    readingTime: '8 MIN DE LEITURA',
    title: 'Dormir no oceano é um problema de engenharia biológica',
    deck: 'Para baleias e golfinhos, dormir não é apenas descansar: é continuar respirando, nadando, regulando temperatura e evitando perigo sem desligar por completo.',
    opening: [
      'Nós podemos dormir profundamente porque a respiração continua automaticamente. Cetáceos vivem com outra restrição: precisam subir à superfície e coordenar a respiração em um ambiente onde perder consciência completamente seria perigoso.',
      'A solução evolutiva é fascinante porque não imita o nosso sono. Em várias espécies, um hemisfério cerebral pode apresentar sono de ondas lentas enquanto o outro permanece mais ativo. Isso permite manter comportamentos essenciais durante o descanso.',
    ],
    sections: [
      {
        kicker: 'MECANISMO',
        title: 'Sono uni-hemisférico não significa “metade acordado” de forma simples',
        paragraphs: [
          'O cérebro não funciona como dois computadores independentes, mas há uma assimetria real na atividade durante certos períodos de descanso. Um lado entra em estado mais profundo enquanto o outro mantém níveis de vigilância maiores.',
          'Isso ajuda a coordenar movimentos e a necessidade de chegar à superfície. Em algumas observações, cetáceos descansam nadando lentamente; em outras, permanecem quase imóveis por períodos curtos. O comportamento varia entre espécies e contexto.',
        ],
      },
      {
        kicker: 'EVOLUÇÃO',
        title: 'Toda adaptação resolve um problema e cria um custo',
        paragraphs: [
          'Dormir dessa forma parece “superpoder”, mas também impõe limites. Um animal que não pode simplesmente desligar todos os sistemas precisa distribuir o descanso de outra maneira. A evolução não busca perfeição; seleciona soluções suficientemente boas para um ambiente específico.',
          'Essa ideia ajuda a entender inteligência e comportamento animal sem comparar tudo com humanos. Uma habilidade é impressionante porque resolve um problema daquele nicho, não porque se parece com algo que nós fazemos.',
        ],
      },
      {
        kicker: 'OUTRA CONEXÃO',
        title: 'Aves migratórias também mostram que sono é flexível',
        paragraphs: [
          'O sono uni-hemisférico não é exclusivo de cetáceos. Algumas aves também demonstram formas de descanso assimétrico, especialmente em contextos onde vigilância ou deslocamento contínuo importam.',
          'Isso revela uma ideia maior: sono é um conjunto de estados biológicos moldados por ecologia, risco, metabolismo e necessidade de movimento. O “modelo humano” é apenas uma das soluções possíveis.',
        ],
      },
    ],
    callout: {
      label: 'IDEIA BONITA DA BIOLOGIA',
      title: 'A natureza não resolve o mesmo problema do mesmo jeito',
      text: 'Respirar, dormir e permanecer seguro são necessidades universais; a solução depende do ambiente e da história evolutiva de cada espécie.',
    },
    takeaways: [
      'Cetáceos precisam coordenar descanso com respiração e vida aquática.',
      'Sono uni-hemisférico é uma adaptação, não uma versão “melhor” do sono humano.',
      'Comportamentos animais fazem mais sentido quando vistos como solução para restrições ecológicas.',
    ],
  },

  curiosidades: {
    readingTime: '7 MIN DE LEITURA',
    title: 'Curiosidade boa não é trivia: é uma nova lente para olhar o cotidiano',
    deck: 'O fato surpreendente chama atenção; o mecanismo, a origem e a conexão inesperada são o que fazem ele ficar na memória.',
    opening: [
      'Existe uma diferença enorme entre saber que algo é curioso e realmente entender por que aquilo acontece. A primeira sensação dura segundos. A segunda muda como você enxerga um objeto, uma palavra, um comportamento ou um lugar dali em diante.',
      'É por isso que esta aba vai fugir de listas do tipo “10 fatos inacreditáveis”. O objetivo é construir repertório: ciência, linguagem, história, psicologia, cultura e cotidiano conectados de forma que você consiga lembrar, explicar e usar.',
    ],
    sections: [
      {
        kicker: 'COMO GUARDAR',
        title: 'Memória gosta de conexões, não de dados soltos',
        paragraphs: [
          'Um número isolado é fácil de esquecer. Quando ele entra em uma história causal — isso acontece por causa de A, que altera B e produz C — você cria vários pontos de recuperação na memória.',
          'Por isso, cada curiosidade interessante deve responder pelo menos a duas perguntas: “por que isso acontece?” e “com o que isso se conecta?”. Se só existe surpresa, falta profundidade.',
        ],
      },
      {
        kicker: 'VOCABULÁRIO',
        title: 'Palavra diferente só vale se couber naturalmente na frase',
        paragraphs: [
          'Aprender “quiçá”, “amiúde”, “parcimônia” ou “prosaico” é divertido porque cada palavra comprime uma ideia em um formato preciso. Mas vocabulário rico não significa falar de forma artificial.',
          'A melhor palavra nova é aquela que você consegue reconhecer, entender e usar quando ela realmente expressa algo melhor que uma alternativa genérica. O objetivo é precisão, não exibição.',
        ],
      },
      {
        kicker: 'TÉCNICA',
        title: 'Transforme qualquer curiosidade em três camadas',
        paragraphs: [
          'Primeiro, guarde o fato em uma frase. Depois, explique o mecanismo em linguagem simples. Por fim, faça uma conexão inesperada com outro tema. Essa terceira camada costuma ser a mais memorável.',
          'Exemplo: “a Terra não é uma esfera perfeita” é o fato. “a rotação alarga o equador” é o mecanismo. “isso afeta como sistemas de altitude e GPS precisam modelar o planeta” é a conexão.',
        ],
      },
    ],
    callout: {
      label: 'DESAFIO DO DIA',
      title: 'Explique sem decorar',
      text: 'Se você consegue contar o assunto com suas próprias palavras e responder “por quê?”, ele já virou conhecimento em vez de trivia.',
    },
    takeaways: [
      'Surpresa chama atenção; causa e conexão constroem memória.',
      'Vocabulário bom prioriza precisão e naturalidade.',
      'Fato → mecanismo → conexão é uma ótima estrutura para aprender qualquer curiosidade.',
    ],
  },
};
