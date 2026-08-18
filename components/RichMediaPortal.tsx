'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { genericMediaFallback, richMediaByLabel, type RichMediaEntry } from '@/lib/rich-media';

function VisualPanel({ media }: { media: RichMediaEntry }) {
  return (
    <section className="dailyRichMedia" aria-label={`Mídia visual de ${media.label}`}>
      <div className="dailyMediaArt" role="img" aria-label={media.title}>
        <svg viewBox="0 0 1200 520" aria-hidden="true">
          <defs>
            <linearGradient id="daily-media-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#050a08" />
              <stop offset=".52" stopColor="#071813" />
              <stop offset="1" stopColor="#12152a" />
            </linearGradient>
            <radialGradient id="daily-media-glow" cx="78%" cy="24%" r="58%">
              <stop offset="0" stopColor="#27ff9a" stopOpacity=".25" />
              <stop offset="1" stopColor="#27ff9a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1200" height="520" fill="url(#daily-media-bg)" />
          <rect width="1200" height="520" fill="url(#daily-media-glow)" />
          {Array.from({ length: 11 }).map((_, row) => <line key={row} x1="0" x2="1200" y1={45 + row * 44} y2={45 + row * 44} stroke="#d9fff3" strokeOpacity=".045" />)}
          <circle cx="930" cy="165" r="105" fill="none" stroke="#27ff9a" strokeOpacity=".2" strokeWidth="2" />
          <circle cx="930" cy="165" r="65" fill="none" stroke="#8f77ff" strokeOpacity=".16" strokeWidth="12" />
          <path d="M100 395 C210 330 300 405 410 324 S620 370 730 278 S930 330 1080 240" fill="none" stroke="#27ff9a" strokeOpacity=".72" strokeWidth="4" />
        </svg>
        <div className="dailyMediaCopy">
          <span>{media.icon}</span>
          <small>{media.tag}</small>
          <strong>{media.title}</strong>
          <p>{media.caption}</p>
        </div>
        <div className="dailyMediaSweep" aria-hidden="true" />
      </div>

      <div className="dailyMediaVideo">
        <div>
          <small>VIDEO / FONTE AUDIOVISUAL</small>
          <strong>{media.videoLabel}</strong>
          <p>Material complementar para aprofundar o tema. A matéria e as fontes verificadas continuam sendo a referência principal.</p>
        </div>
        {media.youtubeId ? (
          <iframe title={`${media.label} · vídeo`} src={`https://www.youtube-nocookie.com/embed/${media.youtubeId}?rel=0`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        ) : (
          <a href={media.videoHref} target="_blank" rel="noreferrer">ABRIR CONTEÚDO VISUAL ↗</a>
        )}
      </div>
    </section>
  );
}

export default function RichMediaPortal() {
  const [host, setHost] = useState<HTMLElement | null>(null);
  const [media, setMedia] = useState<RichMediaEntry | null>(null);

  useEffect(() => {
    const id = 'daily-rich-media-host';
    const special = new Set(['Hoje', 'Música', 'Games', 'AppSec / SSDLC', 'Security Briefing']);
    const sync = () => {
      const title = document.querySelector('.stage h1')?.textContent?.trim() ?? '';
      const summary = document.querySelector('.articleSummary');
      const old = document.getElementById(id);
      if (!title || special.has(title) || !summary) {
        old?.remove();
        setHost(null);
        setMedia(null);
        return;
      }
      setMedia(richMediaByLabel[title] ?? { ...genericMediaFallback, label: title });
      if (old) {
        setHost(old);
        return;
      }
      const node = document.createElement('div');
      node.id = id;
      summary.insertAdjacentElement('afterend', node);
      setHost(node);
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => {
      observer.disconnect();
      document.getElementById(id)?.remove();
    };
  }, []);

  return host && media ? createPortal(<VisualPanel media={media} />, host) : null;
}
