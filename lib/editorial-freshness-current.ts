export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-08-29';
export const editorialFreshnessValidatedAt='29/08/2026 · revisão 10h33';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato nacional novo de 29/08 suficientemente forte e específico para substituir a pauta anterior nesta revisão; omitido do feed jornalístico.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Zona Leste reavaliada em fontes municipais. A vacinação de Itaquera era ação de 27–28/08 e não pode ser reciclada em 29/08; sem pauta material nova confirmada, o Reel fica omitido.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters publicou em 29/08 declaração de Flávio Bolsonaro de que respeitará o resultado eleitoral; TSE mantém manutenção programada do e-Título hoje, 8h30–18h. Declaração e serviço são classificados separadamente. Sem nova pesquisa nacional incorporada.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters de 29/08 detalha pressão econômica sobre o Irã após seis meses de guerra, novas sanções e permanência da crise de Hormuz; negociação não é tratada como normalização.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen científico revalidado; sem fabricação de novidade diária.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen científico revalidado; sem fabricação de novidade diária.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'CGE de 29/08: sábado seco e ensolarado, mínima 17°C, máxima até 33°C e umidade abaixo de 30% à tarde; estado de atenção para altas temperaturas permanece.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação 29/08 usa moiré, adaptação olfativa e cache/TTL de DNS. Busca no repositório não encontrou esses conceitos na janela recente; 27/08 usou gelo/checker-shadow/QR e 28/08 arco-íris/ponto cego/USB-C.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo cultural revalidado; não tratado como breaking news.'},
{slug:'games',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Programação oficial da gamescom confirma final do concurso de cosplay hoje, 29/08, às 17h em Colônia, além de agenda de palco ao longo do sábado.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo educativo revalidado para a fase atual; não é notícia.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo de paternidade revalidado; não é notícia.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen automotivo revalidado e mantido estritamente em usados de até R$70 mil.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo técnico evergreen revalidado.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo técnico evergreen revalidado.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo de destino/planejamento revalidado; não tratado como notícia.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sábado sem sessão regular dos principais mercados. Análises de 28/08 não são recicladas como notícia de 29/08; Reel jornalístico omitido.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato tecnológico material de 29/08 suficientemente confirmado nesta revisão; pautas de 28/08 ficam fora do feed.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem novo sinal primário/material de 29/08 suficientemente confirmado nesta revisão. PaperCut de 28/08 não é reciclado.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem nova vulnerabilidade/exploração de 29/08 suficientemente confirmada nesta revisão; ServiceNow de 28/08 não é reciclado.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato AppSec/SSDLC novo de 29/08 suficientemente confirmado; Reel omitido em vez de reaproveitar pauta anterior.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
