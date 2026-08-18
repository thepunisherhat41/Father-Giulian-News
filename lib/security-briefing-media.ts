export type SecurityBriefingMedia = {
  url: string;
  alt: string;
  caption: string;
  credit: string;
  sourceUrl: string;
};

export const securityBriefingMedia: Record<string, SecurityBriefingMedia> = {
  'storm-2949-cloud-identity': {
    url: 'https://www.microsoft.com/en-us/security/blog/wp-content/uploads/2026/05/image-79.webp',
    alt: 'Diagrama oficial da Microsoft mostrando a cadeia de ataque Storm-2949 de SSPR até exfiltração em Azure',
    caption: 'Cadeia real documentada pela Microsoft: identidade/SSPR, Entra ID, Microsoft 365, Azure control plane, Key Vault, VMs e exfiltração.',
    credit: 'Microsoft Defender Security Research Team · 18 Mai 2026',
    sourceUrl: 'https://www.microsoft.com/en-us/security/blog/2026/05/18/storm-2949-turned-compromised-identity-into-cloud-wide-breach/',
  },
  'mastra-npm-supply-chain': {
    url: 'https://www.microsoft.com/en-us/security/blog/wp-content/uploads/2026/06/image-30.webp',
    alt: 'Diagrama oficial da Microsoft da cadeia de comprometimento Mastra npm',
    caption: 'Attack chain oficial: takeover de conta npm, typosquat, injeção massiva de dependência, postinstall e implantação de segundo estágio.',
    credit: 'Microsoft Threat Intelligence · 17 Jun 2026',
    sourceUrl: 'https://www.microsoft.com/en-us/security/blog/2026/06/17/postinstall-payload-inside-mastra-npm-supply-chain-compromise/',
  },
  'ai-assisted-vulnerability-management': {
    url: 'https://storage.googleapis.com/gweb-cloudblog-publish/images/Demystifying_AI_image5.max-1300x1300.png',
    alt: 'Diagrama oficial da Mandiant sobre integração de risk-based vulnerability management',
    caption: 'Figura do blueprint da Mandiant mostrando pontos de integração de um programa de vulnerability management orientado a risco e assistido por IA.',
    credit: 'Google Cloud / Mandiant · 16 Jul 2026',
    sourceUrl: 'https://cloud.google.com/blog/topics/threat-intelligence/ai-assisted-vulnerability-management/',
  },
  'open-source-supply-chain-2026': {
    url: 'https://storage.googleapis.com/gweb-cloudblog-publish/images/BattenDownYourPackages_1.max-1000x1000.png',
    alt: 'Figura oficial GTIG e Mandiant com compromissos relevantes de open source supply chain em 2025 e início de 2026',
    caption: 'Mapa oficial de incidentes usado pelo GTIG/Mandiant para contextualizar o crescimento de compromissos em repositórios, dependências e ferramentas de desenvolvimento.',
    credit: 'Google Threat Intelligence Group / Mandiant · 30 Jul 2026',
    sourceUrl: 'https://cloud.google.com/blog/topics/threat-intelligence/mitigation-guidance-for-supply-chain-compromise',
  },
  'gentlemen-ransomware': {
    url: 'https://www.microsoft.com/en-us/security/blog/wp-content/uploads/2026/05/Gentlemen-ransomware-featured.webp',
    alt: 'Imagem editorial oficial da Microsoft para a pesquisa The Gentlemen ransomware',
    caption: 'Imagem da própria pesquisa Microsoft Threat Intelligence sobre o RaaS The Gentlemen e seu mecanismo de propagação lateral.',
    credit: 'Microsoft Threat Intelligence · 28 Mai 2026',
    sourceUrl: 'https://www.microsoft.com/en-us/security/blog/2026/05/28/the-gentlemen-ransomware-dissecting-a-self-propagating-go-encryptor/',
  },
};
