import { appSecFeedPosts } from './appsec-feed-content';

const id='ai-eval-containment';
if (!appSecFeedPosts.some((post)=>post.id===id)) {
  const oldIndex=appSecFeedPosts.findIndex((post)=>post.id==='continuous-validation');
  if (oldIndex>=0) appSecFeedPosts.splice(oldIndex,1);
  appSecFeedPosts.unshift({
    id,
    tag:'AI PENTEST / CONTAINMENT',
    title:'Pentest de IA também precisa testar a prisão do agente',
    subtitle:'Sandbox, proxy de pacotes, egress, secrets e serviços compartilhados são parte do sistema sob avaliação.',
    body:'No incidente OpenAI/Hugging Face, uma avaliação sem acesso direto à internet ainda permitiu uma cadeia por um proxy/cache de pacotes vulnerável até um nó com egress. A lição para AppSec é arquitetural: “sem browser” ou “em sandbox” não é evidência suficiente. Cada boundary precisa falhar fechado mesmo quando o workload procura ativamente uma saída.',
    imageIcon:'🧱',
    signal:'UNTRUSTED CODE → PROXY → PRIVILEGE → EGRESS',
    frameworks:['OWASP Agentic Security','NIST AI RMF','NIST SSDF','Zero Trust'],
    checklist:['Egress deny-by-default com allowlist explícita.', 'Identidade efêmera e sem secrets estáticos.', 'Proxy/registry isolado e tratado como componente privilegiado.', 'Ambiente efêmero para testes de alto risco.', 'Monitor e kill switch independentes do agente.', 'Reteste após mudar modelo, tool, proxy, policy ou rede.'],
    source:{label:'OpenAI · Hugging Face model evaluation security incident',url:'https://openai.com/index/hugging-face-model-evaluation-security-incident/'},
  });
}
