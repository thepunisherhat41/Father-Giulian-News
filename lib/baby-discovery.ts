export type BabyMilestone = {
  weeks: string;
  minWeek: number;
  icon: string;
  category: string;
  title: string;
  detail: string;
  curiosity: string;
};

export const earlyEmbryoFacts = [
  {
    icon: '🧠',
    title: 'O sistema nervoso está começando pelo “projeto estrutural”',
    detail: 'Nas semanas 1–8, cérebro e coluna começam a se formar e o tubo neural entra no centro do desenvolvimento embrionário.',
  },
  {
    icon: '🫀',
    title: 'Tecido cardíaco já está em desenvolvimento',
    detail: 'Nesta fase inicial existe desenvolvimento de tecido cardíaco. O que aparece ou não em um ultrassom tão precoce depende muito da datação e do exame.',
  },
  {
    icon: '👂',
    title: 'O ouvido começa pela anatomia, não pela audição',
    detail: 'Partes do ouvido interno começam a se formar no primeiro bloco de oito semanas, mas isso não significa que o embrião já consiga ouvir.',
  },
  {
    icon: '🦴',
    title: 'Braços e pernas começam como pequenos brotos',
    detail: 'Os brotos dos membros surgem nesta etapa. Dedos definidos e movimentos coordenados pertencem a fases posteriores.',
  },
  {
    icon: '🧬',
    title: 'O tubo digestivo também está ganhando forma',
    detail: 'Um tubo longo que dará origem ao trato digestivo começa a se organizar ainda nas primeiras oito semanas.',
  },
];

export const babyMilestones: BabyMilestone[] = [
  {
    weeks: '9–12 SEMANAS', minWeek: 9, icon: '🌊', category: 'MOVIMENTO',
    title: 'Começam movimentos parecidos com respiração e deglutição',
    detail: 'A ACOG descreve movimentos semelhantes à respiração e deglutição de líquido amniótico neste período. Não é respiração com ar: os pulmões ainda estão em desenvolvimento.',
    curiosity: 'É uma espécie de treino motor muito antes do nascimento.',
  },
  {
    weeks: '9–12 SEMANAS', minWeek: 9, icon: '🧪', category: 'ÓRGÃOS',
    title: 'Rins produzem urina e o pâncreas começa a produzir insulina',
    detail: 'Órgãos que ainda vão amadurecer por meses já começam a executar funções básicas durante o primeiro trimestre.',
    curiosity: 'Desenvolvimento não significa “pronto”: função e maturação avançam juntas ao longo da gestação.',
  },
  {
    weeks: '13–16 SEMANAS', minWeek: 13, icon: '🕺', category: 'COORDENAÇÃO',
    title: 'Os movimentos dos membros ficam mais coordenados',
    detail: 'Braços e pernas deixam de ser apenas estruturas em formação e passam a apresentar coordenação progressivamente maior.',
    curiosity: 'Movimento pode existir antes de ser percebido do lado de fora.',
  },
  {
    weeks: '13–16 SEMANAS', minWeek: 13, icon: '👂', category: 'SENTIDOS',
    title: 'A audição começa a se desenvolver',
    detail: 'A estrutura auditiva amadurece em etapas. ACOG posiciona o início do desenvolvimento da audição neste bloco de semanas.',
    curiosity: '“O ouvido está se desenvolvendo” e “o bebê reconhece sua voz” são marcos diferentes.',
  },
  {
    weeks: '17–20 SEMANAS', minWeek: 17, icon: '🎧', category: 'SENTIDOS',
    title: 'Por volta da semana 18, sons passam a entrar no mundo do bebê',
    detail: 'A ACOG informa que, por volta da semana 18, o feto consegue ouvir sons. A sensibilidade e a resposta auditiva continuam amadurecendo por muitas semanas.',
    curiosity: 'Mais adiante, respostas a sons familiares se tornam mais evidentes.',
  },
  {
    weeks: '17–20 SEMANAS', minWeek: 17, icon: '🧠', category: 'CONTROLE MOTOR',
    title: 'O cérebro ganha mais controle sobre os movimentos',
    detail: 'Neste bloco, a região do cérebro relacionada ao controle motor já está formada, enquanto movimentos e circuitos continuam refinando sua coordenação.',
    curiosity: 'É uma transição fascinante entre “formar peças” e integrar sistemas.',
  },
  {
    weeks: '21–24 SEMANAS', minWeek: 21, icon: '🦶', category: 'MOVIMENTO',
    title: 'Chutes e giros ficam mais fortes',
    detail: 'A atividade corporal fica mais vigorosa e reconhecível. O padrão percebido pela gestante varia entre bebês e entre gestações.',
    curiosity: 'Não existe obrigação de o bebê seguir um “horário perfeito” de internet.',
  },
  {
    weeks: '21–24 SEMANAS', minWeek: 21, icon: '👍', category: 'COMPORTAMENTO',
    title: 'Se a mão chegar à boca, pode surgir sucção do polegar',
    detail: 'A ACOG descreve que o feto pode sugar o polegar quando a mão flutua até a boca.',
    curiosity: 'É um comportamento que combina movimento, reflexo e exploração do próprio corpo.',
  },
  {
    weeks: '23 SEMANAS', minWeek: 23, icon: '😴', category: 'SONO',
    title: 'Grande parte do sono já pode ocorrer em REM',
    detail: 'A ACOG descreve que, por volta da semana 23, grande parte do tempo de sono fetal acontece em sono REM.',
    curiosity: 'REM não deve ser traduzido automaticamente como “sonhar como um adulto”; isso vai além do que o dado permite concluir.',
  },
  {
    weeks: '21–24 SEMANAS', minWeek: 21, icon: '🖐️', category: 'IDENTIDADE',
    title: 'As cristas que formarão impressões digitais começam a surgir',
    detail: 'Ranhuras aparecem nas mãos e nos pés e mais tarde formarão impressões digitais e plantares.',
    curiosity: 'Uma assinatura física única começa a ser desenhada antes do nascimento.',
  },
  {
    weeks: '25–28 SEMANAS', minWeek: 25, icon: '🗣️', category: 'SENTIDOS',
    title: 'Sons familiares podem provocar resposta de movimento',
    detail: 'A ACOG descreve respostas motoras a sons familiares, incluindo a voz, neste período.',
    curiosity: 'Ouvir começa antes; responder de forma observável e reconhecer padrões é uma etapa posterior do amadurecimento.',
  },
  {
    weeks: '25–28 SEMANAS', minWeek: 25, icon: '⚡', category: 'REFLEXO',
    title: 'Um som alto pode provocar movimento de susto',
    detail: 'Sons intensos podem desencadear uma resposta corporal de sobressalto, como recolher braços e pernas.',
    curiosity: 'Isso não é motivo para provocar sustos: é apenas um marco de maturação sensorial e motora.',
  },
  {
    weeks: '25–28 SEMANAS', minWeek: 25, icon: '👁️', category: 'VISÃO',
    title: 'As pálpebras já conseguem abrir e fechar',
    detail: 'A maturação ocular avança e as pálpebras passam a abrir e fechar neste bloco.',
    curiosity: 'Perceber luz é um marco posterior e não equivale a enxergar como depois do nascimento.',
  },
  {
    weeks: '29–32 SEMANAS', minWeek: 29, icon: '✊', category: 'MOVIMENTO',
    title: 'Além de chutar, o bebê pode esticar e fazer movimentos de agarrar',
    detail: 'A ACOG descreve alongamentos, chutes e movimentos de preensão mais adiante no terceiro trimestre.',
    curiosity: 'O repertório motor vai ficando muito mais variado.',
  },
  {
    weeks: '29–32 SEMANAS', minWeek: 29, icon: '💡', category: 'SENTIDOS',
    title: 'Os olhos podem perceber mudanças de luz',
    detail: 'Nesta etapa, o sistema visual consegue responder a diferenças de luminosidade.',
    curiosity: 'Dentro do útero não existe escuridão absoluta o tempo todo, mas a luz chega muito filtrada.',
  },
  {
    weeks: '33–36 SEMANAS', minWeek: 33, icon: '🔄', category: 'POSIÇÃO',
    title: 'O bebê pode assumir posição de cabeça para baixo',
    detail: 'Muitos fetos viram para posição cefálica nesta etapa, embora a posição possa variar e deva ser avaliada no pré-natal.',
    curiosity: 'Posição fetal é observação clínica, não algo para tentar “diagnosticar” em casa pela forma da barriga.',
  },
];

export const babyCuriosityDeck = [
  { icon: '🧬', title: 'Embrião vira “feto” mais adiante', text: 'Na linguagem da ACOG, a semana 11 marca o início do estágio fetal. Antes disso, o termo correto é embrião.' },
  { icon: '🫁', title: 'Movimento de respiração não significa respirar ar', text: 'Movimentos semelhantes à respiração podem ocorrer ainda no primeiro trimestre, enquanto os pulmões seguem se desenvolvendo para a vida fora do útero.' },
  { icon: '🌊', title: 'O líquido amniótico também entra na história digestiva', text: 'Deglutir líquido amniótico faz parte do desenvolvimento e aparece muito antes da alimentação após o nascimento.' },
  { icon: '😴', title: 'Sono fetal não é apenas “ficar parado”', text: 'Ao longo da gestação aparecem estados de atividade e sono; a ACOG descreve REM por volta de 23 semanas.' },
  { icon: '🎵', title: 'Ouvir sua voz é uma história em capítulos', text: 'A anatomia do ouvido começa cedo, a audição se desenvolve no segundo trimestre e respostas a sons familiares aparecem mais tarde.' },
  { icon: '🖐️', title: 'Impressões digitais começam antes do nascimento', text: 'As cristas das mãos e pés aparecem durante o segundo trimestre e se transformam nos padrões únicos das digitais.' },
  { icon: '⚡', title: 'Susto é um marco neurológico, não entretenimento', text: 'Mais adiante, sons altos podem produzir movimentos de sobressalto; não há benefício em provocar estímulos intensos de propósito.' },
  { icon: '💡', title: 'A luz chega filtrada ao útero', text: 'No terceiro trimestre, os olhos conseguem perceber mudanças de luminosidade, mas isso está muito longe da visão de um recém-nascido.' },
];

export const babySources = [
  { label: 'ACOG · How Your Fetus Grows During Pregnancy', url: 'https://www.acog.org/womens-health/faqs/how-your-fetus-grows-during-pregnancy' },
  { label: 'ACOG · Changes During Pregnancy', url: 'https://www.acog.org/womens-health/infographics/changes-during-pregnancy' },
  { label: 'MedlinePlus · Fetal Development', url: 'https://medlineplus.gov/ency/article/002398.htm' },
];
