'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { deepReadForSlug, type EditorialDeepRead } from '@/lib/editorial-deep-read-current';

const dedicated = new Set(['hoje','brasil','seguranca-zl','politica','gravidez','carros','motos','musica','games','security-briefing','appsec-ssdlc']);

type Mount = { host: HTMLElement; data: EditorialDeepRead; slug: string };

function Block({ title, items }: { title: string; items: string[] }) {
  return <section><small>{title}</small><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>;
}

function DeepRead({ data }: { data: EditorialDeepRead }) {
  return (
    <section className="editorialDeepReadV7">
      <header><div><span>LEITURA AMPLIADA · EDIÇÃO ATUAL</span><h3>Além do resumo</h3></div><p>Contexto, impacto, limites e próximos sinais para não ficar só na manchete.</p></header>
      <div className="editorialDeepReadGridV7">
        <Block title="O QUE ESTÁ POR TRÁS" items={data.context} />
        <Block title="IMPACTO / APLICAÇÃO" items={data.practical} />
        <Block title="LIMITES E INCERTEZAS" items={data.limits} />
        <Block title="O QUE ACOMPANHAR" items={data.watch} />
      </div>
    </section>
  );
}

export default function EditorialDeepReadPortal() {
  const [mount, setMount] = useState<Mount | null>(null);
  useEffect(() => {
    let frame = 0;
    const sync = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const shell = document.querySelector<HTMLElement>('.magazineShell');
        const slug = shell?.dataset.active || '';
        document.querySelectorAll('.editorial-deep-read-host-v7').forEach((node) => {
          if ((node as HTMLElement).dataset.slug !== slug) node.remove();
        });
        if (!slug || dedicated.has(slug)) { setMount(null); return; }
        const data = deepReadForSlug(slug);
        const panel = document.querySelector<HTMLElement>('.articlePanel');
        if (!data || !panel) { setMount(null); return; }
        let host = panel.querySelector<HTMLElement>(`.editorial-deep-read-host-v7[data-slug="${slug}"]`);
        if (!host) {
          host = document.createElement('div');
          host.className = 'editorial-deep-read-host-v7';
          host.dataset.slug = slug;
          const source = panel.querySelector('.sourceBlock, .sourceBlockV3');
          const share = panel.querySelector('.sharePack');
          if (source) panel.insertBefore(host, source);
          else if (share) panel.insertBefore(host, share);
          else panel.appendChild(host);
        }
        setMount({ host, data, slug });
      });
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['data-active']});
    return ()=>{cancelAnimationFrame(frame);observer.disconnect();};
  },[]);
  return mount ? createPortal(<DeepRead data={mount.data} />, mount.host) : null;
}
