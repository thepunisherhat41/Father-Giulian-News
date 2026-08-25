export function applyCurrentReelPatches(dailyContent: Record<string, any>) {
  Object.assign(dailyContent.mundo, {
    title: 'Irã promete retaliação após nova rodada de sanções dos EUA',
    summary: 'Os EUA ampliaram nesta terça-feira sanções contra pessoas, empresas e embarcações ligadas ao comércio iraniano. Teerã prometeu responder. O pacote elevou a tensão, mas ficou aquém das restrições secundárias mais severas que o mercado temia; por isso petróleo e ativos de risco reagiram de forma limitada na manhã.',
    shareSummary: 'Mundo 25/08: Washington ampliou sanções contra redes ligadas ao Irã e Teerã prometeu retaliar. O risco para energia e Hormuz permanece, mas o pacote anunciado foi menos abrangente do que o cenário mais duro precificado antes da divulgação.',
    readTime: '5 MIN',
    badge: 'MUNDO · ATUALIZADO 25/08',
    sections: [
      { title: 'O que aconteceu', bullets: ['O Tesouro dos EUA anunciou sanções contra dezenas de pessoas, entidades e embarcações associadas ao comércio iraniano.', 'O Irã disse que responderá e afirmou esperar continuidade de relações comerciais com parceiros relevantes.', 'O pacote não incluiu, nesta etapa, a forma mais ampla de proibições secundárias que alguns investidores temiam.'] },
      { title: 'Por que importa', paragraphs: ['A tensão mantém risco sobre petróleo, transporte marítimo e inflação global. Ao mesmo tempo, a reação contida do mercado mostra que anúncio de sanção não equivale automaticamente a interrupção adicional de oferta.'] },
      { title: 'O que não concluir', paragraphs: ['Não é correto tratar a promessa de retaliação como prova de ataque iminente nem assumir que Hormuz sofrerá nova restrição específica sem confirmação. O risco existe, mas o próximo passo ainda depende de decisões políticas e operacionais.'] },
      { title: 'O que acompanhar', bullets: ['Novas medidas secundárias dos EUA.', 'Resposta formal de Teerã.', 'Fluxo de petróleo e navegação regional.', 'Reação do Brent e de fretes nas próximas sessões.'] },
    ],
    sources: [{ label: 'Reuters · 25/08/2026', url: 'https://www.reuters.com/world/china/global-markets-global-markets-2026-08-25/' }],
  });

  Object.assign(dailyContent.financas, {
    title: 'Mercados abrem a terça entre yields menores, petróleo instável e expectativa por Nvidia',
    summary: 'As bolsas globais começaram 25/08 sem direção forte. Os rendimentos dos Treasuries recuaram após sinais de que o Tesouro pode usar caixa para ampliar recompras de dívida, enquanto o petróleo oscilou com as sanções ao Irã. O próximo catalisador importante é o resultado da Nvidia, previsto para quarta-feira.',
    shareSummary: 'Finanças 25/08: yields dos Treasuries cederam, petróleo oscilou e ações ficaram contidas antes do balanço da Nvidia. Para o Brasil, o canal prático passa por dólar, custo global de capital, petróleo e apetite a risco — sem transformar um movimento de manhã em tendência garantida do dia.',
    readTime: '5 MIN',
    badge: 'FINANÇAS · ATUALIZADO 25/08',
    sections: [
      { title: 'O que mudou hoje', bullets: ['Yields dos Treasuries recuaram na manhã.', 'O petróleo oscilou depois de as novas sanções dos EUA ao Irã parecerem menos severas que o pior cenário esperado.', 'Futuros de ações ficaram próximos da estabilidade enquanto investidores aguardam o balanço da Nvidia.'] },
      { title: 'Impacto prático', paragraphs: ['Juros longos americanos influenciam custo global de financiamento e valuation de ativos. Petróleo afeta expectativas de inflação e energia. Para ativos brasileiros, dólar e fluxo estrangeiro podem reagir à combinação desses fatores.'] },
      { title: 'Limites da leitura', paragraphs: ['Dados intradiários mudam rapidamente. A abertura não deve ser apresentada como fechamento nem como direção garantida para Ibovespa, dólar ou juros brasileiros.'] },
      { title: 'O que acompanhar', bullets: ['Fechamento dos Treasuries.', 'Brent e sinais de oferta.', 'Balanço da Nvidia na quarta-feira.', 'Comunicações de bancos centrais e dados de confiança.'] },
    ],
    sources: [{ label: 'Reuters · Global Markets · 25/08/2026', url: 'https://www.reuters.com/world/china/global-markets-global-markets-2026-08-25/' }],
  });

  Object.assign(dailyContent.tecnologia, {
    title: 'Nvidia entra no centro da semana: mercado quer saber se o ritmo de IA sustenta o investimento',
    summary: 'O balanço da Nvidia, previsto para quarta-feira, virou o principal teste da semana para a tese de infraestrutura de IA. O ponto não é apenas receita: investidores buscam sinais sobre demanda por aceleradores, capacidade de data center e retorno do capex. Alibaba também anunciou uma venda de ações bilionária para financiar investimentos em IA.',
    shareSummary: 'Tecnologia 25/08: o mercado se prepara para o balanço da Nvidia e tenta medir se a expansão de data centers e aceleradores continua sustentando o ciclo de IA. Alibaba reforçou o tema ao anunciar captação para financiar IA.',
    readTime: '5 MIN',
    badge: 'TECNOLOGIA · ATUALIZADO 25/08',
    sections: [
      { title: 'Por que agora', bullets: ['O balanço da Nvidia sai na quarta-feira e pode recalibrar expectativas para toda a cadeia de IA.', 'A atenção está em crescimento, demanda futura e capacidade de sustentar margens e entregas.', 'Alibaba anunciou venda de ações de US$ 10,2 bilhões para financiar iniciativas de IA, reforçando a intensidade de capital do setor.'] },
      { title: 'O que isso revela sobre IA', paragraphs: ['O ciclo atual depende de muito mais que modelos: GPUs, energia, rede, refrigeração, data centers e financiamento precisam crescer juntos. O mercado começa a cobrar evidência de utilização e retorno sobre essa infraestrutura.'] },
      { title: 'O que não assumir', paragraphs: ['Expectativa elevada para o balanço não é confirmação de resultado. Também não significa que todo investimento em IA terá o mesmo retorno ou que demanda por aceleradores crescerá indefinidamente.'] },
      { title: 'O que acompanhar', bullets: ['Guidance da Nvidia.', 'Capacidade e prazos de entrega.', 'Capex dos hyperscalers.', 'Comentários sobre demanda por inferência e treinamento.'] },
    ],
    sources: [{ label: 'Reuters · Morning Bid · 25/08/2026', url: 'https://www.reuters.com/world/china/global-markets-view-europe-2026-08-25/' }],
  });
}
