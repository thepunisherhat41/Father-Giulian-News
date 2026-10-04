export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-10-04';
export const editorialFreshnessValidatedAt='04/10/2026 · corte 02h49';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 04/10: primeiro turno hoje, votação das 8h às 17h pelo horário de Brasília, conforme TSE.'},
{slug:'mundo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material novo de 04/10 confirmado neste corte inicial.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 04/10: dia do primeiro turno; pesquisas da véspera não são tratadas como resultado; apuração oficial após o encerramento da votação.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO 04/10: São Paulo com possibilidade de pancadas, sobretudo à tarde/noite; não apresentada como ocorrência.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo datado de 04/10 confirmado para Zona Leste neste corte; card anterior não deve ser vendido como notícia de hoje.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 04/10 sobre fato de 03/10: empate 1x1, vice no Brasileiro Feminino, 3x2 agregado e público de 49.405.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato jornalístico material da data; conteúdo científico fica em Curiosidades.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato jornalístico material da data; conteúdo animal fica em Curiosidades.'},
{slug:'curiosidades',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação 04/10 nova: assobios-assinatura de golfinhos, remodelação óssea e densidade de Saturno.'},
{slug:'gravidez',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 13 semanas completas, com fontes NHS/ACOG.'},
{slug:'pai',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão nova 04/10: cuidado prático sem transformar apoio em cobrança.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem mudança material nova confirmada em 04/10 neste corte.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem lançamento/fato material novo confirmado em 04/10 neste corte.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo material de 04/10 confirmado neste corte.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato jornalístico material de 04/10 confirmado neste corte.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Mercados fechados no domingo; não reciclar pregão anterior como fato novo.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum advisory oficial novo datado de 04/10 confirmado neste corte.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhuma nova entrada CISA KEV datada de 04/10 confirmada neste corte.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum advisory AppSec/SSDLC material datado de 04/10 confirmado neste corte.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Radar preservado somente se ainda correto; teto absoluto de compra continua em R$70 mil.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo técnico permanece válido; sem fato material novo de 04/10.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo técnico permanece válido; sem fato material novo de 04/10.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}