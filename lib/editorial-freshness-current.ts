export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-14';
export const editorialFreshnessValidatedAt='14/09/2026 · 02h09 · corte da madrugada';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Até o corte de 02h09 de 14/09 não há fato Brasil material ocorrido e confirmado hoje; notícias anteriores não foram recicladas.'},
{slug:'mundo',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Até o corte de 02h09 de 14/09 não há fato Mundo material ocorrido e confirmado hoje em America/Sao_Paulo que justifique novo Reel; reportagens sobre fatos de 13/09 foram avaliadas sem serem reclassificadas como fato novo.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PESQUISA 14/09: BTG/Nexus mostra Lula 47% e Flávio Bolsonaro 46% em empate técnico, com margem de erro de 2 pontos.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Coleção-base evergreen não entra como jornalismo; rotação de curiosidades foi auditada novamente contra os 7 dias anteriores.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Curiosidade 14/09 corrigida após auditoria de 7 dias: voo de beija-flor, sem repetir o conceito de polvos usado em 10/09.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'PREVISÃO 14/09: previsão atualizada para São Paulo mantém segunda chuvosa e fria, com pouca variação de temperatura e máxima perto de 19°C.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo da Zona Leste ocorrido em 14/09 foi confirmado neste corte; atualizações de 13/09 foram corretamente omitidas.'},
{slug:'corinthians',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato novo do Corinthians ocorrido em 14/09 foi confirmado neste corte; resultado de 13/09 não foi reciclado.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação 14/09 revalidada contra 08–13/09: voo de beija-flor, velocidade do som no oceano, sombra permanente lunar, poeira do Saara na Amazônia e infravermelho de controles remotos. Foram removidos conceitos repetidos de polvos, Vênus, raios e QR Codes.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 10 semanas + 1 dia em 14/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 14/09: preparar hoje itens que simplificam a manhã seguinte.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 14/09: manter mapa, reservas e contatos essenciais acessíveis offline.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 14/09: perceber como o arranjo constrói sensação de crescendo.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum lançamento ou fato material de Games ocorrido em 14/09 confirmado neste corte; seção omitida.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:'14/09/2026 · 11h45 · corte da manhã',note:'FATO 14/09: Microsoft publicou código de conduta para manter futuras IAs sob controle humano, com consulta pública por seis semanas.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:'14/09/2026 · 17h52 · fechamento',note:'ATUALIZAÇÃO 14/09: Wall Street fechou em queda; chips de IA recuaram e o Treasury de 10 anos superou 5% durante a sessão.'},
{slug:'security-briefing',state:'ATUALIZADO',validatedAt:'14/09/2026 · 14h30 · corte da tarde',note:'APURAÇÃO/REPORTAGEM 14/09 · Reuters/The Information: Palantir, Nvidia e Booz Allen teriam adotado ou avaliam restrições a modelos de IA por preocupações com dados e propriedade intelectual; empresas não haviam confirmado à Reuters no corte.'},
{slug:'seguranca',state:'ATUALIZADO',validatedAt:'14/09/2026 · 20h11 · corte da noite',note:'APURAÇÃO/REPORTAGEM 14/09 · Dark Reading/watchTowr: atividade contra CVE-2026-85706 em GitLab escalou de probes para exploração com extração de configs contendo segredos e configurações SSH; patch de 10/09 e KEV de 11/09 são apenas contexto.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem advisory AppSec material datado de 14/09 confirmado; nenhum advisory anterior foi reciclado.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo 14/09 respeita teto de R$70 mil e orienta testar o ar-condicionado durante a avaliação do usado.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 14/09 sobre comportamento do motor em partida realmente a frio.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 14/09 sobre leitura correta do nível de óleo pela vareta.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
