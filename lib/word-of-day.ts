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
  word: 'Quiçá',
  pronunciation: 'qui-ÇÁ',
  meaning: 'Talvez; quem sabe; porventura. Expressa uma possibilidade, sem afirmar que algo acontecerá.',
  naturalUse: '“Quiçá a gente consiga fazer essa viagem ainda este ano.”',
  synonyms: ['talvez', 'porventura', 'quem sabe'],
  tone: 'Mais elegante e pouco comum na conversa cotidiana; funciona melhor quando usado com naturalidade e sem exagero.',
  note: 'A grafia correta é “quiçá”, com ç e acento no á.',
};

export const upcomingWords = [
  { word: 'Enfadonho', hint: 'Algo cansativo, tedioso ou que causa aborrecimento.' },
  { word: 'Amiúde', hint: 'Com frequência; muitas vezes.' },
  { word: 'Alhures', hint: 'Em outro lugar; em outra parte.' },
  { word: 'Parcimônia', hint: 'Moderação, comedimento ou economia no uso de algo.' },
  { word: 'Ínterim', hint: 'Intervalo de tempo entre dois acontecimentos.' },
  { word: 'Intempestivo', hint: 'Que acontece em momento inadequado ou inoportuno.' },
  { word: 'Prosaico', hint: 'Comum, banal ou sem grande elevação.' },
  { word: 'Diligente', hint: 'Cuidadoso, aplicado e atento ao que precisa ser feito.' },
];
