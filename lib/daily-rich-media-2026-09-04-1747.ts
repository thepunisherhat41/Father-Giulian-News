import type {RichMediaEntry} from './rich-media';

const tseSealingArt=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920" viewBox="0 0 1080 1920"><rect width="1080" height="1920" fill="#f4f1e8"/><rect x="80" y="110" width="920" height="1700" rx="76" fill="#e8ece7"/><circle cx="540" cy="650" r="285" fill="#264f48" opacity=".12"/><rect x="355" y="470" width="370" height="310" rx="34" fill="#264f48" opacity=".92"/><rect x="430" y="385" width="220" height="180" rx="110" fill="none" stroke="#264f48" stroke-width="34"/><rect x="415" y="570" width="250" height="82" rx="18" fill="#f4f1e8"/><circle cx="540" cy="611" r="20" fill="#264f48"/><path d="M302 1055h476" stroke="#264f48" stroke-width="14" stroke-linecap="round" opacity=".62"/><path d="M376 1208l92 92 230-252" fill="none" stroke="#264f48" stroke-width="34" stroke-linecap="round" stroke-linejoin="round"/><text x="540" y="1475" text-anchor="middle" font-family="Arial,sans-serif" font-size="64" font-weight="700" fill="#173a34">ASSINATURA DIGITAL</text><text x="540" y="1565" text-anchor="middle" font-family="Arial,sans-serif" font-size="64" font-weight="700" fill="#173a34">E LACRAÇÃO</text><text x="540" y="1650" text-anchor="middle" font-family="Arial,sans-serif" font-size="38" fill="#31554e">SISTEMAS ELEITORAIS</text></svg>`)}`;

export const dailyRichMedia202609041747:RichMediaEntry[]=[
  {
    label:'Política',
    matches:['tse conclui assinatura digital e lacração','assinatura digital e lacração dos sistemas'],
    tag:'STORY MEDIA / TSE · 04/09',
    title:'Assinatura digital e lacração dos sistemas eleitorais',
    caption:'Arte editorial específica 9:16 sobre a conclusão, confirmada pelo TSE, da assinatura digital e lacração dos sistemas das Eleições 2026. A fonte factual permanece a publicação oficial do Tribunal.',
    images:[{
      url:tseSealingArt,
      alt:'Arte editorial específica com cadeado e selo de verificação representando assinatura digital e lacração dos sistemas eleitorais',
      caption:'Assinatura digital e lacração dos sistemas eleitorais — representação editorial específica.',
      credit:'Father Giulian News · arte editorial baseada em fato oficial do TSE',
      sourceUrl:'https://www.tse.jus.br/comunicacao/noticias/2026/Setembro/sistemas-das-eleicoes-gerais-de-2026-sao-assinados-digitalmente-e-lacrados-pelo-tse',
      kind:'REFERENCE'
    }],
    relatedLabel:'TSE · publicação oficial da cerimônia',
    relatedHref:'https://www.tse.jus.br/comunicacao/noticias/2026/Setembro/sistemas-das-eleicoes-gerais-de-2026-sao-assinados-digitalmente-e-lacrados-pelo-tse'
  }
];
