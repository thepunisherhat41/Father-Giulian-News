export type PlayableSong = {
  title: string;
  spotifyTrackId: string;
  note?: string;
};

function key(artist: string, title: string) {
  return `${artist.trim().toLowerCase()}::${title.trim().toLowerCase()}`;
}

const trackIds: Record<string, string> = {
  [key('Audioslave', 'Like a Stone')]: '2xt2piJx6jlFkjS77YiqpL',
  [key('Led Zeppelin', 'Since I’ve Been Loving You')]: '2Q7WgDQwvxjmc8IfFUtfVJ',
  [key("Led Zeppelin", "Since I've Been Loving You")]: '2Q7WgDQwvxjmc8IfFUtfVJ',
  [key('Aerosmith', 'Dream On')]: '5MxNLUsfh7uzROypsoO5qe',
  [key('Pearl Jam', 'Black')]: '2pwqtx0ZkM0yE1C6V91OFY',
  [key('Foo Fighters', 'Everlong')]: '5UWwZ5lm5PKu6eKsHAGxOk',
  [key('Soundgarden', 'Fell on Black Days')]: '2AAO0bpq6Fad0jNSekFs8G',
  [key('Tonico & Tinoco', 'Chico Mineiro')]: '7cLf0p3GQyyoIOBWkT4swu',
  [key('Tonico e Tinoco', 'Chico Mineiro')]: '7cLf0p3GQyyoIOBWkT4swu',
  [key('Tonico & Tinoco', 'Tristeza do Jeca')]: '65Fy8dbMLYSvGRGwBrHQju',
  [key('Tonico e Tinoco', 'Tristeza do Jeca')]: '65Fy8dbMLYSvGRGwBrHQju',
  [key('Tião Carreiro & Pardinho', 'Pagode em Brasília')]: '12cnhOtLbswskitaCsUePr',
  [key('Tião Carreiro & Pardinho', 'Rei do Gado')]: '2JfcLYgcwQSNba9vmNMWyN',
  [key('Liu & Léu', 'Boiadeiro Errante')]: '3OxaVP6bhP55I8DncgKmwg',
  [key('Liu & Léu', 'O Ipê e o Prisioneiro')]: '0LcYtGJ6ecR1h0RE287EJZ',
  [key('Pena Branca & Xavantinho', 'Cuitelinho')]: '5hRR1LzQcZYBmMD3HPdOXQ',
  [key('Pena Branca & Xavantinho', 'O Cio da Terra')]: '3LxMFjcy1FwiCYETFklsP3',
  [key('Cascatinha & Inhana', 'Índia')]: '2kJeMcZTWBYPmaGwZvrInZ',
  [key('Cascatinha & Inhana', 'India')]: '2kJeMcZTWBYPmaGwZvrInZ',
  [key('Cascatinha & Inhana', 'Meu Primeiro Amor')]: '2H1etrigkfjNqGEzNcyWZJ',
};

export function getSpotifyTrackId(artist: string, title: string) {
  return trackIds[key(artist, title)];
}

export const caipiraTop5Playback: Record<string, PlayableSong[]> = {
  'Tonico & Tinoco': [
    {
      title: 'Chico Mineiro',
      spotifyTrackId: '7cLf0p3GQyyoIOBWkT4swu',
      note: 'Moda narrativa que virou uma das grandes portas de entrada para a obra da dupla.',
    },
    {
      title: 'Tristeza do Jeca',
      spotifyTrackId: '65Fy8dbMLYSvGRGwBrHQju',
      note: 'Saudade, identidade do interior e uma melodia que atravessou diferentes gerações da música caipira.',
    },
  ],
  'Tião Carreiro & Pardinho': [
    {
      title: 'Pagode em Brasília',
      spotifyTrackId: '12cnhOtLbswskitaCsUePr',
      note: 'Faixa essencial para ouvir a viola assumindo papel rítmico e a linguagem do pagode caipira.',
    },
    {
      title: 'Rei do Gado',
      spotifyTrackId: '2JfcLYgcwQSNba9vmNMWyN',
      note: 'Narrativa sertaneja com a assinatura de viola e o balanço característico da dupla.',
    },
  ],
  'Liu & Léu': [
    {
      title: 'Boiadeiro Errante',
      spotifyTrackId: '3OxaVP6bhP55I8DncgKmwg',
      note: 'Estrada, boiada e deslocamento aparecem no tipo de narrativa rural que marcou o repertório da dupla.',
    },
    {
      title: 'O Ipê e o Prisioneiro',
      spotifyTrackId: '0LcYtGJ6ecR1h0RE287EJZ',
      note: 'Um ótimo exemplo da música caipira funcionando como conto cantado, com personagens e progressão dramática.',
    },
  ],
  'Pena Branca & Xavantinho': [
    {
      title: 'Cuitelinho',
      spotifyTrackId: '5hRR1LzQcZYBmMD3HPdOXQ',
      note: 'Tradição oral, viola e interpretação delicada: uma escuta mais contemplativa do universo caipira.',
    },
    {
      title: 'O Cio da Terra',
      spotifyTrackId: '3LxMFjcy1FwiCYETFklsP3',
      note: 'Aproxima o universo rural da MPB mantendo a identidade vocal e a sensibilidade da dupla.',
    },
  ],
  'Cascatinha & Inhana': [
    {
      title: 'Índia',
      spotifyTrackId: '2kJeMcZTWBYPmaGwZvrInZ',
      note: 'Uma das gravações que ajudam a entender a presença da guarânia e da influência paraguaia no sertanejo antigo.',
    },
    {
      title: 'Meu Primeiro Amor',
      spotifyTrackId: '2H1etrigkfjNqGEzNcyWZJ',
      note: 'Mostra a faceta romântica e a força da combinação vocal que tornou a dupla tão reconhecível.',
    },
  ],
};
