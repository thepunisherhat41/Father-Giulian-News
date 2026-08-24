'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './ReelsExperience.module.css';
import { categories } from '@/lib/categories';
import { dailyContent, edition } from '@/lib/daily-content';
import { findCurrentRichMedia } from '@/lib/current-rich-media';
import { applyDailyOverride20260821_10h } from '@/lib/daily-overrides-2026-08-21-10h';

type Reel = any;

const CURIOSITY_REEL: Reel = {
  slug: 'curiosidade-do-dia', label: 'Curiosidade do dia', emoji: '✨', kind: 'special',
  title: 'Vocês nunca enxergam exatamente o mesmo arco-íris',
  detail: 'Mesmo lado a lado, a luz que chega aos olhos de cada pessoa vem de gotas diferentes. Na prática, cada observador vê o seu próprio arco-íris. É por isso que você nunca consegue chegar ao “fim” dele.',
  conversation: 'Qual fenômeno ou lugar do mundo vocês gostariam de ver juntos um dia?',
  category: { slug: 'curiosidade-do-dia', label: 'Curiosidade do dia' },
  content: { badge: 'DESCOBERTA · 24/08', title: 'Uma descoberta para contar um ao outro', summary: 'Uma curiosidade curta, verdadeira e boa para virar conversa.', sections: [] },
};

const TALK_REEL: Reel = {
  slug: 'papo-do-dia', label: 'Papo de hoje', emoji: '💬', kind: 'special',
  title: 'Uma pergunta que vocês talvez nunca tenham feito',
  detail: 'Se vocês pudessem guardar em uma cápsula do tempo apenas três coisas da vida de vocês hoje para o bebê conhecer no futuro, o que colocariam?',
  conversation: 'Cada um escolhe três coisas e explica por quê.',
  category: { slug: 'papo-do-dia', label: 'Papo do dia' },
  content: { badge: 'CONVERSA · 24/08', title: 'Uma pergunta por dia', summary: 'Um assunto novo para vocês conversarem sem parecer roteiro pronto.', sections: [] },
};

const CHALLENGE_REEL: Reel = {
  slug: 'desafio-do-casal', label: 'Desafio do casal', emoji: '💞', kind: 'special',
  title: 'Desafio de hoje: escolham uma música um para o outro',
  detail: 'Cada um escolhe uma música que lembra uma fase boa de vocês. Ouçam as duas sem mexer no celular e contem por que escolheram aquela música.',
  category: { slug: 'desafio-do-casal', label: 'Desafio do casal' },
  content: { badge: 'DESAFIO · 24/08', title: 'Duas músicas e uma memória', summary: 'Uma missão simples para criar conversa e memória boa.', sections: [] },
};

const CORINTHIANS_REEL: Reel = {
  slug: 'corinthians-hoje', label: 'Corinthians Hoje', emoji: '⚫⚪', kind: 'osint',
  title: 'Timão hoje: clássico no radar e bastidores pressionados',
  detail: 'Radar de 24/08: depois do 2 a 1 para o Coritiba, o Corinthians está em 10º com 32 pontos. O próximo jogo será o clássico contra o Santos, domingo (30), às 16h, na Neo Química Arena.',
  conversation: 'Palpite para Corinthians x Santos? E qual deveria ser a prioridade agora: Brasileirão ou Libertadores?',
  videoEmbed: 'https://www.youtube.com/embed/wNwIwusgns8?autoplay=1&mute=1&loop=1&playlist=wNwIwusgns8&playsinline=1&rel=0',
  category: { slug: 'corinthians-hoje', label: 'Corinthians Hoje' },
  content: {
    badge: 'OSINT DO DIA · 24/08',
    title: 'Corinthians: o que realmente importa hoje',
    summary: 'Radar diário cruzando notícias do dia, situação do elenco, resultado mais recente e agenda confirmada.',
    sections: [
      { title: 'O que aconteceu', paragraphs: ['O Corinthians perdeu por 2 a 1 para o Coritiba no domingo e chegou ao clássico com pressão por reação no Brasileiro.'], bullets: ['Breno Bidon recebeu o terceiro amarelo e está suspenso contra o Santos.', 'Rodrigo Garro, que cumpriu suspensão contra o Coritiba, pode voltar.'] },
      { title: 'Próximos jogos', bullets: ['30/08 · 16h — Corinthians x Santos · Neo Química Arena · Brasileirão.', '06/09 · 19h30 — Corinthians x Chapecoense · Neo Química Arena · Brasileirão.', 'Libertadores — Corinthians x Estudiantes nas quartas; datas-base em setembro.'] },
      { title: 'Bastidores', paragraphs: ['Reportagens de hoje também apontam pressão financeira envolvendo direitos de imagem. Como os valores vêm de apuração jornalística, o radar os apresenta como informação reportada, não como dado auditado oficial do clube.'] },
    ],
    sources: [
      { label: 'ge · Corinthians · 24/08/2026', url: 'https://ge.globo.com/futebol/times/corinthians/noticia/2026/08/24/analise-desfalques-e-falta-de-eficiencia-impedem-reacao-do-corinthians-no-brasileirao.ghtml' },
      { label: 'UOL · Corinthians · 24/08/2026', url: 'https://www.uol.com.br/esporte/futebol/ultimas-noticias/2026/08/24/corinthians-aguarda-entrada-de-recurso-para-cumprir-promessa-ao-elenco.ghtm' },
      { label: 'ge · tabela das rodadas 25 e 26', url: 'https://ge.globo.com/ba/futebol/brasileirao-serie-a/noticia/2026/08/14/cbf-divulga-tabela-detalhada-das-rodadas-25-e-26-da-serie-a-do-brasileirao.ghtml' },
    ],
  },
};

function getImage(label: string, title: string) {
  return findCurrentRichMedia(label, title)?.images?.[0];
}

function isFreshToday(item: Reel) {
  if (item.kind === 'special' || item.kind === 'osint') return true;
  const content = item.content;
  if (!content) return false;
  const haystack = [
    content.badge,
    content.title,
    content.summary,
    content.shareSummary,
    ...(content.sources ?? []).flatMap((source: any) => [source.label, source.url]),
  ].filter(Boolean).join(' ').toLowerCase();
  const tokens = [edition.date, edition.dateLabel, '24/08/2026', '24 ago 2026', '24 de agosto de 2026', '2026-08-24']
    .filter(Boolean)
    .map((token) => String(token).toLowerCase());
  return tokens.some((token) => haystack.includes(token)) || /\bhoje\b|nesta segunda|24\/08/.test(haystack);
}

function shareText(slug: string, reel?: Reel) {
  if (reel?.kind === 'special') {
    return [`*${reel.label.toUpperCase()} · ${edition.date}*`, '', `*${reel.title}*`, '', reel.detail, ...(reel.conversation ? ['', `💬 ${reel.conversation}`] : [])].join('\n');
  }
  const content = reel?.content ?? dailyContent[slug];
  const category = reel?.category ?? categories.find((item) => item.slug === slug);
  if (!content || !category) return '';
  const bullets = content.sections.flatMap((section: any) => section.bullets ?? []).slice(0, 3);
  return [
    `*${category.label.toUpperCase()} · ${edition.date}*`, '', `*${content.title}*`, '',
    content.shareSummary ?? content.summary,
    ...(bullets.length ? ['', ...bullets.map((item: string) => `- ${item}`)] : []),
    ...(content.sources?.[0] ? ['', `Fonte: ${content.sources[0].label}`, content.sources[0].url] : []),
  ].join('\n');
}

function openShare(slug: string, reel?: Reel) {
  const text = shareText(slug, reel);
  if (text) window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

export default function ReelsExperience() {
  applyDailyOverride20260821_10h(true);
  const [detailSlug, setDetailSlug] = useState<string | null>(null);
  const feedRef = useRef<HTMLDivElement>(null);

  const reels = useMemo<Reel[]>(() => {
    const special: Reel[] = [
      { ...CURIOSITY_REEL, image: getImage('Curiosidades', dailyContent.curiosidades?.title ?? CURIOSITY_REEL.title) },
      { ...TALK_REEL, image: getImage('Curiosidades', dailyContent.curiosidades?.title ?? TALK_REEL.title) },
      { ...CHALLENGE_REEL, image: getImage('Música', dailyContent.musica?.title ?? CHALLENGE_REEL.title) },
    ];

    const corinthians: Reel = {
      ...CORINTHIANS_REEL,
      image: getImage('Carros', CORINTHIANS_REEL.title),
    };

    const editorial: Reel[] = categories
      .filter((category) => category.slug !== 'hoje')
      .map((category) => ({
        slug: category.slug,
        label: category.label,
        emoji: category.emoji,
        kind: category.slug === 'seguranca-zl' ? 'local-osint' : 'editorial',
        title: dailyContent[category.slug]?.title,
        detail: dailyContent[category.slug]?.summary,
        category,
        content: dailyContent[category.slug],
        image: dailyContent[category.slug] ? getImage(category.label, dailyContent[category.slug].title) : undefined,
      }))
      .filter((item) => item.content && item.title && item.detail)
      .filter(isFreshToday);

    // Corinthians é um radar separado. Zona Leste só entra quando houver atualização
    // realmente datada de hoje; conteúdo local antigo não ganha sobrevida artificial.
    return [...special, corinthians, ...editorial];
  }, []);

  const detail = detailSlug ? reels.find((item) => item.slug === detailSlug) : undefined;

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)');
    const sync = () => {
      document.documentElement.style.overflow = mq.matches ? 'hidden' : '';
      document.body.style.overflow = mq.matches ? 'hidden' : '';
    };
    sync();
    mq.addEventListener('change', sync);
    return () => {
      mq.removeEventListener('change', sync);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={styles.root} aria-label="Father Giulian News em modo Reels">
      <div className={styles.feed} ref={feedRef}>
        {reels.map((reel, index) => (
          <article className={`${styles.reel} ${reel.kind === 'special' ? styles.special : ''}`} data-reel-index={index} key={reel.slug}>
            {reel.videoEmbed ? (
              <figure className={styles.videoMedia}><iframe src={reel.videoEmbed} title={`Vídeo de ${reel.label}`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /></figure>
            ) : reel.image ? (
              <figure className={styles.media}><img src={reel.image.url} alt={reel.image.alt ?? reel.label} referrerPolicy="no-referrer" /></figure>
            ) : (
              <div className={styles.art} aria-hidden="true"><span>{reel.emoji}</span></div>
            )}

            <div className={styles.top}>
              <div className={styles.brand}><span className={styles.mark}>FG</span><span>NEWS · {edition.dateLabel}</span></div>
              <div className={styles.counter}>{index + 1} / {reels.length}</div>
            </div>

            <div className={styles.content}>
              <div className={styles.category}><span>{reel.emoji}</span>{reel.label}{reel.kind === 'osint' && <b className={styles.verified}>OSINT · HOJE</b>}</div>
              <h2 className={styles.title}>{reel.title}</h2>
              <p className={styles.summary}>{reel.detail}</p>
              {reel.conversation && <p className={styles.conversation}>💬 {reel.conversation}</p>}
              <div className={styles.hint}>↑ deslize para descobrir a próxima</div>
            </div>

            <div className={styles.actions}>
              {reel.kind !== 'special' && <button className={`${styles.action} ${styles.read}`} onClick={() => setDetailSlug(reel.slug)}><span className={styles.actionIcon}>↗</span><span>Ler</span></button>}
              <button className={styles.action} onClick={() => openShare(reel.slug, reel)}><span className={styles.actionIcon}>◉</span><span>WhatsApp</span></button>
            </div>

            <div className={styles.progress}><i style={{ width: `${((index + 1) / reels.length) * 100}%` }} /></div>
            {index < reels.length - 1 && <div className={styles.swipeCue}>⌃</div>}
          </article>
        ))}
      </div>

      {detail && detail.kind !== 'special' && (
        <div className={styles.detail} role="dialog" aria-modal="true" aria-label={detail.label}>
          <button className={styles.back} onClick={() => setDetailSlug(null)}>← Voltar</button>
          <button className={styles.detailShare} onClick={() => openShare(detail.slug, detail)}>↗</button>
          <div className={styles.detailFeed}>
            <section className={styles.detailReel}>
              {detail.videoEmbed ? <figure className={styles.detailVideo}><iframe src={detail.videoEmbed} title={`Vídeo de ${detail.label}`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /></figure> : detail.image && <figure className={styles.detailMedia}><img src={detail.image.url} alt="" referrerPolicy="no-referrer" /></figure>}
              <div className={styles.detailShade} />
              <div className={styles.detailCopy}><small>{detail.emoji} {detail.label} · {detail.content.badge ?? 'EDIÇÃO DE HOJE'}</small><h2>{detail.content.title}</h2><p>{detail.content.summary}</p><p><strong>Continue deslizando para ler.</strong></p></div>
            </section>

            {detail.content.sections.map((section: any, sectionIndex: number) => (
              <section className={styles.detailReel} key={`${detail.slug}-${section.title}-${sectionIndex}`}>
                {detail.image && <figure className={styles.detailMedia}><img src={detail.image.url} alt="" referrerPolicy="no-referrer" /></figure>}
                <div className={styles.detailShade} />
                <div className={styles.detailCopy}>
                  <small>{detail.label} · {sectionIndex + 1}/{detail.content.sections.length}</small>
                  <h3>{section.title}</h3>
                  {section.paragraphs?.map((paragraph: string) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets?.length ? <ul>{section.bullets.map((bullet: string) => <li key={bullet}>{bullet}</li>)}</ul> : null}
                  {sectionIndex === detail.content.sections.length - 1 && detail.content.sources?.length ? <div className={styles.sources}>{detail.content.sources.map((source: any) => <a className={styles.source} href={source.url} target="_blank" rel="noreferrer" key={source.url}>Fonte: {source.label} ↗</a>)}</div> : null}
                </div>
              </section>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
