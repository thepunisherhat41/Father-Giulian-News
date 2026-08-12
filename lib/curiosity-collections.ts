export type CuriosityStory = {
  id: string;
  title: string;
  hook: string;
  explanation: string[];
  connection: string;
  remember: string;
  shareText: string;
  sourceLabel?: string;
  sourceUrl?: string;
};

export type CuriosityCollection = {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  accent: string;
  coverWords: string[];
  description: string;
  stories: CuriosityStory[];
};

export const curiosityCollections: CuriosityCollection[] = [
  {
    id: 'ciencia',
    title: 'Ciência',
    subtitle: 'Fenômenos que parecem mágicos até você entender o mecanismo',
    emoji: '🧪',
    accent: 'magenta',
    coverWords: ['LUZ', 'MATÉRIA', 'ENERGIA'],
    description: 'Física, química, invenções e fenômenos cotidianos explicados sem transformar curiosidade em aula pesada.',
    stories: [
      {
        id: 'ceu-azul',
        title: 'O céu é azul porque a atmosfera espalha mais algumas cores da luz',
        hook: 'A luz do Sol parece branca, mas carrega várias cores. A atmosfera trata cada uma delas de forma diferente.',
        explanation: [
          'Quando a luz solar atravessa a atmosfera, encontra moléculas muito menores que o comprimento de onda da luz visível. Esse regime favorece o chamado espalhamento de Rayleigh.',
          'Comprimentos de onda menores, como azul e violeta, são espalhados com muito mais eficiência do que vermelho e laranja. Como nossos olhos são menos sensíveis ao violeta e parte dele é absorvida na alta atmosfera, percebemos o céu predominantemente azul.',
        ],
        connection: 'No pôr do sol, a luz atravessa um caminho muito maior dentro da atmosfera. Grande parte do azul é espalhada antes de chegar aos seus olhos, deixando os tons vermelhos e alaranjados dominarem.',
        remember: 'O céu não “tem” uma cor: a cor que vemos nasce da interação entre luz, atmosfera e nossos olhos.',
        shareText: 'A luz do Sol contém várias cores. A atmosfera espalha com muito mais eficiência os comprimentos de onda curtos, especialmente o azul. No pôr do sol, a luz cruza muito mais atmosfera e o azul se perde pelo caminho, por isso predominam tons vermelhos e alaranjados.',
        sourceLabel: 'NASA Space Place · Why Is the Sky Blue?',
        sourceUrl: 'https://spaceplace.nasa.gov/blue-sky/en/',
      },
      {
        id: 'gelo-flutua',
        title: 'A água faz algo raro: fica menos densa quando congela',
        hook: 'Na maioria das substâncias, o sólido é mais denso que o líquido. A água quebra essa regra — e isso ajuda lagos inteiros a sobreviver ao inverno.',
        explanation: [
          'Quando a água congela, as ligações de hidrogênio organizam as moléculas numa estrutura cristalina mais aberta. A mesma quantidade de matéria passa a ocupar mais volume.',
          'Com densidade menor que a água líquida, o gelo flutua. Essa camada superficial também funciona como isolamento térmico, retardando o congelamento da água abaixo.',
        ],
        connection: 'Se o gelo afundasse, corpos d’água frios poderiam congelar progressivamente do fundo para cima, alterando radicalmente a sobrevivência de ecossistemas aquáticos.',
        remember: 'Uma propriedade microscópica das moléculas de água tem consequências do tamanho de um ecossistema.',
        shareText: 'O gelo flutua porque a água se expande ao congelar: suas moléculas formam uma estrutura mais aberta e menos densa. Isso ainda cria uma camada isolante sobre lagos, ajudando a manter água líquida e vida abaixo do gelo.',
      },
      {
        id: 'vidro',
        title: 'Vidro não é um líquido que escorre lentamente',
        hook: 'A ideia de que janelas antigas são mais grossas embaixo porque o vidro “escorreu” por séculos é um mito famoso.',
        explanation: [
          'À temperatura ambiente, o vidro comum é um sólido amorfo: seus átomos não formam um cristal ordenado, mas estão presos numa estrutura sólida.',
          'Diferenças de espessura em vidros históricos vêm principalmente dos processos antigos de fabricação, que produziam placas irregulares. Instaladores frequentemente posicionavam a parte mais espessa para baixo por estabilidade.',
        ],
        connection: 'O vidro é interessante justamente porque fica entre duas intuições: tem estrutura desordenada como um líquido, mas comportamento mecânico de sólido.',
        remember: '“Amorfo” descreve a organização atômica; não significa que o material esteja fluindo como água.',
        shareText: 'Vidro de janela não “escorre” lentamente com o passar dos séculos. Ele é um sólido amorfo: tem estrutura atômica desordenada, mas permanece mecanicamente sólido. A irregularidade de janelas antigas vem principalmente das técnicas de fabricação da época.',
      },
      {
        id: 'microondas',
        title: 'O micro-ondas não aquece a comida “de dentro para fora”',
        hook: 'O centro frio e as bordas quentes de um prato já dão uma pista de que essa explicação popular não funciona.',
        explanation: [
          'As micro-ondas penetram alguns centímetros nos alimentos e fazem moléculas polares, especialmente água, responderem ao campo eletromagnético alternado. Essa energia acaba convertida em calor.',
          'Depois, a condução térmica redistribui energia para regiões mais profundas. Geometria, composição e padrões de interferência dentro do forno ajudam a explicar pontos mais quentes e mais frios.',
        ],
        connection: 'O prato giratório não existe por estética: ele movimenta o alimento através de regiões de maior e menor intensidade do campo, ajudando a distribuir o aquecimento.',
        remember: 'Micro-ondas depositam energia em um volume limitado do alimento; o restante ainda depende de transferência de calor.',
        shareText: 'Micro-ondas não cozinham literalmente de dentro para fora. A radiação penetra parte do alimento e deposita energia em moléculas polares; depois a condução distribui o calor. Por isso ainda aparecem pontos frios e quentes.',
      },
      {
        id: 'arcoiris',
        title: 'Cada pessoa vê o seu próprio arco-íris',
        hook: 'Duas pessoas lado a lado não estão recebendo exatamente a mesma luz de um arco-íris.',
        explanation: [
          'O arco-íris surge quando luz solar entra em gotas de água, sofre refração, reflexão interna e nova refração ao sair. As cores chegam ao observador em ângulos específicos.',
          'O centro geométrico do arco fica na direção oposta ao Sol em relação aos olhos de quem observa. Como cada pessoa ocupa uma posição diferente, cada uma recebe luz de um conjunto diferente de gotas.',
        ],
        connection: 'É por isso que você não consegue chegar “ao fim do arco-íris”: ao se deslocar, a geometria muda e outras gotas passam a formar o arco para você.',
        remember: 'O arco-íris é menos um objeto no céu e mais uma geometria entre Sol, gotas e observador.',
        shareText: 'Cada observador vê um arco-íris formado pela luz que chega de um conjunto diferente de gotas. Ao se mover, a geometria muda — por isso não existe um “fim do arco-íris” fixo no chão.',
      },
    ],
  },
  {
    id: 'corpo-humano',
    title: 'Corpo Humano',
    subtitle: 'O organismo fazendo coisas extraordinárias enquanto você nem percebe',
    emoji: '🫀',
    accent: 'blue',
    coverWords: ['CÉREBRO', 'SENTIDOS', 'FISIOLOGIA'],
    description: 'Pequenos mecanismos do corpo que mudam a forma como entendemos visão, memória, sono e movimento.',
    stories: [
      {
        id: 'piscadas',
        title: 'Piscar é parte do sistema óptico dos seus olhos',
        hook: 'Uma piscada parece uma interrupção da visão, mas ajuda justamente a manter a imagem estável e nítida.',
        explanation: [
          'A cada piscada, as pálpebras redistribuem o filme lacrimal sobre a córnea. Essa camada mantém a superfície lisa, úmida e opticamente regular.',
          'Quando ficamos muito concentrados em telas, a frequência de piscadas pode cair e muitas piscadas ficam incompletas, favorecendo ressecamento e desconforto.',
        ],
        connection: 'A qualidade da visão depende não só de retina, cristalino e cérebro, mas também de uma película microscópica de lágrima sendo renovada o dia inteiro.',
        remember: 'Piscar não é só proteção: faz parte da manutenção da superfície óptica do olho.',
        shareText: 'Piscar não serve apenas para proteger o olho. Cada piscada espalha o filme lacrimal sobre a córnea e ajuda a manter a superfície lisa e a visão estável. Em telas, tendemos a piscar menos e de forma mais incompleta.',
      },
      {
        id: 'memoria-reconstrucao',
        title: 'Memória não funciona como uma gravação de vídeo',
        hook: 'Lembrar é reconstruir — e toda reconstrução pode ganhar pequenas mudanças.',
        explanation: [
          'Memórias são representações distribuídas por redes neurais. Ao recuperar uma lembrança, o cérebro reconstrói elementos a partir de pistas, contexto e conhecimento já existente.',
          'Depois de reativada, uma memória pode passar por reconsolidação. Isso ajuda a atualizá-la, mas também explica por que confiança subjetiva não garante precisão absoluta.',
        ],
        connection: 'Duas pessoas honestas podem lembrar do mesmo evento de maneiras diferentes sem que uma delas esteja deliberadamente mentindo.',
        remember: 'Memória é um sistema de reconstrução útil, não um arquivo imutável.',
        shareText: 'Nossa memória não reproduz acontecimentos como uma câmera. Quando lembramos, o cérebro reconstrói o evento a partir de pistas e contexto; depois a lembrança pode ser atualizada novamente. Confiança e precisão não são exatamente a mesma coisa.',
      },
      {
        id: 'ponto-cego',
        title: 'Existe um buraco real no seu campo visual — e você quase nunca percebe',
        hook: 'Cada olho possui um ponto sem fotorreceptores, mas o cérebro normalmente “esconde” isso de você.',
        explanation: [
          'No local em que o nervo óptico deixa a retina, não existem cones nem bastonetes. É o chamado disco óptico e corresponde ao ponto cego fisiológico.',
          'Com os dois olhos abertos, os campos visuais se sobrepõem. Mesmo com um olho, o cérebro usa padrões vizinhos e expectativas para preencher perceptualmente a região ausente.',
        ],
        connection: 'Isso mostra que visão não é simplesmente “uma imagem entrando pelos olhos”: o cérebro está continuamente inferindo a cena.',
        remember: 'Você não vê apenas com os olhos; vê com um sistema que interpreta e completa informação.',
        shareText: 'Cada olho tem um ponto cego real onde o nervo óptico atravessa a retina e não há fotorreceptores. Você quase nunca percebe porque o outro olho e o próprio cérebro completam a informação que falta.',
      },
      {
        id: 'ossos-vivos',
        title: 'Seu esqueleto é tecido vivo e está em reforma contínua',
        hook: 'Osso parece permanente, mas células especializadas estão removendo e reconstruindo tecido o tempo todo.',
        explanation: [
          'O remodelamento ósseo combina ação de osteoclastos, que reabsorvem tecido, e osteoblastos, que formam nova matriz óssea.',
          'Esse processo permite reparar microdanos, adaptar o esqueleto às cargas mecânicas e participar do equilíbrio de minerais como cálcio e fosfato.',
        ],
        connection: 'Exercício de impacto e força não afeta apenas músculos; o estímulo mecânico também influencia a manutenção do tecido ósseo.',
        remember: 'Seu esqueleto não é a armação morta do corpo — é um órgão metabolicamente ativo.',
        shareText: 'Os ossos estão em remodelamento contínuo: algumas células removem tecido antigo e outras constroem novo. Isso repara microdanos, adapta o esqueleto às cargas e participa do equilíbrio de minerais do organismo.',
      },
      {
        id: 'dor-referida',
        title: 'Às vezes o cérebro “erra o endereço” da dor',
        hook: 'Um problema num órgão pode ser percebido como dor em outra região do corpo.',
        explanation: [
          'Sinais sensoriais de vísceras e de regiões da pele podem convergir para neurônios semelhantes na medula espinhal. O cérebro precisa interpretar de onde veio a mensagem.',
          'Como ele recebe muito mais experiência cotidiana de sinais vindos da pele e dos músculos, pode atribuir a sensação visceral a uma região somática conhecida. Esse fenômeno é chamado dor referida.',
        ],
        connection: 'É uma lembrança de que a experiência de dor é uma interpretação do sistema nervoso, não um mapa perfeito do local onde existe um problema.',
        remember: 'O lugar onde a dor é percebida nem sempre é o lugar onde o estímulo começou.',
        shareText: 'Dor referida acontece quando o cérebro interpreta sinais de um órgão como se viessem de outra região, porque vias sensoriais podem convergir na medula. É um exemplo claro de que sentir dor envolve interpretação neural, não só localização física.',
      },
    ],
  },
  {
    id: 'espaco',
    title: 'Espaço',
    subtitle: 'Escalas tão grandes que desafiam nossa intuição',
    emoji: '🚀',
    accent: 'violet',
    coverWords: ['PLANETAS', 'ESTRELAS', 'TEMPO'],
    description: 'Astronomia para enxergar distâncias, luz, gravidade e o passado do Universo de um jeito mais concreto.',
    stories: [
      {
        id: 'sol-oito-minutos',
        title: 'Você nunca vê o Sol “agora”',
        hook: 'A luz leva cerca de oito minutos para percorrer os aproximadamente 150 milhões de quilômetros entre o Sol e a Terra.',
        explanation: [
          'A luz viaja no vácuo a aproximadamente 300 mil quilômetros por segundo. Mesmo nessa velocidade extrema, atravessar a distância entre a Terra e o Sol leva pouco mais de oito minutos.',
          'Isso significa que a imagem do Sol que chega aos seus olhos sempre representa um estado que já aconteceu alguns minutos antes.',
        ],
        connection: 'Esse princípio cresce com a distância: observar objetos muito distantes é literalmente observar fases cada vez mais antigas do Universo.',
        remember: 'Astronomia é uma ciência que observa espaço e passado ao mesmo tempo.',
        shareText: 'A luz do Sol leva pouco mais de 8 minutos para chegar até a Terra. Então você nunca vê o Sol exatamente “agora”: vê como ele era minutos atrás. Quanto mais distante o objeto astronômico, mais antigo é o retrato que recebemos.',
        sourceLabel: 'NASA · Sun Facts',
        sourceUrl: 'https://science.nasa.gov/sun/facts/',
      },
      {
        id: 'lua-afastando',
        title: 'A Lua está se afastando lentamente da Terra',
        hook: 'Espelhos deixados na Lua permitem medir a distância até ela com enorme precisão.',
        explanation: [
          'A interação de marés entre Terra e Lua transfere momento angular: a rotação terrestre perde uma quantidade minúscula de energia enquanto a órbita lunar se expande gradualmente.',
          'Medições por laser mostram um afastamento médio de alguns centímetros por ano na era atual.',
        ],
        connection: 'O mesmo processo significa que a duração do dia terrestre muda muito lentamente ao longo de escalas geológicas.',
        remember: 'Marés não são apenas água subindo e descendo: fazem parte de uma troca de energia entre dois mundos.',
        shareText: 'A Lua se afasta da Terra alguns centímetros por ano. A causa está na interação das marés, que transfere momento angular entre a rotação terrestre e a órbita lunar. Em escalas geológicas, até a duração do nosso dia muda.',
      },
      {
        id: 'venus-dia-ano',
        title: 'Em Vênus, uma rotação leva mais tempo que um ano do planeta',
        hook: 'Nosso senso de “dia” e “ano” parece universal até encontrarmos um planeta como Vênus.',
        explanation: [
          'Vênus gira extremamente devagar em torno do próprio eixo e ainda possui rotação retrógrada, no sentido oposto ao da maioria dos planetas.',
          'Uma rotação completa em relação às estrelas leva cerca de 243 dias terrestres, enquanto uma órbita ao redor do Sol leva aproximadamente 225 dias terrestres.',
        ],
        connection: 'O “dia solar” percebido na superfície é diferente desse período de rotação porque o planeta também está se deslocando ao redor do Sol.',
        remember: 'Dia e ano são consequências de movimentos diferentes; em outros planetas, a relação entre eles pode ser completamente contraintuitiva.',
        shareText: 'Vênus demora cerca de 243 dias terrestres para girar uma vez em torno do próprio eixo, mas só cerca de 225 dias para completar uma volta ao redor do Sol. Ou seja: sua rotação é mais longa que seu ano orbital.',
        sourceLabel: 'NASA · Venus Facts',
        sourceUrl: 'https://science.nasa.gov/venus/venus-facts/',
      },
      {
        id: 'estrelas-elementos',
        title: 'Parte dos átomos do seu corpo foi fabricada dentro de estrelas antigas',
        hook: 'Carbono, oxigênio e vários elementos pesados não existiam em abundância no Universo primordial.',
        explanation: [
          'Estrelas transformam núcleos atômicos por fusão ao longo de sua vida. Estrelas mais massivas conseguem produzir elementos progressivamente mais pesados em seus interiores.',
          'Eventos como supernovas e outros processos astrofísicos espalham parte desse material enriquecido pelo espaço, permitindo que novas gerações de estrelas, planetas e sistemas químicos se formem.',
        ],
        connection: 'A química da vida depende de uma história cósmica anterior ao próprio Sistema Solar.',
        remember: 'A matéria de um organismo terrestre carrega uma genealogia estelar.',
        shareText: 'Elementos como carbono e oxigênio foram produzidos por gerações anteriores de estrelas e espalhados pelo espaço antes da formação do Sistema Solar. A química do nosso corpo carrega uma história cósmica muito mais antiga que a Terra.',
      },
      {
        id: 'orbita-queda',
        title: 'Um astronauta em órbita ainda está sob forte gravidade',
        hook: 'Flutuar na Estação Espacial não significa ter escapado da gravidade terrestre.',
        explanation: [
          'Na altitude da Estação Espacial Internacional, a gravidade continua sendo uma fração muito alta da que sentimos na superfície.',
          'A sensação de ausência de peso acontece porque estação e astronautas estão continuamente em queda livre ao redor da Terra: avançam tão rápido lateralmente que a superfície curva para longe enquanto eles caem.',
        ],
        connection: 'Órbita pode ser entendida como uma queda que nunca termina em colisão com o chão.',
        remember: 'Microgravidade em órbita é principalmente uma condição de queda livre, não ausência de gravidade.',
        shareText: 'Astronautas na Estação Espacial não flutuam porque “não existe gravidade” ali. Eles e a estação estão em queda livre contínua ao redor da Terra. Uma órbita pode ser imaginada como cair sem nunca atingir o chão.',
      },
    ],
  },
  {
    id: 'historia-cultura',
    title: 'História & Cultura',
    subtitle: 'Coisas do presente que ficam muito mais interessantes quando você descobre de onde vieram',
    emoji: '🏺',
    accent: 'red',
    coverWords: ['CIDADES', 'COSTUMES', 'INVENÇÕES'],
    description: 'Civilizações, palavras, objetos e costumes explicados como conexões entre passado e cotidiano.',
    stories: [
      {
        id: 'mapas-norte',
        title: 'Não existe uma lei da natureza dizendo que o norte precisa ficar em cima do mapa',
        hook: '“Para cima” e “para baixo” fazem sentido num objeto sob gravidade; num planeta no espaço, essa orientação é uma convenção gráfica.',
        explanation: [
          'Ao longo da história, mapas foram desenhados com diferentes orientações. Algumas tradições colocaram leste ou sul no topo por motivos religiosos, culturais ou práticos.',
          'A predominância moderna do norte no topo foi consolidada por práticas cartográficas e de navegação europeias, não por uma exigência física do planeta.',
        ],
        connection: 'Virar um mapa de cabeça para baixo não muda a geografia, mas muda instantaneamente nossa percepção de centro, periferia, “acima” e “abaixo”.',
        remember: 'Mapas representam espaço, mas também carregam escolhas culturais.',
        shareText: 'Não existe uma lei física que obrigue mapas a colocarem o norte em cima. Ao longo da história, várias culturas usaram orientações diferentes. O padrão atual é uma convenção cartográfica — e virar um mapa muda muito nossa percepção sem mudar a geografia.',
      },
      {
        id: 'horarios-trens',
        title: 'As ferrovias ajudaram a transformar a hora em algo padronizado',
        hook: 'Quando cada cidade podia seguir seu próprio tempo solar local, alguns minutos de diferença quase não importavam — até surgirem trens e horários conectados.',
        explanation: [
          'Antes da padronização moderna, localidades podiam ajustar relógios ao meio-dia solar local. Isso criava pequenas diferenças de tempo entre cidades.',
          'Redes ferroviárias e sistemas de comunicação aumentaram a necessidade de horários previsíveis e sincronizados, ajudando a impulsionar a adoção de padrões regionais e, depois, fusos horários.',
        ],
        connection: 'Infraestrutura não transporta apenas pessoas e mercadorias; às vezes obriga sociedades inteiras a redefinir como organizam o tempo.',
        remember: 'A hora no relógio também é uma tecnologia social.',
        shareText: 'Ferrovias ajudaram a tornar o tempo padronizado. Quando cidades seguiam o meio-dia solar local, pequenas diferenças quase não importavam; com trens, conexões e tabelas de horário, sincronizar relógios virou uma necessidade prática.',
      },
      {
        id: 'concreto-romano',
        title: 'Algumas estruturas romanas de concreto sobreviveram por quase dois milênios',
        hook: 'Parte do segredo não é simplesmente “um cimento melhor”, mas uma composição e um ambiente químico diferentes dos concretos modernos.',
        explanation: [
          'Construtores romanos usavam misturas com cal e materiais vulcânicos, entre outros agregados. Em certas estruturas marítimas, reações químicas ao longo do tempo contribuíram para fases minerais estáveis.',
          'Isso não significa que concreto romano seja universalmente superior ao moderno; os materiais atendem requisitos, técnicas e ambientes muito diferentes.',
        ],
        connection: 'Materiais antigos podem inspirar pesquisas modernas sobre durabilidade e redução de impacto ambiental sem que seja necessário romantizar toda tecnologia do passado.',
        remember: 'Durabilidade depende de química, projeto, ambiente e manutenção — não só da idade de uma receita.',
        shareText: 'Algumas estruturas romanas de concreto atravessaram quase dois mil anos graças a combinações de materiais e reações químicas específicas. Isso não torna todo concreto antigo “melhor”, mas ajuda pesquisadores a estudar novas estratégias de durabilidade.',
      },
      {
        id: 'papel-moeda',
        title: 'Dinheiro funciona porque é uma tecnologia de confiança coletiva',
        hook: 'Uma nota de papel vale muito mais que o papel porque sociedades inteiras concordam em aceitar regras, instituições e registros por trás dela.',
        explanation: [
          'Moedas podem desempenhar funções de meio de troca, unidade de conta e reserva de valor. O material físico usado para representar valor mudou muito ao longo da história.',
          'Em sistemas monetários modernos, confiança envolve instituições, política monetária, capacidade fiscal, sistemas de pagamento e expectativa de que outras pessoas aceitarão a mesma unidade amanhã.',
        ],
        connection: 'Cartões, transferências instantâneas e saldos bancários mostram que grande parte do dinheiro contemporâneo já circula sem precisar de cédulas físicas.',
        remember: 'Dinheiro é simultaneamente instrumento econômico, convenção social e infraestrutura tecnológica.',
        shareText: 'Uma nota vale muito mais que o papel porque dinheiro é também uma tecnologia de confiança coletiva. Sistemas modernos dependem de instituições, registros e da expectativa de que outras pessoas aceitarão aquela unidade de valor depois.',
      },
      {
        id: 'cidades-rios',
        title: 'Muitas cidades importantes nasceram onde a geografia facilitava movimento e troca',
        hook: 'Rios, portos, passagens de montanha, estradas e depois ferrovias ajudaram a decidir onde pessoas se concentrariam.',
        explanation: [
          'Antes de motores e rodovias modernas, mover grandes volumes por água costumava ser muito mais eficiente do que transportá-los por terra. Pontos navegáveis, confluências e portos criavam vantagens econômicas.',
          'Mais tarde, infraestrutura nova podia reforçar centros existentes ou deslocar importância para outros lugares, alterando bairros, comércio e expansão urbana.',
        ],
        connection: 'Olhar um mapa antigo de transporte frequentemente explica melhor o formato atual de uma cidade do que olhar apenas seus limites administrativos.',
        remember: 'A forma das cidades é uma memória física das tecnologias de transporte de cada época.',
        shareText: 'Muitas cidades cresceram perto de rios, portos, estradas ou ferrovias porque transporte define onde comércio e pessoas conseguem se concentrar. A própria forma urbana funciona como uma memória das tecnologias de mobilidade de cada época.',
      },
    ],
  },
  {
    id: 'animais-natureza',
    title: 'Animais & Natureza',
    subtitle: 'Comportamentos que parecem impossíveis até você enxergar a adaptação por trás deles',
    emoji: '🐘',
    accent: 'teal',
    coverWords: ['COMPORTAMENTO', 'EVOLUÇÃO', 'SENTIDOS'],
    description: 'Inteligência, comunicação, orientação e estratégias de sobrevivência sem humanizar demais os animais.',
    stories: [
      {
        id: 'polvos-bracos',
        title: 'Grande parte dos neurônios de um polvo está fora do cérebro central',
        hook: 'Os braços de um polvo não são simples cabos controlados de cima para baixo.',
        explanation: [
          'Polvos possuem um sistema nervoso altamente distribuído, com muitos neurônios localizados nos braços. Circuitos periféricos conseguem processar grande quantidade de informação sensorial e coordenar movimentos localmente.',
          'O cérebro central continua sendo essencial, mas o controle corporal é mais descentralizado do que no nosso próprio sistema nervoso.',
        ],
        connection: 'É um lembrete de que inteligência e controle podem surgir de arquiteturas biológicas muito diferentes da nossa.',
        remember: 'Complexidade cognitiva não exige que toda decisão esteja concentrada num único “centro de comando”.',
        shareText: 'Polvos têm um sistema nervoso muito distribuído: muitos de seus neurônios ficam nos braços, que conseguem processar sensação e coordenar movimentos localmente. É uma arquitetura de controle bem diferente da nossa.',
      },
      {
        id: 'tubaroes-eletricidade',
        title: 'Tubarões conseguem detectar campos elétricos extremamente fracos',
        hook: 'Um animal escondido sob areia pode deixar pistas que não dependem de visão, cheiro ou som.',
        explanation: [
          'Tubarões e raias possuem órgãos sensoriais chamados ampolas de Lorenzini. Eles respondem a diferenças elétricas minúsculas presentes na água.',
          'Contrações musculares e atividade nervosa de outros animais produzem bioeletricidade. Em curta distância, isso pode ajudar na localização de presas.',
        ],
        connection: 'Sensores evolutivos mostram que o “mundo perceptivo” de outra espécie pode conter dimensões que praticamente não percebemos conscientemente.',
        remember: 'O ambiente tem sinais que existem mesmo quando os nossos sentidos não conseguem detectá-los.',
        shareText: 'Tubarões possuem ampolas de Lorenzini, órgãos que detectam campos elétricos muito fracos. Como músculos e nervos de animais geram bioeletricidade, esse sentido pode ajudar a localizar presas até quando estão escondidas.',
      },
      {
        id: 'aves-magnetismo',
        title: 'Algumas aves usam pistas do campo magnético terrestre para navegar',
        hook: 'Uma ave migratória pode atravessar continentes sem GPS e ainda encontrar rotas sazonais extremamente consistentes.',
        explanation: [
          'Navegação animal costuma combinar vários sistemas: posição do Sol, estrelas, paisagem, odores e informações associadas ao campo magnético terrestre.',
          'Em diferentes espécies, mecanismos de magnetorrecepção ainda são estudados; evidências apontam para mais de um possível sistema sensorial.',
        ],
        connection: 'A orientação animal não precisa depender de um único “sensor mágico”; sistemas robustos frequentemente combinam várias pistas imperfeitas.',
        remember: 'Migração é um problema de navegação resolvido por evolução, aprendizado e múltiplas fontes de informação.',
        shareText: 'Algumas aves migratórias conseguem usar pistas relacionadas ao campo magnético terrestre, além de Sol, estrelas, paisagem e outros sinais. A navegação delas parece funcionar como um sistema redundante, não como um único “GPS biológico”.',
      },
      {
        id: 'abelhas-danca',
        title: 'Abelhas conseguem transmitir direção e distância por meio de uma dança',
        hook: 'Dentro de uma colmeia escura, uma operária pode informar onde existe alimento sem levar cada companheira até lá.',
        explanation: [
          'Na chamada dança do requebrado, relações entre ângulo, duração e orientação do movimento carregam informação sobre direção e distância aproximada de uma fonte de recurso.',
          'Outras abelhas acompanham os movimentos e integram essa informação com pistas ambientais durante o voo.',
        ],
        connection: 'Comunicação complexa não exige linguagem humana; informação pode ser codificada em movimento, química, som ou luz.',
        remember: 'Uma colônia funciona como uma rede em que indivíduos compartilham dados úteis para decisões coletivas.',
        shareText: 'Abelhas podem comunicar direção e distância aproximada de alimento por meio da dança do requebrado. Ângulo e duração do movimento carregam informação que outras operárias usam depois no voo.',
      },
      {
        id: 'corvos-ferramentas',
        title: 'Alguns corvos fabricam e modificam ferramentas',
        hook: 'Usar um objeto é uma coisa; escolher material e alterar sua forma para resolver um problema é outra.',
        explanation: [
          'Corvos-da-Nova-Caledônia são conhecidos por produzir ferramentas a partir de gravetos e folhas, ajustando materiais para extrair alimento de locais difíceis.',
          'Estudos experimentais exploram planejamento, aprendizado e resolução de problemas nessas aves, mostrando capacidades cognitivas sofisticadas sem depender de um cérebro parecido com o de primatas.',
        ],
        connection: 'A evolução chegou a soluções cognitivas avançadas em linhagens muito distantes entre si.',
        remember: 'Tamanho ou aparência do cérebro não são bons atalhos para julgar o repertório cognitivo de uma espécie.',
        shareText: 'Corvos-da-Nova-Caledônia conseguem fabricar e modificar ferramentas para alcançar alimento. É um exemplo de cognição sofisticada evoluindo numa linhagem muito distante dos primatas.',
      },
    ],
  },
  {
    id: 'planeta-terra',
    title: 'Planeta Terra',
    subtitle: 'O planeta como máquina geológica, oceânica e atmosférica',
    emoji: '🌍',
    accent: 'green',
    coverWords: ['ROCHAS', 'OCEANOS', 'CLIMA'],
    description: 'Vulcões, placas, lagos, oceanos e fenômenos que mostram que a Terra está longe de ser um cenário parado.',
    stories: [
      {
        id: 'placas-unhas',
        title: 'Placas tectônicas se movem na escala de centímetros por ano',
        hook: 'Continentes parecem imóveis durante uma vida humana, mas o mapa do planeta está em movimento contínuo.',
        explanation: [
          'A litosfera está dividida em placas que se deslocam umas em relação às outras. As velocidades variam, mas frequentemente estão na ordem de centímetros por ano.',
          'Em milhões de anos, deslocamentos aparentemente minúsculos acumulam centenas ou milhares de quilômetros, abrindo oceanos, fechando bacias e levantando cadeias montanhosas.',
        ],
        connection: 'Uma velocidade parecida com o crescimento anual de unhas pode redesenhar continentes quando o relógio usado é geológico.',
        remember: 'Geologia transforma movimentos lentos em mudanças gigantes porque dispõe de tempo profundo.',
        shareText: 'Placas tectônicas costumam se mover apenas alguns centímetros por ano, algo comparável à escala do crescimento das unhas. Parece pouco — até você multiplicar isso por milhões de anos e perceber que oceanos e continentes inteiros mudam de posição.',
      },
      {
        id: 'oceano-montanhas',
        title: 'A maior cadeia de montanhas da Terra fica principalmente debaixo do oceano',
        hook: 'Quando pensamos em grandes cadeias montanhosas, lembramos dos Andes ou do Himalaia — mas existe uma estrutura muito mais extensa escondida no fundo do mar.',
        explanation: [
          'O sistema global de dorsais mesoceânicas acompanha limites divergentes de placas, onde material do manto sobe e nova crosta oceânica é formada.',
          'Essas dorsais atravessam oceanos por dezenas de milhares de quilômetros, formando o sistema montanhoso mais longo do planeta.',
        ],
        connection: 'Grande parte da geografia física mais importante da Terra está fora da nossa experiência visual cotidiana porque está submersa.',
        remember: 'O mapa que vemos acima do nível do mar mostra apenas uma parte do relevo planetário.',
        shareText: 'A maior cadeia de montanhas da Terra não é o Himalaia: é o sistema global de dorsais mesoceânicas, que atravessa o fundo dos oceanos por dezenas de milhares de quilômetros e marca regiões onde nova crosta oceânica é criada.',
        sourceLabel: 'NOAA Ocean Exploration · Mid-Ocean Ridge',
        sourceUrl: 'https://oceanexplorer.noaa.gov/facts/mid-ocean-ridge.html',
      },
      {
        id: 'lagos-arquivos',
        title: 'O fundo de um lago pode funcionar como um arquivo climático',
        hook: 'Camadas de lama acumuladas lentamente guardam pistas sobre ambientes que existiram muito antes de registros humanos.',
        explanation: [
          'Sedimentos depositados no fundo de lagos podem preservar pólen, minerais, matéria orgânica, cinzas vulcânicas e outros indicadores ambientais.',
          'Ao extrair testemunhos sedimentares, pesquisadores analisam camadas sucessivas e reconstroem mudanças de vegetação, erosão, incêndios, clima e atividade vulcânica.',
        ],
        connection: 'Um lago aparentemente imóvel pode registrar uma cronologia ambiental com milhares de anos de resolução.',
        remember: 'Geólogos também “leem” história em lama, não apenas em rochas expostas.',
        shareText: 'Sedimentos no fundo de lagos acumulam pólen, minerais, cinzas e matéria orgânica. Ao retirar testemunhos dessas camadas, cientistas conseguem reconstruir partes da história climática e ambiental de milhares de anos.',
      },
      {
        id: 'campo-magnetico',
        title: 'O polo magnético não fica parado no mesmo lugar',
        hook: 'O “norte magnético” de uma bússola não é exatamente o Polo Norte geográfico — e ainda se desloca ao longo do tempo.',
        explanation: [
          'O campo magnético terrestre é gerado principalmente pelo movimento de ferro líquido no núcleo externo. Como esse fluxo muda, o campo também sofre variações.',
          'Modelos magnéticos precisam ser atualizados porque a posição dos polos magnéticos e a intensidade regional do campo não são constantes.',
        ],
        connection: 'Navegação magnética funciona graças a um fenômeno planetário profundo que está mudando enquanto o usamos.',
        remember: 'Uma bússola aponta segundo o campo magnético, não diretamente para um ponto geográfico fixo.',
        shareText: 'O norte magnético não é o mesmo que o Polo Norte geográfico e sua posição muda com o tempo. O campo é gerado pelo movimento de material condutor no interior da Terra, por isso modelos magnéticos precisam ser atualizados.',
      },
      {
        id: 'deserto-antartida',
        title: 'A Antártida é um deserto',
        hook: 'Deserto não significa necessariamente calor ou areia; a característica central é receber pouquíssima precipitação.',
        explanation: [
          'Grande parte da Antártida recebe quantidades extremamente pequenas de precipitação anual, especialmente no interior do continente.',
          'A água presente em enormes mantos de gelo não contradiz isso: o gelo acumulou-se ao longo de períodos muito longos enquanto as condições atuais permanecem muito secas.',
        ],
        connection: 'Classificações científicas frequentemente usam critérios diferentes das imagens mentais que associamos às palavras no cotidiano.',
        remember: 'Um lugar pode ser simultaneamente coberto de gelo e climaticamente desértico.',
        shareText: 'A Antártida é considerada um deserto porque recebe pouquíssima precipitação, especialmente no interior. “Deserto” descreve aridez, não calor: um ambiente pode ser extremamente frio, coberto de gelo e ainda assim muito seco.',
      },
    ],
  },
];
