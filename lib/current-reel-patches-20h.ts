export function applyCurrentReelPatches20h(dailyContent: Record<string, any>) {
  Object.assign(dailyContent.politica, {
    title: 'Radar eleitoral: Flávio 38% x Lula 36% em SP; cenário nacional segue apertado',
    summary: 'Pesquisa Gerp divulgada nesta terça-feira (25) entre eleitores do Estado de São Paulo mostra Flávio Bolsonaro com 38% e Lula com 36% no 1º turno, empate técnico pela margem de 2,3 pontos. No 2º turno paulista, Flávio aparece com 48% e Lula com 41%. No plano nacional, a referência mais recente continua a BTG/Nexus de 24/08, com Lula 41% e Flávio 37%; Caiado 5%, Renan Santos e Zema 3% cada, Augusto Cury 2% e Samara Martins 1%. Pesquisa estadual e pesquisa nacional não devem ser misturadas.',
    shareSummary: 'Política 25/08 à noite: Gerp em SP mostra Flávio 38% x Lula 36% no 1º turno e 48% x 41% no 2º turno. Nacionalmente, a BTG/Nexus de 24/08 segue com Lula 41% x Flávio 37%. Compare escopo, data e margem antes de concluir tendência.',
    readTime: '7 MIN',
    badge: 'POLÍTICA · RADAR 25/08 · NOITE',
    sections: [
      { title: 'Pesquisa divulgada hoje em São Paulo', bullets: [
        'Gerp/SP: Flávio Bolsonaro 38% e Lula 36% no cenário de 1º turno.',
        'A margem de erro é de 2,3 pontos percentuais; portanto, há empate técnico.',
        'No cenário de 2º turno paulista, Flávio marca 48% e Lula 41%.',
        'Foram ouvidos 1.800 eleitores de São Paulo entre 19 e 24/08; registro SP-01477/2026.'
      ]},
      { title: 'Cenário nacional continua diferente', bullets: [
        'BTG/Nexus divulgada em 24/08: Lula 41%, Flávio 37%, Caiado 5%, Renan Santos 3%, Zema 3%, Augusto Cury 2% e Samara Martins 1%.',
        'No 2º turno nacional testado, Lula 46% x Flávio 45% — empate técnico.',
        'Uma pesquisa estadual não substitui nem contradiz automaticamente uma pesquisa nacional; elas medem universos diferentes.'
      ]},
      { title: 'Agenda eleitoral', bullets: [
        'Ronaldo Caiado segue anunciado para entrevista presidencial da Globo nesta terça-feira à noite.',
        'O TSE mantém o calendário eleitoral oficial como referência para propaganda, registros e próximos marcos.',
        'Presença anunciada em entrevista ou debate só deve virar fato consumado depois do evento.'
      ]},
      { title: 'Como ler o radar', paragraphs: [
        'O Father Giulian News separa pesquisa de intenção de voto, enquete de internet, desempenho em debate, agenda de campanha e resultado eleitoral. Cury pode ter alta exposição em debate ou redes e ainda assim aparecer com percentual baixo em pesquisas probabilísticas registradas.'
      ]}
    ],
    sources: [
      { label: 'Poder360 · Gerp/SP · 25/08/2026', url: 'https://www.poder360.com.br/poder-eleicoes-2026/flavio-tem-48-contra-41-de-lula-no-2o-turno-em-sp-diz-gerp/' },
      { label: 'UOL · BTG/Nexus nacional · 24/08/2026', url: 'https://noticias.uol.com.br/eleicoes/2026/08/24/pesquisa-presidente-2026-atualizada-veja-numeros-do-ultimo-levantamento.ghtm' },
      { label: 'TSE · calendário eleitoral 2026', url: 'https://www.tse.jus.br/eleicoes/calendario-eleitoral' }
    ]
  });
}