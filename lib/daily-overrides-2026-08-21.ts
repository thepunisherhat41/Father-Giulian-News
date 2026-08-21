import { dailyContent, edition, todayDrops } from './daily-content';
import { politicsTracker } from './politics-2026';

const set = (slug: string, data: any) => Object.assign(dailyContent[slug], data);

Object.assign(edition, {
  date: '21/08/2026',
  dateLabel: '21 AGO 2026',
  title: 'Daily Intelligence · 21 de agosto',
});

Object.assign(politicsTracker, {
  updatedAt: '21/08/2026 · madrugada',
  notice: 'A habilitação para voto em trânsito encerrou em 20/08. O TSE também definiu a distribuição do horário eleitoral; a propaganda no rádio e na TV começa em 28/08. Campanha, registro, julgamento de candidatura e intenção de voto são trilhas distintas.',
});

const drops = [
  { slug:'brasil', label:'Brasil', emoji:'🇧🇷', title:'Fim da escala 6x1 avança no Senado e abre uma disputa sobre jornada, custo e produtividade', detail:'A proposta voltou ao centro do debate. A edição separa o que avançou, o que ainda depende de votação e os impactos possíveis para trabalhador e empresa.' },
  { slug:'seguranca-zl', label:'Zona Leste em Foco', emoji:'🚨', title:'ZL agora: Aricanduva, Ponte Rasa, São Mateus, Itaquera e serviços para acompanhar nesta sexta', detail:'Crimes confirmados, procurados, ocorrências recentes, obras, vacinação, clima e serviços locais entram em trilhas separadas e datadas.' },
  { slug:'politica', label:'Política', emoji:'🏛️', title:'TSE define tempo de propaganda; horário eleitoral começa em 28 de agosto', detail:'Entenda como o tempo é distribuído e por que tempo de TV não deve ser confundido com apoio eleitoral ou situação jurídica da candidatura.' },
  { slug:'mundo', label:'Mundo', emoji:'🌍', title:'Ataque russo de grande escala atinge Kyiv; defesa aérea e infraestrutura voltam ao centro da guerra', detail:'Mísseis e drones atingiram a capital e a região. A leitura separa alegações militares, danos confirmados e o problema de defesa contra mísseis balísticos.' },
  { slug:'planeta', label:'Planeta', emoji:'🌎', title:'Termoclina: a “fronteira” invisível que separa a água quente da superfície do oceano da água fria profunda', detail:'A camada influencia som, ecossistemas, mistura oceânica e até a leitura de combustível disponível para ciclones.' },
  { slug:'animais', label:'Mundo Animal', emoji:'🐋', title:'O oceano possui um “canal acústico” que pode levar sons por enormes distâncias', detail:'Temperatura e pressão curvam ondas sonoras; baleias e hidrofones se beneficiam de uma física que não existe da mesma forma no ar.' },
  { slug:'tempo', label:'Tempo e Clima', emoji:'🌬️', title:'São Paulo esfria nesta sexta: frente fria derruba a máxima e aumenta atenção com vento', detail:'A previsão aponta dia mais fresco na capital, enquanto a Defesa Civil alertou para rajadas fortes na Grande São Paulo.' },
  { slug:'curiosidades', label:'Curiosidades', emoji:'🌇', title:'Por que o pôr do sol fica vermelho se o céu normalmente é azul?', detail:'A distância maior percorrida pela luz dentro da atmosfera remove mais comprimentos de onda curtos do caminho direto até seus olhos.' },
  { slug:'musica', label:'Música', emoji:'🎸', title:'Fim de semana coloca rock nacional dos anos 80 e sertanejo histórico em grandes palcos de São Paulo', detail:'C6 no Rock e Histórias acontecem neste fim de semana; a aba mantém Rock e Sertanejo de Época em trilhas independentes.' },
  { slug:'games', label:'Games', emoji:'🎮', title:'gamescom entra na semana decisiva: dev começa dia 23 e evento principal abre na próxima semana', detail:'A agenda oficial separa gamescom dev, Opening Night Live e feira principal para não misturar anúncio confirmado com rumor.' },
  { slug:'gravidez', label:'Gravidez', emoji:'🤰', title:'6 semanas + 5 dias: desenvolvimento embrionário, enjoo e preparação inteligente para o pós-parto', detail:'A fase atual continua conectada a cuidados com vômito e um guia completo de puerpério e apoio do parceiro.' },
  { slug:'pai', label:'Ser Pai', emoji:'👨‍🍼', title:'Missão de hoje: reduza a carga mental antes que ela precise pedir', detail:'Apoio real é perceber, preparar, executar e checar — sem transformar a gestante em gerente das tarefas.' },
  { slug:'carros', label:'Carros', emoji:'🚗', title:'Usado até R$70 mil: hoje o foco é histórico térmico do motor, não apenas quilometragem', detail:'Arrefecimento negligenciado pode deixar sinais mais caros que km alta. Veja reservatório, fluido, mangueiras, ventoinha, óleo e histórico.' },
  { slug:'motos', label:'Motos', emoji:'🏍️', title:'Moto usada: pneu velho com desenho bonito ainda pode ser um problema', detail:'Data de fabricação, ressecamento, deformação, pressão e desgaste irregular contam mais que “tem borracha”.' },
  { slug:'mecanica', label:'Mecânica', emoji:'🧪', title:'Fluido de freio absorve umidade: por que o pedal pode parecer normal e ainda assim o sistema perder margem térmica', detail:'O risco aparece principalmente quando o fluido aquece. A leitura conecta ponto de ebulição, manutenção e inspeção.' },
  { slug:'nautica', label:'Náutica', emoji:'🧭', title:'Nó e milha náutica: por que a navegação usa unidades que parecem estranhas em terra', detail:'Uma milha náutica vale 1.852 m e um nó equivale a uma milha náutica por hora; a origem conversa com latitude e cartas.' },
  { slug:'viagens', label:'Viagens', emoji:'🚂', title:'Paranapiacaba: um bate-volta perto de SP em que clima, neblina e horário mudam completamente a experiência', detail:'Planejamento bom inclui trem/estrada, calçado, chuva, temperatura, horários de visitação e retorno.' },
  { slug:'financas', label:'Finanças', emoji:'💵', title:'Dólar fechou perto de R$5,19 e petróleo subiu: por que geopolítica pode voltar ao seu bolso por vários caminhos', detail:'Câmbio, combustível, inflação e juros não andam em linha reta, mas o choque de energia aumenta a atenção sobre todos eles.' },
  { slug:'tecnologia', label:'Tecnologia', emoji:'🧠', title:'Cerebras lança CS-4 e reforça a corrida para acelerar inferência, não apenas treinamento de IA', detail:'A nova geração aposta em chips de grande área, módulos plugáveis e menos componentes para reduzir latência e acelerar implantação.' },
  { slug:'security-briefing', label:'Security Briefing', emoji:'📰', title:'Decision Desk revisado hoje: identidade, supply chain, cloud, exploração real e agentes continuam no topo', detail:'Os sinais existentes foram rechecados; a prioridade continua baseada em exposição, privilégio, blast radius e evidência — não em CVSS isolado.' },
  { slug:'seguranca', label:'Cyber Security', emoji:'🛡️', title:'ClickFix continua relevante: quando “corrigir um erro” vira execução de comando pelo próprio usuário', detail:'A técnica explora páginas falsas, CAPTCHAs e instruções convincentes para induzir execução local. O foco defensivo é comportamento, não só domínio.' },
  { slug:'appsec-ssdlc', label:'AppSec / SSDLC', emoji:'🧬', title:'Agentic CI/CD: pipeline precisa tratar prompt, tool call e token como partes da mesma trust boundary', detail:'Agentes aceleram desenvolvimento, mas exigem autorização por ação, segredos mínimos, proveniência e gates que entendam o contexto.' },
];

todayDrops.splice(0, todayDrops.length, ...drops);

set('hoje', {
  title: '22 áreas revisadas · edição de 21 de agosto',
  summary: 'A edição abre a sexta-feira com fatos recentes onde a atualidade importa e conhecimento novo nas áreas educativas. Cada aba foi reavaliada antes da publicação.',
  shareSummary: '21/08: edição completa com 22 áreas revisadas, Zona Leste em tempo real, atualidades, ciência, família, veículos, tecnologia e segurança.',
  readTime: '22 MISSÕES', badge: 'REVISÃO DIÁRIA COMPLETA', sections: [],
});

set('brasil', {
  title: 'Fim da escala 6x1 avança no Senado — mas ainda há caminho legislativo e disputa sobre efeitos econômicos',
  summary: 'A proposta de mudança da jornada semanal voltou ao centro do debate depois de avançar no Senado. A discussão envolve descanso, saúde, produtividade, custo de contratação e desenho de transição para diferentes setores.',
  shareSummary: 'Brasil 21/08: PEC do fim da escala 6x1 avança no Senado. Avanço legislativo não significa regra já em vigor; ainda há etapas políticas e texto pode mudar.',
  readTime: '7 MIN READ', badge: 'BRASIL · TRABALHO',
  sections: [
    { title:'O que aconteceu', paragraphs:['A proposta que busca encerrar a escala de seis dias de trabalho por um de descanso avançou no Senado em 20 de agosto e volta a pressionar governo, Congresso, centrais e empregadores a discutir o desenho da jornada.'], bullets:['Avanço no Senado não equivale a promulgação.','O texto ainda pode sofrer alterações durante a tramitação.','Setores com operação contínua tendem a discutir transição, escalas e custo de cobertura.'] },
    { title:'Por que importa', paragraphs:['Jornada semanal afeta descanso, saúde, organização familiar e custo operacional. O efeito econômico depende de produtividade, necessidade de novas contratações, negociação coletiva e forma final da regra.'] },
    { title:'O que acompanhar', bullets:['Texto efetivamente votado nas próximas etapas.','Eventuais regras de transição e exceções.','Posição de centrais, empregadores e governo sobre compensações e carga horária.'] },
  ],
  sources:[{ label:'UOL · 20/08/2026', url:'https://noticias.uol.com.br/ultimas-noticias/redacao/2026/08/20/pec-do-fim-da-escala-6x1-avanca-no-senado-em-meio-a-pressao-do-governo.ghtm' }],
});

set('seguranca-zl', {
  title:'Zona Leste em foco: fatos das últimas horas + serviços para esta sexta',
  summary:'A leitura da madrugada de 21/08 reúne ocorrência grave em Aricanduva, investigação na Ponte Rasa, casos recentes em São Mateus, serviços em Itaquera, obras e mudança do tempo — sempre com data e fonte.',
  shareSummary:'ZL 21/08: Aricanduva tem homicídio com autor procurado; Ponte Rasa teve prisão em investigação sobre exploração de trabalhadores; São Mateus e desmanche seguem entre casos recentes. Itaquera tem serviço e obras para acompanhar.',
  readTime:'12 MIN', badge:'ZL · ÚLTIMAS 24H', sections:[],
});

set('politica', {
  title:'TSE define distribuição do horário eleitoral; propaganda no rádio e na TV começa em 28 de agosto',
  summary:'O TSE definiu os tempos das candidaturas presidenciais no horário eleitoral. A distribuição considera representação partidária e coligações — não pesquisa eleitoral nem avaliação de candidatura.',
  shareSummary:'Política 21/08: TSE definiu tempo de propaganda presidencial; horário eleitoral começa 28/08. Tempo de TV é regra de distribuição, não previsão de voto.',
  readTime:'6 MIN', badge:'POLÍTICA · ELEIÇÕES 2026',
  sections:[
    { title:'O que muda', paragraphs:['A campanha passa a ter uma nova camada de exposição a partir de 28 de agosto, quando começa o horário eleitoral gratuito no rádio e na televisão.'] },
    { title:'Como interpretar', bullets:['Mais tempo de TV aumenta oportunidade de comunicação, mas não garante voto.','Candidatos sem tempo no bloco podem continuar campanha por outros meios permitidos.','Situação de registro na Justiça Eleitoral deve ser lida separadamente da distribuição de mídia.'] },
    { title:'O que acompanhar', bullets:['Primeiros programas no dia 28.','Mudanças de mensagem entre internet e TV.','Decisões da Justiça Eleitoral sobre registros e propaganda.'] },
  ],
  sources:[{ label:'UOL Eleições · 20/08/2026', url:'https://noticias.uol.com.br/eleicoes/2026/08/20/tse-define-tempo-de-tv-coligacao-de-lula-tem-mais-de-5-minutos.ghtm' }],
});

set('mundo', {
  title:'Kyiv sofre novo ataque de grande escala; mísseis balísticos expõem o limite da defesa aérea',
  summary:'Ataques russos com mísseis e drones atingiram Kyiv e a região em 20/08. Autoridades ucranianas relataram mortes, feridos, danos residenciais e interrupções de energia; a Rússia disse ter atingido instalações ligadas à defesa e logística.',
  shareSummary:'Mundo 21/08: grande ataque russo atingiu Kyiv e região. Há versões militares distintas sobre alvos, mas mortes, danos e pressão sobre defesa aérea foram confirmados por múltiplas fontes.',
  readTime:'8 MIN', badge:'MUNDO · UCRÂNIA',
  sections:[
    { title:'O que está confirmado', bullets:['Ataques ocorreram na madrugada/manhã de 20/08.','Áreas residenciais e infraestrutura foram danificadas.','A defesa contra mísseis balísticos segue sendo um gargalo importante.'] },
    { title:'Duas camadas de informação', paragraphs:['Autoridades russas afirmaram ter atacado instalações militares e de produção de drones. Autoridades ucranianas e reportagens registraram também danos civis. Em guerra, alegações operacionais de cada lado precisam ser separadas de fatos independemente verificáveis.'] },
    { title:'O que acompanhar', bullets:['Balanço consolidado de vítimas e danos.','Novos pedidos de interceptadores e sistemas de defesa aérea.','Impacto sobre infraestrutura energética e logística.'] },
  ],
  sources:[{ label:'Reuters · 20/08/2026', url:'https://www.reuters.com/world/russia-strikes-drone-component-facilities-other-targets-kyiv-defence-ministry-2026-08-20/' },{ label:'AP · 20/08/2026', url:'https://apnews.com/article/92ff5d7d1073fd8692a75e4e677f425b' }],
});

set('planeta', {
  title:'Termoclina: uma mudança rápida de temperatura que reorganiza o oceano em camadas',
  summary:'A termoclina é a zona de transição entre a água superficial mais quente e misturada e a água fria profunda. Ela muda com latitude, estação e condições locais.',
  readTime:'6 MIN', badge:'PLANETA · OCEANOGRAFIA',
  sections:[
    { title:'Como funciona', paragraphs:['Vento e ondas misturam a camada superficial. Abaixo dela, a temperatura pode cair rapidamente em uma faixa relativamente estreita: a termoclina. Em oceanos tropicais ela tende a ser mais persistente; em regiões temperadas varia com a estação.'] },
    { title:'Por que isso importa', bullets:['Afeta a propagação do som submarino.','Influencia mistura de nutrientes e ecossistemas.','A profundidade da água quente acima da termoclina importa na avaliação de energia disponível para ciclones.'] },
    { title:'Experiência mental', paragraphs:['Olhar apenas a temperatura da superfície é como medir a temperatura da tampa de uma panela: você ainda não sabe quanta água quente existe abaixo dela.'] },
  ],
  sources:[{ label:'NOAA Ocean Service · Thermocline', url:'https://oceanservice.noaa.gov/facts/thermocline.html' }],
});

set('animais', {
  title:'Como o oceano cria “corredores” que levam som a grandes distâncias',
  summary:'Temperatura e pressão alteram a velocidade do som na água. Em certas profundidades, a refração pode prender energia sonora em um canal e permitir propagação por centenas ou milhares de quilômetros.',
  readTime:'6 MIN', badge:'MUNDO ANIMAL · BIOACÚSTICA',
  sections:[
    { title:'A física', paragraphs:['Som é muito mais rápido na água que no ar. A velocidade muda com temperatura e pressão; quando a onda entra em regiões onde a velocidade muda, ela refrata — curva seu caminho.'] },
    { title:'A conexão animal', paragraphs:['Mamíferos marinhos vivem em um ambiente em que a comunicação acústica pode superar muito a visão. Hidrofones instalados na profundidade correta também conseguem captar sons distantes.'] },
    { title:'Limite importante', paragraphs:['Isso não significa que toda vocalização de baleia viaje milhares de quilômetros; frequência, ruído, profundidade, relevo e condições do oceano mudam o alcance.'] },
  ],
  sources:[{ label:'NOAA Ocean Service · Sound in the ocean', url:'https://oceanservice.noaa.gov/facts/sound.html' }],
});

set('tempo', {
  title:'Sexta mais fria em São Paulo: máxima perto de 24°C e mínima ao redor de 12°C',
  summary:'Depois do calor de quinta, a capital entra numa sexta mais fresca. A Defesa Civil também alertou para rajadas de vento fortes associadas à passagem da frente fria na Grande São Paulo.',
  shareSummary:'Tempo 21/08: São Paulo esfria, com previsão em torno de 24°C/12°C. A atenção não é só chuva: vento forte pode causar queda de galhos e objetos.',
  readTime:'4 MIN', badge:'TEMPO · SÃO PAULO',
  sections:[
    { title:'O que muda hoje', bullets:['Queda perceptível de temperatura em relação à quinta.','Vento ganha importância na sensação térmica e em risco de objetos/galhos.','A tendência do fim de semana é de manhãs frias e tardes amenas.'] },
    { title:'Como usar a informação', paragraphs:['Para sair cedo ou voltar tarde, considere uma camada extra de roupa. Em condição de rajada, evite estacionar ou permanecer sob árvores e estruturas instáveis.'] },
  ],
  sources:[{ label:'Defesa Civil / Band · 20/08/2026', url:'https://www.band.com.br/noticias/sp-defesa-civil-alerta-para-frente-fria-com-temporais-e-ventos-de-75-kmh-202608201449' }],
});

set('curiosidades', {
  title:'O pôr do sol fica vermelho porque a luz atravessa muito mais atmosfera perto do horizonte',
  summary:'Quando o Sol está baixo, a luz percorre um caminho maior dentro da atmosfera. Comprimentos de onda curtos são espalhados com mais eficiência e os tons vermelhos/alaranjados dominam o caminho direto.',
  readTime:'4 MIN', badge:'CURIOSIDADE · LUZ',
  sections:[
    { title:'Por que o céu é azul', paragraphs:['Moléculas do ar espalham comprimentos de onda curtos de forma mais eficiente. Essa luz azul chega aos seus olhos de várias direções e colore o céu.'] },
    { title:'E por que muda no horizonte', paragraphs:['Perto do nascer e do pôr do sol, o caminho óptico aumenta. Muito azul é espalhado para fora do feixe direto e sobra uma proporção maior de vermelho e laranja. Aerossóis e nuvens podem modificar a aparência.'] },
    { title:'Teste doméstico', paragraphs:['Uma pequena quantidade de leite em água e uma lanterna em ambiente escuro conseguem reproduzir qualitativamente o efeito de espalhamento.'] },
  ],
  sources:[{ label:'NASA · Exploring Colors in the Sky', url:'https://science.larc.nasa.gov/wp-content/uploads/sites/147/2022/04/EGaerosols_book_FINAL.pdf' }],
});

set('musica', {
  title:'Dois retratos da memória musical brasileira ocupam São Paulo neste fim de semana',
  summary:'O C6 no Rock reúne nomes e discos ligados ao rock brasileiro dos anos 80 no Ibirapuera; o festival Histórias reúne gerações do sertanejo no sábado. As trilhas continuam separadas no hub para não misturar repertórios e contextos.',
  readTime:'7 MIN', badge:'MÚSICA · FIM DE SEMANA',
  sections:[
    { title:'Rock', paragraphs:['O C6 no Rock acontece em 22 e 23 de agosto e revisita repertórios de Titãs, Paralamas, Ira!, Blitz e homenagens a nomes como Rita Lee e Cazuza.'] },
    { title:'Sertanejo de época', paragraphs:['O Histórias acontece em 22 de agosto com Chitãozinho & Xororó, Zezé Di Camargo & Luciano, Daniel, Victor & Leo, Bruno & Marrone, Matogrosso & Mathias e outros nomes.'] },
    { title:'Como ler a programação', paragraphs:['Programação cultural pode mudar; horário, ingresso e acesso devem ser confirmados no canal do evento antes de sair.'] },
  ],
  sources:[{ label:'Folha · C6 no Rock · 20/08/2026', url:'https://guia.folha.uol.com.br/shows/2026/08/c6-no-rock-reune-titas-paralamas-blitz-e-outros-classicos-dos-anos-1980-no-parque-ibirapuera.shtml' },{ label:'Folha · Histórias · 20/08/2026', url:'https://guia.folha.uol.com.br/shows/2026/08/chitaozinho-xororo-e-zeze-di-camargo-luciano-cantam-em-festival-sertanejo-em-sp.shtml' }],
});

set('games', {
  title:'gamescom dev começa dia 23; feira principal acontece de 26 a 30 de agosto',
  summary:'A agenda oficial de Colônia separa conferência de desenvolvedores, Opening Night Live e dias de feira. A principal regra do hub continua: confirmação oficial é uma coisa; rumor é outra.',
  readTime:'6 MIN', badge:'GAMES · AGENDA OFICIAL',
  sections:[
    { title:'Datas para salvar', bullets:['gamescom dev: 23–25 de agosto.','Opening Night Live: 25 de agosto.','gamescom: 26–30 de agosto.'] },
    { title:'O que acompanhar', bullets:['Anúncios com data/plataforma confirmados.','Demos e trailers com gameplay real.','Hardware, indies e ferramentas para desenvolvimento.'] },
    { title:'Regra editorial', paragraphs:['Teaser, vazamento e rumor ficam marcados como tal até confirmação por publisher, estúdio ou canal oficial do evento.'] },
  ],
  sources:[{ label:'gamescom · agenda 2026', url:'https://latam.gamescom.global/en/gamescom-worldwide/' },{ label:'gamescom dev · FAQ', url:'https://dev.gamescom.global/faq/' }],
});

set('gravidez', {
  title:'6 semanas + 5 dias: desenvolvimento rápido, sintomas intensos e uma visão antecipada do puerpério',
  summary:'Nesta fase, mudanças embrionárias acontecem em escala de dias e náusea pode oscilar bastante. A aba conecta o presente ao pós-parto para que apoio e segurança não comecem só depois do nascimento.',
  readTime:'12 MIN', badge:'GRAVIDEZ · 6S5D',
  sections:[
    { title:'Fase atual', paragraphs:['O sistema nervoso e estruturas embrionárias seguem em desenvolvimento acelerado. Estimativas de tamanho variam e não devem ser tratadas como medida clínica sem ultrassom.'] },
    { title:'Hoje na prática', bullets:['Pequenos goles após vômitos.','Evitar forçar refeição imediatamente.','Registrar frequência de vômitos se estiver difícil manter líquidos.','Levar sintomas relevantes ao pré-natal.'] },
    { title:'Preparação para o puerpério', paragraphs:['O módulo dedicado cobre primeiras horas, dias e semanas, recuperação física e emocional, divisão de tarefas, visitas, descanso, consultas e sinais de alerta.'] },
  ],
  sources:[{ label:'ACOG · Morning sickness', url:'https://www.acog.org/womens-health/faqs/morning-sickness-nausea-and-vomiting-of-pregnancy' },{ label:'WHO · Postnatal care', url:'https://www.who.int/publications/i/item/9789240045989' }],
});

set('pai', {
  title:'Apoio que reduz carga mental: perceber → decidir → fazer → avisar',
  summary:'Perguntar “o que eu posso fazer?” pode continuar deixando toda a gestão na cabeça dela. Em tarefas previsíveis, o apoio mais útil é assumir o ciclo completo com consentimento e comunicação simples.',
  readTime:'6 MIN', badge:'SER PAI · AÇÃO PRÁTICA',
  sections:[
    { title:'Exemplo hoje', bullets:['Repor água e alimentos que ela tolera.','Deixar banheiro/quarto organizados depois de um episódio de enjoo.','Cuidar de louça, lixo e cheiros que podem piorar náusea.','Confirmar o que precisa ser separado para consulta ou exame.'] },
    { title:'Como transmitir segurança', paragraphs:['Previsibilidade ajuda: dizer o que você vai assumir, cumprir e não exigir que ela acompanhe cada etapa. Segurança emocional também passa por acreditar nos sintomas e não disputar se “é para tanto”.'] },
    { title:'O que evitar', bullets:['Forçar comida ou medicamento.','Cobrar disposição igual à de antes.','Transformar ajuda em favor ou dívida.'] },
  ],
  sources:[{ label:'CDC · Hear Her · Support', url:'https://www.cdc.gov/hearher/support/index.html' }],
});

set('carros', {
  title:'Antes de comprar usado, tente descobrir se o motor já viveu superaquecimento',
  summary:'Quilometragem é apenas um número. Histórico térmico ruim pode afetar junta, cabeçote, mangueiras, reservatório, óleo e confiabilidade futura.',
  readTime:'7 MIN', badge:'CARROS · INSPEÇÃO',
  sections:[
    { title:'Onde olhar', bullets:['Reservatório com óleo, ferrugem ou crostas incomuns.','Fluido incompatível ou água pura.','Mangueiras muito endurecidas, estufadas ou improvisadas.','Ventoinha, válvula termostática e vazamentos.','Óleo com sinais de contaminação.'] },
    { title:'Durante o teste', paragraphs:['A temperatura deve estabilizar no comportamento normal do modelo. Ar-condicionado, trânsito parado e retomadas ajudam a observar o sistema sob carga, sem fazer teste abusivo.'] },
    { title:'Veredito', paragraphs:['Laudo cautelar não substitui inspeção mecânica. Se houver histórico de superaquecimento sem documentação de reparo, preço baixo pode esconder um risco caro.'] },
  ],
  sources:[{ label:'Bosch Car Service · manutenção e arrefecimento', url:'https://www.boschcarservice.com/br/pt/' }],
});

set('motos', {
  title:'Pneu de moto: data, ressecamento e deformação importam tanto quanto profundidade do sulco',
  summary:'Uma moto pouco rodada pode continuar com pneu envelhecido. Borracha perde propriedades com tempo, calor, UV, pressão incorreta e armazenamento.',
  readTime:'6 MIN', badge:'MOTOS · INSPEÇÃO',
  sections:[
    { title:'Checklist', bullets:['Leia o código de fabricação do pneu.','Procure microtrincas e ressecamento.','Observe desgaste em escamas ou plano no centro.','Compare pressão usada pelo dono com recomendação do fabricante.','Veja se rodas e suspensão explicam desgaste irregular.'] },
    { title:'Na pilotagem', paragraphs:['Vibração, tendência a cair para um lado e direção “pesada” podem ter várias causas; pneu é uma delas e deve ser interpretado junto com roda, rolamento e geometria.'] },
  ],
  sources:[{ label:'Michelin Motorcycle · tyre care', url:'https://www.michelinman.com/motorcycle/tips-and-advice' }],
});

set('mecanica', {
  title:'Fluido de freio envelhece mesmo sem vazamento: a umidade reduz a margem contra fervura',
  summary:'Fluidos glicólicos são higroscópicos: absorvem umidade ao longo do tempo. Isso reduz o ponto de ebulição e aumenta risco de formação de vapor em uso severo.',
  readTime:'6 MIN', badge:'MECÂNICA · FREIOS',
  sections:[
    { title:'Por que o pedal pode enganar', paragraphs:['Em condução leve o freio pode parecer normal. Em descida longa, trânsito severo ou frenagens repetidas, temperatura sobe; vapor é compressível e pode aumentar o curso do pedal.'] },
    { title:'Manutenção correta', bullets:['Siga especificação DOT e intervalo do fabricante.','Não misture produtos incompatíveis.','Evite frasco aberto por muito tempo.','Sangria correta é parte do serviço.'] },
    { title:'Não diagnostique pela cor apenas', paragraphs:['Cor escura pode sugerir contaminação/envelhecimento, mas o critério correto é procedimento, especificação e, quando disponível, teste adequado.'] },
  ],
  sources:[{ label:'Brembo · brake fluid', url:'https://www.bremboparts.com/america/en/support/maintenance/brake-fluid-135168' }],
});

set('nautica', {
  title:'Milha náutica e nó transformam geometria da Terra em uma linguagem prática de navegação',
  summary:'Uma milha náutica corresponde a 1.852 metros; um nó é uma milha náutica por hora. A unidade conversa naturalmente com latitude e cartas náuticas.',
  readTime:'5 MIN', badge:'NÁUTICA · FUNDAMENTOS',
  sections:[
    { title:'Por que não usar km/h', paragraphs:['Na navegação, posição é tradicionalmente expressa em graus e minutos de latitude/longitude. A milha náutica foi padronizada de forma que se encaixa melhor nessa geometria do que a milha terrestre.'] },
    { title:'Regra para memorizar', bullets:['1 NM = 1.852 m.','1 knot = 1 NM por hora.','10 nós ≈ 18,52 km/h.'] },
    { title:'Na prática', paragraphs:['Distância, velocidade, previsão de chegada e consumo podem ser calculados na mesma linguagem usada por cartas e instrumentos.'] },
  ],
  sources:[{ label:'NOAA · nautical mile and knot', url:'https://oceanservice.noaa.gov/facts/nauticalmile_knot.html' }],
});

set('viagens', {
  title:'Paranapiacaba: bate-volta que recompensa quem planeja clima, caminhada e horário de retorno',
  summary:'A vila histórica de Santo André combina patrimônio ferroviário, trilhas e clima muito úmido. Neblina pode fazer parte da paisagem, mas também reduz visibilidade e muda a sensação térmica.',
  readTime:'6 MIN', badge:'VIAGENS · PERTO DE SP',
  sections:[
    { title:'Planejamento', bullets:['Confira previsão e chance de chuva.','Use calçado para piso molhado/irregular.','Confirme horários de atrações e visitação.','Defina retorno antes de sair, especialmente sem carro.'] },
    { title:'O que observar', paragraphs:['A vila nasceu ligada à ferrovia e à Serra do Mar. Arquitetura, relevo e umidade contam uma história de engenharia, logística e ocupação urbana.'] },
    { title:'Sem romantizar neblina', paragraphs:['Neblina pode ser bonita e reduzir muito a visibilidade. Em estrada ou trilha, planejamento e orientação local vêm antes da foto.'] },
  ],
  sources:[{ label:'Prefeitura de Santo André · Paranapiacaba', url:'https://www3.santoandre.sp.gov.br/turismosantoandre/paranapiacaba/' }],
});

set('financas', {
  title:'Dólar perto de R$5,19 + petróleo em alta: como o choque externo pode atravessar sua vida financeira',
  summary:'O dólar comercial fechou 20/08 perto de R$5,19 e o petróleo avançou com tensão no Oriente Médio. O efeito no Brasil pode aparecer em importados, combustíveis, inflação esperada, juros e Bolsa — em velocidades diferentes.',
  readTime:'8 MIN', badge:'FINANÇAS · MERCADOS',
  sections:[
    { title:'Canais de transmissão', bullets:['Dólar encarece itens e insumos importados.','Petróleo alto pode pressionar combustível e frete.','Inflação esperada influencia curva de juros.','Exportadoras podem reagir de forma diferente de empresas dependentes de importação.'] },
    { title:'O que não concluir', paragraphs:['Um dia de mercado não define tendência. Nem todo movimento do Brent vira preço de bomba imediatamente, e o câmbio depende de muitos outros fluxos.'] },
    { title:'O que acompanhar', bullets:['Brent e fluxo pelo Estreito de Hormuz.','Dólar/real e juros futuros.','Comunicação de BC e Fed.','Política de preços e estoques de combustível.'] },
  ],
  sources:[{ label:'UOL Economia · fechamento 20/08/2026', url:'https://economia.uol.com.br/cotacoes/noticias/redacao/2026/08/20/dolar-bolsa-fechamento-hoje-20-de-agosto-de-2026.ghtm' },{ label:'Reuters · petróleo · 20/08/2026', url:'https://www.reuters.com/business/energy/oil-prices-steady-investors-assess-us-iran-war-outlook-2026-08-20/' }],
});

set('tecnologia', {
  title:'Cerebras CS-4: a corrida de IA está migrando do “treinar maior” para “responder mais rápido e barato”',
  summary:'A Cerebras apresentou o sistema CS-4 para acelerar inferência de modelos, com nova arquitetura modular e foco em reduzir latência e complexidade de implantação em data centers.',
  readTime:'7 MIN', badge:'TECNOLOGIA · IA',
  sections:[
    { title:'O que foi anunciado', paragraphs:['O CS-4 combina chips de grande área da Cerebras em módulos plugáveis e uma arquitetura de servidor voltada a inferência. A empresa diz ter reduzido a quantidade de componentes em relação à geração anterior.'] },
    { title:'Por que inferência importa', paragraphs:['Treinar cria o modelo; inferência é o que acontece toda vez que alguém pede uma resposta. Em produto de larga escala, latência, throughput, energia e custo por token podem ser tão importantes quanto o treinamento.'] },
    { title:'O que acompanhar', bullets:['Benchmarks independentes.','Custo total por workload.','Disponibilidade de energia e interconexão.','Adoção frente a Nvidia e aceleradores customizados.'] },
  ],
  sources:[{ label:'Reuters · 19/08/2026', url:'https://www.reuters.com/technology/cerebras-launches-new-server-chip-system-designed-speed-ai-chatbots-2026-08-19/' }],
});

set('security-briefing', {
  title:'Decision Desk · revisão de 21/08: sinais fortes permanecem, mas agora com validação diária explícita',
  summary:'Identidade/cloud, supply chain, serverless, AI vulnerability management e agentes seguem materiais após nova revisão. O hub mantém decisão, evidência, limites, exposição, controles e owner por tópico.',
  readTime:'12 MIN', badge:'SECURITY BRIEFING · VALIDADO HOJE', sections:[],
});

set('seguranca', {
  title:'ClickFix: a engenharia social que transforma o usuário no executor inicial do ataque',
  summary:'Páginas falsas de CAPTCHA ou “correção de erro” orientam a vítima a copiar e executar comandos. Isso desloca a defesa de simples bloqueio de URL para comportamento, hardening e conscientização contextual.',
  readTime:'8 MIN', badge:'CYBER · SOCIAL ENGINEERING',
  sections:[
    { title:'Cadeia típica', bullets:['Phishing, malvertising ou site comprometido.','Página de verificação/erro convincente.','Comando copiado para clipboard.','Usuário abre Run/Terminal/PowerShell e executa.','Payload baixa segundo estágio ou ferramenta remota.'] },
    { title:'Por que passa por controles', paragraphs:['O usuário legítimo está executando uma ação em componentes legítimos do sistema. Bloquear só o domínio perde eficiência quando a infraestrutura muda rapidamente.'] },
    { title:'Defesa prática', bullets:['Educar sobre “copie e execute para verificar”.','Restringir shells/Run quando operacionalmente possível.','Detectar processos filhos anômalos de explorer/terminal.','Correlacionar curl/powershell/osacript com download e persistência.'] },
  ],
  sources:[{ label:'Microsoft Security · ClickFix', url:'https://www.microsoft.com/en-us/security/blog/2025/08/21/think-before-you-clickfix-analyzing-the-clickfix-social-engineering-technique/' },{ label:'CTIR Gov · Recomendação 03/2026', url:'https://www.gov.br/gsi/pt-br/assuntos/ctir/recomendacoes/2026/recomendacao-03-2026' }],
});

set('appsec-ssdlc', {
  title:'Agentic CI/CD: quando o agente pode ler issue, editar código e chamar pipeline, autorização vira controle de aplicação',
  summary:'Um agente não deveria herdar automaticamente o poder do usuário ou do runner. Cada ferramenta precisa aplicar identidade, escopo, approval e evidência próprios.',
  readTime:'9 MIN', badge:'APPSEC · AGENTIC CI/CD',
  sections:[
    { title:'Trust boundaries', bullets:['Prompt e conteúdo externo podem ser não confiáveis.','Tool call precisa de autorização própria.','Runner/token define blast radius.','Release precisa de gate independente da “decisão” do modelo.'] },
    { title:'Controles', bullets:['Tokens curtos e least privilege.','Separar jobs de leitura, build e release.','Human approval para ações destrutivas/produção.','Logs de tool calls e proveniência do artefato.','Não expor secrets a código não confiável.'] },
    { title:'Gate melhor', paragraphs:['O finding não deve ser “IA é perigosa”; o gate deve verificar se uma entrada não confiável consegue atravessar prompt → tool → token → ação privilegiada sem uma decisão determinística no caminho.'] },
  ],
  sources:[{ label:'Microsoft Security · Securing CI/CD in an agentic world', url:'https://www.microsoft.com/en-us/security/blog/2026/06/05/securing-ci-cd-in-an-agentic-world-claude-code-github-action-case/' },{ label:'NIST SSDF', url:'https://csrc.nist.gov/pubs/sp/800/218/final' }],
});
