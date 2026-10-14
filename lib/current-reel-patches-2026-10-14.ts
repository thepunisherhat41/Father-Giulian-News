export function applyCurrentReelPatches20261014(dailyContent:Record<string,any>){
const patch=(slug:string,value:any)=>Object.assign(dailyContent[slug],value);

patch('papo',{
  title:'Papo de hoje: qual tradição da sua infância você quer apresentar ao Felipe?',
  summary:'PAPO DE HOJE · 14/10 · Cada um escolhe uma lembrança, costume ou ritual simples da infância que gostaria de viver de novo quando o Felipe estiver maior.',
  shareSummary:'Papo de hoje · 14/10: uma tradição da infância para levar adiante com o Felipe.',
  badge:'PAPO DE HOJE · 14/10',
  sections:[
    {title:'Pergunta de hoje',paragraphs:['Pode ser almoço de domingo, música no carro, desenho, feira, brincadeira, viagem curta, aniversário, história antes de dormir ou qualquer hábito simples que marcou sua infância. Qual você gostaria de apresentar ao Felipe?']},
    {title:'A melhor parte',paragraphs:['Depois contem por que essa memória ficou com vocês. A ideia não é criar obrigação para o futuro, mas descobrir quais pequenas coisas carregam mais significado.']}
  ],
  sources:[]
});

patch('desafio',{
  title:'Desafio do casal: montem uma mini-playlist de três músicas para o Felipe',
  summary:'DESAFIO DO CASAL · 14/10 · Cada um escolhe uma música que marcou sua infância ou adolescência; a terceira vocês escolhem juntos. Ouçam as três hoje.',
  shareSummary:'Desafio do casal · 14/10: três músicas para a primeira mini-playlist do Felipe.',
  badge:'DESAFIO DO CASAL · 14/10',
  sections:[
    {title:'Como fazer',bullets:['Giulian escolhe uma música que traz uma memória antiga.','Bruna escolhe outra pelo mesmo motivo.','A terceira precisa ser consenso.','Ouçam as três sem pular e contem a história por trás de cada escolha.']},
    {title:'Sem transformar em tarefa',paragraphs:['Não precisa virar “playlist oficial do bebê”. Hoje é só um jeito de compartilhar memórias e começar um repertório afetivo.']}
  ],
  sources:[]
});

patch('gravidez',{
  title:'14 semanas + 3 dias: o bebê já se mexe bastante e está com proporções mais definidas',
  summary:'GRAVIDEZ · 14+3 · O NHS descreve o feto por volta de 8,5 cm da cabeça ao bumbum nesta fase. Ele já se movimenta e chuta, embora ainda seja comum a Bruna não sentir esses movimentos.',
  shareSummary:'Gravidez · 14/10: 14 semanas + 3 dias, com movimentos ativos e crescimento rápido.',
  badge:'GRAVIDEZ · 14 SEMANAS + 3 DIAS · 14/10',
  sections:[
    {title:'O Felipe nesta fase',bullets:['Por volta da semana 14, o NHS usa cerca de 8,5 cm da cabeça ao bumbum como referência.','A cabeça fica mais arredondada e proporcional ao restante do corpo.','O bebê já se movimenta e chuta, mas é perfeitamente possível ainda não sentir.','Os rins já participam do ciclo do líquido amniótico: o bebê engole pequenas quantidades de líquido e elimina urina.']},
    {title:'Para a Bruna',paragraphs:['No segundo trimestre algumas pessoas percebem melhora de náusea e cansaço, mas sintomas variam. Dor forte, sangramento ou qualquer sintoma preocupante deve ser discutido com a equipe do pré-natal.']}
  ],
  sources:[{label:'NHS · Week 14 pregnancy guide',url:'https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-14/'}]
});

patch('pai',{
  title:'Ser Pai: registre uma memória de agora antes que essa fase passe',
  summary:'SER PAI · 14/10 · Tire uma foto simples, grave uma nota de voz ou escreva três linhas sobre como está sendo esperar o Felipe nesta semana.',
  shareSummary:'Ser Pai · 14/10: guardar uma memória pequena e real desta fase.',
  badge:'SER PAI · MISSÃO DO DIA · 14/10',
  sections:[
    {title:'Missão de hoje',bullets:['Registre um momento comum, não precisa ser “foto perfeita”.','Escreva uma coisa que você está aprendendo sobre ser pai.','Guarde uma frase sobre como a Bruna está nesta semana.']},
    {title:'Por que vale',paragraphs:['As grandes lembranças costumam nascer de cenas comuns. Registrar agora ajuda a preservar detalhes que depois ficam difíceis de reconstruir.']}
  ],
  sources:[]
});

patch('brasil',{
  title:'Receita abre hoje congresso nacional sobre direito tributário e aduaneiro em Brasília',
  summary:'AGENDA · 14/10 · O IV Congresso de Direito Tributário e Aduaneiro da Receita Federal começa hoje e segue até sexta-feira. A abertura oficial está marcada para 9h, com representantes do Ministério da Fazenda, Receita, CARF e PGFN.',
  shareSummary:'Brasil · 14/10: Receita Federal abre congresso tributário e aduaneiro em Brasília.',
  badge:'BRASIL · AGENDA · 14/10',
  sections:[
    {title:'Programação de hoje',bullets:['8h30: credenciamento e recepção.','9h: abertura oficial.','9h30: conferência inaugural.','O evento segue até 16/10 em Brasília.']},
    {title:'Leitura editorial',paragraphs:['É agenda oficial confirmada, não resultado do evento. Qualquer conclusão sobre anúncios ou decisões deve esperar a realização das sessões.']}
  ],
  sources:[{label:'Receita Federal · Programação do IV Congresso',url:'https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/participacao-social/congressos/direito-tributario-e-aduaneiro/4/programacao/programacao/'}]
});

patch('mundo',{
  title:'Irã intensifica táticas para pressionar tráfego marítimo no Estreito de Hormuz',
  summary:'APURAÇÃO/REPORTAGEM · 14/10 · Autoridades iranianas ouvidas pela Reuters dizem que Teerã está ampliando ações para perturbar o tráfego marítimo e manter pressão sobre preços de petróleo. A reportagem descreve mudança de tática e expansão de operações para o Golfo de Omã.',
  shareSummary:'Mundo · 14/10: Reuters relata mudança de tática iraniana sobre o tráfego no Estreito de Hormuz.',
  badge:'MUNDO · APURAÇÃO/REPORTAGEM · 14/10',
  sections:[
    {title:'O que a Reuters apurou',bullets:['Autoridades iranianas relatam mudança no tipo e na frequência das ações.','Pequenas embarcações sem armamento estariam sendo usadas para observação de alvos.','A atividade teria se ampliado para além do Estreito de Hormuz, alcançando o Golfo de Omã.']},
    {title:'Cuidado com a classificação',paragraphs:['A motivação estratégica descrita na reportagem é atribuída a autoridades e fontes consultadas pela Reuters. Não deve ser apresentada como fato técnico independente sem essa atribuição.']}
  ],
  sources:[{label:'Reuters · Iran shifting tactics in Strait of Hormuz · 14/10',url:'https://www.reuters.com/world/middle-east/iran-shifting-tactics-step-up-attacks-shipping-before-us-vote-officials-say-2026-10-14/'}]
});

patch('politica',{
  title:'Hoje termina o prazo para TREs enviarem ao TSE relatórios de auditoria do primeiro turno',
  summary:'AGENDA · 14/10 · O calendário eleitoral fixa hoje como último dia para os Tribunais Regionais Eleitorais enviarem ao TSE os relatórios individuais de auditoria relativos ao primeiro turno.',
  shareSummary:'Política · 14/10: prazo de auditoria do 1º turno vence hoje no calendário eleitoral.',
  badge:'POLÍTICA · AGENDA · 14/10',
  sections:[
    {title:'O marco de hoje',paragraphs:['O TSE registra 14 de outubro como o décimo dia após o primeiro turno e como prazo final para o envio dos relatórios de auditoria elaborados por instituição pública de fiscalização ou empresa especializada contratada.']},
    {title:'O que isso não significa',paragraphs:['O vencimento do prazo não autoriza presumir que todos os relatórios já tenham sido recebidos ou avaliados. Esse status só deve ser atualizado com confirmação oficial.']}
  ],
  sources:[{label:'TSE · Calendário Eleitoral 2026',url:'https://www.tse.jus.br/eleicoes/calendario-eleitoral/calendario-eleitoral'}]
});

patch('tempo',{
  title:'São Paulo terá quarta abafada e risco de chuva moderada a forte à tarde e à noite',
  summary:'PREVISÃO · 14/10 · O CGE prevê mínima de 18°C e máxima de 27°C. A manhã deve ter sol entre muitas nuvens; à tarde e à noite cresce o risco de pancadas moderadas a fortes e formação de alagamentos.',
  shareSummary:'Tempo · 14/10: 18°C a 27°C, abafado e com risco de chuva forte à tarde/noite.',
  badge:'TEMPO · PREVISÃO · 14/10',
  sections:[
    {title:'Previsão para hoje',bullets:['Mínima: 18°C.','Máxima: 27°C.','Manhã abafada com sol entre muitas nuvens.','Tarde e noite com chuva moderada a forte e potencial para alagamentos.']},
    {title:'No deslocamento',paragraphs:['Evite atravessar vias alagadas e acompanhe radar/alertas do CGE antes de sair no fim da tarde.']}
  ],
  sources:[{label:'CGE São Paulo · tendência publicada em 13/10 para 14/10',url:'https://cge.prefeitura.sp.gov.br/v3/noticias.jsp?data=2026-10-13'}]
});

patch('seguranca-zl',{
  title:'Guaianases tem reunião do Conselho Participativo Municipal hoje às 19h',
  summary:'AGENDA LOCAL · 14/10 · A Subprefeitura de Guaianases lista reunião do Conselho Participativo Municipal para hoje, às 19h, no auditório da Subprefeitura Guaianases/Lajeado.',
  shareSummary:'Zona Leste · 14/10: Conselho Participativo de Guaianases se reúne hoje às 19h.',
  badge:'ZONA LESTE · AGENDA LOCAL · 14/10',
  sections:[
    {title:'Serviço',bullets:['Data: 14/10/2026.','Horário: 19h.','Local: Auditório da Subprefeitura Guaianases/Lajeado.','Endereço institucional: Rua Hipólito de Camargo, 479.']},
    {title:'Classificação correta',paragraphs:['É agenda oficial. A realização, deliberações e decisões da reunião só devem ser tratadas como fato depois de confirmação posterior.']}
  ],
  sources:[{label:'Subprefeitura Guaianases · Conselho Participativo Municipal',url:'https://prefeitura.sp.gov.br/web/guaianases/w/conselho-participativo-municipal-2'}]
});

patch('corinthians',{
  title:'Seedorf chega hoje, com dois treinos e apresentação marcada para 13h',
  summary:'AGENDA · 14/10 · Clarence Seedorf desembarca em São Paulo nesta manhã, seguirá para o CT Joaquim Grava e tem dois períodos de treino previstos. A apresentação à imprensa está marcada para 13h. A estreia é contra o Vitória na segunda, às 20h.',
  shareSummary:'Corinthians · 14/10: Seedorf chega hoje e será apresentado às 13h.',
  badge:'CORINTHIANS · AGENDA · 14/10',
  sections:[
    {title:'Dia de estreia no CT',bullets:['Chegada a São Paulo prevista para a manhã.','Primeiro contato com o elenco no CT Joaquim Grava.','Treinos em dois períodos.','Coletiva de apresentação prevista para 13h.']},
    {title:'Situação do time',bullets:['Último resultado: derrota por 4 a 1 para o Palmeiras em 11/10.','Corinthians está em 16º com 32 pontos.','Próximo jogo: Corinthians x Vitória, 19/10, 20h, Neo Química Arena.']},
    {title:'Sem antecipar',paragraphs:['Como o corte desta edição é de madrugada, chegada, treino e coletiva ainda são agenda. O card deve mudar para FATO apenas depois de confirmação independente.']}
  ],
  sources:[
    {label:'ge · Seedorf chega ao Brasil em 14/10',url:'https://ge.globo.com/futebol/times/corinthians/noticia/2026/10/14/seedorf-chega-ao-brasil-nesta-quarta-e-tera-cinco-dias-de-treino-antes-de-estrear-pelo-corinthians.ghtml'},
    {label:'ge · agenda de jogos do Corinthians',url:'https://ge.globo.com/futebol/times/corinthians/agenda-de-jogos-do-corinthians/'}
  ]
});

patch('viagens',{
  title:'Viagens: escolha do dia é um bate-volta urbano — e com plano B para a chuva',
  summary:'ROTEIRO · 14/10 · Com risco de pancadas fortes no fim do dia em São Paulo, a recomendação é priorizar um passeio curto, com deslocamento simples e alternativa coberta, em vez de depender de trilha ou programação totalmente ao ar livre.',
  shareSummary:'Viagens · 14/10: passeio curto com plano B coberto por causa da chuva prevista.',
  badge:'VIAGENS · ROTEIRO · 14/10',
  sections:[
    {title:'Estratégia de hoje',bullets:['Saia mais cedo se o passeio for ao ar livre.','Prefira um destino com café, museu, mercado ou outro plano coberto próximo.','Revise trânsito e radar antes da volta.','Evite programar trecho crítico exatamente para o fim da tarde.']},
    {title:'Por que hoje',paragraphs:['O CGE prevê chuva moderada a forte entre tarde e noite e potencial de alagamentos na capital.']}
  ],
  sources:[{label:'CGE São Paulo · previsão de 14/10',url:'https://cge.prefeitura.sp.gov.br/v3/noticias.jsp?data=2026-10-13'}]
});

patch('musica',{
  title:'Música de hoje: Fontaines D.C. e Rosalía em “Where Is Gone?”',
  summary:'RECOMENDAÇÃO · 14/10 · A Billboard Brasil destacou ontem o novo dueto de Fontaines D.C. com Rosalía. A edição de hoje usa o lançamento como porta de entrada para uma playlist de rock/alternative com contraste vocal.',
  shareSummary:'Música · 14/10: Fontaines D.C. + Rosalía em “Where Is Gone?”.',
  badge:'MÚSICA · RECOMENDAÇÃO · 14/10',
  sections:[
    {title:'Para ouvir hoje',bullets:['Fontaines D.C. + Rosalía — “Where Is Gone?”.','Depois emende uma faixa antiga do Fontaines D.C. para comparar a textura.','Feche com uma música da Rosalía fora do universo pop mais óbvio.']},
    {title:'Leitura correta',paragraphs:['O lançamento foi noticiado em 13/10; a data 14/10 identifica a curadoria desta edição, não a data de lançamento.']}
  ],
  sources:[{label:'Billboard Brasil · Fontaines D.C. e Rosalía · 13/10',url:'https://billboard.com.br/lancamentos/'}]
});

patch('games',{
  title:'Games de hoje: Castlevania, Arknights e Boltgun 2 chegam ao Steam',
  summary:'LANÇAMENTOS · 14/10 · A página de próximos lançamentos do Steam lista Castlevania: Belmont’s Curse, Arknights: Endfield e Warhammer 40,000: Boltgun 2 para hoje.',
  shareSummary:'Games · 14/10: Castlevania, Arknights: Endfield e Boltgun 2 no radar.',
  badge:'GAMES · LANÇAMENTOS · 14/10',
  sections:[
    {title:'Três destaques',bullets:['Castlevania: Belmont’s Curse — ação/metroidvania.','Arknights: Endfield — lançamento free-to-play listado para hoje.','Warhammer 40,000: Boltgun 2 — boomer shooter/ação.']},
    {title:'Antes de comprar',paragraphs:['Preço, horário de liberação e disponibilidade podem variar por região. Confira a loja no momento da compra.']}
  ],
  sources:[{label:'Steam · Upcoming Releases · 14/10/2026',url:'https://store.steampowered.com/explore/upcoming'}]
});

patch('tecnologia',{
  title:'CBA diz que a Austrália precisa capturar mais valor econômico da IA',
  summary:'DECLARAÇÃO · 14/10 · Matt Comyn, CEO do Commonwealth Bank of Australia, disse que o país precisa garantir que parte maior do valor econômico criado por IA permaneça localmente. O banco já usa IA em serviços e adicionou chat com IA ao aplicativo.',
  shareSummary:'Tecnologia · 14/10: CBA defende regras de IA que preservem valor e confiança na Austrália.',
  badge:'TECNOLOGIA · DECLARAÇÃO · 14/10',
  sections:[
    {title:'Pontos centrais',bullets:['Comyn chamou IA de uma das mudanças tecnológicas potencialmente mais transformadoras.','Defendeu regulação que aumente confiança pública e respeite leis locais.','O banco vem ampliando recursos de IA em serviços ao cliente.']},
    {title:'Por que importa',paragraphs:['A discussão vai além de modelo e produto: envolve soberania econômica, dados, copyright, energia e cybersecurity.']}
  ],
  sources:[{label:'Reuters · CBA chief on AI economic value · 14/10',url:'https://www.reuters.com/world/asia-pacific/cba-chief-matt-comyn-says-australia-must-retain-economic-value-ai-2026-10-14/'}]
});

patch('financas',{
  title:'Radar financeiro: dólar fechou ontem em R$5,02 e mercados globais aguardam CPI dos EUA',
  summary:'ATUALIZAÇÃO · 14/10 · No Brasil, o dólar fechou 13/10 em alta de 0,71%, a R$5,02, e o Ibovespa caiu 1,05%. Na madrugada desta quarta, o dólar recua no exterior enquanto investidores aguardam inflação dos EUA e falas do Fed.',
  shareSummary:'Finanças · 14/10: dólar R$5,02 no fechamento de ontem; CPI dos EUA domina o radar global.',
  badge:'FINANÇAS · ATUALIZAÇÃO · 14/10',
  sections:[
    {title:'Fechamento brasileiro de 13/10',bullets:['Dólar comercial: R$5,02, alta de 0,71%.','Ibovespa: -1,05%, a 206.872,78 pontos.']},
    {title:'Radar desta madrugada',bullets:['Índice do dólar cedia levemente no exterior.','Mercado aguarda o CPI dos EUA.','Falas de dirigentes do Federal Reserve também estão no foco.']},
    {title:'Cuidado com o horário',paragraphs:['Os números brasileiros são do fechamento de ontem. Qualquer cotação desta quarta precisa ser atualizada quando o mercado local abrir.']}
  ],
  sources:[
    {label:'UOL Economia · fechamento de 13/10',url:'https://economia.uol.com.br/cotacoes/noticias/redacao/2026/10/13/dolar-fecha-em-alta-a-r-502-bolsa-recua-apos-recordes-recentes.ghtm'},
    {label:'Reuters · dólar e CPI dos EUA · 14/10',url:'https://www.reuters.com/world/asia-pacific/dollar-languishes-focus-turns-cpi-fed-speakers-2026-10-14/'}
  ]
});

patch('security-briefing',{
  title:'Reguladores bancários ampliam escrutínio sobre IA agentic e recuperação cibernética',
  summary:'APURAÇÃO/REPORTAGEM · 14/10 · Reuters relata que reguladores nos EUA e Europa estão pressionando bancos a demonstrar controles, auditoria e capacidade de recuperação para uso de IA avançada, inclusive agentes aplicados à cybersecurity.',
  shareSummary:'Security Briefing · 14/10: reguladores apertam perguntas sobre agentes de IA e cyber recovery.',
  badge:'SECURITY BRIEFING · APURAÇÃO/REPORTAGEM · 14/10',
  sections:[
    {title:'O foco dos reguladores',bullets:['Onde IA agentic está sendo usada.','Como ações autônomas são controladas e auditadas.','Como bancos recuperam operações se modelos ou fornecedores falharem.','Dependência de modelos e fornecedores estrangeiros.']},
    {title:'Aplicação prática',paragraphs:['Inventário de agentes, least privilege, logging imutável, kill switch, segregação de funções e planos de recuperação independentes deixam de ser “boas ideias” e passam a fazer parte da conversa de supervisão.']}
  ],
  sources:[{label:'Reuters · banking watchdogs ramp up AI scrutiny · 13/14-10',url:'https://www.reuters.com/legal/litigation/banking-watchdogs-ramp-up-ai-scrutiny-stability-fears-mount-sources-say-2026-10-13/'}]
});

patch('seguranca',{
  title:'Cyber: atacantes exploraram sistemas de refrigeração conectados em centenas de supermercados franceses',
  summary:'APURAÇÃO/REPORTAGEM · 14/10 · Investigadores franceses buscam os responsáveis por ataques que comprometeram sistemas de refrigeração em mais de 350 supermercados. A apuração aponta interfaces expostas, software desatualizado e vulnerabilidades conhecidas como fatores de risco.',
  shareSummary:'Cyber · 14/10: ataque a sistemas de refrigeração expõe risco OT/IoT em varejo.',
  badge:'CYBER · APURAÇÃO/REPORTAGEM · 14/10',
  sections:[
    {title:'O que está confirmado',bullets:['Mais de 350 supermercados foram afetados segundo a Reuters.','Sistemas de fornecedores como Danfoss, Copeland e Dixell aparecem na investigação.','Não havia reivindicação pública de autoria no corte consultado.','Especialistas citam exposição à internet e falta de atualização como vetores relevantes.']},
    {title:'Leitura defensiva',paragraphs:['Inventário de ativos OT/IoT, segmentação, remoção de interfaces administrativas da internet, patching e monitoramento de alteração de setpoints são controles diretamente relacionados a esse tipo de incidente.']}
  ],
  sources:[{label:'Reuters · French supermarket refrigeration hacks · 13/14-10',url:'https://www.reuters.com/legal/litigation/investigators-hunt-french-supermarket-fridge-hackers-no-claim-responsibility-2026-10-13/'}]
});

patch('appsec-ssdlc',{
  title:'AppSec: novas regras de SSH do GitHub entram em vigor hoje',
  summary:'ATUALIZAÇÃO · 14/10 · O GitHub programou para hoje a entrada em vigor de requisitos maiores para chaves RSA e a habilitação de mlkem768x25519-sha256 no github.com e em parte do GitHub Enterprise Cloud. É mudança operacional para times de desenvolvimento e CI/CD.',
  shareSummary:'AppSec · 14/10: requisitos de RSA e novo KEX do GitHub entram em vigor hoje.',
  badge:'APPSEC / SSDLC · ATUALIZAÇÃO · 14/10',
  sections:[
    {title:'O que muda hoje',bullets:['Novos requisitos de tamanho para chaves RSA passam a valer.','mlkem768x25519-sha256 é habilitado no github.com e GitHub Enterprise Cloud com Data Residency, exceto região dos EUA, conforme cronograma do GitHub.','Brownouts de ssh-rsa/SHA-1 e de um algoritmo antigo de key exchange estão previstos para novembro e dezembro.']},
    {title:'Checklist para DEV/CI',bullets:['Inventarie chaves SSH usadas em runners, automações e contas técnicas.','Valide tamanho/algoritmo das chaves antes de rotação em massa.','Teste clone/fetch/push em runners críticos.','Registre owner e prazo para qualquer exceção temporária.']}
  ],
  sources:[{label:'GitHub Changelog · Security improvements for SSH',url:'https://github.blog/changelog/2026-09-22-security-improvements-for-ssh/'}]
});

patch('carros',{
  title:'Carros até R$70 mil: Duster 2.0 automática e Honda Fit seguem no radar',
  summary:'RADAR · 14/10 · A busca atual mostra Duster 2.0 Dynamique automática 2016/17 anunciada por R$68.900 em SP e várias opções de Honda Fit automático abaixo do teto — inclusive exemplares 2014/15 na faixa de R$60–69,5 mil.',
  shareSummary:'Carros · 14/10: Duster automática e Honda Fit seguem abaixo do teto de R$70 mil.',
  badge:'CARROS ATÉ R$70 MIL · RADAR · 14/10',
  sections:[
    {title:'Exemplos vistos no corte',bullets:['Renault Duster 2.0 Dynamique 4x2 automática 2016/17: anúncio a R$68.900 em SP.','Honda Fit LX automático 2014/15: anúncios entre cerca de R$60 mil e R$69,5 mil.','Honda Fit DX automático 2017: anúncios vistos entre R$59.999 e R$68.500.']},
    {title:'O que pesa mais que o anúncio',bullets:['Laudo cautelar.','Histórico de manutenção.','Estado de câmbio e arrefecimento.','Pneus, suspensão e custo da revisão inicial.']},
    {title:'Regra do card',paragraphs:['Nenhum exemplo acima ultrapassa R$70 mil. Preços são anúncios e podem mudar ou sair do ar; confirme antes de visitar.']}
  ],
  sources:[
    {label:'Webmotors · Duster 2.0 automática até R$70 mil em SP',url:'https://www.webmotors.com.br/carros-usados/sp/renault/duster/2.0-dynamique-4x2-16v-flex-4p-automatico/precoate.70000'},
    {label:'Webmotors · Honda Fit LX automático até R$70 mil em São Paulo',url:'https://www.webmotors.com.br/carros/sp-sao-paulo/honda/fit/15-lx-16v-flex-4p-automatico/precoate.70000'}
  ]
});

patch('motos',{
  title:'Motos: se pegar a chuva prevista hoje, reduza ritmo antes de o asfalto ficar encharcado',
  summary:'CHECKLIST · 14/10 · O risco de chuva forte à tarde/noite muda a prioridade: velocidade menor, mais distância, frenagem progressiva e atenção redobrada a faixas pintadas, tampas metálicas e poças.',
  shareSummary:'Motos · 14/10: chuva forte pede distância maior e comandos suaves.',
  badge:'MOTOS · CHECKLIST · 14/10',
  sections:[
    {title:'Antes de sair',bullets:['Confira sulcos/pressão dos pneus.','Teste iluminação e luz de freio.','Leve equipamento impermeável sem comprometer mobilidade.']},
    {title:'Na chuva',bullets:['Reduza velocidade antes da lâmina d’água.','Evite freada brusca e inclinação excessiva.','Aumente distância do veículo da frente.','Não atravesse trecho alagado sem conhecer profundidade/correnteza.']}
  ],
  sources:[{label:'CGE São Paulo · previsão para 14/10',url:'https://cge.prefeitura.sp.gov.br/v3/noticias.jsp?data=2026-10-13'}]
});

patch('mecanica',{
  title:'Mecânica: chuva de hoje coloca pneus, palhetas, desembaçador e drenagem no topo do checklist',
  summary:'CHECKLIST · 14/10 · Antes de rodar à tarde/noite, teste as palhetas, o desembaçador e todas as luzes; observe sulcos e pressão dos pneus e não ignore drenos entupidos que possam jogar água para dentro do carro.',
  shareSummary:'Mecânica · 14/10: checklist rápido antes da chuva forte prevista.',
  badge:'MECÂNICA · CHECKLIST · 14/10',
  sections:[
    {title:'Cinco minutos antes de sair',bullets:['Palhetas limpam sem deixar faixa grande no vidro?','Desembaçador dianteiro e traseiro funcionam?','Faróis, lanternas e luz de freio estão operantes?','Pneus estão com pressão correta e sulcos em bom estado?','Há infiltração ou dreno visivelmente obstruído?']},
    {title:'Motivo do dia',paragraphs:['O CGE prevê chuva moderada a forte entre tarde e noite, com potencial para alagamentos.']}
  ],
  sources:[{label:'CGE São Paulo · previsão para 14/10',url:'https://cge.prefeitura.sp.gov.br/v3/noticias.jsp?data=2026-10-13'}]
});
}
