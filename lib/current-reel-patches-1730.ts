export function applyCurrentReelPatches1730(dailyContent: Record<string, any>) {
  Object.assign(dailyContent.financas, {
    title: 'Fechamento: Ibovespa sobe 1,55% a 174.576 pontos; dólar cai para R$ 5,139',
    summary: 'O pregão brasileiro de 25/08 encerrou com avanço forte da Bolsa e leve queda do dólar. O Ibovespa fechou em alta de 1,55%, aos 174.576 pontos, enquanto o dólar recuou 0,25%, a R$ 5,139. Bancos ajudaram a sustentar o índice, enquanto petróleo mais fraco e tensões geopolíticas seguiram no radar. Estes números substituem a fotografia intradiária publicada mais cedo.',
    shareSummary: 'Finanças 25/08 · fechamento: Ibovespa +1,55% aos 174.576 pontos; dólar -0,25% a R$ 5,139. O fechamento substitui os números intradiários exibidos anteriormente.',
    readTime: '5 MIN',
    badge: 'FINANÇAS · FECHAMENTO 25/08 · 17H30',
    sections: [
      { title: 'Fechamento confirmado', bullets: [
        'Ibovespa: 174.576 pontos, alta de 1,55%.',
        'Dólar: R$ 5,139, queda de 0,25%.',
        'Bancos contribuíram para a alta do índice, com destaque para Banco do Brasil.',
        'Petróleo Brent recuou fortemente no exterior durante a sessão.'
      ]},
      { title: 'O que mudou desde a tarde', paragraphs: [
        'O Reel anterior mostrava preços intradiários de Treasuries e petróleo. Com o encerramento do mercado brasileiro, o dado prioritário passa a ser o fechamento de Ibovespa e dólar, evitando manter uma fotografia parcial como se ainda fosse o estado atual.'
      ]},
      { title: 'Leitura cautelosa', paragraphs: [
        'Um único pregão não define tendência. A reação desta terça mistura fatores domésticos, setor bancário, commodities e cenário externo; não deve ser apresentada como prova isolada de melhora estrutural ou piora macroeconômica.'
      ]},
      { title: 'Próximos gatilhos', bullets: [
        'Dados de inflação e atividade no Brasil e nos EUA.',
        'Resultado e guidance da Nvidia.',
        'Novos movimentos em juros longos americanos.',
        'Desdobramentos das tensões entre EUA e Irã e seus efeitos sobre petróleo e câmbio.'
      ]}
    ],
    sources: [
      { label: 'Folha de S.Paulo · fechamento de mercado · 25/08/2026', url: 'https://www1.folha.uol.com.br/mercado/2026/08/dolar-abre-em-leve-alta-nesta-terca-apos-eua-ameacarem-sancoes-contra-ira.shtml' },
      { label: 'Reuters · Global Markets · 25/08/2026', url: 'https://www.reuters.com/world/china/global-markets-global-markets-2026-08-25/' }
    ]
  });
}
