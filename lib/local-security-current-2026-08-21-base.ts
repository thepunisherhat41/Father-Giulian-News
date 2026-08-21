import * as base from './local-security-content';
import type { LocalSecurityCase, LocalSecuritySignal } from './local-security-content';

export type { LocalSecurityArticle, LocalSecurityCase, LocalSecuritySignal } from './local-security-content';

export const localSecurityUpdatedAt = '21 AGO 2026 · madrugada';
export const localSecurityRegions = base.localSecurityRegions;
export const localSecurityMedia = base.localSecurityMedia;
export const localSecurityArticles = base.localSecurityArticles;

export const localSecurityTodayStatus = {
  date: '21 AGO 2026',
  status: 'ÚLTIMAS 24H REVISADAS',
  note: 'A madrugada abre com fatos confirmados publicados em 20/08: homicídio em Aricanduva com autor procurado, prisão em investigação sobre exploração de trabalhadores na Ponte Rasa e acompanhamento de ocorrências recentes em São Mateus e de desmanche clandestino. Itens antigos permanecem apenas como contexto, com data explícita.',
  nextCheck: 'nova varredura programada para 05h, 10h e 17h — ou antes se houver confirmação material nova',
};

const currentSignals: LocalSecuritySignal[] = [
  {
    id:'aricanduva-homicidio-20ago',
    type:'ALERTA',
    area:'Aricanduva / Vila Nova York · Zona Leste',
    date:'20 AGO 2026 · publicado 17h38',
    freshness:'RECENTE',
    ageLabel:'<24H',
    title:'Discussão entre vizinhos terminou em homicídio; autor dos disparos é procurado',
    summary:'Uma discussão na região de Aricanduva terminou com a morte de um mecânico de 57 anos. Reportagens de UOL e Band informam que o homem apontado como autor dos disparos fugiu e ainda era procurado na última atualização pública localizada.',
    whyItMatters:'É uma ocorrência grave das últimas horas e, diferente de estatística de bairro, precisa ser lida como caso específico. O status do investigado pode mudar e deve ser rechecado antes de qualquer republicação.',
    source:{ label:'Band / UOL · 20/08/2026', url:'https://www.band.com.br/noticias/brasil-urgente/ultimas/discussao-entre-vizinhos-termina-em-morte-na-zona-leste-de-sp-202608201738' },
  },
  {
    id:'ponte-rasa-oficina-20ago',
    type:'ALERTA',
    area:'Ponte Rasa · Zona Leste',
    date:'20 AGO 2026',
    freshness:'RECENTE',
    ageLabel:'<24H',
    title:'Homem foi preso em investigação sobre tortura e trabalho em condições análogas à escravidão em oficina',
    summary:'Agentes resgataram trabalhadores bolivianos de uma oficina na Zona Leste. Um homem de 30 anos foi preso em flagrante e o caso segue sob investigação do 24º DP e de órgãos trabalhistas.',
    whyItMatters:'O caso combina violência, exploração laboral e possível tráfico de pessoas. Prisão em flagrante não equivale a condenação; a investigação e a audiência judicial definem os próximos passos.',
    source:{ label:'UOL · 20/08/2026', url:'https://noticias.uol.com.br/cotidiano/ultimas-noticias/2026/08/20/homem-e-preso-suspeito-de-tortura-contra-estrangeiros-em-oficina.ghtm' },
  },
  {
    id:'sao-mateus-motorista-refem-19ago',
    type:'ALERTA',
    area:'São Mateus · Zona Leste',
    date:'19 AGO 2026',
    freshness:'RECENTE',
    ageLabel:'2D',
    title:'Polícia investiga roubo de caminhão e motorista mantido refém por cerca de duas horas',
    summary:'Um motorista de entregas foi rendido quando estacionava para um serviço em São Mateus e permaneceu sob poder de homens armados antes de ser libertado. A Polícia Civil investiga o caso.',
    whyItMatters:'É uma ocorrência recente ligada a roubo de carga e privação de liberdade. O card informa o fato sem transformar um caso isolado em tendência de toda a região.',
    source:{ label:'Band · 19/08/2026', url:'https://www.band.com.br/noticias/brasil-urgente/ultimas/sp-motorista-e-mantido-refem-por-duas-horas-durante-entrega-em-sao-mateus-202608191701' },
  },
  {
    id:'desmanche-zl-19ago',
    type:'ALERTA',
    area:'Zona Leste · endereço operacional não reproduzido',
    date:'19 AGO 2026',
    freshness:'RECENTE',
    ageLabel:'2D',
    title:'Polícia localizou desmanche clandestino; quatro suspeitos foram presos em flagrante',
    summary:'A Polícia Civil encontrou um galpão usado para desmontar veículos roubados e furtados. A reportagem descreve uso de materiais e equipamento para reduzir sinais de rastreamento; quatro pessoas foram presas em flagrante.',
    whyItMatters:'Ajuda a entender a cadeia de receptação e desmonte de veículos sem divulgar detalhes operacionais que possam facilitar evasão ou replicação da técnica.',
    source:{ label:'Band · 19/08/2026', url:'https://www.band.com.br/noticias/brasil-urgente/ultimas/policia-descobre-desmanche-clandestino-na-zona-leste-de-sp-202608191653' },
  },
];

export const localSecuritySignals: LocalSecuritySignal[] = [
  ...currentSignals,
  ...base.localSecuritySignals.filter((item) => !currentSignals.some((current) => current.id === item.id)),
];

const currentCases: LocalSecurityCase[] = [
  {
    id:'aricanduva-homicidio-procurado-20ago',
    status:'PROCURADO',
    area:'Aricanduva / Vila Nova York · Zona Leste',
    date:'20 AGO 2026',
    subject:'Homem apontado como autor dos disparos',
    title:'Autor de disparos em discussão entre vizinhos era procurado na última atualização pública',
    summary:'Após a discussão que terminou com a morte de um morador, o homem apontado pelas reportagens como autor dos disparos fugiu. A informação pública consultada em 20/08 dizia que ele ainda não havia sido localizado.',
    legalStatus:'Pessoa apontada como suspeita/autora na investigação e procurada pela polícia na última fonte localizada. Isso não equivale a condenação definitiva. O site não publica endereço, rotina, familiares nem informação para localização.',
    lastVerified:'Última confirmação pública localizada: 20/08/2026 · 18h05',
    source:{ label:'Band · 20/08/2026', url:'https://www.band.com.br/noticias/brasil-urgente/ultimas/discussao-entre-vizinhos-termina-em-morte-na-zona-leste-de-sp-202608201738' },
  },
  {
    id:'ponte-rasa-oficina-preso-20ago',
    status:'PRESO',
    area:'Ponte Rasa · Zona Leste',
    date:'20 AGO 2026',
    subject:'Responsável por oficina investigado',
    title:'Suspeito foi preso em flagrante após resgate de trabalhadores em oficina',
    summary:'A prisão ocorreu durante uma ação que resgatou trabalhadores estrangeiros. O caso envolve suspeitas de tortura, tráfico de pessoas e trabalho em condições análogas à escravidão, ainda sujeitas à apuração e ao processo judicial.',
    legalStatus:'Preso em flagrante e investigado. A descrição dos crimes é acusação/investigação, não sentença condenatória.',
    lastVerified:'Publicação localizada: 20/08/2026',
    source:{ label:'UOL · 20/08/2026', url:'https://noticias.uol.com.br/cotidiano/ultimas-noticias/2026/08/20/homem-e-preso-suspeito-de-tortura-contra-estrangeiros-em-oficina.ghtm' },
  },
];

export const localSecurityCases: LocalSecurityCase[] = [
  ...currentCases,
  ...base.localSecurityCases.filter((item) => !currentCases.some((current) => current.id === item.id)),
];
