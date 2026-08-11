export type SourceLink = {
  label: string;
  url: string;
};

export type IntelStat = {
  label: string;
  value: string;
  note?: string;
};

export type IntelSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type DailyIntel = {
  title: string;
  summary: string;
  shareSummary?: string;
  readTime: string;
  badge?: string;
  stats?: IntelStat[];
  sections: IntelSection[];
  sources?: SourceLink[];
  disclaimer?: string;
};

export const edition = {
  date: '11/08/2026',
  dateLabel: '11 AGO 2026',
  title: 'Daily Intelligence · 11 de agosto',
};

export const todayDrops = [
  { slug: 'mundo', label: 'Mundo', emoji: '🌍', title: 'Hormuz mantém petróleo e inflação no radar', detail: 'Entenda como o impasse no estreito pode chegar ao combustível, frete e juros.' },
  { slug: 'politica', label: 'Política', emoji: '🏛️', title: 'Eleições entram em uma semana-chave', detail: 'Registro de candidaturas termina dia 15; propaganda eleitoral começa dia 16.' },
  { slug: 'tempo', label: 'Tempo e Clima', emoji: '🌦️', title: 'El Niño ganha força', detail: 'NOAA mantém alta probabilidade de persistência até o início de 2027.' },
  { slug: 'gravidez', label: 'Gravidez', emoji: '🤰', title: 'Semana 5 + 2 dias', detail: 'O embrião entra numa fase importante de formação do sistema nervoso e tecido cardíaco.' },
  { slug: 'pai', label: 'Ser Pai', emoji: '👨‍🍼', title: 'Missão de hoje: presença prática', detail: 'Participar da gestação começa com constância, escuta e divisão real de responsabilidades.' },
  { slug: 'carros', label: 'Carros', emoji: '🚗', title: 'Radar R$ 30–60 mil: Honda Fit 2014', detail: 'Referências de julho/2026, faixa de mercado e o que analisar antes de comprar.' },
  { slug: 'seguranca', label: 'Cyber', emoji: '🛡️', title: 'Vishing + SSO: quando identidade vira o ataque', detail: 'UNC6671 mostra por que MFA tradicional e help desk também precisam de defesa.' },
  { slug: 'appsec-ssdlc', label: 'AppSec', emoji: '🧬', title: 'Supply chain de IA já está no alvo', detail: 'Pacotes, GitHub Actions e segredos de build entraram definitivamente no threat model.' },
];

export const dailyContent: Record<string, DailyIntel> = {
  hoje: {
    title: 'Seu briefing de 11 de agosto',
    summary: 'Uma edição para entender o que está mexendo com o mundo, aprender algo novo e acompanhar os assuntos que importam para sua vida.',
    readTime: '8 MISSÕES',
    badge: 'DAILY DROP',
    sections: [],
  },

  brasil: {
    title: 'Brasil: orçamento ganha espaço, mas parte das despesas segue bloqueada',
    summary: 'O governo anunciou em julho o desbloqueio de R$ 5,7 bilhões após revisão das despesas obrigatórias. Ainda permanecem R$ 17,9 bilhões bloqueados.',
    shareSummary: 'O orçamento federal teve R$ 5,7 bilhões desbloqueados após revisão de despesas obrigatórias, mas R$ 17,9 bilhões continuam bloqueados. O dado ajuda a entender quanto espaço o governo possui para executar políticas e investimentos ao longo do ano.',
    readTime: '4 MIN READ',
    badge: 'BRASIL / CONTEXTO',
    stats: [
      { label: 'DESBLOQUEIO', value: 'R$ 5,7 bi', note: 'anunciado em 24/07' },
      { label: 'AINDA BLOQUEADO', value: 'R$ 17,9 bi' },
      { label: 'PROJEÇÃO PRIMÁRIA', value: 'R$ 10,8 bi', note: 'superávit do governo central após deduções legais' },
    ],
    sections: [
      { title: 'O que aconteceu', paragraphs: ['O Ministério do Planejamento informou que a projeção de algumas despesas obrigatórias caiu. Isso abriu espaço para liberar R$ 5,7 bilhões que estavam bloqueados no orçamento de 2026.'], bullets: ['A estimativa de gasto com pessoal caiu R$ 4,2 bilhões.', 'As projeções para benefícios previdenciários e BPC/LOAS também recuaram.', 'Mesmo após a liberação, R$ 17,9 bilhões continuam bloqueados.'] },
      { title: 'Por que isso importa', paragraphs: ['Bloqueio orçamentário não significa que o dinheiro desapareceu: significa que a execução fica temporariamente limitada para respeitar as regras fiscais. Quando parte do valor é desbloqueada, ministérios recuperam espaço para executar despesas previstas.'] },
      { title: 'O que não dá para concluir', paragraphs: ['O anúncio não significa automaticamente mais gasto em qualquer área específica. O efeito depende da programação orçamentária e da distribuição do espaço liberado entre os órgãos.'] },
    ],
    sources: [
      { label: 'Ministério do Planejamento · 24/07/2026', url: 'https://www.gov.br/planejamento/pt-br/assuntos/noticias-defeso-eleitoral-2026/projecao-para-despesas-obrigatorias-em-2026-diminui-e-governo-anuncia-desbloqueio-de-r-5-7-bilhoes' },
    ],
  },

  politica: {
    title: 'Eleições 2026 entram em uma semana decisiva',
    summary: 'O calendário eleitoral chega a dois marcos importantes: o registro formal das candidaturas termina em 15 de agosto e a propaganda eleitoral geral começa no dia 16.',
    shareSummary: 'A próxima virada das Eleições 2026 acontece neste fim de semana: partidos, federações e coligações têm até 15/08 para registrar candidaturas; a propaganda eleitoral geral, inclusive na internet, passa a ser permitida em 16/08.',
    readTime: '3 MIN READ',
    badge: 'POLÍTICA / ELEIÇÕES',
    stats: [
      { label: 'REGISTRO', value: '15 AGO', note: 'até 19h' },
      { label: 'PROPAGANDA', value: '16 AGO', note: 'inclusive internet' },
    ],
    sections: [
      { title: 'O que muda agora', bullets: ['Até 15 de agosto, partidos, federações e coligações devem formalizar os pedidos de registro das candidaturas.', 'A partir de 16 de agosto começa a propaganda eleitoral geral, inclusive na internet.', 'Antes disso, comunicação de pré-candidatura e propaganda eleitoral têm regras diferentes.'] },
      { title: 'Como acompanhar sem cair em torcida', paragraphs: ['Separe sempre quatro coisas: fato confirmado, declaração de candidato, proposta de campanha e decisão efetivamente tomada. Elas não têm o mesmo peso.'], bullets: ['Confira a fonte original da regra ou dado.', 'Quando houver número econômico, procure metodologia e período.', 'Evite transformar promessa eleitoral em resultado futuro garantido.'] },
    ],
    sources: [
      { label: 'TSE · Calendário Eleitoral 2026', url: 'https://www.tse.jus.br/eleicoes/calendario-eleitoral/calendario-eleitoral' },
      { label: 'TSE · Principais datas', url: 'https://www.tse.jus.br/comunicacao/noticias/2026/Marco/eleicoes-2026-confira-as-principais-datas-do-calendario-eleitoral' },
    ],
  },

  mundo: {
    title: 'Hormuz mantém petróleo, inflação e juros globais sob pressão',
    summary: 'O impasse envolvendo Estados Unidos e Irã continua influenciando o petróleo. O Brent chegou a flertar com US$ 90 por barril nesta terça, enquanto mercados aguardam novos dados de inflação dos EUA.',
    shareSummary: 'O petróleo voltou ao centro do mercado mundial: o Brent rondou US$ 90 em 11/08 diante da incerteza sobre o Estreito de Hormuz. Para o Brasil, o canal de transmissão passa por energia, câmbio, combustíveis, frete e inflação — mas preço na bomba não acompanha o barril de forma automática.',
    readTime: '5 MIN READ',
    badge: 'GLOBAL WATCH',
    stats: [
      { label: 'BRENT', value: '~US$ 90', note: 'oscilou ao longo do dia' },
      { label: 'RISCO', value: 'HORMUZ', note: 'rota estratégica de energia' },
      { label: 'PRÓXIMO FOCO', value: 'INFLAÇÃO EUA' },
    ],
    sections: [
      { title: 'O que está acontecendo', paragraphs: ['Os mercados continuam reagindo às incertezas sobre o Estreito de Hormuz e às negociações envolvendo EUA e Irã. O petróleo subiu com a percepção de menor chance de uma solução rápida.'] },
      { title: 'Como isso chega ao Brasil', bullets: ['Petróleo mais caro pode pressionar derivados e custos de transporte.', 'Frete mais caro pode aparecer em vários preços da economia.', 'Choques de energia podem dificultar o trabalho dos bancos centrais contra a inflação.', 'O câmbio e a política comercial da Petrobras também interferem no preço final no Brasil.'] },
      { title: 'O que é fato e o que é cenário', paragraphs: ['Fato: os preços do petróleo reagiram às tensões e oscilaram perto de US$ 90. Possibilidade: uma escalada prolongada pode aumentar pressão inflacionária. Não é fato: que a gasolina brasileira necessariamente subirá na mesma proporção ou imediatamente.'] },
    ],
    sources: [
      { label: 'Reuters · Morning Bid · 11/08/2026', url: 'https://www.reuters.com/world/china/global-markets-view-europe-2026-08-11/' },
    ],
  },

  planeta: {
    title: 'A Terra é mais estranha do que uma esfera',
    summary: 'Nosso planeta é um elipsoide irregular: a rotação cria uma saliência no equador, enquanto relevo e variações do campo gravitacional tornam a forma real ainda mais complexa.',
    readTime: '4 MIN READ',
    badge: 'PLANET FILE',
    stats: [
      { label: 'FORMA APROX.', value: 'ELIPSOIDE' },
      { label: 'MODELO GRAV.', value: 'GEOIDE' },
    ],
    sections: [
      { title: 'Por que o equador é mais largo', paragraphs: ['A rotação da Terra produz um efeito centrífugo maior próximo ao equador. Por isso o planeta é ligeiramente achatado nos polos e alargado na região equatorial.'] },
      { title: 'A conexão menos óbvia', paragraphs: ['Nem mesmo o nível médio do mar forma uma superfície perfeitamente regular. Pequenas diferenças no campo gravitacional criam variações; o modelo usado para representar essa superfície é chamado geoide.'], bullets: ['Geodésia mede forma, tamanho e campo gravitacional da Terra.', 'Tectônica, marés, terremotos e derretimento de grandes massas de gelo alteram a forma do planeta ao longo do tempo.'] },
    ],
    sources: [
      { label: 'NOAA Ocean Service · Is the Earth round?', url: 'https://oceanservice.noaa.gov/facts/earth-round.html' },
      { label: 'NOAA · What is the geoid?', url: 'https://oceanservice.noaa.gov/facts/geoid.html' },
    ],
  },

  animais: {
    title: 'Baleias conseguem dormir sem deixar de respirar',
    summary: 'Baleias e golfinhos não entram no mesmo tipo de sono profundo contínuo que humanos. Eles conseguem descansar um hemisfério cerebral de cada vez.',
    readTime: '4 MIN READ',
    badge: 'WILDLIFE INTEL',
    stats: [
      { label: 'ESTRATÉGIA', value: 'SONO UNI-HEMISFÉRICO' },
      { label: 'PRECISAM MANTER', value: 'RESPIRAÇÃO + NADO' },
    ],
    sections: [
      { title: 'Como funciona', paragraphs: ['Cetáceos precisam manter a capacidade de subir à superfície para respirar e continuar atentos ao ambiente. Durante o descanso, um lado do cérebro pode reduzir sua atividade enquanto o outro permanece mais desperto.'] },
      { title: 'Por que isso muda nossa percepção', paragraphs: ['Sono não é uma única solução biológica. A evolução adapta o descanso às necessidades de cada espécie. Para um animal que vive permanentemente na água e respira ar, perder completamente a consciência seria um problema enorme.'] },
    ],
    sources: [
      { label: 'NOAA Fisheries · Dolphins and Whales on the High Seas', url: 'https://www.fisheries.noaa.gov/pacific-islands/endangered-species-conservation/question-week-dolphins-and-whales-high-seas' },
    ],
  },

  tempo: {
    title: 'El Niño continua e a probabilidade de persistência é muito alta',
    summary: 'A NOAA informou em julho que o El Niño segue ativo e deve ganhar força. A estimativa era de 97% de chance de persistir até o começo da primavera de 2027 no Hemisfério Norte.',
    shareSummary: 'A NOAA mantém El Niño ativo e prevê fortalecimento até o fim de 2026, com 97% de chance de persistência até o início da primavera de 2027 no Hemisfério Norte. No Brasil, o INMET associa o padrão a maior chance de chuva no Sul e condições mais secas em partes do centro-norte — mas impactos locais nunca são garantidos.',
    readTime: '5 MIN READ',
    badge: 'CLIMATE WATCH',
    stats: [
      { label: 'PERSISTÊNCIA', value: '97%', note: 'probabilidade NOAA; não é certeza' },
      { label: 'MUITO FORTE', value: '81%', note: 'chance para out–dez na projeção de julho' },
    ],
    sections: [
      { title: 'O que a NOAA diz', paragraphs: ['O sistema oceano-atmosfera já apresenta sinais consistentes de El Niño. A previsão de julho apontou fortalecimento ao longo de 2026.'] },
      { title: 'Possíveis efeitos no Brasil', bullets: ['Maior frequência e volume de chuva no Sul é um padrão associado ao fenômeno.', 'Partes do Norte e Nordeste tendem a maior risco de redução de chuva.', 'Temperaturas acima da média e risco de incêndios podem aumentar em algumas áreas.', 'Esses são padrões probabilísticos: cada evento e cada região podem responder de forma diferente.'] },
      { title: 'Tempo ≠ clima', paragraphs: ['Uma chuva forte amanhã é tempo. Um padrão de meses com maior probabilidade de chuva é clima. El Niño altera probabilidades e circulação atmosférica; não define sozinho o que acontecerá em cada cidade e em cada dia.'] },
    ],
    sources: [
      { label: 'NOAA CPC · ENSO Discussion · 09/07/2026', url: 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/ensodisc.shtml' },
      { label: 'INMET · El Niño 2026', url: 'https://portal.inmet.gov.br/noticias/el-ni%C3%B1o-2026-saiba-detalhes-sobre-o-monitoramento-previs%C3%B5es-e-os-poss%C3%ADveis-impactos-do-fen%C3%B4meno-no-brasil' },
    ],
  },

  curiosidades: {
    title: 'Quando você olha para o Sol, está olhando para o passado',
    summary: 'A luz não chega instantaneamente. A NASA calcula o tempo de viagem da luz entre Sol e Terra em cerca de 8,35 minutos.',
    readTime: '3 MIN READ',
    badge: 'CURIOSITY DROP',
    stats: [
      { label: 'LUZ SOL → TERRA', value: '~8,35 MIN' },
      { label: 'DISTÂNCIA MÉDIA', value: '~150 MI KM' },
    ],
    sections: [
      { title: 'O que isso significa', paragraphs: ['Se algum fenômeno acontecesse no Sol neste instante, a informação luminosa só chegaria até nós vários minutos depois. O céu é, literalmente, um arquivo de diferentes momentos do passado.'] },
      { title: 'A escala fica ainda mais estranha', paragraphs: ['A Lua está a pouco mais de um segundo-luz. Estrelas próximas são vistas anos no passado. Galáxias distantes podem ser observadas como eram milhões ou bilhões de anos atrás.'] },
    ],
    sources: [
      { label: 'NASA · Facts About Earth', url: 'https://science.nasa.gov/earth/facts/' },
    ],
  },

  gravidez: {
    title: 'Semana 5: uma fase pequena no tamanho e enorme no desenvolvimento',
    summary: 'Na quinta semana começa o estágio embrionário. Estruturas que darão origem ao cérebro e à medula começam a se formar, e o tecido cardíaco também inicia seu desenvolvimento.',
    shareSummary: 'Estamos em 5 semanas + 2 dias, com DPP estimada em 11/04/2027. Nesta fase começa o estágio embrionário: cérebro, coluna/tubo neural e tecido cardíaco entram em desenvolvimento. O foco é pré-natal precoce, alimentação segura, nada de álcool e seguir a orientação individual do obstetra.',
    readTime: '6 MIN READ',
    badge: 'BABY MISSION',
    stats: [
      { label: 'DPP', value: '11/04/2027' },
      { label: 'FASE', value: 'EMBRIONÁRIA' },
      { label: 'FOCO', value: 'PRÉ-NATAL' },
    ],
    sections: [
      { title: 'O que está acontecendo agora', bullets: ['A quinta semana marca o início do estágio embrionário.', 'Cérebro e coluna começam a se formar, seguidos pelo tubo neural.', 'O tecido cardíaco começa a se desenvolver.', 'Estruturas da face e ouvido interno também começam seu processo de formação nas primeiras semanas.'] },
      { title: 'Cuidados simples e importantes', bullets: ['Manter o acompanhamento pré-natal e levar dúvidas para a equipe de saúde.', 'Evitar carne e ovos malpassados, leite/queijos não pasteurizados e alimentos crus sem higienização adequada.', 'Evitar álcool: não existe quantidade conhecida como segura durante a gestação.', 'Suplementação, inclusive ácido fólico, deve seguir a orientação do pré-natal para o caso individual.'] },
      { title: 'Quando procurar avaliação', paragraphs: ['Sintomas na gravidez variam muito. Sangramento importante, dor intensa, desmaio, febre ou qualquer piora que preocupe vocês merece contato com o serviço de saúde. O app não deve ser usado para decidir se um sintoma grave pode esperar.'] },
    ],
    sources: [
      { label: 'ACOG · Changes During Pregnancy', url: 'https://www.acog.org/womens-health/infographics/changes-during-pregnancy' },
      { label: 'CDC · Safer Food Choices for Pregnant Women', url: 'https://www.cdc.gov/food-safety/foods/pregnant-women.html' },
      { label: 'CDC · Alcohol and Pregnancy', url: 'https://www.cdc.gov/alcohol-pregnancy/about/index.html' },
    ],
    disclaimer: 'Conteúdo educativo. O acompanhamento individual da gestação deve ser feito pelo obstetra e pela equipe de pré-natal.',
  },

  pai: {
    title: 'Ser pai começa antes do nascimento',
    summary: 'A missão não é “ajudar” de vez em quando. É assumir presença, cuidado e responsabilidade como parte da rotina familiar desde a gestação.',
    shareSummary: 'Uma ideia que vale guardar: paternidade ativa começa antes do nascimento. Não é “ajudar a mãe”; é assumir cuidado, presença, decisões e responsabilidades como parte da rotina. Vínculo é construído na constância, não na perfeição.',
    readTime: '5 MIN READ',
    badge: 'FATHER QUEST',
    stats: [
      { label: 'MISSÃO DE HOJE', value: 'PRESENÇA' },
      { label: 'REGRA', value: 'CONSTÂNCIA > PERFEIÇÃO' },
    ],
    sections: [
      { title: 'Missão de hoje', bullets: ['Pergunte como ela está e escute antes de tentar resolver tudo.', 'Assuma uma tarefa da rotina sem esperar que ela peça.', 'Acompanhe o que está acontecendo na semana gestacional e anote dúvidas para a consulta.', 'Conversem sobre decisões importantes como um time, respeitando que o corpo e os sintomas são dela.'] },
      { title: 'Uma ideia importante', paragraphs: ['UNICEF destaca que o vínculo entre pai e criança é construído pela presença na vida diária. A linguagem importa: cuidar do bebê não é “ajudar a mãe”, é exercer o papel de cuidador.'] },
      { title: 'Aprender antes de precisar', bullets: ['Sono seguro do bebê.', 'Instalação e uso correto do dispositivo de retenção no carro.', 'Primeiros socorros e engasgo em curso confiável.', 'Rotina de consultas e vacinação.', 'Sinais de sofrimento emocional no pós-parto, inclusive no pai.'] },
    ],
    sources: [
      { label: 'UNICEF · The relationship between father and baby', url: 'https://www.unicef.org/parenting/child-care/relationship-between-father-and-baby' },
      { label: 'American Academy of Pediatrics · New Dads & Partners', url: 'https://www.healthychildren.org/English/ages-stages/baby/pages/A-Special-Message-to-Fathers.aspx' },
    ],
    disclaimer: 'Não existe fórmula para ser “o melhor pai do mundo”. Segurança, vínculo e desenvolvimento infantil devem seguir orientações de profissionais e fontes pediátricas confiáveis.',
  },

  carros: {
    title: 'Radar R$ 30–60 mil: Honda Fit 2014 entra no limite superior',
    summary: 'Em julho de 2026, versões automáticas do Fit 2014 apareceram com FIPE na faixa de R$ 54 mil a R$ 59 mil. É um bom exemplo de como preço, versão e estado precisam ser avaliados juntos.',
    shareSummary: 'Radar de usados: em julho/2026, o Honda Fit 2014 LX automático tinha FIPE de R$ 54.729 e média Webmotors de R$ 56.493. O EX automático tinha FIPE de R$ 56.678. Antes de comprar, histórico de manutenção, laudo, estado do câmbio, suspensão e arrefecimento pesam mais do que olhar só o hodômetro.',
    readTime: '6 MIN READ',
    badge: 'GARAGE SCAN',
    stats: [
      { label: 'FIT LX AT 2014', value: 'R$ 54.729', note: 'FIPE jul/2026' },
      { label: 'MÉDIA WEBMOTORS', value: 'R$ 56.493', note: 'LX automático · jul/2026' },
      { label: 'FIT EX AT 2014', value: 'R$ 56.678', note: 'FIPE jul/2026' },
    ],
    sections: [
      { title: 'Por que ele aparece no radar', bullets: ['Boa versatilidade interna para a categoria.', 'Ampla presença no mercado de usados.', 'Versões de 2014 ainda cabem, em alguns casos, no teto de R$ 60 mil.'] },
      { title: 'Não compre pelo quilômetro sozinho', paragraphs: ['Quilometragem é contexto, não diagnóstico. Um carro com 120 mil km e manutenção comprovada pode estar melhor que um de 70 mil km negligenciado ou adulterado.'], bullets: ['Peça histórico de manutenção e notas quando houver.', 'Faça cautelar/laudo e inspeção mecânica independente.', 'Teste câmbio a frio e quente, suspensão, direção, ar-condicionado e arrefecimento.', 'Consulte seguro para o seu perfil antes de fechar negócio.'] },
      { title: 'Como ler o preço', paragraphs: ['FIPE é referência, não etiqueta obrigatória. Região, versão, conservação, histórico, pneus, documentação e demanda alteram o preço real. As faixas de anúncios mudam diariamente.'] },
    ],
    sources: [
      { label: 'Webmotors/FIPE · Fit LX 2014 automático · jul/2026', url: 'https://www.webmotors.com.br/tabela-fipe/carros/honda/fit/2014/14-lx-16v-flex-4p-automatico' },
      { label: 'Webmotors/FIPE · Fit EX 2014 automático · jul/2026', url: 'https://www.webmotors.com.br/tabela-fipe/carros/honda/fit/2014/15-ex-16v-flex-4p-automatico' },
    ],
    disclaimer: 'Valores são retratos de mercado e mudam. Não constituem recomendação de compra sem inspeção do veículo específico.',
  },

  motos: {
    title: 'Usada interessante: Yamaha FZ25 2019',
    summary: 'A FZ25 2019 tinha FIPE de R$ 17.538 em julho de 2026 e média Webmotors próxima de R$ 18,6 mil. A diferença entre unidades pode ser grande por uso e conservação.',
    shareSummary: 'Radar de motos: Yamaha FZ25 2019 — FIPE de R$ 17.538 em julho/2026 e média Webmotors de R$ 18.634. Em moto usada, olhe relação, pneus, bengalas, vazamentos, freios, sinais de queda, partida a frio e histórico; km isolada conta pouco.',
    readTime: '5 MIN READ',
    badge: 'MOTO SCAN',
    stats: [
      { label: 'FIPE JUL/26', value: 'R$ 17.538' },
      { label: 'MÉDIA WEBMOTORS', value: 'R$ 18.634' },
      { label: 'ANÚNCIOS OBSERVADOS', value: 'R$ 16,5–20,9 mil' },
    ],
    sections: [
      { title: 'Checklist rápido de usada', bullets: ['Pneus: idade, desgaste e ressecamento.', 'Relação: corrente, coroa e pinhão sem pontos duros ou desgaste excessivo.', 'Suspensão: bengalas sem vazamento e sem marcas de impacto.', 'Freios: discos, pastilhas e ABS sem alertas.', 'Motor frio: peça para ligar antes de o vendedor aquecer a moto.', 'Estrutura: procure desalinhamento, soldas suspeitas e marcas de queda.'] },
      { title: 'O erro comum', paragraphs: ['Comprar pela menor quilometragem. Em motocicleta, uso severo, manutenção ruim, quedas e longos períodos parada podem importar tanto quanto o hodômetro.'] },
    ],
    sources: [
      { label: 'Webmotors/FIPE · Yamaha FZ25 2019 · jul/2026', url: 'https://www.webmotors.com.br/tabela-fipe/motos/yamaha/fz25-fazer-abs/2019' },
    ],
  },

  mecanica: {
    title: 'Óleo do motor: lubrificar é só uma parte do trabalho',
    summary: 'O óleo cria uma película entre superfícies metálicas, ajuda a controlar temperatura, carrega contaminantes até o filtro e protege componentes internos.',
    readTime: '5 MIN READ',
    badge: 'MECH LAB',
    stats: [
      { label: 'FUNÇÕES', value: 'LUBRIFICAR · LIMPAR · RESFRIAR' },
      { label: 'REGRA', value: 'ESPECIFICAÇÃO CORRETA' },
    ],
    sections: [
      { title: 'O que ele faz', bullets: ['Reduz contato metal-metal e desgaste.', 'Ajuda a remover calor de áreas críticas.', 'Mantém contaminantes em suspensão para que cheguem ao filtro.', 'Ajuda na vedação entre anéis e cilindros e protege contra corrosão.'] },
      { title: 'Viscosidade não é “quanto mais grosso, melhor”', paragraphs: ['O motor é projetado para uma faixa de viscosidade e uma especificação de desempenho. Alterar isso por conta própria pode piorar lubrificação na partida, fluxo interno e funcionamento de sistemas hidráulicos. Consulte o manual.'] },
      { title: 'Sinal que não deve ser ignorado', paragraphs: ['Luz de pressão de óleo acesa com o motor funcionando merece parada segura e avaliação. Continuar rodando com pressão insuficiente pode provocar dano severo rapidamente.'] },
    ],
    disclaimer: 'Conteúdo educativo. Diagnóstico e reparo devem considerar o modelo do veículo e o manual do fabricante.',
  },

  nautica: {
    title: 'Quanto custa deixar uma lancha em marina? Um exemplo real ajuda a dimensionar',
    summary: 'O Pier Club, em Bertioga, publica referência de R$ 60 por pé/mês para vaga molhada e R$ 90 por pé/mês em galpão seco coberto. Isso mostra por que o custo de posse começa antes do combustível.',
    shareSummary: 'Exemplo náutico em Bertioga: o Pier Club publica R$ 60/pé por mês para vaga no píer e R$ 90/pé para galpão seco. Numa lancha de 26 pés, isso dá cerca de R$ 1.560/mês ou R$ 2.340/mês só de guarda — antes de combustível, seguro e manutenção.',
    readTime: '5 MIN READ',
    badge: 'NAUTICAL LOG',
    stats: [
      { label: 'PÍER', value: 'R$ 60/pé', note: 'mensal · Pier Club' },
      { label: 'GALPÃO', value: 'R$ 90/pé', note: 'mensal · Pier Club' },
      { label: 'JET SKI', value: 'R$ 950/mês' },
    ],
    sections: [
      { title: 'Exemplo: lancha de 26 pés', bullets: ['Vaga molhada: 26 × R$ 60 ≈ R$ 1.560/mês.', 'Galpão seco: 26 × R$ 90 ≈ R$ 2.340/mês.', 'Esses valores são apenas a guarda e variam muito entre marinas e serviços.'] },
      { title: 'O custo de propriedade', bullets: ['Marina ou guarda.', 'Combustível.', 'Seguro.', 'Motor e revisões.', 'Limpeza e conservação.', 'Documentação e equipamentos de segurança.', 'Manutenção de casco, elétrica e acessórios.'] },
      { title: 'Curiosidade de navegação', paragraphs: ['Embarcações usam um conjunto de referências: cartas náuticas, GPS, radar, AIS, profundidade e meteorologia. Nenhum instrumento deveria ser tratado como fonte única de consciência situacional.'] },
    ],
    sources: [
      { label: 'Pier Club · Valores da Marina · Bertioga', url: 'https://www.pierclub.com.br/' },
    ],
    disclaimer: 'Exemplo de uma marina específica. Tarifas, serviços e regras variam por local e embarcação.',
  },

  viagens: {
    title: 'Chile como primeira missão internacional: simples de entrar, mas não vá sem planejamento',
    summary: 'Brasileiros podem viajar ao Chile a turismo com documento de identidade aceito pelas regras locais, sem visto de turismo. Seguro viagem é fortemente recomendado pelo Consulado brasileiro em Santiago.',
    shareSummary: 'Chile para brasileiros: turismo sem visto e possibilidade de entrada com documento de identidade aceito pelas regras chilenas. O Consulado do Brasil recomenda fortemente seguro viagem porque turistas estrangeiros podem ter de pagar integralmente atendimento médico. Confira as regras oficiais novamente perto da data da viagem.',
    readTime: '6 MIN READ',
    badge: 'TRAVEL MISSION',
    stats: [
      { label: 'VISTO TURISMO', value: 'NÃO' },
      { label: 'DOCUMENTO', value: 'ID / PASSAPORTE', note: 'ver requisitos vigentes' },
      { label: 'SEGURO', value: 'FORTEMENTE RECOMENDADO' },
    ],
    sections: [
      { title: 'Entrada', paragraphs: ['O governo chileno informa que cidadãos brasileiros podem entrar a turismo apresentando documento de identidade que atenda aos requisitos divulgados. Para viagens internacionais, levar passaporte válido continua sendo uma alternativa prática e reduz dúvidas documentais.'] },
      { title: 'Cuidados antes de embarcar', bullets: ['Confirme as exigências oficiais poucos dias antes da viagem.', 'Contrate seguro com cobertura médica, hospitalar e remoção de emergência.', 'Se for esquiar, confira cobertura específica para esportes de inverno.', 'Leve medicamentos de uso contínuo na embalagem original e, quando aplicável, com receita.', 'Não dependa apenas de documento digital para imigração.'] },
      { title: 'Europa no radar', paragraphs: ['Brasileiros seguem dispensados de visto para estadias curtas no Espaço Schengen, em regra até 90 dias. O ETIAS tem previsão de implementação posterior em 2026; como cronogramas migratórios podem mudar, a regra deve ser verificada novamente antes da compra e do embarque.'] },
    ],
    sources: [
      { label: 'Governo do Chile · Visas', url: 'https://www.chile.gob.cl/buenos-aires/visas/visas' },
      { label: 'Consulado do Brasil em Santiago · Saúde e Seguro Viagem', url: 'https://www.gov.br/mre/pt-br/consulado-santiago/condicoes-de-viagem/saude-e-seguro-viagem' },
      { label: 'Itamaraty · Vistos para brasileiros / Schengen', url: 'https://www.gov.br/mre/pt-br/consulado-amsterda/vistos/vistos-para-brasileiros' },
    ],
    disclaimer: 'Regras migratórias mudam. Sempre valide no governo do país de destino e no Itamaraty perto da viagem.',
  },

  financas: {
    title: 'Selic em 14,25%: por que juros altos mudam decisões simples do dia a dia',
    summary: 'O Copom reduziu a Selic para 14,25% ao ano em junho. Juros nesse patamar mantêm crédito caro e tornam liquidez e planejamento especialmente importantes.',
    shareSummary: 'A Selic está em 14,25% a.a. desde a reunião do Copom de junho/2026. Na prática: financiamento e crédito continuam caros; antes de investir mais risco, vale organizar reserva, reduzir dívida cara e transformar despesas anuais previsíveis em provisões mensais.',
    readTime: '5 MIN READ',
    badge: 'MONEY OPS',
    stats: [
      { label: 'SELIC', value: '14,25% a.a.', note: 'Copom · 17/06/2026' },
      { label: 'PIB 2026', value: '2,3%', note: 'projeção SPE; não é resultado' },
      { label: 'IPCA 2026', value: '5,1%', note: 'projeção SPE; não é resultado' },
    ],
    sections: [
      { title: 'Dica prática: crie fundos para gastos previsíveis', paragraphs: ['IPVA, seguro, manutenção, viagens e presentes não são emergências se você sabe que vão acontecer. Estime o gasto anual, divida por 12 e separe esse valor todo mês.'] },
      { title: 'Ordem de prioridade que costuma fazer sentido', bullets: ['Mapear dívidas e atacar primeiro as de juros mais destrutivos.', 'Construir uma reserva com foco em liquidez e segurança.', 'Separar objetivos de curto, médio e longo prazo.', 'Só então assumir risco de investimento compatível com cada objetivo.'] },
      { title: 'Projeção não é fato', paragraphs: ['A Secretaria de Política Econômica projeta crescimento de 2,3% para o PIB e IPCA de 5,1% em 2026. Esses números são cenários de trabalho e podem mudar com energia, câmbio, atividade e clima.'] },
    ],
    sources: [
      { label: 'Banco Central · Copom · 17/06/2026', url: 'https://www.bcb.gov.br/controleinflacao/comunicadoscopom' },
      { label: 'Ministério da Fazenda · Boletim Macrofiscal julho/2026', url: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/julho/boletim-macrofiscal-de-julho-mantem-projecao-de-crescimento-de-2-3-para-2026-mostra-a-spe/' },
    ],
    disclaimer: 'Educação financeira geral, não recomendação individual de investimento.',
  },

  tecnologia: {
    title: 'A corrida da IA agora é também uma corrida por energia, capital e data centers',
    summary: 'A Nvidia anunciou uma iniciativa com instituições financeiras para mobilizar mais de US$ 500 bilhões em capital de terceiros para infraestrutura de IA.',
    shareSummary: 'A nova fase da corrida de IA não é só “quem tem o melhor modelo”. A Nvidia anunciou uma iniciativa com instituições financeiras mirando mais de US$ 500 bilhões em capital de terceiros para infraestrutura. Chips, energia, rede, data centers e financiamento viraram parte do produto.',
    readTime: '4 MIN READ',
    badge: 'TECH SIGNAL',
    stats: [
      { label: 'INICIATIVA', value: '> US$ 500 bi', note: 'capital de terceiros buscado' },
      { label: 'GARGALOS', value: 'ENERGIA · CHIPS · REDE' },
    ],
    sections: [
      { title: 'O que mudou', paragraphs: ['Treinar e servir modelos em escala exige muito mais que GPUs. Energia disponível, refrigeração, rede, terrenos, data centers e acesso a capital estão virando fatores competitivos.'] },
      { title: 'A conexão menos óbvia', paragraphs: ['Um avanço em IA pode depender de engenharia elétrica, financiamento de infraestrutura e cadeia de semicondutores tanto quanto de pesquisa em modelos. Isso aproxima tecnologia de energia, construção, geopolítica e mercado financeiro.'] },
    ],
    sources: [
      { label: 'Reuters · 11/08/2026 · Nvidia e infraestrutura de IA', url: 'https://www.reuters.com/world/china/global-markets-view-europe-2026-08-11/' },
    ],
  },

  seguranca: {
    title: 'Vishing + SSO: o atacante não precisa quebrar a senha se convencer alguém a entregar a sessão',
    summary: 'O GTIG descreveu a operação BlackFile/UNC6671 usando engenharia social por voz, técnicas adversary-in-the-middle e comprometimento de SSO para acessar ambientes Microsoft 365 e Okta.',
    shareSummary: 'Radar Cyber: o UNC6671/BlackFile combina vishing, AiTM e comprometimento de SSO para entrar em Microsoft 365/Okta e exfiltrar dados. Lição: phishing-resistant MFA, recuperação de conta forte, detecção de novas sessões/dispositivos e verificação rigorosa no help desk são controles centrais.',
    readTime: '7 MIN READ',
    badge: 'THREAT INTEL',
    stats: [
      { label: 'ATOR', value: 'UNC6671' },
      { label: 'TÉCNICA', value: 'VISHING + AiTM' },
      { label: 'ALVOS', value: 'M365 · OKTA' },
    ],
    sections: [
      { title: 'Cadeia de ataque', bullets: ['Engenharia social por voz se passando por suporte ou contexto confiável.', 'Captura de credenciais/sessões com técnicas adversary-in-the-middle.', 'Acesso a SSO e aplicações cloud.', 'Uso de scripts para coleta e exfiltração de dados.', 'Extorsão usando dados roubados e, em alguns casos, contas corporativas comprometidas.'] },
      { title: 'Por que MFA não resolve sozinho', paragraphs: ['MFA tradicional pode ser contornado quando o atacante captura a sessão autenticada ou manipula o fluxo de login. Autenticação resistente a phishing, como FIDO2/WebAuthn, reduz muito essa classe de ataque.'] },
      { title: 'Defesa prática', bullets: ['Phishing-resistant MFA para usuários privilegiados e funções críticas.', 'Verificação fora do canal para reset de MFA e recuperação de conta.', 'Alertas para novos dispositivos, sessões, enrollment de MFA e mudança de método.', 'Reautenticação forte para ações sensíveis.', 'Detecção de downloads anormais em SharePoint/OneDrive e comportamento impossível para a identidade.'] },
    ],
    sources: [
      { label: 'Google Threat Intelligence · BlackFile / UNC6671 · 15/05/2026', url: 'https://cloud.google.com/blog/topics/threat-intelligence/blackfile-vishing-extortion-operation/' },
    ],
  },

  'appsec-ssdlc': {
    title: 'Supply chain de IA: o alvo não é só o modelo — é tudo ao redor dele',
    summary: 'O Google Threat Intelligence Group observou em 2026 ataques contra pacotes, repositórios e GitHub Actions ligados ao ecossistema de IA e segurança, com roubo de segredos em ambientes de build.',
    shareSummary: 'Radar AppSec: GTIG observou ataques de supply chain contra pacotes e GitHub Actions, incluindo ecossistemas ligados a Trivy, Checkmarx e LiteLLM. O objetivo incluía roubar AWS keys e GitHub tokens de ambientes de build. Lição: CI/CD é ativo de produção — provenance, least privilege, pinning, secrets e monitoramento precisam entrar no threat model.',
    readTime: '8 MIN READ',
    badge: 'APPSEC MISSION',
    stats: [
      { label: 'SUPERFÍCIE', value: 'CI/CD + PACKAGES' },
      { label: 'ALVO', value: 'CLOUD SECRETS' },
      { label: 'CONTROLE', value: 'PROVENANCE' },
    ],
    sections: [
      { title: 'O que o GTIG observou', paragraphs: ['Em ataques de supply chain no início de 2026, atores comprometeram pacotes e fluxos associados a repositórios/GitHub Actions. Em alguns casos, malware foi usado para extrair AWS keys e GitHub tokens diretamente dos ambientes de build.'] },
      { title: 'O que isso muda no SSDLC', bullets: ['Runner de CI/CD deve ser tratado como ativo privilegiado.', 'Dependências de build e Actions precisam de pinning e origem confiável.', 'Segredos de pipeline devem ser mínimos, rotacionáveis e com escopo restrito.', 'SBOM informa o que existe; provenance ajuda a responder de onde veio e como foi construído.', 'Assinatura/verificação de artefatos reduz confiança implícita entre build e deploy.'] },
      { title: 'Como transformar finding em decisão', paragraphs: ['Não bloqueie apenas por CVSS. Combine exploração ativa, KEV, reachability, exposição, criticidade do ativo, blast radius e presença no caminho até produção.'], bullets: ['Critical + não alcançável pode exigir correção sem interromper tudo.', 'High explorado + internet-facing + identidade privilegiada pode ser mais urgente que um Critical teórico.', 'Supply chain exige olhar para o impacto em todos os consumidores do artefato, não apenas no repositório onde o finding apareceu.'] },
      { title: 'Pergunta para o seu próximo gate', paragraphs: ['Se este componente ou workflow for comprometido, o atacante consegue alterar o que chega em produção sem precisar comprometer novamente outra camada? Se sim, ele está dentro do seu caminho crítico de supply chain.'] },
    ],
    sources: [
      { label: 'Google Threat Intelligence · AI Threat Tracker · 11/05/2026', url: 'https://cloud.google.com/blog/topics/threat-intelligence/ai-vulnerability-exploitation-initial-access/' },
    ],
  },
};
