import type { EditorialDossier } from './editorial-dossier-types';

export const editorialLife: Record<string, EditorialDossier> = {
  gravidez: {
    readingTime: '9 MIN DE LEITURA',
    title: 'Semana 5: muita coisa começa antes de parecer que começou',
    deck: 'No início da gestação, o embrião ainda é minúsculo, mas processos fundamentais de formação do sistema nervoso, tecido cardíaco e estruturas corporais já estão em andamento.',
    opening: [
      'Cinco semanas de gestação é uma fase curiosa porque existe um contraste enorme entre tamanho e importância biológica. Externamente, muita coisa ainda pode parecer igual. Internamente, a organização celular está acelerando e o embrião entra em uma etapa em que estruturas básicas começam a se definir.',
      'Também é uma fase em que datas confundem. A idade gestacional é contada a partir do primeiro dia da última menstruação, não do dia exato da fecundação. Por isso, “5 semanas de gravidez” normalmente significa que a concepção aconteceu cerca de duas semanas depois do marco usado na contagem obstétrica.',
    ],
    sections: [
      {
        kicker: 'DESENVOLVIMENTO',
        title: 'O que está começando agora',
        paragraphs: [
          'A ACOG descreve a semana 5 como o início do estágio embrionário. Nessa fase, cérebro e coluna começam a se formar, o tubo neural se desenvolve e tecido cardíaco começa a aparecer. Partes iniciais da face e do ouvido interno também entram em formação.',
          'Isso não significa que todos esses sistemas já estejam “prontos”. É exatamente o contrário: eles estão no início de um processo longo. O valor de acompanhar semana a semana é entender a sequência do desenvolvimento, e não imaginar que cada órgão surge completo de uma vez.',
        ],
      },
      {
        kicker: 'CONTAGEM',
        title: 'Por que a DPP é uma estimativa, não uma data marcada',
        paragraphs: [
          'A data provável do parto é uma referência calculada a partir da idade gestacional e pode ser ajustada conforme avaliação obstétrica e ultrassonográfica. Ela serve para organizar acompanhamento, exames e expectativa de desenvolvimento.',
          'É mais útil pensar em uma janela de evolução do que em um cronômetro exato. Desenvolvimento humano tem variação natural, e o pré-natal existe justamente para acompanhar essa evolução individualmente.',
        ],
      },
      {
        kicker: 'ROTINA SEGURA',
        title: 'As decisões simples têm mais valor do que “hack de gravidez”',
        paragraphs: [
          'No começo, o mais útil costuma ser uma rotina consistente: pré-natal, alimentação segura, seguir orientação profissional sobre suplementação e medicamentos e evitar exposições conhecidamente prejudiciais. O CDC destaca, por exemplo, a importância do ácido fólico e a ausência de quantidade conhecida de álcool que seja segura durante a gestação.',
          'Segurança alimentar também ganha peso porque a gravidez aumenta a vulnerabilidade a algumas infecções transmitidas por alimentos. Isso torna cuidados com carnes malpassadas, laticínios não pasteurizados, ovos crus e higiene de frutas e verduras mais importantes.',
        ],
      },
      {
        kicker: 'COMO LER ESTA ABA',
        title: 'Informação boa prepara perguntas; não substitui consulta',
        paragraphs: [
          'É tentador usar qualquer sintoma como pista para tentar adivinhar se “está tudo bem”. Esse é justamente o ponto em que conteúdo online precisa ser cuidadoso. Sintomas variam muito e não servem como exame.',
          'O melhor uso desta página é chegar ao pré-natal mais preparado: saber o estágio gestacional, entender termos, registrar dúvidas e reconhecer quando algo merece avaliação profissional em vez de tentar decidir sozinho pela internet.',
        ],
      },
    ],
    callout: {
      label: 'IDEIA CENTRAL',
      title: 'No início, desenvolvimento é mais sobre organização do que sobre tamanho',
      text: 'O embrião ainda é muito pequeno, mas sistemas fundamentais já começam a ganhar estrutura. É por isso que as primeiras semanas têm tanta importância biológica.',
    },
    takeaways: [
      'Semana gestacional é contada a partir da última menstruação, não da fecundação.',
      'Na semana 5 começa o estágio embrionário descrito pela ACOG.',
      'Pré-natal e decisões de baixo risco importam mais do que tentar interpretar sintomas isolados.',
    ],
    sources: [
      { label: 'ACOG · Changes During Pregnancy', url: 'https://www.acog.org/womens-health/infographics/changes-during-pregnancy' },
      { label: 'CDC · Planning for Pregnancy', url: 'https://www.cdc.gov/pregnancy/about/index.html' },
      { label: 'CDC · Safer Food Choices for Pregnant Women', url: 'https://www.cdc.gov/food-safety/foods/pregnant-women.html' },
    ],
    disclaimer: 'Conteúdo educativo e conservador. Medicamentos, suplementos, sintomas ou decisões clínicas devem ser discutidos com obstetra/equipe de pré-natal.',
  },

  pai: {
    readingTime: '9 MIN DE LEITURA',
    title: 'Ser um bom pai começa muito antes de segurar o bebê no colo',
    deck: 'Paternidade ativa é menos sobre saber tudo e mais sobre construir presença, competência prática, segurança e responsabilidade compartilhada antes do nascimento.',
    opening: [
      'É fácil imaginar a paternidade como algo que “começa no parto”. Na prática, o tipo de pai que você será já está sendo construído agora: na forma como participa das consultas, absorve a carga mental, aprende sobre segurança e cria espaço emocional para a chegada de uma criança.',
      'A boa notícia é que quase tudo isso pode ser aprendido. Trocar fralda, dar banho, instalar cadeirinha, reconhecer uma rotina cansativa, organizar consultas e aprender primeiros socorros não são talentos naturais. São competências.',
    ],
    sections: [
      {
        kicker: 'PRESENÇA',
        title: 'Apoiar não é esperar uma tarefa ser delegada',
        paragraphs: [
          'Existe uma diferença entre executar tarefas quando alguém pede e compartilhar a responsabilidade de perceber que a tarefa existe. A segunda parte é a chamada carga mental: lembrar consulta, organizar transporte, pesquisar item de segurança, notar que algo está acabando, antecipar uma necessidade.',
          'Paternidade ativa começa quando o pai passa a ser também uma pessoa que enxerga e planeja o cuidado. Isso reduz a dependência de instruções e transforma o cuidado em responsabilidade realmente compartilhada.',
        ],
      },
      {
        kicker: 'COMPETÊNCIA',
        title: 'Aprenda antes de precisar fazer com sono e pressão',
        paragraphs: [
          'Os primeiros meses trazem tarefas repetitivas e pouco glamour: troca, higiene, colo, esterilização quando aplicável, roupa, choro, sono e deslocamentos. Aprender o básico com antecedência reduz ansiedade e distribui melhor a rotina quando o bebê chegar.',
          'Também vale aprender o que é segurança baseada em evidência — sono seguro, transporte em cadeirinha adequada, ambiente sem fumaça e primeiros socorros. Nesses temas, improviso e “na minha época era assim” são péssimos critérios.',
        ],
      },
      {
        kicker: 'VÍNCULO',
        title: 'Vínculo não depende de grandes gestos',
        paragraphs: [
          'Para um bebê, repetição é poderosa. Voz conhecida, toque cuidadoso, resposta ao choro, contato, rotina e previsibilidade constroem familiaridade. O vínculo paterno cresce na constância, não numa cena específica.',
          'Isso continua depois: ler, brincar no chão, cuidar durante a noite, acompanhar consultas e estar disponível nos momentos ordinários. A maior parte da infância acontece fora das datas especiais.',
        ],
      },
      {
        kicker: 'AUTOCONTROLE',
        title: 'Um pai seguro também sabe regular a própria reação',
        paragraphs: [
          'Privação de sono, choro repetido e sensação de impotência podem elevar irritação. Preparar-se para isso significa combinar revezamento, reconhecer limite e nunca transformar frustração em ação impulsiva contra o bebê ou contra a parceira.',
          'Pedir ajuda, conversar com profissionais e reorganizar a rotina quando algo sai do controle não é fracasso. É gestão de risco familiar.',
        ],
      },
    ],
    callout: {
      label: 'MISSÃO REAL',
      title: 'Troque “como eu ajudo?” por “o que é nossa responsabilidade agora?”',
      text: 'Essa pequena mudança de linguagem costuma levar a uma mudança grande de postura: você deixa de ser assistente e vira cuidador principal junto com a mãe.',
    },
    takeaways: [
      'Paternidade ativa inclui perceber, planejar e executar cuidados.',
      'Competências práticas podem e devem ser aprendidas antes do nascimento.',
      'Vínculo é construído na repetição do cuidado cotidiano.',
    ],
  },

  carros: {
    readingTime: '10 MIN DE LEITURA',
    title: 'O carro de R$ 50 mil que custa mais que o de R$ 60 mil',
    deck: 'Preço de anúncio é só a entrada. Seguro, pneus, consumo, manutenção, liquidez e histórico podem inverter completamente qual usado é o melhor negócio.',
    opening: [
      'Dois carros podem estar separados por R$ 8 mil no anúncio e, ainda assim, o mais barato sair mais caro em três anos. Isso acontece porque compra de usado mistura três variáveis: preço de entrada, risco mecânico e custo recorrente.',
      'É por isso que “qual carro comprar entre R$ 30 mil e R$ 60 mil?” não deveria produzir uma lista única. O carro certo depende de uso urbano ou rodoviário, espaço, transmissão, tolerância a consumo, disponibilidade de peças, seguro e quanto você consegue reservar para manutenção.',
    ],
    sections: [
      {
        kicker: 'CUSTO TOTAL',
        title: 'Transforme o carro em uma conta de 36 meses',
        paragraphs: [
          'Em vez de comparar apenas preço de compra, estime seguro, IPVA, combustível, revisões, pneus, itens de desgaste e uma reserva para reparos. Depois considere revenda. O que importa é a diferença entre tudo que entrou e saiu do seu bolso durante o período.',
          'Um modelo um pouco mais caro, mas confiável e líquido, pode perder menos dinheiro. Um modelo barato com histórico ruim, peças caras ou consumo alto pode virar o oposto de economia.',
        ],
        bullets: [
          'Preço de compra e documentação.',
          'Seguro e impostos anuais.',
          'Combustível no seu padrão real de uso.',
          'Manutenção preventiva + reserva para corretiva.',
          'Depreciação e facilidade de revenda.',
        ],
      },
      {
        kicker: 'QUILOMETRAGEM',
        title: '80 mil km bem cuidados podem ser melhores que 50 mil km misteriosos',
        paragraphs: [
          'Odômetro baixo virou argumento comercial, mas ele não conta a história sozinho. Um carro com manutenção documentada, uso rodoviário e fluidos trocados corretamente pode estar muito melhor que outro com menos quilômetros, uso severo e histórico desconhecido.',
          'Procure coerência: desgaste de volante, pedais e bancos combina com a quilometragem? revisões registradas fazem sentido? pneus têm idade compatível? laudos antigos mostram evolução natural do odômetro? História consistente vale dinheiro.',
        ],
      },
      {
        kicker: 'INSPEÇÃO',
        title: 'Cautelar e mecânica respondem perguntas diferentes',
        paragraphs: [
          'Laudo cautelar ajuda a investigar estrutura, identificação, histórico de sinistro e sinais de reparo. Inspeção mecânica olha motor, transmissão, suspensão, arrefecimento, vazamentos, eletrônica e condição de componentes.',
          'Uma não substitui a outra. Um carro pode ter estrutura íntegra e manutenção péssima; ou mecânica boa e histórico estrutural problemático.',
        ],
      },
      {
        kicker: 'FAIXA 30–60 MIL',
        title: 'O melhor negócio normalmente é uma versão, não apenas um modelo',
        paragraphs: [
          'Motor, câmbio, ano e pacote mudam muito dentro do mesmo nome comercial. Algumas combinações têm histórico excelente; outras carregam problemas específicos ou custo maior. Por isso, o radar do hub deve comparar versão por versão.',
          'A pergunta final não é “este carro é bom?”. É: “esta versão, neste ano, por este preço, neste estado e para o meu uso é boa?”. Essa frase evita boa parte das compras emocionais.',
        ],
      },
    ],
    callout: {
      label: 'REGRA DE OURO',
      title: 'Compre histórico antes de comprar quilometragem',
      text: 'Carro usado é um objeto com passado. Quanto melhor você consegue reconstruí-lo, menor a parte da compra que depende de sorte.',
    },
    takeaways: [
      'Compare usados por custo total, não apenas preço de anúncio.',
      'Quilometragem precisa fazer sentido dentro de um histórico verificável.',
      'Cautelar e inspeção mecânica são complementares.',
    ],
  },

  motos: {
    readingTime: '9 MIN DE LEITURA',
    title: 'Na moto usada, detalhe pequeno pode ser questão de segurança',
    deck: 'Pneus, relação, suspensão, freios, rolamentos e sinais de queda importam proporcionalmente mais porque o piloto depende diretamente de cada componente.',
    opening: [
      'Em um carro, um pneu cansado já é problema. Em uma moto, dois pequenos pontos de contato com o asfalto sustentam aceleração, frenagem e mudança de direção. Isso muda a lógica da compra: condição de componentes de desgaste não é apenas custo, é segurança.',
      'Por isso uma moto “bonita e cheia de acessórios” precisa ser lida com calma. Acessório bem instalado pode agregar conforto; instalação elétrica improvisada, peça estrutural alterada ou histórico de queda escondido pode criar dor de cabeça.',
    ],
    sections: [
      {
        kicker: 'CHECKLIST',
        title: 'Leia a moto de baixo para cima',
        paragraphs: [
          'Comece por pneus e rodas. Veja idade, desgaste irregular, rachaduras, amassados e alinhamento. Depois suba para freios, bengalas e rolamentos. Só então passe para motor, transmissão e elétrica.',
          'Essa ordem ajuda porque muita coisa revela como a moto foi usada. Pneus incompatíveis, relação seca, bengala vazando e manetes tortos contam uma história antes mesmo de ligar o motor.',
        ],
      },
      {
        kicker: 'RELAÇÃO',
        title: 'Corrente, coroa e pinhão contam como o dono cuidava da moto',
        paragraphs: [
          'Folga excessiva, pontos duros, dentes deformados e falta de lubrificação indicam desgaste. Uma relação negligenciada não é só um item a substituir: pode sugerir manutenção geral pouco cuidadosa.',
          'Em motos de uso misto ou viagem, vale também observar proteção inferior, rodas, raios quando aplicável e sinais de impacto em pedaleiras e guidão.',
        ],
      },
      {
        kicker: 'CUSTO',
        title: 'Cilindrada não explica sozinha quanto custa manter',
        paragraphs: [
          'Seguro, disponibilidade de peças, intervalo de revisão, preço de pneus, relação, óleo e consumo podem tornar duas motos da mesma cilindrada muito diferentes no bolso.',
          'Além disso, ergonomia importa. Uma moto econômica que causa desconforto no seu uso real pode acabar sendo uma compra ruim mesmo com manutenção barata.',
        ],
      },
    ],
    callout: {
      label: 'ANTES DE COMPRAR',
      title: 'Estado real > quantidade de acessórios',
      text: 'Baú, protetor, faróis auxiliares e bolha são bônus. Pneus, suspensão, freios, estrutura e manutenção continuam sendo a base.',
    },
    takeaways: [
      'Componentes de desgaste têm impacto direto na segurança.',
      'Sinais pequenos podem revelar histórico de uso e queda.',
      'Compare custo de pneus, peças, seguro e ergonomia — não só cilindrada e potência.',
    ],
  },

  mecanica: {
    readingTime: '10 MIN DE LEITURA',
    title: 'Scanner aponta sintomas; diagnóstico encontra a causa',
    deck: 'Mecânica fica muito mais interessante quando você pensa como um investigador: hipótese, teste, evidência, descarte e só então peça substituída.',
    opening: [
      'Imagine que o scanner mostra P0300: falha de combustão aleatória ou múltipla. Trocar velas pode resolver. Mas também pode não resolver absolutamente nada. Ignição, combustível, entrada de ar, compressão e até sinais incorretos de sensores podem produzir sintomas parecidos.',
      'O código de falha é uma pista produzida pela lógica da ECU. Ele diz onde o sistema percebeu um comportamento fora do esperado; raramente afirma, sozinho, qual componente físico deve ser comprado.',
    ],
    sections: [
      {
        kicker: 'MÉTODO',
        title: 'Sintoma → hipótese → teste → evidência',
        paragraphs: [
          'Se o motor falha em marcha lenta, mas melhora em alta, isso orienta hipóteses diferentes de uma falha que aparece apenas sob carga. Se acontece frio e desaparece quente, outra pista. Temperatura, rotação, carga e momento do defeito são informação diagnóstica.',
          'O mecânico eficiente tenta reproduzir a condição, coleta dados e mede antes de desmontar. Pressão de combustível, correção de mistura, sinal de ignição, compressão e teste de estanqueidade podem separar problemas que parecem iguais ao motorista.',
        ],
      },
      {
        kicker: 'P0300 COMO EXEMPLO',
        title: 'Por que a mesma falha pode nascer em sistemas diferentes',
        paragraphs: [
          'Uma combustão precisa de mistura adequada, compressão e ignição no momento certo. Falta de combustível, excesso de ar falso, centelha fraca ou baixa compressão podem impedir a queima correta. A ECU observa acelerações e desacelerações do virabrequim e identifica que alguns ciclos não produziram torque como esperado.',
          'Por isso, “falha de ignição” no uso popular não significa necessariamente “problema na bobina”. A falha é de combustão; a origem ainda precisa ser investigada.',
        ],
      },
      {
        kicker: 'DADOS',
        title: 'Freeze frame é a fotografia do momento da falha',
        paragraphs: [
          'Muitos módulos registram condições como rotação, carga, temperatura e velocidade quando um DTC é armazenado. Esse freeze frame pode ser extremamente útil para entender em que cenário o defeito apareceu.',
          'Apagar códigos imediatamente, antes de registrar essas informações, pode jogar fora parte da evidência. O scanner é muito mais valioso quando usado para ler contexto do que apenas para apagar luz de injeção.',
        ],
      },
      {
        kicker: 'ORDEM DE TESTE',
        title: 'Comece pelo provável, barato e não invasivo',
        paragraphs: [
          'Diagnóstico bom tenta maximizar informação por esforço. Inspeção visual, conectores, mangueiras, níveis, histórico de manutenção e dados ao vivo podem eliminar hipóteses antes de qualquer troca cara.',
          'Trocar peça por tentativa pode ocasionalmente acertar, mas transforma diagnóstico em loteria — e pode introduzir novos problemas se componentes bons forem substituídos por peças inferiores.',
        ],
      },
    ],
    callout: {
      label: 'MENTALIDADE',
      title: 'DTC não é sentença de peça',
      text: 'O código descreve uma condição detectada. A causa precisa ser demonstrada por evidência.',
    },
    takeaways: [
      'Condição em que o defeito aparece é parte do diagnóstico.',
      'Falha de combustão pode nascer em ignição, combustível, ar ou compressão.',
      'Dados ao vivo e freeze frame transformam scanner em ferramenta de diagnóstico, não apagador de luz.',
    ],
  },

  nautica: {
    readingTime: '10 MIN DE LEITURA',
    title: 'Barco parado continua navegando pelo seu orçamento',
    deck: 'Marina, corrosão, combustível envelhecido, casco, motor e documentação continuam existindo mesmo quando a embarcação passa semanas sem sair da vaga.',
    opening: [
      'Quem olha o preço de uma lancha costuma enxergar a compra. Quem já mantém uma embarcação aprende a enxergar o ciclo: onde fica, como é movimentada, quanto custa preparar para uso, o que deteriora parada e o que precisa ser revisado mesmo navegando pouco.',
      'No ambiente marítimo, sal, umidade e eletricidade formam uma combinação agressiva. Por isso prevenção contra corrosão e manutenção de sistemas elétricos e de arrefecimento não são luxo estético; fazem parte da confiabilidade.',
    ],
    sections: [
      {
        kicker: 'MARINA',
        title: 'A vaga é apenas uma parte do serviço',
        paragraphs: [
          'Marinas podem cobrar por pé, metro, tipo de vaga ou pacote. Mas comparar somente mensalidade engana. Vale verificar içamento, lavagem, água, energia, estacionamento, apoio de marinheiro, segurança, horário de operação e regras de permanência.',
          'Uma vaga mais barata pode gerar custos extras toda vez que você usa o barco. Uma mais cara pode incluir serviços que reduzem trabalho e manutenção. O custo real depende de frequência de uso.',
        ],
      },
      {
        kicker: 'MOTOR',
        title: 'Pouco uso também cria problema',
        paragraphs: [
          'Combustível envelhece, baterias descarregam, umidade ataca conexões e componentes permanecem sujeitos à corrosão. Motores precisam de rotina compatível com o fabricante e com o ambiente de operação.',
          'Depois de uso em água salgada, procedimentos de lavagem e conservação ajudam a reduzir depósitos e corrosão. O detalhe exato varia conforme motor e sistema de refrigeração — por isso manual e oficina náutica qualificada importam.',
        ],
      },
      {
        kicker: 'NAVEGAÇÃO',
        title: 'Planejar uma saída é administrar margem de segurança',
        paragraphs: [
          'Meteorologia, vento, estado do mar, autonomia, combustível de reserva, comunicação, equipamentos obrigatórios, rota e alternativa de retorno entram no mesmo planejamento.',
          'Em lagos, represas e rios o problema muda, mas não desaparece: profundidade, obstáculos, margens, nível da água, tráfego e regras locais podem ser tão importantes quanto ondas e maré.',
        ],
      },
      {
        kicker: 'CUSTO ANUAL',
        title: 'A conta mais honesta soma meses bons e ruins',
        paragraphs: [
          'Uma estimativa razoável precisa incluir marina, seguro, documentação, manutenção preventiva, corretivas, combustível, limpeza, produtos de conservação e eventuais serviços de casco. Em embarcações maiores, mão de obra e peças podem crescer rapidamente.',
          'A melhor pergunta antes de comprar não é “consigo pagar o barco?”. É “consigo manter o barco sem evitar manutenção por causa do custo?”.',
        ],
      },
    ],
    callout: {
      label: 'REGRA NÁUTICA',
      title: 'Segurança começa antes de soltar as amarras',
      text: 'Condição da embarcação, previsão, autonomia e plano de retorno fazem parte da navegação tanto quanto pilotar.',
    },
    takeaways: [
      'Compare marina pelo pacote real de serviços e não só pelo valor da vaga.',
      'Inatividade também deteriora sistemas.',
      'Orçamento náutico precisa incluir manutenção e segurança como custos permanentes.',
    ],
  },

  viagens: {
    readingTime: '10 MIN DE LEITURA',
    title: 'A melhor viagem começa antes de escolher o hotel',
    deck: 'Destino bonito é só uma camada. Documento, entrada no país, época, deslocamento, saúde, conectividade, câmbio e ritmo de roteiro determinam quanto você realmente aproveita.',
    opening: [
      'Pesquisar viagem pela foto mais bonita quase sempre empurra as decisões difíceis para depois. Quando você começa por logística, o roteiro melhora: sabe quantos dias realmente precisa, onde vale dormir, quando deslocamentos são cansativos e quanto custa sair de casa até voltar.',
      'Isso vale para um fim de semana perto de São Paulo e para uma viagem internacional. A diferença está na quantidade de fricção: fronteira, moeda, seguro, idioma, internet, regras de entrada e distância aumentam o número de variáveis.',
    ],
    sections: [
      {
        kicker: 'PERTO DE SP',
        title: 'Tempo de deslocamento muda completamente a qualidade do fim de semana',
        paragraphs: [
          'Um destino a 150 km pode levar duas horas ou cinco, dependendo de horário, serra, feriado e estrada. Por isso, distância em quilômetros é menos útil que tempo porta a porta.',
          'Para escapadas curtas, o ideal é equilibrar deslocamento e permanência. Se metade do sábado e metade do domingo desaparecem no trânsito, talvez um destino mais próximo gere uma viagem melhor.',
        ],
      },
      {
        kicker: 'HISTÓRIA',
        title: 'Lugar histórico fica melhor quando você sabe o que aconteceu ali',
        paragraphs: [
          'Uma igreja, estação, fortaleza ou centro antigo ganha outra dimensão quando você conhece o período, quem construiu, quais conflitos passaram por ali e como o lugar se conectava à economia da época.',
          'Por isso o hub deve combinar roteiro com contexto. Viajar deixa de ser apenas “ver atrações” e vira uma forma de enxergar geografia, arquitetura e política materializadas no espaço.',
        ],
      },
      {
        kicker: 'INTERNACIONAL',
        title: 'Visto é só uma parte das regras de entrada',
        paragraphs: [
          'Mesmo quando brasileiros não precisam solicitar visto turístico antecipado, podem existir requisitos de validade do documento, passagem de saída, comprovação de hospedagem, seguro, recursos financeiros ou autorizações específicas.',
          'Essas regras mudam. A hierarquia correta é: fonte oficial do governo do destino, consulado/embaixada e orientações do Itamaraty. Blog e vídeo servem para experiência prática, não como fonte final de exigência migratória.',
        ],
      },
      {
        kicker: 'ORÇAMENTO',
        title: 'Preço da passagem não é preço da viagem',
        paragraphs: [
          'Some transporte até o aeroporto, bagagem, deslocamento local, hospedagem, alimentação, ingressos, seguro, internet, câmbio e margem para imprevistos. Só então compare destinos.',
          'Em países baratos para comer, passagem pode dominar a conta. Em destinos próximos, hospedagem ou aluguel de carro pode pesar mais. A estrutura do custo muda de lugar para lugar.',
        ],
      },
    ],
    callout: {
      label: 'ROTEIRO BOM',
      title: 'Menos checkpoints, mais tempo de presença',
      text: 'Uma viagem costuma ficar melhor quando o roteiro deixa margem para caminhar, comer com calma e descobrir algo que não estava na lista.',
    },
    takeaways: [
      'Planeje por tempo porta a porta, não apenas quilômetros ou preço da passagem.',
      'Regras migratórias devem ser confirmadas em fonte oficial perto da data da viagem.',
      'Contexto histórico transforma atração em experiência.',
    ],
  },
};
