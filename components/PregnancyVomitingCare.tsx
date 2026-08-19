'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const steps = [
  {
    title: '1. Primeiro: boca e dentes',
    text: 'Enxágue a boca com água. Se os vômitos estiverem frequentes, uma opção citada pela ACOG e pela ADA é 1 colher de chá de bicarbonato de sódio dissolvida em 1 copo de água para ajudar a neutralizar o ácido. Cuspa a solução. Evite escovar os dentes imediatamente após vomitar; espere cerca de 30 minutos antes da escovação.',
  },
  {
    title: '2. Reidratação sem pressa',
    text: 'Quando o estômago permitir, recomece com pequenos goles frequentes de água ou outro líquido tolerado. Beber muito de uma vez pode piorar a náusea em algumas gestantes. O objetivo é conseguir manter líquidos ao longo do dia.',
  },
  {
    title: '3. Comida volta aos poucos',
    text: 'Depois que os líquidos estiverem permanecendo no estômago, tente pequenas porções de alimentos simples e toleráveis. Não é preciso forçar uma refeição grande logo após o episódio. Refeições menores e mais frequentes costumam ser mais fáceis de tolerar.',
  },
  {
    title: '4. Reduza os gatilhos do próximo episódio',
    text: 'Evite ficar muitas horas em jejum e afaste cheiros ou alimentos que estejam claramente desencadeando náusea. Descanso também importa: cansaço pode piorar o enjoo.',
  },
];

export default function PregnancyVomitingCare() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const hostId = 'pregnancy-vomiting-care-host';
    const sync = () => {
      const pregnancyHud = document.querySelector('.pregnancyHUD');
      const maternalHost = document.getElementById('pregnancy-maternal-changes-host');
      const babyHost = document.getElementById('baby-discovery-lab-host');
      const existing = document.getElementById(hostId);

      if (!pregnancyHud) {
        existing?.remove();
        setHost(null);
        return;
      }

      const anchor = babyHost ?? maternalHost ?? pregnancyHud;
      if (existing && existing.previousElementSibling === anchor) {
        setHost(existing);
        return;
      }

      existing?.remove();
      const nextHost = document.createElement('div');
      nextHost.id = hostId;
      anchor.insertAdjacentElement('afterend', nextHost);
      setHost(nextHost);
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      document.getElementById(hostId)?.remove();
    };
  }, []);

  if (!host) return null;

  return createPortal(
    <section className="vomitingCare" aria-label="Cuidados após vômitos na gravidez">
      <header className="vomitingCareHeader">
        <div>
          <span>CUIDADO PRÁTICO · NÁUSEA E VÔMITO</span>
          <h3>O que fazer depois de cada episódio de vômito</h3>
          <p>Um roteiro simples para recuperar líquidos, proteger os dentes e perceber cedo quando o enjoo deixou de ser apenas um desconforto comum da gestação.</p>
        </div>
      </header>

      <div className="vomitingCareSteps">
        {steps.map((step) => (
          <article key={step.title}>
            <h4>{step.title}</h4>
            <p>{step.text}</p>
          </article>
        ))}
      </div>

      <aside className="vomitingCareWatch">
        <small>OBSERVE NAS HORAS SEGUINTES</small>
        <strong>Hidratação é o principal marcador prático.</strong>
        <p>Procure orientação do obstetra se ela não consegue manter líquidos, está urinando muito pouco ou com urina muito escura, sente tontura ou desmaio ao levantar, percebe coração acelerado/palpitações, perde peso ou o vômito está impedindo alimentação e atividades habituais.</p>
      </aside>

      <aside className="vomitingCareUrgent">
        <small>PROCURE AVALIAÇÃO MÉDICA SEM ADIAR SE HOUVER</small>
        <ul>
          <li>incapacidade persistente de manter líquidos;</li>
          <li>desmaio, fraqueza intensa ou sinais importantes de desidratação;</li>
          <li>sangue no vômito;</li>
          <li>febre ou dor abdominal importante;</li>
          <li>dor pélvica forte, unilateral ou associada a sangramento vaginal;</li>
          <li>redução importante da urina ou ausência de urina.</li>
        </ul>
      </aside>

      <p className="vomitingCareNote">Medicamentos contra enjoo podem ser usados na gestação quando indicados, mas a escolha e a dose devem seguir o obstetra ou outro profissional que acompanha o pré-natal. Não acrescente ou troque medicamentos por conta própria.</p>

      <div className="vomitingCareSources">
        <small>FONTES MÉDICAS</small>
        <a href="https://www.acog.org/womens-health/faqs/morning-sickness-nausea-and-vomiting-of-pregnancy" target="_blank" rel="noreferrer">ACOG · Nausea and Vomiting of Pregnancy ↗</a>
        <a href="https://www.rcog.org.uk/for-the-public/browse-our-patient-information/pregnancy-sickness-nausea-and-vomiting-of-pregnancy-and-hyperemesis-gravidarum/" target="_blank" rel="noreferrer">RCOG · Pregnancy sickness ↗</a>
        <a href="https://www.ada.org/resources/ada-library/oral-health-topics/pregnancy" target="_blank" rel="noreferrer">American Dental Association · Pregnancy ↗</a>
      </div>
    </section>,
    host,
  );
}
