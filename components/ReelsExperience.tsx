'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './ReelsExperience.module.css';
import { categories } from '@/lib/categories';
import { dailyContent, edition } from '@/lib/daily-content';
import { findCurrentRichMedia } from '@/lib/current-rich-media';
import { curiosityCollections } from '@/lib/curiosity-collections';

type Reel = any;
type ReelImage = { url: string; alt: string };
type AiTheme = 'conversation' | 'challenge' | 'science' | 'space' | 'body' | 'animals' | 'history' | 'psychology' | 'nature' | 'pregnancy' | 'brazil' | 'travel' | 'music' | 'games' | 'security' | 'cars' | 'motos' | 'mechanic';

const TALK_REEL: Reel = {
  slug: 'papo-do-dia',
  label: 'Papo de hoje',
  emoji: '💬',
  kind: 'special',
  title: 'Se vocês pudessem guardar três coisas de hoje para rever daqui a dez anos, quais seriam?',
  detail: 'Pode ser uma música, uma foto, um hábito, uma frase, um lugar ou até uma coisa boba que hoje faz parte da rotina. Cada um escolhe três e explica por quê.',
  conversation: 'Não precisa chegar na mesma resposta. A graça é descobrir o que cada um percebe como importante agora.',
  category: { slug: 'papo-do-dia', label: 'Papo de hoje' },
  content: {
    badge: 'PAPO DE HOJE',
    title: 'Uma pergunta para render conversa',
    summary: 'Uma ideia curta, natural e sem cara de roteiro pronto.',
    sections: [],
  },
};

const CHALLENGE_REEL: Reel = {
  slug: 'desafio-do-casal',
  label: 'Desafio do casal',
  emoji: '💞',
  kind: 'special',
  title: 'Desafio de hoje: cada um escolhe uma música para o outro',
  detail: 'Escolham uma música que lembre uma fase boa de vocês. Ouçam as duas inteiras, sem ficar mexendo no celular, e depois contem o motivo da escolha.',
  category: { slug: 'desafio-do-casal', label: 'Desafio do casal' },
  content: {
    badge: 'DESAFIO DO DIA',
    title: 'Duas músicas e duas memórias',
    summary: 'Uma missão pequena para criar assunto e uma memória boa no meio da rotina.',
    sections: [],
  },
};

const SERTANEJO_REEL: Reel = {
  slug: 'sertanejo-da-roca',
  label: 'Sertanejo da Roça',
  emoji: '🪕',
  kind: 'special-media',
  title: 'Moda de viola do dia: Chico Mineiro',
  detail: 'Tonico & Tinoco transformaram amizade, estrada e perda em uma das narrativas mais conhecidas da música caipira brasileira. É música para ouvir a história inteira, não apenas o refrão.',
  conversation: 'Qual moda de viola, sertanejo raiz ou música antiga lembra família, estrada ou infância para vocês?',
  videoEmbed: 'https://www.youtube.com/embed/0MnPbJ8hmeE?autoplay=1&mute=1&loop=1&playlist=0MnPbJ8hmeE&playsinline=1&rel=0',
  category: { slug: 'sertanejo-da-roca', label: 'Sertanejo da Roça' },
  content: {
    badge: 'SERTANEJO DA ROÇA',
    title: 'Chico Mineiro · Tonico & Tinoco',
    summary: 'Um Reel próprio para moda de viola, sertanejo raiz, clássicos e histórias dos artistas.',
    sections: [
      {
        title: 'Para ouvir melhor',
        bullets: [
          'Preste atenção na narrativa, não só no refrão.',
          'A música caipira tradicional frequentemente funciona como história oral cantada.',
        ],
      },
    ],
    sources: [{ label: 'Tonico & Tinoco · YouTube', url: 'https://www.youtube.com/watch?v=0MnPbJ8hmeE' }],
  },
};

const CORINTHIANS_REEL: Reel = {
  slug: 'corinthians-hoje',
  label: 'Corinthians Hoje',
  emoji: '⚫⚪',
  kind: 'osint',
  title: 'Timão hoje: clássico no radar e reação virou obrigação',
  detail: 'Depois do 2 a 1 para o Coritiba, o Corinthians chega à semana olhando para o clássico contra o Santos, domingo (30), às 16h, na Neo Química Arena. O radar também acompanha suspensões, retornos, tabela e bastidores.',
  conversation: 'Palpite para Corinthians x Santos? E o que você mudaria primeiro no time?',
  videoEmbed: 'https://www.youtube.com/embed/wNwIwusgns8?autoplay=1&mute=1&loop=1&playlist=wNwIwusgns8&playsinline=1&rel=0',
  category: { slug: 'corinthians-hoje', label: 'Corinthians Hoje' },
  content: {
    badge: 'CORINTHIANS · RADAR DO DIA · 24/08',
    title: 'Corinthians: resultado, elenco e próximos jogos',
    summary: 'OSINT diário do Timão cruzando o que aconteceu, agenda oficial e informações relevantes do elenco.',
    sections: [
      {
        title: 'O que aconteceu',
        paragraphs: ['O Corinthians perdeu por 2 a 1 para o Coritiba no domingo e precisa reagir no Brasileiro.'],
        bullets: [
          'Breno Bidon recebeu o terceiro amarelo e está suspenso contra o Santos.',
          'Rodrigo Garro, que cumpriu suspensão contra o Coritiba, pode voltar.',
        ],
      },
      {
        title: 'Próximos jogos',
        bullets: [
          '30/08 · 16h — Corinthians x Santos · Neo Química Arena · Brasileirão.',
          '06/09 · 19h30 — Corinthians x Chapecoense · Neo Química Arena · Brasileirão.',
          'Libertadores — quartas contra o Estudiantes em setembro.',
        ],
      },
      {
        title: 'Bastidores',
        paragraphs: ['Informações financeiras ou negociais vindas de reportagens são identificadas como apuração jornalística; rumor não é tratado como fato confirmado.'],
      },
    ],
    sources: [
      { label: 'ge · Corinthians · 24/08/2026', url: 'https://ge.globo.com/futebol/times/corinthians/noticia/2026/08/24/analise-desfalques-e-falta-de-eficiencia-impedem-reacao-do-corinthians-no-brasileirao.ghtml' },
      { label: 'UOL · Corinthians · 24/08/2026', url: 'https://www.uol.com.br/esporte/futebol/ultimas-noticias/2026/08/24/corinthians-aguarda-entrada-de-recurso-para-cumprir-promessa-ao-elenco.ghtm' },
    ],
  },
};

const AI_SPRITE = '/reel-ai/sprite.jpg';
const AI_SPRITE_POSITIONS: Record<AiTheme, [number, number]> = {
  conversation: [0, 0], challenge: [1, 0], science: [2, 0],
  space: [0, 1], body: [1, 1], animals: [2, 1],
  history: [0, 2], psychology: [1, 2], nature: [2, 2],
  pregnancy: [0, 3], brazil: [1, 3], travel: [2, 3],
  music: [0, 4], games: [1, 4], security: [2, 4],
  cars: [0, 5], motos: [1, 5], mechanic: [2, 5],
};

const NEWS_ORDER = ['brasil', 'mundo', 'politica', 'tempo', 'seguranca-zl'];
const LIFESTYLE_ORDER = ['viagens', 'musica'];
const TECH_ORDER = ['games', 'tecnologia', 'financas', 'security-briefing', 'seguranca', 'appsec-ssdlc'];
const AUTO_ORDER = ['carros', 'motos', 'mecanica'];

function getImage(label: string, title: string): ReelImage | undefined {
  const image = findCurrentRichMedia(label, title)?.images?.[0];
  return image ? { url: image.url, alt: image.alt ?? label } : undefined;
}

function normalize(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function curiosityTheme(title: string): AiTheme {
  const value = normalize(title);
  if (value.includes('espaco') || value.includes('astronom')) return 'space';
  if (value.includes('corpo') || value.includes('humano') || value.includes('fisiolog')) return 'body';
  if (value.includes('animal')) return 'animals';
  if (value.includes('historia') || value.includes('cultura') || value.includes('linguagem')) return 'history';
  if (value.includes('psicolog') || value.includes('mente') || value.includes('comportamento')) return 'psychology';
  if (value.includes('natureza') || value.includes('terra') || value.includes('planeta') || value.includes('oceano')) return 'nature';
  if (value.includes('tecnolog')) return 'games';
  return 'science';
}

function aiThemeFor(reel: Reel): AiTheme {
  if (reel.slug === 'papo-do-dia') return 'conversation';
  if (reel.slug === 'desafio-do-casal') return 'challenge';
  if (reel.kind === 'curiosity') return curiosityTheme(`${reel.label} ${reel.title}`);
  if (reel.slug === 'gravidez' || reel.slug === 'pai') return 'pregnancy';
  if (reel.slug === 'viagens') return 'travel';
  if (reel.slug === 'musica' || reel.slug === 'sertanejo-da-roca') return 'music';
  if (reel.slug === 'games' || reel.slug === 'tecnologia' || reel.slug === 'financas') return 'games';
  if (reel.slug === 'security-briefing' || reel.slug === 'seguranca' || reel.slug === 'appsec-ssdlc') return 'security';
  if (reel.slug === 'carros') return 'cars';
  if (reel.slug === 'motos') return 'motos';
  if (reel.slug === 'mecanica') return 'mechanic';
  return 'brazil';
}

function spriteStyle(theme: AiTheme) {
  const [column, row] = AI_SPRITE_POSITIONS[theme];
  return {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${AI_SPRITE})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '300% 600%',
    backgroundPosition: `${column * 50}% ${row * 20}%`,
  } as const;
}

function withMandatoryMedia(reel: Reel): Reel {
  if (reel.videoEmbed || reel.image) return reel;
  return { ...reel, aiTheme: aiThemeFor(reel) };
}

function editionTokens() {
  const tokens = new Set<string>();
  const date = String(edition.date ?? '').trim();
  const label = String(edition.dateLabel ?? '').trim();
  if (date) tokens.add(date.toLowerCase());
  if (label) tokens.add(label.toLowerCase());
  const match = date.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (match) {
    const [, day, month, year] = match;
    tokens.add(`${year}-${month}-${day}`);
    tokens.add(`${day}/${month}/${year}`);
  }
  return Array.from(tokens);
}

function hasEditionToken(content: any) {
  const haystack = [
    content?.badge,
    content?.title,
    content?.summary,
    content?.shareSummary,
    ...(content?.sources ?? []).flatMap((source: any) => [source.label, source.url]),
  ].filter(Boolean).join(' ').toLowerCase();
  return editionTokens().some((token) => haystack.includes(token));
}

function hasSameDaySource(content: any) {
  const haystack = (content?.sources ?? [])
    .flatMap((source: any) => [source.label, source.url])
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  return editionTokens().some((token) => haystack.includes(token));
}

function isFreshToday(item: Reel) {
  if (item.kind === 'special' || item.kind === 'special-media' || item.kind === 'curiosity') return true;
  if (!item.content) return false;
  if (item.kind === 'osint' || item.kind === 'local-osint') return hasSameDaySource(item.content);
  return hasEditionToken(item.content);
}

function categoryReel(slug: string): Reel | undefined {
  const category = categories.find((item) => item.slug === slug);
  const content = dailyContent[slug];
  if (!category || !content) return undefined;
  return withMandatoryMedia({
    slug,
    label: category.label,
    emoji: category.emoji,
    kind: slug === 'seguranca-zl' ? 'local-osint' : 'editorial',
    title: content.title,
    detail: content.summary,
    category,
    content,
    image: getImage(category.label, content.title),
  });
}

function dailyCuriosityReels(): Reel[] {
  const dateNumber = Number(String(edition.date ?? '').replace(/\D/g, '')) || 1;
  return curiosityCollections.map((collection, collectionIndex) => {
    const story = collection.stories[(dateNumber + collectionIndex) % collection.stories.length];
    const content = {
      badge: `CURIOSIDADE · ${collection.title.toUpperCase()}`,
      title: story.title,
      summary: story.hook,
      shareSummary: story.shareText,
      sections: [
        { title: 'Como isso funciona', paragraphs: story.explanation },
        { title: 'Conexão inesperada', paragraphs: [story.connection] },
        { title: 'Para guardar', paragraphs: [story.remember] },
      ],
      sources: story.sourceLabel && story.sourceUrl ? [{ label: story.sourceLabel, url: story.sourceUrl }] : [],
    };
    return withMandatoryMedia({
      slug: `curiosidade-${collection.id}`,
      label: `Curiosidade · ${collection.title}`,
      emoji: collection.emoji,
      kind: 'curiosity',
      title: story.title,
      detail: story.hook,
      category: { slug: `curiosidade-${collection.id}`, label: collection.title },
      content,
      image: getImage('Curiosidades', story.title),
    });
  });
}

function shareText(slug: string, reel?: Reel) {
  if (reel?.kind === 'special' || reel?.kind === 'special-media') {
    return [
      `*${reel.label.toUpperCase()} · ${edition.date}*`, '',
      `*${reel.title}*`, '', reel.detail,
      ...(reel.conversation ? ['', `💬 ${reel.conversation}`] : []),
    ].join('\n');
  }

  const content = reel?.content ?? dailyContent[slug];
  const category = reel?.category ?? categories.find((item) => item.slug === slug);
  if (!content || !category) return '';
  const bullets = content.sections?.flatMap((section: any) => section.bullets ?? []).slice(0, 3) ?? [];
  return [
    `*${String(category.label).toUpperCase()} · ${edition.date}*`, '',
    `*${content.title}*`, '', content.shareSummary ?? content.summary,
    ...(bullets.length ? ['', ...bullets.map((item: string) => `- ${item}`)] : []),
    ...(content.sources?.[0] ? ['', `Fonte: ${content.sources[0].label}`, content.sources[0].url] : []),
  ].join('\n');
}

function openShare(slug: string, reel?: Reel) {
  const text = shareText(slug, reel);
  if (text) window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

function ReelMedia({ reel, detail = false }: { reel: Reel; detail?: boolean }) {
  if (reel.videoEmbed) {
    return (
      <figure className={detail ? styles.detailVideo : styles.videoMedia}>
        <iframe
          src={reel.videoEmbed}
          title={`Vídeo de ${reel.label}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </figure>
    );
  }

  if (reel.image) {
    return (
      <figure className={detail ? styles.detailMedia : styles.media}>
        <img src={reel.image.url} alt={reel.image.alt ?? reel.label} referrerPolicy="no-referrer" />
      </figure>
    );
  }

  return (
    <figure className={detail ? styles.detailMedia : styles.media}>
      <div style={spriteStyle(reel.aiTheme ?? aiThemeFor(reel))} aria-label={`Arte gerada por IA para ${reel.label}`} />
    </figure>
  );
}

export default function ReelsExperience() {
  const [detailSlug, setDetailSlug] = useState<string | null>(null);
  const feedRef = useRef<HTMLDivElement>(null);

  const reels = useMemo<Reel[]>(() => {
    const family = ['gravidez', 'pai'].map(categoryReel).filter(Boolean) as Reel[];
    const news = NEWS_ORDER.map(categoryReel).filter(Boolean) as Reel[];
    const lifestyle = LIFESTYLE_ORDER.map(categoryReel).filter(Boolean) as Reel[];
    const tech = TECH_ORDER.map(categoryReel).filter(Boolean) as Reel[];
    const automotive = AUTO_ORDER.map(categoryReel).filter(Boolean) as Reel[];

    const ordered = [
      withMandatoryMedia({ ...TALK_REEL }),
      withMandatoryMedia({ ...CHALLENGE_REEL }),
      ...dailyCuriosityReels(),
      ...family,
      ...news,
      withMandatoryMedia({ ...CORINTHIANS_REEL }),
      ...lifestyle,
      withMandatoryMedia({ ...SERTANEJO_REEL }),
      ...tech,
      ...automotive,
    ];

    return ordered.filter(isFreshToday);
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
          <article
            className={`${styles.reel} ${reel.kind === 'special' ? styles.special : ''}`}
            data-reel-index={index}
            key={reel.slug}
          >
            <ReelMedia reel={reel} />

            <div className={styles.top}>
              <div className={styles.brand}>
                <span className={styles.mark}>FG</span>
                <span>NEWS · {edition.dateLabel}</span>
              </div>
              <div className={styles.counter}>{index + 1} / {reels.length}</div>
            </div>

            <div className={styles.content}>
              <div className={styles.category}>
                <span>{reel.emoji}</span>{reel.label}
                {(reel.kind === 'osint' || reel.kind === 'local-osint') && <b className={styles.verified}>HOJE</b>}
              </div>
              <h2 className={styles.title}>{reel.title}</h2>
              <p className={styles.summary}>{reel.detail}</p>
              {reel.conversation && <p className={styles.conversation}>💬 {reel.conversation}</p>}
              <div className={styles.hint}>↑ deslize para descobrir a próxima</div>
            </div>

            <div className={styles.actions}>
              {reel.kind !== 'special' && (
                <button
                  className={`${styles.action} ${styles.read}`}
                  onClick={() => setDetailSlug(reel.slug)}
                  aria-label={`Ler ${reel.label}`}
                >
                  <span className={styles.actionIcon}>↗</span><span>Ler</span>
                </button>
              )}
              <button
                className={styles.action}
                onClick={() => openShare(reel.slug, reel)}
                aria-label={`Compartilhar ${reel.label}`}
              >
                <span className={styles.actionIcon}>◉</span><span>WhatsApp</span>
              </button>
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
              <ReelMedia reel={detail} detail />
              <div className={styles.detailShade} />
              <div className={styles.detailCopy}>
                <small>{detail.emoji} {detail.label} · {detail.content.badge ?? 'EDIÇÃO DE HOJE'}</small>
                <h2>{detail.content.title}</h2>
                <p>{detail.content.summary}</p>
                <p><strong>Continue deslizando para ler.</strong></p>
              </div>
            </section>

            {(detail.content.sections ?? []).map((section: any, sectionIndex: number) => (
              <section className={styles.detailReel} key={`${detail.slug}-${section.title}-${sectionIndex}`}>
                <ReelMedia reel={detail} detail />
                <div className={styles.detailShade} />
                <div className={styles.detailCopy}>
                  <small>{detail.label} · {sectionIndex + 1}/{detail.content.sections.length}</small>
                  <h3>{section.title}</h3>
                  {section.paragraphs?.map((paragraph: string) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets?.length ? <ul>{section.bullets.map((bullet: string) => <li key={bullet}>{bullet}</li>)}</ul> : null}

                  {sectionIndex === detail.content.sections.length - 1 && detail.content.sources?.length ? (
                    <div className={styles.sources}>
                      {detail.content.sources.map((source: any) => (
                        <a className={styles.source} href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                          Fonte: {source.label} ↗
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
