export function applyCurrentReelPatches20260826_1128(dailyContent: Record<string, any>) {
  Object.assign(dailyContent['security-briefing'], {
    title: 'Ubiquiti corrige três falhas de severidade máxima em UniFi: patch precisa entrar no radar agora',
    summary: 'A Ubiquiti publicou em 26/08 o Security Advisory Bulletin 067 com falhas críticas em UniFi Protect, UniFi OS e UniFi Talk. Entre elas há command injection e bypass de autenticação exploráveis remotamente; a empresa ainda não informou exploração dessas três falhas em campo. O ponto operacional é inventariar versões expostas e atualizar sem confundir “explorável” com “explorado”.',
    shareSummary: 'Security Briefing 26/08: Ubiquiti publicou o Bulletin 067 com três falhas de severidade máxima em UniFi. Há command injection e auth bypass; não há confirmação pública de exploração dessas três falhas. Prioridade: inventário, exposição, versão e patch.',
    badge: 'SECURITY BRIEFING · UBIQUITI · 26/08',
    readTime: '6 MIN',
    sections: [
      { title: 'O que foi publicado hoje', bullets: [
        'UniFi Protect Application: vulnerabilidade de command injection; versões 7.1.87 e anteriores afetadas; mitigação indicada pela Ubiquiti é 7.2.105 ou superior.',
        'UniFi OS: falha de CRLF injection pode permitir bypass de autenticação em dispositivos/instâncias afetados.',
        'UniFi Talk: falha de command injection também foi corrigida no pacote de segurança publicado hoje.'
      ]},
      { title: 'Explorável ≠ explorado', paragraphs: [
        'A Ubiquiti e o BleepingComputer descrevem caminhos de exploração remota e baixa complexidade, mas não há confirmação pública de que essas três vulnerabilidades recém-publicadas tenham sido exploradas em ataques antes do patch. Esse detalhe muda a priorização e deve aparecer explicitamente no briefing.'
      ]},
      { title: 'Ação prática', bullets: [
        'Inventariar UniFi Protect, UniFi OS e UniFi Talk e identificar versões afetadas.',
        'Priorizar instâncias expostas à internet e equipamentos em redes de alta criticidade.',
        'Aplicar versões corrigidas informadas pelo fabricante e validar pós-patch.',
        'Revisar logs de autenticação, criação de sessão e execução de comandos em dispositivos que estavam expostos.',
        'Não usar somente CVSS: combinar exposição, privilégios exigidos e possibilidade de cadeia entre falhas.'
      ]}
    ],
    sources: [
      { label: 'Ubiquiti · Security Advisory Bulletin 067 · 26/08/2026', url: 'https://community.ui.com/releases/Security-Advisory-Bulletin-067/fc4a3488-7c43-4628-8bab-f715e96dbfc9' },
      { label: 'BleepingComputer · Ubiquiti patches three max severity vulnerabilities · 26/08/2026', url: 'https://www.bleepingcomputer.com/news/security/ubiquiti-patches-three-max-severity-security-vulnerabilities/' }
    ]
  });

  Object.assign(dailyContent.games, {
    title: 'gamescom está aberta: acompanhe a transmissão oficial e os anúncios confirmados de 26/08',
    summary: 'A gamescom 2026 abriu oficialmente nesta quarta-feira em Colônia. O Reel passa a usar a transmissão oficial atual da gamescom como referência visual; anúncio, trailer, data e plataforma só entram como confirmados quando publicados pela organização ou pelo publisher/estúdio responsável.',
    shareSummary: 'Games 26/08: gamescom já está aberta em Colônia. O card usa a transmissão oficial atual; anúncios só entram como confirmados quando publicados pela gamescom ou pelo próprio publisher/estúdio.',
    badge: 'GAMES · AO VIVO / OFICIAL · 26/08',
    readTime: '4 MIN',
    sections: [
      { title: 'Hoje na feira', bullets: [
        '26/08 é o Trade Visitor and Media Day da gamescom 2026.',
        'A feira acontece em Colônia de 26 a 30 de agosto.',
        'A cobertura do Reel usa como base páginas e vídeo oficiais da gamescom.'
      ]},
      { title: 'Regra editorial para anúncios', bullets: [
        'Rumor e vazamento não recebem selo de confirmado.',
        'Trailer precisa vir da gamescom ou do canal oficial do publisher/estúdio.',
        'Data e plataforma precisam aparecer em fonte primária antes de entrar no resumo.'
      ]}
    ],
    sources: [
      { label: 'gamescom · site oficial 2026', url: 'https://www.gamescom.global/' },
      { label: 'gamescom Opening Night Live 2026 · YouTube oficial', url: 'https://www.youtube.com/watch?v=Zzvzt3IjNik' },
      { label: 'gamescom · horários oficiais', url: 'https://www.gamescom.global/en/info/opening-times' }
    ]
  });

  Object.assign(dailyContent.financas, {
    title: 'Inflação dos EUA surpreende para cima; Wall Street abre em queda antes da Nvidia',
    summary: 'Dados de inflação divulgados nesta quarta vieram acima do esperado e reforçaram apostas de que o Federal Reserve ainda pode elevar juros em 0,25 ponto percentual neste ano. Na abertura, Dow, S&P 500 e Nasdaq recuaram levemente; o mercado continua aguardando o resultado da Nvidia após o fechamento.',
    shareSummary: 'Finanças 26/08 · fim da manhã: inflação dos EUA acima do esperado aumentou apostas de nova alta do Fed; Wall Street abriu em leve queda e Nvidia segue como principal catalisador do dia.',
    badge: 'FINANÇAS · ATUALIZADO 11H · 26/08',
    readTime: '4 MIN',
    sections: [
      { title: 'O que mudou desde cedo', bullets: [
        'A leitura de inflação veio acima das expectativas do mercado.',
        'A surpresa reforçou apostas de outra alta de 0,25 ponto percentual do Fed ainda em 2026.',
        'Dow abriu cerca de -0,06%, S&P 500 -0,14% e Nasdaq -0,20%.',
        'Nvidia divulga resultados após o fechamento e segue como risco de volatilidade para tecnologia e índices.'
      ]},
      { title: 'Como ler', paragraphs: [
        'Esses números são fotografia da abertura, não fechamento. O dado de inflação altera expectativas de juros; a reação final pode mudar com novos indicadores, discursos do Fed e o balanço da Nvidia.'
      ]}
    ],
    sources: [
      { label: 'Reuters · Wall St slips at open after inflation data; Nvidia in focus · 26/08/2026', url: 'https://www.reuters.com/business/us-stock-futures-subdued-run-up-nvidia-results-inflation-print-2026-08-26/' }
    ]
  });
}
