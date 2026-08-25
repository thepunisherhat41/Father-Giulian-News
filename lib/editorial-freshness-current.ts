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
export const editorialFreshnessValidatedAt = '25/08/2026 · 17h';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Busca das 17h não encontrou fato nacional de 25/08 mais material e melhor confirmado para abrir novo Reel; conteúdo profundo permanece disponível e Reel jornalístico fica omitido.' },
  { slug:'seguranca-zl', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Nova varredura de Itaquera e Zona Leste não encontrou notícia material de 25/08 com confirmação suficiente e mídia semanticamente correta; Reel omitido, sem reciclar pauta antiga.' },
  { slug:'politica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'TSE publicou às 15h56 aviso de manutenção do e-Título; sessão plenária segue marcada para 19h e Caiado permanece em agenda anunciada para entrevista, com presença tratada separadamente.' },
  { slug:'mundo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Revisão da tarde incorpora reação material dos mercados às sanções contra o Irã: petróleo caía mais de 3%, sem tratar promessa de retaliação como fato consumado.' },
  { slug:'planeta', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen reavaliado e ainda correto; não foi inventada novidade para forçar rotação jornalística.' },
  { slug:'animais', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen reavaliado e segue adequado para descoberta; sem novidade artificial.' },
  { slug:'tempo', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'CGE foi rechecado na tarde de 25/08 e a previsão vigente de São Paulo segue coerente, sem mudança material posterior que justifique novo Reel além da atualização já datada do dia.' },
  { slug:'curiosidades', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Coleções científicas permanecem válidas e a seleção diária determinística troca os itens por data; revisão confirmou manutenção da rotação por tipo sem reaproveitar notícia.' },
  { slug:'musica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Escuta cultural do dia permanece válida, com player/fonte preservados e sem tratar conteúdo musical como breaking news.' },
  { slug:'games', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Horário do Opening Night Live foi corrigido para 15h BRT em São Paulo; evento ocorreu hoje e a feira principal começa em 26/08. Rumores continuam separados de anúncios oficiais.' },
  { slug:'gravidez', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Idade gestacional e módulos médicos de 25/08 continuam atuais nesta janela; cuidados pós-vômito e puerpério foram preservados sem diagnóstico.' },
  { slug:'pai', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Ação prática de apoio do dia segue adequada e não foi trocada artificialmente dentro da mesma data.' },
  { slug:'carros', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Critério até R$70 mil, usados reais, FIPE/preço, manutenção, inspeção e custo-benefício permanece válido; mídia por modelo preservada.' },
  { slug:'motos', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Checklist de compra, manutenção, ciclística e mídia por modelo seguem válidos; permanece no fim do feed.' },
  { slug:'mecanica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico e mídia/fallback específico continuam corretos e úteis; permanece no fim do feed.' },
  { slug:'viagens', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de destino foi reavaliado e continua útil; programação/preço dinâmicos só entram quando confirmados por fonte.' },
  { slug:'financas', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Snapshot das 17h incorpora yields menores, ações em alta e queda superior a 3% no petróleo, com números explicitamente tratados como intradiários.' },
  { slug:'tecnologia', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Revisão web mantém o balanço iminente da Nvidia como tema material de 25/08; tese de infraestrutura de IA segue atual, sem nova mudança suficiente para reescrever a matéria nesta janela.' },
  { slug:'security-briefing', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Sinais source-first foram rechecados; não apareceu novo conjunto material que justifique substituir o briefing profundo nesta janela. Reel jornalístico permanece condicionado a fato do dia.' },
  { slug:'seguranca', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CVE-2026-73570 do Zimbra está sob exploração ativa; alerta de 25/08 e evidência de mais de 270 instâncias comprometidas justificam Reel Cyber novo e ação defensiva imediata.' },
  { slug:'appsec-ssdlc', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Busca da tarde não encontrou mudança primária AppSec/SSDLC de 25/08 forte o bastante para novo Reel sem duplicar o ângulo Cyber; feed profundo permanece preservado.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
