export type AppSecFeedPost = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  body: string;
  imageIcon: string;
  signal: string;
  frameworks: string[];
  checklist: string[];
  source: { label: string; url: string };
  videoId?: string;
};

export const appSecFeedPosts: AppSecFeedPost[] = [
  {
    id: 'ai-pentest-lifecycle',
    tag: 'AI PENTEST / SSDLC',
    title: 'Pentest de IA precisa começar no threat model e terminar no monitoramento',
    subtitle: 'Testar só o prompt perde o caminho completo entre modelo, contexto, dados, memória e ferramentas.',
    body: 'Uma avaliação madura de aplicações com IA combina revisão de arquitetura, autorização, isolamento de dados, comportamento adversarial, limites de ferramentas e evidência de observabilidade. O objetivo é verificar se o sistema continua seguro quando recebe entradas inesperadas, contexto não confiável e solicitações fora do fluxo feliz.',
    imageIcon: '🤖',
    signal: 'THREAT MODEL → TEST → GATE → OBSERVE',
    frameworks: ['OWASP GenAI Red Teaming', 'NIST AI 100-2', 'NIST AI RMF', 'MITRE ATLAS'],
    checklist: ['Mapear modelo, RAG, memória, ferramentas e identidades.', 'Definir cenários adversariais antes do teste.', 'Executar avaliação em ambiente autorizado e controlado.', 'Registrar evidência e transformar falhas em requisitos e gates.', 'Revalidar após mudança de modelo, prompt, tool ou corpus.'],
    source: { label: 'OWASP · AI and Agentic Red Teaming Q2 2026', url: 'https://genai.owasp.org/resource/ai-security-solutions-landscape-for-ai-and-agentic-red-teaming-q2-2026/' },
  },
  {
    id: 'ai-assisted-pentest',
    tag: 'PENTEST COM IA',
    title: 'IA pode acelerar o pentest sem substituir validação humana',
    subtitle: 'Use IA para ampliar hipóteses, organizar evidências e revisar cobertura — não para declarar vulnerabilidade sozinha.',
    body: 'Assistentes podem ajudar a gerar casos de teste, comparar respostas, resumir traces, agrupar comportamentos anômalos e sugerir lacunas de cobertura. A conclusão continua exigindo reprodução, contexto, autorização, impacto real e revisão humana.',
    imageIcon: '🧠',
    signal: 'ASSIST → VALIDATE → EVIDENCE',
    frameworks: ['OWASP Testing Guide', 'NIST SSDF', 'OWASP SAMM'],
    checklist: ['Não enviar segredos ou dados sensíveis a modelos não aprovados.', 'Exigir reprodução humana para findings.', 'Guardar prompts de teste e versão do modelo quando forem parte da evidência.', 'Medir ganho de cobertura e falsos positivos.'],
    source: { label: 'OWASP · AI Red Teaming Initiative', url: 'https://genai.owasp.org/initiatives/ai-red-teaming-initiative/' },
  },
  {
    id: 'agent-authorization',
    tag: 'AGENTIC APPSEC',
    title: 'O controle mais importante do agente pode estar fora do LLM: autorização por ação',
    subtitle: 'Ferramentas deveriam validar identidade e política mesmo quando o pedido veio de um modelo “confiável”.',
    body: 'Um agente pode interpretar linguagem natural, mas a decisão final sobre ler, gravar, excluir, aprovar ou enviar deve continuar protegida por controles determinísticos. O modelo sugere uma intenção; a aplicação aplica política e autorização.',
    imageIcon: '🪪',
    signal: 'MODEL ≠ AUTHORIZATION',
    frameworks: ['OWASP Agentic Security', 'OWASP ASVS', 'Zero Trust'],
    checklist: ['Identidade dedicada para agentes.', 'Least privilege por ferramenta.', 'Aprovação humana para ações de alto impacto.', 'Logs de tool calls com usuário, agente e alvo.'],
    source: { label: 'OWASP · Agentic AI Security', url: 'https://genai.owasp.org/resource/ai-security-solutions-landscape-for-agentic-ai-q2-2026/' },
  },
  {
    id: 'rag-trust-boundary',
    tag: 'RAG / DATA',
    title: 'RAG precisa de autorização antes do retrieval, não depois do texto chegar ao modelo',
    subtitle: 'O vector store faz parte da superfície de autorização e isolamento de dados.',
    body: 'Quando documentos de múltiplos usuários, áreas ou clientes entram no mesmo índice, a busca deve respeitar a identidade e o escopo do solicitante. A aplicação não deveria depender do LLM para “decidir não mostrar” conteúdo que já foi recuperado indevidamente.',
    imageIcon: '📚',
    signal: 'IDENTITY → RETRIEVAL → CONTEXT',
    frameworks: ['OWASP GenAI Data Security', 'OWASP ASVS', 'NIST Privacy Framework'],
    checklist: ['Autorizar antes do retrieval.', 'Testar isolamento cross-user e cross-tenant.', 'Validar proveniência e atualização do corpus.', 'Definir retenção de embeddings e traces.'],
    source: { label: 'OWASP · GenAI Data Security Risks & Mitigations 2026', url: 'https://genai.owasp.org/resource/owasp-genai-data-security-risks-mitigations-2026/' },
  },
  {
    id: 'security-gate-context',
    tag: 'SECURITY GATES',
    title: 'CVSS alto não precisa significar o mesmo gate em todo sistema',
    subtitle: 'Exploração, reachability, exposição e blast radius ajudam a transformar severidade em decisão operacional.',
    body: 'Um gate útil distingue finding catalogado de blocker e deixa o critério transparente para desenvolvimento e produto. O scanner produz evidência; o gate aplica uma política baseada em contexto e risco.',
    imageIcon: '🚦',
    signal: 'FINDING → CONTEXT → DECISION',
    frameworks: ['NIST SSDF', 'OWASP SAMM', 'CISA KEV', 'SSVC'],
    checklist: ['Separar severidade de urgência.', 'Definir blocker por contexto.', 'Versionar exceções e prazo.', 'Registrar evidência usada na decisão.'],
    source: { label: 'NIST · Secure Software Development Framework', url: 'https://csrc.nist.gov/pubs/sp/800/218/final' },
  },
  {
    id: 'sbom-provenance',
    tag: 'SUPPLY CHAIN',
    title: 'SBOM + provenance: composição e origem precisam conversar',
    subtitle: 'Saber quais componentes existem não prova como o artefato foi construído.',
    body: 'Use SBOM para composição e attestations/provenance para vincular artefato ao builder, inputs, commit e processo esperado. O gate de promoção pode verificar os dois antes de aceitar uma imagem ou pacote.',
    imageIcon: '📦',
    signal: 'COMPONENTS + BUILD ORIGIN',
    frameworks: ['SLSA', 'CycloneDX', 'SPDX', 'NIST SSDF'],
    checklist: ['Gerar SBOM no release.', 'Gerar provenance no build.', 'Assinar attestations.', 'Verificar antes da promoção.'],
    source: { label: 'SLSA · Specification', url: 'https://slsa.dev/spec/' },
  },
  {
    id: 'api-object-auth',
    tag: 'API SECURITY',
    title: 'Autorização por objeto continua sendo um teste essencial em APIs',
    subtitle: 'Autenticar o usuário não prova que ele pode acessar cada recurso solicitado.',
    body: 'Endpoints que recebem IDs, chaves ou referências de objetos precisam verificar ownership, tenant e política para cada operação. Testes devem comparar perfis e contextos autorizados sem depender apenas da camada de autenticação.',
    imageIcon: '🔗',
    signal: 'WHO → OBJECT → ACTION',
    frameworks: ['OWASP API Security Top 10', 'OWASP ASVS'],
    checklist: ['Cobrir leitura e escrita.', 'Comparar usuários e tenants.', 'Validar autorização no backend.', 'Criar testes automatizados de regressão.'],
    source: { label: 'OWASP · API Security Top 10', url: 'https://owasp.org/API-Security/' },
  },
  {
    id: 'resource-budgets',
    tag: 'ABUSE RESILIENCE',
    title: 'Limites de recurso são parte de AppSec, especialmente em APIs e IA',
    subtitle: 'Tokens, chamadas de tools, upload, concorrência e operações caras precisam de budgets explícitos.',
    body: 'Uma aplicação pode estar “funcionalmente correta” e ainda permitir consumo desproporcional de CPU, memória, chamadas externas ou custo de modelo. Resource budgets deveriam ser requisito, teste e telemetria.',
    imageIcon: '📈',
    signal: 'COST / RATE / CONCURRENCY',
    frameworks: ['OWASP API Security', 'OWASP GenAI Security', 'NIST SSDF'],
    checklist: ['Definir limites por usuário e operação.', 'Testar degradação segura.', 'Monitorar custo e saturação.', 'Tratar limite como contrato de produto.'],
    source: { label: 'OWASP · API Security Project', url: 'https://owasp.org/API-Security/' },
  },
  {
    id: 'ci-trust-boundary',
    tag: 'CI/CD SECURITY',
    title: 'Pipeline é uma trust boundary: código não confiável não deveria herdar segredos de release',
    subtitle: 'Eventos, runners, tokens e permissões precisam refletir quem controla o código executado.',
    body: 'O desenho seguro do CI/CD separa validação de código não confiável de etapas privilegiadas. Tokens curtos, least privilege, ambientes protegidos e approval gates reduzem o impacto de automações comprometidas.',
    imageIcon: '⚙️',
    signal: 'SOURCE → RUNNER → TOKEN → RELEASE',
    frameworks: ['NIST SSDF', 'SLSA', 'OWASP SAMM'],
    checklist: ['Revisar permissões por job.', 'Separar build de release privilegiado.', 'Evitar segredos em execução não confiável.', 'Usar ambientes e approvals para produção.'],
    source: { label: 'NIST · Secure Software Development Framework', url: 'https://csrc.nist.gov/pubs/sp/800/218/final' },
  },
  {
    id: 'continuous-validation',
    tag: 'CONTINUOUS APPSEC',
    title: 'Mudou modelo, dependência, policy ou integração? Parte da segurança precisa ser revalidada',
    subtitle: 'Aplicações modernas mudam sem um “novo projeto”; o controle precisa acompanhar a mudança relevante.',
    body: 'Defina quais eventos invalidam uma evidência anterior: troca de modelo, mudança de corpus, nova ferramenta do agente, nova dependência crítica, novo endpoint ou alteração de trust boundary. Isso transforma segurança em ciclo e não em fotografia.',
    imageIcon: '🔁',
    signal: 'CHANGE → REASSESS',
    frameworks: ['NIST SSDF', 'OWASP SAMM', 'OWASP GenAI Red Teaming'],
    checklist: ['Definir triggers de reteste.', 'Relacionar evidência à versão.', 'Automatizar o que for repetível.', 'Manter revisão humana para lógica e impacto.'],
    source: { label: 'OWASP · AI Red Teaming Initiative', url: 'https://genai.owasp.org/initiatives/ai-red-teaming-initiative/' },
  },
];

export const aiPentestSsdlc = [
  { phase: '01 · DISCOVER', title: 'Inventário de IA', detail: 'Descobrir modelos, RAGs, agentes, copilots, automações, dados, ferramentas e owners.' },
  { phase: '02 · CLASSIFY', title: 'Tier de risco', detail: 'Classificar sensibilidade de dados, autonomia, impacto da ação, exposição e criticidade do processo.' },
  { phase: '03 · THREAT MODEL', title: 'Trust boundaries de IA', detail: 'Modelar input, contexto, retrieval, memória, ferramentas, identidade, output e integrações.' },
  { phase: '04 · BUILD', title: 'Controles no design', detail: 'Least privilege, autorização determinística, isolamento, validação, budgets, logging e aprovação humana.' },
  { phase: '05 · TEST', title: 'AI security testing', detail: 'Executar testes adversariais autorizados, isolamento de dados, autorização, misuse e comportamento fora do fluxo feliz.' },
  { phase: '06 · GATE', title: 'Critério de release', detail: 'Transformar evidência em blockers, risco aceito, exceção com prazo e requisito de correção.' },
  { phase: '07 · RUN', title: 'Monitorar e revalidar', detail: 'Observar uso, custos, tools, decisões e eventos que disparam novo teste.' },
];

export const appSecFrameworkLibrary = [
  { name: 'OWASP ASVS', use: 'Requisitos verificáveis para aplicações web e serviços.' },
  { name: 'OWASP SAMM', use: 'Maturidade de segurança de software e evolução do programa.' },
  { name: 'NIST SSDF', use: 'Práticas de desenvolvimento seguro ao longo do ciclo.' },
  { name: 'OWASP API Security', use: 'Riscos e controles específicos para APIs.' },
  { name: 'OWASP GenAI Security', use: 'Riscos de aplicações com LLMs, RAG e agentes.' },
  { name: 'NIST AI 100-2', use: 'Taxonomia de adversarial machine learning e mitigação.' },
  { name: 'NIST AI RMF', use: 'Gestão de risco e governança de sistemas de IA.' },
  { name: 'MITRE ATLAS', use: 'Conhecimento de táticas e técnicas contra sistemas de IA.' },
  { name: 'SLSA', use: 'Integridade e provenance da cadeia de software.' },
  { name: 'CISA KEV', use: 'Sinal de exploração conhecida para priorização.' },
];
