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
    tag:'MÍDIA REAL · GAME​​SCOM', title:'gamescom em Colônia',
    caption:'Fotografia da feira gamescom fornecida no contexto oficial de turismo de Colônia.',
    images:[{url:'https://www.cologne-tourism.com/fileadmin/Mediendatenbank/Veranstaltungen/gamescom/gamescom_01.jpg',alt:'Público em área de exposição da gamescom em Colônia',caption:'Ambiente da gamescom em Colônia.',credit:'Koelnmesse / gamescom',sourceUrl:'https://www.cologne-tourism.com/experiences-lifestyle/events/detail/gamescom',kind:'PHOTO'}],
    relatedLabel:'gamescom · horários oficiais',relatedHref:'https://www.gamescom.global/en/info/opening-times'
  },
  {
    label:'Security Briefing',
    matches:['cisa publica lições de dois red teams','cisa publica licoes de dois red teams','two socs','red teams'],
    tag:'FONTE PRIMÁRIA · CISA', title:'CISA · red team e SOC',
    caption:'Imagem institucional de segurança cibernética usada apenas como contexto para o advisory da CISA.',
    images:[{url:commons('Computer security lock.jpg'),alt:'Cadeado físico junto a equipamento de computação como símbolo de segurança',caption:'Contexto visual para operações de segurança.',credit:'Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Computer_security_lock.jpg',kind:'PHOTO'}],
    relatedLabel:'CISA · A Tale of Two SOCs',relatedHref:'https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-237a'
  }
];
