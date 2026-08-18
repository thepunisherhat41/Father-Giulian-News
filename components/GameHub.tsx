'use client';

import { useMemo, useState } from 'react';
import {
  gameEditorialLanes,
  stageTourFacts,
  stageTourMedia,
  stageTourPs5Radar,
  stageTourSetlist,
  stageTourSources,
  stageTourTimeline,
  stageTourVideos,
} from '@/lib/game-content';

function youtubeSearch(artist: string, title: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${artist} ${title}`)}`;
}

export default function GameHub() {
  const [showAllTracks, setShowAllTracks] = useState(false);
  const [activeMedia, setActiveMedia] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);
  const visibleTracks = useMemo(
    () => showAllTracks ? stageTourSetlist : stageTourSetlist.slice(0, 10),
    [showAllTracks],
  );
  const media = stageTourMedia[activeMedia] ?? stageTourMedia[0];
  const video = stageTourVideos[activeVideo] ?? stageTourVideos[0];

  return (
    <section className="gameHub">
      <header className="gameHubHeader gameHubHeaderArcade">
        <div>
          <span>GAME ARCHIVE / MISSION SELECT</span>
          <h3>Games agora parece game.</h3>
          <p>Imagem, trailer, timeline, PS5 Radar, gameplay e contexto. Hype continua sendo tratado como hype; recurso confirmado ganha selo de confirmado.</p>
        </div>
        <div className="gamePlayerBadge">
          <small>PLAYER LOADOUT</small>
          <strong>PS5 RADAR</strong>
          <span>ACTIVE</span>
        </div>
      </header>

      <article className="gameHeroVisual">
        <img src={stageTourMedia[0].url} alt="Stage Tour key art oficial" />
        <div className="gameHeroShade" />
        <div className="gameHeroHud">
          <span className="gameLivePulse">● FEATURED MISSION</span>
          <strong>STAGE TOUR</strong>
          <p>BUILD YOUR BAND · PICK YOUR STYLE · OWN THE STAGE</p>
          <div>
            <b>PS5</b><b>PC</b><b>XBOX SERIES</b><b>SWITCH 2</b>
          </div>
        </div>
        <div className="gameHeroMeter" aria-hidden="true"><i /></div>
      </article>

      <div className="gameQuickActions">
        <a href="#game-trailer-room">▶ TRAILER ROOM</a>
        <a href="#ps5-radar">▣ PS5 RADAR</a>
        <a href="#game-gallery">▦ SCREENSHOTS</a>
        <a href="#game-setlist">♫ SETLIST</a>
      </div>

      <article className="gameSpotlight">
        <div className="gameSpotlightTopline">
          <span>DESTAQUE · RHYTHM GAME</span>
          <b>STAGE TOUR</b>
        </div>
        <h4>O herdeiro espiritual de Guitar Hero quer trazer a guitarra de plástico de volta — mas como plataforma, não como sequência anual</h4>
        <p className="gameSpotlightLead">
          A RedOctane Games reuniu veteranos de jogos de ritmo, ex-integrantes da Neversoft e nomes da comunidade para construir um novo jogo de cinco botões. A proposta mistura a familiar estrada de notas com banda completa, multiplayer, campanha em formato de “Tour”, conteúdo sazonal e novos periféricos.
        </p>

        <div className="gameFactsGrid">
          {stageTourFacts.map((fact) => (
            <div key={fact.label}>
              <small>{fact.label}</small>
              <strong>{fact.value}</strong>
              <span>{fact.note}</span>
            </div>
          ))}
        </div>
      </article>

      <section className="gameTrailerRoom" id="game-trailer-room">
        <div className="gameSectionHeading">
          <div>
            <span>TRAILER ROOM / VIDEO FEED</span>
            <h4>Veja antes de ler o hype</h4>
            <p>Os vídeos ficam dentro da página para você comparar promessa, gameplay mostrado e direção de hardware.</p>
          </div>
          <b>02 VIDEOS</b>
        </div>
        <div className="gameVideoTabs">
          {stageTourVideos.map((item, index) => (
            <button key={item.youtubeId} className={activeVideo === index ? 'active' : ''} onClick={() => setActiveVideo(index)}>
              <small>{item.label}</small>
              <strong>{item.title}</strong>
            </button>
          ))}
        </div>
        <div className="gameVideoFrame">
          <iframe
            key={video.youtubeId}
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <div className="gameVideoScan" aria-hidden="true" />
        </div>
      </section>

      <section className="gameGallery" id="game-gallery">
        <div className="gameSectionHeading">
          <div>
            <span>MEDIA GALLERY / OFFICIAL FEED</span>
            <h4>Stage Tour em imagens</h4>
            <p>Key art e screenshots oficiais para a matéria deixar de parecer só uma parede de texto.</p>
          </div>
          <b>{String(stageTourMedia.length).padStart(2, '0')} SHOTS</b>
        </div>
        <div className="gameGalleryStage">
          <img src={media.url} alt={media.title} />
          <div className="gameGalleryCaption"><small>{media.label}</small><strong>{media.title}</strong></div>
        </div>
        <div className="gameGalleryThumbs">
          {stageTourMedia.map((item, index) => (
            <button key={item.url} className={activeMedia === index ? 'active' : ''} onClick={() => setActiveMedia(index)}>
              <img src={item.url} alt="" />
              <span>{String(index + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="gamePs5Radar" id="ps5-radar">
        <div className="gameSectionHeading">
          <div>
            <span>PLAYSTATION 5 / LOADOUT CHECK</span>
            <h4>PS5 Radar</h4>
            <p>O que já dá para contar como confirmado no console e o que ainda precisa de anúncio antes de pensar em preorder.</p>
          </div>
          <b>PS5 PRIORITY</b>
        </div>
        <div className="gamePs5Grid">
          {stageTourPs5Radar.map((item) => (
            <article className={item.status} key={item.label}>
              <div><small>{item.label}</small><span>{item.status === 'confirmed' ? '✓' : item.status === 'watch' ? '!' : '?'}</span></div>
              <strong>{item.value}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
        <aside className="gamePs5Verdict">
          <small>WISHLIST DECISION</small>
          <strong>PS5: vale acompanhar; Day One ainda depende de hardware, preço e latência.</strong>
          <p>A versão está confirmada, mas recursos específicos do DualSense e detalhes comerciais de console ainda não foram publicados. O ponto decisivo será quanto custa montar a experiência completa e como os instrumentos se comportam no PS5.</p>
        </aside>
      </section>

      <section className="gameQuestTimeline">
        <div className="gameSectionHeading">
          <div>
            <span>QUEST LOG / ROAD TO LAUNCH</span>
            <h4>A campanha até o lançamento</h4>
            <p>Uma timeline deixa claro o que já aconteceu, onde estamos e o que continua bloqueado.</p>
          </div>
        </div>
        <div className="gameTimelineTrack">
          {stageTourTimeline.map((item) => (
            <article className={item.state.toLowerCase()} key={`${item.date}-${item.title}`}>
              <span>{item.state === 'DONE' ? '✓' : item.state === 'LIVE' ? '●' : '🔒'}</span>
              <small>{item.date}</small>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="gameStoryGrid">
        <section>
          <small>GAME DNA</small>
          <h5>Não é Guitar Hero 7 — e isso é importante</h5>
          <p>Stage Tour usa a linguagem clássica do gênero: highway de notas, guitarra de cinco trastes e performance em banda. Mas é um novo IP. O desafio é recuperar a sensação daquela era sem repetir a saturação que atingiu o gênero.</p>
        </section>
        <section>
          <small>MECHANIC</small>
          <h5>Lead e Groove ampliam guitarra e baixo</h5>
          <p>“Lead” pode seguir guitarra, teclas, synths ou metais; “Groove” acompanha a base rítmica. Isso permite charting guiado pelo que realmente é musicalmente interessante em cada trecho.</p>
        </section>
        <section>
          <small>CAMPAIGN MODE</small>
          <h5>Cada campanha é uma Tour</h5>
          <p>O modo campanha combina gameplay clássico de cinco trastes com elementos roguelite. A banda progride por palcos maiores durante uma run, criando um ciclo de risco, progressão e rejogabilidade.</p>
        </section>
        <section>
          <small>ACCESSIBILITY</small>
          <h5>Periférico é o sonho; controle comum é a porta de entrada</h5>
          <p>Instrumentos dedicados estão previstos, mas existe também um instrumento pensado para controle tradicional ou teclado. Isso reduz a barreira para experimentar o jogo antes de investir em hardware.</p>
        </section>
      </div>

      <div className="gameRealityCheck">
        <div>
          <small>BUFFS / POR QUE PODE SER GRANDE</small>
          <ul>
            <li>Nostalgia forte por Guitar Hero e Rock Band, somada a uma comunidade moderna de rhythm games.</li>
            <li>Modo offline reduz dependência total de servidores.</li>
            <li>Até quatro jogadores recuperam a fantasia de “banda na sala”.</li>
            <li>A setlist já mistura metal, rock clássico, alternativo e artistas mais novos.</li>
          </ul>
        </div>
        <div>
          <small>DEBUFFS / O QUE PODE DAR ERRADO</small>
          <ul>
            <li>Preço dos periféricos pode definir se vira fenômeno ou nicho.</li>
            <li>Compatibilidade de instrumentos antigos varia por plataforma.</li>
            <li>Conteúdo sazonal pode enriquecer o jogo ou virar pressão de live service.</li>
            <li>Holiday 2026 ainda não é uma data exata.</li>
          </ul>
        </div>
      </div>

      <section className="gameSetlist" id="game-setlist">
        <div className="gameSectionHeading">
          <div>
            <span>SETLIST / OFICIAL</span>
            <h4>25 músicas já confirmadas</h4>
            <p>A lista vem dos reveals oficiais da RedOctane. O jogo promete mais músicas até o lançamento.</p>
          </div>
          <b>{stageTourSetlist.length} TRACKS</b>
        </div>

        <div className="gameTrackGrid">
          {visibleTracks.map((track, index) => (
            <a href={youtubeSearch(track.artist, track.title)} target="_blank" rel="noreferrer" key={`${track.artist}-${track.title}`}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <strong>{track.title}</strong>
                <small>{track.artist}</small>
              </div>
              <em>OUVIR ↗</em>
            </a>
          ))}
        </div>

        <button className="gameShowAll" type="button" onClick={() => setShowAllTracks((value) => !value)}>
          {showAllTracks ? 'MOSTRAR SÓ DESTAQUES ↑' : `VER AS ${stageTourSetlist.length} CONFIRMADAS ↓`}
        </button>
      </section>

      <section className="gameEditorialMap">
        <div className="gameSectionHeading">
          <div>
            <span>MISSION ROTATION</span>
            <h4>Games não será só “lançou jogo X”</h4>
            <p>Cada edição escolhe uma missão com contexto e alterna entre estas trilhas.</p>
          </div>
        </div>
        <div className="gameLaneGrid">
          {gameEditorialLanes.map((lane) => (
            <article key={lane.name}>
              <span>{lane.icon}</span>
              <h5>{lane.name}</h5>
              <p>{lane.description}</p>
            </article>
          ))}
        </div>
      </section>

      <aside className="gameBottomLine">
        <small>VEREDITO DE ACOMPANHAMENTO</small>
        <strong>Stage Tour merece ficar no radar.</strong>
        <p>O teste real será preço, qualidade dos charts, sensação do hardware, latência no console e modelo de conteúdo depois do lançamento. Até lá, a aba vai acompanhar fatos — não vender promessa como review.</p>
      </aside>

      <div className="gameSources">
        <small>FONTES PRIMÁRIAS</small>
        {stageTourSources.map((source) => (
          <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label} ↗</a>
        ))}
      </div>
    </section>
  );
}
