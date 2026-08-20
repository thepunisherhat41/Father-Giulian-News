export type AppSecPostMedia = {
  url: string;
  alt: string;
  caption: string;
  credit: string;
  sourceUrl: string;
};

const nistSsdf = 'https://www.nist.gov/sites/default/files/styles/social/public/images/2025/07/25/SSDF%20circle.png?itok=oZtEpnbD';
const owaspRedTeam = 'https://genai.owasp.org/wp-content/uploads/2026/04/Cheat-Sheet-Red-Teaming-AI-Solution-Landscape-Q226.jpg';
const owaspAgentic = 'https://genai.owasp.org/wp-content/uploads/2026/03/Cover-Cheat-Sheet-Agentic-AI-Solution-Landscape-Q2-2026.jpg';
const owaspData = 'https://genai.owasp.org/wp-content/uploads/2026/03/Cover-OWASP-GenAI-Data-Security-Risks-and-Mitigations-2026-v1.0.jpg';

export const appSecPostMedia: Record<string, AppSecPostMedia> = {
  'ai-pentest-lifecycle': {
    url: owaspRedTeam,
    alt: 'Capa oficial OWASP AI and Agentic Red Teaming Solution Landscape Q2 2026',
    caption: 'Material oficial associado à avaliação adversarial de IA ao longo do SSDLC.',
    credit: 'OWASP GenAI Security Project · Q2 2026',
    sourceUrl: 'https://genai.owasp.org/resource/ai-security-solutions-landscape-for-ai-and-agentic-red-teaming-q2-2026/',
  },
  'ai-assisted-pentest': {
    url: owaspRedTeam,
    alt: 'Capa oficial do panorama OWASP de soluções de AI e Agentic Red Teaming',
    caption: 'IA pode ampliar hipóteses e cobertura de teste, mas finding continua exigindo reprodução, evidência e validação humana.',
    credit: 'OWASP GenAI Security Project · Q2 2026',
    sourceUrl: 'https://genai.owasp.org/initiatives/ai-red-teaming-initiative/',
  },
  'agent-authorization': {
    url: owaspAgentic,
    alt: 'Capa oficial OWASP Agentic AI Solution Landscape Q2 2026',
    caption: 'O panorama OWASP ajuda a visualizar a nova superfície de agentes, tools, identidade e autorização.',
    credit: 'OWASP GenAI Security Project · Q2 2026',
    sourceUrl: 'https://genai.owasp.org/resource/ai-security-solutions-landscape-for-agentic-ai-q2-2026/',
  },
  'rag-trust-boundary': {
    url: owaspData,
    alt: 'Capa oficial OWASP GenAI Data Security Risks and Mitigations 2026',
    caption: 'Guia oficial relacionado a autorização, isolamento de dados, RAG, retenção e fronteiras de confiança.',
    credit: 'OWASP GenAI Security Project · 2026',
    sourceUrl: 'https://genai.owasp.org/resource/owasp-genai-data-security-risks-mitigations-2026/',
  },
  'security-gate-context': {
    url: 'https://img2.helpnetsecurity.com/posts2022/CISA-KEV-Catalog.jpg',
    alt: 'Captura da interface do catálogo Known Exploited Vulnerabilities da CISA',
    caption: 'KEV é um dos sinais que ajudam a transformar severidade técnica em urgência operacional baseada em exploração real.',
    credit: 'CISA KEV · captura de referência',
    sourceUrl: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog',
  },
  'sbom-provenance': {
    url: nistSsdf,
    alt: 'Diagrama circular oficial do NIST Secure Software Development Framework',
    caption: 'SBOM, provenance e verificação de artefato fazem parte de um ciclo maior de desenvolvimento e entrega segura.',
    credit: 'NIST · Secure Software Development Framework',
    sourceUrl: 'https://csrc.nist.gov/pubs/sp/800/218/final',
  },
  'api-object-auth': {
    url: owaspData,
    alt: 'Capa de material OWASP sobre segurança de dados em aplicações modernas',
    caption: 'Autorização precisa acontecer antes de devolver o objeto, documento ou contexto solicitado — autenticação sozinha não resolve ownership.',
    credit: 'OWASP · referência visual de segurança de dados',
    sourceUrl: 'https://owasp.org/API-Security/',
  },
  'resource-budgets': {
    url: owaspAgentic,
    alt: 'Capa oficial OWASP sobre ecossistema de segurança de sistemas Agentic AI',
    caption: 'Agentes, tools e APIs precisam de limites explícitos de chamadas, tokens, concorrência, custo e ações de alto impacto.',
    credit: 'OWASP GenAI Security Project · Q2 2026',
    sourceUrl: 'https://owasp.org/API-Security/',
  },
  'ci-trust-boundary': {
    url: nistSsdf,
    alt: 'Diagrama oficial do NIST SSDF mostrando o ciclo de desenvolvimento seguro',
    caption: 'Build, test, release e deploy fazem parte da mesma trust boundary de software; runners e tokens precisam refletir o nível de confiança do código.',
    credit: 'NIST · SSDF',
    sourceUrl: 'https://csrc.nist.gov/pubs/sp/800/218/final',
  },
  'continuous-validation': {
    url: nistSsdf,
    alt: 'Diagrama circular do NIST SSDF enfatizando o ciclo contínuo entre desenvolvimento, teste, release, deploy e operação',
    caption: 'Segurança não termina no release: mudanças em modelo, dependência, policy ou integração precisam disparar revalidação proporcional ao risco.',
    credit: 'NIST · SSDF',
    sourceUrl: 'https://csrc.nist.gov/pubs/sp/800/218/final',
  },
};
