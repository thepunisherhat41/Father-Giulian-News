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
export const editorialFreshnessValidatedAt = '25/08/2026 · 05h';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Nova busca da manhã não encontrou fato nacional de 25/08 forte e bem confirmado o bastante para substituir a pauta atual; Reel jornalístico omitido para não reciclar notícia.' },
  { slug:'seguranca-zl', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Varredura de Itaquera/Zona Leste não encontrou notícia material de 25/08 com fonte profissional ou oficial e mídia correta; Reel omitido.' },
  { slug:'politica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Radar de 25/08 mantém sabatina presidencial anunciada, marco oficial do calendário TSE e próximo debate, separando agenda, presença e pesquisa.' },
  { slug:'mundo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Nova rodada de sanções dos EUA ao Irã e promessa de resposta de Teerã são fatos materiais desta manhã; impacto em energia tratado com incerteza explícita.' },
  { slug:'planeta', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen reavaliado e ainda válido; não foi criada novidade artificial.' },
  { slug:'animais', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen reavaliado e ainda válido; permanece na rotação de descoberta.' },
  { slug:'tempo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Previsão oficial de São Paulo para 25/08 está datada e válida: madrugada úmida, muitas nuvens e máxima prevista de 21°C.' },
  { slug:'curiosidades', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Coleções científicas continuam válidas e a seleção diária é rotacionada por tipo, sem fabricar notícia.' },
  { slug:'musica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo musical e players seguem válidos; Reel permanece como descoberta cultural, não como notícia.' },
  { slug:'games', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Opening Night Live acontece em 25/08 e a gamescom principal começa em 26/08; confirmado em fonte oficial.' },
  { slug:'gravidez', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Idade gestacional avançou para 7 semanas + 2 dias; módulos profundos, cuidados pós-vômito e puerpério permanecem preservados.' },
  { slug:'pai', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Missão prática do dia foi renovada para apoio pós-enjoo sem pressão ou prescrição.' },
  { slug:'carros', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Critério até R$70 mil, usados reais, manutenção, inspeção e custo-benefício permanece válido; seletor e mídia de veículos preservados.' },
  { slug:'motos', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Critérios de compra, manutenção e ciclística permanecem válidos; mídia por modelo preservada.' },
  { slug:'mecanica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico continua correto e adequado à edição; mídia/fallback específico permanece disponível.' },
  { slug:'viagens', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de destino permanece útil e datado quando necessário; não foi inventada programação dinâmica sem fonte.' },
  { slug:'financas', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Mercados de 25/08 abriram com yields menores, petróleo instável e expectativa pelo balanço da Nvidia; leitura intradiária explicitamente não tratada como fechamento.' },
  { slug:'tecnologia', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Nvidia virou o principal teste da semana para infraestrutura de IA; Alibaba também anunciou captação bilionária para financiar IA.' },
  { slug:'security-briefing', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Revalidação da manhã não identificou sinal novo de 25/08 suficientemente forte para substituir os tópicos materiais já source-first; Reel jornalístico omitido.' },
  { slug:'seguranca', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Busca atual não encontrou advisory/incidente primário novo de 25/08 que justificasse Reel; conteúdo profundo permanece disponível sem reciclagem como novidade.' },
  { slug:'appsec-ssdlc', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Busca atual não encontrou mudança material primária de 25/08 forte o bastante para novo Reel; feed profundo de AppSec permanece preservado.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
