export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-14';
export const editorialFreshnessValidatedAt='14/09/2026 · 00h13 · corte inicial';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato Brasil material datado de 14/09 foi confirmado até o corte inicial; seção omitida para não reciclar 13/09.'},
{slug:'mundo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato Mundo material datado de 14/09 foi confirmado até o corte inicial; seção omitida para não reciclar 13/09.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 14/09: calendário oficial do TSE fixa hoje como prazo final ordinário para pedidos de substituição de candidaturas, além de etapas técnicas eleitorais. O prazo não é tratado como pedido já realizado ou deferido.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção-base evergreen não entra como jornalismo; rotação de curiosidades foi renovada para 14/09.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Curiosidade nova 14/09: controle de voo dos beija-flores, incluindo pairar e recuar.'},
{slug:'tempo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Não foi confirmado fato meteorológico novo datado de 14/09 no corte inicial; matérias de 13/09 sobre chuva e previsão para segunda não foram recicladas como fato de hoje.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo da Zona Leste datado de 14/09 foi confirmado até o corte inicial; matéria de 13/09 não foi reapresentada como fato novo.'},
{slug:'corinthians',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo do Corinthians datado de 14/09 foi confirmado até o corte inicial; resultado de 13/09 foi omitido.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita 14/09: voo de beija-flor, canal SOFAR, sombras permanentes lunares, poeira do Saara na Amazônia e infravermelho de controles remotos.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 10 semanas + 1 dia em 14/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 14/09: assumir uma refeição inteira e reduzir carga mental.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 14/09: manter informações essenciais disponíveis offline.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 14/09: escuta focada na linha de baixo.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum lançamento ou fato material de Games datado de 14/09 foi confirmado até o corte inicial; seção omitida.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato jornalístico material de Tecnologia datado de 14/09 foi confirmado até o corte inicial; declaração de 13/09 foi omitida.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato financeiro separado e material datado de 14/09 foi confirmado até o corte inicial; seção omitida.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum advisory ou exploração material datado de 14/09 foi confirmado até o corte inicial; nenhum CVE anterior foi reciclado.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum incidente Cyber material datado de 14/09 foi confirmado até o corte inicial; seção omitida.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum advisory AppSec material datado de 14/09 foi confirmado até o corte inicial; nenhum advisory anterior foi reciclado.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo 14/09 respeita o teto de R$70 mil e orienta avaliar a partida com o motor frio.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 14/09 sobre discos, pastilhas e resposta do sistema de freios.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 14/09 sobre vibração, coxins e diagnóstico diferencial.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
