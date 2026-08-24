import { dailyContent } from './daily-content';

const set = (slug: string, data: any) => {
  if (!dailyContent[slug]) return;
  Object.assign(dailyContent[slug], data);
};

set('politica', {
  title: 'Eleições 2026: sabatinas começam hoje e próximos debates já têm datas',
  summary: 'Depois do primeiro debate presidencial de 23/08, a campanha entra em uma semana de entrevistas ao vivo na Globo. Romeu Zema abre a série nesta segunda (24); Caiado vai dia 25, Renan Santos dia 26, Lula dia 27, Flávio Bolsonaro dia 28 e Augusto Cury dia 29. Os próximos debates anunciados são 14/09, 27/09 e 01/10.',
  shareSummary: 'Radar político de 24/08: Globo inicia hoje uma semana de entrevistas com presidenciáveis; próximos debates anunciados são 14/09, 27/09 e 01/10. O horário eleitoral gratuito começa em 28/08. Presença em debate pode mudar até a data.',
  badge: 'POLÍTICA · RADAR ELEITORAL · 24/08',
  readTime: '8 MIN',
  stats: [
    { label: 'PRÓXIMO DEBATE', value: '14 SET · 22H', note: 'Momento da Decisão' },
    { label: 'RECORD', value: '27 SET', note: 'debate presidencial anunciado' },
    { label: 'GLOBO', value: '01 OUT', note: 'debate anunciado antes do 1º turno' },
  ],
  sections: [
    {
      title: 'Esta semana: entrevistas ao vivo com os presidenciáveis',
      paragraphs: ['A Globo iniciou em 24 de agosto uma série de entrevistas ao vivo após o Jornal Nacional, também transmitidas pela GloboNews e pelo g1. A ordem foi definida por sorteio entre os candidatos selecionados pela emissora.'],
      bullets: [
        '24/08 — Romeu Zema (Novo).',
        '25/08 — Ronaldo Caiado (PSD).',
        '26/08 — Renan Santos (Missão).',
        '27/08 — Luiz Inácio Lula da Silva (PT).',
        '28/08 — Flávio Bolsonaro (PL).',
        '29/08 — Augusto Cury (Avante).',
      ],
    },
    {
      title: 'Próximos debates presidenciais anunciados',
      bullets: [
        '14/09 · 22h — Momento da Decisão, consórcio com CNN Brasil, SBT, RedeTV!, Exame, Metrópoles, Terra, Nova Brasil FM, Rádio Itatiaia, SBT News e VEJA+ TV.',
        '27/09 — debate da Record.',
        '01/10 — debate da TV Globo.',
        '04/10 — primeiro turno das Eleições 2026.',
      ],
      paragraphs: ['Data de debate anunciada não significa presença garantida de todos os candidatos. Campanhas ainda podem aceitar ou recusar convites, e regras editoriais podem sofrer ajustes.'],
    },
    {
      title: 'O que aconteceu no primeiro debate',
      paragraphs: ['O debate de 23 de agosto teve Ronaldo Caiado, Renan Santos e Augusto Cury. Lula, Flávio Bolsonaro e Romeu Zema não compareceram. A ausência dos candidatos mais bem colocados nas pesquisas virou um dos temas do próprio encontro.'],
    },
    {
      title: 'Outro marco desta semana: horário eleitoral',
      paragraphs: ['Segundo o calendário do TSE, o horário eleitoral gratuito do primeiro turno começa em 28 de agosto e vai até 1º de outubro. Isso tende a aumentar significativamente a exposição diária das campanhas no rádio e na televisão.'],
    },
    {
      title: 'Pesquisa divulgada hoje',
      paragraphs: ['Levantamento BTG/Nexus divulgado em 24/08 mostra Lula com 41% e Flávio Bolsonaro com 37% no cenário principal de primeiro turno. No cenário testado de segundo turno, Lula aparece com 46% e Flávio com 45%, diferença dentro da margem de erro de dois pontos percentuais. Foram entrevistados 2.006 eleitores entre 21 e 23 de agosto.'],
    },
    {
      title: 'Como este radar vai tratar política',
      bullets: [
        'Evento oficialmente anunciado aparece como agenda.',
        'Presença de candidato só aparece como confirmada quando houver confirmação específica.',
        'Pesquisa é fotografia estatística do período, não previsão do resultado.',
        'Declaração de campanha fica separada de decisão efetivamente tomada.',
        'Mudança de data ou desistência atualiza o Reel, em vez de manter informação velha.',
      ],
    },
  ],
  sources: [
    { label: 'UOL · calendário dos debates · 17/08/2026', url: 'https://noticias.uol.com.br/eleicoes/2026/08/17/debates-entre-candidatos-a-presidente-em-2026-veja-datas-e-onde-assistir.ghtm' },
    { label: 'CNN Brasil · Momento da Decisão · 14/09 às 22h', url: 'https://www.cnnbrasil.com.br/eleicoes/momento-da-decisao-lula-e-flavio-estarao-lado-a-lado-em-debate-saiba-mais/' },
    { label: 'UOL · entrevistas na Globo · 24/08/2026', url: 'https://noticias.uol.com.br/eleicoes/2026/08/24/entrevistas-dos-candidatos-no-jornal-nacional-veja-datas-e-quem-vai-nas-sabatinas.ghtm' },
    { label: 'UOL · BTG/Nexus · 24/08/2026', url: 'https://noticias.uol.com.br/eleicoes/2026/08/24/btgnexus-lula-e-flavio-24-de-agosto.ghtm' },
    { label: 'TSE · principais datas das Eleições 2026', url: 'https://www.tse.jus.br/comunicacao/noticias/2026/Marco/eleicoes-2026-confira-as-principais-datas-do-calendario-eleitoral' },
  ],
  disclaimer: 'Debates, entrevistas e presença de candidatos podem sofrer alterações. O radar diferencia agenda anunciada, presença confirmada, pesquisa, declaração e apuração jornalística.',
});
