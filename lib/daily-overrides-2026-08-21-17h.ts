import { dailyContent, todayDrops } from './daily-content';
import { applyDailyOverride20260821_10h as apply10hBase } from './daily-overrides-2026-08-21-10h-base';

let applied = false;

export function applyDailyOverride20260821_17h(force = false) {
  if (applied && !force) return;
  apply10hBase(true);
  applied = true;

  const set = (slug: string, data: any) => Object.assign(dailyContent[slug], data);
  const replaceDrop = (slug: string, data: any) => {
    const index = todayDrops.findIndex((item) => item.slug === slug);
    if (index >= 0) todayDrops[index] = { ...todayDrops[index], ...data };
  };

  set('hoje', {
    title: '22 áreas revisadas · atualização das 17h de 21 de agosto',
    summary: 'Todas as 22 áreas foram novamente auditadas antes do deploy. Brasil, Mundo, Tempo e Clima, Finanças e Tecnologia ganharam mudança material; as outras 17 foram validadas hoje porque continuam corretas, atuais e editorialmente úteis.',
    shareSummary: '21/08 · 17h: 22 áreas revisadas. Cinco áreas foram atualizadas com fatos novos e 17 foram validadas hoje sem rotação artificial.',
    readTime: '22 MISSÕES',
    badge: '17H · REVISÃO COMPLETA',
  });

  set('brasil', {
    title: 'Brasil e Estados Unidos voltam à mesa por tarifas após telefonema entre Lula e Trump',
    summary: 'Lula e Donald Trump conversaram nesta sexta sobre as tarifas americanas aplicadas a produtos brasileiros. O governo brasileiro disse que pretende ampliar a negociação com autoridades comerciais dos EUA e mantém a possibilidade de contramedidas, sem tratar retaliação como decisão já executada.',
    shareSummary: 'Brasil 21/08 · 17h: Lula e Trump conversaram sobre as tarifas americanas. O fato confirmado é a retomada do diálogo; negociação futura e possíveis contramedidas continuam sendo etapas em aberto.',
    readTime: '7 MIN READ',
    badge: 'BRASIL · ATUALIZADO 17H',
    sections: [
      { title: 'O que aconteceu', paragraphs: ['Os presidentes Luiz Inácio Lula da Silva e Donald Trump falaram por telefone nesta sexta-feira sobre as tarifas impostas pelos Estados Unidos a produtos brasileiros. Segundo o governo brasileiro, Lula contestou justificativas apresentadas por Washington e defendeu negociação diplomática.'], bullets: ['O governo brasileiro pretende buscar novas conversas com autoridades comerciais americanas.', 'Trump sugeriu uma reunião presencial em prazo curto entre representantes dos dois países.', 'O Brasil também mencionou cooperação contra o crime organizado, mas contestou a classificação de facções brasileiras como organizações terroristas.'] },
      { title: 'Por que importa', paragraphs: ['Tarifas afetam competitividade, margens de exportadores, cadeias de suprimento e eventualmente preços. Para empresas e trabalhadores, o impacto depende de quais produtos estão sujeitos às alíquotas, duração da medida, câmbio e capacidade de redirecionar vendas.'] },
      { title: 'O que não concluir', bullets: ['Telefonema não significa retirada das tarifas.', 'Negociação anunciada não garante acordo.', 'Menção a contramedidas não significa que uma retaliação brasileira já tenha sido aplicada.'] },
      { title: 'O que acompanhar', bullets: ['Próximas reuniões entre autoridades comerciais.', 'Eventuais mudanças formais nas alíquotas ou listas de produtos.', 'Medidas brasileiras de reciprocidade, caso sejam efetivamente adotadas.'] },
    ],
    sources: [{ label: 'Reuters · Brasil–EUA · 21/08/2026', url: 'https://www.reuters.com/world/americas/lula-trump-discuss-tariffs-phone-call-brazil-says-2026-08-21/' }],
  });
  replaceDrop('brasil', { title: 'Lula e Trump retomam diálogo sobre tarifas entre Brasil e EUA', detail: 'O telefonema abre nova rodada de negociação; retirada de tarifas ou contramedidas ainda não são fatos consumados.' });

  set('mundo', {
    title: 'Petróleo fecha a sexta acima de US$93 com sanções e Hormuz no centro do risco de oferta',
    summary: 'O Brent encerrou a sessão em US$ 93,86 por barril após ameaças americanas de sanções a parceiros comerciais do Irã e continuidade das restrições de fluxo associadas ao conflito. O preço segue alto, mas ficou abaixo do pico próximo de US$95 visto mais cedo.',
    shareSummary: 'Mundo 21/08 · 17h: Brent fechou em US$93,86. O risco continua ligado a sanções, oferta e Hormuz; isso não equivale a bloqueio total nem garante repasse automático para combustíveis no Brasil.',
    readTime: '8 MIN READ',
    badge: 'MUNDO · ATUALIZADO 17H',
    sections: [
      { title: 'O fechamento do dia', paragraphs: ['O Brent fechou a sexta-feira em US$ 93,86 e o WTI em US$ 86,99. O mercado reagiu à ameaça dos Estados Unidos de impor sanções a países que continuem negociando com o Irã e à percepção de oferta mais apertada.'], bullets: ['O Brent permaneceu em patamar elevado, embora abaixo do pico intradiário perto de US$95.', 'O tráfego e a segurança das rotas de energia no Golfo continuam no centro da avaliação de oferta.', 'Declarações iranianas de resposta ampliam incerteza, mas não devem ser tratadas como prova de uma ação futura específica.'] },
      { title: 'Por que importa', paragraphs: ['Hormuz é uma rota crítica para energia. Quando o risco de interrupção cresce, petróleo, frete marítimo, seguros e expectativas de inflação podem reagir antes mesmo de uma perda física equivalente de barris.'] },
      { title: 'Limites da leitura', bullets: ['Fluxo reduzido não é sinônimo de fechamento total do estreito.', 'Brent mais caro não determina sozinho o preço da gasolina no Brasil.', 'Ameaça de sanção precisa ser separada de medida efetivamente implementada e de seu impacto final.'] },
      { title: 'O que acompanhar', bullets: ['Medidas formais de sanção e resposta iraniana.', 'Tráfego marítimo e oferta efetiva de petróleo.', 'Evolução do Brent na abertura da próxima semana.'] },
    ],
    sources: [{ label: 'Reuters · Oil Markets · 21/08/2026', url: 'https://www.reuters.com/business/energy/oil-set-second-weekly-rise-unsettled-us-iran-war-crimps-supply-2026-08-21/' }],
  });
  replaceDrop('mundo', { title: 'Brent fecha em US$93,86 com sanções e Hormuz sustentando o prêmio de risco', detail: 'O petróleo terminou abaixo do pico da manhã, mas ainda elevado por risco de oferta e tensão com o Irã.' });

  set('tempo', {
    title: 'São Paulo fecha a tarde com rajadas acima de 50 km/h em ponto da cidade e entrada de ar frio',
    summary: 'O CGE registrou rajada de 53,6 km/h na Barragem Guarapiranga às 14h20. A frente fria avançou sem chuva significativa na capital, mas trouxe vento e queda de temperatura; a noite tende a ficar mais fria.',
    shareSummary: 'Tempo 21/08 · 17h: o CGE mediu rajada de 53,6 km/h na Barragem Guarapiranga. O dado é localizado, não significa vento igual em toda a cidade; a tendência é de ar mais frio à noite e fim de semana ameno.',
    readTime: '6 MIN READ',
    badge: 'TEMPO · ATUALIZADO 17H',
    sections: [
      { title: 'O que foi medido', paragraphs: ['Na tarde desta sexta, o Centro de Gerenciamento de Emergências Climáticas registrou rajada de 53,6 km/h na Barragem Guarapiranga, além de valores menores em outras estações. A passagem frontal ocorreu com pouca chuva na capital.'], bullets: ['Rajada é uma medição pontual e de curta duração; não representa a velocidade do vento em toda São Paulo.', 'A entrada de ar mais frio reduz as temperaturas durante a noite.', 'Galhos, objetos soltos e estruturas vulneráveis merecem atenção durante rajadas mais fortes.'] },
      { title: 'Aplicação prática', bullets: ['Em deslocamentos, observe alertas do CGE e Defesa Civil e evite permanecer sob árvores ou estruturas instáveis em rajadas fortes.', 'Quem sai à noite deve considerar a queda rápida de temperatura em relação à tarde.', 'Para o fim de semana, acompanhe atualização local porque vento e nebulosidade podem variar entre bairros.'] },
      { title: 'O que não concluir', paragraphs: ['Uma rajada acima de 50 km/h em uma estação não significa que toda a capital enfrentou a mesma intensidade nem que houve temporal generalizado.'] },
      { title: 'O que acompanhar', bullets: ['Temperatura mínima durante a madrugada.', 'Novos avisos do CGE/Defesa Civil.', 'Condições de sábado e domingo antes de atividades ao ar livre.'] },
    ],
    sources: [{ label: 'CGE São Paulo · 21/08/2026', url: 'https://www.cgesp.org/v3/noticias.jsp?data=2026-08-21' }],
  });
  replaceDrop('tempo', { title: 'Rajadas passam de 50 km/h em ponto de São Paulo e ar frio avança', detail: 'CGE mediu 53,6 km/h na Guarapiranga; a marca é localizada e a noite tende a esfriar.' });

  set('financas', {
    title: 'Petróleo fecha perto de US$94 e juros longos seguem altos: a semana termina com energia e funding pressionados',
    summary: 'O fechamento consolidou dois riscos diferentes: petróleo ainda caro por geopolítica e yields longos americanos em patamar elevado por preocupações fiscais e oferta de dívida. Para famílias e empresas, isso importa mais pelo custo de energia, crédito e capital do que pelo número de um único pregão.',
    shareSummary: 'Finanças 21/08 · 17h: Brent fechou em US$93,86 e juros longos americanos seguem altos. Energia e custo de capital pressionam canais diferentes; nenhum deles determina sozinho Selic, gasolina ou financiamento no Brasil.',
    readTime: '8 MIN READ',
    badge: 'FINANÇAS · ATUALIZADO 17H',
    sections: [
      { title: 'O que mudou desde a manhã', paragraphs: ['O Brent terminou em US$93,86, abaixo do pico próximo de US$95 visto mais cedo. Ao mesmo tempo, a semana continuou marcada por yields longos elevados nos Estados Unidos, com preocupação fiscal e oferta de dívida sustentando prêmio de prazo.'] },
      { title: 'Por que isso importa no bolso', bullets: ['Energia mais cara pode elevar custos de transporte e produção.', 'Juros longos altos elevam a taxa de desconto e o custo de financiamento de projetos e empresas.', 'O efeito no Brasil passa também por câmbio, expectativas de inflação, política monetária doméstica e condições de crédito.'] },
      { title: 'Aplicação prática', bullets: ['Compare CET, prazo e capacidade de pagamento antes de assumir dívida longa.', 'Não conte com queda futura de juros como condição necessária para uma compra caber no orçamento.', 'Separe volatilidade de mercado de mudança estrutural antes de alterar investimentos ou orçamento doméstico.'] },
      { title: 'O que não concluir', bullets: ['Treasury alto não implica alta automática da Selic.', 'Brent a US$93,86 não fixa o preço brasileiro dos combustíveis.', 'Um fechamento semanal não garante tendência para a semana seguinte.'] },
      { title: 'O que acompanhar', bullets: ['Curva longa dos Treasuries.', 'Brent e risco de oferta no Golfo.', 'USD/BRL e expectativas de inflação doméstica.'] },
    ],
    sources: [
      { label: 'Reuters · Oil Markets · 21/08/2026', url: 'https://www.reuters.com/business/energy/oil-set-second-weekly-rise-unsettled-us-iran-war-crimps-supply-2026-08-21/' },
      { label: 'Reuters · Global Markets · 21/08/2026', url: 'https://www.reuters.com/world/china/global-markets-global-markets-2026-08-21/' },
    ],
  });
  replaceDrop('financas', { title: 'Energia e juros longos fecham a semana pressionando custo de capital', detail: 'Brent terminou em US$93,86; yields longos seguem elevados por fiscal e dívida, com canais distintos para o bolso brasileiro.' });

  set('tecnologia', {
    title: 'Nvidia passa da GPU ao terreno: investimento na Cloverleaf reforça corrida por sites de data centers',
    summary: 'A Nvidia adquiriu participação minoritária na Cloverleaf Infrastructure, desenvolvedora de sites para data centers, para acelerar preparação de terrenos e infraestrutura nos Estados Unidos. O movimento mostra que a corrida de IA depende de energia, interconexão e implantação física, não só de chips.',
    shareSummary: 'Tecnologia 21/08 · 17h: Nvidia investiu na Cloverleaf Infrastructure. A mensagem estratégica é clara: capacidade de IA depende também de terreno, energia, rede e licenciamento; participação minoritária não significa que a Nvidia passe a operar todos esses data centers.',
    readTime: '7 MIN READ',
    badge: 'TECNOLOGIA · ATUALIZADO 17H',
    sections: [
      { title: 'O que aconteceu', paragraphs: ['A Nvidia anunciou investimento minoritário na Cloverleaf Infrastructure, empresa que desenvolve locais e infraestrutura para data centers nos Estados Unidos. O objetivo declarado é acelerar a disponibilidade de capacidade para a expansão de computação de IA.'] },
      { title: 'A conexão menos óbvia', bullets: ['GPU sem energia e conexão à rede não vira capacidade útil.', 'Interconexão elétrica, licenças, água/refrigeração e construção têm ciclos muito mais longos que a compra de servidores.', 'Investir upstream em infraestrutura pode reduzir gargalos de implantação para o ecossistema que consome aceleradores.'] },
      { title: 'O que não concluir', bullets: ['Participação minoritária não significa aquisição da Cloverleaf.', 'O anúncio não garante que todos os projetos receberão GPUs Nvidia.', 'Mais sites planejados não equivalem automaticamente a capacidade operacional imediata.'] },
      { title: 'O que acompanhar', bullets: ['Projetos concretos anunciados pela Cloverleaf após o investimento.', 'Capacidade elétrica e prazos de conexão à rede.', 'Capex e retorno econômico dos grandes data centers de IA.'] },
    ],
    sources: [{ label: 'Reuters · Nvidia / Cloverleaf · 21/08/2026', url: 'https://www.reuters.com/technology/nvidia-invests-data-center-developer-cloverleaf-infrastructure-2026-08-21/' }],
  });
  replaceDrop('tecnologia', { title: 'Nvidia investe em desenvolvedora de sites para data centers de IA', detail: 'A participação na Cloverleaf mostra que o gargalo da IA já inclui terreno, energia e conexão à rede — não apenas GPU.' });
}
