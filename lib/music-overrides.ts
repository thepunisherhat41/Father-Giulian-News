import { dailyContent, todayDrops } from './daily-content';

if (!todayDrops.find((item) => item.slug === 'musica')) {
  todayDrops.push({
    slug: 'musica',
    label: 'Música',
    emoji: '🎵',
    title: 'Rock e moda de viola: duas histórias para ouvir hoje',
    detail: 'Uma faixa de rock para escutar com atenção e uma memória sonora da roça brasileira.',
  });
}

Object.assign(dailyContent, {
  musica: {
    title: 'Duas trilhas para o dia: guitarra elétrica e viola caipira',
    summary: 'A nova área musical separa Rock de Sertanejo de Época. A proposta é ouvir menos no automático e entender mais: contexto, arranjo, época, artistas e as histórias que fizeram essas músicas atravessarem gerações.',
    shareSummary: 'Música do dia: um mergulho no rock e outro na música caipira de época. A seleção traz contexto, por que vale ouvir e artistas para continuar explorando — sem misturar sertanejo raiz com sertanejo universitário.',
    readTime: '10 MIN READ',
    badge: 'MUSIC ARCHIVE',
    stats: [
      { label: 'TRILHAS', value: '2', note: 'Rock + Sertanejo de Época' },
      { label: 'ROCK DROP', value: 'AUDIOSLAVE' },
      { label: 'RAIZ DROP', value: 'TONICO & TINOCO' },
    ],
    sections: [
      {
        title: 'Rock: não escute só a música — escute a construção',
        paragraphs: ['A trilha de rock foi pensada para variar entre blues rock, hard rock, grunge e alternative. Cada faixa vem acompanhada de uma chave de escuta: dinâmica, timbre, bateria, guitarra, interpretação vocal ou contexto histórico.'],
        bullets: ['Hoje: “Like a Stone”, do Audioslave.', 'Depois: Led Zeppelin, Aerosmith, Pearl Jam e Foo Fighters.', 'A curadoria muda ao longo das edições para não virar uma playlist estática.'],
      },
      {
        title: 'Sertanejo de época: antes de “sertanejo”, havia a música caipira',
        paragraphs: ['Aqui a palavra raiz é importante. A seleção prioriza duplas e intérpretes que cantaram o campo, a viola, o boiadeiro, as festas, a fé, a saudade, os causos e o cotidiano rural.'],
        bullets: ['Tonico & Tinoco', 'Tião Carreiro & Pardinho', 'Liu & Léu', 'Pena Branca & Xavantinho', 'Cascatinha & Inhana'],
      },
      {
        title: 'A memória da roça como documento cultural',
        paragraphs: ['Músicas como “Meu Rancho no Pé da Serra” têm valor que vai além da melodia. Elas registram objetos, rotinas, trabalhos, alimentos, formas de falar e relações familiares que faziam parte do cotidiano rural. Ouvir hoje é quase abrir uma janela para outro Brasil.'],
      },
    ],
    sources: [
      { label: 'Apple Music · Tonico & Tinoco', url: 'https://music.apple.com/br/artist/tonico-tinoco/213946487' },
      { label: 'Spotify · Raízes Sertanejas · Tonico & Tinoco', url: 'https://open.spotify.com/intl-pt/album/3dyipS4Hf0Gpqqv6e1aVEN' },
    ],
  },
});
