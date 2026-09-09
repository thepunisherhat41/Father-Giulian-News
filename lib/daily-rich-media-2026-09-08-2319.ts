import type {RichMediaEntry} from './rich-media';
const art=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920" viewBox="0 0 1080 1920"><rect width="1080" height="1920" fill="#eef4f6"/><rect x="70" y="110" width="940" height="1700" rx="84" fill="#e1edf2"/><circle cx="540" cy="610" r="285" fill="#195b7a" opacity=".15"/><text x="540" y="690" text-anchor="middle" font-size="210" font-family="Arial,Apple Color Emoji,Segoe UI Emoji,sans-serif">🧬</text><path d="M210 1030h660" stroke="#195b7a" stroke-width="14" opacity=".55"/><text x="540" y="1195" text-anchor="middle" font-size="58" font-weight="700" font-family="Arial,sans-serif" fill="#173f54">SAP CAP · APPSEC</text><text x="540" y="1305" text-anchor="middle" font-size="42" font-weight="700" font-family="Arial,sans-serif" fill="#2f5d72">CVE-2026-76969</text><text x="540" y="1405" text-anchor="middle" font-size="34" font-family="Arial,sans-serif" fill="#526f7c">@sap/cds-mtxs · CVSS 9.4</text><text x="540" y="1530" text-anchor="middle" font-size="30" font-family="Arial,sans-serif" fill="#6b818b">DEPENDÊNCIA CRÍTICA · MULTITENANCY</text></svg>`)}`;
export const dailyRichMedia202609082319:RichMediaEntry[]=[{
 label:'AppSec / SSDLC',
 matches:['sap corrige falha crítica no @sap/cds-mtxs','cve-2026-76969','credenciais de tenants'],
 tag:'ARTE ESPECÍFICA · 08/09',
 title:'SAP CAP · CVE-2026-76969',
 caption:'Falha crítica no @sap/cds-mtxs publicada no SAP Security Patch Day de 08/09.',
 images:[{url:art,alt:'Arte 9:16 específica sobre AppSec no SAP CAP, destacando CVE-2026-76969 e o pacote @sap/cds-mtxs',caption:'SAP CAP · @sap/cds-mtxs · CVE-2026-76969 · CVSS 9.4',credit:'Father Giulian News · arte editorial específica 08/09',sourceUrl:'https://support.sap.com/en/my-support/knowledge-base/security-notes-news/september-2026.html',kind:'REFERENCE'}]
}];
