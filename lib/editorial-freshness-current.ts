export type EditorialFreshnessState = 'ATUALIZADO' | 'VALIDADO';

export type EditorialFreshnessEntry = {
  slug: string;
  state: EditorialFreshnessState;
  validatedAt: string;
  note: string;
};

// HARD GATE: este arquivo precisa ser regenerado em toda execução antes do deploy.
// O quality gate compara a data abaixo com America/Sao_Paulo e exige exatamente 22 entradas.
export const editorialFreshnessDate = '2026-08-24';
export const editorialFreshnessValidatedAt = '24/08/2026 · tarde';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Tema legislativo sobre jornada permanece material e com trilha decisória explícita; a edição de 24/08 preserva a análise aprofundada sem apresentar avanço antigo como decisão nova.' },
  { slug:'seguranca-zl', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Feed regional permanece separado por data, contexto e fonte; não foi promovida ocorrência antiga como notícia de hoje durante a revisão mobile.' },
  { slug:'politica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters 24/08 incorporada: pesquisa Nexus/BTG Pactual aponta empate técnico em eventual segundo turno; texto reforça margem de erro, metodologia e natureza não preditiva de pesquisa.' },
  { slug:'mundo', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Contexto geopolítico existente permanece identificado por data e sem transformar hipótese ou declaração de parte em fato confirmado.' },
  { slug:'planeta', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico sobre oceanos/termoclina permanece correto e útil; não depende de atualização intradiária.' },
  { slug:'animais', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo sobre acústica oceânica e mamíferos marinhos permanece cientificamente válido e sem dependência de notícia diária.' },
  { slug:'tempo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CGE 24/08 12h12 incorporado: manhã nublada e fria, média de 16,2°C, máxima próxima de 20°C e possibilidade de chuviscos no fim do dia.' },
  { slug:'curiosidades', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico permanece correto, claro e adequado ao formato de descoberta rápida no feed mobile.' },
  { slug:'musica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Trilhas de Rock e Sertanejo de Época permanecem independentes e deduplicadas; navegação foi mantida sem inventar agenda nova.' },
  { slug:'games', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Agenda oficial gamescom revalidada: gamescom dev começa em 24/08, Opening Night Live em 25/08 e feira principal ocorre de 26 a 30/08.' },
  { slug:'gravidez', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Idade gestacional da edição atualizada para 7s+1d, mantendo orientação prática conservadora para enjoo, hidratação e sinais de alerta.' },
  { slug:'pai', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Ação do dia renovada com foco em reduzir fricção prática e carga mental sem transformar apoio em controle.' },
  { slug:'carros', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Critérios de avaliação de usados, histórico térmico, inspeção e manutenção permanecem coerentes; nenhum preço novo foi inventado nesta revisão.' },
  { slug:'motos', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Critérios de pneus, queda, suspensão, relação, freios e inspeção permanecem tecnicamente úteis e não dependem de atualização diária.' },
  { slug:'mecanica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Fluido de freio higroscópico, margem térmica e manutenção preventiva permanecem tecnicamente corretos.' },
  { slug:'nautica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Milha náutica, nó e leitura de navegação permanecem corretos e adequados ao formato educativo curto.' },
  { slug:'viagens', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de bate-volta permanece apresentado como planejamento e referência, sem afirmar horários ou condições dinâmicas não revalidadas.' },
  { slug:'financas', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo mantém distinção entre fechamento de mercado, cenário e impacto possível; números antigos continuam datados em vez de serem apresentados como cotação de hoje.' },
  { slug:'tecnologia', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters 20/08 incorporada: plano brasileiro de cerca de R$2,3 bi em infraestrutura de IA, com projetos ligados a tecnologias chinesas e americanas; benefícios futuros tratados como possibilidade.' },
  { slug:'security-briefing', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Briefing de 24/08 conecta CaptiveCrunch, supply chain e governança de mitigação; prioridade baseada em autoridade, caminho de ataque e evidência.' },
  { slug:'seguranca', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Microsoft Threat Intelligence 18/08 incorporada: CaptiveCrunch manipula tráfego DNS/HTTP em redes com captive portal; vetor inicial das redes permanece explicitamente não confirmado.' },
  { slug:'appsec-ssdlc', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'GitHub 20/08 incorporado: novo dismissal “Mitigated” no code scanning; conteúdo diferencia controle compensatório de correção e exige evidência, owner e revalidação.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
