import type { RichMediaEntry } from './rich-media';

const commons = (name:string) => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(name).replace(/%2F/g,'/')}`;

export const dailyRichMedia20260825Evening: RichMediaEntry[] = [
  {
    label:'Política',
    matches:['presidência: lula 41%','lula 41%','flávio 37%','flavio 37%','cury 2%','corrida presidencial'],
    tag:'MÍDIA OFICIAL · JUSTIÇA ELEITORAL',
    title:'Urna eletrônica brasileira',
    caption:'Foto institucional de urna eletrônica brasileira, usada como visual neutro para o radar de pesquisas presidenciais sem privilegiar um candidato específico.',
    images:[{
      url:commons('Brazilian DRE voting machine for 2022 elections.jpg'),
      alt:'Urna eletrônica brasileira em fotografia institucional do TSE',
      caption:'Urna eletrônica brasileira.',
      credit:'Tribunal Superior Eleitoral do Brasil / Wikimedia Commons · domínio público',
      sourceUrl:'https://commons.wikimedia.org/wiki/File:Brazilian_DRE_voting_machine_for_2022_elections.jpg',
      kind:'PHOTO'
    }]
  },
  {
    label:'Games',
    matches:['gamescom onl','assista ao vídeo oficial','assista ao video oficial','opening night live 2026'],
    tag:'VÍDEO OFICIAL · GAMESCOM ONL 2026',
    title:'gamescom Opening Night Live 2026',
    caption:'Thumbnail e transmissão oficial da Opening Night Live 2026.',
    images:[{
      url:'https://i.ytimg.com/vi/qwC9EFT6EFk/maxresdefault.jpg',
      alt:'Thumbnail oficial da gamescom Opening Night Live 2026',
      caption:'gamescom Opening Night Live 2026.',
      credit:'gamescom / YouTube',
      sourceUrl:'https://www.youtube.com/watch?v=qwC9EFT6EFk',
      kind:'REFERENCE'
    }],
    youtubeId:'qwC9EFT6EFk',
    relatedLabel:'gamescom · Opening Night Live 2026',
    relatedHref:'https://www.gamescom.global/en/video/gamescom-opening-night-live-2026'
  }
];
