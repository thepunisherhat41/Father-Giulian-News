'use client';

import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { switch2RadarGames } from '@/lib/switch2-radar';

type Filter = 'all' | 'available' | 'upcoming';

export function Switch2Radar() {
  const [filter, setFilter] = useState<Filter>('all');

  const games = useMemo(() => {
    if (filter === 'all') return switch2RadarGames;
    if (filter === 'available') return switch2RadarGames.filter((game) => game.status === 'available');
    return switch2RadarGames.filter((game) => game.status !== 'available');
  }, [filter]);

  return (
    <section className="switch2Radar" id="switch2-radar">
      <div className="switch2Header">
        <div>
          <span>NINTENDO SWITCH 2 · JOGOS E LANÇAMENTOS</span>
          <h4>Nintendo Switch 2: o que vale acompanhar</h4>
          <p>Jogos para descobrir e acompanhar, separados em três grupos: já disponíveis, próximos lançamentos e títulos que ainda precisam de mais informação antes de gerar expectativa.</p>
        </div>
        <b>08 JOGOS</b>
      </div>

      <div className="switch2Filters" role="tablist" aria-label="Filtro Nintendo Switch 2">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>TODOS</button>
        <button className={filter === 'available' ? 'active' : ''} onClick={() => setFilter('available')}>✓ DISPONÍVEIS</button>
        <button className={filter === 'upcoming' ? 'active' : ''} onClick={() => setFilter('upcoming')}>◌ A CAMINHO</button>
      </div>

      <div className="switch2Grid">
        {games.map((game, index) => (
          <article className={`switch2Card ${game.status}`} key={game.title}>
            <div className="switch2CardTop">
              <span>#{String(index + 1).padStart(2, '0')}</span>
              <b>{game.badge}</b>
            </div>
            <small>{game.release}</small>
            <h5>{game.title}</h5>
            <em>{game.genre}</em>
            <p>{game.hook}</p>
            <div className="switch2PlayStyle">{game.playStyle}</div>
            <a href={game.sourceUrl} target="_blank" rel="noreferrer">FONTE OFICIAL ↗</a>
          </article>
        ))}
      </div>

      <aside className="switch2BottomLine">
        <small>COMO LER ESTA SEÇÃO</small>
        <strong>Switch 2 entra como ecossistema próprio, não como “substituto do PS5”.</strong>
        <p>A seção prioriza exclusivos, experiências portáteis, co-op local, jogos Nintendo e títulos multiplataforma que tenham uma razão concreta para serem interessantes no formato híbrido.</p>
      </aside>
    </section>
  );
}

export function Switch2RadarPortal() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const hostId = 'switch2-radar-host';

    const syncHost = () => {
      const ps5Radar = document.querySelector('.gamePs5Radar');
      const existing = document.getElementById(hostId);

      if (!ps5Radar) {
        existing?.remove();
        setHost(null);
        return;
      }

      if (existing && existing.previousElementSibling === ps5Radar) {
        setHost(existing);
        return;
      }

      existing?.remove();
      const nextHost = document.createElement('div');
      nextHost.id = hostId;
      ps5Radar.insertAdjacentElement('afterend', nextHost);
      setHost(nextHost);
    };

    syncHost();
    const observer = new MutationObserver(syncHost);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      document.getElementById(hostId)?.remove();
    };
  }, []);

  if (!host) return null;
  return createPortal(<Switch2Radar />, host);
}
