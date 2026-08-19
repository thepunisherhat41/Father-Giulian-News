'use client';

import { useMemo, useState } from 'react';
import {
  localSecurityArticles,
  localSecurityCases,
  localSecurityMedia,
  localSecurityRegions,
  localSecuritySignals,
  localSecurityTodayStatus,
  localSecurityUpdatedAt,
  type LocalSecurityArticle,
  type LocalSecurityCase,
  type LocalSecuritySignal,
} from '@/lib/local-security-content';

type FeedMode = 'FEED' | 'CASOS' | 'MATERIAS' | 'DADOS' | 'AÇÕES' | 'SERVIÇOS';

const tabs: Array<{ id: FeedMode; label: string; icon: string }> = [
  { id: 'FEED', label: 'Últimas', icon: '●' },
  { id: 'CASOS', label: 'Casos', icon: '◎' },
  { id: 'MATERIAS', label: 'Matérias', icon: '▤' },
  { id: 'DADOS', label: 'Dados', icon: '▥' },
  { id: 'AÇÕES', label: 'Ações', icon: '⚡' },
  { id: 'SERVIÇOS', label: 'Serviços', icon: '＋' },
];

function shareText(signal: LocalSecuritySignal) {
  return [
    '*SEGURANÇA ZL · ATUALIZAÇÃO DIÁRIA*',
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

function shareCaseText(item: LocalSecurityCase) {
  return [
    '*SEGURANÇA ZL · CASO ACOMPANHADO*',
    '',
    `*${item.title}*`,
    '',
    `Status na última fonte: ${item.status}`,
    `Área: ${item.area}`,
    `Data: ${item.date}`,
    '',
    item.summary,
    '',
    `Situação jurídica: ${item.legalStatus}`,
    item.lastVerified,
    '',
    `Fonte: ${item.source.label}`,
    item.source.url,
    '',
    '_Status pode mudar. Consulte a fonte oficial/judicial mais recente antes de tirar conclusões._',
  ].join('\n');
}

function shareArticleText(item: LocalSecurityArticle) {
  return [
    '*SEGURANÇA ZL · LEITURA RECOMENDADA*',
    '',
    `*${item.title}*`,
    '',
    item.summary,
    '',
    `Para guardar: ${item.takeaway}`,
    '',
    `${item.area} · ${item.date}`,
    `Fonte: ${item.source.label}`,
    item.source.url,
  ].join('\n');
}

function openWhatsApp(text: string) {
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
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
        <div className="zlSourceLine"><small>FONTE</small><span>{signal.source.label}</span></div>
        <div className="zlSignalActions">
          <button onClick={() => openWhatsApp(shareText(signal))}>↗ COMPARTILHAR</button>
          <a href={signal.source.url} target="_blank" rel="noreferrer">FONTE ↗</a>
        </div>
      </div>
    </article>
  );
}

function CaseCard({ item }: { item: LocalSecurityCase }) {
  const statusClass = item.status.toLocaleLowerCase('pt-BR').replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return (
    <article className="zlCaseCard">
      <div className="zlCaseTopline">
        <span className={`zlCaseStatus status-${statusClass}`}>{item.status}</span>
        <time>{item.date}</time>
      </div>
      <small>{item.subject} · {item.area}</small>
      <h4>{item.title}</h4>
      <p>{item.summary}</p>
      <section className="zlLegalStatus">
        <small>SITUAÇÃO JURÍDICA / ÚLTIMA CONFIRMAÇÃO</small>
        <p>{item.legalStatus}</p>
        <span>{item.lastVerified}</span>
      </section>
      <div className="zlCaseActions">
        <button onClick={() => openWhatsApp(shareCaseText(item))}>WhatsApp</button>
        <a href={item.source.url} target="_blank" rel="noreferrer">{item.source.label} ↗</a>
      </div>
    </article>
  );
}

function ArticleCard({ item, index }: { item: LocalSecurityArticle; index: number }) {
  return (
    <article className="zlArticleCard">
      <div className="zlArticleNumber">{String(index + 1).padStart(2, '0')}</div>
      <div className="zlArticleBody">
        <div className="zlArticleMeta"><span>{item.eyebrow}</span><time>{item.date}</time></div>
        <small>{item.area}</small>
        <h4>{item.title}</h4>
        <p>{item.summary}</p>
        <blockquote><b>Para guardar:</b> {item.takeaway}</blockquote>
        <div className="zlArticleActions">
          <a href={item.source.url} target="_blank" rel="noreferrer">Ler matéria ↗</a>
          <button onClick={() => openWhatsApp(shareArticleText(item))}>WhatsApp</button>
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
          <span>SEGURANÇA PÚBLICA · ZONA LESTE</span>
          <h3>Segurança ZL</h3>
          <p>Um caderno local de segurança pública: últimas confirmações, casos com status jurídico, procurados divulgados por fontes confiáveis, matérias de contexto, indicadores, ações e serviços. Sem boato, sem caça a pessoas e sem transformar ocorrência isolada em ranking de bairro.</p>
          <div className="zlHeroBadges">
            <b>EDIÇÃO ATUAL</b>
            <b>{localSecurityUpdatedAt}</b>
            <b>{localSecurityCases.length} CASOS ACOMPANHADOS</b>
            <b>{localSecurityArticles.length} MATÉRIAS CURADAS</b>
          </div>
        </div>
        <div className="zlRadarOrb" aria-hidden="true"><span>ZL</span><i /><b>MONITOR</b></div>
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

      <nav className="zlFeedTabs zlFeedTabsExtended" aria-label="Navegação do caderno de segurança local">
        {tabs.map((item) => (
          <button key={item.id} className={mode === item.id ? 'active' : ''} onClick={() => setMode(item.id)}>
            <span>{item.icon}</span>{item.label}
          </button>
        ))}
      </nav>

      {mode === 'FEED' && (
        <>
          <section className="zlSectionHead feedHead">
            <div><span>NOTÍCIAS CONFIRMADAS</span><h4>Últimas confirmações da Zona Leste</h4></div>
            <b>{recent.length.toString().padStart(2, '0')} ITENS</b>
          </section>
          {recent.length ? (
            <section className="zlMobileFeed">{recent.map((signal, index) => <SignalCard key={signal.id} signal={signal} index={index} feed />)}</section>
          ) : (
            <div className="zlNoRecent">Nenhuma notícia recente confirmada nesta edição. A página prefere ficar sem itens a reciclar conteúdo antigo.</div>
          )}
          <section className="zlFeedRule">
            <span>CRITÉRIO EDITORIAL</span>
            <p><strong>Hoje → ontem → últimos 7 dias.</strong> Passou dessa janela, sai do feed e vira contexto. Uma ocorrência isolada nunca vira “tendência do bairro”.</p>
          </section>
        </>
      )}

      {mode === 'CASOS' && (
        <>
          <section className="zlSectionHead feedHead">
            <div><span>CASOS / PROCURADOS / PRISÕES</span><h4>Status de casos acompanhados na região</h4></div>
            <b>{localSecurityCases.length.toString().padStart(2, '0')} CASOS</b>
          </section>
          <section className="zlCasePolicy">
            <div><strong>Como ler esta área</strong><p>O rótulo é o status da <b>última fonte pública localizada</b>, não um julgamento do site. “Suspeito” ou “investigado” não significa condenado. Se houver mandado divulgado, o site informa o status sem publicar endereço, telefone, rotina ou informações para localizar a pessoa.</p></div>
            <div><strong>Não faça abordagem</strong><p>Não confronte, persiga, fotografe ou tente deter alguém por conta própria. Em situação de risco, acione as autoridades. Informações de procurados devem ser confirmadas em canal oficial antes de qualquer providência.</p></div>
          </section>
          <section className="zlCaseGrid">{localSecurityCases.map((item) => <CaseCard key={item.id} item={item} />)}</section>
        </>
      )}

      {mode === 'MATERIAS' && (
        <>
          <section className="zlSectionHead feedHead">
            <div><span>LEITURAS CURADAS</span><h4>Matérias para entender a segurança na Zona Leste</h4></div>
            <b>{localSecurityArticles.length.toString().padStart(2, '0')} LEITURAS</b>
          </section>
          <section className="zlArticleList">{localSecurityArticles.map((item, index) => <ArticleCard key={item.id} item={item} index={index} />)}</section>
        </>
      )}

      {(mode === 'DADOS' || mode === 'AÇÕES' || mode === 'SERVIÇOS') && (
        <>
          <section className="zlSectionHead feedHead">
            <div><span>{mode === 'DADOS' ? 'DADOS E CONTEXTO' : mode === 'AÇÕES' ? 'AÇÕES DE SEGURANÇA' : 'SERVIÇOS AO CIDADÃO'}</span><h4>{mode === 'DADOS' ? 'Indicadores e recortes oficiais' : mode === 'AÇÕES' ? 'Ações e capacidade operacional' : 'Serviços oficiais para o cidadão'}</h4></div>
            <b>{activeSignals.length.toString().padStart(2, '0')} ITENS</b>
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
            <div><span>VÍDEO OFICIAL · CONTEXTO OPERACIONAL</span><h4>Tecnologia usada em operação na Zona Leste</h4><p>Vídeo oficial da Prefeitura sobre ocorrência de julho de 2026. É contexto operacional, não notícia de hoje nem mapa de risco.</p></div>
            <div className="zlVideoFrame"><iframe title="SmartCop na Zona Leste" src={localSecurityMedia.smartCopVideo} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
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
          <div className="zlServiceActions">
            <a className="zlOfficialLink" href="https://www.ssp.sp.gov.br/servicos/delegacia-eletronica" target="_blank" rel="noreferrer">DELEGACIA ELETRÔNICA ↗</a>
            <a className="zlOfficialLink" href="https://www.ssp.sp.gov.br/conseg/" target="_blank" rel="noreferrer">LOCALIZAR CONSEG / REUNIÕES ↗</a>
          </div>
        </section>
      )}

      <section className="zlRegions">
        <div><span>COBERTURA · ZONA LESTE</span><h4>Regiões acompanhadas</h4><p>O caderno busca recortes oficiais por região/DP quando disponíveis. Não existe ranking próprio de “bairro perigoso”, nem lista informal de pessoas.</p></div>
        <div className="zlRegionChips">{localSecurityRegions.map((region) => <span key={region}>{region}</span>)}</div>
      </section>
    </section>
  );
}
