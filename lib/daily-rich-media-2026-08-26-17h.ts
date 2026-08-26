import type { RichMediaEntry } from './rich-media';

const commons = (name:string) => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(name).replace(/%2F/g,'/')}`;

// Suplemento visual da revisão das 17h de 26/08.
// O catálogo corrente combina este arquivo com os demais catálogos da data, sempre com este primeiro.
export const dailyRichMedia20260826_17h: RichMediaEntry[] = [
  {
    label:'Zona Leste em Foco',
    matches:['vacinação contra sarampo chega ao shopping metrô itaquera','vacinacao contra sarampo chega ao shopping metro itaquera','shopping metrô itaquera nesta quinta e sexta','shopping metro itaquera nesta quinta e sexta'],
    tag:'MÍDIA REAL · ITAQUERA',
    title:'Shopping Metrô Itaquera',
    caption:'Fotografia real do Shopping Metrô Itaquera, local exato da ação de vacinação anunciada pela Secretaria Municipal da Saúde para 27 e 28/08.',
    images:[{
      url:commons('Shopping Metrô Itaquera - 4.jpg'),
      alt:'Fachada e identificação do Shopping Metrô Itaquera em São Paulo',
      caption:'Shopping Metrô Itaquera, local da ação de vacinação.',
      credit:'Ajmcbarreto / Wikimedia Commons',
      sourceUrl:'https://commons.wikimedia.org/wiki/File:Shopping_Metr%C3%B4_Itaquera_-_4.jpg',
      kind:'PHOTO'
    }],
    relatedLabel:'Prefeitura de São Paulo · vacinação contra sarampo no Shopping Metrô Itaquera · 26/08',
    relatedHref:'https://prefeitura.sp.gov.br/web/saude/w/prefeitura-realiza-vacina%C3%A7%C3%A3o-contra-sarampo-no-shopping-metr%C3%B4-itaquera'
  },
  {
    label:'Tempo e Clima',
    matches:['fim da tarde em sp: penha marca 23°c','fim da tarde em sp: penha marca 23','cge prevê chuviscos nas próximas horas','cge preve chuviscos nas proximas horas'],
    tag:'MÍDIA REAL · PENHA',
    title:'Penha · São Paulo',
    caption:'Vista real de Vila Esperança, no distrito da Penha, usada para contextualizar o boletim meteorológico do CGE que registrou 23°C na região às 15h46.',
    images:[{
      url:commons('Vila Esperanca.JPG'),
      alt:'Vista urbana de Vila Esperança no distrito da Penha em São Paulo',
      caption:'Distrito da Penha, São Paulo.',
      credit:'Raphael Igor / Wikimedia Commons',
      sourceUrl:'https://commons.wikimedia.org/wiki/File:Vila_Esperanca.JPG',
      kind:'PHOTO'
    }],
    relatedLabel:'CGE São Paulo · boletim meteorológico · 26/08 às 15h46',
    relatedHref:'https://www.cgesp.org/v3/noticias.jsp'
  }
];
