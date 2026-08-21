export type EditorialFreshnessState = 'ATUALIZADO' | 'VALIDADO';

export type EditorialFreshnessEntry = {
  slug: string;
  state: EditorialFreshnessState;
  validatedAt: string;
  note: string;
};

// HARD GATE: este arquivo precisa ser regenerado em toda edição diária antes do deploy.
// O quality gate compara a data abaixo com America/Sao_Paulo.
export const editorialFreshnessDate = '2026-08-21';
export const editorialFreshnessValidatedAt = '21/08/2026 · madrugada';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'PEC da jornada 6x1 e debate trabalhista rechecados após avanço de 20/08.' },
  { slug:'seguranca-zl', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Varredura das últimas 24h refeita: Aricanduva, Ponte Rasa, São Mateus, Itaquera, obras, saúde e serviços.' },
  { slug:'politica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'TSE, horário eleitoral e próximos marcos da campanha rechecados.' },
  { slug:'mundo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Ataques em Kyiv e contexto militar atualizados com Reuters/AP.' },
  { slug:'planeta', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Novo conhecimento do dia: termoclina, revalidado em fonte NOAA.' },
  { slug:'animais', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Novo conhecimento do dia: propagação de som no oceano e conexão com mamíferos marinhos.' },
  { slug:'tempo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Previsão de São Paulo refeita para 21/08 e alerta de vento rechecado.' },
  { slug:'curiosidades', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Nova curiosidade do dia sobre espalhamento da luz e pôr do sol.' },
  { slug:'musica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Agenda de rock e sertanejo do fim de semana rechecada em 20/08.' },
  { slug:'games', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Datas oficiais de gamescom dev, Opening Night Live e gamescom rechecadas.' },
  { slug:'gravidez', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Idade gestacional avançou para 6s5d; sintomas, vômito e puerpério revisados.' },
  { slug:'pai', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Nova missão prática de apoio e redução de carga mental.' },
  { slug:'carros', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Novo foco técnico do dia: histórico térmico e arrefecimento em usado.' },
  { slug:'motos', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Novo foco técnico do dia: idade, ressecamento e deformação de pneus.' },
  { slug:'mecanica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Novo conhecimento: umidade no fluido de freio e perda de margem térmica.' },
  { slug:'nautica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Novo fundamento: milha náutica, nó e conexão com cartas.' },
  { slug:'viagens', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Novo bate-volta: Paranapiacaba com planejamento de clima, caminhada e horários.' },
  { slug:'financas', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Fechamento de 20/08, dólar, petróleo e canais para inflação/juros rechecados.' },
  { slug:'tecnologia', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Cerebras CS-4 e corrida de inferência rechecados em notícia recente.' },
  { slug:'security-briefing', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conjunto de sinais profissionais reavaliado; tópicos ainda materiais permanecem com selo de validação do dia.' },
  { slug:'seguranca', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'ClickFix/CrashFix reavaliado com Microsoft e CTIR Gov; foco defensivo atualizado.' },
  { slug:'appsec-ssdlc', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Agentic CI/CD, tools, tokens e trust boundaries revisitados com fontes Microsoft/NIST.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
