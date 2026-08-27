export type EditorialFreshnessState = 'ATUALIZADO' | 'VALIDADO';

export type EditorialFreshnessEntry = {
  slug: string;
  state: EditorialFreshnessState;
  validatedAt: string;
  note: string;
};

// HARD GATE: edição de 27/08 em America/Sao_Paulo.
// Exatamente 21 áreas editoriais. Náutica permanece removida.
// Corinthians é um Reel editorial extra controlado no componente.
export const editorialFreshnessDate = '2026-08-27';
export const editorialFreshnessValidatedAt = '27/08/2026 · revisão 08h35';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'PEC 221/2019 segue na CCJ com 12 emendas registradas até 26/08 e articulação política nova em 27/08; texto ainda não aprovado no Senado.' },
  { slug:'seguranca-zl', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Serviço vigente hoje: vacinação contra sarampo no Shopping Metrô Itaquera em 27/08, das 10h às 20h, confirmada pela Prefeitura/SMS.' },
  { slug:'politica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Detalhamento divulgado em 27/08 do plano de mídia presidencial: Lula 5m31s, Flávio 4m20s, Caiado 2m02s e Cury 35s; propaganda começa em 28/08.' },
  { slug:'mundo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters publicou em 27/08 nova leitura de tráfego em Hormuz e negociações regionais; melhora pontual não é normalização.' },
  { slug:'planeta', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen revalidado; não inventar novidade diária.' },
  { slug:'animais', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen revalidado; não inventar novidade diária.' },
  { slug:'tempo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CGE atualizou 27/08 às 06h23: média de 16°C, sem instabilidade no radar e máxima prevista de 28°C.' },
  { slug:'curiosidades', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Rotação diária revalidada com gelo/densidade, checker-shadow e correção de erros em QR Code; conceitos distintos dos dias recentes.' },
  { slug:'musica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo cultural revalidado; não é breaking news.' },
  { slug:'games', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'gamescom Awesome Indies ocorre hoje, 27/08, às 20h CEST (15h em São Paulo), confirmado no site oficial.' },
  { slug:'gravidez', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Acompanhamento médico/educativo revalidado para 7 semanas + 4 dias, com cuidados pós-vômito preservados.' },
  { slug:'pai', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de paternidade e apoio prático revalidado para a fase atual.' },
  { slug:'carros', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Comparativo evergreen permanece limitado a usados reais de até R$70 mil, com manutenção, inspeção e custo-benefício.' },
  { slug:'motos', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico evergreen revalidado.' },
  { slug:'mecanica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico evergreen revalidado.' },
  { slug:'viagens', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de destino/planejamento revalidado; não tratado como notícia sem fato novo.' },
  { slug:'financas', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Mercados de 27/08 reagiram ao guidance forte da Nvidia e à queda do petróleo; Reel permanece intradiário e não é chamado de fechamento.' },
  { slug:'tecnologia', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters publicou em 27/08 relato de acordo Nvidia–Hugging Face de US$12,9 bi; status permanece reportado enquanto confirmação direta das empresas não estiver disponível.' },
  { slug:'security-briefing', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CISA publicou em 27/08 Vulnerability Review FY2024-2025; briefing traduz a priorização por exploração e impacto operacional.' },
  { slug:'seguranca', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CVE-2026-8452 em Citrix NetScaler recebeu sinal de exploração ativa/KEV com cobertura publicada em 27/08.' },
  { slug:'appsec-ssdlc', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CVE-2026-18431 no Avada/Fusion Builder teve atualização em 27/08 e fornece pauta AppSec nova sobre cadeia de seis falhas e patch de ambos os componentes.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
