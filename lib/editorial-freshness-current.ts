export type EditorialFreshnessState = 'ATUALIZADO' | 'VALIDADO';

export type EditorialFreshnessEntry = {
  slug: string;
  state: EditorialFreshnessState;
  validatedAt: string;
  note: string;
};

// HARD GATE: este arquivo precisa ser regenerado em toda edição diária antes do deploy.
// O quality gate compara a data abaixo com America/Sao_Paulo.
export const editorialFreshnessDate = '2026-08-20';
export const editorialFreshnessValidatedAt = '20/08/2026 · 19h05';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug: 'brasil', state: 'ATUALIZADO', validatedAt: editorialFreshnessValidatedAt, note: 'Pauta fiscal revisada com notícia publicada hoje.' },
  { slug: 'seguranca-zl', state: 'ATUALIZADO', validatedAt: editorialFreshnessValidatedAt, note: 'Varredura renovada de Itaquera/Zona Leste, segurança, saúde, campanha e serviços.' },
  { slug: 'politica', state: 'ATUALIZADO', validatedAt: editorialFreshnessValidatedAt, note: 'Calendário eleitoral e fatos políticos do dia rechecados.' },
  { slug: 'mundo', state: 'ATUALIZADO', validatedAt: editorialFreshnessValidatedAt, note: 'Mercados, energia, dívida e geopolítica rechecados hoje.' },
  { slug: 'planeta', state: 'VALIDADO', validatedAt: editorialFreshnessValidatedAt, note: 'Tema científico do dia mantido após checagem de fonte primária.' },
  { slug: 'animais', state: 'VALIDADO', validatedAt: editorialFreshnessValidatedAt, note: 'Conteúdo científico revalidado; não depende de manchete diária.' },
  { slug: 'tempo', state: 'ATUALIZADO', validatedAt: editorialFreshnessValidatedAt, note: 'Previsão refeita para a virada de tempo entre hoje e amanhã em São Paulo.' },
  { slug: 'curiosidades', state: 'VALIDADO', validatedAt: editorialFreshnessValidatedAt, note: 'Curiosidade científica inédita da edição revalidada.' },
  { slug: 'musica', state: 'ATUALIZADO', validatedAt: editorialFreshnessValidatedAt, note: 'Curadoria e agenda musical da semana revisadas.' },
  { slug: 'games', state: 'ATUALIZADO', validatedAt: editorialFreshnessValidatedAt, note: 'Agenda oficial da gamescom/gamescom dev revisada.' },
  { slug: 'gravidez', state: 'ATUALIZADO', validatedAt: editorialFreshnessValidatedAt, note: 'Idade gestacional, sintomas, desenvolvimento e puerpério rechecados.' },
  { slug: 'pai', state: 'ATUALIZADO', validatedAt: editorialFreshnessValidatedAt, note: 'Ação prática da fase atual e apoio materno revisados.' },
  { slug: 'carros', state: 'VALIDADO', validatedAt: editorialFreshnessValidatedAt, note: 'Critérios, modelos e faixa de preço mensal revalidados.' },
  { slug: 'motos', state: 'VALIDADO', validatedAt: editorialFreshnessValidatedAt, note: 'Modelos, manutenção e critérios de inspeção revalidados.' },
  { slug: 'mecanica', state: 'VALIDADO', validatedAt: editorialFreshnessValidatedAt, note: 'Tema técnico do dia revisado contra referência mecânica.' },
  { slug: 'nautica', state: 'VALIDADO', validatedAt: editorialFreshnessValidatedAt, note: 'Tema de segurança náutica revalidado.' },
  { slug: 'viagens', state: 'ATUALIZADO', validatedAt: editorialFreshnessValidatedAt, note: 'Expoflora 2026 e condições da visita revisadas no canal oficial.' },
  { slug: 'financas', state: 'ATUALIZADO', validatedAt: editorialFreshnessValidatedAt, note: 'Treasuries, petróleo e leitura de mercado rechecados hoje.' },
  { slug: 'tecnologia', state: 'ATUALIZADO', validatedAt: editorialFreshnessValidatedAt, note: 'Infraestrutura de IA e notícias recentes do setor revisadas.' },
  { slug: 'security-briefing', state: 'ATUALIZADO', validatedAt: editorialFreshnessValidatedAt, note: 'Prioridades rechecadas contra sinais recentes e fontes primárias.' },
  { slug: 'seguranca', state: 'ATUALIZADO', validatedAt: editorialFreshnessValidatedAt, note: 'Exploração real, KEV e resposta operacional rechecadas.' },
  { slug: 'appsec-ssdlc', state: 'ATUALIZADO', validatedAt: editorialFreshnessValidatedAt, note: 'Supply chain, CI/CD, AI/Agentic e critérios de gate rechecados.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
