import type { EditorialDossier } from './editorial-dossier-types';

export const editorialDaily20260818: Record<string, EditorialDossier> = {
  brasil: {
    readingTime:'8 MIN', title:'BC PROTEGE+: prevenção de fraude antes de a conta existir', deck:'Uma camada de segurança simples muda a lógica: em vez de descobrir uma conta falsa depois, você sinaliza previamente que não quer novas aberturas.',
    opening:['Fraude de identidade costuma virar problema para a vítima depois que uma relação financeira já foi criada. O BC PROTEGE+ tenta deslocar essa barreira para antes da abertura.','O recurso não substitui cuidado com documentos, senhas ou monitoramento financeiro, mas adiciona uma trava centralizada que as instituições precisam consultar.'],
    sections:[
      {kicker:'MODELO',title:'Opt-out por padrão quando você não está contratando',paragraphs:['A estratégia é manter a proteção ativa na maior parte do tempo e desativá-la apenas durante uma abertura legítima de conta. A mudança tem efeito on-line e pode ser revertida.'],bullets:['Conta gov.br prata ou ouro.','Verificação em duas etapas.','Acesso pelo Meu BC.']},
      {kicker:'INCIDENT RESPONSE PESSOAL',title:'Se uma conta aparecer mesmo assim, preserve evidência',paragraphs:['O histórico de ativações ajuda a demonstrar que a proteção estava vigente. A orientação oficial é escalar para Ouvidoria da instituição e, se necessário, Banco Central e defesa do consumidor.']},
    ],
    callout:{label:'REGRA PRÁTICA',title:'Proteção ativa quando não houver abertura legítima em andamento',text:'Trate a desativação como uma janela temporária e consciente, não como estado permanente.'},
    takeaways:['Prevenção centralizada reduz uma classe de fraude de identidade.','O serviço é controlado pelo próprio usuário.','Histórico de ativações pode virar evidência em disputa.'],
    sources:[{label:'Banco Central · BC PROTEGE+',url:'https://www.bcb.gov.br/meubc/faqs/p/como-ativo-a-protecao-para-o-meu-cpf-pessoa-fisica'}],
  },
  politica: {
    readingTime:'10 MIN', title:'18 de agosto: por que uma data estatística importa para o dinheiro público de campanha', deck:'A fotografia nacional dos pedidos de candidatura entra no cálculo de percentuais mínimos do FEFC, mas não decide o mérito jurídico de cada candidatura.',
    opening:['Eleições têm vários relógios funcionando ao mesmo tempo: registro, julgamento, propaganda, financiamento e prestação de contas. Misturá-los cria conclusões erradas.','Hoje o relógio relevante é estatístico-financeiro: o TSE considera os pedidos recebidos e aceitos até 23h59 para aferir percentuais mínimos de repasse do FEFC.'],
    sections:[
      {kicker:'SEPARAÇÃO DE CONCEITOS',title:'Pedido contado não é registro deferido',paragraphs:['O total usado na fotografia do dia serve à prestação de contas e à distribuição mínima de recursos. Impugnações, diligências, decisões e recursos continuam em trilha própria.']},
      {kicker:'VIDA REAL',title:'A consequência aparece na transparência sobre recursos públicos',paragraphs:['O FEFC é dinheiro público destinado ao financiamento eleitoral. Para o cidadão, a utilidade prática é conseguir rastrear como critérios de distribuição se conectam ao número de candidaturas e depois conferir receitas e despesas declaradas.'],bullets:['DivulgaCandContas: status e contas.','Calendário TSE: prazos.','Programa/proposta: conteúdo político, não status jurídico.']},
    ],
    callout:{label:'NEUTRALIDADE',title:'Comparar documento, competência e efeito — não torcida',text:'O comparador do site separa proposta declarada, caminho institucional, impacto na vida real, argumentos favoráveis e limitações sem nota ou recomendação de voto.'},
    takeaways:['18/08 é data-base para aferição de percentuais do FEFC.','A fotografia não equivale a deferimento coletivo.','Status jurídico e financiamento devem ser conferidos em campos distintos.'],
    sources:[{label:'TSE · Calendário Eleitoral 2026',url:'https://www.tse.jus.br/eleicoes/calendario-eleitoral/calendario-eleitoral'}],
  },
  mundo: {
    readingTime:'9 MIN', title:'Hormuz transforma diplomacia em preço de energia quase em tempo real', deck:'Brent acima de US$ 91 mostra como uma rota física estreita pode transmitir risco geopolítico para mercados globais.',
    opening:['Petróleo não sobe apenas porque alguém “acha” que haverá guerra. O preço reage à probabilidade de barris deixarem de circular, ao custo de seguro e frete e à capacidade de rotas alternativas.','Quando a diplomacia piora e o tráfego permanece limitado, o mercado adiciona prêmio de risco mesmo antes de uma interrupção total.'],
    sections:[
      {kicker:'CHOKEPOINT',title:'Um estreito pequeno, uma consequência grande',paragraphs:['Hormuz concentra fluxos relevantes de petróleo e gás. Menos trânsito aumenta incerteza sobre entrega e pode pressionar curvas de futuros, fretes e estoques.']},
      {kicker:'TRANSMISSÃO',title:'Energia pode chegar a inflação e juros — mas não em linha reta',paragraphs:['Refino, câmbio, impostos, estoques e políticas domésticas modulam o repasse. O correto é tratar petróleo caro como risco inflacionário, não como garantia de uma alta específica na bomba.']},
    ],
    takeaways:['Brent chegou a US$ 91,76 nesta manhã.','Tráfego limitado em Hormuz mantém prêmio de risco.','Diplomacia pode remover esse prêmio tão rápido quanto o criou.'],
    sources:[{label:'Reuters · 18/08/2026',url:'https://www.reuters.com/business/energy/oil-climbs-fading-us-iran-peace-hopes-raise-supply-risks-2026-08-18/'}],
  },
  planeta: {
    readingTime:'8 MIN', title:'O norte que se move: campo magnético, declinação e navegação', deck:'Norte verdadeiro é geométrico; norte magnético é uma propriedade local de um campo dinâmico produzido no interior da Terra.',
    opening:['Uma bússola parece um instrumento absoluto, mas ela mede uma condição física local. A agulha se alinha à componente horizontal do campo magnético onde você está.','Como esse campo não é perfeitamente simétrico nem fixo, mapas de navegação precisam considerar declinação.'],
    sections:[
      {kicker:'GEODÍNAMO',title:'O planeta funciona como um gerador gigantesco',paragraphs:['Movimento de material condutor no núcleo externo sustenta o campo. Na superfície, sua intensidade típica está entre dezenas de microteslas e sua geometria inclui componentes além de um dipolo simples.']},
      {kicker:'NAVEGAÇÃO',title:'Mapa + bússola exige correção',paragraphs:['A declinação varia no espaço e no tempo. Em navegação terrestre ou marítima, usar uma correção antiga ou de outro lugar pode criar erro crescente com a distância.']},
    ],
    takeaways:['Bússola mede norte magnético local.','Declinação é o ângulo em relação ao norte verdadeiro.','O campo muda com local e tempo.'],
    sources:[{label:'USGS · Geomagnetism',url:'https://www.usgs.gov/programs/geomagnetism/introduction-geomagnetism'}],
  },
  animais: {
    readingTime:'9 MIN', title:'Um sistema de navegação com redundância: Sol quando dá, magnetismo quando precisa', deck:'O novo estudo com pombos é interessante menos pela manchete “bússola no fígado” e mais pela ideia de múltiplas pistas sensoriais funcionando em conjunto.',
    opening:['Animais que navegam longas distâncias raramente dependem de uma única informação. Sol, estrelas, odores, paisagem e campo magnético podem compor um sistema redundante.','No estudo de 2026, remover temporariamente certos macrófagos afetou a orientação quando o céu estava nublado, mas não quando o Sol aparecia.'],
    sections:[
      {kicker:'EVIDÊNCIA',title:'O experimento liga célula, condição ambiental e comportamento',paragraphs:['Os autores identificaram propriedades superparamagnéticas em macrófagos do fígado e observaram uma mudança comportamental específica sob condição nublada. Essa combinação é mais forte que simplesmente encontrar ferro em um tecido.']},
      {kicker:'CAUTELA',title:'Mecanismo proposto não significa mistério encerrado',paragraphs:['Ainda é necessário entender como o sinal seria transmitido e integrado ao sistema nervoso e como esse mecanismo se relaciona com outras hipóteses de magnetorrecepção.']},
    ],
    takeaways:['Pombos usam mais de uma pista de navegação.','O efeito apareceu especialmente sem referência solar.','Magnetorrecepção ainda é campo ativo de pesquisa.'],
    sources:[{label:'Science · 2026',url:'https://doi.org/10.1126/science.ady2486'}],
  },
  tempo: {
    readingTime:'7 MIN', title:'Alta pressão, calor e ar seco: o mecanismo por trás do aquecimento em São Paulo', deck:'A previsão da semana não é apenas “vai fazer calor”: há um padrão atmosférico que favorece céu aberto, subsidência e pouca chuva.',
    opening:['Sob alta pressão, o ar tende a descer e aquecer, dificultando crescimento de nuvens profundas. Com mais sol chegando ao solo e pouca chuva, a tarde aquece e a umidade relativa cai.','Por isso calor e baixa umidade costumam aparecer juntos em episódios de bloqueio no inverno.'],
    sections:[
      {kicker:'SAÚDE',title:'A umidade baixa muda comportamento, não só conforto',paragraphs:['Hidratação, pausa em exercícios no pico da tarde e cuidado com pessoas vulneráveis são medidas simples. Ambientes muito secos também agravam desconforto respiratório.']},
      {kicker:'FOGO',title:'Vegetação seca amplia a consequência de uma faísca',paragraphs:['Sem chuva, a vegetação perde umidade. Isso reduz o limiar para ignição e facilita propagação, por isso queimadas e descarte de bitucas ganham risco adicional.']},
    ],
    takeaways:['Aquecimento continua ao longo da semana.','Máxima pode se aproximar de 34°C na quinta.','Baixa umidade é o principal cuidado associado.'],
    sources:[{label:'Folha / Inmet · 17/08/2026',url:'https://www1.folha.uol.com.br/cotidiano/2026/08/cidade-de-sao-paulo-deve-ter-calor-de-ate-34c-e-tempo-seco-ao-longo-da-semana.shtml'}],
  },
  curiosidades: {
    readingTime:'6 MIN', title:'O espelho e a falsa inversão lateral', deck:'O reflexo não escolhe esquerda e direita; ele aplica uma transformação geométrica em relação ao plano do espelho.',
    opening:['O paradoxo some quando abandonamos a ideia de que a imagem “virou de frente”. Um espelho relaciona cada ponto do objeto com outro ponto à mesma distância atrás da superfície.','Isso inverte a coordenada perpendicular ao espelho — frente/trás — e preserva as coordenadas paralelas.'],
    sections:[
      {kicker:'EXPERIMENTO',title:'Encoste uma seta no vidro',paragraphs:['Se uma seta aponta para cima, continua apontando para cima. Se aponta para sua direita, continua do mesmo lado espacial. Se aponta para o espelho, sua imagem aponta no sentido oposto ao longo do eixo frente/trás.']},
      {kicker:'CÉREBRO',title:'A “troca de lados” é uma comparação com uma rotação imaginada',paragraphs:['Para imaginar uma pessoa olhando para você, seu cérebro costuma girar mentalmente um corpo em torno do eixo vertical. Essa rotação troca esquerda/direita relativas — não o espelho.']},
    ],
    takeaways:['Espelho inverte profundidade, não lateralidade.','Letras parecem espelhadas por sua orientação frente/trás.','A intuição de rotação cria o paradoxo.'],
  },
  musica: {
    readingTime:'7 MIN', title:'Do silêncio pesado de Audioslave à saudade territorial da música caipira', deck:'Dois arquivos independentes permitem ouvir duas tradições sem transformar contraste em mistura.',
    opening:['Like a Stone usa dinâmica e espaço como parte do arranjo. Tristeza do Jeca transforma lugar, identidade e saudade em matéria narrativa.','A proposta do hub é justamente preservar as linguagens: Rock não invade o catálogo caipira e o Top 5 raiz continua como arquivo histórico.'],
    sections:[
      {kicker:'ROCK',title:'Menos notas também constroem peso',paragraphs:['A base de Audioslave deixa ar entre elementos. Esse espaço faz o vocal e os timbres de guitarra ganharem dimensão sem uma parede sonora constante.']},
      {kicker:'RAIZ',title:'Saudade pode ser de um modo de vida',paragraphs:['Na tradição caipira, nostalgia frequentemente inclui paisagem, trabalho, distância e pertencimento, não apenas relacionamento amoroso.']},
    ],
    takeaways:['Rock do dia: Like a Stone.','Raiz do dia: Tristeza do Jeca.','Top 5 histórico continua preservado.'],
  },
  games: {
    readingTime:'10 MIN', title:'Marvel’s Wolverine: separar confirmação de marketing antes de 15 de setembro', deck:'O jogo já tem data, personagens, compositor e pré-venda; a parte mais importante ainda não pode ser confirmada por trailer: como tudo isso funciona durante horas com o controle na mão.',
    opening:['A Insomniac mostrou material suficiente para entender tom e direção narrativa. Logan, Jean Grey, The Hand e Deathstrike compõem parte do tabuleiro anunciado.','Mas jogos são sistemas interativos. Cinemática, montagem de trailer e arte promocional não medem consistência de combate, performance ou variedade.'],
    sections:[
      {kicker:'CONFIRMADO',title:'15/09/2026, PS5 e uma campanha single-player no centro',paragraphs:['A data e a plataforma estão anunciadas oficialmente. David Fleming assina a música e a pré-venda já está aberta.']},
      {kicker:'CHECKLIST DE LANÇAMENTO',title:'O que realmente vale medir quando reviews saírem',paragraphs:['Frame rate e estabilidade, resposta do combate, variedade de inimigos, repetição de atividades, pacing narrativo, acessibilidade e qualidade técnica são sinais mais úteis que volume de hype.'],bullets:['Performance no PS5 base.','Modos gráficos disponíveis.','Duração e repetição de conteúdo.','Estado do jogo no patch de lançamento.']},
    ],
    callout:{label:'REGRA DO RADAR',title:'Wishlist é diferente de pré-venda',text:'Acompanhar um jogo pode fazer sentido sem assumir risco financeiro antes de reviews e performance final.'},
    takeaways:['Lançamento confirmado para 15/09.','Trailer revela história, não qualidade final.','Avaliação deve esperar software entregue.'],
    sources:[{label:'PlayStation Blog · 23/07/2026',url:'https://blog.playstation.com/2026/07/23/marvels-wolverine-story-trailer-new-art-composer-details-and-more/comment-page-2/'}],
  },
  gravidez: {
    readingTime:'9 MIN', title:'6s+2d: por que cansaço e frequência urinária podem aparecer tão cedo', deck:'O embrião ainda mede poucos milímetros, mas o organismo materno já está reorganizando metabolismo, hormônios e circulação.',
    opening:['Sintoma não acompanha “tamanho do bebê”. Mudanças sistêmicas começam cedo e podem ser intensas mesmo antes de qualquer mudança externa evidente.','Fadiga e idas frequentes ao banheiro são exemplos de adaptações que podem surgir no primeiro trimestre.'],
    sections:[
      {kicker:'ROTINA',title:'Descansar é uma resposta fisiológica, não falta de disposição',paragraphs:['Sono e fadiga variam muito entre pessoas e entre dias. Reduzir decisões e tarefas desnecessárias pode ser tão útil quanto simplesmente “mandar descansar”.']},
      {kicker:'SINAL DE ALERTA',title:'Urinar mais é diferente de dor ao urinar',paragraphs:['Frequência isolada pode ser comum. Ardor, dor, febre ou sangue exigem contato com profissional de saúde porque infecção urinária na gestação merece avaliação.']},
    ],
    takeaways:['6 semanas + 2 dias pela DPP de 11/04/2027.','Fadiga e frequência urinária podem ser comuns.','Sintomas urinários dolorosos não devem ser normalizados.'],
    sources:[{label:'NHS · Week 6',url:'https://www.nhs.uk/start-for-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-6/'}],
    disclaimer:'Material educativo; não substitui pré-natal ou avaliação médica.',
  },
  pai: {
    readingTime:'6 MIN', title:'Ownership doméstico: apoio que não cria uma nova tarefa de gerenciamento', deck:'Assumir uma responsabilidade inclui perceber, planejar, executar e repor — não apenas fazer quando alguém pede.',
    opening:['A carga mental aparece quando uma pessoa precisa ser o sistema de tickets da casa: detectar cada pendência, priorizar e cobrar.','Uma tarefa fixa sob responsabilidade de outra pessoa reduz essa fila invisível.'],
    sections:[
      {kicker:'MISSÃO',title:'Escolha um domínio pequeno e seja dono dele',paragraphs:['Pode ser jantar, louça, compras, limpeza de caixas dos gatos ou agenda de documentos. O importante é não exigir lembrete para começar.']},
      {kicker:'FEEDBACK',title:'Responsabilidade não significa rigidez',paragraphs:['Se cheiros, fadiga ou rotina mudarem durante a gestação, ajuste o modo de executar. Ownership é aliviar atrito, não defender um processo.']},
    ],
    takeaways:['Assuma uma tarefa completa.','Inclua reposição e planejamento.','Adapte sem transformar apoio em cobrança.'],
  },
  carros: {
    readingTime:'12 MIN', title:'Quatro usados até R$ 70 mil: transmissão e histórico definem o risco real', deck:'Cruze, Sentra, 2008 e Fiesta cabem no mesmo orçamento, mas têm arquiteturas e custos de manutenção bastante diferentes.',
    opening:['FIPE filtra preço. Ela não mostra se o CVT recebeu fluido adequado, se o arrefecimento foi negligenciado ou se a estrutura foi reparada.','O radar de hoje força quatro propostas diferentes dentro das regras >1.0 e ≤R$70 mil para comparar custo total, não apenas ficha técnica.'],
    sections:[
      {kicker:'AUTOMÁTICOS',title:'Cruze, Sentra e 2008 exigem teste de transmissão específico',paragraphs:['Automático convencional e CVT têm comportamento e manutenção diferentes. O teste deve ocorrer frio e quente, com scanner e histórico documental.']},
      {kicker:'MANUAL',title:'Fiesta 1.6 manual simplifica um dos maiores pontos de risco',paragraphs:['Ao escolher a versão manual, o radar evita o Powershift. Ainda assim, embreagem, arrefecimento, suspensão e estrutura precisam ser avaliados.']},
    ],
    takeaways:['Todos >1.0.','FIPE e média nacional abaixo de R$70 mil.','Histórico de transmissão é critério eliminatório nos automáticos.'],
    sources:[{label:'Webmotors · referências ago/2026',url:'https://www.webmotors.com.br/tabela-fipe'}],
  },
  motos: {
    readingTime:'11 MIN', title:'Cilindrada não organiza o uso: quatro motos, quatro missões', deck:'Uma Twister e uma NC 750X não são degraus da mesma escada; são ferramentas para rotinas diferentes.',
    opening:['Preço de compra aproxima motos que, na prática, têm seguro, pneus, peso, ergonomia e manutenção muito diferentes.','Por isso o radar começa pela missão: cidade, uso misto, naked leve ou viagem.'],
    sections:[
      {kicker:'CIDADE',title:'Twister privilegia previsibilidade de custo',paragraphs:['Rede ampla, ABS e consumíveis conhecidos tornam a 250 uma referência racional para uso diário.']},
      {kicker:'VIAGEM',title:'NC 750X recompensa quem realmente usa rodovia',paragraphs:['Torque, ergonomia e estabilidade justificam custos maiores quando a moto viaja. Em deslocamento urbano curto, peso e consumíveis podem ser desperdício.']},
    ],
    takeaways:['Compare missão antes de cilindrada.','Inspeção de queda é obrigatória em usada.','Seguro deve entrar no custo antes da compra.'],
    sources:[{label:'Webmotors · referências ago/2026',url:'https://www.webmotors.com.br/tabela-fipe'}],
  },
  mecanica: {
    readingTime:'8 MIN', title:'Ronco de rodagem: diagnóstico por padrão, não por palpite', deck:'Rolamento e pneu podem produzir sons parecidos; a solução é mudar condições controladamente e procurar o que acompanha cada variável.',
    opening:['Trocar rolamento “porque está roncando” é diagnóstico por associação. O som pode nascer de pneu serrilhado, rolamento, freio ou até transmissão.','Um bom teste muda velocidade, piso e carga lateral e observa qual variável altera o ruído.'],
    sections:[
      {kicker:'PNEU',title:'Desgaste em escamas cria uma assinatura tátil',paragraphs:['Passar a mão na banda de rodagem pode revelar degraus. Se houver irregularidade, investigue pressão, alinhamento, amortecedor e geometria antes de culpar apenas o rolamento.']},
      {kicker:'ROLAMENTO',title:'Carga lateral pode mudar o ronco',paragraphs:['Curvas suaves transferem carga entre lados. Mudança consistente do ruído é pista útil, mas o lado exato deve ser confirmado por inspeção segura.']},
    ],
    takeaways:['Ruído crescente com velocidade é pista, não diagnóstico.','Pneu serrilhado imita rolamento.','Cruze teste de rodagem com inspeção física.'],
  },
  nautica: {
    readingTime:'8 MIN', title:'Corrosão galvânica: proteger metal deixando outro metal ser consumido', deck:'O ânodo de sacrifício é um componente simples cujo funcionamento depende de química, contato elétrico e escolha correta do material.',
    opening:['Água funciona como eletrólito. Metais diferentes eletricamente conectados podem formar uma célula galvânica e um deles corrói preferencialmente.','O ânodo é projetado para ser esse elemento sacrificial antes que rabeta, eixo ou outros componentes caros sejam atacados.'],
    sections:[
      {kicker:'MATERIAL',title:'Zinco não é resposta universal',paragraphs:['Água doce, salobra e salgada mudam o ambiente eletroquímico. Alumínio, magnésio ou zinco devem seguir projeto e recomendação do fabricante.']},
      {kicker:'MANUTENÇÃO',title:'Ânodo intacto demais também pode ser suspeito',paragraphs:['Se não houver contato elétrico ou se ele tiver sido pintado, pode parecer “novo” justamente porque não está protegendo nada.']},
    ],
    takeaways:['Nunca pinte a superfície ativa do ânodo.','Garanta contato elétrico adequado.','Consumo anormal pode revelar outro problema.'],
  },
  viagens: {
    readingTime:'9 MIN', title:'Expoflora: orçamento do passeio começa antes do ingresso', deck:'Ingresso, estacionamento, alimentação e extras podem dobrar o custo de um dia se forem somados apenas na saída.',
    opening:['A Expoflora começa em dez dias. O lote atual ainda está anunciado até 19/08, então hoje é uma janela prática para planejar com preços publicados.','O evento mistura atrações incluídas e experiências pagas à parte; separar essas categorias evita surpresa.'],
    sections:[
      {kicker:'ORÇAMENTO',title:'Monte três linhas: entrada, logística e extras',paragraphs:['Entrada varia por data e categoria. Estacionamento antecipado e passeio ao campo de girassóis têm valores separados. Alimentação também deve entrar no teto antes da viagem.']},
      {kicker:'TEMPO',title:'Chegar cedo aumenta o valor do ingresso',paragraphs:['A programação vai das 9h às 19h. Quanto mais atividades incluídas você usa sem correria, menor o custo efetivo por hora da experiência.']},
    ],
    takeaways:['Evento de 28/08 a 27/09.','Lote atual anunciado até 19/08.','Confira preço novamente antes de pagar porque lotes mudam.'],
    sources:[{label:'Expoflora · ingressos',url:'https://expoflora.com.br/ingressos'}],
  },
  financas: {
    readingTime:'9 MIN', title:'A curva de juros conta várias histórias ao mesmo tempo', deck:'Uma taxa de 30 anos pode subir enquanto o mercado fica menos agressivo com a taxa curta porque prazo longo carrega inflação, fiscal, oferta e incerteza.',
    opening:['A expressão “os juros” simplifica algo que na prática é uma curva. Cada vencimento embute riscos diferentes.','No Treasury de 30 anos, a taxa atingiu 5,327%, nível não visto desde 2007, com petróleo, fiscal e emissão de dívida pesando no prêmio exigido.'],
    sections:[
      {kicker:'PRAZO',title:'Quanto mais longe, mais hipóteses precisam dar certo',paragraphs:['Investidor de 30 anos precisa precificar décadas de inflação, crescimento, política fiscal e liquidez. Isso aumenta a importância do prêmio de prazo.']},
      {kicker:'BOLSO',title:'Dívida longa também precisa de margem',paragraphs:['Em financiamento doméstico, olhe CET e custo total. Uma parcela que só cabe se juros futuros caírem já nasce dependente de uma previsão.']},
    ],
    takeaways:['30Y chegou a 5,327%.','Curto e longo podem andar em direções diferentes.','CET continua sendo a métrica prática para dívida pessoal.'],
    sources:[{label:'Reuters · 18/08/2026',url:'https://www.reuters.com/business/us-30-year-yields-hit-highest-level-since-2007-war-oil-worries-fester-2026-08-18/'}],
    disclaimer:'Conteúdo educacional; não é recomendação de investimento.',
  },
  tecnologia: {
    readingTime:'8 MIN', title:'TOPS é especificação; experiência de IA é sistema', deck:'NPU virou linha de ficha técnica, mas software precisa conseguir alimentar e usar o acelerador para o número virar desempenho.',
    opening:['TOPS mede trilhões de operações por segundo sob determinadas condições. Não informa sozinho latência de um modelo específico nem consumo total do sistema.','Copilot+ usa 40+ TOPS como requisito de classe, mas o ecossistema de runtime e modelos determina quanto dessa capacidade é aproveitado.'],
    sections:[
      {kicker:'BOTTLENECK',title:'Computação pode ficar esperando memória',paragraphs:['Mover pesos e ativações consome largura de banda e energia. Um acelerador com muitos TOPS pode ficar subutilizado se a memória ou o software não acompanhar.']},
      {kicker:'BENCHMARK',title:'Compare a tarefa que você realmente executa',paragraphs:['Transcrição, geração de imagem e LLM têm perfis diferentes. Benchmark por aplicativo, bateria e latência é mais útil que uma competição abstrata de TOPS.']},
    ],
    takeaways:['40+ TOPS é referência Copilot+.','TOPS não é benchmark universal.','Runtime, memória e modelo definem desempenho real.'],
    sources:[{label:'Microsoft Learn · NPUs',url:'https://learn.microsoft.com/pt-br/windows/ai/npu-devices/'}],
  },
  seguranca: {
    readingTime:'10 MIN', title:'Ransomware com auto-propagação: a corrida muda de host para rede', deck:'Quando o encryptor carrega múltiplos caminhos de movimento lateral, tempo de contenção e segmentação tornam-se parte central da recuperação.',
    opening:['Ransomware human-operated já buscava credenciais e lateral movement antes de criptografar. The Gentlemen adiciona um módulo explícito que tenta se espalhar por vários mecanismos.','Isso reduz o valor de uma defesa que detecta somente a etapa final de criptografia.'],
    sections:[
      {kicker:'BLAST RADIUS',title:'Uma credencial privilegiada pode multiplicar o incidente',paragraphs:['O malware pode reutilizar token de sessão ou credenciais fornecidas para tentar execução remota. Privilégio mínimo e contas administrativas separadas reduzem caminhos disponíveis.']},
      {kicker:'DETECÇÃO',title:'Procure comportamento lateral antes da nota de resgate',paragraphs:['Criação anormal de shares, tarefas agendadas remotas, PsExec/WMI e desativação de controles são sinais que podem aparecer antes do impacto total.']},
    ],
    callout:{label:'IR',title:'Isolar identidade e rede, não só endpoint',text:'Se houver propagação, bloquear um host sem rotacionar credenciais e limitar comunicação lateral pode deixar o caminho aberto.'},
    takeaways:['Storm-2697 opera o RaaS segundo a Microsoft.','O encryptor é escrito em Go.','Segmentação e controle de privilégio reduzem blast radius.'],
    sources:[{label:'Microsoft Threat Intelligence · 28/05/2026',url:'https://www.microsoft.com/en-us/security/blog/2026/05/28/the-gentlemen-ransomware-dissecting-a-self-propagating-go-encryptor/'}],
  },
  'appsec-ssdlc': {
    readingTime:'10 MIN', title:'Budget de recursos é requisito de segurança da API', deck:'Rate limiting é uma camada; API4 exige pensar em custo por operação, volume por resposta e dinheiro gasto com serviços externos.',
    opening:['Uma requisição pode ser perfeitamente válida do ponto de vista de autenticação e schema e ainda custar memória, CPU ou dinheiro demais.','Por isso limites precisam morar no contrato da API e nos testes, não apenas no autoscaling da infraestrutura.'],
    sections:[
      {kicker:'DESIGN',title:'Defina o teto antes do atacante',paragraphs:['Max upload, page size, batch size, timeout, concorrência e chamadas pagas precisam de defaults seguros. Endpoint sem teto explícito cria uma dimensão aberta de abuso.']},
      {kicker:'PIPELINE',title:'Teste o erro, não só o caminho feliz',paragraphs:['Testes de segurança devem enviar payload acima do máximo, batch exagerado e bursts controlados e validar resposta previsível sem degradação sistêmica.'],bullets:['413/4xx para payload fora do contrato.','Paginação limitada server-side.','Rate limit por fluxo sensível.','Budget e alerta de custo para terceiros.']},
    ],
    callout:{label:'SECURITY GATE',title:'Limite ausente pode ser bloqueador mesmo sem CVE',text:'Uma falha de design que permite DoS ou explosão de custo é risco operacional real e deve entrar nos critérios do gate.'},
    takeaways:['API4 vai além de requests por segundo.','Limites precisam ser server-side.','Gate pode testar resource budgets automaticamente.'],
    sources:[{label:'OWASP API4:2023',url:'https://owasp.org/API-Security/editions/2023/en/0xa4-unrestricted-resource-consumption/'}],
  },
};
