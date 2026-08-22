import type { RichMediaEntry } from './rich-media';
import { dailyRichMedia20260821 } from './daily-rich-media-2026-08-21';

const base = (label:string) => dailyRichMedia20260821.find((item) => item.label === label) as RichMediaEntry;

export const dailyRichMedia20260821_17h: RichMediaEntry[] = [
  {
    ...base('Política'),
    matches:['datafolha mostra disputa presidencial competitiva','datafolha: 47% a 43%','margem de erro continua essencial'],
    tag:'MÍDIA VALIDADA · 22 AGO · 10H',
    title:'Eleições 2026 · pesquisa é fotografia, não resultado',
    caption:'A mídia institucional da Justiça Eleitoral permanece como contexto neutro. Os números da pesquisa vêm da Datafolha reportada pela Reuters; a imagem não representa preferência eleitoral.',
    relatedLabel:'Reuters · Datafolha · 21/08/2026',
    relatedHref:'https://www.reuters.com/world/americas/lula-retains-lead-over-flavio-bolsonaro-ahead-brazil-election-datafolha-shows-2026-08-21/',
  },
  {
    label:'Mundo',
    matches:['irã libera passagem de alguns petroleiros iraquianos','alguns petroleiros iraquianos em hormuz','rota continua fortemente restrita'],
    tag:'MÍDIA DA REVISÃO · 22 AGO · 10H',
    title:'Estreito de Hormuz · passagem seletiva de navios',
    caption:'Mapa de referência do Estreito de Hormuz. Ele localiza a rota citada na matéria e não representa tráfego em tempo real nem reabertura total.',
    images:[{
      url:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Hormuz%20map.png',
      alt:'Mapa indicando o Estreito de Hormuz entre o Golfo Pérsico e o Golfo de Omã',
      caption:'Hormuz continua sendo o gargalo físico central da pauta de energia.',
      credit:'Kleptosquirrel / Wikimedia Commons',
      sourceUrl:'https://commons.wikimedia.org/wiki/File:Hormuz_map.png',
      kind:'REFERENCE',
    }],
    relatedLabel:'Reuters · Hormuz / Iraque · 22/08/2026',
    relatedHref:'https://www.reuters.com/business/energy/iran-grants-permission-number-iraqi-oil-tankers-pass-through-hormuz-2026-08-22/',
  },
  {
    ...base('Tempo e Clima'),
    matches:['são paulo amanhece fria','atenção para baixas temperaturas','madrugada teve média de 13°c'],
    tag:'MÍDIA VALIDADA · 22 AGO · 10H',
    title:'São Paulo · manhã fria e atenção para baixas temperaturas',
    caption:'Imagem contextual da capital. Temperatura, sensação térmica e estado de atenção vêm do CGE e não devem ser inferidos pela fotografia.',
    relatedLabel:'CGE São Paulo · 22/08/2026',
    relatedHref:'https://www.cgesp.org/v3/noticias.jsp?id=55723',
  },
  {
    ...base('Games'),
    matches:['gamescom entra na reta final','gamescom dev começa amanhã','opening night live será em 25 de agosto'],
    tag:'MÍDIA VALIDADA · 22 AGO · 10H',
    title:'gamescom 2026 · semana oficial começa amanhã',
    caption:'Mídia da gamescom preservada por continuar semanticamente correta. A agenda oficial separa gamescom dev, Opening Night Live e feira principal.',
    relatedLabel:'gamescom · agenda oficial 2026',
    relatedHref:'https://www.gamescom.global/',
  },
  {
    ...base('Gravidez'),
    matches:['6 semanas + 6 dias','amanhã começa a 7ª semana gestacional','amanhã começa a 7ª semana'],
    tag:'MÍDIA VALIDADA · 22 AGO · 10H',
    title:'Gestação inicial · 6 semanas + 6 dias',
    caption:'Ilustração educativa da gestação inicial. Não é ultrassom real e não substitui avaliação clínica ou datação obstétrica.',
    relatedLabel:'ACOG · Morning Sickness',
    relatedHref:'https://www.acog.org/womens-health/faqs/morning-sickness-nausea-and-vomiting-of-pregnancy',
  },
  {
    ...base('Ser Pai'),
    matches:['monte um kit de recuperação pós-enjoo','kit pós-enjoo pronto','deixe um kit pós-enjoo pronto'],
    tag:'MÍDIA VALIDADA · 22 AGO · 10H',
    title:'Apoio prático depois do enjoo',
    caption:'Material de apoio materno preservado como contexto para escuta, presença e busca de cuidado quando necessário.',
    relatedLabel:'ACOG · Nausea and Vomiting of Pregnancy',
    relatedHref:'https://www.acog.org/womens-health/faqs/morning-sickness-nausea-and-vomiting-of-pregnancy',
  },
];
