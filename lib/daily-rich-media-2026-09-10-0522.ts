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
  label:'Política',
  matches:['moraes anuncia e cancela pronunciamento','cancela pronunciamento previsto'],
  tag:'ARTE ESPECÍFICA · 10/09 · 11H25',
  title:'PRONUNCIAMENTO CANCELADO',
  caption:'ATUALIZAÇÃO DE AGENDA · STF',
  images:[{url:art('Política','🏛️','PRONUNCIAMENTO CANCELADO','ATUALIZAÇÃO DE AGENDA · STF'),alt:'Arte 9:16 específica com edifício institucional e indicação de pronunciamento cancelado, sem retratar realização do compromisso',caption:'Pronunciamento anunciado para 10/09 foi cancelado e deverá ser remarcado',credit:'Father Giulian News · arte editorial específica 10/09',sourceUrl:'https://www1.folha.uol.com.br/poder/2026/09/alexandre-de-moraes-fara-pronunciamento-apos-perder-a-relatoria-do-inquerito-das-fake-news.shtml',kind:'REFERENCE'}]
},{
  label:'Finanças',
  matches:['brent salta cerca de 4%','supera us$ 105 no intradiário'],
  tag:'ARTE ESPECÍFICA · 10/09 · 11H25',
  title:'BRENT > US$105',
  caption:'ALTA INTRADIÁRIA · ~4%',
  images:[{url:art('Finanças','🛢️','BRENT > US$105','ALTA INTRADIÁRIA · ~4%'),alt:'Arte 9:16 específica com barril de petróleo e marcador de Brent acima de 105 dólares em cotação intradiária',caption:'Brent supera US$105 durante o pregão de 10/09; valor intradiário',credit:'Father Giulian News · arte editorial específica 10/09',sourceUrl:'https://www.reuters.com/business/energy/brent-holds-above-100-tanker-attacks-deepen-supply-fear-2026-09-10/',kind:'REFERENCE'}]
}];