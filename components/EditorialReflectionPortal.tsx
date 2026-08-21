'use client';

import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { categories } from '@/lib/categories';
import { dailyContent, type DailyIntel } from '@/lib/daily-content';
import { reflectionFor, type ReflectionProfile } from '@/lib/editorial-reflection-framework';

type Mount = {
  host: HTMLElement;
  slug: string;
  label: string;
  content: DailyIntel;
};

type ConvictionStage = 'OPEN' | 'LEANING' | 'NEED_EVIDENCE' | 'DECIDED';

type ReflectionJournal = {
  stage: ConvictionStage;
  firstTake: string;
  changeMyMind: string;
  updatedAt?: string;
};

const defaultJournal: ReflectionJournal = {
  stage: 'OPEN',
  firstTake: '',
  changeMyMind: '',
};

const stageOptions: Array<{ value: ConvictionStage; label: string; short: string }> = [
  { value: 'OPEN', label: 'Ainda não decidi', short: 'ABERTO' },
  { value: 'LEANING', label: 'Tenho uma hipótese', short: 'HIPÓTESE' },
  { value: 'NEED_EVIDENCE', label: 'Preciso de mais evidência', short: 'MAIS DADOS' },
  { value: 'DECIDED', label: 'Formei uma opinião', short: 'OPINIÃO' },
];

function storageKey(slug: string, title: string) {
  const normalized = title.toLocaleLowerCase('pt-BR').replace(/[^a-z0-9áàâãéêíóôõúç]+/gi, '-').slice(0, 90);
  return `fg-reflection-v12:${slug}:${normalized}`;
}

function openWhatsApp(text: string) {
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

function buildReflectionShare(label: string, content: DailyIntel, reflection: ReflectionProfile) {
  const lines = [
    `*${label.toUpperCase()} · PARA PENSAR*`,
    '',
    `*${content.title}*`,
    '',
    `*Pergunta central*`,
    reflection.centralQuestion,
    '',
    '*Lentes para analisar*',
    ...reflection.lenses.slice(0, 3).map((item) => `• ${item}`),
    '',
    '*Contrapontos que merecem força*',
    ...reflection.counterpoints.slice(0, 3).map((item) => `• ${item}`),
    '',
    '*O que mudaria a leitura*',
    ...reflection.evidence.slice(0, 3).map((item) => `• ${item}`),
    '',
    '*Perguntas para refletir*',
    ...reflection.questions.slice(0, 3).map((item) => `• ${item}`),
    '',
    `*Viés para vigiar:* ${reflection.bias}`,
  ];
  if (reflection.safetyNote) lines.push('', `_Nota: ${reflection.safetyNote}_`);
  const source = content.sources?.[0];
  if (source) lines.push('', `Fonte principal da matéria: ${source.label}`, source.url);
  return lines.join('\n').trim();
}

function ReflectionCard({ title, items, tone }: { title: string; items: string[]; tone?: string }) {
  return (
    <article className="reflectionCardV12" data-tone={tone ?? 'neutral'}>
      <small>{title}</small>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </article>
  );
}

function ReflectionDesk({ slug, label, content }: { slug: string; label: string; content: DailyIntel }) {
  const reflection = useMemo(() => reflectionFor(slug, content), [slug, content]);
  const key = useMemo(() => storageKey(slug, content.title), [slug, content.title]);
  const [journal, setJournal] = useState<ReflectionJournal>(defaultJournal);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      setJournal(raw ? { ...defaultJournal, ...JSON.parse(raw) } : defaultJournal);
    } catch {
      setJournal(defaultJournal);
    }
    setSaved(false);
  }, [key]);

  const persist = (next: ReflectionJournal) => {
    const payload = { ...next, updatedAt: new Date().toISOString() };
    setJournal(payload);
    try {
      window.localStorage.setItem(key, JSON.stringify(payload));
      setSaved(true);
      window.setTimeout(() => setSaved(false), 1400);
    } catch {
      setSaved(false);
    }
  };

  const sourceCount = content.sources?.length ?? 0;
  const evidenceBlocks = (content.sections ?? []).length;

  return (
    <section className="editorialReflectionV12" data-reflection-slug={slug}>
      <header className="reflectionHeroV12">
        <div>
          <span>{reflection.eyebrow}</span>
          <h3>Não pare na informação. Teste a conclusão.</h3>
          <p>{reflection.centralQuestion}</p>
        </div>
        <button onClick={() => openWhatsApp(buildReflectionShare(label, content, reflection))}>↗ Compartilhar reflexão</button>
      </header>

      <div className="reflectionEvidenceBarV12" aria-label="Sinais de base editorial">
        <span><b>{sourceCount}</b> {sourceCount === 1 ? 'fonte vinculada' : 'fontes vinculadas'}</span>
        <span><b>{evidenceBlocks}</b> blocos de contexto</span>
        <span><i /> OPINIÃO NÃO É OBRIGATÓRIA</span>
      </div>

      <div className="reflectionGridV12">
        <ReflectionCard title="01 · LENTES PARA ANALISAR" items={reflection.lenses} tone="lens" />
        <ReflectionCard title="02 · CONTRAPONTO FORTE" items={reflection.counterpoints} tone="counter" />
        <ReflectionCard title="03 · O QUE MUDARIA A LEITURA" items={reflection.evidence} tone="evidence" />
        <ReflectionCard title="04 · DECISÕES / POSIÇÕES POSSÍVEIS" items={reflection.decisions} tone="decision" />
      </div>

      <section className="reflectionQuestionsV12">
        <div className="reflectionSectionHeadingV12">
          <span>05</span>
          <div><small>PERGUNTAS QUE EVITAM CONCLUSÃO AUTOMÁTICA</small><h4>Antes de dizer “eu acho”, tente responder</h4></div>
        </div>
        <ol>{reflection.questions.map((item) => <li key={item}>{item}</li>)}</ol>
      </section>

      <aside className="reflectionBiasV12">
        <small>VIÉS PARA VIGIAR NESTE TEMA</small>
        <p>{reflection.bias}</p>
      </aside>

      {reflection.safetyNote ? <aside className="reflectionSafetyV12"><b>NOTA DE SEGURANÇA</b><p>{reflection.safetyNote}</p></aside> : null}

      <section className="reflectionJournalV12">
        <header>
          <div><span>MEU RACIOCÍNIO · SALVO SÓ NESTE NAVEGADOR</span><h4>Diário de convicção</h4></div>
          <em>{saved ? 'SALVO ✓' : journal.updatedAt ? 'SALVO LOCALMENTE' : 'PRIVADO'}</em>
        </header>

        <div className="reflectionStageV12" role="group" aria-label="Estado da sua opinião">
          {stageOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className={journal.stage === option.value ? 'active' : ''}
              onClick={() => persist({ ...journal, stage: option.value })}
              title={option.label}
            >
              <small>{option.short}</small>
              <span>{option.label}</span>
            </button>
          ))}
        </div>

        <div className="reflectionNotesV12">
          <label>
            <span>O que eu penso agora — e por quê?</span>
            <textarea
              value={journal.firstTake}
              onChange={(event) => setJournal({ ...journal, firstTake: event.target.value })}
              onBlur={() => persist(journal)}
              placeholder="Ex.: tendo a concordar, mas ainda preciso entender o impacto em..."
              rows={4}
            />
          </label>
          <label>
            <span>O que me faria mudar de ideia?</span>
            <textarea
              value={journal.changeMyMind}
              onChange={(event) => setJournal({ ...journal, changeMyMind: event.target.value })}
              onBlur={() => persist(journal)}
              placeholder="Ex.: mudaria minha leitura se aparecesse evidência confiável de que..."
              rows={4}
            />
          </label>
        </div>
        <p className="reflectionPrivacyV12">Suas anotações ficam no localStorage deste navegador. Elas não são incluídas no compartilhamento e não são enviadas pelo Father Giulian News.</p>
      </section>
    </section>
  );
}

export default function EditorialReflectionPortal() {
  const [mount, setMount] = useState<Mount | null>(null);

  useEffect(() => {
    let frame = 0;
    const sync = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const shell = document.querySelector<HTMLElement>('.magazineShell');
        const slug = shell?.dataset.active ?? '';
        const content = dailyContent[slug];
        const label = categories.find((item) => item.slug === slug)?.label ?? slug;
        const panel = document.querySelector<HTMLElement>('.articlePanel');

        document.querySelectorAll<HTMLElement>('.editorial-reflection-host-v12').forEach((node) => {
          if (node.dataset.slug !== slug) node.remove();
        });

        if (!slug || !content || !panel) {
          setMount(null);
          return;
        }

        let host = panel.querySelector<HTMLElement>(`.editorial-reflection-host-v12[data-slug="${slug}"]`);
        if (!host) {
          host = document.createElement('div');
          host.className = 'editorial-reflection-host-v12';
          host.dataset.slug = slug;

          const policy = panel.querySelector('#policy-conversation-v11-host');
          const deepRead = panel.querySelector('.editorial-deep-read-host-v7');
          const source = panel.querySelector('.sourceBlock, .sourceBlockV3');
          const share = panel.querySelector('.sharePack');

          if (deepRead?.nextSibling) panel.insertBefore(host, deepRead.nextSibling);
          else if (policy?.nextSibling) panel.insertBefore(host, policy.nextSibling);
          else if (source) panel.insertBefore(host, source);
          else if (share) panel.insertBefore(host, share);
          else panel.appendChild(host);
        }

        setMount({ host, slug, label, content });
      });
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-active'] });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.querySelectorAll('.editorial-reflection-host-v12').forEach((node) => node.remove());
    };
  }, []);

  return mount ? createPortal(
    <ReflectionDesk slug={mount.slug} label={mount.label} content={mount.content} />,
    mount.host,
  ) : null;
}
