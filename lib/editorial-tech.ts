import type { EditorialDossier } from './editorial-dossier-types';

export const editorialTech: Record<string, EditorialDossier> = {
  tecnologia: {
    readingTime: '9 MIN DE LEITURA',
    title: 'A parte invisível da tecnologia costuma decidir quem realmente vence',
    deck: 'Modelos, chips e demos chamam atenção. Energia, latência, custo, integração, dados e operação decidem se a novidade vira produto de verdade.',
    opening: [
      'Toda grande novidade tecnológica passa por duas fases. Primeiro vem a demonstração: algo parece possível e surpreendente. Depois vem a parte menos glamourosa: tornar aquilo barato, rápido, seguro, confiável e integrado o suficiente para milhões de pessoas usarem sem perceber a complexidade por trás.',
      'É nesse segundo estágio que muita tecnologia “revolucionária” encontra limites. Um modelo de IA pode ser excelente em benchmark e ainda ser caro demais para rodar em escala. Um robô pode funcionar em laboratório e falhar em ambientes imprevisíveis. Um produto pode ser tecnicamente brilhante e perder porque o ecossistema de software é ruim.',
    ],
    sections: [
      {
        kicker: 'IA',
        title: 'Modelo não é produto',
        paragraphs: [
          'Para transformar um modelo em serviço útil, entram autenticação, contexto, memória, observabilidade, controle de custo, guardrails, integração com dados, avaliação de qualidade e uma interface que resolva um problema real.',
          'Por isso, quando surgir um novo modelo, a pergunta mais interessante não é apenas “quanto ele pontuou?”. Pergunte qual custo por tarefa, qual latência, que tipos de erro comete, quais ferramentas consegue usar e o que muda no fluxo de trabalho do usuário.',
        ],
      },
      {
        kicker: 'INFRAESTRUTURA',
        title: 'Chips e energia viraram parte da conversa sobre software',
        paragraphs: [
          'IA de grande escala depende de aceleradores, memória de alta largura de banda, redes rápidas, data centers e energia. Isso cria gargalos físicos em uma área que durante anos pareceu puramente digital.',
          'O efeito é estratégico: fabricantes de chips, provedores de cloud e empresas de energia passam a influenciar diretamente a velocidade de adoção de novas capacidades computacionais.',
        ],
      },
      {
        kicker: 'AGENTES',
        title: 'Autonomia aumenta valor e também aumenta superfície de risco',
        paragraphs: [
          'Um chatbot que responde texto tem um alcance. Um agente capaz de ler e-mail, executar código, abrir tickets, mover dinheiro ou alterar infraestrutura possui outro. Quanto mais ferramentas e permissões, maior o impacto possível de erro, prompt malicioso ou comprometimento.',
          'A discussão tecnológica madura precisa incluir arquitetura de permissão, aprovação humana em ações críticas e rastreabilidade das decisões do agente. Autonomia sem limite não é simplesmente “mais inteligente”; é também mais difícil de controlar.',
        ],
      },
    ],
    callout: {
      label: 'COMO LER TECH NEWS',
      title: 'Demonstração → custo → integração → escala → impacto',
      text: 'Se a notícia só responde ao primeiro item, ainda sabemos pouco sobre o efeito real da tecnologia.',
    },
    takeaways: [
      'Benchmark não mede sozinho valor de produto.',
      'Infraestrutura física voltou a ser um limitador central da computação.',
      'Agentes exigem tratar permissões e ações como parte do design do produto.',
    ],
  },

  seguranca: {
    readingTime: '10 MIN DE LEITURA',
    title: 'O atacante moderno prefere entrar como usuário legítimo',
    deck: 'Roubar sessão, convencer o help desk ou registrar um novo fator de MFA pode ser mais eficiente que explorar uma RCE — porque o ambiente passa a enxergar o invasor como identidade válida.',
    opening: [
      'Durante anos, a imagem popular de invasão foi “explorar uma falha e instalar malware”. Isso continua existindo, mas identidade virou uma rota especialmente valiosa. Se o atacante consegue uma sessão válida ou convence alguém a redefinir o acesso, muitos controles de perímetro deixam de enxergar uma anomalia óbvia.',
      'É por isso que vishing, adversary-in-the-middle, roubo de cookies, abuso de OAuth e engenharia social contra help desk aparecem cada vez mais na mesma cadeia de ataque. O alvo deixa de ser somente a senha. O alvo é a confiança.',
    ],
    sections: [
      {
        kicker: 'IDENTIDADE',
        title: 'MFA reduz risco, mas não torna toda autenticação resistente a phishing',
        paragraphs: [
          'Se o fluxo permite que a vítima aprove uma solicitação falsa, digite um código em página intermediária ou entregue contexto suficiente para um reset, o atacante pode contornar a intenção do segundo fator sem “quebrar” criptografia.',
          'Métodos phishing-resistant reduzem essa classe de ataque porque vinculam a autenticação ao domínio e ao dispositivo de uma forma que um proxy ou página falsa não consegue simplesmente retransmitir.',
        ],
      },
      {
        kicker: 'HELP DESK',
        title: 'Recuperação de conta é parte do sistema de autenticação',
        paragraphs: [
          'Uma política de MFA forte pode ser anulada por um processo de recuperação fraco. Se alguém consegue ligar, convencer o suporte e cadastrar um novo fator, o help desk virou o ponto de bypass.',
          'A operação precisa tratar reset de MFA, troca de dispositivo e recuperação de conta como ações privilegiadas: verificação independente, registro, alertas e limites de quem pode autorizar.',
        ],
      },
      {
        kicker: 'DETECÇÃO',
        title: 'Sessão válida ainda pode produzir comportamento inválido',
        paragraphs: [
          'Quando credenciais são legítimas, detecção baseada só em “login falhou” perde valor. O sinal aparece depois: novo fator cadastrado, acesso de local incomum, download massivo, criação de token, mudança de regra de encaminhamento, uso de aplicação cloud atípica ou elevação de privilégio.',
          'Isso desloca parte da defesa para analytics de identidade e comportamento. O objetivo é perguntar não apenas “quem autenticou?”, mas “o que essa identidade normalmente faz e o que mudou agora?”.',
        ],
      },
      {
        kicker: 'INCIDENTE',
        title: 'Patch e contenção resolvem problemas diferentes',
        paragraphs: [
          'Corrigir a vulnerabilidade impede novas explorações daquela falha. Não prova que ninguém entrou antes. Em ativos expostos durante exploração ativa, investigação precisa procurar persistência, contas, tokens, alterações de configuração e movimentação lateral.',
          'Esse raciocínio é crucial em appliances, VPNs, load balancers e sistemas de identidade: são pontos de confiança com potencial de abrir caminhos para muitos outros ativos.',
        ],
      },
    ],
    callout: {
      label: 'REGRA DE DEFESA',
      title: 'Canal comprometido não pode ser a única prova para recuperar a conta',
      text: 'Se a ligação é ao mesmo tempo pedido, prova de identidade e autorização do reset, o processo tem um único ponto de falha.',
    },
    takeaways: [
      'Identidade legítima pode ser obtida por engenharia social, não apenas roubo de senha.',
      'Help desk e recuperação fazem parte da superfície de autenticação.',
      'Comportamento pós-login é essencial para detectar abuso de sessão.',
    ],
  },

  'appsec-ssdlc': {
    readingTime: '12 MIN DE LEITURA',
    title: 'AppSec maduro não pergunta “quantos findings?” — pergunta “qual caminho chega em produção?”',
    deck: 'SAST, SCA, DAST e secrets produzem sinais. Risco nasce quando esses sinais se conectam a código alcançável, exposição, identidade, pipeline e ativos críticos.',
    opening: [
      'É possível ter milhares de vulnerabilidades e ainda não saber qual corrigir primeiro. Isso acontece porque scanner observa propriedades técnicas; o programa de AppSec precisa adicionar contexto operacional.',
      'A mesma CVE pode ser crítica em uma API pública, irrelevante em um componente não carregado e perigosa de outra forma em um agente de build com acesso a segredos. O trabalho de maturidade é reduzir essa distância entre “finding detectado” e “decisão correta”.',
    ],
    sections: [
      {
        kicker: 'SCA',
        title: 'Presença de dependência não é igual a explorabilidade',
        paragraphs: [
          'SBOM e SCA respondem muito bem “o componente está aqui?”. Depois vem uma pergunta diferente: o caminho vulnerável é utilizado? Essa camada é reachability. Em alguns casos, VEX formaliza que um produto não é afetado, mesmo contendo o componente, por causa de configuração, código não alcançável ou outra condição.',
          'Isso não deve virar desculpa para ignorar dependências. Reachability é contexto adicional, e não substituto para inventário, patching e análise de exposição.',
        ],
      },
      {
        kicker: 'SUPPLY CHAIN',
        title: 'O pipeline é um sistema de produção com privilégios enormes',
        paragraphs: [
          'Um workflow de CI pode acessar código-fonte, tokens, registry, artefatos e ambientes de deploy. Isso significa que um pacote malicioso executado durante build pode ter um blast radius maior que uma vulnerabilidade dentro da própria aplicação.',
          'Por isso supply chain exige provenance, assinatura, pinning de ações, least privilege, isolamento de runners e cuidado especial com secrets disponíveis durante build. A pergunta é: se esta etapa for comprometida, o atacante consegue alterar o que chega em produção?',
        ],
      },
      {
        kicker: 'PRIORIZAÇÃO',
        title: 'CVSS é ponto de partida, não fila de correção',
        paragraphs: [
          'Uma priorização robusta combina gravidade, exploração conhecida, exposição à internet, autenticabilidade, criticidade do ativo, reachability, facilidade de exploração, controles compensatórios e caminho até ativos de maior valor.',
          'É assim que um High explorado e exposto pode ultrapassar um Critical teórico e isolado. A prioridade precisa representar risco operacional, não obedecer cegamente uma coluna numérica.',
        ],
      },
      {
        kicker: 'ATTACK PATH',
        title: 'O finding ganha significado quando você conecta capacidades',
        paragraphs: [
          'SSRF pode dar acesso à rede interna. Metadata exposta pode entregar token. IAM excessivo pode permitir push no registry. Deploy sem verificação de assinatura pode levar execução até produção. Individualmente, os findings parecem separados; juntos, formam uma cadeia.',
          'Essa composição explica por que threat modeling e testes de lógica continuam importantes mesmo com boa automação. O atacante não explora relatórios; ele explora relações entre sistemas.',
        ],
      },
      {
        kicker: 'GATE',
        title: 'Gate bom bloqueia risco explicável',
        paragraphs: [
          '“Block if Critical > 0” é simples, mas perde contexto e produz ruído. Um gate mais maduro pode considerar exploração ativa, presença no KEV, reachability, exposição e criticidade para decidir quando interromper o fluxo.',
          'A explicação precisa sobreviver à pergunta do desenvolvedor: por que exatamente esse finding bloqueou? Se a resposta for apenas “porque o scanner marcou vermelho”, o programa ainda está delegando a decisão à ferramenta.',
        ],
      },
    ],
    callout: {
      label: 'MODELO MENTAL',
      title: 'Finding → capacidade → caminho → ativo → impacto',
      text: 'Essa sequência é uma forma prática de sair da contagem de vulnerabilidades e chegar a risco arquitetural.',
    },
    takeaways: [
      'SCA detecta presença; reachability e VEX adicionam contexto de impacto.',
      'CI/CD deve ser tratado como infraestrutura privilegiada e parte da supply chain.',
      'Prioridade real combina exploração, exposição, reachability, criticidade e attack path.',
    ],
  },
};
