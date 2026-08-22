import { dailyContent, todayDrops } from './daily-content';
import { applyDailyOverride20260821_17h } from './daily-overrides-2026-08-21-17h';

// Compatibilidade: a Home ainda importa o nome histórico da função das 10h.
// O wrapper aplica a revisão editorial ativa e corrige chamadas que precisam refletir a data atual.
export function applyDailyOverride20260821_10h(force = false) {
  applyDailyOverride20260821_17h(force);

  Object.assign(dailyContent['seguranca-zl'], {
    title: 'Zona Leste em Foco: conteúdo revalidado neste sábado, com fatos recentes separados de contexto',
    summary: 'A varredura de 22/08 não encontrou fato novo suficientemente confirmado para substituir artificialmente os itens recentes. Região, Segurança, Casos, Matérias, Dados, Ações e Serviços permanecem separados, datados e com fonte; conteúdo de sexta aparece apenas como fato anterior ou contexto.',
    shareSummary: 'Zona Leste 22/08: conteúdo revalidado hoje. Sem ocorrência nova suficientemente confirmada para substituir os fatos recentes; notícias anteriores permanecem explicitamente datadas e separadas de contexto.',
    badge: 'ZONA LESTE · VALIDADO HOJE',
  });

  const index = todayDrops.findIndex((item) => item.slug === 'seguranca-zl');
  if (index >= 0) {
    todayDrops[index] = {
      ...todayDrops[index],
      title: 'Zona Leste em Foco revalidada hoje: fatos recentes continuam datados e separados de contexto',
      detail: 'A busca deste sábado não encontrou novidade suficientemente confirmada para forçar troca; Região, Segurança, Casos e serviços preservam data e fonte.',
    };
  }
}
