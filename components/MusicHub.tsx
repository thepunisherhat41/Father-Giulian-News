'use client';

import { useMemo, useState } from 'react';
import { caipiraArtists, caipiraTracks, rockArtists, rockTracks, type MusicTrack } from '@/lib/music-content';

function shareTrack(track: MusicTrack, lane: string) {
  const text = [
    `*MÚSICA · ${lane.toUpperCase()}*`,
    '',
    `*${track.title} — ${track.artist}*`,
    track.year ? `Ano: ${track.year}` : '',
    `Estilo: ${track.style}`,
    '',
    track.whyListen,
    '',
    `*Contexto:* ${track.context}`,
    '',
    `_Para procurar:_ ${track.searchHint}`,
  ].filter(Boolean).join('\n');

  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

function youtubeSearch(artist: string, title: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${artist} ${title}`)}`;
}

function spotifySearch(artist: string, title: string) {
  return `https://open.spotify.com/search/${encodeURIComponent(`${artist} ${title}`)}`;
}

export default function MusicHub() {
  const [lane, setLane] = useState<'rock' | 'caipira'>('rock');
  const tracks = lane === 'rock' ? rockTracks : caipiraTracks;
  const artists = lane === 'rock' ? rockArtists : caipiraArtists;
  const [trackIndex, setTrackIndex] = useState(0);
  const selected = useMemo(() => tracks[Math.min(trackIndex, tracks.length - 1)], [tracks, trackIndex]);

  const switchLane = (next: 'rock' | 'caipira') => {
    setLane(next);
    setTrackIndex(0);
  };

  return (
    <section className="musicHub">
      <div className="musicIntro">
        <div>
          <span>MUSIC ARCHIVE / TWO WORLDS</span>
          <h3>Música para ouvir com contexto</h3>
          <p>Não é só uma lista de faixas: cada seleção explica o que escutar, de onde veio aquele som e por que ele merece alguns minutos de atenção.</p>
        </div>
        <b>+100 XP</b>
      </div>

      <div className="musicLaneSwitch">
        <button className={lane === 'rock' ? 'active' : ''} onClick={() => switchLane('rock')}>🎸 ROCK</button>
        <button className={lane === 'caipira' ? 'active' : ''} onClick={() => switchLane('caipira')}>🪕 SERTANEJO DE ÉPOCA</button>
      </div>

      <div className={`musicHero ${lane}`}>
        <div className="musicHeroLabel">{lane === 'rock' ? 'ROCK DROP' : 'MEMÓRIAS DA ROÇA'}</div>
        <h4>{selected.title}</h4>
        <div className="musicArtist">{selected.artist}{selected.year ? ` · ${selected.year}` : ''}</div>
        <div className="musicTags">{selected.mood.map((item) => <span key={item}>{item}</span>)}</div>
        <p className="musicWhy">{selected.whyListen}</p>
        <div className="musicContext">
          <small>OUÇA COM ESSA CHAVE</small>
          <p>{selected.context}</p>
        </div>
        <button className="musicShare" onClick={() => shareTrack(selected, lane === 'rock' ? 'Rock' : 'Sertanejo de época')}>↗ WHATSAPP</button>
      </div>

      <div className="musicTrackList">
        {tracks.map((track, index) => (
          <button key={`${track.artist}-${track.title}`} className={index === trackIndex ? 'active' : ''} onClick={() => setTrackIndex(index)}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div><strong>{track.title}</strong><small>{track.artist} · {track.style}</small></div>
            <em>OUVIR →</em>
          </button>
        ))}
      </div>

      {lane === 'caipira' && (
        <>
          <aside className="rocaNote">
            <span>CURADORIA / RAIZ</span>
            <h4>O que entra aqui — e o que não entra</h4>
            <p>Esta trilha prioriza música caipira, moda de viola e sertanejo raiz de época: viola, duplas históricas, causos, boiadeiros, religiosidade, saudade, estrada e cotidiano do campo. O objetivo não é misturar com sertanejo universitário moderno.</p>
            <p><strong>Um bom ponto de partida:</strong> “Meu Rancho no Pé da Serra”, de Tonico & Tinoco, porque transforma cenas comuns da vida rural em memória musical — exatamente o tipo de repertório que atravessou gerações no interior.</p>
          </aside>

          <section className="caipiraTop5">
            <div className="caipiraTopHeader">
              <div>
                <span>TOP 5 / RAÍZES DO SERTÃO</span>
                <h4>Cinco nomes para entender a música caipira</h4>
                <p>Cada posição traz uma história curta e duas músicas para ouvir. A ordem funciona como roteiro de descoberta, não como competição definitiva entre artistas.</p>
              </div>
              <b>10 FAIXAS</b>
            </div>

            <div className="caipiraRanking">
              {caipiraArtists.map((artist, index) => (
                <article className="caipiraRankCard" key={artist.name}>
                  <div className="caipiraRankNumber">#{String(index + 1).padStart(2, '0')}</div>
                  <div className="caipiraRankContent">
                    <div className="caipiraRankTitle">
                      <div>
                        <small>{artist.era}</small>
                        <h5>{artist.name}</h5>
                      </div>
                      <span>MODA / VIOLA / MEMÓRIA</span>
                    </div>

                    <p className="caipiraRankDescription">{artist.description}</p>
                    {artist.history && (
                      <div className="caipiraHistory">
                        <small>BREVE HISTÓRIA</small>
                        <p>{artist.history}</p>
                      </div>
                    )}

                    <div className="caipiraListenGrid">
                      {artist.featuredSongs?.slice(0, 2).map((song, songIndex) => (
                        <div className="caipiraListenCard" key={`${artist.name}-${song.title}`}>
                          <div className="caipiraListenTop">
                            <span>0{songIndex + 1}</span>
                            <strong>{song.title}</strong>
                          </div>
                          <p>{song.note}</p>
                          <div className="caipiraListenActions">
                            <a href={youtubeSearch(artist.name, song.title)} target="_blank" rel="noreferrer">▶ YOUTUBE</a>
                            <a href={spotifySearch(artist.name, song.title)} target="_blank" rel="noreferrer">♫ SPOTIFY</a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </>
      )}

      {lane === 'rock' && (
        <section className="musicArtists">
          <div className="sectionEyebrow">MAPA DE ARTISTAS</div>
          <h4>Quatro portas para entrar no rock</h4>
          <div className="musicArtistGrid">
            {artists.map((artist) => (
              <article key={artist.name}>
                <small>{artist.era}</small>
                <h5>{artist.name}</h5>
                <p>{artist.description}</p>
                <div><span>COMECE POR</span>{artist.startWith.map((song) => <b key={song}>{song}</b>)}</div>
              </article>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
