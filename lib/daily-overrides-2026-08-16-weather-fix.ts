import { dailyContent, todayDrops } from './daily-content';

const weatherDrop = todayDrops.find((item) => item.slug === 'tempo');
if (weatherDrop) Object.assign(weatherDrop, {
  title: 'São Paulo esquenta neste domingo e inicia veranico',
  detail: 'A capital pode chegar a 29°C hoje; a tendência é de calor crescente e ar mais seco até quinta-feira.'
});

Object.assign(dailyContent.tempo, {
  title: 'São Paulo volta a esquentar neste domingo; veranico ganha força na semana',
  summary: 'A previsão mais recente aponta mínima perto de 17°C e máxima que pode chegar a 29°C na capital neste domingo, com predomínio de sol e sem previsão de chuva. Até quinta-feira, as temperaturas seguem subindo e a umidade tende a cair.',
  shareSummary: 'Tempo SP: domingo com sol, mínima perto de 17°C e máxima que pode chegar a 29°C. A semana começa mais quente e seca, com veranico até quinta-feira.',
  readTime: '5 MIN READ',
  badge: 'TEMPO / VERANICO',
  stats: [
    { label: 'DOMINGO', value: '~17–29°C' },
    { label: 'SEGUNDA', value: '~30°C' },
    { label: 'TENDÊNCIA', value: 'QUENTE + SECO' },
  ],
  sections: [
    { title: 'O que mudou desde sábado', paragraphs: ['A frente fria se afasta e o sol volta a predominar. O risco principal deixa de ser chuva forte e passa gradualmente para calor e baixa umidade.'] },
    { title: 'O que esperar da semana', paragraphs: ['A previsão indica veranico até quinta-feira, com temperaturas de 3°C a 5°C acima da média em diversas áreas e máximas acima dos 30°C na capital nos próximos dias.'] },
    { title: 'Aplicação prática', bullets: ['Hidrate-se ao longo do dia.', 'Evite exposição prolongada ao sol no período mais quente.', 'Acompanhe umidade e qualidade do ar se o período seco persistir.', 'Redobre atenção a focos de incêndio e queimadas.'] },
  ],
  sources: [
    { label: 'CGE / INMET · previsão de 16/08/2026', url: 'https://www1.folha.uol.com.br/cotidiano/2026/08/temperatura-volta-a-subir-neste-domingo-16-e-sao-paulo-tem-previsao-de-veranico.shtml' },
  ],
});
