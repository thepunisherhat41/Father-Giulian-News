export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-05';
export const editorialFreshnessValidatedAt='05/09/2026 · 17h49 · atualização intradiária';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Até 17h49 de 05/09, nenhuma informação material brasileira nova posterior ao corte anterior foi confirmada em fonte adequada; Reel omitido em vez de reciclar fatos anteriores.'},
{slug:'seguranca-zl',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA oficial preservada: festejos dos 466 anos de São Miguel Paulista começaram em 05/09 com a XIV Mostra de Teatro, das 10h às 19h, no Morumbizinho; não se presume execução de atividades já passadas sem confirmação independente.'},
{slug:'politica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Há reportagem de 05/09 sobre voto de Cristiano Zanin em habeas corpus relacionado a Jair Bolsonaro, mas não foi possível confirmar com segurança que a ocorrência/publicação é posterior ao corte anterior; Reel segue omitido para não fabricar novidade intradiária.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO Reuters 05/09 14h52 BRT: Putin recebeu Steve Witkoff e Jared Kushner no Kremlin e novas conversas sobre a guerra na Ucrânia começaram; a atualização saiu três minutos após o corte editorial anterior e substitui o fato anterior de Mundo.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'tempo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum boletim novo datado de 05/09 e posterior ao corte anterior foi confirmado em fonte oficial adequada; Reel omitido para respeitar freshness jornalística.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação de 05/09 preservada: wombats e cubos, migração vertical oceânica, densidade de Saturno, temperatura do ar em raios e dorsal meso-oceânica.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência renovada de 05/09 preservada: trocar uma música marcante da adolescência e contar a memória ligada a ela.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem anúncio material novo datado de 05/09 e posterior ao corte anterior confirmado em fonte oficial adequada; Reel omitido.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia preservada em 8 semanas + 6 dias em 05/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática de 05/09 preservada: identificar tarefa que pesa e assumir uma parte concreta.'},
{slug:'corinthians',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'A reportagem de 05/09 sobre a preparação para Chapecoense já existia antes do corte anterior; nenhum fato novo posterior foi confirmado em fonte adequada até esta atualização, então o Reel segue omitido.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo de compra de usado preservado; teto de R$70 mil mantido explicitamente.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist de 05/09 sobre condição e idade dos pneus preservado.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo de 05/09 sobre especificação do fluido de arrefecimento preservado.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Ideia de 05/09 preservada: shortlist de três destinos para futuro bate-volta.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sábado sem fechamento de mercado; nenhum fato financeiro material novo posterior ao corte anterior foi confirmado, e fechamentos de dias anteriores não foram reciclados.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO Reuters 05/09 05h13 BRT preservado: Foxconn espera terceiro trimestre acima das expectativas com força da demanda de IA; receita de agosto atingiu T$ 921,8 bilhões, recorde para o mês.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory/KEV oficial novo datado de 05/09 e posterior ao corte anterior confirmado; Reel omitido.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato Cyber novo datado de 05/09 e posterior ao corte anterior confirmado em fonte adequada; Reel omitido.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem CVE/advisory AppSec novo de 05/09 e posterior ao corte anterior com confirmação oficial suficiente; Reel omitido.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
