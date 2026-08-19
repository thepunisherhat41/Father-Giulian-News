'use client';

import { useEffect } from 'react';

const TOPIC_SELECTORS = [
  '.intelSection',
  '.dossierSection',
  '.candidateCard',
  '.civicGrid article',
  '.maternalChangesGrid article',
  '.wordPanel',
].join(',');

function normalize(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function trimText(value: string, max = 2200) {
  const clean = normalize(value);
  return clean.length > max ? `${clean.slice(0, max - 1).trim()}…` : clean;
}

function topicTitle(element: HTMLElement) {
  return normalize(
    element.querySelector('h3, h4, h5, strong')?.textContent
      ?? element.getAttribute('aria-label')
      ?? 'Tópico',
  );
}

function sourceForTopic(element: HTMLElement) {
  const local = element.querySelector<HTMLAnchorElement>('a[href]');
  if (local?.href) return local;

  const parentPanel = element.closest<HTMLElement>('.maternalChangesPanel, .politicsTracker, .dossierPanel, .articlePanel');
  const contextual = parentPanel?.querySelector<HTMLAnchorElement>(
    '.candidateSource, .candidateAnalysisSources a, .maternalSources a, .dossierSources a, .sourceBlock a',
  );
  return contextual ?? null;
}

function topicPayload(element: HTMLElement) {
  const pageLabel = normalize(document.querySelector('.stage h1')?.textContent ?? 'Father Giulian News');
  const title = topicTitle(element);

  const paragraphs = Array.from(element.querySelectorAll('p'))
    .map((node) => normalize(node.textContent ?? ''))
    .filter(Boolean)
    .slice(0, 3);

  const bullets = Array.from(element.querySelectorAll('li'))
    .map((node) => normalize(node.textContent ?? ''))
    .filter(Boolean)
    .slice(0, 6);

  const source = sourceForTopic(element);
  const lines = [
    `*${pageLabel.toUpperCase()} · TÓPICO*`,
    '',
    `*${title}*`,
    '',
    ...paragraphs,
    ...(bullets.length ? ['', ...bullets.map((item) => `- ${item}`)] : []),
    ...(source?.href ? ['', `Fonte: ${normalize(source.textContent ?? 'referência')}`, source.href] : []),
  ];

  return trimText(lines.join('\n'));
}

function attachButton(element: HTMLElement) {
  if (element.dataset.topicShareReady === 'true') return;
  if (element.closest('.briefingV2Story, .briefingStory, .appsecFeed, .localSecurityHub, .musicHub, .gameHub')) return;

  const style = window.getComputedStyle(element);
  if (style.display === 'none' || style.visibility === 'hidden') return;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'topicShareButton';
  button.setAttribute('aria-label', `Compartilhar ${topicTitle(element)} no WhatsApp`);
  button.innerHTML = '<span>↗</span> WHATSAPP';
  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const text = topicPayload(element);
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  });

  element.dataset.topicShareReady = 'true';
  element.classList.add('hasTopicShare');
  element.prepend(button);
}

export default function TopicShareEnhancer() {
  useEffect(() => {
    const sync = () => {
      document.querySelectorAll<HTMLElement>(TOPIC_SELECTORS).forEach(attachButton);
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
