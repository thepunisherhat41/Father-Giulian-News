export type EditorialFreshnessState = 'ATUALIZADO' | 'VALIDADO';

export type EditorialFreshnessEntry = {
  slug: string;
  state: EditorialFreshnessState;
  validatedAt: string;
  note: string;
};

// HARD GATE: regenerado para a edição das 05h20 de 26/08 em America/Sao_Paulo.
// Exatamente 21 áreas; Náutica permanece removida.
export const editorialFreshnessDate = '2026-08-26';
export const editorialFreshnessValidatedAt = '26/08/2026 · 05h20';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'A varredura das 05h20 não encontrou fato nacional de 26/08 suficientemente material e confirmado para justificar Reel novo; a área fica omitida em vez de reciclar 25/08.' },
  { slug:'seguranca-zl', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Nenhuma pauta de 26/08 na Zona Leste passou simultaneamente pelos gates de data, confirmação e mídia específica. Conteúdo anterior não é reapresentado como notícia de hoje.' },
  { slug:'politica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Agenda de 26/08 confirmada: Renan Santos está anunciado para entrevista presidencial da Globo às 21h05. O calendário oficial do TSE também traz hoje o prazo operacional para credenciamento de entrega de mapas e mídias do horário eleitoral. Agenda não é tratada como evento já realizado.' },
  { slug:'mundo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Iran e Omã retomaram conversas sobre um corredor temporário de navegação no Estreito de Hormuz; o tráfego segue muito abaixo do normal e não se trata de reabertura confirmada.' },
  { slug:'planeta', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de descoberta permanece válido fora do filtro jornalístico; nenhuma novidade foi inventada para forçar Reel.' },
  { slug:'animais', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de descoberta segue correto e útil; sem rotação artificial de notícia.' },
  { slug:'tempo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CGE indica para 26/08 sol entre nuvens, mínima perto de 14°C, máxima de até 24°C e possibilidade de chuva isolada/chuvisco entre fim da tarde e noite.' },
  { slug:'curiosidades', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Rotação de 26/08 usa tensão superficial, ilusão de Müller-Lyer e reflexão interna total em fibra óptica, sem repetir os conceitos de 25/08 e com mídia real específica.' },
  { slug:'musica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo cultural diário permanece no feed e não é apresentado como breaking news.' },
  { slug:'games', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'A gamescom abre oficialmente em 26/08; o dia é de imprensa e visitantes profissionais, com horários oficiais da Koelnmesse usados como referência.' },
  { slug:'gravidez', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Módulo diário permanece válido e separado de diagnóstico; PregnancyMaternalChanges, BabyDiscoveryLab, PregnancyVomitingCare e puerpério permanecem preservados.' },
  { slug:'pai', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Ação prática diária de apoio segue adequada e não depende de fato jornalístico.' },
  { slug:'carros', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Permanece limitado a usados até R$70 mil, com foco em FIPE/preço, manutenção, confiabilidade, inspeção e custo-benefício.' },
  { slug:'motos', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico de compra e manutenção segue válido e permanece no fim do feed.' },
  { slug:'mecanica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico evergreen segue útil e com mídia específica.' },
  { slug:'viagens', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo diário de destino permanece; dados dinâmicos só entram quando confirmados.' },
  { slug:'financas', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Na manhã de 26/08, Brent caiu para a faixa de US$86 e o Treasury de 10 anos recuou para perto de 4,63%, refletindo esperança cautelosa sobre Hormuz antes de novos dados de inflação dos EUA.' },
  { slug:'tecnologia', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Nvidia divulga resultados nesta quarta; o mercado acompanha a transição Blackwell→Rubin e a sustentabilidade do ciclo de financiamento de infraestrutura de IA. Tratar expectativas como projeções, não como resultado já divulgado.' },
  { slug:'security-briefing', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CISA publicou em 26/08 “A Tale of Two SOCs”, com aprendizados de duas avaliações de red team sobre visibilidade, detecção, investigação e resposta.' },
  { slug:'seguranca', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'O incidente Zimbra continua relevante, porém a publicação-base é de 25/08; sem fato novo de 26/08 nesta janela, o Reel Cyber anterior não é reciclado.' },
  { slug:'appsec-ssdlc', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Nenhuma mudança primária AppSec/SSDLC de 26/08 forte o suficiente foi encontrada nesta janela; Reel jornalístico omitido.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
