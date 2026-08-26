import type { RichMediaEntry } from './rich-media';

const commons = (name:string) => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(name).replace(/%2F/g,'/')}`;

export const dailyRichMedia20260826: RichMediaEntry[] = [
  {
    label:'Curiosidades',
    matches:['gota de água tenta ficar redonda','gota de agua tenta ficar redonda','tensão superficial','tensao superficial'],
    tag:'MÍDIA REAL · CIÊNCIA', title:'Gota de água e tensão superficial',
    caption:'Fotografia macro de uma gota real, diretamente ligada à curiosidade sobre tensão superficial.',
    images:[{url:commons('Water droplet lying on a damask.jpg'),alt:'Gota de água arredondada sobre uma superfície',caption:'Gota de água mostrando forma dominada pela tensão superficial.',credit:'Petar Milošević / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Water_droplet_lying_on_a_damask.jpg',kind:'PHOTO'}]
  },
  {
    label:'Curiosidades',
    matches:['duas linhas podem ter o mesmo tamanho','müller-lyer','muller-lyer'],
    tag:'MÍDIA REAL · PSICOLOGIA', title:'Ilusão de Müller-Lyer',
    caption:'Diagrama clássico em que linhas iguais parecem ter comprimentos diferentes por causa do contexto das extremidades.',
    images:[{url:commons('Müller-Lyer illusion.svg'),alt:'Ilusão de Müller-Lyer com linhas de mesmo comprimento',caption:'As linhas horizontais têm o mesmo comprimento.',credit:'Fibonacci / Wikimedia Commons · CC BY-SA 2.5',sourceUrl:'https://commons.wikimedia.org/wiki/File:M%C3%BCller-Lyer_illusion.svg',kind:'REFERENCE'}]
  },
  {
    label:'Curiosidades',
    matches:['fibra óptica consegue','fibra optica consegue','prender luz','reflexão interna total','reflexao interna total'],
    tag:'MÍDIA REAL · TECNOLOGIA', title:'Cabo de fibra óptica real',
    caption:'Fotografia real de cabos de fibra óptica instalada em infraestrutura de telecomunicações.',
    images:[{url:commons('Fibre-optic cable in a Telstra pit.jpg'),alt:'Cabos reais de fibra óptica em caixa de telecomunicações',caption:'Fibra óptica em infraestrutura de telecom.',credit:'Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Fibre-optic_cable_in_a_Telstra_pit.jpg',kind:'PHOTO'}]
  },
  {
    label:'Tempo e Clima',
    matches:['quarta em sp','máxima pode chegar a 24','maxima pode chegar a 24'],
    tag:'MÍDIA REAL · SÃO PAULO', title:'São Paulo sob variação de nuvens',
    caption:'Foto real da cidade como contexto visual; a condição meteorológica vem do CGE.',
    images:[{url:commons('Sao Paulo-Skyline.jpg'),alt:'Skyline da cidade de São Paulo',caption:'São Paulo em fotografia urbana.',credit:'Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Sao_Paulo-Skyline.jpg',kind:'PHOTO'}]
  },
  {
    label:'Games',
    matches:['gamescom abre hoje','dia de imprensa e profissionais','trade visitor'],
    tag:'MÍDIA OFICIAL · GAME​​SCOM', title:'gamescom 2026 · Opening Night Live',
    caption:'Thumbnail oficial já validada da transmissão gamescom 2026; usada como mídia segura do evento enquanto o radar acompanha a abertura da feira.',
    images:[{url:'https://i.ytimg.com/vi/qwC9EFT6EFk/maxresdefault.jpg',alt:'Thumbnail oficial da gamescom Opening Night Live 2026',caption:'gamescom 2026.',credit:'gamescom / YouTube',sourceUrl:'https://www.youtube.com/watch?v=qwC9EFT6EFk',kind:'REFERENCE'}],
    youtubeId:'qwC9EFT6EFk',relatedLabel:'gamescom · horários oficiais',relatedHref:'https://www.gamescom.global/en/info/opening-times'
  },
  {
    label:'Security Briefing',
    matches:['cisa publica lições de dois red teams','cisa publica licoes de dois red teams','two socs','red teams'],
    tag:'FONTE PRIMÁRIA · CISA', title:'Security Operations Center em operação',
    caption:'Fotografia real de monitores em um Security Operations Center, semanticamente ligada às lições de detecção e resposta do advisory da CISA.',
    images:[{url:commons('SOC Security Monitors.jpg'),alt:'Monitores em um Security Operations Center',caption:'Security Operations Center em operação.',credit:'UMD-Eskin / Wikimedia Commons · domínio público',sourceUrl:'https://commons.wikimedia.org/wiki/File:SOC_Security_Monitors.jpg',kind:'PHOTO'}],
    relatedLabel:'CISA · A Tale of Two SOCs',relatedHref:'https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-237a'
  }
];
