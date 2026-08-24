import { dailyContent } from './daily-content';

const set = (slug: string, data: any) => {
  if (!dailyContent[slug]) return;
  Object.assign(dailyContent[slug], data);
};

set('politica', {
  title: 'Eleições 2026: debate da Band esvaziado, Zema no JN hoje e próximos confrontos já têm datas',
  summary: 'O primeiro debate presidencial, realizado em 23/08, teve Ronaldo Caiado, Renan Santos e Augusto Cury, com ausência de Lula, Flávio Bolsonaro e Romeu Zema. Nesta segunda (24), Zema abre a série de sabatinas do Jornal Nacional às 21h05. Os próximos debates presidenciais anunciados estão previstos para 14/09 (consórcio liderado pelo SBT), 28/09 (Record) e 01/10 (TV Globo).',
  shareSummary: 'Radar político de 24/08: debate da Band teve apenas Caiado, Renan Santos e Augusto Cury; Zema participa hoje da primeira sabatina do JN; próximos debates anunciados são 14/09, 28/09 e 01/10. Participação dos candidatos ainda pode mudar.',
  badge: 'POLÍTICA · RADAR ELEITORAL · 24/08',
  readTime: '7 MIN',
  stats: [
    { label: 'PRÓXIMO DEBATE', value: '14 SET', note: 'consórcio liderado pelo SBT' },
    { label: 'RECORD', value: '28 SET', note: 'debate presidencial anunciado' },
    { label: 'GLOBO', value: '01 OUT', note: 'último debate anunciado antes do 1º turno' },
  ],
  sections: [
    {
      title: 'Fato confirmado: como foi o primeiro debate',
      paragraphs: ['O primeiro debate presidencial de 2026 ocorreu no domingo, 23 de agosto, em parceria liderada pela Band. Participaram Ronaldo Caiado (PSD), Renan Santos (Missão) e Augusto Cury (Avante). Lula (PT), Flávio Bolsonaro (PL) e Romeu Zema (Novo) não compareceram.'],
      bullets: ['A ausência dos dois líderes das pesquisas dominou parte do confronto.', 'A participação de candidatos em debates depende das regras legais e dos critérios adicionais definidos por cada emissora ou consórcio.'],
    },
    {
      title: 'Agenda de hoje: sabatina no Jornal Nacional',
      paragraphs: ['Romeu Zema abre nesta segunda-feira (24) a série de entrevistas do Jornal Nacional com presidenciáveis, às 21h05, com transmissão também pela GloboNews e g1. A ordem foi definida por sorteio entre os participantes selecionados pela emissora.'],
    },
    {
      title: 'Próximos debates anunciados',
      bullets: ['14/09 — debate de consórcio liderado pelo SBT.', '28/09 — debate da Record.', '01/10 — debate da TV Globo.', '04/10 — primeiro turno das Eleições 2026, conforme calendário do TSE.'],
      paragraphs: ['Agenda futura não equivale a presença confirmada. As campanhas podem aceitar ou recusar convites, e datas ou regras ainda podem sofrer ajustes editoriais ou jurídicos.'],
    },
    {
      title: 'Estratégia das campanhas: o que é apuração jornalística',
      paragraphs: ['Reportagens indicam que Lula pretende priorizar o debate da Globo de 1º de outubro, enquanto aliados de Flávio Bolsonaro dizem que ele tende a comparecer a debates apenas se Lula também estiver presente. Isso é estratégia de campanha reportada pela imprensa, não obrigação legal nem presença confirmada.'],
    },
    {
      title: 'Pesquisa divulgada hoje',
      paragraphs: ['Levantamento BTG/Nexus divulgado em 24/08 mostra Lula com 41% e Flávio Bolsonaro com 37% no cenário principal de primeiro turno; no segundo turno testado, 46% a 45%, empate técnico dentro da margem de erro de dois pontos percentuais. A pesquisa ouviu 2.006 eleitores entre 21 e 23 de agosto e foi registrada no TSE sob BR-09028/2026.'],
    },
  ],
  sources: [
    { label: 'UOL · Debates presidenciais 2026 · 17/08/2026', url: 'https://noticias.uol.com.br/eleicoes/2026/08/17/debates-entre-candidatos-a-presidente-em-2026-veja-datas-e-onde-assistir.ghtm' },
    { label: 'UOL · Zema no Jornal Nacional · 24/08/2026', url: 'https://noticias.uol.com.br/eleicoes/2026/08/24/romeu-zema-na-globo-que-horas-comeca-entrevista-com-presidenciavel-hoje.ghtm' },
    { label: 'Folha · primeiro debate presidencial · 24/08/2026', url: 'https://www1.folha.uol.com.br/poder/2026/08/perdeu-o-debate-saiba-em-8-pontos-como-foi-o-confronto-entre-caiado-renan-santos-e-augusto-cury.shtml' },
    { label: 'UOL · BTG/Nexus · 24/08/2026', url: 'https://noticias.uol.com.br/eleicoes/2026/08/24/btgnexus-lula-e-flavio-24-de-agosto.ghtm' },
    { label: 'TSE · Calendário Eleitoral 2026', url: 'https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-760-de-2-de-marco-de-2026' },
  ],
  disclaimer: 'Debates e sabatinas podem ter alterações de data, formato e presença de candidatos. O radar diferencia agenda anunciada de participação confirmada.',
});
