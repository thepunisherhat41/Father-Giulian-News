export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-10-04';
export const editorialFreshnessValidatedAt='04/10/2026 · corte 05h00';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 04/10: primeiro turno hoje, votação das 8h às 17h pelo horário de Brasília, conforme TSE.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 04/10: Merz chegou a Kyiv para cooperação de drones e novo pacote de apoio alemão.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 04/10: dia do primeiro turno; pesquisa não é resultado; totalização oficial após a votação.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO 04/10: São Paulo pode ter pancadas, sobretudo entre tarde e noite.'},
{slug:'seguranca-zl',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 04/10: transporte gratuito e operação reforçada para o domingo eleitoral na capital e rede metropolitana.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 04/10: fechamento da final feminina de 03/10 e próximo compromisso do masculino contra o Internacional.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem card editorial próprio na ordem vigente; conteúdo científico do dia fica em Curiosidades.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem card editorial próprio na ordem vigente; conteúdo animal do dia fica em Curiosidades.'},
{slug:'curiosidades',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação 04/10 nova: assobios-assinatura de golfinhos, remodelação óssea e densidade de Saturno.'},
{slug:'gravidez',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 13 semanas completas, com fontes NHS/ACOG.'},
{slug:'pai',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão 04/10: presença prática sem transformar apoio em cobrança.'},
{slug:'viagens',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'SERVIÇO 04/10: justificativa eleitoral para quem está fora do domicílio eleitoral.'},
{slug:'musica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'RECOMENDAÇÃO 04/10: curadoria de lançamentos da semana, sem fingir lançamento ocorrido no domingo.'},
{slug:'games',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO/AGENDA 04/10: lançamentos datados de hoje no Steam e disponibilidade geral do LEGO PlayStation.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'REPORTAGEM 04/10: força-tarefa de IA liderada por Jay Clayton; origem da informação é explicitada como 03/10.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 04/10: mercados domésticos fechados; eleição é referência para a reabertura, sem cotação dominical inventada.'},
{slug:'security-briefing',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 04/10: Coreia do Sul ordena investigação ampla após vazamentos no setor financeiro e órgãos públicos.'},
{slug:'seguranca',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 04/10: CVE-2026-61500 do Rejetto HFS, divulgada em 30/09, com exploração observada após a divulgação.'},
{slug:'appsec-ssdlc',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 04/10: CVE-2026-105123 em fluxo de upload/path, com lições de allowlist, canonicalização e isolamento de uploads.'},
{slug:'carros',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'RADAR 04/10: exemplos reais do corte consultado abaixo do teto absoluto de R$70 mil.'},
{slug:'motos',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'CHECKLIST 04/10: pneus e inspeção prévia para condição de piso molhado.'},
{slug:'mecanica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'CHECKLIST 04/10: palhetas, pneus, iluminação e visibilidade para domingo com possibilidade de chuva.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
