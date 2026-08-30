export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-08-30';
export const editorialFreshnessValidatedAt='30/08/2026 · 17h28 · revisão do fim da tarde';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Agência Brasil 15h23: 20 pessoas foram resgatadas pelos bombeiros após mudança do vento afastar nadadores e praticantes de stand up paddle da rota na Barra da Tijuca.'},
{slug:'seguranca-zl',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Zona Leste rechecada até 17h28; nenhum fato novo de 30/08 com fonte datada e confirmação suficiente foi promovido.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Agência Brasil 12h03 publicou balanço do fim de semana dos presidenciáveis com atividades de domingo já descritas como realizadas e compromissos futuros mantidos como agenda, sem tratar previsão como fato.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 30/08: dirigentes de bancos centrais europeus expressam preocupação com maior imprevisibilidade nas relações financeiras com os EUA; linhas de swap do Fed permanecem intactas.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen científico revisado; não entra como notícia.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen revisado; não tratado como notícia.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Previsão de 30/08 para São Paulo permanece quente e seca; busca de fim da tarde não trouxe mudança material confirmada que justificasse substituir o card.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita de 30/08 mantida: espalhamento Rayleigh, ponto cego e correção de erros em QR Code.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Proposta editorial de domingo mantida; não apresenta agenda antiga como notícia.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'gamescom segue no último dia em 30/08; nenhum resultado ou vencedor foi promovido sem publicação oficial confirmada.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'DUM 05/07/2026 resulta em 8 semanas completas em 30/08/2026; card permanece correto em 8s0d.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão do dia mantida: assumir uma tarefa inteira e reduzir carga mental.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ge e Lance confirmam Christian Oliva marcando aos 32 minutos do primeiro tempo. Na revisão de 17h28, o placar confirmado é Corinthians 0 x 1 Santos e o jogo segue em andamento; não foi antecipado resultado final.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Card de compra de usado revalidado com teto de R$70 mil.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Card técnico revalidado.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Card técnico revalidado.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Proposta de passeio curto adaptada ao domingo quente e à gestação permanece válida.'},
{slug:'financas',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'Reuters 30/08: risco institucional e previsibilidade das ações financeiras dos EUA permanecem no radar após Jackson Hole.'},
{slug:'tecnologia',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Busca até 17h28 não localizou fato tecnológico material novo de 30/08 com confirmação suficiente para Reel.'},
{slug:'security-briefing',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Busca até 17h28 não localizou briefing novo de 30/08 com fonte primária suficiente; itens de dias anteriores não foram reciclados.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cyber rechecado até 17h28; sem novo incidente material de 30/08 confirmado o suficiente para Reel.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'AppSec rechecado até 17h28. A sugestão de módulo Metasploit para CVE-2026-18729/Langflow permanece proposta/PoC pendente, sem evidência suficiente para elevar a Reel jornalístico.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
