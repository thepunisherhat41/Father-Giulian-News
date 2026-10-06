export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-10-06';
export const editorialFreshnessValidatedAt='06/10/2026 · corte 00h10';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 06/10: TSE disponibilizou resultados do primeiro turno, BUs e dados de auditoria.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 06/10: autoridades europeias elevaram alerta sobre ameaças híbridas atribuídas à Rússia; Moscou nega as acusações.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 06/10: segundo turno presidencial entre Flávio Bolsonaro e Lula marcado para 25/10.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO 06/10: São Paulo com 17°C a 24°C, chuva moderada a forte à tarde e risco elevado de alagamentos/quedas de árvores segundo o CGE.'},
{slug:'seguranca-zl',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'SERVIÇO LOCAL 06/10: nova ligação viária em Itaquera entre Cristóvão de Salamanca e Agrimensor Sugaya, com atenção adicional à chuva de hoje.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 06/10: Bidu retornou ao treino; equipe prepara duelo de 07/10 contra o Internacional.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem card editorial próprio na ordem vigente; conteúdo espacial novo está em Curiosidades.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem card editorial próprio na ordem vigente; conteúdo animal novo está em Curiosidades.'},
{slug:'curiosidades',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação 06/10 nova: wombats e cubos, renovação do epitélio intestinal e afastamento da Lua.'},
{slug:'gravidez',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 13 semanas + 2 dias, com referências NHS e ACOG.'},
{slug:'pai',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão 06/10: assumir uma tarefa inteira da rotina sem transferir a gestão.'},
{slug:'viagens',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PLANEJAMENTO 06/10: feriado nacional de 12/10 cai na segunda; São Paulo e Aparecida já publicaram informações de operação.'},
{slug:'musica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'RECOMENDAÇÃO 06/10: curadoria dos lançamentos da semana com Alok + NAYEON, Pabllo Vittar e Victoria Monét.'},
{slug:'games',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'LANÇAMENTOS 06/10: Steam lista Gears of War: E-Day e STAR WARS: Galactic Racer para hoje.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'REPORTAGEM 06/10: debate australiano sobre exceções de copyright para treinamento de IA.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FECHAMENTO 06/10: Ibovespa avançou 7,7% na segunda e fechou em recorde de 206.911,89 pontos segundo a Reuters.'},
{slug:'security-briefing',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 06/10: breach no FBI associado a PeopleSoft e falha na aplicação de patch crítico por contratada, segundo a Reuters.'},
{slug:'seguranca',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 06/10: Coreia do Sul afirma que IA parece ter sido usada em ataques recentes a bancos; detalhes técnicos ainda limitados.'},
{slug:'appsec-ssdlc',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'CRITICAL 06/10: CVE-2026-21589 afeta múltiplos produtos Atlassian Data Center; advisory publicado em 05/10.'},
{slug:'carros',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'RADAR 06/10: inventário vivo da Webmotors filtrado em até R$70 mil; foco em histórico, FIPE e custo real.'},
{slug:'motos',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'CHECKLIST 06/10: condução em chuva forte com velocidade menor e comandos suaves, alinhada à previsão do CGE.'},
{slug:'mecanica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'CHECKLIST 06/10: palhetas, pneus, luzes e desembaçador antes da chuva forte prevista para hoje.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
