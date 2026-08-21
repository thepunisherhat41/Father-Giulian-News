import { dailyContent, todayDrops } from './daily-content';

const brasil = dailyContent.brasil;

if (brasil) {
  Object.assign(brasil, {
    title: 'Fim da escala 6x1: Senado destrava a PEC, mas a decisão real ainda começa na CCJ',
    summary: 'O despacho do presidente do Senado tirou a PEC 221/2019 da inércia política, mas não aprovou a mudança. Agora entram relatoria, parecer na CCJ, disputa sobre transição e negociação coletiva e, se houver maioria, dois turnos no Plenário.',
    shareSummary: 'Brasil 21/08: a PEC 221/2019 foi destravada no Senado, mas ainda não está aprovada. Próximos passos: relatoria, CCJ, dois turnos no Plenário e possível retorno à Câmara se o texto mudar.',
    readTime: '12 MIN',
    badge: 'BRASIL · DECISION TRACKER',
    sections: [
      {
        title: 'O que aconteceu de verdade',
        paragraphs: [
          'Davi Alcolumbre assinou/destravou o encaminhamento da PEC 221/2019 para análise no Senado. A proposta veio da Câmara e reduz o teto semanal de 44 para 40 horas, garante dois dias de repouso semanal remunerado e preserva o salário.',
          'Isso ainda NÃO é aprovação pelo Senado. Na consulta pública feita em 21/08, a própria ficha legislativa ainda exibia o estado anterior “aguardando despacho”, enquanto Agência Brasil e imprensa já registravam o movimento político de encaminhamento. A diferença entre sistema legislativo e anúncio político é parte da história, não um detalhe.',
        ],
        bullets: [
          'O texto da Câmara ainda pode ser alterado no Senado.',
          'Se houver mudança material, a PEC volta para a Câmara.',
          'Se o Senado aprovar o mesmo texto em dois turnos, o caminho é a promulgação pelo Congresso.',
        ],
      },
      {
        title: 'O que foi falado no debate',
        paragraphs: [
          'No debate temático do Senado de 1º de julho, defensores da redução de jornada ligaram a 6x1 a exaustão, saúde mental, acidentes, absenteísmo, convívio familiar e capacidade de qualificação. Também argumentaram que produtividade depende de tecnologia, organização e investimento — não apenas de horas trabalhadas.',
          'Representantes do setor produtivo reconheceram a importância de qualidade de vida, mas alertaram que uma regra constitucional uniforme pode pesar de forma muito diferente sobre comércio, hospitais, transportes, agricultura, construção, restaurantes e micro e pequenas empresas. A resposta preferida por parte dessas entidades é transição gradual e negociação coletiva.',
        ],
        bullets: [
          'Governo e movimentos: 40 horas, dois dias de descanso e sem redução salarial.',
          'Setor produtivo: preocupação com cobertura de turnos, custo, competitividade e pequenas empresas.',
          'ANPT: apoia avanço, mas defende transição e negociação coletiva robusta.',
          'Parte da oposição: quer adiar a decisão ou ampliar liberdade contratual.',
        ],
      },
      {
        title: 'Onde está o conflito de verdade',
        bullets: [
          'Não é apenas “trabalhar menos ou trabalhar mais”: o conflito é sobre quem define a regra — Constituição, lei, acordo coletivo ou contrato individual.',
          'A velocidade da transição pode decidir se empresas absorvem o custo com produtividade, reorganização, contratação ou repasse de preços.',
          '“Sem redução salarial” é claro para salário-base, mas remuneração variável, adicionais e modelos por produtividade podem exigir tratamento específico.',
          'Setores 24x7 ou de fim de semana não deixam de operar; precisam redesenhar escala e cobertura.',
        ],
      },
      {
        title: 'Próximos passos',
        bullets: [
          '1. Formalização do encaminhamento e escolha do relator na CCJ.',
          '2. Apresentação de parecer: aprovar, rejeitar ou alterar o texto.',
          '3. Votação na CCJ; emendas podem mudar transição, exceções e negociação coletiva.',
          '4. Se aprovado, votação no Plenário do Senado em dois turnos.',
          '5. São necessários pelo menos 49 votos favoráveis em cada turno.',
          '6. Texto idêntico ao da Câmara pode seguir para promulgação; mudança material faz a PEC voltar à Câmara.',
        ],
      },
      {
        title: 'Decisões possíveis',
        bullets: [
          'Aprovar o texto da Câmara sem mudança material: caminho mais curto para promulgação.',
          'Aprovar com transição mais longa, exceções ou negociação coletiva ampliada: aumenta chance de acomodar setores, mas faz o texto voltar à Câmara.',
          'Adiar a votação: pode empurrar o tema para depois da eleição e reduzir o impulso político.',
          'Construir um meio-termo: 40 horas + dois dias de descanso + transição setorial + regras específicas para atividades contínuas.',
        ],
      },
      {
        title: 'O que acompanhar nos próximos dias',
        bullets: [
          'Nome do relator e primeira versão do parecer na CCJ.',
          'Se a PEC entra no esforço concentrado do Congresso entre 31/08 e 04/09.',
          'Emendas para micro e pequenas empresas, serviços essenciais e atividades 24x7.',
          'Detalhamento de salário, remuneração variável e acordos coletivos existentes.',
          'Se governo e presidência do Senado conseguem montar 49 votos para os dois turnos.',
        ],
      },
    ],
    sources: [
      { label: 'Senado Federal · PEC 221/2019', url: 'https://www25.senado.leg.br/web/atividade/materias/-/materia/174386' },
      { label: 'Senado Federal · debate temático 01/07/2026', url: 'https://legis.senado.leg.br/escriba-servicosweb/sessao/pdf/573297' },
      { label: 'Agência Brasil · Alcolumbre destrava PEC', url: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-08/alcolumbre-destrava-pec-do-fim-da-6x1-apos-conversas-com-lula' },
      { label: 'TV Senado · Fim da 6x1: o que pode mudar?', url: 'https://www.youtube.com/watch?v=XEIUkC9Pff4' },
    ],
  });
}

const drop = todayDrops.find((item) => item.slug === 'brasil');
if (drop) {
  drop.title = 'Fim da escala 6x1: Senado destrava PEC, mas decisão passa por CCJ, dois turnos e possível volta à Câmara';
  drop.detail = 'Veja o que cada lado disse, onde está o conflito, próximos passos e quatro cenários possíveis para a PEC 221/2019.';
}
