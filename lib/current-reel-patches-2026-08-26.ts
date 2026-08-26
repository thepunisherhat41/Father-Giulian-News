export function applyCurrentReelPatches20260826(dailyContent: Record<string, any>) {
  Object.assign(dailyContent.tempo, {
    title: 'Quarta em SP: máxima pode chegar a 24°C; chuva isolada volta no fim do dia',
    summary: 'A previsão do CGE para esta quarta-feira (26) indica sol entre nuvens, mínima em torno de 14°C, máxima de até 24°C e umidade acima de 50%. Entre o fim da tarde e a noite, áreas de instabilidade podem provocar chuvas isoladas e chuviscos na Grande São Paulo.',
    shareSummary: 'Tempo 26/08: SP pode chegar a 24°C, com sol entre nuvens; no fim da tarde e à noite há previsão de chuva isolada e chuviscos.',
    badge: 'TEMPO · 26/08',
    readTime: '3 MIN',
    sections: [
      { title: 'Previsão para hoje', bullets: [
        'Mínima em torno de 14°C.',
        'Máxima de até 24°C.',
        'Umidade relativa acima de 50%.',
        'Sol entre nuvens ao longo do dia.'
      ]},
      { title: 'Mudança no fim do dia', bullets: [
        'Entre o fim da tarde e a noite, áreas de instabilidade podem alcançar a Grande São Paulo.',
        'A previsão é de chuva isolada e chuviscos, não de chuva contínua em toda a cidade.'
      ]}
    ],
    sources: [{ label: 'CGE São Paulo · tendência para quarta-feira 26/08/2026', url: 'https://www.cgesp.org/v3/noticias.jsp' }]
  });

  Object.assign(dailyContent.games, {
    title: 'gamescom abre hoje: 26/08 é dia de imprensa e profissionais em Colônia',
    summary: 'A gamescom 2026 começa oficialmente nesta quarta-feira (26) na Koelnmesse. O primeiro dia é voltado a visitantes profissionais e mídia; as áreas operam das 9h às 19h no horário local. A feira segue até domingo, 30/08.',
    shareSummary: 'Games 26/08: gamescom abre oficialmente hoje em Colônia. O primeiro dia é dedicado a profissionais e mídia; a feira segue até 30/08.',
    badge: 'GAMES · GAME​​SCOM 26/08',
    readTime: '4 MIN',
    sections: [
      { title: 'O que acontece hoje', bullets: [
        '26/08 é Trade Visitor and Media Day.',
        'Business Area e demais áreas funcionam das 9h às 19h no horário local.',
        'A organização pode permitir acesso limitado de público privado à entertainment area.'
      ]},
      { title: 'Radar oficial', bullets: [
        'A feira principal acontece de 26 a 30 de agosto.',
        'Demonstrações, anúncios e hands-on só entram como confirmados quando publicados pela gamescom ou pelos próprios publishers/estúdios.'
      ]}
    ],
    sources: [
      { label: 'gamescom · opening times · 26/08/2026', url: 'https://www.gamescom.global/en/info/opening-times' },
      { label: 'gamescom · site oficial 2026', url: 'https://www.gamescom.global/' }
    ]
  });

  Object.assign(dailyContent['security-briefing'], {
    title: 'CISA publica lições de dois red teams: visibilidade e resposta do SOC falham de formas diferentes',
    summary: 'A CISA publicou em 26/08 o advisory “A Tale of Two SOCs”, reunindo aprendizados de duas avaliações de red team. A leitura para defesa é operacional: telemetria disponível não garante detecção útil, e alertas sem investigação e contexto também não viram resposta.',
    shareSummary: 'Security Briefing 26/08: CISA publicou lições de duas avaliações de red team, com foco em visibilidade, detecção, investigação e resposta do SOC.',
    badge: 'SECURITY BRIEFING · CISA · 26/08',
    readTime: '5 MIN',
    sections: [
      { title: 'Leitura defensiva', bullets: [
        'Cobertura de logs precisa ser acompanhada de casos de uso de detecção e investigação.',
        'SOC deve conseguir correlacionar sinais entre identidade, endpoint e rede.',
        'Red team é evidência para validar não apenas prevenção, mas também capacidade de detectar e responder.'
      ]},
      { title: 'Aplicação prática', bullets: [
        'Revisar gaps de logging e retenção.',
        'Testar se alertas críticos chegam a um owner com contexto suficiente.',
        'Transformar achados de red team em backlog rastreável de melhoria de detecção e resposta.'
      ]}
    ],
    sources: [{ label: 'CISA · A Tale of Two SOCs · 26/08/2026', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-237a' }]
  });
}
