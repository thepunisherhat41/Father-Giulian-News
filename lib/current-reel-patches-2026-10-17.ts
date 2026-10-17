export function applyCurrentReelPatches20261017(dailyContent:Record<string,any>){
const patch=(slug:string,value:any)=>Object.assign(dailyContent[slug]??(dailyContent[slug]={}),value);

patch('papo',{
  conceptId:'felipe-future-skill-funny',
  visualConceptId:'dad-teaching-playful-skill',
  title:'Papo de hoje: qual habilidade divertida você quer muito ensinar ao Felipe?',
  summary:'PAPO QUEST · 17/10 · Vale coisa séria ou completamente boba: assobiar, montar alguma coisa, chutar bola, cozinhar, mexer em computador, contar piada ou reconhecer uma música nos primeiros segundos.',
  shareSummary:'Papo de hoje · 17/10: uma habilidade divertida que vocês querem ensinar ao Felipe.',
  badge:'PAPO DE HOJE · 17/10',
  sections:[
    {title:'Pergunta de hoje',paragraphs:['Qual habilidade você ficaria genuinamente feliz de ensinar ao Felipe um dia — mesmo que ela não sirva para absolutamente nada além de render boas histórias?']},
    {title:'Modo gamer',paragraphs:['Cada um escolhe uma habilidade e explica em que “level” da infância imagina desbloquear isso com ele.']}
  ],
  sources:[]
});

patch('desafio',{
  conceptId:'three-levels-first-year',
  visualConceptId:'coop-quest-paper-level-map',
  title:'Desafio do casal: criem três nomes de fases para o primeiro ano do Felipe',
  summary:'CO-OP QUEST · 17/10 · Em 10 minutos, inventem três “levels” para o primeiro ano: começo, meio e fim. Pode ser engraçado, fofo ou completamente nerd.',
  shareSummary:'Desafio do casal · 17/10: batizar três fases do primeiro ano do Felipe.',
  badge:'DESAFIO DO CASAL · CO-OP QUEST · 17/10',
  sections:[
    {title:'Missão',bullets:['Level 1: primeiros dias.','Level 2: quando a rotina já mudou completamente.','Level 3: perto de 1 ano.','Cada nome precisa ter uma frase explicando o porquê.']},
    {title:'Regra',paragraphs:['Não precisa prever como será de verdade. É só um exercício divertido para imaginar a aventura em dupla.']}
  ],
  sources:[]
});

patch('gravidez',{
  title:'14 semanas + 6 dias: falta um dia para completar 15 semanas',
  summary:'LEVEL DO BEBÊ · 14+6 · O Felipe está no fim da 14ª semana gestacional. O NHS usa cerca de 8,5 cm da cabeça ao bumbum como referência para a semana 14, e os movimentos já existem mesmo que ainda não sejam percebidos pela Bruna.',
  shareSummary:'Gravidez · 17/10: 14 semanas + 6 dias, a um dia de completar 15 semanas.',
  badge:'LEVEL DO BEBÊ · 14 SEMANAS + 6 DIAS · 17/10',
  sections:[
    {title:'Checkpoint 14+6',bullets:['Amanhã completa 15 semanas.','Movimentos fetais já acontecem nesta fase, mas sentir esses movimentos ainda pode demorar.','O rosto e as proporções corporais ficam cada vez mais definidos.','O crescimento acelera ao longo do segundo trimestre.']},
    {title:'Para hoje',paragraphs:['Aproveitem o fim desta semana para registrar uma foto simples da barriga ou uma nota curta sobre como a Bruna está se sentindo.']}
  ],
  sources:[{label:'NHS · Week 14 pregnancy guide',url:'https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-14/'}]
});

patch('pai',{
  title:'Ser Pai: escolha uma pequena habilidade para começar a praticar antes do Felipe nascer',
  summary:'MISSÃO DO PAI · 17/10 · Em vez de pensar em “estar pronto”, escolha uma coisa objetiva para melhorar agora: trocar fralda em boneco, organizar bolsa, aprender primeiros cuidados ou criar uma rotina de leitura.',
  shareSummary:'Ser Pai · 17/10: escolher uma habilidade prática e começar pequeno.',
  badge:'SER PAI · MISSÃO DO DIA · 17/10',
  sections:[
    {title:'Missão',bullets:['Escolha uma habilidade só.','Separe 15 minutos para aprender o básico.','Anote uma dúvida para levar ao pré-natal ou pesquisar em fonte confiável.']},
    {title:'Objetivo',paragraphs:['Transformar ansiedade genérica em preparação concreta, uma habilidade por vez.']}
  ],
  sources:[]
});

patch('brasil',{
  title:'Santos passa a contar com dois novos aceleradores lineares para radioterapia no SUS',
  summary:'FATO · 17/10 · O Ministério da Saúde informou hoje que Santos passa a contar com dois novos aceleradores lineares para tratamento oncológico. Juntos, os equipamentos têm capacidade anunciada de até 1.440 procedimentos por ano.',
  shareSummary:'Brasil · 17/10: Santos amplia radioterapia no SUS com dois aceleradores lineares.',
  badge:'BRASIL · FATO · 17/10',
  sections:[
    {title:'O que foi confirmado hoje',bullets:['Um equipamento na Santa Casa da Misericórdia de Santos.','Outro no Hospital Beneficência Portuguesa de Santos.','Capacidade conjunta anunciada: até 1.440 procedimentos anuais.','Investimento informado: R$ 17,5 milhões.']},
    {title:'Alcance regional',paragraphs:['O serviço atende municípios da Baixada Santista e do Vale do Ribeira e integra a expansão nacional da radioterapia no SUS.']}
  ],
  sources:[{label:'Ministério da Saúde · Santos recebe aceleradores lineares · 17/10',url:'https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/outubro/santos-sp-passa-a-contar-com-dois-aceleradores-lineares-para-tratar-pacientes-com-cancer'}]
});

patch('mundo',{
  title:'Tensão entre Trump e Zelensky aumenta e põe apoio dos EUA à Ucrânia no centro do debate',
  summary:'APURAÇÃO/REPORTAGEM · 17/10 · A Reuters relata aumento da tensão entre Donald Trump e Volodymyr Zelensky, com preocupação em Kyiv sobre o futuro do apoio americano e novas divergências em torno de energia e sanções.',
  shareSummary:'Mundo · 17/10: tensão Trump–Zelensky aumenta e apoio dos EUA à Ucrânia entra no foco.',
  badge:'MUNDO · APURAÇÃO/REPORTAGEM · 17/10',
  sections:[
    {title:'O que mudou',bullets:['A relação entre os dois líderes se deteriorou nesta semana.','Autoridades ucranianas demonstram preocupação com inteligência, conectividade e apoio militar.','Energia e sanções à Rússia estão no centro das divergências relatadas.']},
    {title:'Classificação',paragraphs:['O card resume a apuração da Reuters publicada hoje; avaliações sobre intenção política permanecem atribuídas às fontes e analistas citados pela agência.']}
  ],
  sources:[{label:'Reuters · Trump-Zelenskiy rift threatens support for Kyiv · 17/10',url:'https://www.reuters.com/world/europe/trump-zelenskiy-rift-threatens-vital-support-kyiv-2026-10-17/'}]
});

patch('politica',{
  title:'TSE alerta eleitores para conferir com antecedência o local de votação do segundo turno',
  summary:'FATO · 17/10 · O TSE publicou hoje orientação para que eleitoras e eleitores confirmem o local de votação antes do segundo turno de 25 de outubro, especialmente porque alguns locais podem ter sido alterados.',
  shareSummary:'Política · 17/10: TSE orienta conferir o local de votação antes do segundo turno.',
  badge:'POLÍTICA · FATO · 17/10',
  sections:[
    {title:'Como conferir',bullets:['Aplicativo e-Título.','Autoatendimento Eleitoral.','ChatVote da Justiça Eleitoral.','Segundo turno marcado para 25/10.']},
    {title:'Por que agora',paragraphs:['A Justiça Eleitoral pediu ampla divulgação de eventuais mudanças para reduzir deslocamentos errados no dia da votação.']}
  ],
  sources:[{label:'TSE · Consulte com antecedência o local de votação · 17/10',url:'https://www.tse.jus.br/comunicacao/noticias/2026/Outubro/consulte-com-antecedencia-o-local-onde-voce-ira-votar-no-2o-turno'}]
});

patch('tempo',{
  title:'São Paulo termina o sábado frio, nublado e com garoa ocasional',
  summary:'ATUALIZAÇÃO · 17/10 · O CGE registrou sábado instável, com chuva fraca no início do dia, céu encoberto e temperaturas em queda. A previsão do dia indicava mínima de 16°C e máxima de 21°C.',
  shareSummary:'Tempo · 17/10: sábado frio, encoberto e com garoa ocasional em São Paulo.',
  badge:'TEMPO · ATUALIZAÇÃO · 17/10',
  sections:[
    {title:'Hoje',bullets:['Mínima prevista: 16°C.','Máxima prevista: 21°C.','Céu encoberto.','Garoa ocasional e queda de temperatura.']},
    {title:'Amanhã',paragraphs:['O CGE indica domingo mais seco, com ar frio, mínima de 15°C e máxima de 22°C.']}
  ],
  sources:[{label:'CGE São Paulo · notícias de 17/10',url:'https://cge.prefeitura.sp.gov.br/v3/noticias.jsp?data=2026-10-17'}]
});

patch('seguranca-zl',{
  title:'Zona Leste levou reivindicações do orçamento de 2027 à audiência regional no CEU São Rafael',
  summary:'FATO LOCAL · 17/10 · A Câmara Municipal realizou hoje no CEU São Rafael, em São Mateus, a primeira audiência regional do orçamento de 2027. Moradores apresentaram demandas por lazer, serviços de reabilitação e outras prioridades locais.',
  shareSummary:'Zona Leste · 17/10: audiência regional do orçamento 2027 reuniu moradores no CEU São Rafael.',
  badge:'ZONA LESTE · FATO LOCAL · 17/10',
  sections:[
    {title:'O que aconteceu',bullets:['Audiência da Comissão de Finanças e Orçamento.','Realizada no CEU São Rafael, em São Mateus.','Debate sobre o PL 752/2026, que estima o orçamento municipal de 2027.','Câmara registrou reivindicações apresentadas por moradores da região.']},
    {title:'Contexto',paragraphs:['A proposta orçamentária citada pela Câmara estima R$ 146,5 bilhões para a cidade em 2027.']}
  ],
  sources:[{label:'Câmara Municipal de São Paulo · audiência regional Leste · 17/10',url:'https://www.saopaulo.sp.leg.br/blog/orcamento-2027-moradores-da-zona-leste-apresentam-reivindicacoes-na-1a-audiencia-regional/'}]
});

patch('corinthians',{
  title:'Seedorf visita a Arena, Yuri Alberto volta ao treino e estreia no banco é adiada',
  summary:'FATO · 17/10 · Seedorf comandou treino pela manhã e visitou a Neo Química Arena à tarde. Yuri Alberto treinou normalmente e deve enfrentar o Vitória, mas o técnico não poderá ficar no banco porque o registro no BID não foi concluído a tempo.',
  shareSummary:'Corinthians · 17/10: Seedorf visita a Arena; Yuri treina; técnico fica fora do banco contra o Vitória.',
  badge:'CORINTHIANS · FATO · 17/10',
  sections:[
    {title:'Treino deste sábado',bullets:['Yuri Alberto participou normalmente após ter sido poupado na sexta.','Seedorf trabalhou bola parada.','Raniele e Memphis Depay seguem fora do jogo.']},
    {title:'Seedorf',bullets:['Visitou a Neo Química Arena neste sábado.','Não poderá comandar o time no banco contra o Vitória por falta de regularização no BID.','Partida: segunda-feira, 19/10, às 20h, na Neo Química Arena.']},
    {title:'Último resultado',paragraphs:['O último jogo do Corinthians foi a derrota por 4 a 1 para o Palmeiras em 11/10.']}
  ],
  sources:[
    {label:'ge · Seedorf visita a Arena · 17/10',url:'https://ge.globo.com/futebol/times/corinthians/noticia/2026/10/17/com-estreia-adiada-no-corinthians-seedorf-visita-a-arena.ghtml'},
    {label:'ge · Yuri Alberto volta ao treino · 17/10',url:'https://ge.globo.com/futebol/times/corinthians/noticia/2026/10/17/yuri-alberto-vai-a-campo-no-corinthians-e-deve-enfrentar-o-vitoria-seedorf-treina-bola-parada.ghtml'}
  ]
});

patch('viagens',{
  title:'Viagens: sábado frio pede um roteiro curto e majoritariamente coberto',
  summary:'MAP QUEST · 17/10 · Com o dia encoberto e frio em São Paulo, o melhor formato é um passeio urbano sem depender do tempo: museu, café ou centro cultural, com deslocamento simples e volta cedo.',
  shareSummary:'Viagens · 17/10: roteiro urbano coberto para um sábado frio e nublado.',
  badge:'VIAGENS · MAP QUEST · 17/10',
  sections:[
    {title:'Quest de hoje',bullets:['Escolha um único ponto principal.','Adicione um café ou restaurante próximo.','Evite deslocamentos longos só para “aproveitar o dia”.','Confira horário de fechamento antes de sair.']},
    {title:'Motivo',paragraphs:['O CGE registrou sábado encoberto e temperaturas em queda, então a prioridade é conforto e flexibilidade.']}
  ],
  sources:[{label:'CGE São Paulo · 17/10',url:'https://cge.prefeitura.sp.gov.br/v3/noticias.jsp?data=2026-10-17'}]
});

patch('musica',{
  title:'Música: Karol G lidera o Global 200 e Drake estreia duas faixas no Top 20',
  summary:'RADAR MUSICAL · 17/10 · No Billboard Global 200 da semana, “BbY WOW”, de Karol G com Judeline e rusowsky, aparece em 1º lugar. “Solar Eclipse”, de Drake & Don Toliver, estreia em 8º, e “Quebec”, de Drake, em 20º.',
  shareSummary:'Música · 17/10: Karol G lidera o Global 200; Drake chega com novas estreias.',
  badge:'MÚSICA · RADAR · 17/10',
  sections:[
    {title:'Top do dia',bullets:['#1 Global 200: BbY WOW — Karol G with Judeline & rusowsky.','#8: Solar Eclipse — Drake & Don Toliver — estreia.','#20: Quebec — Drake — estreia.']},
    {title:'Para ouvir hoje',paragraphs:['Escolha uma das estreias e compare com a faixa que lidera o ranking. A ideia é ouvir sem algoritmo escolhendo a próxima.']}
  ],
  sources:[{label:'Billboard Global 200 · week of 17/10/2026',url:'https://ca.billboard.com/charts/billboard-global-200/2026-10-17'}]
});

patch('sertanejo-da-roca',{
  conceptId:'sertanejo-cabocla-tereza',
  visualConceptId:'tonico-tinoco-tv-cultura-1993',
  title:'Sertanejo da Roça de hoje: Cabocla Tereza',
  summary:'SOUNDTRACK · 17/10 · Tonico e Tinoco interpretam “Cabocla Tereza” em registro de 1993. É uma moda clássica da música caipira brasileira — aqui como referência histórica, sem reproduzir a letra.',
  shareSummary:'Sertanejo da Roça · 17/10: Cabocla Tereza, com Tonico e Tinoco.',
  badge:'SERTANEJO DA ROÇA · 17/10',
  videoEmbed:'https://www.youtube.com/embed/kv2jknSIBGc?playsinline=1&rel=0',
  sections:[],
  sources:[{label:'YouTube · Tonico e Tinoco · Cabocla Tereza 1993',url:'https://www.youtube.com/watch?v=kv2jknSIBGc'}]
});

patch('games',{
  title:'Games: o sábado é bom para limpar backlog — escolha um jogo e jogue só uma hora',
  summary:'NEW DROP · 17/10 · Em vez de abrir cinco jogos e não avançar em nenhum, a missão de hoje é simples: escolha um título do backlog, defina um objetivo concreto e jogue por uma hora sem trocar de jogo.',
  shareSummary:'Games · 17/10: uma hora, um jogo, um objetivo.',
  badge:'GAMES · QUEST DO DIA · 17/10',
  sections:[
    {title:'Modo foco',bullets:['Escolha um jogo parado há semanas.','Defina uma missão: capítulo, boss, partida ranqueada ou conquista.','Desative notificações.','Ao terminar, decida conscientemente se continua ou arquiva.']},
    {title:'Por que vale',paragraphs:['Backlog vira ruído quando toda sessão começa escolhendo entre dezenas de opções. Uma meta pequena devolve sensação de progresso.']}
  ],
  sources:[]
});

patch('tecnologia',{
  title:'Anthropic diz que avanço da IA está acelerando e cobra regras mais fortes para riscos de uso',
  summary:'DECLARAÇÃO · 17/10 · Jack Clark, cofundador da Anthropic, afirmou em evento do FMI/Banco Mundial que o avanço da IA está acelerando e pode elevar fortemente a produtividade, mas alertou para riscos de abuso e necessidade de supervisão robusta.',
  shareSummary:'Tecnologia · 17/10: Anthropic fala em aceleração da IA e necessidade de safeguards.',
  badge:'TECNOLOGIA · DECLARAÇÃO · 17/10',
  sections:[
    {title:'Pontos principais',bullets:['Clark disse que a capacidade dos modelos está avançando rapidamente.','Defendeu coordenação internacional e controles para usos de alto risco.','Também destacou potencial de acelerar ciência e produtividade.']},
    {title:'Leitura correta',paragraphs:['As projeções econômicas citadas são estimativas e opiniões do executivo, não previsões garantidas.']}
  ],
  sources:[{label:'Reuters · Anthropic Clark on accelerating AI · 17/10',url:'https://www.reuters.com/world/china/anthropics-clark-says-ais-impact-accelerating-quickly-could-vastly-boost-us-gdp-2026-10-17/'}]
});

patch('financas',{
  title:'Finanças: semana termina com cautela em ações e petróleo em alta',
  summary:'ATUALIZAÇÃO · 17/10 · Como é sábado, não há pregão regular no Brasil. O fechamento global de sexta mostrou ações pressionadas por juros e dívida ligada ao setor de IA, enquanto o Brent avançou com preocupações de oferta no Oriente Médio.',
  shareSummary:'Finanças · 17/10: sábado sem pregão local; fechamento global teve cautela em ações e petróleo em alta.',
  badge:'FINANÇAS · ATUALIZAÇÃO · 17/10',
  sections:[
    {title:'Fechamento de sexta',bullets:['Mercados globais terminaram a semana com pressão sobre tecnologia.','Dólar caminhou para perda semanal.','Brent subiu cerca de 3,7% na sexta segundo a Reuters.']},
    {title:'Importante',paragraphs:['Por ser sábado, o card não inventa cotação “de hoje” para dólar ou Ibovespa. O próximo preço local relevante vem com a reabertura do mercado.']}
  ],
  sources:[{label:'Reuters · Global Markets · fechamento de 16/10',url:'https://www.reuters.com/world/china/global-markets-global-markets-2026-10-16/'}]
});

patch('security-briefing',{
  title:'Security Briefing: impacto do ataque a supermercados franceses chega ao debate sobre cyber insurance',
  summary:'ATUALIZAÇÃO · 17/10 · A Reuters destacou hoje os efeitos do ataque que afetou refrigeração e operações de varejistas franceses. O caso ampliou discussões sobre risco de sistemas conectados e sobre o que apólices cibernéticas realmente cobrem.',
  shareSummary:'Security Briefing · 17/10: ataque a varejo francês vira alerta para IoT/OT e cobertura de cyber insurance.',
  badge:'SECURITY BRIEFING · ATUALIZAÇÃO · 17/10',
  sections:[
    {title:'Para liderança',bullets:['Impacto físico pode nascer de sistemas conectados aparentemente “simples”.','Interrupção operacional e perda de produtos podem ter cobertura diferente de perda de dados.','Inventário de ativos e dependências externas precisa conversar com a apólice.']},
    {title:'Pergunta para fazer',paragraphs:['Se um ativo conectado derrubar uma operação física, o contrato de seguro cobre só resposta digital ou também a perda operacional e material?']}
  ],
  sources:[{label:'Reuters World News podcast · cyber impact in French supermarkets · 17/10',url:'https://www.reuters.com/podcasts/trump-drops-russia-sanctions-israeli-settlers-attack-us-photojournalist-oregon-2026-10-17/'}]
});

patch('seguranca',{
  title:'Cyber: G7 prepara exercícios para responder a ataques habilitados por IA',
  summary:'ATUALIZAÇÃO · 17/10 · Ministros de finanças do G7 concordaram em avançar exercícios de mesa para testar resposta a ataques cibernéticos com uso de IA. A decisão foi divulgada nesta semana e permanece como uma das principais pautas do fim de semana.',
  shareSummary:'Cyber · 17/10: G7 prepara tabletop exercises para ataques habilitados por IA.',
  badge:'CYBER · ATUALIZAÇÃO · 17/10',
  sections:[
    {title:'O que testar',bullets:['Detecção de ações automatizadas em velocidade de máquina.','Decisão de contenção quando o atacante adapta TTPs rapidamente.','Recuperação independente dos sistemas primários.','Coordenação entre instituições e terceiros críticos.']},
    {title:'Aplicação prática',paragraphs:['O exercício vale também em empresa: simular um agente malicioso com credenciais válidas e medir quanto tempo leva para detectar, limitar e reconstruir o ambiente.']}
  ],
  sources:[{label:'Reuters · G7 to launch exercises against AI cyber attacks · 16/10',url:'https://www.reuters.com/world/asia-pacific/g7-launch-exercises-guard-against-ai-cyber-attacks-2026-10-16/'}]
});

patch('appsec-ssdlc',{
  title:'AppSec: GitHub AI Scan para pull requests já está GA — hora de tratar saída de IA como finding verificável',
  summary:'ATUALIZAÇÃO · 17/10 · O GitHub anunciou em 15/10 disponibilidade geral do AI Scan para pull requests. Para SSDLC, a lição prática é integrar IA sem pular o ciclo normal de evidência, triagem, validação e gate.',
  shareSummary:'AppSec · 17/10: AI Scan do GitHub está GA; trate resultado de IA como finding que precisa de verificação.',
  badge:'APPSEC / SSDLC · ATUALIZAÇÃO · 17/10',
  sections:[
    {title:'Checklist de governança',bullets:['IA pode sugerir, mas não deve auto-publicar finding sem validação.','Preserve diff/commit exato usado na análise.','Registre evidência, severidade e decisão de triagem.','Evite transformar “sugestão do modelo” em blocker sem regra determinística.']},
    {title:'Conexão com pipeline',paragraphs:['A mudança reforça uma direção já clara no mercado: modelos entram no PR, mas controles de provenance, verifier e gates continuam essenciais.']}
  ],
  sources:[{label:'GitHub Changelog · AI Scan for pull requests generally available · 15/10',url:'https://github.blog/changelog/'}]
});

patch('carros',{
  title:'Carros até R$70 mil: hoje o foco é custo de entrada, não só preço do anúncio',
  summary:'GARAGE · 17/10 · Para qualquer usado abaixo de R$70 mil, reserve parte do orçamento para revisão inicial. Um carro de R$66 mil com pneus, fluidos e suspensão em dia pode ser compra melhor que um de R$60 mil negligenciado.',
  shareSummary:'Carros · 17/10: avalie custo de entrada completo, não só preço do anúncio.',
  badge:'CARROS ATÉ R$70 MIL · GARAGE · 17/10',
  sections:[
    {title:'Conta de compra real',bullets:['Preço do carro <= R$70 mil.','Transferência e documentação.','Laudo cautelar.','Pneus e freios.','Fluidos, filtros e manutenção atrasada.']},
    {title:'Regra',paragraphs:['O teto continua sendo R$70 mil para o veículo. A reserva de manutenção deve ser pensada separadamente para não comprar no limite e ficar sem margem.']}
  ],
  sources:[]
});

patch('motos',{
  title:'Motos: fim de semana frio e úmido pede atenção extra a pneus e viseira',
  summary:'GARAGE · 17/10 · Piso úmido, garoa e temperatura mais baixa reduzem margem para erro. Confira pressão dos pneus, estado da viseira e iluminação antes de sair.',
  shareSummary:'Motos · 17/10: piso úmido pede pneus, viseira e iluminação em ordem.',
  badge:'MOTOS · GARAGE · 17/10',
  sections:[
    {title:'Antes de ligar',bullets:['Pressão e sulcos dos pneus.','Viseira limpa e sem embaçamento excessivo.','Farol e luz de freio.','Roupa que mantenha mobilidade mesmo molhada.']},
    {title:'Na rua',paragraphs:['Faça aceleração, frenagem e inclinação de forma mais progressiva e mantenha distância maior.']}
  ],
  sources:[{label:'CGE São Paulo · 17/10',url:'https://cge.prefeitura.sp.gov.br/v3/noticias.jsp?data=2026-10-17'}]
});

patch('mecanica',{
  title:'Mecânica: depois de um dia úmido, cheque sinais de água onde ela não deveria estar',
  summary:'GARAGE · 17/10 · Se o carro pegou chuva ou ficou exposto a garoa, olhe tapetes, porta-malas, borrachas e região abaixo do para-brisa. Umidade recorrente pode indicar dreno ou vedação com problema.',
  shareSummary:'Mecânica · 17/10: inspeção rápida de infiltração depois de chuva e garoa.',
  badge:'MECÂNICA · GARAGE · 17/10',
  sections:[
    {title:'Inspeção de 5 minutos',bullets:['Tapetes úmidos sem explicação.','Água no compartimento do estepe.','Cheiro de mofo.','Borrachas de porta ressecadas ou deslocadas.','Drenos com folhas e sujeira.']},
    {title:'Não faça',paragraphs:['Não vede o problema por cima sem descobrir de onde a água está entrando; infiltração pode atingir acabamento, chicotes e módulos.']}
  ],
  sources:[{label:'CGE São Paulo · tempo úmido em 17/10',url:'https://cge.prefeitura.sp.gov.br/v3/noticias.jsp?data=2026-10-17'}]
});
}
