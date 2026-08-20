'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { inlineMediaForSlug, type EditorialInlineMedia } from '@/lib/editorial-inline-media-2026-08-20';

const dedicatedWithOwnMedia = new Set(['hoje', 'seguranca-zl', 'politica', 'gravidez', 'carros', 'motos', 'musica', 'games', 'security-briefing', 'appsec-ssdlc']);

type Mount = { host: HTMLElement; media: EditorialInlineMedia; slug: string };

function InlineMedia({ media }: { media: EditorialInlineMedia }) {
  return (
    <figure className={`editorialInlineMediaV7 ${media.type === 'YOUTUBE' ? 'video' : ''}`}>
      {media.type === 'YOUTUBE' && media.youtubeId ? (
        <iframe
          title={media.alt}
          src={`https://www.youtube-nocookie.com/embed/${media.youtubeId}`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : media.url ? (
        <a href={media.sourceUrl} target="_blank" rel="noreferrer">
          <img src={media.url} alt={media.alt} loading="lazy" referrerPolicy="no-referrer" />
        </a>
      ) : null}
      <figcaption>
        <span>MÍDIA DO TÓPICO</span>
        <p>{media.caption}</p>
        <a href={media.sourceUrl} target="_blank" rel="noreferrer">{media.credit} ↗</a>
      </figcaption>
    </figure>
  );
}

export default function EditorialInlineMediaEnhancer() {
  const [mount, setMount] = useState<Mount | null>(null);

  useEffect(() => {
    let frame = 0;
    const sync = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const shell = document.querySelector<HTMLElement>('.magazineShell');
        const slug = shell?.dataset.active || '';
        document.querySelectorAll('.editorial-inline-media-host-v7').forEach((node) => {
          if ((node as HTMLElement).dataset.slug !== slug) node.remove();
        });
        if (!slug || dedicatedWithOwnMedia.has(slug)) { setMount(null); return; }
        const media = inlineMediaForSlug(slug);
        const panel = document.querySelector<HTMLElement>('.articlePanel');
        if (!media || !panel) { setMount(null); return; }

        // Não duplica outro componente de mídia que já represente o mesmo artigo.
        const existingRichMedia = panel.querySelector('.dailyRichMedia');
        if (existingRichMedia) { setMount(null); return; }

        let host = panel.querySelector<HTMLElement>(`.editorial-inline-media-host-v7[data-slug="${slug}"]`);
        if (!host) {
          host = document.createElement('div');
          host.className = 'editorial-inline-media-host-v7';
          host.dataset.slug = slug;
          const summary = panel.querySelector('.articleSummary');
          const firstSection = panel.querySelector('.intelSection');
          if (summary) summary.insertAdjacentElement('afterend', host);
          else if (firstSection) panel.insertBefore(host, firstSection);
          else panel.prepend(host);
        }
        setMount({ host, media, slug });
      });
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-active'] });
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, []);

  return mount ? createPortal(<InlineMedia media={mount.media} />, mount.host) : null;
}
