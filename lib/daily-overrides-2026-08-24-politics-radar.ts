import { dailyContent } from './daily-content';

const set = (slug: string, data: any) => {
  if (!dailyContent[slug]) return;
  Object.assign(dailyContent[slug], data);
};

set('politica', {
  title: 'Zema abre sabatinas da Globo; radar eleitoral atualiza falas, pesquisa e próximos debates',
  summary: 'A primeira entrevista presidencial da semana já aconteceu: Romeu Zema foi sabatinado ao vivo nesta segunda (24). O radar separa as declarações do candidato dos fatos confirmados, mantém a pesquisa BTG/Nexus do dia e acompanha os debates anunciados para 14/09, 27/09 e 01/10 sem tratar convite como presença garantida.',
  shareSummary: 'Radar político de 24/08: Romeu Zema abriu as sabatinas da Globo nesta noite; BTG/Nexus mantém Lula e Flávio Bolsonaro em empate técnico no cenário de 2º turno; próximos debates anunciados são 14/09, 27/09 e 01/10. Presença em debate só entra como confirmada quando houver confirmação específica.',
  badge: 'POLÍTICA · RADAR ELEITORAL · 24/08 · NOITE',
  readTime: '9 MIN',
  stats: [
    { label: 'SABATINA DE HOJE', value: 'ZEMA · REALIZADA', note: 'Globo · 24/08' },
    { label: 'PRÓXIMO DEBATE', value: '14 SET · 22H', note: 'Momento da Decisão · agenda anunciada' },
    { label: '1º TURNO', value: '04 OUT', note: 'calendário oficial do TSE' },
  ],
  sections: [
    {
      title: 'Fato confirmado: a primeira sabatina da semana aconteceu',
      paragraphs: ['Romeu Zema (Novo) foi entrevistado ao vivo na noite de 24 de agosto por Renata Vasconcellos e César Tralli, abrindo a série da TV Globo com presidenciáveis. A transmissão começou após o Jornal Nacional e também foi disponibilizada pela GloboNews e pelo g1.'],
      bullets: [
        '25/08 — Ronaldo Caiado (PSD) está na agenda anunciada.',
        '26/08 — Renan Santos (Missão) está na agenda anunciada.',
        '27/08 — Luiz Inácio Lula da Silva (PT) está na agenda anunciada.',
        '28/08 — Flávio Bolsonaro (PL) está na agenda anunciada.',
        '29/08 — Augusto Cury (Avante) está na agenda anunciada.',
      ],
    },
    {
      title: 'Declarações de Zema na entrevista — não confundir com fatos consumados',
      paragraphs: ['Durante a sabatina, Zema defendeu que a vacinação não seja obrigatória, voltou a dizer que considera os atos de 8 de janeiro vandalismo e não uma tentativa de golpe, e declarou apoio à revisão das condenações relacionadas ao episódio. Também criticou o nível dos juros e condicionou ganhos reais do salário mínimo ao desempenho da economia e ao equilíbrio fiscal.'],
      bullets: [
        'Esses pontos são posições e promessas do candidato apresentadas na entrevista.',
        'A classificação jurídica dos atos de 8 de janeiro não muda por causa da declaração de campanha.',
        'Proposta eleitoral não deve ser apresentada como política já aprovada ou resultado garantido.',
      ],
    },
    {
      title: 'Pesquisa divulgada hoje',
      paragraphs: ['Levantamento BTG/Nexus divulgado em 24/08 mostra Lula com 41% e Flávio Bolsonaro com 37% no cenário principal de primeiro turno. No cenário testado de segundo turno, Lula aparece com 46% e Flávio com 45%, diferença dentro da margem de erro de dois pontos percentuais. Foram entrevistados 2.006 eleitores entre 21 e 23 de agosto.'],
      bullets: ['Pesquisa é fotografia estatística do período de coleta, não previsão do resultado.', 'O levantamento está registrado no TSE sob o número BR-09028/2026.'],
    },
    {
      title: 'Próximos debates presidenciais anunciados',
      bullets: [
        '14/09 · 22h — Momento da Decisão, consórcio de veículos. Candidatos foram convidados; convite não equivale a presença confirmada.',
        '27/09 — debate presidencial anunciado pela Record.',
        '01/10 — debate presidencial anunciado pela TV Globo.',
        '04/10 — primeiro turno das Eleições 2026.',
      ],
      paragraphs: ['O primeiro debate, em 23/08, teve Ronaldo Caiado, Renan Santos e Augusto Cury. Lula, Flávio Bolsonaro e Romeu Zema não compareceram. Campanhas ainda podem mudar decisões sobre participações futuras.'],
    },
    {
      title: 'Agenda oficial do TSE',
      paragraphs: ['O horário eleitoral gratuito do primeiro turno começa em 28 de agosto e vai até 1º de outubro. O primeiro turno será em 4 de outubro, com votação das 8h às 17h pelo horário de Brasília.'],
    },
    {
      title: 'Regra do radar vivo',
      bullets: [
        'Evento oficialmente anunciado aparece como agenda.',
        'Presença de candidato só aparece como confirmada quando houver confirmação específica.',
        'Pesquisa vem com instituto, período, amostra e margem de erro quando disponíveis.',
        'Declaração de candidato ou campanha fica separada de fato confirmado e decisão institucional.',
        'Mudança, desistência ou cancelamento substitui a informação anterior imediatamente.',
      ],
    },
  ],
  sources: [
    { label: 'Folha · sabatina de Romeu Zema · 24/08/2026', url: 'https://www1.folha.uol.com.br/poder/2026/08/zema-critica-obrigatoriedade-de-vacinacao-e-volta-a-negar-tentativa-de-golpe-sob-bolsonaro.shtml' },
    { label: 'UOL · sabatina de Romeu Zema · 24/08/2026', url: 'https://noticias.uol.com.br/eleicoes/2026/08/24/zema-critica-juros-de-agiota-e-condiciona-aumento-do-salario-minimo.ghtm' },
    { label: 'UOL · entrevistas na Globo · 24/08/2026', url: 'https://noticias.uol.com.br/eleicoes/2026/08/24/entrevistas-dos-candidatos-no-jornal-nacional-veja-datas-e-quem-vai-nas-sabatinas.ghtm' },
    { label: 'UOL · BTG/Nexus · 24/08/2026', url: 'https://noticias.uol.com.br/eleicoes/2026/08/24/btgnexus-lula-e-flavio-24-de-agosto.ghtm' },
    { label: 'TSE · principais datas das Eleições 2026', url: 'https://www.tse.jus.br/comunicacao/noticias/2026/Marco/eleicoes-2026-confira-as-principais-datas-do-calendario-eleitoral' },
  ],
  disclaimer: 'O radar diferencia fato confirmado, agenda anunciada, presença confirmada, pesquisa, declaração de campanha e apuração jornalística. Debates e entrevistas podem sofrer alterações.',
});
