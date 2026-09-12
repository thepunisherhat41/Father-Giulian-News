export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-12';
export const editorialFreshnessValidatedAt='12/09/2026 · 11h14 · atualização da manhã';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato Brasil material surgido em 12/09 foi confirmado neste corte da manhã; conteúdo de 11/09 não foi reciclado.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 12/09: líderes do BRICS adotaram formalmente a Declaração de Nova Délhi, que pede máxima contenção no Oriente Médio e solução por diálogo, consulta e diplomacia. Isso substitui o status anterior em que o texto estava acertado mas ainda aguardava aprovação formal.'},
{slug:'politica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhuma pesquisa, sabatina, entrevista, debate, mudança ou cancelamento material novo de 12/09 foi confirmado neste corte; pesquisa Datafolha divulgada em 11/09 não foi reciclada como fato de hoje.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção-base evergreen não entra como Reel jornalístico; a rotação atual usa curiosidades específicas de 12/09.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção-base evergreen não entra como Reel jornalístico; a rotação atual usa curiosidades específicas de 12/09.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO 12/09: INMET prevê chuva em partes de São Paulo e queda de temperatura associada ao ciclone extratropical no Atlântico.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo da Zona Leste datado de 12/09 foi confirmado neste corte; conteúdo anterior foi omitido.'},
{slug:'corinthians',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo do Corinthians datado de 12/09 foi confirmado neste corte da manhã; atualizações de 11/09 não foram recicladas.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita 12/09: pelagem densa da lontra-marinha, afastamento da Lua, deriva do norte magnético, remodelação óssea e relatividade no GPS.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 9 semanas + 6 dias em 12/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 12/09: assumir uma refeição inteira sem devolver decisões.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 12/09: definir um plano B simples para chuva, trânsito ou lotação.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 12/09: comparar versão de estúdio e apresentação ao vivo.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem lançamento ou fato material de Games datado de 12/09 confirmado neste corte; agenda de 11/09 foi omitida.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material de Tecnologia datado de 12/09 confirmado neste corte; reportagens de 11/09 foram omitidas.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Mercados de petróleo estão fechados no sábado; fechamento de 11/09 não foi reciclado como notícia de 12/09.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory ou exploração material datada de 12/09 confirmada neste corte; nenhum CVE anterior foi reciclado.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato Cyber material datado de 12/09 confirmado neste corte; nenhum conteúdo anterior foi reciclado.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory AppSec material datado de 12/09 confirmado neste corte; nenhum advisory anterior foi reciclado.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo 12/09 mantém teto de R$70 mil e orienta testar comandos elétricos e acessórios do usado.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 12/09 sobre retentores e sinais de vazamento nas bengalas.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 12/09 sobre correia de acessórios, tensionador e polias.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
