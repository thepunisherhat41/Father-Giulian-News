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
    images:[{url:commons('São Paulo at night.jpg'),alt:'Vista noturna da cidade de São Paulo',caption:'São Paulo à noite.',credit:'Wikimedia Commons',sourceUrl:'https://commons.wikimedia.org/wiki/Category:São_Paulo_at_night',kind:'PHOTO'}],
    relatedLabel:'CGE São Paulo · 26/08 · 21h11',relatedHref:'https://www.cgesp.org/v3/noticias.jsp?id=55757'
  }
];
