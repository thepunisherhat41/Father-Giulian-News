'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { candidatePoliticalAnalysis, type CandidatePoliticalAnalysis } from '@/lib/political-candidate-analysis';

type AnalysisHost = {
  name: string;
  element: HTMLElement;
};

function CandidateAnalysisBlock({ name, analysis }: { name: string; analysis: CandidatePoliticalAnalysis }) {
  return (
    <section className="candidateAnalysisBlock" aria-label={`Análise eleitoral de ${name}`}>
      <div className="candidateAnalysisSection proposals">
        <small>PROPOSTAS / BANDEIRAS DECLARADAS</small>
        <ul>
          {analysis.proposals.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>

      <div className="candidateTradeoffGrid">
        <section className="candidateAnalysisSection positives">
          <small>PONTOS POSITIVOS / ARGUMENTOS FAVORÁVEIS</small>
          <ul>
            {analysis.positives.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="candidateAnalysisSection negatives">
          <small>PONTOS NEGATIVOS / CRÍTICAS & RISCOS</small>
          <ul>
            {analysis.negatives.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      </div>

      <div className="candidateAnalysisSources">
        <small>FONTES PARA CONFERIR</small>
        <div>
          {analysis.sources.map((source) => (
            <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodologyNote() {
  return (
    <aside className="candidateMethodology">
      <div>
        <span>COMPARADOR ELEITORAL / METODOLOGIA</span>
        <h3>“Positivo” e “negativo” não são nota nem recomendação de voto.</h3>
      </div>
      <p>
        Os cards separam experiência, propostas declaradas, vantagens potenciais e críticas ou riscos documentados.
        Uma mesma proposta pode ser vista como benefício por um grupo e como custo por outro. O objetivo é mostrar o
        trade-off e levar você até a fonte original. Proposta de campanha também não equivale a medida aprovada nem a resultado garantido.
      </p>
    </aside>
  );
}

export default function PoliticalCandidateAnalysisPortal() {
  const [hosts, setHosts] = useState<AnalysisHost[]>([]);
  const [methodologyHost, setMethodologyHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const sync = () => {
      const nextHosts: AnalysisHost[] = [];
      const cards = Array.from(document.querySelectorAll<HTMLElement>('.candidateCard'));

      cards.forEach((card) => {
        const name = card.querySelector('h4')?.textContent?.trim();
        if (!name || !candidatePoliticalAnalysis[name]) return;

        const hostId = `candidate-analysis-${name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-')}`;
        let host = card.querySelector<HTMLElement>(`#${hostId}`);

        if (!host) {
          host = document.createElement('div');
          host.id = hostId;
          host.className = 'candidateAnalysisHost';
          const source = card.querySelector('.candidateSource');
          if (source) card.insertBefore(host, source);
          else card.appendChild(host);
        }

        nextHosts.push({ name, element: host });
      });

      const tracker = document.querySelector<HTMLElement>('.politicsTracker');
      if (tracker) {
        let noteHost = tracker.querySelector<HTMLElement>('#candidate-analysis-methodology');
        if (!noteHost) {
          noteHost = document.createElement('div');
          noteHost.id = 'candidate-analysis-methodology';
          const notice = tracker.querySelector('.electionNotice');
          if (notice?.nextSibling) tracker.insertBefore(noteHost, notice.nextSibling);
          else tracker.prepend(noteHost);
        }
        setMethodologyHost(noteHost);
      } else {
        setMethodologyHost(null);
      }

      setHosts(nextHosts);
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {methodologyHost && createPortal(<MethodologyNote />, methodologyHost)}
      {hosts.map(({ name, element }) => createPortal(
        <CandidateAnalysisBlock name={name} analysis={candidatePoliticalAnalysis[name]} />,
        element,
        name,
      ))}
    </>
  );
}
