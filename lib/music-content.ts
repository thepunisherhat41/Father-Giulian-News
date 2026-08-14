export type MusicTrack = {
  title: string;
  artist: string;
  year?: string;
  style: string;
  whyListen: string;
  context: string;
  mood: string[];
  searchHint: string;
};

export type MusicArtist = {
  name: string;
  era: string;
  description: string;
  startWith: string[];
};

export const rockTracks: MusicTrack[] = [
  {
    title: 'Like a Stone',
    artist: 'Audioslave',
    year: '2002',
    style: 'Alternative rock / hard rock',
    whyListen: 'Uma aula de dinâmica: a música cresce sem precisar correr, e a guitarra usa espaço e textura em vez de preencher tudo.',
    context: 'Audioslave reuniu Chris Cornell com integrantes do Rage Against the Machine. É uma boa porta para perceber como uma grande voz pode mudar completamente a identidade de uma base pesada.',
    mood: ['introspectiva', 'noturna', 'guitarra marcante'],
    searchHint: 'Audioslave Like a Stone',
  },
  {
    title: 'Since I’ve Been Loving You',
    artist: 'Led Zeppelin',
    year: '1970',
    style: 'Blues rock',
    whyListen: 'Mostra como tensão, silêncio, dinâmica e improvisação podem carregar mais emoção do que simplesmente tocar mais alto.',
    context: 'É um ótimo exemplo da ponte entre o blues elétrico e o hard rock britânico que ajudou a moldar o rock dos anos 1970.',
    mood: ['blues', 'intensa', 'guitarra expressiva'],
    searchHint: 'Led Zeppelin Since Ive Been Loving You',
  },
  {
    title: 'Dream On',
    artist: 'Aerosmith',
    year: '1973',
    style: 'Hard rock / power ballad',
    whyListen: 'Vale ouvir prestando atenção em como a faixa começa contida e constrói energia até o clímax vocal.',
    context: 'Foi uma das músicas que ajudaram a definir a identidade inicial do Aerosmith e virou uma referência de balada de rock sem perder peso.',
    mood: ['épica', 'crescente', 'clássico'],
    searchHint: 'Aerosmith Dream On',
  },
  {
    title: 'Black',
    artist: 'Pearl Jam',
    year: '1991',
    style: 'Grunge / alternative rock',
    whyListen: 'É uma faixa para observar interpretação vocal e construção emocional, mais do que virtuosismo técnico.',
    context: 'O álbum Ten ajudou a transformar a cena de Seattle em fenômeno mundial no começo dos anos 1990.',
    mood: ['melancólica', 'emocional', 'grunge'],
    searchHint: 'Pearl Jam Black',
  },
  {
    title: 'Everlong',
    artist: 'Foo Fighters',
    year: '1997',
    style: 'Alternative rock',
    whyListen: 'A guitarra rítmica quase hipnótica e a bateria criam sensação de movimento constante sem perder melodia.',
    context: 'É uma boa amostra da evolução do rock alternativo dos anos 1990 para uma linguagem mais ampla e radiofônica.',
    mood: ['energética', 'melódica', 'estrada'],
    searchHint: 'Foo Fighters Everlong',
  },
];

export const caipiraTracks: MusicTrack[] = [
  {
    title: 'Meu Rancho no Pé da Serra',
    artist: 'Tonico & Tinoco',
    style: 'Moda caipira / sertanejo raiz',
    whyListen: 'É quase uma fotografia sonora da vida rural: trabalho, rancho, café, criação, família e hábitos cotidianos do campo aparecem como parte de um mesmo modo de vida.',
    context: 'A música pertence ao universo em que a dupla transformava cenas comuns da roça em narrativa. É o tipo de gravação que ajuda a entender por que tantas famílias do interior guardam essas canções como memória afetiva.',
    mood: ['roça', 'memória', 'vida simples'],
    searchHint: 'Tonico Tinoco Meu Rancho no Pé da Serra',
  },
  {
    title: 'Chico Mineiro',
    artist: 'Tonico & Tinoco',
    year: '1946',
    style: 'Moda de viola narrativa',
    whyListen: 'É um exemplo clássico de canção que funciona quase como um conto oral: personagens, viagem, amizade e revelação são conduzidos pela narrativa.',
    context: 'Gravada por Tonico & Tinoco nos anos 1940, tornou-se uma das referências mais conhecidas do repertório caipira brasileiro e tem conexão direta com o imaginário mineiro.',
    mood: ['narrativa', 'saudade', 'Minas'],
    searchHint: 'Tonico Tinoco Chico Mineiro',
  },
  {
    title: 'Tristeza do Jeca',
    artist: 'Tonico & Tinoco',
    style: 'Canção caipira',
    whyListen: 'Ajuda a perceber uma característica central da música caipira antiga: a saudade não aparece só como romance, mas como relação com lugar, modo de vida e identidade.',
    context: 'Composição de Angelino de Oliveira, tornou-se um verdadeiro standard da música caipira e foi interpretada por várias gerações.',
    mood: ['saudade', 'interior', 'clássico'],
    searchHint: 'Tonico Tinoco Tristeza do Jeca',
  },
  {
    title: 'Rei do Gado',
    artist: 'Tião Carreiro & Pardinho',
    style: 'Moda de viola / pagode caipira',
    whyListen: 'Tião Carreiro é essencial para entender a força rítmica da viola e como o sertanejo raiz também pode ser tecnicamente sofisticado.',
    context: 'A dupla é uma referência indispensável para quem quer sair do repertório mais conhecido de Tonico & Tinoco e mergulhar na viola caipira.',
    mood: ['viola', 'boiadeiro', 'estrada'],
    searchHint: 'Tiao Carreiro Pardinho Rei do Gado',
  },
  {
    title: 'Cuitelinho',
    artist: 'Pena Branca & Xavantinho',
    style: 'Música caipira / folclore',
    whyListen: 'É uma ponte linda entre tradição oral, viola e uma interpretação mais contemplativa da música rural brasileira.',
    context: 'Pena Branca & Xavantinho, mineiros de Uberlândia, ajudaram a levar a música caipira para públicos urbanos sem retirar dela a identidade do interior.',
    mood: ['Minas', 'viola', 'contemplativa'],
    searchHint: 'Pena Branca Xavantinho Cuitelinho',
  },
];

export const rockArtists: MusicArtist[] = [
  { name: 'Led Zeppelin', era: '1968–1980', description: 'Blues, peso, improvisação e experimentação: uma das matrizes do hard rock.', startWith: ['Since I’ve Been Loving You', 'Ramble On', 'Kashmir'] },
  { name: 'Aerosmith', era: 'anos 1970 em diante', description: 'Hard rock americano com forte raiz no blues e enorme capacidade melódica.', startWith: ['Dream On', 'Seasons of Wither', 'Sweet Emotion'] },
  { name: 'Chris Cornell / Soundgarden / Audioslave', era: 'anos 1980–2010', description: 'Uma das vozes mais reconhecíveis do rock moderno, indo do peso de Seattle ao hard rock melódico.', startWith: ['Like a Stone', 'Fell on Black Days', 'Seasons'] },
  { name: 'Pearl Jam', era: 'anos 1990 em diante', description: 'Rock alternativo com forte identidade ao vivo e letras introspectivas.', startWith: ['Black', 'Release', 'Alive'] },
];

export const caipiraArtists: MusicArtist[] = [
  { name: 'Tonico & Tinoco', era: 'décadas de 1940–1990', description: 'Uma das duplas fundamentais da música caipira brasileira, com repertório de roça, boiadeiro, religiosidade, saudade e narrativa.', startWith: ['Chico Mineiro', 'Meu Rancho no Pé da Serra', 'Tristeza do Jeca', 'Boiadeiro Saudoso'] },
  { name: 'Tião Carreiro & Pardinho', era: 'décadas de 1950–1990', description: 'Referência absoluta da viola e do pagode caipira, com levadas que mudaram o instrumento dentro do sertanejo raiz.', startWith: ['Rei do Gado', 'Pagode em Brasília', 'Amargurado'] },
  { name: 'Liu & Léu', era: 'décadas de 1950–2010', description: 'Dupla ligada à tradição das modas de viola, causos e repertório rural.', startWith: ['O Ipê e o Prisioneiro', 'Rei dos Canoeiros'] },
  { name: 'Pena Branca & Xavantinho', era: 'décadas de 1960–1990', description: 'Mineiros, levaram a tradição caipira a novos públicos com interpretações de enorme delicadeza.', startWith: ['Cuitelinho', 'Calix Bento', 'O Cio da Terra'] },
  { name: 'Cascatinha & Inhana', era: 'décadas de 1940–1980', description: 'Duo histórico que ampliou a linguagem do sertanejo antigo com guarânias e canções de grande força vocal.', startWith: ['Índia', 'Meu Primeiro Amor'] },
];

export const musicDaily = {
  rock: rockTracks[0],
  caipira: caipiraTracks[0],
  note: 'A curadoria sertaneja desta área prioriza música caipira, moda de viola e sertanejo raiz de época — não sertanejo universitário.',
};
