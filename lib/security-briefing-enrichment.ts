export type SecurityBriefingEnrichment = {
  sourceFacts: string[];
  unknowns: string[];
  decisionTriggers: { condition: string; action: string }[];
  references: { label: string; url: string }[];
};

export const securityBriefingEnrichment: Record<string, SecurityBriefingEnrichment> = {
  'storm-2949-cloud-identity': {
    sourceFacts: [
      'A Microsoft descreve uma cadeia que começou com identidade comprometida e abuso consistente com SSPR, avançando por Entra ID, Microsoft 365 e Azure.',
      'O ator abusou de recursos legítimos de administração cloud, reduzindo dependência de malware tradicional e misturando atividade maliciosa com comportamento administrativo esperado.',
      'Em um Key Vault, o ator alterou configuração de acesso e leu dezenas de secrets em poucos minutos, ampliando o blast radius até aplicações e dados de produção.',
    ],
    unknowns: [
      'O caso publicado é de uma organização específica; ele não prova que o mesmo caminho exista em outro tenant sem validar RBAC, SSPR, PIM e arquitetura.',
      'A Microsoft descreve técnicas observadas, mas não fornece uma métrica universal de tempo até detecção aplicável a qualquer ambiente.',
    ],
    decisionTriggers: [
      { condition: 'Existe identidade humana com Owner/Contributor persistente em produção ou Key Vault', action: 'Tratar como gap prioritário de privilégio e migrar para JIT/PIM quando possível.' },
      { condition: 'SSPR pode alterar acesso de conta privilegiada sem barreira equivalente ao login forte', action: 'Revisar política de recuperação e exigir controles resistentes a phishing.' },
    ],
    references: [
      { label: 'Microsoft · pesquisa Storm-2949', url: 'https://www.microsoft.com/en-us/security/blog/2026/05/18/storm-2949-turned-compromised-identity-into-cloud-wide-breach/' },
      { label: 'Microsoft · Zero Trust', url: 'https://www.microsoft.com/en-us/security/business/zero-trust' },
    ],
  },
  'cisco-sdwan-cve-2026-20245': {
    sourceFacts: [
      'A Mandiant observou exploração zero-day da CVE-2026-20245 em Catalyst SD-WAN Manager após o atacante já possuir acesso administrativo.',
      'A falha permitia a um atacante autenticado/local executar comandos como root por meio de upload de arquivo especialmente construído.',
      'A investigação observou limpeza antiforense, restauração de configurações e validação para reduzir evidências deixadas no appliance.',
      'A Mandiant lista releases corrigidos e recomenda patch imediato, hunting de IOCs e revisão com o TAC quando houver sinais de comprometimento.',
    ],
    unknowns: [
      'A existência do produto não implica exposição: versão, management plane, alcance de rede e contas administrativas mudam totalmente o risco.',
      'Ausência de IOC conhecido não elimina comprometimento, especialmente em cenário com técnicas antiforenses.',
    ],
    decisionTriggers: [
      { condition: 'Há Catalyst SD-WAN Manager em versão vulnerável ou sem confirmação de patch', action: 'Escalar para patch/mitigação imediata e restringir o management plane.' },
      { condition: 'Há login administrativo anômalo, rogue peering ou alteração de configuração não explicada', action: 'Tratar como potencial incidente e iniciar hunting/IR, não apenas patching.' },
    ],
    references: [
      { label: 'Mandiant · CVE-2026-20245', url: 'https://cloud.google.com/blog/topics/threat-intelligence/zero-day-exploitation-cisco-catalyst-sd-wan-manager' },
    ],
  },
  'mastra-npm-supply-chain': {
    sourceFacts: [
      'A Microsoft documentou comprometimento do ecossistema npm ligado ao Mastra, com injeção de dependências maliciosas e execução automática via lifecycle/postinstall.',
      'O ponto de execução ocorre durante instalação: código pode rodar antes de a aplicação importar a dependência em runtime.',
      'O risco operacional se amplia quando workstations ou runners já possuem tokens, secrets, acesso a registries ou credenciais cloud no mesmo contexto.',
    ],
    unknowns: [
      'Encontrar uma dependência afetada em lockfile não prova por si só execução do payload; é necessário verificar versão, data do build e ambiente.',
      'A extensão do impacto interno depende dos segredos e permissões disponíveis no momento da instalação.',
    ],
    decisionTriggers: [
      { condition: 'Build/instalação consumiu versão comprometida enquanto secrets estavam disponíveis', action: 'Investigar execução e egress, localizar artefatos derivados e rotacionar credenciais expostas.' },
      { condition: 'Pipeline permite lifecycle scripts irrestritos para dependências novas', action: 'Criar política de allowlist/ignore-scripts, cooldown e separação de estágio antes de fornecer secrets.' },
    ],
    references: [
      { label: 'Microsoft · Mastra npm compromise', url: 'https://www.microsoft.com/en-us/security/blog/2026/06/17/postinstall-payload-inside-mastra-npm-supply-chain-compromise/' },
      { label: 'SLSA', url: 'https://slsa.dev/' },
    ],
  },
  'exposed-serverless-functions': {
    sourceFacts: [
      'A Mandiant relata encontrar com frequência aplicações serverless públicas sem autenticação em avaliações de segurança.',
      'Falhas de aplicação como command injection ou file inclusion podem entregar controle do container e acesso a variáveis, código, metadata e tokens de service account.',
      'Quando a identidade do workload possui privilégios amplos, uma falha de aplicação pode se tornar caminho de comprometimento do ambiente cloud.',
    ],
    unknowns: [
      'Endpoint público não é vulnerabilidade por definição; o risco depende de autenticação, código, runtime e privilégios da identidade.',
      'Controles de plataforma variam entre provedores e serviços; a recomendação precisa ser adaptada à arquitetura real.',
    ],
    decisionTriggers: [
      { condition: 'Função pública usa service account padrão ou ampla', action: 'Criar identidade dedicada e reduzir permissões antes de discutir apenas WAF/rate limit.' },
      { condition: 'RCE na função alcançaria metadata, Secret Manager ou VPC interna', action: 'Priorizar contenção de blast radius e testar compensating controls em runtime.' },
    ],
    references: [
      { label: 'Mandiant · exposed cloud functions', url: 'https://cloud.google.com/blog/topics/threat-intelligence/exposed-cloud-functions-harden/' },
      { label: 'OWASP ASVS', url: 'https://owasp.org/www-project-application-security-verification-standard/' },
    ],
  },
  'ai-assisted-vulnerability-management': {
    sourceFacts: [
      'A Mandiant propõe IA para enriquecer descoberta, priorização e remediação, mas alerta para o risco de agentes privilegiados dentro de código, IDE e CI/CD.',
      'O blueprint reforça que AI não substitui inventário, EASM/CSPM, threat modeling, secrets hygiene ou MFA forte.',
      'A publicação cita mean time-to-exploit de -7 dias no M-Trends 2026, reforçando pressão sobre triagem e resposta.',
    ],
    unknowns: [
      'A publicação não demonstra que automação total de correção seja adequada para qualquer organização ou stack.',
      'Precisão e segurança dependem do modelo, contexto, tools, políticas, dados e revisão humana utilizados no fluxo.',
    ],
    decisionTriggers: [
      { condition: 'Agente apenas enriquece findings sem escrever código ou executar pipeline', action: 'Expandir uso com auditabilidade e métricas antes de aumentar privilégio.' },
      { condition: 'Agente pode criar PR, alterar arquivo, fechar finding ou disparar deploy', action: 'Exigir identidade própria, policy gates e aprovação humana proporcional ao impacto.' },
    ],
    references: [
      { label: 'Mandiant · AI-assisted vulnerability management', url: 'https://cloud.google.com/blog/topics/threat-intelligence/ai-assisted-vulnerability-management/' },
      { label: 'NIST AI RMF', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
    ],
  },
  'gtig-ai-threat-tracker-2026': {
    sourceFacts: [
      'O GTIG descreve uma transição de uso experimental para aplicação mais industrial de IA em workflows adversários.',
      'O grupo afirma ter identificado pela primeira vez um ator usando um zero-day que acredita ter sido desenvolvido com ajuda de IA.',
      'O impacto defensivo mais concreto é redução do custo/tempo para pesquisa, exploração, initial access e adaptação operacional.',
    ],
    unknowns: [
      'Atribuir desenvolvimento de exploit a IA envolve avaliação de inteligência e não significa prova absoluta do processo usado pelo ator.',
      'Não há evidência de que todos os adversários ou campanhas estejam operando com o mesmo nível de automação.',
    ],
    decisionTriggers: [
      { condition: 'Ativo internet-facing crítico depende de triagem manual para advisory → owner', action: 'Automatizar correlação de exposição e preparar compensating controls pré-aprovados.' },
      { condition: 'SLA de patch ignora exploração real e função do ativo', action: 'Migrar para priorização baseada em exposição, threat intel e criticidade.' },
    ],
    references: [
      { label: 'GTIG · AI Threat Tracker 2026', url: 'https://cloud.google.com/blog/topics/threat-intelligence/ai-vulnerability-exploitation-initial-access/' },
      { label: 'CISA KEV', url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog' },
    ],
  },
  'open-source-supply-chain-2026': {
    sourceFacts: [
      'GTIG/Mandiant apontam crescimento de campanhas de comprometimento de software open source em 2025 e no primeiro semestre de 2026.',
      'A orientação amplia a superfície além de bibliotecas: repositórios, actions, builders, registries, identidades e ferramentas de desenvolvimento também fazem parte da supply chain.',
      'Controles recomendados incluem inventário, cooldown/release age, tokens curtos/OIDC, SBOM/provenance e redução de execução de terceiros não controlada.',
    ],
    unknowns: [
      'Não existe um único controle que elimine supply-chain risk; maturidade depende da combinação entre origem, identidade, build e distribuição.',
      'SBOM sozinho não prova integridade do processo que construiu o artefato.',
    ],
    decisionTriggers: [
      { condition: 'Não é possível listar actions/plugins/builders usados por produto', action: 'Criar inventário de componentes executáveis da esteira além do SBOM tradicional.' },
      { condition: 'CI/CD usa tokens long-lived compartilhados', action: 'Priorizar OIDC/identidades efêmeras e escopo por job.' },
    ],
    references: [
      { label: 'GTIG/Mandiant · supply chain mitigation guidance', url: 'https://cloud.google.com/blog/topics/threat-intelligence/mitigation-guidance-for-supply-chain-compromise' },
      { label: 'SLSA', url: 'https://slsa.dev/' },
    ],
  },
  'agentic-cicd-claude-code': {
    sourceFacts: [
      'A Microsoft encontrou um caminho em Claude Code GitHub Action no qual conteúdo não confiável de issue/PR/comment podia influenciar um agente com acesso a tools e secrets.',
      'O caso explorava diferença de isolamento: Bash passava por sandbox/environment scrubbing, enquanto Read tinha acesso direto ao processo e podia alcançar /proc/self/environ.',
      'A Anthropic corrigiu o problema na versão 2.1.128 bloqueando acesso a arquivos sensíveis em /proc.',
      'A Microsoft recomenda que workflows agentic não combinem simultaneamente input não confiável, acesso sensível e capacidade de mudar estado/comunicar externamente.',
    ],
    unknowns: [
      'O caso específico foi corrigido; o padrão de trust boundary continua relevante para outros agentes e actions, mas não prova vulnerabilidade equivalente em todos eles.',
      'System prompt e filtros ajudam, porém não substituem isolamento e least privilege de tools/runner.',
    ],
    decisionTriggers: [
      { condition: 'Workflow lê issue/PR de usuário externo e possui secret/write/egress', action: 'Separar jobs e remover pelo menos uma dessas capacidades do mesmo trust boundary.' },
      { condition: 'Tools do agente têm modelos de sandbox diferentes', action: 'Tratar a tool menos isolada como boundary crítico e testar acesso a arquivos, env e rede.' },
    ],
    references: [
      { label: 'Microsoft · Claude Code GitHub Action case', url: 'https://www.microsoft.com/en-us/security/blog/2026/06/05/securing-ci-cd-in-agentic-world-claude-code-github-action-case/' },
      { label: 'MITRE ATLAS', url: 'https://atlas.mitre.org/' },
    ],
  },
  'gentlemen-ransomware': {
    sourceFacts: [
      'A Microsoft analisou The Gentlemen como ransomware-as-a-service com encryptor escrito em Go e mecanismos paralelos de propagação/movimento lateral.',
      'A operação combina criptografia, evasão, exclusão de artefatos e pressão de dupla extorsão.',
      'O valor defensivo do caso está na velocidade de contenção antes da criptografia, especialmente identidade administrativa, execução remota e segmentação.',
    ],
    unknowns: [
      'Família de ransomware não implica exposição direta: risco depende de initial access, identidade, segmentação, EDR e capacidade de recuperação.',
      'IOCs estáticos envelhecem; comportamento e controles de contenção são mais duráveis para defesa.',
    ],
    decisionTriggers: [
      { condition: 'Admin local é reutilizado ou execução remota é ampla', action: 'Priorizar redução de lateral movement antes de depender apenas de detecção de ransomware.' },
      { condition: 'SOC não consegue isolar host e identidade em minutos', action: 'Testar playbook conjunto Endpoint + IAM + IR e medir tempo real de contenção.' },
    ],
    references: [
      { label: 'Microsoft · The Gentlemen ransomware', url: 'https://www.microsoft.com/en-us/security/blog/2026/05/28/the-gentlemen-ransomware-dissecting-a-self-propagating-go-encryptor/' },
    ],
  },
  'secure-by-design-business': {
    sourceFacts: [
      'Secure by Design desloca responsabilidade de segurança para fabricantes/produtos, com defaults seguros e redução de classes recorrentes de falha.',
      'A abordagem busca reduzir a carga de hardening manual transferida para clientes e operadores.',
      'Para engenharia, a mudança prática é transformar findings reincidentes em melhorias sistêmicas de plataforma, framework e default.',
    ],
    unknowns: [
      'Secure by Design é uma abordagem estratégica, não um controle único ou certificação automática de produto.',
      'Resultados dependem de métricas de adoção, exceções, arquitetura e capacidade de engenharia para eliminar classes inteiras de falha.',
    ],
    decisionTriggers: [
      { condition: 'O mesmo finding reaparece em múltiplos produtos', action: 'Criar melhoria de plataforma/golden path em vez de corrigir aplicação por aplicação.' },
      { condition: 'Controle crítico depende de opt-in manual em todos os times', action: 'Avaliar mudança para default seguro e medir redução de exceções.' },
    ],
    references: [
      { label: 'CISA · Secure by Design', url: 'https://www.cisa.gov/securebydesign' },
      { label: 'NIST SSDF', url: 'https://csrc.nist.gov/Projects/ssdf' },
    ],
  },
};
