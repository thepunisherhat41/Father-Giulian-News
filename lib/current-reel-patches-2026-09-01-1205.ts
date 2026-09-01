export function applyCurrentReelPatches20260901_1205(dailyContent:Record<string,any>){
  Object.assign(dailyContent.politica,{
    title:'Consulta ao local de votação está disponível; Senado tem sessão às 14h',
    summary:'FATO + ATUALIZAÇÃO + AGENDA · O TSE confirmou às 9h que a consulta ao local e à seção de votação já está disponível no e-Título e no Portal. A reunião da MP 1.357/2026 que constava às 10h já passou do horário nesta revisão; sem confirmação oficial independente do desfecho, o card não presume que ela ocorreu. No Senado, a Sessão Deliberativa Ordinária está oficialmente agendada para 14h, com a MP entre as matérias que poderão ser deliberadas se a apreciação na Câmara estiver concluída.',
    readTime:'4 MIN READ',badge:'POLÍTICA · FATO + ATUALIZAÇÃO + AGENDA · 01/09',
    stats:[
      {label:'TSE',value:'CONSULTA DISPONÍVEL',note:'confirmado às 9h'},
      {label:'MP 1.357/26 · 10H',value:'AGENDA VENCIDA',note:'sem desfecho presumido'},
      {label:'SENADO',value:'14H',note:'sessão deliberativa agendada'}
    ],
    sections:[
      {title:'FATO — consulta eleitoral disponível',paragraphs:['O TSE publicou às 9h desta terça-feira (1º) que eleitoras e eleitores já podem consultar o endereço da seção pelo e-Título ou pelo Portal do Tribunal, inclusive quem solicitou transferência temporária.']},
      {title:'ATUALIZAÇÃO — compromisso das 10h',paragraphs:['O horário da reunião sobre a MP 1.357/2026 citado na revisão anterior já passou. Como esta checagem não localizou confirmação oficial independente do desfecho, não tratamos reunião, votação, adiamento ou aprovação como fato consumado.']},
      {title:'AGENDA — Plenário do Senado às 14h',paragraphs:['A página oficial da sessão do Senado registra Sessão Deliberativa Ordinária para 14h. A Presidência informa que poderão ser deliberadas as MPs cuja apreciação tenha sido concluída pela Câmara, incluindo a MP 1.357/2026. Por ainda ser futuro nesta revisão, permanece classificada como agenda.']}
    ],
    sources:[
      {label:'TSE · 01/09/2026 09h00',url:'https://www.tse.jus.br/comunicacao/noticias/2026/Setembro/eleicoes-2026-consulta-aos-locais-de-votacao-ja-esta-disponivel'},
      {label:'Senado Federal · sessão plenária de 01/09/2026 às 14h',url:'https://www25.senado.leg.br/web/atividade/sessao-plenaria/-/pauta/586477'}
    ]
  });

  Object.assign(dailyContent.corinthians,{
    title:'Corinthians completa 116 anos; venda para Chapecoense começa hoje',
    summary:'FATO + AGENDA · O Corinthians completa 116 anos nesta terça e mantém a programação especial no Parque São Jorge. No futebol, a venda escalonada para Corinthians x Chapecoense começou hoje para grupos prioritários do Fiel Torcedor; o jogo está marcado para domingo (6), às 19h30, na Neo Química Arena. A abertura ao público geral está prevista para quarta (2), às 15h.',
    readTime:'4 MIN READ',badge:'CORINTHIANS · FATO + AGENDA · 01/09',
    stats:[
      {label:'IDADE',value:'116 ANOS'},
      {label:'PRÓXIMO JOGO',value:'06/09 · 19H30',note:'Chapecoense · Neo Química Arena'},
      {label:'PÚBLICO GERAL',value:'02/09 · 15H',note:'venda prevista'}
    ],
    sections:[
      {title:'FATO — aniversário do clube',paragraphs:['Fundado em 1º de setembro de 1910, no Bom Retiro, o Corinthians completa 116 anos em 2026.']},
      {title:'FATO + AGENDA — ingressos para o próximo jogo',paragraphs:['A venda escalonada de ingressos para Corinthians x Chapecoense começou nesta terça (1º) para categorias prioritárias do Fiel Torcedor. A partida da 26ª rodada do Brasileirão está marcada para domingo (6), às 19h30, na Neo Química Arena.'],bullets:['Venda exclusivamente on-line pelo Fiel Torcedor.','Biometria facial completa é requisito informado para a compra e o acesso.','Abertura ao público geral prevista para quarta-feira (2), às 15h, conforme disponibilidade.']},
      {title:'AGENDA — Parque São Jorge',bullets:['Exposição pelos 100 anos do Parque São Jorge prevista para 18h30.','Peça “Os Fundadores” prevista para 19h30.'],paragraphs:['Os horários noturnos ainda não chegaram nesta revisão e não são tratados como eventos concluídos.']}
    ],
    sources:[
      {label:'Neo Química Arena / Agência Corinthians · 31/08/2026 17h00',url:'https://www.neoquimicaarena.com.br/noticias/ingressos-corinthians-x-chapecoense-06-09-brasileirao-2026-arena'},
      {label:'Fiel Torcedor · próximo jogo',url:'https://www.fieltorcedor.com.br/'}
    ]
  });
}
