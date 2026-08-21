import { deepReadForSlug as baseDeepReadForSlug, type EditorialDeepRead } from './editorial-deep-read-2026-08-21';

const intraday: EditorialDeepRead[] = [
  {
    slug: 'politica',
    context: [
      'Em 21 de agosto, o calendário eleitoral prevê a divulgação pelo TSE dos percentuais nacionais de candidaturas femininas, negras e indígenas por partido usados nas regras de destinação de recursos do Fundo Partidário e do FEFC.',
      'O mesmo dia também marca etapas operacionais das emissoras antes do horário eleitoral gratuito, que começa em 28 de agosto. Transparência financeira, exposição em mídia e situação jurídica das candidaturas são dimensões diferentes.'
    ],
    practical: [
      'Para acompanhar a eleição com clareza, confira separadamente os percentuais publicados pelo TSE, a situação individual no DivulgaCandContas e as regras de propaganda.',
      'Ao ver números de representatividade ou distribuição de recursos, leia a metodologia e a base usada antes de inferir apoio eleitoral ou resultado futuro.'
    ],
    limits: [
      'Percentuais de candidaturas não são pesquisa de intenção de voto, ranking de partidos nem medida de desempenho eleitoral.',
      'Pedido de registro, candidatura apta, decisão judicial e tempo de propaganda não são sinônimos.',
      'Esta leitura descreve regras e marcos oficiais; não compara, pontua ou recomenda candidatos ou partidos.'
    ],
    watch: [
      'Publicação dos percentuais oficiais do TSE e eventuais retificações.',
      'Funcionamento do pool de emissoras a partir de 24 de agosto.',
      'Início do horário eleitoral gratuito em 28 de agosto e atualizações do DivulgaCandContas.'
    ]
  },
  {
    slug: 'financas',
    context: [
      'Na manhã de 21 de agosto, petróleo elevado pela tensão geopolítica, dólar global mais fraco e Treasury de 30 anos na região de 5,25% apareceram ao mesmo tempo. Esses preços respondem a motores diferentes, mas juntos ajudam a medir energia, risco fiscal e custo global de capital.',
      'Juros longos incorporam expectativas de inflação, crescimento, oferta de dívida e prêmio de prazo. Por isso podem permanecer altos mesmo sem uma nova decisão imediata de política monetária.'
    ],
    practical: [
      'Em crédito ou financiamento longo, compare CET, prazo, indexador e capacidade de pagamento; não assuma que uma futura queda da taxa básica reduzirá automaticamente o custo contratado hoje.',
      'No orçamento doméstico, monitore combustível, frete e bens importados como categorias sensíveis a choques externos, sem transformar um movimento intradiário em aumento garantido de preços.',
      'Em investimentos, separe impacto de petróleo, câmbio e juros por setor e horizonte; um único pregão não estabelece tendência estrutural.'
    ],
    limits: [
      'Treasury alto não implica alta automática da Selic.',
      'Brent perto de US$95 não determina sozinho o preço da gasolina no Brasil nem a mesma variação na bomba.',
      'Dólar global mais fraco não garante valorização do real, que também depende de fatores domésticos.'
    ],
    watch: [
      'Brent, tráfego e risco de oferta nas rotas de energia do Golfo.',
      'Treasury de 30 anos, emissão e gestão da dívida americana.',
      'USD/BRL, expectativas de inflação e curva de juros no Brasil.'
    ]
  }
];

export function deepReadForSlug(slug: string) {
  return intraday.find((item) => item.slug === slug) ?? baseDeepReadForSlug(slug);
}

export type { EditorialDeepRead } from './editorial-deep-read-2026-08-21';
