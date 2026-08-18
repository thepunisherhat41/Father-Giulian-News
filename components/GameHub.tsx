'use client';

import { useMemo, useState } from 'react';
import { gameEditorialLanes, stageTourFacts, stageTourSetlist, stageTourSources } from '@/lib/game-content';

function youtubeSearch(artist: string, title: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${artist} ${title}`)}`;
}

export default function GameHub() {
  const [showAllTracks, setShowAllTracks] = useState(false);
  const visibleTracks = useMemo(
    () => showAllTracks ? stageTourSetlist : stageTourSetlist.slice(0, 10),
    [showAllTracks],
  );

  return (
    <section className="gameHub">
      <header className="gameHubHeader">
        <div>
          <span>GAME ARCHIVE / NEW MISSION</span>
          <h3>Games para acompanhar de verdade</h3>
          <p>Notícia, contexto, gameplay, história e o que ainda precisa ser provado antes do hype virar compra.</p>
        </div>
        <b>+100 XP</b>
      </header>

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

        <div className="gameStoryGrid">
          <section>
            <small>POR QUE LEMBRA GUITAR HERO</small>
            <h5>Não é Guitar Hero 7 — e isso é importante</h5>
            <p>Stage Tour usa a linguagem clássica do gênero: highway de notas, guitarra de cinco trastes e performance em banda. Mas a franquia Guitar Hero não está simplesmente sendo continuada. O projeto é um novo IP da RedOctane Games, construído por gente que trabalhou nesse ecossistema e quer recuperar a sensação sem depender da antiga marca.</p>
          </section>
          <section>
            <small>O DIFERENCIAL</small>
            <h5>Lead e Groove ampliam guitarra e baixo</h5>
            <p>Em vez de limitar “Lead” a guitarra, o jogo pode mapear a linha melódica principal para guitarra, teclas, synths ou metais. “Groove” ocupa a base rítmica. Isso abre espaço para músicas que um Guitar Hero clássico talvez tratasse de forma menos natural.</p>
          </section>
          <section>
            <small>CAMPAIGN MODE</small>
            <h5>Cada campanha é uma Tour</h5>
            <p>O nome vem da campanha roguelite: durante uma run, a banda progride por palcos cada vez maiores. A ideia é transformar a sequência de músicas em uma jornada com risco, progressão e rejogabilidade, não apenas em um menu de setlist.</p>
          </section>
          <section>
            <small>ACESSIBILIDADE</small>
            <h5>Periférico é o sonho; controle comum é a porta de entrada</h5>
            <p>O projeto prevê instrumentos dedicados, mas também um tipo de instrumento pensado para controle tradicional ou teclado. Isso reduz a barreira para quem quer experimentar antes de investir numa guitarra de plástico.</p>
          </section>
        </div>

        <div className="gameRealityCheck">
          <div>
            <small>POR QUE PODE SER GRANDE</small>
            <ul>
              <li>Existe nostalgia forte por Guitar Hero e Rock Band, mas com uma geração nova que conheceu ritmo por Fortnite Festival, Clone Hero e comunidade.</li>
              <li>Modo offline reduz o medo de um jogo desaparecer junto com servidores.</li>
              <li>PC e grandes consoles ampliam o público, e o suporte a quatro jogadores recupera a experiência social de “banda na sala”.</li>
              <li>A setlist já mistura clássicos, metal, pop-punk, alternativo e artistas novos.</li>
            </ul>
          </div>
          <div>
            <small>O QUE AINDA PODE DAR ERRADO</small>
            <ul>
              <li>Preço dos periféricos ainda pode definir se o jogo vira fenômeno ou produto de nicho.</li>
              <li>“Plataforma de longo prazo” depende de licenciamento musical, calendário de conteúdo e uma base ativa suficiente.</li>
              <li>Seasonal content pode enriquecer o jogo ou virar pressão de live service; o modelo comercial precisa ser observado.</li>
              <li>Janela Holiday 2026 ainda não é uma data exata de lançamento.</li>
            </ul>
          </div>
        </div>
      </article>

      <section className="gameSetlist">
        <div className="gameSectionHeading">
          <div>
            <span>SETLIST / OFICIAL</span>
            <h4>25 músicas já confirmadas</h4>
            <p>A lista abaixo vem dos reveals oficiais da RedOctane. O jogo promete mais músicas até o lançamento.</p>
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
            <span>COMO A ABA VAI FUNCIONAR</span>
            <h4>Não será só “lançou jogo X”</h4>
            <p>Cada edição vai escolher algo que mereça contexto e alternar entre estas trilhas.</p>
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
        <p>Não porque “Guitar Hero voltou”, mas porque existe um projeto novo tentando resolver duas coisas que derrubaram o gênero no passado: saturação de lançamentos e dependência de uma única experiência de periférico. O teste real será preço, qualidade dos charts, sensação do hardware e modelo de conteúdo depois do lançamento.</p>
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
