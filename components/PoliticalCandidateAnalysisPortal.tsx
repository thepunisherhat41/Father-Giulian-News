'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { candidatePoliticalAnalysis, type CandidatePoliticalAnalysis } from '@/lib/political-candidate-analysis';
import { candidateMandateContext } from '@/lib/political-mandate-details';
import { candidatePopulationImpact } from '@/lib/political-population-impact';

type AnalysisHost = {
  name: string;
  element: HTMLElement;
};

function CandidateAnalysisBlock({ name, analysis }: { name: string; analysis: CandidatePoliticalAnalysis }) {
  const mandate = candidateMandateContext[name];
  const populationImpacts = candidatePopulationImpact[name] ?? [];

  return (
    <section className="candidateAnalysisBlock" aria-label={`Análise eleitoral de ${name}`}>
      {mandate && (
        <>
          <div className="candidateMandateHeader">
            <div>
              <small>CICLO ELEITORAL 2026</small>
              <strong>MANDATO PRETENDIDO {mandate.mandate}</strong>
            </div>
            <span>{mandate.officeLens}</span>
          </div>

          <div className="candidateProposalBasis">
            <small>DE ONDE VÊM AS PROPOSTAS DESTE CARD</small>
            <strong>{mandate.basis}</strong>
            <p>{mandate.basisNote}</p>
          </div>

          <div className="candidateProposalDeepDive">
            <div className="candidateProposalDeepDiveTitle">
              <small>PROPOSTAS PARA O NOVO MANDATO · LEITURA DETALHADA</small>
              <p>O texto declarado pela candidatura aparece primeiro. Logo abaixo, o site separa significado prático, impacto para a população, caminho institucional, lacunas de detalhamento e como a promessa pode ser cobrada depois.</p>
            </div>

            {analysis.proposals.map((proposal, index) => {
              const detail = mandate.proposalDetails[index];
              const impact = populationImpacts[index];
              return (
                <article className="candidateProposalCard" key={`${name}-${index}`}>
                  <div className="candidateProposalCardTop">
                    <span>PROPOSTA {String(index + 1).padStart(2, '0')}</span>
                    {detail && <b>{detail.origin}</b>}
                  </div>
                  <h5>{proposal}</h5>

                  {impact && (
                    <aside className="candidatePopulationImpact">
                      <div className="candidatePopulationImpactTop">
                        <div>
                          <small>IMPACTO NA VIDA REAL</small>
                          <strong>O que pode mudar para a população</strong>
                        </div>
                        <span>FOCO: CIDADÃO</span>
                      </div>

                      <div className="candidateImpactGroups">
                        <small>QUEM PODE SENTIR PRIMEIRO</small>
                        <div>{impact.groups.map((group) => <span key={group}>{group}</span>)}</div>
                      </div>

                      <p className="candidateImpactEveryday">{impact.everyday}</p>

                      <div className="candidateImpactTradeoffs">
                        <div className="possibleUpside">
                          <small>POTENCIAL BENEFÍCIO PARA A POPULAÇÃO</small>
                          <p>{impact.potentialUpside}</p>
                        </div>
                        <div className="impactWatch">
                          <small>O QUE O CIDADÃO PRECISA OBSERVAR</small>
                          <p>{impact.pointsToWatch}</p>
                        </div>
                      </div>
                    </aside>
                  )}

                  {detail && (
                    <div className="candidateProposalDetailGrid">
                      <div>
                        <small>O QUE ISSO SIGNIFICA NA PRÁTICA</small>
                        <p>{detail.explanation}</p>
                      </div>
                      <div>
                        <small>COMO PODERIA VIRAR POLÍTICA / LEI</small>
                        <p>{detail.institutionalPath}</p>
                      </div>
                      <div>
                        <small>O QUE AINDA PRECISA SER DETALHADO</small>
                        <p>{detail.openQuestions}</p>
                      </div>
                      <div>
                        <small>COMO ACOMPANHAR SE FOR ELEITO</small>
                        <p>{detail.accountability}</p>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </>
      )}

      {!mandate && (
        <div className="candidateAnalysisSection proposals">
          <small>PROPOSTAS / BANDEIRAS DECLARADAS</small>
          <ul>
            {analysis.proposals.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      )}

      <div className="candidateTradeoffGrid">
        <section className="candidateAnalysisSection positives">
          <small>ARGUMENTOS FAVORÁVEIS / VANTAGENS POTENCIAIS</small>
          <ul>
            {analysis.positives.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="candidateAnalysisSection negatives">
          <small>CRÍTICAS / LIMITAÇÕES / PONTOS DE ATENÇÃO</small>
          <ul>
            {analysis.negatives.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      </div>

      <div className="candidateAnalysisSources">
        <small>FONTES PARA CONFERIR O CONTEÚDO</small>
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
    <aside className="candidateMethodology candidateMethodologyExpanded">
      <div>
        <span>COMPARADOR ELEITORAL / METODOLOGIA</span>
        <h3>Proposta, poder do cargo e efeito na vida real são coisas diferentes — agora a página separa as três.</h3>
      </div>
      <div className="candidateMethodologyCopy">
        <p>
          Para Presidência e Governo de São Paulo, o período mostrado é 2027–2030 e a prioridade é usar propostas e programas do ciclo eleitoral de 2026, preferindo o documento registrado na Justiça Eleitoral quando disponível. Uma proposta de campanha não equivale a medida aprovada, orçamento garantido ou resultado futuro.
        </p>
        <p>
          Para o Senado por São Paulo, o período é 2027–2034. Senador não executa um plano de governo: legisla, fiscaliza, participa do orçamento e de competências exclusivas do Senado. Por isso, os cards chamam esses itens de pautas legislativas ou compromissos de atuação.
        </p>
        <p>
          O bloco “Impacto na vida real” prioriza trabalhador, família, aposentado, estudante, usuário do SUS, consumidor, morador e contribuinte. Ele descreve efeitos possíveis se a proposta for aprovada e implementada naquele desenho; não afirma benefício ou prejuízo como certeza antes de existir texto final, orçamento e execução.
        </p>
        <p>
          “Argumento favorável” e “crítica” não são nota nem recomendação de voto. A mesma proposta pode produzir benefícios e custos diferentes para grupos diferentes. A página explicita dependências institucionais e pontos ainda não detalhados para você poder conferir a promessa na fonte e acompanhar sua execução.
        </p>
      </div>
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
