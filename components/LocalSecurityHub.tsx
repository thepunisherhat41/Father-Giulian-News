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

export default function LocalSecurityHub() {
  const [filter, setFilter] = useState<'TODOS' | LocalSecuritySignal['type']>('TODOS');
  const signals = useMemo(() => filter === 'TODOS' ? localSecuritySignals : localSecuritySignals.filter((item) => item.type === filter), [filter]);

  return (
    <section className="localSecurityHub">
      <header className="zlCommandHero">
        <div className="zlHeroCopy">
          <span>LOCAL SAFETY / EAST ZONE</span>
          <h3>Radar Segurança ZL</h3>
          <p>Crime, roubos, furtos e resposta pública na Zona Leste de São Paulo, com período explícito e fonte verificável. Tendência estatística não é previsão de crime.</p>
          <div className="zlHeroBadges">
            <b>ATUALIZADO {localSecurityUpdatedAt}</b>
            <b>SSP + PREFEITURA</b>
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

      <section className="zlSnapshot">
        <div><small>ROUBO DE VEÍCULOS · CAPITAL</small><strong>-32,08%</strong><span>jun/26 × jun/25</span></div>
        <div><small>ROUBOS · CAPITAL</small><strong>-12,78%</strong><span>jun/26 × jun/25</span></div>
        <div><small>COP LESTE</small><strong>~4 MIL</strong><span>câmeras com acesso operacional</span></div>
        <div><small>ABRANGÊNCIA</small><strong>11</strong><span>inspetorias regionais</span></div>
      </section>

      <section className="zlContextNotice">
        <span>COMO LER O RADAR</span>
        <p><strong>Queda percentual não significa “área segura”.</strong> Os números mostram registros em um período. Bairro, horário, tipo de crime, subnotificação e circulação de pessoas alteram a leitura. Quando só existir dado da capital, ele será rotulado como contexto — nunca como dado do bairro.</p>
      </section>

      <div className="zlFilters" aria-label="Filtrar sinais de segurança local">
        {(['TODOS', 'DADO', 'AÇÃO', 'ALERTA', 'SERVIÇO'] as const).map((item) => (
          <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>
        ))}
      </div>

      <section className="zlSignalGrid">
        {signals.map((signal) => (
          <article className="zlSignal" key={signal.id}>
            <div className="zlSignalTop"><span>{signal.type}</span><b>{signal.date}</b></div>
            <small>{signal.area}</small>
            <h4>{signal.title}</h4>
            <p>{signal.summary}</p>
            <section><small>POR QUE IMPORTA</small><p>{signal.whyItMatters}</p></section>
            <div className="zlSignalActions">
              <button onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText(signal))}`, '_blank', 'noopener,noreferrer')}>↗ WHATSAPP</button>
              <a href={signal.source.url} target="_blank" rel="noreferrer">FONTE ↗</a>
            </div>
          </article>
        ))}
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
          <h4>Veja como a tecnologia está sendo usada em operações na Zona Leste</h4>
          <p>Vídeo incorporado da publicação oficial da Prefeitura sobre uma ocorrência de julho de 2026. É exemplo operacional, não mapa de risco atual.</p>
        </div>
        <div className="zlVideoFrame"><iframe title="SmartCop na Zona Leste" src={localSecurityMedia.smartCopVideo} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
      </section>

      <section className="zlCitizenPanel">
        <div><span>SE ACONTECEU COM VOCÊ</span><h4>Priorize segurança e registro oficial</h4></div>
        <div className="zlCitizenGrid">
          <article><strong>1 · SAIA DO RISCO</strong><p>Não tente recuperar bem material por conta própria nem confronte suspeitos. Procure um local seguro e acione os canais oficiais quando houver emergência em andamento.</p></article>
          <article><strong>2 · PROTEJA CONTAS</strong><p>Em roubo de celular, bloqueie acesso a banco, e-mail e contas críticas usando outro dispositivo confiável e acione operadora/fabricante conforme necessário.</p></article>
          <article><strong>3 · REGISTRE</strong><p>A Delegacia Eletrônica da SSP aceita várias naturezas, incluindo roubo/furto de veículo, celular, documentos/objetos e fraude. O registro também alimenta os indicadores públicos.</p></article>
          <article><strong>4 · GUARDE EVIDÊNCIA</strong><p>Preserve IMEI, notas, placas, horários aproximados e registros existentes sem publicar dados pessoais da vítima em redes abertas.</p></article>
        </div>
        <a className="zlOfficialLink" href="https://www.ssp.sp.gov.br/servicos/delegacia-eletronica" target="_blank" rel="noreferrer">ABRIR DELEGACIA ELETRÔNICA OFICIAL ↗</a>
      </section>
    </section>
  );
}
