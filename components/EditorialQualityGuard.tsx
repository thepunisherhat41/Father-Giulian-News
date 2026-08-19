'use client';

import { useEffect } from 'react';

function setText(selector: string, value: string) {
  document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
    if (element.textContent?.trim() !== value) element.textContent = value;
  });
}

function replaceExact(selector: string, replacements: Record<string, string>) {
  document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
    const current = element.textContent?.trim() ?? '';
    const next = replacements[current];
    if (next && next !== current) element.textContent = next;
  });
}

function replacePrefix(selector: string, prefix: string, replacement: string) {
  document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
    const current = element.textContent?.trim() ?? '';
    if (!current.startsWith(prefix)) return;
    const next = `${replacement}${current.slice(prefix.length)}`;
    if (next !== current) element.textContent = next;
  });
}

function replaceFragment(selector: string, from: string, to: string) {
  document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
    const current = element.textContent ?? '';
    if (!current.includes(from)) return;
    const next = current.replace(from, to);
    if (next !== current) element.textContent = next;
  });
}

export default function EditorialQualityGuard() {
  useEffect(() => {
    let frame = 0;

    const sync = () => {
      const pageTitle = document.querySelector('.stage h1')?.textContent?.trim() ?? '';

      // Chrome global: preservar personalidade visual sem rótulos que pareçam internos ou aleatórios.
      if (pageTitle) setText('.hud span:first-child', `ÁREA / ${pageTitle.toUpperCase()}`);
      setText('.hud span:last-child', 'EDIÇÃO CURADA');
      setText('.kicker', 'CONTEÚDO DO DIA');
      setText('.brand small', 'HUB DIÁRIO DE CONHECIMENTO');
      setText('.player small', 'LEITURA · CONTEXTO · DESCOBERTA');
      setText('.sharePackHeader > div > span', 'COMPARTILHAR');
      setText('.sharePackHeader > b', 'WHATSAPP');
      setText('.sharePreview > small', 'PRÉVIA DO TEXTO');
      replaceExact('.missions div > span', {
        'DAILY STREAK': 'SEQUÊNCIA DE LEITURA',
        'CONTEÚDOS': 'ÁREAS',
      });

      // Segurança ZL: corrigir o erro ZE e remover linguagem de “radar” sem explicação.
      setText('.zlHeroCopy > span', 'SEGURANÇA PÚBLICA · ZONA LESTE');
      setText('.zlRadarOrb > span', 'ZL');
      setText('.zlRadarOrb > b', 'MONITOR');
      replaceExact('.zlHeroBadges b', { 'LIVE EDITION': 'EDIÇÃO ATUAL' });
      replaceExact('.zlSectionHead span', {
        'NEWS://RECENT': 'NOTÍCIAS CONFIRMADAS',
        'DATA://CONTEXT': 'DADOS E CONTEXTO',
        'OPS://PUBLIC-SAFETY': 'AÇÕES DE SEGURANÇA',
        'SERVICE://CITIZEN': 'SERVIÇOS AO CIDADÃO',
      });
      replaceFragment('.zlSectionHead > b', 'STORIES', 'ITENS');
      replaceFragment('.zlSectionHead > b', 'ITEMS', 'ITENS');
      setText('.zlFeedRule > span', 'CRITÉRIO EDITORIAL');
      setText('.zlSourceLine > small', 'FONTE');
      setText('.zlVideoIntel > div:first-child > span', 'VÍDEO OFICIAL · CONTEXTO OPERACIONAL');
      setText('.zlRegions > div:first-child > span', 'COBERTURA · ZONA LESTE');
      replaceFragment('.zlNoRecent', 'O radar prefere ficar vazio a reciclar conteúdo antigo.', 'A página prefere ficar sem itens a reciclar conteúdo antigo.');

      // Veículos: “Radar >1.0 / ≤70K” era visualmente ambíguo. Mostrar a regra de curadoria por extenso.
      if (pageTitle === 'Carros') {
        setText('.vehicleComparisonHeader > div > span', 'COMPARATIVO DE CARROS · 4 OPÇÕES');
        setText('.vehicleComparisonHeader > b', 'MOTOR ACIMA DE 1.0 · ATÉ R$ 70 MIL');
      }
      if (pageTitle === 'Motos') {
        setText('.vehicleComparisonHeader > div > span', 'COMPARATIVO DE MOTOS · 4 OPÇÕES');
        setText('.vehicleComparisonHeader > b', '4 PERFIS DE USO');
      }
      setText('.vehicleOptionCard > em', 'VER ANÁLISE →');
      setText('.vehicleVerdict > small', 'VEREDITO PARA USO REAL');

      // Música: gamificação fica secundária; conteúdo e contexto vêm primeiro.
      setText('.musicIntro > div > span', 'MÚSICA · DUAS TRILHAS INDEPENDENTES');
      setText('.musicIntro > b', 'CURADORIA');
      replaceExact('.musicHeroLabel', {
        'ROCK DROP': 'DESTAQUE DO ROCK',
        'MEMÓRIAS DA ROÇA': 'DESTAQUE DO SERTANEJO DE ÉPOCA',
      });
      replaceExact('.musicLaneIdentity small', {
        'ARQUIVO 01 / ROCK': 'ROCK',
        'ARQUIVO 02 / RAÍZES': 'SERTANEJO DE ÉPOCA',
      });

      // Games: manter estética gamer, mas explicar o significado em português.
      setText('.gameHubHeader > div:first-child > span', 'GAMES · DESTAQUES E ATUALIZAÇÕES');
      setText('.gameHubHeader > div:first-child > h3', 'Games com contexto, mídia e confirmação');
      setText('.gamePlayerBadge > small', 'PLATAFORMA EM FOCO');
      setText('.gamePlayerBadge > strong', 'PLAYSTATION 5');
      setText('.gamePlayerBadge > span', 'ACOMPANHAMENTO ATIVO');
      replaceExact('.gameQuickActions a', {
        '▶ TRAILER ROOM': '▶ TRAILERS',
        '▣ PS5 RADAR': '▣ PS5 · CONFIRMADO',
        '▦ SCREENSHOTS': '▦ IMAGENS',
        '♫ SETLIST': '♫ MÚSICAS',
      });
      setText('.gamePs5Radar .gameSectionHeading span', 'PLAYSTATION 5 · RECURSOS CONFIRMADOS');
      setText('.gamePs5Radar .gameSectionHeading h4', 'PlayStation 5: o que já foi confirmado');
      setText('.gamePs5Verdict > small', 'VALE ACOMPANHAR?');
      setText('.gameQuestTimeline .gameSectionHeading span', 'CAMINHO ATÉ O LANÇAMENTO');
      setText('.gameEditorialMap .gameSectionHeading span', 'COBERTURA EDITORIAL');
      replaceFragment('.gameBottomLine > strong', 'merece ficar no radar', 'merece acompanhamento');
      replaceFragment('.gameSectionHeading > b', 'VIDEOS', 'VÍDEOS');
      replaceFragment('.gameSectionHeading > b', 'SHOTS', 'IMAGENS');
      replaceFragment('.gameSectionHeading > b', 'TRACKS', 'FAIXAS');

      // Nintendo Switch 2: “radar” vira acompanhamento explícito.
      setText('.switch2Header span', 'NINTENDO SWITCH 2 · JOGOS E LANÇAMENTOS');
      setText('.switch2Header h4', 'Nintendo Switch 2: o que vale acompanhar');
      replaceFragment('.switch2Header > b', 'GAMES', 'JOGOS');
      replaceExact('.switch2Filters button', { '◌ NO RADAR': '◌ A CAMINHO' });
      setText('.switch2BottomLine > small', 'COMO LER ESTA SEÇÃO');
      replaceFragment('.switch2BottomLine > p', 'O radar vai priorizar', 'A seção prioriza');

      // Gravidez: linguagem acolhedora e científica, sem aparência de “status de videogame”.
      setText('.babyDiscoveryHeader > div > span', 'DESENVOLVIMENTO DO BEBÊ · SEMANA A SEMANA');
      setText('.babyDiscoveryHeader > b', 'BASE CIENTÍFICA');
      replaceExact('.babyStatusHud small', { 'PRÓXIMO UNLOCK': 'PRÓXIMO MARCO' });
      setText('.babyNowPanel .babySectionTitle span', 'AGORA · FASE ATUAL');
      setText('.babyNowPanel .babySectionTitle b', 'FASE ATUAL');
      setText('.babyQuestline .babySectionTitle span', 'LINHA DO DESENVOLVIMENTO');
      replaceFragment('.babyQuestline .babySectionTitle b', 'MILESTONES', 'MARCOS');
      setText('.babyCuriosityDeck .babySectionTitle span', 'CURIOSIDADES');
      setText('.babyCuriosityDeck .babySectionTitle b', 'BASE CIENTÍFICA');
      setText('.babyRealityCheck > small', 'NOTA DE SEGURANÇA');
      replaceExact('.babyLevel', {
        'LOCKED': 'AINDA NÃO',
        'BUILDING': 'EM DESENVOLVIMENTO',
        'UNLOCKING': 'COMEÇANDO',
        'UNLOCKED': 'JÁ PRESENTE',
      });

      // AppSec: inglês técnico só quando é termo de mercado; rótulos de interface ficam claros.
      setText('.appSecFeedHeader > div > span', 'APPSEC · FEED TÉCNICO');
      setText('.appSecFeedVisualCredit > small', 'MÍDIA DA FONTE ORIGINAL');
      setText('.aiPentestIntro > span', 'PENTEST DE IA · SSDLC');
      setText('.appSecVideoLab > div:first-child > span', 'VÍDEO TÉCNICO · SEGURANÇA ADVERSARIAL DE IA');
      setText('.appSecFrameworkLibrary > div > span', 'REFERÊNCIAS E FRAMEWORKS');

      // Security Briefing: manter nomenclatura profissional, traduzindo apenas labels de interface.
      setText('.briefingV2Hero > div:first-child > span', 'SECURITY BRIEFING · DECISÕES E EVIDÊNCIAS');
      replacePrefix('.briefingV2Tags b', 'UPDATED ', 'ATUALIZADO ');
      replaceExact('.briefingV2Tags b', {
        'SOURCE-FIRST': 'FONTE PRIMÁRIA',
        'NO CLICKBAIT': 'SEM SENSACIONALISMO',
        'WHATSAPP PER TOPIC': 'COMPARTILHAMENTO POR TÓPICO',
      });
      replaceExact('.briefingV2Pulse small', {
        'P0 / IMMEDIATE': 'P0 · IMEDIATO',
        'P1 / PRIORITY': 'P1 · PRIORIDADE',
        'ACT NOW': 'AÇÃO AGORA',
        'INTEL SET': 'TÓPICOS',
      });
      setText('.briefingV2DecisionHead > span', 'FILA DE DECISÃO');
      setText('.briefingV2StreamHead span', 'TÓPICOS CURADOS');
      setText('.briefingV2Core .why small', 'POR QUE AGORA');
      setText('.briefingV2Details summary span', 'ABRIR ANÁLISE DETALHADA');
      setText('.briefingV2Media figcaption > span', 'MÍDIA DA FONTE ORIGINAL');
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(sync);
    };

    sync();
    const observer = new MutationObserver(schedule);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return null;
}
