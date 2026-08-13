import type { EditorialDossier } from './editorial-dossier-types';

export const editorialDaily20260813: Record<string, EditorialDossier> = {
  brasil: {
    readingTime: '11 MIN DE LEITURA',
    title: 'Seu celular não é só um aparelho: é uma chaveiro digital da sua vida',
    deck: 'Banco, e-mail, redes sociais, autenticação, documentos e conversas vivem no mesmo bolso. Preparar a resposta a um roubo antes do incidente é uma forma simples de reduzir o dano.',
    opening: [
      'O problema moderno do roubo de celular não é o preço do telefone. É a concentração de identidades. Um único aparelho pode abrir banco, redefinir senhas, receber códigos, acessar e-mail e revelar informações pessoais usadas em engenharia social.',
      'Por isso, segurança pessoal funciona melhor como arquitetura: impedir acesso, limitar capacidade, detectar rápido e ter um plano para bloquear o que ainda estiver funcionando.',
    ],
    sections: [
      { kicker: 'PREPARAÇÃO', title: 'O incidente começa antes do roubo', paragraphs: ['Se o IMEI, os canais de bloqueio e uma pessoa de confiança só forem descobertos depois do aparelho desaparecer, cada minuto vira pesquisa sob estresse. O Celular Seguro tenta transformar essa improvisação em um procedimento previamente configurado.', 'Cadastrar o aparelho e uma pessoa de confiança é semelhante a preparar uma conta de break-glass: você cria uma rota alternativa quando o canal principal — o próprio celular — não está disponível.'] },
      { kicker: 'DECISÃO', title: 'Modo Recuperação e Bloqueio Total têm objetivos diferentes', paragraphs: ['No Modo Recuperação, o IMEI permanece ativo para que a instalação de uma nova linha possa contribuir com a recuperação policial, enquanto linha e contas de parceiros são bloqueadas conforme os procedimentos do programa. No Bloqueio Total, o IMEI também é bloqueado.', 'A decisão mostra um trade-off clássico de segurança: maximizar inutilização imediata ou preservar uma possibilidade de recuperação.'] },
      { kicker: 'COMPRA USADA', title: 'Procedência também é segurança', paragraphs: ['O BNCR permite verificar restrições de roubo, furto ou extravio pelo IMEI. Para quem compra um telefone usado, essa consulta deve acontecer antes do pagamento, junto com conferência de nota, número de série, estado físico e titularidade quando aplicável.', 'Um preço atraente não compensa transformar uma compra em risco jurídico e financeiro.'] },
    ],
    callout: { label: 'AÇÃO DE HOJE', title: 'Faça um teste de 10 minutos', text: 'Descubra seu IMEI, cadastre o aparelho, escolha uma pessoa de confiança e confirme como bloquear seu banco e sua operadora sem usar o próprio celular.' },
    takeaways: ['O maior valor do celular pode estar nas identidades que ele carrega.', 'Resposta preparada é mais rápida que improvisação pós-roubo.', 'IMEI e procedência devem fazer parte de qualquer compra de aparelho usado.'],
    sources: [
      { label: 'MJSP · Celular Seguro', url: 'https://www.gov.br/mj/pt-br/acesso-a-informacao/acoes-e-programas/celular-seguro/celular-seguro/' },
      { label: 'MJSP · Levaram meu celular', url: 'https://www.gov.br/mj/pt-br/acesso-a-informacao/acoes-e-programas/sofri-um-golpe-e-agora/levaram-meu-celular/' },
    ],
  },

  politica: {
    readingTime: '10 MIN DE LEITURA',
    title: 'A eleição começa a ficar verificável quando a candidatura sai do discurso e entra no sistema oficial',
    deck: 'Convenção, registro, julgamento e campanha são etapas diferentes. Saber em qual delas um nome está evita tratar anúncio partidário como fato jurídico definitivo.',
    opening: [
      'Até meados de agosto, política eleitoral é cheia de verbos parecidos: lançar, apoiar, escolher, registrar, deferir. Na conversa cotidiana, eles acabam virando sinônimos. Para a Justiça Eleitoral, não são.',
      'A virada desta semana é justamente a passagem do mundo partidário para o mundo documental. Até 15 de agosto às 19h, pedidos precisam ser transmitidos; depois, os dados passam a ser acompanhados e julgados nos sistemas oficiais.',
    ],
    sections: [
      { kicker: 'PROCESSO', title: 'Quatro estados de uma candidatura', paragraphs: ['Um nome pode ter sido escolhido em convenção, ter pedido de registro apresentado, estar aguardando julgamento ou ter registro deferido/indeferido. Quando alguém diz “é candidato”, pergunte qual dessas situações está descrevendo.', 'Esse detalhe protege contra manchetes desatualizadas e contra material de campanha que omite a situação jurídica.'] },
      { kicker: 'SP', title: 'Os cargos que você vota não respondem ao mesmo problema', paragraphs: ['Presidente atua no Executivo federal. Governador, no Executivo estadual. Senador representa o estado no Senado. Deputados federais e estaduais legislam em esferas diferentes.', 'Uma boa comparação entre propostas começa pela competência institucional. Prometer resolver algo fora do alcance do cargo não torna a ideia automaticamente má — mas muda completamente sua viabilidade.'] },
      { kicker: 'FONTE', title: 'Troque o print pelo DivulgaCandContas', paragraphs: ['Após os registros, o DivulgaCandContas permite verificar dados oficiais de candidaturas e contas. Isso não elimina a necessidade de jornalismo e análise, mas cria um ponto de partida verificável.', 'Para quem acompanha SP, vale usar o sistema para comparar nomes, partido, situação, ocupação declarada e, conforme a campanha avança, receitas e despesas.'] },
    ],
    callout: { label: 'REGRA DE LEITURA', title: 'Anúncio não é registro; registro não é deferimento', text: 'Quando a página política usar um nome, ela deve mostrar também a situação conhecida e a data da verificação.' },
    takeaways: ['O prazo de registro termina em 15/08 às 19h.', 'Competência do cargo é uma lente melhor que slogan.', 'Dados oficiais são o ponto de partida para avaliar candidaturas.'],
    sources: [
      { label: 'TSE · Registro de candidatos', url: 'https://www.tse.jus.br/eleicoes/historia/processo-eleitoral-brasileiro/candidaturas/registro-de-candidatos' },
      { label: 'TSE · Resolução 23.609', url: 'https://www.tse.jus.br/legislacao/compilada/res/2019/resolucao-no-23-609-de-18-de-dezembro-de-2019' },
    ],
  },

  mundo: {
    readingTime: '10 MIN DE LEITURA',
    title: 'Um barril de petróleo tem quatro preços invisíveis: oferta, demanda, estoque e medo',
    deck: 'O recuo de hoje mostra por que “guerra = petróleo sobe” é uma explicação incompleta. O mercado tenta conciliar estoques, consumo, rotas e risco geopolítico em um único número que muda o tempo inteiro.',
    opening: [
      'Ontem o petróleo estava sendo empurrado por tensão geopolítica. Hoje, estoques americanos maiores e sinais de demanda mais fraca puxaram na direção oposta. Nenhum dos fatores desapareceu; apenas mudou o peso relativo atribuído a cada um.',
      'É uma boa aula sobre mercados: preço não é uma opinião moral sobre o mundo. É uma síntese imperfeita das expectativas de compradores e vendedores sobre o futuro próximo.',
    ],
    sections: [
      { kicker: 'ESTOQUE', title: 'Um grande aumento de inventário muda a sensação de escassez', paragraphs: ['Quando estoques sobem muito, o mercado recebe evidência de que existe mais oferta disponível ou menos consumo do que se imaginava. Isso tende a aliviar preços, tudo o mais constante.', 'Mas estoque em um país não resolve automaticamente um gargalo marítimo em outro. Logística e qualidade do petróleo também importam.'] },
      { kicker: 'HORMUZ', title: 'Uma rota estreita consegue sustentar um prêmio de risco', paragraphs: ['Hormuz continua severamente limitado segundo a cobertura desta manhã. Enquanto uma parte relevante do fluxo energético depender de um corredor sujeito a interrupção, compradores pagam também pela incerteza.', 'Esse prêmio pode cair rapidamente com um acordo e reaparecer rapidamente com escalada.'] },
      { kicker: 'BRASIL', title: 'O posto não recebe uma atualização do Brent por minuto', paragraphs: ['Preço de combustível no Brasil envolve petróleo, câmbio, derivados, política comercial, impostos, mistura de biocombustíveis, distribuição e margem. Por isso, uma queda do Brent hoje não garante queda imediata na bomba.', 'A leitura correta é acompanhar tendência e canais de transmissão, não converter variação do barril em previsão exata do posto.'] },
    ],
    callout: { label: 'MODELO MENTAL', title: 'Preço é uma negociação sobre o futuro', text: 'Quando um dado novo aparece, o mercado repondera cenários. Por isso dois fatos verdadeiros podem empurrar o mesmo ativo em direções opostas.' },
    takeaways: ['Estoques altos pressionam o petróleo para baixo, mas não eliminam risco geopolítico.', 'Hormuz segue sendo um gargalo físico.', 'Preço brasileiro de combustível tem várias camadas além do Brent.'],
    sources: [{ label: 'Reuters · 13/08/2026', url: 'https://www.reuters.com/business/retail-consumer/wall-st-futures-tick-higher-oil-retreats-ahead-inflation-data-2026-08-13/' }],
  },

  planeta: {
    readingTime: '11 MIN DE LEITURA',
    title: 'A maior “floresta” produtora de oxigênio do planeta não tem árvores',
    deck: 'Organismos microscópicos flutuando perto da superfície do mar transformam luz em vida numa escala tão grande que rivalizam com toda a vegetação terrestre na produção global de oxigênio.',
    opening: [
      'Quando alguém pergunta de onde vem o oxigênio da Terra, a imagem intuitiva é uma floresta. Ela está correta — mas incompleta. Uma parcela enorme da fotossíntese acontece sobre água, executada por organismos pequenos demais para serem vistos individualmente do espaço.',
      'O contraste é bonito: alguns dos maiores processos biogeoquímicos do planeta são conduzidos por algumas de suas menores formas de vida.',
    ],
    sections: [
      { kicker: 'FITOPLÂNCTON', title: 'Uma comunidade microscópica em escala planetária', paragraphs: ['Fitoplâncton inclui algas e organismos fotossintéticos que vivem na zona iluminada do oceano. Como plantas, capturam energia solar e carbono e liberam oxigênio durante a fotossíntese.', 'A NOAA estima que aproximadamente metade da produção global de oxigênio esteja associada ao oceano.'] },
      { kicker: 'NUANCE', title: 'Produzir não é o mesmo que adicionar tudo à atmosfera', paragraphs: ['Organismos marinhos também respiram e a decomposição consome oxigênio. Por isso, produção bruta e contribuição líquida ao estoque atmosférico são conceitos diferentes.', 'A atmosfera já contém um reservatório gigantesco, então não devemos imaginar cada respiração como uma entrega instantânea da fotossíntese de hoje.'] },
      { kicker: 'SATÉLITES', title: 'A cor do mar conta uma história biológica', paragraphs: ['Pigmentos fotossintéticos alteram a luz refletida pela superfície. Sensores orbitais conseguem estimar clorofila e acompanhar grandes mudanças na produtividade do oceano.', 'Isso conecta oceanografia, clima, pesca e ciclo de carbono em um mesmo mapa.'] },
    ],
    callout: { label: 'CONEXÃO', title: 'O invisível pode dominar a escala', text: 'Tamanho individual não prevê importância ecológica. Trilhões de organismos microscópicos conseguem controlar fluxos globais de carbono e oxigênio.' },
    takeaways: ['Cerca de metade da produção global de O₂ está associada ao oceano.', 'Fitoplâncton é central para esse processo.', 'Produção bruta de oxigênio não equivale a todo esse volume permanecer na atmosfera.'],
    sources: [{ label: 'NOAA · Ocean Oxygen', url: 'https://oceanservice.noaa.gov/facts/ocean-oxygen.html' }],
  },

  animais: {
    readingTime: '11 MIN DE LEITURA',
    title: 'Para uma tartaruga, o campo magnético da Terra pode funcionar como mapa e bússola ao mesmo tempo',
    deck: 'Não há placas no oceano aberto. Ainda assim, espécies migratórias reconhecem regiões e direção usando informações físicas que nós mal percebemos.',
    opening: [
      'Imagine atravessar centenas ou milhares de quilômetros sem estrada, horizonte fixo ou GPS e ainda voltar a uma região de alimentação. Para tartarugas marinhas, esse problema é parte da vida.',
      'O campo magnético terrestre varia geograficamente em intensidade e inclinação. Essas variações podem funcionar como uma malha de coordenadas naturais.',
    ],
    sections: [
      { kicker: 'APRENDIZADO', title: 'O estudo mostrou que a assinatura pode ser aprendida', paragraphs: ['Juvenis foram expostos a campos magnéticos que simulavam locais reais. Em um dos campos recebiam comida; em outro, não. Com o treinamento, passaram a responder de forma distinta ao campo associado à alimentação.', 'Isso fornece evidência experimental de que uma assinatura magnética pode ser memorizada como informação geográfica.'] },
      { kicker: 'DOIS SENTIDOS', title: 'Mapa e bússola parecem usar mecanismos diferentes', paragraphs: ['Os pesquisadores aplicaram campos oscilantes de radiofrequência. O comportamento de bússola foi afetado, enquanto a resposta de mapa permaneceu, sugerindo mecanismos sensoriais distintos.', 'É como se um sistema dissesse “onde estou” e outro “para que lado vou”.'] },
      { kicker: 'EVOLUÇÃO', title: 'Um planeta inteiro vira infraestrutura de navegação', paragraphs: ['A estabilidade relativa do campo geomagnético em escalas de vida animal oferece uma referência global. Espécies migratórias evoluíram para extrair informação de um sinal que existe em todos os lugares, mesmo quando não há visibilidade.'] },
    ],
    callout: { label: 'PARA GUARDAR', title: 'Navegar é mais que saber norte', text: 'Uma bússola fornece direção. Um mapa fornece posição. Tartarugas parecem ter acesso às duas classes de informação.' },
    takeaways: ['Tartarugas aprenderam assinaturas magnéticas associadas a locais.', 'Mapa e bússola magnéticos podem depender de mecanismos diferentes.', 'O campo terrestre pode servir como infraestrutura biológica de navegação.'],
    sources: [{ label: 'Nature · 2025', url: 'https://www.nature.com/articles/s41586-024-08554-y' }],
  },

  tempo: {
    readingTime: '10 MIN DE LEITURA',
    title: 'A poluição não precisa aumentar para o ar parecer pior: basta a atmosfera parar de misturar',
    deck: 'Em São Paulo, emissões e meteorologia trabalham juntas. O mesmo volume de poluentes pode produzir concentrações muito diferentes dependendo de vento, chuva e estabilidade atmosférica.',
    opening: [
      'Pense numa gota de tinta colocada em um copo que está sendo mexido e depois na mesma gota em um copo parado. A quantidade de tinta é igual; a distribuição é diferente. A atmosfera também mistura — ou deixa de misturar — o que emitimos.',
      'No inverno seco do Sudeste, pouca chuva e episódios de estabilidade podem favorecer concentrações maiores perto do solo. A inversão térmica é uma das configurações capazes de limitar essa mistura vertical.',
    ],
    sections: [
      { kicker: 'INVERSÃO', title: 'Quando o perfil de temperatura vira uma tampa', paragraphs: ['Normalmente, ar próximo ao chão aquecido pode subir. Numa inversão, uma camada de ar mais quente fica sobre ar frio próximo à superfície, criando estabilidade e dificultando movimentos verticais.', 'Não é uma parede sólida, mas reduz a eficiência com que poluentes são diluídos para cima.'] },
      { kicker: 'INVERNO', title: 'Secura e pouca chuva retiram mecanismos de limpeza', paragraphs: ['O INMET descreve o inverno como o período menos chuvoso em boa parte do Sudeste. Chuva ajuda a remover partículas e gases solúveis; períodos secos prolongados deixam esse mecanismo menos frequente.', 'Queimadas regionais também podem adicionar material particulado, dependendo do transporte atmosférico.'] },
      { kicker: 'ITAQUERA/SP', title: 'Use o monitoramento, não o palpite', paragraphs: ['A CETESB mantém estações e boletins horários na Região Metropolitana. Índice, poluente dominante e condições meteorológicas fornecem uma leitura muito melhor que “o céu parece sujo”.', 'Para exercício ao ar livre ou pessoas sensíveis, consultar o dado do dia é uma decisão prática.'] },
    ],
    callout: { label: 'IDEIA CENTRAL', title: 'Concentração = emissão + dispersão', text: 'Controlar a fonte é essencial, mas a meteorologia explica por que a qualidade do ar varia mesmo sem uma mudança brusca nas emissões.' },
    takeaways: ['Inversão térmica reduz mistura vertical.', 'Inverno seco diminui a frequência de limpeza por chuva.', 'CETESB é a fonte certa para conferir a condição real da RMSP.'],
    sources: [
      { label: 'INMET · Inverno 2026', url: 'https://portal.inmet.gov.br/noticias/inverno-2026-confira-a-previs%C3%A3o-para-a-esta%C3%A7%C3%A3o' },
      { label: 'CETESB · Qualidade do Ar', url: 'https://www.cetesb.sp.gov.br/cetesb/qualidade_ambiental/ar' },
    ],
  },

  curiosidades: {
    readingTime: '9 MIN DE LEITURA',
    title: 'Algumas das estrelas mais “estreladas” das fotos são, na verdade, assinaturas do telescópio',
    deck: 'Uma fotografia astronômica contém o universo e o instrumento ao mesmo tempo. Aprender a reconhecer artefatos ópticos é aprender a ler a imagem, não apenas admirá-la.',
    opening: [
      'Desenhe uma estrela sem pensar: provavelmente você fará pontas. No céu, estrelas não possuem aquelas pontas geométricas. Curiosamente, telescópios podem produzir exatamente essa aparência.',
      'O motivo é difração: como a luz se comporta como onda, obstáculos e bordas do caminho óptico redistribuem uma pequena parte da energia em padrões previsíveis.',
    ],
    sections: [
      { kicker: 'ÓPTICA', title: 'O espelho secundário precisa ser sustentado por alguma coisa', paragraphs: ['Muitos telescópios refletores têm hastes que sustentam um espelho secundário. Essas hastes interceptam parte da frente de onda e geram padrões de difração.', 'Geometria diferente de suporte pode produzir quantidade e orientação diferentes de spikes.'] },
      { kicker: 'LEITURA', title: 'Nem tudo que está na imagem existe daquela forma no espaço', paragraphs: ['Detectores possuem pixels, filtros, saturação e ruído. Óptica possui aberrações e difração. Processamento combina exposições e cores.', 'A imagem científica é uma medição transformada em representação visual. Isso não a torna “falsa”; torna necessário entender o pipeline.'] },
      { kicker: 'COTIDIANO', title: 'O mesmo princípio aparece em luzes vistas com os olhos semicerrados', paragraphs: ['Fendas pequenas e bordas criadas pelos cílios/pálpebras também podem produzir espalhamento e padrões. A aparência da luz depende do objeto e do sistema que a observa.'] },
    ],
    callout: { label: 'FRASE', title: 'Toda imagem tem uma assinatura do instrumento', text: 'Quando você olha uma foto científica, uma boa pergunta é: qual parte pertence ao objeto e qual parte pertence ao modo de observar?' },
    takeaways: ['Diffraction spikes são efeitos ópticos, não “braços” das estrelas.', 'A geometria do telescópio influencia o padrão.', 'Ler uma imagem científica inclui entender o instrumento.'],
    sources: [{ label: 'NASA APOD · Diffraction Spikes', url: 'https://apod.nasa.gov/apod/ap010415.html' }],
  },

  gravidez: {
    readingTime: '11 MIN DE LEITURA',
    title: 'O primeiro pré-natal não é uma cerimônia: é quando a gestação começa a ganhar um mapa clínico',
    deck: 'Nas primeiras semanas há muitas perguntas e poucos sinais visíveis. A função do pré-natal é transformar história, exames e acompanhamento ao longo do tempo em decisões mais seguras.',
    opening: [
      'Com 5 semanas e 4 dias, é natural querer uma resposta imediata para tudo: “está tudo bem?”, “esse sintoma é normal?”, “quando dá para ver?”, “o que devo fazer?”. A medicina raramente responde a uma gestação inteira em um único momento.',
      'O pré-natal cria uma sequência. Datas, antecedentes, exame clínico, laboratório, vacinação e ultrassom quando indicado começam a formar uma história acompanhada, não uma fotografia isolada.',
    ],
    sections: [
      { kicker: 'PRIMEIRA CONSULTA', title: 'Boa informação economiza tempo clínico', paragraphs: ['Levar DUM, testes, lista de medicamentos/suplementos, alergias, cirurgias, doenças e vacinas ajuda a equipe a enxergar contexto. Exames recentes também podem ser úteis.', 'Perguntas anotadas reduzem a chance de sair lembrando no estacionamento daquilo que realmente queria perguntar.'] },
      { kicker: 'CADERNETA', title: 'Um documento simples cria continuidade entre profissionais', paragraphs: ['A Caderneta Brasileira da Gestante reúne consultas, exames, vacinas, direitos, sinais de alerta e espaço para dúvidas. Carregá-la facilita continuidade quando o atendimento ocorre em lugares diferentes.', 'Ela não é só papelada: é uma interface entre a família e o sistema de saúde.'] },
      { kicker: 'ANSIEDADE', title: 'Acompanhamento vale mais que interpretar sintomas isolados', paragraphs: ['Náusea, cólica leve, cansaço e sensibilidade podem variar. Ausência ou presença de um sintoma não confirma por si só a evolução da gestação.', 'Quando houver dor forte, unilateral, desmaio, febre ou sangramento importante, a orientação deve vir de avaliação profissional, não de comparação com aplicativo.'] },
    ],
    callout: { label: 'MISSÃO', title: 'Prepare a consulta em dupla', text: 'Façam uma lista única de dúvidas, documentos e medicamentos/suplementos. O objetivo não é controlar a consulta; é chegar com contexto.' },
    takeaways: ['Pré-natal deve começar cedo, preferencialmente até 12 semanas.', 'A caderneta organiza continuidade do cuidado.', 'Sintomas isolados não substituem avaliação clínica.'],
    sources: [
      { label: 'Ministério da Saúde · Pré-natal', url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/g/gravidez/pre-natal' },
      { label: 'Ministério da Saúde · Caderneta', url: 'https://www.gov.br/saude/pt-br/composicao/saps/publicacoes/cadernetas-e-cartoes' },
    ],
    disclaimer: 'Informação educativa; não substitui o acompanhamento da equipe de pré-natal.',
  },

  pai: {
    readingTime: '10 MIN DE LEITURA',
    title: 'O pai deixa de ser acompanhante quando passa a carregar uma parte real do sistema familiar',
    deck: 'Presença não é estar na sala. É ter memória, responsabilidade e iniciativa suficientes para que o cuidado não dependa de uma única pessoa lembrar de tudo.',
    opening: [
      'Existe uma diferença sutil entre ir junto e participar. Quem apenas vai junto espera instruções. Quem participa sabe a data da consulta, conhece as dúvidas abertas, lembra do exame pendente e assume tarefas sem precisar que outra pessoa faça gestão do seu envolvimento.',
      'Esse princípio começa durante a gestação e tende a ficar ainda mais importante depois do nascimento, quando sono, alimentação, consultas e rotina aumentam a carga mental da família.',
    ],
    sections: [
      { kicker: 'OWNERSHIP', title: 'Escolha responsabilidades inteiras, não microtarefas', paragraphs: ['Em vez de “me avisa se precisar que eu marque”, combine que determinado assunto é seu: agenda de consultas, pasta de exames, compras de segurança, deslocamento ou lista de dúvidas.', 'Ownership reduz coordenação. A outra pessoa não precisa lembrar você de lembrar.'] },
      { kicker: 'CONSULTA', title: 'Pergunte para entender, não para ocupar espaço', paragraphs: ['Anotar dúvidas e ouvir as respostas ajuda ambos. Ao mesmo tempo, o corpo e os sintomas são da gestante; respeitar a voz dela é parte da participação.', 'Uma boa pergunta do pai adiciona contexto ou reduz incerteza, não disputa protagonismo.'] },
      { kicker: 'LONGO PRAZO', title: 'Vínculo é repetição de presença', paragraphs: ['A UNICEF enfatiza o envolvimento diário, não a ideia de “ajudar a mãe”. O cuidado pertence aos cuidadores.', 'A rotina de hoje — aprender, organizar, ouvir — é treino para a rotina de fraldas, banho, sono, consultas e brincadeiras que virá depois.'] },
    ],
    callout: { label: 'AÇÃO CONCRETA', title: 'Escolha um ownership hoje', text: 'Defina uma responsabilidade do pré-natal que passa a ser sua do início ao fim e registre onde as informações ficarão.' },
    takeaways: ['Participação real reduz carga mental.', 'Ownership é diferente de executar uma tarefa sob pedido.', 'Vínculo se constrói com presença repetida e cuidado cotidiano.'],
    sources: [
      { label: 'UNICEF Parenting', url: 'https://www.unicef.org/parenting/child-care/relationship-between-father-and-baby' },
      { label: 'Ministério da Saúde · participação da família', url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-crianca' },
    ],
  },

  carros: {
    readingTime: '12 MIN DE LEITURA',
    title: 'Duster usada: o valor está menos no SUV e mais no histórico do exemplar',
    deck: 'Na faixa de R$ 50–55 mil aparecem várias versões 2015 muito próximas de preço. Isso transforma versão, tração e conservação em decisões mais importantes que alguns milhares de reais de tabela.',
    opening: [
      'Quando várias versões de um carro antigo ficam comprimidas na mesma faixa de preço, a compra deixa de ser “qual cabe no orçamento?” e passa a ser “qual entrega a função que eu realmente preciso sem criar custo desnecessário?”.',
      'A Duster 2015 ilustra isso: 4x2 manual, 4x2 automática e 4x4 manual aparecem próximas na FIPE, mas uso, complexidade e comportamento são diferentes.',
    ],
    sections: [
      { kicker: 'VERSÃO', title: 'Não pague por capacidade que você não usa', paragraphs: ['A 4x4 manual pode ser interessante para terra, acesso ruim e uso específico. Para cidade e estrada pavimentada, peso, componentes adicionais e pneus adequados precisam justificar a vantagem.', 'A versão automática pode facilitar trânsito, mas uma compra usada exige avaliar funcionamento do câmbio e histórico, não apenas preferência por conveniência.'] },
      { kicker: 'EXEMPLAR', title: 'Um carro de 11 anos é um histórico sobre rodas', paragraphs: ['Quilometragem faz sentido junto com desgaste, notas e manutenções. Procure coerência: pneus, pedais, volante, bancos, peças trocadas e intervalos de serviço contam uma história.', 'Uma inspeção independente é especialmente valiosa em SUV que pode ter rodado em vias ruins ou uso fora de estrada.'] },
      { kicker: 'CUSTO', title: 'Preço de compra é a entrada do problema, não o total', paragraphs: ['Pneus, seguro, consumo, suspensão e manutenção imediata podem alterar o custo do primeiro ano em milhares de reais. Antes de negociar, simule “preço + correções iniciais + seguro + documentação”.', 'Às vezes o carro R$ 3 mil mais caro é mais barato de possuir porque não exige recuperação logo depois da compra.'] },
    ],
    callout: { label: 'CHECKLIST', title: 'Leve o carro para uma terceira pessoa', text: 'O vendedor conhece o carro e você quer comprá-lo. A inspeção independente existe justamente porque nenhum dos dois é uma fonte neutra.' },
    takeaways: ['Versões próximas de preço podem ter custos e usos muito diferentes.', 'Histórico coerente vale mais que odômetro baixo isolado.', 'Some manutenção inicial antes de comparar ofertas.'],
    sources: [
      { label: 'Webmotors/FIPE · Duster 4x2 manual', url: 'https://www.webmotors.com.br/tabela-fipe/carros/renault/duster/2015/20-tech-road-ii-4x2-16v-flex-4p-manual' },
      { label: 'Webmotors/FIPE · Duster 4x4 manual', url: 'https://www.webmotors.com.br/tabela-fipe/carros/renault/duster/2015/20-tech-road-ii-4x4-16v-flex-4p-manual' },
    ],
  },

  motos: {
    readingTime: '11 MIN DE LEITURA',
    title: 'Uma moto esportiva usada pode contar a verdade nos pequenos desalinhamentos',
    deck: 'Na MT-03, preço e potência atraem; na inspeção, manetes, pedaleiras, tampas, bengalas e pneus ajudam a reconstruir como a moto foi usada.',
    opening: [
      'Motos caem. Às vezes paradas, às vezes andando. O problema não é exigir uma história impossível de “nunca caiu”; é descobrir se a história contada combina com o que a máquina mostra.',
      'Em uma naked esportiva, sinais de uso podem estar espalhados em vários pontos. Ler esses sinais reduz a chance de comprar estética recuperada sobre mecânica negligenciada.',
    ],
    sections: [
      { kicker: 'QUEDA', title: 'Procure simetria', paragraphs: ['Manetes, pesos de guidão, pedaleiras, tampas do motor, escapamento e rabeta podem revelar contato com o chão. Uma peça nova isolada em uma moto antiga merece uma pergunta, não uma acusação.', 'Bengalas e mesa devem estar alinhadas; guidão torto ou moto “puxando” exige avaliação.'] },
      { kicker: 'CONSUMÍVEIS', title: 'Pneus e relação dizem quanto o dono adiou custos', paragraphs: ['Pneus no fim, corrente esticada no limite e dentes deformados significam gasto imediato. Esses itens não condenam a moto, mas precisam entrar na negociação.', 'Freio também conta: espessura de pastilhas, estado dos discos e fluido ajudam a medir cuidado.'] },
      { kicker: 'TESTE', title: 'Partida a frio vale mais que motor já aquecido', paragraphs: ['Quando possível, peça para ver a moto fria. Ruídos, fumaça, dificuldade de partida e marcha lenta são mais fáceis de perceber antes de o motor ser previamente aquecido.', 'Depois, teste embreagem, câmbio, direção e frenagem progressivamente.'] },
    ],
    callout: { label: 'REGRA', title: 'Não compre o acessório; compre a moto', text: 'Escape, slider, manete e estética agregam pouco se pneus, revisão e estrutura estiverem ruins.' },
    takeaways: ['Sinais de queda devem ser lidos como conjunto.', 'Consumíveis entram no custo de compra.', 'Partida a frio e teste dinâmico contam histórias diferentes.'],
    sources: [{ label: 'Webmotors/FIPE · MT-03 2018', url: 'https://www.webmotors.com.br/tabela-fipe/motos/yamaha/mt-03/2018' }],
  },

  mecanica: {
    readingTime: '10 MIN DE LEITURA',
    title: 'A calibragem certa não é um número do pneu: é uma especificação do carro',
    deck: 'Pressão muda com temperatura e uso. Entender a diferença entre pressão recomendada, pressão máxima e leitura quente evita dois erros comuns de manutenção.',
    opening: [
      'No flanco do pneu existe um número grande de pressão máxima. Na porta do carro existe outro número, geralmente menor. Eles respondem a perguntas diferentes.',
      'O fabricante do pneu informa um limite estrutural. O fabricante do veículo define uma pressão de operação considerando peso, eixo, suspensão, dirigibilidade e carga.',
    ],
    sections: [
      { kicker: 'TEMPERATURA', title: 'O ar não sumiu só porque a manhã esfriou', paragraphs: ['A pressão de um gás depende da temperatura. Se o pneu esfria durante a madrugada, a leitura cai mesmo sem vazamento significativo. Quando roda e aquece, sobe novamente.', 'É por isso que padrões de manutenção pedem medição “a frio”, criando uma referência repetível.'] },
      { kicker: 'REFERÊNCIA', title: 'A etiqueta do veículo vence o número do flanco', paragraphs: ['A pressão recomendada normalmente está na porta/coluna do motorista ou no manual. Pode existir valor diferente entre eixos e condição de carga.', 'O valor no pneu indica máximo permitido para aquele pneu, não a configuração ideal para qualquer carro onde ele possa ser montado.'] },
      { kicker: 'DIAGNÓSTICO', title: 'Uma roda caindo sozinha é um problema diferente', paragraphs: ['Se os quatro pneus caem de forma semelhante após uma frente fria, temperatura é uma hipótese forte. Se apenas um perde vários psi repetidamente, procure prego, válvula, roda ou dano.', 'Diagnóstico começa comparando padrão, não assumindo a primeira causa.'] },
    ],
    callout: { label: 'AÇÃO', title: 'Cheque uma vez por mês a frio', text: 'Use um manômetro confiável e inclua o estepe. TPMS é alerta, não substituto de manutenção.' },
    takeaways: ['Frio reduz pressão medida.', 'Pressão recomendada vem do veículo.', 'Queda assimétrica/repetida merece investigação de vazamento.'],
    sources: [
      { label: 'NHTSA · Tire Safety', url: 'https://www.nhtsa.gov/vehicle-safety/tires' },
      { label: 'NHTSA · Winter Driving Tips', url: 'https://www.nhtsa.gov/winter-driving-tips' },
    ],
  },

  nautica: {
    readingTime: '10 MIN DE LEITURA',
    title: 'No mar, chegar ao destino com meio tanque pode significar que você já saiu sem reserva',
    deck: 'A regra de um terço transforma combustível em margem operacional. O ponto não é desperdiçar autonomia; é admitir que vento, corrente e desvio raramente obedecem à planilha.',
    opening: [
      'Em terra, ficar sem combustível costuma significar acostamento e assistência. Na água, a mesma negligência pode deixar a embarcação à deriva, perto de pedras, canal de tráfego ou mau tempo.',
      'Por isso a Marinha recomenda uma conta conservadora: um terço para ida, um para volta e um de reserva.',
    ],
    sections: [
      { kicker: 'CONSUMO', title: 'Litros por hora mudam com o mundo ao redor', paragraphs: ['Carga, casco sujo, vento de proa, corrente, ondas, rotação do motor e hélice influenciam consumo. Um teste feito em água calma não é garantia para qualquer saída.', 'Registrar consumo real em diferentes condições melhora o planejamento com o tempo.'] },
      { kicker: 'RESERVA', title: 'O último terço compra opções', paragraphs: ['Reserva permite desviar de tempo ruim, buscar abrigo, retornar por rota diferente ou lidar com erro de estimativa. Ela não é “combustível sobrando”; é capacidade de reagir.', 'Esse é o mesmo raciocínio de reserva financeira e capacidade redundante em sistemas críticos.'] },
      { kicker: 'PANE', title: 'Combustível também exige manutenção', paragraphs: ['Mangueiras, filtros, conexões e qualidade do combustível podem causar perda de alimentação mesmo com tanque cheio. Antes da saída, inspeção do sistema importa tanto quanto o volume disponível.', 'Planejamento de combustível sem confiabilidade mecânica é uma falsa sensação de segurança.'] },
    ],
    callout: { label: 'REGRA MARINHA', title: '1/3 + 1/3 + 1/3', text: 'Ida, volta e reserva. Se o plano precisa consumir a reserva para funcionar, ele já nasceu apertado.' },
    takeaways: ['Reserva é margem operacional.', 'Consumo varia com condições reais.', 'Sistema de combustível deve ser inspecionado, não apenas abastecido.'],
    sources: [
      { label: 'Agência Marinha · Pane seca', url: 'https://www.agencia.marinha.mil.br/seguranca-da-navegacao/pane-seca-no-mar-marinha-alerta-para-riscos-da-falta-de-combustivel-em' },
      { label: 'DPC · Segurança da Navegação', url: 'https://www.marinha.mil.br/dpc/node/3551' },
    ],
  },

  viagens: {
    readingTime: '11 MIN DE LEITURA',
    title: 'Santos explica São Paulo melhor quando você olha para trás dos prédios da orla',
    deck: 'Antes de ser destino de praia, a cidade foi uma engrenagem decisiva do café. Porto, ferrovia, bolsa e centro histórico contam como riqueza agrícola virou infraestrutura urbana.',
    opening: [
      'É fácil descer a serra e ir direto para a praia. Mas o Centro Histórico de Santos oferece outra viagem: em poucas quadras, você consegue conectar produção cafeeira no interior, ferrovia, porto, finanças e urbanização.',
      'O edifício que hoje abriga o Museu do Café era a Bolsa Oficial de Café. Ali, preço, qualidade e comércio do grão tinham uma materialidade que hoje associaríamos a uma bolsa de mercadorias.',
    ],
    sections: [
      { kicker: 'ROTEIRO', title: 'Comece pelo café e caminhe pela lógica da cidade', paragraphs: ['O Museu do Café oferece contexto para entender o restante. Depois, Valongo, bonde e edifícios históricos ficam menos como “fachadas antigas” e mais como partes de uma cadeia econômica.', 'Se houver tempo, Museu Pelé ou Monte Serrat adicionam esporte e geografia urbana ao dia.'] },
      { kicker: 'CUSTO', title: 'Um passeio histórico pode ser barato', paragraphs: ['O ingresso publicado para o Museu do Café é R$ 16, com política de gratuidade em dias/condições indicados pela instituição. O maior custo do bate-volta tende a ser deslocamento, alimentação e eventuais atrações adicionais.', 'Planejar estacionamento ou transporte coletivo antes evita transformar economia de ingresso em gasto desnecessário de logística.'] },
      { kicker: 'AGORA', title: 'Uma exposição temporária liga o café brasileiro à China', paragraphs: ['“Ouro Negro e o Dragão” está anunciada até 13 de setembro. A mostra usa arte para discutir como um produto histórico brasileiro entra em uma relação econômica contemporânea com um mercado asiático.', 'Isso torna a visita menos nostálgica: o café continua sendo geopolítica, comércio e cultura.'] },
    ],
    callout: { label: 'IDEIA DE DIA', title: 'História de manhã, mar no fim da tarde', text: 'Fazer o centro primeiro e a orla depois evita reduzir Santos a apenas um de seus lados.' },
    takeaways: ['O café ajudou a financiar porto, ferrovia e urbanização.', 'Museu + centro transforma o passeio em narrativa.', 'Exposições temporárias podem conectar história a temas atuais.'],
    sources: [
      { label: 'Visite Museus · Museu do Café', url: 'https://visite.museus.gov.br/instituicoes/museu-do-cafe-2/' },
      { label: 'Prefeitura de Santos · Exposição', url: 'https://www.santos.sp.gov.br/?q=node%2F171505' },
    ],
  },

  financas: {
    readingTime: '10 MIN DE LEITURA',
    title: 'A bolsa negocia amanhã usando dados de hoje — e é por isso que manchetes parecem mover tudo antes da decisão',
    deck: 'Taxas de juros futuras, moedas e ações reagem à probabilidade de uma decisão, não apenas à decisão oficial. Entender isso ajuda a não confundir preço de mercado com fato consumado.',
    opening: [
      'Se o Fed só decide em uma reunião futura, por que dólar e ações mudam hoje? Porque participantes não esperam a ata final para se posicionar. Eles atualizam probabilidades a cada dado novo.',
      'Inflação mais branda, petróleo em queda ou emprego fraco alteram a distribuição de cenários. O preço muda para refletir essa nova distribuição, mesmo que o banco central ainda não tenha feito nada.',
    ],
    sections: [
      { kicker: 'PROBABILIDADE', title: '66% não significa “o Fed vai fazer isso”', paragraphs: ['Uma probabilidade implícita de mercado descreve como contratos estão precificados naquele momento. Novo dado, fala de dirigente ou choque externo pode mudar o número rapidamente.', 'Tratar probabilidade como certeza cria decisões ruins — especialmente quando se tenta fazer trade baseado numa manchete.'] },
      { kicker: 'BRASIL', title: 'Juro americano compete com risco brasileiro', paragraphs: ['Títulos americanos mais atraentes podem mudar fluxo global e dólar. Mas ativos brasileiros também respondem a Selic, inflação local, fiscal, commodities e política.', 'Uma única variável explica parte do movimento, raramente tudo.'] },
      { kicker: 'VIDA PESSOAL', title: 'Seu dinheiro não precisa reagir na velocidade do terminal', paragraphs: ['Reserva de emergência, dinheiro para contas anuais e objetivos próximos pedem estabilidade e liquidez, não previsão de reunião do Fed.', 'Quanto menor o horizonte e maior a necessidade do recurso, menor deve ser a dependência de acertar um cenário macro.'] },
    ],
    callout: { label: 'REGRA', title: 'Horizonte vence manchete', text: 'Antes de mudar um investimento por causa de uma notícia, pergunte se seu objetivo e prazo mudaram. Se não mudaram, talvez sua carteira também não precise mudar.' },
    takeaways: ['Mercados precificam probabilidades, não certezas.', 'Fed afeta o Brasil por vários canais, mas não sozinho.', 'Decisão pessoal deve começar por prazo, liquidez e objetivo.'],
    sources: [
      { label: 'Reuters · 13/08/2026', url: 'https://www.reuters.com/business/retail-consumer/wall-st-futures-tick-higher-oil-retreats-ahead-inflation-data-2026-08-13/' },
      { label: 'Banco Central · Entenda os juros', url: 'https://www.bcb.gov.br/cidadaniafinanceira/entendajuro' },
    ],
  },

  tecnologia: {
    readingTime: '10 MIN DE LEITURA',
    title: 'A próxima geração de IA também será decidida por engenheiros elétricos, civis e térmicos',
    deck: 'Quando um projeto de data center vale mais de um bilhão de dólares, a inteligência artificial deixa de parecer apenas software e revela sua dependência de infraestrutura pesada.',
    opening: [
      'Modelos parecem imateriais na tela. Mas cada resposta nasceu em chips que consomem energia, aquecem, precisam conversar por redes rápidas e ficam dentro de edifícios projetados para operar continuamente.',
      'O pedido de até US$ 1,57 bilhão da Together AI à L&T é um retrato dessa transformação: IA está puxando a cadeia de construção e infraestrutura junto com semicondutores.',
    ],
    sections: [
      { kicker: 'ENERGIA', title: 'A potência elétrica vira especificação de produto', paragraphs: ['Data centers de alta densidade exigem fornecimento firme, distribuição interna, UPS, geradores e capacidade de expansão. Uma GPU indisponível por falta de energia é capital caro parado.', 'Por isso localização passa a depender de rede elétrica, preço e disponibilidade futura.'] },
      { kicker: 'CALOR', title: 'Computação vira problema termodinâmico', paragraphs: ['Quase toda energia elétrica consumida por chips termina como calor. Quanto mais densidade por rack, mais difícil remover esse calor com eficiência.', 'Liquid cooling, desenho de fluxo e temperatura de operação deixam de ser detalhes de facilities e entram na capacidade do cluster.'] },
      { kicker: 'ECONOMIA', title: 'Infraestrutura decide quem consegue escalar', paragraphs: ['Ter acesso ao modelo ou ao chip não basta se a organização não consegue construir, financiar e operar capacidade. Isso favorece hyperscalers, países com energia abundante e ecossistemas capazes de entregar infraestrutura rapidamente.', 'O mercado de IA passa a disputar terreno, rede, equipamentos e engenharia além de talento em software.'] },
    ],
    callout: { label: 'MUDANÇA DE LENTE', title: 'IA é software rodando sobre uma indústria pesada', text: 'Quando a escala cresce, o “cloud” deixa de parecer uma nuvem e volta a ser concreto, cobre, água, fibra e megawatts.' },
    takeaways: ['Data centers de IA são infraestrutura energética.', 'Refrigeração e rede limitam densidade de computação.', 'Escalar IA depende de uma cadeia muito maior que modelos e GPUs.'],
    sources: [{ label: 'Reuters · L&T / Together AI · 13/08/2026', url: 'https://www.reuters.com/world/india/indias-larsen-toubro-secures-order-build-ai-factory-nvidia-2026-08-13/' }],
  },

  seguranca: {
    readingTime: '13 MIN DE LEITURA',
    title: 'Quando o atacante convence você a instalar o acesso remoto, o EDR pode ver apenas uma ferramenta legítima',
    deck: 'UNC3753 desloca o problema de “bloquear malware” para “validar intenção”. Screen sharing, RMM e cloud storage são normais — até serem autorizados pela pessoa errada.',
    opening: [
      'Muitos controles de segurança foram construídos para reconhecer objetos ruins: executáveis maliciosos, hashes, domínios, exploits. O vishing moderno tenta evitar essa batalha. O atacante convence a vítima a usar objetos bons de maneira ruim.',
      'Na campanha descrita pela Mandiant, suporte falso conduz usuários por chamadas, sessões de tela, RMM e até VDI. O resultado final pode ser roubo de documentos e extorsão sem criptografar um único arquivo.',
    ],
    sections: [
      { kicker: 'INITIAL ACCESS', title: 'A chamada telefônica vira um protocolo de autenticação informal', paragraphs: ['O ator conhece nome, empresa e contexto suficiente para parecer legítimo. Se o usuário aceita essa narrativa como prova de identidade, a ligação substitui o controle técnico que deveria validar o suporte.', 'Por isso canais de help desk precisam de procedimentos de verificação independentes da história contada pelo solicitante.'] },
      { kicker: 'LOTL', title: 'Living off the land agora inclui software SaaS de suporte', paragraphs: ['Quick Assist, Teams, Zoom, AnyDesk e RMM comerciais possuem funções reais. Bloquear todos pode quebrar o trabalho. O desafio é detectar uso fora do padrão: instalação nova, sessão incomum, execução via curl/msiexec, acesso a grandes volumes de arquivos.', 'Defesa comportamental ganha peso quando a ferramenta não é inerentemente maliciosa.'] },
      { kicker: 'EXTORSÃO', title: 'Ransomware é modelo de negócio, não necessariamente criptografia', paragraphs: ['O objetivo econômico pode ser obtido apenas com exfiltração de informação sensível e ameaça de publicação. Isso remove a etapa ruidosa de criptografia e mantém pressão sobre a vítima.', 'Backups continuam importantes, mas não resolvem confidencialidade perdida.'] },
    ],
    callout: { label: 'CONTROLE', title: 'Suporte legítimo precisa ser autenticável', text: 'Se qualquer pessoa que saiba seu nome consegue convencê-lo de que “é do TI”, o processo de suporte possui um problema de identidade.' },
    takeaways: ['Vishing pode contornar controles de e-mail.', 'Ferramentas legítimas exigem detecção contextual.', 'Extorsão de dados pode ocorrer sem ransomware criptográfico.'],
    sources: [{ label: 'Mandiant · UNC3753', url: 'https://cloud.google.com/blog/topics/threat-intelligence/targeted-campaign-us-law-firms' }],
  },

  'appsec-ssdlc': {
    readingTime: '14 MIN DE LEITURA',
    title: 'O endpoint que ninguém considera “a aplicação” pode ser a porta mais perigosa da aplicação',
    deck: 'CVE-2026-35273 mostra o risco de componentes auxiliares de middleware: um serviço de gerenciamento exposto pode herdar privilégios altos e escapar do inventário que olha apenas para URLs de negócio.',
    opening: [
      'Times de AppSec tendem a mapear front-end, APIs e dependências do código. Produtos corporativos grandes carregam outro universo: consoles de administração, hubs de atualização, conectores, listeners e interfaces de manutenção.',
      'No PeopleSoft, a campanha observada pela Mandiant explorou um componente de Environment Management associado a PSEMHUB. A falha era remota, sem autenticação e podia resultar em RCE. Mais importante: foi usada antes da divulgação do patch.',
    ],
    sections: [
      { kicker: 'PRIORIDADE', title: 'Aqui todos os sinais de risco apontam na mesma direção', paragraphs: ['CVSS 9.8, pre-auth, network, RCE e exploração observada já criam prioridade alta. Se o endpoint está exposto à internet e o servidor possui acesso a dados ou rede interna, a criticidade aumenta ainda mais.', 'Esse é o cenário em que SLA normal de vulnerabilidade pode ser lento demais.'] },
      { kicker: 'INVENTÁRIO', title: 'ASPM sem componentes operacionais tem ponto cego', paragraphs: ['SBOM diz quais bibliotecas existem; não necessariamente descreve listeners e aplicações administrativas habilitadas no middleware. Inventário precisa incorporar serviços, rotas, consoles e plugins instalados.', 'Pergunta prática: “quais URLs existem no mesmo servidor que não pertencem ao fluxo de negócio?”'] },
      { kicker: 'IR', title: 'Patch é contenção futura; hunting olha para o passado', paragraphs: ['Como a exploração ocorreu antes do advisory, organizações que estavam expostas precisam considerar comprometimento anterior ao patch. Logs de acesso, JSP inesperados, diretórios de staging e conexões SMB de saída aparecem nas recomendações da Mandiant.', 'Um gate de patch não substitui resposta a incidente quando já existe evidência de exploração em campo.'] },
    ],
    callout: { label: 'APPSEC PROGRAM', title: 'Adicione “admin surface” ao inventário', text: 'Para cada aplicação crítica, catalogue consoles, health endpoints, listeners, hubs de atualização e serviços auxiliares — com exposição, autenticação e owner.' },
    takeaways: ['CVE-2026-35273 foi explorada como zero-day.', 'Componentes administrativos precisam entrar no attack surface.', 'Exploração prévia exige hunting, não apenas patch.'],
    sources: [
      { label: 'Oracle · CVE-2026-35273', url: 'https://www.oracle.com/security-alerts/alert-cve-2026-35273.html' },
      { label: 'Mandiant · PeopleSoft exploit', url: 'https://cloud.google.com/blog/topics/threat-intelligence/shinyhunters-targets-education-sector-oracle-exploit/' },
    ],
  },
};
