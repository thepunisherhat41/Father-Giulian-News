'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import GameHub from '@/components/GameHub';

export default function GameHubPortal() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const hostId = 'game-hub-host';

    const syncHost = () => {
      const pageTitle = document.querySelector('.stage h1')?.textContent?.trim();
      const intelStack = document.querySelector('.intelStack');
      const existing = document.getElementById(hostId);

      if (pageTitle !== 'Games' || !intelStack) {
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
  return createPortal(<GameHub />, host);
}
