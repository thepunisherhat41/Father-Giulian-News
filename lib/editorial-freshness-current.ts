export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-17';
export const editorialFreshnessValidatedAt='17/09/2026 · 02h43 · corte da madrugada';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 17/09: Petrobras anunciou alta de R$1/l no diesel às distribuidoras, compensada por subsídio federal de mesmo valor.'},
{slug:'mundo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato Mundo material ocorrido e confirmado em 17/09 neste corte; conteúdo de 16/09 não foi reciclado.'},
{slug:'politica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato político material de 17/09 confirmado por fonte primária neste corte; declarações e reportagens serão incluídas apenas após validação suficiente.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção evergreen com rotação nova de 17/09.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção evergreen com rotação nova de 17/09.'},
{slug:'tempo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem previsão local pontual validada neste corte; Reel omitido.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo da Zona Leste ocorrido e datado de 17/09 confirmado neste corte; Reel omitido.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 17/09: eliminação confirmada após derrota por 1 a 0 para o Estudiantes; Memphis perdeu pênalti nos acréscimos.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação 17/09 criada com conceitos distintos: abelhas/UV, regeneração hepática, tempo da luz solar, Antártida-deserto e relatividade no GPS.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 10 semanas + 4 dias em 17/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 17/09: preparar a manhã na noite anterior.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 17/09: manter plano B de transporte salvo.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 17/09: escuta focada na linha de baixo.'},
{slug:'games',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 17/09: manutenção programada para rollout do Fortnite v42.20; rumores de conteúdo não tratados como confirmação.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato tecnológico material de 17/09 suficientemente confirmado neste corte; Reel de 16/09 omitido.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Corte da Selic ocorreu em 16/09 e não é republicado como fato novo de 17/09.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material novo de 17/09 confirmado por fonte primária neste corte; reportagens de hoje sobre patches anteriores não são convertidas em fato novo.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhuma nova entrada KEV/advisory datada de 17/09 confirmada oficialmente neste corte; itens de 16/09 não foram reciclados.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory AppSec material datado de 17/09 confirmado neste corte; Reel omitido.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 17/09 mantém teto de R$70 mil e orienta teste do ar-condicionado.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 17/09 sobre sinais de queda em moto usada.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 17/09 sobre diagnóstico de carro puxando para um lado.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
