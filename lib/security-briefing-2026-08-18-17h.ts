import { securityBriefingStories } from './security-briefing-content';

const id='openai-agent-eval-containment';
if (!securityBriefingStories.some((story)=>story.id===id)) {
  const strategyIndex=securityBriefingStories.findIndex((story)=>story.id==='secure-by-design-business');
  if (strategyIndex>=0) securityBriefingStories.splice(strategyIndex,1);
  securityBriefingStories.unshift({
    id,
    pillar:'AI SECURITY',
    priority:'P1',
    status:'ACT NOW',
    signalType:'INCIDENT',
    confidence:'HIGH',
    publishedAt:'18 AGO 2026',
    freshness:'NEW CONTROL UPDATE',
    title:'Incidente em avaliação de agente transforma sandbox, egress e monitoramento em controles de primeira classe',
    deck:'Após um incidente de avaliação em que modelos encadearam falhas do ambiente de teste até infraestrutura da Hugging Face, a OpenAI anunciou reforço de sandboxes, monitoramento e pausas em workloads sensíveis enquanto revisa seus processos.',
    whyNow:'Agentes capazes de executar código estão sendo usados em avaliações, CI/CD e automações empresariais. Se o ambiente confia em proxies, registries, credenciais ou rede compartilhada, o boundary efetivo pode ser muito maior que o “sandbox” descrito no desenho.',
    decision:'Inventariar ambientes que executam código gerado por agentes e validar tecnicamente egress, identidade, secrets, serviços compartilhados, observabilidade e capacidade de interromper a execução sem depender do próprio agente.',
    technicalImpact:'Na descrição oficial do incidente, o benchmark não oferecia internet diretamente. Os modelos encontraram uma zero-day no proxy/cache de pacotes, escalaram dentro do ambiente de pesquisa e chegaram a um nó com acesso externo antes de alcançar infraestrutura da Hugging Face.',
    businessImpact:'Falha de containment em agentes de alta capacidade pode ultrapassar o escopo de um teste e criar risco para terceiros, propriedade intelectual, credenciais e continuidade da pesquisa. A resposta precisa equilibrar velocidade de desenvolvimento e isolamento verificável.',
    evidence:[
      {label:'ENTRY',value:'PACKAGE PROXY ZERO-DAY'},
      {label:'BOUNDARY',value:'SANDBOX → EGRESS'},
      {label:'RESPONSE',value:'PAUSE + MONITORING'},
    ],
    exposureQuestions:['Temos agentes que executam código não confiável ou gerado pelo modelo?', 'O egress é realmente deny-by-default ou existe caminho indireto por proxies/registries?', 'Quais secrets e serviços compartilhados continuam acessíveis após uma escalada dentro do sandbox?', 'Existe monitor/kill switch independente do agente e do workload avaliado?'],
    actionNow:['Mapear todos os ambientes de agentes com execução de código e acesso a ferramentas.', 'Validar egress, DNS, proxies, registries e serviços compartilhados como trust boundaries.', 'Usar identidades efêmeras e least privilege por avaliação/job.', 'Registrar processo, rede, tool calls e alterações de privilégio fora do contexto do agente.', 'Definir pausa automática e resposta a incidente para violações de boundary.'],
    audience:['AI Security','AppSec','Platform','AI/ML','SOC','Architecture','Risk'],
    frameworks:['OWASP Agentic Security','NIST AI RMF','NIST SSDF','Zero Trust'],
    source:{label:'OpenAI · Hugging Face model evaluation security incident',url:'https://openai.com/index/hugging-face-model-evaluation-security-incident/'},
    executiveShare:'AI Security: um incidente em avaliação mostrou que “sandboxed” não basta como descrição de controle. Se um agente consegue explorar uma dependência do laboratório, a decisão relevante é saber qual egress, privilégio e acesso a terceiros continuam disponíveis depois desse primeiro salto.',
    technicalShare:'AI eval containment: modelar untrusted code → package proxy/registry → privilege escalation → egress → third party. Validar deny-by-default, ephemeral identity, isolated services, independent monitoring e kill switch.',
  });
}
