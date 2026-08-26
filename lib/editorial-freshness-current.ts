export type EditorialFreshnessState = 'ATUALIZADO' | 'VALIDADO';

export type EditorialFreshnessEntry = {
  slug: string;
  state: EditorialFreshnessState;
  validatedAt: string;
  note: string;
};

// HARD GATE: revisão editorial completa das 10h de 26/08 em America/Sao_Paulo.
// Exatamente 21 áreas; Náutica permanece removida.
export const editorialFreshnessDate = '2026-08-26';
export const editorialFreshnessValidatedAt = '26/08/2026 · 10h05';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters publicou hoje análise nova sobre o desafio fiscal que qualquer governo eleito enfrentará: dívida bruta em 81,9% do PIB, déficit nominal próximo de 10% do PIB e necessidade de medidas politicamente difíceis para estabilizar a trajetória. A matéria é tratada como análise econômica, não como previsão eleitoral.' },
  { slug:'seguranca-zl', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Nova varredura às 10h não encontrou pauta de 26/08 na Zona Leste que passasse simultaneamente por atualidade, confirmação e mídia específica. Reel omitido; nada de ontem é reciclado como hoje.' },
  { slug:'politica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Radar de 26/08 mantém a entrevista de Renan Santos anunciada para 21h05 e o marco operacional do calendário TSE; acrescenta a discussão publicada hoje sobre a proposta de selo para institutos de pesquisa, deixando claro que a medida ainda está em avaliação e não é regra vigente.' },
  { slug:'mundo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Irã e Omã avançaram em conversas sobre um corredor temporário em Hormuz, mas dados de tráfego seguem muito abaixo da média; negociação não é reabertura.' },
  { slug:'planeta', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen reavaliado e mantido; não foi inventada novidade para forçar Reel jornalístico.' },
  { slug:'animais', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico/animal continua correto e útil; sem rotação artificial.' },
  { slug:'tempo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CGE mantém para 26/08 sol entre nuvens, máxima perto de 24°C e possibilidade de chuva isolada/chuvisco entre fim da tarde e noite.' },
  { slug:'curiosidades', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'A rotação de 26/08 permanece válida: tensão superficial, Müller-Lyer e reflexão interna total em fibra óptica, sem repetir os conceitos de 25/08.' },
  { slug:'musica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo musical cultural segue válido no feed e não é apresentado como breaking news.' },
  { slug:'games', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'A gamescom está oficialmente aberta em 26/08; primeiro dia é voltado a profissionais e imprensa conforme horários oficiais da organização.' },
  { slug:'gravidez', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Módulos médicos e de desenvolvimento permanecem preservados e válidos; conteúdo não é tratado como diagnóstico.' },
  { slug:'pai', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Ação prática diária de apoio e conteúdo de paternidade permanecem adequados e não dependem de notícia.' },
  { slug:'carros', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Permanece limitado a usados até R$70 mil, com FIPE/preço, manutenção, confiabilidade, inspeção e custo-benefício.' },
  { slug:'motos', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico de compra/manutenção continua válido e permanece no fim do feed.' },
  { slug:'mecanica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico evergreen segue útil e precisa manter mídia específica.' },
  { slug:'viagens', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de destino permanece válido; programação/preço só mudam quando houver confirmação atual.' },
  { slug:'financas', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Snapshot intradiário de 26/08 mantém petróleo e yields longos em queda com cautela sobre Hormuz; valores são apresentados como fotografia da manhã, não fechamento.' },
  { slug:'tecnologia', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Nvidia divulga resultados hoje; até a divulgação, consenso de receita/margens e leitura sobre Blackwell→Rubin são expectativas, não números reportados.' },
  { slug:'security-briefing', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CISA publicou hoje A Tale of Two SOCs, com lições de duas avaliações de red team sobre telemetria, detecção, investigação e resposta.' },
  { slug:'seguranca', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Relato profissional de 26/08 aponta exploração ativa da CVE-2026-60004 no Gitea. Cyber trata detecção/exposição e risco operacional da plataforma self-hosted.' },
  { slug:'appsec-ssdlc', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'A CVE-2026-60004 no Gitea entra pelo ângulo AppSec/SSDLC: usuário com write access pode alcançar execução de comandos no contexto do serviço, tornando identidade, permissões, runners, secrets e blast radius parte do gate de priorização.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
