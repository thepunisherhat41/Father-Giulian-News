import type {RichMediaEntry} from './rich-media';
const art=(label:string,glyph:string,headline:string,sub:string)=>`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920" viewBox="0 0 1080 1920"><rect width="1080" height="1920" fill="#f4f1e8"/><rect x="70" y="110" width="940" height="1700" rx="84" fill="#ececeb"/><circle cx="540" cy="610" r="285" fill="#202a27" opacity=".14"/><text x="540" y="705" text-anchor="middle" font-size="220" font-family="Arial,Apple Color Emoji,Segoe UI Emoji,sans-serif">${glyph}</text><path d="M210 1030h660" stroke="#202a27" stroke-width="14" opacity=".55"/><text x="540" y="1215" text-anchor="middle" font-size="53" font-weight="700" font-family="Arial,sans-serif" fill="#202a27">${headline}</text><text x="540" y="1340" text-anchor="middle" font-size="35" font-family="Arial,sans-serif" fill="#53605c">${sub}</text><text x="540" y="1530" text-anchor="middle" font-size="31" font-family="Arial,sans-serif" fill="#6d7773">${label}</text></svg>`)}`;
export const dailyRichMedia202609102101:RichMediaEntry[]=[{
  label:'Tecnologia',
  matches:['pentágono negocia empréstimo de us$ 5 bilhões','fluidstack, diz wsj'],
  tag:'ARTE ESPECÍFICA · 10/09 · 21H01',
  title:'US$ 5 BI EM NEGOCIAÇÃO',
  caption:'PENTÁGONO + FLUIDSTACK · RELATO WSJ',
  images:[{url:art('Tecnologia','☁️','US$ 5 BI EM NEGOCIAÇÃO','PENTÁGONO + FLUIDSTACK · RELATO WSJ'),alt:'Arte 9:16 específica sobre a negociação reportada de empréstimo do Pentágono para a startup de nuvem de IA Fluidstack, sem indicar acordo fechado',caption:'Reuters repercute relato do WSJ sobre negociação de empréstimo de cerca de US$5 bilhões à Fluidstack',credit:'Father Giulian News · arte editorial específica 10/09',sourceUrl:'https://www.reuters.com/technology/pentagon-talks-lend-5-billion-ai-cloud-startup-fluidstack-wsj-reports-2026-09-10/',kind:'REFERENCE'}]
},{
  label:'Cyber Security',
  matches:['congressistas dos eua pedem lista negra','empresas ligadas a hack-for-hire'],
  tag:'ARTE ESPECÍFICA · 10/09 · 21H01',
  title:'ENTITY LIST SOB PEDIDO',
  caption:'HACK-FOR-HIRE · CARTA DE 09/09',
  images:[{url:art('Cyber Security','🛡️','ENTITY LIST SOB PEDIDO','HACK-FOR-HIRE · CARTA DE 09/09'),alt:'Arte 9:16 específica sobre pedido de congressistas dos EUA para inclusão de empresas associadas em reportagens a hack-for-hire na Entity List',caption:'Carta de 09/09 pede inclusão de três empresas na Entity List; Reuters detalhou o caso em 10/09',credit:'Father Giulian News · arte editorial específica 10/09',sourceUrl:'https://www.reuters.com/legal/government/us-lawmakers-call-american-government-blacklist-three-indian-hack-for-hire-firms-2026-09-10/',kind:'REFERENCE'}]
}];
