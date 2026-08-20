export type LocalEastNewsItem = {
  id: string;
  scope: 'ITAQUERA' | 'ZONA LESTE';
  category: 'SAÚDE' | 'MOBILIDADE' | 'CULTURA' | 'ESPORTE' | 'CIDADE';
  date: string;
  freshness: 'HOJE' | 'RECENTE' | 'CONTEXTO';
  emoji: string;
  title: string;
  summary: string;
  whyItMatters: string;
  source: { label: string; url: string };
};

export const localEastNewsUpdatedAt = '20 AGO 2026 · 17H';

export const localEastNews: LocalEastNewsItem[] = [
  {
    id: 'itaquera-fablab-20ago',
    scope: 'ITAQUERA',
    category: 'CIDADE',
    date: '20 AGO 2026 · 14H–18H',
    freshness: 'HOJE',
    emoji: '💻',
    title: 'Casa da Memória de Itaquera tem atividade prática de eletrônica nesta quinta',
    summary: 'A agenda oficial da Rede FAB LAB LIVRE SP lista para hoje uma oficina prática com Arduino e controle de motores, das 14h às 18h, na Casa da Memória de Itaquera.',
    whyItMatters: 'É formação tecnológica pública dentro do território, com contato prático com eletrônica, prototipagem e automação.',
    source: { label: 'Rede FAB LAB LIVRE SP · agenda oficial', url: 'https://www.fablablivresp.prefeitura.sp.gov.br/busca' },
  },
  {
    id: 'itaquera-libertadores-20ago',
    scope: 'ITAQUERA',
    category: 'ESPORTE',
    date: '20 AGO 2026 · 21H30',
    freshness: 'HOJE',
    emoji: '⚽',
    title: 'Corinthians decide vaga na Libertadores hoje na Neo Química Arena',
    summary: 'A CONMEBOL confirma Corinthians x Rosario Central às 21h30, na Neo Química Arena, pelo jogo de volta das oitavas de final. O confronto chega empatado em 0 a 0 no agregado.',
    whyItMatters: 'É um evento de grande fluxo em Itaquera. Não publicamos interdições ou mudanças de transporte porque não localizamos uma operação específica de 20/08 confirmada pelos canais de CET, SPTrans, Metrô ou CPTM.',
    source: { label: 'CONMEBOL Libertadores · calendário oficial', url: 'https://gol.conmebol.com/libertadores/pt-br/news/corinthians-na-conmebol-libertadores-2026-resultados-elenco-e-calendario' },
  },
  {
    id: 'zl-hiphop-residencia-20ago',
    scope: 'ZONA LESTE',
    category: 'CULTURA',
    date: '20 AGO 2026 · 13H–17H',
    freshness: 'HOJE',
    emoji: '🎨',
    title: 'Casa de Cultura do Hip Hop Leste recebe residência artística hoje',
    summary: 'A agenda oficial SP Mais Cultura registra atividade da residência artística de Marceu Silva nesta quinta-feira, com novas datas previstas nas próximas semanas.',
    whyItMatters: 'É programação cultural pública e recorrente na Zona Leste, ampliando opções locais de formação e produção artística.',
    source: { label: 'SP Mais Cultura · Prefeitura de São Paulo', url: 'https://spmaiscultura.prefeitura.sp.gov.br/evento/1b900dd0-3c74-4116-db1d-08de632b7394' },
  },
  {
    id: 'zl-heliopolis-teatro-15a22ago',
    scope: 'ZONA LESTE',
    category: 'CULTURA',
    date: '15–22 AGO 2026',
    freshness: 'RECENTE',
    emoji: '🎭',
    title: 'Mostra de Teatro de Heliópolis segue até sábado com programação gratuita',
    summary: 'A 7ª Mostra de Teatro de Heliópolis acontece de 15 a 22 de agosto com espetáculos, rodas de conversa, oficinas e feira literária.',
    whyItMatters: 'É uma opção cultural gratuita ainda em andamento e produzida no próprio território da Zona Leste.',
    source: { label: 'Folha de S.Paulo · 14/08/2026', url: 'https://www1.folha.uol.com.br/ilustrada/2026/08/em-setima-edicao-mostra-em-heliopolis-destaca-teatro-epico-e-cultura-popular.shtml' },
  },
  {
    id: 'itaquera-terminal-contexto',
    scope: 'ITAQUERA',
    category: 'MOBILIDADE',
    date: 'AGO 2026 · OBRA EM ANDAMENTO',
    freshness: 'CONTEXTO',
    emoji: '🚌',
    title: 'Novo Terminal Itaquera segue como obra estrutural de mobilidade',
    summary: 'A Prefeitura informa que o novo terminal terá 36 mil m² e integração com a Linha 3-Vermelha do Metrô e a Linha 11-Coral da CPTM.',
    whyItMatters: 'A obra afeta um dos maiores nós de transporte da Zona Leste. Como não é notícia do dia, aparece apenas como contexto de projeto em andamento.',
    source: { label: 'Prefeitura de São Paulo · Mobilidade', url: 'https://coleta.prefeitura.sp.gov.br/web/mobilidade/w/s%C3%A3o-paulo-amplia-mobilidade-urbana-com-mais-de-r-13-bilh%C3%B5es-investidos-em-obras-que-reduzem-o-tempo-de-deslocamento' },
  },
  {
    id: 'zl-brt-aricanduva-contexto',
    scope: 'ZONA LESTE',
    category: 'MOBILIDADE',
    date: 'AGO 2026 · OBRA EM ANDAMENTO',
    freshness: 'CONTEXTO',
    emoji: '🚍',
    title: 'BRT Aricanduva permanece em acompanhamento como obra estrutural',
    summary: 'O projeto prevê 13,6 km de corredor, estações com pagamento antecipado e ciclovia, com estimativa oficial de atendimento a 290 mil passageiros por dia.',
    whyItMatters: 'É uma intervenção de longo prazo que pode mudar integração e tempo de deslocamento no eixo Aricanduva.',
    source: { label: 'Prefeitura de São Paulo · Mobilidade · 03/08/2026', url: 'https://prefeitura.sp.gov.br/web/mobilidade/w/prefeitura-inicia-obras-do-brt-aricanduva-para-transportar-290-mil-passageiros-por-dia-na-zona-leste' },
  },
];
