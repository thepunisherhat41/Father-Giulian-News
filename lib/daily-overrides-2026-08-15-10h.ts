import { dailyContent, todayDrops } from './daily-content';

Object.assign(dailyContent.hoje, {
  title: '19 leituras + atualização das 10h para sábado, 15 de agosto',
  summary: 'A edição-base continua válida em todas as áreas. A revisão das 10h atualiza o que mudou de forma material nesta manhã: São Paulo teve alerta severo de chuva forte, raios, vento e possibilidade de granizo, enquanto a política entra nas últimas nove horas do prazo legal de registro de candidaturas.',
  readTime: '19 MISSÕES · 10H UPDATE',
  badge: '10H INTELLIGENCE UPDATE',
});

const politicsDrop = todayDrops.find((item) => item.slug === 'politica');
if (politicsDrop) Object.assign(politicsDrop, {
  title: 'Últimas 9 horas para registrar candidaturas',
  detail: 'O prazo termina hoje às 19h. Pedido transmitido pelo CANDex ainda será analisado pela Justiça Eleitoral; propaganda eleitoral geral começa amanhã, 16/08.',
});

const weatherDrop = todayDrops.find((item) => item.slug === 'tempo');
if (weatherDrop) Object.assign(weatherDrop, {
  title: 'SP teve alerta severo de chuva forte nesta manhã',
  detail: 'Defesa Civil alertou por volta de 8h10 para chuva intensa nas zonas norte e central, com raios, vento forte e possibilidade de granizo; a tendência é de redução da instabilidade ao longo do dia.',
});

Object.assign(dailyContent.politica, {
  title: 'Eleições 2026: faltam nove horas para o prazo legal de registro terminar',
  summary: 'Às 10h deste sábado, partidos, federações e coligações ainda têm até as 19h para transmitir os pedidos de registro. O marco das 19h fecha o protocolo, não o julgamento: a Justiça Eleitoral seguirá analisando documentação, condições de elegibilidade, eventuais impugnações e diligências.',
  shareSummary: 'Política 10h: o prazo de registro termina hoje às 19h. Pedido protocolado não é sinônimo de candidatura deferida. O DivulgaCandContas é a referência pública para acompanhar os pedidos e seus status; a propaganda eleitoral geral começa amanhã, 16/08.',
  readTime: '7 MIN READ',
  badge: 'POLÍTICA / 10H UPDATE',
  stats: [
    { label: 'AGORA', value: '10H' },
    { label: 'PRAZO', value: '19H' },
    { label: 'DEPOIS', value: 'ANÁLISE JUDICIAL' },
  ],
  sections: [
    {
      title: 'O que realmente encerra às 19h',
      paragraphs: ['Encerra-se o prazo para partidos, federações e coligações requererem os registros. Para presidente e vice, o pedido é apresentado ao TSE; para governador, vice, senador e deputados, aos TREs. Em 2026, o CANDex funciona integralmente on-line.'],
    },
    {
      title: 'Protocolo não é deferimento',
      paragraphs: ['O nome aparecer no sistema de divulgação indica que houve pedido de registro, não que a Justiça Eleitoral já julgou definitivamente a candidatura. O acompanhamento correto deve mostrar o status processual e a data da consulta.'],
      bullets: ['pedido apresentado', 'análise documental e de elegibilidade', 'possíveis impugnações e diligências', 'julgamento e eventual recurso'],
    },
    {
      title: 'A virada de amanhã',
      paragraphs: ['A propaganda eleitoral geral passa a ser permitida em 16 de agosto, inclusive na internet. A partir daí aumenta o volume de anúncios, impulsionamento, cortes e mensagens políticas; fonte, autoria, contexto e data passam a ser ainda mais importantes.'],
    },
  ],
  sources: [
    { label: 'TSE · Calendário Eleitoral 2026', url: 'https://www.tse.jus.br/eleicoes/calendario-eleitoral/calendario-eleitoral' },
    { label: 'TSE · Registro de candidaturas', url: 'https://www.tse.jus.br/comunicacao/noticias/2026/Junho/por-dentro-das-eleicoes-saiba-como-funciona-o-registro-de-candidaturas' },
    { label: 'TSE · DivulgaCandContas', url: 'https://www.tse.jus.br/administracao/painel/divulgacao-de-candidaturas-e-contas-eleitorais' },
  ],
});

Object.assign(dailyContent.tempo, {
  title: 'São Paulo teve alerta severo de chuva forte nesta manhã; instabilidade deve perder força depois',
  summary: 'A Defesa Civil do Estado enviou por volta de 8h10 um alerta severo para chuva forte nas zonas norte e central da capital, com raios, vento forte e possibilidade de granizo. A cidade chegou a entrar em estado de atenção para alagamentos; a tendência para o restante do sábado é de redução gradual da nebulosidade e máxima próxima de 25°C.',
  shareSummary: 'Tempo 10h em SP: houve alerta severo de chuva forte nesta manhã, com raios, vento e possibilidade de granizo nas zonas norte e central. A instabilidade tende a diminuir ao longo do dia; domingo começa uma sequência mais quente e seca.',
  readTime: '6 MIN READ',
  badge: 'TEMPO / ALERTA 10H',
  stats: [
    { label: 'ALERTA', value: '~08H10' },
    { label: 'RISCO', value: 'RAIOS + VENTO + GRANIZO' },
    { label: 'MÁXIMA', value: '~25°C' },
  ],
  sections: [
    {
      title: 'O que mudou desde a edição-base',
      paragraphs: ['A previsão de manhã nublada virou ocorrência concreta de chuva forte. O alerta severo foi disparado para partes da capital, e o CGE registrou estado de atenção para alagamentos durante a manhã.'],
    },
    {
      title: 'Como agir durante uma célula forte',
      bullets: ['Evite áreas abertas, árvores isoladas e estruturas metálicas durante raios.', 'Não atravesse rua ou avenida alagada a pé ou de carro.', 'Se estiver dirigindo, reduza velocidade e aumente distância do veículo da frente.', 'Em caso de granizo, procure cobertura estrutural segura; não pare sob árvores.'],
    },
    {
      title: 'O que vem depois',
      paragraphs: ['A tendência é de melhora gradual ainda hoje. No domingo o sol ganha espaço e a temperatura sobe; para o começo da semana, o cuidado muda de chuva para calor, hidratação e baixa umidade.'],
    },
  ],
  sources: [
    { label: 'Defesa Civil/CGE · alerta de 15/08/2026', url: 'https://noticias.uol.com.br/cotidiano/ultimas-noticias/2026/08/15/alerta-chuva-sao-paulo.ghtm' },
    { label: 'CGE · Prefeitura de São Paulo', url: 'https://cge.prefeitura.sp.gov.br/' },
  ],
});
