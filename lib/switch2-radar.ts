export type Switch2RadarGame = {
  title: string;
  status: 'available' | 'upcoming' | 'watch';
  release: string;
  genre: string;
  hook: string;
  playStyle: string;
  badge: string;
  sourceLabel: string;
  sourceUrl: string;
};

export const switch2RadarGames: Switch2RadarGame[] = [
  {
    title: 'Mario Kart World',
    status: 'available',
    release: 'DISPONÍVEL',
    genre: 'Racing / exploração',
    hook: 'A grande vitrine social do console: corridas conectadas por um mundo amplo e espaço para jogar tanto competitivo quanto casual.',
    playStyle: 'PARTY · LOCAL · ONLINE',
    badge: 'SYSTEM SELLER',
    sourceLabel: 'Nintendo · Mario Kart World / Switch 2 bundle',
    sourceUrl: 'https://www.nintendo.com/pt-br/store/showroom/nintendo-switch-2-bundle/',
  },
  {
    title: 'Donkey Kong Bananza',
    status: 'available',
    release: '17 JUL 2025',
    genre: 'Action / platform / exploration',
    hook: 'Destruição do cenário vira mecânica de exploração. O co-op local coloca Pauline ao lado de DK e também explora recursos dos Joy-Con 2.',
    playStyle: 'SOLO · CO-OP 2P · GAMESHARE',
    badge: 'EXCLUSIVE',
    sourceLabel: 'Nintendo · Donkey Kong Bananza',
    sourceUrl: 'https://www.nintendo.com/us/store/products/donkey-kong-bananza-switch-2/',
  },
  {
    title: 'Pokémon Pokopia',
    status: 'available',
    release: 'DISPONÍVEL EM 2026',
    genre: 'Life sim / crafting',
    hook: 'Um Ditto em forma humana restaura um mundo usando transformação, construção e convivência com Pokémon — uma proposta mais tranquila do que o RPG tradicional da série.',
    playStyle: 'COZY · BUILD · EXPLORE',
    badge: 'CHILL MODE',
    sourceLabel: 'Nintendo · Switch 2 Choose Your Game Bundle',
    sourceUrl: 'https://www.nintendo.com/pt-br/store/showroom/nintendo-switch-2-bundle/',
  },
  {
    title: 'Star Fox',
    status: 'available',
    release: '25 JUN 2026',
    genre: 'Action / space combat',
    hook: 'Fox McCloud volta ao centro de uma aventura de combate espacial com foco em velocidade e proteção do sistema Lylat.',
    playStyle: 'ACTION · SPACE · ARCADE',
    badge: 'RETURN',
    sourceLabel: 'Nintendo · Switch 2 featured games',
    sourceUrl: 'https://www.nintendo.com/us/gaming-systems/switch-2/featured-games/power-up-your-play-e10/',
  },
  {
    title: 'Splatoon Raiders',
    status: 'upcoming',
    release: 'DATA PENDENTE',
    genre: 'Action / adventure',
    hook: 'Uma aventura com foco single-player em que você atua como mecânico ao lado do Deep Cut nas ilhas Spirhalite.',
    playStyle: 'SINGLE PLAYER FOCUS',
    badge: 'WATCHLIST',
    sourceLabel: 'Nintendo · Switch 2 featured games',
    sourceUrl: 'https://www.nintendo.com/us/gaming-systems/switch-2/featured-games/power-up-your-play-e10/',
  },
  {
    title: 'Orbitals',
    status: 'upcoming',
    release: 'DATA PENDENTE',
    genre: 'Co-op adventure',
    hook: 'A proposta é aventura cooperativa para duas pessoas em um universo com estética de anime retrô e foco em parceria.',
    playStyle: '2P CO-OP · ADVENTURE',
    badge: 'CO-OP RADAR',
    sourceLabel: 'Nintendo · Switch 2 featured games',
    sourceUrl: 'https://www.nintendo.com/us/gaming-systems/switch-2/featured-games/power-up-your-play-e10/',
  },
  {
    title: 'The Legend of Zelda: Ocarina of Time',
    status: 'watch',
    release: 'ANUNCIADO · DATA PENDENTE',
    genre: 'Action adventure / classic reborn',
    hook: 'O clássico do Nintendo 64 foi anunciado para uma nova versão no Switch 2; o ponto de atenção agora é entender exatamente o escopo técnico e criativo dessa reconstrução.',
    playStyle: 'SOLO · STORY · EXPLORATION',
    badge: 'LEGACY QUEST',
    sourceLabel: 'Nintendo Direct · 09/06/2026',
    sourceUrl: 'https://www.nintendo.com/us/whatsnew/nintendo-direct-unveils-new-games-and-updates-for-nintendo-switch-2-and-nintendo-switch-including-the-legend-of-zelda-ocarina-of-time-kingdom-hearts-iv-xenoblade-genesis-and-more/',
  },
  {
    title: 'Stage Tour',
    status: 'upcoming',
    release: 'HOLIDAY 2026',
    genre: 'Rhythm / band',
    hook: 'O mesmo rhythm game do destaque principal também está confirmado para Switch 2, levando a experiência de banda para um console híbrido.',
    playStyle: 'RHYTHM · PARTY · 4P',
    badge: 'CROSSOVER',
    sourceLabel: 'Stage Tour · FAQ oficial',
    sourceUrl: 'https://stagetour.com/',
  },
];
