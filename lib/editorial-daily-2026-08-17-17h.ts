import type { EditorialDossier } from './editorial-dossier-types';

const dossier=(title:string,deck:string,points:string[],sources:{label:string;url:string}[]=[]):EditorialDossier=>({
  readingTime:'8–12 MIN',
  title,
  deck,
  opening:[deck,'Esta atualização das 17h separa fechamento, mecanismo e impacto prático sem converter risco ou cenário em certeza.'],
  sections:[
    {kicker:'O QUE MUDOU',title:'A informação nova desta janela',paragraphs:[points[0]??deck,points[1]??'O dado precisa ser lido com contexto.']},
    {kicker:'VIDA REAL',title:'Como isso pode chegar ao cotidiano',paragraphs:[points[2]??'O efeito depende de transmissão, prazo e decisões intermediárias.'],bullets:points.slice(3,7)},
  ],
  callout:{label:'NÃO CONFUNDA',title:'Cenário não é resultado garantido',text:points[7]??'Um novo dado muda probabilidades; não determina sozinho o que acontecerá depois.'},
  takeaways:[points[8]??'Separe fato de projeção.',points[9]??'Observe o mecanismo.',points[10]??'Prefira fonte primária quando disponível.'],
  sources,
});

export const editorialDaily20260817_17h:Record<string,EditorialDossier>={
  politica:dossier('18 de agosto é marco estatístico do pós-registro — não um “deferimento geral”','O calendário eleitoral usa 18/08 para o levantamento nacional de candidaturas que entra na aferição dos percentuais mínimos do FEFC.',[
    'O TSE define 18 de agosto como data de referência para o total de candidaturas constante dos pedidos coletivos e individuais, inclusive recebidos e aceitos até 23h59.','Esse total entra na aferição dos percentuais mínimos do Fundo Especial de Financiamento de Campanha; a situação jurídica de cada candidatura continua individual.','Para a população, isso afeta transparência sobre distribuição de dinheiro público de campanha e ajuda a entender por que volume de propaganda não é sinônimo de registro já deferido.','Contribuinte: acompanhe receitas e despesas declaradas.','Eleitor: confira status individual no DivulgaCandContas.','Proposta de Executivo: confronte campanha com documento registrado.','Senado: trate promessas como pauta legislativa/fiscalizatória.','Marco estatístico não substitui julgamento eleitoral.','FEFC usa uma fotografia de candidaturas.','Registro continua caso a caso.','Transparência de campanha importa para o uso de recurso público.'
  ],[{label:'TSE · Calendário Eleitoral 2026',url:'https://www.tse.jus.br/eleicoes/calendario-eleitoral/calendario-eleitoral'},{label:'TSE · DivulgaCandContas',url:'https://www.tse.jus.br/administracao/painel/divulgacao-de-candidaturas-e-contas-eleitorais'}]),

  mundo:dossier('O fechamento global mostrou uma curva de juros em conflito','Ações mistas e dólar mais fraco conviveram com Treasury de 30 anos em 5,30%, maior nível desde 2007.',[
    'O S&P 500 caiu 0,26%, o Dow 0,35% e o Nasdaq avançou 0,17%; o dólar perdeu força após dados econômicos mais fracos.','Ao mesmo tempo, preocupações fiscais e oferta de dívida corporativa empurraram o juro de 30 anos para cima.','O efeito cotidiano aparece em financiamento, hipotecas, custo de capital e câmbio; cada canal tem velocidade diferente.','Juro longo alto encarece projetos de prazo extenso.','Dólar mais fraco não reduz todos os preços importados automaticamente.','Ações de tecnologia podem divergir do índice amplo.','Um fechamento não define tendência.','Curto e longo prazo podem contar histórias diferentes.','A curva de juros importa mais que uma taxa isolada.','Risco fiscal e oferta de dívida pesam no longo prazo.','Observe persistência, não apenas um pregão.'
  ],[{label:'Reuters · Global Markets · 17/08/2026',url:'https://www.reuters.com/world/china/global-markets-global-markets-2026-08-17/'}]),

  financas:dossier('Taxa básica e juro de 30 anos não são a mesma coisa','Expectativa de Fed mais brando no curto prazo pode coexistir com prêmio de prazo mais alto no vencimento longo.',[
    'Dados econômicos mais fracos reduziram parte da aposta em aperto imediato, enquanto o Treasury de 30 anos subiu a 5,30%.','Curva longa incorpora inflação futura, risco fiscal, oferta de títulos e prêmio por duração por muitos anos.','Para a família, o que importa é como o contrato de crédito foi precificado: CET, prazo, indexador e risco do tomador continuam centrais.','Compare CET, não só parcela.','Prefixado não cai automaticamente depois da contratação.','Pós-fixado depende do indexador do contrato.','Não conte com corte futuro para fechar orçamento hoje.','Mercado e banco central podem mudar de leitura com novos dados.','Curva é conjunto de taxas por prazo.','Crédito doméstico não segue o Fed de forma mecânica.','Planeje com a taxa contratável hoje.'
  ],[{label:'Reuters · fechamento global · 17/08/2026',url:'https://www.reuters.com/world/china/global-markets-global-markets-2026-08-17/'},{label:'Banco Central · CET',url:'https://www.bcb.gov.br/meubc/faqs/p/custo-efetivo-total-cet'}]),

  tecnologia:dossier('Uma revolução tecnológica pode coexistir com uma bolha de expectativas','O alerta do BCE separa potencial produtivo real da IA do risco de valuations financeiros excessivos.',[
    'A análise repercutida nesta segunda-feira argumenta que ativos ligados à IA podem corrigir mesmo se a tecnologia entregar ganhos de produtividade relevantes.','A concentração de grandes empresas americanas em índices e carteiras amplia a possibilidade de transmissão internacional de uma correção.','Para tecnologia, a pergunta passa de “IA funciona?” para “quanto lucro, caixa e produtividade justificam o capital já investido?”.','Compare receita incremental com capex.','Observe dívida e custo de funding.','Acompanhe concentração de índices.','Não use valuation como prova de capacidade técnica.','O BCE não oferece uma data para uma eventual correção.','Tecnologia e preço do ativo são histórias diferentes.','Produtividade pode crescer e ações ainda corrigirem.','Fluxo de caixa ajuda a separar narrativa de retorno econômico.'
  ],[{label:'Reuters · risco de correção em IA · 17/08/2026',url:'https://www.reuters.com/business/autos-transportation/ai-market-correction-is-coming-ecb-blog-predicts-2026-08-17/'},{label:'BCE · AI and the euro area economy · 23/03/2026',url:'https://www.ecb.europa.eu/press/key/date/2026/html/ecb.sp260323_1~1e06784a89.en.html'}]),
};
