export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-13';
export const editorialFreshnessValidatedAt='13/09/2026 · 12h00 · corte do meio-dia';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato Brasil material datado de 13/09 foi confirmado neste corte; conteúdo anterior foi omitido.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 13/09 · 08h19 BRT: Vilnius fechou temporariamente o aeroporto após possível drone; a OTAN acionou ao menos um caça de Šiauliai; alerta encerrado e aeroporto reaberto cerca de uma hora depois. Origem do possível drone não confirmada. Declarações posteriores foram avaliadas, mas não substituem este fato no corte.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 13/09: TSE fixa hoje como prazo final para envio da prestação de contas parcial da campanha; não se presume cumprimento por candidatura específica.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção-base evergreen não entra como jornalismo; rotação de curiosidades foi renovada para 13/09.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Curiosidade nova de 13/09: eletrorrecepção em tubarões.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 13/09: Grande São Paulo está em área de alerta de perigo para tempestades, com possibilidade de chuva intensa, rajadas e raios; capital segue fria e chuvosa.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo da Zona Leste datado de 13/09 foi confirmado neste corte; seção omitida.'},
{slug:'corinthians',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato material novo de 13/09 confirmado até este corte; seção omitida em vez de reciclar notícia anterior.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita 13/09: eletrorrecepção de tubarões, fontes hidrotermais, pôr do sol azul em Marte, auroras e fibra óptica.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 10 semanas completas em 13/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 13/09: proteger meia hora de descanso sem interrupções.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 13/09: verificar condição da rodovia e ocorrências antes de sair.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 13/09: escutar como duas vozes se alternam numa mesma faixa.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum lançamento ou fato material de Games datado de 13/09 confirmado neste corte; seção omitida.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'DECLARAÇÃO 13/09 · 11h28 BRT: Trump minimizou parte dos alertas sobre riscos de IA, priorizou a liderança dos EUA sobre a China e admitiu possíveis salvaguardas sem anunciar nova regra, moratória ou acordo.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato financeiro separado e material de 13/09 confirmado neste corte; impactos de energia permanecem contextualizados no noticiário.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory ou exploração material datada de 13/09 confirmada; nenhum CVE antigo foi reciclado.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem incidente Cyber material datado de 13/09 confirmado neste corte; seção omitida.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory AppSec material datado de 13/09 confirmado; nenhum advisory anterior foi reciclado.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo 13/09 respeita teto de R$70 mil e orienta conferir DOT, desgaste e ressecamento dos pneus.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 13/09 sobre corrente, folga e coroa da transmissão final.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 13/09 sobre nível e especificação do fluido de freio.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
