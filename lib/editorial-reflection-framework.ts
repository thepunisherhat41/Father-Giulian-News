import type { DailyIntel } from '@/lib/daily-content';

export type ReflectionProfile = {
  eyebrow: string;
  centralQuestion: string;
  lenses: string[];
  counterpoints: string[];
  evidence: string[];
  decisions: string[];
  questions: string[];
  bias: string;
  safetyNote?: string;
};

type ProfileFactory = (title: string, content: DailyIntel) => ReflectionProfile;

const common = {
  evidence: [
    'Qual é a fonte primária por trás da afirmação principal e o que ela realmente demonstra?',
    'O dado está atualizado, tem período e metodologia claros, e é comparável com o que está sendo discutido?',
    'Existe algum fato novo que, se confirmado, mudaria materialmente a conclusão?',
  ],
  questions: [
    'Estou reagindo ao fato ou ao jeito como ele foi apresentado?',
    'Que explicação alternativa também seria compatível com os mesmos dados?',
    'O que eu precisaria descobrir antes de defender essa conclusão para outra pessoa?',
  ],
};

function profile(
  eyebrow: string,
  centralQuestion: string,
  lenses: string[],
  counterpoints: string[],
  decisions: string[],
  bias: string,
  extras?: Partial<Pick<ReflectionProfile, 'evidence' | 'questions' | 'safetyNote'>>,
): ReflectionProfile {
  return {
    eyebrow,
    centralQuestion,
    lenses,
    counterpoints,
    evidence: extras?.evidence ?? common.evidence,
    decisions,
    questions: extras?.questions ?? common.questions,
    bias,
    safetyNote: extras?.safetyNote,
  };
}

const factories: Record<string, ProfileFactory> = {
  hoje: (title) => profile(
    'MAPA MENTAL DA EDIÇÃO',
    `Entre os assuntos de “${title}”, qual realmente merece mudar uma decisão sua hoje — e qual é apenas interessante?`,
    [
      'Separe urgência de importância: o assunto mais chamativo nem sempre é o que mais afeta sua vida.',
      'Procure conexões entre áreas: energia pode chegar a inflação; tecnologia pode chegar a trabalho; clima pode chegar a deslocamento e preço.',
      'Escolha pelo menos um tema para aprofundar na fonte, em vez de consumir todos apenas pela manchete.',
    ],
    [
      'Uma edição diária tende a supervalorizar novidade. Pergunte se o fato de hoje realmente altera uma tendência maior.',
      'Nem todo tema precisa gerar opinião imediata; em alguns casos, a posição mais racional é esperar evidência.',
    ],
    ['Aprofundar um tema.', 'Apenas monitorar.', 'Transformar um aprendizado em ação prática.', 'Não fazer nada ainda.'],
    'Viés de novidade: dar peso excessivo ao que acabou de acontecer só porque está fresco.',
  ),

  brasil: (title) => {
    if (/6x1|jornada|40 horas|trabalho/i.test(title)) {
      return profile(
        'PENSE ANTES DE CONCLUIR',
        'Qual ganho social justifica quais custos de transição — e quem absorveria esses custos em cada desenho possível da jornada?',
        [
          'Diferencie objetivo da política de desenho da política: querer mais descanso não responde, sozinho, como implementar.',
          'Pergunte quem ganha, quem paga, em quanto tempo e quais setores têm capacidade diferente de adaptação.',
          'Separe efeito sobre salário contratual, renda total, produtividade, emprego, cobertura de turno e preço ao consumidor.',
        ],
        [
          'O melhor argumento dos defensores é que descanso e previsibilidade podem ter benefícios sociais e produtivos que não aparecem apenas na folha salarial.',
          'O melhor argumento dos críticos é que uma regra uniforme pode produzir efeitos muito diferentes em empresas, setores e regiões com estruturas distintas.',
          'Um meio-termo pode parecer politicamente confortável, mas exceções demais também podem esvaziar o objetivo original.',
        ],
        ['Aprovar como está.', 'Alterar transição/exceções.', 'Dar mais peso à negociação coletiva.', 'Adiar para coletar apoio ou evidência.', 'Construir texto intermediário.'],
        'Viés de identidade política: concordar ou rejeitar uma proposta pelo grupo que a defende, antes de testar seu desenho concreto.',
        {
          evidence: [
            'Estimativas transparentes de custo e produtividade por setor, especialmente comércio, saúde, transporte, alimentação e pequenas empresas.',
            'Texto efetivamente votado: horas, repouso, preservação salarial, transição, exceções e negociação coletiva.',
            'Experiências comparáveis que mostrem efeitos sobre emprego, renda, saúde, absenteísmo e produtividade — com contexto semelhante.',
          ],
          questions: [
            'Se a medida melhorar saúde e reduzir rotatividade, quanto disso compensaria o custo de cobertura adicional?',
            'Que exceções são tecnicamente necessárias e quais seriam apenas pressão setorial?',
            'Qual desenho eu defenderia se não soubesse se estaria do lado do trabalhador, da pequena empresa ou do grande empregador?',
          ],
        },
      );
    }
    return profile(
      'BRASIL · LEITURA CRÍTICA',
      `Em “${title}”, qual decisão pública está realmente sendo tomada e quais consequências ainda são apenas projeções?`,
      [
        'Identifique regra, orçamento, execução e resultado: são etapas diferentes.',
        'Pergunte quais grupos são diretamente afetados e quais efeitos são indiretos.',
        'Procure o mecanismo: como uma decisão institucional chega à vida real?',
      ],
      [
        'Uma política pode ter boa intenção e execução ruim; também pode ter custo visível e benefício difuso.',
        'Anúncio, autorização e execução não são sinônimos.',
      ],
      ['Apoiar como está.', 'Apoiar com ajustes.', 'Aguardar execução.', 'Cobrar métrica e prazo.', 'Rejeitar o desenho e propor alternativa.'],
      'Viés partidário e viés de manchete.',
    );
  },

  politica: (title) => profile(
    'POLÍTICA · SEM TORCIDA',
    `Ao ler “${title}”, o que é fato institucional, o que é fala estratégica e o que é promessa ou interpretação?`,
    [
      'Separe declaração, proposta, acordo político, ato oficial e resultado concreto.',
      'Pergunte qual incentivo cada ator tem para falar agora e para qual público está falando.',
      'Compare posição atual com histórico de votação, execução e alianças — não apenas com discurso.',
    ],
    [
      'Um adversário pode apontar um problema real mesmo usando linguagem eleitoral.',
      'Um aliado pode apresentar dado verdadeiro de forma seletiva.',
      'Consenso entre grupos não prova que uma decisão seja boa; conflito entre grupos também não prova que seja ruim.',
    ],
    ['Formar posição provisória.', 'Esperar documento/decisão oficial.', 'Comparar propostas concorrentes.', 'Cobrar execução e indicadores.'],
    'Viés de confirmação política: procurar fatos que apenas reforcem o lado escolhido.',
    {
      evidence: [
        'Documento oficial, votação, decisão judicial ou ato administrativo ligado à afirmação.',
        'Série histórica e metodologia para qualquer número usado como argumento.',
        'Posição completa dos lados relevantes, evitando recortes de uma única frase.',
      ],
      questions: [
        'Eu julgaria essa mesma ação do mesmo jeito se tivesse sido feita pelo grupo político oposto?',
        'Qual parte da discussão é valor e qual parte pode ser testada por evidência?',
        'Que resultado concreto permitiria avaliar essa promessa daqui a seis ou doze meses?',
      ],
    },
  ),

  mundo: (title) => profile(
    'MUNDO · CENÁRIOS E INCERTEZA',
    `Em “${title}”, qual parte é evento confirmado e qual parte depende de intenção, capacidade e reação de outros atores?`,
    [
      'Conflitos e geopolítica têm informação incompleta, propaganda e objetivos estratégicos.',
      'Mapeie primeira, segunda e terceira ordem: evento → reação → impacto econômico/diplomático → efeito local.',
      'Pergunte o que cada ator pode fazer, não apenas o que diz querer fazer.',
    ],
    [
      'A ausência de confirmação independente não torna uma alegação falsa; apenas reduz a confiança disponível.',
      'Uma escalada possível não é uma escalada inevitável.',
      'Mercados podem reagir à expectativa antes de o efeito material aparecer.',
    ],
    ['Monitorar.', 'Revisar cenário-base.', 'Preparar contingência.', 'Evitar concluir antes de confirmação independente.'],
    'Viés de disponibilidade: tratar o cenário mais dramático como o mais provável.',
  ),

  'seguranca-zl': (title) => profile(
    'REGIÃO · CONTEXTO SEM ALARMISMO',
    `Ao ler “${title}”, isso representa um caso isolado, um padrão recorrente ou ainda não há dados suficientes para dizer?`,
    [
      'Separe ocorrência confirmada, relato, investigação e conclusão oficial.',
      'Compare lugar, horário, frequência e base populacional antes de inferir tendência.',
      'Priorize medidas úteis de prevenção sem transformar notícia em sensação permanente de risco.',
    ],
    [
      'Um caso grave merece atenção mesmo sem representar aumento estatístico geral.',
      'Uma redução média na região pode coexistir com pontos locais de maior risco.',
    ],
    ['Apenas acompanhar.', 'Ajustar rotina de forma proporcional.', 'Consultar dados/serviços oficiais.', 'Compartilhar alerta somente com contexto e fonte.'],
    'Viés de disponibilidade e medo: um caso vívido pode parecer mais frequente do que é.',
  ),

  planeta: (title) => profile(
    'CIÊNCIA · MECANISMO ANTES DA CONCLUSÃO',
    `Em “${title}”, qual mecanismo físico explica o fenômeno e que observação seria esperada se a explicação estiver correta?`,
    [
      'Diferencie descrição do fenômeno de explicação causal.',
      'Teste escala: local, regional, global; minutos, estações, décadas.',
      'Procure medições independentes e limites do modelo usado.',
    ],
    [
      'Uma boa explicação simples pode esconder condições em que deixa de funcionar.',
      'Correlação espacial ou temporal não prova causalidade por si só.',
    ],
    ['Aceitar como modelo útil.', 'Procurar dado observacional.', 'Comparar explicações concorrentes.', 'Marcar limites de aplicação.'],
    'Viés de narrativa: preferir uma explicação elegante mesmo quando o fenômeno é multicausal.',
  ),

  animais: (title) => profile(
    'MUNDO ANIMAL · COMPORTAMENTO SEM HUMANIZAR',
    `Em “${title}”, o comportamento observado exige uma explicação complexa ou uma hipótese mais simples já explica os dados?`,
    [
      'Separe comportamento observado de intenção atribuída ao animal.',
      'Pergunte se o estudo mede indivíduos, espécie, ambiente natural ou condição experimental.',
      'Considere evolução, aprendizagem, ambiente e variabilidade individual.',
    ],
    [
      'Comportamento impressionante não implica cognição humana equivalente.',
      'Explicações simples não tornam o comportamento menos interessante.',
    ],
    ['Tratar como evidência específica.', 'Esperar replicação.', 'Comparar espécies/contextos.', 'Evitar generalização antropomórfica.'],
    'Antropomorfismo: projetar emoções e intenções humanas sem evidência suficiente.',
  ),

  tempo: (title) => profile(
    'TEMPO · PROBABILIDADE, NÃO CERTEZA',
    `Em “${title}”, qual risco é provável o bastante para justificar uma ação prática agora?`,
    [
      'Previsão é probabilística e pode variar muito dentro da mesma cidade.',
      'Diferencie possibilidade, probabilidade, intensidade e duração.',
      'Use observação em tempo real para atualizar a decisão conforme o evento se aproxima.',
    ],
    [
      'Um alerta pode estar correto mesmo se seu bairro não registrar o pior cenário.',
      'A ausência de evento forte em um ponto não invalida o risco regional.',
    ],
    ['Mudar deslocamento.', 'Levar proteção/roupa adequada.', 'Acompanhar radar/alerta.', 'Manter plano normal se o risco for baixo.'],
    'Viés retrospectivo: achar que uma previsão estava “errada” só porque o pior cenário não ocorreu onde você estava.',
  ),

  curiosidades: (title) => profile(
    'CURIOSIDADE · TESTE A IDEIA',
    `Depois de ler “${title}”, qual experimento mental, exemplo ou contraexemplo ajuda a verificar se você realmente entendeu?`,
    [
      'Tente explicar sem repetir as palavras da matéria.',
      'Procure uma situação em que a regra deixe de valer.',
      'Conecte o conceito a algo cotidiano para testar compreensão.',
    ],
    [
      'Uma explicação popular pode ser útil e ainda assim ser incompleta.',
      'Memorizar uma curiosidade não é o mesmo que entender seu mecanismo.',
    ],
    ['Explicar para alguém.', 'Testar com exemplo.', 'Pesquisar a exceção.', 'Conectar a outro tema.'],
    'Ilusão de compreensão: achar que entendeu porque a explicação parece intuitiva.',
  ),

  musica: (title) => profile(
    'MÚSICA · ESCUTA COM CONTEXTO',
    `Em “${title}”, o que é gosto pessoal, o que é inovação técnica e o que é importância histórica?`,
    [
      'Compare composição, interpretação, produção, contexto cultural e influência separadamente.',
      'Uma música pode ser tecnicamente simples e culturalmente enorme — ou o contrário.',
      'Pergunte como época, tecnologia e cena musical moldaram o resultado.',
    ],
    [
      'Popularidade não é sinônimo de qualidade; obscuridade também não é.',
      'Nostalgia pode ampliar a percepção de qualidade sem invalidar a experiência afetiva.',
    ],
    ['Ouvir novamente com foco.', 'Comparar gravações/versões.', 'Explorar influências.', 'Manter gosto e avaliação histórica separados.'],
    'Viés de nostalgia e prestígio.',
  ),

  games: (title) => profile(
    'GAMES · HYPE VS. EXPERIÊNCIA',
    `Em “${title}”, o que é recurso confirmado, o que é promessa de marketing e o que realmente muda a experiência de jogar?`,
    [
      'Separe especificação, benchmark, demonstração controlada e experiência final.',
      'Avalie design, performance, preço, catálogo e suporte ao longo do tempo.',
      'Pergunte se o recurso resolve um problema real ou apenas aumenta a ficha técnica.',
    ],
    [
      'Mais potência não garante melhor jogo.',
      'Uma limitação técnica pode ser irrelevante para determinado gênero ou perfil de jogador.',
    ],
    ['Comprar agora.', 'Esperar reviews/patches.', 'Comparar plataforma.', 'Não comprar porque o ganho não muda seu uso.'],
    'Viés de hype e novidade.',
  ),

  gravidez: (title) => profile(
    'GRAVIDEZ · ENTENDER SEM TRANSFORMAR EM DIAGNÓSTICO',
    `Em “${title}”, o que é esperado como variação comum da gestação e o que exige orientação individual do pré-natal?`,
    [
      'Informação populacional descreve padrões; não determina o que acontecerá com uma pessoa específica.',
      'Sintoma, intensidade, duração, hidratação, alimentação e outros sinais mudam a interpretação clínica.',
      'Use a matéria para preparar perguntas melhores para o pré-natal, não para substituir avaliação profissional.',
    ],
    [
      '“Comum” não significa que precise ser ignorado quando intenso ou persistente.',
      'Ausência de um sintoma descrito como frequente também pode ser normal.',
    ],
    ['Observar e registrar.', 'Ajustar cuidados seguros de rotina.', 'Levar pergunta à consulta.', 'Buscar orientação profissional quando houver sinal de alerta ou dúvida clínica.'],
    'Viés de comparação: assumir que toda gestação deve seguir exatamente a mesma sequência de sintomas e marcos.',
    {
      evidence: [
        'Fonte obstétrica confiável e compatível com a semana gestacional.',
        'Contexto individual discutido com o profissional do pré-natal quando a decisão envolver sintoma, medicamento ou risco.',
        'Evolução do sintoma ao longo do tempo, em vez de uma observação isolada.',
      ],
      questions: [
        'Esta informação descreve algo esperado ou está sendo usada indevidamente como diagnóstico?',
        'Que detalhe eu deveria registrar para explicar melhor isso na consulta?',
        'Há algum sinal de alerta associado que a fonte recomenda não ignorar?',
      ],
      safetyNote: 'Conteúdo educativo. Sintomas, medicamentos, suplementos e decisões clínicas devem ser avaliados com o profissional responsável pelo pré-natal.',
    },
  ),

  pai: (title) => profile(
    'SER PAI · PRESENÇA COM INTENÇÃO',
    `Em “${title}”, qual atitude reduz carga real da família em vez de apenas parecer ajuda?`,
    [
      'Diferencie executar uma tarefa de assumir responsabilidade completa por ela.',
      'Pergunte qual apoio é desejado antes de transformar cuidado em controle.',
      'Considere constância, previsibilidade e escuta como parte da presença.',
    ],
    [
      'Boa intenção pode aumentar carga mental se a outra pessoa precisar planejar e delegar tudo.',
      'Assumir responsabilidade não significa tomar decisões médicas ou pessoais pela parceira.',
    ],
    ['Assumir um ciclo completo de tarefa.', 'Perguntar preferência quando ela realmente importa.', 'Planejar antes.', 'Rever uma rotina que está gerando carga invisível.'],
    'Viés de intenção: avaliar a própria ajuda pelo esforço percebido, e não pelo impacto gerado.',
  ),

  carros: (title) => profile(
    'CARROS · DECISÃO, NÃO PAIXÃO',
    `Em “${title}”, o carro continua sendo uma boa escolha quando entram manutenção, seguro, consumo, histórico e seu uso real?`,
    [
      'Preço de compra é apenas a entrada; estime custo total de propriedade.',
      'Histórico e estado do exemplar importam mais que reputação abstrata do modelo.',
      'Compare o carro com alternativas para o mesmo uso, não apenas com o desejo inicial.',
    ],
    [
      'Um modelo “confiável” ainda pode ser uma compra ruim se o exemplar foi negligenciado.',
      'Um carro mais caro pode custar menos no total se exigir menos correções e tiver melhor liquidez.',
    ],
    ['Comprar após inspeção.', 'Negociar pelo risco identificado.', 'Buscar outro exemplar.', 'Mudar de modelo.', 'Desistir da compra.'],
    'Viés de compromisso: depois de gostar do carro, procurar argumentos para justificar a compra.',
  ),

  motos: (title) => profile(
    'MOTOS · USO REAL E MARGEM DE SEGURANÇA',
    `Em “${title}”, a moto é adequada ao seu uso depois de considerar ergonomia, manutenção, seguro, peças e segurança?`,
    [
      'Compare cidade, estrada, garupa, carga e frequência de uso.',
      'Estado de pneus, freios, transmissão, suspensão e histórico vale mais que aparência.',
      'Custo de equipamento de proteção faz parte do orçamento da moto.',
    ],
    [
      'Baixo consumo não compensa necessariamente seguro, manutenção ou ergonomia inadequados.',
      'Potência extra pode não melhorar o uso cotidiano e pode aumentar custo.',
    ],
    ['Comprar após inspeção.', 'Negociar.', 'Comparar outra cilindrada/modelo.', 'Priorizar equipamento/seguro antes da troca.'],
    'Viés de desejo e especificação.',
  ),

  mecanica: (title) => profile(
    'MECÂNICA · DIAGNÓSTICO ANTES DE TROCAR PEÇA',
    `Em “${title}”, qual evidência confirma a causa antes de substituir componente ou alterar o sistema?`,
    [
      'Sintoma não é causa; procure teste que diferencie hipóteses.',
      'Comece por inspeção, histórico, especificação e medições simples antes de soluções caras.',
      'Uma correção deve explicar por que o defeito ocorreu, não apenas fazê-lo desaparecer por enquanto.',
    ],
    [
      'Peça nova não prova que a peça antiga era a causa.',
      'Dois defeitos podem produzir sintomas parecidos.',
    ],
    ['Medir primeiro.', 'Fazer manutenção preventiva.', 'Confirmar diagnóstico com especialista.', 'Adiar troca de peça sem evidência.'],
    'Viés de substituição: trocar a peça mais associada ao sintoma sem confirmar a falha.',
  ),

  nautica: (title) => profile(
    'NÁUTICA · PLANO, CONDIÇÕES E REDUNDÂNCIA',
    `Em “${title}”, qual condição mudaria o plano antes de sair — clima, autonomia, equipamento, tripulação ou rota?`,
    [
      'Planejamento náutico precisa considerar ambiente dinâmico, não apenas distância.',
      'Use fontes e cartas apropriadas para navegação real; conteúdo editorial é contexto.',
      'Defina margem e alternativa antes da saída, não depois do problema.',
    ],
    [
      'Condição “navegável” para uma embarcação pode não ser confortável ou segura para outra.',
      'Rota curta pode exigir mais planejamento que uma longa se houver barra, corrente ou pouca margem.',
    ],
    ['Prosseguir.', 'Alterar rota/horário.', 'Adicionar margem/equipamento.', 'Cancelar e remarcar.'],
    'Viés de plano: insistir no roteiro original mesmo quando as condições mudam.',
  ),

  viagens: (title) => profile(
    'VIAGENS · EXPERIÊNCIA VS. LOGÍSTICA',
    `Em “${title}”, o passeio continua valendo a pena quando entram tempo, deslocamento, custo, clima e plano B?`,
    [
      'Diferencie atração interessante de roteiro eficiente.',
      'Calcule tempo porta a porta e custos escondidos.',
      'Tenha critério de cancelamento ou mudança antes de ficar preso ao plano.',
    ],
    [
      'Destino muito recomendado pode não combinar com seu ritmo ou com a época do ano.',
      'Pagar mais por localização às vezes reduz custo e desgaste total da viagem.',
    ],
    ['Reservar.', 'Esperar clima/preço.', 'Mudar ordem do roteiro.', 'Escolher alternativa.', 'Cancelar sem culpa.'],
    'Viés de custo afundado: manter um plano ruim porque já houve tempo ou dinheiro investido.',
  ),

  financas: (title) => profile(
    'FINANÇAS · CENÁRIO, RISCO E SEGUNDA ORDEM',
    `Em “${title}”, qual variável realmente muda sua decisão financeira e qual é apenas ruído de curto prazo?`,
    [
      'Diferencie preço, valor, fluxo de caixa, risco e horizonte.',
      'Monte cenário-base, melhor e pior caso antes de agir.',
      'Pergunte como juros, inflação, câmbio e comportamento se conectam em segunda ordem.',
    ],
    [
      'Uma notícia econômica relevante pode não exigir nenhuma mudança na carteira ou orçamento.',
      'Acertar a direção de uma variável não garante ganhar dinheiro: preço de entrada e tempo também importam.',
    ],
    ['Não fazer nada.', 'Rebalancear gradualmente.', 'Aumentar reserva/margem.', 'Adiar compra/dívida.', 'Buscar informação específica antes de investir.'],
    'Viés de ação e recência: sentir que é preciso mexer no dinheiro porque algo acabou de acontecer.',
  ),

  tecnologia: (title) => profile(
    'TECNOLOGIA · CLAIM, BENCHMARK E VALOR',
    `Em “${title}”, qual benefício foi demonstrado em condição real e qual ainda depende de benchmark, marketing ou hipótese de adoção?`,
    [
      'Separe especificação técnica de benefício para produto e usuário.',
      'Compare custo total: integração, energia, operação, lock-in, treinamento e manutenção.',
      'Procure benchmark independente e workload comparável.',
    ],
    [
      'Tecnologia superior em uma métrica pode ser pior no sistema completo.',
      'Velocidade de adoção não prova sustentabilidade econômica.',
    ],
    ['Testar em piloto.', 'Esperar benchmark.', 'Comparar alternativa.', 'Adotar onde há caso de uso mensurável.', 'Não adotar ainda.'],
    'Viés de inovação: confundir novidade tecnológica com valor garantido.',
  ),

  'security-briefing': (title) => profile(
    'SECURITY BRIEFING · DECISION LENS',
    `Em “${title}”, existe exposição real no nosso ambiente ou estamos reagindo apenas à gravidade pública do evento?`,
    [
      'Separe ameaça, vulnerabilidade, exposição, explorabilidade e impacto no seu contexto.',
      'Mapeie ativos, identidade, caminho de ataque, controle existente e evidência de exploração.',
      'Uma notícia só vira prioridade operacional quando há ligação demonstrável com sua superfície ou com risco estratégico relevante.',
    ],
    [
      'CVSS alto sem exposição pode ser menos urgente que falha moderada em ativo crítico e acessível.',
      'Ausência de IOC conhecido não prova ausência de comprometimento.',
    ],
    ['Mitigar agora.', 'Investigar exposição.', 'Adicionar detecção.', 'Aceitar risco documentado.', 'Monitorar até surgir gatilho.'],
    'Viés de severidade e disponibilidade: priorizar o item mais famoso em vez do risco mais provável no ambiente.',
    {
      evidence: [
        'Inventário de ativos/versões/identidades realmente expostos.',
        'Telemetria que confirme ou negue exploração e caminhos de ataque relevantes.',
        'Cobertura e efetividade de controles compensatórios.',
      ],
      questions: [
        'Qual decisão muda se confirmarmos exposição?',
        'Que evidência permitiria fechar este item sem depender de opinião?',
        'Quem é o owner e qual é o critério objetivo de conclusão?',
      ],
    },
  ),

  seguranca: (title) => profile(
    'CYBER · AMEAÇA ≠ RISCO LOCAL',
    `Em “${title}”, qual cadeia de ataque precisaria funcionar no nosso contexto para isso virar incidente real?`,
    [
      'Mapeie pré-condições, acesso inicial, execução, persistência, privilégio, movimento e impacto.',
      'Diferencie capacidade do atacante de evidência de uso contra seu ambiente.',
      'Priorize controles que quebram mais de um ponto da cadeia.',
    ],
    [
      'Bloquear um IOC pode ajudar e ainda assim não resolver a técnica.',
      'Detecção sem processo de resposta pode produzir sensação falsa de cobertura.',
    ],
    ['Reduzir exposição.', 'Adicionar prevenção.', 'Melhorar detecção.', 'Hunt direcionado.', 'Aceitar/monitorar com gatilho.'],
    'Viés de IOC: focar no indicador observável e perder a técnica reutilizável.',
  ),

  'appsec-ssdlc': (title) => profile(
    'APPSEC · DO FINDING À DECISÃO',
    `Em “${title}”, qual finding é explorável, alcança ativo relevante e justifica bloquear o fluxo agora?`,
    [
      'Separe presença de vulnerabilidade, alcançabilidade, exploração, impacto e contexto do deployment.',
      'Gate deve refletir risco e evidência, não apenas contagem de findings.',
      'Considere origem da dependência, caminho de uso, exposição e controles compensatórios.',
    ],
    [
      'Mais findings não significa necessariamente mais risco.',
      'Um scanner “limpo” não prova ausência de vulnerabilidade; mede o que aquele scanner consegue observar.',
    ],
    ['Bloquear.', 'Corrigir antes do deploy.', 'Aceitar com prazo/owner.', 'Gerar exceção documentada.', 'Melhorar evidência antes de decidir.'],
    'Viés de ferramenta: tratar saída do scanner como verdade completa em vez de evidência parcial.',
    {
      evidence: [
        'Caminho de código/dependência realmente usado e alcançável.',
        'Ambiente/branch/imagem exatos associados ao finding.',
        'Owner, SLA, baseline, exceção e evidência de correção verificável.',
      ],
      questions: [
        'Se eu remover o nome da ferramenta, qual risco técnico sobra?',
        'O gate consegue explicar para o dev por que bloqueou e o que precisa mudar?',
        'A correção elimina a causa ou apenas silencia a evidência?',
      ],
    },
  ),
};

export function reflectionFor(slug: string, content: DailyIntel): ReflectionProfile {
  const factory = factories[slug];
  if (factory) return factory(content.title, content);
  return profile(
    'LEITURA CRÍTICA',
    `Em “${content.title}”, qual é a conclusão mais forte que as evidências permitem — sem ir além delas?`,
    [
      'Separe fato observado, interpretação e cenário futuro.',
      'Procure mecanismo, contexto, escala e grupo afetado.',
      'Compare a primeira explicação com pelo menos uma alternativa plausível.',
    ],
    [
      'Uma boa história pode ser verdadeira e ainda omitir variáveis importantes.',
      'Não decidir também pode ser uma decisão racional quando a evidência é insuficiente.',
    ],
    ['Agir.', 'Esperar.', 'Buscar evidência adicional.', 'Comparar alternativa.', 'Rever a hipótese inicial.'],
    'Viés de confirmação e excesso de confiança.',
  );
}
