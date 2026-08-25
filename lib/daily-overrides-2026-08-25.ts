import { dailyContent, edition, todayDrops } from './daily-content';
import { politicsTracker } from './politics-2026';

const set = (slug: string, data: any) => Object.assign(dailyContent[slug], data);
const updateDrop = (slug: string, patch: Record<string, string>) => {
  const drop = todayDrops.find((item) => item.slug === slug);
  if (drop) Object.assign(drop, patch);
};

Object.assign(edition, {
  date: '25/08/2026',
  dateLabel: '25 AGO 2026',
  title: 'Daily Intelligence · 25 de agosto',
});

Object.assign(politicsTracker, {
  updatedAt: '25/08/2026 · madrugada',
  notice: 'Radar vivo: agenda e participação são estados diferentes. Entrevista marcada, convite para debate e presença confirmada não são tratados como sinônimos; mudanças devem ser incorporadas assim que houver confirmação confiável.',
});

set('hoje', {
  title: 'Father Giulian News · edição de 25 de agosto',
  summary: 'Feed em Reels com atualização seletiva: notícia só entra quando existe fato, agenda material ou dado realmente válido para 25/08; conteúdos de descoberta continuam variando diariamente.',
  shareSummary: '25/08: edição diária em Reels, sem reciclar notícia antiga como se fosse nova.',
  readTime: 'REELS DO DIA',
  badge: 'EDIÇÃO · 25/08',
  sections: [],
});

set('politica', {
  title: 'Radar eleitoral de hoje: Caiado tem sabatina na Globo e TSE cumpre marco do calendário',
  summary: 'Ronaldo Caiado está na programação da série de entrevistas presidenciais da Globo nesta terça-feira. Separadamente, 25 de agosto é prazo oficial do TSE para indicações à Comissão Especial de Transporte. O próximo grande debate presidencial anunciado segue marcado para 14 de setembro; convite não equivale a presença garantida.',
  shareSummary: 'Política 25/08: Ronaldo Caiado está na agenda da sabatina da Globo; o TSE tem marco oficial do calendário eleitoral nesta terça. O debate de 14/09 permanece anunciado, mas participação de candidato deve ser revalidada perto da data.',
  readTime: '5 MIN',
  badge: 'POLÍTICA · RADAR 25/08',
  sections: [
    { title: 'Agenda de hoje', bullets: ['Ronaldo Caiado (PSD) está programado para a entrevista presidencial da Globo nesta terça-feira (25), após o Jornal Nacional.', 'A transmissão foi anunciada para TV Globo, GloboNews e g1; a programação da rede indica 21h05, horário de Brasília.', 'Agenda anunciada é diferente de comparecimento consumado: o Reel deve ser atualizado se houver mudança, cancelamento ou confirmação adicional ao longo do dia.'] },
    { title: 'Calendário oficial do TSE', paragraphs: ['O calendário eleitoral fixa 25 de agosto como último dia para partidos e federações indicarem aos juízos eleitorais até três pessoas por agremiação para compor a Comissão Especial de Transporte para o primeiro e eventual segundo turno.'] },
    { title: 'Próximos debates', bullets: ['14/09 · 22h — debate do pool Momento da Decisão, com transmissão nas plataformas dos veículos participantes.', 'A lista divulgada pelos organizadores representa candidatos convidados/anunciados; não deve ser tratada como garantia de presença até revalidação mais próxima da transmissão.', 'Horário eleitoral gratuito no rádio e TV começa em 28/08, segundo o calendário oficial do TSE.'] },
    { title: 'Pesquisas', paragraphs: ['Até esta atualização da madrugada, não foi incorporada nova pesquisa presidencial publicada em 25/08. O levantamento Nexus divulgado em 24/08 permanece contexto histórico e não é reapresentado como pesquisa de hoje.'] },
  ],
  sources: [
    { label: 'Globo/g1 · agenda de entrevistas · 25/08/2026', url: 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/08/24/globo-faz-serie-de-entrevistas-com-candidatos-a-presidencia-veja-datas-e-como-assistir.ghtml' },
    { label: 'TSE · calendário eleitoral · marco de 25/08/2026', url: 'https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-760-de-2-de-marco-de-2026' },
    { label: 'CNN Brasil · debate anunciado para 14/09/2026', url: 'https://www.cnnbrasil.com.br/eleicoes/momento-da-decisao-lula-e-flavio-estarao-lado-a-lado-em-debate-saiba-mais/' },
  ],
});

set('tempo', {
  title: 'São Paulo começa a terça com muitas nuvens; máxima prevista é de 21°C',
  summary: 'A previsão estendida do CGE para 25/08 indica mínima de 14°C, máxima de 21°C, chuvisco na madrugada, manhã encoberta e tarde/noite nubladas. A tendência é de elevação lenta da temperatura ao longo do dia.',
  shareSummary: 'Tempo 25/08 em São Paulo: mínima de 14°C, máxima de 21°C, madrugada com possibilidade de chuvisco e bastante nebulosidade ao longo do dia.',
  readTime: '3 MIN',
  badge: 'SP · PREVISÃO 25/08',
  sections: [
    { title: 'Previsão oficial', bullets: ['Mínima: 14°C.', 'Máxima: 21°C.', 'Madrugada: chuvisco possível.', 'Manhã: encoberta.', 'Tarde e noite: nubladas, com baixo potencial para precipitação relevante.'] },
    { title: 'Leitura prática', paragraphs: ['A madrugada segue fria e úmida. A temperatura tende a subir lentamente durante o dia, mas sem retorno rápido de calor forte.'] },
  ],
  sources: [{ label: 'CGE São Paulo · previsão para 25/08/2026', url: 'https://www.cgesp.org/v3/previsao_estendida.jsp' }],
});

set('games', {
  title: 'gamescom Opening Night Live é hoje; feira principal abre amanhã em Colônia',
  summary: 'A gamescom confirma a Opening Night Live para esta terça-feira, 25/08. A feira principal acontece de 26 a 30 de agosto; anúncios exibidos no palco devem ser tratados separadamente de rumor e vazamento.',
  shareSummary: 'Games 25/08: Opening Night Live acontece hoje; a gamescom abre a feira principal de 26 a 30/08 em Colônia.',
  readTime: '4 MIN',
  badge: 'GAMES · AGENDA 25/08',
  sections: [
    { title: 'Calendário oficial', bullets: ['25/08: gamescom Opening Night Live.', '26–30/08: feira principal.', 'gamescom dev segue com programação nesta terça-feira.'] },
    { title: 'Regra editorial', paragraphs: ['Só anúncio exibido ou publicado por fonte oficial entra como confirmado. Teaser, rumor, vazamento ou expectativa de comunidade permanecem identificados como tal.'] },
  ],
  sources: [
    { label: 'gamescom · Opening Night Live · 25/08/2026', url: 'https://www.gamescom.global/en' },
    { label: 'gamescom · imprensa e calendário 2026', url: 'https://www.gamescom.global/en/info/press-and-creator/participation-for-media-representatives' },
  ],
});

set('gravidez', {
  title: '7 semanas + 2 dias: crescimento rápido e atenção à hidratação em dias de mais enjoo',
  summary: 'Nesta fase, o desenvolvimento continua acelerado. Para o dia a dia, o foco permanece em pequenos goles frequentes, porções menores dos alimentos tolerados e descanso; incapacidade persistente de manter líquidos, redução importante da urina, desmaio ou sangramento relevante exigem avaliação médica.',
  shareSummary: 'Gravidez 25/08: 7 semanas + 2 dias. Hidratação fracionada e pequenas porções costumam ser mais toleráveis; sinais de desidratação ou sangramento importante precisam de avaliação.',
  readTime: '6 MIN',
  badge: 'GRAVIDEZ · 7S+2D',
});

set('pai', {
  title: 'Missão de hoje: monte um “kit pós-enjoo” simples e deixe ao alcance',
  summary: 'Água em pequenos goles, algo neutro que seja tolerado, toalha, escova e um lugar confortável já reduzem esforço depois de um episódio de náusea ou vômito. A ideia é facilitar, não pressionar a comer ou beber grandes volumes de uma vez.',
  shareSummary: 'Ser Pai 25/08: deixe um kit pós-enjoo simples pronto e acessível. Cuidado prático reduz esforço sem transformar apoio em cobrança.',
  readTime: '4 MIN',
  badge: 'SER PAI · MISSÃO 25/08',
});

updateDrop('politica', { title: 'Caiado na sabatina; TSE tem marco hoje', detail: 'Agenda eleitoral de 25/08 separa entrevista marcada, calendário oficial e debate ainda sujeito a confirmação de presença.' });
updateDrop('tempo', { title: 'SP: terça nublada e máxima de 21°C', detail: 'CGE prevê mínima de 14°C, chuvisco na madrugada e lenta elevação da temperatura.' });
updateDrop('games', { title: 'Opening Night Live é hoje', detail: 'gamescom confirma o show de abertura em 25/08; feira principal começa amanhã.' });
updateDrop('gravidez', { title: '7 semanas + 2 dias', detail: 'Desenvolvimento acelerado, hidratação fracionada e rotina mais tolerável para o enjoo.' });
updateDrop('pai', { title: 'Missão: kit pós-enjoo', detail: 'Deixar o básico ao alcance reduz esforço e decisões após náusea ou vômito.' });
