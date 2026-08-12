'use client';

import { useMemo, useState } from 'react';
import CuriosityLibrary from '@/components/CuriosityLibrary';
import { categories } from '@/lib/categories';
import { getPregnancyStatus } from '@/lib/pregnancy';
import { dailyContent, edition, todayDrops, type DailyIntel } from '@/lib/daily-content';
import { editorialDossiers } from '@/lib/editorial-dossiers';
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

function sourceText(content: DailyIntel) {
  const source = content.sources?.[0];
  if (!source) return [] as string[];
  return ['', `Fonte: ${source.label}`, source.url];
}

function buildTodayShareText(mode: 'short' | 'full') {
  const drops = mode === 'short' ? todayDrops.slice(0, 6) : todayDrops;
  const lines: string[] = [
    `*RESUMO DO DIA - ${edition.date}*`,
    '',
    mode === 'short'
      ? 'Separei alguns assuntos interessantes de hoje:'
      : 'Aqui vai o briefing completo de hoje, separado por assunto:',
    '',
  ];

  drops.forEach((drop) => {
    lines.push(`*${drop.label}*`, drop.title, drop.detail, '');
  });

  lines.push('_Se algum tema te interessar, vale abrir a matéria completa e conferir as fontes._');
  return lines.join('\n').trim();
}

function buildShortShareText(slug: string, label: string, content: DailyIntel) {
  if (slug === 'hoje') return buildTodayShareText('short');

  const highlights = content.sections
    .flatMap((section) => section.bullets ?? [])
    .slice(0, 3);

  const lines: string[] = [
    `*${label.toUpperCase()} - ${edition.date}*`,
    '',
    `*${content.title}*`,
    '',
    content.shareSummary ?? content.summary,
  ];

  if (highlights.length) {
    lines.push('', ...highlights.map((item) => `- ${item}`));
  }

  if (slug === 'curiosidades') {
    lines.push(
      '',
      `*Palavra do dia: ${wordOfDay.word}*`,
      wordOfDay.meaning,
      `Exemplo: ${wordOfDay.naturalUse}`,
    );
  }

  if (slug === 'politica') {
    lines.push(
      '',
      `Tracker eleitoral atualizado em ${politicsTracker.updatedAt}.`,
      `Prazo de registro: ${politicsTracker.registrationDeadline}.`,
    );
  }

  lines.push(...sourceText(content));
  return lines.join('\n').trim();
}

function buildFullShareText(slug: string, label: string, content: DailyIntel) {
  if (slug === 'hoje') return buildTodayShareText('full');

  const dossier = editorialDossiers[slug];
  const lines: string[] = [
    `*${label.toUpperCase()} - ${edition.date}*`,
    '',
    `*${content.title}*`,
    '',
    content.summary,
  ];

  content.sections.forEach((section) => {
    lines.push('', `*${section.title}*`);
    section.paragraphs?.slice(0, 2).forEach((paragraph) => lines.push(paragraph));
    section.bullets?.slice(0, 5).forEach((bullet) => lines.push(`- ${bullet}`));
  });

  if (dossier) {
    lines.push('', '*Para aprofundar*', dossier.deck);
    dossier.takeaways.forEach((item) => lines.push(`- ${item}`));
  }

  if (slug === 'curiosidades') {
    lines.push(
      '',
      `*Palavra do dia: ${wordOfDay.word}*`,
      wordOfDay.meaning,
      `Exemplo: ${wordOfDay.naturalUse}`,
      `Sinônimos: ${wordOfDay.synonyms.join(', ')}`,
    );
  }

  if (slug === 'politica') {
    lines.push(
      '',
      '*Tracker Eleitoral 2026*',
      'A página acompanha Presidência, Governo de SP e Senado por SP e separa convenção partidária, pedido de registro e situação na Justiça Eleitoral.',
      `Atualizado em ${politicsTracker.updatedAt}. Prazo de registro: ${politicsTracker.registrationDeadline}.`,
    );
  }

  if (content.disclaimer) lines.push('', `Observação: ${content.disclaimer}`);
  lines.push(...sourceText(content));
  return lines.join('\n').trim();
}

function openWhatsApp(text: string) {
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
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
  const dossier = editorialDossiers[active];
  const shortSharePreview = useMemo(
    () => buildShortShareText(active, category.label, content),
    [active, category.label, content],
  );

  const openMission = (slug: string) => {
    setActive(slug);
    setCopied(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyText = async (mode: 'full' | 'short') => {
    const text = mode === 'full'
      ? buildFullShareText(active, category.label, content)
      : buildShortShareText(active, category.label, content);
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
      ? buildFullShareText(active, category.label, content)
      : buildShortShareText(active, category.label, content);
    openWhatsApp(text);
  };

  const shareDrop = (slug: string, label: string) => {
    const dropContent = dailyContent[slug];
    if (!dropContent) return;
    openWhatsApp(buildShortShareText(slug, label, dropContent));
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
                <article className="dropCard" key={drop.slug}>
                  <span className="dropIndex">{String(index + 1).padStart(2, '0')}</span>
                  <span className="dropEmoji">{drop.emoji}</span>
                  <span className="dropCopy">
                    <small>{drop.label}</small>
                    <strong>{drop.title}</strong>
                    <p>{drop.detail}</p>
                  </span>
                  <div className="dropActions">
                    <button onClick={() => openMission(drop.slug)}>ABRIR ↗</button>
                    <button className="dropShare" onClick={() => shareDrop(drop.slug, drop.label)}>WHATSAPP</button>
                  </div>
                </article>
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
                    subtitle="Nomes oficializados em convenção e acompanhados nesta edição. A situação jurídica final será consolidada após os pedidos de registro no TSE."
                    profiles={presidentialProfiles}
                  />
                  <CandidateGroup
                    title="Governo de São Paulo"
                    subtitle="Chapas estaduais acompanhadas nas fontes desta edição. O tracker será atualizado conforme os registros eleitorais."
                    profiles={spGovernorProfiles}
                  />
                  <CandidateGroup
                    title="Senado por São Paulo"
                    subtitle="São duas vagas em disputa. Cada perfil informa explicitamente o status disponível nesta edição."
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
                <>
                  <CuriosityLibrary />
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
                </>
              )}

              {dossier && (
                <section className="dossierPanel">
                  <div className="dossierTopline">
                    <div>
                      <span>DOSSIÊ / LEITURA PROFUNDA</span>
                      <small>{dossier.readingTime}</small>
                    </div>
                    <b>+50 XP</b>
                  </div>

                  <div className="dossierHero">
                    <p>PARA ENTENDER DE VERDADE</p>
                    <h3>{dossier.title}</h3>
                    <div className="dossierDeck">{dossier.deck}</div>
                  </div>

                  <div className="dossierOpening">
                    {dossier.opening.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>

                  <div className="dossierSections">
                    {dossier.sections.map((section, index) => (
                      <section className="dossierSection" key={`${section.title}-${index}`}>
                        <div className="dossierSectionIndex">{String(index + 1).padStart(2, '0')}</div>
                        <div className="dossierSectionBody">
                          {section.kicker && <small>{section.kicker}</small>}
                          <h4>{section.title}</h4>
                          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                          {section.bullets && (
                            <ul>
                              {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                            </ul>
                          )}
                        </div>
                      </section>
                    ))}
                  </div>

                  {dossier.callout && (
                    <aside className="dossierCallout">
                      <small>{dossier.callout.label}</small>
                      <strong>{dossier.callout.title}</strong>
                      <p>{dossier.callout.text}</p>
                    </aside>
                  )}

                  <div className="dossierTakeaways">
                    <div className="sectionEyebrow">PARA GUARDAR</div>
                    <h4>Se você lembrar de três coisas, lembre destas</h4>
                    <ol>
                      {dossier.takeaways.map((item) => <li key={item}>{item}</li>)}
                    </ol>
                  </div>

                  {dossier.sources && dossier.sources.length > 0 && (
                    <div className="dossierSources">
                      <small>FONTES DO DOSSIÊ</small>
                      {dossier.sources.map((source) => (
                        <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label} ↗</a>
                      ))}
                    </div>
                  )}

                  {dossier.disclaimer && <div className="dossierDisclaimer">{dossier.disclaimer}</div>}
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
                <h3>{active === 'hoje' ? 'Resumo útil do dia' : 'Pronto para mandar no WhatsApp'}</h3>
              </div>
              <b>WA://READY</b>
            </div>
            <div className="sharePreview exactPreview">
              <small>PRÉVIA EXATA DO TEXTO</small>
              <pre>{shortSharePreview}</pre>
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
