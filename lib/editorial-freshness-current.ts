export type EditorialFreshnessState = 'ATUALIZADO' | 'VALIDADO';

export type EditorialFreshnessEntry = {
  slug: string;
  state: EditorialFreshnessState;
  validatedAt: string;
  note: string;
};

// HARD GATE: edição de 28/08 em America/Sao_Paulo.
// Náutica permanece removida. Reels jornalísticos só entram como ATUALIZADO.
export const editorialFreshnessDate = '2026-08-28';
export const editorialFreshnessValidatedAt = '28/08/2026 · revisão 08h35';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Sem fato novo nacional de 28/08 suficientemente material e confirmado para esta janela; o Reel Brasil fica omitido em vez de reciclar pauta anterior.' },
  { slug:'seguranca-zl', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Serviço do próprio dia: vacinação contra sarampo no Shopping Metrô Itaquera em 28/08, das 10h às 20h, confirmada pela Prefeitura/SMS e tratada como agenda/serviço.' },
  { slug:'politica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Fato oficial de 28/08: começa o horário eleitoral gratuito, com regras do TSE para propaganda e IA. Nenhuma nova pesquisa presidencial nacional de 28/08 foi incorporada nesta revisão; levantamentos anteriores permanecem datados.' },
  { slug:'mundo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters publicou em 28/08 avanço da mediação para possível corredor seguro em Hormuz; negociação não é tratada como reabertura concluída.' },
  { slug:'planeta', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen revalidado; não inventar novidade diária.' },
  { slug:'animais', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen revalidado; não inventar novidade diária.' },
  { slug:'tempo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Previsão de 28/08 indica início de onda de calor em São Paulo, máxima podendo chegar a 34°C e umidade baixa; conteúdo rotulado como previsão.' },
  { slug:'curiosidades', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Rotação de 28/08: geometria do arco-íris, ponto cego fisiológico e USB-C reversível. Conceitos distintos de relâmpagos/Stroop/GPS, tensão superficial/Müller-Lyer/fibra óptica e gelo/checker-shadow/QR Code usados nos três dias anteriores e inéditos na janela de sete dias.' },
  { slug:'musica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo cultural revalidado; não é breaking news.' },
  { slug:'games', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'gamescom segue em 28/08 com agenda oficial de palco e encerramento da votação online Fan Favorite do cosplay.' },
  { slug:'gravidez', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Acompanhamento educativo revalidado para 7 semanas + 5 dias, preservando orientações de hidratação e cuidados após vômitos.' },
  { slug:'pai', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de paternidade revalidado para a fase atual, com missão prática de apoio.' },
  { slug:'carros', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Comparativo evergreen permanece limitado a usados reais de até R$70 mil, com manutenção, confiabilidade, inspeção e custo-benefício.' },
  { slug:'motos', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico evergreen revalidado.' },
  { slug:'mecanica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico evergreen revalidado.' },
  { slug:'viagens', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de destino/planejamento revalidado; não tratado como notícia sem fato novo.' },
  { slug:'financas', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Mercados de 28/08 aguardam sinalização do Fed em Jackson Hole; Reel é fotografia intradiária e não é chamado de fechamento.' },
  { slug:'tecnologia', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters publicou em 28/08 reação das ações da Marvell ao timing esperado da receita do acordo de chips de IA com Google; fato e expectativa de mercado aparecem separados.' },
  { slug:'security-briefing', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'SecurityWeek publicou em 28/08 que PaperCut confirmou exploração de zero-day em NG/MF e liberou patches emergenciais; patch e investigação de comprometimento são tratados separadamente.' },
  { slug:'seguranca', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'BleepingComputer publicou em 28/08 três falhas críticas pré-auth corrigidas no ServiceNow AI Platform; a empresa diz não ter evidência de exploração maliciosa dessas três CVEs.' },
  { slug:'appsec-ssdlc', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Sem pauta AppSec distinta, material e suficientemente confirmada de 28/08 nesta janela; Reel omitido para evitar duplicar Cyber ou reciclar a cadeia Avada de 26/08.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
