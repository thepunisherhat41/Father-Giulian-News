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
  word: 'Alhures',
  pronunciation: 'a-LHU-res',
  meaning: 'Em outro lugar; em outra parte.',
  naturalUse: '“Não encontrei esse documento aqui; talvez ele tenha sido arquivado alhures.”',
  synonyms: ['em outro lugar', 'em outra parte', 'noutro lugar'],
  tone: 'É uma palavra culta e pouco frequente na conversa cotidiana. Funciona bem em texto, humor sutil ou numa frase em que o tom um pouco mais elegante seja intencional.',
  note: 'O interessante é o contraste com “algures” (em algum lugar) e “nenhures” (em lugar nenhum). Use com parcimônia para não soar artificial.',
};

export const upcomingWords = [
  { word: 'Parcimônia', hint: 'Moderação, comedimento ou economia no uso de algo.' },
  { word: 'Ínterim', hint: 'Intervalo de tempo entre dois acontecimentos.' },
  { word: 'Intempestivo', hint: 'Que acontece em momento inadequado ou inoportuno.' },
  { word: 'Prosaico', hint: 'Comum, banal ou sem grande elevação.' },
  { word: 'Diligente', hint: 'Cuidadoso, aplicado e atento ao que precisa ser feito.' },
  { word: 'Ponderado', hint: 'Que age ou se expressa com equilíbrio e reflexão.' },
  { word: 'Idôneo', hint: 'Adequado, confiável ou moralmente íntegro, conforme o contexto.' },
  { word: 'Algures', hint: 'Em algum lugar; em alguma parte.' },
];
