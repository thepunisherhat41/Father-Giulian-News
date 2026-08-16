export type PopulationImpact = {
  groups: string[];
  everyday: string;
  potentialUpside: string;
  pointsToWatch: string;
};

export const candidatePopulationImpact: Record<string, PopulationImpact[]> = {
  'Luiz Inácio Lula da Silva': [
    {
      groups: ['trabalhadores', 'famílias', 'usuários de serviços públicos', 'contribuintes'],
      everyday: 'Mais investimento público pode aparecer em obras, transporte, infraestrutura e emprego. Ao mesmo tempo, a forma de financiar esse investimento importa porque contas públicas pressionadas podem afetar juros, inflação futura e espaço para outras políticas.',
      potentialUpside: 'Se o investimento for bem selecionado e executado, a população pode ganhar com serviços, logística, emprego e produtividade melhores sem depender apenas de consumo de curto prazo.',
      pointsToWatch: 'Quais projetos saem do papel, quanto custam, se há atraso ou sobrepreço e se dívida e resultado fiscal continuam compatíveis com o plano anunciado.',
    },
    {
      groups: ['moradores de áreas com crime organizado', 'vítimas de violência', 'famílias', 'cidadãos em geral'],
      everyday: 'Uma coordenação federal maior pode mudar a forma como polícia, inteligência e investigação financeira atuam contra facções. Para o cidadão, o efeito esperado seria menos domínio territorial, extorsão, roubo e circulação de armas, mas isso depende de execução conjunta com os estados.',
      potentialUpside: 'Integração de bases e foco no dinheiro das organizações podem atingir estruturas criminosas que não são resolvidas apenas com patrulhamento local.',
      pointsToWatch: 'Sobreposição de competências, proteção de dados, controle de abusos, orçamento real da estrutura e resultados por indicador de crime, não apenas número de operações.',
    },
    {
      groups: ['usuários do SUS', 'idosos', 'pessoas com doenças crônicas', 'famílias de baixa renda'],
      everyday: 'A proposta pode afetar diretamente tempo de espera, acesso a médico, medicamento e continuidade do cuidado. Prontuário digital também pode evitar repetição de exames e perda de histórico quando o paciente muda de unidade.',
      potentialUpside: 'Mais profissionais, medicamentos e integração de informação podem reduzir deslocamentos, filas e gastos particulares de quem depende do SUS.',
      pointsToWatch: 'Se a expansão chega fora das capitais, tempo real de espera, disponibilidade de especialistas, segurança dos dados clínicos e orçamento permanente para manter os programas.',
    },
    {
      groups: ['trabalhadores CLT', 'famílias', 'trabalhadores de comércio e serviços', 'quem trabalha por turnos'],
      everyday: 'Se uma mudança da escala 6x1 for aprovada, a rotina semanal pode ganhar mais descanso e tempo familiar. Dependendo do texto, porém, podem mudar turnos, banco de horas, horas extras, funcionamento de serviços e a forma de composição do salário.',
      potentialUpside: 'Mais tempo de descanso pode melhorar convivência familiar, recuperação física e qualidade de vida de quem hoje trabalha seis dias por semana.',
      pointsToWatch: 'Carga horária final, manutenção de salário, regras para setores 24x7, trabalho aos domingos, banco de horas e transição para contratos existentes.',
    },
  ],

  'Flávio Bolsonaro': [
    {
      groups: ['contribuintes', 'usuários de serviços públicos', 'servidores públicos', 'consumidores'],
      everyday: 'Cortes de estrutura e privatizações podem alterar como serviços são prestados e quanto o governo gasta. Para a população, o impacto pode aparecer em atendimento público, tarifas, agências, bancos ou empresas estatais afetadas pelo programa.',
      potentialUpside: 'Se houver ganho de eficiência e redução sustentável de despesas, pode haver mais espaço fiscal e menor necessidade de financiar estruturas pouco eficientes.',
      pointsToWatch: 'Quais ministérios e serviços perdem recursos, como ficam tarifas e atendimento após privatizações, quem regula os novos operadores e se a economia prometida aparece de fato nas contas.',
    },
    {
      groups: ['moradores de áreas violentas', 'vítimas de crime', 'jovens', 'famílias', 'população carcerária'],
      everyday: 'Leis penais mais duras e expansão do sistema federal podem aumentar prisões e penas. Para bairros afetados por facções, a expectativa é maior capacidade de repressão; para jovens e famílias, a redução da maioridade penal mudaria diretamente o tratamento judicial de adolescentes.',
      potentialUpside: 'Ferramentas mais duras podem aumentar capacidade estatal contra organizações violentas se vierem acompanhadas de investigação e inteligência eficazes.',
      pointsToWatch: 'Efeito real sobre violência, superlotação prisional, custo do encarceramento, reincidência, garantias processuais e impacto específico sobre adolescentes.',
    },
    {
      groups: ['estudantes', 'pais e responsáveis', 'professores', 'famílias que dependem da escola pública'],
      everyday: 'Escolas cívico-militares, método fônico e eventual voucher mudariam ambiente escolar, alfabetização e forma de financiamento. A experiência do aluno pode variar bastante conforme o modelo adotado pelo estado ou município.',
      potentialUpside: 'Se as metodologias elevarem aprendizagem e organização escolar, famílias podem perceber melhora em alfabetização, disciplina e previsibilidade da rotina escolar.',
      pointsToWatch: 'Resultados de aprendizagem comparáveis, custo por aluno, liberdade pedagógica, impacto sobre a rede pública regular e critérios de acesso a eventual voucher.',
    },
    {
      groups: ['todos os cidadãos', 'eleitores', 'pessoas envolvidas em processos judiciais', 'usuários do sistema de Justiça'],
      everyday: 'Mudanças nas regras do STF e do foro não costumam alterar a rotina de um dia para o outro, mas afetam como decisões sobre direitos, eleições, investigações e conflitos entre Poderes são tomadas.',
      potentialUpside: 'Defensores podem enxergar maior colegialidade, previsibilidade e limitação de decisões concentradas em uma única autoridade.',
      pointsToWatch: 'Se a mudança preserva independência judicial, acesso a decisões urgentes, separação de Poderes e segurança jurídica para cidadãos e instituições.',
    },
  ],

  'Ronaldo Caiado': [
    {
      groups: ['contribuintes', 'beneficiários de políticas públicas', 'servidores', 'usuários de saúde e educação'],
      everyday: 'Um ajuste para estabilizar a dívida pode significar contenção de novas despesas e revisão de benefícios tributários. O cidadão pode sentir isso na velocidade de expansão de serviços, concursos, obras e programas.',
      potentialUpside: 'Contas mais previsíveis podem reduzir crises fiscais que interrompem investimentos e pressionam inflação e juros ao longo do tempo.',
      pointsToWatch: 'Quais despesas serão preservadas, onde haverá cortes, quais benefícios fiscais serão revistos e se serviços essenciais mantêm qualidade durante o ajuste.',
    },
    {
      groups: ['moradores de áreas violentas', 'vítimas de crime', 'famílias', 'jovens'],
      everyday: 'Mais inteligência e repressão a facções pode mudar policiamento, operações e investigação. Em áreas com presença de crime organizado, isso pode ser percebido diretamente na circulação, comércio local, extorsão e sensação de segurança.',
      potentialUpside: 'Integração e foco em organizações podem produzir resultado mais duradouro que operações isoladas se houver investigação financeira e cooperação entre governos.',
      pointsToWatch: 'Letalidade, abordagem policial, proteção de inocentes, metas públicas e se a redução de crime persiste depois das operações.',
    },
    {
      groups: ['usuários do SUS', 'idosos', 'famílias', 'pessoas aguardando exames e especialistas'],
      everyday: 'Um plano nacional de saúde pode alterar filas, acesso a especialistas, prevenção e gestão de unidades. O impacto só será concreto quando as propostas tiverem metas e financiamento definidos.',
      potentialUpside: 'Melhor coordenação e metas assistenciais podem reduzir espera e diferenças regionais no acesso ao SUS.',
      pointsToWatch: 'Prazo de atendimento, orçamento, número de profissionais, cobertura regional e se os indicadores são publicados de forma comparável.',
    },
    {
      groups: ['cidadãos que usam serviços públicos digitais', 'trabalhadores', 'estudantes', 'pessoas com baixa conectividade'],
      everyday: 'Digitalização e simplificação podem reduzir filas, papelada e tempo para obter documentos ou acessar benefícios. Por outro lado, serviços excessivamente digitais podem excluir idosos e pessoas sem internet ou familiaridade tecnológica.',
      potentialUpside: 'Menos burocracia pode significar menos deslocamentos, documentos repetidos e tempo perdido pelo cidadão.',
      pointsToWatch: 'Canais presenciais alternativos, acessibilidade, proteção de dados e se a simplificação realmente reduz etapas em vez de apenas transferi-las para aplicativos.',
    },
  ],

  'Romeu Zema': [
    {
      groups: ['consumidores de combustível', 'clientes bancários', 'servidores de estatais', 'contribuintes'],
      everyday: 'Privatizações de grandes empresas federais podem alterar tarifas, atendimento, presença de agências, política de preços e papel do Estado em setores estratégicos. O efeito depende muito do desenho regulatório posterior.',
      potentialUpside: 'Uma operação bem regulada pode buscar eficiência, investimento e redução de necessidade de aportes públicos.',
      pointsToWatch: 'Preço de venda, concentração de mercado, tarifas, atendimento em regiões menos lucrativas, proteção ao consumidor e destino do dinheiro obtido com a venda.',
    },
    {
      groups: ['servidores públicos', 'aposentados', 'futuros servidores', 'usuários de serviços públicos'],
      everyday: 'Reformas administrativa e previdenciária podem mudar carreira, aposentadoria, progressão e contratação no setor público. Para a população, isso também pode afetar quantidade de profissionais e continuidade de serviços.',
      potentialUpside: 'Se reduzir distorções sem desmontar capacidade estatal, a proposta pode melhorar sustentabilidade das contas e gestão de pessoal.',
      pointsToWatch: 'Regras de transição, direitos adquiridos, carreiras essenciais, impacto sobre aposentadorias e se saúde, educação e fiscalização conseguem manter equipes suficientes.',
    },
    {
      groups: ['famílias de baixa renda', 'desempregados', 'pessoas com deficiência', 'cuidadores', 'moradores de regiões com poucas vagas'],
      everyday: 'Condicionar benefícios a procura por emprego ou qualificação pode mudar diretamente renda e obrigações de quem recebe programas sociais. O resultado depende de haver vagas, cursos e exceções para quem não pode trabalhar.',
      potentialUpside: 'Quando há emprego e qualificação acessíveis, a política pode facilitar transição de benefício para renda do trabalho.',
      pointsToWatch: 'Exceções para incapacidade e cuidado familiar, oferta real de vagas, transporte até cursos, risco de corte indevido e tempo entre perda do benefício e obtenção de renda.',
    },
    {
      groups: ['moradores de áreas violentas', 'famílias', 'jovens', 'comunidades onde ocorrerem operações'],
      everyday: 'Uma política de segurança mais militarizada pode aumentar presença de forças e operações em áreas dominadas por facções. Isso pode alterar circulação e sensação de segurança, mas também aumenta a importância de regras claras de uso da força.',
      potentialUpside: 'Maior capacidade operacional pode ser relevante em situações excepcionais de domínio territorial ou armamento pesado.',
      pointsToWatch: 'Base legal, duração das operações, mortes de civis, mecanismos de controle, investigação posterior e se o território permanece seguro após a retirada das forças.',
    },
  ],

  'Renan Santos': [
    {
      groups: ['usuários de serviços públicos', 'servidores', 'contribuintes', 'moradores de municípios dependentes de transferências'],
      everyday: 'Reforma administrativa e mudança do pacto federativo podem alterar quem financia e quem presta serviços como saúde, educação, transporte e assistência. Para o cidadão, a principal questão é se o serviço muda de nível de governo sem perder recursos ou capacidade.',
      potentialUpside: 'Uma divisão de responsabilidades mais clara pode reduzir duplicidade e aproximar decisões do local onde o serviço é usado.',
      pointsToWatch: 'Quais funções mudam de governo, como ficam as transferências, impacto sobre servidores e se municípios pobres recebem recursos suficientes para novas responsabilidades.',
    },
    {
      groups: ['moradores de áreas dominadas por facções', 'famílias', 'jovens', 'comunidades periféricas'],
      everyday: 'Retomada territorial pode significar operações policiais mais intensas e presença permanente do Estado em regiões sob influência criminal. Para moradores, o efeito desejado é poder circular e usar serviços sem coerção de facções.',
      potentialUpside: 'Recuperar controle territorial pode reduzir extorsão, circulação armada e restrições impostas por grupos criminosos.',
      pointsToWatch: 'Proteção de moradores, uso proporcional da força, continuidade de escola/saúde durante operações e o que acontece depois da fase policial: urbanismo, serviços e prevenção.',
    },
    {
      groups: ['famílias que recebem Bolsa Família', 'trabalhadores de baixa renda', 'estudantes negros', 'jovens que disputam universidade'],
      everyday: 'Substituir transferência de renda por frentes de trabalho mudaria a forma e as condições de recebimento do benefício. Encerrar cotas raciais alteraria diretamente critérios de acesso de estudantes às vagas reservadas.',
      potentialUpside: 'Defensores das frentes de trabalho argumentam que renda vinculada a atividade pode aproximar beneficiários do emprego e da qualificação.',
      pointsToWatch: 'Valor e duração da renda, proteção de quem não consegue trabalhar, oferta real de vagas, direitos trabalhistas e impacto mensurável do fim das cotas sobre acesso ao ensino superior.',
    },
    {
      groups: ['moradores de favelas e ocupações', 'famílias de baixa renda', 'inquilinos', 'pessoas que dependem de transporte público'],
      everyday: 'Um programa amplo de reurbanização pode mudar moradia, endereço, infraestrutura e acesso a serviços. Se houver remoções, a distância para trabalho, escola e rede familiar vira um fator central.',
      potentialUpside: 'Urbanização com saneamento, regularização, moradia segura e infraestrutura pode melhorar fortemente qualidade de vida.',
      pointsToWatch: 'Remoção involuntária, indenização, localização das novas moradias, aumento de aluguel após valorização, participação dos moradores e acesso a transporte e serviços.',
    },
  ],

  'Samara Martins': [
    {
      groups: ['usuários de serviços privatizados', 'trabalhadores desses setores', 'contribuintes', 'consumidores'],
      everyday: 'Reestatizações podem mudar gestão, tarifas, investimento e forma de atendimento em serviços considerados estratégicos. Para o cidadão, o efeito depende de como a compra seria financiada e de como a empresa pública passaria a operar.',
      potentialUpside: 'Maior controle público pode permitir priorizar universalização e objetivos sociais mesmo em áreas pouco rentáveis.',
      pointsToWatch: 'Custo da reestatização, indenizações, necessidade de aportes, qualidade do serviço, tarifa e capacidade de investimento depois da mudança de controle.',
    },
    {
      groups: ['usuários do SUS', 'estudantes', 'famílias sem moradia adequada', 'população de baixa renda'],
      everyday: 'Mais investimento social pode significar expansão de unidades de saúde, escolas, moradia e benefícios. O cidadão sentiria o efeito principalmente em acesso, fila e qualidade dos serviços.',
      potentialUpside: 'Maior cobertura pública pode reduzir gasto particular de famílias com saúde, educação e habitação.',
      pointsToWatch: 'Fonte de financiamento, qualidade do gasto, capacidade de execução, prioridade regional e metas concretas de atendimento.',
    },
    {
      groups: ['todos os consumidores', 'poupadores', 'aposentados', 'trabalhadores', 'usuários de serviços públicos'],
      everyday: 'Suspender pagamentos da dívida teria efeitos macroeconômicos potencialmente muito amplos. Dependendo da reação de mercado e das regras adotadas, poderia afetar câmbio, inflação, crédito, poupança e financiamento do próprio governo.',
      potentialUpside: 'A candidatura argumenta que liberar recursos hoje destinados à dívida permitiria ampliar políticas públicas.',
      pointsToWatch: 'Impacto sobre inflação, juros, câmbio, fundos de aposentadoria, capacidade futura de financiamento do governo e qual desenho jurídico seria usado para evitar ruptura financeira.',
    },
    {
      groups: ['trabalhadores em escala 6x1', 'mulheres', 'população negra', 'moradores de áreas com alta violência policial'],
      everyday: 'O conjunto de propostas mexe com jornada de trabalho e modelo de segurança. Trabalhadores podem ganhar mais tempo de descanso; mudanças policiais podem alterar abordagem, formação e relação entre força pública e comunidade.',
      potentialUpside: 'A proposta busca combinar redução de violência contra grupos vulneráveis com mais tempo livre para trabalhadores submetidos a escalas intensas.',
      pointsToWatch: 'Desenho da nova polícia, continuidade da capacidade operacional, mecanismos de controle, salário/jornada após mudança da 6x1 e indicadores de feminicídio e violência racial.',
    },
  ],

  'Tarcísio de Freitas': [
    {
      groups: ['moradores de áreas com crime organizado', 'vítimas de violência', 'usuários de transporte e serviços urbanos'],
      everyday: 'Mais integração e tecnologia podem alterar policiamento, investigação e resposta a crimes. Para a população, o efeito deve aparecer em redução de roubos, homicídios, extorsão e presença de facções, não apenas em quantidade de operações.',
      potentialUpside: 'Uso de inteligência pode direcionar recursos para redes criminosas e reduzir dependência de abordagens aleatórias.',
      pointsToWatch: 'Privacidade, reconhecimento e uso de dados, letalidade policial, vieses tecnológicos e resultados por região e tipo de crime.',
    },
    {
      groups: ['estudantes', 'pais e responsáveis', 'professores', 'famílias que dependem da rede estadual'],
      everyday: 'Expansão de escolas cívico-militares e ensino integral pode mudar rotina, disciplina, tempo na escola e oferta de atividades. Para famílias, ensino integral também altera necessidade de cuidado no período diurno.',
      potentialUpside: 'Mais tempo de aprendizagem e ambiente organizado podem beneficiar estudantes se vierem acompanhados de qualidade pedagógica e suporte adequado.',
      pointsToWatch: 'Aprendizagem comparada com escolas regulares, custo por aluno, formação de professores, critérios de adesão e efeito sobre estudantes que precisam trabalhar ou cuidar da família.',
    },
    {
      groups: ['usuários de rodovias e transporte', 'passageiros', 'moradores próximos a obras', 'contribuintes'],
      everyday: 'Concessões e infraestrutura podem reduzir tempo de viagem e melhorar manutenção, mas também podem introduzir ou alterar pedágios, tarifas e regras de serviço.',
      potentialUpside: 'Obras e contratos bem fiscalizados podem entregar infraestrutura mais rápido e com manutenção previsível.',
      pointsToWatch: 'Valor de tarifa/pedágio, metas contratuais, qualidade do serviço, fiscalização, atendimento a regiões menos rentáveis e custo final para quem usa diariamente.',
    },
    {
      groups: ['mulheres', 'vítimas de violência doméstica', 'mães', 'usuárias do sistema de saúde'],
      everyday: 'Ações de proteção, autonomia financeira e saúde podem afetar atendimento a vítimas, acesso a exames, acolhimento e capacidade de sair de relações abusivas.',
      potentialUpside: 'Integração entre proteção, renda e saúde pode atacar fatores que mantêm mulheres em situação de violência.',
      pointsToWatch: 'Cobertura fora da capital, vagas de acolhimento, tempo de atendimento, integração com polícia/Justiça e orçamento específico.',
    },
  ],

  'Fernando Haddad': [
    {
      groups: ['moradores de áreas com facções', 'vítimas de violência', 'famílias', 'usuários de serviços públicos'],
      everyday: 'Uma agência antifacções pode alterar a coordenação entre polícias, Ministério Público e órgãos federais. O cidadão deve perceber resultado em menos extorsão, roubo, homicídio e controle territorial.',
      potentialUpside: 'Combinar inteligência, dados e investigação financeira pode atingir estruturas criminosas além do autor material do crime.',
      pointsToWatch: 'Proteção de dados, sobreposição entre órgãos, metas públicas, orçamento e se os indicadores melhoram de forma sustentada.',
    },
    {
      groups: ['moradores de todos os municípios paulistas', 'vítimas de crime', 'jornalistas e cidadãos que fiscalizam políticas públicas'],
      everyday: 'Um placar de crimes pode facilitar enxergar onde roubos, homicídios e feminicídios estão subindo ou caindo e pressionar o governo por resposta regionalizada.',
      potentialUpside: 'Mais transparência permite comparar regiões e cobrar políticas com base em resultado, não apenas discurso.',
      pointsToWatch: 'Qualidade dos dados, subnotificação, mudança de metodologia e risco de gestores priorizarem apenas indicadores mais visíveis.',
    },
    {
      groups: ['mulheres', 'vítimas de violência doméstica', 'famílias', 'moradoras de cidades sem estrutura especializada'],
      everyday: 'Mais Delegacias da Mulher e tecnologia de proteção podem reduzir deslocamento, acelerar pedidos de ajuda e melhorar acompanhamento de medidas protetivas.',
      potentialUpside: 'Cobertura mais ampla e resposta rápida podem diminuir o intervalo entre ameaça, denúncia e proteção efetiva.',
      pointsToWatch: 'Funcionamento 24h, equipe suficiente, integração com Judiciário, acesso fora da capital e segurança das tecnologias usadas para monitoramento e denúncia.',
    },
    {
      groups: ['usuários de transporte, saúde e educação estaduais', 'contribuintes', 'trabalhadores de serviços públicos'],
      everyday: 'Rever privatizações e ampliar participação direta do Estado pode alterar gestão, tarifa, investimento e forma de atendimento em serviços. O cidadão pode sentir diferença em preço, qualidade e velocidade de expansão.',
      potentialUpside: 'Maior controle público pode priorizar universalização e objetivos sociais quando isso estiver previsto no orçamento e na gestão.',
      pointsToWatch: 'Custo de reversão contratual, indenizações, qualidade de gestão, necessidade de novos aportes e comparação objetiva de tarifa e serviço antes/depois.',
    },
  ],

  'Vivian Mendes': [
    {
      groups: ['trabalhadores CLT', 'famílias', 'trabalhadores do comércio e serviços'],
      everyday: 'O fim da escala 6x1 pode significar mais descanso semanal e tempo para família. Como a governadora não altera sozinha a legislação trabalhista nacional, o impacto estadual dependeria também de políticas locais e articulação federal.',
      potentialUpside: 'Mais descanso e previsibilidade podem melhorar qualidade de vida e reduzir desgaste físico.',
      pointsToWatch: 'Salário, jornada final, setores essenciais, funcionamento aos fins de semana e quais medidas realmente cabem ao governo estadual.',
    },
    {
      groups: ['usuários do SUS estadual', 'estudantes', 'pais', 'professores', 'contribuintes'],
      everyday: 'Mais provisão pública em saúde e educação pode afetar fila, quantidade de vagas, profissionais e manutenção de escolas e hospitais. A oposição a novas privatizações também muda a estratégia de gestão desses serviços.',
      potentialUpside: 'Investimento público consistente pode ampliar acesso sem depender da capacidade de pagamento da família.',
      pointsToWatch: 'Orçamento, contratação de profissionais, metas de atendimento, infraestrutura e capacidade de executar expansão sem deteriorar qualidade.',
    },
    {
      groups: ['mulheres', 'vítimas de violência doméstica', 'famílias', 'moradoras de periferias e interior'],
      everyday: 'Políticas contra feminicídio podem alterar atendimento policial, proteção, abrigo e acompanhamento de mulheres ameaçadas.',
      potentialUpside: 'Resposta integrada e acesso local podem reduzir o período em que a vítima permanece sem proteção efetiva.',
      pointsToWatch: 'Cobertura territorial, funcionamento 24h, vagas de abrigo, tempo para medida protetiva e integração entre saúde, polícia e Justiça.',
    },
    {
      groups: ['famílias sem moradia adequada', 'moradores de ocupações', 'inquilinos de baixa renda', 'movimentos comunitários'],
      everyday: 'Mais política habitacional pode significar produção de moradia, urbanização e regularização. Participação popular pode mudar quais projetos recebem prioridade e onde são implantados.',
      potentialUpside: 'Moradia adequada reduz gasto com aluguel precário e melhora acesso a saneamento e serviços.',
      pointsToWatch: 'Localização das unidades, transporte, critérios de seleção, risco de remoções e prazo entre cadastro e entrega.',
    },
  ],

  'Guilherme Derrite': [
    {
      groups: ['moradores de áreas violentas', 'vítimas de facções', 'famílias', 'pessoas investigadas pelo sistema penal'],
      everyday: 'Classificar facções como terroristas pode ampliar instrumentos legais e de investigação. O efeito sobre o cidadão dependerá de como a lei definir organização, participação e garantias processuais.',
      potentialUpside: 'Pode aumentar capacidade de perseguir financiamento, liderança e conexões internacionais de grandes grupos criminosos.',
      pointsToWatch: 'Definição legal, risco de enquadramento excessivo, direitos de defesa, efeitos sobre comunidades e se a medida reduz violência na prática.',
    },
    {
      groups: ['vítimas de crimes graves', 'famílias', 'população carcerária', 'contribuintes'],
      everyday: 'Penas mais longas e progressão mais restrita aumentam tempo de prisão. Isso pode ser percebido por vítimas como maior responsabilização, mas também aumenta custo e pressão sobre presídios.',
      potentialUpside: 'Crimes graves podem ter resposta penal mais severa e previsível.',
      pointsToWatch: 'Superlotação, custo por preso, reincidência, capacidade de investigação e se aumento de pena produz redução mensurável de crime.',
    },
    {
      groups: ['adolescentes', 'famílias', 'vítimas de crimes cometidos por menores', 'sistema socioeducativo'],
      everyday: 'Reduzir a maioridade penal mudaria o sistema em que determinados adolescentes respondem por crimes, podendo levá-los ao sistema penal adulto.',
      potentialUpside: 'Defensores argumentam que crimes muito graves receberiam responsabilização compatível com sua gravidade.',
      pointsToWatch: 'Faixa etária, tipos de crime, reincidência, efeito sobre recrutamento por facções e condições de encarceramento de jovens.',
    },
    {
      groups: ['moradores de áreas com crime organizado', 'vítimas de crime', 'cidadãos cujos dados podem integrar sistemas de segurança'],
      everyday: 'Mais inteligência e integração policial podem melhorar investigação e resposta, mas também ampliam circulação de dados pessoais entre órgãos.',
      potentialUpside: 'Dados integrados podem ajudar a conectar crimes, armas, dinheiro e lideranças que hoje aparecem em investigações separadas.',
      pointsToWatch: 'Governança de dados, auditoria de acessos, falsos positivos, tecnologia de reconhecimento e resultados concretos de redução de crime.',
    },
  ],

  'Marina Silva': [
    {
      groups: ['moradores de áreas sujeitas a enchentes e calor extremo', 'famílias', 'usuários de água e energia', 'comunidades vulneráveis'],
      everyday: 'Políticas climáticas podem aparecer em prevenção de enchentes, proteção de mananciais, qualidade do ar e adaptação ao calor. Esses efeitos são especialmente visíveis em cidades densas.',
      potentialUpside: 'Prevenção e adaptação podem reduzir perdas de moradia, interrupções de transporte e problemas de saúde em eventos extremos.',
      pointsToWatch: 'Recursos destinados a adaptação local, obras concluídas, metas de emissão e se municípios vulneráveis recebem prioridade.',
    },
    {
      groups: ['consumidores de energia', 'usuários de transporte', 'moradores próximos a grandes projetos', 'famílias de baixa renda'],
      everyday: 'Transição energética pode mudar matriz elétrica, transporte e custo de energia ao longo do tempo. Novos projetos também afetam territórios onde são instalados.',
      potentialUpside: 'Energia mais limpa e eficiência podem reduzir poluição e vulnerabilidade a combustíveis caros no longo prazo.',
      pointsToWatch: 'Tarifa no período de transição, licenciamento, impacto local de projetos, acesso de famílias de baixa renda e confiabilidade do sistema elétrico.',
    },
    {
      groups: ['moradores de periferias', 'usuários de transporte público', 'jovens', 'famílias expostas à violência'],
      everyday: 'Uma abordagem transversal de segurança inclui iluminação, transporte, prevenção social e policiamento. A população pode sentir mudanças no espaço urbano e no acesso a serviços além da presença policial.',
      potentialUpside: 'Atacar fatores de risco junto com repressão pode reduzir oportunidades de crime e melhorar uso do espaço público.',
      pointsToWatch: 'Coordenação entre políticas, indicadores por território, continuidade orçamentária e avaliação do que realmente reduziu crime.',
    },
    {
      groups: ['eleitores', 'mulheres', 'minorias', 'grupos sub-representados'],
      everyday: 'Medidas de inclusão e representação afetam quem consegue participar de partidos, candidaturas e decisões públicas. O impacto é mais institucional do que imediato no bolso.',
      potentialUpside: 'Mais diversidade pode ampliar a presença de experiências sociais diferentes na formulação de leis.',
      pointsToWatch: 'Regras concretas propostas, critérios de inclusão, custo eleitoral e se os mecanismos aumentam participação real em vez de apenas cumprir formalidades.',
    },
  ],

  'Simone Tebet': [
    {
      groups: ['trabalhadores CLT', 'famílias', 'trabalhadores de comércio e serviços'],
      everyday: 'O fim da escala 6x1 pode dar mais tempo de descanso e convivência, mas o texto de transição definirá como ficam salário, turnos, domingos e horas extras.',
      potentialUpside: 'Mais descanso semanal pode melhorar qualidade de vida sem exigir que a pessoa abandone o emprego para ter tempo familiar.',
      pointsToWatch: 'Manutenção de salário, setores contínuos, banco de horas, prazo de transição e impacto sobre contratos atuais.',
    },
    {
      groups: ['trabalhadores', 'contribuintes', 'consumidores', 'famílias de baixa renda'],
      everyday: 'Mudanças tributárias e econômicas podem alterar preço final de produtos, imposto pago no consumo, emprego e capacidade de financiar políticas sociais.',
      potentialUpside: 'Uma reforma mais simples e previsível pode reduzir distorções e tornar mais claro quanto cada pessoa paga de imposto.',
      pointsToWatch: 'Quem paga mais ou menos depois da reforma, efeitos sobre itens básicos, compensação para baixa renda e preservação do financiamento de serviços públicos.',
    },
    {
      groups: ['consumidores', 'trabalhadores da indústria', 'famílias que compram importados', 'moradores de regiões industriais'],
      everyday: 'Regras de concorrência e importação podem afetar preço e variedade de produtos, ao mesmo tempo em que influenciam empregos industriais. Há um trade-off direto entre proteção da produção local e custo para o consumidor.',
      potentialUpside: 'Uma regra bem calibrada pode preservar empregos sem fechar completamente o acesso a produtos estrangeiros.',
      pointsToWatch: 'Aumento de preços, redução de concorrência, contrapartidas de produtividade e duração de medidas protetivas.',
    },
    {
      groups: ['beneficiários de políticas sociais', 'eleitores', 'usuários de serviços públicos'],
      everyday: 'Apoio a uma frente política ampla sinaliza tendência de voto em temas sociais e institucionais, mas não permite prever automaticamente cada decisão no Senado.',
      potentialUpside: 'Alinhamento pode facilitar aprovação de políticas quando há concordância programática e negociação entre Poderes.',
      pointsToWatch: 'Votos efetivos em projetos, independência em relação ao governo, qualidade da fiscalização e coerência entre discurso de campanha e atuação parlamentar.',
    },
  ],

  'André do Prado': [
    {
      groups: ['moradores de municípios paulistas', 'usuários de postos de saúde e escolas municipais', 'famílias', 'contribuintes'],
      everyday: 'Maior articulação por recursos federais pode chegar ao cidadão por obras, saúde, creche, pavimentação e assistência executadas pelas prefeituras.',
      potentialUpside: 'Municípios com projetos estruturados podem acessar recursos e destravar serviços locais que dependem de transferência federal.',
      pointsToWatch: 'Critérios de distribuição, transparência de emendas, equilíbrio entre cidades grandes e pequenas e se o dinheiro resulta em serviço entregue.',
    },
    {
      groups: ['moradores do interior', 'usuários de serviços municipais', 'famílias de cidades com baixa arrecadação'],
      everyday: 'Dar mais peso aos municípios no orçamento pode aumentar recursos próximos da ponta, onde saúde básica, creches e manutenção urbana são prestadas.',
      potentialUpside: 'Decisões orçamentárias mais próximas do problema local podem responder melhor a necessidades específicas.',
      pointsToWatch: 'Controle sobre emendas, capacidade técnica das prefeituras, desigualdade entre municípios e fiscalização do gasto.',
    },
    {
      groups: ['todos os eleitores', 'famílias de condenados', 'pessoas atingidas pelos atos de 8 de janeiro', 'usuários do sistema de Justiça'],
      everyday: 'Uma anistia não altera diretamente conta de luz ou salário, mas muda consequências penais e políticas de atos contra instituições e pode influenciar confiança na aplicação das leis.',
      potentialUpside: 'Defensores argumentam que pode encerrar conflitos políticos e revisar punições consideradas desproporcionais.',
      pointsToWatch: 'Quem seria alcançado, quais crimes seriam perdoados, decisões do STF, impacto sobre responsabilização e precedentes para futuras rupturas institucionais.',
    },
    {
      groups: ['eleitores paulistas', 'usuários de serviços públicos', 'contribuintes'],
      everyday: 'Alinhamento político indica provável proximidade com determinadas pautas, mas por si só não revela impacto concreto na vida da população. O efeito real aparece nos votos, projetos e emendas apresentados.',
      potentialUpside: 'Coesão com uma coalizão pode facilitar articulação de projetos e recursos quando há agenda comum.',
      pointsToWatch: 'Votações nominais, emendas, independência para fiscalizar aliados e quais compromissos viram propostas legislativas específicas.',
    },
  ],

  'Ricardo Salles': [
    {
      groups: ['vítimas de crime', 'moradores de áreas violentas', 'famílias', 'população carcerária', 'contribuintes'],
      everyday: 'Leis penais mais duras podem aumentar tempo de prisão e restringir benefícios penais. Para a população, o objetivo declarado é maior responsabilização; o custo e a efetividade dependem da capacidade de investigar, julgar e administrar o sistema prisional.',
      potentialUpside: 'Punição mais previsível pode reforçar sensação de responsabilização em crimes graves.',
      pointsToWatch: 'Superlotação, reincidência, custo do encarceramento, demora judicial e se a mudança reduz crime ou apenas aumenta penas.',
    },
    {
      groups: ['consumidores de alimentos', 'moradores de áreas rurais', 'comunidades que dependem de água e solo', 'famílias afetadas por eventos ambientais'],
      everyday: 'Regras mais flexíveis para produção rural podem influenciar oferta e custo de alimentos, mas também fiscalização de uso do solo, água e vegetação que afeta comunidades próximas.',
      potentialUpside: 'Maior previsibilidade regulatória pode favorecer produção e abastecimento quando não compromete proteção ambiental essencial.',
      pointsToWatch: 'Qualidade da água, desmatamento, conflitos fundiários, fiscalização, preço de alimentos e custo público de danos ambientais.',
    },
    {
      groups: ['usuários de serviços públicos', 'contribuintes', 'idosos', 'pessoas com baixa inclusão digital'],
      everyday: 'Desburocratização pode reduzir documentos, filas e demora em serviços. Redução ampla do Estado, porém, pode significar menos equipes ou unidades se não houver ganho real de produtividade.',
      potentialUpside: 'Serviços mais simples e digitais podem economizar tempo e deslocamentos do cidadão.',
      pointsToWatch: 'Fechamento de canais presenciais, tempo de atendimento, acessibilidade, proteção de dados e se a redução de estrutura prejudica fiscalização e serviços essenciais.',
    },
    {
      groups: ['contribuintes', 'consumidores', 'trabalhadores', 'famílias que usam saúde e educação públicas'],
      everyday: 'Uma reforma para reduzir ou simplificar tributos pode alterar preço de produtos e renda disponível. O efeito sobre serviços públicos depende de quanto de arrecadação é mantido e de onde vêm os cortes.',
      potentialUpside: 'Menos complexidade e menor carga sobre determinadas rendas ou consumos podem deixar mais dinheiro disponível para famílias.',
      pointsToWatch: 'Quem recebe redução efetiva, quais impostos sobem ou caem, impacto em itens básicos e se a receita restante sustenta saúde, educação, segurança e previdência.',
    },
  ],
};
