import { dailyContent, todayDrops } from './daily-content';

const set = (slug:string, data:any) => Object.assign(dailyContent[slug], data);

Object.assign(dailyContent.hoje, {
  badge: '17H INTELLIGENCE UPDATE',
  summary: 'A edição-base continua válida. Na revisão das 17h, Mundo e Finanças foram atualizados com a persistência da disrupção em Hormuz e Brent em US$ 88,52; Política ganhou um guia prático das regras que passaram a valer hoje. As demais áreas foram mantidas quando não surgiu fato materialmente melhor.',
});

const worldDrop = todayDrops.find((item) => item.slug === 'mundo');
if (worldDrop) Object.assign(worldDrop, {
  title: 'Hormuz segue sem normalização; Brent fecha a semana em US$ 88,52',
  detail: 'As conversas EUA–Irã seguem travadas e o tráfego de petroleiros ainda não voltou ao normal; o risco de energia continua relevante para inflação e frete.',
});

const politicsDrop = todayDrops.find((item) => item.slug === 'politica');
if (politicsDrop) Object.assign(politicsDrop, {
  title: 'Primeiro dia de campanha: o que já pode acontecer nas ruas e na internet',
  detail: 'Propaganda, lives, impulsionamento, carreatas e comícios entram em regras específicas; conteúdo sintético por IA exige transparência.',
});

const financeDrop = todayDrops.find((item) => item.slug === 'financas');
if (financeDrop) Object.assign(financeDrop, {
  title: 'Petróleo alto mantém inflação de energia no radar da próxima semana',
  detail: 'Brent encerrou sexta em US$ 88,52 e Hormuz segue parcialmente disfuncional; combustível, frete e expectativas de juros continuam conectados.',
});

set('mundo', {
  title: '17h: Hormuz ainda não normalizou e petróleo mantém prêmio geopolítico',
  summary: 'Neste domingo, bolsas do Golfo avançaram apesar do impasse entre EUA e Irã, enquanto o tráfego de petroleiros pelo Estreito de Hormuz ainda não voltou ao normal. O Brent encerrou sexta-feira em US$ 88,52 por barril, alta de 1,67% no dia.',
  shareSummary: 'Mundo 17h: Hormuz continua sem normalização e o Brent fechou a semana em US$ 88,52. O risco não é só petróleo: energia cara pode chegar a frete, inflação e juros.',
  readTime: '7 MIN READ',
  badge: 'GLOBAL / 17H UPDATE',
  stats: [
    { label: 'BRENT', value: 'US$ 88,52' },
    { label: 'SEXTA', value: '+1,67%' },
    { label: 'HORMUZ', value: 'DISRUPÇÃO' },
  ],
  sections: [
    { title: 'O fato novo deste domingo', paragraphs: ['A Reuters informou que a maior parte das bolsas do Golfo subiu neste domingo mesmo com as negociações entre Estados Unidos e Irã sem progresso e com o tráfego de petroleiros pelo Estreito de Hormuz ainda sem plena retomada.'] },
    { title: 'Por que o preço do petróleo importa fora do posto', bullets: ['Combustível entra diretamente no orçamento de famílias que usam carro ou moto.', 'Diesel afeta transporte rodoviário e pode aparecer no frete de alimentos e mercadorias.', 'Energia persistentemente cara pode dificultar a queda da inflação e influenciar expectativas de juros.'] },
    { title: 'O que ainda é cenário', paragraphs: ['Uma disrupção prolongada pode manter prêmio de risco no petróleo, mas isso não significa automaticamente nova disparada de preços. Demanda global, estoques, produção de outros países e evolução diplomática continuam capazes de mudar o quadro.'] },
  ],
  sources: [
    { label: 'Reuters · bolsas do Golfo, Hormuz e Brent · 16/08/2026', url: 'https://www.reuters.com/business/energy/most-gulf-bourses-gain-despite-stalled-iran-talks-hormuz-disruption-2026-08-16/' },
  ],
});

set('financas', {
  title: '17h: energia cara pode ser o elo entre geopolítica, orçamento doméstico e juros',
  summary: 'O Brent fechou sexta-feira a US$ 88,52 e o tráfego por Hormuz ainda não normalizou. Para a semana que começa, vale acompanhar se o choque fica restrito ao mercado de energia ou começa a contaminar fretes, expectativas de inflação e juros.',
  shareSummary: 'Finanças 17h: petróleo perto de US$ 89 não é só notícia de mercado. Se persistir, pode pressionar combustível, frete e inflação. A dica prática é medir quanto transporte e energia pesam no seu próprio orçamento.',
  readTime: '7 MIN READ',
  badge: 'FINANÇAS / 17H UPDATE',
  stats: [
    { label: 'BRENT', value: 'US$ 88,52' },
    { label: 'RISCO', value: 'ENERGIA' },
    { label: 'AÇÃO', value: 'MEDIR EXPOSIÇÃO' },
  ],
  sections: [
    { title: 'A conexão com a vida real', paragraphs: ['O impacto de petróleo alto não é igual para todas as famílias. Quem dirige muito, trabalha com entrega, depende de transporte rodoviário ou consome grande parcela da renda em alimentos pode sentir o choque antes.'] },
    { title: 'Dica prática nova', bullets: ['Some combustível, transporte por aplicativo, ônibus intermunicipal e entregas dos últimos 30 dias.', 'Calcule essa soma como percentual da renda líquida.', 'Se a parcela for alta, crie uma margem específica para energia e transporte em vez de tratar toda alta como gasto “inesperado”.'] },
    { title: 'Não confunda risco com previsão', paragraphs: ['Petróleo mais caro pode pressionar inflação, mas o repasse depende de câmbio, impostos, política de preços, margens e duração do choque. A leitura correta é acompanhar transmissão, não assumir que cada alta internacional chegará integralmente ao consumidor.'] },
  ],
  sources: [
    { label: 'Reuters · Hormuz e Brent · 16/08/2026', url: 'https://www.reuters.com/business/energy/most-gulf-bourses-gain-despite-stalled-iran-talks-hormuz-disruption-2026-08-16/' },
    { label: 'Reuters · mercados globais e petróleo · 14/08/2026', url: 'https://www.reuters.com/world/china/global-markets-wrapup-1-2026-08-14/' },
  ],
});

set('politica', {
  title: '17h: primeiro dia de campanha — o que mudou concretamente para eleitor e candidato',
  summary: 'O calendário do TSE autoriza propaganda eleitoral desde hoje. Além da internet, passam a valer janelas e limites específicos para alto-falantes, comícios, caminhadas, carreatas, material gráfico e impulsionamento. Conteúdo sintético ou significativamente alterado por IA deve ser identificado de forma explícita e acessível.',
  shareSummary: 'Política 17h: a campanha começou. Já há regras para propaganda na internet, comícios, carreatas, som e impulsionamento; conteúdo sintético por IA precisa ser identificado. Promessa eleitoral continua separada de status jurídico do registro.',
  readTime: '9 MIN READ',
  badge: 'POLÍTICA / 17H UPDATE',
  stats: [
    { label: 'CAMPANHA', value: 'EM CURSO' },
    { label: 'INTERNET', value: 'PERMITIDA' },
    { label: 'IA', value: 'TRANSPARÊNCIA' },
  ],
  sections: [
    { title: 'O que passou a valer hoje', bullets: ['Propaganda eleitoral, inclusive na internet.', 'Alto-falantes e amplificadores entre 8h e 22h, respeitando distâncias e locais protegidos previstos nas regras.', 'Comícios e sonorização fixa dentro das janelas definidas pelo calendário.', 'Distribuição de material gráfico, caminhadas, carreatas e passeatas dentro dos limites eleitorais.', 'Circulação paga ou impulsionada de propaganda na internet dentro das regras aplicáveis.'] },
    { title: 'IA: transparência é obrigação, não detalhe', paragraphs: ['A resolução do TSE determina que conteúdo sintético multimídia criado ou significativamente alterado por inteligência artificial ou tecnologia equivalente seja identificado de modo explícito, destacado e acessível, informando que houve fabricação ou manipulação e a tecnologia utilizada.'] },
    { title: 'Impacto na vida real', paragraphs: ['Para a população, a mudança mais perceptível é o aumento de propaganda nas ruas e nas redes. Isso afeta diretamente o volume de mensagens recebidas, o uso do espaço público e a necessidade de conferir origem de vídeos, áudios e imagens antes de compartilhar.'], bullets: ['Trabalhador e família: mais exposição a propaganda e impulsionamento nas redes; vale checar fonte antes de repassar.', 'Morador: som, comícios, carreatas e material de rua passam a aparecer com maior frequência, mas continuam sujeitos a limites.', 'Eleitor: promessa de campanha não muda o status jurídico de candidatura; acompanhe registro e decisões em canal oficial.', 'Consumidor de informação: procure identificação de IA e compare afirmações com propostas registradas e fontes primárias.'] },
    { title: 'Neutralidade do comparador', paragraphs: ['O comparador continua separando experiência, proposta, caminho institucional, argumentos favoráveis, críticas, lacunas e impacto na vida real. Não há nota, ranking nem recomendação de voto.'] },
  ],
  sources: [
    { label: 'TSE · Calendário Eleitoral 2026 · 16 de agosto', url: 'https://www.tse.jus.br/eleicoes/eleicoes-2026-content/normas-e-documentacoes/arquivos-2026/resolucao-e-voto-calendario/@@display-file/file/Resolucao-e-voto-calendario.pdf' },
    { label: 'TSE · Resolução de propaganda e conteúdo sintético/IA', url: 'https://www.tse.jus.br/eleicoes/eleicoes-2026-content/normas-e-documentacoes/arquivos-2026/resolucao-e-voto-propaganda/@@display-file/file/Resolucao-e-voto-propaganda.pdf' },
    { label: 'TSE · DivulgaCandContas', url: 'https://www.tse.jus.br/administracao/painel/divulgacao-de-candidaturas-e-contas-eleitorais' },
  ],
});
