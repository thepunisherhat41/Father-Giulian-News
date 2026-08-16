import { dailyContent, todayDrops } from './daily-content';

const carDrop = todayDrops.find((item) => item.slug === 'carros');
if (carDrop) Object.assign(carDrop, {
  title: 'Radar até R$ 70 mil: HB20, Onix Turbo, Duster e Fluence',
  detail: 'Quatro usados com FIPE e média nacional dentro do teto: hatch, turbo, SUV e sedã médio, todos com análise detalhada de estado, histórico e custo real.',
});

Object.assign(dailyContent.carros, {
  title: 'Radar de agosto: quatro usados realmente dentro do teto de R$ 70 mil',
  summary: 'O radar foi recalibrado para a faixa que faz sentido nesta curadoria. Saem Kicks e Corolla acima do orçamento; entram Renault Duster 2.0 Dynamique automática 2016 e Renault Fluence Dynamique 2.0 automático 2016 ao lado de HB20 R-Spec 2019 e Onix LT Turbo 2020. Todos têm FIPE e média nacional abaixo de R$ 70 mil na referência de agosto/2026.',
  shareSummary: 'Carros: teto corrigido para R$ 70 mil. O radar de hoje compara HB20, Onix Turbo, Duster e Fluence; nenhum deles tem FIPE ou média nacional acima do orçamento definido.',
  readTime: '4 OPÇÕES · 15 MIN',
  badge: 'GARAGE RADAR / ATÉ R$ 70K',
  stats: [
    { label: 'OPÇÕES', value: '4' },
    { label: 'TETO', value: 'R$ 70 MIL' },
    { label: 'FIPE', value: 'R$ 51–69 MIL' },
  ],
  sections: [
    {
      title: 'A nova regra do radar',
      paragraphs: ['Nenhuma recomendação entra se a FIPE ou a média nacional de mercado ultrapassar R$ 70 mil. Anúncios isolados podem aparecer acima disso, mas ficam explicitamente fora do nosso recorte de compra.'],
      bullets: ['HB20 R-Spec 2019: FIPE R$ 68.562; média R$ 68.918.', 'Onix LT Turbo 2020: FIPE R$ 64.268; média R$ 66.381.', 'Duster Dynamique 2.0 automática 2016: FIPE R$ 59.080; média R$ 60.744.', 'Fluence Dynamique 2.0 automático 2016: FIPE R$ 51.440; média R$ 54.945.'],
    },
    {
      title: 'Como comparar sem cair na armadilha do preço',
      paragraphs: ['O teto filtra o orçamento, mas não escolhe o carro sozinho. Depois do filtro financeiro, histórico, manutenção, seguro, consumo, transmissão, estrutura e qualidade do exemplar passam a decidir a compra.'],
    },
  ],
  sources: [
    { label: 'Webmotors · HB20 R-Spec 2019 · ago/2026', url: 'https://www.webmotors.com.br/tabela-fipe/carros/hyundai/hb20/2019/16-r-spec-16v-flex-4p-automatico' },
    { label: 'Webmotors · Onix LT Turbo 2020 · ago/2026', url: 'https://www.webmotors.com.br/tabela-fipe/carros/chevrolet/onix/2020/10-turbo-flex-lt-automatico' },
    { label: 'Webmotors · Duster Dynamique 2016 · ago/2026', url: 'https://www.webmotors.com.br/tabela-fipe/carros/renault/duster/2016/20-dynamique-4x2-16v-flex-4p-automatico' },
    { label: 'Webmotors · Fluence Dynamique 2016 · ago/2026', url: 'https://www.webmotors.com.br/tabela-fipe/carros/renault/fluence/2016/20-dynamique-16v-flex-4p-automatico' },
  ],
});
