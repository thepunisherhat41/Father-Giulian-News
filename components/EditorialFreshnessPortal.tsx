'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { freshnessForSlug, type EditorialFreshnessEntry } from '@/lib/editorial-freshness-current';

type Mount = { host: HTMLElement; data: EditorialFreshnessEntry; slug: string };

function FreshnessStrip({ data }: { data: EditorialFreshnessEntry }) {
  return (
    <aside className="editorialFreshnessV8" aria-label="Status de atualização editorial">
      <div>
        <span className={data.state === 'ATUALIZADO' ? 'live' : 'checked'}>{data.state === 'ATUALIZADO' ? '● ATUALIZADO HOJE' : '✓ VALIDADO HOJE'}</span>
        <strong>{data.validatedAt}</strong>
      </div>
      <p>{data.note}</p>
    </aside>
  );
}

export default function EditorialFreshnessPortal() {
  const [mount, setMount] = useState<Mount | null>(null);

  useEffect(() => {
    let frame = 0;
    const sync = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const shell = document.querySelector<HTMLElement>('.magazineShell');
        const slug = shell?.dataset.active || '';
        document.querySelectorAll('.editorial-freshness-host-v8').forEach((node) => {
          if ((node as HTMLElement).dataset.slug !== slug) node.remove();
        });
        if (!slug || slug === 'hoje') { setMount(null); return; }
        const data = freshnessForSlug(slug);
        const cover = document.querySelector<HTMLElement>('.stage');
        if (!data || !cover) { setMount(null); return; }
        let host = document.querySelector<HTMLElement>(`.editorial-freshness-host-v8[data-slug="${slug}"]`);
        if (!host) {
          host = document.createElement('div');
          host.className = 'editorial-freshness-host-v8';
          host.dataset.slug = slug;
          cover.insertAdjacentElement('afterend', host);
        }
        setMount({ host, data, slug });
      });
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-active'] });
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, []);

  return mount ? createPortal(<FreshnessStrip data={mount.data} />, mount.host) : null;
}
