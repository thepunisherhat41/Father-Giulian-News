'use client';

import { useMemo, useState } from 'react';
import { categories } from '@/lib/categories';
import { getPregnancyStatus } from '@/lib/pregnancy';
import { dailyContent, edition, todayDrops, type DailyIntel } from '@/lib/daily-content';

function buildWhatsAppText(label: string, emoji: string, content: DailyIntel) {
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

  if (primarySource) {
    lines.push('', `_Fonte: ${primarySource}_`);
  }

  lines.push('', `☀️ *Father Giulian News · ${edition.date}*`);
  return lines.join('\n');
}

export default function HomePage() {
  const pregnancy = getPregnancyStatus();
  const [active, setActive] = useState('hoje');
  const [copied, setCopied] = useState(false);

  const category = useMemo(
    () => categories.find((item) => item.slug === active) ?? categories[0],
    [active],
  );

  const content = dailyContent[active] ?? dailyContent.hoje;

  const openMission = (slug: string) => {
    setActive(slug);
    setCopied(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copy = async () => {
    const text = buildWhatsAppText(category.label, category.emoji, content);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const shareWhatsApp = () => {
    const text = buildWhatsAppText(category.label, category.emoji, content);
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

          <div className="articleActions">
            <button onClick={copy}>{copied ? '✓ COPIADO PARA O ZAP' : '⧉ COPIAR FORMATADO'}</button>
            <button className="share" onClick={shareWhatsApp}>↗ COMPARTILHAR NO WHATSAPP</button>
          </div>
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
