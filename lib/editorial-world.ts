import type { EditorialDossier } from './editorial-dossier-types';

export const editorialWorld: Record<string, EditorialDossier> = {
  brasil: {
    readingTime: '7 MIN DE LEITURA',
    title: 'Como uma decisão de Brasília vira efeito na sua rua',
    deck: 'Orçamento público parece distante até você seguir o caminho do dinheiro: autorização, bloqueio, execução, obra, serviço — e só então impacto real.',
    opening: [
      'Quando aparece uma manchete dizendo que “R$ 5,7 bilhões foram desbloqueados”, o número sozinho impressiona, mas explica pouco. A pergunta útil é outra: esse dinheiro estava destinado a quê, quem pode gastá-lo, em que estágio está e quanto disso realmente chega a serviços, obras ou contratos?',
      'Entender Brasil fica muito mais interessante quando você acompanha o mecanismo em vez da disputa de narrativa. Orçamento não é uma conta bancária única; é um conjunto de autorizações, limites, despesas obrigatórias, despesas discricionárias e regras fiscais que mudam o ritmo de execução ao longo do ano.',
    ],
    sections: [
      {
        kicker: 'CAMADA 01',
        title: 'Autorizado não significa pago',
        paragraphs: [
          'Uma despesa pode existir na Lei Orçamentária e ainda assim não ter saído do caixa. Entre a autorização e o pagamento existem etapas. Em linguagem simples: primeiro o governo reserva a verba para um compromisso; depois confirma que o bem ou serviço foi entregue; por fim efetua o pagamento.',
          'Isso ajuda a ler notícias com mais cuidado. Um anúncio de verba pode ser politicamente relevante, mas ainda está longe de significar uma entrega concluída. O dado mais interessante muitas vezes é o percentual executado e não apenas o valor anunciado.',
        ],
        bullets: [
          'Pergunte se o valor é autorização, empenho, liquidação ou pagamento.',
          'Compare o número com o orçamento total da área, e não isoladamente.',
          'Observe se existe prazo, projeto definido e órgão responsável pela execução.',
        ],
      },
      {
        kicker: 'CAMADA 02',
        title: 'Por que o governo bloqueia dinheiro que já estava previsto?',
        paragraphs: [
          'Porque receitas e despesas não permanecem idênticas ao que foi previsto meses antes. Se a arrecadação fica abaixo do esperado ou uma despesa obrigatória cresce, o governo pode restringir temporariamente parte das despesas discricionárias para cumprir as regras fiscais.',
          'O inverso também acontece. Se projeções melhoram, parte do espaço pode ser liberada. O ponto central é que bloqueio e desbloqueio são instrumentos de gestão ao longo do exercício; não são, sozinhos, prova de eficiência ou ineficiência.',
        ],
      },
      {
        kicker: 'CAMADA 03',
        title: 'O impacto que aparece perto de você',
        paragraphs: [
          'A União financia e transfere recursos para uma enorme variedade de políticas, mas a execução concreta muitas vezes passa por estados, municípios, universidades, hospitais, concessionárias e empresas contratadas. Por isso, um fato nacional pode demorar meses para virar uma mudança perceptível no cotidiano.',
          'Quando quiser saber se algo realmente melhorou, procure o indicador final: fila diminuiu? obra avançou? equipamento foi entregue? escola recebeu recurso? estrada foi recuperada? Essa mudança de pergunta transforma notícia em acompanhamento de política pública.',
        ],
      },
    ],
    callout: {
      label: 'REGRA DE LEITURA',
      title: 'Anúncio → autorização → execução → resultado',
      text: 'Quanto mais perto você chega do fim dessa cadeia, mais perto está de medir o efeito real da política pública.',
    },
    takeaways: [
      'Valor anunciado e valor efetivamente executado são coisas diferentes.',
      'Bloqueios podem refletir atualização de receitas e despesas, não apenas “corte político”.',
      'O melhor indicador é o resultado concreto produzido pela execução do recurso.',
    ],
  },

  politica: {
    readingTime: '8 MIN DE LEITURA',
    title: 'Como analisar um candidato sem comprar a campanha dele',
    deck: 'Campanha é narrativa. Voto informado exige separar trajetória, competência do cargo, alianças, decisões anteriores e promessas que realmente cabem naquele posto.',
    opening: [
      'Durante uma eleição, todos os candidatos tentam organizar a própria história em uma sequência simples: problema, responsável, solução. Isso faz parte da campanha. O eleitor ganha muito quando reconstrói essa história por conta própria, com fatos e atribuições reais do cargo.',
      'A primeira pergunta não deveria ser “gosto dele?”. Deveria ser: o que este cargo pode efetivamente fazer, o que essa pessoa já administrou ou votou, quais alianças precisa formar para governar e como o histórico dela conversa com o que promete agora?',
    ],
    sections: [
      {
        kicker: 'PASSO 01',
        title: 'Descubra o que o cargo realmente controla',
        paragraphs: [
          'Presidente, governador, senador e deputado têm poderes muito diferentes. Um governador não define sozinho a taxa Selic; um senador não administra diretamente hospital estadual; um presidente não aprova uma lei sem o Congresso. Parece básico, mas boa parte da propaganda mistura competências.',
          'Quando uma promessa aparece, pergunte: isso depende de decreto, lei, orçamento, decisão estadual, município ou Congresso? A resposta muda totalmente a chance de execução.',
        ],
      },
      {
        kicker: 'PASSO 02',
        title: 'Leia o currículo político como evidência, não como biografia',
        paragraphs: [
          'Ter ocupado cargos anteriores não é automaticamente mérito nem demérito. O valor está no que você consegue verificar: projetos conduzidos, votações, indicadores, orçamento administrado, prioridades e controvérsias relevantes.',
          'Para executivos, procure gestão e resultados. Para parlamentares, procure votos, relatórios, projetos, presença em comissões e atuação legislativa. Avaliar alguém pelo tipo de trabalho que o cargo exigia é muito mais justo do que usar uma régua genérica.',
        ],
      },
      {
        kicker: 'PASSO 03',
        title: 'Promessa sem mecanismo é publicidade',
        paragraphs: [
          'Uma proposta fica mais séria quando responde a quatro perguntas: quanto custa, de onde vem o dinheiro, qual instrumento jurídico será usado e em quanto tempo pode produzir efeito. Sem isso, mesmo uma ideia popular pode ser apenas intenção.',
          'Outra pista é verificar dependências. Uma reforma pode precisar de maioria no Congresso; uma política estadual pode depender de municípios; um programa nacional pode esbarrar em capacidade de execução. Governar é coordenação, não somente decisão individual.',
        ],
      },
      {
        kicker: 'SP / ITAQUERA',
        title: 'O que vale observar quando a pauta é São Paulo',
        paragraphs: [
          'Para quem vive na Zona Leste, política estadual aparece de forma muito concreta em mobilidade, segurança, hospitais estaduais, ensino médio, transporte metropolitano, saneamento e grandes obras. Já serviços locais, zeladoria urbana e parte da atenção básica são temas municipais.',
          'Isso ajuda a direcionar cobrança. Se o problema é trem metropolitano, a pergunta política é diferente de um problema de iluminação de rua. Saber quem tem competência é o começo de uma cobrança mais eficiente.',
        ],
      },
    ],
    callout: {
      label: 'CHECK RÁPIDO',
      title: 'Competência + histórico + mecanismo + custo',
      text: 'Se uma proposta não sobrevive a essas quatro perguntas, ela ainda não está madura o suficiente para ser tratada como plano.',
    },
    takeaways: [
      'Campanha simplifica; análise reconstrói as dependências reais.',
      'Compare o histórico do candidato com as funções do cargo que ele ocupou.',
      'Proposta boa explica como será executada, financiada e aprovada.',
    ],
  },

  mundo: {
    readingTime: '8 MIN DE LEITURA',
    title: 'Por que um estreito distante consegue mexer no preço das coisas no Brasil',
    deck: 'Geopolítica fica muito mais interessante quando você acompanha a cadeia física: navio, seguro, petróleo, frete, câmbio, indústria, inflação e juros.',
    opening: [
      'O Estreito de Hormuz parece apenas um ponto estreito no mapa. Na prática, é um gargalo: uma quantidade enorme de energia exportada pelo Golfo Pérsico precisa atravessar uma passagem marítima relativamente pequena. Quando aumenta o risco de interrupção, o mercado não espera o pior acontecer para reagir.',
      'O primeiro movimento pode aparecer no petróleo. Depois vêm seguro marítimo, custo de frete, derivativos, câmbio e expectativas de inflação. É assim que um evento geopolítico consegue viajar milhares de quilômetros sem que um único barril destinado ao Brasil tenha sido fisicamente bloqueado.',
    ],
    sections: [
      {
        kicker: 'MECANISMO',
        title: 'Mercados precificam risco antes da escassez',
        paragraphs: [
          'Se empresas acreditam que existe chance maior de interrupção futura, compradores podem tentar garantir suprimento, seguradoras podem cobrar mais e traders ajustam preços. O resultado é um prêmio de risco: parte do preço passa a representar a incerteza, não somente a oferta e demanda observadas naquele minuto.',
          'Isso explica por que um sinal diplomático positivo pode derrubar o petróleo mesmo sem nenhum navio adicional ter passado pelo estreito. O mercado está atualizando probabilidades.',
        ],
      },
      {
        kicker: 'BRASIL',
        title: 'O caminho até o seu bolso não é direto',
        paragraphs: [
          'Petróleo internacional é uma referência importante, mas o preço final de combustíveis no Brasil depende também de câmbio, política comercial das refinarias, impostos, biocombustíveis, distribuição e margens. Por isso, “Brent subiu 10%” não significa “gasolina sobe 10% amanhã”.',
          'O efeito indireto pode ser ainda mais relevante. Diesel influencia transporte rodoviário; frete entra em alimentos e bens; energia mais cara pressiona custos industriais; inflação mais resistente pode dificultar cortes de juros.',
        ],
      },
      {
        kicker: 'LEITURA DE CENÁRIO',
        title: 'Três perguntas que evitam manchetes enganosas',
        paragraphs: [
          'Primeiro: o evento já aconteceu ou é um risco? Segundo: qual canal transmite o choque até o Brasil? Terceiro: existe algum amortecedor — estoque, fornecedor alternativo, câmbio favorável, política de preços — capaz de reduzir o efeito?',
          'Essa estrutura funciona para petróleo, guerras, sanções, fertilizantes, semicondutores e praticamente qualquer tema de geopolítica econômica.',
        ],
      },
    ],
    callout: {
      label: 'CADEIA DE IMPACTO',
      title: 'Risco geopolítico → energia → transporte → preços → juros',
      text: 'Nem toda crise percorre a cadeia inteira, mas mapear os elos mostra onde o impacto pode aparecer e onde pode ser amortecido.',
    },
    takeaways: [
      'O mercado reage à probabilidade de interrupção, não apenas à interrupção consumada.',
      'Preço internacional e preço ao consumidor estão ligados, mas não são a mesma coisa.',
      'Geopolítica fica mais clara quando você identifica o canal econômico de transmissão.',
    ],
  },

  tempo: {
    readingTime: '8 MIN DE LEITURA',
    title: 'El Niño não “manda chover”: ele inclina as probabilidades do planeta',
    deck: 'O fenômeno começa no Pacífico tropical, reorganiza circulação atmosférica e altera as chances de certos padrões climáticos a milhares de quilômetros.',
    opening: [
      'Uma das formas mais comuns de entender errado o El Niño é tratá-lo como uma chave: ligou, então o Sul terá chuva e outra região terá seca. A atmosfera não funciona assim. El Niño muda o pano de fundo, favorecendo alguns padrões e desfavorecendo outros.',
      'O mecanismo começa no oceano. Mudanças na temperatura da superfície do Pacífico tropical interagem com os ventos e com a circulação atmosférica. Quando esse sistema acoplado muda de estado, ondas e padrões de circulação conseguem redistribuir efeitos pelo globo — as chamadas teleconexões.',
    ],
    sections: [
      {
        kicker: 'OCEANO + ATMOSFERA',
        title: 'Por que o Pacífico consegue influenciar lugares tão distantes',
        paragraphs: [
          'O Pacífico tropical cobre uma área enorme e recebe grande quantidade de energia solar. A posição das águas mais quentes influencia onde o ar sobe, onde se formam grandes áreas de chuva e como a circulação tropical distribui calor.',
          'Quando a configuração muda, a atmosfera responde. Correntes de jato, sistemas de alta e baixa pressão e trajetórias preferenciais de tempestades podem ser deslocados. Esse processo não cria uma previsão local automática, mas altera o conjunto de cenários mais prováveis.',
        ],
      },
      {
        kicker: 'PREVISÃO',
        title: '97% de chance não significa 97% de intensidade',
        paragraphs: [
          'Probabilidade de persistência responde a uma pergunta: qual a chance de o estado El Niño continuar? Intensidade responde a outra: quão forte será o aquecimento e a resposta do sistema? Misturar as duas gera interpretações exageradas.',
          'Modelos climáticos também são atualizados. Uma projeção publicada em julho é uma fotografia das melhores evidências daquele momento, não um contrato com o futuro.',
        ],
      },
      {
        kicker: 'NO DIA A DIA',
        title: 'Clima e previsão do tempo são escalas diferentes',
        paragraphs: [
          'El Niño pode elevar a chance de uma estação mais úmida em determinada região, mas amanhã ainda pode fazer sol. Clima descreve estatísticas e padrões; tempo descreve o estado da atmosfera em horas e dias.',
          'Para decisões imediatas — viagem, estrada, chuva forte — vale olhar previsão e alertas. Para agricultura, reservatórios e planejamento sazonal, o sinal climático ganha mais peso.',
        ],
      },
    ],
    callout: {
      label: 'IDEIA-CHAVE',
      title: 'Clima muda as probabilidades; tempo realiza um dos cenários',
      text: 'Essa frase ajuda a evitar quase todas as interpretações deterministas sobre El Niño, La Niña e tendências sazonais.',
    },
    takeaways: [
      'El Niño é um sistema acoplado oceano-atmosfera, não apenas “água quente”.',
      'Teleconexões alteram padrões distantes sem determinar o tempo de cada cidade.',
      'Probabilidade, persistência e intensidade são medidas diferentes.',
    ],
  },

  financas: {
    readingTime: '9 MIN DE LEITURA',
    title: 'O dinheiro fica mais simples quando você para de tratar despesas previsíveis como surpresa',
    deck: 'Boa organização financeira não começa em escolher investimento. Começa em transformar o futuro previsível em parcelas mensais do presente.',
    opening: [
      'IPVA, seguro, manutenção, matrícula, viagem, presente de aniversário e renovação anual não são emergências. Eles só parecem emergências quando entram no orçamento como se tivessem surgido do nada.',
      'Uma das mudanças mais poderosas é criar provisões: se uma despesa de R$ 2.400 virá daqui a doze meses, o problema real não é encontrar R$ 2.400 naquele mês; é separar R$ 200 por mês desde agora. Isso reduz drasticamente a quantidade de decisões tomadas sob pressão.',
    ],
    sections: [
      {
        kicker: 'BASE',
        title: 'Fluxo de caixa vem antes de rentabilidade',
        paragraphs: [
          'Investir sem entender o próprio fluxo de caixa pode criar uma falsa sensação de progresso. Você vê dinheiro aplicado, mas continua financiando despesas previsíveis no cartão ou pagando juros quando alguma conta maior chega.',
          'O primeiro mapa precisa mostrar quanto entra, quanto é fixo, quanto é variável, quanto precisa ser provisionado e quanto sobra de verdade. Só então faz sentido discutir destino para o excedente.',
        ],
      },
      {
        kicker: 'CRÉDITO',
        title: 'Parcela pequena pode esconder um custo grande',
        paragraphs: [
          'Quando comparamos financiamentos, a parcela é a informação mais visível e uma das menos suficientes. Prazo maior reduz a parcela, mas pode elevar muito o valor total pago. Por isso existe o Custo Efetivo Total, que tenta reunir juros, tarifas e outros encargos da operação.',
          'Uma boa pergunta é: quanto custa comprar tempo? Se antecipar uma compra significa pagar milhares de reais extras, você consegue avaliar conscientemente se esse tempo vale o preço.',
        ],
      },
      {
        kicker: 'RESERVA',
        title: 'Reserva de emergência compra poder de decisão',
        paragraphs: [
          'A reserva não existe para maximizar retorno. Ela existe para impedir que um problema inesperado obrigue você a aceitar crédito caro, vender um ativo em momento ruim ou atrasar compromissos.',
          'Por isso, liquidez e previsibilidade normalmente importam mais do que buscar o maior rendimento possível. O tamanho ideal depende de estabilidade de renda, despesas essenciais, dependentes e outras proteções existentes.',
        ],
      },
      {
        kicker: 'INVESTIMENTOS',
        title: 'Produto financeiro deve ser consequência do objetivo',
        paragraphs: [
          'Em vez de começar perguntando “qual investimento rende mais?”, comece por “quando vou precisar desse dinheiro e o que não pode acontecer com ele?”. Prazo, necessidade de liquidez e tolerância a perda definem a classe de produto muito antes da taxa anunciada.',
          'Essa inversão de lógica reduz decisões por moda. Investimento deixa de ser coleção de produtos e passa a ser arquitetura de objetivos.',
        ],
      },
    ],
    callout: {
      label: 'MÉTODO',
      title: 'Hoje → previsível → emergência → objetivos → investimento',
      text: 'Organizar nessa ordem costuma ser mais robusto do que tentar “investir primeiro e se organizar depois”.',
    },
    takeaways: [
      'Despesa anual previsível deve virar provisão mensal.',
      'Compare crédito pelo custo total e não apenas pela parcela.',
      'Reserva prioriza segurança e liquidez; investimento deve seguir o objetivo.',
    ],
    disclaimer: 'Conteúdo educativo. Decisões financeiras relevantes devem considerar sua renda, dívidas, objetivos, impostos e perfil de risco.',
  },
};
