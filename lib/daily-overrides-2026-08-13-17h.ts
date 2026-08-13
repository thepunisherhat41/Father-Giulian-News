import { dailyContent, todayDrops } from './daily-content';

const patchDrop = (slug: string, title: string, detail: string) => {
  const index = todayDrops.findIndex((item) => item.slug === slug);
  if (index >= 0) todayDrops[index] = { ...todayDrops[index], title, detail };
};

Object.assign(dailyContent.hoje, {
  title: 'Edição de 13 de agosto · atualização das 17h',
  summary: 'A revisão do fim da tarde incorporou a virada do petróleo após um ataque reivindicado contra uma refinaria saudita, a reação dos mercados ao PPI dos EUA, o contraste entre a alta de chips e a queda da Cisco e um caso concreto de risco em infraestrutura SD-WAN.',
  readTime: '18 MISSÕES · 17H REFRESH',
  badge: '17H INTELLIGENCE UPDATE',
});

patchDrop('mundo', 'Petróleo devolve parte da queda após ataque reivindicado contra refinaria saudita', 'Brent chegou a cair mais de 3,5%, mas reduziu as perdas depois que os Houthis disseram ter atacado a refinaria de Jazan; a Arábia Saudita não havia comentado imediatamente.');
patchDrop('financas', 'Mercado reduz aposta em alta do Fed e Treasuries cedem', 'Depois do PPI estável, futuros passaram a indicar cerca de 65% de chance de manutenção dos juros em setembro; ações subiram e yields recuaram.');
patchDrop('tecnologia', 'IA impulsiona chips, mas Cisco cai mesmo com guidance forte', 'Sandisk e Micron lideraram a alta de semicondutores, enquanto a Cisco caiu cerca de 9% apesar de projetar receita anual acima das expectativas.');
patchDrop('seguranca', 'Controladores SD-WAN entram no radar de ataques a edge', 'Mandiant documentou exploração em Cisco Catalyst SD-WAN Manager e destacou a importância de telemetria, hardening e investigação retroativa em appliances de rede.');
patchDrop('appsec-ssdlc', 'CVE-2026-20245: função administrativa de upload expôs risco crítico no control plane', 'O caso reforça que interfaces administrativas, uploads e componentes privilegiados precisam de threat modeling e testes negativos, mesmo quando exigem autenticação.');

Object.assign(dailyContent.mundo, {
  title: 'Petróleo cai com demanda mais fraca, mas ataque reivindicado contra refinaria saudita recoloca risco de oferta no preço',
  summary: 'O Brent chegou a cair mais de 3,5% nesta quinta com estoques americanos maiores e revisões para baixo na demanda global. As perdas diminuíram depois que os Houthis disseram ter atacado a refinaria de Jazan. Até a publicação da Reuters, a Arábia Saudita não havia comentado a reivindicação.',
  shareSummary: 'O petróleo viveu um cabo de guerra nesta quinta: estoques altos e demanda mais fraca derrubaram os preços, mas uma reivindicação de ataque contra a refinaria saudita de Jazan devolveu prêmio de risco ao mercado. Brent ficou perto de US$ 88 no fim da tarde.',
  readTime: '9 MIN READ',
  badge: 'GLOBAL WATCH / 17H',
  stats: [
    { label: 'BRENT', value: '~US$ 88', note: 'após cair mais de 3,5% no início do dia' },
    { label: 'ESTOQUES EUA', value: '+17,4 mi bbl', note: 'maior alta semanal desde jan/2023' },
    { label: 'JAZAN', value: '250 mil bpd', note: 'capacidade de diesel da refinaria, segundo Aramco' },
  ],
  sections: [
    { title: 'O que mudou desde a manhã', paragraphs: ['A narrativa deixou de ser apenas “demanda mais fraca derruba petróleo”. Depois de uma queda acentuada, os preços recuperaram parte das perdas quando os Houthis reivindicaram um ataque à refinaria de Jazan. A Reuters informou que não havia comentário imediato da Arábia Saudita, então a autoria e os efeitos operacionais precisam ser tratados como uma reivindicação.'] },
    { title: 'Por que o preço consegue cair e subir no mesmo dia', paragraphs: ['O petróleo reage simultaneamente a duas forças. Do lado da demanda, estoques americanos subiram e OPEC/IEA reduziram projeções. Do lado da oferta, ataques, bloqueios, seguros de guerra e incerteza sobre Hormuz elevam o prêmio de risco.'] },
    { title: 'A conexão com o Brasil', paragraphs: ['Petróleo mais caro pode pressionar derivados, frete e inflação, mas o repasse doméstico não é automático: câmbio, política comercial da Petrobras, impostos e estoques também importam.'] },
  ],
  sources: [
    { label: 'Reuters · Oil pares losses after Houthi attack report · 13/08/2026', url: 'https://www.reuters.com/business/energy/oil-drops-lower-demand-forecasts-despite-deadlock-us-iran-talks-2026-08-13/' },
    { label: 'Reuters · Houthis claim Jazan refinery attack · 13/08/2026', url: 'https://www.reuters.com/world/middle-east/yemens-houthis-say-they-attacked-saudi-aramco-refinery-jazan-with-two-drones-2026-08-13/' },
  ],
});

Object.assign(dailyContent.financas, {
  title: 'O mercado mudou a probabilidade do Fed em poucas horas — e isso mexeu com ações, dólar e Treasuries',
  summary: 'Após o PPI de julho ficar estável, futuros passaram a precificar aproximadamente 65% de chance de o Fed manter a taxa em setembro, contra cerca de 50% no dia anterior. O S&P 500 avançou, o dólar perdeu força e o rendimento do Treasury de 10 anos recuou.',
  shareSummary: 'O PPI estável mudou a leitura do mercado sobre o Fed: a chance implícita de manutenção dos juros em setembro subiu para cerca de 65%. Ações ganharam força, o dólar enfraqueceu e yields recuaram. É preço de probabilidade, não decisão do Fed.',
  readTime: '9 MIN READ',
  badge: 'FINANÇAS / 17H MARKET UPDATE',
  stats: [
    { label: 'FED HOLD', value: '~65%', note: 'probabilidade implícita de mercado' },
    { label: 'UST 10Y', value: '~4,62%', note: 'yield recuando no dia' },
    { label: 'S&P 500', value: 'RECORD HIGH', note: 'máxima intradiária' },
  ],
  sections: [
    { title: 'A notícia não é só o PPI', paragraphs: ['O dado de inflação ao produtor já havia entrado na edição das 10h. A novidade da tarde é observar como o mercado incorporou esse número: reduziu apostas em alta de juros, comprou ações e Treasuries e enfraqueceu marginalmente o dólar.'] },
    { title: 'Probabilidade implícita não é previsão garantida', paragraphs: ['Quando futuros de Fed Funds apontam 65%, isso significa que os preços negociados naquele instante são compatíveis com essa probabilidade. Novos dados podem alterar a conta rapidamente.'] },
    { title: 'Como usar isso no dia a dia', bullets: ['Não tome decisão de investimento porque “o Fed vai fazer X”; trate como cenário.', 'Observe juros longos, dólar e petróleo juntos para entender condições financeiras.', 'Para financiamento pessoal no Brasil, a Selic e o CET do seu contrato importam mais que uma única sessão de Wall Street.'] },
  ],
  sources: [
    { label: 'Reuters · Global markets · 13/08/2026', url: 'https://www.reuters.com/world/china/global-markets-global-markets-2026-08-13/' },
  ],
});

Object.assign(dailyContent.tecnologia, {
  title: 'A tarde mostrou duas faces da corrida de IA: chips em alta, Cisco em queda',
  summary: 'Sandisk subiu cerca de 15% e Micron 5,6%, levando o índice de semicondutores a uma alta próxima de 1,8%. Ao mesmo tempo, a Cisco caiu cerca de 9% mesmo após apresentar guidance de receita acima das expectativas para 2027.',
  shareSummary: 'A corrida de IA não é uma maré que leva todas as empresas igual. Chips e storage avançaram nesta quinta, mas a Cisco caiu cerca de 9% apesar de guidance forte. Receita, margem, valuation e expectativa do mercado importam tanto quanto “estar exposto à IA”.',
  readTime: '8 MIN READ',
  badge: 'TECH / 17H MARKET SIGNAL',
  stats: [
    { label: 'SANDISK', value: '~+15%' },
    { label: 'MICRON', value: '~+5,6%' },
    { label: 'CISCO', value: '~-9%', note: 'mesmo com guidance forte' },
  ],
  sections: [
    { title: 'Por que isso é uma aula de tecnologia e não só de bolsa', paragraphs: ['Infraestrutura de IA é uma cadeia: compute, memória, storage, rede, óptica, energia e software. Em um mesmo dia, investidores podem enxergar gargalos e margens diferentes em cada elo.'] },
    { title: 'O gargalo pode mudar de lugar', paragraphs: ['À medida que aceleradores ficam mais disponíveis, memória, armazenamento de alta velocidade, interconexão e energia podem se tornar limitadores. É por isso que acompanhar apenas uma empresa dá uma visão incompleta do stack físico da IA.'] },
    { title: 'A conexão menos óbvia', paragraphs: ['Uma empresa pode divulgar crescimento forte e ainda cair se o mercado esperava mais, se margens pioram ou se o preço da ação já incorporava um cenário otimista. Tecnologia e valuation são problemas diferentes.'] },
  ],
  sources: [
    { label: 'Reuters · Tech stocks power S&P 500 · 13/08/2026', url: 'https://www.reuters.com/business/retail-consumer/wall-st-futures-tick-higher-oil-retreats-ahead-inflation-data-2026-08-13/' },
  ],
});

Object.assign(dailyContent.seguranca, {
  title: 'Living off the edge: por que controladores SD-WAN viraram alvo de alto valor',
  summary: 'Mandiant documentou exploração de uma vulnerabilidade em Cisco Catalyst SD-WAN Manager depois de acesso administrativo. O caso incluiu elevação de privilégio e técnicas para reduzir evidências, reforçando a importância de tratar control planes de rede como ativos críticos.',
  shareSummary: 'Mandiant documentou exploração em Cisco Catalyst SD-WAN Manager com impacto de alto privilégio e limpeza anti-forense. Edge devices são alvos valiosos porque controlam tráfego e costumam ter telemetria mais limitada que endpoints tradicionais.',
  readTime: '10 MIN READ',
  badge: 'CYBER / 17H THREAT CASE',
  stats: [
    { label: 'ALVO', value: 'SD-WAN', note: 'control plane' },
    { label: 'IMPACTO', value: 'ALTO PRIVILÉGIO' },
    { label: 'TÁTICA', value: 'ANTI-FORENSICS' },
  ],
  sections: [
    { title: 'Por que “edge” é tão valioso', paragraphs: ['Controladores de SD-WAN enxergam topologia, rotas, túneis e configurações de várias filiais. Comprometer esse ponto pode oferecer mais contexto e alcance que atacar uma estação de trabalho isolada.'] },
    { title: 'A parte mais preocupante do caso', paragraphs: ['O ator restaurou alterações e verificou a remoção de vestígios, comportamento compatível com uma operação interessada em reduzir a chance de detecção.'] },
    { title: 'Defesa prática', bullets: ['Trate control plane de rede como Tier 0.', 'Restrinja administração a redes e identidades dedicadas.', 'Colete logs fora do appliance sempre que possível.', 'Faça hunting retroativo quando houver zero-day em edge.', 'Patch é necessário, mas não substitui investigação quando exploração pode ter ocorrido.'] },
  ],
  sources: [
    { label: 'Mandiant · CVE-2026-20245 in Cisco Catalyst SD-WAN Manager · 24/06/2026', url: 'https://cloud.google.com/blog/topics/threat-intelligence/zero-day-exploitation-cisco-catalyst-sd-wan-manager' },
  ],
});

Object.assign(dailyContent['appsec-ssdlc'], {
  title: 'CVE-2026-20245: o que um caso em SD-WAN ensina sobre uploads administrativos e trust boundaries',
  summary: 'A vulnerabilidade estava ligada ao processamento de arquivo em uma função administrativa do Cisco Catalyst SD-WAN Manager. O caso reforça que “requer autenticação” não elimina risco quando o ativo é um control plane central e o impacto final é elevado.',
  shareSummary: 'CVE-2026-20245 mostra por que funções administrativas também precisam de threat modeling. Uploads, parsers e processos privilegiados devem ser testados considerando conta comprometida, conteúdo malformado e blast radius do ativo.',
  readTime: '11 MIN READ',
  badge: 'APPSEC / 17H CASE STUDY',
  stats: [
    { label: 'VETOR', value: 'FILE UPLOAD' },
    { label: 'PRÉ-REQ.', value: 'AUTHENTICATED' },
    { label: 'ATIVO', value: 'CONTROL PLANE' },
  ],
  sections: [
    { title: 'O erro de modelagem', paragraphs: ['Funções administrativas frequentemente recebem menos atenção porque “só admin usa”. Uma trust boundary madura pergunta o que acontece se a conta for comprometida ou se um usuário autorizado fornecer conteúdo inesperado.'] },
    { title: 'Upload é mais que extensão e MIME type', paragraphs: ['O risco depende do caminho do arquivo depois do upload: parsing, permissões, isolamento e processos privilegiados. Validação precisa considerar a cadeia inteira, não apenas o formato declarado na entrada.'] },
    { title: 'Como traduzir isso para SSDLC', bullets: ['Threat model de funções administrativas e control planes.', 'Testes negativos com arquivos malformados.', 'Parsers com privilégio mínimo e isolamento.', 'Revisão de integrações que processam arquivos em contexto privilegiado.', 'Priorização contextual por blast radius, não apenas por pré-requisito de autenticação.'] },
  ],
  sources: [
    { label: 'Mandiant · Zero-day exploitation of CVE-2026-20245 · 24/06/2026', url: 'https://cloud.google.com/blog/topics/threat-intelligence/zero-day-exploitation-cisco-catalyst-sd-wan-manager' },
  ],
});
