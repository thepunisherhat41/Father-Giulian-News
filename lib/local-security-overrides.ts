import { dailyContent, todayDrops } from './daily-content';

const slug = 'seguranca-zl';

dailyContent[slug] = {
  title: 'Segurança ZL · 19/08: sem ocorrência nova confirmada no fechamento das 05h',
  summary: 'O feed prioriza hoje, ontem e últimos 7 dias. Na varredura desta madrugada não apareceu publicação nova e suficientemente confirmada sobre roubo, furto ou operação criminal na Zona Leste nas fontes monitoradas. Em vez de reciclar notícia antiga como atual, o hub mantém a última confirmação válida e separa contexto histórico.',
  shareSummary: 'Segurança ZL 19/08 05h: nenhuma nova ocorrência confirmada foi encontrada nas fontes monitoradas. A aba mantém a última notícia validada e separa claramente RECENTE de CONTEXTO.',
  readTime: 'DAILY FEED',
  badge: 'ZONA LESTE / NEWS://RECENT',
  stats: [
    { label: 'HOJE', value: 'SEM NOVO FATO', note: 'confirmado até 05h' },
    { label: 'JANELA RECENTE', value: '7 DIAS', note: 'depois vira contexto' },
    { label: 'REGRA', value: 'SEM BOATO', note: 'fonte + período + área' },
  ],
  sections: [
    { title: 'Status de hoje', paragraphs: ['Nenhuma nova ocorrência ou operação da Zona Leste apareceu com confirmação suficiente nesta varredura. Ausência de publicação não significa ausência de crime; significa apenas que o radar não encontrou um fato novo publicável com qualidade.'] },
    { title: 'Última confirmação recente', paragraphs: ['A atualização de 14 de agosto sobre a investigação do sequestro ocorrido em Artur Alvim continua dentro da janela de 7 dias. Ela permanece rotulada como ocorrência isolada/investigação, nunca como tendência do bairro.'] },
    { title: 'O que continua abaixo no hub', bullets: ['Dados oficiais e recortes de DP/Seccional ficam em CONTEXTO.', 'Operações e infraestrutura pública ficam em AÇÃO.', 'Delegacia Eletrônica e orientações ficam em SERVIÇO.', 'Nenhum ranking próprio de bairro seguro/perigoso é gerado.'] },
  ],
  sources: [
    { label: 'SSP-SP · Estatísticas e serviços', url: 'https://www.ssp.sp.gov.br/estatistica/consultas' },
    { label: 'Prefeitura de São Paulo · Segurança Urbana', url: 'https://prefeitura.sp.gov.br/web/seguranca_urbana' },
  ],
  disclaimer: 'O feed não é monitoramento policial em tempo real. A ausência de notícia nova publicada não significa ausência de ocorrências na região.',
};

const existing = todayDrops.find((drop) => drop.slug === slug);
const drop = {
  label: 'Segurança ZL',
  emoji: '🚨',
  title: 'Segurança ZL 05h: sem nova ocorrência confirmada — feed não recicla notícia velha',
  detail: 'Hoje/ontem/7 dias primeiro; dados antigos ficam como contexto. A última confirmação recente continua identificada com data e área.',
};
if (existing) Object.assign(existing, drop);
else todayDrops.push({ slug, ...drop });

if (dailyContent.hoje) dailyContent.hoje.readTime = `${todayDrops.length} MISSÕES`;
