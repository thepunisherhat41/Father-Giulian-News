import type {RichMediaEntry} from './rich-media';

const oilCloseArt=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920" viewBox="0 0 1080 1920"><rect width="1080" height="1920" fill="#f2efe8"/><rect x="78" y="112" width="924" height="1696" rx="80" fill="#e5e7e1"/><circle cx="540" cy="600" r="285" fill="#5a4a2e" opacity=".13"/><path d="M535 350c-90 150-185 260-185 390 0 105 83 190 185 190s185-85 185-190c0-130-95-240-185-390Z" fill="#5a4a2e"/><path d="M275 1080h530" stroke="#5a4a2e" stroke-width="14" opacity=".55"/><text x="540" y="1245" text-anchor="middle" font-family="Arial,sans-serif" font-size="64" font-weight="700" fill="#3c3223">PETRÓLEO · FECHAMENTO</text><text x="540" y="1360" text-anchor="middle" font-family="Arial,sans-serif" font-size="48" fill="#574a35">BRENT US$ 92,68</text><text x="540" y="1455" text-anchor="middle" font-family="Arial,sans-serif" font-size="48" fill="#574a35">WTI US$ 91,48</text><text x="540" y="1570" text-anchor="middle" font-family="Arial,sans-serif" font-size="34" fill="#6d6250">SEMANA: +7,6% · QUASE +10%</text></svg>`)}`;

export const dailyRichMedia202609042034:RichMediaEntry[]=[{
  label:'Finanças',
  matches:['petróleo fecha a semana em alta','brent encerrou a sexta-feira a us$ 92,68','wti fechou a us$ 91,48','fato · fechamento'],
  tag:'STORY MEDIA · FINANÇAS · 04/09',
  title:'Petróleo · fechamento semanal',
  caption:'Arte editorial específica 9:16 para o fechamento confirmado do Brent e WTI em 04/09.',
  images:[{url:oilCloseArt,alt:'Arte editorial específica com gota de petróleo e valores de fechamento do Brent e WTI em 4 de setembro',caption:'Brent e WTI — fechamento confirmado de 04/09.',credit:'Father Giulian News · arte editorial baseada em reportagem Reuters',sourceUrl:'https://www.reuters.com/business/energy/oil-set-steepest-weekly-gain-since-mid-july-over-intensifying-us-iran-tensions-2026-09-04/',kind:'REFERENCE'}],
  relatedLabel:'Reuters · fechamento do petróleo em 04/09',
  relatedHref:'https://www.reuters.com/business/energy/oil-set-steepest-weekly-gain-since-mid-july-over-intensifying-us-iran-tensions-2026-09-04/'
}];
