'use client';

import { useMemo, useState } from 'react';
import CuriosityLibrary from '@/components/CuriosityLibrary';
import { categories } from '@/lib/categories';
import { getPregnancyStatus } from '@/lib/pregnancy';
import { dailyContent, edition, todayDrops, type DailyIntel } from '@/lib/daily-content';
import { editorialDossiers } from '@/lib/editorial-dossiers';
import { findCurrentRichMedia } from '@/lib/current-rich-media';
import { applyDailyOverride20260821_10h } from '@/lib/daily-overrides-2026-08-21-10h';
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

const categoryGroups = [
  { title: 'Agora', slugs: ['hoje', 'brasil', 'seguranca-zl', 'politica', 'mundo', 'tempo'] },
  { title: 'Descobrir', slugs: ['planeta', 'animais', 'curiosidades', 'viagens'] },
  { title: 'Família', slugs: ['gravidez', 'pai'] },
  { title: 'Garagem & viagem', slugs: ['carros', 'motos', 'mecanica', 'nautica'] },
  { title: 'Cultura', slugs: ['musica', 'games'] },
  { title: 'Trabalho & futuro', slugs: ['financas', 'tecnologia', 'security-briefing', 'seguranca', 'appsec-ssdlc'] },
] as const;

const quickNavSlugs = ['hoje', 'brasil', 'seguranca-zl', 'politica', 'mundo'] as const;
const magazineRailSlugs = new Set(['security-briefing', 'appsec-ssdlc']);

function sourceText(content: DailyIntel) {
  const source = content.sources?.[0];
  if (!source) return [] as string[];
  return ['', `Fonte: ${source.label}`, source.url];
}

function buildTodayShareText(mode: 'short' | 'full') {
  const lines: string[] = [
    `*RESUMO DO DIA - ${edition.date}*`,
    '',
    mode === 'full'
      ? 'Aqui vai o briefing completo de hoje, com todas as áreas da edição:'
      : 'Separei todos os assuntos da edição de hoje:',
    '',
  ];

  todayDrops.forEach((drop) => {
    lines.push(`*${drop.label}*`, drop.title, drop.detail, '');
  });

  lines.push('_Se algum tema te interessar, vale abrir a matéria completa e conferir as fontes._');
  return lines.join('\n').trim();
}

function buildShortShareText(slug: string, label: string, content: DailyIntel) {
  if (slug === 'hoje') return buildTodayShareText('short');

  const highlights = content.sections.flatMap((section) => section.bullets ?? []).slice(0, 3);
  const lines: string[] = [
    `*${label.toUpperCase()} - ${edition.date}*`,
    '',
    `*${content.title}*`,
    '',
    content.shareSummary ?? content.summary,
  ];

  if (highlights.length) lines.push('', ...highlights.map((item) => `- ${item}`));

  if (slug === 'curiosidades') {
    lines.push('', `*Palavra do dia: ${wordOfDay.word}*`, wordOfDay.meaning, `Exemplo: ${wordOfDay.naturalUse}`);
  }

  if (slug === 'politica') {
    lines.push('', `Tracker eleitoral atualizado em ${politicsTracker.updatedAt}.`, `Prazo de registro: ${politicsTracker.registrationDeadline}.`);
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
    lines.push('', `*Palavra do dia: ${wordOfDay.word}*`, wordOfDay.meaning, `Exemplo: ${wordOfDay.naturalUse}`, `Sinônimos: ${wordOfDay.synonyms.join(', ')}`);
  }

  if (slug === 'politica') {
    lines.push('', '*Tracker Eleitoral 2026*', 'A página acompanha Presidência, Governo de SP e Senado por SP e separa convenção partidária, pedido de registro e situação na Justiça Eleitoral.', `Atualizado em ${politicsTracker.updatedAt}. Prazo de registro: ${politicsTracker.registrationDeadline}.`);
  }

  if (content.disclaimer) lines.push('', `Observação: ${content.disclaimer}`);
  lines.push(...sourceText(content));
  return lines.join('\n').trim();
}

function openWhatsApp(text: string) {
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

function storyImage(label: string, title: string) {
  return findCurrentRichMedia(label, title)?.images?.[0];
}

function CandidateGroup({ title, subtitle, profiles }: { title: string; subtitle: string; profiles: PoliticalProfile[] }) {
  return (
    <section className="candidateSection">
      <div className="sectionEyebrow">ELEIÇÕES 2026</div>
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
              <small>TRAJETÓRIA</small>
              <ul>{profile.trajectory.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <a className="candidateSource" href={profile.sourceUrl} target="_blank" rel="noreferrer">Fonte: {profile.sourceLabel} ↗</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  applyDailyOverride20260821_10h(true);
  const pregnancy = getPregnancyStatus();
  const [active, setActive] = useState('hoje');
  const [copied, setCopied] = useState<'full' | 'short' | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const category = useMemo(() => categories.find((item) => item.slug === active) ?? categories[0], [active]);
  const content = dailyContent[active] ?? dailyContent.hoje;
  const dossier = editorialDossiers[active];
  const shortSharePreview = useMemo(() => buildShortShareText(active, category.label, content), [active, category.label, content]);
  const activeImage = active === 'hoje' ? undefined : storyImage(category.label, content.title);

  const featuredDrop = useMemo(() => {
    const photo = todayDrops.find((drop) => storyImage(drop.label, drop.title)?.kind === 'PHOTO');
    return photo ?? todayDrops.find((drop) => storyImage(drop.label, drop.title)) ?? todayDrops[0];
  }, []);

  const railDrops = useMemo(() => todayDrops.filter((drop) => drop.slug !== featuredDrop.slug && magazineRailSlugs.has(drop.slug)), [featuredDrop.slug]);
  const magazineDrops = useMemo(() => todayDrops.filter((drop) => drop.slug !== featuredDrop.slug && !magazineRailSlugs.has(drop.slug)), [featuredDrop.slug]);
  const featuredImage = storyImage(featuredDrop.label, featuredDrop.title);

  const openMission = (slug: string) => {
    setActive(slug);
    setCopied(null);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyText = async (mode: 'full' | 'short') => {
    const text = mode === 'full' ? buildFullShareText(active, category.label, content) : buildShortShareText(active, category.label, content);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(mode);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(null);
    }
  };

  const shareWhatsApp = (mode: 'full' | 'short') => {
    const text = mode === 'full' ? buildFullShareText(active, category.label, content) : buildShortShareText(active, category.label, content);
    openWhatsApp(text);
  };

  const shareDrop = (slug: string, label: string) => {
    const dropContent = dailyContent[slug];
    if (!dropContent) return;
    openWhatsApp(buildShortShareText(slug, label, dropContent));
  };

  return (
    <div className="appShell appShellV3 magazineShell" data-active={active}>
      {menuOpen && <button className="navBackdrop" aria-label="Fechar menu" onClick={() => setMenuOpen(false)} />}

      <aside className={`sidebar sidebarV3 ${menuOpen ? 'open' : ''}`}>
        <div className="brand brandV3 magazineSideBrand">
          <span className="brandMark">FG</span>
          <div><small>FATHER</small><b>GIULIAN</b><em>NEWS</em></div>
          <button className="sidebarClose" onClick={() => setMenuOpen(false)} aria-label="Fechar menu">×</button>
        </div>

        <div className="sidebarEdition">
          <span>EDIÇÃO</span>
          <strong>{edition.dateLabel}</strong>
        </div>

        <nav className="groupedNav" aria-label="Áreas do hub">
          {categoryGroups.map((group) => (
            <section className="navGroup" key={group.title}>
              <small>{group.title}</small>
              <div>
                {group.slugs.map((slug) => {
                  const item = categories.find((candidate) => candidate.slug === slug);
                  if (!item) return null;
                  return (
                    <button key={item.slug} className={active === item.slug ? 'active' : ''} onClick={() => openMission(item.slug)}>
                      <span>{item.emoji}</span><b>{item.label}</b><em>›</em>
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </nav>
      </aside>

      <main className="content contentV3 magazineContent">
        <header className="topbar topbarV3 magazineMasthead">
          <button className="menuButton" onClick={() => setMenuOpen(true)}><span>☰</span><b>Áreas</b></button>
          <div className="mobileBrand magazineBrand"><span className="brandMark mini">FG</span><div><small>FATHER</small><b>GIULIAN</b><em>NEWS</em></div></div>
          <div className="topbarContext"><span>{category.emoji}</span><b>{category.label}</b></div>
          <div className="date">{edition.dateLabel}</div>
        </header>

        <nav className="magazineQuickNav" aria-label="Acesso rápido">
          {quickNavSlugs.map((slug) => {
            const item = categories.find((candidate) => candidate.slug === slug);
            if (!item) return null;
            return <button key={slug} className={active === slug ? 'active' : ''} onClick={() => openMission(slug)}><span>{item.emoji}</span>{item.label}</button>;
          })}
          <button className="more" onClick={() => setMenuOpen(true)}>＋ Mais áreas</button>
        </nav>

        <div className="contentCanvas magazineCanvas">
          <section className={`stage stageV3 magazineSectionCover ${activeImage ? 'withCoverImage' : 'illustratedCover'}`}>
            {activeImage ? (
              <figure className="stageCoverMedia">
                <img src={activeImage.url} alt={activeImage.alt} referrerPolicy="no-referrer" />
                <span />
                <figcaption><a href={activeImage.sourceUrl} target="_blank" rel="noreferrer">{activeImage.credit} ↗</a></figcaption>
              </figure>
            ) : (
              <div className="stageCoverIllustration" aria-hidden="true"><span>{category.emoji}</span><i /></div>
            )}
            <div className="stageV3Copy magazineCoverCopy">
              <div className="stageV3Meta"><span>{active === 'hoje' ? 'EDIÇÃO DE HOJE' : category.label.toUpperCase()}</span><small>{content.readTime}</small></div>
              <h1>{category.label}</h1>
              <p className="lead">{category.description}</p>
            </div>
            <button className="stageShare" onClick={() => shareWhatsApp('short')}>↗ Compartilhar</button>
          </section>

          <section className={`articlePanel articlePanelV3 ${active === 'hoje' ? 'magazineHomePanel' : 'magazineArticlePanel'}`}>
            <div className="articleMeta"><span>{content.badge ?? 'ATUALIZADO'}</span><span>{edition.dateLabel}</span></div>
            <h2>{content.title}</h2>
            <p className="articleSummary">{content.summary}</p>

            {active === 'hoje' ? (
              <>
                <div className="magazineEditionStrip"><div><small>FATHER GIULIAN · EDIÇÃO DIÁRIA</small><strong>{edition.dateLabel}</strong></div><span>{todayDrops.length} assuntos · todos compartilháveis</span></div>

                <section className="magazineLeadGrid">
                  <article className="magazineFeatureCard">
                    {featuredImage ? (
                      <figure className="magazineFeatureMedia"><img src={featuredImage.url} alt={featuredImage.alt} referrerPolicy="no-referrer" /><span /></figure>
                    ) : (
                      <div className="magazineFeatureIllustration" aria-hidden="true"><span>{featuredDrop.emoji}</span><i /></div>
                    )}
                    <div className="magazineFeatureCopy">
                      <small>{featuredDrop.label}</small>
                      <h3>{featuredDrop.title}</h3>
                      <p>{featuredDrop.detail}</p>
                      <div><button onClick={() => openMission(featuredDrop.slug)}>Leia a matéria</button><button onClick={() => shareDrop(featuredDrop.slug, featuredDrop.label)}>WhatsApp</button></div>
                    </div>
                  </article>

                  <aside className="magazineSideRail">
                    {railDrops.map((drop) => (
                      <article className={`magazineRailCard rail-${drop.slug}`} key={drop.slug}>
                        <div className="magazineRailIcon" aria-hidden="true">{drop.emoji}</div>
                        <small>{drop.label}</small>
                        <strong>{drop.title}</strong>
                        <p>{drop.detail}</p>
                        <div><button onClick={() => openMission(drop.slug)}>Explorar</button><button onClick={() => shareDrop(drop.slug, drop.label)}>↗</button></div>
                      </article>
                    ))}
                  </aside>
                </section>

                <div className="todaySectionHeading magazineHeading">
                  <div><small>MAIS DA EDIÇÃO</small><h3>Uma revista inteira para explorar</h3></div>
                  <span>{magazineDrops.length} matérias</span>
                </div>

                <div className="todayGrid magazineStoryGrid">
                  {magazineDrops.map((drop, index) => {
                    const media = storyImage(drop.label, drop.title);
                    return (
                      <article className={`dropCard magazineStoryCard ${media ? 'hasMagazineMedia' : 'hasMagazineIllustration'}`} key={drop.slug} data-slug={drop.slug}>
                        {media ? (
                          <figure className="magazineCardMedia"><img src={media.url} alt={media.alt} loading="lazy" referrerPolicy="no-referrer" /><span /></figure>
                        ) : (
                          <div className="magazineCardIllustration" aria-hidden="true"><span>{drop.emoji}</span><i /></div>
                        )}
                        <span className="dropIndex">{String(index + 1).padStart(2, '0')}</span>
                        <span className="dropCopy"><small>{drop.label}</small><strong>{drop.title}</strong><p>{drop.detail}</p></span>
                        <div className="dropActions"><button onClick={() => openMission(drop.slug)}>Ler agora</button><button className="dropShare" onClick={() => shareDrop(drop.slug, drop.label)}>WhatsApp</button></div>
                      </article>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                {active === 'gravidez' && (
                  <div className="pregnancyHUD">
                    <div><small>GESTAÇÃO HOJE</small><strong>{pregnancy.gestationalWeek} semanas + {pregnancy.gestationalDay} dias</strong></div>
                    <div><small>DPP ESTIMADA</small><strong>11/04/2027</strong></div>
                    <div><small>ATÉ A DPP</small><strong>{pregnancy.daysRemaining} dias</strong></div>
                  </div>
                )}

                {content.stats && content.stats.length > 0 && (
                  <div className="statGrid">
                    {content.stats.map((stat) => <div className="statCard" key={`${stat.label}-${stat.value}`}><small>{stat.label}</small><strong>{stat.value}</strong>{stat.note && <span>{stat.note}</span>}</div>)}
                  </div>
                )}

                <div className="intelStack">
                  {content.sections.map((section, index) => (
                    <details className="intelSection" key={`${section.title}-${index}`} open={index === 0}>
                      <summary className="intelHeader"><span>{String(index + 1).padStart(2, '0')}</span><h3>{section.title}</h3><em>+</em></summary>
                      <div className="intelSectionBody">
                        {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                      </div>
                    </details>
                  ))}
                </div>

                {active === 'politica' && (
                  <div className="politicsTracker">
                    <div className="electionNotice"><span>DADOS ELEITORAIS</span><h3>Eleições 2026 · situação atual</h3><p>{politicsTracker.notice}</p><small>Atualizado {politicsTracker.updatedAt} · prazo de registro {politicsTracker.registrationDeadline}</small></div>
                    <section className="officeSection"><div className="sectionEyebrow">SEU VOTO EM SP</div><h3>Quais cargos entram na urna em 2026</h3><div className="officeGrid">{officesInSP2026.map((item) => <div key={item.office}><small>{item.votes}</small><strong>{item.office}</strong><span>{item.note}</span></div>)}</div></section>
                    <CandidateGroup title="Presidência da República" subtitle="Nomes acompanhados nesta edição. A situação jurídica final será consolidada conforme os registros oficiais do TSE." profiles={presidentialProfiles} />
                    <CandidateGroup title="Governo de São Paulo" subtitle="Chapas estaduais acompanhadas nas fontes desta edição, com atualização conforme os registros eleitorais." profiles={spGovernorProfiles} />
                    <CandidateGroup title="Senado por São Paulo" subtitle="São duas vagas em disputa. Cada perfil informa explicitamente o status disponível nesta edição." profiles={spSenateProfiles} />
                    <section className="civicSection"><div className="sectionEyebrow">CONTEXTO LOCAL</div><h3>Fatos para entender melhor onde você vota</h3><div className="civicGrid">{civicFacts.map((fact) => <article key={fact.title}><small>{fact.eyebrow}</small><h4>{fact.title}</h4><p>{fact.text}</p>{fact.sourceUrl && <a href={fact.sourceUrl} target="_blank" rel="noreferrer">{fact.sourceLabel} ↗</a>}</article>)}</div></section>
                  </div>
                )}

                {active === 'curiosidades' && (
                  <>
                    <CuriosityLibrary />
                    <section className="wordPanel">
                      <div className="wordPanelHeader"><div><span>VOCABULÁRIO</span><small>PALAVRA DO DIA</small></div></div>
                      <div className="wordHero"><div><span className="wordPronunciation">{wordOfDay.pronunciation}</span><h3>{wordOfDay.word}</h3></div><span className="wordClass">ADVÉRBIO</span></div>
                      <p className="wordMeaning">{wordOfDay.meaning}</p>
                      <div className="wordExample"><small>COMO USAR NATURALMENTE</small><blockquote>{wordOfDay.naturalUse}</blockquote></div>
                      <div className="wordInfoGrid"><div><small>SINÔNIMOS</small><p>{wordOfDay.synonyms.join(' · ')}</p></div><div><small>TOM DE USO</small><p>{wordOfDay.tone}</p></div></div>
                      {wordOfDay.note && <div className="wordNote">{wordOfDay.note}</div>}
                      <div className="nextWords"><small>PRÓXIMAS PALAVRAS</small><div>{upcomingWords.map((item) => <span key={item.word} title={item.hint}>{item.word}</span>)}</div></div>
                    </section>
                  </>
                )}

                {dossier && (
                  <details className="dossierPanel dossierPanelV3">
                    <summary className="dossierSummary"><div><span>APROFUNDAMENTO</span><strong>{dossier.title}</strong><small>{dossier.readingTime}</small></div><em>Ver análise completa</em></summary>
                    <div className="dossierContentV3">
                      <div className="dossierHero"><p>PARA ENTENDER DE VERDADE</p><h3>{dossier.title}</h3><div className="dossierDeck">{dossier.deck}</div></div>
                      <div className="dossierOpening">{dossier.opening.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                      <div className="dossierSections">{dossier.sections.map((section, index) => <section className="dossierSection" key={`${section.title}-${index}`}><div className="dossierSectionIndex">{String(index + 1).padStart(2, '0')}</div><div className="dossierSectionBody">{section.kicker && <small>{section.kicker}</small>}<h4>{section.title}</h4>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</div></section>)}</div>
                      {dossier.callout && <aside className="dossierCallout"><small>{dossier.callout.label}</small><strong>{dossier.callout.title}</strong><p>{dossier.callout.text}</p></aside>}
                      <div className="dossierTakeaways"><div className="sectionEyebrow">PARA GUARDAR</div><h4>Três ideias principais</h4><ol>{dossier.takeaways.map((item) => <li key={item}>{item}</li>)}</ol></div>
                      {dossier.sources && dossier.sources.length > 0 && <div className="dossierSources"><small>FONTES</small>{dossier.sources.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label} ↗</a>)}</div>}
                      {dossier.disclaimer && <div className="dossierDisclaimer">{dossier.disclaimer}</div>}
                    </div>
                  </details>
                )}

                {category.subcategories && <div className="chips">{category.subcategories.map((item) => <span key={item}>{item}</span>)}</div>}
                {content.disclaimer && <div className="disclaimer">{content.disclaimer}</div>}

                {content.sources && content.sources.length > 0 && (
                  <details className="sourceBlock sourceBlockV3">
                    <summary><span>Fontes verificadas</span><b>{content.sources.length}</b></summary>
                    <div className="sourceGrid">{content.sources.map((source, index) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}><span>{String(index + 1).padStart(2, '0')}</span><b>{source.label}</b><em>↗</em></a>)}</div>
                  </details>
                )}
              </>
            )}

            <details className="sharePack sharePackV3 magazineSharePack">
              <summary><div><span>COMPARTILHAR</span><strong>{active === 'hoje' ? `Resumo completo · ${todayDrops.length} áreas` : 'Enviar esta matéria'}</strong></div><em>WhatsApp / copiar</em></summary>
              <div className="sharePackBody">
                <div className="sharePreview exactPreview"><small>PRÉVIA</small><pre>{shortSharePreview}</pre></div>
                <div className="shareButtons"><button onClick={() => copyText('short')}>{copied === 'short' ? '✓ Resumo copiado' : active === 'hoje' ? 'Copiar todas as áreas' : 'Copiar resumo'}</button><button className="share" onClick={() => shareWhatsApp('short')}>{active === 'hoje' ? 'WhatsApp · todas as áreas' : 'WhatsApp · resumo'}</button><button onClick={() => shareWhatsApp('full')}>WhatsApp · completo</button><button onClick={() => copyText('full')}>{copied === 'full' ? '✓ Completo copiado' : 'Copiar completo'}</button></div>
              </div>
            </details>
          </section>

          <footer className="editionFooter"><span>Father Giulian News</span><b>{categories.length} áreas · {edition.dateLabel}</b></footer>
        </div>
      </main>
    </div>
  );
}
