export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-10-03';
export const editorialFreshnessValidatedAt='03/10/2026 · corte 05h12';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 03/10: transporte coletivo gratuito no primeiro turno de 04/10, conforme Resolução-TSE 23.751/2026 e operação divulgada.'},
{slug:'mundo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material novo de 03/10 confirmado neste corte; não reciclar fechamento de mercados de 02/10.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO REGULATÓRIO 03/10: véspera da eleição; regras de propaganda permanecem vigentes e o primeiro turno ocorre em 04/10.'},
{slug:'tempo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem nova ocorrência meteorológica confirmada neste corte; previsão deve permanecer identificada como previsão quando exibida.'},
{slug:'seguranca-zl',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 03/10: evento do Outubro Rosa anunciado para 17h no Shopping Penha; não afirmar realização antes de confirmação.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 03/10: São Paulo x Corinthians, 16h30, MorumBIS, volta da final do Brasileiro Feminino; placar não antecipado.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato jornalístico material da data; conteúdo científico fica na rotação de Curiosidades.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato jornalístico material da data; conteúdo animal fica na rotação de Curiosidades.'},
{slug:'curiosidades',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação 03/10 nova: reconhecimento facial em corvos, função do piscar e afastamento gradual da Lua.'},
{slug:'gravidez',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 12 semanas + 6 dias, com fontes NHS/ACOG e linguagem cautelosa.'},
{slug:'pai',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão nova 03/10: antecipar uma tarefa concreta para aliviar o domingo.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem mudança material nova confirmada em 03/10 neste corte.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem lançamento/fato material novo confirmado em 03/10 neste corte.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo material de 03/10 confirmado neste corte.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato jornalístico material de 03/10 confirmado neste corte.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem novo pregão/material de 03/10 confirmado neste corte; não reciclar movimento de 02/10 como fato novo.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum advisory oficial novo datado de 03/10 confirmado neste corte; não reciclar advisory anterior.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhuma nova entrada CISA KEV datada de 03/10 confirmada neste corte; CVEs anteriores não são apresentados como notícia de hoje.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum advisory AppSec/SSDLC material datado de 03/10 confirmado neste corte.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Radar preservado somente se ainda correto; teto absoluto de compra continua em R$70 mil.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo técnico permanece válido; sem fato material novo de 03/10.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo técnico permanece válido; sem fato material novo de 03/10.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
