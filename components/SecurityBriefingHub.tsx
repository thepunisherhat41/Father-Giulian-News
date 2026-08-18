'use client';

import { useMemo, useState } from 'react';
import { securityBriefingPillars, securityBriefingStories, type SecurityBriefingStory } from '@/lib/security-briefing-content';

function whatsapp(text: string) {
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

async function copy(text: string) {
  await navigator.clipboard.writeText(text);
}

function StoryVisual({ story }: { story: SecurityBriefingStory }) {
  return (
    <div className="briefingVisual" role="img" aria-label={`Visual editorial: ${story.title}`}>
      <svg viewBox="0 0 900 420" aria-hidden="true">
        <defs>
          <linearGradient id={`bg-${story.id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#081612" />
            <stop offset="1" stopColor="#101a28" />
          </linearGradient>
          <radialGradient id={`pulse-${story.id}`} cx="76%" cy="28%" r="56%">
            <stop offset="0" stopColor="#27ff9a" stopOpacity=".23" />
            <stop offset="1" stopColor="#27ff9a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="900" height="420" fill={`url(#bg-${story.id})`} />
        <rect width="900" height="420" fill={`url(#pulse-${story.id})`} />
        {Array.from({ length: 9 }).map((_, index) => (
          <line key={index} x1="0" x2="900" y1={45 + index * 42} y2={45 + index * 42} stroke="#8cb6aa" strokeOpacity=".07" />
        ))}
        <circle cx="720" cy="142" r="82" fill="none" stroke="#27ff9a" strokeOpacity=".28" strokeWidth="2" />
        <circle cx="720" cy="142" r="54" fill="none" stroke="#27ff9a" strokeOpacity=".12" strokeWidth="12" />
        <path d="M90 322 C190 248, 286 350, 390 264 S590 330, 790 235" fill="none" stroke="#27ff9a" strokeOpacity=".72" strokeWidth="4" />
        <circle cx="390" cy="264" r="8" fill="#27ff9a" />
      </svg>
      <div className="briefingVisualCopy">
        <span>{story.visual.icon}</span>
        <small>{story.visual.signal}</small>
        <strong>{story.visual.metric}</strong>
      </div>
      <div className={`briefingPriority priority-${story.priority.toLowerCase()}`}>{story.priority}</div>
    </div>
  );
}

function storyText(story: SecurityBriefingStory, mode: 'executive' | 'technical') {
  if (mode === 'executive') {
    return [
      `*SECURITY BRIEFING · ${story.pillar}*`, '', `*${story.title}*`, '', story.executiveShare, '',
      `Público: ${story.audience.join(' · ')}`,
      `Referências: ${story.frameworks.join(' · ')}`, '',
      `Fonte: ${story.source.label}`, story.source.url,
    ].join('\n');
  }

  return [
    `*TECHNICAL SECURITY BRIEF · ${story.pillar}*`, '', `*${story.title}*`, '', story.technicalShare, '',
    '*Ações sugeridas*', ...story.actionNow.map((item) => `- ${item}`), '',
    `Frameworks: ${story.frameworks.join(' · ')}`,
    `Fonte: ${story.source.label}`, story.source.url,
  ].join('\n');
}

export default function SecurityBriefingHub() {
  const [pillar, setPillar] = useState('TODOS');
  const [mode, setMode] = useState<'executive' | 'technical'>('executive');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const stories = useMemo(
    () => pillar === 'TODOS' ? securityBriefingStories : securityBriefingStories.filter((story) => story.pillar === pillar),
    [pillar],
  );

  const copyStory = async (story: SecurityBriefingStory) => {
    try {
      await copy(storyText(story, mode));
      setCopiedId(story.id);
      window.setTimeout(() => setCopiedId(null), 1600);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <section className="securityBriefingHub">
      <header className="briefingHero">
        <div>
          <span>TEAM INTELLIGENCE / SHARE MODE</span>
          <h3>Security Briefing</h3>
          <p>Segurança, tecnologia e negócio traduzidos em decisões. O objetivo é você conseguir ler, entender e compartilhar com o time sem mandar uma parede de links.</p>
        </div>
        <div className="briefingScore"><small>TODAY&apos;S SIGNALS</small><strong>{securityBriefingStories.length}</strong><span>CURATED</span></div>
      </header>

      <div className="briefingModeSwitch" aria-label="Modo de leitura">
        <button className={mode === 'executive' ? 'active' : ''} onClick={() => setMode('executive')}>💼 EXECUTIVE VIEW</button>
        <button className={mode === 'technical' ? 'active' : ''} onClick={() => setMode('technical')}>🧬 TECHNICAL VIEW</button>
      </div>

      <div className="briefingFilters">
        {securityBriefingPillars.map((item) => <button key={item} className={pillar === item ? 'active' : ''} onClick={() => setPillar(item)}>{item}</button>)}
      </div>

      <section className="briefingVideoIntel">
        <div>
          <span>VIDEO INTEL / ADVERSARIAL AI</span>
          <h4>Use vídeo como complemento, não como fonte única</h4>
          <p>Discussão da Unit 42/Palo Alto Networks sobre adversarial AI. O feed mantém OWASP, CISA, NIST e demais referências primárias como base das decisões.</p>
        </div>
        <div className="briefingVideoFrame">
          <iframe title="Adversarial AI · Unit 42" src="https://www.youtube-nocookie.com/embed/tfiUSSnVq9o?rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
      </section>

      <div className="briefingGrid">
        {stories.map((story) => (
          <article className="briefingStory" key={story.id}>
            <StoryVisual story={story} />
            <div className="briefingStoryBody">
              <div className="briefingStoryMeta"><span>{story.pillar}</span><b>{story.freshness}</b></div>
              <h4>{story.title}</h4>
              <p className="briefingDeck">{story.deck}</p>
              <div className="briefingImpactGrid">
                <section><small>IMPACTO TÉCNICO</small><p>{story.technicalImpact}</p></section>
                <section><small>IMPACTO PARA NEGÓCIO</small><p>{story.businessImpact}</p></section>
              </div>
              <div className="briefingAction"><small>O QUE FAZER AGORA</small><ul>{story.actionNow.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div className="briefingFrameworks">{story.frameworks.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="briefingAudience"><small>PARA QUEM</small><span>{story.audience.join(' · ')}</span></div>
              <div className="briefingActions">
                <button onClick={() => copyStory(story)}>{copiedId === story.id ? '✓ COPIADO' : mode === 'executive' ? '⧉ COPIAR PARA TEAMS' : '⧉ COPIAR TÉCNICO'}</button>
                <button className="wa" onClick={() => whatsapp(storyText(story, mode))}>↗ WHATSAPP</button>
                <a href={story.source.url} target="_blank" rel="noreferrer">FONTE ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
