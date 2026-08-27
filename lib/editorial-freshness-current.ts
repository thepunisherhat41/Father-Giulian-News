export type EditorialFreshnessState = 'ATUALIZADO' | 'VALIDADO';

export type EditorialFreshnessEntry = {
  slug: string;
  state: EditorialFreshnessState;
  validatedAt: string;
  note: string;
};

// HARD GATE: edição de 27/08 em America/Sao_Paulo.
// Áreas jornalísticas sem fato/materialidade do próprio dia ficam VALIDADO e não entram no Reel jornalístico.
export const editorialFreshnessDate = '2026-08-27';
export const editorialFreshnessValidatedAt = '27/08/2026 · revisão da manhã';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Sem atualização material de 27/08 suficientemente confirmada nesta janela; omitir em vez de reciclar 26/08.' },
  { slug:'seguranca-zl', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'A ação de vacinação em Itaquera ocorre hoje, mas a fonte oficial localizada foi publicada em 26/08. Pelo gate de fonte do próprio dia para Zona Leste, o Reel fica omitido até aparecer atualização datada de 27/08.' },
  { slug:'politica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Agenda presidencial de 27/08: Lula está previsto na série de entrevistas da Globo. Nenhuma pesquisa com divulgação em 27/08 foi incorporada nesta revisão; pesquisas anteriores permanecem contexto, não notícia do dia.' },
  { slug:'mundo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters publicou em 27/08 nova leitura de tráfego no Estreito de Hormuz: leve alta diária, ainda muito abaixo do normal, com negociação Irã-Omã em andamento.' },
  { slug:'planeta', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo evergreen; não tratado como notícia.' },
  { slug:'animais', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo evergreen; não tratado como notícia.' },
  { slug:'tempo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CGE publicou boletim de 27/08 às 00h18 com média de 18°C, nebulosidade e sem áreas de instabilidade sobre a capital.' },
  { slug:'curiosidades', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Rotação 27/08 substituída por gelo/densidade, checker-shadow e correção de erros em QR Code; conceitos diferentes dos sete dias anteriores revisados.' },
  { slug:'musica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo cultural, não notícia.' },
  { slug:'games', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Sem anúncio material de 27/08 suficientemente confirmado nesta janela; não reciclar apenas porque a gamescom está em andamento.' },
  { slug:'gravidez', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de acompanhamento/educação permanece válido e não é notícia.' },
  { slug:'pai', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de paternidade permanece válido e não é notícia.' },
  { slug:'carros', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Permanece restrito a usados até R$70 mil.' },
  { slug:'motos', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico evergreen.' },
  { slug:'mecanica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo técnico evergreen.' },
  { slug:'viagens', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Conteúdo de destino/planejamento, não breaking news.' },
  { slug:'financas', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Sem fechamento ou atualização brasileira material de 27/08 consolidada nesta janela; omitir em vez de reutilizar 26/08.' },
  { slug:'tecnologia', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters publicou em 27/08 informação reportada sobre acordo Nvidia-Hugging Face de US$12,9 bi. Sem confirmação imediata das empresas, o status editorial é reportado por fonte jornalística, não anúncio oficial.' },
  { slug:'security-briefing', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Sem briefing novo de 27/08 validado nesta janela; omitir.' },
  { slug:'seguranca', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'BleepingComputer publicou em 27/08 exploração ativa da CVE-2026-60004 no Gitea.' },
  { slug:'appsec-ssdlc', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'A exploração ativa do Gitea em 27/08 muda a priorização AppSec/SSDLC por impacto potencial em SCM, runners, tokens e secrets.' },
  { slug:'corinthians', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Nenhuma atualização de 27/08 suficientemente confirmada nas fontes revisadas nesta janela; omitir para não reciclar o quadro de 26/08.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
