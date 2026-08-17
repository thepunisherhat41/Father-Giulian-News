import { dailyContent, edition, todayDrops } from './daily-content';
import { politicsTracker } from './politics-2026';

const set=(slug:string,data:any)=>Object.assign(dailyContent[slug],data);
const replaceDrop=(slug:string,data:any)=>{ const item=todayDrops.find((drop)=>drop.slug===slug); if(item) Object.assign(item,data); };

Object.assign(edition,{ title:'Daily Intelligence · 17 de agosto · 17h' });
Object.assign(politicsTracker,{
  updatedAt:'17/08/2026 · 17h',
  notice:'Campanha eleitoral em curso. O TSE mantém DivulgaCandContas e bases de Dados Abertos para acompanhar pedidos, situação processual, documentos e contas. Em 18/08, o calendário eleitoral prevê o levantamento nacional do total de candidaturas para aferição dos percentuais mínimos do FEFC; isso é um marco estatístico/financeiro, não um julgamento coletivo dos registros.'
});

replaceDrop('politica',{
  title:'18 de agosto vira marco para consolidar o total de candidaturas usado no cálculo do FEFC',
  detail:'Amanhã o TSE considera o levantamento nacional para aferição dos percentuais mínimos do Fundo Eleitoral. Isso não transforma pedido em deferimento: cada registro continua com tramitação própria.'
});
replaceDrop('mundo',{
  title:'Fechamento global: ações mistas, dólar mais fraco e Treasury de 30 anos no maior nível desde 2007',
  detail:'Dados americanos mais fracos reduziram a aposta em aperto imediato do Fed, enquanto dívida longa subiu com preocupação fiscal e emissão corporativa ligada à IA.'
});
replaceDrop('financas',{
  title:'Juro curto e juro longo podem contar histórias diferentes — e isso muda crédito e investimentos',
  detail:'O mercado reduziu aposta em alta imediata do Fed, mas o Treasury de 30 anos subiu. Para a vida real, parcela, CET e prazo continuam mais importantes que uma manchete de corte ou alta.'
});
replaceDrop('tecnologia',{
  title:'ECB alerta para risco de correção em ações de IA; produtividade real não elimina risco de valuation',
  detail:'A leitura do BCE é de risco, não previsão com data: mesmo uma tecnologia transformadora pode atravessar correções se expectativas e valuations correrem à frente dos lucros.'
});

set('hoje',{
  ...dailyContent.hoje,
  title:'17 de agosto · revisão das 17h: eleição entra em fase de consolidação estatística e mercados fecham divididos',
  summary:'A revisão das 17h preserva o conteúdo novo da edição-base e troca quatro áreas onde surgiu informação materialmente melhor: Política, Mundo, Finanças e Tecnologia. As demais continuam válidas sem rotação artificial.',
  shareSummary:'17h: TSE entra no marco de consolidação de candidaturas/FEFC; mercados globais fecham mistos com dólar mais fraco e juro longo alto; Tecnologia passa a discutir risco de valuation em IA.',
  readTime:'19 MISSÕES · 4 ATUALIZADAS',
  badge:'17H INTELLIGENCE UPDATE'
});

set('politica',{
  ...dailyContent.politica,
  title:'18 de agosto: TSE entra no levantamento nacional de candidaturas usado no cálculo do Fundo Eleitoral',
  summary:'O calendário eleitoral determina que 18/08 seja a data considerada para levantar o total nacional de candidaturas que constaram dos pedidos coletivos e individuais, inclusive os recebidos e aceitos até 23h59, para aferição dos percentuais mínimos de repasse do FEFC. Isso não equivale a deferimento coletivo: elegibilidade, impugnações e recursos continuam sendo julgados caso a caso.',
  shareSummary:'Política 17h: 18/08 é marco do TSE para consolidar o total de candidaturas usado no cálculo dos percentuais mínimos do Fundo Eleitoral. É uma fotografia estatística/financeira; não significa que todos os registros estejam deferidos.',
  readTime:'9 MIN READ',
  badge:'17H / POLÍTICA · PÓS-REGISTRO',
  sections:[
    {title:'O que muda amanhã',paragraphs:['O calendário do TSE usa 18 de agosto como data de referência para o levantamento nacional de candidaturas que entra na aferição dos percentuais mínimos do Fundo Especial de Financiamento de Campanha. É uma etapa de organização eleitoral e financeira.']},
    {title:'O que NÃO muda',bullets:['Pedido de registro continua diferente de registro deferido.','Uma candidatura pode seguir em julgamento, recurso, renúncia ou substituição.','O DivulgaCandContas continua sendo a referência para a situação individual.','Para o Executivo, proposta registrada deve prevalecer sobre resumo de campanha quando houver divergência.']},
    {title:'Impacto na vida real',paragraphs:['Para a população, o efeito direto desse marco é transparência sobre quantas candidaturas entram no cálculo de distribuição mínima de recursos públicos de campanha. O impacto não aparece como benefício individual imediato, mas como regra de financiamento que afeta quem recebe recursos, quanto espaço de campanha cada grupo consegue comprar e como o dinheiro público eleitoral é distribuído.'],bullets:['Contribuinte: acompanhe valores recebidos e despesas declaradas por candidato/partido.','Eleitor: diferencie volume de propaganda de viabilidade jurídica da candidatura.','Família/trabalhador: promessa sobre salário, SUS, segurança ou imposto continua devendo ser confrontada com o poder real do cargo.']}
  ],
  sources:[
    {label:'TSE · Calendário Eleitoral 2026',url:'https://www.tse.jus.br/eleicoes/calendario-eleitoral/calendario-eleitoral'},
    {label:'TSE · DivulgaCandContas',url:'https://www.tse.jus.br/administracao/painel/divulgacao-de-candidaturas-e-contas-eleitorais'},
    {label:'TSE · Dados Abertos · Candidatos 2026',url:'https://dadosabertos.tse.jus.br/dataset/candidatos-2026'}
  ]
});

set('mundo',{
  title:'Mercados fecham divididos: dólar enfraquece, ações ficam mistas e o juro longo volta ao centro do risco',
  summary:'No fechamento desta segunda-feira, o S&P 500 caiu 0,26%, o Dow perdeu 0,35% e o Nasdaq avançou 0,17%. O dólar recuou ao menor nível desde junho, enquanto o Treasury de 30 anos alcançou 5,30%, maior nível desde 2007. A combinação mostra que dados fracos podem reduzir aposta em aperto monetário no curto prazo sem necessariamente aliviar o custo de capital de longo prazo.',
  shareSummary:'Mundo: ações dos EUA fecharam mistas e o dólar caiu, mas o Treasury de 30 anos bateu 5,30%, maior nível desde 2007. Curto prazo e longo prazo podem apontar em direções diferentes.',
  readTime:'8 MIN READ',
  badge:'17H / GLOBAL CLOSE',
  stats:[{label:'S&P 500',value:'-0,26%'},{label:'NASDAQ',value:'+0,17%'},{label:'UST 30Y',value:'5,30%'}],
  sections:[
    {title:'A divergência do fechamento',paragraphs:['Dados econômicos americanos mais fracos reduziram parte da expectativa de nova alta imediata do Fed e pressionaram o dólar. Ao mesmo tempo, preocupações fiscais e grande oferta de dívida corporativa ajudaram a empurrar o rendimento de 30 anos para cima.']},
    {title:'Por que isso importa fora de Wall Street',bullets:['Juro longo alto encarece financiamento de empresas e hipotecas.','Dólar mais fraco pode aliviar algumas pressões cambiais globais, mas não de forma uniforme.','Ações de tecnologia podem subir mesmo em um dia de aversão maior a duration se houver notícia específica de demanda/receita.']},
    {title:'Não transforme fechamento em previsão',paragraphs:['Um pregão não define tendência. O que vale acompanhar é se a divergência entre expectativa de Fed no curto prazo e prêmio de risco no longo prazo persiste nas próximas semanas.']}
  ],
  sources:[{label:'Reuters · Global Markets · 17/08/2026',url:'https://www.reuters.com/world/china/global-markets-global-markets-2026-08-17/'}]
});

set('financas',{
  title:'Fed pode parecer mais perto de pausa — e ainda assim o juro de 30 anos subir: entenda o paradoxo',
  summary:'O mercado reduziu a aposta em aperto imediato do Fed depois de dados econômicos mais fracos, mas o rendimento do Treasury de 30 anos chegou a 5,30%. Curva de juros não é uma única taxa: diferentes prazos incorporam inflação, crescimento, risco fiscal, oferta de dívida e prêmio de prazo.',
  shareSummary:'Finanças 17h: juro curto e juro longo podem se mover em sentidos diferentes. Para a família, a regra não muda: compare CET, prazo, indexador e risco de renda — não uma manchete sobre Fed.',
  readTime:'8 MIN READ',
  badge:'17H / CURVA DE JUROS',
  sections:[
    {title:'O que o fechamento ensina',paragraphs:['Uma expectativa menor de alta na taxa básica não obriga títulos longos a cair. O vencimento de 30 anos carrega risco fiscal, inflação futura, prêmio por duração e oferta de títulos por muito mais tempo.']},
    {title:'Como isso chega ao bolso',bullets:['Financiamentos longos podem continuar caros mesmo com expectativa de corte da taxa básica.','Crédito no Brasil responde principalmente à Selic, risco do tomador, spread, prazo e condições locais — não ao Fed isoladamente.','Em dívida prefixada, a taxa contratada não muda automaticamente se o mercado mudar depois.','Em dívida pós-fixada, o indexador e a regra de reajuste importam mais do que o título da notícia.']},
    {title:'Dica prática',paragraphs:['Se for assumir uma dívida de vários anos, simule o custo total em cenários de renda mais fraca e compare CET. Não monte o orçamento contando que uma futura queda de juros necessariamente chegará ao seu contrato.']}
  ],
  sources:[{label:'Reuters · fechamento dos mercados globais · 17/08/2026',url:'https://www.reuters.com/world/china/global-markets-global-markets-2026-08-17/'},{label:'Banco Central · CET',url:'https://www.bcb.gov.br/meubc/faqs/p/custo-efetivo-total-cet'}],
  disclaimer:'Conteúdo educacional; não é recomendação individual de investimento ou crédito.'
});

set('tecnologia',{
  title:'IA pode transformar produtividade e ainda atravessar uma correção de mercado',
  summary:'Uma análise divulgada nesta segunda-feira pelo BCE e repercutida pela Reuters alerta que o otimismo em torno da inteligência artificial pode produzir uma correção relevante em ações de tecnologia caso valuations estejam muito à frente dos lucros realizados. A instituição não apresenta uma data para isso e reconhece que IA pode gerar ganhos reais de produtividade.',
  shareSummary:'Tecnologia 17h: o BCE alerta para risco de correção em ações ligadas à IA. Não é uma previsão com data — é o lembrete de que tecnologia transformadora e valuation excessivo podem coexistir.',
  readTime:'8 MIN READ',
  badge:'17H / AI VALUATION',
  sections:[
    {title:'Tecnologia boa não significa preço sempre correto',paragraphs:['História de tecnologia e história de valuation são diferentes. Uma inovação pode gerar ganhos enormes e, ainda assim, ativos financeiros podem corrigir se expectativas de lucro forem antecipadas cedo demais.']},
    {title:'A exposição é global',paragraphs:['Segundo a análise repercutida pela Reuters, famílias e instituições europeias têm exposição relevante às grandes empresas americanas de tecnologia. Uma correção forte nos EUA poderia, portanto, transmitir volatilidade para a Europa mesmo com valuations locais mais moderados.']},
    {title:'O que acompanhar sem tentar adivinhar o topo',bullets:['Crescimento de receita e margem gerados por IA, não só capex.','Fluxo de caixa versus dívida e custo de funding.','Concentração dos índices em poucas empresas.','Retorno econômico dos data centers e aceleradores já instalados.']}
  ],
  sources:[
    {label:'Reuters · análise do BCE sobre risco de correção em IA · 17/08/2026',url:'https://www.reuters.com/business/autos-transportation/ai-market-correction-is-coming-ecb-blog-predicts-2026-08-17/'},
    {label:'BCE · AI and the euro area economy · 23/03/2026',url:'https://www.ecb.europa.eu/press/key/date/2026/html/ecb.sp260323_1~1e06784a89.en.html'}
  ]
});
