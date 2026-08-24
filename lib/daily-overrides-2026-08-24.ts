import { dailyContent, edition, todayDrops } from './daily-content';
import { politicsTracker } from './politics-2026';

const set = (slug: string, data: any) => Object.assign(dailyContent[slug], data);
const updateDrop = (slug: string, patch: Record<string, string>) => {
  const drop = todayDrops.find((item) => item.slug === slug);
  if (drop) Object.assign(drop, patch);
};

Object.assign(edition, {
  date: '24/08/2026',
  dateLabel: '24 AGO 2026',
  title: 'Daily Intelligence · 24 de agosto',
});

Object.assign(politicsTracker, {
  updatedAt: '24/08/2026 · tarde',
  notice: 'Pesquisas recentes reforçam uma disputa presidencial competitiva. Pesquisa é fotografia estatística do período de coleta, não previsão do resultado de outubro; metodologia, margem de erro e instituto precisam ser lidos junto do número.',
});

set('hoje', {
  title: '22 áreas em um feed direto · edição de 24 de agosto',
  summary: 'A edição de hoje prioriza navegação rápida no celular: cada assunto entra como uma notícia/cartão de leitura, e todas as áreas ficam acessíveis sem depender de menu lateral.',
  shareSummary: '24/08: Father Giulian News em formato de feed mobile, com 22 áreas acessíveis diretamente e destaques atualizados do dia.',
  readTime: '22 REELS',
  badge: 'EDIÇÃO MOBILE · HOJE',
  sections: [],
});

set('politica', {
  title: 'Nexus aponta empate técnico entre Lula e Flávio Bolsonaro em eventual segundo turno',
  summary: 'Levantamento divulgado em 24 de agosto reforça o quadro de disputa apertada. O dado deve ser tratado como fotografia estatística, não como resultado antecipado da eleição.',
  shareSummary: 'Política 24/08: pesquisa Nexus/BTG Pactual aponta empate técnico em eventual segundo turno entre Lula e Flávio Bolsonaro. Pesquisa mede intenção no período de coleta e não garante o resultado de outubro.',
  readTime: '5 MIN',
  badge: 'POLÍTICA · PESQUISA 24/08',
  sections: [
    { title: 'O que aconteceu', paragraphs: ['A pesquisa Nexus encomendada pelo BTG Pactual, divulgada nesta segunda-feira, mostrou Lula e Flávio Bolsonaro tecnicamente empatados em uma simulação de segundo turno. O resultado reforça a leitura de uma eleição competitiva.'] },
    { title: 'Como interpretar corretamente', bullets: ['Pesquisa eleitoral é uma estimativa baseada em amostra e período de coleta.', 'Diferenças dentro da margem de erro não devem ser apresentadas como vantagem estatisticamente garantida.', 'Metodologia, instituto, data de campo e cenário testado importam tanto quanto o percentual isolado.'] },
    { title: 'O que acompanhar', bullets: ['Sequência dos próximos levantamentos.', 'Efeito do horário eleitoral, debates e campanha nas intenções de voto.', 'Economia, rejeição e alianças, que podem alterar o cenário até outubro.'] },
  ],
  sources: [{ label: 'Reuters · 24/08/2026', url: 'https://www.reuters.com/world/americas/lula-flavio-bolsonaro-neck-neck-ahead-brazil-election-nexus-poll-shows-2026-08-24/' }],
});

set('tempo', {
  title: 'São Paulo tem segunda-feira fria, nublada e com chance de chuvisco no fim do dia',
  summary: 'O CGE registrou manhã fria e céu nublado nesta segunda-feira. A máxima fica perto de 20°C, com aumento de nebulosidade e possibilidade de chuviscos no fim da tarde e à noite.',
  shareSummary: 'Tempo 24/08 em São Paulo: manhã fria e nublada, máxima próxima de 20°C e chance de chuviscos no fim do dia. A cidade segue em atenção para baixas temperaturas.',
  readTime: '3 MIN',
  badge: 'SP · TEMPO HOJE',
  sections: [
    { title: 'Agora', bullets: ['CGE registrou 16,2°C em média por volta do meio-dia.', 'A máxima prevista fica em torno de 20°C.', 'A nebulosidade volta a aumentar no fim da tarde e pode favorecer chuviscos.'] },
    { title: 'Próximos dias', paragraphs: ['A terça-feira ainda começa com muita nebulosidade e possibilidade de chuviscos, com elevação gradual da temperatura. Na quarta, o sol aparece entre nuvens e as máximas podem subir.'] },
  ],
  sources: [{ label: 'CGE São Paulo · 24/08/2026 12h12', url: 'https://www.cgesp.org/v3/noticias.jsp?id=55741' }],
});

set('games', {
  title: 'gamescom dev começa hoje; Opening Night Live acontece amanhã',
  summary: 'A semana da gamescom 2026 começou nesta segunda-feira com a conferência para desenvolvedores. O evento principal abre em 26 de agosto, após a Opening Night Live de terça-feira.',
  shareSummary: 'Games 24/08: gamescom dev começa hoje; Opening Night Live acontece em 25/08 e a feira principal vai de 26 a 30/08.',
  readTime: '4 MIN',
  badge: 'GAMES · AGENDA OFICIAL',
  sections: [
    { title: 'Calendário confirmado', bullets: ['24/08: início da gamescom dev.', '25/08: Opening Night Live.', '26–30/08: feira principal em Colônia, Alemanha.'] },
    { title: 'Como acompanhar', paragraphs: ['Anúncios mostrados no palco devem ser separados de rumor e vazamento. A programação oficial é a referência para horário e status dos eventos.'] },
  ],
  sources: [{ label: 'gamescom · agenda oficial 2026', url: 'https://www.gamescom.global/en/info/press-and-creator/participation-for-media-representatives' }],
});

set('tecnologia', {
  title: 'Brasil aposta R$ 2,3 bilhões em supercomputação de IA e divide projetos entre tecnologias chinesas e americanas',
  summary: 'O plano anunciado na última semana combina projetos com Huawei/iFlytek e infraestrutura esperada com NVIDIA, numa tentativa de ampliar capacidade nacional de IA sem depender de um único fornecedor.',
  shareSummary: 'Tecnologia: Brasil anunciou cerca de R$2,3 bi para infraestrutura de IA, com projetos usando tecnologias chinesas e americanas. Benefícios dependem de execução, energia, segurança e governança.',
  readTime: '6 MIN',
  badge: 'TECNOLOGIA · IA NO BRASIL',
  sections: [
    { title: 'O que foi anunciado', bullets: ['Projeto de cerca de R$1,3 bi no Rio de Janeiro com participação de Huawei e iFlytek.', 'Outro projeto de aproximadamente R$1 bi no Rio Grande do Norte, com NVIDIA esperada como fornecedora.', 'A estratégia declarada é reduzir dependência de uma única origem tecnológica.'] },
    { title: 'O que isso pode mudar', paragraphs: ['Se executada como planejado, a infraestrutura pode ampliar pesquisa, treinamento e inferência de modelos no país. O impacto real depende de cronograma, disponibilidade energética, custos e capacidade de operação.'] },
  ],
  sources: [{ label: 'Reuters · 20/08/2026', url: 'https://www.reuters.com/world/americas/brazil-launches-ai-supercomputer-push-splits-projects-between-chinese-us-firms-2026-08-20/' }],
});

set('seguranca', {
  title: 'CaptiveCrunch: Wi-Fi de hotel pode virar ponto de manipulação de tráfego e roubo de credenciais',
  summary: 'A Microsoft atribuiu ao Storm-2945, subgrupo do Midnight Blizzard, uma campanha que manipula tráfego DNS e HTTP em redes atendidas por portais cativos para redirecionar viajantes a phishing ou falsas atualizações.',
  shareSummary: 'Cyber: Microsoft detalhou CaptiveCrunch, campanha que manipula tráfego em redes de hotéis/portais cativos para phishing e malware. O vetor inicial de comprometimento das redes ainda está sob investigação.',
  readTime: '7 MIN',
  badge: 'CYBER · THREAT INTEL',
  sections: [
    { title: 'Cadeia observada', bullets: ['Rede com portal cativo comprometida ou manipulada.', 'Tráfego DNS/HTTP redirecionado por infraestrutura do atacante.', 'Phishing AitM ou falsa atualização entregue ao usuário.', 'Objetivo inclui credenciais, registro de dispositivo e malware.'] },
    { title: 'O que ainda não está fechado', paragraphs: ['A Microsoft afirma que ainda investiga o vetor inicial usado para comprometer as redes de portais cativos. Sem essa evidência, não é correto inventar uma vulnerabilidade ou fornecedor específico como causa.'] },
    { title: 'Defesa prática', bullets: ['VPN corporativa em redes não confiáveis.', 'MFA resistente a phishing.', 'Não instalar atualizações oferecidas por captive portal.', 'Monitorar device-code/OAuth e comportamento de identidade fora do padrão.'] },
  ],
  sources: [{ label: 'Microsoft Threat Intelligence · 18/08/2026', url: 'https://news.microsoft.com/source/latam/company-news-es/captivecrunch-malware-wifi-viajeros/' }],
});

set('appsec-ssdlc', {
  title: 'GitHub cria estado “Mitigated” para code scanning: risco reduzido não é o mesmo que vulnerabilidade corrigida',
  summary: 'Desde 20 de agosto, alertas de code scanning podem ser encerrados como “Mitigated” quando a falha permanece no código, mas controles externos reduzem seu risco. Isso melhora governança, desde que mitigação não vire sinônimo de falso positivo.',
  shareSummary: 'AppSec 24/08: GitHub adicionou o motivo “Mitigated” ao code scanning. A falha pode continuar no código; o status serve para registrar controle compensatório e precisa de evidência, owner e validade.',
  readTime: '6 MIN',
  badge: 'APPSEC · GOVERNANÇA',
  sections: [
    { title: 'O que mudou', paragraphs: ['O novo motivo de dismissal diferencia uma vulnerabilidade mitigada por controles externos de “Won’t fix”. Um WAF, network policy ou outro controle pode reduzir risco sem remover a causa no código.'] },
    { title: 'Risco de governança', bullets: ['Mitigação sem evidência vira dívida invisível.', 'Controle compensatório pode desaparecer ou mudar.', 'O finding deve manter owner, justificativa, validade e revisão periódica.'] },
    { title: 'Aplicação no SSDLC', bullets: ['Separar “Fixed”, “Mitigated”, “Accepted” e “False Positive”.', 'Exigir evidência técnica do controle compensatório.', 'Definir expiração/revalidação para mitigação.', 'Manter a vulnerabilidade rastreável no inventário e no DefectDojo/Jira.'] },
  ],
  sources: [{ label: 'GitHub Changelog · 20/08/2026', url: 'https://github.blog/changelog/2026-08-20-code-scanning-adds-a-mitigated-alert-dismissal-reason/' }],
});

set('security-briefing', {
  title: 'Security Briefing: identidade em viagem, supply chain e mitigação verificável ganham prioridade',
  summary: 'A leitura executiva de hoje combina CaptiveCrunch, controles de CI/CD e o novo estado Mitigated do GitHub: risco precisa ser acompanhado por caminho de ataque, autoridade e evidência do controle compensatório.',
  shareSummary: 'Security Briefing 24/08: captive portals entram no radar de identidade; CI/CD continua sendo alvo de supply chain; e mitigação precisa ter evidência e validade, não apenas status.',
  readTime: '8 MIN',
  badge: 'SECURITY BRIEFING · 24/08',
  sections: [
    { title: 'Prioridade executiva', bullets: ['Identidade: reforçar políticas para viagem e redes não confiáveis.', 'Supply chain: proteger workflow, runner, secrets e proveniência.', 'Governança: distinguir vulnerabilidade corrigida de risco apenas mitigado.'] },
    { title: 'Ação prática', paragraphs: ['No backlog de segurança, acrescente contexto operacional ao finding: exposição, identidade, acesso lateral, controle compensatório, evidência, owner e data de revalidação.'] },
  ],
  sources: [
    { label: 'Microsoft Threat Intelligence · CaptiveCrunch', url: 'https://news.microsoft.com/source/latam/company-news-es/captivecrunch-malware-wifi-viajeros/' },
    { label: 'GitHub · Mitigated code scanning dismissal', url: 'https://github.blog/changelog/2026-08-20-code-scanning-adds-a-mitigated-alert-dismissal-reason/' },
  ],
});

set('gravidez', {
  title: '7 semanas + 1 dia: desenvolvimento acelerado e uma rotina mais gentil para lidar com enjoo',
  summary: 'Nesta fase, estruturas fundamentais continuam se organizando rapidamente. O foco prático permanece em hidratação fracionada, alimentação tolerável, descanso e atenção a sinais de desidratação ou incapacidade de manter líquidos.',
  shareSummary: 'Gravidez 24/08: 7 semanas + 1 dia. Desenvolvimento segue acelerado; para enjoo, hidratação em pequenos goles e alimentos toleráveis costumam ser mais úteis que grandes volumes de uma vez.',
  readTime: '6 MIN',
  badge: 'GRAVIDEZ · SEMANA 7',
});

set('pai', {
  title: 'Missão de hoje: transforme cuidado em acesso rápido, não em mais decisões',
  summary: 'No celular e fora dele, reduzir fricção ajuda: deixar água, alimento tolerável e itens de apoio facilmente disponíveis evita que cada episódio de enjoo vire uma nova sequência de decisões e pedidos.',
  shareSummary: 'Ser Pai 24/08: missão do dia é reduzir fricção — preparar o básico e deixar fácil de acessar, sem transformar cuidado em controle.',
  readTime: '4 MIN',
  badge: 'SER PAI · AÇÃO DO DIA',
});

updateDrop('politica', { title: 'Nexus aponta empate técnico na disputa presidencial', detail: 'Pesquisa divulgada hoje reforça cenário apertado; veja como interpretar margem de erro e fotografia estatística.' });
updateDrop('tempo', { title: 'SP segue fria e nublada nesta segunda', detail: 'CGE aponta máxima perto de 20°C e possibilidade de chuviscos no fim do dia.' });
updateDrop('games', { title: 'gamescom dev começa hoje', detail: 'Opening Night Live acontece amanhã e a feira principal abre em 26/08.' });
updateDrop('gravidez', { title: '7 semanas + 1 dia', detail: 'Desenvolvimento acelerado, enjoo e cuidados práticos entram no feed de hoje.' });
updateDrop('pai', { title: 'Missão de hoje: reduzir fricção', detail: 'Preparar o básico e deixar fácil de acessar ajuda sem transformar cuidado em controle.' });
updateDrop('tecnologia', { title: 'Brasil acelera infraestrutura de IA', detail: 'Plano de R$2,3 bi combina projetos com tecnologias chinesas e americanas.' });
updateDrop('seguranca', { title: 'CaptiveCrunch mira viajantes em redes de hotel', detail: 'Manipulação de tráfego, phishing AitM e falsas atualizações colocam captive portals no threat model.' });
updateDrop('appsec-ssdlc', { title: '“Mitigated” chega ao code scanning do GitHub', detail: 'Controle compensatório não é correção: evidência, validade e owner precisam acompanhar o finding.' });
updateDrop('security-briefing', { title: 'Identidade, supply chain e mitigação verificável', detail: 'O briefing conecta redes não confiáveis, CI/CD e governança de vulnerabilidades.' });
