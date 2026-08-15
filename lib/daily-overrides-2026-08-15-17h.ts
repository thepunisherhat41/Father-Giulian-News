import { dailyContent, todayDrops } from './daily-content';

Object.assign(dailyContent.hoje, {
  title: '19 leituras + atualização das 17h para sábado, 15 de agosto',
  summary: 'A edição-base segue válida nas áreas que não tiveram mudança material. A revisão das 17h corrige o contexto do alerta de chuva da manhã, acompanha as duas últimas horas do prazo de registro eleitoral e acrescenta uma nova leitura sobre a disputa geopolítica por cadeias de IA e semicondutores.',
  readTime: '19 MISSÕES · 17H UPDATE',
  badge: '17H INTELLIGENCE UPDATE',
});

const politicsDrop = todayDrops.find((item) => item.slug === 'politica');
if (politicsDrop) Object.assign(politicsDrop, {
  title: 'Registro eleitoral entra nas duas horas finais',
  detail: 'Às 17h restam duas horas para a transmissão dos pedidos pelo CANDex. Às 19h fecha o protocolo; a análise jurídica continua depois do prazo.',
});

const weatherDrop = todayDrops.find((item) => item.slug === 'tempo');
if (weatherDrop) Object.assign(weatherDrop, {
  title: 'Alerta forte ficou concentrado na manhã; sábado termina mais estável',
  detail: 'A capital ficou em atenção para alagamentos entre 7h45 e 8h55. Ainda pode haver pancada isolada ou chuvisco, mas domingo tende a aquecer e iniciar período mais seco.',
});

const techDrop = todayDrops.find((item) => item.slug === 'tecnologia');
if (techDrop) Object.assign(techDrop, {
  title: 'A disputa por IA agora passa também por alianças de chips e minerais',
  detail: 'Reuters relata que Washington prepara pressão por exclusividade na iniciativa Pax Silica; trata-se de estratégia reportada a partir de uma minuta, não de regra global já vigente.',
});

Object.assign(dailyContent.politica, {
  title: 'Eleições 2026: às 17h, faltam duas horas para fechar o prazo de registro',
  summary: 'Partidos, federações e coligações têm até as 19h deste sábado para transmitir os pedidos de registro. O horário encerra a apresentação dos pedidos, mas não transforma automaticamente cada nome em candidatura deferida: análise documental, elegibilidade, impugnações e recursos seguem depois.',
  shareSummary: 'Política 17h: faltam duas horas para o prazo de registro terminar. Às 19h fecha a transmissão pelo CANDex; o julgamento continua. Para acompanhar situação jurídica, a referência é o DivulgaCandContas/TSE, não postagem de campanha.',
  readTime: '7 MIN READ',
  badge: 'POLÍTICA / 17H UPDATE',
  stats: [
    { label: 'AGORA', value: '17H' },
    { label: 'PRAZO', value: '19H' },
    { label: 'STATUS', value: 'PEDIDO ≠ DEFERIMENTO' },
  ],
  sections: [
    { title: 'O que ainda pode acontecer até 19h', paragraphs: ['O CANDex 2026 opera integralmente on-line e registra o horário da transmissão. Até o limite legal, partidos, federações e coligações podem concluir a apresentação dos pedidos dos cargos em disputa.'] },
    { title: 'O que começa depois das 19h', paragraphs: ['A Justiça Eleitoral continua analisando documentação e condições de elegibilidade. O tracker do site deve manter rótulos como pedido apresentado, em análise, deferido, indeferido, recurso, renúncia ou substituição conforme a fonte oficial publicar cada mudança.'] },
    { title: 'A mudança de amanhã', paragraphs: ['Em 16 de agosto começa a propaganda eleitoral geral. Com mais anúncios, impulsionamento e cortes circulando, a separação entre proposta, propaganda, pesquisa, fato administrativo e situação jurídica fica ainda mais importante.'] },
  ],
  sources: [
    { label: 'TSE · Calendário Eleitoral 2026', url: 'https://www.tse.jus.br/eleicoes/calendario-eleitoral/calendario-eleitoral' },
    { label: 'TSE · CANDex 2026', url: 'https://www.tse.jus.br/comunicacao/noticias/2026/Julho/saiba-como-registrar-atas-e-candidaturas-no-novo-sistema-da-justica-eleitoral' },
    { label: 'TSE · DivulgaCandContas', url: 'https://www.tse.jus.br/administracao/painel/divulgacao-de-candidaturas-e-contas-eleitorais' },
  ],
});

Object.assign(dailyContent.tempo, {
  title: 'O alerta severo foi da manhã; São Paulo termina o sábado com risco bem mais localizado',
  summary: 'A capital ficou em estado de atenção para alagamentos entre 7h45 e 8h55, durante a passagem das áreas mais fortes da frente fria. No restante do sábado ainda pode ocorrer pancada isolada e chuvisco, mas o cenário não deve ser descrito como alerta severo contínuo. No domingo, o sistema se afasta, a temperatura sobe e começa a transição para tempo mais quente e seco.',
  shareSummary: 'Tempo 17h em SP: o estado de atenção da manhã terminou às 8h55. Ainda pode haver chuva isolada ou chuvisco, mas domingo tende a ter mais sol, máxima perto de 27°C e início de uma sequência mais quente e seca.',
  readTime: '6 MIN READ',
  badge: 'TEMPO / 17H CONTEXTO',
  stats: [
    { label: 'ATENÇÃO', value: '07H45–08H55' },
    { label: 'NOITE', value: 'CHUVISCO ISOLADO' },
    { label: 'DOMINGO', value: '~27°C' },
  ],
  sections: [
    { title: 'Por que atualizar o rótulo importa', paragraphs: ['Um alerta meteorológico é temporal. Manter “alerta severo” como manchete horas depois do encerramento pode induzir a percepção errada de que a condição mais crítica ainda está ativa. A página agora preserva o fato histórico e atualiza o risco restante.'] },
    { title: 'O que ainda merece atenção hoje', bullets: ['Pancadas isoladas ainda podem reduzir visibilidade.', 'Chuvisco pode persistir à noite, principalmente em áreas mais ao sul.', 'Piso molhado e pontos que acumularam água pela manhã continuam pedindo prudência.'] },
    { title: 'A transição para domingo', paragraphs: ['Com o afastamento do sistema frontal, o sol tende a aparecer mais e a máxima prevista sobe para perto de 27°C. A sequência seguinte aponta para aquecimento e redução de umidade, mudando novamente o tipo de cuidado necessário.'] },
  ],
  sources: [
    { label: 'UOL · Defesa Civil/CGE · 15/08/2026', url: 'https://noticias.uol.com.br/cotidiano/ultimas-noticias/2026/08/15/alerta-chuva-sao-paulo.ghtm' },
    { label: 'CGE · Prefeitura de São Paulo', url: 'https://cge.prefeitura.sp.gov.br/' },
  ],
});

Object.assign(dailyContent.tecnologia, {
  title: 'Pax Silica: a infraestrutura de IA começa a virar também instrumento de alinhamento geopolítico',
  summary: 'A Reuters relata que os Estados Unidos preparam uma mensagem a parceiros da iniciativa Pax Silica exigindo escolha entre a coalizão liderada por Washington e a iniciativa chinesa concorrente. O ponto importante é a natureza da informação: a reportagem se baseia em uma minuta de carta do Departamento de Estado, portanto descreve uma estratégia em preparação, não uma regra internacional já implementada.',
  shareSummary: 'Tecnologia 17h: chips, minerais críticos e infraestrutura de IA estão virando parte explícita da geopolítica. Reuters relata uma minuta dos EUA pressionando parceiros da Pax Silica por exclusividade frente à iniciativa chinesa. É estratégia reportada em preparação, não regra já vigente.',
  readTime: '8 MIN READ',
  badge: 'TECH / IA + GEOPOLÍTICA',
  stats: [
    { label: 'CAMADA', value: 'SUPPLY CHAIN' },
    { label: 'ATIVOS', value: 'CHIPS + MINERAIS' },
    { label: 'STATUS', value: 'MINUTA REPORTADA' },
  ],
  sections: [
    { title: 'Por que isso vai além de modelos de IA', paragraphs: ['A competição por inteligência artificial depende de semicondutores, memória, equipamentos de fabricação, energia, rede, data centers e minerais críticos. Uma coalizão tecnológica tenta reduzir dependências justamente nessas camadas físicas.'] },
    { title: 'O que a Reuters reporta', paragraphs: ['Segundo a reportagem de 14 de agosto, uma minuta do Departamento de Estado pede que participantes da Pax Silica não mantenham simultaneamente alinhamento com a iniciativa chinesa concorrente. Como se trata de documento em preparação, a página diferencia intenção reportada de política final publicada.'] },
    { title: 'Conexão prática para empresas', bullets: ['Mapa de fornecedores de chips, cloud, rede e componentes críticos.', 'Dependências por país e por fornecedor único.', 'Planos de substituição para componentes sujeitos a restrição comercial.', 'Revisão de contratos e requisitos de soberania de dados quando alianças tecnológicas mudarem.'] },
  ],
  sources: [
    { label: 'Reuters · disputa EUA–China por alianças de IA · 14/08/2026', url: 'https://www.reuters.com/world/china/us-tell-partners-they-must-pick-sides-ai-race-with-china-2026-08-14/' },
  ],
});
