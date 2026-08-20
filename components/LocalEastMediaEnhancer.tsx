'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { localEastNews, type LocalEastNewsItem } from '@/lib/local-east-news';

type Mount = { item: LocalEastNewsItem; mediaHost?: HTMLElement; detailHost: HTMLElement };

function NewsMedia({ item }: { item: LocalEastNewsItem }) {
  if (!item.media) return null;
  if (item.media.type === 'YOUTUBE' && item.media.youtubeId) {
    return (
      <figure className="zlInlineRealMedia video">
        <iframe
          title={item.media.alt}
          src={`https://www.youtube-nocookie.com/embed/${item.media.youtubeId}`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <figcaption><a href={item.media.sourceUrl} target="_blank" rel="noreferrer">Vídeo · {item.media.credit} ↗</a></figcaption>
      </figure>
    );
  }
  if (item.media.type === 'IMAGE' && item.media.url) {
    return (
      <figure className="zlInlineRealMedia">
        <a href={item.media.sourceUrl} target="_blank" rel="noreferrer">
          <img src={item.media.url} alt={item.media.alt} loading="lazy" referrerPolicy="no-referrer" />
        </a>
        <figcaption>Imagem · {item.media.credit}</figcaption>
      </figure>
    );
  }
  return null;
}

function DeepRead({ item }: { item: LocalEastNewsItem }) {
  return (
    <section className="zlRegionalDeepRead">
      <div className="zlRegionalDeepReadTop"><small>LEITURA AMPLIADA</small><span>{item.sourceKind}</span></div>
      <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
      {item.watchNext && <div className="zlWatchNext"><small>O QUE ACOMPANHAR</small><p>{item.watchNext}</p></div>}
    </section>
  );
}

export default function LocalEastMediaEnhancer() {
  const [mounts, setMounts] = useState<Mount[]>([]);

  useEffect(() => {
    let frame = 0;
    const sync = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const next: Mount[] = [];
        document.querySelectorAll<HTMLElement>('.zlRegionalNewsCard').forEach((card) => {
          const title = card.querySelector('h4')?.textContent?.trim();
          if (!title) return;
          const item = localEastNews.find((candidate) => candidate.title === title);
          if (!item) return;

          let detailHost = card.querySelector<HTMLElement>(':scope .zlRegionalDeepReadHost');
          if (!detailHost) {
            detailHost = document.createElement('div');
            detailHost.className = 'zlRegionalDeepReadHost';
            const actions = card.querySelector('.zlRegionalActions');
            actions?.parentElement?.insertBefore(detailHost, actions);
          }

          let mediaHost: HTMLElement | undefined;
          if (item.media) {
            const visual = card.querySelector<HTMLElement>('.zlRegionalVisual');
            if (visual) {
              visual.classList.add('hasRealMedia');
              mediaHost = visual.querySelector<HTMLElement>(':scope .zlInlineRealMediaHost') ?? undefined;
              if (!mediaHost) {
                mediaHost = document.createElement('div');
                mediaHost.className = 'zlInlineRealMediaHost';
                visual.appendChild(mediaHost);
              }
            }
          }
          next.push({ item, mediaHost, detailHost });
        });
        setMounts(next);
      });
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, []);

  return <>{mounts.flatMap(({ item, mediaHost, detailHost }) => [
    mediaHost ? createPortal(<NewsMedia item={item} />, mediaHost, `${item.id}-media`) : null,
    createPortal(<DeepRead item={item} />, detailHost, `${item.id}-deep`),
  ])}</>;
}
