import { dailyContent, todayDrops } from './daily-content';

const set=(slug:string,data:any)=>Object.assign(dailyContent[slug],data);
const cyberDrop=todayDrops.find((item)=>item.slug==='seguranca');
if(cyberDrop) Object.assign(cyberDrop,{
  title:'Roubo de sessão: por que MFA não encerra a história do phishing',
  detail:'Ataques AiTM podem capturar cookies ou tokens de sessão depois da autenticação; resposta precisa olhar sessão, dispositivo, localização e ações posteriores.'
});
const appsecDrop=todayDrops.find((item)=>item.slug==='appsec-ssdlc');
if(appsecDrop) Object.assign(appsecDrop,{
  title:'BOLA/IDOR: autorização precisa acontecer no objeto, não só no login',
  detail:'Uma API pode autenticar corretamente o usuário e ainda expor o objeto de outra pessoa quando confia em IDs enviados pelo cliente sem checar ownership/permissão.'
});

set('seguranca',{
  title:'Roubo de cookie de sessão: MFA pode ter funcionado e a conta ainda assim ser sequestrada',
  summary:'Em ataques adversary-in-the-middle (AiTM), uma página de phishing atua como proxy entre vítima e serviço legítimo. O usuário pode concluir senha e MFA corretamente, enquanto o atacante captura o cookie ou token da sessão autenticada e tenta reutilizá-lo.',
  shareSummary:'Cyber: MFA continua essencial, mas sessão roubada muda a resposta. Em phishing AiTM, o atacante pode capturar cookie/token depois do login; investigue sessão, dispositivo, localização e ações feitas com a conta.',
  readTime:'8 MIN READ',
  badge:'CYBER / SESSION THEFT',
  stats:[{label:'VETOR',value:'AiTM'},{label:'ALVO',value:'SESSÃO'},{label:'MFA',value:'NÃO BASTA SOZINHO'}],
  sections:[
    {title:'Como o ataque muda a pergunta',paragraphs:['O problema deixa de ser apenas “a senha vazou?”. Um proxy de phishing pode acompanhar a autenticação em tempo real e capturar o artefato que representa a sessão já autenticada.']},
    {title:'O que investigar',bullets:['Alertas de cookie/token roubado ou autenticação associada a AiTM.','Novas localizações, IPs e dispositivos no mesmo ID de sessão.','Downloads em massa ou acessos incomuns após o login.','Regras de encaminhamento, novas credenciais ou métodos MFA adicionados.','Revogação de sessões e tokens quando o incidente for confirmado.']},
    {title:'Defesa em camadas',paragraphs:['MFA resistente a phishing, sessões mais curtas conforme o risco, Conditional Access, proteção do dispositivo e detecção de replay reduzem o espaço do atacante. Nenhum controle isolado elimina todos os vetores de roubo de token.']}
  ],
  sources:[
    {label:'Microsoft Defender XDR · Session cookie theft alert · jul/2026',url:'https://learn.microsoft.com/en-us/defender-xdr/session-cookie-theft-alert'},
    {label:'Microsoft Entra ID · Token theft attack vectors',url:'https://learn.microsoft.com/en-us/entra/identity/devices/concept-tokens-microsoft-entra-id'}
  ]
});

set('appsec-ssdlc',{
  title:'BOLA/IDOR: autenticar o usuário não significa autorizar o objeto',
  summary:'Broken Object Level Authorization continua um dos erros mais importantes em APIs: o endpoint aceita um identificador enviado pelo cliente e acessa o registro correspondente sem validar se aquele usuário pode executar aquela ação naquele objeto específico.',
  shareSummary:'AppSec: BOLA/IDOR acontece quando a API confia no ID enviado pelo cliente sem validar autorização no objeto. Teste leitura, alteração e exclusão entre usuários/tenants — login válido não basta.',
  readTime:'9 MIN READ',
  badge:'APPSEC / API AUTHZ',
  stats:[{label:'OWASP API',value:'API1:2023'},{label:'FALHA',value:'OBJECT AUTHZ'},{label:'TESTE',value:'CROSS-USER'}],
  sections:[
    {title:'O padrão vulnerável',paragraphs:['Um usuário autenticado chama um endpoint legítimo como /orders/{id}, /documents/{id} ou /profiles/{id}. Se trocar o identificador e receber ou alterar o objeto de outro usuário, a autenticação está funcionando — a autorização por objeto é que falhou.']},
    {title:'Como corrigir no desenho',bullets:['Centralize política de autorização em vez de repetir ifs ad hoc.','Valide actor + ação + objeto em toda função que recebe identificador controlado pelo cliente.','Não confie em UUID como controle de acesso; imprevisibilidade é defesa adicional, não autorização.','Inclua tenant/ownership e escopo de negócio na decisão.','Teste leitura, update, delete e ações sensíveis entre identidades diferentes.']},
    {title:'Como isso entra no SSDLC',paragraphs:['Crie testes negativos automatizados com dois usuários ou dois tenants e faça o pipeline falhar quando uma identidade consegue operar sobre objeto que não possui. Para APIs críticas, isso é mais útil do que procurar apenas padrões de código sem contexto de autorização.']}
  ],
  sources:[
    {label:'OWASP API Security · API1:2023 Broken Object Level Authorization',url:'https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/'}
  ]
});
