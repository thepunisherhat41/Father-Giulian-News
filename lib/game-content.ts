export type GameTrack = {
  title: string;
  artist: string;
};

export type GameFact = {
  label: string;
  value: string;
  note: string;
};

export const stageTourFacts: GameFact[] = [
  { label: 'LANÇAMENTO', value: 'HOLIDAY 2026', note: 'Janela oficial; ainda sem dia exato publicado.' },
  { label: 'PLATAFORMAS', value: 'PC · PS5 · XBOX · SWITCH 2', note: 'PC, PlayStation 5, Xbox Series X|S e Nintendo Switch 2.' },
  { label: 'BANDA', value: 'ATÉ 4 JOGADORES', note: 'Solo, cooperativo e competitivo com combinações de instrumentos.' },
  { label: 'FUNÇÕES', value: 'LEAD · GROOVE · DRUMS · VOCALS', note: 'Lead e Groove expandem a lógica clássica de guitarra e baixo.' },
  { label: 'OFFLINE', value: 'SIM', note: 'Multiplayer online e leaderboards continuam exigindo conexão.' },
  { label: 'SETLIST', value: '25 CONFIRMADAS', note: 'Contagem oficial após o Reveal #7, publicado em 12/08/2026.' },
];

export const stageTourSetlist: GameTrack[] = [
  { title: 'RATATATA', artist: 'BABYMETAL & Electric Callboy' },
  { title: 'Get The Funk Out', artist: 'Extreme' },
  { title: 'Square Hammer', artist: 'Ghost' },
  { title: "Mimi's Delivery Service", artist: 'Good Kid' },
  { title: 'Dani California', artist: 'Red Hot Chili Peppers' },
  { title: 'Terminator Oscillator', artist: 'Static-X' },
  { title: 'Island In The Sun', artist: 'Weezer' },
  { title: 'Bite Me', artist: 'Avril Lavigne' },
  { title: 'Airhead', artist: 'Honey Revenge' },
  { title: "For A Pessimist, I'm Pretty Optimistic", artist: 'Paramore' },
  { title: 'Do Me Like That', artist: 'The Paradox' },
  { title: 'Jane!', artist: 'The Long Faces' },
  { title: 'The Unknowing', artist: 'Jfarrari' },
  { title: 'Siren', artist: 'Castle Rat' },
  { title: 'Broken Dreams, Inc.', artist: 'Rise Against' },
  { title: 'Psychosocial', artist: 'Slipknot' },
  { title: 'The Motherload', artist: 'Mastodon' },
  { title: 'The End', artist: 'Mammoth' },
  { title: 'Blind and Frozen', artist: 'Beast In Black' },
  { title: 'Just Like Heaven', artist: 'The Cure' },
  { title: 'Just', artist: 'Radiohead' },
  { title: 'Just Pretend', artist: 'Bad Omens' },
  { title: 'In the Stars', artist: 'The Rolling Stones' },
  { title: 'All Star', artist: 'Smash Mouth' },
  { title: 'Starlight', artist: 'Muse' },
];

export const gameEditorialLanes = [
  { icon: '🆕', name: 'Lançamentos & anúncios', description: 'Jogos novos, datas, trailers, plataformas e o que realmente foi confirmado.' },
  { icon: '🕹️', name: 'Retrô & história', description: 'Franquias, consoles, arcades e por que certos jogos mudaram a indústria.' },
  { icon: '🎮', name: 'Gameplay & game design', description: 'Mecânicas, dificuldade, progressão, combate, narrativa e decisões de design.' },
  { icon: '⚙️', name: 'Hardware & periféricos', description: 'Controles, volantes, guitarras, portáteis, GPUs e acessórios que mudam a experiência.' },
  { icon: '💎', name: 'Indies & descobertas', description: 'Projetos menores que merecem atenção antes de virarem fenômeno.' },
  { icon: '🏆', name: 'Competitivo & e-sports', description: 'Cenários competitivos, campeonatos e mudanças de meta quando realmente importarem.' },
  { icon: '🎵', name: 'Games + música', description: 'Trilhas, jogos de ritmo e a conexão entre videogame, bandas e descoberta musical.' },
  { icon: '🔎', name: 'Vale acompanhar?', description: 'O que está confirmado, o que é marketing e quais sinais observar antes de comprar.' },
];

export const stageTourSources = [
  { label: 'Stage Tour · FAQ oficial', url: 'https://stagetour.com/' },
  { label: 'Stage Tour · anúncio oficial', url: 'https://stagetour.com/blogs/newsroom/redoctane-games-announces-stage-tour' },
  { label: 'Stage Tour · Setlist Reveal #7', url: 'https://stagetour.com/blogs/newsroom/stage-tour-setlist-reveal-7' },
  { label: 'Steam · Stage Tour', url: 'https://store.steampowered.com/app/4452700/STAGE_TOUR/' },
];
