import type { RichMediaEntry } from './rich-media';

const commons = (name:string) => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(name).replace(/%2F/g,'/')}`;

export const dailyRichMedia20260827: RichMediaEntry[] = [
  {
    label:'Curiosidades',
    matches:['por que o gelo flutua','gelo flutua'],
    tag:'MÍDIA REAL · CIÊNCIA', title:'Gelo flutuando sobre água',
    caption:'Fotografia real de gelo flutuando, diretamente ligada à curiosidade sobre densidade da água.',
    images:[{url:commons('Blue ice in South Greenland - Visit Greenland.jpg'),alt:'Blocos de gelo flutuando sobre a água na Groenlândia',caption:'Gelo flutuando sobre água líquida.',credit:'Visit Greenland / Wikimedia Commons · CC BY 2.0',sourceUrl:'https://commons.wikimedia.org/wiki/File:Blue_ice_in_South_Greenland_-_Visit_Greenland.jpg',kind:'PHOTO'}]
  },
  {
    label:'Curiosidades',
    matches:['dois quadrados podem ter exatamente o mesmo tom','checker-shadow','mesmo tom'],
    tag:'MÍDIA REAL · PSICOLOGIA', title:'Checker shadow illusion',
    caption:'Diagrama clássico da ilusão de sombra, semanticamente ligado ao Reel de percepção.',
    images:[{url:commons('Grey square optical illusion proof2.svg'),alt:'Ilusão checker-shadow com dois quadrados de mesmo tom percebidos como diferentes',caption:'Checker shadow illusion.',credit:'Edward H. Adelson / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Grey_square_optical_illusion_proof2.svg',kind:'REFERENCE'}]
  },
  {
    label:'Curiosidades',
    matches:['um qr code pode continuar funcionando','qr code','reed-solomon'],
    tag:'MÍDIA REAL · TECNOLOGIA', title:'QR Code danificado e ainda legível',
    caption:'Exemplo real de QR Code danificado dentro da capacidade de correção de erros.',
    images:[{url:commons('QR Code Damaged.jpg'),alt:'QR Code danificado que permanece legível por correção de erros',caption:'QR Code com dano parcial.',credit:'Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:QR_Code_Damaged.jpg',kind:'REFERENCE'}]
  },
  {
    label:'Zona Leste em Foco',
    matches:['vacinação contra sarampo acontece hoje','vacinacao contra sarampo acontece hoje','shopping metrô itaquera','shopping metro itaquera'],
    tag:'MÍDIA REAL · ITAQUERA', title:'Shopping Metrô Itaquera',
    caption:'Fotografia real do local onde ocorre a vacinação de 27 e 28 de agosto.',
    images:[{url:commons('Shopping Metrô Itaquera - 1.jpg'),alt:'Interior do Shopping Metrô Itaquera em São Paulo',caption:'Shopping Metrô Itaquera, local da ação de vacinação.',credit:'Ajmcbarreto / Wikimedia Commons · CC BY-SA 4.0',sourceUrl:'https://commons.wikimedia.org/wiki/File:Shopping_Metr%C3%B4_Itaquera_-_1.jpg',kind:'PHOTO'}],
    relatedLabel:'Secretaria Municipal da Saúde · vacinação em Itaquera',relatedHref:'https://prefeitura.sp.gov.br/web/saude/w/prefeitura-realiza-vacina%C3%A7%C3%A3o-contra-sarampo-no-shopping-metr%C3%B4-itaquera'
  },
  {
    label:'Mundo',
    matches:['hormuz tem leve alta de tráfego','fluxo continua muito abaixo do normal','hormuz'],
    tag:'MÍDIA REAL · MAPA', title:'Estreito de Hormuz',
    caption:'Mapa geográfico da rota marítima citada na atualização de tráfego.',
    images:[{url:commons('Strait of Hormuz-svg-en.svg'),alt:'Mapa do Estreito de Hormuz entre Irã e Omã',caption:'Estreito de Hormuz.',credit:'Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Strait_of_Hormuz-svg-en.svg',kind:'REFERENCE'}]
  },
  {
    label:'Política',
    matches:['radar eleitoral 27/08','entrevista de lula está na agenda','entrevista de lula esta na agenda'],
    tag:'MÍDIA ELEITORAL · TSE', title:'Urna eletrônica brasileira',
    caption:'Imagem neutra da Justiça Eleitoral para um Reel que acompanha agenda, TSE e múltiplos candidatos.',
    images:[{url:commons('Brazilian DRE voting machine for 2022 elections.jpg'),alt:'Urna eletrônica brasileira em fotografia institucional',caption:'Urna eletrônica brasileira.',credit:'Tribunal Superior Eleitoral / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Brazilian_DRE_voting_machine_for_2022_elections.jpg',kind:'PHOTO'}]
  },
  {
    label:'Tempo e Clima',
    matches:['são paulo começa 27/08','sao paulo comeca 27/08','18°c','sem chuva no radar'],
    tag:'MÍDIA REAL · SÃO PAULO', title:'São Paulo sob nebulosidade',
    caption:'Fotografia real da cidade como contexto; os dados meteorológicos vêm do CGE.',
    images:[{url:commons('Bairro dos jardins em são paulo.jpg'),alt:'Vista urbana de São Paulo sob céu parcialmente nublado',caption:'São Paulo.',credit:'Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Bairro_dos_jardins_em_s%C3%A3o_paulo.jpg',kind:'PHOTO'}]
  },
  {
    label:'Games',
    matches:['gamescom awesome indies acontece hoje','awesome indies','gamescom awesome indies'],
    tag:'MÍDIA REAL · GAMESCOM', title:'Entrada principal da gamescom',
    caption:'Fotografia real da gamescom em Colônia, diretamente ligada ao evento oficial que recebe o Awesome Indies.',
    images:[{url:commons('Main Entrance View at Gamescom 2025 in Cologne, Germany.jpg'),alt:'Entrada principal da gamescom no centro de exposições de Colônia',caption:'gamescom em Colônia.',credit:'RAWdz Ivan / Wikimedia Commons · CC BY 4.0',sourceUrl:'https://commons.wikimedia.org/wiki/File:Main_Entrance_View_at_Gamescom_2025_in_Cologne,_Germany.jpg',kind:'PHOTO'}],
    relatedLabel:'gamescom · Awesome Indies 2026',relatedHref:'https://www.gamescom.global/en/video/gamescom-awesome-indies-2026'
  },
  {
    label:'Finanças',
    matches:['mercados em 27/08','nvidia sustenta tecnologia','petróleo recua','petroleo recua'],
    tag:'MÍDIA REAL · MERCADOS', title:'Pregão na Bolsa de Nova York',
    caption:'Fotografia real de um ambiente de negociação para contextualizar a reação intradiária dos mercados.',
    images:[{url:commons('Trading Floor at the New York Stock Exchange.jpg'),alt:'Pregão no salão da Bolsa de Valores de Nova York',caption:'Pregão na NYSE.',credit:'Scott Beale / Wikimedia Commons · CC BY-SA 4.0',sourceUrl:'https://commons.wikimedia.org/wiki/File:Trading_Floor_at_the_New_York_Stock_Exchange.jpg',kind:'PHOTO'}],
    relatedLabel:'Reuters · mercados · 27/08',relatedHref:'https://www.reuters.com/markets/europe/european-shares-flat-nvidia-boost-offsets-sector-weakness-2026-08-27/'
  },
  {
    label:'Tecnologia',
    matches:['nvidia e hugging face','hugging face','us$ 12,9 bi'],
    tag:'MÍDIA REAL · NVIDIA', title:'GPU NVIDIA em fotografia real',
    caption:'Fotografia estável de hardware NVIDIA para contextualizar a operação reportada; o status do acordo é descrito no texto.',
    images:[{url:commons('NVIDIA GPU.jpg'),alt:'GPU NVIDIA em fotografia real',caption:'Hardware NVIDIA.',credit:'Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:NVIDIA_GPU.jpg',kind:'PHOTO'}],
    relatedLabel:'Reuters · Nvidia / Hugging Face · 27/08',relatedHref:'https://www.reuters.com/technology/nvidia-talks-acquire-hugging-face-13-billion-deal-business-insider-reports-2026-08-27/'
  },
  {
    label:'Cyber Security',
    matches:['gitea sob exploração ativa','gitea sob exploracao ativa','cve-2026-60004'],
    tag:'MÍDIA REAL · GITEA', title:'Gitea',
    caption:'Logotipo oficial do produto afetado; mantido no catálogo para o hub profundo, não como justificativa para Reel novo de 27/08.',
    images:[{url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Gitea_Logo_with_Wordmark.svg/1920px-Gitea_Logo_with_Wordmark.svg.png',alt:'Logotipo oficial do Gitea',caption:'Gitea.',credit:'Gitea / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Gitea_Logo_with_Wordmark.svg',kind:'REFERENCE'}]
  },
  {
    label:'AppSec / SSDLC',
    matches:['cve-2026-60004 no gitea','write access vira caminho','risco de supply chain'],
    tag:'MÍDIA REAL · GITEA / SSDLC', title:'Gitea e supply chain',
    caption:'Logotipo oficial do Gitea para a análise profunda de SCM e CI/CD; o Reel jornalístico fica omitido sem fato novo de 27/08.',
    images:[{url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Gitea_Logo_with_Wordmark.svg/1920px-Gitea_Logo_with_Wordmark.svg.png',alt:'Logotipo oficial do Gitea',caption:'Gitea no caminho crítico do SSDLC.',credit:'Gitea / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Gitea_Logo_with_Wordmark.svg',kind:'REFERENCE'}]
  }
];
