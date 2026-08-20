'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { dailyContent, type DailyIntel } from '@/lib/daily-content';
import { freshnessForSlug } from '@/lib/editorial-freshness-current';

const dedicated = new Set(['politica','musica','games','gravidez','carros','motos','security-briefing','appsec-ssdlc']);
type Mount = { host: HTMLElement; slug: string; data: DailyIntel };

function Pulse({ slug, data }: { slug: string; data: DailyIntel }) {
  const freshness = freshnessForSlug(slug);
  const sections = (data.sections ?? []).slice(0, 3);
  const sources = (data.sources ?? []).slice(0, 3);
  return (
    <section className="dedicatedDailyPulseV8">
      <header>
        <div><span>ATUALIZAÇÃO DO DIA</span><h3>{data.title}</h3></div>
        <b>{freshness?.state ?? 'VALIDADO'} · {freshness?.validatedAt ?? 'HOJE'}</b>
      </header>
      <p className="dedicatedDailyPulseLead">{data.summary}</p>
      {sections.length > 0 && <div className="dedicatedDailyPulseGrid">
        {sections.map((section) => <article key={section.title}>
          <small>{section.title}</small>
          {section.paragraphs?.slice(0,2).map((text) => <p key={text}>{text}</p>)}
          {section.bullets?.length ? <ul>{section.bullets.slice(0,5).map((item) => <li key={item}>{item}</li>)}</ul> : null}
        </article>)}
      </div>}
      {sources.length > 0 && <footer>{sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>)}</footer>}
    </section>
  );
}

export default function DedicatedDailyPulsePortal() {
  const [mount, setMount] = useState<Mount | null>(null);
  useEffect(() => {
    let frame = 0;
    const sync = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const shell = document.querySelector<HTMLElement>('.magazineShell');
        const slug = shell?.dataset.active || '';
        document.querySelectorAll('.dedicated-daily-pulse-host-v8').forEach((node) => {
          if ((node as HTMLElement).dataset.slug !== slug) node.remove();
        });
        if (!dedicated.has(slug)) { setMount(null); return; }
        const data = dailyContent[slug];
        const article = document.querySelector<HTMLElement>('.articlePanel');
        if (!data || !article) { setMount(null); return; }
        let host = document.querySelector<HTMLElement>(`.dedicated-daily-pulse-host-v8[data-slug="${slug}"]`);
        if (!host) {
          host = document.createElement('div');
          host.className = 'dedicated-daily-pulse-host-v8';
          host.dataset.slug = slug;
          const freshness = document.querySelector('.editorial-freshness-host-v8');
          if (freshness) freshness.insertAdjacentElement('afterend', host);
          else article.insertAdjacentElement('beforebegin', host);
        }
        setMount({ host, slug, data });
      });
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['data-active']});
    return()=>{cancelAnimationFrame(frame);observer.disconnect();};
  },[]);
  return mount ? createPortal(<Pulse slug={mount.slug} data={mount.data}/>,mount.host) : null;
}
