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
  'ai-assisted-pentest': {
    url: 'https://genai.owasp.org/wp-content/uploads/2025/08/red-teaming-initiative-banner-img.png',
    alt: 'Banner oficial da OWASP AI Red Teaming Initiative',
    caption: 'Banner oficial da iniciativa OWASP dedicada a AI Red Teaming.',
    credit: 'OWASP GenAI Security Project · AI Red Teaming Initiative',
    sourceUrl: 'https://genai.owasp.org/initiatives/ai-red-teaming-initiative/',
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
  'continuous-validation': {
    url: 'https://genai.owasp.org/wp-content/uploads/2026/04/Cheat-Sheet-Red-Teaming-AI-Solution-Landscape-Q226.jpg',
    alt: 'Capa oficial OWASP AI and Agentic Red Teaming Solution Landscape Q2 2026',
    caption: 'Referência visual oficial para a ideia de reavaliação contínua de sistemas de IA e agentes.',
    credit: 'OWASP GenAI Security Project · Q2 2026',
    sourceUrl: 'https://genai.owasp.org/resource/ai-security-solutions-landscape-for-ai-and-agentic-red-teaming-q2-2026/',
  },
};
