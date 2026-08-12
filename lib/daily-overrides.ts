import { dailyContent, edition, todayDrops } from './daily-content';

Object.assign(edition, {
  date: '12/08/2026',
  dateLabel: '12 AGO 2026',
  title: 'Daily Intelligence · 12 de agosto',
});

todayDrops.splice(0, todayDrops.length,
  { slug: 'financas', label: 'Finanças', emoji: '💰', title: 'Inflação volta à faixa da meta, mas o alívio ainda pede cautela', detail: 'IPCA de julho subiu 0,07% e desacelerou para 4,44% em 12 meses; alimentos recuaram, mas energia e cenário externo continuam no radar.' },
  { slug: 'mundo', label: 'Mundo', emoji: '🌍', title: 'Inflação dos EUA desacelera enquanto o petróleo segue pressionado', detail: 'CPI anual ficou em 3,4%; Brent rondou US$ 88–89 com Hormuz ainda sob tensão.' },
  { slug: 'politica', label: 'Política', emoji: '🏛️', title: 'Faltam três dias para fechar o registro das candidaturas', detail: 'O prazo do TSE termina em 15/08 às 19h; depois disso, o tracker eleitoral fica juridicamente muito mais completo.' },
  { slug: 'tecnologia', label: 'Tecnologia', emoji: '💻', title: 'A corrida da IA virou uma corrida por infraestrutura', detail: 'CoreWeave elevou o plano de investimentos para até US$ 39 bilhões e reportou backlog de US$ 104,2 bilhões.' },
  { slug: 'seguranca', label: 'Cyber', emoji: '🛡️', title: 'Função serverless pública pode ser a porta para a cloud inteira', detail: 'Mandiant mostra como LFI, command injection e tokens do metadata service podem transformar uma pequena função exposta em foothold de cloud.' },
  { slug: 'appsec-ssdlc', label: 'AppSec', emoji: '🧬', title: 'Supply chain: o pipeline agora precisa proteger a própria confiança', detail: 'GTIG destaca crescimento dos compromissos de open source e abuso de packages, repositórios, GitHub Actions e segredos de build.' },
  { slug: 'gravidez', label: 'Gravidez', emoji: '🤰', title: 'Semana 5 + 3 dias: desenvolvimento rápido, mesmo sem parecer', detail: 'O estágio embrionário está em plena formação inicial de sistema nervoso, estruturas cardíacas e eixos do corpo.' },
  { slug: 'pai', label: 'Ser Pai', emoji: '👨‍🍼', title: 'Missão de hoje: reduza uma carga antes que ela vire pedido', detail: 'Paternidade ativa também é antecipar tarefas, acompanhar dúvidas do pré-natal e dividir a carga mental da rotina.' },
);

Object.assign(dailyContent.hoje, {
  title: 'Seu briefing de 12 de agosto',
  summary: 'Hoje o fio condutor é confiança: confiança na inflação que desacelera, nas rotas que abastecem o mundo, no software que entra no pipeline e na presença que se constrói dentro de casa.',
  readTime: '8 MISSÕES',
  badge: 'DAILY DROP',
  sections: [],
});

Object.assign(dailyContent.brasil, {
  title: 'Brasil: inflação desacelera e volta à faixa de tolerância da meta',
  summary: 'O IPCA de julho avançou 0,07% e desacelerou para 4,44% em 12 meses. É um sinal melhor do que junho, mas não significa que a inflação esteja resolvida.',
  shareSummary: 'O IPCA de julho subiu 0,07% e a inflação em 12 meses caiu para 4,44%, voltando à faixa de tolerância da meta de 3% ± 1,5 p.p. Alimentos e bebidas recuaram 0,67%, ajudando o índice, enquanto energia e cenário externo ainda exigem cautela.',
  readTime: '6 MIN READ',
  badge: 'BRASIL / ECONOMIA',
  stats: [
    { label: 'IPCA JUL', value: '0,07%', note: 'alta mensal' },
    { label: '12 MESES', value: '4,44%', note: 'dentro da faixa de tolerância' },
    { label: 'ALIMENTOS', value: '-0,67%', note: 'ajudaram a aliviar o índice' },
  ],
  sections: [
    { title: 'O que mudou de junho para julho', paragraphs: ['A inflação anual caiu de 4,64% para 4,44%. Na margem, o IPCA subiu apenas 0,07%, embora tenha ficado um pouco acima da mediana esperada pelo mercado. O destaque favorável foi alimentação e bebidas, que recuou 0,67%.'] },
    { title: 'Por que isso importa para quem vive no Brasil', paragraphs: ['Inflação menor preserva poder de compra e abre espaço para juros caírem ao longo do tempo, mas o Banco Central olha muito além de um único mês. Serviços, mercado de trabalho, câmbio, petróleo e expectativas futuras pesam na decisão.'], bullets: ['Uma leitura boa não garante novos cortes de juros.', 'Queda de alimento pode aliviar o orçamento de casa de forma mais perceptível que outros componentes.', 'Choques externos de energia podem reverter parte do alívio.'] },
    { title: 'A leitura correta', paragraphs: ['Fato: o IPCA voltou à faixa de tolerância. Interpretação: isso melhora o quadro. Não é fato: que a inflação já convergiu à meta de 3% ou que o ciclo de juros seguirá automaticamente no mesmo ritmo.'] },
  ],
  sources: [
    { label: 'Reuters · inflação do Brasil · 11/08/2026', url: 'https://www.reuters.com/world/americas/brazil-inflation-slows-july-returns-central-bank-target-range-2026-08-11/' },
    { label: 'IBGE · calendário IPCA 2026', url: 'https://www.ibge.gov.br/calendario/conjunturais.html' },
  ],
});

Object.assign(dailyContent.politica, {
  title: 'Eleições 2026: a corrida entra na reta final do registro',
  summary: 'Partidos, federações e coligações têm até 15 de agosto, às 19h, para solicitar os registros. Até lá, convenção partidária e candidatura juridicamente registrada não são exatamente a mesma coisa.',
  shareSummary: 'O prazo para registro das candidaturas de 2026 termina em 15/08 às 19h. Até o fechamento, alguns nomes podem estar oficializados em convenção, mas ainda aguardando pedido ou análise da Justiça Eleitoral. Depois do dia 15, o tracker fica muito mais confiável para comparar os nomes por cargo.',
  readTime: '5 MIN READ',
  badge: 'POLÍTICA / ELECTION WATCH',
  stats: [
    { label: 'REGISTRO', value: '15 AGO', note: 'até 19h' },
    { label: 'PROPAGANDA', value: '16 AGO', note: 'início da propaganda geral' },
    { label: 'SP', value: '5 CARGOS', note: 'presidente, governador, 2 senadores, dep. federal e estadual' },
  ],
  sections: [
    { title: 'Convenção não é o fim do processo', paragraphs: ['A convenção partidária escolhe os nomes. Depois vem o pedido formal de registro e a análise da Justiça Eleitoral. Por isso, um tracker responsável precisa deixar claro em qual etapa cada nome está.'] },
    { title: 'O que observar nos próximos dias', bullets: ['Pedidos de registro efetivamente protocolados.', 'Composição final das chapas e vices.', 'Situação jurídica de cada candidatura.', 'No caso de São Paulo, os nomes ao Governo e às duas vagas do Senado.'] },
    { title: 'Como avaliar trabalho anterior', paragraphs: ['No fim de cada perfil, o hub continuará priorizando trajetória verificável: cargos exercidos, mandatos, funções de gestão, votações ou entregas documentadas. Promessa de campanha será mostrada como promessa, não como realização.'] },
  ],
  sources: [
    { label: 'TSE · Registro de candidatos', url: 'https://www.tse.jus.br/eleicoes/historia/processo-eleitoral-brasileiro/candidaturas/registro-de-candidatos' },
    { label: 'TSE · Calendário Eleitoral 2026', url: 'https://www.tse.jus.br/eleicoes/calendario-eleitoral/calendario-eleitoral' },
  ],
});

Object.assign(dailyContent.mundo, {
  title: 'EUA entregam inflação mais comportada, mas petróleo ainda testa o cenário',
  summary: 'O CPI americano subiu 0,1% em julho e desacelerou para 3,4% em 12 meses. Ao mesmo tempo, petróleo segue elevado porque a crise em Hormuz continua restringindo a leitura de risco energético.',
  shareSummary: 'A inflação dos EUA veio em linha com o esperado: +0,1% no mês e 3,4% em 12 meses. Isso reduz um pouco a pressão sobre o Fed, mas o petróleo continua perto de US$ 88–89 com Hormuz sob tensão. Para o Brasil, juros americanos, dólar, petróleo e frete continuam conectados.',
  readTime: '6 MIN READ',
  badge: 'GLOBAL WATCH',
  stats: [
    { label: 'CPI EUA', value: '3,4%', note: '12 meses' },
    { label: 'CPI JUL', value: '+0,1%', note: 'mês' },
    { label: 'BRENT', value: 'US$ 88–89', note: 'faixa intradiária reportada' },
  ],
  sections: [
    { title: 'Por que a inflação americana interessa no Brasil', paragraphs: ['O Federal Reserve usa inflação e atividade para decidir juros. Juros americanos mais altos por mais tempo podem manter ativos em dólar atraentes, influenciar câmbio e encarecer condições financeiras em economias emergentes.'] },
    { title: 'O petróleo atrapalha uma leitura simples', paragraphs: ['Mesmo com o CPI mais comportado, a energia segue como risco. O impasse entre Estados Unidos e Irã e ataques a rotas de navegação mantêm prêmio geopolítico no petróleo.'], bullets: ['Petróleo afeta combustível e petroquímica.', 'Frete marítimo mais caro se espalha por cadeias de produtos.', 'No Brasil, câmbio, impostos e política comercial também interferem no preço final.'] },
    { title: 'Fato, previsão e possibilidade', paragraphs: ['Fato: CPI veio em linha e o Brent oscilou perto de US$ 88–89. Possibilidade: inflação menor pode favorecer uma postura menos dura do Fed. Incerteza: o choque de energia pode alterar esse cenário se persistir.'] },
  ],
  sources: [
    { label: 'Reuters · mercados globais · 12/08/2026', url: 'https://www.reuters.com/world/china/global-markets-global-markets-2026-08-12/' },
    { label: 'Reuters · petróleo · 12/08/2026', url: 'https://www.reuters.com/business/energy/oil-rises-doubts-over-us-iran-deal-heighten-supply-concerns-2026-08-12/' },
  ],
});

Object.assign(dailyContent.financas, {
  title: 'Inflação de 4,44% e Selic de 14%: o que muda nas decisões do dia a dia',
  summary: 'A combinação ainda é de juros muito altos com inflação em desaceleração. Isso favorece renda fixa e disciplina de caixa, mas crédito continua caro e decisões de longo prazo merecem comparação de CET.',
  shareSummary: 'O IPCA em 12 meses caiu para 4,44% e a Selic está em 14% após o corte mais recente. Na prática: crédito segue caro, reserva com liquidez continua importante e qualquer financiamento deve ser comparado pelo CET, não só pela parcela.',
  readTime: '7 MIN READ',
  badge: 'MONEY INTEL',
  stats: [
    { label: 'IPCA 12M', value: '4,44%' },
    { label: 'SELIC', value: '14,00%', note: 'taxa após decisão de agosto reportada pela Reuters' },
    { label: 'ALIMENTOS JUL', value: '-0,67%' },
  ],
  sections: [
    { title: 'Juro nominal alto não é retorno líquido', paragraphs: ['Quando alguém diz que um investimento rende “perto da Selic”, ainda faltam imposto, taxa, prazo, liquidez e risco. O ganho real é o que sobra depois da inflação e dos custos.'] },
    { title: 'Onde isso toca sua rotina', bullets: ['Cartão e rotativo continuam especialmente perigosos.', 'Financiamentos longos escondem muito custo na parcela aparentemente confortável.', 'Renda fixa pós-fixada tende a continuar competitiva num ambiente de juros altos.', 'Reserva de emergência deve privilegiar liquidez e segurança, não o maior rendimento possível.'] },
    { title: 'Dica financeira do dia: anualize o que parece surpresa', paragraphs: ['IPVA, seguro, manutenção, presentes, impostos e viagens podem virar provisões mensais. Dividir uma despesa previsível em 12 partes reduz a chance de usar crédito caro quando ela chegar.'] },
  ],
  sources: [
    { label: 'Reuters · IPCA e Selic · 11/08/2026', url: 'https://www.reuters.com/world/americas/brazil-inflation-slows-july-returns-central-bank-target-range-2026-08-11/' },
    { label: 'IBGE · IPCA', url: 'https://www.ibge.gov.br/indicadores-economicos/ipca.html' },
  ],
});

Object.assign(dailyContent.tecnologia, {
  title: 'A IA está deixando de ser só software: a disputa agora é por gigawatts, GPUs e capital',
  summary: 'A CoreWeave elevou sua previsão de investimentos de 2026 para US$ 35–39 bilhões e reportou backlog de US$ 104,2 bilhões. É um retrato de quanto infraestrutura física virou gargalo da IA.',
  shareSummary: 'CoreWeave elevou o capex de 2026 para US$ 35–39 bilhões e reportou backlog de US$ 104,2 bilhões. O dado mostra que a corrida de IA não é apenas por modelos: energia, data centers, GPUs, rede e financiamento estão virando parte central da competição.',
  readTime: '7 MIN READ',
  badge: 'TECH / AI INFRA',
  stats: [
    { label: 'CAPEX 2026', value: 'US$ 35–39 bi' },
    { label: 'BACKLOG', value: 'US$ 104,2 bi' },
    { label: 'Q2 RECEITA', value: 'US$ 2,58 bi' },
  ],
  sections: [
    { title: 'Por que isso é mais interessante do que o preço da ação', paragraphs: ['Modelos maiores só viram produto quando existe capacidade para treinar e inferir em escala. Isso exige chips, energia, refrigeração, fibra, data centers e contratos de financiamento de longo prazo.'] },
    { title: 'A conexão menos óbvia', paragraphs: ['O avanço da IA está aproximando empresas de software de problemas típicos de infraestrutura pesada: capacidade elétrica, tempo de construção, dívida, depreciação de equipamentos e concentração de fornecedores.'] },
    { title: 'O que observar daqui para frente', bullets: ['Quanto da capacidade nova realmente vira receita.', 'Custo de energia e financiamento.', 'Velocidade de obsolescência das GPUs.', 'Dependência de poucos grandes clientes e fornecedores.'] },
  ],
  sources: [
    { label: 'Reuters · CoreWeave · 12/08/2026', url: 'https://www.reuters.com/business/coreweave-super-micro-climb-signs-sustained-ai-buildout-2026-08-12/' },
    { label: 'Reuters · resultados CoreWeave · 11/08/2026', url: 'https://www.reuters.com/technology/coreweave-edges-past-quarterly-revenue-estimates-2026-08-11/' },
  ],
});

Object.assign(dailyContent.seguranca, {
  title: 'Serverless público: quando uma função pequena vira foothold de cloud',
  summary: 'Mandiant alerta que funções e serviços serverless expostos podem permitir desde leitura de arquivos até command injection. O salto de risco ocorre quando o invasor alcança tokens de service account e pivota para outros recursos da cloud.',
  shareSummary: 'Uma função serverless pública vulnerável pode ser muito mais que “um endpoint com bug”. Mandiant mostra cenários em que LFI ou command injection permitem roubar secrets e tokens de service account do metadata service, criando caminho de movimentação lateral na cloud.',
  readTime: '8 MIN READ',
  badge: 'CYBER / CLOUD ATTACK PATH',
  stats: [
    { label: 'ENTRY POINT', value: 'SERVERLESS' },
    { label: 'RISCOS', value: 'LFI / RCE' },
    { label: 'PIVÔ', value: 'IAM TOKEN' },
  ],
  sections: [
    { title: 'A cadeia de ataque', paragraphs: ['Uma função exposta aceita input controlado pelo usuário. Se existe LFI, o atacante pode ler código, .env, arquivos de configuração e dependências. Se existe command injection, o impacto cresce para execução de comandos dentro do container.'] },
    { title: 'O momento em que vira incidente de cloud', paragraphs: ['Com RCE, o atacante pode consultar o metadata service e tentar obter token OAuth da service account. Se essa identidade tiver permissões excessivas, o problema deixa de ser local e passa a envolver storage, secrets, banco, registry ou outros workloads.'] },
    { title: 'Defesa prática', bullets: ['Autenticação sempre que possível.', 'Least privilege para service accounts.', 'Secrets em secret manager, não no filesystem.', 'Egress control quando o workload não precisa falar com qualquer destino.', 'Logging e detecção de chamadas anormais ao metadata service e APIs cloud.'] },
  ],
  sources: [
    { label: 'Mandiant · Exposed Cloud Functions · 15/07/2026', url: 'https://cloud.google.com/blog/topics/threat-intelligence/exposed-cloud-functions-harden' },
  ],
});

Object.assign(dailyContent['appsec-ssdlc'], {
  title: 'Supply chain: não basta escanear a dependência; é preciso proteger como ela entra',
  summary: 'GTIG e Mandiant destacaram a expansão de compromissos em pacotes, repositórios e ferramentas de desenvolvimento. Em alguns casos, o abuso de GitHub Actions e pacotes comprometidos expôs secrets de build e abriu caminho para novos pivôs.',
  shareSummary: 'O foco de supply chain está mudando: não basta perguntar “essa lib tem CVE?”. Também é preciso perguntar quem pode publicar a versão, como o pipeline confia nela, que secrets o runner enxerga e se um pull request consegue ganhar permissões indevidas.',
  readTime: '9 MIN READ',
  badge: 'APPSEC / SUPPLY CHAIN',
  stats: [
    { label: 'CRESCIMENTO', value: '+1.444%', note: 'pacotes maliciosos identificados 2024→2025 segundo OpenSSF citado pelo GTIG' },
    { label: 'VETORES', value: 'PACKAGE + REPO + CI' },
    { label: 'ALVO', value: 'SECRETS DE BUILD' },
  ],
  sections: [
    { title: 'O que muda no threat model do SSDLC', paragraphs: ['SCA encontra vulnerabilidades conhecidas em componentes. Supply-chain security precisa também avaliar integridade, identidade do publicador, provenance, assinatura, permissões de workflow e confiança entre pull request, runner e ambiente de release.'] },
    { title: 'Um detalhe perigoso: pull_request_target', paragraphs: ['GTIG cita abuso do gatilho pull_request_target em campanhas de 2026. Esse evento pode operar no contexto do repositório base e, se combinado com checkout ou execução de conteúdo não confiável, expor secrets ou permissões de escrita.'] },
    { title: 'Aplicação prática para um programa de AppSec', bullets: ['Inventariar workflows com acesso a secrets e write token.', 'Separar runners de PR não confiável e release.', 'Pin de actions por commit SHA para etapas críticas.', 'Gerar e verificar SBOM/provenance no release.', 'Tratar mudança em pipeline como mudança de segurança, não só DevOps.'] },
  ],
  sources: [
    { label: 'GTIG / Mandiant · Supply Chain Compromise · 30/07/2026', url: 'https://cloud.google.com/blog/topics/threat-intelligence/mitigation-guidance-for-supply-chain-compromise' },
    { label: 'Mandiant · AI-Assisted Vulnerability Management · 16/07/2026', url: 'https://cloud.google.com/blog/topics/threat-intelligence/ai-assisted-vulnerability-management/' },
  ],
});

Object.assign(dailyContent.gravidez, {
  title: '5 semanas + 3 dias: por fora quase nada mudou; por dentro, muita coisa já começou',
  summary: 'Nesta fase inicial do estágio embrionário, estruturas fundamentais estão começando a se organizar. O tamanho ainda é minúsculo, mas o ritmo de desenvolvimento é enorme.',
  shareSummary: 'Hoje a gestação está em 5 semanas + 3 dias, com DPP estimada para 11/04/2027. É uma fase muito inicial em que começam a se organizar estruturas ligadas ao sistema nervoso, eixo do corpo e desenvolvimento cardíaco. Pré-natal, alimentação segura e orientação do obstetra continuam sendo a referência.',
  readTime: '7 MIN READ',
  badge: 'BABY MISSION / 5S3D',
  stats: [
    { label: 'GESTAÇÃO', value: '5S + 3D' },
    { label: 'DPP', value: '11/04/2027' },
    { label: 'FASE', value: 'EMBRIONÁRIA' },
  ],
  sections: [
    { title: 'O que está acontecendo nesta fase', paragraphs: ['A contagem obstétrica começa antes da fecundação, por isso “5 semanas de gestação” não significa que o embrião tenha cinco semanas desde a concepção. Nesta etapa, estruturas iniciais do cérebro e da coluna estão se formando, assim como o tubo neural e tecidos que participarão do desenvolvimento cardíaco.'] },
    { title: 'O que vale fazer agora', bullets: ['Manter o pré-natal e levar dúvidas anotadas.', 'Seguir a orientação profissional sobre ácido fólico e outros suplementos.', 'Evitar álcool e alimentos com maior risco microbiológico.', 'Não iniciar nem suspender medicamentos por conta própria.'] },
    { title: 'Uma forma tranquila de olhar para essa semana', paragraphs: ['Nem todo sintoma aparece e a intensidade varia muito entre pessoas. O hub serve para acompanhar desenvolvimento e organizar dúvidas; não para usar presença ou ausência de sintomas como teste de evolução da gestação.'] },
  ],
  sources: [
    { label: 'ACOG · Changes During Pregnancy', url: 'https://www.acog.org/womens-health/infographics/changes-during-pregnancy' },
    { label: 'CDC · Folic Acid', url: 'https://www.cdc.gov/folic-acid/about/intake-and-sources.html' },
    { label: 'CDC · Safer Food Choices During Pregnancy', url: 'https://www.cdc.gov/food-safety/foods/pregnant-women.html' },
  ],
  disclaimer: 'Conteúdo educativo e geral. Sintomas, medicamentos, exames e decisões clínicas devem ser avaliados pela equipe de pré-natal.',
});

Object.assign(dailyContent.pai, {
  title: 'Missão de hoje: faça uma coisa antes que ela precise ser pedida',
  summary: 'Uma parte importante da paternidade ativa é aprender a perceber demandas. Antecipar uma tarefa reduz carga mental e transforma “ajuda” em corresponsabilidade real.',
  shareSummary: 'Missão de pai de hoje: escolha uma tarefa útil da rotina e resolva antes que alguém precise pedir. Paternidade ativa também começa na gestação — acompanhando dúvidas, consultas, organização da casa e o bem-estar da mãe com presença consistente.',
  readTime: '5 MIN READ',
  badge: 'FATHER MISSION',
  stats: [
    { label: 'MISSÃO', value: 'ANTECIPAR' },
    { label: 'FOCO', value: 'CARGA MENTAL' },
    { label: 'META', value: 'PRESENÇA' },
  ],
  sections: [
    { title: 'O exercício de hoje', paragraphs: ['Observe uma responsabilidade recorrente — comida, mercado, louça, limpeza, organização de consulta, lista de dúvidas ou algo administrativo — e assuma a execução completa: lembrar, planejar, fazer e conferir.'] },
    { title: 'Por que isso importa', paragraphs: ['Dividir tarefas não é só dividir o esforço físico. Parte do desgaste está em lembrar o que precisa acontecer e coordenar quando. Corresponsabilidade reduz a necessidade de uma pessoa funcionar como gerente da outra.'] },
    { title: 'Sem buscar perfeição', paragraphs: ['Ser um pai confiável é mais útil que tentar parecer um pai perfeito. Consistência, escuta e capacidade de corrigir o rumo são competências que podem ser treinadas muito antes do nascimento.'] },
  ],
});
