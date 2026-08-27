export function applyCurrentReelPatches20260827(dailyContent: Record<string, any>) {
  Object.assign(dailyContent['seguranca-zl'], {
    title: 'Vacinação contra sarampo acontece hoje no Shopping Metrô Itaquera, das 10h às 20h',
    summary: 'A Secretaria Municipal da Saúde realiza nesta quinta-feira (27) uma ação de vacinação contra o sarampo no Shopping Metrô Itaquera, das 10h às 20h. A estratégia atende pessoas de 6 meses a 59 anos, conforme as recomendações vigentes, e usa a vacina tríplice viral. O serviço também continua na sexta-feira (28).',
    shareSummary: 'Zona Leste · 27/08: vacinação contra sarampo hoje no Shopping Metrô Itaquera, das 10h às 20h. A ação municipal atende pessoas de 6 meses a 59 anos conforme a estratégia vigente.',
    badge: 'ZONA LESTE · SERVIÇO DE HOJE · 27/08',
    readTime: '3 MIN',
    sections: [
      { title: 'Serviço de hoje', bullets: [
        'Data: quinta-feira, 27/08/2026.',
        'Horário: 10h às 20h.',
        'Local: Shopping Metrô Itaquera.',
        'Público da estratégia: pessoas de 6 meses a 59 anos, observadas recomendações e contraindicações por faixa etária.'
      ]},
      { title: 'Por que importa', paragraphs: [
        'A ação leva vacinação para um ponto de grande circulação ligado à estação Corinthians-Itaquera, ampliando a oportunidade de acesso sem depender exclusivamente da ida a uma UBS.'
      ]},
      { title: 'O que acompanhar', bullets: [
        'A ação continua em 28/08 no mesmo horário.',
        'Quem tiver dúvida sobre indicação, esquema anterior ou contraindicação deve confirmar com a equipe de vacinação.'
      ]}
    ],
    sources: [
      { label: 'Secretaria Municipal da Saúde · vacinação no Shopping Metrô Itaquera · serviço de 27 e 28/08', url: 'https://prefeitura.sp.gov.br/web/saude/w/prefeitura-realiza-vacina%C3%A7%C3%A3o-contra-sarampo-no-shopping-metr%C3%B4-itaquera' },
      { label: 'Prefeitura de São Paulo · ação das 10h às 20h · publicado em 26/08', url: 'https://prefeitura.sp.gov.br/web/prefeitura-de-sao-paulo/w/shopping-metr%C3%B4-itaquera-recebe-vacina%C3%A7%C3%A3o-contra-sarampo-nesta-quinta-e-sexta-feira' }
    ]
  });

  Object.assign(dailyContent.politica, {
    title: 'Radar eleitoral 27/08: entrevista de Lula está na agenda e TSE tem sessão nesta quinta',
    summary: 'Luiz Inácio Lula da Silva está previsto na série de entrevistas presidenciais da Globo nesta quinta-feira (27). O TSE também tem sessão de julgamentos prevista para hoje. Agenda anunciada não equivale a presença consumada nem a decisão já tomada; pesquisas divulgadas em dias anteriores permanecem contexto, não “pesquisa de hoje”.',
    shareSummary: 'Política · 27/08: Lula está na agenda de entrevista da Globo e o TSE tem sessão nesta quinta. Agenda, presença, pesquisa e decisão continuam separadas editorialmente.',
    badge: 'POLÍTICA · RADAR 27/08',
    readTime: '5 MIN',
    sections: [
      { title: 'Agenda de hoje', bullets: [
        'Lula está previsto para entrevista presidencial da Globo nesta quinta-feira (27).',
        'O TSE tem sessão de julgamentos prevista para hoje; pauta e decisões devem ser tratadas somente após publicação oficial.',
        'Agenda anunciada não equivale a presença consumada: o status muda apenas quando o evento ocorrer ou houver confirmação/cancelamento.'
      ]},
      { title: 'Pesquisas', paragraphs: [
        'Até esta revisão das 05h, não foi incorporada pesquisa presidencial com divulgação em 27/08. Levantamentos de dias anteriores seguem apenas como contexto datado.'
      ]},
      { title: 'O que acompanhar', bullets: [
        'Comparecimento efetivo à entrevista e principais declarações.',
        'Decisões efetivamente publicadas pelo TSE ao longo do dia.',
        'Novos registros/divulgações de pesquisa no PesqEle/TSE.',
        'Alterações de horário, presença ou cancelamento de sabatinas e debates.'
      ]}
    ],
    sources: [
      { label: 'UOL · calendário das entrevistas presidenciais', url: 'https://noticias.uol.com.br/eleicoes/2026/08/26/entrevista-de-augusto-cury-na-globo-veja-quando-e-e-como-assistir.ghtm' },
      { label: 'TSE · pauta de julgamentos desta quinta-feira (27)', url: 'https://www.tse.jus.br/comunicacao/noticias/2026/Agosto/confira-a-pauta-de-julgamentos-do-tse-desta-quinta-feira-27' },
      { label: 'TSE · portal oficial', url: 'https://www.tse.jus.br/' }
    ]
  });

  Object.assign(dailyContent.mundo, {
    title: 'Hormuz tem leve alta de tráfego, mas fluxo continua muito abaixo do normal',
    summary: 'Dados citados pela Reuters nesta quinta-feira (27) mostram 10 navios de commodities atravessando o Estreito de Hormuz na quarta, contra oito na terça, ainda abaixo da média móvel recente e muito distante do nível anterior ao conflito. Irã e Omã continuam negociando regras de gestão e receitas da rota; melhora pontual de tráfego não significa reabertura normalizada.',
    shareSummary: 'Mundo · 27/08: tráfego por Hormuz subiu levemente, mas segue muito abaixo do normal. Irã e Omã continuam negociando; não é correto chamar isso de normalização.',
    badge: 'MUNDO · HORMUZ · 27/08',
    readTime: '4 MIN',
    sections: [
      { title: 'O que mudou hoje', bullets: [
        'Reuters/Kpler contabilizaram 10 navios de commodities em trânsito na quarta, contra oito na terça.',
        'O nível segue abaixo da média móvel recente e muito aquém do fluxo pré-conflito.',
        'Alguns navios podem operar com AIS desligado, portanto as contagens têm limitações.'
      ]},
      { title: 'Negociação em andamento', paragraphs: [
        'Irã e Omã continuam discutindo gestão e receitas do estreito. Enquanto os detalhes não forem formalizados e o fluxo não se recuperar de forma sustentada, negociação não deve ser tratada como reabertura concluída.'
      ]}
    ],
    sources: [
      { label: 'Reuters · Shipping traffic through Strait of Hormuz rises slightly · 27/08/2026', url: 'https://www.reuters.com/world/middle-east/shipping-traffic-through-strait-hormuz-rises-slightly-data-shows-2026-08-27/' },
      { label: 'Reuters · Oil extends losses on hopes for Middle East talks · 27/08/2026', url: 'https://www.reuters.com/business/energy/oil-prices-extend-losses-expectations-talks-ease-middle-east-supply-woes-2026-08-27/' }
    ]
  });

  Object.assign(dailyContent.tempo, {
    title: 'São Paulo começa 27/08 com 18°C, muita nebulosidade e sem chuva no radar',
    summary: 'Boletim do CGE às 00h18 desta quinta-feira registra média de 18°C, aumento de nebulosidade e ausência de áreas de instabilidade sobre a capital. Esta é uma fotografia da madrugada e deve ser substituída se o CGE publicar mudança material de chuva, temperatura ou umidade ao longo do dia.',
    shareSummary: 'Tempo · 27/08: madrugada começou com média de 18°C, muita nebulosidade e sem chuva detectada pelo radar do CGE.',
    badge: 'TEMPO · CGE · 27/08',
    readTime: '3 MIN',
    sections: [
      { title: 'Madrugada', bullets: [
        'Média de temperatura na rede do CGE: 18°C.',
        'Aumento de nebulosidade.',
        'Radar sem áreas de instabilidade sobre a capital no momento do boletim.'
      ]},
      { title: 'Limite da informação', paragraphs: [
        'Boletim meteorológico é fotografia de um horário específico. Não significa que todo o dia permanecerá sem chuva ou com a mesma temperatura.'
      ]}
    ],
    sources: [{ label: 'CGE São Paulo · previsão estendida · 27/08/2026 00h18', url: 'https://www.cgesp.org/v3/previsao_estendida.jsp' }]
  });

  Object.assign(dailyContent.games, {
    title: 'gamescom Awesome Indies acontece hoje às 15h em São Paulo',
    summary: 'A programação oficial da gamescom marca para esta quinta-feira (27) o Awesome Indies, produzido pela IGN, às 20h CEST — 15h no horário de São Paulo. A transmissão deve durar cerca de 60 a 75 minutos e é dedicada a jogos independentes, novidades e trailers. Só anúncios efetivamente mostrados entram depois como confirmados.',
    shareSummary: 'Games · 27/08: gamescom Awesome Indies acontece hoje às 15h em São Paulo, com cerca de 60–75 minutos de jogos independentes e trailers.',
    badge: 'GAMES · EVENTO CONFIRMADO · 27/08',
    readTime: '4 MIN',
    sections: [
      { title: 'Agenda confirmada', bullets: [
        'Data: quinta-feira, 27/08/2026.',
        'Horário oficial: 20h CEST, equivalente a 15h em São Paulo.',
        'Duração prevista: cerca de 60 a 75 minutos.',
        'Produção: IGN, dentro da programação oficial da gamescom.'
      ]},
      { title: 'O que não antecipar', paragraphs: [
        'A existência do evento está confirmada, mas jogos, datas e recursos só devem ser tratados como confirmados depois de aparecerem no show ou em comunicação oficial do estúdio/publisher.'
      ]},
      { title: 'O que acompanhar', bullets: [
        'World premieres e novos trailers de indies.',
        'Datas de lançamento anunciadas oficialmente.',
        'Demos, plataformas e disponibilidade confirmadas pelos estúdios.'
      ]}
    ],
    sources: [
      { label: 'gamescom · Awesome Indies 2026 · programação oficial', url: 'https://www.gamescom.global/en/video/gamescom-awesome-indies-2026' },
      { label: 'gamescom · highlights e horário do Awesome Indies', url: 'https://www.gamescom.global/en/gamescom-opening-night-live-unveils-first-highlights-more-than-1700-exhibitors-at-the-worlds-biggest-gaming-event' }
    ]
  });

  Object.assign(dailyContent.financas, {
    title: 'Mercados em 27/08: Nvidia sustenta tecnologia enquanto petróleo recua com expectativa de diálogo',
    summary: 'Os mercados globais abriram esta quinta-feira reagindo a dois vetores diferentes: o guidance forte da Nvidia sustentou ações de tecnologia, enquanto o petróleo recuou diante da expectativa de novas conversas sobre o Oriente Médio. É uma fotografia intradiária, não fechamento. Para o Brasil, petróleo, dólar e juros globais continuam sendo os canais práticos a acompanhar.',
    shareSummary: 'Finanças · 27/08: tecnologia recebe impulso da Nvidia e petróleo recua com expectativa diplomática. Leitura intradiária, não fechamento.',
    badge: 'FINANÇAS · MERCADOS · 27/08',
    readTime: '4 MIN',
    sections: [
      { title: 'O que move a manhã', bullets: [
        'Resultados e projeções da Nvidia reforçaram o apetite por ações ligadas a IA e semicondutores.',
        'O petróleo caiu com expectativas de conversas que possam reduzir risco de oferta no Oriente Médio.',
        'Mercados europeus ficaram próximos da estabilidade, com tecnologia compensando fraqueza em outros setores.'
      ]},
      { title: 'Impacto prático', paragraphs: [
        'Para o Brasil, petróleo mais baixo pode aliviar parte da pressão externa sobre combustíveis e inflação, enquanto juros e dólar continuam afetando crédito, câmbio e ativos locais. Esses canais não se traduzem automaticamente nem na mesma magnitude para preços domésticos.'
      ]},
      { title: 'O que acompanhar', bullets: [
        'Evolução do Brent e das negociações envolvendo Hormuz.',
        'Reação dos futuros e abertura dos mercados dos EUA após os números da Nvidia.',
        'Dólar e curva de juros brasileira ao longo do pregão.'
      ]}
    ],
    sources: [
      { label: 'Reuters · European shares flat as Nvidia boost offsets sector weakness · 27/08/2026', url: 'https://www.reuters.com/markets/europe/european-shares-flat-nvidia-boost-offsets-sector-weakness-2026-08-27/' },
      { label: 'Reuters · Morning Bid · 27/08/2026', url: 'https://www.reuters.com/business/finance/global-markets-view-europe-2026-08-27/' }
    ]
  });

  Object.assign(dailyContent.tecnologia, {
    title: 'Nvidia e Hugging Face: acordo de US$ 12,9 bi é reportado, mas confirmação das empresas ainda é ponto crítico',
    summary: 'Reuters publicou nesta quinta-feira (27), citando The Information, que a Nvidia concordou em comprar a Hugging Face por US$ 12,9 bilhões. Sem anúncio direto das empresas nesta revisão, o Reel trata a operação como informação reportada por fonte jornalística, não como confirmação corporativa final.',
    shareSummary: 'Tecnologia · 27/08: Reuters relata acordo de US$ 12,9 bi da Nvidia pela Hugging Face. Sem anúncio direto das empresas na revisão, o status permanece reportado.',
    badge: 'TECNOLOGIA · M&A · 27/08',
    readTime: '4 MIN',
    sections: [
      { title: 'O que foi reportado', bullets: [
        'The Information reportou acordo de US$ 12,9 bilhões.',
        'Reuters repercutiu a informação nesta quinta-feira (27).',
        'O status editorial permanece “reportado” enquanto não houver confirmação direta das companhias.'
      ]},
      { title: 'Por que importa', paragraphs: [
        'Hugging Face é infraestrutura central de modelos, datasets e colaboração open source. Uma aquisição desse porte pode afetar governança de modelos, neutralidade de ecossistema, supply chain de artefatos e dependência de plataforma — mas esses efeitos são análise, não consequência consumada.'
      ]}
    ],
    sources: [{ label: 'Reuters · Nvidia agrees to buy Hugging Face for $12.9 billion, The Information reports · 27/08/2026', url: 'https://www.reuters.com/technology/nvidia-talks-acquire-hugging-face-13-billion-deal-business-insider-reports-2026-08-27/' }]
  });

  // Mantidos no hub profundo, mas não publicados como Reels novos em 27/08 sem fato adicional da data corrente.
  Object.assign(dailyContent.seguranca, {
    badge: 'CYBER · CONTEXTO VALIDADO',
  });
  Object.assign(dailyContent['appsec-ssdlc'], {
    badge: 'APPSEC · CONTEXTO VALIDADO',
  });
}
