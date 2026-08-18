import { dailyContent, edition, todayDrops } from './daily-content';
import { politicsTracker } from './politics-2026';

const set=(slug:string,data:any)=>Object.assign(dailyContent[slug],data);
const replaceDrop=(slug:string,data:any)=>{ const item=todayDrops.find((drop)=>drop.slug===slug); if(item) Object.assign(item,data); };

Object.assign(edition,{ title:'Daily Intelligence · 18 de agosto · 10h' });
Object.assign(politicsTracker,{
  updatedAt:'18/08/2026 · 10h',
  notice:'Hoje continua sendo a data-base do calendário do TSE para levantar candidaturas usadas na aferição dos percentuais mínimos do FEFC. O fundo eleitoral de 2026 soma R$ 4.961.519.777,00. A fotografia de RRC/RRCI até 23h59 é estatística e financeira; não equivale a deferimento coletivo. Situação jurídica individual permanece no DivulgaCandContas.'
});

replaceDrop('politica',{
  title:'FEFC 2026: R$ 4,96 bi e a fotografia de candidaturas usada nos percentuais mínimos',
  detail:'O TSE usa os pedidos recebidos e aceitos até 23h59 de hoje como base estatística; isso não declara candidaturas deferidas.'
});
replaceDrop('mundo',{
  title:'Petróleo, bonds e bolsas entram no mesmo choque: Hormuz deixa de ser só uma história de energia',
  detail:'Brent acima de US$ 91, Treasury de 30 anos perto de máxima de 19 anos e bolsas sob pressão mostram transmissão geopolítica para inflação e custo de capital.'
});
replaceDrop('financas',{
  title:'Juro longo sobe mesmo com menor aposta de alta do Fed: petróleo e risco fiscal puxam o prêmio de prazo',
  detail:'A chance implícita de alta em setembro caiu, mas o Treasury de 30 anos voltou à região de 5,32%. Taxa curta e juro longo podem caminhar em direções diferentes.'
});
replaceDrop('tecnologia',{
  title:'IA em escala de infraestrutura: Nvidia oferece até US$ 105 bi em garantias para data center ligado à OpenAI',
  detail:'O projeto em Ohio combina lease de 20 anos, energia, chips, garantias e project finance — mostrando que IA virou também uma engenharia financeira de infraestrutura.'
});

set('hoje',{
  ...dailyContent.hoje,
  title:'18 de agosto · revisão das 10h: Hormuz pressiona mercados e IA escala para megaprojetos financiados',
  summary:'A revisão das 10h preserva as 20 missões novas da edição-base e atualiza quatro áreas com informação materialmente melhor: Política, Mundo, Finanças e Tecnologia. As demais continuam válidas sem rotação artificial.',
  shareSummary:'Atualização das 10h: FEFC ganha contexto de R$ 4,96 bi; Hormuz pressiona petróleo, bonds e bolsas; juro longo sobe mesmo com menor aposta de alta do Fed; Nvidia/OpenAI levam funding de IA a outra escala.',
  readTime:'20 MISSÕES · 4 ATUALIZADAS',
  badge:'10H INTELLIGENCE UPDATE'
});

set('politica',{
  ...dailyContent.politica,
  title:'FEFC 2026: a fotografia de candidaturas de hoje entra na distribuição mínima de um fundo de R$ 4,96 bilhões',
  summary:'O Fundo Especial de Financiamento de Campanha de 2026 soma R$ 4.961.519.777,00. O calendário do TSE usa os pedidos de candidatura recebidos e aceitos até 23h59 de hoje para levantar a base nacional usada na aferição dos percentuais mínimos de repasse na prestação de contas. Isso não é julgamento coletivo de elegibilidade.',
  shareSummary:'Política 10h: o FEFC 2026 soma R$ 4,96 bi. A fotografia de candidaturas até 23h59 de hoje entra na aferição dos percentuais mínimos de repasse; situação jurídica individual continua separada no DivulgaCandContas.',
  readTime:'9 MIN READ',
  badge:'10H / POLÍTICA · FEFC',
  stats:[{label:'FEFC 2026',value:'R$ 4,96 BI'},{label:'CORTE DE HOJE',value:'23H59'},{label:'STATUS JURÍDICO',value:'SEPARADO'}],
  sections:[
    {title:'O que mudou desde a edição-base',paragraphs:['A leitura das 05h explicou a data-base. A atualização das 10h acrescenta a dimensão financeira: o FEFC de 2026 soma R$ 4.961.519.777,00, distribuído aos partidos segundo critérios legais e partidários publicados.']},
    {title:'Impacto na vida real',paragraphs:['Para o cidadão comum, esse é dinheiro público destinado ao financiamento eleitoral. A importância prática está em transparência: quem recebe, quais critérios são aplicados, quanto é gasto e se as regras mínimas de distribuição são observadas. O valor do fundo não implica aumento instantâneo de imposto nem benefício direto; ele integra o orçamento público já destinado ao processo eleitoral.'],bullets:['Contribuinte: pode acompanhar critérios e prestação de contas.','Eleitor: volume de propaganda não deve ser confundido com situação jurídica da candidatura.','Cidadão: compare promessa, fonte de financiamento e competência real do cargo.']},
    {title:'O que não muda',paragraphs:['Pedido recebido, fotografia estatística e distribuição de FEFC não substituem julgamento de registro. O comparador permanece sem ranking ou recomendação de voto e continua tratando propostas como condicionais.']}
  ],
  sources:[
    {label:'TSE · Calendário Eleitoral 2026',url:'https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-760-de-2-de-marco-de-2026'},
    {label:'TSE · FEFC Eleições 2026',url:'https://www.tse.jus.br/eleicoes/eleicoes-2026-content/prestacao-de-contas/fundo-especial-de-financiamento-de-campanha-fefc'},
    {label:'TSE · DivulgaCandContas',url:'https://divulgacandcontas.tse.jus.br/divulga/#/'}
  ]
});

set('mundo',{
  title:'Hormuz agora pressiona petróleo, títulos e ações ao mesmo tempo',
  summary:'A escalada das tensões entre EUA e Irã elevou o Brent acima de US$ 91 e voltou a pressionar títulos soberanos de longo prazo, enquanto bolsas globais perderam força. O ponto novo é a transmissão: o mercado já não está tratando Hormuz apenas como risco físico de petróleo, mas como choque potencial de inflação e custo de capital.',
  shareSummary:'Mundo 10h: Hormuz virou um choque cruzado. Petróleo acima de US$ 91, Treasury longo perto de máximas de quase duas décadas e bolsas pressionadas mostram geopolítica chegando a inflação e funding.',
  readTime:'8 MIN READ',
  badge:'10H / GLOBAL RISK',
  stats:[{label:'BRENT',value:'> US$ 91'},{label:'UST 30Y',value:'~5,32%'},{label:'VIÉS',value:'RISK-OFF'}],
  sections:[
    {title:'O que mudou desde cedo',paragraphs:['A Reuters descreve uma venda simultânea em títulos e ações com petróleo em alta, à medida que o mercado passa a precificar uma crise mais prolongada no Estreito de Hormuz. O Treasury de 30 anos alcançou a maior região em cerca de 19 anos.']},
    {title:'Por que essa combinação é incomum',paragraphs:['Dados americanos mais fracos reduziram a probabilidade implícita de nova alta do Fed, o que normalmente aliviaria yields. Mas energia cara, risco inflacionário e prêmio fiscal podem empurrar o juro longo para cima mesmo assim.']},
    {title:'Como isso chega ao cotidiano',bullets:['Energia: petróleo caro pode pressionar combustível, frete e petroquímicos.','Financiamento: yields longos altos elevam o custo global de capital.','Emprego/investimento: empresas mais endividadas podem rever projetos.','Bolsa: empresas de crescimento e IA são sensíveis a desconto por juros longos.']},
    {title:'O que não dá para afirmar',paragraphs:['Alta do petróleo não significa repasse integral e imediato ao consumidor brasileiro. Câmbio, política de preços, estoques, tributos e margem de refino/intermediação alteram a transmissão.']}
  ],
  sources:[
    {label:'Reuters · mercados globais · 18/08/2026',url:'https://www.reuters.com/world/china/global-markets-wrapup-1-2026-08-18/'},
    {label:'Reuters · Hormuz e petróleo · 18/08/2026',url:'https://www.reuters.com/commentary/reuters-open-interest/oil-market-starts-pricing-prolonged-hormuz-crisis-2026-08-18/'}
  ]
});

set('financas',{
  title:'Fed menos hawkish não significa financiamento longo barato: o Treasury de 30 anos voltou à região de 5,32%',
  summary:'Dados americanos mais fracos reduziram a probabilidade implícita de alta do Fed em setembro, mas o juro de 30 anos subiu para a maior região em quase duas décadas. Petróleo, inflação esperada, oferta de dívida e prêmio de prazo conseguem empurrar juros longos na direção oposta da taxa curta.',
  shareSummary:'Finanças 10h: mercado reduziu a aposta de alta do Fed, mas o Treasury de 30 anos foi para ~5,32%. Taxa básica e juro longo não são a mesma coisa; financiamento longo depende também de inflação, fiscal e prêmio de prazo.',
  readTime:'8 MIN READ',
  badge:'10H / CURVA DE JUROS',
  stats:[{label:'UST 30Y',value:'~5,32%'},{label:'FED SET.',value:'~35% ALTA'},{label:'BRENT',value:'> US$ 91'}],
  sections:[
    {title:'A aparente contradição',paragraphs:['A chance implícita de alta do Fed em setembro caiu para perto de 35%, segundo a leitura de mercado citada pela Reuters. Mesmo assim, o Treasury de 30 anos subiu. Isso ocorre porque o longo prazo incorpora inflação futura, risco fiscal, oferta de títulos e prêmio por carregar duração.']},
    {title:'Aplicação prática',bullets:['Não use expectativa de corte/pausa do banco central como sinônimo de financiamento imobiliário ou empresarial barato.','Compare CET e duração do contrato.','Prefixado longo carrega risco de taxa e inflação esperada.','Dívida curta e dívida longa respondem a fatores diferentes.']},
    {title:'Conexão com o Brasil',paragraphs:['Juros globais longos elevados podem pressionar custo de capital, câmbio e prêmio exigido por investidores em mercados emergentes. O impacto doméstico não é mecânico, mas faz parte do conjunto que influencia condições financeiras brasileiras.']}
  ],
  sources:[
    {label:'Reuters · mercados globais · 18/08/2026',url:'https://www.reuters.com/world/china/global-markets-wrapup-1-2026-08-18/'},
    {label:'Reuters · Morning Bid · 18/08/2026',url:'https://www.reuters.com/commentary/reuters-open-interest/global-markets-view-usa-2026-08-18/'}
  ],
  disclaimer:'Conteúdo educacional; não é recomendação individual de investimento, câmbio ou crédito.'
});

set('tecnologia',{
  title:'Nvidia oferece até US$ 105 bilhões em garantias: infraestrutura de IA entra na era do project finance',
  summary:'A Nvidia se comprometeu a oferecer até US$ 105 bilhões em garantias ligadas ao contrato de 20 anos da OpenAI para um grande data center da SB Energy em Ohio, além de investir US$ 1,5 bilhão na desenvolvedora. O projeto prevê até 8 GW de capacidade, com 800 MW esperados até 2028. É um exemplo extremo de como IA agora depende de energia, imóveis, dívida, garantias e contratos de longo prazo — não apenas GPUs.',
  shareSummary:'Tecnologia 10h: Nvidia/OpenAI levam IA para escala de project finance. Até US$ 105 bi em garantias podem apoiar lease e energia de um megadata center em Ohio; chips são só uma parte da infraestrutura.',
  readTime:'9 MIN READ',
  badge:'10H / AI INFRASTRUCTURE',
  stats:[{label:'GARANTIAS',value:'ATÉ US$ 105 BI'},{label:'CAPACIDADE',value:'ATÉ 8 GW'},{label:'PRIMEIRA FASE',value:'800 MW · 2028'}],
  sections:[
    {title:'O que foi anunciado',paragraphs:['Segundo a Reuters, as garantias da Nvidia apoiariam obrigações-chave ligadas ao lease e à energia do projeto da SB Energy usado pela OpenAI. A Nvidia também investirá US$ 1,5 bilhão na SB Energy. Isso não significa que US$ 105 bilhões serão desembolsados imediatamente nem que esse valor corresponde ao custo total do projeto.']},
    {title:'Por que isso muda a leitura de IA',paragraphs:['Um data center desse porte é um ativo de infraestrutura: exige conexão elétrica, terrenos, construção, resfriamento, rede, equipamentos e contratos de longo prazo. A vantagem competitiva passa a depender da capacidade de financiar e operar esse sistema inteiro.']},
    {title:'Riscos e perguntas',bullets:['Garantias criam exposição financeira se obrigações não forem cumpridas.','Escala de 8 GW exige expansão de rede e geração.','Financiamento circular precisa ser separado de demanda econômica final.','Receita futura precisa justificar capex e dívida ao longo de anos.']},
    {title:'Conexão inesperada',paragraphs:['A corrida da IA se aproxima de infraestrutura pesada: empresas de chips podem passar a assumir riscos semelhantes aos de financiadores, utilities e incorporadores para garantir demanda futura de seus próprios aceleradores.']}
  ],
  sources:[
    {label:'Reuters · Nvidia / OpenAI / Ohio data center · 17/08/2026',url:'https://www.reuters.com/business/media-telecom/nvidia-invest-15-billion-sb-energy-under-openai-data-center-deal-2026-08-17/'}
  ]
});
