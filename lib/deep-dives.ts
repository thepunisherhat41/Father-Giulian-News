export type DeepDive = {
  title: string;
  intro: string;
  bullets: string[];
};

export const deepDives: Record<string, DeepDive> = {
  brasil: {
    title: 'Para aprofundar: como ler notícias sobre o Brasil',
    intro: 'Uma decisão federal raramente produz um efeito único. O melhor jeito de entender o país é seguir a cadeia entre regra, orçamento, execução e impacto na vida cotidiana.',
    bullets: [
      'Diferencie anúncio, medida publicada, dinheiro autorizado e dinheiro efetivamente executado.',
      'Observe quem paga a conta: União, estado, município, empresa ou consumidor.',
      'Compare valores nominais com inflação e tamanho do orçamento antes de concluir que um número é grande ou pequeno.',
    ],
  },
  politica: {
    title: 'Para aprofundar: acompanhe política como processo, não como torcida',
    intro: 'A página de Política cruza calendário eleitoral, trajetória pública, regras e fatos verificáveis. Propostas de campanha aparecem separadas de entregas já realizadas.',
    bullets: [
      'Convenção partidária escolhe nomes; registro na Justiça Eleitoral formaliza a candidatura e ainda passa por análise.',
      'Pesquisa eleitoral é fotografia de um período e amostra, não previsão do resultado.',
      'Para avaliar um mandato, procure atos, votações, execução orçamentária, indicadores e resultados — não apenas discurso.',
    ],
  },
  mundo: {
    title: 'Para aprofundar: transforme geopolítica em consequências',
    intro: 'Um conflito distante pode chegar ao Brasil por energia, câmbio, frete, fertilizantes, juros, cadeias industriais e confiança dos mercados.',
    bullets: [
      'Procure o mecanismo de transmissão antes de assumir impacto direto.',
      'Separe fato ocorrido de cenário possível e de declaração de uma das partes.',
      'Eventos geopolíticos costumam afetar diferentes setores em direções opostas.',
    ],
  },
  planeta: {
    title: 'Para aprofundar: a Terra é um sistema conectado',
    intro: 'Oceanos, atmosfera, relevo, gelo, gravidade e placas tectônicas interagem continuamente. A melhor curiosidade é aquela que conecta fenômenos que pareciam separados.',
    bullets: [
      'Mudanças oceânicas alteram circulação atmosférica e clima.',
      'O relevo influencia rios, cidades, agricultura e risco de deslizamentos.',
      'Lagos guardam registros geológicos e climáticos de milhares de anos em seus sedimentos.',
    ],
  },
  animais: {
    title: 'Para aprofundar: comportamento é adaptação',
    intro: 'Em vez de tratar animais como “estranhos” ou “geniais” por comparação com humanos, a área explica qual problema evolutivo determinado comportamento resolve.',
    bullets: [
      'Sono, comunicação, caça e migração variam conforme ambiente e pressão evolutiva.',
      'Inteligência animal não é uma única escala; espécies resolvem problemas diferentes.',
      'Comportamentos espetaculares quase sempre têm custo energético e trade-offs.',
    ],
  },
  tempo: {
    title: 'Para aprofundar: previsão é probabilidade',
    intro: 'Meteorologia trabalha com observações, modelos e incerteza. Quanto maior o horizonte da previsão, maior a importância de interpretar tendência e probabilidade.',
    bullets: [
      'Alerta meteorológico não significa que o evento ocorrerá em todos os pontos da área avisada.',
      'Tempo descreve horas e dias; clima descreve padrões de períodos longos.',
      'El Niño e La Niña alteram probabilidades, mas não determinam sozinhos o tempo de uma cidade.',
    ],
  },
  curiosidades: {
    title: 'Para aprofundar: curiosidade útil muda a forma de observar o cotidiano',
    intro: 'Além do fato curioso, procure a causa, a conexão inesperada e uma palavra nova que possa realmente entrar no seu vocabulário.',
    bullets: [
      'Pergunte “por que isso acontece?” antes de guardar apenas o número ou a frase surpreendente.',
      'Prefira palavras precisas a palavras difíceis só para parecer sofisticado.',
      'Um bom repertório mistura ciência, história, linguagem, psicologia, arte e cotidiano.',
    ],
  },
  gravidez: {
    title: 'Para aprofundar com segurança',
    intro: 'Na gravidez, informação útil deve reduzir incerteza sem substituir o pré-natal. O foco do hub é desenvolvimento fetal, rotina segura, preparação para consultas e sinais que justificam buscar avaliação profissional.',
    bullets: [
      'Anote sintomas e dúvidas para levar ao obstetra em vez de tentar diagnosticar pela internet.',
      'Evite iniciar ou suspender medicamentos e suplementos por conta própria.',
      'Em sinais importantes ou piora clínica, o aplicativo nunca deve ser usado para decidir se é seguro esperar.',
    ],
  },
  pai: {
    title: 'Para aprofundar: paternidade é competência construída',
    intro: 'Presença, segurança, cuidado físico, vínculo e regulação emocional podem ser aprendidos. A meta não é perfeição; é assumir responsabilidade de forma consistente.',
    bullets: [
      'Aprenda tarefas concretas antes do nascimento: troca, banho, sono seguro, cadeirinha e primeiros socorros.',
      'Divida carga mental, não apenas tarefas executadas quando alguém pede.',
      'Observe o desenvolvimento da criança sem transformar comparação com outras crianças em competição.',
    ],
  },
  carros: {
    title: 'Para aprofundar: preço de compra é só o primeiro número',
    intro: 'Um bom usado precisa ser analisado por custo total de propriedade, histórico, versão, confiabilidade, liquidez e condição mecânica — não apenas ano e quilometragem.',
    bullets: [
      'Some seguro, IPVA, pneus, manutenção preventiva, consumo e depreciação.',
      'Quilometragem coerente com histórico documentado vale mais que um odômetro simplesmente baixo.',
      'Sempre que possível, faça cautelar e inspeção mecânica independente antes da compra.',
    ],
  },
  motos: {
    title: 'Para aprofundar: manutenção e segurança pesam mais na moto usada',
    intro: 'Motos têm componentes de desgaste muito expostos e pequenas negligências podem virar risco de segurança. Por isso, estado real pesa muito na compra.',
    bullets: [
      'Cheque pneus, relação, rolamentos, bengalas, freios, vazamentos e sinais de queda.',
      'Compare autonomia, ergonomia, seguro e custo de peças de desgaste.',
      'Equipamentos e acessórios só agregam valor quando instalação e procedência são boas.',
    ],
  },
  mecanica: {
    title: 'Para aprofundar: diagnosticar é eliminar hipóteses',
    intro: 'Mecânica fica mais simples quando sintomas são ligados a sistemas: combustível, ignição, compressão, arrefecimento, lubrificação, carga elétrica e transmissão.',
    bullets: [
      'Comece pelo básico e barato antes de trocar peças por tentativa.',
      'Ruído, cheiro, temperatura, vibração e condição em que o problema aparece são pistas importantes.',
      'Scanner ajuda, mas código de falha não é automaticamente a peça que precisa ser substituída.',
    ],
  },
  nautica: {
    title: 'Para aprofundar: o custo náutico é recorrente',
    intro: 'Embarcação parada também custa. Marina, limpeza, motor, casco, seguro, documentação e prevenção contra corrosão continuam existindo mesmo com pouco uso.',
    bullets: [
      'Calcule marina por comprimento da embarcação e confirme o que a mensalidade inclui.',
      'Motores marítimos exigem atenção à refrigeração, combustível, corrosão e períodos de inatividade.',
      'Planejamento de navegação inclui meteorologia, autonomia, equipamentos de segurança e plano de retorno.',
    ],
  },
  viagens: {
    title: 'Para aprofundar: viagem boa começa pela fricção invisível',
    intro: 'Além dos lugares bonitos, o hub acompanha documentação, deslocamento, câmbio, seguro, época, golpes comuns, conectividade e custo real.',
    bullets: [
      'Regras de entrada e visto devem ser verificadas em fonte consular perto da viagem.',
      'Compare custo porta a porta, não apenas passagem ou diária.',
      'Tenha plano para saúde, documentos, dinheiro, internet e retorno em caso de imprevisto.',
    ],
  },
  financas: {
    title: 'Para aprofundar: finanças boas reduzem decisões urgentes',
    intro: 'O objetivo da área não é prometer rentabilidade, mas aumentar margem de escolha: organizar fluxo de caixa, proteger emergências e entender o custo do crédito.',
    bullets: [
      'Provisione despesas anuais para que elas não virem “surpresas”.',
      'Compare taxas pelo custo efetivo total, não pela parcela isolada.',
      'Liquidez, risco e prazo precisam combinar com o objetivo antes de qualquer investimento.',
    ],
  },
  tecnologia: {
    title: 'Para aprofundar: tecnologia é infraestrutura + produto + incentivo',
    intro: 'Uma novidade em IA ou computação só vira mudança ampla quando existem chips, energia, rede, dados, capital, software e um modelo econômico sustentável.',
    bullets: [
      'Separe demonstração técnica de adoção em escala.',
      'Observe custos de inferência, energia, latência, privacidade e integração.',
      'Pergunte quem ganha produtividade e quem assume novos riscos com a tecnologia.',
    ],
  },
  seguranca: {
    title: 'Para aprofundar: ataque moderno atravessa identidade e confiança',
    intro: 'Malware é apenas uma parte do problema. Sessões, help desk, cloud, OAuth, MFA, dispositivos e permissões legítimas podem formar a cadeia de ataque.',
    bullets: [
      'Analise vetor inicial, identidade comprometida, persistência, privilégios e blast radius.',
      'Patching fecha uma falha; não prova que um ambiente previamente exposto não foi comprometido.',
      'Controles phishing-resistant e processos fortes de recuperação de conta reduzem ataques de engenharia social.',
    ],
  },
  'appsec-ssdlc': {
    title: 'Para aprofundar: AppSec precisa produzir decisão',
    intro: 'Ferramentas geram sinais. O programa de segurança precisa transformar esses sinais em prioridade usando exploração ativa, reachability, exposição, criticidade e caminho de ataque.',
    bullets: [
      'CVSS sozinho descreve gravidade potencial, não risco operacional completo.',
      'SBOM, VEX, provenance e assinatura ajudam a entender presença, impacto e origem do software.',
      'Um gate maduro bloqueia risco relevante com evidência, não apenas contagem bruta de findings.',
    ],
  },
};
