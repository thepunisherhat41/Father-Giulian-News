export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-15';
export const editorialFreshnessValidatedAt='15/09/2026 · 06h00 · corte da manhã';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato Brasil material ocorrido e confirmado em 15/09 no corte; reportagem publicada hoje sobre diagnóstico de Raoni ocorrido em 14/09 não foi reclassificada como fato novo.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 15/09: novas regras chinesas de entrada e saída ligadas à segurança tecnológica entraram em vigor hoje.'},
{slug:'politica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem pesquisa, decisão, agenda confirmada ou declaração material nova de 15/09 no corte; pesquisa BTG/Nexus de 14/09 não foi reciclada.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção evergreen; rotação de curiosidades 15/09 auditada contra os sete dias anteriores.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Curiosidade 15/09: memória facial de corvos.'},
{slug:'tempo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem previsão pontual de 15/09 suficientemente confirmada no corte para publicar novo Reel; conteúdo de 14/09 foi omitido.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo da Zona Leste ocorrido e datado de 15/09 foi confirmado no corte; matérias de 14/09 ou anteriores foram omitidas.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 15/09: clube inicia hoje venda escalonada de ingressos para Corinthians x Fluminense; decisão contra Estudiantes é amanhã.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação 15/09: corvos e rostos, bioluminescência pelágica, hexágono de Saturno, Antártida como deserto e sensores de movimento do celular; conceitos de 08–14/09 não foram repetidos.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 10 semanas + 2 dias em 15/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 15/09: assumir uma tarefa invisível inteira sem esperar pedido.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 15/09: registrar o estado de carro alugado antes de sair.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 15/09: escuta focada em bateria e percussão.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum lançamento ou fato material de Games ocorrido em 15/09 confirmado no corte; seção omitida.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 15/09: MediaTek lançou Dimensity 9600 Pro, primeiro chip móvel da empresa em processo de 2 nm da TSMC.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 15/09: bolsas globais recuam, Brent permanece acima de US$107 e Treasury de 10 anos toca maior rendimento desde 2007; números são intradiários.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato material novo de 15/09 confirmado no corte; reportagem corporativa de 14/09 não foi reciclada.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem novo advisory/KEV/exploração datado de 15/09 confirmado no corte; CVE-2026-85706 permanece contexto de 14/09 e foi omitida.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory AppSec material datado de 15/09 confirmado; nenhum advisory anterior foi reciclado.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo 15/09 mantém teto de R$70 mil e orienta comparar idade e desgaste dos pneus.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 15/09 sobre inspeção de corrente e transmissão.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 15/09 sobre ruídos ao esterçar e necessidade de diagnóstico.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
