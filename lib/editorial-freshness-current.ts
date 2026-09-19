export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-18';
export const editorialFreshnessValidatedAt='18/09/2026 · 17h56 · corte da tarde';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato Brasil material de 18/09 confirmado neste corte; diesel de 17/09 permanece apenas como contexto.'},
{slug:'mundo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato Mundo material ocorrido e confirmado em 18/09 neste corte; conteúdo anterior não foi reciclado.'},
{slug:'politica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Agenda política só entra com fonte datada; compromissos passados não são presumidos como realizados.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção evergreen com rotação distinta dos sete dias anteriores.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção evergreen com rotação distinta dos sete dias anteriores.'},
{slug:'tempo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem previsão local pontual validada neste corte; Reel omitido.'},
{slug:'seguranca-zl',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 18/09: protesto afetou parcialmente a Linha 12-Safira entre São Miguel Paulista e Comendador Ermelino pela manhã.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 18/09 16h09: Gabriel Paulista, Carrillo e Breno Bidon não foram a campo; André Ramalho treinou sem restrições. Organizadas se reuniram com elenco, comissão e diretoria no CT.'},
{slug:'curiosidades',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação nova 18/09: polvo, estribo, Vênus, água doce congelada e origem do QR Code; conceitos distintos dos sete dias anteriores.'},
{slug:'gravidez',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 10 semanas + 5 dias em 18/09.'},
{slug:'pai',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 18/09: criar uma pequena janela sem tarefas.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Manter somente se conteúdo atual continuar correto e não simular notícia do dia.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Manter somente se conteúdo atual continuar correto e não simular notícia do dia.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato novo de 18/09 confirmado neste corte; não reciclar manutenção anterior.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 18/09: data prevista de disponibilidade brasileira dos iPhone 18 Pro/Pro Max; anúncio anterior não é tratado como fato novo.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fechamento de mercado de 18/09 confirmado neste corte; números de 17/09 não são reciclados.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material novo de 18/09 confirmado por fonte primária neste corte.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhuma nova entrada KEV/advisory datada de 18/09 confirmada oficialmente neste corte; itens anteriores não foram reciclados.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory AppSec material datado de 18/09 confirmado neste corte; Reel omitido.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo respeita teto absoluto de R$70 mil.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo evergreen mantido somente se correto e atual.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo evergreen mantido somente se correto e atual.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
