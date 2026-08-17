import { dailyContent, edition, todayDrops } from './daily-content';
import { politicsTracker } from './politics-2026';

const set=(slug:string,data:any)=>Object.assign(dailyContent[slug],data);
const replaceDrop=(slug:string,data:any)=>{ const item=todayDrops.find((drop)=>drop.slug===slug); if(item) Object.assign(item,data); };

Object.assign(edition,{ title:'Daily Intelligence · 17 de agosto · 10h' });
Object.assign(politicsTracker,{
  updatedAt:'17/08/2026 · 10h',
  notice:'Campanha eleitoral em curso desde 16/08. O DivulgaCandContas e o conjunto de Dados Abertos do TSE são as referências oficiais para pedidos de registro, situação processual, documentos e contas. Os arquivos de candidatos de 2026 têm atualização diária; esta edição continua sem presumir deferimento individual sem confirmação inequívoca.'
});

replaceDrop('brasil',{
  title:'IBC-Br mostra desaceleração: atividade cai 0,6% em junho e avança 0,2% no 2º trimestre',
  detail:'O indicador do Banco Central perdeu força frente ao 1º trimestre; serviços recuaram no trimestre. PIB oficial do IBGE sai em 1º de setembro.'
});
replaceDrop('politica',{
  title:'Pós-registro: TSE já oferece base diária para conferir candidatura, documentos e contas',
  detail:'O dado útil agora é cruzar propaganda com DivulgaCandContas e Dados Abertos; pedido, julgamento e eventual recurso continuam sendo etapas diferentes.'
});
replaceDrop('financas',{
  title:'Economia doméstica esfria: o que IBC-Br + Selic de 14% significam para crédito e emprego',
  detail:'Atividade mais fraca reforça o efeito dos juros altos, mas não garante corte acelerado: inflação e expectativas ainda condicionam o BC.'
});
replaceDrop('tecnologia',{
  title:'Alphabet busca dívida em dólar australiano para diversificar financiamento da corrida de IA',
  detail:'A empresa avalia sua primeira emissão em AUD; valor e uso específico dos recursos ainda não foram divulgados. O caso mostra IA virando também uma história de funding.'
});

set('hoje',{
  ...dailyContent.hoje,
  title:'17 de agosto · revisão das 10h: economia brasileira desacelera e IA disputa capital global',
  summary:'A revisão das 10h preserva as missões novas da edição-base e atualiza quatro áreas com informação materialmente nova: Brasil, Política, Finanças e Tecnologia. As demais continuam válidas e sem repetição artificial.',
  shareSummary:'Atualização das 10h: IBC-Br mostra desaceleração no Brasil; Política reforça checagem diária no TSE; Finanças traduz juros altos para crédito/emprego; Tecnologia mostra Big Tech captando capital para IA.',
  readTime:'19 MISSÕES · 4 ATUALIZADAS',
  badge:'10H INTELLIGENCE UPDATE'
});

set('brasil',{
  title:'IBC-Br: economia desacelera no 2º trimestre e junho recua 0,6%',
  summary:'O IBC-Br do Banco Central indicou crescimento de 0,2% da atividade no segundo trimestre de 2026 ante o primeiro, após avanço de 1,1% no trimestre anterior. Só em junho, o índice caiu 0,6% na série dessazonalizada. Serviços recuaram 0,1% no trimestre, enquanto indústria e agro avançaram.',
  shareSummary:'Brasil: IBC-Br aponta desaceleração — +0,2% no 2º trimestre e -0,6% em junho. É um indicador do BC, não o PIB oficial; o IBGE divulga o PIB em 1º de setembro.',
  readTime:'7 MIN READ',
  badge:'10H / ATIVIDADE ECONÔMICA',
  stats:[{label:'2º TRI',value:'+0,2%'},{label:'JUNHO',value:'-0,6%'},{label:'PIB OFICIAL',value:'01/09'}],
  sections:[
    {title:'O que mudou desde a edição-base',paragraphs:['O dado divulgado nesta manhã acrescenta uma fotografia nova da economia brasileira. O IBC-Br é usado como sinal de atividade, mas não substitui o PIB calculado pelo IBGE.']},
    {title:'Onde a desaceleração aparece',bullets:['Serviços: -0,1% no trimestre.','Indústria: +0,5%.','Agro: +0,3%.','O primeiro trimestre havia avançado 1,1%, então o ritmo perdeu força.']},
    {title:'Impacto na vida real',paragraphs:['Crescimento mais fraco pode aparecer primeiro em contratação, horas extras, vendas e concessão de crédito. Ao mesmo tempo, desaceleração pode ajudar a reduzir pressão inflacionária; isso não significa queda imediata de juros nem melhora automática no bolso.'],bullets:['Trabalhador: acompanhe emprego e renda, não apenas o índice agregado.','Família endividada: crédito continua caro enquanto a Selic permanece elevada.','Consumidor: atividade fraca pode aliviar alguns preços, mas energia e alimentos seguem sujeitos a choques próprios.']}
  ],
  sources:[
    {label:'Banco Central · IBC-Br / atividade econômica',url:'https://www.bcb.gov.br/estatisticas/indicadoratividade'},
    {label:'Reuters · IBC-Br do 2º trimestre · 17/08/2026',url:'https://www.reuters.com/world/americas/brazil-posts-modest-second-quarter-growth-central-bank-index-shows-2026-08-17/'}
  ]
});

set('politica',{
  ...dailyContent.politica,
  title:'Pós-registro: confira candidatura e proposta em fonte oficial antes de tratar campanha como fato',
  summary:'A campanha já está em curso, mas o status jurídico continua sendo processual. O TSE mantém o DivulgaCandContas e também publica arquivos de candidatos de 2026 com atualização diária, incluindo dados complementares e propostas de governo para cargos do Executivo.',
  shareSummary:'Política 10h: propaganda já está liberada, mas candidatura, situação jurídica e proposta precisam ser conferidas separadamente. TSE mantém DivulgaCandContas e base de Dados Abertos com atualização diária.',
  readTime:'9 MIN READ',
  badge:'10H / POLÍTICA · CHECAGEM',
  sections:[
    {title:'A rotina de checagem mudou',paragraphs:['Depois do encerramento dos pedidos de registro, a pergunta deixa de ser “quem anunciou candidatura?” e passa a ser “o que foi protocolado, qual é o status processual e qual documento oficial sustenta a proposta?”.']},
    {title:'Use duas camadas oficiais',bullets:['DivulgaCandContas: situação processual, candidatura e contas eleitorais.','Dados Abertos do TSE: arquivos de candidatos de 2026 com frequência de atualização diária.','Para Executivo: propostas de governo estão entre os recursos publicados pelo TSE.','Para Senado: trate compromissos como pauta legislativa/fiscalizatória, não como plano de governo.']},
    {title:'Impacto na vida real',paragraphs:['Para trabalhador, família, aposentado, estudante ou usuário de serviço público, o ganho é reduzir a distância entre propaganda e documento. Uma promessa sobre jornada, SUS, transporte, imposto ou segurança deve ser lida junto com o poder real do cargo e o caminho institucional necessário.'],bullets:['Pergunte: isso depende de lei, PEC, orçamento ou outro Poder?','Procure meta, custo, prazo e público afetado.','Não use “pedido de registro” como sinônimo de “deferido”.']}
  ],
  sources:[
    {label:'TSE · DivulgaCandContas',url:'https://www.tse.jus.br/administracao/painel/divulgacao-de-candidaturas-e-contas-eleitorais'},
    {label:'TSE · Dados Abertos · Candidatos 2026',url:'https://dadosabertos.tse.jus.br/dataset/candidatos-2026'}
  ]
});

set('financas',{
  title:'IBC-Br mais fraco + Selic de 14%: desaceleração não vira juro barato de um dia para o outro',
  summary:'O novo dado de atividade mostra perda de ritmo no Brasil: +0,2% no 2º trimestre e -0,6% em junho. Isso reforça que a política monetária restritiva está chegando à economia, mas o Banco Central ainda precisa conciliar desaceleração com inflação e expectativas antes de acelerar cortes.',
  shareSummary:'Finanças: economia mais fraca ajuda a explicar por que juros altos estão funcionando, mas não garante crédito barato já. Compare CET, prazo e risco de renda antes de refinanciar ou assumir nova dívida.',
  readTime:'8 MIN READ',
  badge:'10H / JUROS + ATIVIDADE',
  stats:[{label:'SELIC',value:'14,00%'},{label:'IBC-BR 2º TRI',value:'+0,2%'},{label:'JUNHO',value:'-0,6%'}],
  sections:[
    {title:'A cadeia de transmissão',paragraphs:['Juros altos encarecem crédito, esfriam consumo e investimento e, com defasagem, reduzem pressão sobre preços. O IBC-Br mais fraco é compatível com esse mecanismo, mas um mês isolado não define a próxima decisão do Copom.']},
    {title:'O que muda para o orçamento doméstico',bullets:['Rotativo e cheque especial continuam sendo dívidas para evitar.','Financiamento longo deve ser comparado por CET, não só parcela.','Uma possível queda futura da Selic não garante que seu contrato será automaticamente barateado.','Se a renda estiver incerta, preservar liquidez pode valer mais que antecipar consumo.']},
    {title:'Não confunda cenário com promessa',paragraphs:['O mercado pode antecipar cortes ou altas antes do Banco Central. A decisão oficial depende do conjunto de inflação, expectativas, atividade, câmbio e riscos. Para a família, a regra prática continua sendo contratar crédito com a taxa disponível hoje, não com a taxa que alguém imagina para daqui a meses.']}
  ],
  sources:[
    {label:'Banco Central · Copom / Selic',url:'https://www.bcb.gov.br/controleinflacao/taxaselic'},
    {label:'Reuters · atividade brasileira · 17/08/2026',url:'https://www.reuters.com/world/americas/brazil-posts-modest-second-quarter-growth-central-bank-index-shows-2026-08-17/'}
  ],
  disclaimer:'Conteúdo educacional; não é recomendação individual de investimento ou crédito.'
});

set('tecnologia',{
  title:'A corrida da IA chegou ao mercado de dívida: Alphabet avalia primeira emissão em dólar australiano',
  summary:'A Alphabet mandatou bancos para trabalhar em sua primeira emissão de títulos em dólar australiano, com vencimentos considerados entre 3 e 20 anos. O valor e o uso específico dos recursos ainda não foram divulgados. O movimento se soma à busca das Big Tech por capital para financiar infraestrutura de IA em escala crescente.',
  shareSummary:'Tecnologia: a corrida da IA não é só chip. Alphabet avalia dívida em dólar australiano depois de grandes captações em 2026. Funding, juros e fluxo de caixa viraram parte central da infraestrutura de IA.',
  readTime:'8 MIN READ',
  badge:'10H / AI FUNDING',
  stats:[{label:'EMISSÃO',value:'EM ESTUDO'},{label:'MOEDA',value:'AUD'},{label:'PRAZOS',value:'3–20 ANOS'}],
  sections:[
    {title:'O fato confirmado — e o que ainda não é',paragraphs:['Segundo mensagem de bookrunner vista pela Reuters, a Alphabet escolheu bancos para estruturar a operação. Isso não significa que a emissão já foi concluída; valor captado e destinação específica não foram informados.']},
    {title:'Por que isso é tecnologia',paragraphs:['Treinar e servir modelos exige data centers, energia, rede, memória, storage e aceleradores. Quando o capex cresce mais rápido que o caixa disponível, custo de capital passa a influenciar a velocidade da expansão tecnológica.']},
    {title:'A conexão inesperada',bullets:['IA compete por capital com governos e outros setores.','Mais dívida pode pressionar yields e spreads se oferta superar demanda.','Capex alto exige retorno econômico futuro — uso real de IA importa tanto quanto benchmark.','Diversificar moeda pode ampliar a base de investidores, mas cria novas decisões de funding e hedge.']}
  ],
  sources:[
    {label:'Reuters · Alphabet avalia emissão em AUD · 17/08/2026',url:'https://www.reuters.com/business/finance/alphabet-eyes-inaugural-australian-dollar-bond-bookrunners-message-says-2026-08-17/'},
    {label:'Google · infraestrutura de IA / Q1 2026',url:'https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q1-2026/'}
  ]
});
