'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

function DailyQuestHUD() {
  const [mission, setMission] = useState('HOJE');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const syncMission = () => {
      const title = document.querySelector('.stage h1')?.textContent?.trim();
      if (title) setMission(title.toUpperCase());
    };

    const syncProgress = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const value = Math.max(0, Math.min(100, Math.round((window.scrollY / max) * 100)));
      setProgress(value);
    };

    syncMission();
    syncProgress();
    const observer = new MutationObserver(syncMission);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    window.addEventListener('scroll', syncProgress, { passive: true });
    window.addEventListener('resize', syncProgress);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', syncProgress);
      window.removeEventListener('resize', syncProgress);
    };
  }, []);

  const xp = 10 + Math.floor(progress / 20) * 5;

  return (
    <section className="dailyQuestHud" aria-label="Progresso da missão atual">
      <div className="questIdentity">
        <small>ACTIVE QUEST</small>
        <strong>{mission}</strong>
      </div>
      <div className="questProgress">
        <div><span>READ PROGRESS</span><b>{progress}%</b></div>
        <div className="questTrack"><i style={{ width: `${progress}%` }} /></div>
      </div>
      <div className="questReward">
        <small>XP DROP</small>
        <strong>+{xp} XP</strong>
      </div>
      <div className="questStatus"><span>●</span> INTEL RUNNING</div>
    </section>
  );
}

export default function DailyQuestHUDPortal() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const id = 'daily-quest-hud-host';
    const sync = () => {
      const stage = document.querySelector('.stage');
      if (!stage) return;
      let node = document.getElementById(id);
      if (!node) {
        node = document.createElement('div');
        node.id = id;
        stage.insertAdjacentElement('afterend', node);
      }
      setHost(node);
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return host ? createPortal(<DailyQuestHUD />, host) : null;
}
