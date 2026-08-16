import { dailyContent, todayDrops } from './daily-content';

const carDrop = todayDrops.find((item) => item.slug === 'carros');
if (carDrop) Object.assign(carDrop, {
  title: 'Radar sem 1.0: HB20 1.6, Fit 1.4, Duster 2.0 e Fluence 2.0',
  detail: 'Quatro usados até R$ 70 mil, todos acima de 1.0, com FIPE de agosto/2026, mercado, km contextual e inspeção completa.',
});

Object.assign(dailyContent.carros, {
  title: 'Radar até R$ 70 mil: quatro usados acima de 1.0 para comparar',
  summary: 'A curadoria agora desconsidera motores 1.0. O radar compara Hyundai HB20 R-Spec 1.6 2019, Honda Fit LX 1.4 automático 2014, Renault Duster 2.0 Dynamique automática 2016 e Renault Fluence 2.0 Dynamique automático 2016. Todos mantêm análise de preço, mercado, histórico, km contextual, manutenção e inspeção.',
  shareSummary: 'Carros: sem 1.0 e até R$ 70 mil. HB20 1.6, Fit 1.4, Duster 2.0 e Fluence 2.0 entram no radar com FIPE/mercado, perfil de uso, riscos e checklist antes da compra.',
  readTime: '4 OPÇÕES · 15 MIN',
  badge: 'GARAGE RADAR / >1.0 / ≤70K',
  stats: [
    { label: 'OPÇÕES', value: '4' },
    { label: 'MOTOR', value: '> 1.0' },
    { label: 'TETO', value: 'R$ 70 MIL' },
  ],
  sections: [
    {
      title: 'Regra da curadoria',
      paragraphs: ['Carros 1.0 ficam fora deste radar. A seleção procura motores acima de 1.0, com FIPE e média nacional de mercado dentro do teto de R$ 70 mil.'],
    },
    {
      title: 'Quatro propostas diferentes',
      bullets: ['HB20 1.6: hatch automático compacto.', 'Fit 1.4: versatilidade e espaço interno.', 'Duster 2.0: SUV, altura do solo e espaço.', 'Fluence 2.0: sedã médio e conforto pelo valor.'],
    },
  ],
});
