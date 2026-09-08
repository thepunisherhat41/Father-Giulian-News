import type {RichMediaEntry} from './rich-media';
const art=(label:string,glyph:string,headline:string,sub:string)=>`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920" viewBox="0 0 1080 1920"><rect width="1080" height="1920" fill="#f4f0e7"/><rect x="70" y="110" width="940" height="1700" rx="84" fill="#e8eeea"/><circle cx="540" cy="610" r="285" fill="#31594d" opacity=".15"/><text x="540" y="705" text-anchor="middle" font-size="220" font-family="Arial,Apple Color Emoji,Segoe UI Emoji,sans-serif">${glyph}</text><path d="M210 1030h660" stroke="#31594d" stroke-width="14" opacity=".55"/><text x="540" y="1215" text-anchor="middle" font-size="56" font-weight="700" font-family="Arial,sans-serif" fill="#263f37">${headline}</text><text x="540" y="1340" text-anchor="middle" font-size="36" font-family="Arial,sans-serif" fill="#51675f">${sub}</text><text x="540" y="1530" text-anchor="middle" font-size="31" font-family="Arial,sans-serif" fill="#6b7d76">${label}</text></svg>`)}`;
export const dailyRichMedia202609082052:RichMediaEntry[]=[{
 label:'Corinthians',
 matches:['corinthians conclui treino na argentina','diniz define base para enfrentar o estudiantes'],
 tag:'ARTE ESPECÍFICA · 08/09 · 20H52',
 title:'TREINO CONCLUÍDO · LA PLATA',
 caption:'7 DESFALQUES · ESTUDIANTES 09/09',
 images:[{url:art('Corinthians','⚽','TREINO CONCLUÍDO · LA PLATA','7 DESFALQUES · ESTUDIANTES 09/09'),alt:'Arte 9:16 específica com bola e campo representando o treino concluído pelo Corinthians na Argentina antes do Estudiantes',caption:'Corinthians encerra preparação na Argentina',credit:'Father Giulian News · arte editorial específica 08/09',sourceUrl:'https://ge.globo.com/futebol/times/corinthians/noticia/2026/09/08/escalacao-corinthians-treina-na-argentina-e-tera-desfalques-contra-o-estudiantes.ghtml',kind:'REFERENCE'}]
}];
