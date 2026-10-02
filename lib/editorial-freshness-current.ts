export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-10-02';
export const editorialFreshnessValidatedAt='02/10/2026 · corte da madrugada';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 02/10: calendário oficial do IBGE prevê PIM-PF Brasil de agosto; sem antecipar resultado antes da publicação.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'APURAÇÃO/REPORTAGEM 02/10: Reuters registra queda das ações asiáticas e forte volatilidade em títulos e câmbio antes do payroll dos EUA.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO REGULATÓRIO 02/10: calendário do TSE encerra hoje o período de propaganda eleitoral paga em jornais e revistas.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO 02/10: INMET indica instabilidade no Sudeste e transporte de ar frio e úmido do oceano; previsão não é tratada como evento já ocorrido.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo da Zona Leste datado de 02/10 foi confirmado neste corte; conteúdo de 01/10 não é reciclado como notícia de hoje.'},
{slug:'corinthians',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato do Corinthians explicitamente confirmado e datado de 02/10 neste corte da madrugada; atualizações de 01/10 não são reembaladas como fato novo.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato jornalístico material da data; conteúdo científico do dia fica na rotação de Curiosidades.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato jornalístico material da data; conteúdo animal do dia fica na rotação de Curiosidades.'},
{slug:'curiosidades',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação 02/10 inteiramente nova: três corações dos polvos, sistema elétrico do coração e duração do dia em Vênus.'},
{slug:'gravidez',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 12 semanas + 5 dias, com linguagem cautelosa e fontes NHS/ACOG.'},
{slug:'pai',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão nova 02/10: perguntar qual ação prática facilitaria a manhã seguinte e assumir a execução.'},
{slug:'viagens',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Dica nova 02/10 sobre registrar políticas de cancelamento, alteração e reembolso antes da compra.'},
{slug:'musica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Experimento novo 02/10: comparar gravação de estúdio e versão ao vivo da mesma faixa.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo material de 02/10 confirmado neste corte; não reciclar anúncio anterior.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato jornalístico material de 02/10 confirmado neste corte.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'APURAÇÃO/REPORTAGEM 02/10: dólar em máxima de 17 meses e juros longos pressionados segundo a Reuters.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum advisory oficial novo datado de 02/10 confirmado neste corte; não reciclar advisory anterior.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhuma nova entrada CISA KEV datada de 02/10 confirmada neste corte; CVEs/advisories anteriores não são apresentados como notícia de hoje.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum advisory AppSec/SSDLC material datado de 02/10 confirmado neste corte; conteúdo antigo permanece omitido.'},
{slug:'carros',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 02/10 mantém teto absoluto de preço de compra em R$70 mil.'},
{slug:'motos',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo evergreen novo 02/10 sobre inspeção dos comandos e resposta dos freios.'},
{slug:'mecanica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo evergreen novo 02/10 sobre inspeção segura do sistema de arrefecimento.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
