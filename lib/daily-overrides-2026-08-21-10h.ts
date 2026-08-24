import { dailyContent, todayDrops } from './daily-content';
import { applyDailyOverride20260821_17h } from './daily-overrides-2026-08-21-17h';
import { applyDailyOverride20260824Runtime } from './daily-overrides-2026-08-24-runtime';

// Compatibilidade: a Home ainda importa o nome histórico da função das 10h.
// O wrapper mantém a revisão-base legada e, no final, reaplica a edição atual de 24/08.
export function applyDailyOverride20260821_10h(force = false) {
  applyDailyOverride20260821_17h(force);

  Object.assign(dailyContent['seguranca-zl'], {
    title: 'Zona Leste em Foco: conteúdo revalidado nesta edição, com fatos recentes separados de contexto',
    summary: 'A revisão atual preserva Região, Segurança, Casos, Matérias, Dados, Ações e Serviços separados, datados e com fonte. Conteúdo anterior aparece como fato anterior ou contexto, sem ser promovido artificialmente como ocorrência de hoje.',
    shareSummary: 'Zona Leste: conteúdo revalidado na edição atual, com notícias anteriores explicitamente datadas e separadas de contexto.',
    badge: 'ZONA LESTE · VALIDADO',
  });

  const index = todayDrops.findIndex((item) => item.slug === 'seguranca-zl');
  if (index >= 0) {
    todayDrops[index] = {
      ...todayDrops[index],
      title: 'Zona Leste em Foco: fatos recentes continuam datados e separados de contexto',
      detail: 'Região, Segurança, Casos e Serviços preservam data e fonte; a edição evita transformar pauta antiga em novidade.',
    };
  }

  // Deve ser a última operação: a Home ainda chama este wrapper em runtime.
  applyDailyOverride20260824Runtime();
}
