'use client';

import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { getPregnancyStatus } from '@/lib/pregnancy';
import { babyCuriosityDeck, babyMilestones, babySources, earlyEmbryoFacts } from '@/lib/baby-discovery';

function hearingStatus(week: number) {
  if (week < 13) return {
    level: 'LOCKED',
    title: 'Ainda não é a fase de ouvir vocês',
    text: 'Partes do ouvido começam a se formar cedo, mas audição funcional e resposta a sons pertencem a etapas posteriores. Agora o foco é construir as estruturas.',
  };
  if (week < 18) return {
    level: 'BUILDING',
    title: 'O sistema auditivo está entrando em desenvolvimento',
    text: 'A audição começa a se desenvolver neste período. Isso ainda não deve ser traduzido como reconhecimento claro de voz.',
  };
  if (week < 25) return {
    level: 'UNLOCKING',
    title: 'Sons começam a fazer parte do ambiente fetal',
    text: 'Por volta da semana 18, a ACOG descreve que o feto consegue ouvir sons. A resposta e a sensibilidade continuam amadurecendo.',
  };
  return {
    level: 'UNLOCKED',
    title: 'Sons familiares podem provocar resposta',
    text: 'Neste estágio, a ACOG descreve resposta de movimento a sons familiares, incluindo a voz. Isso não significa compreensão de linguagem como após o nascimento.',
  };
}

function stageName(week: number) {
  if (week < 11) return 'EMBRIÃO';
  if (week < 28) return 'FETO · DESENVOLVIMENTO';
  return 'FETO · MATURAÇÃO';
}

export default function BabyDiscoveryLab() {
  const pregnancy = getPregnancyStatus();
  const week = pregnancy.gestationalWeek;
  const day = pregnancy.gestationalDay;
  const hearing = hearingStatus(week);
  const nextMilestone = babyMilestones.find((item) => item.minWeek > week);
  const dailyCuriosity = useMemo(() => {
    const now = new Date();
    const key = now.getFullYear() * 1000 + Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000);
    return babyCuriosityDeck[key % babyCuriosityDeck.length];
  }, []);

  return (
    <section className="babyDiscoveryLab" aria-label="Curiosidades e evolução do bebê">
      <header className="babyDiscoveryHeader">
        <div>
          <span>BABY DISCOVERY LAB / LIVE DEVELOPMENT</span>
          <h3>O universo do bebê, semana por semana</h3>
          <p>Estruturas, sentidos, movimentos, comportamentos e curiosidades — sempre separando o que já está acontecendo do que ainda vem pela frente.</p>
        </div>
        <b>+80 XP</b>
      </header>

      <div className="babyStatusHud">
        <div><small>GESTAÇÃO</small><strong>{week}S + {day}D</strong><span>idade gestacional estimada</span></div>
        <div><small>FASE</small><strong>{stageName(week)}</strong><span>termo de desenvolvimento</span></div>
        <div><small>PRÓXIMO UNLOCK</small><strong>{nextMilestone?.weeks ?? 'MATURAÇÃO'}</strong><span>{nextMilestone?.category ?? 'crescimento'}</span></div>
        <div><small>DPP</small><strong>11/04/2027</strong><span>{pregnancy.daysRemaining} dias estimados</span></div>
      </div>

      <section className="babyNowPanel">
        <div className="babySectionTitle">
          <div><span>NOW / CURRENT BUILD</span><h4>O que é fascinante nesta fase</h4></div>
          <b>UNLOCKED</b>
        </div>
        <p className="babyNowIntro">Nesta fase tão precoce, “comportamento” ainda não é a melhor palavra. O grande espetáculo é a construção das estruturas que, semanas depois, permitirão movimento coordenado, audição, sucção, sono e respostas ao ambiente.</p>
        <div className="babyNowGrid">
          {earlyEmbryoFacts.map((fact) => (
            <article key={fact.title}>
              <span>{fact.icon}</span>
              <h5>{fact.title}</h5>
              <p>{fact.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="babyVoicePanel">
        <div className="babyVoiceIcon">🎙️</div>
        <div>
          <small>PERGUNTA QUE TODO PAI FAZ</small>
          <h4>Ele já consegue ouvir nossa voz?</h4>
          <span className={`babyLevel ${hearing.level.toLowerCase()}`}>{hearing.level}</span>
          <strong>{hearing.title}</strong>
          <p>{hearing.text}</p>
        </div>
      </section>

      <section className="babyQuestline">
        <div className="babySectionTitle">
          <div><span>DEVELOPMENT QUESTLINE</span><h4>Comportamentos e habilidades que vão aparecendo</h4></div>
          <b>{babyMilestones.length} MILESTONES</b>
        </div>
        <div className="babyMilestoneList">
          {babyMilestones.map((item, index) => {
            const unlocked = week >= item.minWeek;
            const next = !unlocked && item === nextMilestone;
            return (
              <article className={`${unlocked ? 'unlocked' : 'locked'} ${next ? 'next' : ''}`} key={`${item.weeks}-${item.title}`}>
                <div className="babyMilestoneState">
                  <span>{unlocked ? '✓' : next ? '◉' : '🔒'}</span>
                  <small>{String(index + 1).padStart(2, '0')}</small>
                </div>
                <div className="babyMilestoneBody">
                  <div><small>{item.weeks}</small><b>{item.category}</b></div>
                  <h5>{item.icon} {item.title}</h5>
                  <p>{item.detail}</p>
                  <em>⌁ {item.curiosity}</em>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="babyCuriosityDeck">
        <div className="babySectionTitle">
          <div><span>CURIOSITY DECK</span><h4>Coisas pequenas que deixam a gestação gigantesca</h4></div>
          <b>SCIENCE CARDS</b>
        </div>
        <article className="babyDailyCuriosity">
          <small>CURIOSIDADE DO DIA</small>
          <span>{dailyCuriosity.icon}</span>
          <h5>{dailyCuriosity.title}</h5>
          <p>{dailyCuriosity.text}</p>
        </article>
        <div className="babyCuriosityGrid">
          {babyCuriosityDeck.map((item) => (
            <article key={item.title}>
              <span>{item.icon}</span>
              <h5>{item.title}</h5>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <aside className="babyRealityCheck">
        <small>SCIENCE CHECK</small>
        <strong>Desenvolvimento é uma sequência, não um cronômetro perfeito.</strong>
        <p>Semanas são referências clínicas. Datação pode ser revisada no pré-natal e existe variação individual. O painel explica desenvolvimento típico; não interpreta ultrassom, sintomas ou ausência de um marco como diagnóstico.</p>
      </aside>

      <div className="babySources">
        <small>FONTES MÉDICAS</small>
        {babySources.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label} ↗</a>)}
      </div>
    </section>
  );
}

export function BabyDiscoveryLabPortal() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const hostId = 'baby-discovery-lab-host';
    const sync = () => {
      const hud = document.querySelector('.pregnancyHUD');
      const maternalHost = document.getElementById('pregnancy-maternal-changes-host');
      const existing = document.getElementById(hostId);
      if (!hud) {
        existing?.remove();
        setHost(null);
        return;
      }

      const anchor = maternalHost ?? hud;
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
  return createPortal(<BabyDiscoveryLab />, host);
}
