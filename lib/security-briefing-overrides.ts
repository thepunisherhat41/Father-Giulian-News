import { dailyContent, todayDrops } from './daily-content';

Object.assign(dailyContent, {
  'security-briefing': {
    title: 'Security Briefing: o que vale levar para o time hoje',
    summary: 'Uma seleção compartilhável que cruza segurança, tecnologia e negócio: AI Security, AppSec, identidade, vulnerabilidades, supply chain, dados, governança e produto seguro.',
    shareSummary: 'Security Briefing: sinais técnicos traduzidos em impacto para negócio e ações práticas, com fontes e frameworks para compartilhar com o time.',
    readTime: '8 SINAIS',
    badge: 'TEAM SECURITY / SHARE READY',
    stats: [
      { label: 'SINAIS', value: '08', note: 'curadoria inicial' },
      { label: 'MODOS', value: 'EXEC + TECH', note: 'dois níveis de share' },
      { label: 'FOCO', value: 'TECH + BUSINESS' },
    ],
    sections: [
      { title: 'Como usar esta aba', bullets: ['Executive View: resumo curto para gestão, produto e stakeholders.', 'Technical View: contexto, ação sugerida e frameworks para o time técnico.', 'Cada card tem fonte verificável, público-alvo e botão para copiar/compartilhar.'] },
      { title: 'O que entra no radar', bullets: ['AI Security e Agentic AI.', 'AppSec, SSDLC, APIs e CI/CD.', 'IAM, Cloud, Vulnerability Management e Threat Intel.', 'Supply Chain, Data/Privacy, GRC e impactos de negócio.'] },
      { title: 'Regra editorial', paragraphs: ['Notícia só entra quando existe relevância prática. Hype de fornecedor, rumor e afirmação sem fonte não viram recomendação. Quando um item é orientação de framework ou conteúdo de referência, ele é rotulado como tal em vez de fingir que é breaking news.'] },
    ],
    sources: [
      { label: 'OWASP GenAI Security Project', url: 'https://genai.owasp.org/' },
      { label: 'CISA · Cybersecurity', url: 'https://www.cisa.gov/topics/cybersecurity-best-practices' },
      { label: 'NIST · Computer Security Resource Center', url: 'https://csrc.nist.gov/' },
    ],
  },
});

if (!todayDrops.some((drop) => drop.slug === 'security-briefing')) {
  todayDrops.push({
    slug: 'security-briefing',
    label: 'Security Briefing',
    emoji: '📰',
    title: '8 sinais de segurança, tecnologia e negócio prontos para compartilhar',
    detail: 'Executive View, Technical View, fontes, frameworks e ações práticas para o time.',
  });
}

if (dailyContent.hoje) {
  dailyContent.hoje.readTime = '21 MISSÕES';
  if (/^\d+\s+missões/i.test(dailyContent.hoje.title)) {
    dailyContent.hoje.title = dailyContent.hoje.title.replace(/^\d+\s+missões/i, '21 missões');
  }
}
