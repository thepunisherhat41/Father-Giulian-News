import type {RichMediaEntry} from './rich-media';
const art=(label:string,glyph:string,headline:string,sub:string)=>`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920" viewBox="0 0 1080 1920"><rect width="1080" height="1920" fill="#f4f0e7"/><rect x="70" y="110" width="940" height="1700" rx="84" fill="#e8eeea"/><circle cx="540" cy="610" r="285" fill="#31594d" opacity=".15"/><text x="540" y="705" text-anchor="middle" font-size="220" font-family="Arial,Apple Color Emoji,Segoe UI Emoji,sans-serif">${glyph}</text><path d="M210 1030h660" stroke="#31594d" stroke-width="14" opacity=".55"/><text x="540" y="1215" text-anchor="middle" font-size="56" font-weight="700" font-family="Arial,sans-serif" fill="#263f37">${headline}</text><text x="540" y="1340" text-anchor="middle" font-size="36" font-family="Arial,sans-serif" fill="#51675f">${sub}</text><text x="540" y="1530" text-anchor="middle" font-size="31" font-family="Arial,sans-serif" fill="#6b7d76">${label}</text></svg>`)}`;
export const dailyRichMedia202609081745:RichMediaEntry[]=[{
 label:'Security Briefing',
 matches:['patch tuesday de setembro corrige 966 falhas','duas zero-days estavam sob exploração ativa'],
 tag:'ARTE ESPECÍFICA · 08/09 · 17H45',
 title:'PATCH TUESDAY · SETEMBRO',
 caption:'966 FALHAS · 2 ZERO-DAYS EXPLORADAS',
 images:[{url:art('Security Briefing','🛡️','PATCH TUESDAY · SETEMBRO','966 FALHAS · 2 ZERO-DAYS EXPLORADAS'),alt:'Arte 9:16 específica com escudo de atualização para o Patch Tuesday de setembro de 2026 e duas zero-days exploradas',caption:'Patch Tuesday de setembro de 2026',credit:'Father Giulian News · arte editorial específica 08/09',sourceUrl:'https://support.microsoft.com/en-us/servicing/os/hotpatch/windows-11/2026/september-8-2026-baseline',kind:'REFERENCE'}]
}];
