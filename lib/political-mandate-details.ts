export type ProposalMandateDetail = {
  origin: string;
  explanation: string;
  institutionalPath: string;
  openQuestions: string;
  accountability: string;
};

export type CandidateMandateContext = {
  mandate: string;
  officeLens: string;
  basis: string;
  basisNote: string;
  proposalDetails: ProposalMandateDetail[];
};

export const candidateMandateContext: Record<string, CandidateMandateContext> = {
  'Luiz Inácio Lula da Silva': {
    mandate: '2027–2030',
    officeLens: 'PRESIDÊNCIA · PODER EXECUTIVO FEDERAL',
    basis: 'PROGRAMA / PLANO E CAMPANHA 2026',
    basisNote: 'As propostas abaixo são tratadas como compromissos do ciclo eleitoral de 2026. Quando o item depende de lei, PEC ou orçamento aprovado pelo Congresso, isso é separado daquilo que um presidente consegue executar administrativamente.',
    proposalDetails: [
      {
        origin: 'AGENDA ECONÔMICA 2026',
        explanation: 'A ideia é preservar a regra fiscal vigente e, ao mesmo tempo, manter investimento federal em infraestrutura, indústria e produtividade. Na prática, a tensão central é compatibilizar expansão do investimento com metas fiscais e trajetória da dívida.',
        institutionalPath: 'Parte pode ser executada pelo Executivo por orçamento, programas e bancos públicos; mudanças relevantes na regra fiscal, créditos e leis orçamentárias passam pelo Congresso.',
        openQuestions: 'Quanto de investimento adicional caberia no orçamento, quais projetos teriam prioridade e quais receitas ou cortes sustentariam a trajetória fiscal são pontos que precisam ser acompanhados no detalhamento anual.',
        accountability: 'Acompanhar resultado primário, dívida/PIB, investimento público federal, execução do orçamento e metas físicas dos projetos anunciados.',
      },
      {
        origin: 'SEGURANÇA PÚBLICA · CAMPANHA 2026',
        explanation: 'A proposta busca aumentar a coordenação federal contra o crime organizado, usando integração de dados, inteligência e investigação patrimonial/financeira, além da criação de uma estrutura ministerial específica.',
        institutionalPath: 'Reorganização administrativa pode partir do Executivo, mas competências, orçamento e mudanças legais ligadas à PEC da Segurança dependem do Congresso e da cooperação com estados.',
        openQuestions: 'O desenho final de competências entre União e estados, orçamento, indicadores e limites de atuação federal precisam estar claros para medir a mudança real.',
        accountability: 'Cobrar texto legal aprovado, orçamento da estrutura, integração efetiva de bases e indicadores de investigação financeira e operações integradas.',
      },
      {
        origin: 'SAÚDE · PROGRAMA 2026',
        explanation: 'O eixo é ampliar programas já existentes do SUS, aumentar acesso a profissionais e medicamentos e reduzir filas de atenção especializada, com maior digitalização da informação clínica.',
        institutionalPath: 'O Ministério da Saúde pode expandir programas e repasses, mas escala depende de orçamento federal, pactuação com estados/municípios e capacidade instalada da rede.',
        openQuestions: 'Metas de redução de espera, quantidade de especialistas, interoperabilidade de prontuários e fonte permanente de financiamento são os pontos mais importantes para transformar a promessa em indicador mensurável.',
        accountability: 'Observar tempo médio de espera, cobertura dos programas, execução orçamentária, disponibilidade regional e metas públicas de atendimento.',
      },
      {
        origin: 'TRABALHO · BANDEIRA 2026',
        explanation: 'A defesa de redução de jornada e mudança da escala 6x1 altera regras trabalhistas e pode afetar organização de turnos, custos, produtividade e qualidade de vida de forma diferente por setor.',
        institutionalPath: 'Não é uma medida que o presidente implemente sozinho: mudanças gerais de jornada exigem tramitação legislativa e, dependendo do desenho, alteração constitucional ou legal.',
        openQuestions: 'Carga semanal final, transição, tratamento de setores contínuos, pequenas empresas, compensação de horas e efeitos sobre salários precisam ser definidos no texto legislativo.',
        accountability: 'Acompanhar proposta formal enviada/apoiada, texto votado no Congresso, regras de transição e estudos de impacto publicados.',
      },
    ],
  },

  'Flávio Bolsonaro': {
    mandate: '2027–2030',
    officeLens: 'PRESIDÊNCIA · PODER EXECUTIVO FEDERAL',
    basis: 'PLANO / CAMPANHA 2026',
    basisNote: 'Os itens representam propostas apresentadas para a disputa presidencial de 2026. Alguns mecanismos ainda dependem de detalhamento normativo e fiscal; o site não trata intenção de campanha como medida já pronta para execução.',
    proposalDetails: [
      {
        origin: 'ECONOMIA · PLANO 2026',
        explanation: 'O eixo combina uma nova regra fiscal mais vinculada à dívida, redução da estrutura ministerial, revisão de benefícios tributários e retomada de privatizações e concessões.',
        institutionalPath: 'O presidente pode reorganizar parte da administração e propor desestatizações, mas regra fiscal, orçamento, venda de ativos específicos e mudanças tributárias podem exigir Congresso e órgãos reguladores.',
        openQuestions: 'A fórmula exata da nova regra fiscal, ritmo dos cortes, ministérios atingidos, ativos a privatizar e tratamento de políticas públicas durante a transição precisam ser definidos.',
        accountability: 'Acompanhar projeto da regra fiscal, número e função dos ministérios, economia efetiva de despesas, dívida/PIB e lista formal de privatizações/concessões.',
      },
      {
        origin: 'SEGURANÇA · CAMPANHA 2026',
        explanation: 'A proposta endurece o tratamento federal do crime organizado, incluindo mudanças penais, expansão do sistema penitenciário federal e tentativa de enquadrar grandes facções em regime jurídico mais severo.',
        institutionalPath: 'Alterações penais e redução da maioridade dependem do Congresso; uma mudança constitucional exige quórum de PEC. A política penitenciária federal depende também de orçamento e execução administrativa.',
        openQuestions: 'Definição jurídica de terrorismo, efeitos sobre investigação, cooperação internacional, capacidade prisional e garantias processuais são pontos que exigem texto legal concreto.',
        accountability: 'Acompanhar projetos apresentados, pareceres técnicos, expansão real de vagas federais e indicadores de investigação/condenação de organizações criminosas.',
      },
      {
        origin: 'EDUCAÇÃO · PLANO 2026',
        explanation: 'O programa dá ênfase a escolas cívico-militares, alfabetização por método fônico e mecanismos de escolha/financiamento como vouchers em determinados contextos.',
        institutionalPath: 'Educação básica é fortemente executada por estados e municípios; o governo federal pode induzir políticas por programas, diretrizes e financiamento, mas implementação depende de adesão e regras educacionais.',
        openQuestions: 'Escala, custo por aluno, critérios de adesão, avaliação de aprendizagem e desenho de eventual voucher precisam ser comparados com a rede pública existente.',
        accountability: 'Observar desenho dos programas, adesão federativa, custo por aluno, avaliações de alfabetização e critérios transparentes para expansão.',
      },
      {
        origin: 'INSTITUIÇÕES · PLANO 2026',
        explanation: 'As propostas buscam alterar regras relacionadas a decisões judiciais individuais, foro e equilíbrio entre Poderes. São mudanças institucionais de alto impacto, não simples atos administrativos.',
        institutionalPath: 'Dependendo da medida, seriam necessárias leis ou emendas constitucionais aprovadas pelo Congresso; o Executivo não pode redefinir unilateralmente as competências do STF.',
        openQuestions: 'Texto constitucional/legal exato, alcance sobre decisões urgentes, separação de Poderes e efeitos sobre segurança jurídica precisam ser avaliados a partir da proposta formal.',
        accountability: 'Acompanhar PECs e projetos protocolados, pareceres de constitucionalidade e diferenças entre a promessa de campanha e o texto efetivamente enviado.',
      },
    ],
  },

  'Ronaldo Caiado': {
    mandate: '2027–2030',
    officeLens: 'PRESIDÊNCIA · PODER EXECUTIVO FEDERAL',
    basis: 'PROGRAMA 2026 · EIXOS DIVULGADOS',
    basisNote: 'A campanha apresentou propostas por eixos e equipes temáticas. Onde o detalhamento público ainda é fragmentado, a página mantém essa limitação explícita em vez de completar lacunas por inferência.',
    proposalDetails: [
      {
        origin: 'FISCAL · PROGRAMA 2026',
        explanation: 'A meta política divulgada é estabilizar a dívida em aproximadamente dois a três anos, usando contenção de novas despesas e revisão de incentivos tributários.',
        institutionalPath: 'O Executivo formula orçamento e política econômica, mas cortes, revisão de benefícios tributários e alterações estruturais dependem de leis e negociação com o Congresso.',
        openQuestions: 'Quais despesas ficariam protegidas, quais incentivos seriam revistos, qual trajetória anual de resultado primário e qual cenário macroeconômico sustentariam a meta ainda precisam ser explicitados em detalhe.',
        accountability: 'Acompanhar metas anuais de dívida/PIB, resultado primário, gasto real e lista pública de incentivos revistos.',
      },
      {
        origin: 'SEGURANÇA · EIXO 2026',
        explanation: 'A segurança aparece como eixo central, com ênfase em inteligência, repressão a facções e mudanças legislativas inspiradas na experiência executiva estadual do candidato.',
        institutionalPath: 'A União controla Polícia Federal, sistema penitenciário federal e políticas nacionais, mas segurança cotidiana permanece fortemente estadual; integração federativa é indispensável.',
        openQuestions: 'Metas nacionais, divisão de responsabilidades, financiamento aos estados e conteúdo das mudanças legais devem ser detalhados para comparar intenção com execução possível.',
        accountability: 'Observar projetos enviados, orçamento federal de segurança, operações integradas, indicadores de crime organizado e transparência dos resultados.',
      },
      {
        origin: 'SAÚDE · EIXO TÉCNICO 2026',
        explanation: 'A campanha informou a construção de um plano amplo de saúde com equipe técnica, buscando reorganizar acesso, gestão e capacidade assistencial do SUS.',
        institutionalPath: 'Políticas nacionais podem ser induzidas pelo Ministério da Saúde via financiamento e normas, mas a execução depende da rede estadual e municipal.',
        openQuestions: 'É importante conferir no documento consolidado quais propostas receberam metas, orçamento, cronograma e indicadores, pois anúncios de equipe não equivalem a desenho operacional completo.',
        accountability: 'Cobrar publicação integral do plano, metas de acesso, orçamento e indicadores nacionais comparáveis por região.',
      },
      {
        origin: 'PRODUTIVIDADE · PROGRAMA 2026',
        explanation: 'Ciência, tecnologia e desburocratização são apresentadas como instrumentos para aumentar produtividade e crescimento, aproximando inovação e reforma do Estado.',
        institutionalPath: 'O Executivo pode alterar processos administrativos e programas de inovação; mudanças regulatórias, tributárias e orçamentárias mais profundas exigem legislação.',
        openQuestions: 'Quais regulações seriam alteradas, quais investimentos teriam prioridade e como seria medido ganho de produtividade precisam aparecer em propostas específicas.',
        accountability: 'Acompanhar atos de simplificação, investimento em P&D, digitalização, produtividade e avaliação de impacto regulatório.',
      },
    ],
  },

  'Romeu Zema': {
    mandate: '2027–2030',
    officeLens: 'PRESIDÊNCIA · PODER EXECUTIVO FEDERAL',
    basis: 'PLANO / CAMPANHA 2026',
    basisNote: 'A agenda apresentada em 2026 enfatiza redução do papel econômico direto do Estado, reformas e segurança. Cada proposta é separada do mecanismo legal necessário para implementá-la.',
    proposalDetails: [
      {
        origin: 'DESESTATIZAÇÃO · PROGRAMA 2026',
        explanation: 'A proposta amplia privatizações e inclui a defesa de desestatização de grandes empresas federais, com argumento de redirecionar capital e reduzir presença empresarial do Estado.',
        institutionalPath: 'Cada ativo possui regras próprias; privatizações podem exigir autorização legal, modelagem, avaliação, órgãos de controle e desenho regulatório para o setor.',
        openQuestions: 'Lista final de ativos, valuation, uso dos recursos, proteção à concorrência, regulação e impactos tarifários/estratégicos precisam ser analisados caso a caso.',
        accountability: 'Acompanhar projetos de desestatização, avaliações independentes, destino dos recursos, concentração de mercado e indicadores de serviço após eventual venda.',
      },
      {
        origin: 'REFORMAS · PROGRAMA 2026',
        explanation: 'A agenda propõe novas reformas administrativa e previdenciária com foco em despesas permanentes e desenho do Estado.',
        institutionalPath: 'Mudanças em carreiras, estabilidade, benefícios e previdência podem exigir leis e emendas constitucionais com quórum qualificado no Congresso.',
        openQuestions: 'Quem seria afetado, regras de transição, economia projetada, impacto sobre atração de servidores e proteção de direitos adquiridos precisam constar do texto formal.',
        accountability: 'Comparar economia projetada com realizada, regras de transição, impacto sobre folha/previdência e qualidade dos serviços públicos.',
      },
      {
        origin: 'POLÍTICA SOCIAL · CAMPANHA 2026',
        explanation: 'A proposta busca aumentar condicionalidades ligadas a procura por emprego e qualificação em programas sociais, tentando aproximar transferência de renda e porta de saída via trabalho.',
        institutionalPath: 'Regras de programas federais podem ser alteradas por lei, regulamento e orçamento, conforme o benefício; integração com emprego exige base de dados e oferta real de qualificação/vagas.',
        openQuestions: 'Critérios de exceção para pessoas incapazes de trabalhar, regiões sem vagas, famílias com crianças e tempo de transição são essenciais para avaliar risco de exclusão indevida.',
        accountability: 'Monitorar cobertura, desligamentos, renda após saída do programa, emprego formal e mecanismos de recurso para beneficiários.',
      },
      {
        origin: 'SEGURANÇA · CAMPANHA 2026',
        explanation: 'O eixo endurece o enfrentamento a facções e admite instrumentos federais mais intensos, incluindo propostas de mudança de classificação jurídica e uso excepcional de forças federais.',
        institutionalPath: 'Mudanças penais dependem do Congresso; emprego das Forças Armadas e coordenação federativa obedecem regras constitucionais e legais específicas.',
        openQuestions: 'Critérios de emprego, duração, comando, controle externo, garantias individuais e métricas de eficácia precisam estar definidos em normas e planos operacionais.',
        accountability: 'Acompanhar texto legal, protocolos de operação, indicadores de crime organizado e controle judicial/parlamentar das medidas.',
      },
    ],
  },

  'Renan Santos': {
    mandate: '2027–2030',
    officeLens: 'PRESIDÊNCIA · PODER EXECUTIVO FEDERAL',
    basis: 'LIVRO AMARELO / PROGRAMA 2026',
    basisNote: 'A candidatura vincula seu programa ao Livro Amarelo. A página separa o desenho programático das etapas constitucionais, fiscais e administrativas necessárias para transformá-lo em política pública.',
    proposalDetails: [
      {
        origin: 'REFORMA DO ESTADO · PROGRAMA 2026',
        explanation: 'O programa propõe transição fiscal, reforma administrativa e mudanças no pacto federativo, alterando despesas, competências e relação financeira entre União, estados e municípios.',
        institutionalPath: 'Grande parte exigiria leis complementares, orçamento e possivelmente emendas constitucionais, além de negociação com governadores, prefeitos e Congresso.',
        openQuestions: 'Distribuição de receitas, serviços afetados, transição de servidores e impacto regional precisam ser detalhados em textos normativos e projeções fiscais.',
        accountability: 'Acompanhar PECs/projetos, projeções de economia, repartição de receitas e indicadores de prestação de serviços durante a transição.',
      },
      {
        origin: 'SEGURANÇA · PROGRAMA 2026',
        explanation: 'A agenda propõe atuação repressiva mais intensa contra facções e retomada territorial, com mudanças penais e operacionais apresentadas como ruptura com a política atual.',
        institutionalPath: 'Direito penal é federal e depende do Congresso; operações de segurança envolvem União e estados e precisam respeitar competências e controles constitucionais.',
        openQuestions: 'Limites jurídicos, controle de abuso, critérios de intervenção, política penitenciária e medidas de prevenção precisam ser confrontados com o texto final das propostas.',
        accountability: 'Observar leis aprovadas, protocolos operacionais, letalidade, prisões/condenações, controle territorial e auditoria independente de resultados.',
      },
      {
        origin: 'RENDA / AÇÕES AFIRMATIVAS · PROGRAMA 2026',
        explanation: 'O programa propõe substituir o Bolsa Família por frentes de trabalho remuneradas e encerrar cotas raciais, mudando profundamente duas políticas federais existentes.',
        institutionalPath: 'Mudanças dependem de legislação, orçamento e compatibilidade constitucional; frentes de trabalho também exigem desenho trabalhista, vagas e capacidade de execução local.',
        openQuestions: 'Cobertura de pessoas incapazes de trabalhar, custo das frentes, remuneração, proteção a crianças e impactos distributivos/raciais são pontos centrais ainda sujeitos ao desenho legal.',
        accountability: 'Acompanhar cobertura de renda, emprego gerado, custo por beneficiário, pobreza e indicadores de acesso de grupos afetados.',
      },
      {
        origin: 'HABITAÇÃO · PROGRAMA 2026',
        explanation: 'A proposta de reurbanização em larga escala procura substituir assentamentos precários por urbanização, infraestrutura e novas soluções habitacionais ao longo de uma década.',
        institutionalPath: 'Exige coordenação com estados e municípios, regularização fundiária, licenciamento, financiamento de longo prazo e grande capacidade de obras.',
        openQuestions: 'Número de famílias, custo total, critérios de reassentamento, localização das moradias, proteção contra remoções inadequadas e cronograma anual precisam ser mensuráveis.',
        accountability: 'Monitorar famílias atendidas, urbanização entregue, custo por unidade/intervenção, distância de emprego/transporte e regularização fundiária.',
      },
    ],
  },

  'Samara Martins': {
    mandate: '2027–2030',
    officeLens: 'PRESIDÊNCIA · PODER EXECUTIVO FEDERAL',
    basis: 'PROGRAMA / CAMPANHA 2026',
    basisNote: 'As propostas refletem o programa político apresentado no ciclo de 2026. Medidas estruturais como nacionalizações, dívida e segurança pública exigiriam mudanças legais e institucionais muito além de um ato presidencial isolado.',
    proposalDetails: [
      {
        origin: 'ESTADO / ECONOMIA · PROGRAMA 2026',
        explanation: 'A agenda propõe reverter privatizações e ampliar controle público sobre setores considerados estratégicos, aumentando a presença empresarial do Estado.',
        institutionalPath: 'Reestatizações podem exigir compra, indenização, lei, negociação contratual e orçamento, dependendo do ativo e da forma como foi privatizado.',
        openQuestions: 'Quais empresas seriam priorizadas, critérios de valuation, custo fiscal, governança e tratamento de acionistas/contratos precisam ser explicitados.',
        accountability: 'Acompanhar lista formal de ativos, custo, fonte de recursos, governança das empresas e desempenho operacional após eventual mudança de controle.',
      },
      {
        origin: 'SERVIÇOS PÚBLICOS · PROGRAMA 2026',
        explanation: 'O programa defende ampliar investimento público em saúde, educação, moradia e políticas sociais, com o Estado como principal provedor e financiador.',
        institutionalPath: 'Expansão depende de orçamento, receitas, regras fiscais e execução compartilhada com estados/municípios em várias políticas.',
        openQuestions: 'Metas físicas, volume de recursos, fonte de financiamento e prioridades entre áreas são necessários para avaliar o alcance real da expansão.',
        accountability: 'Monitorar gasto por função, metas de atendimento, execução orçamentária e indicadores de acesso/qualidade.',
      },
      {
        origin: 'DÍVIDA PÚBLICA · PROGRAMA 2026',
        explanation: 'A proposta de auditoria e suspensão do pagamento da dívida busca redirecionar recursos para políticas públicas, mas teria efeitos amplos sobre contratos, crédito e sistema financeiro.',
        institutionalPath: 'Uma alteração dessa magnitude enfrentaria legislação financeira, contratos, decisões judiciais, Congresso e repercussões sobre credores nacionais e internacionais.',
        openQuestions: 'Escopo da auditoria, quais obrigações seriam suspensas, duração, tratamento de credores e estratégia para financiamento do Estado durante a transição precisam ser explicitados.',
        accountability: 'Acompanhar texto formal, custo de financiamento, liquidez, impacto orçamentário e decisões judiciais/legislativas relacionadas.',
      },
      {
        origin: 'SEGURANÇA / TRABALHO · PROGRAMA 2026',
        explanation: 'A candidatura reúne desmilitarização das polícias, combate à violência de gênero/racial e fim da escala 6x1 como mudanças estruturais de segurança e relações de trabalho.',
        institutionalPath: 'Desenho das polícias envolve Constituição e estados; jornada de trabalho exige legislação federal. O Executivo precisaria construir maioria no Congresso para mudanças centrais.',
        openQuestions: 'Modelo de transição policial, carreiras, comando, financiamento e desenho da nova jornada de trabalho precisam ser detalhados separadamente.',
        accountability: 'Acompanhar PECs/projetos, protocolos de transição, indicadores de violência e regras trabalhistas efetivamente aprovadas.',
      },
    ],
  },

  'Tarcísio de Freitas': {
    mandate: '2027–2030',
    officeLens: 'GOVERNO DE SP · PODER EXECUTIVO ESTADUAL',
    basis: 'PLANO DE REELEIÇÃO / CAMPANHA 2026',
    basisNote: 'As propostas são lidas como agenda para um eventual segundo mandato estadual. A página separa aquilo que o governador pode executar daquilo que depende da Alesp, municípios ou legislação federal.',
    proposalDetails: [
      {
        origin: 'SEGURANÇA · PLANO 2026',
        explanation: 'A proposta amplia inteligência, tecnologia e integração das forças estaduais para enfrentar crime organizado, mantendo segurança como eixo prioritário da gestão.',
        institutionalPath: 'O governador controla as estruturas estaduais de segurança e orçamento proposto, mas leis, expansão de quadros e algumas mudanças dependem da Alesp; crimes federais exigem integração com União.',
        openQuestions: 'Metas por tipo de crime, protocolos de uso de tecnologia, controle da letalidade e orçamento por programa são fundamentais para mensurar resultados.',
        accountability: 'Acompanhar homicídios, roubos, feminicídios, letalidade policial, esclarecimento de crimes, execução orçamentária e auditorias.',
      },
      {
        origin: 'EDUCAÇÃO · PLANO 2026',
        explanation: 'O eixo busca expandir escolas cívico-militares, educação integral e preparação para ensino superior e trabalho dentro da rede estadual.',
        institutionalPath: 'Grande parte pode ser executada pela Secretaria de Educação com orçamento e regras estaduais, sujeita à legislação educacional e controle da Alesp/tribunais.',
        openQuestions: 'Número de escolas, critérios de seleção, custo comparado, impacto em aprendizagem e adesão de comunidades precisam ser publicados de forma verificável.',
        accountability: 'Monitorar aprendizagem, abandono, frequência, custo por aluno e resultados comparativos dos modelos implantados.',
      },
      {
        origin: 'INFRAESTRUTURA / ECONOMIA · PLANO 2026',
        explanation: 'A proposta mantém concessões e parcerias como mecanismo central para infraestrutura e combina isso com políticas de empregabilidade, empreendedorismo e indústria.',
        institutionalPath: 'Concessões dependem de modelagem, licitação, contratos, regulação e fiscalização estadual; grandes investimentos também podem exigir financiamento e autorizações.',
        openQuestions: 'Projetos prioritários, tarifas, matriz de risco, metas de qualidade, fiscalização e contrapartidas públicas precisam ser analisados contrato a contrato.',
        accountability: 'Acompanhar cronograma de obras, investimento contratado/realizado, tarifas, indicadores de qualidade e sanções aplicadas a concessionárias.',
      },
      {
        origin: 'POLÍTICAS PARA MULHERES · PLANO 2026',
        explanation: 'O plano reúne ações de segurança, autonomia econômica e saúde das mulheres, cruzando diversas secretarias em vez de concentrar a política em uma única área.',
        institutionalPath: 'Programas podem ser executados pelo governo estadual, mas escala depende de orçamento, rede municipal e integração entre segurança, saúde e assistência.',
        openQuestions: 'Metas de atendimento, cobertura territorial e indicadores específicos de violência, renda e acesso à saúde precisam acompanhar os anúncios.',
        accountability: 'Monitorar feminicídios, medidas protetivas, atendimento especializado, cobertura de serviços e execução das verbas destinadas às ações.',
      },
    ],
  },

  'Fernando Haddad': {
    mandate: '2027–2030',
    officeLens: 'GOVERNO DE SP · PODER EXECUTIVO ESTADUAL',
    basis: 'PROGRAMA + PLANO SETORIAL 2026',
    basisNote: 'Parte do conteúdo atual vem de propostas setoriais apresentadas durante a campanha, como o SP Protege. Quando uma bandeira ainda não está acompanhada de desenho completo no material citado, isso permanece sinalizado.',
    proposalDetails: [
      {
        origin: 'SP PROTEGE · SEGURANÇA 2026',
        explanation: 'A proposta cria uma agência estadual voltada ao enfrentamento de facções e busca integrar inteligência, dados, investigação patrimonial e cooperação com órgãos federais.',
        institutionalPath: 'Uma nova estrutura estadual exige organização administrativa, orçamento e possivelmente legislação na Alesp; integração com União depende de convênios e governança de dados.',
        openQuestions: 'Competências exatas da agência, sobreposição com estruturas existentes, orçamento, metas e regras de uso de IA/dados precisam ser detalhados.',
        accountability: 'Acompanhar criação legal, orçamento, operações integradas, ativos financeiros bloqueados e indicadores de crime organizado.',
      },
      {
        origin: 'TRANSPARÊNCIA CRIMINAL · PLANO SETORIAL 2026',
        explanation: 'O placar periódico de crimes busca tornar indicadores regionais mais visíveis e permitir cobrança pública frequente sobre roubos, homicídios e feminicídios.',
        institutionalPath: 'Pode ser implementado administrativamente pela Secretaria de Segurança, desde que bases, metodologia e periodicidade sejam padronizadas.',
        openQuestions: 'Metodologia, granularidade, revisão de dados, indicadores de esclarecimento e risco de incentivar foco apenas no que é medido precisam ser definidos.',
        accountability: 'Cobrar dados abertos, série histórica, metodologia pública e auditoria sobre alterações de classificação/registro.',
      },
      {
        origin: 'VIOLÊNCIA CONTRA A MULHER · PLANO SETORIAL 2026',
        explanation: 'A agenda prevê reforço das Delegacias da Mulher e uso de tecnologia para proteção e resposta a vítimas de violência doméstica.',
        institutionalPath: 'O governo estadual pode ampliar delegacias, efetivo e tecnologia; proteção integral também depende de Judiciário, Ministério Público, municípios e rede de assistência.',
        openQuestions: 'Cobertura 24h, efetivo, tempo de resposta, integração de medidas protetivas e custo da tecnologia precisam ter metas regionais.',
        accountability: 'Monitorar cobertura, tempo de atendimento, medidas protetivas, reincidência, feminicídios e disponibilidade territorial dos serviços.',
      },
      {
        origin: 'SERVIÇOS / PRIVATIZAÇÕES · CAMPANHA 2026',
        explanation: 'A candidatura sinaliza rever a agenda de privatizações e reforçar participação direta do Estado em políticas como educação, saúde e mobilidade.',
        institutionalPath: 'Contratos já assinados não são simplesmente desfeitos; revisões dependem de cláusulas, regulação, segurança jurídica, Alesp e eventual custo de indenização.',
        openQuestions: 'Quais contratos seriam revisados, quais seriam preservados e qual modelo alternativo seria usado em cada setor precisam ser explicitados individualmente.',
        accountability: 'Acompanhar decisões por contrato, custos de revisão, qualidade/tarifas dos serviços e investimento público necessário ao modelo escolhido.',
      },
    ],
  },

  'Vivian Mendes': {
    mandate: '2027–2030',
    officeLens: 'GOVERNO DE SP · PODER EXECUTIVO ESTADUAL',
    basis: 'BANDEIRAS / CAMPANHA 2026',
    basisNote: 'Os itens atuais são apresentados como bandeiras declaradas no ciclo eleitoral de 2026. A página evita tratá-los como um plano operacional completo quando a fonte citada não traz metas, custos ou cronograma.',
    proposalDetails: [
      {
        origin: 'TRABALHO · BANDEIRA 2026',
        explanation: 'O fim da escala 6x1 aparece como bandeira trabalhista, embora a regra geral de jornada seja matéria predominantemente federal.',
        institutionalPath: 'Como governadora, a atuação direta seria limitada sobre a CLT; poderia defender a mudança politicamente e aplicar políticas estaduais dentro de competências próprias, mas a regra nacional passa pelo Congresso.',
        openQuestions: 'É preciso separar o que seria política estadual de trabalho do que depende de reforma federal da jornada.',
        accountability: 'Acompanhar propostas estaduais concretas e a atuação política/partidária em projetos federais sobre jornada.',
      },
      {
        origin: 'SERVIÇOS PÚBLICOS · CAMPANHA 2026',
        explanation: 'A candidatura defende fortalecimento de saúde e educação públicas e oposição a novas privatizações estaduais.',
        institutionalPath: 'O governo estadual controla redes e orçamento dessas áreas, mas expansão depende de receita, Alesp, municípios e capacidade de contratação/infraestrutura.',
        openQuestions: 'Quais serviços seriam ampliados, metas de cobertura, contratações e fonte de recursos precisam ser especificados.',
        accountability: 'Monitorar orçamento, profissionais, filas, aprendizagem, infraestrutura e metas públicas por região.',
      },
      {
        origin: 'MULHERES · CAMPANHA 2026',
        explanation: 'O enfrentamento ao feminicídio e à violência contra mulheres é tratado como prioridade, com potencial combinação de polícia, assistência, saúde e prevenção.',
        institutionalPath: 'O estado tem competência relevante em polícia e rede de serviços, mas precisa integrar municípios e sistema de Justiça.',
        openQuestions: 'Cobertura 24h, efetivo, prevenção, acolhimento, orçamento e metas precisam aparecer em desenho executivo completo.',
        accountability: 'Acompanhar feminicídios, medidas protetivas, tempo de atendimento, rede de acolhimento e verba executada.',
      },
      {
        origin: 'MORADIA / PARTICIPAÇÃO · CAMPANHA 2026',
        explanation: 'A agenda propõe ampliar moradia e participação de movimentos populares no planejamento das políticas estaduais.',
        institutionalPath: 'Habitação envolve orçamento estadual, terrenos, municípios, licenciamento, financiamento e regras de seleção de beneficiários.',
        openQuestions: 'Número de unidades/intervenções, localização, custo, critérios de participação e regularização fundiária precisam ser traduzidos em metas.',
        accountability: 'Monitorar moradias entregues, urbanização, custo por projeto, localização, critérios de seleção e transparência dos conselhos/processos participativos.',
      },
    ],
  },

  'Guilherme Derrite': {
    mandate: '2027–2034',
    officeLens: 'SENADO POR SP · PODER LEGISLATIVO FEDERAL',
    basis: 'PAUTA LEGISLATIVA / CAMPANHA 2026',
    basisNote: 'Senador não executa um “plano de governo” estadual. Estes itens são compromissos legislativos e de fiscalização para um mandato de oito anos; aprovação depende de maioria no Congresso e, em alguns casos, de emenda constitucional.',
    proposalDetails: [
      {
        origin: 'SEGURANÇA · PAUTA LEGISLATIVA 2026',
        explanation: 'A proposta de classificar PCC e Comando Vermelho como organizações terroristas busca aplicar um enquadramento jurídico mais severo às facções.',
        institutionalPath: 'Depende de alteração/aprovação de legislação federal pelo Congresso e posterior aplicação por Executivo, Ministério Público e Judiciário.',
        openQuestions: 'Definição legal, efeitos sobre cooperação internacional, sistema financeiro, garantias processuais e compatibilidade com a legislação antiterrorismo precisam ser examinados no texto do projeto.',
        accountability: 'Acompanhar projeto protocolado, relatorias, emendas, votações e efeitos jurídicos após eventual aprovação.',
      },
      {
        origin: 'DIREITO PENAL · PAUTA 2026',
        explanation: 'O endurecimento de penas e progressão pretende aumentar tempo de cumprimento e restringir benefícios para crimes graves.',
        institutionalPath: 'É matéria legislativa federal; senador pode propor, relatar e votar, mas não determina sentença nem execução penal individual.',
        openQuestions: 'Quais crimes, novas frações de pena, impacto prisional e evidência de efeito dissuasório precisam constar do debate legislativo.',
        accountability: 'Monitorar texto aprovado, população prisional, reincidência, custo penitenciário e indicadores de violência.',
      },
      {
        origin: 'MAIORIDADE PENAL · PAUTA 2026',
        explanation: 'A redução da maioridade penal mudaria o limite constitucional de responsabilização criminal de adolescentes.',
        institutionalPath: 'Exige emenda constitucional, com quórum qualificado em Câmara e Senado; não é decisão individual de um senador.',
        openQuestions: 'Idade proposta, crimes abrangidos, regime de cumprimento, sistema prisional e impacto sobre o sistema socioeducativo precisam estar no texto da PEC.',
        accountability: 'Acompanhar PEC, votos, pareceres jurídicos, desenho de execução e indicadores do sistema juvenil/adulto.',
      },
      {
        origin: 'INTELIGÊNCIA / POLÍCIA · PAUTA 2026',
        explanation: 'A agenda defende integração de inteligência e ferramentas tecnológicas contra crime organizado, usando experiência anterior na segurança paulista como referência política.',
        institutionalPath: 'No Senado, a atuação seria por leis, orçamento, fiscalização e articulação; comando operacional de polícia permanece com Executivos federal/estadual.',
        openQuestions: 'Quais bases seriam integradas, regras de privacidade, controle de acesso, orçamento e competências precisam ser definidos.',
        accountability: 'Acompanhar legislação proposta, emendas orçamentárias, audiências de fiscalização e governança de sistemas de inteligência.',
      },
    ],
  },

  'Marina Silva': {
    mandate: '2027–2034',
    officeLens: 'SENADO POR SP · PODER LEGISLATIVO FEDERAL',
    basis: 'PAUTA LEGISLATIVA / CAMPANHA 2026',
    basisNote: 'São prioridades para atuação legislativa e fiscalização no Senado, não um plano executivo para administrar São Paulo. O mandato de senador eleito em 2026 dura oito anos.',
    proposalDetails: [
      {
        origin: 'CLIMA / AMBIENTE · PAUTA 2026',
        explanation: 'A candidatura coloca mudança climática e proteção ambiental no centro da atuação legislativa, conectando preservação a desenvolvimento econômico.',
        institutionalPath: 'Senadores podem propor/votar leis, orçamento, tratados e fiscalizar políticas federais; execução fica com Executivo e entes federativos.',
        openQuestions: 'Metas legislativas prioritárias, instrumentos econômicos, financiamento e critérios para conciliar infraestrutura/produção e proteção ambiental precisam ser especificados projeto a projeto.',
        accountability: 'Acompanhar projetos, votos, emendas orçamentárias, fiscalização e resultados das leis aprovadas.',
      },
      {
        origin: 'TRANSIÇÃO ENERGÉTICA · PAUTA 2026',
        explanation: 'A agenda reúne energia limpa, infraestrutura verde, bioeconomia e financiamento climático como instrumentos de transformação econômica.',
        institutionalPath: 'Depende de leis, regulação, orçamento e políticas executivas; o Senado também participa da aprovação de autoridades e marcos regulatórios relevantes.',
        openQuestions: 'Tecnologias prioritárias, custo, tratamento de combustíveis fósseis, rede elétrica e proteção social na transição precisam ser detalhados.',
        accountability: 'Monitorar legislação, investimentos mobilizados, matriz energética, emissões e critérios de financiamento.',
      },
      {
        origin: 'SEGURANÇA · PAUTA 2026',
        explanation: 'A proposta trata segurança de maneira transversal, combinando repressão, prevenção social, urbanismo, transporte e proteção de grupos vulneráveis.',
        institutionalPath: 'O Senado pode legislar e fiscalizar políticas federais, mas programas locais de polícia, urbanismo e transporte dependem de estados/municípios.',
        openQuestions: 'Quais projetos federais seriam priorizados e como recursos seriam distribuídos entre prevenção e repressão precisam ser definidos.',
        accountability: 'Acompanhar projetos/votos, orçamento federal de segurança/prevenção e indicadores associados às políticas financiadas.',
      },
      {
        origin: 'DEMOCRACIA / REPRESENTAÇÃO · PAUTA 2026',
        explanation: 'A agenda defende pluralidade, inclusão e instituições democráticas, temas que no Senado podem aparecer em reformas eleitorais, direitos e fiscalização.',
        institutionalPath: 'Mudanças eleitorais e constitucionais dependem de maiorias legislativas e, em PECs, quórum qualificado.',
        openQuestions: 'Quais reformas concretas de representação e inclusão seriam apresentadas precisam ser separadas de princípios gerais de campanha.',
        accountability: 'Acompanhar projetos protocolados, votos em reformas institucionais e atuação em comissões relacionadas.',
      },
    ],
  },

  'Simone Tebet': {
    mandate: '2027–2034',
    officeLens: 'SENADO POR SP · PODER LEGISLATIVO FEDERAL',
    basis: 'PAUTA LEGISLATIVA / CAMPANHA 2026',
    basisNote: 'Os itens são compromissos de atuação no Senado. Eles não equivalem a um plano de governo porque a senadora legisla, fiscaliza e participa do orçamento, mas não administra diretamente serviços estaduais.',
    proposalDetails: [
      {
        origin: 'TRABALHO · PAUTA 2026',
        explanation: 'A defesa do fim da escala 6x1 vem acompanhada de preocupação declarada com transição para micro e pequenas empresas e setores de funcionamento contínuo.',
        institutionalPath: 'Mudança de jornada depende de legislação federal e possivelmente alteração constitucional, votada pelas duas Casas do Congresso.',
        openQuestions: 'Carga semanal, cronograma, exceções, compensações e impacto em pequenos empregadores precisam estar no texto final.',
        accountability: 'Acompanhar PEC/projeto, emendas, regras de transição e estudos de impacto sobre emprego, salário e produtividade.',
      },
      {
        origin: 'ECONOMIA · PAUTA 2026',
        explanation: 'A candidatura destaca reforma tributária, emprego, desigualdade e negociação multipartidária como áreas de atuação econômica.',
        institutionalPath: 'O Senado vota leis tributárias, orçamento e reformas, além de fiscalizar a implementação pelo Executivo.',
        openQuestions: 'Prioridades concretas entre regulamentação tributária, gasto, investimento e políticas de emprego precisam ser identificadas em projetos específicos.',
        accountability: 'Monitorar votos, relatorias, emendas e impacto das normas econômicas apoiadas.',
      },
      {
        origin: 'INDÚSTRIA / COMÉRCIO · PAUTA 2026',
        explanation: 'A proposta busca regras de concorrência e comércio que protejam emprego e indústria nacional sem adotar fechamento generalizado da economia.',
        institutionalPath: 'Tarifas, defesa comercial e acordos envolvem Executivo, Congresso e compromissos internacionais; o Senado influencia legislação e tratados.',
        openQuestions: 'Setores abrangidos, critérios de proteção, duração e custo para consumidores/empresas precisam ser definidos por medida.',
        accountability: 'Acompanhar legislação, votos em acordos, medidas de defesa comercial e indicadores de investimento/preços nos setores afetados.',
      },
      {
        origin: 'ALIANÇAS / AGENDA INSTITUCIONAL 2026',
        explanation: 'O alinhamento político com a chapa presidencial/estadual indica apoio a temas como democracia e políticas sociais, mas não substitui a necessidade de posição própria em cada votação do Senado.',
        institutionalPath: 'Cada pauta seguirá processo legislativo específico; um senador pode apoiar, alterar ou rejeitar textos do Executivo.',
        openQuestions: 'É importante distinguir compromisso geral de coligação de votos concretos em matérias fiscais, sociais e institucionais.',
        accountability: 'Acompanhar votos nominais, relatorias e justificativas públicas em propostas do governo ou da oposição.',
      },
    ],
  },

  'André do Prado': {
    mandate: '2027–2034',
    officeLens: 'SENADO POR SP · PODER LEGISLATIVO FEDERAL',
    basis: 'PAUTA LEGISLATIVA / CAMPANHA 2026',
    basisNote: 'A análise trata municipalismo e demais bandeiras como compromissos de atuação legislativa e orçamentária, não como políticas que um senador possa executar sozinho.',
    proposalDetails: [
      {
        origin: 'MUNICIPALISMO · CAMPANHA 2026',
        explanation: 'A proposta é atuar como canal dos municípios paulistas em temas de arrecadação, despesas, transferências e acesso a recursos federais.',
        institutionalPath: 'O Senado vota orçamento, leis federativas e repartição de receitas; emendas e articulação podem direcionar recursos dentro das regras legais.',
        openQuestions: 'Critérios de priorização entre municípios, transparência de emendas e agenda legislativa federativa precisam tornar a bandeira mensurável.',
        accountability: 'Monitorar emendas, distribuição territorial, projetos sobre pacto federativo e transparência de critérios.',
      },
      {
        origin: 'ORÇAMENTO / FEDERAÇÃO · PAUTA 2026',
        explanation: 'A defesa de maior presença municipal no orçamento busca alterar ou influenciar como recursos federais chegam às cidades.',
        institutionalPath: 'Depende de LOA/LDO, emendas, fundos e eventualmente mudanças em regras de repartição aprovadas pelo Congresso.',
        openQuestions: 'Qual volume, quais fontes e quais fórmulas de distribuição seriam defendidas precisam ser explicitados.',
        accountability: 'Acompanhar emendas, relatorias orçamentárias, transferências e projetos de repartição de receitas.',
      },
      {
        origin: 'ANISTIA 8/1 · POSIÇÃO 2026',
        explanation: 'A candidatura declarou apoio a uma anistia ampla relacionada às condenações dos atos de 8 de janeiro, tema de forte disputa jurídica e política.',
        institutionalPath: 'Uma anistia depende de projeto de lei aprovado pelo Congresso e análise de sua compatibilidade constitucional pelo sistema de Justiça.',
        openQuestions: 'Quem seria abrangido, quais crimes, limites, efeitos sobre condenações e relação com decisões judiciais precisam estar no texto legal.',
        accountability: 'Acompanhar projeto apoiado, emendas, voto do senador e eventual controle de constitucionalidade.',
      },
      {
        origin: 'ALINHAMENTO POLÍTICO · CAMPANHA 2026',
        explanation: 'O alinhamento com a chapa estadual indica direção política, mas um mandato de oito anos produzirá centenas de votos em temas distintos e precisa ser avaliado também pela atuação concreta.',
        institutionalPath: 'O senador atua com autonomia de voto dentro de regras partidárias e coalizões; apoio ao Executivo estadual não transfere competência estadual ao Senado.',
        openQuestions: 'Em quais matérias haverá independência da coalizão e quais prioridades legislativas próprias serão apresentadas ao longo do mandato.',
        accountability: 'Acompanhar votos nominais, projetos próprios, relatorias e uso de emendas parlamentares.',
      },
    ],
  },

  'Ricardo Salles': {
    mandate: '2027–2034',
    officeLens: 'SENADO POR SP · PODER LEGISLATIVO FEDERAL',
    basis: 'PAUTA LEGISLATIVA / CAMPANHA 2026',
    basisNote: 'Os itens são tratados como agenda legislativa para o Senado. A página separa posição política de resultado: mudanças dependem de texto legal, maioria parlamentar, regulamentação e controle judicial.',
    proposalDetails: [
      {
        origin: 'SEGURANÇA / DIREITO PENAL · PAUTA 2026',
        explanation: 'A candidatura defende leis penais mais duras e redução da impunidade como eixo de segurança.',
        institutionalPath: 'Senadores podem propor, relatar e votar leis penais; execução cabe a polícias, Ministério Público, Judiciário e sistema prisional.',
        openQuestions: 'Quais tipos penais, penas, progressão e impacto carcerário seriam alterados precisam constar dos projetos concretos.',
        accountability: 'Acompanhar projetos/votos, custo penitenciário, reincidência e indicadores de violência após mudanças legais.',
      },
      {
        origin: 'AGRONEGÓCIO · PAUTA 2026',
        explanation: 'A agenda busca regras consideradas mais previsíveis para produção, propriedade rural e atividade agropecuária.',
        institutionalPath: 'O Senado participa de legislação fundiária, ambiental, tributária e de crédito; execução e fiscalização ficam com órgãos competentes.',
        openQuestions: 'Quais normas seriam flexibilizadas ou alteradas e como seriam preservadas segurança jurídica, fiscalização e proteção ambiental precisam ser analisadas por projeto.',
        accountability: 'Monitorar projetos, votos, mudanças regulatórias e indicadores econômicos/ambientais dos setores afetados.',
      },
      {
        origin: 'DESBUROCRATIZAÇÃO · PAUTA 2026',
        explanation: 'A proposta defende menor intervenção estatal, simplificação regulatória e liberdade econômica.',
        institutionalPath: 'Parte depende de legislação; outra pode ser objeto de regulamentação pelo Executivo, sobre a qual o Senado atua por controle e leis.',
        openQuestions: 'Quais licenças, obrigações e órgãos seriam afetados e qual avaliação de risco substituiria controles existentes precisam ser definidos.',
        accountability: 'Acompanhar tempo/custo regulatório, projetos votados e efeitos sobre concorrência, fiscalização e serviços.',
      },
      {
        origin: 'TRIBUTOS / FISCAL · PAUTA 2026',
        explanation: 'A candidatura defende simplificação e menor carga tributária como orientação para reformas fiscais e tributárias.',
        institutionalPath: 'Mudanças tributárias passam por Câmara e Senado e precisam compatibilizar redução de tributos com financiamento do Estado e regras constitucionais.',
        openQuestions: 'Quais tributos seriam reduzidos, compensação de receita, impacto federativo e distribuição do benefício entre setores/rendas precisam ser explicitados.',
        accountability: 'Monitorar propostas, votos, carga efetiva, arrecadação e impacto distributivo das mudanças aprovadas.',
      },
    ],
  },
};
