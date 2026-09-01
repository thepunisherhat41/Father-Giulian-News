export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-01';
export const editorialFreshnessValidatedAt='01/09/2026 · 14h28 · revisão da tarde';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato nacional material novo de 01/09 confirmado nesta revisão; itens de 31/08 não foram reciclados.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato novo datado de 01/09 suficientemente material para Zona Leste; card omitido corretamente.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO: consulta ao local/seção de votação disponível. ATUALIZAÇÃO: TV Senado informou novo adiamento da leitura do relatório da MP 1.357/2026 e a Câmara registra a reunião das 10h como suspensa. AGENDA: TSE tem sessão às 19h com caso sobre IA/deepfake; agenda das 14h não é presumida como realizada.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 01/09: declaração do presidente iraniano sobre reciprocidade caso EUA retomem compromissos do acordo de junho; texto não trata isso como novo acordo.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen científico revisado; não tratado como notícia.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen revisado; não tratado como notícia.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'INMET: alerta amarelo de tempestade válido em 01/09; possibilidade não é tratada como ocorrência garantida.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita de 01/09 preservada: aquecimento do ar por relâmpago, barreira muco-bicarbonato e negociação USB Power Delivery.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência de escuta ativa renovada para 01/09 e ainda válida.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material de 01/09 confirmado nesta revisão; conteúdo anterior não foi reciclado.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'DUM 05/07/2026 resulta em 8 semanas + 2 dias em 01/09/2026.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática de 01/09 permanece atual.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO: Corinthians completa 116 anos em 01/09 e a venda escalonada para Corinthians x Chapecoense começou hoje. AGENDA: jogo em 06/09 às 19h30 e programação noturna permanecem como previstas.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist de 01/09 mantém teto explícito de R$70 mil.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist de pneus renovado para 01/09.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Diagnóstico de sistema de carga renovado para 01/09.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Plano B de chuva de 01/09 permanece coerente com a condição meteorológica.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Mercados rechecados; sem fato brasileiro material que justifique Reel separado nesta revisão.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 01/09: no SEMICON Taiwan, Lai Ching-te vinculou confiança institucional à posição da ilha na cadeia global de semicondutores; fato e declaração estão separados.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'CISA e fontes primárias rechecadas; sem advisory/incidente novo de 01/09 confirmado nesta revisão; nenhum item antigo foi reciclado.'},
{slug:'seguranca',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'GTIG/Mandiant publicou em 01/09 investigação sobre BREEZE COMET mirando organizações brasileiras e buscando inclusive credenciais hard-coded de CI/CD, API keys e tokens privilegiados de cloud.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'AppSec rechecado; sem CVE/advisory novo de 01/09 com confirmação oficial suficiente. Card omitido em vez de reciclar advisory antigo.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
