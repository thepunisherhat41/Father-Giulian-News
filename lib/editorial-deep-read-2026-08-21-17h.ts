import { deepReadForSlug as previousDeepRead, type EditorialDeepRead } from './editorial-deep-read-2026-08-21-10h';

const intraday: EditorialDeepRead[] = [
  {
    slug:'brasil',
    context:['O telefonema entre Lula e Trump recolocou as tarifas no nível presidencial. A conversa é um fato diplomático; retirada de tarifas, acordo comercial ou contramedida brasileira continuam etapas distintas e ainda abertas.','Tarifas podem afetar exportadores, emprego, cadeias de suprimento e preços por canais diferentes. O impacto varia por produto, alíquota, câmbio e capacidade de redirecionar vendas.'],
    practical:['Para empresas, acompanhar a lista formal de produtos e vigência das alíquotas é mais útil do que reagir apenas a declarações políticas.','Para consumidores, não atribua automaticamente qualquer mudança de preço às tarifas: câmbio, frete, margem e oferta doméstica também importam.'],
    limits:['Telefonema não equivale a acordo.','Negociação anunciada não significa suspensão das tarifas.','Possível reciprocidade deve ser tratada como possibilidade até existir ato formal.'],
    watch:['Reuniões entre autoridades comerciais dos dois países.','Atos formais que alterem alíquotas ou produtos atingidos.','Eventuais contramedidas brasileiras e seus prazos.']
  },
  {
    slug:'mundo',
    context:['O fechamento do Brent em US$93,86 consolida o risco de oferta sem repetir o pico intradiário da manhã. A ameaça americana de sanções a parceiros comerciais do Irã e a incerteza no Golfo mantêm prêmio geopolítico no barril.','Hormuz é relevante porque concentra fluxo energético. Mercado pode precificar risco antes de haver perda física equivalente de oferta.'],
    practical:['Ao ler manchetes de energia, separe preço do barril, fluxo físico, seguro/frete e medida de sanção efetivamente vigente.','Para o Brasil, acompanhe também câmbio e política de preços doméstica antes de inferir impacto na bomba.'],
    limits:['Fluxo reduzido não é bloqueio total.','Ameaça de sanção não é automaticamente sanção implementada.','Preço internacional mais alto não produz repasse imediato e proporcional ao consumidor brasileiro.'],
    watch:['Tráfego marítimo e produção efetiva.','Novos atos formais dos EUA e resposta iraniana.','Abertura do Brent na próxima semana.']
  },
  {
    slug:'tempo',
    context:['O CGE mediu 53,6 km/h na Barragem Guarapiranga às 14h20. É um dado localizado e de curta duração, útil para confirmar que a frente trouxe vento, mas não deve ser extrapolado para toda a cidade.','A entrada de ar frio após a passagem frontal reduz temperaturas à noite e muda o conforto térmico rapidamente em relação à tarde.'],
    practical:['Durante rajadas, evite permanecer sob árvores, placas ou estruturas instáveis e acompanhe alertas oficiais.','Leve em conta a queda de temperatura em deslocamentos noturnos e atividades externas.'],
    limits:['Uma estação acima de 50 km/h não significa a mesma intensidade em todos os bairros.','Vento forte não implica temporal generalizado nem dano obrigatório.'],
    watch:['Mínima da madrugada.','Novos alertas CGE/Defesa Civil.','Atualização de sábado e domingo antes de atividades ao ar livre.']
  },
  {
    slug:'financas',
    context:['O fechamento combinou Brent em US$93,86 com juros longos americanos ainda elevados. Energia e funding respondem a motores diferentes: geopolítica/oferta de um lado; fiscal, dívida e prêmio de prazo do outro.','Esse cruzamento importa porque custo de energia entra em produção e transporte, enquanto yield longo funciona como referência para desconto de ativos e financiamento.'],
    practical:['Compare CET, prazo e capacidade de pagamento em dívidas longas.','Não faça orçamento contando com queda futura de juros.','Separe volatilidade semanal de mudança estrutural antes de alterar carteira ou consumo.'],
    limits:['Treasury alto não determina Selic.','Brent não fixa gasolina brasileira.','Um fechamento semanal não garante tendência da semana seguinte.'],
    watch:['Curva longa dos Treasuries.','Brent e risco físico no Golfo.','USD/BRL e expectativas de inflação no Brasil.']
  },
  {
    slug:'tecnologia',
    context:['O investimento minoritário da Nvidia na Cloverleaf Infrastructure mostra uma mudança de foco na cadeia de IA: acelerar chips não resolve sozinho a implantação de capacidade computacional.','Sites de data center dependem de terreno, conexão à rede elétrica, licenças, construção e refrigeração, etapas que frequentemente têm prazo maior que a aquisição de servidores.'],
    practical:['Ao avaliar projetos de IA, trate energia e interconexão como dependências arquiteturais, não como detalhe de facilities.','Para empresas, custo por token e disponibilidade futura dependem também da capacidade física que sustenta a computação.'],
    limits:['Investimento minoritário não é aquisição.','Mais terrenos preparados não significam data centers já operacionais.','O anúncio não garante uso exclusivo de GPUs Nvidia nos projetos.'],
    watch:['Projetos concretos da Cloverleaf após o investimento.','Prazos de interconexão e capacidade elétrica.','Capex, leases e retorno econômico dos grandes clusters de IA.']
  }
];

export function deepReadForSlug(slug:string) {
  return intraday.find((item) => item.slug === slug) ?? previousDeepRead(slug);
}

export type { EditorialDeepRead } from './editorial-deep-read-2026-08-21-10h';
