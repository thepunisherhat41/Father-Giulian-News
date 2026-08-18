'use client';

import { useMemo, useRef, useState } from 'react';
import { aiPentestSsdlc, appSecFeedPosts, appSecFrameworkLibrary } from '@/lib/appsec-feed-content';

function FeedVisual({ icon, signal, index }: { icon: string; signal: string; index: number }) {
  return (
    <div className="appSecFeedVisual" role="img" aria-label={`Visual técnico ${index + 1}: ${signal}`}>
      <svg viewBox="0 0 1000 600" aria-hidden="true">
        <defs>
          <linearGradient id={`feed-bg-${index}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#050a09" />
            <stop offset=".58" stopColor="#071a15" />
            <stop offset="1" stopColor="#141325" />
          </linearGradient>
          <radialGradient id={`feed-glow-${index}`} cx="72%" cy="36%" r="55%">
            <stop offset="0" stopColor="#27ff9a" stopOpacity=".28" />
            <stop offset="1" stopColor="#27ff9a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1000" height="600" fill={`url(#feed-bg-${index})`} />
        <rect width="1000" height="600" fill={`url(#feed-glow-${index})`} />
        {Array.from({ length: 10 }).map((_, row) => <line key={row} x1="0" y1={50 + row * 52} x2="1000" y2={50 + row * 52} stroke="#cffff0" strokeOpacity=".05" />)}
        {Array.from({ length: 8 }).map((_, col) => <line key={col} x1={100 + col * 120} y1="0" x2={100 + col * 120} y2="600" stroke="#cffff0" strokeOpacity=".035" />)}
        <circle cx="760" cy="200" r="120" fill="none" stroke="#27ff9a" strokeOpacity=".24" strokeWidth="2" />
        <circle cx="760" cy="200" r="72" fill="none" stroke="#27ff9a" strokeOpacity=".16" strokeWidth="10" />
        <path d="M110 445 L260 380 L395 420 L545 318 L700 348 L870 252" fill="none" stroke="#27ff9a" strokeWidth="5" strokeOpacity=".84" />
        <path d="M110 470 L260 455 L395 476 L545 420 L700 432 L870 390" fill="none" stroke="#9d7cff" strokeWidth="3" strokeOpacity=".5" />
      </svg>
      <div className="appSecFeedVisualCopy">
        <span>{icon}</span>
        <small>SECURITY SIGNAL</small>
        <strong>{signal}</strong>
      </div>
    </div>
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
        {posts.map((post, index) => (
          <article className="appSecStoryCard" key={post.id}>
            <FeedVisual icon={post.imageIcon} signal={post.signal} index={index} />
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
        ))}
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
