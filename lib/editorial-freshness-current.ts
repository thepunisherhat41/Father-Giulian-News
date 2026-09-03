export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-03';
export const editorialFreshnessValidatedAt='03/09/2026 · 17h32 · revisão intradiária';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO Reuters 03/09: Nestlé anuncia plano de R$2 bilhões de investimentos no Brasil até 2028.'},
{slug:'seguranca-zl',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 03/09: Polícia Civil encontrou em Itaquera depósito usado para armazenar, processar e comercializar cabos e fios de cobre furtados, principalmente de redes de telefonia e internet.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA/ATUALIZAÇÃO: sessão do TSE prevista para 10h; nenhum resultado é presumido apenas porque o horário passou.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO/REPORTAGEM Reuters 03/09 sobre vítimas civis da escalada EUA-Irã.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO INMET válida para 03/09 em São Paulo.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação nova de 03/09 validada.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência de 03/09 validada.'},
{slug:'games',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO PlayStation 03/09: State of Play confirmou Final Fantasy VII Revelation para 08/04/2027 no PS5.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia em 8 semanas + 4 dias em 03/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática de 03/09 validada.'},
{slug:'corinthians',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato novo de 03/09 suficientemente confirmado; Reel omitido.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist validado; teto de R$70 mil mantido.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist de 03/09 validado.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo de 03/09 validado.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo de 03/09 validado.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO · MERCADOS INTRADIÁRIOS Reuters 03/09: Brent US$97,39 e WTI US$92,92 às 10h25 GMT; não é fechamento.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'APURAÇÃO/REPORTAGEM Reuters 03/09: Moonshot AI protocolou confidencialmente pedido de IPO em Hong Kong.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem guidance/advisory oficial novo datado de 03/09 confirmado; Reel omitido.'},
{slug:'seguranca',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'APURAÇÃO/REPORTAGEM Reuters 03/09: divulgação do incidente no C-Track; não é ataque novo ocorrido hoje.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem CVE/advisory novo de 03/09 com confirmação oficial suficiente; Reel omitido.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
