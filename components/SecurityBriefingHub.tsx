'use client';

import { useMemo, useState } from 'react';
import { securityBriefingPillars, securityBriefingStories, type SecurityBriefingStory } from '@/lib/security-briefing-content';
import { securityBriefingMedia } from '@/lib/security-briefing-media';

function whatsapp(text: string) {
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

async function copy(text: string) {
  await navigator.clipboard.writeText(text);
}

function StoryVisual({ story }: { story: SecurityBriefingStory }) {
  const media = securityBriefingMedia[story.id];
  if (!media) return null;

  return (
    <a className="briefingVisual real" href={media.sourceUrl} target="_blank" rel="noreferrer" aria-label={`Abrir fonte da imagem: ${story.title}`}>
      <img src={media.url} alt={media.alt} loading="lazy" referrerPolicy="no-referrer" />
      <div className="briefingVisualShade" />
      <div className="briefingVisualCredit">
        <small>REAL SOURCE MEDIA</small>
        <strong>{media.caption}</strong>
        <span>{media.credit}</span>
      </div>
      <div className={`briefingPriority priority-${story.priority.toLowerCase()}`}>{story.priority}</div>
    </a>
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
        {stories.map((story) => {
          const hasMedia = Boolean(securityBriefingMedia[story.id]);
          return (
            <article className={`briefingStory ${hasMedia ? 'withVisual' : 'textOnly'}`} key={story.id}>
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
          );
        })}
      </div>
    </section>
  );
}
