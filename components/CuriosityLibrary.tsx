'use client';

import { useMemo, useState } from 'react';
import { curiosityCollections, type CuriosityStory } from '@/lib/curiosity-collections';

function shareStory(collectionTitle: string, story: CuriosityStory) {
  const lines = [
    `*CURIOSIDADE · ${collectionTitle.toUpperCase()}*`,
    '',
    `*${story.title}*`,
    '',
    story.shareText,
    '',
    `*Para guardar:* ${story.remember}`,
  ];

  if (story.sourceLabel && story.sourceUrl) {
    lines.push('', `Fonte: ${story.sourceLabel}`, story.sourceUrl);
  }

  window.open(
    `https://api.whatsapp.com/send?text=${encodeURIComponent(lines.join('\n'))}`,
    '_blank',
    'noopener,noreferrer',
  );
}

export default function CuriosityLibrary() {
  const [collectionId, setCollectionId] = useState(curiosityCollections[0].id);
  const [storyId, setStoryId] = useState(curiosityCollections[0].stories[0].id);

  const collection = useMemo(
    () => curiosityCollections.find((item) => item.id === collectionId) ?? curiosityCollections[0],
    [collectionId],
  );

  const story = useMemo(
    () => collection.stories.find((item) => item.id === storyId) ?? collection.stories[0],
    [collection, storyId],
  );

  const selectCollection = (id: string) => {
    const next = curiosityCollections.find((item) => item.id === id) ?? curiosityCollections[0];
    setCollectionId(next.id);
    setStoryId(next.stories[0].id);
  };

  return (
    <section className="curiosityLibrary">
      <div className="collectionIntro">
        <div>
          <span>DISCOVERY LIBRARY / 30 STORIES</span>
          <h3>Curiosidades Incríveis</h3>
          <p>
            Escolha uma coleção como quem escolhe um livro na estante. Cada tema abre cinco histórias curtas,
            explicadas com mecanismo, conexão inesperada e uma ideia para levar com você.
          </p>
        </div>
        <b>+100 XP</b>
      </div>

      <div className="collectionShelf" aria-label="Coleções de curiosidades">
        {curiosityCollections.map((item) => (
          <button
            type="button"
            key={item.id}
            className={`collectionCover ${item.accent} ${collection.id === item.id ? 'selected' : ''}`}
            onClick={() => selectCollection(item.id)}
          >
            <span className="coverSeries">CURIOSIDADES INCRÍVEIS</span>
            <span className="coverEmoji">{item.emoji}</span>
            <strong>{item.title}</strong>
            <small>{item.subtitle}</small>
            <div className="coverWords">
              {item.coverWords.map((word) => <span key={word}>{word}</span>)}
            </div>
            <em>05 HISTÓRIAS</em>
          </button>
        ))}
      </div>

      <div className="collectionSelected">
        <div className="collectionSelectedTop">
          <div>
            <span>COLEÇÃO ATIVA · {collection.emoji}</span>
            <h3>{collection.title}</h3>
            <p>{collection.description}</p>
          </div>
          <small>05 CAPÍTULOS</small>
        </div>

        <div className="storyIndex">
          {collection.stories.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className={story.id === item.id ? 'active' : ''}
              onClick={() => setStoryId(item.id)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item.title}</strong>
              <em>LER →</em>
            </button>
          ))}
        </div>

        <article className="storyReader">
          <div className="storyReaderMeta">
            <span>{collection.emoji} {collection.title.toUpperCase()}</span>
            <b>4 MIN READ</b>
          </div>

          <h4>{story.title}</h4>
          <p className="storyHook">{story.hook}</p>

          <div className="storyBody">
            <section>
              <small>COMO ISSO FUNCIONA</small>
              {story.explanation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>

            <aside>
              <small>CONEXÃO INESPERADA</small>
              <p>{story.connection}</p>
            </aside>

            <section className="storyRemember">
              <small>PARA GUARDAR</small>
              <strong>{story.remember}</strong>
            </section>
          </div>

          <div className="storyActions">
            <button type="button" onClick={() => shareStory(collection.title, story)}>
              ↗ COMPARTILHAR NO WHATSAPP
            </button>
            {story.sourceUrl && story.sourceLabel && (
              <a href={story.sourceUrl} target="_blank" rel="noreferrer">
                VER FONTE ↗
              </a>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
