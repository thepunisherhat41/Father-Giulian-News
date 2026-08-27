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
    label:'Mundo',
    matches:['hormuz tem leve alta de tráfego','fluxo continua muito abaixo do normal','hormuz'],
    tag:'MÍDIA REAL · MAPA', title:'Estreito de Hormuz',
    caption:'Mapa geográfico da rota marítima citada na atualização de tráfego.',
    images:[{url:commons('Strait of Hormuz-svg-en.svg'),alt:'Mapa do Estreito de Hormuz entre Irã e Omã',caption:'Estreito de Hormuz.',credit:'Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Strait_of_Hormuz-svg-en.svg',kind:'REFERENCE'}]
  },
  {
    label:'Política',
    matches:['radar eleitoral 27/08','lula é o entrevistado','lula e o entrevistado'],
    tag:'MÍDIA ELEITORAL · TSE', title:'Urna eletrônica brasileira',
    caption:'Imagem neutra da Justiça Eleitoral para um Reel que acompanha vários candidatos.',
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
    label:'Tecnologia',
    matches:['nvidia e hugging face','hugging face','us$ 12,9 bi'],
    tag:'MÍDIA REAL · NVIDIA', title:'GPU NVIDIA em fotografia real',
    caption:'Fotografia estável de hardware NVIDIA para contextualizar a operação reportada; a existência do acordo é descrita no texto com o status editorial correto.',
    images:[{url:commons('NVIDIA GPU.jpg'),alt:'GPU NVIDIA em fotografia real',caption:'Hardware NVIDIA.',credit:'Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:NVIDIA_GPU.jpg',kind:'PHOTO'}],
    relatedLabel:'Reuters · Nvidia / Hugging Face · 27/08',relatedHref:'https://www.reuters.com/technology/nvidia-talks-acquire-hugging-face-13-billion-deal-business-insider-reports-2026-08-27/'
  },
  {
    label:'Cyber Security',
    matches:['gitea sob exploração ativa','gitea sob exploracao ativa','cve-2026-60004'],
    tag:'MÍDIA REAL · GITEA', title:'Gitea',
    caption:'Logotipo oficial do produto diretamente afetado pela vulnerabilidade.',
    images:[{url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Gitea_Logo_with_Wordmark.svg/1920px-Gitea_Logo_with_Wordmark.svg.png',alt:'Logotipo oficial do Gitea',caption:'Gitea.',credit:'Gitea / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Gitea_Logo_with_Wordmark.svg',kind:'REFERENCE'}]
  },
  {
    label:'AppSec / SSDLC',
    matches:['cve-2026-60004 no gitea','write access vira caminho','risco de supply chain'],
    tag:'MÍDIA REAL · GITEA / SSDLC', title:'Gitea e supply chain',
    caption:'Logotipo oficial do Gitea para a análise de SCM, CI/CD e blast radius.',
    images:[{url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Gitea_Logo_with_Wordmark.svg/1920px-Gitea_Logo_with_Wordmark.svg.png',alt:'Logotipo oficial do Gitea',caption:'Gitea no caminho crítico do SSDLC.',credit:'Gitea / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Gitea_Logo_with_Wordmark.svg',kind:'REFERENCE'}]
  }
];
