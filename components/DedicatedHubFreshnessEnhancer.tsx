'use client';

import { useEffect } from 'react';
import { editorialFreshnessValidatedAt } from '@/lib/editorial-freshness-current';

export default function DedicatedHubFreshnessEnhancer() {
  useEffect(() => {
    let frame = 0;
    const sync = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const active = document.querySelector<HTMLElement>('.magazineShell')?.dataset.active || '';

        if (active === 'seguranca-zl') {
          document.querySelectorAll<HTMLElement>('.zlTodayPulse span').forEach((node) => {
            if (node.textContent?.includes('Segurança atualizada em') || node.textContent?.includes('Segurança validada em')) {
              node.textContent = `Segurança validada em ${editorialFreshnessValidatedAt} · notícias gerais rechecadas na mesma revisão`;
            }
          });
        }

        if (active === 'security-briefing') {
          document.querySelectorAll<HTMLElement>('.briefingV2Tags b').forEach((node) => {
            if (node.textContent?.trim().startsWith('UPDATED')) node.textContent = `UPDATED ${editorialFreshnessValidatedAt.toUpperCase()}`;
          });
        }

        if (active === 'appsec-ssdlc') {
          const header = document.querySelector<HTMLElement>('.appSecFeedHeader > div:first-child');
          if (header && !header.querySelector('.appSecDailyValidation')) {
            const badge = document.createElement('b');
            badge.className = 'appSecDailyValidation';
            badge.textContent = `VALIDADO HOJE · ${editorialFreshnessValidatedAt}`;
            header.appendChild(badge);
          }
        }
      });
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['data-active'] });
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, []);

  return null;
}
