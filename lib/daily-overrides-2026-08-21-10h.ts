import { dailyContent, edition, todayDrops } from './daily-content';
import { applyDailyOverride20260821_17h } from './daily-overrides-2026-08-21-17h';

// Compatibilidade: a Home ainda importa o nome histórico da função das 10h.
// O wrapper mantém a revisão-base legada e, no final, fixa a edição visível atual sem criar ciclo de módulos.
export function applyDailyOverride20260821_10h(force = false) {
  applyDailyOverride20260821_17h(force);

  Object.assign(edition, {
    date: '24/08/2026',
    dateLabel: '24 AGO 2026',
    title: 'Daily Intelligence · 24 de agosto',
  });

  Object.assign(dailyContent.hoje, {
    title: '22 áreas em um feed direto · edição de 24 de agosto',
    summary: 'A edição de hoje prioriza navegação rápida no celular: cada assunto entra como uma notícia/cartão de leitura, e todas as áreas ficam acessíveis sem depender de menu lateral.',
    shareSummary: '24/08: Father Giulian News em formato de feed mobile, com 22 áreas acessíveis diretamente e destaques atualizados do dia.',
    readTime: '22 REELS',
    badge: 'EDIÇÃO MOBILE · HOJE',
    sections: [],
  });

  Object.assign(dailyContent['seguranca-zl'], {
    title: 'Zona Leste em Foco: conteúdo revalidado nesta edição, com fatos recentes separados de contexto',
    summary: 'A revisão atual preserva Região, Segurança, Casos, Matérias, Dados, Ações e Serviços separados, datados e com fonte. Conteúdo anterior aparece como fato anterior ou contexto, sem ser promovido artificialmente como ocorrência de hoje.',
    shareSummary: 'Zona Leste: conteúdo revalidado na edição atual, com notícias anteriores explicitamente datadas e separadas de contexto.',
    badge: 'ZONA LESTE · VALIDADO',
  });

  Object.assign(dailyContent.politica, {
    title: 'Nexus aponta empate técnico entre Lula e Flávio Bolsonaro em eventual segundo turno',
    summary: 'Levantamento divulgado em 24 de agosto reforça o quadro de disputa apertada. O dado deve ser tratado como fotografia estatística, não como resultado antecipado da eleição.',
    shareSummary: 'Política 24/08: pesquisa Nexus/BTG Pactual aponta empate técnico em eventual segundo turno entre Lula e Flávio Bolsonaro. Pesquisa mede intenção no período de coleta e não garante o resultado de outubro.',
    badge: 'POLÍTICA · PESQUISA 24/08',
    sources: [{ label: 'Reuters · 24/08/2026', url: 'https://www.reuters.com/world/americas/lula-flavio-bolsonaro-neck-neck-ahead-brazil-election-nexus-poll-shows-2026-08-24/' }],
  });

  Object.assign(dailyContent.tempo, {
    title: 'São Paulo tem segunda-feira fria, nublada e com chance de chuvisco no fim do dia',
    summary: 'O CGE registrou manhã fria e céu nublado nesta segunda-feira. A máxima fica perto de 20°C, com aumento de nebulosidade e possibilidade de chuviscos no fim da tarde e à noite.',
    shareSummary: 'Tempo 24/08 em São Paulo: manhã fria e nublada, máxima próxima de 20°C e chance de chuviscos no fim do dia. A cidade segue em atenção para baixas temperaturas.',
    badge: 'SP · TEMPO HOJE',
    sources: [{ label: 'CGE São Paulo · 24/08/2026 12h12', url: 'https://www.cgesp.org/v3/noticias.jsp?id=55741' }],
  });

  Object.assign(dailyContent.games, {
    title: 'gamescom dev começa hoje; Opening Night Live acontece amanhã',
    summary: 'A semana da gamescom 2026 começou nesta segunda-feira com a conferência para desenvolvedores. O evento principal abre em 26 de agosto, após a Opening Night Live de terça-feira.',
    shareSummary: 'Games 24/08: gamescom dev começa hoje; Opening Night Live acontece em 25/08 e a feira principal vai de 26 a 30/08.',
    badge: 'GAMES · AGENDA OFICIAL',
    sources: [{ label: 'gamescom · agenda oficial 2026', url: 'https://www.gamescom.global/en/info/press-and-creator/participation-for-media-representatives' }],
  });

  Object.assign(dailyContent.gravidez, {
    title: '7 semanas + 1 dia: desenvolvimento acelerado e uma rotina mais gentil para lidar com enjoo',
    summary: 'Nesta fase, estruturas fundamentais continuam se organizando rapidamente. O foco prático permanece em hidratação fracionada, alimentação tolerável, descanso e atenção a sinais de desidratação ou incapacidade de manter líquidos.',
    shareSummary: 'Gravidez 24/08: 7 semanas + 1 dia. Desenvolvimento segue acelerado; para enjoo, hidratação em pequenos goles e alimentos toleráveis costumam ser mais úteis que grandes volumes de uma vez.',
    badge: 'GRAVIDEZ · SEMANA 7',
  });

  Object.assign(dailyContent.pai, {
    title: 'Missão de hoje: transforme cuidado em acesso rápido, não em mais decisões',
    summary: 'Reduzir fricção ajuda: deixar água, alimento tolerável e itens de apoio facilmente disponíveis evita que cada episódio de enjoo vire uma nova sequência de decisões e pedidos.',
    shareSummary: 'Ser Pai 24/08: missão do dia é reduzir fricção — preparar o básico e deixar fácil de acessar, sem transformar cuidado em controle.',
    badge: 'SER PAI · AÇÃO DO DIA',
  });

  Object.assign(dailyContent.tecnologia, {
    title: 'Brasil aposta R$ 2,3 bilhões em supercomputação de IA e divide projetos entre tecnologias chinesas e americanas',
    summary: 'O plano anunciado na última semana combina projetos com Huawei/iFlytek e infraestrutura esperada com NVIDIA, numa tentativa de ampliar capacidade nacional de IA sem depender de um único fornecedor.',
    shareSummary: 'Tecnologia: Brasil anunciou cerca de R$2,3 bi para infraestrutura de IA, com projetos usando tecnologias chinesas e americanas. Benefícios dependem de execução, energia, segurança e governança.',
    badge: 'TECNOLOGIA · IA NO BRASIL',
    sources: [{ label: 'Reuters · 20/08/2026', url: 'https://www.reuters.com/world/americas/brazil-launches-ai-supercomputer-push-splits-projects-between-chinese-us-firms-2026-08-20/' }],
  });

  Object.assign(dailyContent.seguranca, {
    title: 'CaptiveCrunch: Wi-Fi de hotel pode virar ponto de manipulação de tráfego e roubo de credenciais',
    summary: 'A Microsoft atribuiu ao Storm-2945, subgrupo do Midnight Blizzard, uma campanha que manipula tráfego DNS e HTTP em redes atendidas por portais cativos para redirecionar viajantes a phishing ou falsas atualizações.',
    shareSummary: 'Cyber: Microsoft detalhou CaptiveCrunch, campanha que manipula tráfego em redes de hotéis/portais cativos para phishing e malware. O vetor inicial de comprometimento das redes ainda está sob investigação.',
    badge: 'CYBER · THREAT INTEL',
    sources: [{ label: 'Microsoft Threat Intelligence · 18/08/2026', url: 'https://news.microsoft.com/source/latam/company-news-es/captivecrunch-malware-wifi-viajeros/' }],
  });

  Object.assign(dailyContent['appsec-ssdlc'], {
    title: 'GitHub cria estado “Mitigated” para code scanning: risco reduzido não é o mesmo que vulnerabilidade corrigida',
    summary: 'Desde 20 de agosto, alertas de code scanning podem ser encerrados como “Mitigated” quando a falha permanece no código, mas controles externos reduzem seu risco. Isso melhora governança, desde que mitigação não vire sinônimo de falso positivo.',
    shareSummary: 'AppSec 24/08: GitHub adicionou o motivo “Mitigated” ao code scanning. A falha pode continuar no código; o status serve para registrar controle compensatório e precisa de evidência, owner e validade.',
    badge: 'APPSEC · GOVERNANÇA',
    sources: [{ label: 'GitHub Changelog · 20/08/2026', url: 'https://github.blog/changelog/2026-08-20-code-scanning-adds-a-mitigated-alert-dismissal-reason/' }],
  });

  Object.assign(dailyContent['security-briefing'], {
    title: 'Security Briefing: identidade em viagem, supply chain e mitigação verificável ganham prioridade',
    summary: 'A leitura executiva de hoje combina CaptiveCrunch, controles de CI/CD e o novo estado Mitigated do GitHub: risco precisa ser acompanhado por caminho de ataque, autoridade e evidência do controle compensatório.',
    shareSummary: 'Security Briefing 24/08: captive portals entram no radar de identidade; CI/CD continua sendo alvo de supply chain; e mitigação precisa ter evidência e validade, não apenas status.',
    badge: 'SECURITY BRIEFING · 24/08',
  });

  const patchDrop = (slug: string, title: string, detail: string) => {
    const index = todayDrops.findIndex((item) => item.slug === slug);
    if (index >= 0) todayDrops[index] = { ...todayDrops[index], title, detail };
  };

  patchDrop('seguranca-zl', 'Zona Leste em Foco: fatos recentes continuam datados e separados de contexto', 'Região, Segurança, Casos e Serviços preservam data e fonte; a edição evita transformar pauta antiga em novidade.');
  patchDrop('politica', 'Nexus aponta empate técnico na disputa presidencial', 'Pesquisa divulgada hoje reforça cenário apertado; veja como interpretar margem de erro e fotografia estatística.');
  patchDrop('tempo', 'SP segue fria e nublada nesta segunda', 'CGE aponta máxima perto de 20°C e possibilidade de chuviscos no fim do dia.');
  patchDrop('games', 'gamescom dev começa hoje', 'Opening Night Live acontece amanhã e a feira principal abre em 26/08.');
  patchDrop('gravidez', '7 semanas + 1 dia', 'Desenvolvimento acelerado, enjoo e cuidados práticos entram no feed de hoje.');
  patchDrop('pai', 'Missão de hoje: reduzir fricção', 'Preparar o básico e deixar fácil de acessar ajuda sem transformar cuidado em controle.');
  patchDrop('tecnologia', 'Brasil acelera infraestrutura de IA', 'Plano de R$2,3 bi combina projetos com tecnologias chinesas e americanas.');
  patchDrop('seguranca', 'CaptiveCrunch mira viajantes em redes de hotel', 'Manipulação de tráfego, phishing AitM e falsas atualizações colocam captive portals no threat model.');
  patchDrop('appsec-ssdlc', '“Mitigated” chega ao code scanning do GitHub', 'Controle compensatório não é correção: evidência, validade e owner precisam acompanhar o finding.');
  patchDrop('security-briefing', 'Identidade, supply chain e mitigação verificável', 'O briefing conecta redes não confiáveis, CI/CD e governança de vulnerabilidades.');
}
