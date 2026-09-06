export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-06';
export const editorialFreshnessValidatedAt='06/09/2026 · 14h15 · atualização intradiária';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO Reuters 06/09 às 15h08 UTC: decisão judicial suspendeu licenças ambientais e atividades da mina Grota do Cirilo, da Sigma Lithium, em Minas Gerais; fato publicado após o corte anterior.'},
{slug:'seguranca-zl',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA: Subprefeitura informou abertura dos festejos de 466 anos de São Miguel Paulista em 06/09; compromisso não é tratado como ocorrido sem confirmação independente.'},
{slug:'politica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato político brasileiro material novo de 06/09 confirmado até o corte; conteúdos de 05/09 não foram reciclados.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO Reuters 06/09: Witkoff e Kushner chegaram a Kyiv e se reuniram com Zelenskiy após conversas em Moscou; sem acordo presumido.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO/ALERTA: INMET mantém em 06/09 alertas amarelos de tempestade e declínio de temperatura para São Paulo.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação nova 06/09: rã-da-madeira e congelamento, velocidade do som na água, dia solar de Mercúrio, íons e condutividade da água, poeira do Saara e Amazônia.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 06/09: identificar o primeiro instrumento e uma camada pouco percebida em música conhecida.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem anúncio material novo datado de 06/09 confirmado em fonte oficial adequada até o corte; Reel omitido.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 9 semanas completas em 06/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova de 06/09: preparar ponto de apoio para momentos de enjoo.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA CBF: Corinthians x Chapecoense hoje 06/09 às 19h30, Neo Química Arena, rodada 26; nenhum resultado foi presumido.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 06/09 mantém explicitamente teto de R$70 mil e inclui custo de seguro na decisão.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist novo 06/09 sobre sinais de queda em manetes, pedais, guidão e tampas.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 06/09 sobre diagnóstico de bateria e sistema de carga antes da troca.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Ideia nova 06/09: comparar destinos pelo tempo real de porta a porta.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO Reuters 06/09: OPEP+ confirmou após a reunião que manterá inalterada a política de produção para outubro; substitui a apuração anterior baseada em fontes.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato de tecnologia material iniciado em 06/09 e confirmado até o corte; notícias publicadas hoje sobre fatos de 05/09 não foram recicladas.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum advisory ou entrada CISA KEV nova datada de 06/09 confirmada até o corte; Reel omitido.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato Cyber novo de 06/09 confirmado em fonte primária adequada até o corte; Reel omitido.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem CVE/advisory AppSec novo de 06/09 com confirmação oficial suficiente; Reel omitido.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
