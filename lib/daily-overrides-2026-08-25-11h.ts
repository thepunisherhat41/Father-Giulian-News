import { dailyContent, todayDrops } from './daily-content';

const set = (slug: string, data: any) => Object.assign(dailyContent[slug], data);
const updateDrop = (slug: string, patch: Record<string, string>) => {
  const drop = todayDrops.find((item) => item.slug === slug);
  if (drop) Object.assign(drop, patch);
};

set('tempo', {
  title: 'São Paulo segue nublada nesta terça; máxima fica entre 20°C e 21°C',
  summary: 'Atualização do CGE às 08h30 de 25/08: a Capital amanheceu encoberta, com vento persistente de sudeste e madrugada perto de 13°C. O dia terá muitas nuvens, curtos períodos de sol e máxima entre 20°C e 21°C; o CGE não prevê chuva para o fim desta terça. A partir de sexta-feira, uma massa de ar quente pode levar as máximas acima de 32°C na Capital e RMSP.',
  shareSummary: 'Tempo 25/08 · atualização 08h30: São Paulo segue com muitas nuvens, curtos períodos de sol e máxima entre 20°C e 21°C. O CGE não prevê chuva para o fim do dia e já sinaliza forte aquecimento a partir de sexta.',
  readTime: '3 MIN',
  badge: 'SP · ATUALIZADO 25/08 · 08H30',
  sections: [
    { title: 'Condição confirmada nesta manhã', bullets: ['Céu encoberto e vento persistente de sudeste.', 'Madrugada com temperatura média próxima de 13°C.', 'Máxima prevista entre 20°C e 21°C.', 'Umidade mínima em torno de 60%.'] },
    { title: 'Chuva hoje', paragraphs: ['Na atualização das 08h30, o CGE informa que o dia deve terminar com nebulosidade variável e sem previsão de chuva. Isso substitui a leitura mais cedo, que ainda admitia chuviscos isolados ao longo do período.'] },
    { title: 'Mudança importante nos próximos dias', paragraphs: ['Os modelos mais recentes do CGE indicam aquecimento forte na segunda metade da semana. Entre sexta-feira (28) e segunda-feira (31), as máximas podem superar 32°C na Capital e na Região Metropolitana.'] },
    { title: 'Quarta-feira', bullets: ['Mínima em torno de 14°C.', 'Máxima próxima de 22°C.', 'Possibilidade de chuva isolada e chuviscos entre o fim da tarde e a noite, com baixo volume.'] },
  ],
  sources: [
    { label: 'CGE São Paulo · 25/08/2026 · 08h30', url: 'https://www.cgesp.org/v3/noticias.jsp?id=55748' },
  ],
});

set('politica', {
  title: 'Radar eleitoral: Caiado tem sabatina hoje e TSE publica novo marco operacional',
  summary: 'Ronaldo Caiado permanece na agenda da série de entrevistas presidenciais da Globo nesta terça-feira. Às 10h, o TSE publicou orientação sobre a Comissão Especial de Transporte para eleitores da zona rural, cujo prazo de indicação pelos partidos termina hoje. Não apareceu pesquisa presidencial nova em 25/08 nesta checagem; a BTG/Nexus de 24/08 permanece apenas como contexto.',
  shareSummary: 'Política 25/08 · 11h: Caiado segue na agenda da sabatina da Globo. O TSE publicou às 10h o marco da Comissão Especial de Transporte. Nenhuma nova pesquisa presidencial de 25/08 foi incorporada; a BTG/Nexus é de 24/08.',
  readTime: '5 MIN',
  badge: 'POLÍTICA · RADAR 25/08 · 11H',
  sections: [
    { title: 'Agenda de hoje', bullets: ['Ronaldo Caiado (PSD) permanece programado para a entrevista presidencial da Globo nesta terça-feira (25), após o Jornal Nacional.', 'A série é transmitida na TV Globo, GloboNews e g1.', 'Agenda publicada não equivale a comparecimento consumado; eventual mudança ou cancelamento deve substituir este estado imediatamente.'] },
    { title: 'TSE · fato novo de hoje', paragraphs: ['O TSE publicou às 10h desta terça que termina hoje o prazo para partidos e federações indicarem aos juízos eleitorais até três pessoas por agremiação para compor a Comissão Especial de Transporte do primeiro e eventual segundo turno.'] },
    { title: 'Pesquisas', paragraphs: ['Nenhum levantamento presidencial novo com divulgação em 25/08 foi incorporado nesta checagem. A BTG/Nexus registrada sob BR-09028/2026 foi divulgada em 24/08 e não deve ser rotulada como pesquisa de hoje.'] },
    { title: 'Próximos marcos', bullets: ['26/08: entrevista anunciada com Renan Santos.', '27/08: entrevista anunciada com Lula.', '28/08: início do horário eleitoral gratuito no rádio e na TV.', 'Debates futuros continuam tratados como agenda anunciada até confirmação de presença mais próxima de cada evento.'] },
  ],
  sources: [
    { label: 'TSE · Comissão Especial de Transporte · 25/08/2026 · 10h', url: 'https://www.tse.jus.br/comunicacao/noticias/2026/Agosto/tse-compoe-comissao-especial-de-transporte-para-eleitores-da-zona-rural' },
    { label: 'UOL · agenda de entrevistas da Globo · 24/08/2026', url: 'https://noticias.uol.com.br/eleicoes/2026/08/24/entrevistas-dos-candidatos-no-jornal-nacional-veja-datas-e-quem-vai-nas-sabatinas.ghtm' },
    { label: 'TSE · Pool de Mídia Eleições 2026 · 24/08/2026', url: 'https://www.tse.jus.br/comunicacao/noticias/2026/Agosto/pool-de-midia-das-eleicoes-2026-comeca-a-funcionar-nesta-segunda-feira-24' },
  ],
});

updateDrop('tempo', { title: 'SP segue nublada; sem chuva no fim do dia', detail: 'CGE atualizou a máxima para 20–21°C e sinaliza forte aquecimento a partir de sexta.' });
updateDrop('politica', { title: 'Caiado segue na agenda; TSE publica marco às 10h', detail: 'Radar de 25/08 separa agenda de sabatina, fato oficial do TSE e pesquisa antiga de 24/08.' });
