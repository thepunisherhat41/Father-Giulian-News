'use client';

import { useMemo, useState } from 'react';
import {
  localSecurityMedia,
  localSecurityRegions,
  localSecuritySignals,
  localSecurityTodayStatus,
  localSecurityUpdatedAt,
  type LocalSecuritySignal,
} from '@/lib/local-security-content';

type FeedMode = 'FEED' | 'DADOS' | 'AÇÕES' | 'SERVIÇOS';

function shareText(signal: LocalSecuritySignal) {
  return [
    '*SEGURANÇA ZL · DAILY FEED*',
    '',
    `*${signal.title}*`,
    '',
    signal.summary,
    '',
    `Por que importa: ${signal.whyItMatters}`,
    '',
    `Área: ${signal.area}`,
    `Período: ${signal.date}`,
    `Fonte: ${signal.source.label}`,
    signal.source.url,
  ].join('\n');
}

function SignalCard({ signal, index, feed = false }: { signal: LocalSecuritySignal; index: number; feed?: boolean }) {
  return (
    <article className={`zlSignal ${signal.freshness === 'RECENTE' ? 'recent' : 'context'} ${feed ? 'feedCard' : ''}`}>
      {feed && <div className="zlFeedRail"><span>{String(index + 1).padStart(2, '0')}</span><i /></div>}
      <div className="zlSignalBody">
        <div className="zlSignalTop">
          <div className="zlSignalBadges">
            <span>{signal.type}</span>
            {signal.ageLabel && <em>{signal.ageLabel}</em>}
          </div>
          <b>{signal.date}</b>
        </div>
        <div className="zlFreshness">{signal.freshness === 'RECENTE' ? '● CONFIRMAÇÃO RECENTE' : '○ CONTEXTO / BASE'}</div>
        <small>{signal.area}</small>
        <h4>{signal.title}</h4>
        <p>{signal.summary}</p>
        <section className="zlWhy"><small>POR QUE IMPORTA</small><p>{signal.whyItMatters}</p></section>
        <div className="zlSourceLine"><small>SOURCE</small><span>{signal.source.label}</span></div>
        <div className="zlSignalActions">
          <button onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText(signal))}`, '_blank', 'noopener,noreferrer')}>↗ COMPARTILHAR</button>
          <a href={signal.source.url} target="_blank" rel="noreferrer">FONTE ↗</a>
        </div>
      </div>
    </article>
  );
}

export default function LocalSecurityHub() {
  const [mode, setMode] = useState<FeedMode>('FEED');
  const recent = useMemo(() => localSecuritySignals.filter((item) => item.freshness === 'RECENTE'), []);
  const data = useMemo(() => localSecuritySignals.filter((item) => item.type === 'DADO'), []);
  const actions = useMemo(() => localSecuritySignals.filter((item) => item.type === 'AÇÃO'), []);
  const services = useMemo(() => localSecuritySignals.filter((item) => item.type === 'SERVIÇO'), []);

  const activeSignals = mode === 'DADOS' ? data : mode === 'AÇÕES' ? actions : mode === 'SERVIÇOS' ? services : recent;

  return (
    <section className="localSecurityHub">
      <header className="zlCommandHero">
        <div className="zlHeroCopy">
          <span>NEWS://ZONA-LESTE · MOBILE FEED</span>
          <h3>Segurança ZL</h3>
          <p>Um feed diário de segurança pública da Zona Leste: notícia recente primeiro, contexto depois. Sem boato, sem sensacionalismo e sem transformar caso isolado em ranking de bairro.</p>
          <div className="zlHeroBadges">
            <b>LIVE EDITION</b>
            <b>{localSecurityUpdatedAt}</b>
            <b>{recent.length} CONFIRMAÇÃO RECENTE</b>
          </div>
        </div>
        <div className="zlRadarOrb" aria-hidden="true"><span>ZE</span><i /><b>RADAR</b></div>
      </header>

      <section className="zlTodayPulse">
        <div className="zlPulseIcon"><i /></div>
        <div>
          <small>HOJE · {localSecurityTodayStatus.date}</small>
          <strong>{localSecurityTodayStatus.status}</strong>
          <p>{localSecurityTodayStatus.note}</p>
          <span>{localSecurityTodayStatus.nextCheck}</span>
        </div>
      </section>

      <nav className="zlFeedTabs" aria-label="Navegação do feed de segurança local">
        {(['FEED', 'DADOS', 'AÇÕES', 'SERVIÇOS'] as const).map((item) => (
          <button key={item} className={mode === item ? 'active' : ''} onClick={() => setMode(item)}>
            <span>{item === 'FEED' ? '●' : item === 'DADOS' ? '▥' : item === 'AÇÕES' ? '⚡' : '＋'}</span>{item}
          </button>
        ))}
      </nav>

      {mode === 'FEED' && (
        <>
          <section className="zlSectionHead feedHead">
            <div><span>NEWS://RECENT</span><h4>Últimas confirmações da Zona Leste</h4></div>
            <b>{recent.length.toString().padStart(2, '0')} STORIES</b>
          </section>
          {recent.length ? (
            <section className="zlMobileFeed">{recent.map((signal, index) => <SignalCard key={signal.id} signal={signal} index={index} feed />)}</section>
          ) : (
            <div className="zlNoRecent">Nenhuma notícia recente confirmada nesta edição. O radar prefere ficar vazio a reciclar conteúdo antigo.</div>
          )}
          <section className="zlFeedRule">
            <span>EDITORIAL RULE</span>
            <p><strong>Hoje → ontem → últimos 7 dias.</strong> Passou dessa janela, sai do feed e vira contexto. Uma ocorrência isolada nunca vira “tendência do bairro”.</p>
          </section>
        </>
      )}

      {mode !== 'FEED' && (
        <>
          <section className="zlSectionHead feedHead">
            <div><span>{mode === 'DADOS' ? 'DATA://CONTEXT' : mode === 'AÇÕES' ? 'OPS://PUBLIC-SAFETY' : 'SERVICE://CITIZEN'}</span><h4>{mode === 'DADOS' ? 'Indicadores e recortes oficiais' : mode === 'AÇÕES' ? 'Ações e capacidade operacional' : 'Serviços oficiais para o cidadão'}</h4></div>
            <b>{activeSignals.length.toString().padStart(2, '0')} ITEMS</b>
          </section>
          <section className="zlSignalGrid">{activeSignals.map((signal, index) => <SignalCard key={signal.id} signal={signal} index={index} />)}</section>
        </>
      )}

      {mode === 'DADOS' && (
        <>
          <section className="zlSnapshot">
            <div><small>ROUBO DE VEÍCULOS · CAPITAL</small><strong>-32,08%</strong><span>jun/26 × jun/25</span></div>
            <div><small>ROUBOS · CAPITAL</small><strong>-12,78%</strong><span>jun/26 × jun/25</span></div>
            <div><small>RECORTE 29º DP</small><strong>+19,5%</strong><span>roubo de celular · 1º sem</span></div>
            <div><small>ABRANGÊNCIA COP LESTE</small><strong>11</strong><span>inspetorias regionais</span></div>
          </section>
          <section className="zlContextNotice"><span>COMO LER</span><p><strong>Queda percentual não significa “área segura”.</strong> Registros dependem de período, unidade policial, circulação e notificação. Dado da capital nunca é apresentado como dado de um bairro.</p></section>
        </>
      )}

      {mode === 'AÇÕES' && (
        <>
          <a className="zlHeroMedia compactMedia" href={localSecurityMedia.commandCenter.sourceUrl} target="_blank" rel="noreferrer">
            <img src={localSecurityMedia.commandCenter.url} alt={localSecurityMedia.commandCenter.alt} loading="lazy" referrerPolicy="no-referrer" />
            <div><small>IMAGEM REAL / FONTE OFICIAL</small><strong>{localSecurityMedia.commandCenter.caption}</strong><span>{localSecurityMedia.commandCenter.credit}</span></div>
          </a>
          <section className="zlVideoIntel">
            <div><span>VIDEO INTEL / SMARTCOP</span><h4>Tecnologia usada em operação na Zona Leste</h4><p>Vídeo oficial da Prefeitura sobre ocorrência de julho de 2026. É contexto operacional, não notícia de hoje nem mapa de risco.</p></div>
            <div className="zlVideoFrame"><iframe title="SmartCop na Zona Leste" src={localSecurityMedia.smartCopVideo} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
          </section>
        </>
      )}

      {mode === 'SERVIÇOS' && (
        <section className="zlCitizenPanel">
          <div><span>SE ACONTECEU COM VOCÊ</span><h4>Priorize segurança, contas e registro oficial</h4></div>
          <div className="zlCitizenGrid">
            <article><strong>1 · SAIA DO RISCO</strong><p>Não tente recuperar bem material por conta própria nem confronte suspeitos. Vá para um local seguro.</p></article>
            <article><strong>2 · PROTEJA CONTAS</strong><p>Em roubo de celular, proteja banco, e-mail e contas críticas usando outro dispositivo confiável.</p></article>
            <article><strong>3 · REGISTRE</strong><p>A Delegacia Eletrônica da SSP aceita várias naturezas, incluindo roubo/furto de veículo, celular, documentos/objetos e fraude.</p></article>
            <article><strong>4 · GUARDE EVIDÊNCIA</strong><p>Preserve IMEI, notas, placas e horários aproximados sem publicar dados pessoais da vítima em redes abertas.</p></article>
          </div>
          <a className="zlOfficialLink" href="https://www.ssp.sp.gov.br/servicos/delegacia-eletronica" target="_blank" rel="noreferrer">ABRIR DELEGACIA ELETRÔNICA OFICIAL ↗</a>
        </section>
      )}

      <section className="zlRegions">
        <div><span>COVERAGE://EAST-ZONE</span><h4>Regiões acompanhadas</h4><p>O feed busca recortes oficiais por região/DP quando disponíveis. Não existe ranking próprio de “bairro perigoso”.</p></div>
        <div className="zlRegionChips">{localSecurityRegions.map((region) => <span key={region}>{region}</span>)}</div>
      </section>
    </section>
  );
}
