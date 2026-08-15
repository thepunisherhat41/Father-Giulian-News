import { dailyContent, todayDrops } from './daily-content';

const carDrop = todayDrops.find((item) => item.slug === 'carros');
if (carDrop) Object.assign(carDrop, {
  title: 'Radar de usados: 4 carros para comparar hoje',
  detail: 'City, Fit, Etios Sedan e Duster em propostas diferentes, todos com preço de referência, pontos fortes, riscos e checklist individual.',
});

const motoDrop = todayDrops.find((item) => item.slug === 'motos');
if (motoDrop) Object.assign(motoDrop, {
  title: 'Radar de usadas: 4 motos para comparar hoje',
  detail: 'FZ25, XRE 300, MT-03 e CB 500X com preço, perfil de uso, inspeção, custos e decisão de compra por proposta.',
});

Object.assign(dailyContent.carros, {
  title: 'Radar de usados: quatro carros, quatro decisões de compra diferentes',
  summary: 'O destaque do dia continua aprofundado, mas a aba agora compara quatro alternativas completas: Honda City DX 2015, Honda Fit LX automático 2014, Toyota Etios Sedan X 2017 e Renault Duster 2.0 Tech Road II 2015. A comparação separa preço de referência, perfil de uso, quilometragem contextual, pontos fortes, pontos de atenção e checklist antes de comprar.',
  shareSummary: 'Carros: o radar agora compara 4 usados completos — City 2015, Fit 2014, Etios Sedan 2017 e Duster 2015 — com FIPE/mercado, perfil de uso, inspeção e veredito. A ideia é comparar exemplar e custo total, não escolher só pelo nome do modelo.',
  readTime: '4 OPÇÕES · 14 MIN',
  badge: 'GARAGE RADAR / 4 PICKS',
  stats: [
    { label: 'OPÇÕES', value: '4' },
    { label: 'FAIXA FIPE', value: 'R$ 52–62 MIL' },
    { label: 'REGRA', value: 'HISTÓRICO > KM' },
  ],
});

Object.assign(dailyContent.motos, {
  title: 'Radar de motos: quatro usadas para quatro estilos de uso',
  summary: 'A aba agora coloca lado a lado Yamaha FZ25 2018, Honda XRE 300 ABS 2017, Yamaha MT-03 2018 e Honda CB 500X ABS 2015. Cada moto mantém análise completa de preço, proposta, quilometragem contextual, sinais de queda, consumíveis, manutenção e checklist antes da compra.',
  shareSummary: 'Motos: 4 opções detalhadas — FZ25, XRE 300, MT-03 e CB 500X. O comparativo separa uso urbano, trail, desempenho e viagem e mostra o que inspecionar antes de pagar.',
  readTime: '4 OPÇÕES · 14 MIN',
  badge: 'MOTO RADAR / 4 PICKS',
  stats: [
    { label: 'OPÇÕES', value: '4' },
    { label: 'FAIXA FIPE', value: 'R$ 16–30 MIL' },
    { label: 'FOCO', value: 'USO + ESTADO' },
  ],
});
