import type { EditorialDossier } from './editorial-dossier-types';

const dossier=(title:string,deck:string,points:string[],sources:{label:string;url:string}[]=[]):EditorialDossier=>({
  readingTime:'8–12 MIN',
  title,
  deck,
  opening:[deck,'Esta revisão das 10h preserva a edição-base e troca apenas o que ganhou informação materialmente melhor.'],
  sections:[
    {kicker:'O DADO NOVO',title:'O que mudou desde as 05h',paragraphs:[points[0]??deck,points[1]??'O dado precisa ser lido com contexto.']},
    {kicker:'VIDA REAL',title:'Como isso chega ao cotidiano',paragraphs:[points[2]??'O efeito depende do mecanismo de transmissão.'],bullets:points.slice(3,7)},
  ],
  callout:{label:'NÃO CONFUNDA',title:'Cenário não é resultado garantido',text:points[7]??'Uma atualização altera o cenário, mas não determina sozinha a consequência final.'},
  takeaways:[points[8]??'Separe dado de inferência.',points[9]??'Observe a transmissão.',points[10]??'Prefira a fonte primária ou mais próxima do fato.'],
  sources,
});

export const editorialDaily20260818_10h:Record<string,EditorialDossier>={
  politica:dossier('FEFC: R$ 4,96 bilhões e uma fotografia estatística que não julga candidaturas','A data-base de 18 de agosto ganha contexto financeiro: o fundo eleitoral de 2026 soma R$ 4.961.519.777,00.',[
    'O calendário usa pedidos RRC/RRCI recebidos e aceitos até 23h59 para aferir percentuais mínimos de repasse na prestação de contas.','O TSE publica os critérios de distribuição partidários e o montante total do FEFC, mas a situação jurídica individual continua em trilha separada no DivulgaCandContas.','Para o cidadão, o ponto é transparência sobre dinheiro público de campanha, critérios de distribuição e prestação de contas.','Acompanhe critérios partidários publicados.','Não confunda dinheiro recebido com candidatura deferida.','Compare gasto de campanha com dados oficiais.','Proposta eleitoral continua sendo promessa condicionada a competência, lei e orçamento.','Fotografia de candidaturas não é decisão coletiva de elegibilidade.','O FEFC 2026 é de R$ 4,96 bi.','O corte estatístico de hoje vai até 23h59.','Status jurídico continua separado.'
  ],[{label:'TSE · Calendário Eleitoral 2026',url:'https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-760-de-2-de-marco-de-2026'},{label:'TSE · FEFC 2026',url:'https://www.tse.jus.br/eleicoes/eleicoes-2026-content/prestacao-de-contas/fundo-especial-de-financiamento-de-campanha-fefc'}]),

  mundo:dossier('Hormuz virou um choque de energia, inflação e custo de capital','Petróleo alto, Treasury longo em máxima de quase duas décadas e bolsas pressionadas mostram a crise saindo do mercado de energia.',[
    'Brent acima de US$ 91 e Treasury de 30 anos perto de 5,32% aparecem juntos com bolsas globais sob pressão.','Dados americanos mais fracos reduziram a aposta de alta do Fed, mas risco energético e prêmio de prazo mantiveram o juro longo pressionado.','No cotidiano, a cadeia potencial passa por combustível, frete, preços, financiamento e investimento empresarial.','Petróleo caro não chega integralmente ao posto no mesmo dia.','Juro longo alto encarece funding global.','Empresas intensivas em capital ficam mais sensíveis.','Mercados emergentes podem sentir câmbio e prêmio de risco.','Choque geopolítico não garante inflação permanente; duração e transmissão importam.','Hormuz agora afeta vários mercados simultaneamente.','Taxa curta e juro longo divergem.','Observe petróleo, yields e fluxo físico juntos.'
  ],[{label:'Reuters · mercados globais · 18/08/2026',url:'https://www.reuters.com/world/china/global-markets-wrapup-1-2026-08-18/'},{label:'Reuters · Hormuz · 18/08/2026',url:'https://www.reuters.com/commentary/reuters-open-interest/oil-market-starts-pricing-prolonged-hormuz-crisis-2026-08-18/'}]),

  financas:dossier('Fed menos hawkish não significa juro longo barato','A curva de juros mostra como inflação esperada, fiscal e prêmio de prazo conseguem dominar o longo prazo mesmo quando a aposta de alta da taxa básica diminui.',[
    'A probabilidade implícita de alta do Fed em setembro caiu para perto de 35%, enquanto o Treasury de 30 anos subiu para a região de 5,32%.','O longo prazo incorpora mais que a próxima reunião: inflação futura, oferta de dívida, risco fiscal e prêmio de duração.','Para famílias e empresas, financiamento longo deve ser avaliado pelo custo contratado, não por manchetes sobre a próxima decisão do banco central.','Compare CET e duração.','Não antecipe queda de taxa em contrato fixo.','Dívida longa tem risco diferente da curta.','Juros externos altos podem pressionar condições financeiras locais.','Menor chance de alta do Fed não garante mortgage, financiamento ou crédito empresarial mais barato.','A curva pode se mover em direções diferentes.','Petróleo voltou ao centro da inflação.','Planeje com a taxa disponível hoje.'
  ],[{label:'Reuters · mercados globais · 18/08/2026',url:'https://www.reuters.com/world/china/global-markets-wrapup-1-2026-08-18/'},{label:'Reuters · Morning Bid · 18/08/2026',url:'https://www.reuters.com/commentary/reuters-open-interest/global-markets-view-usa-2026-08-18/'}]),

  tecnologia:dossier('IA agora precisa de garantias, energia e project finance','O acordo envolvendo Nvidia, OpenAI e SB Energy mostra a infraestrutura de IA migrando da lógica de compra de chips para contratos e riscos típicos de projetos de energia e data center.',[
    'A Nvidia ofereceu até US$ 105 bilhões em garantias relacionadas ao lease de 20 anos da OpenAI no projeto de Ohio e investirá US$ 1,5 bilhão na SB Energy.','O local pode chegar a 8 GW, com uma primeira fase de 800 MW prevista para 2028; o financiamento inclui equity e dívida de projeto.','Para a indústria de tecnologia, disponibilidade de energia, rede e capital passa a limitar a expansão tanto quanto chips.','Garantia não é desembolso imediato.','8 GW exigem infraestrutura elétrica enorme.','Project finance distribui risco por contratos e ativos.','Demanda final precisa sustentar o capex.','US$ 105 bi em garantias não significam custo total de US$ 105 bi nem pagamento imediato.','IA virou infraestrutura pesada.','Fabricantes de chips passam a carregar risco financeiro.','Observe energia, contratos e retorno do capex.'
  ],[{label:'Reuters · Nvidia/OpenAI/SB Energy · 17/08/2026',url:'https://www.reuters.com/business/media-telecom/nvidia-invest-15-billion-sb-energy-under-openai-data-center-deal-2026-08-17/'}]),
};
