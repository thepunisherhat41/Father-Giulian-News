export function applyCurrentReelPatches1432(dailyContent: Record<string, any>) {
  Object.assign(dailyContent.seguranca, {
    title: 'Ataques exploram falha RCE do Zimbra; mais de 270 servidores já aparecem comprometidos',
    summary: 'A CVE-2026-73570 permite execução remota de comandos sem autenticação em instalações Zimbra afetadas quando o pacote zimbra-snmp está presente e notificações SNMP estão habilitadas. A correção está no ZCS 10.1.20; a checagem de hoje deve incluir patch, sinais de comprometimento e revisão de arquivos/logs, não apenas versão instalada.',
    shareSummary: 'Cyber 25/08: exploração ativa da CVE-2026-73570 em Zimbra já aparece associada a mais de 270 servidores comprometidos. O risco é RCE sem autenticação em ambientes vulneráveis com SNMP habilitado. Atualizar para ZCS 10.1.20 é necessário, mas servidores expostos também precisam de investigação de comprometimento.',
    readTime: '5 MIN',
    badge: 'CYBER · ATUALIZADO 25/08 · 14H32',
    sections: [
      {
        title: 'O que foi confirmado hoje',
        bullets: [
          'A CVE-2026-73570 está sendo explorada ativamente contra servidores Zimbra Collaboration.',
          'A falha é uma command injection que pode resultar em execução remota de comandos sem autenticação quando o componente SNMP afetado está ativo.',
          'Mais de 270 instâncias comprometidas já foram identificadas em rastreamentos citados nesta terça-feira.'
        ]
      },
      {
        title: 'Quem está exposto',
        paragraphs: ['O alerta afeta versões anteriores ao ZCS 10.1.20 quando o pacote opcional zimbra-snmp está instalado e as notificações SNMP estão habilitadas. A condição de exploração deve ser validada no ambiente; não basta assumir que todo Zimbra é vulnerável da mesma forma.']
      },
      {
        title: 'Ação defensiva prática',
        bullets: [
          'Atualizar para ZCS 10.1.20 ou versão corrigida posterior suportada pelo fabricante.',
          'Verificar reinicializações inesperadas do serviço Zimbra e atividade anormal do usuário zimbra.',
          'Revisar criações/modificações suspeitas em /opt/zimbra/jetty/webapps/, /opt/zimbra/jetty_base/webapps/ e /tmp/.',
          'Se o servidor esteve exposto antes da correção, tratar patch e investigação de comprometimento como etapas separadas.'
        ]
      },
      {
        title: 'Leitura de risco',
        paragraphs: ['Exploração ativa muda a prioridade: a pergunta deixa de ser apenas “qual o CVSS?” e passa a incluir exposição, pré-condições, janela de exploração e possibilidade de persistência após o patch.']
      }
    ],
    sources: [
      { label: 'BleepingComputer · 25/08/2026 · 08:04', url: 'https://www.bleepingcomputer.com/news/security/hackers-breached-over-270-zimbra-servers-in-ongoing-attacks/' },
      { label: 'National Cyber Security Authority · alerta de 25/08/2026', url: 'https://cyber-stag.cyber.gov.rw/guidance/alerts/alert-details/security-alert-zimbra-collaboration-rce-under-active-exploitation-cve-2026-73570' },
      { label: 'Zimbra · Security Advisories', url: 'https://wiki.zimbra.com/wiki/Zimbra_Security_Advisories' }
    ]
  });

  /* Correct the debate calendar without turning announced events into confirmed attendance. */
  const politica = dailyContent.politica;
  if (politica) {
    politica.shareSummary = 'Política 25/08 · 14h32: Ronaldo Caiado segue na agenda da entrevista da Globo desta noite. Próximos debates anunciados: 14/09 (Consórcio Momento da Decisão), 27/09 (Record) e 01/10 (Globo). Presença de cada candidato deve ser tratada separadamente da existência do evento.';
    politica.sections = [
      { title: 'Agenda presidencial de hoje', bullets: [
        'Ronaldo Caiado (PSD) permanece anunciado para a entrevista presidencial da Globo nesta terça-feira, após o Jornal Nacional.',
        'A transmissão está prevista em TV Globo, GloboNews e g1.',
        'Agenda anunciada não é comparecimento consumado: eventual ausência, atraso ou cancelamento deve substituir este estado.'
      ]},
      { title: 'TSE · fato oficial de 25/08', paragraphs: ['O TSE publicou nesta terça orientação sobre a Comissão Especial de Transporte para eleitores da zona rural. O prazo de indicação de representantes partidários termina hoje.'] },
      { title: 'Pesquisas', paragraphs: ['Nenhuma pesquisa presidencial nova divulgada em 25/08 foi incorporada nesta checagem. Levantamentos divulgados em 24/08 permanecem apenas como contexto e não são rotulados como pesquisa de hoje.'] },
      { title: 'Próximos debates anunciados', bullets: [
        '14/09: Consórcio Momento da Decisão.',
        '27/09: Record.',
        '01/10: Globo.',
        '04/10: primeiro turno das eleições.'
      ]},
      { title: 'Regra editorial', paragraphs: ['A existência de um debate anunciado não confirma presença individual. O radar deve atualizar separadamente convite, aceite, ausência, mudança de formato e cancelamento.'] }
    ];
    politica.sources = [
      { label: 'TSE · 25/08/2026', url: 'https://www.tse.jus.br/comunicacao/noticias/2026/Agosto/tse-compoe-comissao-especial-de-transporte-para-eleitores-da-zona-rural' },
      { label: 'UOL · entrevistas da Globo · 25/08/2026', url: 'https://noticias.uol.com.br/eleicoes/2026/08/24/entrevistas-dos-candidatos-no-jornal-nacional-veja-datas-e-quem-vai-nas-sabatinas.ghtm' },
      { label: 'UOL · próximos debates · 25/08/2026', url: 'https://noticias.uol.com.br/eleicoes/2026/08/25/quais-sao-os-proximos-debates-para-presidente.ghtm' }
    ];
  }
}
