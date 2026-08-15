'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import VehicleComparisonHub from '@/components/VehicleComparisonHub';

export default function VehicleComparisonPortal() {
  const [host, setHost] = useState<HTMLElement | null>(null);
  const [type, setType] = useState<'carros' | 'motos' | null>(null);

  useEffect(() => {
    const hostId = 'vehicle-comparison-host';

    const syncHost = () => {
      const pageTitle = document.querySelector('.stage h1')?.textContent?.trim();
      const intelStack = document.querySelector('.intelStack');
      const existing = document.getElementById(hostId);
      const nextType = pageTitle === 'Carros' ? 'carros' : pageTitle === 'Motos' ? 'motos' : null;

      if (!nextType || !intelStack) {
        existing?.remove();
        setHost(null);
        setType(null);
        return;
      }

      setType(nextType);

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

  if (!host || !type) return null;
  return createPortal(<VehicleComparisonHub type={type} />, host);
}
