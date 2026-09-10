import type {RichMediaEntry} from './rich-media';
const art=(label:string,glyph:string,headline:string,sub:string)=>`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920" viewBox="0 0 1080 1920"><rect width="1080" height="1920" fill="#f4f1e8"/><rect x="70" y="110" width="940" height="1700" rx="84" fill="#ececeb"/><circle cx="540" cy="610" r="285" fill="#202a27" opacity=".14"/><text x="540" y="705" text-anchor="middle" font-size="220" font-family="Arial,Apple Color Emoji,Segoe UI Emoji,sans-serif">${glyph}</text><path d="M210 1030h660" stroke="#202a27" stroke-width="14" opacity=".55"/><text x="540" y="1215" text-anchor="middle" font-size="53" font-weight="700" font-family="Arial,sans-serif" fill="#202a27">${headline}</text><text x="540" y="1340" text-anchor="middle" font-size="35" font-family="Arial,sans-serif" fill="#53605c">${sub}</text><text x="540" y="1530" text-anchor="middle" font-size="31" font-family="Arial,sans-serif" fill="#6d7773">${label}</text></svg>`)}`;
export const dailyRichMedia202609100522:RichMediaEntry[]=[{
  label:'Corinthians',
  matches:['corinthians empata em la plata','quartas abertas para a volta'],
  tag:'ARTE ESPECÍFICA · 10/09 · 05H22',
  title:'1 × 1 EM LA PLATA',
  caption:'QUARTAS EM ABERTO',
  images:[{url:art('Corinthians','⚽','1 × 1 EM LA PLATA','QUARTAS EM ABERTO'),alt:'Arte 9:16 específica do empate por 1 a 1 entre Estudiantes e Corinthians em La Plata, com bola de futebol e placar textual',caption:'Estudiantes 1 x 1 Corinthians; decisão fica para a volta em São Paulo',credit:'Father Giulian News · arte editorial específica 10/09',sourceUrl:'https://gol.conmebol.com/libertadores/en/news/estudiantes-and-corinthians-play-out-draw-leave-tie-finely-poised',kind:'REFERENCE'}]
},{
  label:'Mundo',
  matches:['reuters revela operação russa frustrada','cabos submarinos no ártico'],
  tag:'ARTE ESPECÍFICA · 10/09 · 14H17',
  title:'CABOS SUBMARINOS SOB ALERTA',
  caption:'APURAÇÃO REUTERS · SVALBARD',
  images:[{url:art('Mundo','🌊','CABOS SUBMARINOS SOB ALERTA','APURAÇÃO REUTERS · SVALBARD'),alt:'Arte 9:16 específica com referência visual ao oceano e infraestrutura submarina, ligada à apuração sobre Svalbard',caption:'Reuters revela detalhes de operação russa frustrada perto de Svalbard; evento ocorreu na primavera de 2026',credit:'Father Giulian News · arte editorial específica 10/09',sourceUrl:'https://www.reuters.com/world/europe/nato-allies-foil-russian-subsea-cable-sabotage-plot-2026-09-10/',kind:'REFERENCE'}]
},{
  label:'Política',
  matches:['moraes anuncia e cancela pronunciamento','cancela pronunciamento previsto'],
  tag:'ARTE ESPECÍFICA · 10/09 · 11H25',
  title:'PRONUNCIAMENTO CANCELADO',
  caption:'ATUALIZAÇÃO DE AGENDA · STF',
  images:[{url:art('Política','🏛️','PRONUNCIAMENTO CANCELADO','ATUALIZAÇÃO DE AGENDA · STF'),alt:'Arte 9:16 específica com edifício institucional e indicação de pronunciamento cancelado, sem retratar realização do compromisso',caption:'Pronunciamento anunciado para 10/09 foi cancelado e deverá ser remarcado',credit:'Father Giulian News · arte editorial específica 10/09',sourceUrl:'https://www1.folha.uol.com.br/poder/2026/09/alexandre-de-moraes-fara-pronunciamento-apos-perder-a-relatoria-do-inquerito-das-fake-news.shtml',kind:'REFERENCE'}]
},{
  label:'Finanças',
  matches:['brent fecha a us$ 107,63','salto de 6,34%'],
  tag:'ARTE ESPECÍFICA · 10/09 · 17H34',
  title:'BRENT US$107,63',
  caption:'FECHAMENTO · +6,34%',
  images:[{url:art('Finanças','🛢️','BRENT US$107,63','FECHAMENTO · +6,34%'),alt:'Arte 9:16 específica com barril de petróleo e fechamento confirmado do Brent em 107,63 dólares',caption:'Brent fecha a US$107,63 em 10/09, alta de 6,34%',credit:'Father Giulian News · arte editorial específica 10/09',sourceUrl:'https://www.reuters.com/business/energy/brent-holds-above-100-tanker-attacks-deepen-supply-fear-2026-09-10/',kind:'REFERENCE'}]
},{
  label:'Cyber Security',
  matches:['anthropic relata campanhas russas e chinesas','abusando do claude'],
  tag:'ARTE ESPECÍFICA · 10/09 · 17H34',
  title:'ABUSO DE IA EM CAMPANHAS',
  caption:'RÚSSIA + CHINA · CLAUDE',
  images:[{url:art('Cyber Security','🛡️','ABUSO DE IA EM CAMPANHAS','RÚSSIA + CHINA · CLAUDE'),alt:'Arte 9:16 específica com escudo de cibersegurança e referência a campanhas maliciosas envolvendo Claude atribuídas a atores russos e chineses',caption:'Anthropic relata novas descobertas de inteligência de ameaças envolvendo abuso do Claude',credit:'Father Giulian News · arte editorial específica 10/09',sourceUrl:'https://www.reuters.com/legal/litigation/anthropic-disrupts-russian-chinese-ai-campaigns-targeting-its-claude-models-2026-09-10/',kind:'REFERENCE'}]
}];