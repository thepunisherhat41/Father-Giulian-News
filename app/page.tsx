'use client';

import { useMemo, useState } from 'react';
import { categories } from '@/lib/categories';
import { getPregnancyStatus } from '@/lib/pregnancy';
import { dailyContent, edition, todayDrops, type DailyIntel } from '@/lib/daily-content';
import { deepDives } from '@/lib/deep-dives';
import {
  civicFacts,
  officesInSP2026,
  politicsTracker,
  presidentialProfiles,
  spGovernorProfiles,
  spSenateProfiles,
  type PoliticalProfile,
} from '@/lib/politics-2026';
import { upcomingWords, wordOfDay } from '@/lib/word-of-day';

function buildWhatsAppText(slug: string, label: string, emoji: string, content: DailyIntel) {
  const highlights = content.sections
    .flatMap((section) => section.bullets ?? [])
    .slice(0, 5);

  const primarySource = content.sources?.[0]?.label;
  const lines = [
    `*${emoji} ${label.toUpperCase()}*`,
    '',
    `*${content.title}*`,
    '',
    content.shareSummary ?? content.summary,
  ];

  if (highlights.length) {
    lines.push('', '*Pontos principais*', ...highlights.map((item) => `• ${item}`));
  }

  if (slug === 'curiosidades') {
    lines.push(
      '',
      `*📚 PALAVRA DO DIA — ${wordOfDay.word.toUpperCase()}*`,
      wordOfDay.meaning,
      '',
      `*Exemplo:* ${wordOfDay.naturalUse}`,
      `*Sinônimos:* ${wordOfDay.synonyms.join(', ')}`,
    );
  }

  if (slug === 'politica') {
    lines.push(
      '',
      '*🗳️ TRACKER ELEITORAL 2026*',
      'A página acompanha Presidência, Governo de SP e Senado por SP, sempre separando convenção, pedido de registro e candidatura confirmada pela Justiça Eleitoral.',
      '',
      `_Atualizado em ${politicsTracker.updatedAt}. O prazo de registro termina em ${politicsTracker.registrationDeadline}._`,
    );
  }

  if (primarySource) {
    lines.push('', `_Fonte principal: ${primarySource}_`);
  }

  lines.push('', `☀️ *Father Giulian News · ${edition.date}*`);
  return lines.join('\n');
}

function buildShortShareText(slug: string, label: string, emoji: string, content: DailyIntel) {
  const source = content.sources?.[0]?.label;
  const lines = [
    `*${emoji} ${label.toUpperCase()} — RESUMO DO DIA*`,
    '',
    `*${content.title}*`,
    '',
    content.shareSummary ?? content.summary,
  ];

  if (slug === 'curiosidades') {
    lines.push('', `📚 *Palavra do dia:* ${wordOfDay.word} — ${wordOfDay.meaning}`);
  }

  if (slug === 'politica') {
    lines.push('', `🗳️ _Tracker eleitoral atualizado em ${politicsTracker.updatedAt}; registros seguem abertos até ${politicsTracker.registrationDeadline}._`);
  }

  if (source) lines.push('', `_Fonte: ${source}_`);
  lines.push('', `☀️ *Father Giulian News · ${edition.date}*`);
  return lines.join('\n');
}

function CandidateGroup({ title, subtitle, profiles }: { title: string; subtitle: string; profiles: PoliticalProfile[] }) {
  return (
    <section className="candidateSection">
      <div className="sectionEyebrow">ELECTION TRACKER</div>
      <div className="candidateSectionTitle">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div className="candidateGrid">
        {profiles.map((profile) => (
          <article className="candidateCard" key={`${profile.office}-${profile.name}`}>
            <div className="candidateTopline">
              <span>{profile.party}</span>
              <small>{profile.office}</small>
            </div>
            <h4>{profile.name}</h4>
            {profile.ticket && <p className="ticket">{profile.ticket}</p>}
            <div className="candidateStatus">{profile.status}</div>
            <div className="careerBlock">
              <small>TRAJETÓRIA / TRABALHOS ANTERIORES</small>
              <ul>
                {profile.trajectory.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <a className="candidateSource" href={profile.sourceUrl} target="_blank" rel="noreferrer">
              Fonte: {profile.sourceLabel} ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  const pregnancy = getPregnancyStatus();
  const [active, setActive] = useState('hoje');
  const [copied, setCopied] = useState<'full' | 'short' | null>(null);

  const category = useMemo(
    () => categories.find((item) => item.slug === active) ?? categories[0],
    [active],
  );

  const content = dailyContent[active] ?? dailyContent.hoje;
  const deepDive = deepDives[active];

  const openMission = (slug: string) => {
    setActive(slug);
    setCopied(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyText = async (mode: 'full' | 'short') => {
    const text = mode === 'full'
      ? buildWhatsAppText(active, category.label, category.emoji, content)
      : buildShortShareText(active, category.label, category.emoji, content);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(mode);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(null);
    }
  };

  const shareWhatsApp = (mode: 'full' | 'short') => {
    const text = mode === 'full'
      ? buildWhatsAppText(active, category.label, category.emoji, content)
      : buildShortShareText(active, category.label, category.emoji, content);
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="appShell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brandMark">FG</span>
          <div>
            <b>FATHER GIULIAN</b>
            <small>DAILY INTELLIGENCE</small>
          </div>
        </div>

        <div className="player">
          <span>PLAYER 01</span>
          <b>GIULIAN</b>
          <div className="xp"><i /></div>
          <small>LVL 05 · KNOWLEDGE RUN</small>
        </div>

        <nav aria-label="Áreas do hub">
          {categories.map((item) => (
            <button
              key={item.slug}
              className={active === item.slug ? 'active' : ''}
              onClick={() => openMission(item.slug)}
            >
              <span>{item.emoji}</span>
              {item.label}
              <em>›</em>
            </button>
          ))}
        </nav>
      </aside>

      <main className="content">
        <header className="topbar">
          <div><span className="statusDot" /> DAILY SYSTEM ONLINE</div>
          <div className="date">{edition.dateLabel}</div>
        </header>

        <section className="stage">
          <div className="hud">
            <span>MISSION / {category.label.toUpperCase()}</span>
            <span>SCORE 0206</span>
          </div>
          <div className="heroIcon">{category.emoji}</div>
          <p className="kicker">TODAY&apos;S INTELLIGENCE DROP</p>
          <h1>{category.label}</h1>
          <p className="lead">{category.description}</p>
        </section>

        <section className="articlePanel">
          <div className="articleMeta">
            <span>{content.badge ?? 'NEW DROP'}</span>
            <span>{content.readTime}</span>
          </div>

          <h2>{content.title}</h2>
          <p className="articleSummary">{content.summary}</p>

          {active === 'hoje' ? (
            <div className="todayGrid">
              {todayDrops.map((drop, index) => (
                <button className="dropCard" key={drop.slug} onClick={() => openMission(drop.slug)}>
                  <span className="dropIndex">{String(index + 1).padStart(2, '0')}</span>
                  <span className="dropEmoji">{drop.emoji}</span>
                  <span className="dropCopy">
                    <small>{drop.label}</small>
                    <strong>{drop.title}</strong>
                    <p>{drop.detail}</p>
                  </span>
                  <span className="dropAction">ABRIR MISSÃO ↗</span>
                </button>
              ))}
            </div>
          ) : (
            <>
              {active === 'gravidez' && (
                <div className="pregnancyHUD">
                  <div><small>GESTAÇÃO HOJE</small><strong>{pregnancy.gestationalWeek}S + {pregnancy.gestationalDay}D</strong></div>
                  <div><small>DPP ESTIMADA</small><strong>11/04/2027</strong></div>
                  <div><small>CONTAGEM</small><strong>{pregnancy.daysRemaining} DIAS</strong></div>
                </div>
              )}

              {content.stats && content.stats.length > 0 && (
                <div className="statGrid">
                  {content.stats.map((stat) => (
                    <div className="statCard" key={`${stat.label}-${stat.value}`}>
                      <small>{stat.label}</small>
                      <strong>{stat.value}</strong>
                      {stat.note && <span>{stat.note}</span>}
                    </div>
                  ))}
                </div>
              )}

              <div className="intelStack">
                {content.sections.map((section, index) => (
                  <section className="intelSection" key={`${section.title}-${index}`}>
                    <div className="intelHeader">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <h3>{section.title}</h3>
                    </div>
                    {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.bullets && (
                      <ul>
                        {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {active === 'politica' && (
                <div className="politicsTracker">
                  <div className="electionNotice">
                    <span>LIVE CIVIC DATA</span>
                    <h3>Eleições 2026 · status do tracker</h3>
                    <p>{politicsTracker.notice}</p>
                    <small>ATUALIZADO {politicsTracker.updatedAt} · PRAZO DE REGISTRO {politicsTracker.registrationDeadline}</small>
                  </div>

                  <section className="officeSection">
                    <div className="sectionEyebrow">SEU VOTO EM SP</div>
                    <h3>Quais cargos entram na urna em 2026</h3>
                    <div className="officeGrid">
                      {officesInSP2026.map((item) => (
                        <div key={item.office}>
                          <small>{item.votes}</small>
                          <strong>{item.office}</strong>
                          <span>{item.note}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <CandidateGroup
                    title="Presidência da República"
                    subtitle="Nomes já oficializados em convenção e acompanhados nesta edição. A situação jurídica final será consolidada após os pedidos de registro no TSE."
                    profiles={presidentialProfiles}
                  />
                  <CandidateGroup
                    title="Governo de São Paulo"
                    subtitle="Principais chapas estaduais já formalizadas nas fontes acompanhadas. O tracker será atualizado com o registro eleitoral."
                    profiles={spGovernorProfiles}
                  />
                  <CandidateGroup
                    title="Senado por São Paulo"
                    subtitle="São duas vagas em disputa. A lista abaixo reúne candidaturas oficializadas e nomes anunciados com status explicitado em cada perfil."
                    profiles={spSenateProfiles}
                  />

                  <section className="civicSection">
                    <div className="sectionEyebrow">BRASIL · SP · ITAQUERA</div>
                    <h3>Fatos para entender melhor onde você vota</h3>
                    <div className="civicGrid">
                      {civicFacts.map((fact) => (
                        <article key={fact.title}>
                          <small>{fact.eyebrow}</small>
                          <h4>{fact.title}</h4>
                          <p>{fact.text}</p>
                          {fact.sourceUrl && (
                            <a href={fact.sourceUrl} target="_blank" rel="noreferrer">
                              {fact.sourceLabel} ↗
                            </a>
                          )}
                        </article>
                      ))}
                    </div>
                  </section>
                </div>
              )}

              {active === 'curiosidades' && (
                <section className="wordPanel">
                  <div className="wordPanelHeader">
                    <div>
                      <span>VOCABULARY DROP</span>
                      <small>PALAVRA DO DIA</small>
                    </div>
                    <b>+10 XP</b>
                  </div>

                  <div className="wordHero">
                    <div>
                      <span className="wordPronunciation">{wordOfDay.pronunciation}</span>
                      <h3>{wordOfDay.word}</h3>
                    </div>
                    <span className="wordClass">ADVÉRBIO</span>
                  </div>

                  <p className="wordMeaning">{wordOfDay.meaning}</p>

                  <div className="wordExample">
                    <small>COMO USAR NATURALMENTE</small>
                    <blockquote>{wordOfDay.naturalUse}</blockquote>
                  </div>

                  <div className="wordInfoGrid">
                    <div>
                      <small>SINÔNIMOS</small>
                      <p>{wordOfDay.synonyms.join(' · ')}</p>
                    </div>
                    <div>
                      <small>TOM DE USO</small>
                      <p>{wordOfDay.tone}</p>
                    </div>
                  </div>

                  {wordOfDay.note && <div className="wordNote">⌁ {wordOfDay.note}</div>}

                  <div className="nextWords">
                    <small>PRÓXIMOS DROPS</small>
                    <div>
                      {upcomingWords.map((item) => (
                        <span key={item.word} title={item.hint}>{item.word}</span>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {deepDive && (
                <section className="deepDivePanel">
                  <div className="sectionEyebrow">DEEP DIVE / +25 XP</div>
                  <h3>{deepDive.title}</h3>
                  <p>{deepDive.intro}</p>
                  <ul>
                    {deepDive.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </section>
              )}

              {category.subcategories && (
                <div className="chips">
                  {category.subcategories.map((item) => <span key={item}>{item}</span>)}
                </div>
              )}

              {content.disclaimer && <div className="disclaimer">⚠ {content.disclaimer}</div>}

              {content.sources && content.sources.length > 0 && (
                <div className="sourceBlock">
                  <div className="sourceTitle">VERIFIED SOURCES</div>
                  <div className="sourceGrid">
                    {content.sources.map((source, index) => (
                      <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                        <span>0{index + 1}</span>
                        <b>{source.label}</b>
                        <em>↗</em>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          <section className="sharePack">
            <div className="sharePackHeader">
              <div>
                <span>SHARE PACK</span>
                <h3>Pronto para mandar no WhatsApp</h3>
              </div>
              <b>WA://READY</b>
            </div>
            <div className="sharePreview">
              <small>{category.emoji} {category.label.toUpperCase()} · {edition.date}</small>
              <strong>{content.title}</strong>
              <p>{content.shareSummary ?? content.summary}</p>
              {content.sources?.[0] && <em>Fonte: {content.sources[0].label}</em>}
            </div>
            <div className="shareButtons">
              <button onClick={() => copyText('short')}>
                {copied === 'short' ? '✓ RESUMO COPIADO' : '⧉ COPIAR RESUMO'}
              </button>
              <button className="share" onClick={() => shareWhatsApp('short')}>↗ WHATSAPP · RESUMO</button>
              <button onClick={() => shareWhatsApp('full')}>↗ WHATSAPP · COMPLETO</button>
              <button onClick={() => copyText('full')}>
                {copied === 'full' ? '✓ COMPLETO COPIADO' : '⧉ COPIAR COMPLETO'}
              </button>
            </div>
          </section>
        </section>

        <section className="missions">
          <div><span>DAILY STREAK</span><b>🔥 01 DIA</b></div>
          <div><span>CONTEÚDOS</span><b>{categories.length} ÁREAS</b></div>
          <div><span>EDIÇÃO</span><b>● {edition.dateLabel}</b></div>
        </section>
      </main>
    </div>
  );
}
