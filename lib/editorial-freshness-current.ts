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
export const editorialFreshnessValidatedAt = '27/08/2026 · revisão 10h12';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Reavaliado às 10h12: a PEC 221/2019 permanece na CCJ com emendas registradas até 26/08, sem nova etapa oficial material confirmada em 27/08; não reciclar articulação anterior como notícia de hoje.' },
  { slug:'seguranca-zl', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Serviço vigente hoje: vacinação contra sarampo no Shopping Metrô Itaquera em 27/08, das 10h às 20h, confirmada pela Prefeitura/SMS.' },
  { slug:'politica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'TSE tem sessão prevista para 27/08 e o plano de mídia/propaganda que começa em 28/08 segue como marco material; agenda anunciada continua separada de presença e decisão consumadas.' },
  { slug:'mundo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters publicou em 27/08 nova leitura de tráfego em Hormuz e negociações regionais; melhora pontual não é normalização.' },
  { slug:'planeta', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen revalidado; não inventar novidade diária.' },
  { slug:'animais', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen revalidado; não inventar novidade diária.' },
  { slug:'tempo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CGE revalidado em 27/08: manhã sem mudança material que invalide o boletim de 06h23; máxima prevista de 28°C e baixo potencial de tempestade.' },
  { slug:'curiosidades', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Rotação diária revalidada com gelo/densidade, checker-shadow e correção de erros em QR Code; conceitos distintos dos dias recentes.' },
  { slug:'musica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo cultural revalidado; não é breaking news.' },
  { slug:'games', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'gamescom Awesome Indies ocorre hoje, 27/08, às 20h CEST / 15h em São Paulo, confirmado na programação oficial.' },
  { slug:'gravidez', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Acompanhamento educativo revalidado para a fase atual, com cuidados pós-vômito preservados.' },
  { slug:'pai', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de paternidade e apoio prático revalidado para a fase atual.' },
  { slug:'carros', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Comparativo evergreen permanece limitado a usados reais de até R$70 mil, com FIPE/preço, manutenção, inspeção e custo-benefício.' },
  { slug:'motos', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico evergreen revalidado.' },
  { slug:'mecanica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico evergreen revalidado.' },
  { slug:'viagens', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de destino/planejamento revalidado; não tratado como notícia sem fato novo.' },
  { slug:'financas', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Mercados de 27/08 seguem reagindo ao guidance da Nvidia e à queda do petróleo; Reel é fotografia intradiária, nunca fechamento.' },
  { slug:'tecnologia', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters reportou em 27/08 negociação Nvidia/Hugging Face; status permanece reportado enquanto não houver confirmação corporativa direta.' },
  { slug:'security-briefing', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Sem novo sinal primário de 27/08 suficientemente confirmado para o Reel; conteúdo profundo permanece revalidado e fora do feed jornalístico.' },
  { slug:'seguranca', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Cobertura publicada em 27/08 confirma ordem urgente da CISA para corrigir CVE-2026-8452 em NetScaler sob exploração ativa; o evento KEV é explicitamente datado, sem fingir descoberta de hoje.' },
  { slug:'appsec-ssdlc', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'BleepingComputer atualizou em 27/08 a cobertura da CVE-2026-18431 após esclarecimento do Wordfence; a descoberta original é anterior e o foco atual é correção e exposição real.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
