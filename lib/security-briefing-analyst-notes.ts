export type SecurityBriefingAnalystNote = {
  evidenceToCollect: string[];
  escalationTriggers: string[];
  decisionGate: string;
};

export const securityBriefingAnalystNotes: Record<string, SecurityBriefingAnalystNote> = {
  'storm-2949-cloud-identity': {
    evidenceToCollect: [
      'Lista atual de contas humanas e workloads com Owner/Contributor e acesso a Key Vault.',
      'Eventos de SSPR, mudança de método de autenticação, PIM/RBAC e leitura de secrets na mesma linha do tempo.',
      'Mapa de quais identidades conseguem sair de M365/Entra e alcançar dados ou workloads de produção.',
    ],
    escalationTriggers: [
      'Leitura de secrets fora do padrão logo após mudança de autenticação ou privilégio.',
      'Conta humana com privilégio persistente em produção e ausência de MFA resistente a phishing.',
      'Alteração de RBAC/PIM sem change ou owner reconhecido.',
    ],
    decisionGate: 'Só encerrar como controlado quando for possível provar que recuperação de conta, privilégio cloud e acesso a segredos possuem barreiras independentes e telemetria correlacionável.',
  },
  'cisco-sdwan-cve-2026-20245': {
    evidenceToCollect: [
      'Inventário de Catalyst SD-WAN Manager com versão, owner, exposição e caminho administrativo.',
      'Running config comparada ao baseline conhecido e trilha de alterações privilegiadas.',
      'Lista de administradores, MFA e origem de rede dos logins recentes.',
    ],
    escalationTriggers: [
      'Versão vulnerável com management plane exposto a rede ampla ou internet.',
      'Conta administrativa compartilhada, sem MFA forte ou com atividade atípica.',
      'Gaps de log, arquivos/configuração alterados ou sinais antiforenses.',
    ],
    decisionGate: 'Considerar o risco reduzido somente após confirmar versão corrigida, restringir o management plane e demonstrar visibilidade sobre toda alteração administrativa.',
  },
  'mastra-npm-supply-chain': {
    evidenceToCollect: [
      'Lockfiles, SBOMs e histórico de builds da janela de comprometimento.',
      'Presença de easy-day-js, scripts de lifecycle e downloads executados durante npm install.',
      'Quais secrets, tokens e permissões estavam disponíveis para developers e runners afetados.',
    ],
    escalationTriggers: [
      'Versão afetada consumida em runner com secrets ou credencial de publicação.',
      'Postinstall com egress não esperado ou download de segundo estágio.',
      'Artefato produzido na janela sem provenance suficiente para reconstrução.',
    ],
    decisionGate: 'Fechar o incidente apenas quando builds expostos forem identificados, credenciais potencialmente acessíveis forem tratadas e artefatos puderem ser reconstruídos a partir de cadeia limpa.',
  },
  'exposed-serverless-functions': {
    evidenceToCollect: [
      'Inventário de funções/Cloud Run públicos com owner, auth e justificativa de exposição.',
      'IAM efetivo da workload identity e recursos alcançáveis por ela.',
      'Logs de invocação, acesso a metadata/secrets e egress associados ao workload.',
    ],
    escalationTriggers: [
      'Endpoint público sem autenticação explícita combinado com identidade privilegiada.',
      'RCE/injection com acesso a metadata, secrets, storage ou VPC interna.',
      'Service account padrão ou permissões herdadas além da necessidade da função.',
    ],
    decisionGate: 'A função só deve ser classificada como exposição aceitável quando o blast radius pós-comprometimento estiver demonstravelmente limitado.',
  },
  'ai-assisted-vulnerability-management': {
    evidenceToCollect: [
      'Matriz de ferramentas que o agente pode chamar e permissões efetivas por integração.',
      'Trilha auditável de prompt, contexto, tool calls, alterações e aprovações humanas.',
      'Casos em que o agente consegue escrever em repo, ticket, pipeline ou ambiente sem segunda aprovação.',
    ],
    escalationTriggers: [
      'Agente com merge/deploy/write e acesso simultâneo a conteúdo não confiável.',
      'Secrets no contexto ou tool chain sem delimitação de propósito.',
      'Mudança automática de alto impacto sem policy check determinístico e rollback.',
    ],
    decisionGate: 'A automação deve permanecer em recomendação/triagem até existir identidade própria, least privilege, aprovação para ações críticas e auditoria reproduzível.',
  },
  'gtig-ai-threat-tracker-2026': {
    evidenceToCollect: [
      'Tempo real entre advisory/exploração pública, identificação de ativo, owner e mitigação.',
      'Cobertura de ativos internet-facing e exceções sem compensating control.',
      'Integração operacional entre KEV/EPSS/threat intel e fila de vulnerabilidades.',
    ],
    escalationTriggers: [
      'Ativo edge explorável sem owner ou sem caminho de mitigação rápida.',
      'Fila manual excedendo a janela observada entre divulgação e exploração.',
      'Exceção vencida ou sem controle compensatório verificável.',
    ],
    decisionGate: 'O programa está preparado quando exposição orienta SLA e o tempo de resposta é menor que a janela prática de weaponization para ativos críticos.',
  },
  'open-source-supply-chain-2026': {
    evidenceToCollect: [
      'Inventário de actions, plugins, builders e dependências que executam dentro da esteira.',
      'Commit/digest efetivamente executado em cada build e identidade usada pelo job.',
      'Provenance e SBOM vinculados ao artefato final, incluindo componentes de build.',
    ],
    escalationTriggers: [
      'Componente de CI referenciado por tag mutável ou release recém-publicada sem cooldown.',
      'Token de longa duração ou escrita ampla disponível para terceiro executando no pipeline.',
      'Impossibilidade de provar qual builder/action gerou um artefato distribuído.',
    ],
    decisionGate: 'A cadeia está governada quando é possível responder quem executou código no build, com qual identidade, qual origem imutável e qual artefato foi produzido.',
  },
  'agentic-cicd-claude-code': {
    evidenceToCollect: [
      'Eventos que disparam workflows agentic e quais campos externos entram no contexto.',
      'Permissões do GITHUB_TOKEN/tokens equivalentes, secrets, egress e ferramentas liberadas.',
      'Histórico de tool calls, comandos, arquivos alterados e decisões do agente.',
    ],
    escalationTriggers: [
      'Issue/PR/comment controlado por terceiro alcançando job com secret ou write permission.',
      'Prompt injection capaz de mudar ferramentas/comandos sem barreira de policy.',
      'Agente com acesso simultâneo a shell, rede externa e credencial privilegiada.',
    ],
    decisionGate: 'Não aceitar execução privilegiada enquanto conteúdo não confiável e credenciais/ferramentas de escrita compartilharem o mesmo trust boundary.',
  },
  'gentlemen-ransomware': {
    evidenceToCollect: [
      'Cobertura EDR e tamper protection nos endpoints com maior privilégio.',
      'Caminhos de administração remota, contas locais e possibilidade de reutilização de credenciais.',
      'Tempo medido para isolar endpoint e identidade a partir do primeiro alerta.',
    ],
    escalationTriggers: [
      'Execução remota lateral incomum combinada com credencial privilegiada.',
      'Desativação de proteção, limpeza de logs ou propagação simultânea.',
      'Segmentos críticos alcançáveis antes da contenção de identidade/host.',
    ],
    decisionGate: 'A prontidão defensiva precisa ser demonstrada por capacidade de conter identidade e endpoint em minutos e impedir progressão lateral antes da criptografia.',
  },
  'secure-by-design-business': {
    evidenceToCollect: [
      'Percentual de controles críticos que ainda dependem de opt-in ou configuração manual.',
      'Classes de finding que reaparecem em múltiplos produtos e volume de exceções.',
      'Métricas de adoção dos golden paths e esforço gasto em hardening repetitivo.',
    ],
    escalationTriggers: [
      'Mesmo risco reaparecendo em vários produtos por default inseguro.',
      'Controle crítico opcional com baixa adoção e alto custo de correção posterior.',
      'Exceções virando estado permanente sem owner e data de revisão.',
    ],
    decisionGate: 'A melhoria é real quando o default seguro reduz de forma mensurável reincidência, exceções e trabalho manual de segurança entre produtos.',
  },
};
