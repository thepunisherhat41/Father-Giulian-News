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
    label:'Mundo',
    matches:['hormuz: irã e omã retomam conversas','hormuz: ira e oma retomam conversas','corredor temporário de navegação','corredor temporario de navegacao'],
    tag:'MÍDIA REAL · MAPA', title:'Estreito de Hormuz',
    caption:'Mapa do Estreito de Hormuz entre Irã, Omã e Emirados Árabes Unidos, diretamente ligado à negociação sobre navegação.',
    images:[{url:commons('Strait of Hormuz-svg-en.svg'),alt:'Mapa do Estreito de Hormuz entre Irã, Omã e Emirados Árabes Unidos',caption:'Estreito de Hormuz e seus acessos marítimos.',credit:'Goran tek-en / Wikimedia Commons · CC BY-SA 4.0',sourceUrl:'https://commons.wikimedia.org/wiki/File:Strait_of_Hormuz-svg-en.svg',kind:'REFERENCE'}],
    relatedLabel:'Reuters · Iran-Oman talks / Hormuz',relatedHref:'https://www.reuters.com/world/asia-pacific/us-oil-prices-extend-losses-hopes-iran-oman-talks-strait-hormuz-2026-08-25/'
  },
  {
    label:'Política',
    matches:['política hoje: renan santos','politica hoje: renan santos','entrevista às 21h05','entrevista as 21h05','tse fecha marco do horário eleitoral','tse fecha marco do horario eleitoral'],
    tag:'MÍDIA ELEITORAL · TSE', title:'Urna eletrônica brasileira',
    caption:'Fotografia institucional de urna eletrônica usada como visual neutro para o radar presidencial e o marco operacional do horário eleitoral.',
    images:[{url:commons('Brazilian DRE voting machine for 2022 elections.jpg'),alt:'Urna eletrônica brasileira em fotografia institucional',caption:'Urna eletrônica brasileira.',credit:'Tribunal Superior Eleitoral / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Brazilian_DRE_voting_machine_for_2022_elections.jpg',kind:'PHOTO'}],
    relatedLabel:'TSE · Calendário Eleitoral 2026',relatedHref:'https://www.tse.jus.br/eleicoes/calendario-eleitoral'
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
    tag:'MÍDIA OFICIAL · GAMESCOM', title:'gamescom 2026 · Opening Night Live',
    caption:'Thumbnail oficial da transmissão gamescom 2026; mídia diretamente ligada à feira.',
    images:[{url:'https://i.ytimg.com/vi/qwC9EFT6EFk/maxresdefault.jpg',alt:'Thumbnail oficial da gamescom Opening Night Live 2026',caption:'gamescom 2026.',credit:'gamescom / YouTube',sourceUrl:'https://www.youtube.com/watch?v=qwC9EFT6EFk',kind:'REFERENCE'}],
    youtubeId:'qwC9EFT6EFk',relatedLabel:'gamescom · horários oficiais',relatedHref:'https://www.gamescom.global/en/info/opening-times'
  },
  {
    label:'Finanças',
    matches:['petróleo e juros longos cedem','petroleo e juros longos cedem','treasury de 10 anos','brent caiu para a faixa de us$86'],
    tag:'MÍDIA REAL · TREASURY', title:'U.S. Treasury Building',
    caption:'Sede do Departamento do Tesouro dos EUA, ligada ao mercado de Treasuries citado na matéria.',
    images:[{url:commons('US Treasury Building.jpg'),alt:'Edifício do Departamento do Tesouro dos Estados Unidos em Washington',caption:'U.S. Treasury Building, Washington, D.C.',credit:'Loren / Wikimedia Commons · domínio público',sourceUrl:'https://commons.wikimedia.org/wiki/File:US_Treasury_Building.jpg',kind:'PHOTO'}],
    relatedLabel:'Reuters · mercados globais · 26/08',relatedHref:'https://www.reuters.com/world/china/global-markets-wrapup-1-2026-08-26/'
  },
  {
    label:'Tecnologia',
    matches:['nvidia divulga resultados hoje','rubin testa','blackwell→rubin','blackwell'],
    tag:'MÍDIA REAL · NVIDIA', title:'GPU NVIDIA',
    caption:'Fotografia real de um processador gráfico NVIDIA, diretamente ligada à pauta sobre a evolução da arquitetura de GPUs para IA.',
    images:[{url:commons('NVIDIA GPU.jpg'),alt:'Processador gráfico NVIDIA fotografado em close',caption:'GPU NVIDIA.',credit:'Mickael Courtiade / Wikimedia Commons · CC BY 2.0',sourceUrl:'https://commons.wikimedia.org/wiki/File:NVIDIA_GPU.jpg',kind:'PHOTO'}],
    relatedLabel:'Reuters · Nvidia / Rubin · 26/08',relatedHref:'https://www.reuters.com/business/retail-consumer/nvidia-faces-growth-test-rubin-debut-meets-ai-financing-scrutiny-2026-08-25/'
  },
  {
    label:'Security Briefing',
    matches:['cisa publica lições de dois red teams','cisa publica licoes de dois red teams','two socs','red teams'],
    tag:'FONTE PRIMÁRIA · CISA', title:'Security Operations Center em operação',
    caption:'Fotografia real de monitores em um Security Operations Center, semanticamente ligada às lições de detecção e resposta do advisory da CISA.',
    images:[{url:commons('SOC Security Monitors.jpg'),alt:'Monitores em um Security Operations Center',caption:'Security Operations Center em operação.',credit:'UMD-Eskin / Wikimedia Commons · domínio público',sourceUrl:'https://commons.wikimedia.org/wiki/File:SOC_Security_Monitors.jpg',kind:'PHOTO'}],
    relatedLabel:'CISA · A Tale of Two SOCs',relatedHref:'https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-237a'
  },
  {
    label:'Carros até R$ 70 mil',
    matches:['carros até r$ 70 mil: cinco usados que valem entrar no radar','cinco usados que valem entrar no radar','carros até r$70 mil'],
    tag:'MÍDIA REAL · USADO', title:'Chevrolet Cruze 2014',
    caption:'Fotografia real de um Chevrolet Cruze 2014, exemplo compatível com a faixa de usados discutida no Reel.',
    images:[{url:commons('Chevrolet Cruze 2014 facelift IMG002.jpg'),alt:'Chevrolet Cruze 2014 facelift em fotografia real',caption:'Chevrolet Cruze 2014.',credit:'Zotyefan / Wikimedia Commons · CC BY-SA 4.0',sourceUrl:'https://commons.wikimedia.org/wiki/File:Chevrolet_Cruze_2014_facelift_IMG002.jpg',kind:'PHOTO'}]
  },
  {
    label:'Motos',
    matches:['moto usada do dia: antes de olhar acessórios','procure sinais de queda e alinhamento','moto usada'],
    tag:'MÍDIA REAL · MOTO USADA', title:'Honda CBX 250 Twister',
    caption:'Fotografia real de uma Honda CBX 250 Twister, adequada ao contexto de inspeção de moto usada.',
    images:[{url:commons('HONDA CBX 250 TWISTER.jpg'),alt:'Honda CBX 250 Twister em fotografia real',caption:'Honda CBX 250 Twister.',credit:'Al1997 / Wikimedia Commons · CC BY-SA 3.0',sourceUrl:'https://commons.wikimedia.org/wiki/File:HONDA_CBX_250_TWISTER.jpg',kind:'PHOTO'}]
  }
];
