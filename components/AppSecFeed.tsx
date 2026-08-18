'use client';

import { useMemo, useRef, useState } from 'react';
import { aiPentestSsdlc, appSecFeedPosts, appSecFrameworkLibrary } from '@/lib/appsec-feed-content';
import { appSecPostMedia } from '@/lib/appsec-feed-media';

function FeedVisual({ postId, title }: { postId: string; title: string }) {
  const media = appSecPostMedia[postId];
  if (!media) return null;

  return (
    <a className="appSecFeedVisual real" href={media.sourceUrl} target="_blank" rel="noreferrer" aria-label={`Abrir fonte da imagem: ${title}`}>
      <img src={media.url} alt={media.alt} loading="lazy" referrerPolicy="no-referrer" />
      <div className="appSecFeedVisualShade" />
      <div className="appSecFeedVisualCredit">
        <small>REAL SOURCE MEDIA</small>
        <strong>{media.caption}</strong>
        <span>{media.credit}</span>
      </div>
    </a>
  );
}

export default function AppSecFeed() {
  const feedRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const posts = useMemo(() => appSecFeedPosts, []);

  const syncActive = () => {
    const node = feedRef.current;
    if (!node) return;
    const cards = Array.from(node.querySelectorAll<HTMLElement>('.appSecStoryCard'));
    if (!cards.length) return;
    const center = node.scrollTop + node.clientHeight * .42;
    let best = 0;
    let distance = Number.POSITIVE_INFINITY;
    cards.forEach((card, index) => {
      const next = Math.abs(card.offsetTop + card.offsetHeight / 2 - center);
      if (next < distance) {
        best = index;
        distance = next;
      }
    });
    setActive(best);
  };

  const jumpTo = (index: number) => {
    const node = feedRef.current;
    const card = node?.querySelectorAll<HTMLElement>('.appSecStoryCard')[index];
    card?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="appSecExperience">
      <header className="appSecFeedHeader">
        <div>
          <span>APPSEC STREAM / VERTICAL INTELLIGENCE</span>
          <h3>AppSec Feed</h3>
          <p>Role para baixo como um feed. Cada post traz contexto, controles, frameworks e uma ação que pode virar requisito, teste ou gate no SSDLC.</p>
        </div>
        <div className="appSecFeedCounter"><small>POST</small><strong>{String(active + 1).padStart(2, '0')}</strong><span>/ {String(posts.length).padStart(2, '0')}</span></div>
      </header>

      <div className="appSecFeedRail">
        {posts.map((post, index) => <button key={post.id} className={index === active ? 'active' : ''} onClick={() => jumpTo(index)}>{String(index + 1).padStart(2, '0')}</button>)}
      </div>

      <div className="appSecFeedViewport" ref={feedRef} onScroll={syncActive}>
        {posts.map((post, index) => {
          const hasMedia = Boolean(appSecPostMedia[post.id]);
          return (
            <article className={`appSecStoryCard ${hasMedia ? 'withVisual' : 'textOnly'}`} key={post.id}>
              <FeedVisual postId={post.id} title={post.title} />
              <div className="appSecStoryBody">
                <div className="appSecStoryTop"><span>{post.tag}</span><b>{String(index + 1).padStart(2, '0')} / {String(posts.length).padStart(2, '0')}</b></div>
                <h4>{post.title}</h4>
                <p className="appSecStorySubtitle">{post.subtitle}</p>
                <p className="appSecStoryText">{post.body}</p>

                <div className="appSecFrameworkChips">{post.frameworks.map((item) => <span key={item}>{item}</span>)}</div>

                <div className="appSecChecklist">
                  <small>APLICAÇÃO PRÁTICA</small>
                  <ul>{post.checklist.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>

                <div className="appSecStoryActions">
                  <a href={post.source.url} target="_blank" rel="noreferrer">REFERÊNCIA ↗</a>
                  <button type="button" onClick={() => jumpTo(Math.min(index + 1, posts.length - 1))}>{index === posts.length - 1 ? 'FIM DO FEED ✓' : 'PRÓXIMO POST ↓'}</button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <section className="aiPentestLab">
        <div className="aiPentestIntro">
          <span>AI PENTEST / SSDLC PROGRAM</span>
          <h3>Pentest de IA + Pentest com IA dentro do ciclo seguro</h3>
          <p>O objetivo não é criar uma atividade isolada no fim do projeto. A segurança de IA entra desde descoberta e arquitetura, gera cenários de teste e evidência, alimenta gates e volta a ser executada quando o sistema muda.</p>
        </div>

        <div className="aiPentestTimeline">
          {aiPentestSsdlc.map((item) => (
            <article key={item.phase}>
              <small>{item.phase}</small>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="aiPentestTwoWays">
          <article>
            <span>TESTAR IA</span>
            <h4>Pentest de aplicações com IA</h4>
            <p>Revisar arquitetura, isolamento, autorização, RAG, memória, ferramentas, comportamento inesperado, limites e observabilidade em ambiente autorizado.</p>
          </article>
          <article>
            <span>USAR IA</span>
            <h4>IA assistindo o pentest</h4>
            <p>Acelerar geração de hipóteses, organização de evidências, revisão de cobertura e análise de traces sem delegar a conclusão do finding ao modelo.</p>
          </article>
        </div>

        <section className="appSecVideoLab">
          <div>
            <span>VIDEO / ADVERSARIAL AI</span>
            <h4>Discussão técnica para complementar o feed</h4>
            <p>Conteúdo da Unit 42/Palo Alto Networks sobre adversarial AI. Vídeo é material complementar; os frameworks e fontes primárias continuam sendo a referência para o programa.</p>
          </div>
          <div className="appSecVideoFrame">
            <iframe title="Adversarial AI · Unit 42" src="https://www.youtube-nocookie.com/embed/tfiUSSnVq9o?rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </section>
      </section>

      <section className="appSecFrameworkLibrary">
        <div><span>FRAMEWORK LIBRARY</span><h3>Referências para transformar post em controle</h3></div>
        <div className="appSecFrameworkGrid">
          {appSecFrameworkLibrary.map((item) => <article key={item.name}><strong>{item.name}</strong><p>{item.use}</p></article>)}
        </div>
      </section>
    </section>
  );
}
