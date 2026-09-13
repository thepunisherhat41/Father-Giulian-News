export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-13';
export const editorialFreshnessValidatedAt='13/09/2026 · 05h55 · atualização da manhã';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato Brasil material datado de 13/09 foi confirmado neste corte; conteúdo anterior foi omitido.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO/FATO 13/09: após o relato de projétil contra embarcação no Estreito de Hormuz, a UKMTO informou incêndio a bordo e evacuação da tripulação por autoridades locais; autoria e extensão total dos danos seguem sem confirmação.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 13/09: TSE fixa hoje como prazo final para envio da prestação de contas parcial da campanha; não se presume cumprimento por candidatura específica.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção-base evergreen não entra como jornalismo; rotação de curiosidades foi renovada para 13/09.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Curiosidade nova de 13/09: eletrorrecepção em tubarões.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO 13/09: INMET prevê persistência de chuva em partes de São Paulo e temperaturas mais baixas.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo da Zona Leste datado de 13/09 foi confirmado neste corte; seção omitida.'},
{slug:'corinthians',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato material novo de 13/09 confirmado até este corte da manhã; seção omitida em vez de reciclar notícia anterior.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita 13/09: eletrorrecepção de tubarões, fontes hidrotermais, pôr do sol azul em Marte, auroras e fibra óptica.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 10 semanas completas em 13/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 13/09: proteger meia hora de descanso sem interrupções.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 13/09: verificar condição da rodovia e ocorrências antes de sair.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 13/09: escutar como duas vozes se alternam numa mesma faixa.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum lançamento ou fato material de Games datado de 13/09 confirmado neste corte; seção omitida.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'DECLARAÇÃO 13/09: Reuters publicou às 08h43 UTC (05h43 BRT) que Xi Jinping anunciou que a China liderará a criação de uma BRICS AI Open Source Zone para cooperação em modelos de linguagem, treinamento de IA e ecossistema aberto; iniciativa não é tratada como já implementada.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato financeiro separado e material de 13/09 confirmado neste corte; impacto de energia permanece contextualizado em Mundo.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory ou exploração material datada de 13/09 confirmada; nenhum CVE antigo foi reciclado.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem incidente Cyber material datado de 13/09 confirmado neste corte; seção omitida.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory AppSec material datado de 13/09 confirmado; nenhum advisory anterior foi reciclado.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo 13/09 respeita teto de R$70 mil e orienta conferir DOT, desgaste e ressecamento dos pneus.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 13/09 sobre corrente, folga e coroa da transmissão final.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 13/09 sobre nível e especificação do fluido de freio.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
