export type EditorialFreshnessState = 'ATUALIZADO' | 'VALIDADO';

export type EditorialFreshnessEntry = {
  slug: string;
  state: EditorialFreshnessState;
  validatedAt: string;
  note: string;
};

// HARD GATE: este arquivo precisa ser regenerado em toda execução antes do deploy.
// O quality gate compara a data abaixo com America/Sao_Paulo e exige exatamente 22 entradas.
export const editorialFreshnessDate = '2026-08-21';
export const editorialFreshnessValidatedAt = '21/08/2026 · 10h';

export const editorialFreshness: EditorialFreshnessEntry[] = [
  { slug:'brasil', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'PEC da jornada 6x1 avançada em 20/08 continua dentro da janela de 24h e segue material; nenhuma fonte melhor justificou troca às 10h.' },
  { slug:'seguranca-zl', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Região, Segurança, Casos, Matérias, Dados, Ações e Serviços rechecados; vacinação em Corinthians-Itaquera e fatos locais seguem atuais, sem reciclar ocorrência antiga como novidade.' },
  { slug:'politica', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Calendário do TSE de 21/08 incorporado: percentuais nacionais de candidaturas para destinação de recursos e obrigações operacionais das emissoras antes do horário eleitoral.' },
  { slug:'mundo', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Ataque de grande escala a Kyiv de 20/08 permanece dentro da janela prioritária e continua material; não foi substituído por manchete mais forte às 10h.' },
  { slug:'planeta', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Termoclina e seus efeitos em som, mistura oceânica e ecossistemas foram rechecados; conteúdo científico evergreen permanece correto.' },
  { slug:'animais', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Canal acústico oceânico e relação com mamíferos marinhos permanecem corretos e não exigem rotação artificial.' },
  { slug:'tempo', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'INMET rechecado para 21/08: massa de ar frio e ventos no Sudeste confirmam a leitura publicada; sem mudança material adicional às 10h.' },
  { slug:'curiosidades', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Explicação sobre espalhamento da luz e pôr do sol permanece cientificamente correta e com mídia adequada.' },
  { slug:'musica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Trilhas Rock e Sertanejo de Época, Top 10 e agenda do fim de semana foram rechecados; nenhuma atualização material exigiu troca.' },
  { slug:'games', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Agenda oficial da gamescom 2026 permanece correta; confirmado, a caminho e rumor continuam separados.' },
  { slug:'gravidez', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Idade gestacional de 6s5d, cuidados com vômito, Baby Discovery Lab e guia de puerpério continuam corretos e com fontes médicas confiáveis.' },
  { slug:'pai', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Ação prática de redução de carga mental permanece segura, nova no dia e aplicável.' },
  { slug:'carros', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Comparativo mantém quatro opções acima de 1.0 e até R$70 mil; foco em histórico térmico continua útil e coerente com inspeção de usado.' },
  { slug:'motos', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Comparativo e foco em idade/ressecamento/deformação de pneus permanecem tecnicamente corretos.' },
  { slug:'mecanica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Fluido de freio higroscópico e perda de margem térmica continuam corretos; mídia da peça permanece pertinente.' },
  { slug:'nautica', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Milha náutica, nó e conexão com cartas foram rechecados e continuam corretos.' },
  { slug:'viagens', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Paranapiacaba segue adequado como bate-volta; planejamento de clima, caminhada e horários permanece aplicável.' },
  { slug:'financas', state:'ATUALIZADO', validatedAt:editorialFreshnessValidatedAt, note:'Reuters de 21/08 incorporada: Brent perto de US$95, dólar pressionado e Treasury de 30 anos na região de 5,25%; impacto e limites foram reescritos.' },
  { slug:'tecnologia', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Cerebras CS-4 segue recente e material para inferência de IA; nenhuma notícia de hardware mais forte justificou substituição às 10h.' },
  { slug:'security-briefing', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Decision Desk e sinais profissionais foram reavaliados na web; conjunto continua material e prioridade segue contextual, não baseada apenas em CVSS.' },
  { slug:'seguranca', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'ClickFix/CrashFix e cadeia de engenharia social seguem relevantes; fontes Microsoft foram rechecadas e o foco defensivo permanece válido.' },
  { slug:'appsec-ssdlc', state:'VALIDADO', validatedAt:editorialFreshnessValidatedAt, note:'Agentic CI/CD, autorização de tools, tokens, supply chain e trust boundaries permanecem atuais; Mandiant reforça guardrails para agentes privilegiados.' },
];

export function freshnessForSlug(slug: string) {
  return editorialFreshness.find((item) => item.slug === slug);
}
