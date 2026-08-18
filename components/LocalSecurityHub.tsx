'use client';

import { useMemo, useState } from 'react';
import { localSecurityMedia, localSecurityRegions, localSecuritySignals, localSecurityUpdatedAt, type LocalSecuritySignal } from '@/lib/local-security-content';

function shareText(signal: LocalSecuritySignal) {
  return [
    '*SEGURANÇA ZL · RADAR LOCAL*',
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

function SignalCard({ signal }: { signal: LocalSecuritySignal }) {
  return (
    <article className={`zlSignal ${signal.freshness === 'RECENTE' ? 'recent' : 'context'}`}>
      <div className="zlSignalTop">
        <span>{signal.type}</span>
        <b>{signal.date}</b>
      </div>
      <div className="zlFreshness">{signal.freshness === 'RECENTE' ? '● NOTÍCIA RECENTE' : '○ CONTEXTO / BASE'}</div>
      <small>{signal.area}</small>
      <h4>{signal.title}</h4>
      <p>{signal.summary}</p>
      <section><small>POR QUE IMPORTA</small><p>{signal.whyItMatters}</p></section>
      <div className="zlSignalActions">
        <button onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText(signal))}`, '_blank', 'noopener,noreferrer')}>↗ WHATSAPP</button>
        <a href={signal.source.url} target="_blank" rel="noreferrer">FONTE ↗</a>
      </div>
    </article>
  );
}

export default function LocalSecurityHub() {
  const [filter, setFilter] = useState<'TODOS' | LocalSecuritySignal['type']>('TODOS');
  const recent = localSecuritySignals.filter((item) => item.freshness === 'RECENTE');
  const context = useMemo(
    () => localSecuritySignals.filter((item) => item.freshness === 'CONTEXTO' && (filter === 'TODOS' || item.type === filter)),
    [filter],
  );
  const filteredRecent = useMemo(
    () => recent.filter((item) => filter === 'TODOS' || item.type === filter),
    [filter],
  );

  return (
    <section className="localSecurityHub">
      <header className="zlCommandHero">
        <div className="zlHeroCopy">
          <span>LOCAL SAFETY / EAST ZONE / LIVE EDITION</span>
          <h3>Radar Segurança ZL</h3>
          <p>Notícias recentes primeiro. Depois, dados consolidados e contexto. Crime, roubos, furtos e resposta pública na Zona Leste de São Paulo com período explícito e fonte verificável.</p>
          <div className="zlHeroBadges">
            <b>ATUALIZADO {localSecurityUpdatedAt}</b>
            <b>{recent.length} RECENTES</b>
            <b>SEM BOATO</b>
          </div>
        </div>
        <a className="zlHeroMedia" href={localSecurityMedia.commandCenter.sourceUrl} target="_blank" rel="noreferrer">
          <img src={localSecurityMedia.commandCenter.url} alt={localSecurityMedia.commandCenter.alt} loading="lazy" referrerPolicy="no-referrer" />
          <div>
            <small>IMAGEM REAL / FONTE OFICIAL</small>
            <strong>{localSecurityMedia.commandCenter.caption}</strong>
            <span>{localSecurityMedia.commandCenter.credit}</span>
          </div>
        </a>
      </header>

      <section className="zlLiveStrip">
        <div><small>RECÊNCIA EDITORIAL</small><strong>7 DIAS</strong><span>prioridade do feed</span></div>
        <div><small>NOTÍCIAS RECENTES</small><strong>{recent.length}</strong><span>confirmadas nesta edição</span></div>
        <div><small>ATUALIZAÇÕES</small><strong>05 · 10 · 17H</strong><span>pesquisa recorrente</span></div>
      </section>

      <section className="zlContextNotice hot">
        <span>AGORA / ÚLTIMOS DIAS</span>
        <p><strong>Esta é a área principal da aba.</strong> Entram aqui somente fatos recentes confirmados sobre a Zona Leste ou recortes estatísticos novos que mudem a leitura local. Se não houver novidade confirmada, o radar não recicla notícia antiga como se fosse atual.</p>
      </section>

      <div className="zlFilters" aria-label="Filtrar sinais de segurança local">
        {(['TODOS', 'DADO', 'AÇÃO', 'ALERTA', 'SERVIÇO'] as const).map((item) => (
          <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>
        ))}
      </div>

      <section className="zlRecentBlock">
        <div className="zlSectionHead"><span>NEWS://RECENT</span><h4>Notícias recentes da Zona Leste</h4></div>
        {filteredRecent.length ? (
          <div className="zlSignalGrid recentGrid">{filteredRecent.map((signal) => <SignalCard key={signal.id} signal={signal} />)}</div>
        ) : (
          <div className="zlNoRecent">Nenhuma notícia recente confirmada encontrada para este filtro. O radar prefere mostrar vazio a reciclar notícia antiga.</div>
        )}
      </section>

      <section className="zlSnapshot">
        <div><small>ROUBO DE VEÍCULOS · CAPITAL</small><strong>-32,08%</strong><span>jun/26 × jun/25</span></div>
        <div><small>ROUBOS · CAPITAL</small><strong>-12,78%</strong><span>jun/26 × jun/25</span></div>
        <div><small>COP LESTE</small><strong>~4 MIL</strong><span>câmeras com acesso operacional</span></div>
        <div><small>ABRANGÊNCIA</small><strong>11</strong><span>inspetorias regionais</span></div>
      </section>

      <section className="zlContextNotice">
        <span>DADOS E CONTEXTO</span>
        <p><strong>Queda percentual não significa “área segura”.</strong> Os números consolidados ficam abaixo das notícias recentes para contextualizar, não para se passar por alerta em tempo real.</p>
      </section>

      <section className="zlContextBlock">
        <div className="zlSectionHead"><span>BASE://CONTEXT</span><h4>Dados, ações e serviços de referência</h4></div>
        <div className="zlSignalGrid">{context.map((signal) => <SignalCard key={signal.id} signal={signal} />)}</div>
      </section>

      <section className="zlRegions">
        <div>
          <span>COBERTURA / ZONA LESTE</span>
          <h4>Regiões acompanhadas</h4>
          <p>O radar usa recortes oficiais quando disponíveis e não cria ranking próprio de “bairro perigoso”.</p>
        </div>
        <div className="zlRegionChips">{localSecurityRegions.map((region) => <span key={region}>{region}</span>)}</div>
      </section>

      <section className="zlVideoIntel">
        <div>
          <span>VIDEO INTEL / SMARTCOP</span>
          <h4>Tecnologia usada em operação na Zona Leste</h4>
          <p>Vídeo oficial da Prefeitura sobre ocorrência de julho de 2026. Ele fica como contexto operacional e não é apresentado como notícia de hoje.</p>
        </div>
        <div className="zlVideoFrame"><iframe title="SmartCop na Zona Leste" src={localSecurityMedia.smartCopVideo} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
      </section>

      <section className="zlCitizenPanel">
        <div><span>SE ACONTECEU COM VOCÊ</span><h4>Priorize segurança e registro oficial</h4></div>
        <div className="zlCitizenGrid">
          <article><strong>1 · SAIA DO RISCO</strong><p>Não tente recuperar bem material por conta própria nem confronte suspeitos. Procure um local seguro e acione os canais oficiais quando houver emergência em andamento.</p></article>
          <article><strong>2 · PROTEJA CONTAS</strong><p>Em roubo de celular, bloqueie acesso a banco, e-mail e contas críticas usando outro dispositivo confiável e acione operadora/fabricante conforme necessário.</p></article>
          <article><strong>3 · REGISTRE</strong><p>A Delegacia Eletrônica da SSP aceita várias naturezas, incluindo roubo/furto de veículo, celular, documentos/objetos e fraude.</p></article>
          <article><strong>4 · GUARDE EVIDÊNCIA</strong><p>Preserve IMEI, notas, placas, horários aproximados e registros existentes sem publicar dados pessoais da vítima em redes abertas.</p></article>
        </div>
        <a className="zlOfficialLink" href="https://www.ssp.sp.gov.br/servicos/delegacia-eletronica" target="_blank" rel="noreferrer">ABRIR DELEGACIA ELETRÔNICA OFICIAL ↗</a>
      </section>
    </section>
  );
}
