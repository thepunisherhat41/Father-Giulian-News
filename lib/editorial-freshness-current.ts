export type EditorialFreshnessState = 'ATUALIZADO' | 'VALIDADO';

export type EditorialFreshnessEntry = {
  slug: string;
  state: EditorialFreshnessState;
  validatedAt: string;
  note: string;
};

// HARD GATE: este arquivo precisa ser regenerado em toda execução antes do deploy.
// O quality gate compara a data abaixo com America/Sao_Paulo e exige exatamente 22 entradas.
export const editorialFreshnessDate = '2026-08-22';
export const editorialFreshnessValidatedAt = '22/08/2026 · 10h';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Nova busca Reuters/últimas 24h revalidou o telefonema Lula–Trump e a negociação tarifária; nenhum fato posterior mais forte até 10h justificou substituir a pauta.' },
  { slug:'seguranca-zl', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Varredura refeita por Itaquera e bairros da Zona Leste em fontes oficiais. Não apareceu ocorrência ou serviço novo suficientemente confirmado que justificasse substituir os itens atuais; conteúdo antigo permanece datado e separado de contexto.' },
  { slug:'politica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters/Datafolha de 21/08 incorporado: cenário de segundo turno 47% a 43%, com margem de erro de dois pontos; leitura destaca metodologia e neutralidade.' },
  { slug:'mundo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters 22/08: Irã autorizou alguns petroleiros iraquianos em Hormuz; exceção não significa reabertura. Novas sanções dos EUA são esperadas para segunda.' },
  { slug:'planeta', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Termoclina e efeitos em mistura, acústica e ecossistemas permanecem cientificamente corretos e editorialmente úteis.' },
  { slug:'animais', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Canal acústico oceânico e relação com mamíferos marinhos seguem corretos; não houve fato científico recente melhor que justificasse rotação.' },
  { slug:'tempo', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'CGE 22/08 às 06h37: média de 13°C, mínima absoluta de 8,9°C em Parelheiros e estado de atenção para baixas temperaturas em toda a capital.' },
  { slug:'curiosidades', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Espalhamento da luz e cores do pôr do sol permanecem corretos, claros e com aplicação científica útil.' },
  { slug:'musica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Rock e Sertanejo de Época, Top 10, players e deduplicação foram rechecados; sem necessidade de rotação artificial nesta janela.' },
  { slug:'games', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Agenda oficial gamescom atualizada: gamescom dev começa 23/08, Opening Night Live em 25/08 e feira principal 26–30/08; confirmado separado de rumor.' },
  { slug:'gravidez', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Idade gestacional recalculada pela DPP 11/04/2027: 6s+6d. Cuidados pós-vômito e sinais de desidratação revalidados com ACOG/NHS.' },
  { slug:'pai', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Nova ação segura do dia: kit pós-enjoo pronto, com logística assumida pelo parceiro e preservação de autonomia/consentimento.' },
  { slug:'carros', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Quatro usados com motor acima de 1.0, teto de R$70 mil, manutenção, inspeção, veredito e fotos por modelo permanecem coerentes; nenhum preço novo foi inventado.' },
  { slug:'motos', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Quatro motos, preços de referência, ciclística, sinais de queda, suspensão, pneus, relação, freios/ABS e mídia por modelo permanecem coerentes.' },
  { slug:'mecanica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Fluido de freio higroscópico e margem térmica continuam tecnicamente corretos; material mantém aplicação prática e mídia pertinente.' },
  { slug:'nautica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Milha náutica, nó e leitura de carta seguem corretos e aplicáveis; não houve mudança factual que justificasse troca.' },
  { slug:'viagens', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Paranapiacaba continua adequada como bate-volta; recomendações de clima, caminhada, horários e confirmação prévia permanecem válidas.' },
  { slug:'financas', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Mercados estão fechados no sábado; fechamento de sexta e risco de energia/juros longos foram rechecados. Não foi inventada cotação de fim de semana.' },
  { slug:'tecnologia', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Infraestrutura física para IA, energia e interconexão continuam materialmente relevantes; buscas de 22/08 não encontraram anúncio primário melhor até 10h.' },
  { slug:'security-briefing', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Sinais revalidados em fontes primárias e CISA/OWASP; prioridades continuam materiais e devem ser contextualizadas por exposição, privilégio e blast radius.' },
  { slug:'seguranca', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'ClickFix/engenharia social seguem atuais e defensivamente úteis; não surgiu advisory primário novo mais forte até 10h que justificasse substituir o tema.' },
  { slug:'appsec-ssdlc', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Agentic CI/CD, supply chain, autorização de tools, proveniência e trust boundaries foram revalidados; OWASP GenAI continua sustentando a linha defensiva.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
