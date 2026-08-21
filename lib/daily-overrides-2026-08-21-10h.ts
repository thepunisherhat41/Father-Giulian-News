import { dailyContent, todayDrops } from './daily-content';
import { politicsTracker } from './politics-2026';

const set = (slug: string, data: any) => Object.assign(dailyContent[slug], data);
const replaceDrop = (slug: string, data: any) => {
  const index = todayDrops.findIndex((item) => item.slug === slug);
  if (index >= 0) todayDrops[index] = { ...todayDrops[index], ...data };
};

Object.assign(politicsTracker, {
  updatedAt: '21/08/2026 · 10h',
  notice: 'A campanha eleitoral segue nas ruas e na internet. Em 21/08, o calendário do TSE prevê a divulgação dos percentuais nacionais de candidaturas femininas, de pessoas negras e indígenas por partido para fins de destinação de recursos, além do encerramento de obrigações operacionais das emissoras para o horário eleitoral. Esses marcos não equivalem a deferimento coletivo de candidaturas nem a intenção de voto.',
});

set('hoje', {
  title: '22 áreas revisadas · atualização das 10h de 21 de agosto',
  summary: 'Todas as 22 áreas foram novamente reavaliadas às 10h. Política e Finanças ganharam atualização material; as outras 20 foram validadas porque continuam corretas, atuais e editorialmente úteis.',
  shareSummary: '21/08 · 10h: 22 áreas revisadas. Política e Finanças foram atualizadas com fatos novos; as outras 20 foram validadas hoje sem rotação artificial.',
  readTime: '22 MISSÕES',
  badge: '10H · REVISÃO COMPLETA',
});

set('politica', {
  title: '21 de agosto traz novo marco do TSE antes do horário eleitoral no rádio e na TV',
  summary: 'O calendário eleitoral prevê para hoje a divulgação, pelo TSE, dos percentuais nacionais de candidaturas femininas, negras e indígenas por partido usados na destinação de recursos. Em paralelo, as emissoras concluem etapas operacionais que antecedem o horário eleitoral gratuito.',
  shareSummary: 'Política 21/08 · 10h: o TSE chega hoje a um marco de transparência ligado aos percentuais de candidaturas femininas, negras e indígenas por partido. Isso trata de distribuição de recursos e organização eleitoral, não de ranking, intenção de voto ou deferimento coletivo.',
  readTime: '7 MIN READ',
  badge: 'POLÍTICA · ATUALIZADO 10H',
  sections: [
    {
      title: 'O que acontece hoje',
      paragraphs: ['O calendário oficial das Eleições 2026 estabelece 21 de agosto como data-limite para o TSE divulgar, em sua página, percentuais nacionais de candidaturas femininas, de pessoas negras e indígenas por partido, calculados sobre os pedidos de registro considerados para essa finalidade.'],
      bullets: [
        'Os percentuais têm efeito na destinação de recursos do Fundo Partidário e do Fundo Especial de Financiamento de Campanha conforme as regras eleitorais.',
        'Hoje também é o último dia para emissoras concluírem atribuições técnicas relacionadas à geração e retransmissão do sinal da propaganda eleitoral.',
        'O horário eleitoral gratuito no rádio e na televisão começa em 28 de agosto.',
      ],
    },
    {
      title: 'Por que importa',
      paragraphs: ['O marco melhora a rastreabilidade da distribuição de recursos públicos de campanha e prepara a infraestrutura que colocará a propaganda eleitoral também no rádio e na TV. Para o eleitor, transparência financeira e situação jurídica das candidaturas continuam sendo trilhas diferentes da exposição publicitária.'],
    },
    {
      title: 'O que não concluir',
      bullets: [
        'Percentual divulgado pelo TSE não mede apoio popular nem desempenho eleitoral.',
        'Pedido de registro, candidatura apta e decisão judicial não são sinônimos automáticos.',
        'Tempo de propaganda não deve ser interpretado como recomendação, ranking ou previsão de resultado.',
      ],
    },
    {
      title: 'O que acompanhar',
      bullets: [
        'Publicação dos percentuais oficiais pelo TSE.',
        'Funcionamento do pool de emissoras a partir de 24 de agosto.',
        'Início do horário eleitoral gratuito em 28 de agosto.',
      ],
    },
  ],
  sources: [
    { label: 'TSE · Calendário Eleitoral 2026', url: 'https://www.tse.jus.br/eleicoes/calendario-eleitoral' },
    { label: 'TSE · Plano de mídia do horário eleitoral', url: 'https://www.tse.jus.br/comunicacao/noticias/2026/Agosto/tse-inicia-convocacao-para-elaboracao-dos-planos-de-midia-do-horario-eleitoral-gratuito' },
  ],
});

replaceDrop('politica', {
  title: 'TSE chega hoje a novo marco de transparência e preparação do horário eleitoral',
  detail: 'Percentuais nacionais de candidaturas para destinação de recursos e etapas técnicas das emissoras entram no calendário de 21/08; horário eleitoral começa em 28/08.',
});

set('financas', {
  title: 'Petróleo subiu, dólar enfraqueceu e juro longo voltou a pressionar: três preços contam a mesma história de risco',
  summary: 'Os mercados desta sexta combinaram petróleo elevado por tensão geopolítica, dólar mais fraco e Treasury de 30 anos novamente perto de níveis que incomodam investidores. A leitura correta exige separar choque de energia, prêmio fiscal e política monetária.',
  shareSummary: 'Finanças 21/08 · 10h: Brent rondou US$95, o dólar ficou pressionado e o Treasury de 30 anos voltou à região de 5,25%. Isso não significa que todos os juros ou preços no Brasil vão subir automaticamente; mostra que energia e risco fiscal seguem pressionando o custo global de capital.',
  readTime: '8 MIN READ',
  badge: 'FINANÇAS · ATUALIZADO 10H',
  sections: [
    {
      title: 'O que mudou nesta manhã',
      paragraphs: ['A Reuters registrou nesta sexta uma combinação pouco confortável para os mercados: petróleo elevado pela tensão no Golfo, dólar em mínima de cerca de três meses e rendimento do Treasury de 30 anos em torno de 5,25%, enquanto ações globais caminhavam para a pior semana desde meados de julho.'],
      bullets: [
        'Brent chegou perto de US$95 antes de aliviar parte do movimento.',
        'O juro de 30 anos dos EUA voltou a se aproximar da região de 5,30%, nível acompanhado de perto pelo mercado.',
        'O dólar perdeu força apesar do ambiente de aversão a risco, em meio a preocupações com dívida e consolidação fiscal americana.',
      ],
    },
    {
      title: 'Por que isso importa para o Brasil',
      paragraphs: ['Petróleo, dólar e juros americanos afetam canais diferentes. Energia pode pressionar combustíveis e inflação; dólar altera preços de bens importados e fluxos financeiros; Treasury longo funciona como referência global para custo de capital e valuation. O efeito doméstico depende também de câmbio local, política monetária, Petrobras, fiscal brasileiro e composição do crédito.'],
    },
    {
      title: 'Aplicação prática',
      bullets: [
        'Em financiamento longo, compare CET e prazo em vez de apostar em uma queda futura de juros.',
        'Em orçamento doméstico, trate combustível e itens importados como categorias sensíveis a choque externo, não como preços que necessariamente subirão no mesmo dia.',
        'Para investimentos, evite interpretar um único pregão como mudança definitiva de tendência.',
      ],
    },
    {
      title: 'O que não concluir',
      paragraphs: ['Treasury alto não significa alta automática da Selic; Brent alto não determina sozinho o preço da gasolina; dólar mais fraco no exterior não garante valorização do real. São sinais conectados, mas cada mercado possui mecanismos próprios.'],
    },
    {
      title: 'O que acompanhar',
      bullets: ['Evolução do Brent e do tráfego de energia no Golfo.', 'Treasury de 30 anos e medidas de gestão de dívida do Tesouro americano.', 'Comportamento do real e expectativas de inflação no Brasil.'],
    },
  ],
  sources: [
    { label: 'Reuters · Global Markets · 21/08/2026', url: 'https://www.reuters.com/world/china/global-markets-global-markets-2026-08-21/' },
  ],
});

replaceDrop('financas', {
  title: 'Petróleo subiu, dólar enfraqueceu e juro longo voltou a pressionar os mercados',
  detail: 'Brent perto de US$95 e Treasury de 30 anos na região de 5,25% mostram como energia e risco fiscal podem pressionar o custo global de capital por canais diferentes.',
});
