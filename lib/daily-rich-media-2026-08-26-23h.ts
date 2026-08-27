import type { RichMediaEntry } from './rich-media';

const commons = (name:string) => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(name).replace(/%2F/g,'/')}`;

export const dailyRichMedia20260826_23h: RichMediaEntry[] = [
  {
    label:'Política',
    matches:['renan santos conclui sabatina','propostas nucleares e de segurança','sabatina concluída'],
    tag:'MÍDIA ELEITORAL · TSE',
    title:'Urna eletrônica brasileira',
    caption:'Fotografia institucional de urna eletrônica usada como visual neutro para o radar presidencial, sem destacar artificialmente um candidato.',
    images:[{url:commons('Brazilian DRE voting machine for 2022 elections.jpg'),alt:'Urna eletrônica brasileira em fotografia institucional do TSE',caption:'Urna eletrônica brasileira.',credit:'Tribunal Superior Eleitoral / Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/File:Brazilian_DRE_voting_machine_for_2022_elections.jpg',kind:'PHOTO'}],
    relatedLabel:'TSE · Calendário Eleitoral 2026',relatedHref:'https://www.tse.jus.br/eleicoes/calendario-eleitoral'
  },
  {
    label:'Tempo e Clima',
    matches:['noite de 26/08 em sp','céu encoberto, 19°c','ceu encoberto, 19°c','chance de chuviscos isolados'],
    tag:'MÍDIA REAL · SÃO PAULO',
    title:'São Paulo à noite',
    caption:'Fotografia real da cidade usada como contexto geográfico; as condições meteorológicas vêm do boletim oficial do CGE.',
    images:[{url:commons('Sao Paulo at night.jpg'),alt:'Vista noturna da cidade de São Paulo',caption:'São Paulo à noite.',credit:'Thomas Hobbs / Wikimedia Commons · CC BY-SA 2.0',sourceUrl:'https://commons.wikimedia.org/wiki/File:Sao_Paulo_at_night.jpg',kind:'PHOTO'}],
    relatedLabel:'CGE São Paulo · 26/08 · 21h11',relatedHref:'https://www.cgesp.org/v3/noticias.jsp?id=55757'
  },
  {
    label:'Tecnologia',
    matches:['nvidia supera expectativas','receita chega a us$ 96,2 bi','data center dobra em um ano','resultado 26/08'],
    tag:'MÍDIA REAL · NVIDIA',
    title:'GPU NVIDIA',
    caption:'Fotografia real de hardware NVIDIA, diretamente ligada ao resultado e ao ciclo de infraestrutura de IA.',
    images:[{url:commons('NVIDIA GPU.jpg'),alt:'Processador gráfico NVIDIA fotografado em close',caption:'GPU NVIDIA.',credit:'Mickael Courtiade / Wikimedia Commons · CC BY 2.0',sourceUrl:'https://commons.wikimedia.org/wiki/File:NVIDIA_GPU.jpg',kind:'PHOTO'}],
    relatedLabel:'NVIDIA · resultados oficiais · 26/08',relatedHref:'https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027'
  }
];
