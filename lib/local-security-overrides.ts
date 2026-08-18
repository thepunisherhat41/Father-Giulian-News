import { dailyContent, todayDrops } from './daily-content';

const slug = 'seguranca-zl';

dailyContent[slug] = {
  title: 'Segurança ZL virou feed diário: hoje sem ocorrência nova confirmada, últimas confirmações abaixo',
  summary: 'A aba agora funciona como um feed mobile-first. O topo informa o status de hoje e não inventa notícia: até a atualização das 18h07, nenhuma nova ocorrência da Zona Leste foi encontrada com confirmação suficiente nas fontes monitoradas. A última confirmação relevante continua sendo o avanço da investigação do caso de Artur Alvim, de 14 de agosto.',
  shareSummary: 'Segurança ZL agora é um feed diário: hoje não houve nova ocorrência confirmada nas fontes monitoradas até 18h07; a aba mostra isso claramente e mantém abaixo as últimas confirmações recentes, dados e serviços oficiais.',
  readTime: 'DAILY FEED',
  badge: 'ZONA LESTE / NEWS FEED',
  stats: [
    { label: 'HOJE', value: 'MONITORANDO', note: 'sem novo fato confirmado até 18h07' },
    { label: 'JANELA RECENTE', value: '7 DIAS', note: 'depois vira contexto' },
    { label: 'ATUALIZAÇÃO', value: '05 · 10 · 17H', note: 'varredura recorrente' },
  ],
  sections: [
    {
      title: 'Como funciona o feed',
      paragraphs: ['O primeiro bloco é o status de hoje. Se houver ocorrência, operação, investigação ou dado local novo e confirmado, ele entra no topo. Se não houver, a aba diz isso explicitamente e preserva a última notícia válida em vez de reciclar conteúdo antigo.'],
      bullets: ['Hoje e ontem têm prioridade máxima.', 'Depois entram fatos publicados ou materialmente atualizados nos últimos 7 dias.', 'Passou de 7 dias: sai do feed e vai para Dados/Ações/Serviços.', 'Ocorrência isolada nunca vira ranking de bairro.'],
    },
    {
      title: 'Última confirmação relevante',
      paragraphs: ['Em 14 de agosto, a Justiça decretou a prisão de policial civil investigado por envolvimento no sequestro ocorrido em Artur Alvim no dia 10. A Corregedoria e o Decap seguem responsáveis pela investigação, que tramita sob sigilo.'],
    },
    {
      title: 'Mobile primeiro',
      bullets: ['FEED para notícias recentes.', 'DADOS para estatísticas e recortes.', 'AÇÕES para operações e capacidade pública.', 'SERVIÇOS para orientação e Delegacia Eletrônica.'],
    },
  ],
  sources: [
    { label: 'Folha de S.Paulo · Artur Alvim · 14/08/2026', url: 'https://www1.folha.uol.com.br/cotidiano/2026/08/justica-decreta-prisao-de-policial-civil-envolvido-em-sequestro-em-sao-paulo.shtml' },
    { label: 'SSP-SP · Estatísticas criminais', url: 'https://www.ssp.sp.gov.br/estatistica/consultas' },
  ],
  disclaimer: 'O feed não é monitoramento policial em tempo real. A ausência de notícia nova publicada não significa ausência de ocorrências na região.',
};

const existing = todayDrops.find((drop) => drop.slug === slug);
const drop = {
  label: 'Segurança ZL',
  emoji: '🚨',
  title: 'Feed Segurança ZL: hoje sem nova ocorrência confirmada até 18h07',
  detail: 'O radar não preenche espaço com notícia velha: mostra o status do dia e, abaixo, as últimas confirmações, dados e serviços oficiais.',
};
if (existing) Object.assign(existing, drop);
else todayDrops.push({ slug, ...drop });

if (dailyContent.hoje) dailyContent.hoje.readTime = `${todayDrops.length} MISSÕES`;
