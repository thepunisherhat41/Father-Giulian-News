import type { EditorialDossier } from './editorial-dossier-types';

export const editorialDaily20260817SecurityFix:Record<string,EditorialDossier>={
  seguranca:{
    readingTime:'9 MIN',
    title:'Session hijacking: quando o atacante não precisa vencer o MFA duas vezes',
    deck:'Phishing adversary-in-the-middle pode capturar o cookie ou token que representa uma sessão já autenticada. Isso muda prevenção, detecção e resposta.',
    opening:[
      'MFA reduz muito o risco de tomada de conta por senha roubada, mas a sessão criada depois do login também é um ativo de segurança.',
      'A Microsoft descreve alertas específicos para uso de cookie roubado e autenticação originada em páginas de phishing AiTM; o ponto defensivo é investigar a sessão inteira, não apenas o evento de senha.'
    ],
    sections:[
      {kicker:'CADEIA DE ATAQUE',title:'O proxy malicioso acompanha o login legítimo',paragraphs:['A vítima acessa uma página que intermedeia a conexão com o serviço real. Credenciais e desafio MFA podem ser encaminhados em tempo real e, depois da autenticação, o atacante tenta capturar/reutilizar o cookie de sessão.','Por isso, “MFA aprovado” não encerra a investigação se o navegador, IP, dispositivo ou comportamento da sessão não fazem sentido.']},
      {kicker:'SOC / IR',title:'O que procurar depois do alerta',paragraphs:['Correlacione ID de sessão, origem, dispositivo e ações executadas logo depois do login.'],bullets:['Downloads em massa ou acesso fora do padrão.','Nova regra de encaminhamento de e-mail.','Novo método MFA ou credencial adicionada.','Sessões em geografias incompatíveis ou dispositivos desconhecidos.','Revogação de sessão/token e contenção do usuário quando confirmado.']},
      {kicker:'HARDENING',title:'MFA resistente a phishing é uma camada, não o fim da arquitetura',paragraphs:['FIDO/PKI resistente a phishing, Conditional Access, saúde do dispositivo, duração de sessão adequada ao risco e detecção de token replay reduzem caminhos diferentes. Sessão deve ser tratada como credencial temporária.']}
    ],
    callout:{label:'PARA GUARDAR',title:'Senha e token são segredos diferentes',text:'Trocar a senha pode ser necessário, mas revogar sessões e tokens é igualmente importante quando o artefato roubado é a própria sessão.'},
    takeaways:['MFA pode ter funcionado e a sessão ainda assim ser roubada.','Investigue o ID de sessão e as ações posteriores.','Contenção inclui revogação de sessão/token, não apenas reset de senha.'],
    sources:[{label:'Microsoft Defender XDR · Session cookie theft alert',url:'https://learn.microsoft.com/en-us/defender-xdr/session-cookie-theft-alert'},{label:'Microsoft Entra ID · Token theft attack vectors',url:'https://learn.microsoft.com/en-us/entra/identity/devices/concept-tokens-microsoft-entra-id'}]
  },
  'appsec-ssdlc':{
    readingTime:'10 MIN',
    title:'BOLA/IDOR: autorização precisa ser testada entre identidades, não só com happy path',
    deck:'Uma API pode autenticar perfeitamente e continuar vulnerável se um usuário consegue trocar o ID do objeto e operar sobre dados de outra pessoa ou tenant.',
    opening:[
      'OWASP API1:2023 coloca Broken Object Level Authorization no topo porque APIs trabalham o tempo todo com identificadores controlados pelo cliente.',
      'A falha é simples de explicar e fácil de esquecer: a rota está autorizada para o usuário, mas aquele objeto específico não está.'
    ],
    sections:[
      {kicker:'DESIGN',title:'Actor + action + object',paragraphs:['A decisão de autorização precisa considerar quem está chamando, qual ação está tentando executar e sobre qual objeto/tenant. UUID imprevisível pode dificultar descoberta, mas não substitui controle de acesso.']},
      {kicker:'TESTE',title:'Use duas identidades para tornar o bug visível',paragraphs:['Crie testes negativos com User A e User B — ou Tenant A e Tenant B — e tente ler, alterar, excluir e executar ações sensíveis trocando somente o identificador.'],bullets:['GET de objeto alheio deve falhar.','PUT/PATCH deve validar ownership/permissão.','DELETE exige a mesma decisão de autorização.','Ações como approve/refund/export também precisam de object authz.','Regressões de autorização devem bloquear o pipeline.']},
      {kicker:'ARQUITETURA',title:'Centralize política e diminua autorização esquecida',paragraphs:['Middleware/policy engines ajudam, mas somente se a política receber contexto suficiente do objeto. Um simples “usuário autenticado” ou “role=member” raramente resolve isolamento entre clientes/tenants.']}
    ],
    callout:{label:'ANTI-PADRÃO',title:'“Mas o ID é UUID” não é correção',text:'Identificadores imprevisíveis são defesa adicional. Se o servidor não checa autorização no objeto, vazamento do ID por log, link, resposta ou outro endpoint reabre a falha.'},
    takeaways:['Autenticação não substitui autorização por objeto.','Teste cross-user e cross-tenant automaticamente.','UUID não é controle de acesso.'],
    sources:[{label:'OWASP API Security · API1:2023 BOLA',url:'https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/'}]
  }
};
