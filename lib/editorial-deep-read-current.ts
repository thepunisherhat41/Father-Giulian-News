import { deepReadForSlug as previousDeepRead, type EditorialDeepRead } from './editorial-deep-read-2026-08-21-17h';

const current: EditorialDeepRead[] = [
  {
    slug:'mundo',
    context:[
      'A autorização iraniana para alguns petroleiros iraquianos é uma exceção negociada, não uma reabertura geral do Estreito de Hormuz.',
      'O Iraque procura rotas alternativas de exportação porque depender de um único gargalo marítimo amplia risco logístico, fiscal e geopolítico.'
    ],
    practical:[
      'Para interpretar energia, acompanhe fluxo físico de navios, seguros e rotas alternativas — não só declarações políticas.',
      'Para o Brasil, o canal potencial passa por petróleo, frete, inflação e câmbio, mas o repasse não é automático nem imediato.'
    ],
    limits:[
      'Permissão para alguns navios não significa normalização do tráfego.',
      'As novas sanções americanas ainda precisam ser publicadas formalmente para avaliar alcance e exceções.'
    ],
    watch:['Detalhes das sanções previstas para segunda-feira.','Volume real de navios atravessando Hormuz.','Rotas iraquianas alternativas de exportação.']
  },
  {
    slug:'tempo',
    context:[
      'A massa de ar frio e os ventos de sul mantêm a capital mais fria e úmida neste sábado.',
      'Mínima absoluta é uma medição localizada; a média das estações descreve melhor o conjunto da cidade.'
    ],
    practical:[
      'Camadas de roupa ajudam a lidar com diferença entre manhã, tarde e noite.',
      'O 156 pode ser acionado para acolhimento de pessoas em situação de vulnerabilidade expostas ao frio.'
    ],
    limits:['8,9°C em Parelheiros não representa toda São Paulo.','Máxima e sensação térmica podem ser revisadas conforme nebulosidade e vento mudam.'],
    watch:['Atualizações do CGE ao longo da tarde.','Manutenção ou encerramento do estado de atenção.','Previsão para domingo antes de atividades externas.']
  },
  {
    slug:'pai',
    context:[
      'Depois de um episódio de vômito, pequenas tarefas logísticas podem virar esforço desnecessário para quem está enjoada e cansada.',
      'Assumir a preparação e reposição do kit reduz carga mental sem retirar autonomia sobre comer, beber ou descansar.'
    ],
    practical:[
      'Mantenha água, recipiente limpo, toalha e uma opção simples já tolerada em local fácil de alcançar.',
      'Reponha e higienize depois do uso sem esperar instrução.'
    ],
    limits:['Apoio não substitui orientação do pré-natal.','Não force líquidos ou alimentos se ela estiver nauseada; ofereça e respeite tolerância/preferência.'],
    watch:['Capacidade de manter líquidos.','Urina muito reduzida/escura, tontura, desmaio ou piora importante.','Necessidade de falar com a equipe de saúde.']
  }
];

export function deepReadForSlug(slug: string) {
  return current.find((item) => item.slug === slug) ?? previousDeepRead(slug);
}

export type { EditorialDeepRead };
