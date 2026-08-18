export type BriefingPriority = 'P0' | 'P1' | 'P2' | 'WATCH';

export type SecurityBriefingStory = {
  id: string;
  pillar: string;
  priority: BriefingPriority;
  freshness: string;
  title: string;
  deck: string;
  technicalImpact: string;
  businessImpact: string;
  actionNow: string[];
  audience: string[];
  frameworks: string[];
  source: { label: string; url: string };
  visual: { icon: string; signal: string; metric: string };
  executiveShare: string;
  technicalShare: string;
};

export const securityBriefingStories: SecurityBriefingStory[] = [
  {
    id: 'agentic-red-team-2026',
    pillar: 'AI SECURITY',
    priority: 'P1',
    freshness: 'Q2 2026',
    title: 'Red teaming de IA passa a avaliar o ciclo inteiro de agentes e não apenas o chatbot',
    deck: 'O OWASP GenAI Security Project publicou em 2026 um panorama dedicado a AI e Agentic Red Teaming, com foco em avaliação contínua de sistemas que combinam modelos, dados, memória e ferramentas.',
    technicalImpact: 'O desenho de teste precisa cobrir fronteiras entre contexto, RAG, memória, identidade, chamadas de ferramentas, autorização, saída do modelo e observabilidade.',
    businessImpact: 'Quando um agente consegue executar ações, uma falha pode se transformar em alteração indevida, vazamento ou impacto operacional. Segurança de IA passa a ser também risco de processo e negócio.',
    actionNow: ['Inventariar agentes, copilots, RAGs e automações com LLM.', 'Classificar autonomia, dados acessados e ferramentas disponíveis.', 'Exigir avaliação adversarial antes de liberar ações sensíveis em produção.'],
    audience: ['AppSec', 'AI/ML', 'Architecture', 'IAM', 'SecOps', 'Risk'],
    frameworks: ['OWASP GenAI Red Teaming', 'OWASP Agentic Security', 'NIST AI RMF', 'MITRE ATLAS'],
    source: { label: 'OWASP · AI and Agentic Red Teaming Q2 2026', url: 'https://genai.owasp.org/resource/ai-security-solutions-landscape-for-ai-and-agentic-red-teaming-q2-2026/' },
    visual: { icon: '🤖', signal: 'AGENT / TOOL / DATA', metric: 'LIFECYCLE TESTING' },
    executiveShare: 'AI Security: agentes conectam modelo, dados e ferramentas. O risco deixa de ser só resposta incorreta e passa a incluir ações e acessos. Vale inventariar agentes e exigir avaliação adversarial do fluxo completo antes de produção.',
    technicalShare: 'AI Red Team: mapear contexto, RAG, memória, identidade, autorização por ação, chamadas de ferramentas, validação de saída e logging. Referência: OWASP AI & Agentic Red Teaming Q2 2026.',
  },
  {
    id: 'agentic-governance-2026',
    pillar: 'GOVERNANCE / RISK',
    priority: 'P1',
    freshness: 'JUN 2026',
    title: 'Governança de Agentic AI vira problema de identidade, autonomia e accountability',
    deck: 'O relatório State of Agentic AI Security and Governance 2.01 do OWASP organiza riscos e práticas para sistemas autônomos que executam múltiplas etapas.',
    technicalImpact: 'Controles precisam cobrir identidade própria do agente, escopo de credenciais, aprovação humana para ações sensíveis, logging e política de memória e retenção.',
    businessImpact: 'Sem owner e accountability, um incidente de IA pode atravessar segurança, jurídico, privacidade e operação sem um responsável claro pela decisão automatizada.',
    actionNow: ['Definir owner técnico e de negócio por agente.', 'Classificar autonomia: recomendar, decidir ou executar.', 'Criar processo de revogação de credenciais e desligamento seguro.'],
    audience: ['CISO', 'Risk', 'Legal', 'Architecture', 'Product', 'AI/ML'],
    frameworks: ['OWASP Agentic AI Governance', 'NIST AI RMF'],
    source: { label: 'OWASP · State of Agentic AI Security and Governance 2.01', url: 'https://genai.owasp.org/resource/state-of-agentic-ai-security-and-governance/' },
    visual: { icon: '🧭', signal: 'AUTONOMY / IDENTITY', metric: 'ACCOUNTABILITY' },
    executiveShare: 'Agentic AI: para cada agente o negócio precisa saber quem é o owner, quais ações ele pode executar, quais dados utiliza e como interromper seu acesso com segurança.',
    technicalShare: 'Governança de agentes: identidade dedicada, credenciais mínimas, allowlist de ferramentas, aprovação humana para ações sensíveis, audit trail e kill switch.',
  },
  {
    id: 'kev-prioritization',
    pillar: 'VULNERABILITY MGMT',
    priority: 'P0',
    freshness: 'LIVING CATALOG',
    title: 'KEV continua sendo um sinal operacional importante para priorizar vulnerabilidades',
    deck: 'O catálogo Known Exploited Vulnerabilities da CISA reúne vulnerabilidades com evidência de exploração e pode complementar severidade técnica.',
    technicalImpact: 'A priorização melhora quando exploração conhecida é combinada com exposição, reachability, privilégio, criticidade do ativo e controles compensatórios.',
    businessImpact: 'Isso reduz esforço desperdiçado em filas enormes de CVEs e concentra capacidade de correção onde o risco operacional é maior.',
    actionNow: ['Cruzar inventário e SBOM com KEV.', 'Usar SLA menor quando exploração e exposição coincidirem.', 'Após remediação, verificar sinais anteriores de comprometimento quando aplicável.'],
    audience: ['Vulnerability Mgmt', 'SecOps', 'Infra', 'AppSec', 'Cloud'],
    frameworks: ['CISA KEV', 'EPSS', 'CVSS', 'SSVC'],
    source: { label: 'CISA · Known Exploited Vulnerabilities Catalog', url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog' },
    visual: { icon: '🎯', signal: 'EXPLOITED', metric: 'PRIORITY SIGNAL' },
    executiveShare: 'Vulnerability Management: KEV adiciona evidência de exploração real à priorização. O melhor resultado vem de combinar exploração, exposição e criticidade do ativo.',
    technicalShare: 'Priorização: KEV + exposição + reachability + criticidade + privilégio + blast radius. Use como sinal para SLA e hunting pós-remediação quando necessário.',
  },
  {
    id: 'genai-data-boundary',
    pillar: 'DATA / PRIVACY',
    priority: 'P1',
    freshness: 'MAR 2026',
    title: 'RAG, memória e tool output criam uma nova fronteira de dados para GenAI',
    deck: 'O guia OWASP GenAI Data Security Risks & Mitigations 2026 trata treinamento, prompts, retrieval, embeddings, memória e saída como partes do mesmo ciclo de segurança.',
    technicalImpact: 'Classificação, autorização no retrieval, isolamento de vector stores, retenção e mascaramento de traces precisam entrar no desenho.',
    businessImpact: 'Falhas de isolamento podem expor informação entre usuários, áreas ou clientes e gerar impacto de privacidade, contrato e reputação.',
    actionNow: ['Mapear dados usados em prompt, RAG, embeddings, memória e logs.', 'Aplicar autorização antes do retrieval.', 'Definir retenção e mascaramento para prompts e traces.'],
    audience: ['Data Security', 'Privacy', 'AppSec', 'AI/ML', 'Architecture'],
    frameworks: ['OWASP GenAI Data Security 2026', 'NIST Privacy Framework'],
    source: { label: 'OWASP · GenAI Data Security Risks & Mitigations 2026', url: 'https://genai.owasp.org/resource/owasp-genai-data-security-risks-mitigations-2026/' },
    visual: { icon: '🗃️', signal: 'PROMPT / RAG / MEMORY', metric: 'DATA BOUNDARY' },
    executiveShare: 'GenAI Data: RAG, memória, prompts e outputs juntam dados que antes estavam em sistemas separados. Autorização e retenção passam a ser controles centrais.',
    technicalShare: 'GenAI Data: classificar antes da ingestão, autorizar retrieval, isolar vector stores, restringir memória e mascarar traces/logs.',
  },
  {
    id: 'identity-phishing-resistant',
    pillar: 'IAM / IDENTITY',
    priority: 'P1',
    freshness: 'BASELINE',
    title: 'MFA resistente a phishing deve ganhar prioridade em contas privilegiadas',
    deck: 'A CISA recomenda métodos resistentes a phishing, como FIDO/WebAuthn, para reduzir ataques que dependem de captura de credenciais e autenticação intermediada.',
    technicalImpact: 'Priorize contas privilegiadas, administração de cloud, CI/CD, consoles de segurança e acesso a produção. Combine com device trust e proteção de sessão.',
    businessImpact: 'Comprometimento de identidade privilegiada pode causar fraude, indisponibilidade e exposição de dados sem depender de exploração de software.',
    actionNow: ['Mapear contas privilegiadas ainda dependentes de OTP ou push.', 'Planejar migração por criticidade para FIDO2/WebAuthn.', 'Revisar recuperação de conta e reset de MFA no help desk.'],
    audience: ['IAM', 'SOC', 'Cloud', 'IT', 'AppSec'],
    frameworks: ['CISA Phishing-Resistant MFA', 'NIST Digital Identity'],
    source: { label: 'CISA · Implementing Phishing-Resistant MFA', url: 'https://www.cisa.gov/resources-tools/resources/implementing-phishing-resistant-mfa' },
    visual: { icon: '🔐', signal: 'FIDO / SESSION', metric: 'IDENTITY HARDENING' },
    executiveShare: 'Identity: MFA não é tudo igual. Para acessos privilegiados, métodos resistentes a phishing reduzem risco e devem ser priorizados em cloud, produção e CI/CD.',
    technicalShare: 'IAM: inventariar OTP/push privilegiado, migrar acessos críticos para FIDO2/WebAuthn e endurecer recuperação de conta e sessão.',
  },
  {
    id: 'supply-chain-provenance',
    pillar: 'SUPPLY CHAIN',
    priority: 'P1',
    freshness: 'FOUNDATION',
    title: 'SBOM responde “o que existe”; provenance ajuda a responder “como este artefato nasceu”',
    deck: 'SLSA trata integridade de build e provenance. Em conjunto com SBOM, isso aproxima composição de origem e processo de construção.',
    technicalImpact: 'Associe artefato a commit/ref, builder, inputs e attestations e valide provenance antes da promoção entre ambientes.',
    businessImpact: 'Provenance reduz incerteza em incidentes de cadeia de software e melhora a capacidade de provar origem de um binário ou imagem.',
    actionNow: ['Gerar SBOM e provenance no release.', 'Assinar ou atestar artefatos.', 'Validar provenance nos gates de promoção e deploy.'],
    audience: ['AppSec', 'DevSecOps', 'Platform', 'Supply Chain', 'Release'],
    frameworks: ['SLSA', 'CycloneDX', 'SPDX', 'NIST SSDF'],
    source: { label: 'SLSA · Specification', url: 'https://slsa.dev/spec/' },
    visual: { icon: '📦', signal: 'BUILD / ATTESTATION', metric: 'PROVENANCE' },
    executiveShare: 'Supply Chain: SBOM mostra composição; provenance ajuda a provar origem e processo de build. Juntos aumentam confiança no artefato e ajudam na resposta a incidentes.',
    technicalShare: 'Supply Chain: gerar SBOM + provenance, associar artefato ao builder/commit/inputs, assinar attestations e verificar nos gates.',
  },
  {
    id: 'ssdf-outcomes',
    pillar: 'APPSEC / SSDLC',
    priority: 'P2',
    freshness: 'FOUNDATION',
    title: 'SSDLC maduro mede resultado de segurança, não quantidade de scanners',
    deck: 'O NIST SSDF organiza práticas de desenvolvimento seguro ao longo do ciclo. O valor aparece quando controles viram decisões, ownership, evidência e feedback.',
    technicalImpact: 'Mapeie cada scanner a uma decisão, defina gates, exceções, evidências e contexto para reduzir ruído e reincidência.',
    businessImpact: 'Um SSDLC previsível reduz surpresa perto do deploy, melhora tempo de correção e dá visibilidade de risco residual para produto e gestão.',
    actionNow: ['Mapear scanner para decisão e owner.', 'Separar finding catalogado de blocker.', 'Medir tempo de correção, reincidência, cobertura e escape para produção.'],
    audience: ['AppSec', 'Engineering', 'DevOps', 'Product', 'Risk'],
    frameworks: ['NIST SSDF', 'OWASP SAMM', 'OWASP ASVS'],
    source: { label: 'NIST · SP 800-218 SSDF', url: 'https://csrc.nist.gov/pubs/sp/800/218/final' },
    visual: { icon: '🧬', signal: 'PLAN / BUILD / TEST / RUN', metric: 'SECURITY OUTCOME' },
    executiveShare: 'SSDLC: maturidade não é ter muitos scanners. É saber qual risco cada controle reduz, quem corrige, o que bloqueia release e qual risco residual chega à produção.',
    technicalShare: 'SSDLC: mapear scanner→decisão→owner, separar catálogo de blockers, definir gates/evidências/exceções e medir MTTR, reincidência, cobertura e escape.',
  },
  {
    id: 'secure-by-design-business',
    pillar: 'TECH + BUSINESS',
    priority: 'P2',
    freshness: 'STRATEGY',
    title: 'Secure by Design conecta segurança do produto com custo operacional e confiança do cliente',
    deck: 'A iniciativa Secure by Design da CISA reforça segurança como característica do produto e responsabilidade do fabricante, com defaults mais seguros.',
    technicalImpact: 'Defaults seguros, logging útil, MFA, atualizações confiáveis e redução de classes recorrentes de falhas entram no desenho do produto.',
    businessImpact: 'Produtos mais seguros por padrão podem reduzir custo de suporte e incidentes, aumentar confiança e diminuir complexidade transferida ao cliente.',
    actionNow: ['Identificar controles que dependem de configuração manual.', 'Revisar defaults e recursos de segurança essenciais.', 'Levar métricas de segurança para product reviews e roadmap.'],
    audience: ['Product', 'Engineering', 'Security', 'Business', 'Customer Success'],
    frameworks: ['CISA Secure by Design', 'NIST SSDF'],
    source: { label: 'CISA · Secure by Design', url: 'https://www.cisa.gov/securebydesign' },
    visual: { icon: '🏗️', signal: 'PRODUCT / DEFAULTS', metric: 'RESILIENCE' },
    executiveShare: 'Secure by Design conecta segurança e negócio: defaults seguros, MFA, logging e atualizações confiáveis podem reduzir custo operacional e deixar menos complexidade defensiva para o cliente.',
    technicalShare: 'Secure by Design: revisar defaults, patchability, MFA, logging, telemetry e classes recorrentes de falhas como itens de roadmap.',
  },
];

export const securityBriefingPillars = ['TODOS','AI SECURITY','APPSEC / SSDLC','IAM / IDENTITY','VULNERABILITY MGMT','SUPPLY CHAIN','DATA / PRIVACY','GOVERNANCE / RISK','TECH + BUSINESS'];
