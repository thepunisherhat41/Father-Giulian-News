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
  word: 'Amiúde',
  pronunciation: 'a-mi-Ú-de',
  meaning: 'Com frequência; muitas vezes; repetidamente.',
  naturalUse: '“Esse tipo de erro aparece amiúde quando a gente olha só para a parcela e esquece o custo total.”',
  synonyms: ['frequentemente', 'muitas vezes', 'repetidamente', 'com frequência'],
  tone: 'É uma palavra mais elegante e um pouco mais formal. Funciona muito bem na escrita e pode entrar naturalmente em uma conversa mais cuidadosa, desde que usada com parcimônia.',
  note: 'A sílaba tônica é “ú”: a-mi-Ú-de. É uma boa alternativa quando “frequentemente” ficaria repetitivo.',
};

export const upcomingWords = [
  { word: 'Alhures', hint: 'Em outro lugar; em outra parte.' },
  { word: 'Parcimônia', hint: 'Moderação, comedimento ou economia no uso de algo.' },
  { word: 'Ínterim', hint: 'Intervalo de tempo entre dois acontecimentos.' },
  { word: 'Intempestivo', hint: 'Que acontece em momento inadequado ou inoportuno.' },
  { word: 'Prosaico', hint: 'Comum, banal ou sem grande elevação.' },
  { word: 'Diligente', hint: 'Cuidadoso, aplicado e atento ao que precisa ser feito.' },
  { word: 'Ponderado', hint: 'Que age ou se expressa com equilíbrio e reflexão.' },
  { word: 'Idôneo', hint: 'Adequado, confiável ou moralmente íntegro, conforme o contexto.' },
];