export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-19';
export const editorialFreshnessValidatedAt='19/09/2026 · 02h35 · corte da madrugada';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato nacional material de 19/09 confirmado por fonte primária neste corte da madrugada; não reciclar 18/09.'},
{slug:'mundo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato internacional material ocorrido e confirmado em 19/09 neste corte; conteúdo anterior não deve ser reciclado.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO REGULATÓRIO 19/09: entra em vigor a proteção eleitoral que restringe prisão/detenção de candidatos, salvo flagrante, a 15 dias do primeiro turno.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção evergreen com rotação nova e distinta dos sete dias anteriores.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção evergreen com rotação nova e distinta dos sete dias anteriores.'},
{slug:'tempo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem previsão pontual nova validada neste corte; não publicar previsão antiga como atual.'},
{slug:'seguranca-zl',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 19/09: treino gratuito previsto para 8h com saída da estação Vila Prudente; ocorrência não presumida.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 19/09: assembleia que estava prevista para hoje permanece suspensa por decisão judicial; não tratar como realizada.'},
{slug:'curiosidades',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação nova 19/09: axolote, córnea, gelo em Mercúrio, norte magnético e CAPTCHA.'},
{slug:'gravidez',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 10 semanas + 6 dias em 19/09.'},
{slug:'pai',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão nova 19/09: tarefa objetiva + bloco real de descanso.'},
{slug:'viagens',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Dica evergreen nova para 19/09, sem simular notícia.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato musical material de 19/09 confirmado neste corte; não reciclar notícia.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato novo material de 19/09 confirmado neste corte; não reciclar trial de 18/09.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato novo material de 19/09 confirmado neste corte; não reciclar disponibilidade de 18/09.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sábado sem novo fechamento de mercado; não apresentar números de sexta como fato novo de hoje.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum advisory primário material datado de 19/09 confirmado neste corte.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhuma nova entrada KEV/advisory oficial datada de 19/09 confirmada; itens de 18/09 ou anteriores não são reciclados.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory AppSec material datado de 19/09 confirmado neste corte.'},
{slug:'carros',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Dica nova 19/09 respeita teto absoluto de R$70 mil.'},
{slug:'motos',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo evergreen novo 19/09.'},
{slug:'mecanica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo evergreen novo 19/09.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
