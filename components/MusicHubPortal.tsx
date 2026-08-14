'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import MusicHub from '@/components/MusicHub';

export default function MusicHubPortal() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const hostId = 'music-hub-host';

    const syncHost = () => {
      const pageTitle = document.querySelector('.stage h1')?.textContent?.trim();
      const intelStack = document.querySelector('.intelStack');
      const existing = document.getElementById(hostId);

      if (pageTitle !== 'Música' || !intelStack) {
        existing?.remove();
        setHost(null);
        return;
      }

      if (existing && existing.previousElementSibling === intelStack) {
        setHost(existing);
        return;
      }

      existing?.remove();
      const nextHost = document.createElement('div');
      nextHost.id = hostId;
      intelStack.insertAdjacentElement('afterend', nextHost);
      setHost(nextHost);
    };

    syncHost();
    const observer = new MutationObserver(syncHost);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });

    return () => {
      observer.disconnect();
      document.getElementById(hostId)?.remove();
    };
  }, []);

  if (!host) return null;
  return createPortal(<MusicHub />, host);
}
