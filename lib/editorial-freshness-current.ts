export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-12';
export const editorialFreshnessValidatedAt='12/09/2026 · 17h17 · atualização da tarde';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato Brasil material surgido em 12/09 foi confirmado neste corte da tarde; conteúdo de 11/09 não foi reciclado.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 12/09: líderes do BRICS adotaram formalmente a Declaração de Nova Délhi, que pede máxima contenção no Oriente Médio e solução por diálogo, consulta e diplomacia.'},
{slug:'politica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhuma pesquisa, sabatina, entrevista, debate, mudança ou cancelamento material novo de 12/09 foi confirmado neste corte; pesquisa Datafolha de 11/09 não foi reciclada.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção-base evergreen não entra como Reel jornalístico; a rotação atual usa curiosidades específicas de 12/09.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção-base evergreen não entra como Reel jornalístico; a rotação atual usa curiosidades específicas de 12/09.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO 12/09: INMET prevê chuva em partes de São Paulo e queda de temperatura associada ao ciclone extratropical no Atlântico.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo da Zona Leste datado de 12/09 foi confirmado neste corte; conteúdo anterior foi omitido.'},
{slug:'corinthians',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Matéria sobre transfer ban foi publicada hoje, mas descreve principalmente o encerramento da janela em 11/09; não foi promovida artificialmente como fato novo de 12/09.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita 12/09: pelagem densa da lontra-marinha, afastamento da Lua, deriva do norte magnético, remodelação óssea e relatividade no GPS.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 9 semanas + 6 dias em 12/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 12/09: assumir uma refeição inteira sem devolver decisões.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 12/09: definir um plano B simples para chuva, trânsito ou lotação.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 12/09: comparar versão de estúdio e apresentação ao vivo.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem lançamento ou fato material de Games datado de 12/09 confirmado neste corte; agenda anterior foi omitida.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'DECLARAÇÃO 12/09: Reuters publicou às 14h23 UTC (11h23 BRT) que Dario Amodei, CEO da Anthropic, pediu redução coordenada do ritmo de avanço das capacidades de IA e propôs revisores independentes, coordenação entre laboratórios e cooperação internacional. Não é pausa já adotada nem acordo do setor.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Mercados de petróleo estão fechados no sábado; fechamento de 11/09 não foi reciclado como notícia de 12/09.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory ou exploração material datada de 12/09 confirmada neste corte; nenhum CVE anterior foi reciclado.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'A declaração de Amodei tem implicações de segurança de IA, mas foi classificada em Tecnologia; nenhum incidente Cyber novo da data foi promovido sem confirmação própria.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory AppSec material datado de 12/09 confirmado neste corte; nenhum advisory anterior foi reciclado.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo 12/09 mantém teto de R$70 mil e orienta testar comandos elétricos e acessórios do usado.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 12/09 sobre retentores e sinais de vazamento nas bengalas.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 12/09 sobre correia de acessórios, tensionador e polias.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
