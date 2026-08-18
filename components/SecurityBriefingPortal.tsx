'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import SecurityBriefingHub from './SecurityBriefingHub';

export default function SecurityBriefingPortal() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const id = 'team-briefing-host';
    const sync = () => {
      const title = document.querySelector('.stage h1')?.textContent?.trim();
      const stack = document.querySelector('.intelStack');
      const old = document.getElementById(id);
      if (title !== 'Security Briefing' || !stack) {
        old?.remove();
        setHost(null);
        return;
      }
      if (old) {
        setHost(old);
        return;
      }
      const node = document.createElement('div');
      node.id = id;
      stack.insertAdjacentElement('afterend', node);
      setHost(node);
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      document.getElementById(id)?.remove();
    };
  }, []);

  return host ? createPortal(<SecurityBriefingHub />, host) : null;
}
