export type AppSecPostMedia = {
  url: string;
  alt: string;
  caption: string;
  credit: string;
  sourceUrl: string;
};

export const appSecPostMedia: Record<string, AppSecPostMedia> = {
  'ai-pentest-lifecycle': {
    url: 'https://genai.owasp.org/wp-content/uploads/2026/04/Cheat-Sheet-Red-Teaming-AI-Solution-Landscape-Q226.jpg',
    alt: 'Capa oficial OWASP AI and Agentic Red Teaming Solution Landscape Q2 2026',
    caption: 'Material oficial associado ao post sobre avaliação adversarial de IA ao longo do SSDLC.',
    credit: 'OWASP GenAI Security Project · Q2 2026',
    sourceUrl: 'https://genai.owasp.org/resource/ai-security-solutions-landscape-for-ai-and-agentic-red-teaming-q2-2026/',
  },
  'agent-authorization': {
    url: 'https://genai.owasp.org/wp-content/uploads/2026/03/Cover-Cheat-Sheet-Agentic-AI-Solution-Landscape-Q2-2026.jpg',
    alt: 'Capa oficial OWASP Agentic AI Solution Landscape Q2 2026',
    caption: 'Capa oficial do panorama OWASP para segurança de sistemas Agentic AI.',
    credit: 'OWASP GenAI Security Project · Q2 2026',
    sourceUrl: 'https://genai.owasp.org/resource/ai-security-solutions-landscape-for-agentic-ai-q2-2026/',
  },
  'rag-trust-boundary': {
    url: 'https://genai.owasp.org/wp-content/uploads/2026/03/Cover-OWASP-GenAI-Data-Security-Risks-and-Mitigations-2026-v1.0.jpg',
    alt: 'Capa oficial OWASP GenAI Data Security Risks and Mitigations 2026',
    caption: 'Guia oficial que fundamenta o post sobre autorização, RAG e fronteiras de dados.',
    credit: 'OWASP GenAI Security Project · 2026',
    sourceUrl: 'https://genai.owasp.org/resource/owasp-genai-data-security-risks-mitigations-2026/',
  },
};
