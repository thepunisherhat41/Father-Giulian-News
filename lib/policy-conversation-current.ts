export type PolicyVoice = {
  side: string;
  position: string;
  detail: string;
};

export type PolicyStep = {
  status: 'DONE' | 'NEXT' | 'PENDING';
  title: string;
  detail: string;
};

export type PolicyScenario = {
  label: string;
  title: string;
  consequence: string;
};

export const sixByOneConversation = {
  id: 'pec-221-6x1-2026-08-21',
  eyebrow: 'BRASIL · DECISION TRACKER',
  title: 'Fim da escala 6x1: o que realmente foi discutido, o que acontece agora e quais decisões podem sair',
  status: 'A PEC 221/2019 saiu da inércia política e recebeu despacho para seguir à CCJ do Senado. Isso NÃO significa que o Senado aprovou o fim da escala 6x1. O texto ainda precisa de relatoria, parecer, votação na CCJ e, se avançar, dois turnos no Plenário.',
  statusCaveat: 'Na consulta pública do Senado feita em 21/08, a ficha legislativa ainda exibia o estado anterior “aguardando despacho”, embora o despacho e o encaminhamento tenham sido anunciados por Davi Alcolumbre e reportados por Agência Brasil e imprensa. Por isso, a edição separa movimentação política de atualização do sistema legislativo.',
  proposal: [
    'Reduzir o limite constitucional de 44 para 40 horas semanais.',
    'Garantir dois dias de repouso semanal remunerado, sem redução salarial.',
    'A implementação prevista no texto vindo da Câmara é progressiva e admite tratamento para regimes diferenciados.',
    'A Câmara já aprovou a PEC; o Senado atua como Casa revisora. Alteração material no Senado pode obrigar o texto a voltar à Câmara.',
  ],
  voices: [
    {
      side: 'GOVERNO / DEFENSORES',
      position: 'Votar ainda em 2026 e preservar a redução sem corte salarial.',
      detail: 'O argumento central é que mais descanso pode reduzir exaustão, acidentes e absenteísmo, melhorar saúde e convívio familiar e, em parte das atividades, elevar produtividade. Luiz Marinho disse temer que a pauta perca força depois das eleições e se opõe a compensações amplas às empresas.',
    },
    {
      side: 'TRABALHADORES / MOVIMENTOS',
      position: 'A jornada 6x1 é tratada como problema de qualidade de vida e saúde.',
      detail: 'No debate temático do Senado, defensores lembraram recordes de afastamentos por burnout, depressão e ansiedade e sustentaram que trabalhador descansado também tem mais capacidade de qualificação e produtividade.',
    },
    {
      side: 'SETOR PRODUTIVO',
      position: 'Não necessariamente rejeita jornadas menores, mas contesta uma regra constitucional uniforme e rápida.',
      detail: 'CNI, Fecomercio, Fenacon e representantes setoriais levantaram risco de aumento de custo, necessidade de contratação adicional, impacto em serviços contínuos e dificuldade maior para micro e pequenas empresas. Parte deles prefere negociação coletiva por setor.',
    },
    {
      side: 'ENTIDADES JURÍDICAS / POSIÇÃO INTERMEDIÁRIA',
      position: 'Redução pode avançar, mas com transição e negociação coletiva robusta.',
      detail: 'A ANPT defendeu preservação salarial, saúde laboral e equilíbrio vida-trabalho, ao mesmo tempo em que recomendou mecanismos de transição gradual e adaptação por negociação coletiva às particularidades setoriais.',
    },
    {
      side: 'OPOSIÇÃO / LINHA MAIS FLEXÍVEL',
      position: 'Parte da oposição quer adiar a votação ou substituir a regra geral por maior liberdade contratual.',
      detail: 'Rogério Marinho defendeu que a discussão ocorra depois da eleição e falou em jornada flexível. Na campanha de Flávio Bolsonaro, Daniella Marques classificou o debate atual como populista e defendeu maior liberdade de contratação.',
    },
  ] as PolicyVoice[],
  conflict: [
    'O ponto de maior convergência é que descanso, saúde e produtividade importam. A divergência está em COMO transformar isso em regra.',
    'Defensores querem um piso constitucional mais protetivo; entidades empresariais querem mais espaço para negociação setorial e transição.',
    'O custo não é uniforme: supermercado, hospital, transporte, indústria, agricultura, restaurante e escritório têm necessidades de cobertura muito diferentes.',
    '“Sem redução salarial” protege salário contratual, mas ainda existe debate sobre remuneração variável, produtividade, adicionais e modelos de escala.',
    'A velocidade de implementação é decisiva: uma transição mais longa reduz choque operacional, mas posterga o benefício para trabalhadores.',
  ],
  steps: [
    { status: 'DONE', title: 'Câmara aprovou o texto', detail: 'A PEC chegou ao Senado depois de aprovação na Câmara dos Deputados.' },
    { status: 'DONE', title: 'Presidência do Senado destravou a tramitação', detail: 'Davi Alcolumbre anunciou/despachou a matéria para análise, após semanas parada na Mesa.' },
    { status: 'NEXT', title: 'CCJ precisa receber relator e parecer', detail: 'O relator pode recomendar aprovação, rejeição ou apresentar mudanças. O governo tenta uma relatoria favorável para acelerar.' },
    { status: 'PENDING', title: 'Votação na CCJ', detail: 'A comissão analisa constitucionalidade e mérito do texto. Emendas podem nascer aqui.' },
    { status: 'PENDING', title: 'Plenário do Senado em dois turnos', detail: 'PEC exige 3/5 dos 81 senadores: pelo menos 49 votos favoráveis em cada turno.' },
    { status: 'PENDING', title: 'Promulgação ou retorno à Câmara', detail: 'Se o Senado mantiver o texto materialmente igual, a PEC pode ser promulgada pelo Congresso. Se alterar conteúdo substancial, volta à Câmara.' },
  ] as PolicyStep[],
  scenarios: [
    {
      label: 'CENÁRIO A',
      title: 'Senado aprova o texto da Câmara sem mudança material',
      consequence: 'É o caminho mais curto para promulgação. A discussão seguinte migra para implementação, adaptação dos contratos e regras de transição.',
    },
    {
      label: 'CENÁRIO B',
      title: 'Senado aprova, mas muda transição, exceções ou negociação coletiva',
      consequence: 'O texto volta à Câmara. Ganha-se adaptação setorial, mas aumenta o risco de a PEC não terminar antes das eleições.',
    },
    {
      label: 'CENÁRIO C',
      title: 'CCJ ou Plenário adiam a votação',
      consequence: 'A pauta pode escorregar para depois da eleição. O próprio ministro do Trabalho admite risco de perda de força política nesse cenário.',
    },
    {
      label: 'CENÁRIO D',
      title: 'Surge um acordo político de meio-termo',
      consequence: 'Pode combinar 40 horas, dois dias de descanso, transição mais longa, exceções objetivas e papel maior da negociação coletiva. É o cenário com maior espaço para construção de maioria, mas também para mudanças no texto.',
    },
  ] as PolicyScenario[],
  watch: [
    'Quem será escolhido relator na CCJ e qual será o primeiro parecer.',
    'Se o calendário de esforço concentrado entre 31/08 e 04/09 incluirá efetivamente a PEC.',
    'Se haverá emenda para micro e pequenas empresas, serviços essenciais ou atividades contínuas.',
    'Se “sem redução salarial” receberá detalhamento para remuneração variável e regimes especiais.',
    'Se governo e presidência do Senado construirão acordo antes da reunião política prevista para o fim de agosto.',
    'Se a PEC 221/2019 será tratada isoladamente ou coordenada com outras propostas de redução de jornada já existentes no Senado.',
  ],
  practical: {
    worker: 'Nada muda no contrato hoje. O principal sinal a observar é a redação final: horas semanais, dois dias de repouso, transição e como acordos coletivos existentes serão tratados.',
    company: 'Ainda não há regra nova em vigor. Empresas com operação 24x7, atendimento em fins de semana ou equipes enxutas devem acompanhar transição, exceções, cobertura de turno e negociação coletiva — sem antecipar mudança contratual baseada apenas em manchete.',
  },
  sources: [
    { label: 'Senado · PEC 221/2019', url: 'https://www25.senado.leg.br/web/atividade/materias/-/materia/174386' },
    { label: 'Senado · Debate temático de 01/07/2026', url: 'https://legis.senado.leg.br/escriba-servicosweb/sessao/pdf/573297' },
    { label: 'Agência Brasil · Alcolumbre destrava PEC', url: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-08/alcolumbre-destrava-pec-do-fim-da-6x1-apos-conversas-com-lula' },
    { label: 'TV Senado · debate sobre o que pode mudar', url: 'https://www.youtube.com/watch?v=XEIUkC9Pff4' },
  ],
};
