import { dailyContent } from './daily-content';

const set = (slug: string, data: any) => Object.assign(dailyContent[slug], data);

set('seguranca', {
  title: 'Zimbra entra em alerta máximo: falha sem autenticação está sendo explorada',
  summary: 'A CISA colocou a CVE-2026-73570 no catálogo de exploração conhecida. A falha de command injection pode levar a execução remota de código sem autenticação quando notificações SNMP estão habilitadas.',
  shareSummary: 'Cyber 24/08: CVE-2026-73570 no Zimbra está sob exploração ativa. A falha pode permitir RCE sem autenticação em cenários com SNMP notifications habilitadas.',
  readTime: '6 MIN',
  badge: 'CYBER · HOJE 24/08',
  sections: [
    {
      title: 'O que foi confirmado',
      paragraphs: ['A vulnerabilidade afeta o Zimbra Collaboration Suite e foi corrigida na versão 10.1.20. A CISA adicionou a falha ao Known Exploited Vulnerabilities Catalog após relatos de exploração em ambiente real.'],
      bullets: ['CVE-2026-73570.', 'Command injection.', 'Exploração sem autenticação em configuração afetada.', 'Impacto potencial: execução de comandos como usuário Zimbra.'],
    },
    {
      title: 'O que fazer',
      bullets: ['Confirmar imediatamente versão e exposição de qualquer Zimbra corporativo.', 'Aplicar a versão corrigida/advisory do fornecedor.', 'Não parar no patch: revisar logs e indicadores porque exploração já foi observada.', 'Dar prioridade máxima a instâncias expostas à internet e com SNMP notifications habilitadas.'],
    },
  ],
  sources: [
    { label: 'BleepingComputer · 24/08/2026', url: 'https://www.bleepingcomputer.com/news/security/cisa-orders-urgent-patching-of-actively-exploited-zimbra-flaw/' },
    { label: 'CISA · KEV · CVE-2026-73570', url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog?field_cve=CVE-2026-73570' },
  ],
});

set('appsec-ssdlc', {
  title: 'Pacote npm malicioso publicado hoje reforça risco além de CVE: conversa-sdk exige resposta de incidente',
  summary: 'Um advisory do GitHub publicado em 24/08 classifica o pacote conversa-sdk como malware. A recomendação é tratar sistemas que instalaram ou executaram o pacote como potencialmente comprometidos e rotacionar segredos a partir de um ambiente limpo.',
  shareSummary: 'AppSec 24/08: o npm conversa-sdk foi classificado como malware em advisory publicado hoje. Presença do pacote deve acionar resposta de supply chain, não apenas triagem de CVSS.',
  readTime: '6 MIN',
  badge: 'APPSEC · SUPPLY CHAIN · 24/08',
  sections: [
    {
      title: 'Por que isso é diferente de uma CVE',
      paragraphs: ['Aqui o problema não é uma biblioteca legítima com uma falha acidental: o componente é tratado como malicioso. Isso muda o fluxo de resposta de vulnerability management para incident response e integridade da cadeia.'],
      bullets: ['Pesquisar o pacote em manifests, lockfiles, caches e builds.', 'Identificar máquinas/runners que executaram instalação.', 'Rotacionar segredos a partir de ambiente não comprometido.', 'Revisar logs, egress e credenciais acessíveis ao processo de build.'],
    },
    {
      title: 'Aplicação para AppSec',
      paragraphs: ['O gate precisa distinguir vulnerability risk de supply-chain integrity risk. Um pacote malicioso não deveria esperar o mesmo SLA de um Medium comum só porque não possui CVSS tradicional.'],
      bullets: ['SCA + malicious-package advisories.', 'SBOM para localizar blast radius.', 'Egress restrito em runners.', 'Credenciais efêmeras no CI/CD.', 'Política para scripts de instalação.'],
    },
  ],
  sources: [
    { label: 'GitHub Advisory · GHSA-8m82-6fp4-38m4 · 24/08/2026', url: 'https://github.com/advisories/GHSA-8m82-6fp4-38m4' },
    { label: 'Supply Chain Attack Catalog · 24/08/2026', url: 'https://supplychainattack.org/incident/malware-in-conversa-sdk-wa1fzi' },
  ],
});

set('security-briefing', {
  title: 'Security Briefing de hoje: Zimbra explorado + malware em npm elevam prioridade de patch e supply chain',
  summary: 'O briefing de 24/08 conecta duas frentes operacionais: exploração ativa de RCE no Zimbra e advisory de pacote npm malicioso. Uma pede caça a comprometimento em ativo exposto; a outra exige rastrear builds, runners e segredos.',
  shareSummary: 'Security Briefing 24/08: Zimbra CVE-2026-73570 sob exploração ativa e novo pacote npm classificado como malware reforçam patching orientado a exploração e resposta de supply chain.',
  readTime: '7 MIN',
  badge: 'SECURITY BRIEFING · HOJE 24/08',
  sections: [
    { title: 'Prioridade 1 — ativo exposto', bullets: ['Localizar Zimbra.', 'Confirmar versão/configuração.', 'Patch imediato.', 'Threat hunt pós-patch porque exploração já foi registrada.'] },
    { title: 'Prioridade 2 — cadeia de desenvolvimento', bullets: ['Pesquisar conversa-sdk em todos os repos e lockfiles.', 'Verificar runners que executaram o pacote.', 'Rotacionar segredos potencialmente expostos.', 'Tratar pacote malicioso como incidente, não apenas finding de SCA.'] },
  ],
  sources: [
    { label: 'BleepingComputer · Zimbra · 24/08/2026', url: 'https://www.bleepingcomputer.com/news/security/cisa-orders-urgent-patching-of-actively-exploited-zimbra-flaw/' },
    { label: 'GitHub Advisory · conversa-sdk · 24/08/2026', url: 'https://github.com/advisories/GHSA-8m82-6fp4-38m4' },
  ],
});
