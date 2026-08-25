import type { RichMediaEntry } from './rich-media';

const commons = (name:string) => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(name).replace(/%2F/g,'/')}`;

export const dailyRichMedia20260825: RichMediaEntry[] = [
  {
    label:'Curiosidades',
    matches:['relâmpago aquece','relampago aquece','superfície do sol','superficie do sol'],
    tag:'MÍDIA REAL · CIÊNCIA', title:'Relâmpago em fotografia real',
    caption:'Fotografia real relacionada a descargas atmosféricas; usada como contexto visual para a curiosidade científica.',
    images:[{url:commons('Lightning strike base.JPG'),alt:'Fotografia real relacionada a uma descarga de raio',caption:'Descarga atmosférica em referência fotográfica.',credit:'Jeroboambramblejam / Wikimedia Commons · CC BY-SA 3.0',sourceUrl:'https://commons.wikimedia.org/wiki/File:Lightning_strike_base.JPG',kind:'PHOTO'}]
  },
  {
    label:'Curiosidades',
    matches:['uma palavra pode atrapalhar','stroop','missão é ignorá-la','missao e ignora-la'],
    tag:'MÍDIA REAL · PSICOLOGIA', title:'Efeito Stroop em exemplo visual real',
    caption:'Exemplo visual do efeito Stroop, diretamente relacionado ao fenômeno descrito no Reel.',
    images:[{url:commons('Stroop effect example.png'),alt:'Exemplo visual do efeito Stroop',caption:'Exemplo de interferência entre palavra e cor.',credit:'Belbury / Wikimedia Commons · CC0',sourceUrl:'https://commons.wikimedia.org/wiki/File:Stroop_effect_example.png',kind:'REFERENCE'}]
  },
  {
    label:'Curiosidades',
    matches:['ponto azul do seu celular','relatividade','relógios atômicos','relogios atomicos'],
    tag:'MÍDIA REAL · TECNOLOGIA', title:'Satélite GPS real',
    caption:'Fotografia de um satélite GPS real em exposição, diretamente ligada à curiosidade sobre sincronização e relatividade.',
    images:[{url:commons('Global Positioning System satellite.jpg'),alt:'Satélite do sistema GPS em exposição',caption:'Satélite GPS Block II-A.',credit:'Scott Ehardt / Wikimedia Commons · domínio público',sourceUrl:'https://commons.wikimedia.org/wiki/File:Global_Positioning_System_satellite.jpg',kind:'PHOTO'}]
  },
  {
    label:'Gravidez',
    matches:['7 semanas + 2 dias','7 semanas','hidratação em dias de mais enjoo'],
    tag:'MÍDIA MÉDICA DE REFERÊNCIA', title:'Ultrassom de referência da gestação inicial',
    caption:'Imagem real de referência de gestação inicial; não é o ultrassom individual da gestação acompanhada.',
    images:[{url:commons('Embryo at 6 weeks.JPG'),alt:'Ultrassom real de referência de uma gestação inicial',caption:'Ultrassom de referência; interpretação individual cabe ao obstetra.',credit:'X. Compagnion / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Embryo_at_6_weeks.JPG',kind:'MEDICAL'}]
  },
  {
    label:'Ser Pai',
    matches:['kit pós-enjoo','kit pos-enjoo','missão de hoje'],
    tag:'MÍDIA REAL · APOIO', title:'Apoio familiar na gestação',
    caption:'Imagem documental do CDC sobre apoio de familiares e amigos no período materno.',
    images:[{url:'https://www.cdc.gov/hearher/media/images/support-family-friends-16x9-1.jpg',alt:'Família apoiando uma mulher no período materno',caption:'Apoio familiar como contexto para cuidado prático.',credit:'CDC Hear Her',sourceUrl:'https://www.cdc.gov/hearher/about/support-her.html',kind:'PHOTO'}]
  },
  {
    label:'Mundo',
    matches:['sanções elevam tensão','sancoes elevam tensao','irã','ira'],
    tag:'MÍDIA REAL · IRÃ', title:'Teerã em fotografia real',
    caption:'Vista noturna de Teerã usada como contexto geográfico da pauta sobre Irã e sanções.',
    images:[{url:commons('Tehran night view.jpg'),alt:'Vista noturna vertical da cidade de Teerã',caption:'Teerã, Irã.',credit:'M@mad / Wikimedia Commons · CC BY 2.0',sourceUrl:'https://commons.wikimedia.org/wiki/File:Tehran_night_view.jpg',kind:'PHOTO'}]
  },
  {
    label:'Política',
    matches:['radar eleitoral 17h','e-título','e-titulo','caiado segue','ronaldo caiado'],
    tag:'MÍDIA REAL · ELEIÇÕES 2026', title:'Ronaldo Caiado em fotografia de 2026',
    caption:'Retrato real de Ronaldo Caiado feito em São Paulo em janeiro de 2026, relacionado à sabatina destacada no radar.',
    images:[{url:commons('Ronaldo Caiado in 2026 - 55064971042 (3x4) (cropped).jpg'),alt:'Ronaldo Caiado em fotografia vertical de 2026',caption:'Ronaldo Caiado em 2026.',credit:'Mauricio Tonetto / Governo RS · CC BY-SA 4.0',sourceUrl:'https://commons.wikimedia.org/wiki/File:Ronaldo_Caiado_in_2026_-_55064971042_(3x4)_(cropped).jpg',kind:'PHOTO'}]
  },
  {
    label:'Tempo e Clima',
    matches:['são paulo segue nublada','sao paulo segue nublada','máxima fica','maxima fica'],
    tag:'MÍDIA REAL · SÃO PAULO', title:'Skyline de São Paulo',
    caption:'Fotografia vertical da cidade como contexto visual; condição meteorológica vem do CGE, não da foto.',
    images:[{url:commons('Sao Paulo-Skyline.jpg'),alt:'Skyline vertical da cidade de São Paulo',caption:'São Paulo em fotografia urbana.',credit:'Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Sao_Paulo-Skyline.jpg',kind:'PHOTO'}]
  },
  {
    label:'Viagens',
    matches:['holambra','expoflora'],
    tag:'MÍDIA REAL · HOLAMBRA', title:'Moinho Povos Unidos em Holambra',
    caption:'Fotografia vertical do moinho de Holambra, diretamente ligada ao destino do Reel.',
    images:[{url:commons('Holambra windmill.jpg'),alt:'Moinho Povos Unidos em Holambra',caption:'Moinho de Holambra, São Paulo.',credit:'Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Holambra_windmill.jpg',kind:'PHOTO'}]
  },
  {
    label:'Música',
    matches:['seasons','chris cornell'],
    tag:'VÍDEO OFICIAL · CHRIS CORNELL', title:'Chris Cornell · Seasons',
    caption:'Faixa no canal oficial de Chris Cornell.',
    images:[{url:'https://i.ytimg.com/vi/1DnSiznUrVI/maxresdefault.jpg',alt:'Capa do vídeo Seasons de Chris Cornell no YouTube',caption:'Seasons · Chris Cornell.',credit:'Chris Cornell · Official Artist Channel / YouTube',sourceUrl:'https://www.youtube.com/watch?v=1DnSiznUrVI',kind:'REFERENCE'}],
    youtubeId:'1DnSiznUrVI', relatedLabel:'Chris Cornell · Official Artist Channel',relatedHref:'https://www.youtube.com/watch?v=1DnSiznUrVI'
  },
  {
    label:'Games',
    matches:['gamescom','opening night live'],
    tag:'MÍDIA REAL · GAME​​SCOM 2026', title:'gamescom 2026',
    caption:'Arte de participação publicada para a gamescom 2026, associada à agenda atual do evento.',
    images:[{url:'https://image.gamer.ne.jp/news/2026/20260805/0048074131c8bc4dad2a299f5ad95c5f9576/o/1.jpg',alt:'Arte relacionada à gamescom 2026',caption:'gamescom 2026.',credit:'Gamer.ne.jp / material promocional do evento',sourceUrl:'https://www.gamescom.global/en/video/gamescom-opening-night-live-2026',kind:'REFERENCE'}],
    relatedLabel:'gamescom · Opening Night Live 2026',relatedHref:'https://www.gamescom.global/en/video/gamescom-opening-night-live-2026'
  },
  {
    label:'Tecnologia',
    matches:['nvidia entra no centro','nvidia','infraestrutura de ia'],
    tag:'MÍDIA REAL · NVIDIA', title:'GPU NVIDIA em fotografia real',
    caption:'Fotografia real de hardware NVIDIA para contextualizar a pauta sobre demanda por aceleradores e infraestrutura de IA.',
    images:[{url:commons('NVIDIA GPU.jpg'),alt:'GPU NVIDIA em fotografia real',caption:'Hardware NVIDIA.',credit:'Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:NVIDIA_GPU.jpg',kind:'PHOTO'}]
  },
  {
    label:'Finanças',
    matches:['fechamento: ibovespa','ibovespa sobe','dólar cai','dolar cai'],
    tag:'MÍDIA REAL · B3', title:'Edifício-sede da B3 em São Paulo',
    caption:'Fotografia real do edifício-sede da bolsa brasileira, diretamente ligada ao fechamento do Ibovespa.',
    images:[{url:commons('Edifício sede da Bovespa.jpg'),alt:'Edifício-sede da Bovespa B3 em São Paulo',caption:'Sede da bolsa brasileira em São Paulo.',credit:'Boaventuravinicius / Wikimedia Commons · CC BY-SA 4.0',sourceUrl:'https://commons.wikimedia.org/wiki/File:Edifício_sede_da_Bovespa.jpg',kind:'PHOTO'}]
  },
  {
    label:'Cyber Security',
    matches:['ataques exploram falha rce do zimbra','zimbra','cve-2026-73570'],
    tag:'IMAGEM DA MATÉRIA · 25/08', title:'Zimbra sob exploração ativa',
    caption:'Imagem utilizada pela matéria do BleepingComputer publicada em 25/08 sobre a exploração da CVE-2026-73570.',
    images:[{url:'https://www.bleepstatic.com/content/hl-images/2026/08/25/Zimbra.jpg',alt:'Imagem Zimbra usada em matéria sobre exploração da CVE-2026-73570',caption:'Zimbra · exploração ativa em pauta.',credit:'BleepingComputer',sourceUrl:'https://www.bleepingcomputer.com/news/security/hackers-breached-over-270-zimbra-servers-in-ongoing-attacks/',kind:'REFERENCE'}]
  },
  {
    label:'Carros',
    matches:['carros até r$ 70 mil','cinco usados','cinco usados que valem'],
    tag:'FOTO REAL · USADO', title:'Chevrolet Cruze do radar de usados',
    caption:'Fotografia real de Chevrolet Cruze usado, um dos modelos que entram no radar de compra dentro do teto editorial.',
    images:[{url:'https://static.cargurus.com/images/site/2017/12/12/13/00/2014_chevrolet_cruze_2lt-pic-3747308311327765241-1600x1200.jpeg',alt:'Chevrolet Cruze sedã usado em fotografia real',caption:'Chevrolet Cruze usado.',credit:'CarGurus',sourceUrl:'https://www.cargurus.com/',kind:'PHOTO'}]
  },
  {
    label:'Motos',
    matches:['moto usada do dia','sinais de queda','alinhamento'],
    tag:'FOTO REAL · MOTO USADA', title:'Honda CB 250F Twister',
    caption:'Fotografia real da Honda CB 250F Twister usada como referência visual da inspeção de moto usada.',
    images:[{url:'https://www.planetcarsz.com/assets/uploads/2021/01/c08a054f8b23f375fc1a7475013d6242.jpg',alt:'Honda CB 250F Twister em fotografia real',caption:'Honda CB 250F Twister.',credit:'PlanetCarsZ',sourceUrl:'https://www.planetcarsz.com/',kind:'PHOTO'}]
  },
  {
    label:'Mecânica',
    matches:['pressão do pneu','pressao do pneu','pneu muda com a temperatura'],
    tag:'FOTO REAL · OFICINA', title:'Medidor de pressão de pneus',
    caption:'Fotografia real de um medidor de pressão, diretamente relacionada à orientação do Reel.',
    images:[{url:commons('Porsche Tire Pressure Gauge (9207945919).jpg'),alt:'Medidor real de pressão de pneus',caption:'Medidor de pressão de pneus.',credit:'Antti / Wikimedia Commons · CC BY 2.0',sourceUrl:'https://commons.wikimedia.org/wiki/File:Porsche_Tire_Pressure_Gauge_(9207945919).jpg',kind:'PHOTO'}]
  },
  {
    label:'Brasil',
    matches:['fim da escala 6x1','senado','pec 221'],
    tag:'FOTO REAL · SENADO', title:'Plenário do Senado Federal',
    caption:'Fotografia real do plenário do Senado para a pauta legislativa.',
    images:[{url:commons('PlenarioSenadoFederal.jpg'),alt:'Plenário do Senado Federal em Brasília',caption:'Plenário do Senado Federal.',credit:'Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:PlenarioSenadoFederal.jpg',kind:'PHOTO'}]
  }
];
