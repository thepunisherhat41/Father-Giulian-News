export type GameTrack = {
  title: string;
  artist: string;
};

export type GameFact = {
  label: string;
  value: string;
  note: string;
};

export type GameMedia = {
  type: 'image' | 'video';
  label: string;
  title: string;
  url: string;
  poster?: string;
};

export type Ps5RadarItem = {
  label: string;
  value: string;
  status: 'confirmed' | 'watch' | 'unknown';
  note: string;
};

export const stageTourFacts: GameFact[] = [
  { label: 'LANÇAMENTO', value: 'HOLIDAY 2026', note: 'Janela oficial; ainda sem dia exato publicado.' },
  { label: 'PLATAFORMAS', value: 'PC · PS5 · XBOX · SWITCH 2', note: 'PC, PlayStation 5, Xbox Series X|S e Nintendo Switch 2.' },
  { label: 'BANDA', value: 'ATÉ 4 JOGADORES', note: 'Solo e multiplayer com combinações de instrumentos.' },
  { label: 'FUNÇÕES', value: 'LEAD · GROOVE · DRUMS · VOCALS', note: 'Lead e Groove expandem a lógica clássica de guitarra e baixo.' },
  { label: 'OFFLINE', value: 'SIM', note: 'Recursos como multiplayer online e leaderboards continuam exigindo conexão.' },
  { label: 'SETLIST', value: '25 CONFIRMADAS', note: 'Contagem oficial após o Reveal #7, publicado em 12/08/2026.' },
];

export const stageTourMedia: GameMedia[] = [
  {
    type: 'image',
    label: 'KEY ART OFICIAL',
    title: 'Stage Tour · Hero Art',
    url: 'https://cdn.shopify.com/s/files/1/0978/3083/0451/files/STAGE_TOUR_Hero-11_2-11.png?v=1771869573',
  },
  {
    type: 'image',
    label: 'SCREENSHOT OFICIAL',
    title: 'Gameplay / palco',
    url: 'https://cdn.shopify.com/s/files/1/0978/3083/0451/files/StageTour_Screenshot_01.png?v=1772053972',
  },
  {
    type: 'image',
    label: 'SCREENSHOT OFICIAL',
    title: 'Banda / apresentação',
    url: 'https://cdn.shopify.com/s/files/1/0978/3083/0451/files/StageTour_Screenshot_04.png?v=1772052677',
  },
];

export const stageTourVideos = [
  {
    label: 'ANNOUNCEMENT TRAILER',
    title: 'O anúncio que apresentou a nova era da RedOctane',
    youtubeId: 'cUrkAf3uTE4',
  },
  {
    label: 'DEVELOPER SPOTLIGHT',
    title: 'Gameplay, hardware e bastidores do projeto',
    youtubeId: 'kckXRmcp_Uk',
  },
];

export const stageTourPs5Radar: Ps5RadarItem[] = [
  { label: 'VERSÃO PS5', value: 'CONFIRMADA', status: 'confirmed', note: 'A FAQ oficial lista PlayStation 5 entre as plataformas de lançamento.' },
  { label: 'JOGO OFFLINE', value: 'SIM', status: 'confirmed', note: 'O jogo pode ser executado offline; recursos online específicos continuam dependendo de conexão.' },
  { label: 'CONTROLE COMUM', value: 'SUPORTE PREVISTO', status: 'confirmed', note: 'Existe um tipo de instrumento pensado para controle tradicional; detalhes de layout ainda serão aprofundados.' },
  { label: 'GUITARRA DEDICADA', value: 'KRAMER', status: 'confirmed', note: 'A RedOctane confirmou opção de bundle com nova guitarra Kramer e venda separada.' },
  { label: 'DUALSENSE', value: 'DETALHES PENDENTES', status: 'unknown', note: 'Recursos específicos como gatilhos adaptáveis e feedback háptico não foram detalhados na FAQ consultada.' },
  { label: 'PREÇO / PREORDER PS5', value: 'AINDA NÃO', status: 'watch', note: 'A RedOctane informa que wishlists e preorders de console serão divulgados mais adiante.' },
  { label: 'PERIFÉRICOS ANTIGOS', value: 'META DE SUPORTE', status: 'watch', note: 'O estúdio pretende suportar o máximo possível; compatibilidade dependerá da plataforma e pode exigir adaptadores.' },
  { label: 'DAY ONE?', value: 'ESPERAR HARDWARE', status: 'watch', note: 'Antes de comprar, vale observar preço dos instrumentos, latência, compatibilidade e qualidade dos charts.' },
];

export const stageTourTimeline = [
  { date: '26 FEV', state: 'DONE', title: 'Anúncio público', detail: 'Stage Tour é revelado como novo IP da RedOctane Games.' },
  { date: '07 JUN', state: 'DONE', title: 'Developer Spotlight', detail: 'Gameplay, campanha, hardware e primeira leva de músicas ganham mais detalhes.' },
  { date: '12 AGO', state: 'DONE', title: '25 faixas confirmadas', detail: 'Reveal #7 adiciona Rolling Stones, Smash Mouth e Muse.' },
  { date: 'AGORA', state: 'LIVE', title: 'Closed Alpha / desenvolvimento', detail: 'O projeto continua em testes e divulgação gradual de conteúdo e compatibilidade.' },
  { date: 'HOLIDAY', state: 'LOCKED', title: 'Janela de lançamento', detail: 'PC, PS5, Xbox Series X|S e Switch 2; data exata ainda precisa ser anunciada.' },
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
  { label: 'Stage Tour · Developer Spotlight', url: 'https://stagetour.com/blogs/newsroom/stage-tour-biggest-update-at-ign-live' },
  { label: 'Stage Tour · Setlist Reveal #7', url: 'https://stagetour.com/blogs/newsroom/stage-tour-setlist-reveal-7' },
  { label: 'Steam · Stage Tour', url: 'https://store.steampowered.com/app/4452700/STAGE_TOUR/' },
];
