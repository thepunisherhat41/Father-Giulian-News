import { dailyContent, todayDrops } from './daily-content';

const carDrop = todayDrops.find((item) => item.slug === 'carros');
if (carDrop) Object.assign(carDrop, {
  title: 'Radar até R$ 70 mil e sem 1.0: HB20, Fit, Duster e Fluence',
  detail: 'Quatro usados com motor acima de 1.0 e FIPE/média nacional dentro do teto: hatch 1.6, hatch 1.4, SUV 2.0 e sedã médio 2.0.',
});

Object.assign(dailyContent.carros, {
  title: 'Radar de agosto: quatro usados acima de 1.0 e realmente dentro de R$ 70 mil',
  summary: 'O radar segue duas regras objetivas: nenhum carro 1.0 e nenhum recomendado com FIPE ou média nacional acima de R$ 70 mil. A seleção de hoje compara Hyundai HB20 R-Spec 1.6 automático 2019, Honda Fit LX 1.4 automático 2014, Renault Duster 2.0 Dynamique automática 2016 e Renault Fluence Dynamique 2.0 automático 2016.',
  shareSummary: 'Carros: radar corrigido para motores acima de 1.0 e teto de R$ 70 mil. Hoje: HB20 1.6, Fit 1.4, Duster 2.0 e Fluence 2.0, todos com FIPE e média nacional dentro do recorte.',
  readTime: '4 OPÇÕES · 15 MIN',
  badge: 'GARAGE RADAR / >1.0 / ATÉ R$ 70K',
  stats: [
    { label: 'OPÇÕES', value: '4' },
    { label: 'MOTOR', value: '> 1.0' },
    { label: 'TETO', value: 'R$ 70 MIL' },
  ],
  sections: [
    {
      title: 'As duas regras do radar',
      paragraphs: ['Carros 1.0 ficam fora desta curadoria. Entre os demais, nenhuma recomendação entra se a FIPE ou a média nacional ultrapassar R$ 70 mil. Anúncios isolados acima desse valor podem ser citados como dispersão de mercado, mas não como opção recomendada.'],
      bullets: [
        'HB20 R-Spec 1.6 automático 2019: FIPE R$ 68.562; média R$ 68.918.',
        'Honda Fit LX 1.4 automático 2014: FIPE R$ 55.279; média R$ 56.544,70.',
        'Duster Dynamique 2.0 automática 2016: FIPE R$ 59.080; média R$ 60.744.',
        'Fluence Dynamique 2.0 automático 2016: FIPE R$ 51.440; média R$ 54.945.',
      ],
    },
    {
      title: 'Como comparar depois do filtro',
      paragraphs: ['Motor e teto financeiro apenas eliminam opções fora do recorte. A decisão final continua dependendo de histórico, manutenção, seguro, consumo, transmissão, estrutura e qualidade específica do exemplar.'],
    },
  ],
  sources: [
    { label: 'Webmotors · HB20 R-Spec 2019 · ago/2026', url: 'https://www.webmotors.com.br/tabela-fipe/carros/hyundai/hb20/2019/16-r-spec-16v-flex-4p-automatico' },
    { label: 'Webmotors · Honda Fit LX 2014 · ago/2026', url: 'https://www.webmotors.com.br/tabela-fipe/carros/honda/fit/2014/14-lx-16v-flex-4p-automatico' },
    { label: 'Webmotors · Duster Dynamique 2016 · ago/2026', url: 'https://www.webmotors.com.br/tabela-fipe/carros/renault/duster/2016/20-dynamique-4x2-16v-flex-4p-automatico' },
    { label: 'Webmotors · Fluence Dynamique 2016 · ago/2026', url: 'https://www.webmotors.com.br/tabela-fipe/carros/renault/fluence/2016/20-dynamique-16v-flex-4p-automatico' },
  ],
});
