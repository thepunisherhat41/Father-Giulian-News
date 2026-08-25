import { dailyContent, todayDrops } from './daily-content';

const set = (slug: string, data: any) => Object.assign(dailyContent[slug], data);
const updateDrop = (slug: string, patch: Record<string, string>) => {
  const drop = todayDrops.find((item) => item.slug === slug);
  if (drop) Object.assign(drop, patch);
};

set('politica', {
  title: 'Radar eleitoral: nova pesquisa e sabatina presidencial hoje às 21h05',
  summary: 'A pesquisa BTG/Nexus divulgada em 25/08 mostra Lula com 41% e Flávio Bolsonaro com 37% no primeiro turno, diferença dentro da margem de erro de dois pontos. À noite, Ronaldo Caiado participa da série de entrevistas da Globo às 21h05. Pesquisa, agenda anunciada e presença confirmada são informações diferentes e devem ser lidas separadamente.',
  shareSummary: 'Política 25/08 · 10h: BTG/Nexus mostra Lula 41% e Flávio Bolsonaro 37%, dentro da margem de erro de 2 pontos. Ronaldo Caiado tem entrevista anunciada pela Globo hoje às 21h05. Pesquisa não é previsão de resultado e agenda anunciada não equivale a decisão eleitoral.',
  readTime: '6 MIN',
  badge: 'POLÍTICA · RADAR 25/08 · 10H',
  sections: [
    { title: 'Pesquisa divulgada hoje', bullets: ['BTG/Nexus: Lula 41%, Flávio Bolsonaro 37%, Ronaldo Caiado 5%, Renan Santos e Romeu Zema 3% cada.', 'A pesquisa ouviu 2.006 eleitores por telefone entre 21 e 23/08, tem margem de erro de 2 pontos percentuais e registro BR-09028/2026 no TSE.', 'Em eventual segundo turno Lula e Flávio aparecem tecnicamente empatados, 46% a 45%.'] },
    { title: 'Agenda confirmada para hoje', paragraphs: ['A TV Globo programou entrevista com Ronaldo Caiado nesta terça-feira, 25/08, às 21h05, após o Jornal Nacional, com transmissão também na GloboNews e no g1. Isso é agenda de entrevista confirmada pela emissora; não deve ser confundida com participação em debate futuro ou apoio político.'] },
    { title: 'Próximos marcos', bullets: ['26/08: entrevista anunciada com Renan Santos.', '27/08: entrevista anunciada com Lula.', '28/08: início do horário eleitoral gratuito de rádio e TV, conforme calendário operacional divulgado pelo TSE.'] },
    { title: 'O que não concluir', paragraphs: ['Pesquisa mede intenção de voto no período em que foi realizada; não prevê o resultado final. Entrevista ou debate não altera automaticamente intenção de voto. Presença anunciada deve ser revalidada no dia porque grade e participação podem mudar.'] },
    { title: 'O que acompanhar', bullets: ['Confirmação final da entrevista de hoje e eventual alteração de horário.', 'Novas pesquisas registradas no TSE.', 'Próximos debates e sabatinas com presença efetivamente confirmada.', 'Resolução e operação do horário eleitoral gratuito.'] },
  ],
  sources: [
    { label: 'UOL · BTG/Nexus · 25/08/2026', url: 'https://noticias.uol.com.br/eleicoes/2026/08/24/pesquisa-presidente-2026-atualizada-veja-numeros-do-ultimo-levantamento.ghtm' },
    { label: 'Globo/RPC · programação eleitoral · 25/08/2026', url: 'https://redeglobo.globo.com/rpc/noticia/rpc-tera-mudancas-na-programacao-durante-eleicoes-2026.ghtml' },
    { label: 'TSE · Pool de Mídia Eleições 2026', url: 'https://www.tse.jus.br/comunicacao/noticias/2026/Agosto/pool-de-midia-das-eleicoes-2026-comeca-a-funcionar-nesta-segunda-feira-24' },
  ],
});

set('games', {
  title: 'gamescom Opening Night Live acontece hoje às 13h no horário de São Paulo',
  summary: 'A abertura oficial da gamescom 2026 ocorre nesta terça-feira, 25/08, das 18h às 20h em Colônia (CEST), equivalente a 13h–15h em São Paulo. A organização promete estreias mundiais, trailers e anúncios; títulos mostrados só devem entrar como confirmados depois de apresentados oficialmente.',
  shareSummary: 'Games 25/08 · 10h: Opening Night Live da gamescom acontece hoje às 13h no horário de São Paulo. Antes da transmissão, trate listas de jogos como agenda/expectativa; só marque anúncio como CONFIRMADO depois de aparecer na apresentação ou em canal oficial.',
  readTime: '4 MIN',
  badge: 'GAMES · AO VIVO HOJE',
  sections: [
    { title: 'Horário confirmado', bullets: ['Opening Night Live: 25/08, 18h–20h em Colônia (CEST).', 'Conversão para São Paulo: 13h–15h (BRT).', 'A feira principal acontece de 26 a 30 de agosto.'] },
    { title: 'Como ler os anúncios', paragraphs: ['Antes da apresentação, teasers, rumores e listas de expectativa não devem ser tratados como anúncio oficial. Depois do palco, trailers e páginas de publishers passam a ser a referência primária para marcar algo como confirmado.'] },
    { title: 'O que acompanhar', bullets: ['World premieres e trailers exibidos no palco.', 'Datas/plataformas anunciadas oficialmente.', 'Mudanças de janela de lançamento.', 'Confirmações posteriores dos próprios estúdios e publishers.'] },
  ],
  sources: [
    { label: 'gamescom · programação oficial · 25/08/2026', url: 'https://www.gamescom.global/en/exhibitor/gamescom?activeTab=events' },
    { label: 'gamescom · site oficial 2026', url: 'https://www.gamescom.global/' },
  ],
});

updateDrop('politica', { title: 'Pesquisa nova + Caiado na Globo hoje às 21h05', detail: 'Radar separa intenção de voto, agenda confirmada e próximos marcos do TSE.' });
updateDrop('games', { title: 'Opening Night Live hoje às 13h em São Paulo', detail: 'gamescom abre com trailers e anúncios; só entra como confirmado o que aparecer em fonte oficial.' });
