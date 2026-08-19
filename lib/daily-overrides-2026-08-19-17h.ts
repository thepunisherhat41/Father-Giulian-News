import { dailyContent, edition, todayDrops } from './daily-content';

const set=(slug:string,data:any)=>Object.assign(dailyContent[slug],data);
const replaceDrop=(slug:string,data:any)=>{const item=todayDrops.find((drop)=>drop.slug===slug);if(item) Object.assign(item,data);};

Object.assign(edition,{title:'Daily Intelligence · 19 de agosto · 17h'});

replaceDrop('mundo',{
  title:'Hormuz fecha o dia com Brent em máxima de quase quatro semanas',
  detail:'Brent encerrou a US$ 91,62, com tráfego marítimo ainda lento e nova escalada diplomática envolvendo Emirados Árabes Unidos e Irã.'
});
replaceDrop('financas',{
  title:'Treasury alivia juros longos; bolsa reage enquanto Fed mantém preocupação com inflação',
  detail:'Yields cederam após reforço das recompras de liquidez do Tesouro; minutos do Fed mostraram vários membros prontos para subir juros se a inflação não convergir.'
});
replaceDrop('tecnologia',{
  title:'Google amplia aposta em chips próprios com Marvell',
  detail:'Marvell subiu após anunciar colaboração em custom silicon do Google; a pauta explica por que ASICs sob medida viraram peça central da infraestrutura de IA.'
});

set('hoje',{
  ...dailyContent.hoje,
  title:'22 missões · revisão das 17h de 19 de agosto',
  summary:'A edição-base permanece íntegra. A revisão das 17h atualiza três áreas com mudança material: Mundo incorpora o fechamento do petróleo e a escalada entre Emirados e Irã; Finanças combina a queda dos yields com os minutos do Fed; Tecnologia troca euforia de IPO por custom silicon e a nova colaboração Marvell–Google. Segurança ZL foi rechecado e continua sem nova ocorrência confirmada desta tarde.',
  shareSummary:'17h de 19/08: Brent fecha em US$ 91,62 com Hormuz ainda sob tensão; yields aliviam após ação de liquidez do Tesouro, mas o Fed segue preocupado com inflação; e Marvell/Google reforçam a corrida por chips próprios de IA. Segurança ZL segue sem nova ocorrência confirmada.',
  readTime:`${todayDrops.length} MISSÕES · 3 ATUALIZADAS`,
  badge:'17H INTELLIGENCE UPDATE'
});

set('mundo',{
  title:'Brent fecha em US$ 91,62: risco de Hormuz ganha nova camada diplomática',
  summary:'O Brent encerrou esta quarta-feira a US$ 91,62 por barril, maior fechamento desde 24 de julho. Além do tráfego ainda lento pelo Estreito de Hormuz, o mercado passou a incorporar a decisão dos Emirados Árabes Unidos de suspender relações comerciais e financeiras com o Irã após um episódio com mísseis que Teerã contesta.',
  shareSummary:'Mundo 17h: Brent fechou em US$ 91,62, maior nível em quase quatro semanas. Hormuz continua com tráfego lento e a tensão agora inclui a suspensão de relações comerciais/financeiras entre Emirados e Irã.',
  readTime:'8 MIN READ',
  badge:'17H / HORMUZ + GEOPOLÍTICA',
  stats:[
    {label:'BRENT',value:'US$ 91,62',note:'fechamento · 19/08'},
    {label:'WTI',value:'US$ 85,83',note:'fechamento · 19/08'},
    {label:'SINAL',value:'MÁX. DESDE 24/07'}
  ],
  sections:[
    {title:'O que mudou desde as 10h',paragraphs:['O petróleo não apenas manteve a alta: fechou no maior nível em quase quatro semanas. O risco logístico permanece, mas a nova informação relevante é a escalada diplomática envolvendo Emirados Árabes Unidos e Irã.']},
    {title:'Fato confirmado versus alegação',bullets:['Os Emirados disseram ter detectado dois mísseis lançados do Irã e suspenderam transações comerciais e financeiras com o país.','O Irã classificou a acusação como sem fundamento.','O tráfego pelo Estreito segue reduzido, mas isso não equivale a prova de bloqueio total.','Preço do petróleo no exterior não se converte automaticamente em preço doméstico na mesma proporção.']},
    {title:'Por que importa',paragraphs:['A crise deixa de ser só uma restrição física de rota e passa a atingir relações econômicas regionais. Isso pode afetar seguro marítimo, comércio, financiamento e confiança antes mesmo de haver falta física de combustível.']}
  ],
  sources:[
    {label:'Reuters · Oil prices settle near 4-week high · 19/08/2026',url:'https://www.reuters.com/business/energy/oil-edges-up-uncertainty-over-exports-through-hormuz-2026-08-19/'},
    {label:'Reuters · UAE markets and Iran tensions · 19/08/2026',url:'https://www.reuters.com/world/middle-east/uae-stocks-fall-after-missile-scare-2026-08-19/'}
  ]
});

set('financas',{
  title:'Juros longos aliviam, mas o Fed deixa claro que a inflação ainda pode exigir aperto',
  summary:'Depois do estresse de terça-feira, o Treasury de 30 anos recuou nesta quarta após o Tesouro dos EUA ampliar operações de recompra voltadas à liquidez do mercado. Ao mesmo tempo, os minutos da reunião de julho do Fed mostraram preocupação crescente com inflação: vários participantes estavam preparados para subir juros caso a convergência à meta não avançasse.',
  shareSummary:'Finanças 17h: yields longos recuaram após reforço de liquidez do Tesouro, mas os minutos do Fed mostraram que a inflação ainda pode justificar nova alta. Alívio de mercado não é o mesmo que mudança de política monetária.',
  readTime:'9 MIN READ',
  badge:'17H / FED + BONDS',
  stats:[
    {label:'MERCADO',value:'YIELDS ↓',note:'após stress de terça'},
    {label:'FED',value:'INFLAÇÃO EM FOCO'},
    {label:'LEITURA',value:'LIQUIDEZ ≠ CUT'}
  ],
  sections:[
    {title:'O que aconteceu',paragraphs:['O recuo dos yields veio após anúncio de maior suporte de liquidez por meio de recompras de títulos longos. Isso ajudou ativos de risco e reduziu parte do estresse da curva.']},
    {title:'O que os minutos acrescentam',bullets:['O Fed divulgou hoje os minutos da reunião de 28–29 de julho.','A Reuters reportou que “vários” participantes estavam prontos para elevar juros se a inflação não recuasse para a meta.','Isso não significa alta automática em setembro; mostra que o risco de aperto permanece condicional aos dados.','Recompra de liquidez do Tesouro não é equivalente a corte de juros do Fed.']},
    {title:'Aplicação prática',paragraphs:['Para crédito e financiamento, continue comparando CET, prazo e total a pagar. Um dia de queda nos yields pode melhorar condições de mercado, mas não garante que bancos repassem imediatamente esse movimento ao consumidor.']}
  ],
  sources:[
    {label:'Federal Reserve · calendário/minutas FOMC de 28–29/07',url:'https://www.federalreserve.gov/monetarypolicy.htm'},
    {label:'Reuters · Wall Street rises as yields ease · 19/08/2026',url:'https://www.reuters.com/business/us-stock-futures-steady-after-tech-slump-investors-focus-middle-east-tensions-2026-08-19/'}
  ],
  disclaimer:'Conteúdo educacional; não é recomendação individual de investimento.'
});

set('tecnologia',{
  title:'Google e Marvell reforçam a corrida por chips próprios para IA',
  summary:'A Marvell avançou em bolsa após anunciar colaboração para desenvolver chips customizados para o Google. O movimento reforça uma tendência estrutural: hyperscalers não dependem apenas de GPUs genéricas; custom ASICs e XPUs permitem otimizar custo, consumo, interconexão e workloads específicos.',
  shareSummary:'Tecnologia 17h: Marvell e Google ampliam colaboração em custom silicon. A disputa de IA passa também por chips próprios, packaging, memória e interconexão — não apenas por comprar mais GPUs.',
  readTime:'8 MIN READ',
  badge:'17H / CUSTOM SILICON',
  stats:[
    {label:'TEMA',value:'CUSTOM ASIC'},
    {label:'OBJETIVO',value:'AI INFRA'},
    {label:'LEITURA',value:'GPU ≠ ÚNICA ROTA'}
  ],
  sections:[
    {title:'O que mudou',paragraphs:['A Reuters informou nesta tarde que a Marvell ajudará no desenvolvimento de chips customizados do Google e que a parceria impulsionou as ações da companhia. O detalhe financeiro mais chamativo é secundário à mudança arquitetural: hyperscalers estão verticalizando partes do stack de compute.']},
    {title:'Por que chips próprios atraem hyperscalers',bullets:['Podem otimizar desempenho por watt para workloads específicos.','Reduzem dependência de uma única arquitetura de acelerador.','Exigem investimento em design, software, packaging, memória e fabricação.','Customização aumenta eficiência potencial, mas também cria risco de lock-in e ciclos longos de desenvolvimento.']},
    {title:'O que ainda não sabemos',paragraphs:['O anúncio não prova que custom silicon substituirá GPUs em todos os workloads. Modelos, treinamento, inferência, ecossistema de software e disponibilidade de fabricação continuam determinando a arquitetura ideal.']}
  ],
  sources:[
    {label:'Reuters · Marvell/Google custom chips · 19/08/2026',url:'https://www.reuters.com/business/us-stock-futures-steady-after-tech-slump-investors-focus-middle-east-tensions-2026-08-19/'},
    {label:'Marvell · Custom ASICs',url:'https://www.marvell.com/products/custom-asic.html'}
  ]
});
