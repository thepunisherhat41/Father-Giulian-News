import { dailyContent, edition, todayDrops } from './daily-content';

Object.assign(edition, {
  date: '14/08/2026',
  dateLabel: '14 AGO 2026',
  title: 'Daily Intelligence · 14 de agosto',
});

todayDrops.splice(0, todayDrops.length,
  { slug: 'brasil', label: 'Brasil', emoji: '🇧🇷', title: 'Portabilidade de crédito pelo Open Finance começa a mudar a negociação de dívida', detail: 'Crédito pessoal pode ser levado a outra instituição em uma jornada digital e com troca padronizada de dados.' },
  { slug: 'politica', label: 'Política', emoji: '🏛️', title: 'Últimas 24 horas antes do fechamento dos registros eleitorais', detail: 'O prazo termina amanhã, 15/08, às 19h; depois disso, a checagem deve migrar para os sistemas oficiais da Justiça Eleitoral.' },
  { slug: 'mundo', label: 'Mundo', emoji: '🌍', title: 'Petróleo sobe novamente com ameaça de bloqueio prolongado ao Irã', detail: 'Brent voltou para perto de US$ 88 mesmo após sinais de demanda fraca: risco geopolítico e fundamentos estão puxando em direções opostas.' },
  { slug: 'planeta', label: 'Planeta', emoji: '🌊', title: 'O “dia da maré” tem 24h50 — e isso explica por que o horário muda todos os dias', detail: 'A Lua avança em sua órbita enquanto a Terra gira; cada ponto do planeta precisa de cerca de 50 minutos extras para reencontrar a mesma geometria.' },
  { slug: 'animais', label: 'Mundo Animal', emoji: '🐦', title: 'Beija-flores podem desacelerar o próprio metabolismo durante a noite', detail: 'O torpor reduz gasto energético de aves que vivem no limite entre alto consumo e pequenas reservas.' },
  { slug: 'tempo', label: 'Tempo e Clima', emoji: '💧', title: 'Umidade relativa engana: ponto de orvalho diz melhor como o ar realmente “sente”', detail: 'Duas tardes com a mesma umidade relativa podem parecer muito diferentes se a temperatura e o conteúdo real de vapor mudarem.' },
  { slug: 'curiosidades', label: 'Curiosidades', emoji: '🎙️', title: 'Por que sua voz gravada parece pertencer a outra pessoa', detail: 'Ao falar, você se escuta pelo ar e também por vibrações conduzidas pelos ossos do crânio; a gravação elimina parte dessa segunda via.' },
  { slug: 'gravidez', label: 'Gravidez', emoji: '🤰', title: '5 semanas + 5 dias: o ultrassom precoce é uma fotografia de um processo muito rápido', detail: 'Nesta fase, poucos dias podem mudar bastante o que aparece no exame; um resultado muito inicial não deve ser interpretado fora do contexto clínico.' },
  { slug: 'pai', label: 'Ser Pai', emoji: '👨‍🍼', title: 'Missão de hoje: monte o plano de emergência da gestação antes de precisar dele', detail: 'Hospital de referência, documentos, transporte, contatos e sinais de alerta podem estar organizados em uma nota compartilhada.' },
  { slug: 'carros', label: 'Carros', emoji: '🚗', title: 'Radar R$ 30–60 mil: Ford Ka 1.5 SE 2019 manual', detail: 'FIPE de R$ 48.618 em julho e média Webmotors pouco acima de R$ 51 mil: compacto simples, mas que exige inspeção de histórico e arrefecimento.' },
  { slug: 'motos', label: 'Motos', emoji: '🏍️', title: 'Usada do dia: Yamaha XTZ 250 Lander 2019', detail: 'FIPE de R$ 19.209 e média Webmotors de R$ 20,55 mil; a inspeção precisa olhar suspensão, quadro, rodas, relação e histórico de uso fora de asfalto.' },
  { slug: 'mecanica', label: 'Mecânica', emoji: '🔋', title: 'Bateria “boa” pode falhar no frio: tensão em repouso não conta a história inteira', detail: 'Capacidade de partida, resistência interna e queda de tensão sob carga explicam por que medir apenas 12 volts pode enganar.' },
  { slug: 'nautica', label: 'Náutica', emoji: '⚓', title: 'Fundeio não é “jogar a âncora”: vento, corrente, fundo e espaço de giro mudam tudo', detail: 'A Marinha trata a preparação do fundeio como navegação em águas restritas, com avaliação prévia de perigos e área disponível.' },
  { slug: 'viagens', label: 'Viagens', emoji: '🏛️', title: 'Itu em um dia: história da República além dos objetos gigantes', detail: 'Museu Republicano, eixo histórico, igrejas e antigas fábricas formam um roteiro de cerca de 4h30 pelo centro.' },
  { slug: 'financas', label: 'Finanças', emoji: '📊', title: 'Mercados chegam à sexta com menos medo de alta do Fed — mas petróleo pode reabrir a discussão', detail: 'A chance implícita de alta de juros caiu, enquanto o Brent voltou a subir: inflação e energia continuam se cruzando.' },
  { slug: 'tecnologia', label: 'Tecnologia', emoji: '⚛️', title: 'Computação quântica: mais qubits não significam automaticamente uma máquina melhor', detail: 'Erro, fidelidade, conectividade e qubits lógicos importam tanto quanto a contagem bruta divulgada em manchetes.' },
  { slug: 'seguranca', label: 'Cyber', emoji: '🕵️', title: 'Turla continua evoluindo o STOCKSTAY para espionagem de longo prazo', detail: 'Backdoor .NET, phishing com arquivos RDP, WebSocket C2 e configuração amarrada ao ambiente mostram uma operação feita para persistência e coleta.' },
  { slug: 'appsec-ssdlc', label: 'AppSec', emoji: '📦', title: 'Provenance responde uma pergunta que o SBOM sozinho não responde: “quem construiu isto e como?”', detail: 'SLSA, attestations e assinatura de artefatos ajudam a provar a origem do build, não apenas listar dependências.' },
);

Object.assign(dailyContent.hoje, {
  title: '18 leituras novas para 14 de agosto',
  summary: 'A edição-base desta sexta renova todas as áreas: serviço financeiro no Brasil, reta final do registro eleitoral, petróleo e mercados, ciência, família, mobilidade, viagem, tecnologia e segurança. O radar volta a revisar fatos de atualidade às 10h e 17h.',
  readTime: '18 MISSÕES',
  badge: '05H BASE EDITION',
  sections: [],
});

Object.assign(dailyContent.brasil, {
  title: 'Open Finance entra na portabilidade de crédito: levar uma dívida para outro banco pode ficar menos burocrático',
  summary: 'O Banco Central regulamentou a portabilidade de crédito pelo Open Finance. A ideia é permitir que o cliente autorize o compartilhamento dos dados do contrato e receba proposta de outra instituição em uma jornada digital, inicialmente focada em crédito pessoal sem garantia e sem consignação.',
  shareSummary: 'A portabilidade de crédito pelo Open Finance transforma a renegociação de dívida em uma jornada digital: você autoriza os dados, outra instituição pode apresentar proposta e, quando a troca ocorre via Open Finance, a etapa de requisição pode ser concluída em até 3 dias úteis.',
  readTime: '8 MIN READ',
  badge: 'BRASIL / SERVIÇO ÚTIL',
  stats: [
    { label: 'PRIMEIRO ESCOPO', value: 'CRÉDITO PESSOAL', note: 'sem garantia e sem consignação' },
    { label: 'TROCA VIA OF', value: 'ATÉ 3 DIAS', note: 'etapa de requisição' },
    { label: 'CONTROLE', value: 'CONSENTIMENTO', note: 'cliente autoriza os dados' },
  ],
  sections: [
    { title: 'O que muda na prática', paragraphs: ['Portabilidade já existia, mas o Open Finance reduz a fricção de coletar documentos e transmitir dados do contrato. A instituição proponente recebe informações padronizadas com consentimento do cliente e consegue formular uma oferta comparável.'] },
    { title: 'Como usar isso a seu favor', bullets: ['Peça o saldo devedor atualizado.', 'Compare CET, não apenas a nova parcela.', 'Observe prazo remanescente e total pago.', 'Não aceite aumento de prazo que masque um custo final maior.'], paragraphs: ['Uma parcela menor pode vir de juros menores — ou simplesmente de mais meses pagando. A comparação correta é custo total, taxa e prazo juntos.'] },
    { title: 'Segurança: consentimento não é cheque em branco', paragraphs: ['O compartilhamento depende de autorização e ocorre entre instituições participantes. Ainda assim, o usuário deve iniciar a jornada dentro do aplicativo oficial da instituição e desconfiar de links recebidos por mensagem prometendo “portabilidade pré-aprovada”.'] },
  ],
  sources: [
    { label: 'Banco Central · Portabilidade de crédito no Open Finance', url: 'https://www.bcb.gov.br/detalhenoticia/20991/noticia' },
    { label: 'Banco Central · Passo a passo da portabilidade', url: 'https://www.bcb.gov.br/meubc/faqs/p/passo-a-passo-da-portabilidade-de-credito' },
  ],
});

Object.assign(dailyContent.politica, {
  title: 'Eleições 2026: começa a última janela de 24 horas para registrar candidaturas',
  summary: 'O prazo legal termina amanhã, 15 de agosto, às 19h. Convenção partidária, pedido de registro e deferimento continuam sendo etapas diferentes; por isso, o acompanhamento deve privilegiar o TSE/TRE e o DivulgaCandContas.',
  shareSummary: 'Partidos, federações e coligações têm até 15/08 às 19h para apresentar os pedidos de registro. Um nome anunciado em convenção ainda não é sinônimo de candidatura definitivamente deferida pela Justiça Eleitoral.',
  readTime: '7 MIN READ',
  badge: 'POLÍTICA / CALENDÁRIO',
  stats: [
    { label: 'PRAZO', value: '15 AGO', note: 'até 19h' },
    { label: 'ETAPA', value: 'REGISTRO', note: 'após convenções' },
    { label: 'PRÓXIMO MARCO', value: '16 AGO', note: 'propaganda eleitoral geral' },
  ],
  sections: [
    { title: 'O que realmente fecha amanhã', paragraphs: ['O que se encerra é o prazo de apresentação dos pedidos de registro pelos partidos, federações e coligações. A análise jurídica desses pedidos continua depois.'] },
    { title: 'Como ler os status sem confusão', bullets: ['Escolhido em convenção: decisão partidária.', 'Pedido apresentado: registro protocolado.', 'Deferido: Justiça Eleitoral aceitou o registro.', 'Indeferido com recurso: situação ainda pode mudar conforme o processo.'] },
    { title: 'Regra de ouro para acompanhar política', paragraphs: ['Prefira sistemas oficiais para status jurídico e dados de candidatura; use entrevistas e programas de campanha para propostas; e mantenha essas duas camadas separadas. Isso reduz a chance de confundir narrativa política com informação processual.'] },
  ],
  sources: [
    { label: 'TSE · Calendário Eleitoral 2026', url: 'https://www.tse.jus.br/eleicoes/calendario-eleitoral/calendario-eleitoral' },
    { label: 'TSE · Registro de candidatos', url: 'https://www.tse.jus.br/eleicoes/historia/processo-eleitoral-brasileiro/candidaturas/registro-de-candidatos' },
  ],
});

Object.assign(dailyContent.mundo, {
  title: 'Petróleo volta a subir: ameaça de bloqueio prolongado ao Irã recoloca oferta no centro do mercado',
  summary: 'O Brent subiu para perto de US$ 88 por barril na manhã de 14 de agosto depois de os Estados Unidos ameaçarem manter um bloqueio naval ao Irã por tempo indeterminado. A alta ocorre mesmo depois de dados de estoques e projeções de demanda terem pressionado o preço para baixo no dia anterior.',
  shareSummary: 'O Brent voltou para perto de US$ 88 nesta manhã. É um mercado puxado por forças opostas: estoques e demanda tentam reduzir o preço, enquanto risco de bloqueio e interrupção de oferta adiciona prêmio geopolítico.',
  readTime: '8 MIN READ',
  badge: 'GLOBAL WATCH / 05H',
  stats: [
    { label: 'BRENT', value: '~US$ 88', note: 'manhã de 14/08; sujeito a oscilação' },
    { label: 'WTI', value: '~US$ 82', note: 'manhã de 14/08' },
    { label: 'SEMANA', value: '~+4%', note: 'ritmo indicado pela Reuters' },
  ],
  sections: [
    { title: 'Por que subiu de novo', paragraphs: ['A ameaça de bloqueio prolongado elevou o risco de interrupção física de petróleo. Quando a incerteza sobre rotas ou produção cresce, compradores pagam um prêmio mesmo antes de existir falta efetiva de barris.'] },
    { title: 'O contraponto: demanda e estoques', paragraphs: ['No dia anterior, estoques americanos elevados e projeções mais fracas de crescimento da demanda puxaram preços para baixo. Isso mostra por que petróleo não é uma manchete única: fundamentos e geopolítica podem atuar simultaneamente em sentidos opostos.'] },
    { title: 'Como isso chega ao cotidiano', bullets: ['Diesel e frete.', 'Combustíveis e derivados.', 'Inflação e expectativas de juros.', 'Câmbio e balança comercial.', 'Custos de aviação e logística.'] },
  ],
  sources: [
    { label: 'Reuters · Oil rises after US threatens indefinite blockade · 14/08/2026', url: 'https://www.reuters.com/business/energy/oil-steadies-after-us-threatens-blockade-iran-indefinitely-2026-08-14/' },
  ],
});

Object.assign(dailyContent.planeta, {
  title: 'O oceano segue um relógio de 24h50 — não de 24 horas',
  summary: 'Um “dia lunar” dura aproximadamente 24 horas e 50 minutos. Como a Lua avança em sua órbita no mesmo sentido da rotação terrestre, um ponto da Terra leva cerca de 50 minutos extras para reencontrar a mesma posição em relação à Lua. É uma das razões pelas quais horários de maré deslizam de um dia para o outro.',
  shareSummary: 'Curiosidade de oceanografia: o ciclo lunar diário tem cerca de 24h50. Por isso o horário das marés tende a deslocar-se de um dia para o outro — a Terra precisa “alcançar” uma Lua que também se moveu.',
  readTime: '7 MIN READ',
  badge: 'PLANET FILE / OCEANO',
  stats: [
    { label: 'DIA LUNAR', value: '24H50' },
    { label: 'ALTAS TÍPICAS', value: '2 / DIA', note: 'há exceções regionais' },
    { label: 'INTERVALO', value: '~12H25', note: 'modelo semidiurno' },
  ],
  sections: [
    { title: 'Por que os horários mudam', paragraphs: ['A Lua demora cerca de 27,3 dias para completar uma órbita. Durante cada rotação de 24 horas da Terra, ela já avançou um pouco. O planeta precisa girar aproximadamente mais 50 minutos para restaurar uma geometria semelhante.'] },
    { title: 'Por que a praia real não segue um desenho perfeito', paragraphs: ['Continentes, profundidade, formato de baías, atrito, rotação da Terra e ressonâncias dos oceanos deformam o padrão simples. Há costas com maré semidiurna, mista ou predominantemente diurna.'] },
    { title: 'Aplicação náutica', paragraphs: ['Planejar entrada em barra, fundeio, pesca ou navegação rasa exige tabela local. Saber que “ontem a maré alta foi às 8h” não autoriza repetir o horário hoje.'] },
  ],
  sources: [
    { label: 'NOAA · Frequency of Tides — The Lunar Day', url: 'https://oceanservice.noaa.gov/education/tutorial_tides/tides05_lunarday.html' },
  ],
});

Object.assign(dailyContent.animais, {
  title: 'Beija-flores sobrevivem à própria conta de energia entrando em torpor',
  summary: 'Beija-flores têm metabolismo extraordinariamente alto e poucas reservas. Algumas espécies entram à noite em torpor: reduzem temperatura corporal e desaceleram fortemente funções metabólicas para atravessar horas sem alimentação.',
  shareSummary: 'Beija-flores conseguem entrar em torpor à noite: o metabolismo cai muito, economizando energia quando uma ave minúscula e de altíssimo consumo precisa passar horas sem se alimentar.',
  readTime: '7 MIN READ',
  badge: 'WILDLIFE / ENERGIA',
  stats: [
    { label: 'ESTADO', value: 'TORPOR' },
    { label: 'OBJETIVO', value: 'POUPAR ENERGIA' },
    { label: 'METABOLISMO', value: 'MUITO ALTO', note: 'durante atividade' },
  ],
  sections: [
    { title: 'Um corpo pequeno perde calor depressa', paragraphs: ['A relação entre área de superfície e volume torna animais muito pequenos vulneráveis à perda de calor. Ao mesmo tempo, pairar no ar exige gasto energético enorme. O torpor resolve parte desse conflito.'] },
    { title: 'Não é simplesmente “dormir mais fundo”', paragraphs: ['Durante o torpor, temperatura e metabolismo podem cair muito além do sono comum. É uma estratégia fisiológica temporária, diferente de manter o corpo em plena atividade durante a noite.'] },
    { title: 'A conexão evolutiva', paragraphs: ['Um comportamento espetacular — voo estacionário — cobra uma conta energética. A evolução frequentemente produz adaptações complementares: capacidade extrema de gasto durante o dia e economia extrema quando o alimento deixa de entrar.'] },
  ],
  sources: [
    { label: 'Smithsonian National Zoo · Hummingbirds', url: 'https://nationalzoo.si.edu/migratory-birds/hummingbirds' },
  ],
});

Object.assign(dailyContent.tempo, {
  title: 'Umidade relativa não mede “quanto de água existe no ar” do jeito que parece',
  summary: 'A umidade relativa depende fortemente da temperatura. O ponto de orvalho é uma medida mais direta da quantidade de vapor e ajuda a entender conforto, nevoeiro, orvalho e sensação de ar seco ou abafado.',
  shareSummary: 'Duas tardes com 50% de umidade relativa podem ser muito diferentes. Como o ar quente comporta mais vapor, o ponto de orvalho costuma ser melhor para comparar quão úmido o ar realmente está.',
  readTime: '7 MIN READ',
  badge: 'WEATHER SCHOOL',
  stats: [
    { label: 'UMIDADE REL.', value: 'DEPENDE DA TEMP.' },
    { label: 'PONTO DE ORVALHO', value: 'VAPOR REAL' },
    { label: 'USO', value: 'CONFORTO + NÉVOA' },
  ],
  sections: [
    { title: 'O truque da porcentagem', paragraphs: ['Umidade relativa compara o vapor presente com o máximo que o ar conseguiria sustentar naquela temperatura. Se a temperatura cai sem mudança de vapor, a umidade relativa sobe.'] },
    { title: 'Por que o ponto de orvalho é útil', paragraphs: ['O ponto de orvalho indica a temperatura em que o ar ficaria saturado. Quanto mais alto ele é, maior costuma ser a quantidade real de vapor e mais abafado o ambiente pode parecer.'] },
    { title: 'Aplicação para São Paulo no inverno', paragraphs: ['Em tardes frias e secas, acompanhe temperatura, umidade mínima e ponto de orvalho juntos. A umidade relativa isolada pode parecer “boa” pela manhã e despencar quando a temperatura sobe à tarde.'] },
  ],
  sources: [
    { label: 'INMET · Inverno 2026', url: 'https://portal.inmet.gov.br/noticias/inverno-2026-confira-a-previs%C3%A3o-para-a-esta%C3%A7%C3%A3o' },
  ],
});

Object.assign(dailyContent.curiosidades, {
  title: 'Sua voz gravada parece estranha porque você normalmente se escuta por dois caminhos',
  summary: 'Quando você fala, parte do som chega aos ouvidos pelo ar e parte chega por vibração dos ossos e tecidos do crânio. Uma gravação reproduz sobretudo a via aérea; por isso ela parece mais aguda ou menos “cheia” do que a voz que você conhece por dentro.',
  shareSummary: 'É normal estranhar a própria voz gravada: quando falamos, ouvimos ar + vibrações transmitidas pelo crânio. A gravação remove grande parte da condução óssea e revela uma versão mais próxima da que os outros ouvem.',
  readTime: '6 MIN READ',
  badge: 'CURIOSIDADE / PERCEPÇÃO',
  stats: [
    { label: 'AO FALAR', value: '2 VIAS' },
    { label: 'GRAVAÇÃO', value: 'VIA AÉREA' },
    { label: 'EFEITO', value: 'TIMBRE DIFERENTE' },
  ],
  sections: [
    { title: 'O som que nasce dentro da cabeça', paragraphs: ['Sua laringe vibra o ar, mas também transmite energia mecânica por tecidos e ossos. Essa condução altera especialmente a percepção de frequências mais graves.'] },
    { title: 'Por que a gravação incomoda', paragraphs: ['O cérebro construiu familiaridade com a versão interna da sua voz durante anos. Ouvir uma versão sem o mesmo componente ósseo cria uma pequena quebra de expectativa perceptiva.'] },
    { title: 'Conexão inesperada', paragraphs: ['Microfone, sala, distância e compressão também mudam o timbre. Portanto, nem a voz “da sua cabeça” nem qualquer gravação isolada é uma representação absoluta de como todas as pessoas o escutam.'] },
  ],
  sources: [
    { label: 'NIDCD · How Do We Hear?', url: 'https://www.nidcd.nih.gov/health/how-do-we-hear' },
  ],
});

Object.assign(dailyContent.gravidez, {
  title: '5 semanas + 5 dias: poucos dias podem mudar bastante o que aparece em um ultrassom precoce',
  summary: 'A gestação está chegando à sexta semana pela DPP de 11/04/2027. O embrião muda rapidamente nesta fase e exames muito precoces podem mostrar estruturas diferentes dependendo de idade gestacional real, equipamento, via do exame e características individuais. Um achado isolado deve ser interpretado pelo profissional no contexto clínico.',
  shareSummary: 'Hoje: 5 semanas + 5 dias. Nesta fase o desenvolvimento é muito rápido; alguns dias fazem diferença no ultrassom. Se um exame for feito muito cedo, não visualizar determinada estrutura naquele momento não deve ser interpretado sozinho sem avaliação obstétrica.',
  readTime: '8 MIN READ',
  badge: 'GESTAÇÃO / 5S5D',
  stats: [
    { label: 'IDADE', value: '5S + 5D' },
    { label: 'DPP', value: '11/04/2027' },
    { label: 'FASE', value: 'EMBRIONÁRIA' },
  ],
  sections: [
    { title: 'O desenvolvimento está acelerando', paragraphs: ['Guias clínicos da sexta semana descrevem crescimento rápido de cérebro, sistema musculoesquelético e brotos dos membros. Como a idade gestacional conta a partir da última menstruação, ela não equivale ao número de dias desde a fecundação.'] },
    { title: 'Ultrassom precoce: contexto vale mais que ansiedade', paragraphs: ['A ultrassonografia precoce pode ajudar a estimar idade gestacional e avaliar localização e evolução quando clinicamente indicada. Porém, a interpretação depende de datas, sintomas, via do exame e acompanhamento. Não compare uma imagem isolada com fotos da internet.'] },
    { title: 'O que vale levar para a consulta', bullets: ['DUM e DPP utilizadas.', 'Medicamentos e suplementos em uso.', 'Histórico de doenças e cirurgias.', 'Sintomas e sangramentos, se houver.', 'Dúvidas sobre exames e vacinação.'] },
  ],
  sources: [
    { label: 'Ministério da Saúde · Pré-natal de baixo risco', url: 'https://linhasdecuidado.saude.gov.br/portal/pre-natal-baixo-risco/unidade-de-atencao-primaria/planejamento-terapeutico/' },
    { label: 'NHS · Week 6 pregnancy guide', url: 'https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-6/' },
  ],
  disclaimer: 'Conteúdo educativo. Não substitui pré-natal nem interpretação médica de exames. Sangramento importante, dor forte ou unilateral, desmaio, febre ou piora clínica justificam avaliação profissional.'
});

Object.assign(dailyContent.pai, {
  title: 'Missão de hoje: crie um plano de emergência da gestação que caiba em uma única tela',
  summary: 'Participar também significa reduzir decisões sob estresse. Uma nota compartilhada com hospital de referência, documentos, contatos, rota, transporte e sinais de alerta transforma informação dispersa em um plano acionável.',
  shareSummary: 'Missão de pai do dia: montar uma nota compartilhada com hospital, contatos, documentos, transporte e orientações do pré-natal. O objetivo é não precisar improvisar decisões básicas quando alguém estiver assustado ou com dor.',
  readTime: '6 MIN READ',
  badge: 'SER PAI / MISSÃO',
  stats: [
    { label: 'TEMPO', value: '15 MIN' },
    { label: 'FORMATO', value: '1 NOTA' },
    { label: 'OBJETIVO', value: 'MENOS IMPROVISO' },
  ],
  sections: [
    { title: 'O que colocar', bullets: ['Hospital/maternidade de referência.', 'Plano de saúde ou dados do SUS.', 'Documentos essenciais.', 'Contatos do obstetra e familiares.', 'Rota e alternativa de transporte.', 'Lista de sinais de alerta orientada pelo pré-natal.'] },
    { title: 'Por que isso é participação real', paragraphs: ['Apoio não precisa começar no parto. Organizar logística, informações e contingências reduz carga mental e cria redundância: duas pessoas sabem onde estão as informações críticas.'] },
    { title: 'Não transforme o plano em diagnóstico', paragraphs: ['A lista serve para agir conforme orientações profissionais, não para decidir sozinho se um sintoma “é grave o suficiente”. Em dúvida ou piora, o caminho é procurar orientação médica.'] },
  ],
  sources: [
    { label: 'Ministério da Saúde · Caderneta Brasileira da Gestante', url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-mulher/publicacoes/caderneta-brasileira-da-gestante.pdf/view' },
  ],
});

Object.assign(dailyContent.carros, {
  title: 'Ford Ka 1.5 SE manual 2019: o barato pode estar no exemplar, não no modelo',
  summary: 'A versão 1.5 TI-VCT SE manual aparece com FIPE de R$ 48.618 em julho de 2026 e média Webmotors ao redor de R$ 51,7 mil. É um compacto que cabe no radar de R$ 30–60 mil, mas preço só faz sentido depois de histórico, manutenção e integridade estrutural.',
  shareSummary: 'Radar de usado: Ford Ka 1.5 SE manual 2019 — FIPE R$ 48.618 em jul/2026 e média Webmotors perto de R$ 51,7 mil. Antes de comprar: cautelar, arrefecimento, pneus, suspensão, embreagem e histórico de manutenção.',
  readTime: '8 MIN READ',
  badge: 'RADAR R$ 30–60 MIL',
  stats: [
    { label: 'FIPE JUL/26', value: 'R$ 48.618' },
    { label: 'WEBMOTORS', value: '~R$ 51,7 mil', note: 'média nacional' },
    { label: 'MOTOR', value: '1.5 MANUAL' },
  ],
  sections: [
    { title: 'Por que ele entra no radar', paragraphs: ['O 1.5 manual entrega desempenho mais folgado que versões 1.0 e mantém mecânica relativamente simples. Para uso urbano e rodoviário leve, pode ser uma combinação interessante quando o exemplar está íntegro.'] },
    { title: 'Checklist de compra', bullets: ['Laudo cautelar e alinhamento estrutural.', 'Sistema de arrefecimento e sinais de superaquecimento.', 'Funcionamento de embreagem e câmbio.', 'Pneus com desgaste uniforme.', 'Ruídos de suspensão e direção.', 'Histórico de revisões e recalls aplicáveis.'] },
    { title: 'Quilometragem: leia o contexto', paragraphs: ['Um carro 2019 com quilometragem “baixa demais” sem documentação merece a mesma atenção que um carro rodado. Procure coerência entre volante, pedais, bancos, pneus, notas e histórico de manutenção.'] },
  ],
  sources: [
    { label: 'Webmotors · FIPE Ford Ka 1.5 SE 2019 manual', url: 'https://www.webmotors.com.br/tabela-fipe/carros/ford/ka/2019/15-ti-vct-flex-se-manual' },
  ],
});

Object.assign(dailyContent.motos, {
  title: 'Yamaha Lander 250 2019: trail usada deve ser inspecionada pelo tipo de vida que teve',
  summary: 'A XTZ 250 Lander 2019 está em R$ 19.209 de FIPE em julho de 2026, com média Webmotors de R$ 20.552. O ponto-chave não é só quilometragem: trilhas, buracos, quedas e acessórios podem deixar sinais em suspensão, rodas, quadro e relação.',
  shareSummary: 'Usada do dia: Lander 250 2019 — FIPE R$ 19.209 e média Webmotors R$ 20,55 mil em jul/2026. Em trail, olhe mais que km: bengalas, mesa, rodas, balança, quadro, relação, rolamentos e sinais de queda.',
  readTime: '8 MIN READ',
  badge: 'MOTO USADA / TRAIL',
  stats: [
    { label: 'FIPE JUL/26', value: 'R$ 19.209' },
    { label: 'WEBMOTORS', value: 'R$ 20.552' },
    { label: 'PERFIL', value: 'TRAIL 250' },
  ],
  sections: [
    { title: 'O uso importa mais do que a categoria', paragraphs: ['Duas Lander com 30 mil km podem ter histórias completamente diferentes: uma em asfalto e manutenção regular; outra em terra, carga, quedas e lavagem agressiva. O odômetro não registra esforço estrutural.'] },
    { title: 'Onde procurar evidência', bullets: ['Retentores e tubos das bengalas.', 'Alinhamento de mesa e guidão.', 'Rodas e raios.', 'Folgas em balança e caixa de direção.', 'Batentes, pedaleiras e protetores marcados por queda.', 'Estado da relação e discos.'] },
    { title: 'Preço abaixo da FIPE pode ser oportunidade — ou evidência', paragraphs: ['Há anúncios abaixo da referência. Antes de celebrar o desconto, descubra o motivo: documentação, pneus, manutenção acumulada, sinistro, estética, urgência do vendedor ou defeito mecânico.'] },
  ],
  sources: [
    { label: 'Webmotors · FIPE Yamaha Lander 250 2019', url: 'https://www.webmotors.com.br/tabela-fipe/motos/yamaha/xtz-250-lander/2019' },
  ],
});

Object.assign(dailyContent.mecanica, {
  title: '12,6 volts não provam que a bateria está saudável',
  summary: 'Uma bateria pode apresentar tensão aparentemente normal em repouso e ainda falhar na partida. O diagnóstico precisa observar queda de tensão sob carga, capacidade de corrente, resistência interna, conexões e o sistema de carga.',
  shareSummary: 'Dica de mecânica: medir 12,6 V em repouso não encerra o diagnóstico da bateria. A falha pode aparecer só sob carga; teste de partida, queda de tensão, terminais e alternador completam a avaliação.',
  readTime: '8 MIN READ',
  badge: 'MECÂNICA / ELÉTRICA',
  stats: [
    { label: 'REPOUSO', value: '~12,6 V', note: 'referência típica de bateria carregada' },
    { label: 'PARTIDA', value: 'ALTA CARGA' },
    { label: 'DIAGNÓSTICO', value: 'SISTEMA' },
  ],
  sections: [
    { title: 'Tensão é só uma fotografia', paragraphs: ['A tensão em aberto mostra estado elétrico naquele instante, mas não revela necessariamente quanto a bateria consegue entregar quando o motor de partida exige muita corrente.'] },
    { title: 'Quatro hipóteses antes de comprar bateria', bullets: ['Bateria degradada.', 'Terminal oxidado ou frouxo.', 'Cabo com alta resistência.', 'Alternador carregando pouco ou consumo parasita descarregando o sistema.'] },
    { title: 'Queda de tensão é uma ferramenta poderosa', paragraphs: ['Medir a diferença de potencial ao longo de cabos e conexões durante a partida pode revelar resistência onde visualmente tudo parece normal. Trocar peça sem medir transforma diagnóstico em loteria.'] },
  ],
});

Object.assign(dailyContent.nautica, {
  title: 'Fundeio seguro começa antes de largar o ferro',
  summary: 'A preparação envolve escolher área protegida, observar vento e corrente, conferir profundidade, fundo, perigos submersos, espaço para giro e proximidade de outras embarcações. A Marinha trata o fundeio de precisão como manobra em águas restritas.',
  shareSummary: 'Na náutica, fundear não é jogar a âncora: antes de largar o ferro é preciso avaliar vento, corrente, profundidade, tipo de fundo, perigos e o raio que a embarcação poderá girar.',
  readTime: '8 MIN READ',
  badge: 'NÁUTICA / FUNDEIO',
  stats: [
    { label: 'AMBIENTE', value: 'ÁGUAS RESTRITAS' },
    { label: 'CHECAR', value: 'VENTO + CORRENTE' },
    { label: 'ESPAÇO', value: 'RAIO DE GIRO' },
  ],
  sections: [
    { title: 'Escolha o lugar antes de escolher a técnica', paragraphs: ['Uma área abrigada, com profundidade adequada e sem cabos, canal ou obstáculos, reduz o risco antes mesmo de a âncora tocar o fundo.'] },
    { title: 'O barco continua se movendo depois de ancorado', paragraphs: ['Vento e corrente mudam direção e fazem a embarcação girar em torno do ponto de fundeio. O espaço seguro precisa considerar esse círculo, especialmente em ancoradouros congestionados.'] },
    { title: 'Após fundear, continue navegando', bullets: ['Confirme posição.', 'Monitore arrasto.', 'Observe mudança de vento/corrente.', 'Mantenha rota de saída mentalizada.', 'Use alarme de âncora quando disponível.'] },
  ],
  sources: [
    { label: 'Marinha do Brasil · NORMAM 511 — seção de fundeio', url: 'https://www.marinha.mil.br/sites/default/files/atos-normativos/dhn/Port-N%C2%BA%2030-DHN-DGN-MB-21MAI2026-NORMAM-511-REV1.html' },
  ],
});

Object.assign(dailyContent.viagens, {
  title: 'Itu além do exagero: um bate-volta para entender a formação política e industrial de São Paulo',
  summary: 'O centro histórico de Itu permite conectar Convenção Republicana de 1873, arquitetura religiosa, antigas fábricas e crescimento do interior paulista. A prefeitura mantém roteiros a pé pelo Eixo Histórico, com opção de circuito de aproximadamente 4h30.',
  shareSummary: 'Bate-volta perto de SP: Itu. Em vez de ficar só nos objetos gigantes, dá para fazer o Eixo Histórico com Museu Republicano, Matriz, Fábrica São Luiz, igrejas e casarões — um roteiro que ajuda a entender a política paulista do século XIX.',
  readTime: '8 MIN READ',
  badge: 'VIAGEM PERTO DE SP',
  stats: [
    { label: 'PERFIL', value: 'HISTÓRIA + CENTRO' },
    { label: 'ROTEIRO', value: '~4H30', note: 'trilha histórica oficial' },
    { label: 'MUSEU REP.', value: 'TER–DOM', note: '10h–17h segundo turismo local' },
  ],
  sections: [
    { title: 'Comece pelo contexto, não pelo Orelhão', paragraphs: ['Itu foi palco da Convenção Republicana de 1873 e preserva edifícios que contam história política, religiosa e industrial. Isso transforma um passeio urbano em uma leitura concreta do século XIX paulista.'] },
    { title: 'Roteiro enxuto', bullets: ['Museu Republicano Convenção de Itu.', 'Praça Padre Miguel e Matriz Nossa Senhora da Candelária.', 'Fábrica São Luiz.', 'Museu da Energia.', 'Igreja e Convento do Carmo.', 'Praça dos Exageros se ainda houver tempo.'] },
    { title: 'Como deixar o passeio melhor', paragraphs: ['Chegue cedo, caminhe pelo centro antes do almoço e confira horários dos museus no próprio dia. Calçado confortável vale mais do que tentar encaixar dez atrações.'] },
  ],
  sources: [
    { label: 'Turismo Itu · Rotas', url: 'https://turismo.itu.sp.gov.br/rotas/' },
    { label: 'Turismo Itu · Museus', url: 'https://turismo.itu.sp.gov.br/museus/' },
  ],
});

Object.assign(dailyContent.financas, {
  title: 'Sexta começa com bolsas fortes e menos apostas em alta do Fed — enquanto o petróleo volta a pressionar',
  summary: 'Ações asiáticas caminharam para uma das melhores semanas recentes depois de dados de inflação reduzirem as apostas de alta do Fed. Ao mesmo tempo, petróleo voltou a subir com o risco geopolítico no Irã. É a combinação que o mercado precisa resolver: inflação mais comportada contra energia mais cara.',
  shareSummary: 'Mercado hoje: dados de inflação diminuíram a chance de alta do Fed, ajudando bolsas; mas petróleo voltou a subir por risco geopolítico. Isso mostra por que juros não dependem de um único indicador.',
  readTime: '8 MIN READ',
  badge: 'FINANÇAS / MORNING MARKET',
  stats: [
    { label: 'FED SET.', value: '~35% ALTA', note: 'probabilidade implícita citada pela Reuters; muda em tempo real' },
    { label: 'ÁSIA', value: 'SEMANA FORTE' },
    { label: 'BRENT', value: '~US$ 88' },
  ],
  sections: [
    { title: 'Mercado precifica antes da decisão', paragraphs: ['Quando inflação vem mais comportada, investidores reduzem a probabilidade de aperto monetário e reprecificam ações, títulos e câmbio antes de qualquer reunião do banco central.'] },
    { title: 'O petróleo pode bagunçar a narrativa', paragraphs: ['Energia mais cara entra em custos de transporte e produção. Se a alta persistir, pode reacender expectativas de inflação e devolver pressão aos juros. Um dia de petróleo alto não determina o próximo passo do Fed, mas muda o conjunto de riscos.'] },
    { title: 'Aplicação pessoal', paragraphs: ['Não mude carteira por uma única manchete. Use notícias macro para entender cenário; decisões de reserva, dívida e investimento devem continuar alinhadas a prazo, liquidez e tolerância a risco.'] },
  ],
  sources: [
    { label: 'Reuters · Global markets · 14/08/2026', url: 'https://www.reuters.com/world/china/global-markets-wrapup-1-2026-08-14/' },
  ],
  disclaimer: 'Conteúdo educacional, não recomendação de investimento.'
});

Object.assign(dailyContent.tecnologia, {
  title: 'Computação quântica: a contagem de qubits é como contar servidores sem perguntar se eles funcionam bem',
  summary: 'Qubits físicos são frágeis e acumulam erros. Por isso, comparar computadores quânticos apenas pelo número bruto de qubits ignora fidelidade das portas, conectividade, coerência, taxa de erro e quantos qubits físicos são necessários para formar um qubit lógico robusto.',
  shareSummary: 'Em computação quântica, “mais qubits” não significa automaticamente “mais poderoso”. Qubits lógicos, taxa de erro, fidelidade e correção de erros são métricas tão importantes quanto a contagem física.',
  readTime: '8 MIN READ',
  badge: 'TECH / QUANTUM',
  stats: [
    { label: 'QUBIT FÍSICO', value: 'FRÁGIL' },
    { label: 'QUBIT LÓGICO', value: 'CORRIGIDO' },
    { label: 'GARGALO', value: 'ERRO' },
  ],
  sections: [
    { title: 'Por que qubits erram tanto', paragraphs: ['Estados quânticos interagem com o ambiente e perdem coerência. Operações também têm imperfeições. Um algoritmo grande precisa sobreviver a muitos passos sem acumular erro demais.'] },
    { title: 'Correção de erros muda o jogo', paragraphs: ['Em arquiteturas tolerantes a falhas, vários qubits físicos cooperam para representar informação lógica mais confiável. A relação pode ser cara: aumentar a qualidade costuma exigir overhead significativo.'] },
    { title: 'Como ler uma manchete quântica', bullets: ['Quantos qubits físicos?', 'Há qubits lógicos?', 'Qual fidelidade?', 'Qual benchmark foi executado?', 'É demonstração experimental ou vantagem útil em produção?'] },
  ],
  sources: [
    { label: 'IBM Quantum · Quantum error correction', url: 'https://www.ibm.com/quantum/blog/quantum-error-correction' },
  ],
});

Object.assign(dailyContent.seguranca, {
  title: 'STOCKSTAY: o novo backdoor da Turla mostra como espionagem de longo prazo evita depender de uma única ferramenta',
  summary: 'O Google Threat Intelligence Group detalhou o STOCKSTAY, backdoor .NET ligado à Turla. A ferramenta usa WebSocket para C2, componentes separados e, em algumas operações, phishing com arquivos RDP. Versões mais maduras podem amarrar a configuração ao hostname, usuário ou domínio da vítima.',
  shareSummary: 'Cyber de hoje: Turla/Secret Blizzard evoluiu o STOCKSTAY, um backdoor .NET com WebSocket C2 e configuração que pode ser “chaveada” para um ambiente específico. A campanha mostra por que phishing com arquivos RDP e ferramentas aparentemente legítimas merece controle.',
  readTime: '10 MIN READ',
  badge: 'CYBER / ESPIONAGEM',
  stats: [
    { label: 'ATOR', value: 'TURLA' },
    { label: 'MALWARE', value: 'STOCKSTAY' },
    { label: 'C2', value: 'WEBSOCKET' },
  ],
  sections: [
    { title: 'A cadeia começa antes do malware', paragraphs: ['GTIG observou campanhas usando arquivos RDP maliciosos como isca. Ao convencer a vítima a iniciar conexão com infraestrutura controlada pelo ator, o atacante cria um canal para a próxima etapa da operação.'] },
    { title: 'Environmental keying é um detalhe valioso', paragraphs: ['Algumas configurações só podem ser decriptadas no hostname, usuário ou domínio correto. Isso reduz exposição do C2 durante análise fora do alvo e mostra que o ator já conhece o ambiente quando chega a estágios mais maduros.'] },
    { title: 'Defesa prática', bullets: ['Trate arquivos .rdp recebidos por e-mail como conteúdo de alto risco.', 'Restrinja RDP outbound quando não necessário.', 'Monitore execução e criação de persistência por binários .NET incomuns.', 'Correlacione conexões WebSocket persistentes com processo de origem.', 'Use os IOCs e YARA publicados pela GTIG como ponto de partida, não como única defesa.'] },
  ],
  sources: [
    { label: 'Google Threat Intelligence · STOCKSTAY / Turla', url: 'https://cloud.google.com/blog/topics/threat-intelligence/stockstay-turla-intelligence-gathering/' },
  ],
});

Object.assign(dailyContent['appsec-ssdlc'], {
  title: 'SBOM diz o que entrou no software; provenance ajuda a provar como o artefato nasceu',
  summary: 'Uma cadeia de software confiável precisa responder mais do que “quais dependências estão aqui?”. Provenance e attestations registram informações sobre origem, builder, repositório, workflow e parâmetros do build. Isso ajuda a detectar artefatos produzidos fora do processo autorizado.',
  shareSummary: 'AppSec do dia: SBOM e provenance resolvem perguntas diferentes. SBOM lista componentes; provenance registra como e onde o build foi produzido. Juntos, ajudam a distinguir “tem a biblioteca X” de “este binário realmente saiu do pipeline confiável”.',
  readTime: '10 MIN READ',
  badge: 'APPSEC / SOFTWARE SUPPLY CHAIN',
  stats: [
    { label: 'SBOM', value: 'CONTEÚDO' },
    { label: 'PROVENANCE', value: 'ORIGEM DO BUILD' },
    { label: 'OBJETIVO', value: 'CONFIANÇA' },
  ],
  sections: [
    { title: 'A pergunta que falta em muitos pipelines', paragraphs: ['Um SBOM legítimo pode ser anexado a um artefato adulterado. Para aumentar confiança, você precisa relacionar o binário ao pipeline autorizado e proteger a identidade do builder que assina essa afirmação.'] },
    { title: 'O que uma attestation útil deve vincular', bullets: ['Digest do artefato.', 'Repositório e revisão de origem.', 'Identidade do builder/workflow.', 'Parâmetros relevantes.', 'Horário e contexto de execução.'] },
    { title: 'Como aplicar no SSDLC', paragraphs: ['Gere provenance automaticamente no build, assine usando identidade de workload em vez de chave estática, valide antes de promover para Harbor/produção e arquive a evidência junto do SBOM. O gate deixa de perguntar só “há vulnerabilidade?” e passa a perguntar também “posso confiar na origem deste artefato?”.'] },
  ],
  sources: [
    { label: 'SLSA · Provenance', url: 'https://slsa.dev/provenance/v1' },
    { label: 'SLSA · Build Track', url: 'https://slsa.dev/spec/v1.0/levels' },
  ],
});
