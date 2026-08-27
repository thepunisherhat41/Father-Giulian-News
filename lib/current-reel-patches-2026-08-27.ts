export function applyCurrentReelPatches20260827(dailyContent: Record<string, any>) {
  Object.assign(dailyContent.politica, {
    title: 'Radar eleitoral 27/08: Lula é o entrevistado da Globo hoje; pesquisa nova ainda não entrou',
    summary: 'Luiz Inácio Lula da Silva é o entrevistado desta quinta-feira (27) na série presidencial da Globo. A agenda de hoje é tratada como evento anunciado até a participação ocorrer; Flávio Bolsonaro está previsto para 28/08 e Augusto Cury para 29/08. Até esta revisão da manhã, não foi incorporada pesquisa presidencial com divulgação em 27/08: BTG/Nexus, Datafolha e Indexa permanecem contexto de dias anteriores, não “pesquisa de hoje”.',
    shareSummary: 'Política · 27/08: Lula está na agenda de entrevista da Globo hoje. Sem pesquisa presidencial nova de 27/08 incorporada nesta revisão; levantamentos anteriores ficam identificados como contexto.',
    badge: 'POLÍTICA · RADAR 27/08',
    readTime: '5 MIN',
    sections: [
      { title: 'Agenda de hoje', bullets: [
        'Lula está previsto para a entrevista presidencial da Globo nesta quinta-feira (27).',
        'Agenda anunciada não equivale a presença consumada: o status deve mudar somente depois da entrevista ocorrer.',
        'Flávio Bolsonaro está previsto para 28/08 e Augusto Cury para 29/08.'
      ]},
      { title: 'Pesquisas', paragraphs: [
        'Nenhuma pesquisa presidencial com divulgação em 27/08 foi incorporada nesta revisão da manhã. BTG/Nexus (24/08), Datafolha (21/08) e Indexa/Broadcast (26/08) permanecem contexto histórico recente e não devem aparecer como pesquisa publicada hoje.'
      ]},
      { title: 'O que acompanhar', bullets: [
        'Comparecimento efetivo de Lula à sabatina e principais declarações.',
        'Novos registros/divulgações de pesquisa no TSE.',
        'Alterações de horário, presença ou cancelamento das entrevistas de 28 e 29/08.',
        'Pauta e decisões do TSE ao longo do dia.'
      ]}
    ],
    sources: [
      { label: 'UOL · calendário das entrevistas presidenciais da Globo', url: 'https://noticias.uol.com.br/eleicoes/2026/08/26/entrevista-de-augusto-cury-na-globo-veja-quando-e-e-como-assistir.ghtm' },
      { label: 'UOL · panorama das pesquisas recentes · 26/08/2026', url: 'https://noticias.uol.com.br/eleicoes/2026/08/26/pesquisa-presidente-2026-veja-o-que-dizem-os-levantamentos-mais-recentes.ghtm' },
      { label: 'TSE · portal oficial', url: 'https://www.tse.jus.br/' }
    ]
  });

  Object.assign(dailyContent.mundo, {
    title: 'Hormuz tem leve alta de tráfego, mas fluxo continua muito abaixo do normal',
    summary: 'Dados citados pela Reuters nesta quinta-feira (27) mostram 10 navios de commodities atravessando o Estreito de Hormuz na quarta, contra oito na terça, ainda abaixo da média móvel recente e muito distante do nível anterior ao conflito. Irã e Omã continuam negociando regras de gestão e receitas da rota; melhora pontual de tráfego não significa reabertura normalizada.',
    shareSummary: 'Mundo · 27/08: tráfego por Hormuz subiu levemente, mas segue muito abaixo do normal. Irã e Omã continuam negociando; não é correto chamar isso de normalização.',
    badge: 'MUNDO · HORMUZ · 27/08',
    readTime: '4 MIN',
    sections: [
      { title: 'O que mudou hoje', bullets: [
        'Reuters/Kpler contabilizaram 10 navios de commodities em trânsito na quarta, contra oito na terça.',
        'O nível segue abaixo da média móvel recente e muito aquém do fluxo pré-conflito.',
        'Alguns navios podem operar com AIS desligado, portanto as contagens têm limitações.'
      ]},
      { title: 'Negociação em andamento', paragraphs: [
        'Irã e Omã continuam discutindo gestão e receitas do estreito. Enquanto os detalhes não forem formalizados e o fluxo não se recuperar de forma sustentada, negociação não deve ser tratada como reabertura concluída.'
      ]}
    ],
    sources: [
      { label: 'Reuters · Shipping traffic through Strait of Hormuz rises slightly · 27/08/2026', url: 'https://www.reuters.com/world/middle-east/shipping-traffic-through-strait-hormuz-rises-slightly-data-shows-2026-08-27/' },
      { label: 'Reuters · Oil extends losses on hopes for Middle East talks · 27/08/2026', url: 'https://www.reuters.com/business/energy/oil-prices-extend-losses-expectations-talks-ease-middle-east-supply-woes-2026-08-27/' }
    ]
  });

  Object.assign(dailyContent.tempo, {
    title: 'São Paulo começa 27/08 com 18°C, muita nebulosidade e sem chuva no radar',
    summary: 'Boletim do CGE às 00h18 desta quinta-feira registra média de 18°C, aumento de nebulosidade e ausência de áreas de instabilidade sobre a capital. A tendência do dia é de aquecimento em relação à noite anterior; novas atualizações do CGE devem substituir esta fotografia quando houver mudança material.',
    shareSummary: 'Tempo · 27/08: madrugada começou com média de 18°C, muita nebulosidade e sem chuva detectada pelo radar do CGE.',
    badge: 'TEMPO · CGE · 27/08',
    readTime: '3 MIN',
    sections: [
      { title: 'Madrugada', bullets: [
        'Média de temperatura na rede do CGE: 18°C.',
        'Aumento de nebulosidade.',
        'Radar sem áreas de instabilidade sobre a capital no momento do boletim.'
      ]},
      { title: 'Gate de atualização', paragraphs: [
        'Este Reel usa o boletim oficial mais recente localizado para 27/08. Se o CGE publicar mudança material de temperatura, chuva ou umidade ao longo do dia, o card deve ser substituído e não acumulado.'
      ]}
    ],
    sources: [{ label: 'CGE São Paulo · previsão estendida · 27/08/2026 00h18', url: 'https://www.cgesp.org/v3/previsao_estendida.jsp' }]
  });

  Object.assign(dailyContent.tecnologia, {
    title: 'Nvidia e Hugging Face: acordo de US$ 12,9 bi é reportado, mas confirmação das empresas ainda é ponto crítico',
    summary: 'Reuters publicou nesta quinta-feira (27), citando The Information, que a Nvidia concordou em comprar a Hugging Face por US$ 12,9 bilhões. Nvidia e Hugging Face não haviam respondido imediatamente ao pedido de comentário da Reuters. O Reel trata a operação como informação reportada por fonte jornalística, não como anúncio oficial das companhias.',
    shareSummary: 'Tecnologia · 27/08: Reuters relata, citando The Information, acordo de US$ 12,9 bi da Nvidia pela Hugging Face. Sem anúncio oficial das empresas na revisão, o status permanece “reportado”, não “confirmado oficialmente”.',
    badge: 'TECNOLOGIA · M&A · 27/08',
    readTime: '4 MIN',
    sections: [
      { title: 'O que foi reportado', bullets: [
        'The Information reportou acordo de US$ 12,9 bilhões.',
        'Reuters repercutiu a informação nesta quinta-feira (27).',
        'Nvidia e Hugging Face não haviam comentado imediatamente à Reuters.'
      ]},
      { title: 'Por que importa para AppSec e IA', paragraphs: [
        'Hugging Face é infraestrutura central de modelos, datasets e colaboração open source. Uma aquisição desse porte pode afetar governança de modelos, neutralidade de ecossistema, supply chain de artefatos e dependência de plataforma — mas esses efeitos são análise, não consequência consumada.'
      ]}
    ],
    sources: [{ label: 'Reuters · Nvidia agrees to buy Hugging Face for $12.9 billion, The Information reports · 27/08/2026', url: 'https://www.reuters.com/technology/nvidia-talks-acquire-hugging-face-13-billion-deal-business-insider-reports-2026-08-27/' }]
  });

  Object.assign(dailyContent.seguranca, {
    title: 'Gitea sob exploração ativa: CVE-2026-60004 vira prioridade operacional',
    summary: 'BleepingComputer reportou nesta quinta-feira (27) exploração ativa da vulnerabilidade crítica CVE-2026-60004 no Gitea. Para ambientes self-hosted, a prioridade é identificar versões expostas, revisar write access, sinais de exploração e credenciais/secrets alcançáveis pelo serviço.',
    shareSummary: 'Cyber · 27/08: exploração ativa da CVE-2026-60004 no Gitea eleva a prioridade para inventário, patch, hunting e revisão de credenciais/secrets.',
    badge: 'CYBER · EXPLORAÇÃO ATIVA · 27/08',
    readTime: '5 MIN',
    sections: [
      { title: 'Ação imediata', bullets: [
        'Identificar instâncias Gitea expostas e versões afetadas.',
        'Aplicar correção/mitigação oficial disponível.',
        'Revisar logs, contas com write access, tokens, secrets e integrações CI/CD.',
        'Tratar indícios de exploração como incidente, não apenas como vulnerabilidade pendente.'
      ]}
    ],
    sources: [{ label: 'BleepingComputer · Hackers now exploit critical Gitea flaw · 27/08/2026', url: 'https://www.bleepingcomputer.com/news/security/hackers-now-exploit-critical-gitea-flaw-in-code-injection-attacks/' }]
  });

  Object.assign(dailyContent['appsec-ssdlc'], {
    title: 'CVE-2026-60004 no Gitea: write access vira caminho de execução e risco de supply chain',
    summary: 'A exploração ativa reportada em 27/08 muda a priorização AppSec: um serviço Git self-hosted comprometido pode atingir código, pipelines, runners, tokens e segredos. O gate deve considerar reachability, privilégios e blast radius, não apenas CVSS.',
    shareSummary: 'AppSec · 27/08: exploração ativa no Gitea mostra por que write access + execução no serviço deve ser tratado como risco de supply chain e CI/CD.',
    badge: 'APPSEC · SUPPLY CHAIN · 27/08',
    readTime: '5 MIN',
    sections: [
      { title: 'Checklist SSDLC', bullets: [
        'Mapear quais pipelines e runners confiam na instância Gitea.',
        'Rotacionar tokens/secrets se houver evidência de comprometimento.',
        'Revisar permissões de escrita, webhooks e integrações automatizadas.',
        'Adicionar detecção para alterações inesperadas em repositórios e workflows.'
      ]}
    ],
    sources: [{ label: 'BleepingComputer · exploração ativa da CVE-2026-60004 · 27/08/2026', url: 'https://www.bleepingcomputer.com/news/security/hackers-now-exploit-critical-gitea-flaw-in-code-injection-attacks/' }]
  });
}
