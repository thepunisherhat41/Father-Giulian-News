export type EditorialFreshnessState = 'ATUALIZADO' | 'VALIDADO';

export type EditorialFreshnessEntry = {
  slug: string;
  state: EditorialFreshnessState;
  validatedAt: string;
  note: string;
};

// HARD GATE: este arquivo precisa ser regenerado em toda execução antes do deploy.
// O quality gate compara a data abaixo com America/Sao_Paulo e exige exatamente 22 entradas.
export const editorialFreshnessDate = '2026-08-21';
export const editorialFreshnessValidatedAt = '21/08/2026 · 17h';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters 21/08: Lula e Trump conversaram sobre tarifas; conteúdo reescrito para separar diálogo, negociação futura e eventual contramedida.' },
  { slug:'seguranca-zl', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Sete seções rechecadas. Vacinação em Corinthians-Itaquera, obra do Córrego Rio Verde e fatos locais seguem atuais; nenhuma ocorrência criminal nova e suficientemente confirmada justificou troca.' },
  { slug:'politica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Marcos oficiais do TSE incorporados às 10h continuam atuais às 17h; nenhuma mudança jurídica ou calendário mais relevante exigiu substituição. Conteúdo permanece neutro e sem recomendação.' },
  { slug:'mundo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Fechamento Reuters 21/08 incorporado: Brent US$93,86, risco de sanções e oferta/Hormuz; narrativa substitui o pico intradiário da manhã.' },
  { slug:'planeta', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Termoclina e efeitos em mistura, som e ecossistemas permanecem cientificamente corretos e com mídia científica pertinente.' },
  { slug:'animais', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Canal acústico oceânico e relação com mamíferos marinhos seguem corretos; não houve fato novo que justificasse rotação artificial.' },
  { slug:'tempo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CGE rechecado à tarde: rajada de 53,6 km/h na Guarapiranga às 14h20 e entrada de ar frio; conteúdo atualizado com medição e limites do dado.' },
  { slug:'curiosidades', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Espalhamento da luz e cores do pôr do sol permanecem corretos, profundos e com diagrama científico adequado.' },
  { slug:'musica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Rock e Sertanejo de Época, Top 10, players e deduplicação foram rechecados; conteúdo continua válido sem repetir faixa dentro das trilhas.' },
  { slug:'games', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Agenda oficial da gamescom 2026 foi revalidada; datas e distinção entre confirmado, a caminho e rumor permanecem corretas.' },
  { slug:'gravidez', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Idade gestacional, PregnancyMaternalChanges, BabyDiscoveryLab, cuidados pós-vômito e guia de puerpério permanecem coerentes com fontes médicas e com a DPP configurada.' },
  { slug:'pai', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Ação prática do dia segue segura, concreta e aplicável; apoio, consentimento e divisão de tarefas permanecem adequados.' },
  { slug:'carros', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Quatro opções com motor acima de 1.0 e teto de R$70 mil, inspeção, manutenção, veredito e fotos por modelo permanecem coerentes.' },
  { slug:'motos', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Quatro motos, preços de referência, ciclística, consumíveis, sinais de queda, freios/ABS e fotos por modelo permanecem coerentes.' },
  { slug:'mecanica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Fluido de freio higroscópico, margem térmica e diagnóstico permanecem tecnicamente corretos e com mídia da peça.' },
  { slug:'nautica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Milha náutica, nó e leitura de carta continuam corretos e aplicáveis; não houve mudança factual que exigisse troca.' },
  { slug:'viagens', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Paranapiacaba continua adequada para bate-volta e o planejamento de clima, caminhada e horários segue aplicável.' },
  { slug:'financas', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Fechamento de 21/08 incorporado: Brent US$93,86 e juros longos ainda altos; ângulo permanece custo de capital/CET, distinto da geopolítica da aba Mundo.' },
  { slug:'tecnologia', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters 21/08: Nvidia investiu na Cloverleaf Infrastructure; pauta atualizada para gargalos físicos de data centers, energia e interconexão.' },
  { slug:'security-briefing', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Decision Desk e 8–12 sinais foram reavaliados; prioridades permanecem materiais e contextuais. Timestamp da revisão foi atualizado para 17h.' },
  { slug:'seguranca', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'ClickFix/CrashFix e engenharia social continuam relevantes; não surgiu sinal primário novo mais forte que justificasse substituir o tema defensivo nesta janela.' },
  { slug:'appsec-ssdlc', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Agentic CI/CD, autorização de tools, supply chain e trust boundaries foram revalidados; OWASP Agentic Top 10 continua reforçando supply chain dinâmica e tool misuse.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
