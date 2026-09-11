import type {RichMediaEntry} from './rich-media';
const art=(label:string,glyph:string,headline:string,sub:string)=>`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920" viewBox="0 0 1080 1920"><rect width="1080" height="1920" fill="#f4f1e8"/><rect x="70" y="110" width="940" height="1700" rx="84" fill="#ececeb"/><circle cx="540" cy="610" r="285" fill="#202a27" opacity=".14"/><text x="540" y="705" text-anchor="middle" font-size="220" font-family="Arial,Apple Color Emoji,Segoe UI Emoji,sans-serif">${glyph}</text><path d="M210 1030h660" stroke="#202a27" stroke-width="14" opacity=".55"/><text x="540" y="1215" text-anchor="middle" font-size="53" font-weight="700" font-family="Arial,sans-serif" fill="#202a27">${headline}</text><text x="540" y="1340" text-anchor="middle" font-size="35" font-family="Arial,sans-serif" fill="#53605c">${sub}</text><text x="540" y="1530" text-anchor="middle" font-size="31" font-family="Arial,sans-serif" fill="#6d7773">${label}</text></svg>`)}`;
export const dailyRichMedia202609102354:RichMediaEntry[]=[{
  label:'Brasil',
  matches:['petrobras corrige anúncio','gasolina terá redução de r$ 0,19'],
  tag:'ARTE ESPECÍFICA · 10/09 · 23H54',
  title:'GASOLINA · -R$0,19',
  caption:'CORREÇÃO PETROBRAS · DISTRIBUIDORES',
  images:[{url:art('Brasil','⛽','GASOLINA · -R$0,19','CORREÇÃO PETROBRAS · DISTRIBUIDORES'),alt:'Arte 9:16 específica com bomba de combustível e redução de R$0,19 informada pela Petrobras para o preço percebido com impostos por distribuidores',caption:'Petrobras corrigiu o anúncio e informou redução de R$0,19 por litro para distribuidores',credit:'Father Giulian News · arte editorial específica 10/09',sourceUrl:'https://www.reuters.com/business/energy/petrobras-walks-back-gasoline-price-hike-says-tax-cuts-will-lower-pump-prices-2026-09-10/',kind:'REFERENCE'}]
},{
  label:'Política',
  matches:['atlas/bloomberg mostra flávio bolsonaro','empatados tecnicamente no 2º turno'],
  tag:'ARTE ESPECÍFICA · 10/09 · 23H54',
  title:'46,4% × 46,2%',
  caption:'ATLAS/BLOOMBERG · EMPATE TÉCNICO',
  images:[{url:art('Política','📊','46,4% × 46,2%','ATLAS/BLOOMBERG · EMPATE TÉCNICO'),alt:'Arte 9:16 específica com gráfico de pesquisa mostrando 46,4% e 46,2%, diferença dentro da margem de erro',caption:'AtlasIntel/Bloomberg aponta empate técnico entre Flávio Bolsonaro e Lula no cenário de segundo turno',credit:'Father Giulian News · arte editorial específica 10/09',sourceUrl:'https://www.reuters.com/world/americas/bolsonaro-lula-statistically-tied-simulated-brazil-runoff-atlasbloomberg-poll-2026-09-10/',kind:'REFERENCE'}]
}];
