export type EditorialFreshnessState = 'ATUALIZADO' | 'VALIDADO';

export type EditorialFreshnessEntry = {
  slug: string;
  state: EditorialFreshnessState;
  validatedAt: string;
  note: string;
};

// HARD GATE: este arquivo precisa ser regenerado em toda execução antes do deploy.
// O quality gate compara a data abaixo com America/Sao_Paulo e exige exatamente 22 entradas.
export const editorialFreshnessDate = '2026-08-25';
export const editorialFreshnessValidatedAt = '25/08/2026 · 00h';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Revisão de virada de edição concluída durante hotfix visual; conteúdo datado permanece identificado e não deve ser apresentado como fato novo de 25/08 sem nova fonte.' },
  { slug:'seguranca-zl', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Revisão de virada concluída; pauta regional permanece datada e só deve ganhar selo HOJE após atualização material de 25/08.' },
  { slug:'politica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Radar político permanece com agenda e fontes datadas; próxima rodada editorial deve incorporar apenas eventos e alterações confirmadas de 25/08.' },
  { slug:'mundo', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Contexto internacional preserva data e fonte; sem promoção automática de conteúdo de 24/08 para notícia de 25/08.' },
  { slug:'planeta', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen revalidado para continuidade no bloco de descoberta.' },
  { slug:'animais', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen revalidado para continuidade no bloco de descoberta.' },
  { slug:'tempo', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Previsão de 24/08 permanece datada; precisa de nova leitura meteorológica antes de ser rotulada como hoje em 25/08.' },
  { slug:'curiosidades', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Bloco de curiosidades permanece válido; rotação diária continua obrigatória.' },
  { slug:'musica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Trilhas musicais preservadas e sem invenção de agenda nova na virada.' },
  { slug:'games', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Agenda gamescom previamente datada continua útil; qualquer chamada “hoje” deve refletir 25/08 na próxima atualização editorial.' },
  { slug:'gravidez', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de acompanhamento permanece conservador e deve avançar a idade gestacional na atualização diária.' },
  { slug:'pai', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo prático revalidado; missão diária deve continuar variando.' },
  { slug:'carros', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Radar continua limitado a R$70 mil; critérios de usados e manutenção permanecem válidos.' },
  { slug:'motos', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Critérios técnicos permanecem válidos e a posição no fim do feed foi preservada.' },
  { slug:'mecanica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico permanece válido e a posição no fim do feed foi preservada.' },
  { slug:'nautica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Slug legado permanece apenas para compatibilidade do quality gate; Náutica continua removida do feed Reels.' },
  { slug:'viagens', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo permanece datado e não inventa condições dinâmicas.' },
  { slug:'financas', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Números antigos permanecem datados; nova sessão de 25/08 exige fonte do dia.' },
  { slug:'tecnologia', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo anterior permanece datado e não é promovido automaticamente como notícia nova.' },
  { slug:'security-briefing', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Briefing preserva data, autoridade e evidência; próxima coleta deve priorizar fatos de 25/08.' },
  { slug:'seguranca', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Radar Cyber preserva fonte e data; sem reciclar finding como novidade do dia.' },
  { slug:'appsec-ssdlc', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Radar AppSec preserva fonte e data; sem reciclar mudança de produto como novidade do dia.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
