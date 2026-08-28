export function applyCurrentReelPatches20260828Family(dailyContent: Record<string, any>) {
  Object.assign(dailyContent.gravidez, {
    title: '7 semanas + 5 dias: desenvolvimento segue acelerado e hidratação fracionada ajuda nos enjoos',
    summary: 'Nesta fase, estruturas básicas seguem se formando rapidamente. Para os enjoos, o foco continua em pequenas quantidades de líquido ao longo do dia e reidratação gradual após episódios de vômito. Procure orientação médica se houver incapacidade de manter líquidos, sinais de desidratação, sangue no vômito, febre ou dor forte.',
    shareSummary: 'Gravidez · 28/08 · 7 semanas + 5 dias: hidratação em pequenos goles, alimentação leve conforme tolerância e atenção a sinais de desidratação ou sintomas intensos.',
    badge: 'GRAVIDEZ · 7S + 5D · 28/08',
    sections: [
      { title: 'Depois de vomitar', bullets: ['Espere alguns minutos antes de tentar beber novamente.', 'Retome com pequenos goles de água ou outro líquido tolerado, aumentando aos poucos.', 'Evite grande volume de uma vez se isso piorar a náusea.', 'Quando tolerar líquidos, avance para uma alimentação leve e fracionada.'] },
      { title: 'Quando procurar ajuda', bullets: ['Não consegue manter líquidos por horas.', 'Urina muito escura ou em pouca quantidade, tontura ou fraqueza importante.', 'Sangue no vômito, febre, dor abdominal forte ou piora importante do estado geral.'] }
    ]
  });

  Object.assign(dailyContent.pai, {
    title: 'Missão de hoje: facilitar hidratação e reduzir esforço nos momentos de enjoo',
    summary: 'Deixe água e opções toleradas por perto, ajude com pequenas porções e observe quais cheiros ou horários pioram a náusea. O objetivo é tornar o ambiente mais fácil, não pressionar para comer.',
    shareSummary: 'Ser Pai · 28/08: deixe líquidos acessíveis, ajude com pequenas porções e observe gatilhos de enjoo sem pressionar.',
    badge: 'SER PAI · MISSÃO · 28/08',
    sections: [{ title: 'Ajuda prática', bullets: ['Mantenha água e itens tolerados acessíveis.', 'Ajude a evitar cheiros que disparem náusea.', 'Depois de vômitos, priorize descanso e reidratação gradual.', 'Se aparecer sinal de alerta, ajude a buscar orientação profissional.'] }]
  });
}
