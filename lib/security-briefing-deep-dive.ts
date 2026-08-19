export type SecurityBriefingDeepDive = {
  attackPath: string[];
  controlsToValidate: string[];
  telemetryToCheck: string[];
  decisionOwner: string;
  horizon: string;
  successCriteria: string;
  discussionPrompt: string;
};

export const securityBriefingDeepDive: Record<string, SecurityBriefingDeepDive> = {
  'storm-2949-cloud-identity': {
    attackPath: ['Identidade comprometida / recuperação de conta', 'Acesso SaaS e discovery', 'Privilégio no control plane Azure', 'Acesso a Key Vault / secrets', 'Expansão para workloads e dados de produção'],
    controlsToValidate: ['MFA resistente a phishing para privilégios', 'Governança de SSPR e recuperação de conta', 'PIM/JIT para Owner e Contributor', 'RBAC mínimo em Key Vault e workloads', 'Detecção de leitura anômala de secrets'],
    telemetryToCheck: ['Entra sign-ins e alterações de método de autenticação', 'Audit logs de RBAC/PIM', 'Key Vault SecretGet/SecretList fora do padrão', 'Correlação de identidade entre M365 e Azure', 'Mudanças administrativas seguidas de acesso a produção'],
    decisionOwner: 'IAM + Cloud Security + SOC',
    horizon: '24–72H',
    successCriteria: 'Contas privilegiadas mapeadas, recuperação endurecida e alertas capazes de correlacionar identidade → privilégio → secret → workload.',
    discussionPrompt: 'Uma única identidade humana consegue hoje alcançar produção e cofres de segredo sem uma segunda barreira independente?',
  },
  'cisco-sdwan-cve-2026-20245': {
    attackPath: ['Conta administrativa comprometida', 'Acesso ao management plane', 'Exploração da falha no appliance', 'Escalada para root', 'Persistência/antiforense e impacto na camada de rede'],
    controlsToValidate: ['Versão corrigida/advisory aplicado', 'Management plane restrito por rede', 'MFA e contas administrativas individuais', 'Backup de configuração íntegro', 'Monitoramento de alteração de configuração'],
    telemetryToCheck: ['Logins administrativos incomuns', 'Uploads e mudanças de arquivo/configuração', 'Criação/alteração de usuários privilegiados', 'Gaps ou limpeza anômala de logs', 'Diferenças entre configuração esperada e running config'],
    decisionOwner: 'Network Security + Infra + Vulnerability Management',
    horizon: 'IMEDIATO',
    successCriteria: 'Inventário completo, exposição administrativa reduzida, versão validada e evidência de que alterações privilegiadas são detectáveis.',
    discussionPrompt: 'Se uma credencial administrativa de SD-WAN vazar, qual barreira ainda impede controle total do appliance?',
  },
  'mastra-npm-supply-chain': {
    attackPath: ['Comprometimento de conta de maintainer', 'Publicação/dependency injection', 'Instalação de dependência', 'Execução em lifecycle/postinstall', 'Acesso ao contexto do desenvolvedor ou runner', 'Possível exposição de secrets/artefatos'],
    controlsToValidate: ['Lockfile imutável', 'Política de lifecycle scripts', 'Registry/proxy interno', 'Cooldown/release-age para pacotes novos', 'Segredos ausentes durante instalação não confiável', 'Provenance/SBOM vinculados ao build'],
    telemetryToCheck: ['Mudança inesperada de versão/transitive dependency', 'Scripts preinstall/install/postinstall', 'Download de binários durante instalação', 'Egress do package manager/runner', 'Uso de secrets logo após instalação'],
    decisionOwner: 'AppSec + DevSecOps + Platform',
    horizon: '24–72H',
    successCriteria: 'Saber quais builds consumiram a versão, quais credenciais estavam disponíveis e conseguir reconstruir artefatos limpos rapidamente.',
    discussionPrompt: 'Nosso pipeline executa código de dependência antes ou depois de receber credenciais e acesso de escrita?',
  },
  'exposed-serverless-functions': {
    attackPath: ['Endpoint público', 'Falha de aplicação/autorização', 'Execução no workload', 'Acesso à identidade da função', 'Pivot para secrets, storage, APIs ou VPC'],
    controlsToValidate: ['Autenticação/autorização explícita', 'Workload identity dedicada', 'Least privilege por função', 'Egress e acesso a metadata restritos', 'Secret Manager em vez de segredo estático', 'WAF/rate limits quando aplicável'],
    telemetryToCheck: ['Inventário de endpoints públicos', 'Invocações anômalas e erros 4xx/5xx', 'Uso de service account fora do padrão', 'Acesso incomum a secrets', 'Egress e chamadas laterais após invocação'],
    decisionOwner: 'Cloud Security + AppSec + Platform',
    horizon: '7 DIAS',
    successCriteria: 'Toda função pública possui owner, justificativa, identidade mínima e trilha para provar quais recursos ela alcança.',
    discussionPrompt: 'Se uma função pública sofrer RCE, a identidade do workload limita o blast radius ou amplia o incidente?',
  },
  'ai-assisted-vulnerability-management': {
    attackPath: ['Scanner/advisory produz sinal', 'LLM enriquece contexto', 'Agente prioriza/recomenda ação', 'Tool access interage com repo/ticket/pipeline', 'Mudança automática pode alcançar produção'],
    controlsToValidate: ['Identidade própria para agentes', 'Least privilege por ferramenta', 'Human approval para mudanças de alto impacto', 'Policy checks determinísticos', 'Audit trail de prompt/context/tool call', 'Proteção de dados sensíveis no contexto'],
    telemetryToCheck: ['Quem acionou o agente', 'Modelo/prompt/policy usados', 'Tool calls executadas', 'Arquivos/tickets alterados', 'Aprovações humanas', 'Falhas/reversões pós-automação'],
    decisionOwner: 'Vulnerability Management + AppSec + AI Governance',
    horizon: '30 DIAS',
    successCriteria: 'IA acelera triagem sem obter privilégio implícito de merge/deploy e toda decisão automatizada é reproduzível/auditável.',
    discussionPrompt: 'Estamos automatizando análise ou já automatizamos mudança antes de possuir governança suficiente?',
  },
  'gtig-ai-threat-tracker-2026': {
    attackPath: ['Pesquisa acelerada de vulnerabilidade', 'Adaptação rápida de exploração', 'Initial access', 'Automação de discovery/ações subsequentes', 'Redução da janela defensiva'],
    controlsToValidate: ['Inventário de ativos internet-facing', 'Owner mapping automático', 'SLA orientado à exposição', 'Compensating controls pré-aprovados', 'KEV/EPSS/threat intel integrados à fila'],
    telemetryToCheck: ['Tempo advisory → identificação de ativo', 'Tempo ativo → owner', 'Tempo owner → mitigação', 'Cobertura de edge assets', 'Exceções sem compensating control'],
    decisionOwner: 'Vulnerability Management + SOC + Infra',
    horizon: 'CONTÍNUO',
    successCriteria: 'MTTR medido por exposição e capacidade de mitigar edge assets antes que a fila manual vire gargalo.',
    discussionPrompt: 'Quanto tempo real levamos entre uma nova exploração pública e a primeira ação em cada ativo exposto?',
  },
  'open-source-supply-chain-2026': {
    attackPath: ['Repositório/action/dependência terceiro', 'Execução no CI/CD', 'Identidade/token de automação', 'Build/artifact', 'Distribuição downstream'],
    controlsToValidate: ['Inventário de actions/plugins/builders', 'Pin por digest/commit quando possível', 'OIDC/tokens curtos', 'Registry e allowlist', 'Provenance do artefato', 'Cooldown para releases novas'],
    telemetryToCheck: ['Mudança de action/dependency', 'Origem/digest do builder', 'Emissão e uso de token OIDC', 'Acesso a registry', 'Provenance/SBOM do artefato final'],
    decisionOwner: 'AppSec + Platform + Supply Chain',
    horizon: '30 DIAS',
    successCriteria: 'Conseguir responder rapidamente quais terceiros executaram código em cada build e com qual identidade.',
    discussionPrompt: 'Nosso SBOM cobre somente bibliotecas ou também os componentes que executam dentro da esteira?',
  },
  'agentic-cicd-claude-code': {
    attackPath: ['Issue/PR/comment não confiável', 'Conteúdo entra no contexto do agente', 'Prompt injection influencia decisão', 'Agente usa tools/secrets/write access', 'Possível exfiltração ou alteração de código'],
    controlsToValidate: ['Separação de jobs trusted/untrusted', 'Sem secrets em eventos externos', 'Permissões mínimas de repo', 'Tool allowlist e sandbox consistente', 'Egress controlado', 'Versões de actions/agentes fixadas'],
    telemetryToCheck: ['Evento que disparou o workflow', 'Conteúdo fornecido ao agente', 'Tool calls e comandos', 'Acesso a secrets', 'Mudanças de arquivo/PR', 'Network egress'],
    decisionOwner: 'AppSec + DevSecOps + AI Security',
    horizon: 'IMEDIATO',
    successCriteria: 'Conteúdo externo não consegue alcançar secret, write permission ou ferramenta privilegiada no mesmo trust boundary.',
    discussionPrompt: 'Qual conteúdo controlado por terceiros entra hoje em workflows de IA que também possuem secrets ou escrita?',
  },
  'gentlemen-ransomware': {
    attackPath: ['Acesso inicial', 'Escalada/credenciais', 'Movimento lateral', 'Propagação simultânea', 'Exfiltração', 'Criptografia/extorsão'],
    controlsToValidate: ['Admin local não reutilizado', 'Segmentação', 'EDR tamper protection', 'Restrição/monitoramento de execução remota', 'Isolamento rápido de host e identidade', 'Backup testado e separado'],
    telemetryToCheck: ['PSExec/WMI/remote service incomuns', 'Autenticação lateral anômala', 'Desativação de proteção', 'Criação massiva de processos', 'Exfiltração pré-criptografia'],
    decisionOwner: 'SOC + IR + Endpoint + IAM',
    horizon: '7 DIAS',
    successCriteria: 'Playbook consegue conter identidade e endpoint em minutos e impedir que um host comprometido percorra o ambiente.',
    discussionPrompt: 'Se um endpoint privilegiado cair agora, quanto tempo o atacante leva para alcançar outros segmentos antes da contenção?',
  },
  'secure-by-design-business': {
    attackPath: ['Default inseguro ou controle opcional', 'Configuração manual inconsistente', 'Exposição recorrente', 'Finding repetido', 'Incidente/custo operacional transferido ao cliente'],
    controlsToValidate: ['Secure defaults', 'MFA/logging/update habilitados por padrão', 'Golden paths de plataforma', 'Eliminação de classes recorrentes de falha', 'Métricas de adoção e exceção'],
    telemetryToCheck: ['Percentual de controles opt-in', 'Exceções por produto', 'Findings reincidentes', 'Tempo gasto em hardening manual', 'Incidentes ligados a configuração'],
    decisionOwner: 'Product + Engineering + Security Architecture',
    horizon: 'TRIMESTRAL',
    successCriteria: 'Redução mensurável de configuração insegura e de findings que reaparecem em vários produtos.',
    discussionPrompt: 'Quais riscos continuam existindo apenas porque o produto exige que cada time configure segurança manualmente?',
  },
};
