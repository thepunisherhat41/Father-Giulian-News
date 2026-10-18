export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-10-17';
export const editorialFreshnessValidatedAt='17/10/2026 · corte 20h53';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 17/10: Ministério da Saúde confirmou dois novos aceleradores lineares em Santos.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'APURAÇÃO/REPORTAGEM 17/10: Reuters relata aumento da tensão Trump–Zelensky e risco ao apoio dos EUA à Ucrânia.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 17/10: TSE orienta conferir antecipadamente o local de votação do segundo turno.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 17/10: CGE registra sábado frio, encoberto, com garoa e temperaturas em queda.'},
{slug:'seguranca-zl',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO LOCAL 17/10: Câmara realizou audiência regional do orçamento 2027 no CEU São Rafael.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 17/10: Seedorf visitou Arena; Yuri Alberto voltou ao treino; técnico fica fora do banco contra Vitória.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo espacial novo de 17/10 está em Curiosidades.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo animal novo de 17/10 está em Curiosidades.'},
{slug:'curiosidades',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita 17/10: língua/hióide do pica-pau, córnea avascular e pôr do sol azul em Marte.'},
{slug:'gravidez',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 14 semanas + 6 dias.'},
{slug:'pai',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão nova: escolher uma habilidade prática de pai para começar a treinar.'},
{slug:'viagens',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Roteiro novo 17/10 adaptado ao sábado frio e encoberto.'},
{slug:'musica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'RADAR 17/10: Billboard Global 200 com Karol G #1 e estreias de Drake.'},
{slug:'games',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Quest nova 17/10: uma hora, um jogo, um objetivo no backlog.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'DECLARAÇÃO 17/10: Anthropic fala em aceleração da IA e necessidade de safeguards.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 17/10: sábado sem pregão local; card usa fechamento global de sexta explicitamente.'},
{slug:'security-briefing',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 17/10: impacto do incidente em varejo francês chega à discussão de cyber insurance.'},
{slug:'seguranca',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 17/10: G7 prepara tabletop exercises para ataques habilitados por IA.'},
{slug:'appsec-ssdlc',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 17/10: AI Scan de PRs do GitHub em GA; foco em verificação e provenance.'},
{slug:'carros',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'GARAGE 17/10: custo de entrada e reserva de manutenção mantendo teto <= R$70 mil.'},
{slug:'motos',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'GARAGE 17/10: pneus, viseira e iluminação para piso frio/úmido.'},
{slug:'mecanica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'GARAGE 17/10: inspeção de infiltração após chuva e garoa.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
