export type EditorialFreshnessState = 'ATUALIZADO' | 'VALIDADO';

export type EditorialFreshnessEntry = {
  slug: string;
  state: EditorialFreshnessState;
  validatedAt: string;
  note: string;
};

// HARD GATE: este arquivo precisa ser regenerado em toda execução antes do deploy.
// O quality gate compara a data abaixo com America/Sao_Paulo e exige exatamente 21 entradas.
// Náutica foi removida do produto editorial e não pode reaparecer nesta auditoria.
export const editorialFreshnessDate = '2026-08-25';
export const editorialFreshnessValidatedAt = '25/08/2026 · 10h';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Nova busca das 10h não encontrou fato nacional de 25/08 melhor e suficientemente material para substituir a pauta; sem Reel jornalístico artificial.' },
  { slug:'seguranca-zl', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Varredura de Itaquera/Zona Leste às 10h não encontrou notícia material de 25/08 com confirmação oficial/profissional e mídia semanticamente correta; Reel omitido.' },
  { slug:'politica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Radar de 25/08 às 10h incorpora pesquisa BTG/Nexus publicada hoje e entrevista de Ronaldo Caiado anunciada pela Globo para 21h05, separando pesquisa, agenda e presença.' },
  { slug:'mundo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Sanções dos EUA ao Irã e resposta anunciada por Teerã continuam sendo fato material de hoje; risco energético mantido com incerteza explícita.' },
  { slug:'planeta', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen reavaliado e ainda válido; não foi criada novidade artificial.' },
  { slug:'animais', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen reavaliado e ainda válido; permanece na rotação de descoberta.' },
  { slug:'tempo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Previsão oficial de São Paulo para 25/08 permanece atual e datada; sem extrapolar condição local não confirmada.' },
  { slug:'curiosidades', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Coleções científicas continuam válidas e a seleção diária segue rotacionada por tipo, sem fabricar notícia.' },
  { slug:'musica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo musical e players seguem válidos; Reel permanece como descoberta cultural, não como notícia.' },
  { slug:'games', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'gamescom confirmou Opening Night Live hoje, 25/08, 18h–20h CEST, equivalente a 13h–15h em São Paulo; agenda atualizada sem promover rumor a anúncio.' },
  { slug:'gravidez', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Idade gestacional do dia permanece 7 semanas + 2 dias; módulos profundos, cuidados pós-vômito e puerpério preservados.' },
  { slug:'pai', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Ação prática do dia permanece renovada para apoio real e divisão de carga, sem romantização artificial.' },
  { slug:'carros', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Critério até R$70 mil, usados reais, manutenção, inspeção e custo-benefício continua válido; seletor e mídia de veículos preservados.' },
  { slug:'motos', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Critérios de compra, manutenção e ciclística permanecem válidos; mídia por modelo preservada.' },
  { slug:'mecanica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico continua correto e adequado à edição; mídia/fallback específico permanece disponível.' },
  { slug:'viagens', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de destino permanece útil e datado quando necessário; não foi inventada programação dinâmica sem fonte.' },
  { slug:'financas', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Mercados de 25/08 seguem com yields menores, petróleo oscilando e expectativa pelo balanço da Nvidia; leitura intradiária continua explicitamente não tratada como fechamento.' },
  { slug:'tecnologia', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Nvidia permanece principal teste da semana para infraestrutura de IA; matéria revalidada às 10h com foco em demanda, capex e retorno do investimento.' },
  { slug:'security-briefing', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Revalidação web das 10h não identificou sinal novo de 25/08 forte o bastante para substituir os tópicos source-first já materiais; Reel jornalístico omitido.' },
  { slug:'seguranca', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Busca atual em fontes primárias não encontrou advisory/incidente novo de 25/08 que justificasse Reel; conteúdo profundo permanece disponível.' },
  { slug:'appsec-ssdlc', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Busca atual não encontrou mudança material primária de 25/08 forte o bastante para novo Reel; feed profundo de AppSec permanece preservado.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
