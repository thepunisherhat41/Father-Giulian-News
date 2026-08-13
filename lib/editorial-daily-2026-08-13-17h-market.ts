import type { EditorialDossier } from './editorial-dossier-types';

export const editorialDaily20260813_17hMarket: Record<string, EditorialDossier> = {
  mundo: {
    readingTime: '10 MIN DE LEITURA',
    title: 'O mesmo barril pode cair por excesso de estoque e subir por medo de guerra horas depois',
    deck: 'A tarde mostrou por que petróleo é um mercado de forças concorrentes: demanda, inventário, logística e risco geopolítico disputam espaço no mesmo preço.',
    opening: ['No início do dia, estoques americanos maiores e previsões de demanda mais fraca empurraram o petróleo para baixo. Depois, uma reivindicação de ataque contra a refinaria de Jazan devolveu parte do prêmio de risco.', 'O interessante não é apenas a oscilação. É perceber que mercados não escolhem uma única narrativa: eles reponderam informações novas conforme surgem.'],
    sections: [
      { kicker: 'DEMANDA', title: 'Inventário alto muda a sensação de escassez', paragraphs: ['Quando estoques crescem muito, o mercado recebe evidência de que existe mais oferta disponível ou menos consumo do que se imaginava. Isso tende a pressionar o preço para baixo.'] },
      { kicker: 'RISCO', title: 'Uma refinaria sob ameaça muda a conta de oferta e seguro', paragraphs: ['Mesmo sem confirmação imediata do alvo sobre a extensão do ataque, a possibilidade de interrupção relevante pode aumentar custos de seguro, frete e proteção de rotas.'] },
      { kicker: 'BRASIL', title: 'A bomba não acompanha o Brent minuto a minuto', paragraphs: ['No Brasil, câmbio, política comercial, impostos, mistura de biocombustíveis e estoques ajudam a decidir quando e quanto uma variação internacional chega ao consumidor.'] }
    ],
    callout: { label: 'MODELO MENTAL', title: 'Preço é uma votação contínua sobre o futuro', text: 'Dados de demanda e notícias de oferta podem ser verdadeiros ao mesmo tempo e empurrar o mesmo ativo em direções opostas.' },
    takeaways: ['Estoques altos aliviam preços, mas não apagam risco geopolítico.', 'Uma reivindicação de ataque precisa ser separada de impacto operacional confirmado.', 'No Brasil, repasse depende de mais que o Brent.'],
    sources: [{ label: 'Reuters · Petróleo e Jazan · 13/08/2026', url: 'https://www.reuters.com/business/energy/oil-drops-lower-demand-forecasts-despite-deadlock-us-iran-talks-2026-08-13/' }]
  },
  financas: {
    readingTime: '10 MIN DE LEITURA',
    title: 'O número que importa depois do dado: como o mercado transformou PPI em probabilidade de juros',
    deck: 'O PPI ficou estável, mas a informação mais útil da tarde foi observar a reação: futuros, Treasuries, dólar e ações recalibraram o cenário para o Fed.',
    opening: ['Notícia econômica não termina quando o indicador é divulgado. A segunda metade da história é ver como diferentes mercados interpretam o dado.', 'Nesta quinta, a probabilidade implícita de manutenção dos juros em setembro subiu para perto de 65%, enquanto yields recuaram e ações avançaram.'],
    sections: [
      { kicker: 'PROBABILIDADE', title: '65% não é promessa do Fed', paragraphs: ['É uma leitura extraída de preços negociados. Se inflação, emprego, petróleo ou comunicação do banco central mudarem, a probabilidade muda junto.'] },
      { kicker: 'YIELDS', title: 'Juros longos contam outra história', paragraphs: ['Mesmo quando o mercado reduz apostas em alta imediata, dívida pública, inflação futura e oferta de Treasuries continuam influenciando os vencimentos longos.'] },
      { kicker: 'VIDA REAL', title: 'Não confunda macro com decisão pessoal', paragraphs: ['Para quem vai financiar carro, casa ou organizar dívidas no Brasil, a variável prática é o CET e a taxa local do contrato. A leitura do Fed ajuda a entender cenário, não substitui a conta pessoal.'] }
    ],
    callout: { label: 'PARA GUARDAR', title: 'Mercado negocia cenários, não certezas', text: 'Use probabilidades como mapa de expectativas — nunca como decisão já tomada.' },
    takeaways: ['PPI estável reduziu apostas em alta do Fed.', 'A reação em yields e dólar ajuda a entender o impacto.', 'Decisão pessoal precisa de CET e fluxo de caixa, não de manchete.'],
    sources: [{ label: 'Reuters · Global markets · 13/08/2026', url: 'https://www.reuters.com/world/china/global-markets-global-markets-2026-08-13/' }]
  },
  tecnologia: {
    readingTime: '9 MIN DE LEITURA',
    title: 'A infraestrutura de IA não é um bloco único — e o mercado mostrou isso hoje',
    deck: 'Semicondutores e storage avançaram enquanto a Cisco caiu, lembrando que cada elo da cadeia tem gargalos, margens e expectativas diferentes.',
    opening: ['É tentador tratar infraestrutura de IA como um setor homogêneo. Não é. Compute, memória, storage, rede, óptica e energia resolvem problemas diferentes e capturam valor em ritmos diferentes.', 'A sessão desta quinta tornou essa diferença visível: alguns nomes ligados a chips subiram forte, enquanto a Cisco caiu apesar de guidance de receita robusto.'],
    sections: [
      { kicker: 'STACK', title: 'O gargalo migra', paragraphs: ['Quando um recurso deixa de ser o principal limitador, outro pode assumir esse papel. Mais aceleradores aumentam demanda por memória, interconexão, storage e energia.'] },
      { kicker: 'EXPECTATIVA', title: 'Crescer não basta para uma ação subir', paragraphs: ['O preço de mercado já carrega expectativas. Uma empresa pode entregar números bons e ainda cair se investidores esperavam mais ou se margens e valuation preocupam.'] },
      { kicker: 'LEITURA', title: 'Tecnologia é arquitetura; bolsa é expectativa', paragraphs: ['Para entender o setor, separe duas perguntas: qual componente é tecnicamente necessário e qual empresa consegue transformar essa necessidade em lucro sustentável.'] }
    ],
    callout: { label: 'CONEXÃO', title: 'O gargalo é móvel', text: 'Em sistemas complexos, resolver um limite frequentemente revela o próximo.' },
    takeaways: ['IA depende de uma cadeia de infraestrutura, não só de GPU.', 'O gargalo pode migrar para memória, rede, storage ou energia.', 'Exposição à IA não garante o mesmo resultado financeiro para todas as empresas.'],
    sources: [{ label: 'Reuters · Tech stocks e IA · 13/08/2026', url: 'https://www.reuters.com/business/retail-consumer/wall-st-futures-tick-higher-oil-retreats-ahead-inflation-data-2026-08-13/' }]
  }
};
