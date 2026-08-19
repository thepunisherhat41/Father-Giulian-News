import { dailyContent, edition, todayDrops } from './daily-content';

const set=(slug:string,data:any)=>Object.assign(dailyContent[slug],data);
const replaceDrop=(slug:string,data:any)=>{const item=todayDrops.find((drop)=>drop.slug===slug);if(item) Object.assign(item,data);};

Object.assign(edition,{title:'Daily Intelligence · 19 de agosto · 10h'});

replaceDrop('mundo',{
  title:'Hormuz mantém prêmio de risco: Brent toca máxima de três semanas',
  detail:'Brent chegou a US$ 91,56 nesta manhã, com volumes de navegação ainda bem abaixo do normal e baixa confiança em passagem segura.'
});
replaceDrop('financas',{
  title:'Juros longos voltam ao centro: dívida pública e petróleo pressionam bonds globais',
  detail:'Yields de Alemanha e França atingiram níveis de muitos anos; inflação de energia e oferta de dívida elevam o prêmio de prazo mesmo sem nova decisão de BC.'
});
replaceDrop('tecnologia',{
  title:'Robótica vira teste de valuation de IA: Unitree estreia com euforia extrema',
  detail:'A fabricante chinesa de humanoides disparou na estreia, mostrando como narrativa de IA/robótica pode se separar rapidamente de fundamentos e execução.'
});

set('hoje',{
  ...dailyContent.hoje,
  title:'22 missões · revisão das 10h de 19 de agosto',
  summary:'A edição-base permanece íntegra. A revisão das 10h troca três ângulos onde houve mudança material: Mundo atualiza Hormuz e petróleo; Finanças incorpora a nova pressão global sobre juros longos; Tecnologia entra na estreia da Unitree e no valuation da robótica. Segurança ZL foi rechecado e continua sem nova ocorrência criminal confirmada desta manhã.',
  shareSummary:'10h de 19/08: Brent toca máxima de três semanas com Hormuz ainda restrito; bonds globais voltam a sofrer com inflação/dívida; e a estreia da Unitree mostra euforia forte em robótica/IA. Segurança ZL foi rechecado sem nova ocorrência confirmada nesta manhã.',
  readTime:`${todayDrops.length} MISSÕES · 3 ATUALIZADAS`,
  badge:'10H INTELLIGENCE UPDATE'
});

set('mundo',{
  title:'Brent toca máxima de três semanas: Hormuz continua carregando prêmio de risco físico',
  summary:'O Brent subiu a US$ 91,56 por barril nesta quarta-feira e atingiu a maior cotação desde 30 de julho. O dado novo não é apenas preço: volumes de navegação continuam bem abaixo do normal e participantes do mercado ainda demonstram baixa confiança em passagem segura pelo Estreito de Hormuz.',
  shareSummary:'Mundo 10h: Brent chegou a US$ 91,56, máxima de três semanas. A incerteza em Hormuz continua sustentando prêmio geopolítico porque o tráfego marítimo segue abaixo do normal.',
  readTime:'8 MIN READ',
  badge:'10H / HORMUZ + OIL',
  stats:[
    {label:'BRENT',value:'US$ 91,56',note:'11h57 GMT · 19/08'},
    {label:'WTI',value:'US$ 85,53',note:'mesma janela'},
    {label:'SINAL',value:'3-WEEK HIGH',note:'Brent desde 30/07'}
  ],
  sections:[
    {title:'O que mudou desde as 05h',paragraphs:['O petróleo avançou além do nível observado no fechamento da edição-base e marcou máxima de três semanas. A Reuters atribui o movimento à combinação de incerteza persistente sobre a navegação em Hormuz e outras interrupções de oferta.']},
    {title:'O dado físico importa mais que a manchete',bullets:['Volumes de shipping continuam bem abaixo do normal.','Baixa confiança em passagem segura mantém prêmio geopolítico no barril.','Queda de embarques russos e ajustes de exportação do Iraque adicionam outras fontes de restrição.','Preço maior hoje não prova bloqueio total nem determina automaticamente preço na bomba no Brasil.']},
    {title:'Conexão inesperada',paragraphs:['Quando o problema deixa de ser apenas “quanto petróleo existe” e passa a ser “por onde ele consegue circular”, capacidade logística, seguro marítimo e rotas alternativas ganham valor econômico próprio.']}
  ],
  sources:[
    {label:'Reuters · Oil hits three-week high on uncertainty over Hormuz · 19/08/2026',url:'https://www.reuters.com/business/energy/oil-edges-up-uncertainty-over-exports-through-hormuz-2026-08-19/'}
  ]
});

set('financas',{
  title:'Juros longos sobem no mundo mesmo sem uma nova decisão dos bancos centrais',
  summary:'A manhã reforçou uma divergência importante para quem acompanha crédito e investimentos: yields soberanos longos voltaram a subir em várias economias. Na Europa, o juro de 10 anos da Alemanha tocou máxima de 15 anos e o francês chegou ao maior nível desde 2008, em meio a petróleo alto, inflação persistente e preocupação com dívida pública.',
  shareSummary:'Finanças 10h: o juro longo global voltou a subir. Petróleo, inflação e dívida pública elevam o prêmio de prazo mesmo sem uma nova decisão de banco central — por isso crédito longo pode continuar caro.',
  readTime:'8 MIN READ',
  badge:'10H / GLOBAL BONDS',
  stats:[
    {label:'ALEMANHA 10Y',value:'3,275%',note:'máxima em ~15 anos'},
    {label:'FRANÇA 10Y',value:'MÁX. DESDE 2008'},
    {label:'DRIVER',value:'TERM PREMIUM',note:'inflação + dívida + emissão'}
  ],
  sections:[
    {title:'Por que isso importa para a vida real',paragraphs:['Financiamentos longos, valuation de empresas e custo de infraestrutura dependem de taxas de prazo, não apenas da taxa básica do banco central. Se o investidor exige prêmio maior para emprestar por décadas, parte desse custo reaparece em crédito e projetos.']},
    {title:'Três forças desta manhã',bullets:['Petróleo mais alto mantém risco inflacionário.','Governos seguem emitindo dívida em volume elevado.','Investidores exigem mais retorno para carregar duration longa em ambiente incerto.']},
    {title:'Aplicação prática',paragraphs:['Para dívida pessoal, continue olhando CET e prazo contratado. Uma futura queda de taxa básica não garante automaticamente redução equivalente de juros longos, spreads ou custo total do seu financiamento.']}
  ],
  sources:[
    {label:'Reuters · Euro zone bond selloff / yields · 19/08/2026',url:'https://www.reuters.com/business/selloff-euro-zone-bonds-continues-yields-hit-nearly-two-decade-high-2026-08-19/'},
    {label:'Reuters · Global markets / bonds and oil · 19/08/2026',url:'https://www.reuters.com/world/china/global-markets-global-markets-2026-08-19/'}
  ],
  disclaimer:'Conteúdo educacional; não é recomendação individual de investimento.'
});

set('tecnologia',{
  title:'Unitree estreia com euforia: robótica humanoide virou também uma tese de mercado',
  summary:'A Unitree, fabricante chinesa de robôs humanoides, teve uma estreia extremamente forte em bolsa nesta quarta-feira. A Reuters destacou valorização de várias centenas por cento na abertura, em meio ao entusiasmo com IA e robótica. O dado mais útil não é “comprar a próxima vencedora”, e sim entender como narrativa, capacidade industrial e valuation podem se descolar.',
  shareSummary:'Tecnologia 10h: a Unitree disparou na estreia em bolsa. Robótica humanoide está migrando de demonstração tecnológica para tese de mercado — e isso aumenta a importância de separar produto, escala industrial, receita e valuation.',
  readTime:'8 MIN READ',
  badge:'10H / AI + ROBOTICS',
  stats:[
    {label:'TEMA',value:'HUMANOID ROBOTS'},
    {label:'SINAL',value:'IPO EUPHORIA'},
    {label:'LEITURA',value:'EXECUTION > HYPE'}
  ],
  sections:[
    {title:'O que aconteceu',paragraphs:['A estreia da Unitree atraiu forte demanda e valorização muito acima do preço inicial. O episódio mostra que a corrida de IA está se expandindo do software e data center para máquinas físicas, sensores, atuadores e fabricação.']},
    {title:'O que precisa ser separado',bullets:['Demonstração técnica não é produção em escala.','Valuation de mercado não é receita realizada.','Robô humanoide depende de bateria, motores, sensores, compute, software e supply chain.','Adoção real depende de confiabilidade, custo por tarefa e segurança operacional.']},
    {title:'Aplicação prática',paragraphs:['Ao avaliar qualquer tendência de robótica, pergunte: qual tarefa concreta é automatizada, com que taxa de falha, qual custo total, qual manutenção e qual retorno comparado a automação convencional? Isso reduz a chance de confundir espetáculo tecnológico com produtividade.']}
  ],
  sources:[
    {label:'Reuters Morning Bid · Bonds out, robots in · 19/08/2026',url:'https://www.reuters.com/commentary/reuters-open-interest/global-markets-view-usa-2026-08-19/'}
  ]
});
