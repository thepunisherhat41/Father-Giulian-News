// Ponteiro do catálogo visual da edição ativa.
// HARD GATE: somente o catálogo da data corrente pode ficar ativo.
import type {RichMediaEntry} from './rich-media';
import {dailyRichMedia20260914} from './daily-rich-media-2026-09-14';

const intradayRichMedia20260914:RichMediaEntry[]=[
  {
    label:'Política',
    matches:['btg/nexus: lula volta à frente','lula volta à frente de flávio','47% a 46%'],
    tag:'MÍDIA REAL · 14/09',
    title:'Lula e Flávio Bolsonaro em imagens usadas pela Reuters na cobertura da pesquisa BTG/Nexus',
    caption:'Foto real relacionada · Reuters/Adriano Machado e Pilar Olivares · 14/09/2026',
    images:[{
      url:'https://www.reuters.com/resizer/v2/GA7AM5FG2BNR7JY3OSWDGDEVSA.jpg?auth=28ff738136c3de44af265ca9162ea77bf3564bf4dd9f027113d9ec6fcaec2b5f&quality=80&width=1080',
      alt:'Composição fotográfica real com Lula e Flávio Bolsonaro usada na matéria da Reuters sobre a pesquisa BTG/Nexus',
      caption:'Reuters/Adriano Machado e Pilar Olivares',
      credit:'Reuters/Adriano Machado e Pilar Olivares',
      sourceUrl:'https://www.reuters.com/world/americas/brazils-lula-regains-narrow-edge-over-bolsonaro-btgnexus-poll-2026-09-14/',
      kind:'REFERENCE'
    }]
  }
];

export const dailyRichMediaCurrent=[...intradayRichMedia20260914,...dailyRichMedia20260914];
