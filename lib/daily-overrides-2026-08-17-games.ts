import { dailyContent, todayDrops } from './daily-content';

const gamesDrop = {
  slug: 'games',
  label: 'Games',
  emoji: '🎮',
  title: 'Stage Tour: 25 músicas e uma tentativa séria de ressuscitar a era Guitar Hero',
  detail: 'RedOctane volta aos jogos de ritmo com banda de até 4 jogadores, novos periféricos, campanha em Tours e lançamento previsto para o fim de 2026.',
};

const existingGameDrop = todayDrops.findIndex((item) => item.slug === 'games');
if (existingGameDrop >= 0) todayDrops.splice(existingGameDrop, 1);
const musicIndex = todayDrops.findIndex((item) => item.slug === 'musica');
todayDrops.splice(musicIndex >= 0 ? musicIndex + 1 : todayDrops.length, 0, gamesDrop);

Object.assign(dailyContent, {
  games: {
    title: 'Stage Tour: o sucessor espiritual de Guitar Hero já parece mais ambicioso do que simples nostalgia',
    summary: 'A RedOctane Games prepara um novo rhythm-action game para Holiday 2026. O projeto recupera a estrada de notas e instrumentos de plástico, mas adiciona banda de até quatro jogadores, Lead/Groove/Drums/Vocals, campanha em formato roguelite, multiplayer, eventos sazonais e suporte a controle ou teclado.',
    shareSummary: 'Games: Stage Tour quer recuperar a era Guitar Hero sem simplesmente copiar a antiga franquia. Já há 25 músicas confirmadas, PC/PS5/Xbox Series/Switch 2, modo offline e banda de até quatro jogadores.',
    readTime: '10 MIN READ + 25 FAIXAS',
    badge: 'GAMES / RHYTHM REVIVAL',
    stats: [
      { label: 'LANÇAMENTO', value: 'HOLIDAY 2026', note: 'janela oficial, sem dia exato' },
      { label: 'SETLIST', value: '25', note: 'confirmadas em 12/08' },
      { label: 'BANDA', value: 'ATÉ 4', note: 'Lead · Groove · Drums · Vocals' },
    ],
    sections: [
      {
        title: 'O que foi realmente confirmado',
        paragraphs: ['Stage Tour está em desenvolvimento pela RedOctane Games e tem lançamento planejado para o fim de 2026. A FAQ oficial lista PC, PlayStation 5, Xbox Series X|S e Nintendo Switch 2. O jogo pode ser usado offline, embora multiplayer online, rankings e outros recursos conectados dependam de internet.'],
        bullets: ['Instrumentos dedicados continuam no centro da experiência.', 'Controle tradicional e teclado também terão uma forma própria de jogar.', 'A formação de banda prevê até quatro jogadores.', 'A trilha confirmada já chegou a 25 músicas.'],
      },
      {
        title: 'Por que essa notícia é mais interessante que um simples anúncio',
        paragraphs: ['O gênero de guitarra de plástico explodiu nos anos 2000 e depois foi saturado por sequências, expansões e acessórios. Stage Tour está sendo vendido como uma plataforma de longo prazo, com a promessa de evitar a antiga esteira de “jogo novo todo ano”. Isso torna o modelo comercial, a qualidade do hardware e o licenciamento de músicas tão importantes quanto o gameplay.'],
      },
      {
        title: 'O que observar antes de entrar no hype',
        bullets: ['Preço da guitarra e dos demais periféricos.', 'Qualidade e latência dos controles.', 'Como músicas extras serão vendidas ou distribuídas.', 'Se o modo sazonal será bônus ou pressão de live service.', 'Quantidade e qualidade de charts por instrumento.', 'Data exata, preço do jogo e disponibilidade dos bundles no Brasil.'],
      },
      {
        title: 'Alguns nomes da setlist já mostram a direção',
        paragraphs: ['A seleção oficial combina gerações e estilos diferentes. Há Red Hot Chili Peppers, Extreme, Ghost, Slipknot, Mastodon, The Cure, Radiohead, Paramore, Muse, The Rolling Stones, Weezer, Avril Lavigne, BABYMETAL & Electric Callboy e artistas mais novos. O componente especial da aba lista as 25 faixas confirmadas.'],
      },
    ],
    sources: [
      { label: 'Stage Tour · FAQ oficial', url: 'https://stagetour.com/' },
      { label: 'Stage Tour · Setlist Reveal #7 · 12/08/2026', url: 'https://stagetour.com/blogs/newsroom/stage-tour-setlist-reveal-7' },
      { label: 'Steam · Stage Tour', url: 'https://store.steampowered.com/app/4452700/STAGE_TOUR/' },
      { label: 'MWN Jornal · matéria em português · 17/08/2026', url: 'https://www.mwnjornal.com.br/ciencia-e-tecnologia/2026/08/17/redoctane-games-anuncia-stage-tour-o-sucessor-espiritual-de-guitar-hero-e-aqui-esta-a-lista-de-musicas/' },
    ],
  },
});

Object.assign(dailyContent.hoje, {
  title: '20 missões novas para segunda-feira, 17 de agosto',
  summary: 'A edição de hoje agora inclui 20 missões: atualidades, ciência, família, veículos, segurança, música e uma nova área de Games, inaugurada com Stage Tour e o retorno dos jogos de guitarra.',
  shareSummary: 'Bom dia: a edição de 17/08 agora tem 20 missões, incluindo a nova aba Games com Stage Tour, o sucessor espiritual de Guitar Hero.',
  readTime: '20 MISSÕES',
});
