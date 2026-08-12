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
  word: 'Enfadonho',
  pronunciation: 'en-fa-DO-nho',
  meaning: 'Algo tedioso, cansativo, monótono ou que provoca aborrecimento por se prolongar demais ou ter pouco interesse.',
  naturalUse: '“A apresentação tinha um bom conteúdo, mas ficou um pouco enfadonha depois de tantos detalhes repetidos.”',
  synonyms: ['tedioso', 'monótono', 'maçante', 'cansativo'],
  tone: 'É uma palavra elegante, mas ainda bastante natural. Funciona bem para descrever reunião, texto, tarefa, discurso ou situação que se tornou cansativa.',
  note: 'Não significa necessariamente que algo é ruim; pode significar apenas que ficou excessivamente longo, repetitivo ou pouco envolvente.',
};

export const upcomingWords = [
  { word: 'Amiúde', hint: 'Com frequência; muitas vezes.' },
  { word: 'Alhures', hint: 'Em outro lugar; em outra parte.' },
  { word: 'Parcimônia', hint: 'Moderação, comedimento ou economia no uso de algo.' },
  { word: 'Ínterim', hint: 'Intervalo de tempo entre dois acontecimentos.' },
  { word: 'Intempestivo', hint: 'Que acontece em momento inadequado ou inoportuno.' },
  { word: 'Prosaico', hint: 'Comum, banal ou sem grande elevação.' },
  { word: 'Diligente', hint: 'Cuidadoso, aplicado e atento ao que precisa ser feito.' },
  { word: 'Ponderado', hint: 'Que age ou se expressa com equilíbrio e reflexão.' },
];
