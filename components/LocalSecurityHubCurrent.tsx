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
} from '@/lib/local-security-current';
import { localEastNews, localEastNewsUpdatedAt, type LocalEastNewsItem } from '@/lib/local-east-news-current';

type Mode = 'AGORA' | 'SEGURANCA' | 'CASOS' | 'MATERIAS' | 'DADOS' | 'ACOES' | 'SERVICOS';

const tabs: Array<{ id: Mode; label: string; icon: string }> = [
  { id:'AGORA', label:'Agora', icon:'◉' },
  { id:'SEGURANCA', label:'Segurança', icon:'⚠' },
  { id:'CASOS', label:'Casos', icon:'◎' },
  { id:'MATERIAS', label:'Entenda', icon:'▤' },
  { id:'DADOS', label:'Dados', icon:'▥' },
  { id:'ACOES', label:'Ações', icon:'◆' },
  { id:'SERVICOS', label:'Serviços', icon:'＋' },
];

function whatsapp(text: string) {
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

function NewsMedia({ item }: { item: LocalEastNewsItem }) {
  if (!item.media) return <div className="zlCurrentFallback" aria-hidden="true"><span>{item.emoji}</span></div>;
  if (item.media.type === 'YOUTUBE' && item.media.youtubeId) {
    return (
      <figure className="zlCurrentMedia video">
        <iframe title={item.media.alt} src={`https://www.youtube-nocookie.com/embed/${item.media.youtubeId}?rel=0`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        <figcaption><a href={item.media.sourceUrl} target="_blank" rel="noreferrer">Vídeo · {item.media.credit} ↗</a></figcaption>
      </figure>
    );
  }
  if (item.media.type === 'IMAGE' && item.media.url) {
    return (
      <figure className="zlCurrentMedia">
        <a href={item.media.sourceUrl} target="_blank" rel="noreferrer"><img src={item.media.url} alt={item.media.alt} loading="lazy" referrerPolicy="no-referrer" /></a>
        <figcaption>Imagem · {item.media.credit}</figcaption>
      </figure>
    );
  }
  return null;
}

function shareNews(item: LocalEastNewsItem) {
  return ['*ZONA LESTE EM FOCO*', `_${item.scope === 'ITAQUERA' ? 'Itaquera' : 'Zona Leste'} · ${item.date}_`, '', `*${item.title}*`, item.summary, '', `Por que importa: ${item.whyItMatters}`, item.watchNext ? `O que acompanhar: ${item.watchNext}` : '', '', `Fonte: ${item.source.label}`, item.source.url].filter(Boolean).join('\n');
}

function RegionalCard({ item }: { item: LocalEastNewsItem }) {
  return (
    <article className="zlCurrentRegionalCard">
      <NewsMedia item={item} />
      <div className="zlCurrentRegionalBody">
        <div className="zlCurrentMeta"><span>{item.category}</span><b>{item.freshness}</b><time>{item.date}</time></div>
        <h4>{item.title}</h4>
        <p className="zlCurrentLead">{item.summary}</p>
        <details className="zlCurrentDetails">
          <summary>Ver detalhes e contexto</summary>
          <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          <section><small>POR QUE IMPORTA</small><p>{item.whyItMatters}</p></section>
          {item.watchNext && <section><small>O QUE ACOMPANHAR</small><p>{item.watchNext}</p></section>}
        </details>
        <div className="zlCurrentActions"><a href={item.source.url} target="_blank" rel="noreferrer">Ler fonte ↗</a><button onClick={() => whatsapp(shareNews(item))}>WhatsApp</button></div>
      </div>
    </article>
  );
}

function shareSignal(item: LocalSecuritySignal) {
  return ['*ZONA LESTE · SEGURANÇA*', `_${item.area} · ${item.date}_`, '', `*${item.title}*`, item.summary, '', `Por que importa: ${item.whyItMatters}`, '', `Fonte: ${item.source.label}`, item.source.url, '', '_Uma ocorrência isolada não define o risco de um bairro._'].join('\n');
}

function SignalCard({ item }: { item: LocalSecuritySignal }) {
  return (
    <article className={`zlCurrentSignal ${item.freshness === 'RECENTE' ? 'isRecent' : 'isContext'}`}>
      <div className="zlCurrentSignalHead"><span>{item.type}</span>{item.ageLabel && <b>{item.ageLabel}</b>}<time>{item.date}</time></div>
      <small>{item.area}</small>
      <h4>{item.title}</h4>
      <p>{item.summary}</p>
      <section><small>POR QUE IMPORTA</small><p>{item.whyItMatters}</p></section>
      <div className="zlCurrentActions"><a href={item.source.url} target="_blank" rel="noreferrer">Fonte ↗</a><button onClick={() => whatsapp(shareSignal(item))}>WhatsApp</button></div>
    </article>
  );
}

function shareCase(item: LocalSecurityCase) {
  return ['*ZONA LESTE · CASO ACOMPANHADO*', '', `*${item.title}*`, `Status na última verificação: *${item.status}*`, `${item.area} · ${item.date}`, '', item.summary, '', `Situação jurídica: ${item.legalStatus}`, item.lastVerified, '', `Fonte: ${item.source.label}`, item.source.url, '', '_Suspeito/investigado não significa condenado. Status pode mudar._'].join('\n');
}

function CaseCard({ item }: { item: LocalSecurityCase }) {
  return (
    <article className="zlCurrentCase">
      <div className="zlCurrentCaseHead"><span className={`status-${item.status.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,'-')}`}>{item.status}</span><time>{item.date}</time></div>
      <small>{item.subject} · {item.area}</small>
      <h4>{item.title}</h4>
      <p>{item.summary}</p>
      <details className="zlCurrentDetails"><summary>Situação jurídica e última confirmação</summary><p>{item.legalStatus}</p><b>{item.lastVerified}</b></details>
      <div className="zlCurrentActions"><a href={item.source.url} target="_blank" rel="noreferrer">Fonte ↗</a><button onClick={() => whatsapp(shareCase(item))}>WhatsApp</button></div>
    </article>
  );
}

function ArticleCard({ item }: { item: LocalSecurityArticle }) {
  return (
    <article className="zlCurrentArticle"><div><span>{item.eyebrow}</span><time>{item.date}</time></div><small>{item.area}</small><h4>{item.title}</h4><p>{item.summary}</p><blockquote><b>Para guardar:</b> {item.takeaway}</blockquote><a href={item.source.url} target="_blank" rel="noreferrer">Ler matéria ↗</a></article>
  );
}

export default function LocalSecurityHubCurrent() {
  const [mode, setMode] = useState<Mode>('AGORA');
  const itaquera = useMemo(() => localEastNews.filter((item) => item.scope === 'ITAQUERA'), []);
  const zl = useMemo(() => localEastNews.filter((item) => item.scope === 'ZONA LESTE'), []);
  const recent = useMemo(() => localSecuritySignals.filter((item) => item.freshness === 'RECENTE'), []);
  const data = useMemo(() => localSecuritySignals.filter((item) => item.type === 'DADO'), []);
  const actions = useMemo(() => localSecuritySignals.filter((item) => item.type === 'AÇÃO'), []);
  const services = useMemo(() => localSecuritySignals.filter((item) => item.type === 'SERVIÇO'), []);

  return (
    <section className="localSecurityCurrent">
      <header className="zlCurrentHero">
        <div><span>EDIÇÃO LOCAL · {localEastNewsUpdatedAt}</span><h3>Zona Leste em foco</h3><p>Notícias das últimas horas, Itaquera, trânsito e cidade, segurança, casos acompanhados, dados e serviços — com fonte, data e contexto.</p></div>
        <div className="zlCurrentCounters"><article><strong>{localEastNews.length}</strong><small>notícias locais</small></article><article><strong>{recent.length}</strong><small>segurança recente</small></article><article><strong>{localSecurityCases.length}</strong><small>casos acompanhados</small></article></div>
      </header>

      <section className="zlCurrentPulse"><i /><div><small>SEGURANÇA · {localSecurityTodayStatus.date}</small><strong>{localSecurityTodayStatus.status}</strong><p>{localSecurityTodayStatus.note}</p><span>Segurança: {localSecurityUpdatedAt} · Região: {localEastNewsUpdatedAt}</span></div></section>

      <nav className="zlCurrentTabs" aria-label="Seções da Zona Leste">{tabs.map((tab) => <button key={tab.id} className={mode === tab.id ? 'active' : ''} onClick={() => setMode(tab.id)}><span>{tab.icon}</span>{tab.label}</button>)}</nav>

      {mode === 'AGORA' && <>
        <section className="zlCurrentSectionHead"><div><span>ITAQUERA AGORA</span><h4>O que merece atenção hoje</h4></div><b>{itaquera.length} itens</b></section>
        <div className="zlCurrentNewsGrid">{itaquera.map((item) => <RegionalCard key={item.id} item={item} />)}</div>
        <section className="zlCurrentSectionHead"><div><span>ZONA LESTE</span><h4>Acontecimentos, cidade e serviços</h4></div><b>{zl.length} itens</b></section>
        <div className="zlCurrentNewsGrid">{zl.map((item) => <RegionalCard key={item.id} item={item} />)}</div>
      </>}

      {mode === 'SEGURANCA' && <><section className="zlCurrentSectionHead"><div><span>ÚLTIMAS CONFIRMAÇÕES</span><h4>Crimes e ocorrências recentes</h4></div><b>{recent.length} itens</b></section><div className="zlCurrentSignalGrid">{recent.map((item) => <SignalCard key={item.id} item={item} />)}</div><div className="zlCurrentRule"><b>Como ler:</b> hoje → ontem → 7 dias. Um caso isolado nunca vira ranking de “bairro perigoso”.</div></>}

      {mode === 'CASOS' && <><section className="zlCurrentSectionHead"><div><span>STATUS PÚBLICO</span><h4>Procurados, presos e investigações acompanhadas</h4></div><b>{localSecurityCases.length} casos</b></section><div className="zlCurrentPolicy"><p><b>Suspeito/investigado ≠ condenado.</b> O status exibido é o da última fonte pública localizada. Não publicamos endereço, rotina, telefone, familiares ou instruções para localizar alguém.</p><p><b>Não faça abordagem.</b> Em situação de risco, preserve sua segurança e procure autoridades/canais oficiais.</p></div><div className="zlCurrentCaseGrid">{localSecurityCases.map((item) => <CaseCard key={item.id} item={item} />)}</div></>}

      {mode === 'MATERIAS' && <><section className="zlCurrentSectionHead"><div><span>LEITURA AMPLIADA</span><h4>Entenda os temas por trás das ocorrências</h4></div><b>{localSecurityArticles.length} leituras</b></section><div className="zlCurrentArticleGrid">{localSecurityArticles.map((item) => <ArticleCard key={item.id} item={item} />)}</div></>}

      {mode === 'DADOS' && <><section className="zlCurrentSectionHead"><div><span>DADOS E CONTEXTO</span><h4>Indicadores sem extrapolar bairro</h4></div><b>{data.length} itens</b></section><div className="zlCurrentSignalGrid">{data.map((item) => <SignalCard key={item.id} item={item} />)}</div><div className="zlCurrentRule"><b>Importante:</b> dado da Capital, Seccional ou DP não deve ser apresentado como se fosse exatamente o risco de uma rua ou bairro.</div></>}

      {mode === 'ACOES' && <><section className="zlCurrentSectionHead"><div><span>AÇÕES E CAPACIDADE</span><h4>Operações e infraestrutura pública</h4></div><b>{actions.length} itens</b></section><div className="zlCurrentSignalGrid">{actions.map((item) => <SignalCard key={item.id} item={item} />)}</div><a className="zlCurrentCommandMedia" href={localSecurityMedia.commandCenter.sourceUrl} target="_blank" rel="noreferrer"><img src={localSecurityMedia.commandCenter.url} alt={localSecurityMedia.commandCenter.alt} loading="lazy" referrerPolicy="no-referrer" /><div><small>IMAGEM OFICIAL</small><strong>{localSecurityMedia.commandCenter.caption}</strong><span>{localSecurityMedia.commandCenter.credit}</span></div></a></>}

      {mode === 'SERVICOS' && <><section className="zlCurrentSectionHead"><div><span>SERVIÇOS AO CIDADÃO</span><h4>O que fazer e onde registrar</h4></div><b>{services.length} itens</b></section><div className="zlCurrentSignalGrid">{services.map((item) => <SignalCard key={item.id} item={item} />)}</div><section className="zlCurrentService"><article><b>1 · Saia do risco</b><p>Não confronte suspeitos nem tente recuperar bem material por conta própria.</p></article><article><b>2 · Proteja contas</b><p>Em roubo de celular, proteja banco, e-mail e contas críticas usando outro dispositivo confiável.</p></article><article><b>3 · Registre</b><p>Use canais oficiais da SSP e preserve dados do bem e horários aproximados.</p></article><div><a href="https://www.ssp.sp.gov.br/servicos/delegacia-eletronica" target="_blank" rel="noreferrer">Delegacia Eletrônica ↗</a><a href="https://www.ssp.sp.gov.br/conseg/" target="_blank" rel="noreferrer">CONSEG ↗</a></div></section></>}

      <footer className="zlCurrentCoverage"><span>COBERTURA</span><p>{localSecurityRegions.join(' · ')}</p></footer>
    </section>
  );
}
