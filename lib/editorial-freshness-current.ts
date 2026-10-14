export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-10-14';
export const editorialFreshnessValidatedAt='14/10/2026 · corte 01h00';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 14/10: Receita Federal abre hoje o IV Congresso de Direito Tributário e Aduaneiro em Brasília.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'APURAÇÃO/REPORTAGEM 14/10: Reuters relata mudança de tática iraniana para pressionar tráfego marítimo no Estreito de Hormuz e Golfo de Omã.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 14/10: calendário do TSE fixa hoje o prazo final para TREs enviarem relatórios de auditoria do primeiro turno.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO 14/10: CGE prevê 18°C a 27°C, abafado e risco de chuva moderada a forte à tarde e à noite.'},
{slug:'seguranca-zl',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA LOCAL 14/10: Conselho Participativo Municipal de Guaianases tem reunião oficial marcada para hoje às 19h.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'AGENDA 14/10: Seedorf chega hoje, tem dois períodos de treino previstos e apresentação marcada para 13h; nada é tratado como realizado no corte da madrugada.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem card editorial próprio; conteúdo espacial novo de 14/10 está em Curiosidades.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem card editorial próprio; conteúdo animal novo de 14/10 está em Curiosidades.'},
{slug:'curiosidades',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita 14/10: três corações do polvo, regeneração hepática compensatória e dia de Vênus maior que o ano.'},
{slug:'gravidez',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 14 semanas + 3 dias com referência NHS da semana 14.'},
{slug:'pai',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão 14/10: registrar uma memória real da fase atual da espera pelo Felipe.'},
{slug:'viagens',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ROTEIRO 14/10: bate-volta urbano curto com plano B coberto, contextualizado pela previsão de chuva do CGE.'},
{slug:'musica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'RECOMENDAÇÃO 14/10: Fontaines D.C. + Rosalía, deixando explícito que o lançamento foi noticiado em 13/10.'},
{slug:'games',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'LANÇAMENTOS 14/10: Steam lista Castlevania: Belmont’s Curse, Arknights: Endfield e Warhammer 40,000: Boltgun 2 para hoje.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'DECLARAÇÃO 14/10: CEO do CBA defende retenção local de valor econômico da IA e regulação que aumente confiança.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 14/10: fechamento brasileiro de 13/10 é identificado como tal; madrugada de 14/10 acompanha CPI dos EUA e Fed.'},
{slug:'security-briefing',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'APURAÇÃO/REPORTAGEM 14/10: reguladores bancários ampliam escrutínio sobre IA agentic e recuperação cibernética.'},
{slug:'seguranca',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'APURAÇÃO/REPORTAGEM 14/10: investigação francesa sobre ataques a sistemas de refrigeração conectados em mais de 350 supermercados.'},
{slug:'appsec-ssdlc',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO 14/10: mudanças de segurança SSH do GitHub entram em vigor hoje conforme cronograma oficial.'},
{slug:'carros',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'RADAR 14/10: Duster automática e Honda Fit em anúncios atuais dentro do teto obrigatório de R$70 mil.'},
{slug:'motos',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'CHECKLIST 14/10: pilotagem adaptada ao risco de chuva forte previsto para tarde/noite.'},
{slug:'mecanica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'CHECKLIST 14/10: pneus, palhetas, desembaçador, luzes e drenagem antes da chuva prevista.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
