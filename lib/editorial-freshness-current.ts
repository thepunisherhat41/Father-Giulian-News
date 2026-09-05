export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-05';
export const editorialFreshnessValidatedAt='05/09/2026 · 14h49 · atualização intradiária';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Até 14h49 de 05/09, nenhuma informação material nova da data foi confirmada em fonte adequada; Reel omitido em vez de reciclar 04/09.'},
{slug:'seguranca-zl',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA oficial: festejos dos 466 anos de São Miguel Paulista começam em 05/09 com a XIV Mostra de Teatro, das 10h às 19h, no Morumbizinho; fonte Prefeitura publicada em 01/09.'},
{slug:'politica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato político brasileiro novo de 05/09 confirmado em fonte primária ou jornalismo reconhecido até esta atualização; Reel omitido.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO Reuters 05/09: Comando Central dos EUA informa ataques contra três petroleiros iranianos após ataques com mísseis contra dois navios da Marinha americana.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'tempo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Há previsão do INMET para sábado (05) publicada em 03/09, mas nenhum boletim novo datado de 05/09 foi confirmado nesta atualização; Reel omitido para respeitar freshness jornalística.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação de 05/09 preservada: wombats e cubos, migração vertical oceânica, densidade de Saturno, temperatura do ar em raios e dorsal meso-oceânica.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência renovada de 05/09: trocar uma música marcante da adolescência e contar a memória ligada a ela.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem anúncio material novo datado de 05/09 confirmado até esta atualização; Reel omitido.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia avança para 8 semanas + 6 dias em 05/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática renovada: identificar tarefa que pesa e assumir uma parte concreta.'},
{slug:'corinthians',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato novo datado de 05/09 confirmado em fonte adequada até esta atualização; Reel omitido, sem reciclar a atualização de Yuri Alberto de 04/09.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo renovado de compra de usado; teto de R$70 mil mantido explicitamente.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Checklist renovado sobre condição e idade dos pneus.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo renovado sobre especificação do fluido de arrefecimento.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Ideia renovada: shortlist de três destinos para futuro bate-volta.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fechamento ou fato financeiro material novo de 05/09 confirmado até esta atualização; Reel omitido, sem reapresentar fechamento de 04/09.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO Reuters 05/09 05h13 BRT: Foxconn espera terceiro trimestre acima das expectativas com força da demanda de IA; receita de agosto atingiu T$ 921,8 bilhões, recorde para o mês.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory/KEV oficial novo datado de 05/09 confirmado até esta atualização; Reel omitido.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato Cyber novo de 05/09 confirmado até esta atualização; Reel omitido, sem reciclar reportagem de 04/09.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem CVE/advisory AppSec novo de 05/09 com confirmação oficial suficiente até esta atualização; Reel omitido.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
