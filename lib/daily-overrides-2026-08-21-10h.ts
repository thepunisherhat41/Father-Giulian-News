import { edition } from './daily-content';

// Compatibilidade apenas de assinatura.
//
// Esta função era chamada pela Home e por componentes legados e reaplicava o
// conteúdo de 21/08 em runtime. Como dailyContent é compartilhado, isso fazia
// editorias da edição atual voltarem para matérias antigas depois de os
// overrides do dia já terem sido carregados.
//
// A partir de agora ela NÃO altera conteúdo, sources nem todayDrops. A edição
// corrente é construída pelos overrides datados importados por categories.ts.
export function applyDailyOverride20260821_10h(_force = false) {
  Object.assign(edition, {
    date: '24/08/2026',
    dateLabel: '24 AGO 2026',
  });
}
