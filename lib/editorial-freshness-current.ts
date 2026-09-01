export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-01';
export const editorialFreshnessValidatedAt='01/09/2026 · 02h35 · revisão de abertura';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material novo de 01/09 confirmado nesta revisão de madrugada; itens de 31/08 não foram reciclados.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato novo datado de 01/09 para Zona Leste; card omitido corretamente.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA: Agência Câmara confirmou reabertura da comissão mista da MP 1357/26 em 01/09 às 10h. Resultado não é presumido antes da reunião.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 01/09: petróleo sobe cerca de US$1 com renovada tensão EUA–Irã e risco de disrupção no Golfo/Hormuz.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen científico revisado; não tratado como notícia.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen revisado; não tratado como notícia.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'INMET: alerta amarelo de tempestade válido em 01/09 desde 00h; previsão oficial aponta instabilidade. Possibilidade não é tratada como ocorrência garantida.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita de 01/09: aquecimento do ar por relâmpago, barreira muco-bicarbonato e negociação USB Power Delivery.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência de escuta ativa renovada para 01/09.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material que tenha ocorrido em 01/09 confirmado nesta abertura; eventos iniciados em 31/08 não foram apresentados como notícia nova.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'DUM 05/07/2026 resulta em 8 semanas + 2 dias em 01/09/2026.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática renovada para 01/09.'},
{slug:'corinthians',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato novo datado de 01/09 nesta revisão; resultado de 31/08 não foi reciclado como notícia de hoje.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist novo de 01/09 mantém teto explícito de R$70 mil.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist de pneus renovado para 01/09.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Diagnóstico de sistema de carga renovado para 01/09.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Plano B de chuva renovado para 01/09, coerente com alerta oficial.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Mercados rechecados; impacto do petróleo está coberto em Mundo sem duplicar o mesmo fato em Finanças.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material inequívoco ocorrido em 01/09 confirmado nesta abertura; reportagens sobre fatos anteriores foram omitidas.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory/incidente novo de 01/09 confirmado em fonte primária nesta revisão; nenhum item antigo foi reciclado.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cyber rechecado; sem fato novo de 01/09 confirmado o suficiente para Reel separado.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'AppSec rechecado; sem CVE/advisory novo de 01/09 com confirmação oficial suficiente. Card omitido em vez de reciclar advisory antigo.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
