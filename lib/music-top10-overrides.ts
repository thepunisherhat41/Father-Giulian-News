import { caipiraTracks, rockTracks, type MusicTrack } from './music-content';

const rockTop10: MusicTrack[] = [
  {
    title: 'Like a Stone', artist: 'Audioslave', year: '2002', style: 'Alternative rock / hard rock',
    whyListen: 'Uma aula de dinâmica: a música cresce sem precisar correr, e a guitarra usa espaço e textura em vez de preencher tudo.',
    context: 'Audioslave reuniu Chris Cornell com integrantes do Rage Against the Machine. Ouça como a base pesada muda completamente quando encontra a voz e a interpretação de Cornell.',
    mood: ['introspectiva', 'noturna', 'guitarra marcante'], searchHint: 'Audioslave Like a Stone',
  },
  {
    title: 'Since I’ve Been Loving You', artist: 'Led Zeppelin', year: '1970', style: 'Blues rock',
    whyListen: 'Tensão, silêncio, dinâmica e improvisação carregam mais emoção do que simplesmente tocar mais alto.',
    context: 'Uma ponte muito clara entre o blues elétrico e o hard rock britânico que ajudou a moldar o rock dos anos 1970.',
    mood: ['blues', 'intensa', 'guitarra expressiva'], searchHint: 'Led Zeppelin Since Ive Been Loving You',
  },
  {
    title: 'Dream On', artist: 'Aerosmith', year: '1973', style: 'Hard rock / power ballad',
    whyListen: 'Começa contida e constrói energia pouco a pouco até um clímax vocal que virou referência do gênero.',
    context: 'Uma das músicas que definiram a identidade inicial do Aerosmith e mostraram que uma balada podia continuar soando pesada.',
    mood: ['épica', 'crescente', 'clássico'], searchHint: 'Aerosmith Dream On',
  },
  {
    title: 'Black', artist: 'Pearl Jam', year: '1991', style: 'Grunge / alternative rock',
    whyListen: 'Interpretação vocal e construção emocional importam mais aqui do que virtuosismo técnico.',
    context: 'Ten ajudou a transformar a cena de Seattle em fenômeno mundial no começo dos anos 1990.',
    mood: ['melancólica', 'emocional', 'grunge'], searchHint: 'Pearl Jam Black',
  },
  {
    title: 'Everlong', artist: 'Foo Fighters', year: '1997', style: 'Alternative rock',
    whyListen: 'A guitarra rítmica quase hipnótica e a bateria criam sensação constante de movimento sem perder melodia.',
    context: 'Uma boa amostra de como o rock alternativo dos anos 1990 ganhou uma linguagem mais ampla sem abandonar energia.',
    mood: ['energética', 'melódica', 'estrada'], searchHint: 'Foo Fighters Everlong',
  },
  {
    title: 'Fell On Black Days', artist: 'Soundgarden', year: '1994', style: 'Grunge / alternative metal',
    whyListen: 'O riff é pesado sem ser apressado, enquanto a voz de Chris Cornell carrega uma sensação de inquietação quase física.',
    context: 'Superunknown mostra um Soundgarden mais acessível sem abandonar afinações, peso e estranheza harmônica.',
    mood: ['sombria', 'grunge', 'Chris Cornell'], searchHint: 'Soundgarden Fell On Black Days',
  },
  {
    title: 'Seasons', artist: 'Chris Cornell', year: '1992', style: 'Acoustic rock / folk rock',
    whyListen: 'Voz e violão bastam para criar textura, tensão e uma sensação de espaço enorme.',
    context: 'Gravada para a trilha de Singles, mostra Cornell longe do peso do Soundgarden e evidencia composição, afinação e interpretação.',
    mood: ['acústica', 'introspectiva', 'Seattle'], searchHint: 'Chris Cornell Seasons',
  },
  {
    title: 'Nutshell', artist: 'Alice In Chains', year: '1994', style: 'Grunge / acoustic rock',
    whyListen: 'Poucos elementos, muito espaço e uma interpretação vocal que transforma fragilidade em peso emocional.',
    context: 'Jar of Flies mostrou que a cena de Seattle podia soar devastadora mesmo quando desligava boa parte da distorção.',
    mood: ['melancólica', 'acústica', 'noturna'], searchHint: 'Alice In Chains Nutshell',
  },
  {
    title: 'Interstate Love Song', artist: 'Stone Temple Pilots', year: '1994', style: 'Alternative rock / grunge',
    whyListen: 'O baixo e a guitarra criam um groove imediatamente reconhecível, com uma progressão harmônica mais sofisticada do que parece à primeira audição.',
    context: 'Purple consolidou o Stone Temple Pilots como uma banda com identidade própria para além das comparações iniciais com Seattle.',
    mood: ['estrada', 'groove', 'anos 90'], searchHint: 'Stone Temple Pilots Interstate Love Song',
  },
  {
    title: 'So Far Away', artist: 'Avenged Sevenfold', year: '2010', style: 'Heavy metal / power ballad',
    whyListen: 'Uma construção lenta, melódica e emocional que mostra o lado menos agressivo da banda sem perder a linguagem do metal.',
    context: 'Nightmare foi gravado num período marcante para a banda e a faixa se tornou uma das músicas mais afetivas do repertório do Avenged Sevenfold.',
    mood: ['emocional', 'metal', 'melódica'], searchHint: 'Avenged Sevenfold So Far Away',
  },
];

const caipiraTop10: MusicTrack[] = [
  {
    title: 'Tristeza do Jeca', artist: 'Tonico & Tinoco', style: 'Canção caipira',
    whyListen: 'A saudade aparece como relação com lugar, modo de vida e identidade, não apenas como romance.',
    context: 'Composição de Angelino de Oliveira que atravessou gerações e se tornou um standard da música caipira.',
    mood: ['saudade', 'interior', 'clássico'], searchHint: 'Tonico Tinoco Tristeza do Jeca',
  },
  {
    title: 'Chico Mineiro', artist: 'Tonico & Tinoco', year: '1946', style: 'Moda de viola narrativa',
    whyListen: 'Funciona quase como conto oral: personagens, estrada, amizade e revelação são conduzidos pela narrativa.',
    context: 'Gravada nos anos 1940, tornou-se uma das referências mais conhecidas da dupla e do repertório caipira brasileiro.',
    mood: ['narrativa', 'saudade', 'Minas'], searchHint: 'Tonico Tinoco Chico Mineiro',
  },
  {
    title: 'Pagode em Brasília', artist: 'Tião Carreiro & Pardinho', style: 'Pagode de viola',
    whyListen: 'É essencial para perceber a viola deixando de ser simples acompanhamento e assumindo o comando rítmico.',
    context: 'A linguagem do pagode de viola se tornou uma das grandes assinaturas de Tião Carreiro e influenciou gerações de violeiros.',
    mood: ['viola', 'pagode', 'ritmo'], searchHint: 'Tiao Carreiro Pardinho Pagode em Brasilia',
  },
  {
    title: 'Rei do Gado', artist: 'Tião Carreiro & Pardinho', style: 'Moda de viola / pagode caipira',
    whyListen: 'Narrativa sertaneja e viola aparecem com a força rítmica característica da dupla.',
    context: 'Uma boa porta para entender por que Tião Carreiro é referência técnica e cultural da viola caipira.',
    mood: ['viola', 'boiadeiro', 'estrada'], searchHint: 'Tiao Carreiro Pardinho Rei do Gado',
  },
  {
    title: 'Boiadeiro Errante', artist: 'Liu & Léu', style: 'Moda sertaneja antiga',
    whyListen: 'Estrada, boiada e deslocamento aparecem como memória e modo de vida, não apenas cenário.',
    context: 'Representa bem o repertório narrativo e rural que marcou a longa carreira de Liu & Léu.',
    mood: ['boiadeiro', 'estrada', 'sertão'], searchHint: 'Liu Leu Boiadeiro Errante',
  },
  {
    title: 'O Ipê e o Prisioneiro', artist: 'Liu & Léu', style: 'Moda narrativa',
    whyListen: 'É música caipira funcionando como conto cantado, com personagens e progressão dramática.',
    context: 'Esse formato narrativo ajuda a entender a ligação entre moda de viola, oralidade e causos do interior.',
    mood: ['narrativa', 'dramática', 'memória'], searchHint: 'Liu Leu O Ipe e o Prisioneiro',
  },
  {
    title: 'Cuitelinho', artist: 'Pena Branca & Xavantinho', style: 'Música caipira / tradição oral',
    whyListen: 'Viola e interpretação delicada criam uma escuta contemplativa, bem diferente da lógica de música sertaneja comercial moderna.',
    context: 'A dupla ajudou a aproximar a tradição caipira de públicos urbanos sem retirar sua identidade do interior.',
    mood: ['Minas', 'viola', 'contemplativa'], searchHint: 'Pena Branca Xavantinho Cuitelinho',
  },
  {
    title: 'O Cio da Terra', artist: 'Pena Branca & Xavantinho', style: 'Música caipira / MPB',
    whyListen: 'Trabalho, terra e ciclo rural aparecem com uma interpretação que aproxima música caipira e MPB.',
    context: 'É um ótimo exemplo da ponte cultural construída por Pena Branca & Xavantinho entre interior e repertório urbano brasileiro.',
    mood: ['terra', 'trabalho', 'contemplativa'], searchHint: 'Pena Branca Xavantinho O Cio da Terra',
  },
  {
    title: 'Índia', artist: 'Cascatinha & Inhana', style: 'Guarânia / sertanejo antigo',
    whyListen: 'A força vocal e a melodia mostram como a influência paraguaia entrou de vez no repertório sertanejo brasileiro.',
    context: 'A gravação se tornou um dos símbolos de Cascatinha & Inhana e da presença da guarânia na música brasileira.',
    mood: ['guarânia', 'romântica', 'histórica'], searchHint: 'Cascatinha Inhana India',
  },
  {
    title: 'Meu Primeiro Amor', artist: 'Cascatinha & Inhana', style: 'Canção romântica / sertanejo antigo',
    whyListen: 'Mostra a harmonia vocal e o lado mais sentimental de uma dupla que marcou profundamente o sertanejo de época.',
    context: 'Ajuda a perceber como o repertório raiz também dialogava com canção romântica e influências latino-americanas.',
    mood: ['romântica', 'dueto', 'memória'], searchHint: 'Cascatinha Inhana Meu Primeiro Amor',
  },
];

function applyUniqueTop10(target: MusicTrack[], source: MusicTrack[]) {
  const seen = new Set<string>();
  const unique = source.filter((track) => {
    const key = `${track.artist.trim().toLowerCase()}::${track.title.trim().toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 10);
  target.splice(0, target.length, ...unique);
}

applyUniqueTop10(rockTracks, rockTop10);
applyUniqueTop10(caipiraTracks, caipiraTop10);
