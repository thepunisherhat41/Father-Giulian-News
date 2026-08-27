export type EditorialFreshnessState = 'ATUALIZADO' | 'VALIDADO';

export type EditorialFreshnessEntry = {
  slug: string;
  state: EditorialFreshnessState;
  validatedAt: string;
  note: string;
};

// HARD GATE: edição de 27/08 em America/Sao_Paulo.
// Náutica permanece removida. Reels jornalísticos só entram como ATUALIZADO.
export const editorialFreshnessDate = '2026-08-27';
export const editorialFreshnessValidatedAt = '27/08/2026 · revisão 11h30';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Sem nova etapa oficial material da PEC 221/2019 confirmada em 27/08 nesta revisão; não reciclar articulação de 26/08 como notícia de hoje.' },
  { slug:'seguranca-zl', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Serviço do próprio dia: vacinação contra sarampo no Shopping Metrô Itaquera em 27/08, das 10h às 20h, confirmada pela Prefeitura/SMS e com mídia do local.' },
  { slug:'politica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'PoderData/Aya divulgado em 27/08: Lula 38% x Flávio 35% no 1º turno e 45% x 44% no 2º; registro BR-04974/2026. Sabatina de Lula às 21h05 segue como agenda confirmada, ainda não realizada nesta revisão.' },
  { slug:'mundo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters publicou em 27/08 nova leitura de tráfego em Hormuz e negociações regionais; melhora pontual não é normalização.' },
  { slug:'planeta', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen revalidado; não inventar novidade diária.' },
  { slug:'animais', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen revalidado; não inventar novidade diária.' },
  { slug:'tempo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CGE de 27/08 mantém mínima de 16°C, máxima de 28°C e baixo potencial de tempestade; boletins do próprio dia foram revalidados.' },
  { slug:'curiosidades', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Rotação diária revalidada com gelo/densidade, checker-shadow e correção de erros em QR Code; conceitos diferentes dos sete dias anteriores pela rotação atual.' },
  { slug:'musica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo cultural revalidado; não é breaking news.' },
  { slug:'games', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'gamescom Awesome Indies ocorre hoje, 27/08, às 20h CEST / 15h em São Paulo, confirmado na programação oficial.' },
  { slug:'gravidez', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Acompanhamento educativo revalidado para a fase atual, com cuidados pós-vômito preservados.' },
  { slug:'pai', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de paternidade e apoio prático revalidado para a fase atual.' },
  { slug:'carros', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Comparativo evergreen permanece limitado a usados reais de até R$70 mil, com manutenção, inspeção e custo-benefício.' },
  { slug:'motos', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico evergreen revalidado.' },
  { slug:'mecanica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico evergreen revalidado.' },
  { slug:'viagens', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de destino/planejamento revalidado; não tratado como notícia sem fato novo.' },
  { slug:'financas', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Mercados de 27/08 seguem reagindo ao guidance da Nvidia e à queda do petróleo; Reel permanece intradiário e não é chamado de fechamento.' },
  { slug:'tecnologia', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters publicou em 27/08 que a Nvidia concordou em adquirir a Hugging Face por US$12,9 bi segundo The Information; o Reel mantém atribuição e não trata como comunicado corporativo oficial.' },
  { slug:'security-briefing', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Sem novo sinal primário de 27/08 suficientemente confirmado para o Reel; permanece fora do feed jornalístico.' },
  { slug:'seguranca', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'BleepingComputer publicou em 27/08 ordem urgente da CISA para corrigir CVE-2026-8452 em NetScaler sob exploração ativa; prazo federal indicado é 29/08.' },
  { slug:'appsec-ssdlc', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'A matéria-base da cadeia Avada/Fusion Builder é de 26/08. Sem fato novo primário suficiente de 27/08 nesta revisão, o Reel AppSec é omitido em vez de reciclar a pauta.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
