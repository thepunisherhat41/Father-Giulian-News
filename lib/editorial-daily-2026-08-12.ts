import type { EditorialDossier } from './editorial-dossier-types';

export const editorialDaily20260812: Record<string, EditorialDossier> = {
  brasil: {
    readingTime: '9 MIN DE LEITURA',
    title: 'O limite do Pix é o “blast radius” da sua conta bancária',
    deck: 'Segurança financeira não começa quando o golpe acontece. Começa ao decidir quanto dinheiro um único aparelho consegue movimentar antes de qualquer incidente.',
    opening: [
      'Imagine duas pessoas com o mesmo saldo bancário, o mesmo celular e a mesma senha. Uma permite transferir R$ 20 mil por Pix; a outra limita operações cotidianas a valores muito menores e só aumenta quando precisa. Se ambos os aparelhos forem comprometidos, a tecnologia de autenticação pode ser igual — mas o impacto possível não é.',
      'Essa é uma ideia muito parecida com blast radius em segurança: não basta tentar impedir a invasão; você também reduz o quanto um único comprometimento consegue destruir.',
    ],
    sections: [
      { kicker: 'CONTROLE', title: 'Por que o Banco Central torna redução imediata e aumento mais lento', paragraphs: ['A assimetria é intencional. Reduzir limite precisa ser fácil porque diminui risco. Aumentar exige análise e espera porque um invasor que acabou de obter acesso não deveria conseguir transformar uma conta de baixo limite em uma conta de alta movimentação no mesmo minuto.', 'Esse atraso é uma forma de segurança por fricção: um pequeno inconveniente em situação normal cria tempo de reação quando algo anormal acontece.'] },
      { kicker: 'ARQUITETURA PESSOAL', title: 'Segurança de conta é um conjunto de camadas', paragraphs: ['Biometria, senha forte, bloqueio de tela, aparelho cadastrado, limite noturno, alertas e limite por recebedor não concorrem entre si. Eles se complementam.', 'Uma barreira pode falhar. O objetivo é fazer com que uma falha não entregue imediatamente a capacidade máxima da conta.'], bullets: ['Limite reduz impacto.', 'Notificação reduz tempo de detecção.', 'Dispositivo cadastrado reduz abuso de novo aparelho.', 'Bloqueio forte dificulta acesso local.', 'Contato rápido com o banco reduz persistência do incidente.'] },
      { kicker: 'AÇÃO', title: 'Uma configuração que vale revisar hoje', paragraphs: ['Entre no aplicativo e responda: “qual é o maior Pix que eu realmente preciso fazer sem planejamento?”. Se a resposta for muito menor que seu limite atual, existe espaço para reduzir exposição sem atrapalhar sua vida.', 'Quando surgir uma compra excepcional, você pode solicitar aumento com antecedência — exatamente o comportamento que o desenho de segurança incentiva.'] },
    ],
    callout: { label: 'IDEIA CENTRAL', title: 'Segurança também é limitar capacidade legítima', text: 'O golpe mais difícil de monetizar é aquele que, mesmo após acesso, encontra pouco espaço para movimentar dinheiro rapidamente.' },
    takeaways: ['Reduzir limite Pix é imediato; aumentar pode levar 24–48h.', 'Limite é uma ferramenta de contenção, não apenas conveniência.', 'Revise também dispositivos cadastrados e recebedores com limites especiais.'],
    sources: [
      { label: 'Banco Central · Alteração dos limites Pix', url: 'https://www.bcb.gov.br/meubc/faqs/p/alteracao-dos-limites-de-valor-nas-transacoes-pix' },
      { label: 'Banco Central · Segurança no Pix', url: 'https://www.bcb.gov.br/estabilidadefinanceira/pix-seguranca' },
    ],
  },

  politica: {
    readingTime: '8 MIN DE LEITURA',
    title: 'Voto em trânsito: sua identidade eleitoral pode mudar de rota sem mudar de endereço',
    deck: 'A eleição acontece em um dia específico, mas a vida real inclui trabalho, viagem, doença na família e deslocamentos. O voto em trânsito existe para separar temporariamente onde você está de onde seu título está registrado.',
    opening: [
      'O título eleitoral é associado a um domicílio e a uma seção. Mas isso não significa que qualquer viagem no dia da eleição precise automaticamente virar ausência. A Justiça Eleitoral permite uma transferência temporária para locais habilitados.',
      'O detalhe mais interessante é que a geografia muda o conteúdo da urna: dentro do mesmo estado, sua representação estadual continua fazendo sentido; em outro estado, ela deixa de coincidir com a circunscrição de origem.',
    ],
    sections: [
      { kicker: 'REGRA', title: 'Mesmo estado e outro estado não são a mesma coisa', paragraphs: ['Se a habilitação for para outro município dentro do mesmo estado do domicílio eleitoral, o eleitor pode votar para presidente, governador, senador, deputado federal e deputado estadual. Se estiver em outro estado, vota apenas para presidente.', 'Isso mostra que cargos diferentes representam territórios diferentes. Presidente tem circunscrição nacional; os demais cargos listados dependem do estado.'] },
      { kicker: 'PRAZO', title: 'Por que existe uma janela para pedir', paragraphs: ['O sistema precisa saber antecipadamente quantos eleitores adicionais chegarão a cada local e preparar seções com capacidade. Em 2026, a habilitação vai até 20 de agosto, e os TREs podem atualizar a disponibilidade de locais até essa data.'] },
      { kicker: 'LEITURA POLÍTICA', title: 'Entender o cargo evita comparar promessas incompatíveis', paragraphs: ['Uma boa leitura de campanha começa perguntando se o candidato tem poder institucional sobre o que promete. Presidente, governador, senador e deputados ocupam funções diferentes.', 'Antes de julgar uma promessa, pergunte: é competência executiva, legislativa, estadual, federal ou municipal? Essa pergunta simples elimina boa parte da confusão política cotidiana.'] },
    ],
    callout: { label: 'SERVIÇO', title: 'Até 20 de agosto', text: 'A solicitação pode ser feita pelo Autoatendimento Eleitoral ou em cartório, para eleitores com situação regular.' },
    takeaways: ['Voto em trânsito é uma transferência temporária, não mudança de domicílio.', 'Em outro estado, o voto em trânsito é apenas para presidente.', 'Competência do cargo é uma lente essencial para avaliar promessas eleitorais.'],
    sources: [
      { label: 'TSE · Voto em trânsito — perguntas e respostas', url: 'https://www.tse.jus.br/eleicoes/eleicoes-2026-content/voto-em-transito-perguntas-e-respostas' },
    ],
  },

  mundo: {
    readingTime: '10 MIN DE LEITURA',
    title: 'Os “chokepoints” são as portas estreitas da globalização',
    deck: 'O planeta parece enorme no mapa, mas uma parte surpreendente do comércio depende de poucos corredores marítimos. Quando um deles fica perigoso, a economia mundial descobre que sua rede tem gargalos físicos.',
    opening: [
      'Um navio pode atravessar oceanos, mas não pode escolher qualquer linha reta entre dois portos. Continentes, canais, estreitos e calados comprimem fluxos em pontos específicos. Bab al-Mandeb, Suez, Hormuz e os estreitos asiáticos funcionam como portas de uma infraestrutura global.',
      'É por isso que um ataque a uma embarcação a milhares de quilômetros do Brasil pode aparecer semanas depois em prêmio de seguro, combustível marítimo, prazo de importação e custo de estoque.',
    ],
    sections: [
      { kicker: 'LOGÍSTICA', title: 'Desviar não significa apenas virar o leme', paragraphs: ['Quando uma rota deixa de ser segura, desviar pode acrescentar milhares de quilômetros. Isso aumenta dias de tripulação, combustível, ocupação do navio e tempo em que a carga permanece imobilizada.', 'Além do frete, há custo de oportunidade: o mesmo navio demora mais para ficar disponível para a próxima viagem.'] },
      { kicker: 'RISCO', title: 'Seguro transforma guerra em preço antes mesmo da escassez', paragraphs: ['Mesmo quando um produto continua disponível, o risco de transitar por uma zona de conflito pode elevar seguro de guerra e exigências operacionais. O mercado começa a precificar a possibilidade de perda antes de uma interrupção total acontecer.'] },
      { kicker: 'CONEXÃO', title: 'Taiwan mostra que rota e indústria podem estar no mesmo lugar', paragraphs: ['No Leste Asiático, o risco não envolve apenas passar navios: envolve cadeias industriais de alto valor, especialmente eletrônica e semicondutores. Geopolítica marítima e tecnologia deixam de ser assuntos separados.'] },
    ],
    callout: { label: 'PARA OBSERVAR', title: 'Não olhe só o preço do petróleo', text: 'Quando o risco marítimo aumenta, acompanhe também frete, seguro, tempo de trânsito e disponibilidade de navios.' },
    takeaways: ['Rotas marítimas possuem gargalos físicos difíceis de substituir rapidamente.', 'Risco pode encarecer logística antes de provocar falta de produto.', 'Conflitos distantes se conectam ao Brasil por energia, câmbio e cadeias de suprimento.'],
    sources: [
      { label: 'Reuters · Morning Bid · 12/08/2026', url: 'https://www.reuters.com/world/china/global-markets-view-europe-2026-08-12/' },
    ],
  },

  planeta: {
    readingTime: '10 MIN DE LEITURA',
    title: 'Debaixo dos seus pés existe um arquivo de chuva com milhares de anos',
    deck: 'Aquíferos não guardam apenas água: guardam tempo. A idade de uma molécula subterrânea ajuda cientistas a reconstruir recarga, vulnerabilidade e até o tipo de contaminante que pode aparecer em um poço.',
    opening: [
      'Quando chove, parte da água corre pela superfície, parte evapora e parte infiltra. A fração que continua descendo pode alcançar a zona saturada e começar uma viagem tão lenta que ultrapassa muitas gerações humanas.',
      'Isso muda a intuição de que toda água “se renova” rapidamente. Alguns reservatórios subterrâneos podem ser explorados em uma velocidade muito maior que sua reposição natural.',
    ],
    sections: [
      { kicker: 'GEOLOGIA', title: 'A esponja subterrânea', paragraphs: ['Aquíferos são camadas de rocha, areia ou cascalho cujos poros e fraturas conseguem armazenar e transmitir água. Não é necessário haver uma caverna cheia ou um grande rio subterrâneo.', 'A geometria dos poros determina tanto volume quanto velocidade de movimento.'] },
      { kicker: 'RELÓGIO', title: 'Como se mede a idade de água que não tem data de fabricação', paragraphs: ['Pesquisadores usam traçadores químicos e isotópicos. Tritium, CFCs e SF6 ajudam a identificar água relativamente recente; carbono-14 alcança milhares de anos; outros isótopos permitem investigar águas muito mais antigas.', 'Um poço frequentemente mistura águas de idades diferentes, então a resposta pode ser uma distribuição, não um número único.'] },
      { kicker: 'GESTÃO', title: 'O tempo de recarga define o quanto um aquífero perdoa erros', paragraphs: ['Se um reservatório leva séculos para se renovar, extração excessiva não é corrigida em uma estação chuvosa. Da mesma forma, um contaminante pode viajar lentamente e surgir anos depois do evento que o introduziu.'] },
    ],
    callout: { label: 'MUDANÇA DE PERSPECTIVA', title: 'Água subterrânea também é recurso temporal', text: 'Não basta saber quanto existe. É preciso saber quanto tempo levou para chegar ali — e quanto demorará para ser reposto.' },
    takeaways: ['Aquífero é água em poros e fraturas, não necessariamente um rio subterrâneo.', 'Água subterrânea pode ter de dias a centenas de milhares de anos.', 'Idade ajuda a prever vulnerabilidade e qualidade química.'],
    sources: [
      { label: 'USGS · Groundwater Age', url: 'https://www.usgs.gov/mission-areas/water-resources/science/groundwater-age' },
      { label: 'USGS · What is groundwater?', url: 'https://www.usgs.gov/faqs/what-groundwater' },
    ],
  },

  animais: {
    readingTime: '9 MIN DE LEITURA',
    title: 'Se um elefante chama outro por um som específico, onde começa um “nome”?',
    deck: 'A descoberta de chamadas individualmente específicas em elefantes abre uma pergunta fascinante: quantas peças da linguagem humana existem separadamente em outras espécies?',
    opening: [
      'Nós usamos nomes como rótulos arbitrários: “Giulian” não imita o som que você produz. Esse detalhe parece banal, mas é uma ferramenta poderosa de linguagem — permite falar diretamente com alguém sem precisar descrever essa pessoa.',
      'Elefantes-africanos ofereceram aos pesquisadores um caso raro de algo funcionalmente parecido. As chamadas continham informação sobre quem era o destinatário e os animais reagiram de forma mais forte a vocalizações originalmente dirigidas a eles.',
    ],
    sections: [
      { kicker: 'EXPERIMENTO', title: 'Machine learning sozinho não seria suficiente', paragraphs: ['O algoritmo mostrou que havia estrutura acústica associada ao receptor. Mas correlação em gravações poderia ter várias explicações. Por isso o playback foi importante: reproduzir chamadas para os próprios elefantes testou se a diferença tinha significado comportamental.'] },
      { kicker: 'LINGUAGEM', title: '“Parecido com nome” é mais preciso que “eles têm nomes”', paragraphs: ['O estudo não prova que elefantes possuem nomes, gramática e semântica equivalentes às humanas. Ele identifica um mecanismo de endereçamento individual que compartilha uma função com nomes.', 'Boa divulgação científica preserva exatamente essa margem entre evidência e interpretação.'] },
      { kicker: 'SOCIEDADE', title: 'Talvez a complexidade social crie pressão para identificar indivíduos', paragraphs: ['Elefantes vivem em redes sociais ricas, mantêm vínculos por longos períodos e podem se comunicar a distância. Em um grupo onde “quem” importa muito, mecanismos para direcionar comunicação têm enorme valor.'] },
    ],
    callout: { label: 'PERGUNTA BOA', title: 'O que é linguagem?', text: 'Em vez de perguntar se um animal “fala como nós”, é mais produtivo investigar quais componentes — referência, aprendizado, turn-taking, memória social — aparecem em cada espécie.' },
    takeaways: ['Chamadas de elefantes carregam informação específica sobre o destinatário.', 'Experimentos de playback reforçaram que os animais reconheciam esse direcionamento.', 'O achado é um análogo de nome, não uma equivalência completa com linguagem humana.'],
    sources: [
      { label: 'Nature Ecology & Evolution · Pardo et al.', url: 'https://www.nature.com/articles/s41559-024-02420-w' },
    ],
  },

  tempo: {
    readingTime: '9 MIN DE LEITURA',
    title: 'Um rio atmosférico é uma tubulação de vapor construída pelo próprio vento',
    deck: 'A chuva que cai em um lugar pode ter começado como evaporação a milhares de quilômetros dali. Rios atmosféricos são a esteira que conecta essas duas partes do ciclo da água.',
    opening: [
      'Olhar para uma nuvem dá a impressão de que a água da chuva “estava ali”. Na verdade, sistemas meteorológicos transportam umidade em enormes corredores invisíveis antes de ela condensar.',
      'Um rio atmosférico pode atravessar uma escala continental. Ele não é formado por água líquida flutuando, mas por vapor concentrado e transportado pelos ventos.',
    ],
    sections: [
      { kicker: 'FORMAÇÃO', title: 'Evaporação fornece água; vento fornece direção', paragraphs: ['Áreas quentes e úmidas alimentam a atmosfera com vapor. Sistemas de pressão e circulação organizam esse vapor em faixas estreitas. Quando o corredor encontra uma costa, frente fria ou montanha, a história muda.'] },
      { kicker: 'OROGRAFIA', title: 'Montanhas espremem o rio do céu', paragraphs: ['Ar forçado a subir expande e esfria. O vapor condensa e forma precipitação. Por isso relevo é uma parte crítica da previsão de chuva intensa associada a rios atmosféricos.'] },
      { kicker: 'DUPLA FACE', title: 'O fenômeno que causa enchente também abastece reservatório', paragraphs: ['Eventos moderados podem entregar água essencial para neve, rios e reservatórios. Os mais intensos, especialmente sobre solos saturados, podem provocar enchentes e deslizamentos.', 'Meteorologia de risco não classifica um fenômeno como “bom” ou “ruim”; considera intensidade, duração, local e vulnerabilidade.'] },
    ],
    callout: { label: 'IMAGEM MENTAL', title: 'Pense em uma mangueira de vapor', text: 'O vento transporta a umidade; relevo e sistemas meteorológicos decidem onde essa “mangueira” vai descarregar.' },
    takeaways: ['Rios atmosféricos transportam vapor, não água líquida.', 'Podem ter mais de 1.600 km de comprimento.', 'O mesmo fenômeno pode aliviar seca ou produzir desastre, dependendo do contexto.'],
    sources: [
      { label: 'NOAA NESDIS · Atmospheric Rivers', url: 'https://www.nesdis.noaa.gov/about/k-12-education/atmosphere/what-atmospheric-river' },
    ],
  },

  curiosidades: {
    readingTime: '8 MIN DE LEITURA',
    title: 'Sua mão não é um termômetro — e a colher de metal prova isso',
    deck: 'Temperatura descreve um estado. Sensação térmica ao toque descreve uma troca. Confundir as duas coisas explica vários “paradoxos” do cotidiano.',
    opening: [
      'Você entra numa sala e toca madeira, tecido e metal. Todos ficaram horas no mesmo ambiente, então estão praticamente na mesma temperatura. Ainda assim, o metal parece muito mais frio.',
      'A diferença está no que acontece depois do contato: seu corpo perde calor para cada material em velocidades diferentes.',
    ],
    sections: [
      { kicker: 'FÍSICA', title: 'Condutividade mede facilidade de transportar calor', paragraphs: ['Metais têm condutividade térmica muito maior que madeira. Eles conseguem afastar rapidamente o calor da região em contato com sua mão, mantendo uma grande diferença de temperatura local e acelerando a transferência.', 'A madeira conduz pouco. A superfície em contato aquece e a transferência diminui rapidamente.'] },
      { kicker: 'PERCEPÇÃO', title: 'Receptores detectam mudança, não consultam uma tabela de Celsius', paragraphs: ['Seu sistema sensorial responde à temperatura da pele e à velocidade com que ela muda. Por isso a experiência subjetiva depende do material, do tempo de contato e do estado da sua mão.', 'É também por isso que tocar um objeto não é uma forma confiável de medir sua temperatura absoluta.'] },
      { kicker: 'COTIDIANO', title: 'A mesma física está em panela, isolamento e arquitetura', paragraphs: ['Panelas exploram condutividade para espalhar calor. Cabos isolantes fazem o contrário. Em prédios, elementos metálicos podem criar pontes térmicas que transferem energia através da envoltória com muito mais facilidade que o isolamento ao redor.'] },
    ],
    callout: { label: 'PALAVRA DO DIA', title: 'Amiúde', text: 'Significa “frequentemente, muitas vezes”. Exemplo: “Esse erro aparece amiúde quando confundimos sensação térmica com temperatura.”' },
    takeaways: ['Objetos no mesmo ambiente podem ter a mesma temperatura e sensações muito diferentes.', 'Metal parece mais frio porque retira calor da pele mais depressa.', 'Sensação ao toque mede uma interação entre corpo e material.'],
    sources: [
      { label: 'NIST · Fire Dynamics · Thermal Conductivity', url: 'https://www.nist.gov/el/fire-research-division-73300/firegov-fire-service/fire-dynamics' },
    ],
  },

  gravidez: {
    readingTime: '10 MIN DE LEITURA',
    title: 'A fase em que quase nada aparece por fora e quase tudo começa por dentro',
    deck: 'Com 5 semanas e 3 dias, o valor da informação está em entender escala: estruturas microscópicas estão estabelecendo o plano inicial de sistemas que depois crescerão durante meses.',
    opening: [
      'É fácil imaginar desenvolvimento fetal como uma sequência de partes ficando maiores. No início, porém, o processo é mais parecido com construção de um mapa: células recebem sinais, mudam de posição, formam camadas e começam a definir estruturas precursoras.',
      'Por isso as primeiras semanas têm importância desproporcional ao tamanho do embrião. O que está sendo estabelecido agora não precisa ser visível para ser biologicamente relevante.',
    ],
    sections: [
      { kicker: 'SISTEMA NERVOSO', title: 'O tubo neural começa cedo porque cérebro e medula precisam de uma arquitetura comum', paragraphs: ['A estrutura embrionária que dará origem ao cérebro e à medula se forma e fecha muito cedo na gestação. É uma das razões pelas quais recomendações de folato/ácido fólico são pensadas para antes e durante o começo da gravidez.', 'Isso não significa que uma gestante precise “controlar” cada processo. Desenvolvimento embrionário é biologia, não uma prova de desempenho parental.'] },
      { kicker: 'NUTRIÇÃO', title: 'Alimento e suplemento cumprem papéis relacionados, mas não idênticos', paragraphs: ['Uma dieta variada oferece folato e muitos outros nutrientes. O ácido fólico, por sua vez, é a forma usada em suplementos e fortificação com evidência específica na prevenção de defeitos do tubo neural.', 'A dose individual deve seguir o pré-natal, especialmente quando existem condições médicas ou medicamentos que alteram recomendações.'] },
      { kicker: 'ROTINA', title: 'O objetivo agora é reduzir risco evitável, não perseguir perfeição', paragraphs: ['Pré-natal, revisão de medicamentos, alimentação segura, ausência de álcool e orientação profissional têm muito mais valor do que listas intermináveis de proibições sem contexto.', 'Sintomas variam muito. Informação online não deve ser usada para diagnosticar evolução da gestação.'] },
    ],
    callout: { label: 'PARA O CASAL', title: 'Anotem dúvidas, não pesquisem compulsivamente cada sensação', text: 'Um registro simples melhora a consulta e reduz a tendência de transformar cada mudança corporal em uma conclusão médica.' },
    takeaways: ['O tubo neural se desenvolve muito cedo.', 'Ácido fólico tem evidência específica na prevenção de defeitos do tubo neural.', 'Suplementação individual deve seguir o pré-natal.'],
    sources: [
      { label: 'CDC · Folic Acid · 2026', url: 'https://www.cdc.gov/folic-acid/about/intake-and-sources.html' },
      { label: 'CDC · Neural Tube Defects', url: 'https://www.cdc.gov/birth-defects/about/neural-tube-defects.html' },
    ],
    disclaimer: 'Informação educativa; não substitui obstetra, ultrassom, exames ou avaliação clínica.',
  },

  pai: {
    readingTime: '9 MIN DE LEITURA',
    title: 'A carga mental começa antes do bebê — e pode ser dividida antes do bebê também',
    deck: 'Participar não é esperar receber tarefas. É conhecer o sistema da família o suficiente para perceber o que precisa acontecer sem transformar a outra pessoa em gerente.',
    opening: [
      'Há uma diferença grande entre executar uma tarefa e ser responsável por lembrar que ela existe. Marcar consulta é uma tarefa; acompanhar quando é a consulta, quais documentos levar, o que perguntar e o que fazer depois é carga mental.',
      'Na gravidez, essa camada invisível cresce: exames, alimentação, sintomas, compras, conversas familiares e decisões futuras. Uma paternidade ativa pode começar simplesmente tirando parte disso de uma única cabeça.',
    ],
    sections: [
      { kicker: 'FERRAMENTA', title: 'Crie memória externa compartilhada', paragraphs: ['Um documento, caderno ou nota compartilhada funciona como um “segundo cérebro” do casal. Quando algo é registrado, ninguém precisa guardar sozinho.', 'O ganho não é produtividade corporativa; é reduzir atrito e aumentar presença nas decisões.'] },
      { kicker: 'COMUNICAÇÃO', title: 'Troque “me fala o que eu faço” por perguntas que assumem responsabilidade', paragraphs: ['“Qual parte posso assumir por completo?” é diferente de “quer ajuda?”. A primeira pergunta reconhece que existe trabalho contínuo; a segunda pode exigir que a gestante ainda identifique, explique e fiscalize a tarefa.'] },
      { kicker: 'VÍNCULO', title: 'Participação antes do nascimento cria contexto para depois', paragraphs: ['Conhecer o pré-natal, preferências, receios e rotina ajuda o pai a entrar no pós-parto já entendendo a história, em vez de começar do zero quando o cansaço estiver maior.'] },
    ],
    callout: { label: 'MISSÃO', title: 'Hoje: 10 minutos', text: 'Crie uma nota com próximas consultas, exames, dúvidas para o obstetra e três responsabilidades que você pode assumir sem depender de lembrete.' },
    takeaways: ['Carga mental é lembrar, planejar e coordenar — não só executar.', 'Memória compartilhada reduz dependência de uma única pessoa.', 'Paternidade ativa começa antes do nascimento.'],
    sources: [
      { label: 'UNICEF Parenting · Fathers and babies', url: 'https://www.unicef.org/parenting/child-care/relationship-between-father-and-baby' },
    ],
  },

  carros: {
    readingTime: '11 MIN DE LEITURA',
    title: 'O melhor carro de R$ 55 mil pode ser o exemplar “mais caro” do anúncio',
    deck: 'Em usados, preço de compra é apenas a primeira linha da conta. Um carro R$ 3 mil mais barato pode devolver essa diferença em pneus, embreagem, suspensão e manutenção atrasada nas primeiras semanas.',
    opening: [
      'A tentação de filtrar anúncios pelo menor preço é enorme. Mas usados não são commodities: dois carros do mesmo ano e versão podem carregar anos de decisões diferentes de manutenção.',
      'O Etios 2017 é um bom laboratório porque cabe na faixa de R$ 30–60 mil em versões específicas e tem mercado suficiente para comparar referência FIPE, anúncios e estado do exemplar.',
    ],
    sections: [
      { kicker: 'PREÇO', title: 'FIPE é ponto de referência, não laudo de valor', paragraphs: ['A FIPE ajuda a ancorar comparação, mas não conhece a história daquele chassi. Cor, pneus, histórico de colisão, manutenção, região e procura mudam o preço real.', 'A média de anúncios também não é preço de fechamento: mostra expectativa de vendedores.'] },
      { kicker: 'KM', title: 'Quilometragem só faz sentido quando dividida pela história', paragraphs: ['Para um 2017 em 2026, 90–135 mil km corresponde aproximadamente a 10–15 mil km por ano. Isso não é “km ideal”: é apenas escala.', 'Um carro pode ter rodado pouco e passado anos sem trocar fluido; outro pode ter rodado muito em estrada com manutenção rigorosa. O odômetro é uma pista, não veredito.'] },
      { kicker: 'COMPRA', title: 'Monte um orçamento de entrada, não apenas um preço de compra', paragraphs: ['Some veículo + transferência + inspeção + revisão inicial + uma reserva para itens de desgaste. Se esse total ultrapassa seu teto, o carro já começou caro antes de dar defeito.'], bullets: ['Cautelar responde estrutura e histórico.', 'Mecânico responde condição atual.', 'Histórico responde disciplina passada.', 'Reserva responde imprevistos futuros.'] },
    ],
    callout: { label: 'REGRA DE OURO', title: 'Compre condição, não só modelo', text: 'Um bom modelo em estado ruim continua sendo um carro ruim para comprar.' },
    takeaways: ['FIPE não substitui inspeção.', 'Km precisa de contexto anual e documental.', 'Reserve dinheiro para colocar o usado em dia depois da compra.'],
    sources: [
      { label: 'Webmotors/FIPE · Etios X Sedan 2017', url: 'https://www.webmotors.com.br/tabela-fipe/carros/toyota/etios/2017/15-x-sedan-16v-flex-4p-manual' },
    ],
  },

  motos: {
    readingTime: '10 MIN DE LEITURA',
    title: 'Uma trail usada conta sua história nas extremidades antes de contar no motor',
    deck: 'Guidão, manetes, pedaleiras, bengalas, rodas e balança registram quedas e uso severo. Aprender a ler esses sinais transforma a inspeção de moto usada.',
    opening: [
      'Em carro, grande parte do conjunto mecânico e estrutural fica escondida. Na moto, muita história está exposta. Uma queda estacionária, uma trilha frequente ou um impacto forte deixam marcas diferentes.',
      'Isso não significa rejeitar qualquer moto com arranhão. Significa cruzar sinais para saber se o anúncio conta a mesma história que a máquina.',
    ],
    sections: [
      { kicker: 'GEOMETRIA', title: 'Alinhamento vale mais que brilho', paragraphs: ['Olhe guidão, mesa, bengalas e roda dianteira em conjunto. Uma moto muito polida pode esconder desalinhamento; uma moto com marcas cosméticas pode estar perfeitamente íntegra.', 'Folga na caixa de direção e vazamento em retentor de bengala são exemplos de itens que merecem inspeção objetiva.'] },
      { kicker: 'DESGASTE', title: 'Relação e pneus são um relatório de uso', paragraphs: ['Dentes de coroa muito afinados, corrente com pontos duros e pneus gastos de maneira irregular contam sobre manutenção e calibragem. Esses itens também entram imediatamente no custo pós-compra.'] },
      { kicker: 'MOTOR', title: 'Peça para ver a primeira partida do dia', paragraphs: ['Motor já quente elimina uma série de observações úteis. Partida fria ajuda a perceber dificuldade de pegar, ruídos de primeiros segundos, fumaça e comportamento da marcha lenta.', 'Nenhum desses sinais sozinho fecha diagnóstico; eles indicam onde aprofundar.'] },
    ],
    callout: { label: 'COMPRA INTELIGENTE', title: 'História coerente', text: 'Quando estado, km, documentos, desgaste e relato do vendedor combinam entre si, a confiança aumenta. Quando cada parte conta uma história diferente, investigue.' },
    takeaways: ['Trail usada deve ser lida também por sinais de queda e uso fora de estrada.', 'Partida fria é uma etapa valiosa da inspeção.', 'Itens de desgaste precisam entrar no preço real da compra.'],
    sources: [
      { label: 'Webmotors/FIPE · XRE 300 2017', url: 'https://www.webmotors.com.br/tabela-fipe/motos/honda/xre-300/2017' },
    ],
  },

  mecanica: {
    readingTime: '11 MIN DE LEITURA',
    title: 'O sistema de arrefecimento é um controle de temperatura, não uma mangueira gigante',
    deck: 'Radiador, bomba, termostato, ventoinha, sensor e tampa trabalham como um sistema. Diagnosticar superaquecimento exige descobrir qual função falhou — circulação, troca de calor, pressão, leitura ou controle.',
    opening: [
      'Quando o ponteiro sobe, é comum procurar uma peça culpada. Mas “motor quente” é o resultado final de um balanço: o motor produz calor e o sistema precisa transportá-lo e dissipá-lo na mesma velocidade.',
      'A válvula termostática é parte do controle. Removê-la muda o sistema inteiro e pode produzir um motor frio demais em certas condições sem corrigir a causa que o fazia aquecer em outras.',
    ],
    sections: [
      { kicker: 'LOOP', title: 'O termostato regula quando usar o radiador', paragraphs: ['Com o motor frio, ele mantém um circuito curto para acelerar aquecimento. Quando a temperatura sobe, abre progressivamente o caminho para o radiador.', 'A meta não é “deixar o líquido circular o máximo possível”; é manter temperatura estável na faixa de projeto.'] },
      { kicker: 'DIAGNÓSTICO', title: 'Superaquecimento tem uma árvore de hipóteses', paragraphs: ['Primeiro confirme se a leitura é verdadeira. Depois pense em ar: radiador limpo e ventoinha funcionando. Em seguida circulação: termostato, radiador e bomba. Por fim pressão: tampa e vazamentos.', 'Essa ordem evita trocar peças aleatoriamente.'] },
      { kicker: 'PRESSÃO', title: 'Por que o sistema não trabalha simplesmente com água aberta ao ar', paragraphs: ['Pressurizar eleva o ponto de ebulição do líquido. A tampa não é apenas uma tampa: ela participa do controle de pressão. Uma falha nela pode alterar comportamento térmico mesmo com radiador e bomba bons.'] },
    ],
    callout: { label: 'FRase PARA MEMORIZAR', title: 'Temperatura é variável controlada', text: 'O sistema não tenta deixar o motor “o mais frio possível”; tenta mantê-lo na faixa correta.' },
    takeaways: ['Termostato acelera aquecimento e controla fluxo ao radiador.', 'Diagnóstico começa confirmando a temperatura real.', 'Ventoinha, radiador, bomba, tampa e sensor fazem parte do mesmo sistema.'],
    sources: [
      { label: 'HELLA · Arrefecimento do motor', url: 'https://www.hella.com/techworld/pt/tecnica/arrefecimento/arrefecimento-do-motor/' },
      { label: 'HELLA · Cooling system troubleshooting', url: 'https://www.hella.com/techworld/ae/technical/car-cooling-system/cooling-system-check/' },
    ],
  },

  nautica: {
    readingTime: '11 MIN DE LEITURA',
    title: 'O melhor comandante é aquele que já decidiu onde desistir antes de precisar desistir',
    deck: 'Planejamento de navegação não é prever o futuro. É construir alternativas antes de vento, maré, visibilidade ou pane reduzirem sua capacidade de pensar com calma.',
    opening: [
      'Em terra, errar uma saída pode custar dez minutos. Na água, um erro de rota pode colocar a embarcação em banco de areia, área restrita, mar adverso ou longe de abrigo. Por isso navegação começa antes do motor.',
      'Um bom plano inclui não só destino, mas pontos de decisão: “se o tempo piorar até aqui, retorno”; “se combustível estiver abaixo disso, aborto”; “se perder comunicação, sigo para este abrigo”.',
    ],
    sections: [
      { kicker: 'ROTA', title: 'Carta e GPS respondem perguntas diferentes', paragraphs: ['O GPS informa posição. A carta dá contexto: profundidade, perigos, auxílios à navegação, canais e áreas relevantes. Uma coordenada precisa dentro de uma rota mal planejada continua sendo um problema.', 'Planejamento combina posição com entendimento do ambiente.'] },
      { kicker: 'COMUNICAÇÃO', title: 'Celular é conveniência; VHF é infraestrutura marítima', paragraphs: ['Cobertura celular pode desaparecer rapidamente na costa ou em áreas interiores. Rádio marítimo e conhecimento dos canais de socorro fazem parte da preparação compatível com o trecho navegado.'] },
      { kicker: 'SALVATAGEM', title: 'Equipamento só protege se combinar com a pessoa e com a viagem', paragraphs: ['Coletes precisam existir em quantidade e tamanho adequados. Lotação, primeiros socorros, estado do motor, bateria e combustível precisam conversar com a distância e a exposição planejadas.'] },
    ],
    callout: { label: 'ANTES DE SOLTAR', title: 'Defina o ponto de não insistência', text: 'Todo passeio melhora quando existe uma condição clara de retorno. Essa decisão é muito mais fácil no cais que sob vento e pressão.' },
    takeaways: ['GPS não substitui planejamento e conhecimento de carta.', 'Comunicação não deve depender apenas de celular.', 'Um plano bom contém alternativas e critérios de retorno.'],
    sources: [
      { label: 'Marinha do Brasil · Navegador Amador', url: 'https://www.marinha.mil.br/dpc/navegador-amador' },
      { label: 'DPC · Planejamento para habilitados', url: 'https://www.marinha.mil.br/dpc/node/3532' },
    ],
  },

  viagens: {
    readingTime: '10 MIN DE LEITURA',
    title: 'Paranapiacaba é uma aula de como infraestrutura vira patrimônio',
    deck: 'O passeio é interessante mesmo antes de chegar: ferrovia, serra, neblina, arquitetura e Mata Atlântica contam a mesma história sobre como São Paulo se conectou ao porto e ao comércio mundial.',
    opening: [
      'Paranapiacaba não nasceu porque alguém escolheu um lugar bonito para construir uma vila turística. Ela existe porque a ferrovia precisava vencer a Serra do Mar e ligar o interior paulista ao porto de Santos.',
      'Essa origem explica a arquitetura inglesa, a organização da vila e o protagonismo das estruturas ferroviárias. Visitar sabendo disso muda a experiência: cada construção deixa de ser cenário e vira peça de uma máquina logística histórica.',
    ],
    sections: [
      { kicker: 'IDA', title: 'O trem transforma deslocamento em parte do roteiro', paragraphs: ['O Expresso Turístico parte da Luz às 8h30 e retorna às 16h30. O serviço atual publica tarifa de R$ 50 ida e volta por passageiro, com pacotes para acompanhantes e regras de desconto.', 'Como os ingressos são limitados, o passeio exige planejamento de data.'] },
      { kicker: 'LÁ', title: 'História e natureza disputam o mesmo dia', paragraphs: ['Museus, casas históricas e paisagem ferroviária podem preencher um roteiro cultural. Trilhas e o Parque Natural Municipal Nascentes de Paranapiacaba puxam o passeio para a Mata Atlântica.', 'Tentar fazer tudo em poucas horas costuma ser pior que escolher um eixo principal.'] },
      { kicker: 'PRESERVAÇÃO', title: 'Patrimônio não se conserva sozinho', paragraphs: ['O investimento anunciado pelo Iphan em 2026 para restaurar 34 imóveis lembra que madeira, umidade, uso e tempo degradam estruturas. Preservar significa manter técnicas, financiar obras e garantir função social aos edifícios.'] },
    ],
    callout: { label: 'ROTEIRO SUGERIDO', title: 'Um dia sem correria', text: 'Trem → caminhada histórica → almoço → uma atração cultural → parque/trilha curta compatível com clima → retorno.' },
    takeaways: ['Paranapiacaba nasceu da necessidade ferroviária de vencer a Serra do Mar.', 'O Expresso Turístico transforma a viagem em parte do patrimônio.', 'Escolher história ou natureza como foco principal deixa o bate-volta mais agradável.'],
    sources: [
      { label: 'CPTM · Expresso Turístico', url: 'https://www.cptm.sp.gov.br/cptm/sua-viagem/expresso-turistico/' },
      { label: 'Iphan · Paranapiacaba · 2026', url: 'https://www.gov.br/iphan/pt-br/assuntos/noticias/iphan-anuncia-r-11-4-milhoes-para-restauracao-de-34-imoveis-em-paranapiacaba-e-lanca-livro-sobre-intervencoes-na-vila' },
    ],
  },

  financas: {
    readingTime: '10 MIN DE LEITURA',
    title: 'Crédito tem dois preços: o que dói por mês e o que custa no total',
    deck: 'A parcela responde se o compromisso cabe no fluxo de caixa. O CET e o total pago respondem quanto patrimônio você está entregando para comprar tempo. Você precisa das duas respostas.',
    opening: [
      'Uma prestação de R$ 780 parece mais leve que uma de R$ 1.050. Mas, se a primeira se repete por muito mais meses, ela pode ser a alternativa mais cara. Esse é um dos truques cognitivos do crédito: nosso cérebro sente o mês atual com mais força que o total futuro.',
      'O CET existe justamente para colocar custos diferentes na mesma régua.',
    ],
    sections: [
      { kicker: 'MEDIDA', title: 'CET não é sinônimo de taxa de juros', paragraphs: ['Ele incorpora juros, tarifas, impostos e outros custos obrigatórios da operação. Duas ofertas com taxa nominal semelhante podem produzir CET diferente.', 'Por isso comparar somente “1,8% ao mês” pode esconder diferenças reais.'] },
      { kicker: 'FLUXO', title: 'Uma parcela que cabe ainda pode deixar o orçamento frágil', paragraphs: ['Se a dívida consome toda a folga mensal, qualquer pneu, consulta, viagem ou reparo vira novo crédito. A capacidade de pagar hoje não é a mesma coisa que resiliência para pagar durante todo o contrato.'] },
      { kicker: 'DECISÃO', title: 'Antes de financiar, compare quatro números', bullets: ['Valor recebido ou preço à vista.', 'Entrada.', 'Valor da parcela × número de parcelas.', 'CET anual e total efetivamente pago.'], paragraphs: ['Depois faça uma quinta pergunta: qual problema estou resolvendo ao pagar esse custo financeiro?'] },
    ],
    callout: { label: 'MODELO MENTAL', title: 'Juro é o preço do tempo', text: 'Financiar antecipa consumo ou investimento. A pergunta é se o valor de antecipar supera o preço cobrado por esse tempo.' },
    takeaways: ['Parcela mede fluxo de caixa; CET mede custo da operação.', 'Prazo maior costuma reduzir parcela e aumentar exposição ao custo total.', 'Compare sempre o total pago, não apenas a mensalidade.'],
    sources: [
      { label: 'Banco Central · CET e contratação de crédito', url: 'https://www.bcb.gov.br/meubc/faqs/p/cuidados-na-hora-de-contratar-uma-operacao-de-credito' },
    ],
  },

  tecnologia: {
    readingTime: '11 MIN DE LEITURA',
    title: 'A nova corrida tecnológica não cabe dentro de um data center',
    deck: 'O plano sul-coreano junta Lua, reatores, quantum, biotecnologia e minerais críticos porque tecnologia avançada depende de uma cadeia que começa no subsolo e termina em software.',
    opening: [
      'Durante alguns anos, falar em “competição tecnológica” virou quase sinônimo de inteligência artificial e chips. O Seven Major SEED da Coreia do Sul amplia a lente: energia, materiais, espaço, biologia e computação são interdependentes.',
      'É uma visão de tecnologia como capacidade nacional, e não como uma lista de produtos digitais.',
    ],
    sections: [
      { kicker: 'ENERGIA', title: 'Compute precisa de eletricidade antes de precisar de algoritmo', paragraphs: ['Data centers, fábricas de chips e laboratórios avançados dependem de energia abundante e previsível. SMRs, renováveis e redes inteligentes aparecem no mesmo programa porque infraestrutura energética limita escala tecnológica.'] },
      { kicker: 'QUANTUM', title: '“100 qubits” sozinho não mede utilidade', paragraphs: ['Qubits variam em qualidade, erro, conectividade e arquitetura. A meta sul-coreana fala em processador doméstico com correção de erros — um detalhe mais importante que apenas somar qubits.', 'Metas governamentais devem ser lidas como direção de investimento, não cronograma garantido.'] },
      { kicker: 'MATERIAIS', title: 'A camada invisível da soberania tecnológica', paragraphs: ['Sem minerais críticos, materiais de alta pureza e equipamentos especializados, projetos de chips, baterias, energia e espaço ficam dependentes de fornecedores externos. A estratégia prevê diversificar origens e investir em processamento e reciclagem.'] },
    ],
    callout: { label: 'CONEXÃO', title: 'Software termina em átomos', text: 'Toda tecnologia “digital” depende de energia, materiais, fábricas, cabos, refrigeração e logística física.' },
    takeaways: ['Coreia do Sul está tratando tecnologias de fronteira como um stack integrado.', 'As datas são metas, não garantias.', 'Energia e materiais são parte da competição por IA e computação avançada.'],
    sources: [
      { label: 'Reuters · Seven Major SEED · 12/08/2026', url: 'https://www.reuters.com/world/asia-pacific/south-korea-unveils-future-technology-projects-targets-moon-landing-by-2030-2026-08-12/' },
    ],
  },

  seguranca: {
    readingTime: '12 MIN DE LEITURA',
    title: 'Golden SAML ensina uma lição desconfortável: às vezes a identidade inteira cabe numa chave privada',
    deck: 'Se aplicações confiam em um emissor de identidade porque ele assina assertions, a chave que produz essa assinatura é uma raiz de confiança. Comprometê-la muda a pergunta de “qual usuário foi invadido?” para “quem pode ser inventado?”.',
    opening: [
      'MFA é excelente para impedir que senha roubada vire login. Mas Golden SAML ataca outra camada: em vez de apresentar credenciais ao fluxo normal, o atacante fabrica um token assinado pela autoridade que o serviço já confia.',
      'Isso não torna MFA inútil. Mostra apenas que nenhum controle protege uma camada abaixo de sua própria raiz de confiança.',
    ],
    sections: [
      { kicker: 'FEDERAÇÃO', title: 'O provedor de serviço não conhece sua senha — ele confia na assinatura', paragraphs: ['Em SAML, a aplicação recebe assertions do Identity Provider. A assinatura prova que aquela identidade e aqueles claims vieram do emissor autorizado.', 'Se a chave privada do token-signing certificate é roubada, o atacante pode produzir uma prova criptográfica que parece legítima.'] },
      { kicker: 'GHOST', title: 'Configuração e estado criptográfico podem divergir', paragraphs: ['A pesquisa da Mandiant encontrou ambientes com rotação manual em que a base ADFS apontava para um certificado antigo enquanto a chave ativa estava no armazenamento criptográfico da máquina. Essa divergência cria dificuldades para inventário e resposta.', 'Event ID 385 pode sinalizar inconsistência em certos cenários de rotação.'] },
      { kicker: 'RESPOSTA', title: 'SYSTEM em ADFS deve ser tratado como incidente de identidade, não só de servidor', paragraphs: ['Se um invasor alcançou privilégios suficientes para extrair material de Machine DPAPI, restaurar apenas o host não encerra a pergunta. É necessário considerar a confiança federada, chaves de assinatura e aplicações que aceitam assertions desse ADFS.'], bullets: ['Rotacione material de assinatura quando houver suspeita aplicável.', 'Valide configuração, certificate store e metadata.', 'Correlacione logs ADFS e Entra/SaaS.', 'Considere HSM para reduzir extração de chave em software.'] },
    ],
    callout: { label: 'MODELO DE AMEAÇA', title: 'Credencial ≠ identidade', text: 'Senhas são uma forma de provar identidade. Chaves de federação podem controlar a própria autoridade que afirma quem você é.' },
    takeaways: ['Golden SAML ataca a confiança federada, não apenas credenciais de usuário.', 'ADFS deve ser tratado como Tier 0.', 'Resposta precisa incluir rotação e validação da cadeia de confiança.'],
    sources: [
      { label: 'Mandiant · Recovering Active ADFS Signing Keys via Machine DPAPI', url: 'https://cloud.google.com/blog/topics/threat-intelligence/recovering-active-adfs-signing-keys-machine-dpapi' },
    ],
  },

  'appsec-ssdlc': {
    readingTime: '12 MIN DE LEITURA',
    title: 'O CVSS diz quão feio o bug pode ser; não diz quão urgente ele é para você',
    deck: 'CVE-2026-20262 é uma aula de priorização contextual: 6.5 no papel, exploração confirmada, escrita arbitrária no filesystem, control plane de rede e ausência de workaround.',
    opening: [
      'Imagine duas vulnerabilidades. A primeira tem CVSS 9.8, está em uma biblioteca não alcançável, num serviço interno desativado. A segunda tem 6.5, existe no painel que controla sua rede, tem exploração observada e permite sobrescrever arquivos. Qual entra primeiro?',
      'O CVSS ajuda a responder “qual é a severidade técnica sob determinadas condições?”. O programa de AppSec precisa responder “qual é a prioridade operacional no meu ambiente?”.',
    ],
    sections: [
      { kicker: 'BUG', title: 'Input validation vira escrita no filesystem', paragraphs: ['No SD-WAN Manager, a falha está no processo de upload da web UI/API. Um usuário autenticado com permissão de escrita pode enviar uma requisição criada para controlar o caminho e criar ou sobrescrever arquivos.', 'A Cisco observa que o arquivo pode depois ser usado como etapa para elevar privilégio. Isso aumenta o valor da capacidade obtida.'] },
      { kicker: 'PRIORIZAÇÃO', title: 'Adicione contexto ao finding', paragraphs: ['Exploit status, internet exposure, credenciais necessárias, criticidade do ativo, capacidade obtida, workaround e blast radius transformam severidade em decisão.', '“Exploração limitada” não significa “irrelevante”; significa que a Cisco observou exploração em escala limitada, suficiente para eliminar a hipótese de que o bug é puramente teórico.'] },
      { kicker: 'GATE', title: 'O gate pode aprender a bloquear risco, não cor', paragraphs: ['Um modelo mais maduro poderia tratar “KEV/exploração + reachable + critical asset + no workaround” como condição de interrupção, mesmo quando a severidade base não é Critical.', 'O inverso também é valioso: um Critical comprovadamente não alcançável pode ir para remediação programada sem paralisar indiscriminadamente o fluxo.'] },
    ],
    callout: { label: 'FÓRMULA', title: 'Prioridade = severidade × contexto', text: 'CVSS + exploit status + exposição + criticidade + reachability + blast radius + mitigação disponível.' },
    takeaways: ['CVE-2026-20262 tem CVSS 6.5 e exploração limitada confirmada.', 'Escrita arbitrária em um control plane pode ter impacto desproporcional.', 'Gates maduros precisam de contexto além de severidade.'],
    sources: [
      { label: 'Cisco PSIRT · CVE-2026-20262', url: 'https://www.cisco.com/c/en/us/support/docs/csa/cisco-sa-sdwan-arbfw-c2rZvQ.html' },
    ],
  },
};
