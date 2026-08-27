export type EditorialFreshnessState = 'ATUALIZADO' | 'VALIDADO';

export type EditorialFreshnessEntry = {
  slug: string;
  state: EditorialFreshnessState;
  validatedAt: string;
  note: string;
};

// HARD GATE: edição de 27/08 em America/Sao_Paulo.
// Exatamente 21 áreas editoriais. Náutica permanece removida.
// Área jornalística sem fato material da data corrente fica VALIDADO e não entra no Reel.
export const editorialFreshnessDate = '2026-08-27';
export const editorialFreshnessValidatedAt = '27/08/2026 · revisão 05h';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Varredura refeita em 27/08; sem fato brasileiro novo desta manhã forte o suficiente para substituir a edição anterior. Omitir Reel jornalístico.' },
  { slug:'seguranca-zl', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Serviço vigente hoje: vacinação contra sarampo no Shopping Metrô Itaquera em 27/08, das 10h às 20h, confirmada pela Prefeitura/SMS. A notícia-base foi publicada em 26/08, mas o fato de serviço ocorre na data corrente.' },
  { slug:'politica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Radar vivo de 27/08: entrevista presidencial anunciada para Lula hoje e sessão do TSE nesta quinta; agenda anunciada permanece separada de presença/decisão consumada.' },
  { slug:'mundo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters publicou em 27/08 nova leitura de tráfego em Hormuz e das negociações regionais; melhora pontual não é normalização.' },
  { slug:'planeta', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen revalidado; não inventar novidade diária.' },
  { slug:'animais', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo científico evergreen revalidado; não inventar novidade diária.' },
  { slug:'tempo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CGE possui boletim de 27/08 para a capital; manter fotografia meteorológica explicitamente datada e substituir se houver mudança material.' },
  { slug:'curiosidades', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Rotação diária revalidada com gelo/densidade, checker-shadow e correção de erros em QR Code; conceitos distintos dos dias recentes.' },
  { slug:'musica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo cultural revalidado; não é breaking news.' },
  { slug:'games', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'gamescom Awesome Indies ocorre hoje, 27/08, às 20h CEST (15h em São Paulo), confirmado no site oficial; programação de hoje justifica Reel novo.' },
  { slug:'gravidez', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Acompanhamento médico/educativo revalidado para 7 semanas + 4 dias, com cuidados pós-vômito preservados.' },
  { slug:'pai', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de paternidade e apoio prático revalidado para a fase atual.' },
  { slug:'carros', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Comparativo evergreen permanece limitado a usados reais de até R$70 mil, com manutenção, inspeção e custo-benefício.' },
  { slug:'motos', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico evergreen revalidado.' },
  { slug:'mecanica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico evergreen revalidado.' },
  { slug:'viagens', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de destino/planejamento revalidado; não tratado como notícia sem fato novo.' },
  { slug:'financas', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Mercados de 27/08 reagiram ao guidance forte da Nvidia e à queda do petróleo; Reel usa fotografia intradiária e não confunde movimento de mercado com fechamento.' },
  { slug:'tecnologia', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters publicou em 27/08 relato de acordo Nvidia–Hugging Face de US$12,9 bi; status permanece reportado enquanto confirmação direta das empresas não estiver disponível.' },
  { slug:'security-briefing', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Revisão web refeita; nenhum sinal novo de 27/08 superou o briefing vigente em materialidade. Conteúdo profundo permanece, Reel jornalístico omitido.' },
  { slug:'seguranca', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Exploração ativa do Gitea foi reportada em 26/08, não 27/08. Continua relevante no hub, mas não deve ser reciclada como Reel novo de hoje.' },
  { slug:'appsec-ssdlc', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'A CVE do Gitea continua material para AppSec, porém o sinal publicado é de 26/08. Manter no conteúdo profundo e omitir Reel jornalístico de 27/08 sem novidade adicional.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
