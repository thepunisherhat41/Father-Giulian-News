export type EditorialFreshnessState = 'ATUALIZADO' | 'VALIDADO';

export type EditorialFreshnessEntry = {
  slug: string;
  state: EditorialFreshnessState;
  validatedAt: string;
  note: string;
};

// HARD GATE: regenerado para a edição de 26/08 em America/Sao_Paulo.
// Exatamente 21 áreas; Náutica permanece removida.
export const editorialFreshnessDate = '2026-08-26';
export const editorialFreshnessValidatedAt = '26/08/2026 · 02h26';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Na varredura inicial de 26/08 não apareceu fato nacional novo, material e suficientemente confirmado para novo Reel; a área jornalística fica omitida em vez de reciclar 25/08.' },
  { slug:'seguranca-zl', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Nenhuma pauta nova de 26/08 na Zona Leste passou simultaneamente pelos gates de data, confirmação e mídia semanticamente ligada; Reel omitido.' },
  { slug:'politica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Não foi encontrada nova pesquisa nacional divulgada em 26/08 nesta janela. A entrevista de Renan Santos permanece agenda anunciada para hoje e não é tratada como evento consumado antes de ocorrer.' },
  { slug:'mundo', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Sem novo fato internacional de 26/08 suficientemente material nesta janela inicial; conteúdo de 25/08 não é reapresentado como notícia de hoje.' },
  { slug:'planeta', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de descoberta permanece disponível fora do filtro jornalístico; nenhuma novidade foi inventada para forçar um Reel de notícia.' },
  { slug:'animais', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de descoberta segue válido; sem rotação artificial de notícia.' },
  { slug:'tempo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CGE indica para 26/08 sol entre nuvens, mínima perto de 14°C, máxima de até 24°C e possibilidade de chuva isolada/chuvisco entre fim da tarde e noite.' },
  { slug:'curiosidades', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Rotação renovada para 26/08 sem repetir raio, Stroop ou GPS: tensão superficial, ilusão de Müller-Lyer e reflexão interna total em fibra óptica, cada uma com conceito visual próprio.' },
  { slug:'musica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo cultural diário permanece no feed; não é apresentado como breaking news.' },
  { slug:'games', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'gamescom abre oficialmente em 26/08; o dia é de imprensa e visitantes profissionais, com horários oficiais da Koelnmesse usados como referência.' },
  { slug:'gravidez', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Módulo diário permanece válido e separado de diagnóstico; cuidados de hidratação e sinais de alarme continuam preservados.' },
  { slug:'pai', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Ação prática diária de apoio permanece adequada e não depende de fato jornalístico.' },
  { slug:'carros', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Permanece limitado a usados até R$70 mil, com foco em manutenção, confiabilidade, inspeção e custo-benefício.' },
  { slug:'motos', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico de compra e manutenção segue válido e permanece no fim do feed.' },
  { slug:'mecanica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico evergreen segue útil e com mídia específica.' },
  { slug:'viagens', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo diário de destino permanece; dados dinâmicos só entram quando confirmados.' },
  { slug:'financas', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Ainda sem fechamento ou fato financeiro de 26/08 suficientemente consolidado nesta janela; números de 25/08 não são reciclados como atuais.' },
  { slug:'tecnologia', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Sem nova publicação material de 26/08 nesta janela inicial; o Reel jornalístico fica condicionado a fato novo.' },
  { slug:'security-briefing', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CISA publicou em 26/08 A Tale of Two SOCs, com aprendizados de duas avaliações de red team sobre visibilidade, detecção, investigação e resposta.' },
  { slug:'seguranca', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'O incidente Zimbra continua relevante, porém a publicação-base é de 25/08; sem fato novo de 26/08 nesta janela, o Reel Cyber anterior não é reciclado.' },
  { slug:'appsec-ssdlc', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Nenhuma mudança primária AppSec/SSDLC de 26/08 forte o suficiente foi encontrada nesta janela; Reel jornalístico omitido.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
