import { dailyContent, todayDrops } from './daily-content';
import { securityBriefingStories } from './security-briefing-content';

const signalCount = securityBriefingStories.length;
const p0Count = securityBriefingStories.filter((story) => story.priority === 'P0').length;
const actNowCount = securityBriefingStories.filter((story) => story.status === 'ACT NOW').length;

Object.assign(dailyContent, {
  'security-briefing': {
    title: 'Security Intelligence: o que merece decisão do time agora',
    summary: 'Um Command Center compartilhável que cruza threat intelligence, vulnerabilidades, IAM, Cloud, AppSec, supply chain, IA e impacto de negócio. Cada sinal deixa claro por que importa, qual decisão discutir, quais evidências sustentam a leitura e como verificar a exposição do ambiente.',
    shareSummary: `Security Briefing: ${signalCount} sinais source-first organizados por prioridade, impacto e decisão, com Executive View, Technical View e uma fila das conversas mais importantes para o time.`,
    readTime: `${signalCount} SINAIS`,
    badge: 'SECURITY INTELLIGENCE / COMMAND CENTER',
    stats: [
      { label: 'INTEL SET', value: String(signalCount).padStart(2, '0'), note: 'sinais curados' },
      { label: 'P0', value: String(p0Count).padStart(2, '0'), note: 'prioridade imediata' },
      { label: 'ACT NOW', value: String(actNowCount).padStart(2, '0'), note: 'decisões sugeridas' },
    ],
    sections: [
      { title: 'Comece pela Decision Queue', bullets: ['A abertura mostra as três conversas que merecem chegar primeiro ao time.', 'P0/P1 são prioridades editoriais; a decisão real deve considerar exposição, criticidade, privilégio e blast radius.', 'Use “Copiar decisões do dia” para levar o briefing inteiro para Teams ou WhatsApp sem montar resumo manualmente.'] },
      { title: 'Executive View × Technical View', bullets: ['Executive View traduz risco operacional, financeiro, reputacional e a decisão sugerida.', 'Technical View preserva evidência, perguntas de exposição, controles e ações para o time técnico.', 'Filtros por prioridade e pilar permitem chegar rapidamente ao recorte de IAM, Cloud, AppSec, supply chain, IA, vulnerabilidades ou threat intel.'] },
      { title: 'Regra editorial', paragraphs: ['O briefing é source-first e no-clickbait. Incidente observado, vulnerabilidade, tendência, guidance e estratégia são rotulados separadamente. Quando existe pesquisa ou advisory primário, ele prevalece sobre agregadores; mídia visual só entra quando pertence de fato à pesquisa ou ao assunto.'] },
    ],
    sources: [
      { label: 'Microsoft Security / Threat Intelligence', url: 'https://www.microsoft.com/en-us/security/blog/' },
      { label: 'Google Threat Intelligence / Mandiant', url: 'https://cloud.google.com/blog/topics/threat-intelligence' },
      { label: 'CISA · Cybersecurity', url: 'https://www.cisa.gov/topics/cybersecurity-best-practices' },
      { label: 'NIST · Computer Security Resource Center', url: 'https://csrc.nist.gov/' },
      { label: 'OpenAI · Security', url: 'https://openai.com/news/security/' },
    ],
  },
});

const securityDrop = {
  slug: 'security-briefing',
  label: 'Security Briefing',
  emoji: '📰',
  title: `Security Command Center: ${signalCount} sinais, P0/P1 e uma Decision Queue para o time`,
  detail: 'Threat intel, AppSec, IAM, Cloud, supply chain, IA e negócio traduzidos em decisões, evidências e perguntas de exposição — prontos para compartilhar.',
};

const existingSecurityDrop = todayDrops.find((drop) => drop.slug === 'security-briefing');
if (existingSecurityDrop) Object.assign(existingSecurityDrop, securityDrop);
else todayDrops.push(securityDrop);

if (dailyContent.hoje) {
  if (/ATUALIZADAS/i.test(dailyContent.hoje.readTime)) {
    dailyContent.hoje.readTime = dailyContent.hoje.readTime.replace(/^\d+\s+MISSÕES/i, '21 MISSÕES');
  } else {
    dailyContent.hoje.readTime = '21 MISSÕES';
  }
  if (/^\d+\s+missões/i.test(dailyContent.hoje.title)) {
    dailyContent.hoje.title = dailyContent.hoje.title.replace(/^\d+\s+missões/i, '21 missões');
  }
}
