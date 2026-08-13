import { dailyContent, todayDrops } from './daily-content';

const patchDrop = (slug: string, title: string, detail: string) => {
  const index = todayDrops.findIndex((item) => item.slug === slug);
  if (index >= 0) todayDrops[index] = { ...todayDrops[index], title, detail };
};

Object.assign(dailyContent.hoje, {
  title: 'Edição de 13 de agosto · atualização das 10h',
  summary: 'A edição-base foi revisada com dados divulgados durante a manhã. Brasil ganhou uma atualização fiscal aprovada pelo Congresso; Finanças incorporou o PPI americano e novos dados de emprego; Tecnologia, Cyber e AppSec receberam leituras novas sobre infraestrutura e segurança de IA.',
  readTime: '18 MISSÕES · 10H REFRESH',
  badge: '10H INTELLIGENCE UPDATE',
});

patchDrop('brasil', 'Congresso aprova novos freios para despesas obrigatórias', 'O texto segue para sanção e pode gerar cerca de R$ 10 bilhões em economia em 2027 ao limitar o crescimento de determinadas despesas quando houver déficit projetado.');
patchDrop('financas', 'PPI dos EUA fica estável no mês, mas sobe 4,7% em 12 meses', 'Energia e bens recuaram, serviços avançaram e os pedidos semanais de seguro-desemprego subiram para 209 mil: o Fed recebe sinais mistos.');
patchDrop('tecnologia', 'Cisco projeta US$ 7,5 bi em receita de infraestrutura de IA', 'A corrida da IA também pressiona redes, óptica e interconexão: GPU não escala sozinha.');
patchDrop('seguranca', 'IA acelera pesquisa de vulnerabilidades e operações ofensivas', 'O GTIG descreve uso crescente de IA em pesquisa técnica, reconhecimento e automação, comprimindo o tempo de reação dos defensores.');
patchDrop('appsec-ssdlc', 'Mandiant: exploração pode começar antes de o patch existir', 'A resposta madura combina inventário, redução de exposição, controles compensatórios, hunting e least privilege para agentes de IA.');

Object.assign(dailyContent.brasil, {
  title: 'Congresso aprova mecanismos para conter despesas obrigatórias',
  summary: 'Câmara e Senado aprovaram mecanismos propostos pelo governo para limitar o crescimento de determinadas despesas quando a projeção fiscal indicar déficit primário. O texto segue para sanção. Segundo o governo, o desenho pode gerar cerca de R$ 10 bilhões de economia em 2027.',
  shareSummary: 'O Congresso aprovou novos freios para despesas obrigatórias. Se a projeção fiscal indicar déficit primário, certas despesas criadas por lei ordinária passam a ter crescimento limitado no ano seguinte. O governo estima cerca de R$ 10 bilhões de economia em 2027.',
  readTime: '9 MIN READ',
  badge: 'BRASIL / 10H UPDATE',
  stats: [
    { label: 'ECONOMIA ESTIMADA', value: '~R$ 10 bi', note: 'para 2027, segundo o governo' },
    { label: 'DÉFICIT PROJETADO', value: 'R$ 52 bi', note: 'referência do gatilho' },
    { label: 'STATUS', value: 'SANÇÃO', note: 'aprovado no Congresso' },
  ],
  sections: [
    { title: 'O que mudou', paragraphs: ['O Congresso aprovou mecanismos que desaceleram o crescimento de determinadas despesas obrigatórias quando o cenário fiscal projeta déficit. Não é um corte linear imediato: o efeito aparece no orçamento seguinte, se o gatilho for acionado.'] },
    { title: 'Por que isso importa', paragraphs: ['Quando grande parte do orçamento cresce automaticamente, sobra menos espaço para investimento e outras despesas discricionárias. Regras que limitam esse crescimento tentam recuperar margem de decisão e reduzir pressão sobre a dívida.'] },
    { title: 'O que ainda falta', paragraphs: ['O texto precisa ser sancionado. Depois, a economia real dependerá da execução orçamentária, das projeções de receita e despesa e da aplicação efetiva dos gatilhos. Economia estimada não é economia já realizada.'] },
  ],
  sources: [
    { label: 'Reuters · Congresso aprova freios de gastos · 12/08/2026', url: 'https://www.reuters.com/world/americas/brazil-pushes-spending-curbs-bill-before-congress-debt-concerns-mount-sources-2026-08-12/' },
  ],
});

Object.assign(dailyContent.financas, {
  title: 'PPI americano fica estável em julho: por que 0,0% no mês não significa inflação resolvida',
  summary: 'O índice de preços ao produtor dos EUA ficou estável em julho, mas acumulou alta de 4,7% em 12 meses. Bens caíram 0,7%, energia recuou 3,1% e serviços subiram 0,2%. Ao mesmo tempo, pedidos iniciais de seguro-desemprego subiram para 209 mil.',
  shareSummary: 'O PPI dos EUA ficou em 0,0% no mês, mas ainda está 4,7% acima de um ano atrás. Energia e bens recuaram, serviços subiram e os pedidos semanais de seguro-desemprego foram a 209 mil. Para o Fed, isso é sinal misto — não uma resposta automática sobre juros.',
  readTime: '9 MIN READ',
  badge: 'FINANÇAS / 10H DATA DROP',
  stats: [
    { label: 'PPI JULHO', value: '0,0%', note: 'mês contra mês' },
    { label: 'PPI 12 MESES', value: '4,7%' },
    { label: 'JOBLESS CLAIMS', value: '209 mil', note: '+9 mil na semana' },
  ],
  sections: [
    { title: 'O dado que saiu agora', paragraphs: ['O Bureau of Labor Statistics informou que o índice de preços ao produtor para demanda final ficou estável em julho. Por baixo do número agregado, preços de bens caíram, puxados por energia, enquanto serviços avançaram.'] },
    { title: 'Mensal e anual contam histórias diferentes', paragraphs: ['Um mês estável pode indicar perda de velocidade recente sem apagar os aumentos acumulados. Por isso a taxa de 12 meses ainda está em 4,7%.'] },
    { title: 'Mercado de trabalho também entrou na conta', paragraphs: ['Os pedidos iniciais de seguro-desemprego subiram moderadamente para 209 mil, enquanto os pedidos continuados recuaram. O conjunto sugere desaceleração sem um sinal claro de ruptura.'] },
    { title: 'Como isso pode chegar ao Brasil', paragraphs: ['Expectativas para o Fed mexem com dólar, Treasuries, fluxo para emergentes e custo global de capital. Um Fed menos pressionado a subir juros pode aliviar parte da força do dólar, mas energia e inflação de serviços ainda podem mudar a leitura.'] },
  ],
  sources: [
    { label: 'BLS · Producer Price Index · 13/08/2026', url: 'https://www.bls.gov/news.release/ppi.htm' },
    { label: 'Reuters · Jobless claims · 13/08/2026', url: 'https://www.reuters.com/world/us/us-weekly-jobless-claims-increase-moderately-point-stable-labor-market-2026-08-13/' },
  ],
});

Object.assign(dailyContent.tecnologia, {
  title: 'A corrida da IA também é uma corrida por rede: Cisco projeta US$ 7,5 bilhões em receita ligada à infraestrutura de IA',
  summary: 'Cisco prevê receita fiscal de 2027 acima das expectativas e atribui parte importante do impulso à demanda por infraestrutura de IA. A empresa recebeu US$ 9,3 bilhões em pedidos de infraestrutura de IA de hyperscalers no ano fiscal de 2026.',
  shareSummary: 'IA não escala só com GPU. A Cisco recebeu US$ 9,3 bilhões em pedidos de infraestrutura de IA de hyperscalers no fiscal de 2026 e projeta US$ 7,5 bilhões de receita relacionada em 2027. Rede, óptica e interconexão viraram parte central da corrida.',
  readTime: '8 MIN READ',
  badge: 'TECH / 10H UPDATE',
  stats: [
    { label: 'AI ORDERS FY26', value: 'US$ 9,3 bi' },
    { label: 'AI REVENUE FY27', value: 'US$ 7,5 bi', note: 'projeção Cisco' },
    { label: 'RECEITA FY27', value: 'US$ 72,2–73,4 bi', note: 'guidance' },
  ],
  sections: [
    { title: 'Por que rede virou parte do problema de IA', paragraphs: ['Treinar e servir modelos grandes exige movimentar enormes volumes de dados entre aceleradores, storage e serviços. Se a interconexão vira gargalo, GPUs caras passam tempo esperando dados em vez de computar.'] },
    { title: 'O que muda dentro do data center', paragraphs: ['A demanda cresce por switches, óptica, largura de banda, baixa latência, observabilidade e desenho de fabric. O desempenho do modelo passa a depender também de engenharia de rede.'] },
    { title: 'A conexão menos óbvia', paragraphs: ['Mais hardware também pressiona margens. Crescimento de IA pode significar mais receita sem significar automaticamente mais margem, especialmente quando o mix fica mais intensivo em componentes físicos.'] },
  ],
  sources: [
    { label: 'Reuters · Cisco e infraestrutura de IA · 12/08/2026', url: 'https://www.reuters.com/technology/cisco-forecasts-upbeat-annual-revenue-2026-08-12/' },
  ],
});

Object.assign(dailyContent.seguranca, {
  title: 'IA deixou de ser apenas ferramenta do defensor: GTIG observa uso crescente em pesquisa e operações ofensivas',
  summary: 'O Google Threat Intelligence Group descreve atores de ameaça usando IA para pesquisa técnica, reconhecimento, engenharia social e automação. O ponto central é a redução do custo e do tempo de várias etapas do ataque, não a ideia de que toda intrusão agora seja autônoma.',
  shareSummary: 'GTIG observa uso crescente de IA por atores de ameaça para pesquisa técnica, reconhecimento e automação. A consequência prática é uma janela menor para o defensor reagir a novas vulnerabilidades e campanhas.',
  readTime: '9 MIN READ',
  badge: 'CYBER / AI THREAT UPDATE',
  stats: [
    { label: 'EFEITO', value: 'VELOCIDADE', note: 'mais etapas em menos tempo' },
    { label: 'FOCO', value: 'EXPOSURE', note: 'reduzir superfície ajuda a ganhar tempo' },
    { label: 'DEFESA', value: 'HUNTING + CONTEXT' },
  ],
  sections: [
    { title: 'O que está mudando', paragraphs: ['Modelos generativos estão sendo usados como multiplicadores de força em pesquisa, reconhecimento e produção de conteúdo para campanhas. Isso reduz fricção operacional e pode encurtar o intervalo entre descoberta de uma oportunidade e tentativa de abuso.'] },
    { title: 'O que não mudou', paragraphs: ['Identidade fraca, exposição desnecessária, edge sem monitoramento e credenciais ainda oferecem caminhos muito mais simples que ataques sofisticados. Fundamentos continuam sendo o maior redutor de risco.'] },
    { title: 'O efeito para defesa', bullets: ['Inventário confiável de ativos expostos.', 'Priorização por exploração e alcance.', 'Controles compensatórios rápidos.', 'Logs de edge, cloud e identidade.', 'Hunting retroativo quando houver sinais de exploração pré-patch.'] },
  ],
  sources: [
    { label: 'Google Threat Intelligence · AI Threat Tracker 2026', url: 'https://cloud.google.com/blog/topics/threat-intelligence/ai-vulnerability-exploitation-initial-access/' },
  ],
});

Object.assign(dailyContent['appsec-ssdlc'], {
  title: 'Mandiant: tempo médio até exploração chegou a -7 dias — o que isso muda no Vulnerability Management',
  summary: 'Mandiant usa um número provocador para descrever o cenário atual: mean time-to-exploit de -7 dias, ou seja, em parte dos casos a exploração começa antes de um patch existir. A resposta precisa combinar inventário, redução de exposição, controles compensatórios e hunting.',
  shareSummary: 'Mandiant aponta mean time-to-exploit de -7 dias em seu panorama de 2026: exploração pode começar antes do patch. Para AppSec, isso reforça inventário de exposição, controles compensatórios, hunting retroativo e priorização por caminho de ataque — não apenas SLA por CVSS.',
  readTime: '10 MIN READ',
  badge: 'APPSEC / 10H FIELD NOTE',
  stats: [
    { label: 'MEAN TTE', value: '-7 DIAS', note: 'Mandiant 2026' },
    { label: 'PROBLEMA', value: 'PRE-PATCH' },
    { label: 'RESPOSTA', value: 'CONTEXT + CONTROL' },
  ],
  sections: [
    { title: 'Por que -7 dias muda a conversa', paragraphs: ['Um SLA de correção que começa no dia da divulgação pressupõe que divulgação vem antes de exploração. Quando o ataque começa antes do patch, o programa precisa sobreviver ao intervalo em que não há correção oficial.'] },
    { title: 'O que usar quando ainda não há patch', bullets: ['Reduzir ou remover exposição da interface afetada.', 'Desabilitar função não essencial quando viável.', 'Usar controles de rede e aplicação como barreira temporária.', 'Aumentar telemetria para o vetor relevante.', 'Preparar hunting e resposta caso haja indício de comprometimento.'] },
    { title: 'IA no SDLC também entra no threat model', paragraphs: ['Agentes que leem código, criam branches ou acionam ferramentas devem operar com privilégio mínimo e trilha de auditoria. Separar análise de capacidade de deploy reduz blast radius.'] },
    { title: 'Regra prática para o gate', paragraphs: ['Exploração ativa, exposição real, reachability, privilégio obtido e criticidade do ativo devem pesar junto com severidade técnica. O score é uma entrada; a decisão é contextual.'] },
  ],
  sources: [
    { label: 'Mandiant · AI-Assisted Vulnerability Management · 16/07/2026', url: 'https://cloud.google.com/blog/topics/threat-intelligence/ai-assisted-vulnerability-management/' },
  ],
});
