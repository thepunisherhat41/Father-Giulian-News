export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-08-29';
export const editorialFreshnessValidatedAt='29/08/2026 · revisão reforçada';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Fontes nacionais revisadas em 29/08. Sem pauta nacional nova suficientemente material e específica nesta janela; Reel omitido em vez de reciclar 28/08.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Zona Leste reavaliada. Sem pauta material nova de 29/08 confirmada; ações de 27–28/08 não são recicladas.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 29/08: Flávio Bolsonaro declara que respeitará o resultado eleitoral. TSE: manutenção programada do e-Título hoje. Declaração e fato técnico separados; sem pesquisa nacional nova incorporada.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 29/08: pressão econômica no Irã após guerra e sanções; crise de Hormuz permanece sem normalização confirmada.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen científico revalidado; não tratado como notícia.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen científico revalidado; não tratado como notícia.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'CGE 29/08 às 09h07: máxima acima de 32°C, umidade perto de 35% e possibilidade de chuva rápida isolada no fim da tarde.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação 29/08: moiré, adaptação olfativa e cache/TTL de DNS; conceitos distintos da janela recente.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo cultural revalidado; não tratado como breaking news.'},
{slug:'games',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Programação oficial da gamescom confirma final do concurso de cosplay em 29/08.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo educativo revalidado para a fase atual; não é notícia.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo de paternidade revalidado; não é notícia.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'UOL 29/08: Hugo Souza e Matheus Bidu previstos contra Santos; Yuri Alberto tem recuperação atrasada após dor na coxa.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen automotivo revalidado; usados limitados a R$70 mil.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo técnico evergreen revalidado.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo técnico evergreen revalidado.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo de destino/planejamento revalidado; não tratado como notícia.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sábado sem sessão regular dos principais mercados; fechamento de 28/08 não é reciclado como notícia de 29/08.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 29/08: OpenAI anuncia encerramento futuro do fornecimento de modelos ao Cursor após mudança de controle; conversas continuam.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem novo sinal primário/material de 29/08 suficientemente confirmado; PaperCut de 28/08 não é reciclado.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem nova vulnerabilidade/exploração de 29/08 suficientemente confirmada; ServiceNow/PaperCut de 28/08 não são reciclados.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato AppSec/SSDLC novo de 29/08 suficientemente confirmado; Reel omitido em vez de reaproveitar pauta anterior.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
