import { dailyContent } from './daily-content';

const set = (slug: string, data: any) => Object.assign(dailyContent[slug], data);

set('brasil', {
  title: 'Receita abre hoje consulta ao último lote da restituição do IR 2026',
  summary: 'A consulta ao quarto e último lote regular foi liberada nesta segunda-feira. Cerca de 521,9 mil contribuintes receberão R$ 1,24 bilhão em 31 de agosto.',
  shareSummary: 'Brasil 24/08: Receita liberou hoje a consulta ao último lote regular de restituição do IR 2026; pagamento será em 31/08.',
  readTime: '4 MIN', badge: 'BRASIL · 24/08',
  sections: [
    { title: 'O que muda hoje', bullets: ['Consulta ao quarto e último lote regular disponível.', '521.935 contribuintes contemplados.', 'R$ 1,24 bilhão em restituições.', 'Pagamento previsto para 31/08.'] },
    { title: 'Como consultar', paragraphs: ['A consulta pode ser feita pelos canais oficiais da Receita Federal. Quem não estiver no lote deve verificar o extrato da declaração para identificar eventual pendência.'] },
  ],
  sources: [{ label: 'Agência Brasil · 24/08/2026', url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-08/receita-libera-consulta-ao-ultimo-lote-de-restituicao-do-ir-2026' }],
});

set('mundo', {
  title: 'Mercados globais começam a semana pressionados por tecnologia, petróleo e novas sanções',
  summary: 'A segunda-feira começou com bolsas globais em queda e investidores atentos a Nvidia, juros americanos, petróleo e novas sanções dos EUA ao Irã.',
  shareSummary: 'Mundo 24/08: tecnologia pressionou bolsas; petróleo recuou no dia, mas tensão com o Irã e expectativa por Nvidia mantêm volatilidade alta.',
  readTime: '5 MIN', badge: 'MUNDO · 24/08',
  sections: [
    { title: 'O que mexe com os mercados hoje', bullets: ['Ações de tecnologia pressionam índices globais.', 'Mercado aguarda resultados da Nvidia.', 'Sanções americanas ao Irã mantêm energia e geopolítica no radar.', 'Juros longos dos EUA continuam relevantes para ativos globais.'] },
    { title: 'Por que importa no Brasil', paragraphs: ['Movimentos em petróleo, dólar, juros americanos e tecnologia podem afetar câmbio, inflação, commodities e o apetite por ativos brasileiros.'] },
  ],
  sources: [{ label: 'Reuters · 24/08/2026', url: 'https://www.reuters.com/world/china/global-markets-global-markets-2026-08-24/' }],
});

set('planeta', {
  title: 'COP17 entra hoje em semana decisiva para seca, solo e financiamento',
  summary: 'A conferência da ONU sobre desertificação segue na Mongólia até 28 de agosto e entra na reta decisiva para tentar destravar financiamento e acordos de resiliência à seca.',
  shareSummary: 'Planeta 24/08: COP17 entra na semana decisiva com foco em restauração de solos, seca e financiamento internacional.',
  readTime: '5 MIN', badge: 'PLANETA · 24/08',
  sections: [
    { title: 'O ponto central', paragraphs: ['A degradação do solo e a seca afetam água, alimentos, biodiversidade e economia. A COP17 tenta aproximar compromissos políticos de mecanismos concretos de financiamento.'] },
    { title: 'Conexão interessante', bullets: ['Solo saudável armazena água e carbono.', 'Degradação aumenta vulnerabilidade a secas e perda de produção.', 'Restauração de terras pode produzir benefícios econômicos além do ganho ambiental.'] },
  ],
  sources: [{ label: 'Agência Brasil · COP17', url: 'https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-08/cop17-comeca-na-mongolia-com-foco-em-seca-terra-e-financiamento' }],
});

set('animais', {
  title: 'Curiosidade animal de hoje: corvos conseguem lembrar rostos humanos',
  summary: 'Corvos são capazes de associar rostos a experiências e manter essa memória por longos períodos. É uma demonstração marcante de cognição social fora dos primatas.',
  shareSummary: 'Mundo Animal 24/08: corvos conseguem reconhecer e lembrar rostos humanos, associando pessoas a experiências anteriores.',
  readTime: '3 MIN', badge: 'DESCOBERTA · 24/08',
  sections: [
    { title: 'Por que isso é interessante', paragraphs: ['Reconhecer indivíduos ajuda animais sociais a decidir quem representa ameaça, oportunidade ou segurança. Em corvídeos, essa capacidade aparece junto de memória, solução de problemas e aprendizagem social.'] },
    { title: 'Papo para vocês', bullets: ['Qual animal parece muito mais inteligente do que a gente costuma imaginar?', 'Inteligência precisa parecer humana para ser considerada inteligência?'] },
  ],
});

set('curiosidades', {
  title: 'Três curiosidades para render conversa hoje',
  summary: 'O cérebro liga cheiros a memórias de forma particularmente forte; o céu não é realmente azul como um objeto; e mapas comuns distorcem bastante o tamanho de países próximos aos polos.',
  shareSummary: 'Curiosidades 24/08: memória e cheiro, a cor aparente do céu e as distorções escondidas nos mapas.',
  readTime: '4 MIN', badge: '3 DESCOBERTAS · 24/08',
  sections: [
    { title: 'Psicologia', paragraphs: ['O olfato possui conexões muito próximas de áreas cerebrais ligadas a emoção e memória. Por isso um cheiro antigo pode trazer uma lembrança com enorme força e detalhe emocional.'] },
    { title: 'Ciência', paragraphs: ['O céu parece azul porque moléculas da atmosfera espalham comprimentos de onda menores da luz solar com maior eficiência. A cor é resultado da interação entre luz, atmosfera e observador.'] },
    { title: 'Geografia', paragraphs: ['Na projeção de Mercator, regiões próximas aos polos ficam visualmente ampliadas. Por isso a Groenlândia parece comparável à África em muitos mapas, embora a África seja muito maior.'] },
  ],
});

set('musica', {
  title: 'Por que algumas músicas dão arrepio de verdade?',
  summary: 'Mudanças inesperadas de harmonia, dinâmica, entrada de voz ou resolução musical podem ativar circuitos de expectativa e recompensa e produzir o chamado frisson.',
  shareSummary: 'Música 24/08: o arrepio musical, ou frisson, está ligado à combinação de expectativa, surpresa e recompensa no cérebro.',
  readTime: '4 MIN', badge: 'MÚSICA · DESCOBERTA 24/08',
  sections: [
    { title: 'O mecanismo', paragraphs: ['O cérebro aprende padrões enquanto escuta. Quando a música cria expectativa e depois entrega uma mudança emocionalmente forte, algumas pessoas experimentam arrepios, aumento de atenção e sensação intensa de recompensa.'] },
    { title: 'Papo para vocês', bullets: ['Qual música sempre provoca alguma reação física ou emocional?', 'Existe uma música que imediatamente transporta vocês para uma época específica?'] },
  ],
});

set('carros', {
  title: 'BAIC estreia no Brasil com dois elétricos: Arcfox T1 e T5',
  summary: 'Notícia publicada hoje: a chinesa BAIC prepara sua estreia brasileira com o hatch elétrico Arcfox T1 e o SUV T5, ampliando a disputa com marcas já estabelecidas no segmento.',
  shareSummary: 'Carros 24/08: BAIC prepara estreia no Brasil com os elétricos Arcfox T1 e T5.',
  readTime: '4 MIN', badge: 'CARROS · HOJE 24/08',
  sections: [
    { title: 'O que apareceu hoje', bullets: ['Arcfox T1: hatch elétrico voltado ao segmento de compactos.', 'Arcfox T5: SUV elétrico de maior porte.', 'A estreia aumenta a quantidade de marcas chinesas disputando o mercado brasileiro.'] },
    { title: 'O que vale acompanhar', bullets: ['Preço oficial.', 'Rede de concessionárias e pós-venda.', 'Garantia da bateria.', 'Seguro, peças e valor de revenda.'] },
  ],
  sources: [{ label: 'Motor1 Brasil · 24/08/2026', url: 'https://motor1.uol.com.br/news/category/oficial/' }],
});

set('motos', {
  title: 'CFMOTO confirma novo lote de reservas para 31 de agosto',
  summary: 'A CFMOTO informou hoje que abrirá novo lote de reservas no Brasil em 31/08 às 12h, incluindo IBEX 450, IBEX 700, CL-C 450 e CL-C 450 Bobber.',
  shareSummary: 'Motos 24/08: CFMOTO abre novo lote brasileiro em 31/08 às 12h para quatro modelos da linha.',
  readTime: '4 MIN', badge: 'MOTOS · HOJE 24/08',
  sections: [
    { title: 'Modelos do próximo lote', bullets: ['IBEX 450', 'IBEX 700', 'CL-C 450', 'CL-C 450 Bobber'] },
    { title: 'O que eu observaria antes da compra', bullets: ['Rede e disponibilidade de peças.', 'Prazo real de entrega.', 'Seguro.', 'Custo das revisões.', 'Liquidez futura no mercado de usados.'] },
  ],
  sources: [{ label: 'Motonline · 24/08/2026 12:05', url: 'https://motonline.com.br/noticia/proximo-lote-cfmoto-31-08/' }],
});

set('mecanica', {
  title: 'Mecânica do dia: por que calibrar pneu frio muda a medição',
  summary: 'A pressão do ar aumenta conforme o pneu aquece rodando. Por isso fabricantes normalmente especificam calibragem com pneus frios: é a referência mais estável e comparável.',
  shareSummary: 'Mecânica 24/08: calibragem deve seguir a pressão recomendada pelo fabricante e, em geral, ser verificada com pneus frios.',
  readTime: '3 MIN', badge: 'MECÂNICA · 24/08',
  sections: [
    { title: 'Na prática', bullets: ['Use a pressão indicada para o veículo e carga.', 'Não copie automaticamente a pressão máxima impressa no pneu.', 'Diferença frequente entre eixos pode ser normal e definida pelo fabricante.'] },
  ],
});

set('nautica', {
  title: 'Náutica do dia: AIS não é radar — e essa diferença importa',
  summary: 'AIS transmite identidade, posição, rumo e velocidade de embarcações equipadas; radar detecta alvos fisicamente. Um complementa o outro, mas nenhum substitui vigilância e navegação segura.',
  shareSummary: 'Náutica 24/08: AIS transmite dados de embarcações; radar detecta alvos. São tecnologias complementares, não equivalentes.',
  readTime: '4 MIN', badge: 'NÁUTICA · 24/08',
  sections: [
    { title: 'A diferença simples', bullets: ['AIS depende de transmissão e recepção de dados.', 'Radar pode perceber alvos sem AIS ativo.', 'Embarcações pequenas podem não transmitir AIS.', 'Condições e configuração também afetam detecção.'] },
  ],
});

set('viagens', {
  title: 'Viagem do dia: o erro de olhar só o preço da passagem',
  summary: 'Uma passagem barata pode ficar cara depois de bagagem, deslocamento até aeroportos distantes, horários ruins, alimentação e conexão longa. O custo real é porta a porta.',
  shareSummary: 'Viagens 24/08: compare custo porta a porta, não apenas a tarifa aérea exibida.',
  readTime: '3 MIN', badge: 'VIAGENS · 24/08',
  sections: [
    { title: 'Conta completa', bullets: ['Passagem.', 'Bagagem.', 'Transporte até/de aeroportos.', 'Tempo de conexão.', 'Hospedagem adicional se necessária.', 'Política de alteração e cancelamento.'] },
    { title: 'Papo para vocês', paragraphs: ['Qual viagem valeria pagar um pouco mais para tornar o trajeto muito mais confortável?'] },
  ],
});

set('financas', {
  title: 'Último lote do IR libera R$ 1,24 bilhão e pagamento será em 31 de agosto',
  summary: 'Além de ser notícia fiscal do dia, a restituição traz uma decisão prática: antecipar consumo, reduzir dívida cara ou reservar o dinheiro muda bastante o efeito financeiro do valor recebido.',
  shareSummary: 'Finanças 24/08: consulta ao último lote regular do IR está aberta; pagamento em 31/08 para cerca de 521,9 mil contribuintes.',
  readTime: '4 MIN', badge: 'FINANÇAS · HOJE 24/08',
  sections: [
    { title: 'Uso racional do dinheiro', bullets: ['Dívida cara costuma ter prioridade.', 'Reserva de emergência reduz dependência de crédito.', 'Gasto planejado é diferente de transformar restituição em renda recorrente.'] },
  ],
  sources: [{ label: 'Agência Brasil · 24/08/2026', url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-08/receita-libera-consulta-ao-ultimo-lote-de-restituicao-do-ir-2026' }],
});

set('tecnologia', {
  title: 'Nvidia discute novo investimento na Perplexity, segundo reportagem',
  summary: 'A Reuters repercutiu hoje informação de que a Nvidia discute participação em uma rodada que avaliaria a Perplexity acima de US$ 30 bilhões. A negociação não deve ser tratada como concluída.',
  shareSummary: 'Tecnologia 24/08: Nvidia discute investimento na Perplexity em rodada que pode avaliar a empresa acima de US$30 bi; negociação ainda não é acordo fechado.',
  readTime: '4 MIN', badge: 'TECNOLOGIA · HOJE 24/08',
  sections: [
    { title: 'Fato x possibilidade', bullets: ['Fato: a Reuters reportou as discussões citando reportagem do The Information.', 'Possibilidade: a rodada pode elevar a avaliação da Perplexity acima de US$ 30 bilhões.', 'Não confirmado: fechamento do investimento ou termos finais.'] },
    { title: 'Por que importa', paragraphs: ['A disputa por IA está concentrando capital em modelos, agentes, chips e infraestrutura. Investimentos cruzados também aumentam a interdependência entre fornecedores da cadeia.'] },
  ],
  sources: [{ label: 'Reuters · 24/08/2026', url: 'https://www.reuters.com/technology/nvidia-discusses-perplexity-investment-30-billion-plus-valuation-information-2026-08-24/' }],
});
