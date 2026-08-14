export type DailyWord = {
  word: string;
  pronunciation?: string;
  meaning: string;
  naturalUse: string;
  synonyms: string[];
  tone: string;
  note?: string;
};

export const wordOfDay: DailyWord = {
  word: 'Parcimônia',
  pronunciation: 'par-ci-MÔ-nia',
  meaning: 'Moderação, comedimento ou economia no uso de algo; agir sem excesso.',
  naturalUse: '“Vou usar o cartão com parcimônia este mês para não transformar conveniência em dívida.”',
  synonyms: ['moderação', 'comedimento', 'economia', 'sobriedade'],
  tone: 'É uma palavra culta, mas bastante natural em textos, reuniões e conversas em que a ideia é destacar uso cuidadoso ou moderado de algum recurso.',
  note: 'Também aparece na expressão “com parcimônia”. Não significa simplesmente gastar pouco: pode significar falar, agir ou usar qualquer recurso sem excesso.',
};

export const upcomingWords = [
  { word: 'Ínterim', hint: 'Intervalo de tempo entre dois acontecimentos.' },
  { word: 'Intempestivo', hint: 'Que acontece em momento inadequado ou inoportuno.' },
  { word: 'Prosaico', hint: 'Comum, banal ou sem grande elevação.' },
  { word: 'Diligente', hint: 'Cuidadoso, aplicado e atento ao que precisa ser feito.' },
  { word: 'Ponderado', hint: 'Que age ou se expressa com equilíbrio e reflexão.' },
  { word: 'Idôneo', hint: 'Adequado, confiável ou moralmente íntegro, conforme o contexto.' },
  { word: 'Algures', hint: 'Em algum lugar; em alguma parte.' },
  { word: 'Nenhures', hint: 'Em lugar nenhum.' },
];
