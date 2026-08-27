import type { RichMediaEntry } from './rich-media';

const commons = (name:string) => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(name).replace(/%2F/g,'/')}`;

export const dailyRichMedia20260827Family: RichMediaEntry[] = [
  {
    label:'Gravidez',
    matches:['7 semanas + 4 dias','7 semanas','bebê cresce rápido','bebe cresce rapido'],
    tag:'MÍDIA MÉDICA DE REFERÊNCIA', title:'Ultrassom de referência da gestação inicial',
    caption:'Imagem real de referência da gestação inicial; não é ultrassom individual e não substitui avaliação obstétrica.',
    images:[{url:commons('Embryo at 6 weeks.JPG'),alt:'Ultrassom real de referência de uma gestação inicial',caption:'Ultrassom de referência.',credit:'X. Compagnion / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Embryo_at_6_weeks.JPG',kind:'MEDICAL'}]
  },
  {
    label:'Ser Pai',
    matches:['observe o que piora o enjoo','gatilhos de enjoo','ajude sem transformar'],
    tag:'MÍDIA REAL · APOIO', title:'Apoio familiar na gestação',
    caption:'Imagem documental do CDC usada para contextualizar apoio prático no período materno.',
    images:[{url:'https://www.cdc.gov/hearher/media/images/support-family-friends-16x9-1.jpg',alt:'Família apoiando uma mulher no período materno',caption:'Apoio familiar.',credit:'CDC Hear Her',sourceUrl:'https://www.cdc.gov/hearher/about/support-her.html',kind:'PHOTO'}]
  }
];
