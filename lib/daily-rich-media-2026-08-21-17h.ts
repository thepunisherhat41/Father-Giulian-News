import type { RichMediaEntry } from './rich-media';
import { dailyRichMedia20260821 } from './daily-rich-media-2026-08-21';
import { dailyRichMedia20260821_10h } from './daily-rich-media-2026-08-21-10h';

const base = (label:string) => dailyRichMedia20260821.find((item) => item.label === label);
const ten = (label:string) => dailyRichMedia20260821_10h.find((item) => item.label === label);

export const dailyRichMedia20260821_17h: RichMediaEntry[] = [
  {
    label:'Brasil',
    matches:['lula e trump retomam diálogo','brasil e estados unidos voltam à mesa','tarifas entre brasil e eua'],
    tag:'MÍDIA DA REVISÃO · 21 AGO · 17H',
    title:'Brasil e Estados Unidos · relação comercial',
    caption:'Composição visual das bandeiras dos dois países para contextualizar a pauta comercial. A imagem não representa acordo concluído nem retirada das tarifas.',
    images:[{
      url:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Bandera%20de%20Brasil-EEUU.png',
      alt:'Composição com as bandeiras do Brasil e dos Estados Unidos',
      caption:'Brasil e Estados Unidos voltaram a discutir tarifas em 21 de agosto de 2026.',
      credit:'TekayTK / Wikimedia Commons',
      sourceUrl:'https://commons.wikimedia.org/wiki/File:Bandera_de_Brasil-EEUU.png',
      kind:'REFERENCE',
    }],
    relatedLabel:'Reuters · Brasil–EUA',
    relatedHref:'https://www.reuters.com/world/americas/lula-trump-discuss-tariffs-phone-call-brazil-says-2026-08-21/',
  },
  {
    label:'Mundo',
    matches:['brent fecha em us$93,86','petróleo fecha a sexta acima de us$93','sanções e hormuz'],
    tag:'MÍDIA DA REVISÃO · 21 AGO · 17H',
    title:'Estreito de Hormuz · rota crítica de energia',
    caption:'Mapa de referência para localizar o estreito citado na matéria. Não representa bloqueio total nem o fluxo marítimo em tempo real.',
    images:[{
      url:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Hormuz%20map.png',
      alt:'Mapa indicando o Estreito de Hormuz entre o Golfo Pérsico e o Golfo de Omã',
      caption:'O Estreito de Hormuz é uma rota crítica para exportações de energia do Golfo.',
      credit:'Kleptosquirrel / Wikimedia Commons',
      sourceUrl:'https://commons.wikimedia.org/wiki/File:Hormuz_map.png',
      kind:'REFERENCE',
    }],
    relatedLabel:'Reuters · Oil Markets · 21/08/2026',
    relatedHref:'https://www.reuters.com/business/energy/oil-set-second-weekly-rise-unsettled-us-iran-war-crimps-supply-2026-08-21/',
  },
  {
    ...(base('Tempo e Clima') as RichMediaEntry),
    matches:['são paulo fecha a tarde','rajadas acima de 50 km/h','rajadas passam de 50 km/h'],
    tag:'MÍDIA VALIDADA · 21 AGO · 17H',
    title:'São Paulo · vento e entrada de ar frio',
    caption:'Imagem contextual da capital preservada por continuar semanticamente correta. As rajadas e horários vêm das medições do CGE, não da fotografia.',
    relatedLabel:'CGE São Paulo · 21/08/2026',
    relatedHref:'https://www.cgesp.org/v3/noticias.jsp?data=2026-08-21',
  },
  {
    ...(ten('Finanças') as RichMediaEntry),
    matches:['petróleo fecha perto de us$94','energia e juros longos','funding pressionados'],
    tag:'MÍDIA VALIDADA · 21 AGO · 17H',
    title:'Energia, câmbio e custo de capital',
    caption:'Imagem contextual do real para a transmissão ao bolso brasileiro. Preço do Brent e yields são dados das fontes de mercado, não da fotografia.',
  },
  {
    label:'Tecnologia',
    matches:['nvidia passa da gpu ao terreno','nvidia investe em desenvolvedora','cloverleaf'],
    tag:'MÍDIA DA REVISÃO · 21 AGO · 17H',
    title:'Nvidia · infraestrutura para expansão de IA',
    caption:'Marca da Nvidia como referência para a empresa envolvida no investimento. A matéria trata de participação minoritária na Cloverleaf e não afirma aquisição da desenvolvedora.',
    images:[{
      url:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Nvidia%20logo.svg',
      alt:'Logotipo da Nvidia',
      caption:'A Nvidia anunciou investimento minoritário na Cloverleaf Infrastructure em 21 de agosto de 2026.',
      credit:'Nvidia / Wikimedia Commons · PD-textlogo',
      sourceUrl:'https://commons.wikimedia.org/wiki/File:Nvidia_logo.svg',
      kind:'REFERENCE',
    }],
    relatedLabel:'Reuters · Nvidia / Cloverleaf',
    relatedHref:'https://www.reuters.com/technology/nvidia-invests-data-center-developer-cloverleaf-infrastructure-2026-08-21/',
  },
];
