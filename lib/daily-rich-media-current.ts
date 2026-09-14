// Ponteiro do catálogo visual da edição ativa.
// HARD GATE: somente o catálogo da data corrente pode ficar ativo.
import type {RichMediaEntry} from './rich-media';
import {dailyRichMedia20260914} from './daily-rich-media-2026-09-14';

const intradayRichMedia20260914:RichMediaEntry[]=[
  {
    label:'Tecnologia',
    matches:['microsoft cria código para impedir','microsoft apresenta código para manter sua ia','resista a correções ou desligamento'],
    tag:'MÍDIA REAL · 14/09',
    title:'Microsoft apresenta código de conduta para manter sistemas de IA sob controle humano',
    caption:'Foto real relacionada · Reuters/Gonzalo Fuentes · 14/09/2026',
    images:[{
      url:'https://www.reuters.com/resizer/v2/I7QTLHIOMJL3BOKDYV6OQZBV2Y.jpg?auth=613390c6ade492aa1b756b18ae0aa3f5a8d295854771cdf41b4553e513003993&quality=80&width=1920',
      alt:'Logotipo da Microsoft na feira VivaTech em Paris em imagem usada pela Reuters na matéria sobre o código de conduta para IA',
      caption:'Reuters/Gonzalo Fuentes',
      credit:'Reuters/Gonzalo Fuentes',
      sourceUrl:'https://www.reuters.com/legal/litigation/microsoft-drafts-code-conduct-keep-its-ai-under-human-control-2026-09-14/',
      kind:'REFERENCE'
    }]
  },
  {
    label:'Finanças',
    matches:['wall street cai com venda de ações de ia','nasdaq recua mais de 1%','venda de ações de ia derruba nasdaq'],
    tag:'MÍDIA REAL · 14/09',
    title:'Wall Street cai com pressão sobre ações de IA e semicondutores',
    caption:'Foto real relacionada · Reuters/Brendan McDermid · 14/09/2026',
    images:[{
      url:'https://www.reuters.com/resizer/v2/MIYBONYN75O57EM3DZALU2HUWQ.jpg?auth=e302a81615809dfc36e598070360aa1d8c9eeda82573fd22fd9b965c686a8403&quality=80&width=1920',
      alt:'Operadores no pregão da NYSE em Nova York em imagem usada pela Reuters na cobertura da queda de Wall Street',
      caption:'Reuters/Brendan McDermid',
      credit:'Reuters/Brendan McDermid',
      sourceUrl:'https://www.reuters.com/business/ai-warnings-knock-nasdaq-futures-pressure-tech-stocks-2026-09-14/',
      kind:'REFERENCE'
    }]
  },
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
