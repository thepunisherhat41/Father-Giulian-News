import type { RichMediaEntry } from './rich-media';

const commons = (name:string) => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(name).replace(/%2F/g,'/')}`;

export const dailyRichMedia20260826_1735: RichMediaEntry[] = [
  {
    label:'Finanças',
    matches:['fechamento 26/08','ibovespa fica praticamente estável','dólar encerra a r$ 5,152','dolar encerra a r$ 5,152'],
    tag:'MÍDIA REAL · B3',
    title:'Bolsa brasileira · fechamento de 26/08',
    caption:'Fotografia real da sede da bolsa brasileira para contextualizar o fechamento confirmado do mercado de 26/08.',
    images:[{
      url:commons('Edifício sede da Bovespa.jpg'),
      alt:'Edifício-sede da bolsa brasileira B3 em São Paulo',
      caption:'Sede da bolsa brasileira em São Paulo.',
      credit:'Boaventuravinicius / Wikimedia Commons · CC BY-SA 4.0',
      sourceUrl:'https://commons.wikimedia.org/wiki/File:Edif%C3%ADcio_sede_da_Bovespa.jpg',
      kind:'PHOTO'
    }],
    relatedLabel:'UOL Economia · fechamento de dólar e Bolsa · 26/08/2026',
    relatedHref:'https://economia.uol.com.br/cotacoes/noticias/redacao/2026/08/26/dolar-bolsa-fechamento-hoje-26-de-agosto-de-2026.ghtm'
  }
];
