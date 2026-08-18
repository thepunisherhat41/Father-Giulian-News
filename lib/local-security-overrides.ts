import { dailyContent, todayDrops } from './daily-content';

const slug = 'seguranca-zl';

dailyContent[slug] = {
  title: 'Segurança ZL agora abre com notícias recentes dos últimos dias',
  summary: 'O radar local prioriza fatos confirmados dos últimos 7 dias na Zona Leste e deixa estatísticas mensais e ações antigas em uma camada separada de contexto. Nesta edição, Artur Alvim e o recorte recente de roubos de celular em Vila Prudente entram antes dos indicadores consolidados da capital.',
  shareSummary: 'Segurança ZL: notícias recentes primeiro. Destaques atuais incluem a investigação do sequestro em Artur Alvim e um recorte de roubos de celular no 29º DP/Vila Prudente; dados mensais antigos ficam separados como contexto.',
  readTime: '8 MIN READ',
  badge: 'ZONA LESTE / RECENT NEWS',
  stats: [
    { label: 'JANELA PRINCIPAL', value: '7 DIAS', note: 'notícias confirmadas primeiro' },
    { label: 'ATUALIZAÇÃO', value: '05 · 10 · 17H', note: 'pesquisa recorrente' },
    { label: 'REGRA', value: 'SEM RECICLAR', note: 'notícia velha não vira alerta atual' },
  ],
  sections: [
    {
      title: 'O que é recente nesta edição',
      paragraphs: ['A camada principal agora começa pelos fatos mais novos encontrados e confirmados para a Zona Leste. Em 14 de agosto, a Justiça decretou a prisão de policial civil investigado por envolvimento em sequestro ocorrido em Artur Alvim. Em levantamento publicado em 10 de agosto com base em dados da SSP-SP, a área do 29º DP/Vila Prudente apareceu com alta de 19,5% nos roubos de celular no primeiro semestre, enquanto a capital teve queda no agregado.'],
      bullets: ['Ocorrência recente é rotulada como ocorrência — não como tendência do bairro.', 'Recorte estatístico mostra período e unidade policial.', 'Notícias antigas ficam em Dados e Contexto, abaixo do feed recente.'],
    },
    {
      title: 'Regra editorial a partir de agora',
      bullets: ['Prioridade 1: hoje, ontem e últimos 7 dias.', 'Prioridade 2: dados novos publicados recentemente, mesmo que o período estatístico seja anterior.', 'Contexto mensal/histórico nunca ocupa o lugar de notícia recente.', 'Se não houver notícia nova confirmada, a aba mostra que não encontrou novidade em vez de reciclar conteúdo antigo.'],
    },
    {
      title: 'O que continua proibido',
      bullets: ['Nome/endereço de vítimas particulares.', 'Boato de grupo de bairro sem confirmação.', 'Mapa de ruas “sem polícia” ou previsão de onde haverá crime.', 'Transformar um caso isolado em rótulo de bairro perigoso.'],
    },
  ],
  sources: [
    { label: 'Folha de S.Paulo · Artur Alvim · 14/08/2026', url: 'https://www1.folha.uol.com.br/cotidiano/2026/08/justica-decreta-prisao-de-policial-civil-envolvido-em-sequestro-em-sao-paulo.shtml' },
    { label: 'SSP-SP · Estatísticas criminais', url: 'https://www.ssp.sp.gov.br/estatistica/consultas' },
  ],
  disclaimer: 'O radar não é monitoramento policial em tempo real. Notícias e dados podem ser atualizados conforme investigações, boletins e bases oficiais avancem.',
};

const existing = todayDrops.find((drop) => drop.slug === slug);
if (existing) {
  Object.assign(existing, {
    label: 'Segurança ZL',
    emoji: '🚨',
    title: 'Segurança ZL: Artur Alvim e roubos de celular em Vila Prudente entram no radar recente',
    detail: 'A aba agora prioriza fatos dos últimos 7 dias; estatísticas mensais e ações antigas ficam separadas como contexto.',
  });
} else {
  todayDrops.push({
    slug,
    label: 'Segurança ZL',
    emoji: '🚨',
    title: 'Segurança ZL: Artur Alvim e roubos de celular em Vila Prudente entram no radar recente',
    detail: 'A aba agora prioriza fatos dos últimos 7 dias; estatísticas mensais e ações antigas ficam separadas como contexto.',
  });
}

if (dailyContent.hoje) dailyContent.hoje.readTime = `${todayDrops.length} MISSÕES`;
