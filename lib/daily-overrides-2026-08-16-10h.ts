import { dailyContent, todayDrops } from './daily-content';
import { politicsTracker } from './politics-2026';

Object.assign(dailyContent.hoje, {
  badge: '10H INTELLIGENCE UPDATE',
  summary: 'A edição-base continua válida. Na revisão das 10h, Política foi atualizada para a campanha já em curso e para os canais oficiais de fiscalização; em Carros, o radar foi corrigido para excluir 1.0 e manter o teto de R$ 70 mil.',
});

const politicsDrop = todayDrops.find((item) => item.slug === 'politica');
if (politicsDrop) Object.assign(politicsDrop, {
  title: 'Campanha eleitoral já está valendo; IA e propaganda têm regras próprias',
  detail: 'Desde hoje a propaganda geral é permitida. Conteúdo sintético precisa seguir regras de transparência, e o Pardal passa a receber denúncias de irregularidades.',
});

Object.assign(politicsTracker, {
  updatedAt: '16/08/2026 · 10h',
  notice: 'A propaganda eleitoral geral está permitida desde hoje, inclusive na internet. O prazo de pedidos de registro terminou ontem às 19h, mas pedido apresentado não equivale a deferimento. O status jurídico individual continua sendo acompanhado no DivulgaCandContas. O Pardal Móvel também está disponível a partir de hoje para denúncias de propaganda irregular.',
});

Object.assign(dailyContent.politica, {
  title: '10h: campanha começou — agora também vale observar IA, propaganda irregular e status jurídico',
  summary: 'A partir de 16 de agosto, candidaturas e partidos podem fazer propaganda eleitoral nas ruas e na internet dentro das regras do TSE. Nesta revisão, a página acrescenta duas dimensões práticas: transparência no uso de conteúdo sintético/IA e o uso do Pardal para denúncias. O pedido de registro continua sendo tratado separadamente do julgamento pela Justiça Eleitoral.',
  shareSummary: 'Política 10h: a campanha eleitoral já está valendo. O TSE exige transparência para conteúdo sintético/IA e o Pardal passa a receber denúncias de propaganda irregular. Pedido de registro continua não sendo sinônimo de deferimento.',
  readTime: '8 MIN READ',
  badge: 'POLÍTICA / 10H UPDATE',
  stats: [
    { label: 'PROPAGANDA', value: 'LIBERADA' },
    { label: 'PARDAL', value: 'ATIVO' },
    { label: 'REGISTRO', value: 'EM JULGAMENTO' },
  ],
  sections: [
    {
      title: 'O que efetivamente mudou hoje',
      paragraphs: ['A propaganda eleitoral geral passou a ser permitida em 16 de agosto, inclusive na internet. Isso muda o que candidaturas, partidos e apoiadores podem fazer publicamente, mas não elimina limites legais de formato, impulsionamento, desinformação e uso de inteligência artificial.'],
    },
    {
      title: 'IA na campanha: o cidadão deve procurar transparência',
      paragraphs: ['As regras eleitorais de 2026 exigem identificação explícita e acessível quando propaganda usa conteúdo sintético multimídia criado ou significativamente alterado por IA ou tecnologia equivalente. Deepfakes e conteúdos manipulados que desequilibrem o processo eleitoral estão sujeitos às regras específicas do TSE.'],
      bullets: ['Desconfie de áudio ou vídeo sem origem verificável.', 'Procure indicação de uso de IA quando o conteúdo for sintético ou significativamente alterado.', 'Compare alegações sobre candidatos com documentos, decisões e fontes primárias antes de compartilhar.'],
    },
    {
      title: 'Como isso afeta a população agora',
      paragraphs: ['Para o eleitor comum, a principal mudança é que o volume de publicidade política aumenta e, com ele, cresce a necessidade de distinguir proposta, propaganda, montagem e informação oficial. O Pardal Móvel está disponível a partir de hoje para encaminhar denúncias de propaganda irregular, com autenticação pelo e-Título ou Gov.br.'],
    },
    {
      title: 'Registro ainda precisa ser acompanhado',
      paragraphs: ['O encerramento do prazo para requerer registro não transforma automaticamente todos os pedidos em candidaturas deferidas. A situação individual deve ser verificada no DivulgaCandContas, onde podem aparecer análise, deferimento, indeferimento, recurso, renúncia ou substituição conforme cada processo.'],
    },
  ],
  sources: [
    { label: 'TSE · Calendário Eleitoral 2026 · 16/08', url: 'https://www.tse.jus.br/eleicoes/calendario-eleitoral/calendario-eleitoral' },
    { label: 'TSE · regras de propaganda e uso de IA em 2026', url: 'https://www.tse.jus.br/comunicacao/noticias/2026/Julho/saiba-quando-comeca-a-propaganda-eleitoral-e-conheca-as-novas-regras-para-as-eleicoes-2026' },
    { label: 'TSE · Pardal para propaganda irregular', url: 'https://www.tse.jus.br/comunicacao/noticias/2026/Julho/tse-regulamenta-uso-do-aplicativo-pardal-para-denuncias-de-propaganda-eleitoral-irregular-nas-eleicoes-2026' },
    { label: 'TSE · DivulgaCandContas', url: 'https://www.tse.jus.br/administracao/painel/divulgacao-de-candidaturas-e-contas-eleitorais' },
  ],
});
