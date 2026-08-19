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

type OfficeKey = 'presidencia' | 'governo-sp' | 'senado-sp' | 'todos';

const officeTabs: Array<{ key: OfficeKey; label: string; short: string }> = [
  { key: 'presidencia', label: 'Presidência da República', short: 'Presidente' },
  { key: 'governo-sp', label: 'Governo de São Paulo', short: 'Governador SP' },
  { key: 'senado-sp', label: 'Senado por São Paulo', short: 'Senado SP' },
  { key: 'todos', label: 'Todos os cargos', short: 'Todos' },
];

function CandidateQuickSummary({ analysis }: { analysis: CandidatePoliticalAnalysis }) {
  return (
    <div className="candidateQuickSummary" aria-label="Resumo das propostas, pontos positivos e pontos negativos">
      <section className="candidateQuickColumn proposals">
        <small>PROPOSTAS</small>
        <ul>
          {analysis.proposals.slice(0, 4).map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="candidateQuickColumn positives">
        <small>PONTOS POSITIVOS</small>
        <ul>
          {analysis.positives.slice(0, 4).map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="candidateQuickColumn negatives">
        <small>PONTOS NEGATIVOS / LIMITAÇÕES</small>
        <ul>
          {analysis.negatives.slice(0, 4).map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </div>
  );
}

function CandidateAnalysisBlock({ name, analysis }: { name: string; analysis: CandidatePoliticalAnalysis }) {
  const mandate = candidateMandateContext[name];
  const populationImpacts = candidatePopulationImpact[name] ?? [];

  return (
    <section className="candidateAnalysisBlock" aria-label={`Análise eleitoral de ${name}`}>
      <CandidateQuickSummary analysis={analysis} />

      <details className="candidateDeepDiveDisclosure">
        <summary>
          <span>ANÁLISE DETALHADA</span>
          <strong>Trajetória, impacto, caminho institucional e fontes</strong>
          <em>ABRIR +</em>
        </summary>

        <div className="candidateDeepDiveBody">
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
        </div>
      </details>
    </section>
  );
}

function MethodologyNote() {
  return (
    <details className="candidateMethodology candidateMethodologyCompact">
      <summary>
        <div>
          <span>COMPARADOR ELEITORAL / METODOLOGIA</span>
          <h3>Como esta leitura separa proposta, argumento favorável e limitação</h3>
        </div>
        <b>VER METODOLOGIA +</b>
      </summary>
      <div className="candidateMethodologyCopy">
        <p>
          Para Presidência e Governo de São Paulo, o período mostrado é 2027–2030 e a prioridade é usar propostas e programas do ciclo eleitoral de 2026, preferindo o documento registrado na Justiça Eleitoral quando disponível. Uma proposta de campanha não equivale a medida aprovada, orçamento garantido ou resultado futuro.
        </p>
        <p>
          Para o Senado por São Paulo, o período é 2027–2034. Senador não executa um plano de governo: legisla, fiscaliza, participa do orçamento e de competências exclusivas do Senado. Por isso, os cards chamam esses itens de pautas legislativas ou compromissos de atuação.
        </p>
        <p>
          “Ponto positivo” representa um argumento favorável ou benefício potencial associado à proposta; “ponto negativo” reúne críticas, limitações, custos, dependências ou riscos de implementação. Nenhum dos dois é nota, ranking ou recomendação de voto.
        </p>
        <p>
          O bloco “Impacto na vida real” descreve efeitos possíveis se a proposta for aprovada e implementada naquele desenho. Ele não afirma benefício ou prejuízo como certeza antes de existir texto final, orçamento e execução.
        </p>
      </div>
    </details>
  );
}

function OfficeNavigator({ active, onSelect }: { active: OfficeKey; onSelect: (key: OfficeKey) => void }) {
  return (
    <section className="politicsOfficeNavigator" aria-label="Filtrar candidatos por cargo">
      <div className="politicsOfficeNavigatorHeader">
        <div>
          <small>ESCOLHA O CARGO</small>
          <strong>Veja só os candidatos que você quer analisar</strong>
        </div>
        <span>TOQUE PARA FILTRAR</span>
      </div>
      <div className="politicsOfficeTabs">
        {officeTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={active === tab.key ? 'active' : ''}
            aria-pressed={active === tab.key}
            title={tab.label}
            onClick={() => onSelect(tab.key)}
          >
            {tab.short}
          </button>
        ))}
      </div>
    </section>
  );
}

function officeKeyFromTitle(title: string): Exclude<OfficeKey, 'todos'> | null {
  const normalized = title.toLocaleLowerCase('pt-BR');
  if (normalized.includes('presidência')) return 'presidencia';
  if (normalized.includes('governo de são paulo')) return 'governo-sp';
  if (normalized.includes('senado por são paulo')) return 'senado-sp';
  return null;
}

export default function PoliticalCandidateAnalysisPortal() {
  const [hosts, setHosts] = useState<AnalysisHost[]>([]);
  const [methodologyHost, setMethodologyHost] = useState<HTMLElement | null>(null);
  const [officeNavHost, setOfficeNavHost] = useState<HTMLElement | null>(null);
  const [activeOffice, setActiveOffice] = useState<OfficeKey>('presidencia');

  useEffect(() => {
    const sync = () => {
      const nextHosts: AnalysisHost[] = [];
      const cards = Array.from(document.querySelectorAll<HTMLElement>('.candidateCard'));

      cards.forEach((card) => {
        const heading = card.querySelector<HTMLElement>('h4');
        const name = heading?.textContent?.trim();
        if (!name || !heading || !candidatePoliticalAnalysis[name]) return;

        card.classList.add('candidateCardCollapsible');
        if (!card.dataset.expanded) card.dataset.expanded = 'false';

        if (!heading.dataset.politicsToggleBound) {
          heading.dataset.politicsToggleBound = 'true';
          heading.setAttribute('role', 'button');
          heading.setAttribute('tabindex', '0');
          heading.setAttribute('aria-expanded', card.dataset.expanded);
          heading.setAttribute('title', `Abrir detalhes de ${name}`);

          const toggle = () => {
            const nextExpanded = card.dataset.expanded !== 'true';
            card.dataset.expanded = String(nextExpanded);
            heading.setAttribute('aria-expanded', String(nextExpanded));
            const hint = card.querySelector<HTMLElement>('.candidateTapHint');
            if (hint) hint.textContent = nextExpanded ? 'FECHAR DETALHES −' : 'TOQUE NO NOME PARA VER PROPOSTAS +';
          };

          heading.addEventListener('click', toggle);
          heading.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              toggle();
            }
          });
        }

        if (!card.querySelector('.candidateTapHint')) {
          const hint = document.createElement('div');
          hint.className = 'candidateTapHint';
          hint.textContent = 'TOQUE NO NOME PARA VER PROPOSTAS +';
          heading.insertAdjacentElement('afterend', hint);
        }

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

        let navHost = tracker.querySelector<HTMLElement>('#politics-office-navigator');
        if (!navHost) {
          navHost = document.createElement('div');
          navHost.id = 'politics-office-navigator';
          const firstCandidateSection = tracker.querySelector('.candidateSection');
          if (firstCandidateSection) tracker.insertBefore(navHost, firstCandidateSection);
          else tracker.appendChild(navHost);
        }
        setOfficeNavHost(navHost);

        const sections = Array.from(tracker.querySelectorAll<HTMLElement>('.candidateSection'));
        sections.forEach((section) => {
          const title = section.querySelector('.candidateSectionTitle h3')?.textContent?.trim() ?? '';
          const key = officeKeyFromTitle(title);
          if (!key) return;
          section.dataset.officeKey = key;
          section.classList.toggle('isOfficeHidden', activeOffice !== 'todos' && activeOffice !== key);
        });
      } else {
        setMethodologyHost(null);
        setOfficeNavHost(null);
      }

      setHosts(nextHosts);
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [activeOffice]);

  return (
    <>
      {methodologyHost && createPortal(<MethodologyNote />, methodologyHost)}
      {officeNavHost && createPortal(
        <OfficeNavigator active={activeOffice} onSelect={setActiveOffice} />,
        officeNavHost,
      )}
      {hosts.map(({ name, element }) => createPortal(
        <CandidateAnalysisBlock name={name} analysis={candidatePoliticalAnalysis[name]} />,
        element,
        name,
      ))}
    </>
  );
}
