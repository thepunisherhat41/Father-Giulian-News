export function applyCurrentReelPatches20260827Family(dailyContent: Record<string, any>) {
  Object.assign(dailyContent.gravidez, {
    title: '7 semanas + 4 dias: bebê cresce rápido e enjoo ainda pode pesar bastante',
    summary: 'Nesta fase o embrião está em crescimento acelerado; o NHS descreve cerca de 10 mm da cabeça ao bumbum por volta da 7ª semana, com cérebro, medula e brotos dos membros se desenvolvendo. Para náusea e vômito, pequenos goles frequentes e refeições menores costumam ser mais toleráveis. Incapacidade de manter líquidos, urina muito escura ou pouca urina, fraqueza/tontura importante, dor abdominal, febre ou sangue no vômito exigem avaliação médica.',
    shareSummary: 'Gravidez · 27/08 · 7 semanas + 4 dias: desenvolvimento acelerado e foco em hidratação fracionada. Vômitos persistentes com sinais de desidratação precisam de avaliação médica.',
    badge: 'GRAVIDEZ · 7S + 4D · 27/08',
    readTime: '5 MIN',
    sections: [
      { title: 'O que está acontecendo nesta fase', bullets: [
        'Por volta da 7ª semana, o NHS descreve o embrião com cerca de 10 mm da cabeça ao bumbum.',
        'Cérebro e medula espinhal estão se formando rapidamente e os brotos dos braços e pernas continuam evoluindo.',
        'Náusea, cansaço, maior sensibilidade a cheiros e mudanças de apetite são comuns nesta fase.'
      ]},
      { title: 'Depois de vomitar', bullets: [
        'Recomece a hidratação devagar, com pequenos goles frequentes em vez de grande volume de uma vez.',
        'Quando o estômago permitir, retome pequenas porções de alimentos simples e tolerados.',
        'Descanse e evite cheiros ou alimentos que claramente estejam piorando a náusea.'
      ]},
      { title: 'Quando procurar ajuda', bullets: [
        'Não conseguir manter alimentos ou líquidos por muitas horas.',
        'Urina muito escura, pouca urina, fraqueza intensa, tontura ou desmaio.',
        'Dor abdominal importante, febre ou sangue no vômito.',
        'Sangramento vaginal relevante ou qualquer sintoma que gere preocupação deve ser discutido com o obstetra/serviço de saúde.'
      ]}
    ],
    sources: [
      { label: 'NHS · Week 7 pregnancy guide', url: 'https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-7/' },
      { label: 'NHS · Vomiting and morning sickness', url: 'https://www.nhs.uk/pregnancy/common-symptoms/vomiting-and-morning-sickness/' }
    ]
  });

  Object.assign(dailyContent.pai, {
    title: 'Missão de hoje: observe o que piora o enjoo e ajude sem transformar isso em cobrança',
    summary: 'Cheiros, horários e alguns alimentos podem piorar a náusea. A ajuda prática hoje é perceber padrões, deixar água e itens úteis por perto e reduzir decisões desnecessárias. O objetivo é facilitar a rotina e levar informações úteis ao pré-natal se os episódios estiverem ficando mais intensos.',
    shareSummary: 'Ser Pai · 27/08: observe gatilhos de enjoo, facilite hidratação e rotina e ajude a registrar sinais importantes sem pressionar.',
    badge: 'SER PAI · MISSÃO 27/08',
    readTime: '3 MIN',
    sections: [
      { title: 'Ajuda prática', bullets: [
        'Deixe água e itens de higiene ao alcance.',
        'Evite insistir em grandes volumes de comida ou líquido logo depois de um episódio de vômito.',
        'Se houver repetição, anote horário, intensidade e se ela conseguiu manter líquidos; isso pode ajudar na conversa com o obstetra.'
      ]}
    ],
    sources: [{ label: 'NHS · Vomiting and morning sickness', url: 'https://www.nhs.uk/pregnancy/common-symptoms/vomiting-and-morning-sickness/' }]
  });
}
