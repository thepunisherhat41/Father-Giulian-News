export type EditorialFreshnessState='ATUALIZADO'|'VALIDADO';
export type EditorialFreshnessEntry={slug:string;state:EditorialFreshnessState;validatedAt:string;note:string};
export const editorialFreshnessDate='2026-09-08';
export const editorialFreshnessValidatedAt='08/09/2026 · 20h52 · atualização intradiária';
export const editorialFreshness:EditorialFreshnessEntry[]=[
{slug:'brasil',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Nenhum fato material novo da data local 08/09 confirmado neste corte; Reel omitido.'},
{slug:'seguranca-zl',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO/REPORTAGEM 08/09: Prefeitura publicou hoje detalhes de ocorrência da GCM no Belém em 05/09, com apreensão de R$ 71.977; o card deixa explícito que a apreensão não ocorreu hoje.'},
{slug:'politica',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO/ATUALIZAÇÃO 08/09: André Mendonça afastou Andrei Rodrigues e Leandro Almada; Segunda Turma formou maioria para manter a medida, mas julgamento foi interrompido por pedido de vista.'},
{slug:'mundo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO/ATUALIZAÇÃO 08/09: ataques Houthi atingiram cidades e instalações de energia no sul da Arábia Saudita; autoridades reportaram 73 feridos.'},
{slug:'planeta',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'animais',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Evergreen fora do feed jornalístico.'},
{slug:'tempo',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'ATUALIZAÇÃO/OBSERVAÇÃO/PREVISÃO 08/09: CGE mantém noite nublada, faixa diária de 11°C a 18°C e baixo potencial de tempestade; sem novo boletim material posterior que justifique reescrita do Reel.'},
{slug:'curiosidades',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Rotação inédita 08/09: pelagem da lontra-marinha, pressão oceânica, afastamento da Lua, diamante/grafite e fungos bioluminescentes; conceitos distintos da janela recente.'},
{slug:'musica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Experiência nova 08/09: escuta focada em bateria e percussão.'},
{slug:'games',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem lançamento/anúncio material da data local 08/09 confirmado em fonte oficial neste corte; Reel omitido.'},
{slug:'gravidez',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Cronologia atualizada para 9 semanas + 2 dias em 08/09.'},
{slug:'pai',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Missão prática nova 08/09: deixar água e uma opção neutra acessíveis para momentos de enjoo.'},
{slug:'corinthians',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO/ATUALIZAÇÃO 08/09: treino antes tratado como AGENDA foi confirmado como realizado no CT do Defensa y Justicia; Diniz tem sete desfalques para o Estudiantes.'},
{slug:'carros',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 08/09 mantém teto de R$70 mil e orienta avaliar a primeira partida com motor frio.'},
{slug:'motos',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 08/09 sobre corrente, folga, elos e relação final.'},
{slug:'mecanica',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Conteúdo novo 08/09 sobre chiado de correia como sintoma que exige inspeção da causa.'},
{slug:'viagens',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Ideia nova 08/09: comparar rotas também pela estrutura e segurança das paradas.'},
{slug:'financas',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem fato financeiro novo posterior ao corte anterior que justifique reentrada do Reel; fechamento de Wall Street já havia ocorrido antes das 17h45 BRT.'},
{slug:'tecnologia',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO 08/09: Qualcomm anunciou colaboração multigeracional com a Amazon para silício personalizado de IA e conectividade óptica em data centers AWS.'},
{slug:'security-briefing',state:'ATUALIZADO',validatedAt:editorialFreshnessValidatedAt,note:'FATO/ATUALIZAÇÃO 08/09: Patch Tuesday de setembro corrige 966 falhas segundo levantamento publicado hoje; Microsoft classifica CVE-2026-81963 e CVE-2026-85880 como exploradas ativamente. Sem afirmação de CISA KEV sem confirmação.'},
{slug:'seguranca',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem incidente/advisory Cyber adicional distinto da atualização Microsoft confirmado neste corte; Reel omitido para evitar duplicidade com Security Briefing.'},
{slug:'appsec-ssdlc',state:'VALIDADO',validatedAt:editorialFreshnessValidatedAt,note:'Sem CVE/advisory AppSec novo de 08/09 com confirmação oficial suficiente neste corte; Reel omitido.'}
];
export function freshnessForSlug(slug:string){return editorialFreshness.find(item=>item.slug===slug);}
