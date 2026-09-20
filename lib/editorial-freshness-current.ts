export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-20';
export const editorialFreshnessValidatedAt='20/09/2026 · corte da madrugada';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato nacional material ocorrido e confirmado em 20/09 neste corte da madrugada; não reciclar publicação de ontem como fato de hoje.'},
{slug:'mundo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato internacional material ocorrido e confirmado em 20/09 neste corte; não reciclar notícia anterior.'},
{slug:'politica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato político novo de 20/09 confirmado por fonte primária neste corte; regra eleitoral de 19/09 não é reapresentada como novidade.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO 20/09: São Paulo 15–27 °C, possibilidade de chuva; contexto de instabilidade também conferido no INMET.'},
{slug:'seguranca-zl',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 20/09: programação oficial de 50 anos do Parque do Carmo; realização não presumida antes do evento.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 20/09: Corinthians x Fluminense às 16h na Neo Química Arena; sem presumir escalação, placar ou realização antes da hora.'},
{slug:'curiosidades',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação nova 20/09: lontra-marinha, regeneração hepática, densidade de Saturno, Antártida desértica e GPS/relatividade.'},
{slug:'gravidez',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 11 semanas completas; audição tratada com cautela e fonte ACOG/NHS.'},
{slug:'pai',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão nova 20/09: ritual de voz como vínculo, sem alegar que o bebê já reconhece voz externa.'},
{slug:'viagens',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Dica evergreen nova para 20/09.'},
{slug:'musica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Experimento musical novo 20/09: ouvir um álbum inteiro sem shuffle.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato novo material de 20/09 confirmado neste corte.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato jornalístico novo de 20/09 confirmado neste corte.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Domingo sem novo fechamento de mercado; não reciclar sexta-feira como notícia de hoje.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum advisory oficial novo datado de 20/09 confirmado neste corte.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhuma nova entrada KEV datada de 20/09 confirmada; não reciclar adições de 18/09.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory AppSec material datado de 20/09 confirmado neste corte.'},
{slug:'carros',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 20/09 mantém teto absoluto de R$70 mil.'},
{slug:'motos',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo evergreen novo 20/09.'},
{slug:'mecanica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo evergreen novo 20/09.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
