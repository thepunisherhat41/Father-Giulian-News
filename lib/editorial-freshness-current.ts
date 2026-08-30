export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-08-30';
export const editorialFreshnessValidatedAt='30/08/2026 · 11h38 · revisão de domingo';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato nacional material novo de 30/08 com confirmação suficiente nesta revisão; pauta de 29/08 não foi reciclada.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Zona Leste rechecada; nenhum fato novo de 30/08 com fonte datada e confirmação suficiente foi promovido.'},
{slug:'politica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Agenda publicada em 29/08 para o fim de semana foi rechecada, mas não é tratada como fato novo de 30/08 sem confirmação independente de realização.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 30/08: dirigentes de bancos centrais europeus expressam preocupação com maior imprevisibilidade nas relações financeiras com os EUA; linhas de swap do Fed permanecem intactas.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen científico revisado; não entra como notícia.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen revisado; não tratado como notícia.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Previsão de 30/08 para São Paulo: domingo quente e seco, máxima perto de 32°C, baixa umidade e sem chuva significativa na Grande São Paulo.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita de 30/08: espalhamento Rayleigh, ponto cego e correção de erros em QR Code.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Proposta editorial de domingo, sem apresentar agenda antiga como notícia.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'gamescom chega ao último dia em 30/08; nenhum vencedor ou resultado foi inventado sem publicação oficial.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'DUM 05/07/2026 resulta em 8 semanas completas em 30/08/2026; card atualizado para 8s0d.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão nova do dia: assumir uma tarefa inteira e reduzir carga mental.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ge/UOL 30/08: Corinthians x Santos hoje às 16h na Neo Química Arena; Yuri Alberto fora e Breno Bidon suspenso.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Card de compra de usado revalidado com teto de R$70 mil.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Card técnico revalidado.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Card técnico revalidado.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Proposta de passeio curto adaptada ao domingo quente e à gestação; não recicla agenda cultural de 29/08.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 30/08: risco institucional e previsibilidade das ações financeiras dos EUA entram no radar após Jackson Hole.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato tecnológico material novo de 30/08 com confirmação suficiente foi promovido nesta revisão.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum briefing novo de 30/08 com fonte primária suficiente foi promovido; itens de 27–29/08 permanecem bloqueados como notícia do dia.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cyber rechecado; sem novo incidente material de 30/08 confirmado o suficiente para Reel nesta revisão.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'AppSec rechecado; nenhum advisory/CVE material novo de 30/08 foi promovido sem fonte primária e data corrente.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
