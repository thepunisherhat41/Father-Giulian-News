export type PoliticalAnalysisSource = {
  label: string;
  url: string;
};

export type CandidatePoliticalAnalysis = {
  proposals: string[];
  positives: string[];
  negatives: string[];
  sources: PoliticalAnalysisSource[];
};

export const candidatePoliticalAnalysis: Record<string, CandidatePoliticalAnalysis> = {
  'Luiz Inácio Lula da Silva': {
    proposals: [
      'Manter o arcabouço fiscal, combinado com investimento público em infraestrutura, indústria e produtividade.',
      'Criar um Ministério da Segurança Pública após a PEC da Segurança, reforçando integração federativa, inteligência e combate financeiro ao crime organizado.',
      'Fortalecer e ampliar políticas do SUS, como Mais Médicos, Farmácia Popular e redução de filas de especialistas, além de prontuário digital na rede pública.',
      'Apoiar a redução da jornada e o fim da escala 6x1, tema que depende de aprovação legislativa.',
    ],
    positives: [
      'Tem extensa experiência no Executivo federal e um histórico de governo que permite comparar promessas com resultados anteriores, em vez de avaliar apenas discurso de campanha.',
      'O programa combina políticas sociais com investimento produtivo e apresenta continuidade institucional em áreas já existentes, o que pode facilitar implementação.',
    ],
    negatives: [
      'A situação fiscal e a trajetória da dívida são pontos de pressão; críticos questionam se a combinação de mais investimento e manutenção das regras atuais será suficiente para estabilizar as contas.',
      'Em áreas como saúde e segurança, análises do programa apontam falta de detalhamento de custos, metas e fontes de financiamento para algumas promessas.',
    ],
    sources: [
      { label: 'Folha · comparação dos planos Lula e Flávio · 15/08/2026', url: 'https://www1.folha.uol.com.br/poder/2026/08/veja-pontos-em-que-os-planos-de-governo-de-lula-e-flavio-bolsonaro-divergem.shtml' },
      { label: 'Folha · saúde nos planos presidenciais · 15/08/2026', url: 'https://www1.folha.uol.com.br/poder/2026/08/lula-e-flavio-bolsonaro-prometem-mais-saude-mas-nenhum-diz-quem-vai-pagar-a-conta.shtml' },
    ],
  },

  'Flávio Bolsonaro': {
    proposals: [
      'Substituir o atual arcabouço fiscal por uma regra mais ligada à dívida pública, cortar ao menos dez ministérios, rever benefícios fiscais e retomar privatizações e concessões.',
      'Endurecer a política criminal, incluindo classificação de grandes facções como organizações terroristas, expansão de presídios federais e redução da maioridade penal.',
      'Ampliar escolas cívico-militares, adotar método fônico na alfabetização e discutir vouchers educacionais.',
      'Limitar decisões individuais no STF, reduzir o alcance do foro privilegiado e propor mudanças na relação entre Poderes.',
    ],
    positives: [
      'O plano apresenta direção ideológica clara em controle de gastos, segurança e redução do tamanho do Estado, facilitando ao eleitor entender o modelo proposto.',
      'A campanha detalhou medidas concretas em segurança pública e disciplina fiscal, áreas que aparecem entre as maiores preocupações do eleitorado.',
    ],
    negatives: [
      'Mudanças como limites ao STF, redução da maioridade penal e enquadramento de facções como terrorismo enfrentam debate constitucional, jurídico e de efetividade.',
      'Algumas propostas de saúde e ajuste fiscal ainda não detalham custos, transição, impacto distributivo ou como preservar serviços durante cortes relevantes.',
    ],
    sources: [
      { label: 'Folha · plano de governo e STF · 14/08/2026', url: 'https://www1.folha.uol.com.br/poder/2026/08/plano-de-governo-de-flavio-bolsonaro-propoe-limites-ao-stf-e-rebate-discurso-de-lula-sobre-soberania.shtml' },
      { label: 'Reuters · plano de segurança · 18/06/2026', url: 'https://www.reuters.com/world/americas/brazils-flavio-bolsonaro-pitches-crime-crackdown-boost-presidential-bid-2026-06-18/' },
    ],
  },

  'Ronaldo Caiado': {
    proposals: [
      'Estabilizar a dívida pública em aproximadamente dois a três anos, com contenção de novas despesas e revisão de incentivos tributários.',
      'Tratar segurança pública como eixo central, reforçando inteligência, combate a facções e mudanças legislativas.',
      'Apresentar um plano de saúde com dezenas de propostas elaboradas por equipe técnica, incluindo participação do ex-ministro Henrique Mandetta.',
      'Usar ciência, tecnologia e desburocratização estatal como instrumentos de produtividade e crescimento.',
    ],
    positives: [
      'Combina longa experiência legislativa com experiência executiva como governador, oferecendo histórico administrativo amplo para avaliação.',
      'O programa econômico apresenta uma meta temporal explícita para estabilização da dívida e tem sido construído com coordenadores temáticos identificados publicamente.',
    ],
    negatives: [
      'Parte relevante do programa vem sendo apresentada de forma fragmentada ao longo da campanha, o que dificulta avaliar de uma vez custos, prioridades e compatibilidade entre propostas.',
      'Uma agenda de ajuste fiscal e endurecimento penal exige detalhamento sobre impactos sociais, direitos individuais e quais despesas ou benefícios seriam efetivamente revistos.',
    ],
    sources: [
      { label: 'CNN Brasil · plano fiscal de Caiado · 23/06/2026', url: 'https://www.cnnbrasil.com.br/eleicoes/plano-de-governo-de-caiado-preve-estabilizar-divida-publica-em-ate-3-anos/' },
      { label: 'PSD · elaboração do plano de governo · 28/04/2026', url: 'https://psd.org.br/noticias/caiado-inicia-plano-de-governo-com-roberto-brant/' },
    ],
  },

  'Romeu Zema': {
    proposals: [
      'Promover ampla agenda de privatizações, incluindo a defesa de privatização de Petrobras e Banco do Brasil.',
      'Realizar novas reformas administrativa e previdenciária para reduzir despesas permanentes do Estado.',
      'Rever critérios de programas sociais e vinculá-los mais diretamente à procura por emprego e qualificação.',
      'Endurecer o enfrentamento ao crime organizado, incluindo classificação de facções como terroristas e possibilidade de emprego das Forças Armadas em determinadas operações.',
    ],
    positives: [
      'Tem experiência de dois mandatos no governo de Minas Gerais e apresenta uma plataforma econômica ideologicamente consistente e fácil de identificar.',
      'A defesa de privatizações, simplificação e reformas estruturais oferece ao eleitor uma alternativa claramente orientada à redução do papel econômico direto do Estado.',
    ],
    negatives: [
      'Uma agenda de privatização muito ampla exige análise caso a caso sobre preço de venda, regulação, monopólios naturais, qualidade de serviço e patrimônio público.',
      'A revisão de benefícios sociais e o discurso usado para defendê-la geraram críticas sobre risco de exclusão de pessoas vulneráveis e sobre a forma de caracterizar beneficiários.',
    ],
    sources: [
      { label: 'CNN Brasil · privatizações e segurança · 18/07/2026', url: 'https://www.cnnbrasil.com.br/politica/zema-defende-privatizar-petrobras-e-bb-para-investir-em-infraestrutura/' },
      { label: 'CNN Brasil · programas sociais e reformas · 22/06/2026', url: 'https://www.cnnbrasil.com.br/politica/zema-sobre-programas-sociais-estamos-criando-uma-geracao-de-imprestaveis/' },
    ],
  },

  'Renan Santos': {
    proposals: [
      'Executar uma transição fiscal, reforma administrativa e mudanças no pacto federativo para reduzir despesas e reorganizar o Estado.',
      'Adotar política de segurança fortemente inspirada em estratégias de retomada territorial e repressão a facções criminosas.',
      'Substituir o Bolsa Família por frentes de trabalho remuneradas e encerrar o sistema de cotas raciais.',
      'Executar um programa de reurbanização e habitação descrito pela campanha como “desfavelização” em prazo de dez anos.',
    ],
    positives: [
      'A campanha publicou um programa com medidas concretas e pouco ambíguas, facilitando o debate sobre consequências e prioridades.',
      'Representa um partido novo e uma renovação geracional em relação às principais forças nacionais, o que pode atrair eleitores que buscam ruptura com estruturas tradicionais.',
    ],
    negatives: [
      'Não possui experiência anterior em cargo executivo ou mandato eletivo, portanto seu modelo de gestão pública ainda não foi testado diretamente em governo.',
      'Propostas ligadas a “direito penal do inimigo”, estado de defesa, fim de cotas e substituição de programas sociais levantam debates constitucionais, de direitos fundamentais e de viabilidade operacional.',
    ],
    sources: [
      { label: 'CNN Brasil · plano de governo · 21/07/2026', url: 'https://www.cnnbrasil.com.br/eleicoes/renan-santos-propoe-foco-em-seguranca-e-reformas-em-plano-de-governo/' },
      { label: 'Exame · análise do plano de governo · 21/07/2026', url: 'https://exame.com/brasil/direito-penal-do-inimigo-e-ajuste-fiscal-o-plano-de-governo-de-renan-santos/' },
    ],
  },

  'Samara Martins': {
    proposals: [
      'Reestatizar empresas privatizadas e ampliar o controle público sobre setores considerados estratégicos.',
      'Aumentar recursos para políticas sociais e defender maior investimento público em saúde, educação e moradia.',
      'Realizar auditoria da dívida pública e defender suspensão de seu pagamento como parte de uma mudança profunda do modelo econômico.',
      'Desmilitarizar as polícias, enfrentar feminicídio e violência racial e defender o fim da escala 6x1.',
    ],
    positives: [
      'Tem experiência direta como trabalhadora do SUS e trajetória em movimentos sociais, o que dá à candidatura contato concreto com serviços públicos e organizações de base.',
      'A plataforma é clara sobre redistribuição, serviços públicos e mudança estrutural, oferecendo uma alternativa ideológica bem distinta das candidaturas de centro e direita.',
    ],
    negatives: [
      'Suspensão do pagamento da dívida e nacionalizações teriam impactos jurídicos, fiscais e financeiros muito amplos e exigiriam detalhamento sobre transição, indenizações e efeitos sobre crédito e investimento.',
      'A candidata e o partido têm pouca experiência em gestão executiva de grande escala, o que aumenta a incerteza sobre implementação de um programa de transformação estrutural tão amplo.',
    ],
    sources: [
      { label: 'Agência Brasil · candidatura e propostas · 26/07/2026', url: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-07/unidade-popular-formaliza-candidatura-de-samara-martins-presidente' },
      { label: 'Unidade Popular · perfil e bandeiras · 06/02/2026', url: 'https://unidadepopular.org.br/blog/samara-e-a-pre-candidata-da-unidade-popular-a-presidencia-do-brasil' },
    ],
  },

  'Tarcísio de Freitas': {
    proposals: [
      'Ampliar uso de inteligência, tecnologia e integração das forças no combate ao crime organizado.',
      'Expandir escolas cívico-militares e políticas de educação integral e preparação para ensino superior e mercado de trabalho.',
      'Manter agenda de concessões, parcerias e infraestrutura, combinada a políticas de empregabilidade, empreendedorismo e apoio à indústria.',
      'Criar ou ampliar ações voltadas à segurança, autonomia financeira e saúde das mulheres.',
    ],
    positives: [
      'É governador em exercício e possui experiência técnica em infraestrutura, permitindo avaliar propostas à luz de entregas, contratos e decisões já tomadas.',
      'O plano de reeleição foi estruturado em dez eixos e cerca de duzentas páginas, cobrindo segurança, educação, desenvolvimento social e economia.',
    ],
    negatives: [
      'O TCE-SP aprovou as contas de 2025 com ressalvas e apontou problemas em transparência de renúncias fiscais, previdência e fiscalização de serviços concedidos à iniciativa privada.',
      'Privatizações e a política de segurança são áreas de forte controvérsia: críticos questionam qualidade/regulação de serviços, feminicídios e letalidade policial, enquanto o governo destaca queda em outros indicadores criminais.',
    ],
    sources: [
      { label: 'Gazeta do Povo · plano 2026 · 29/07/2026', url: 'https://www.gazetadopovo.com.br/eleicoes/2026/sao-paulo-2026/plano-de-governo-tarcisio-de-freitas/' },
      { label: 'TCESP · contas de 2025 aprovadas com ressalvas · 17/06/2026', url: 'https://tce.sp.gov.br/6524-tce-aprova-com-ressalvas-contas-governador-sp-e-relator-alerta-para-necessidade-modernizacao' },
    ],
  },

  'Fernando Haddad': {
    proposals: [
      'Implementar o “SP Protege”, com agência estadual antifacções, integração com órgãos federais e uso de inteligência e IA contra crime organizado.',
      'Criar um placar periódico de crimes para ampliar transparência e monitoramento regional de roubos, homicídios e feminicídios.',
      'Fortalecer Delegacias da Mulher e tecnologias de proteção a vítimas de violência doméstica.',
      'Rever a agenda de privatizações da gestão atual e priorizar educação, saúde, mobilidade e políticas públicas estaduais com maior participação direta do Estado.',
    ],
    positives: [
      'Acumula experiência executiva municipal e federal — Prefeitura de São Paulo, Ministério da Educação e Ministério da Fazenda — além de experiência nacional de formulação econômica.',
      'A campanha colocou segurança pública como prioridade e apresentou instrumentos específicos de inteligência, transparência e combate financeiro às facções.',
    ],
    negatives: [
      'O plano de segurança divulgado não apresentou metas quantitativas claras para vários indicadores, o que dificulta medir antecipadamente o compromisso com resultados.',
      'Sua passagem pela Fazenda é associada a avanços como reforma tributária e novo arcabouço, mas também recebe críticas por crescimento da dívida e maior dependência de receitas tributárias para cumprir metas.',
    ],
    sources: [
      { label: 'Folha · SP Protege · 11/08/2026', url: 'https://www1.folha.uol.com.br/poder/2026/08/haddad-lanca-programa-de-seguranca-com-foco-em-ia-agencia-antifaccao-e-placar-de-crimes.shtml' },
      { label: 'Reuters · saída da Fazenda e candidatura · 19/03/2026', url: 'https://www.reuters.com/world/americas/brazil-finance-minister-readies-run-sao-paulo-governor-2026-03-19/' },
    ],
  },

  'Vivian Mendes': {
    proposals: [
      'Defender o fim da escala 6x1 e políticas de valorização do trabalho.',
      'Fortalecer saúde e educação públicas e se opor a novas privatizações de serviços estaduais.',
      'Priorizar políticas de enfrentamento ao feminicídio e à violência contra mulheres.',
      'Ampliar políticas de moradia e participação de movimentos populares nas decisões do Estado.',
    ],
    positives: [
      'Tem trajetória em movimentos de mulheres e atuação política de base, com forte conexão com problemas sociais e urbanos da periferia paulista.',
      'Apresenta uma alternativa ideológica claramente distinta tanto da agenda de privatizações de Tarcísio quanto da centro-esquerda liderada por Haddad.',
    ],
    negatives: [
      'Não possui experiência como chefe de Executivo estadual ou municipal, o que torna mais difícil avaliar sua capacidade de administrar uma estrutura do tamanho do governo paulista.',
      'Reverter privatizações ou concessões pode envolver contratos de longo prazo, indenizações e custos públicos; a viabilidade depende de análise jurídica e financeira específica de cada caso.',
    ],
    sources: [
      { label: 'Folha · perfil e bandeiras de Vivian Mendes · 13/07/2026', url: 'https://www1.folha.uol.com.br/poder/2026/07/partidos-nanicos-falam-em-cansaco-com-tarcisio-e-haddad-apos-somarem-pontos-em-pesquisa.shtml' },
    ],
  },

  'Guilherme Derrite': {
    proposals: [
      'Classificar PCC e Comando Vermelho como organizações terroristas.',
      'Endurecer penas e regras de progressão para crimes graves e promover uma reforma legislativa ampla na área penal.',
      'Apoiar a redução da maioridade penal e aumentar a responsabilização por crimes violentos.',
      'Expandir uso de inteligência, integração policial e ferramentas tecnológicas contra o crime organizado.',
    ],
    positives: [
      'Tem especialização política clara em segurança pública, combinando experiência como policial, secretário estadual e deputado federal.',
      'Possui atuação legislativa diretamente ligada às bandeiras que apresenta, incluindo relatorias e participação em comissões de segurança e legislação penal.',
    ],
    negatives: [
      'A classificação de facções como terrorismo e o endurecimento penal amplo têm controvérsias jurídicas e debate entre especialistas sobre eficácia, efeitos internacionais e direitos fundamentais.',
      'Os resultados da segurança paulista são mistos conforme o indicador: o governo aponta queda em homicídios, latrocínios e roubos, enquanto críticos destacam feminicídios, letalidade policial e outras formas de violência.',
    ],
    sources: [
      { label: 'BandNews · propostas de segurança · 18/05/2026', url: 'https://www.band.com.br/politica/eleicoes/2026/guilherme-derrite-pre-candidato-ao-senado-e-sabatinado-pela-bandnews-tv' },
      { label: 'Folha · debate sobre indicadores de segurança · 09/08/2026', url: 'https://www1.folha.uol.com.br/poder/2026/08/governo-lula-e-violencia-viram-temas-de-tarcisio-e-haddad-em-debate-veja-como-foi-em-8-pontos.shtml' },
    ],
  },

  'Marina Silva': {
    proposals: [
      'Colocar mudança climática, proteção ambiental e desenvolvimento econômico sustentável no centro da atuação no Senado.',
      'Defender transição energética, infraestrutura verde, bioeconomia e mecanismos de financiamento climático.',
      'Tratar segurança pública de forma transversal, combinando polícia, prevenção social, urbanismo, transporte e proteção de grupos vulneráveis.',
      'Defender democracia, diversidade política e mecanismos de inclusão e representação.',
    ],
    positives: [
      'Tem uma das trajetórias ambientais mais extensas da política brasileira, com experiência no Senado, Câmara e Ministério do Meio Ambiente.',
      'Sua agenda conecta clima e economia — tema especialmente relevante para São Paulo por riscos hídricos, infraestrutura, energia, indústria e eventos extremos.',
    ],
    negatives: [
      'Parte importante de sua agenda ambiental depende de construir maiorias no Congresso; sua passagem recente pelo governo também teve derrotas legislativas em licenciamento e conflitos sobre exploração de petróleo.',
      'Como sua identidade política é fortemente nacional e ambiental, o eleitor pode exigir maior detalhamento de propostas especificamente paulistas para além dessa agenda.',
    ],
    sources: [
      { label: 'CNN Brasil · pauta ambiental para o Senado · 11/06/2026', url: 'https://www.cnnbrasil.com.br/politica/marina-silva-aposta-em-pauta-ambiental-para-disputa-ao-senado-em-sp/' },
      { label: 'BandNews · economia, ambiente e segurança · 27/05/2026', url: 'https://www.band.com.br/politica/eleicoes/2026/marina-silva-pre-candidata-ao-senado-por-sp-e-sabatinada-pela-bandnews' },
    ],
  },

  'Simone Tebet': {
    proposals: [
      'Defender o fim da escala 6x1 com mecanismos de transição e proteção para micro, pequenos empresários e setores mais expostos à mudança.',
      'Atuar em economia, reforma tributária, geração de emprego e redução da desigualdade com uma posição de centro e negociação multipartidária.',
      'Defender regras de concorrência para comércio e importações que, segundo sua visão, protejam a indústria e o emprego nacionais sem fechar a economia.',
      'Apoiar a frente política de Haddad e Lula em temas como democracia, soberania e políticas sociais.',
    ],
    positives: [
      'Tem experiência como senadora, prefeita, vice-governadora e ministra, com atuação relevante em orçamento, planejamento e debate econômico.',
      'Construiu uma imagem de centro e de diálogo entre campos políticos, característica potencialmente útil em um Senado fragmentado.',
    ],
    negatives: [
      'A mudança recente de domicílio eleitoral de Mato Grosso do Sul para São Paulo e a troca partidária geraram críticas sobre vínculo e representatividade estadual, ainda que tenham sido decisões politicamente assumidas por ela.',
      'Propostas como o fim da escala 6x1 precisam detalhar compensações, ritmo de implementação e impacto sobre serviços e pequenos empregadores.',
    ],
    sources: [
      { label: 'BandNews · sabatina de Simone Tebet · 26/05/2026', url: 'https://www.band.com.br/politica/eleicoes/2026/simone-tebet-pre-candidata-ao-senado-por-sp-e-sabatina-pela-bandnews-tv/' },
      { label: 'BandNews · fim da escala 6x1 · 26/05/2026', url: 'https://www.band.com.br/politica/eleicoes/2026/tebet-defende-fim-da-escala-6x1-e-diz-que-mudanca-nao-vai-quebrar-o-pais/' },
    ],
  },

  'André do Prado': {
    proposals: [
      'Atuar como interlocutor direto de prefeitos e municípios paulistas no Congresso, com foco em arrecadação, despesas municipais e recursos federais.',
      'Defender maior presença dos interesses municipais no orçamento e nas decisões do Senado.',
      'Apoiar uma anistia ampla a condenados pelos atos de 8 de janeiro, posição declarada em sabatina.',
      'Manter alinhamento com a chapa estadual de Tarcísio e com pautas da direita, embora sua trajetória legislativa inclua posições mais moderadas em alguns temas.',
    ],
    positives: [
      'Foi vereador, prefeito e é presidente da Alesp, acumulando experiência municipal e estadual que pode ser útil em pautas federativas.',
      'Possui uma rede ampla de relacionamento com prefeitos paulistas e coloca municipalismo como eixo mensurável de atuação.',
    ],
    negatives: [
      'A promessa de ser “interlocutor dos municípios” é ampla e precisa ser convertida em projetos e critérios objetivos para evitar que se resuma a articulação política.',
      'Algumas posições anteriores destoam de setores mais ideológicos de sua atual coalizão, o que gera questionamentos tanto sobre coerência quanto sobre independência política.',
    ],
    sources: [
      { label: 'Folha · campanha municipalista · 13/08/2026', url: 'https://www1.folha.uol.com.br/colunas/painel/2026/08/candidato-ao-senado-andre-do-prado-tenta-selar-apoio-de-quase-600-prefeitos-paulistas.shtml' },
      { label: 'Folha · posições que destoam do bolsonarismo · 11/05/2026', url: 'https://www1.folha.uol.com.br/colunas/painel/2026/05/candidato-ao-senado-prado-apresentou-projetos-que-destoam-da-cartilha-bolsonarista.shtml' },
    ],
  },

  'Ricardo Salles': {
    proposals: [
      'Defender leis penais mais duras e uma agenda de segurança pública orientada ao combate à impunidade.',
      'Atuar em defesa do agronegócio e de regras consideradas mais previsíveis para produção e propriedade rural.',
      'Promover desburocratização, redução do tamanho do Estado e maior liberdade econômica.',
      'Defender reforma fiscal e tributária alinhada a menor carga e simplificação para empresas e contribuintes.',
    ],
    positives: [
      'Tem experiência executiva estadual e federal e mandato na Câmara, além de uma plataforma ideológica bastante clara em economia, agro e segurança.',
      'Foi eleito deputado federal com votação expressiva em São Paulo, indicando base eleitoral própria e capacidade de mobilização.',
    ],
    negatives: [
      'Sua passagem pelo Ministério do Meio Ambiente e sua agenda de desregulação são altamente controversas; críticos apontam risco de enfraquecimento de proteção ambiental e fiscalização.',
      'Na campanha de 2026, o TRE-SP o multou por impulsionamento negativo com conteúdo manipulado por IA sem transparência adequada; ele recorreu. Esse episódio adiciona um ponto de atenção sobre práticas de campanha digital.',
    ],
    sources: [
      { label: 'Site do candidato · frentes prioritárias no Congresso', url: 'https://ricardosalles.com.br/' },
      { label: 'Folha · multa por propaganda com IA · 09/08/2026', url: 'https://www1.folha.uol.com.br/poder/2026/08/tre-multa-ricardo-salles-por-impulsionamento-contra-andre-do-prado.shtml' },
    ],
  },
};
