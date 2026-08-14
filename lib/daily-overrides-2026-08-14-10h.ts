import { dailyContent, todayDrops } from './daily-content';

function patchDrop(slug: string, title: string, detail: string) {
  const item = todayDrops.find((drop) => drop.slug === slug);
  if (item) Object.assign(item, { title, detail });
}

Object.assign(dailyContent.hoje, {
  title: '14 de agosto · atualização das 10h',
  summary: 'A varredura da manhã trouxe mudanças materiais em Brasil, política, mundo, mercados, tecnologia e segurança. As leituras evergreen da edição-base continuam quando não houve fato novo melhor que justificasse substituí-las.',
  readTime: '10H UPDATE',
  badge: '10H INTELLIGENCE UPDATE',
});

patchDrop('brasil', 'Brasil abre processo de reciprocidade após novas tarifas dos EUA', 'O passo inicial abre consultas e avaliação de contramedidas; não significa que uma retaliação específica já tenha sido aplicada.');
Object.assign(dailyContent.brasil, {
  title: 'Tarifas dos EUA: Brasil abre processo de reciprocidade, mas contramedidas ainda não estão decididas',
  summary: 'O governo brasileiro iniciou o processo previsto na Lei da Reciprocidade Econômica após novas tarifas dos Estados Unidos. Nesta etapa há consultas diplomáticas e avaliação de respostas possíveis; é importante separar a abertura formal do processo de uma retaliação já aplicada.',
  shareSummary: 'Atualização Brasil: foi aberto o processo de reciprocidade contra tarifas dos EUA. Isso inicia consultas e avaliação de medidas; não significa que tarifas, restrições ou suspensão de direitos já tenham sido adotadas.',
  readTime: '8 MIN READ',
  badge: '10H / BRASIL',
  stats: [
    { label: 'STATUS', value: 'PROCESSO ABERTO' },
    { label: 'ETAPA', value: 'CONSULTAS' },
    { label: 'CONTRAMEDIDA', value: 'NÃO DEFINIDA' },
  ],
  sections: [
    { title: 'O que aconteceu', paragraphs: ['O Brasil iniciou o mecanismo de reciprocidade em resposta às tarifas americanas. O movimento cria base institucional para consultas e eventual resposta proporcional, mas ainda existe distância entre iniciar o procedimento e escolher uma contramedida concreta.'] },
    { title: 'Por que isso importa no dia a dia', paragraphs: ['Tarifas podem alterar competitividade, câmbio, custos de insumos e decisões de exportadores. Uma resposta brasileira mal calibrada também pode encarecer cadeias locais; por isso negociação e desenho das exceções importam tanto quanto a alíquota de manchete.'] },
    { title: 'Como ler as próximas notícias', bullets: ['Separe consulta diplomática de medida efetivamente aplicada.', 'Observe quais produtos entram no escopo.', 'Procure impacto em cadeias que dependem de insumos importados.', 'Desconfie de manchetes que tratem opções em estudo como decisão final.'] },
  ],
  sources: [{ label: 'Reuters · Brasil abre processo de reciprocidade · 13/08/2026', url: 'https://www.reuters.com/world/americas/brazil-opens-reciprocity-process-against-us-over-tariffs-2026-08-13/' }],
});

patchDrop('politica', 'Registro de candidaturas entra nas últimas 33 horas', 'O prazo termina sábado, 15/08, às 19h; no domingo, 16/08, começa a propaganda eleitoral geral, inclusive na internet.');
Object.assign(dailyContent.politica, {
  title: 'Da convenção para a Justiça Eleitoral: o registro fecha amanhã e a campanha começa domingo',
  summary: 'Partidos, federações e coligações têm até 19h de 15 de agosto para transmitir os pedidos de registro. Em 2026 o CANDex passou a operar integralmente on-line. A partir de 16 de agosto é permitida a propaganda eleitoral geral, inclusive na internet.',
  shareSummary: 'Eleições 2026: registros fecham amanhã, 15/08, às 19h. No domingo, 16/08, começa a propaganda eleitoral geral. Pedido de registro ainda não é sinônimo de candidatura deferida: a Justiça Eleitoral analisa documentação e elegibilidade.',
  readTime: '7 MIN READ',
  badge: '10H / ELEIÇÕES 2026',
  stats: [{ label: 'REGISTRO', value: '15 AGO · 19H' }, { label: 'PROPAGANDA', value: '16 AGO' }, { label: 'CANDEX 2026', value: '100% ONLINE' }],
  sections: [
    { title: 'O relógio eleitoral', paragraphs: ['O prazo legal para requerer registro termina às 19h de sábado. O TSE modernizou o CANDex em 2026 para operação integralmente pela internet.'] },
    { title: 'Registro não é deferimento', paragraphs: ['Depois do protocolo, a Justiça Eleitoral verifica documentação, requisitos e condições de elegibilidade. Por isso o tracker deve distinguir escolhido em convenção, pedido apresentado e registro julgado.'] },
    { title: 'O que muda domingo', paragraphs: ['Em 16 de agosto começa a propaganda eleitoral geral nas ruas e na internet, dentro das regras eleitorais. Esse marco tende a aumentar muito o volume de conteúdo político circulando nas redes.'] },
  ],
  sources: [
    { label: 'TSE · Calendário Eleitoral 2026', url: 'https://www.tse.jus.br/eleicoes/calendario-eleitoral/calendario-eleitoral' },
    { label: 'TSE · CANDex 2026', url: 'https://www.tse.jus.br/comunicacao/noticias/2026/Julho/saiba-como-registrar-atas-e-candidaturas-no-novo-sistema-da-justica-eleitoral' },
  ],
});

patchDrop('mundo', 'Hormuz quase para após novos ataques a navios', 'Brent ganhou cerca de 1% nesta manhã; o risco geopolítico voltou a competir com os sinais de demanda mais fraca.');
Object.assign(dailyContent.mundo, {
  title: 'Hormuz volta ao centro do risco: novos ataques a navios mantêm petróleo e transporte sob pressão',
  summary: 'Nesta manhã, a Reuters informou que o trânsito pelo Estreito de Hormuz parecia caminhar para quase uma paralisação após novos ataques a dois navios. O Brent subia cerca de 1%, apesar dos sinais de inflação mais benigna e de demanda de petróleo menos forte.',
  shareSummary: 'Atualização Mundo: novos ataques a navios deixaram o trânsito em Hormuz próximo de uma paralisação, segundo a Reuters. Brent subiu cerca de 1%. O ponto importante é a disputa entre risco de oferta e demanda mais fraca.',
  readTime: '8 MIN READ',
  badge: '10H / GEOPOLÍTICA',
  stats: [{ label: 'BRENT', value: '~US$ 87' }, { label: 'SEMANA', value: '+6%', note: 'aprox. na manhã de 14/08' }, { label: 'HORMUZ', value: 'TRÂNSITO MUITO REDUZIDO' }],
  sections: [
    { title: 'O fato novo', paragraphs: ['Dois novos ataques a navios elevaram novamente o risco no corredor marítimo. O mercado reage não apenas ao petróleo que deixa de passar, mas ao risco de seguro, atraso, desvio de rota e incerteza sobre a duração do bloqueio.'] },
    { title: 'Por que o barril não dispara sem limite', paragraphs: ['Ao mesmo tempo, estoques elevados e projeções de demanda mais fraca funcionam como contrapeso. Preço é o resultado dessa disputa entre risco físico de oferta e expectativa de consumo.'] },
    { title: 'O que acompanhar', bullets: ['Fluxo efetivo de navios, não apenas declarações políticas.', 'Prêmios de seguro marítimo.', 'Exportações alternativas fora de Hormuz.', 'Gasolina, diesel e gás natural, que podem reagir de forma diferente do Brent.'] },
  ],
  sources: [{ label: 'Reuters · Wall Street e petróleo · 14/08/2026', url: 'https://www.reuters.com/business/wall-st-futures-muted-higher-oil-prices-temper-risk-appetite-after-sp-record-2026-08-14/' }],
});

patchDrop('financas', 'Mercado reduz aposta de alta do Fed, mas petróleo impede relaxamento total', 'Inflação americana mais branda sustenta ações perto de recordes; energia e geopolítica continuam como risco para o cenário.');
Object.assign(dailyContent.financas, {
  title: 'Mercado perto de recordes: inflação mais fria ajuda, petróleo lembra que o cenário ainda pode mudar',
  summary: 'Ações globais negociavam perto de recordes após dados de inflação dos EUA reduzirem as apostas em uma alta imediata do Fed. Ao mesmo tempo, Brent caminhava para ganho semanal de cerca de 6%, mostrando como energia pode reabrir pressão inflacionária.',
  shareSummary: 'Finanças 10h: inflação americana mais branda reduziu a expectativa de alta imediata do Fed e ajudou bolsas. Mas o Brent caminha para forte ganho semanal. Mercado precifica probabilidades; não é confirmação da próxima decisão do Fed.',
  readTime: '7 MIN READ',
  badge: '10H / MERCADOS',
  stats: [{ label: 'AÇÕES GLOBAIS', value: 'PERTO DE RECORDES' }, { label: 'BRENT / SEMANA', value: '~+6%' }, { label: 'FED', value: 'MENOS PRESSÃO', note: 'não é decisão confirmada' }],
  sections: [
    { title: 'Duas forças opostas', paragraphs: ['Inflação mais benigna reduz a necessidade percebida de aperto monetário; petróleo mais caro pode fazer o caminho inverso se contaminar combustíveis, frete e expectativas.'] },
    { title: 'A lição prática', paragraphs: ['Não transforme um dia de mercado em tese permanente. Juros longos, inflação implícita, energia e atividade podem contar histórias diferentes ao mesmo tempo.'] },
  ],
  sources: [{ label: 'Reuters · Global Markets · 14/08/2026', url: 'https://www.reuters.com/world/china/global-markets-wrapup-1-2026-08-14/' }],
  disclaimer: 'Conteúdo educacional, não recomendação individual de investimento.',
});

patchDrop('tecnologia', 'A infraestrutura da IA está premiando empresas diferentes — e punindo outras', 'Resultados fortes mantêm o tema de IA sustentando mercados, mas rede, memória, storage e semicondutores não capturam valor da mesma forma.');
Object.assign(dailyContent.tecnologia, {
  title: 'IA deixou de ser uma única aposta: compute, memória, rede e storage já contam histórias diferentes',
  summary: 'Os mercados continuam reagindo positivamente a resultados ligados à IA, mas o desempenho divergente entre fornecedores mostra uma fase mais madura: investidores estão separando capacidade de capturar receita de simples exposição ao tema.',
  shareSummary: 'Tecnologia 10h: “IA” já não é uma categoria única para o mercado. GPU, memória, storage, rede, óptica, energia e software têm gargalos, margens e ciclos diferentes. A pergunta deixou de ser “tem IA?” e virou “onde captura valor?”.',
  readTime: '8 MIN READ',
  badge: '10H / AI INFRA',
  sections: [
    { title: 'Da narrativa para a economia unitária', paragraphs: ['Construir clusters de IA exige uma pilha física completa. Um gargalo em memória, interconexão ou energia pode limitar GPUs caras; ao mesmo tempo, excesso de capacidade em outra camada pode pressionar margens.'] },
    { title: 'Como analisar uma empresa de infraestrutura', bullets: ['Qual componente ela fornece?', 'Esse componente é gargalo ou commodity?', 'Receita cresce com capex de hyperscalers?', 'Há concentração em poucos clientes?', 'Margem acompanha o crescimento ou é sacrificada para ganhar volume?'] },
  ],
  sources: [{ label: 'Reuters · Global markets e AI earnings · 14/08/2026', url: 'https://www.reuters.com/world/china/global-markets-wrapup-1-2026-08-14/' }],
});

patchDrop('seguranca', 'Cyber 10h: priorização precisa olhar exploração real, não apenas severidade', 'CISA reforça que vulnerabilidades exploradas e internet-facing merecem prioridade mesmo quando o CVSS não é o maior da fila.');
Object.assign(dailyContent.seguranca, {
  title: 'O patch mais urgente nem sempre é o CVSS 10: exploração real muda a fila de defesa',
  summary: 'A estratégia de Known Exploited Vulnerabilities da CISA existe porque severidade teórica e risco operacional não são sinônimos. Uma falha explorada, exposta à internet e presente em um ativo crítico pode ultrapassar um Critical sem evidência de exploração.',
  shareSummary: 'Cyber 10h: CVSS não deve ordenar sozinho a fila de patch. Exploração conhecida, exposição, criticidade, privilégio obtido e blast radius transformam severidade técnica em risco operacional.',
  readTime: '9 MIN READ',
  badge: '10H / VULN MANAGEMENT',
  sections: [
    { title: 'O problema da fila por cor', paragraphs: ['CVSS descreve características técnicas da vulnerabilidade. Ele não sabe se o seu ativo está exposto, se há exploração ativa, se a função é crítica ou se o atacante consegue encadear a falha com outra condição.'] },
    { title: 'Uma fila melhor', bullets: ['Known exploited / KEV.', 'Internet-facing ou caminho acessível.', 'Privilégio e capacidade obtidos.', 'Criticidade do ativo.', 'Reachability e controles compensatórios.', 'Blast radius e possibilidade de movimento lateral.'] },
  ],
  sources: [{ label: 'CISA · Known Exploited Vulnerabilities strategy', url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog' }],
});

patchDrop('appsec-ssdlc', 'AppSec 10h: transforme KEV + reachability + exposição em prioridade de gate', 'O gate fica mais confiável quando separa severidade do scanner de urgência operacional e registra a justificativa da decisão.');
Object.assign(dailyContent['appsec-ssdlc'], {
  title: 'Do finding ao gate: um modelo de prioridade que não confunde CVSS com risco',
  summary: 'A atualização conecta o princípio da CISA ao SSDLC: findings devem ser enriquecidos com exploração conhecida, reachability, exposição, criticidade e blast radius antes da decisão de bloquear. Isso evita tanto liberar risco real quanto bloquear produção por um Critical inalcançável.',
  shareSummary: 'AppSec 10h: severity é entrada, não decisão. Um gate maduro combina CVSS + KEV/exploração + reachability + exposição + criticidade + blast radius + mitigação e registra por que bloqueou ou aceitou.',
  readTime: '10 MIN READ',
  badge: '10H / RISK-BASED GATE',
  sections: [
    { title: 'Pipeline de decisão', bullets: ['Normalizar finding e identidade do componente.', 'Checar exploração conhecida/KEV.', 'Determinar reachability.', 'Cruzar exposição do serviço.', 'Aplicar criticidade e blast radius.', 'Verificar fix/workaround.', 'Decidir gate e registrar evidência.'] },
    { title: 'Por que isso melhora confiança', paragraphs: ['A decisão deixa de ser “scanner disse High” e passa a ser reproduzível. Dois times olhando a mesma evidência conseguem entender por que um item bloqueou e outro entrou em SLA.'] },
    { title: 'Métrica que vale acompanhar', paragraphs: ['Além de findings por severidade, acompanhe tempo para remediar KEVs alcançáveis, percentual de ativos internet-facing com inventário completo e quantidade de exceções de gate sem evidência de compensação.'] },
  ],
  sources: [{ label: 'CISA · Known Exploited Vulnerabilities Catalog', url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog' }],
});
