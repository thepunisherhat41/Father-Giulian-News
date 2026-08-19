'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { RichMediaEntry } from '@/lib/rich-media';
import { findCurrentRichMedia } from '@/lib/current-rich-media';

function VisualPanel({ media }: { media: RichMediaEntry }) {
  const [activeImage, setActiveImage] = useState(0);
  const image = media.images[activeImage] ?? media.images[0];

  useEffect(() => setActiveImage(0), [media.title]);

  if (!image) return null;

  return (
    <section className="dailyRichMedia" aria-label={`Mídia real da matéria de ${media.label}`}>
      <div className="dailyMediaHeading">
        <div>
          <span>{media.tag}</span>
          <h3>{media.title}</h3>
          <p>{media.caption}</p>
        </div>
        <b>REAL MEDIA · SOURCE LINKED</b>
      </div>

      <div className="dailyMediaStage">
        <a href={image.sourceUrl} target="_blank" rel="noreferrer" className="dailyMediaImageLink">
          <img src={image.url} alt={image.alt} loading="lazy" referrerPolicy="no-referrer" />
          <div className="dailyMediaImageShade" />
          <span className="dailyMediaKind">{image.kind ?? 'PHOTO'}</span>
        </a>
        <div className="dailyMediaCaption">
          <div>
            <strong>{image.caption}</strong>
            <small>{image.credit}</small>
          </div>
          <a href={image.sourceUrl} target="_blank" rel="noreferrer">FONTE DA IMAGEM ↗</a>
        </div>
      </div>

      {media.images.length > 1 && (
        <div className="dailyMediaGallery" aria-label="Galeria da matéria">
          {media.images.map((item, index) => (
            <button
              key={`${item.url}-${index}`}
              className={activeImage === index ? 'active' : ''}
              onClick={() => setActiveImage(index)}
              type="button"
              aria-label={`Abrir imagem ${index + 1}: ${item.caption}`}
            >
              <img src={item.url} alt="" loading="lazy" referrerPolicy="no-referrer" />
              <span>{String(index + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
      )}

      {(media.relatedHref || media.youtubeId) && (
        <div className="dailyMediaRelated">
          <div>
            <small>APROFUNDAR / FONTE RELACIONADA</small>
            <strong>{media.relatedLabel ?? 'Material relacionado à matéria'}</strong>
          </div>
          {media.youtubeId ? (
            <iframe
              title={`${media.label} · vídeo relacionado`}
              src={`https://www.youtube-nocookie.com/embed/${media.youtubeId}?rel=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : media.relatedHref ? (
            <a href={media.relatedHref} target="_blank" rel="noreferrer">ABRIR REFERÊNCIA ↗</a>
          ) : null}
        </div>
      )}
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
      const label = document.querySelector('.stage h1')?.textContent?.trim() ?? '';
      const storyTitle = document.querySelector('.articlePanel > h2')?.textContent?.trim() ?? '';
      const summary = document.querySelector('.articleSummary');
      const old = document.getElementById(id);

      if (!label || !storyTitle || special.has(label) || !summary) {
        old?.remove();
        setHost(null);
        setMedia(null);
        return;
      }

      const nextMedia = findCurrentRichMedia(label, storyTitle);
      if (!nextMedia) {
        old?.remove();
        setHost(null);
        setMedia(null);
        return;
      }

      setMedia(nextMedia);
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

  return host && media ? createPortal(<VisualPanel key={`${media.label}-${media.title}`} media={media} />, host) : null;
}
