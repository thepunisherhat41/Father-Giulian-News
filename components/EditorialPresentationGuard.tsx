'use client';

import { useEffect } from 'react';

const dedicatedHubTitles: Record<string, string> = {
  'Security Briefing': 'security-briefing',
  'AppSec / SSDLC': 'appsec-ssdlc',
  'Games': 'games',
  'Música': 'musica',
  'Carros': 'carros',
  'Motos': 'motos',
  'Segurança ZL': 'seguranca-zl',
};

export default function EditorialPresentationGuard() {
  useEffect(() => {
    const sync = () => {
      const panel = document.querySelector<HTMLElement>('.articlePanel');
      const title = document.querySelector('.stage h1')?.textContent?.trim() ?? '';
      if (!panel) return;
      const hub = dedicatedHubTitles[title];
      if (hub) panel.dataset.dedicatedHub = hub;
      else delete panel.dataset.dedicatedHub;
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
