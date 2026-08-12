import { dailyContent, edition, todayDrops } from './daily-content';

Object.assign(edition, {
  date: '12/08/2026',
  dateLabel: '12 AGO 2026',
  title: 'Daily Intelligence · 12 de agosto',
});

todayDrops.splice(0, todayDrops.length,
  { slug: 'brasil', label: 'Brasil', emoji: '🇧🇷', title: 'Seu limite do Pix é também um controle de segurança', detail: 'Reduzir limite é imediato; aumentar leva análise. Um ajuste de cinco minutos pode reduzir bastante o estrago de um celular roubado.' },
  { slug: 'politica', label: 'Política', emoji: '🏛️', title: 'Vai viajar nas eleições? O voto em trânsito tem prazo', detail: 'Eleitores regulares podem pedir habilitação até 20/08; dentro do mesmo estado é possível votar para todos os cargos estaduais e nacionais.' },
  { slug: 'mundo', label: 'Mundo', emoji: '🌍', title: 'O mapa do risco mundial passa pelo mar', detail: 'Mar Vermelho, Coreia e Taiwan ajudam a explicar como conflitos distantes atingem frete, energia, chips e seguros.' },
  { slug: 'planeta', label: 'Planeta', emoji: '🌎', title: 'Há água subterrânea mais antiga que civilizações inteiras', detail: 'Aquíferos podem guardar água por décadas, milhares ou até centenas de milhares de anos — e a idade muda a química da água.' },
  { slug: 'animais', label: 'Mundo Animal', emoji: '🐘', title: 'Elefantes parecem chamar indivíduos por “nomes”', detail: 'Experimentos de campo e machine learning encontraram chamadas específicas para o destinatário, uma raridade no mundo animal.' },
  { slug: 'tempo', label: 'Tempo e Clima', emoji: '🌧️', title: 'Existem rios no céu', detail: 'Rios atmosféricos podem ter mais de 1.600 km e transportar enormes volumes de vapor antes de descarregar chuva ou neve.' },
  { slug: 'curiosidades', label: 'Curiosidades', emoji: '🧠', title: 'Metal e madeira podem estar na mesma temperatura e parecer diferentes', detail: 'Seu corpo percebe fluxo de calor, não apenas temperatura. É por isso que o metal “parece” mais frio.' },
  { slug: 'gravidez', label: 'Gravidez', emoji: '🤰', title: '5 semanas + 3 dias: por que folato importa justamente agora', detail: 'O início da gestação concentra processos celulares rápidos; o tubo neural se forma e fecha muito cedo.' },
  { slug: 'pai', label: 'Ser Pai', emoji: '👨‍🍼', title: 'Missão de hoje: crie o caderno do pré-natal', detail: 'Consultas ficam melhores quando dúvidas, sintomas, exames e decisões não dependem da memória do casal.' },
  { slug: 'carros', label: 'Carros', emoji: '🚗', title: 'Radar R$ 30–60 mil: Toyota Etios Sedan 2017', detail: 'A versão X 1.5 manual aparece com FIPE de R$ 52.378 em julho/2026; a compra racional depende muito mais do exemplar que do emblema.' },
  { slug: 'motos', label: 'Motos', emoji: '🏍️', title: 'Usada do dia: Honda XRE 300 2017', detail: 'FIPE de R$ 20.037 em julho/2026; uma trail usada pede inspeção diferente de uma street.' },
  { slug: 'mecanica', label: 'Mecânica', emoji: '🔧', title: 'Por que retirar a válvula termostática não é “melhorar o arrefecimento”', detail: 'O motor foi projetado para atingir e manter uma faixa térmica. Sem controle, consumo, emissões e diagnóstico podem piorar.' },
  { slug: 'nautica', label: 'Náutica', emoji: '⚓', title: 'O passeio começa antes de soltar a amarra', detail: 'Planejamento de rota, meteorologia, maré, cartas, VHF e salvatagem são parte da navegação — não burocracia.' },
  { slug: 'viagens', label: 'Viagens', emoji: '🚂', title: 'Paranapiacaba: um bate-volta histórico saindo de trem da Luz', detail: 'O Expresso Turístico custa R$ 50 ida e volta por passageiro; a vila reúne patrimônio ferroviário, neblina e Mata Atlântica.' },
  { slug: 'financas', label: 'Finanças', emoji: '💰', title: 'Parcela menor pode esconder um empréstimo mais caro', detail: 'O número que compara crédito de verdade é o CET: juros + tarifas + impostos + demais custos.' },
  { slug: 'tecnologia', label: 'Tecnologia', emoji: '💻', title: 'Coreia do Sul mira Lua, quantum, SMRs e interface cérebro-computador', detail: 'O plano Seven Major SEED mostra como países estão tratando tecnologia de fronteira como infraestrutura estratégica.' },
  { slug: 'seguranca', label: 'Cyber', emoji: '🛡️', title: 'A chave que assina identidade pode valer mais que milhares de senhas', detail: 'Mandiant mostrou como uma chave ativa de ADFS pode viabilizar Golden SAML e contornar MFA em ambientes federados.' },
  { slug: 'appsec-ssdlc', label: 'AppSec', emoji: '🧬', title: 'CVSS 6.5 + exploração real: quando “Medium” não é médio', detail: 'CVE-2026-20262 no Cisco SD-WAN Manager permite escrita arbitrária de arquivos e teve exploração limitada confirmada.' },
);

Object.assign(dailyContent.hoje, {
  title: '18 ideias novas para 12 de agosto',
  summary: 'A edição de hoje foi reconstruída inteira: segurança financeira, eleição, clima, ciência, animais, gravidez, paternidade, mobilidade, mecânica, náutica, viagem, tecnologia e segurança de software. Nada de reciclar o assunto de ontem.',
  readTime: '18 MISSÕES',
  badge: 'FULL DAILY REFRESH',
  sections: [],
});

Object.assign(dailyContent.brasil, {
  title: 'Brasil prático: trate o limite do Pix como parte da segurança do celular',
  summary: 'O Banco Central permite reduzir limites do Pix imediatamente. Aumentos passam por análise e, se aceitos, entram em vigor entre 24 e 48 horas. Isso faz do limite uma barreira simples contra perdas maiores em caso de coerção ou roubo do aparelho.',
  shareSummary: 'Uma dica simples de segurança financeira: revise os limites do Pix no seu banco. Redução deve ser imediata; aumento passa por análise. Em dispositivos não cadastrados, o BC impõe limites de R$ 200 por transação e R$ 1.000 por dia.',
  readTime: '6 MIN READ',
  badge: 'BRASIL / VIDA DIGITAL',
  stats: [
    { label: 'REDUZIR LIMITE', value: 'IMEDIATO' },
    { label: 'AUMENTAR', value: '24–48H', note: 'se aprovado pelo banco' },
    { label: 'NOVO DISPOSITIVO', value: 'R$ 200', note: 'por operação sem cadastro; teto diário R$ 1.000' },
  ],
  sections: [
    { title: 'Por que isso é mais importante do que parece', paragraphs: ['Muita gente configura o Pix pensando apenas em conveniência. Só que o limite também define o tamanho máximo de uma transferência autorizada a partir da conta. Se o celular e as credenciais caírem nas mãos erradas, um limite menor reduz o impacto potencial.'], bullets: ['Revise limite diurno e noturno.', 'Crie limite específico para recebedores de confiança quando seu banco oferecer.', 'Remova aparelhos antigos da lista de dispositivos cadastrados.'] },
    { title: 'A lógica de segurança do Banco Central', paragraphs: ['O desenho é deliberadamente assimétrico: reduzir limite é rápido; aumentar exige espera. A fricção existe para impedir que alguém obtenha acesso à conta, eleve o limite e faça uma grande transferência imediatamente.'] },
    { title: 'Checklist de cinco minutos', bullets: ['Abra a área de Pix do banco.', 'Confira limites por período.', 'Revise aparelhos cadastrados.', 'Verifique contas favorecidas com limites especiais.', 'Ative biometria, bloqueio forte de tela e notificações de transação.'] },
  ],
  sources: [
    { label: 'Banco Central · Alteração dos limites Pix · atualizado em 02/01/2026', url: 'https://www.bcb.gov.br/meubc/faqs/p/alteracao-dos-limites-de-valor-nas-transacoes-pix' },
    { label: 'Banco Central · Segurança no Pix', url: 'https://www.bcb.gov.br/estabilidadefinanceira/pix-seguranca' },
  ],
});

Object.assign(dailyContent.politica, {
  title: 'Política útil: se você estiver viajando na eleição, ainda dá tempo de pedir voto em trânsito',
  summary: 'Até 20 de agosto de 2026, eleitoras e eleitores em situação regular podem solicitar voto em trânsito pelo Autoatendimento Eleitoral ou em cartório. O que você consegue votar depende de estar dentro ou fora do seu estado de origem.',
  shareSummary: 'Vai estar fora da sua cidade nas eleições? O voto em trânsito pode ser pedido até 20/08. Se você estiver em outro município do mesmo estado, vota para todos os cargos; em outro estado, apenas para presidente.',
  readTime: '6 MIN READ',
  badge: 'POLÍTICA / SERVIÇO',
  stats: [
    { label: 'PRAZO', value: '20 AGO' },
    { label: 'PEDIDO', value: 'ONLINE', note: 'Autoatendimento Eleitoral ou cartório' },
    { label: 'OUTRO ESTADO', value: 'PRESIDENTE', note: 'apenas esse cargo' },
  ],
  sections: [
    { title: 'Como funciona', paragraphs: ['O voto em trânsito é uma transferência temporária do local de votação. Ele não altera definitivamente seu domicílio eleitoral: vale para o turno solicitado. É necessário estar com a situação eleitoral regular.'] },
    { title: 'A diferença que muda sua urna', bullets: ['Dentro do mesmo estado do seu domicílio eleitoral: presidente, governador, senador, deputado federal e deputado estadual.', 'Em outro estado: apenas presidente da República.', 'Não existe voto em trânsito no exterior.'] },
    { title: 'Um jeito melhor de acompanhar candidatos', paragraphs: ['Na página continuam os trackers de Presidência, Governo de SP e Senado. O ponto novo de hoje é serviço ao eleitor: saber como exercer o voto quando a rotina não coincide com o domicílio eleitoral. Depois do fechamento dos registros, o tracker deve privilegiar dados oficiais do DivulgaCandContas.'] },
  ],
  sources: [
    { label: 'TSE · Voto em trânsito 2026 · perguntas e respostas', url: 'https://www.tse.jus.br/eleicoes/eleicoes-2026-content/voto-em-transito-perguntas-e-respostas' },
    { label: 'TSE · Calendário Eleitoral 2026', url: 'https://www.tse.jus.br/eleicoes/calendario-eleitoral/' },
  ],
});

Object.assign(dailyContent.mundo, {
  title: 'O mapa do risco mundial passa pelo mar — e isso chega ao seu bolso',
  summary: 'Nesta quarta, tensões no Mar Vermelho, a Coreia do Norte e exercícios militares na Ásia lembram uma coisa pouco intuitiva: geopolítica e logística são quase o mesmo assunto quando energia, chips e mercadorias dependem de rotas estreitas.',
  shareSummary: 'Mar Vermelho, Coreia e Taiwan parecem assuntos distantes, mas todos podem afetar comércio. Rotas marítimas concentradas transformam conflitos regionais em seguro mais caro, desvios de navios, frete e pressão sobre energia e eletrônicos.',
  readTime: '8 MIN READ',
  badge: 'GLOBAL / SEA LANES',
  stats: [
    { label: 'MAR VERMELHO', value: 'RISCO ↑', note: 'ataques elevam seguro e desviam tráfego' },
    { label: 'COREIA', value: 'MÍSSIL', note: 'lançamento antes de exercícios aliados' },
    { label: 'TAIWAN', value: 'ROTAS', note: 'cadeias asiáticas dependem do tráfego marítimo' },
  ],
  sections: [
    { title: 'Por que gargalos marítimos importam', paragraphs: ['Navios não atravessam o planeta por uma malha infinita de caminhos equivalentes. Suez, Bab al-Mandeb, Hormuz e estreitos asiáticos concentram fluxos. Quando um trecho fica perigoso, a alternativa pode significar mais distância, combustível, dias de viagem e seguro.'] },
    { title: 'O que aconteceu hoje', paragraphs: ['A Reuters destacou um ataque mortal dos Houthis a um navio egípcio no contexto do Mar Vermelho e um novo lançamento de míssil norte-coreano antes de exercícios militares entre Estados Unidos e Coreia do Sul. São eventos distintos; o elo entre eles é o aumento da percepção de risco sobre rotas, energia e segurança regional.'] },
    { title: 'Como isso pode aparecer na vida comum', bullets: ['Frete internacional e seguro marítimo.', 'Preço de petróleo e derivados.', 'Prazos de componentes eletrônicos e industriais.', 'Volatilidade cambial em momentos de aversão a risco.'], paragraphs: ['“Pode” é a palavra correta: não existe transmissão automática nem imediata para o preço de cada produto no Brasil.'] },
  ],
  sources: [
    { label: 'Reuters · Morning Bid · 12/08/2026', url: 'https://www.reuters.com/world/china/global-markets-view-europe-2026-08-12/' },
    { label: 'Reuters · Coreia do Norte · 12/08/2026', url: 'https://www.reuters.com/world/asia-pacific/north-korea-fires-unidentified-projectile-media-says-2026-08-11/' },
  ],
});

Object.assign(dailyContent.planeta, {
  title: 'A água de um poço pode ter entrado no solo antes de boa parte da história humana',
  summary: 'Água subterrânea não é, em geral, um “rio escondido”. Ela ocupa poros e fraturas de rochas e sedimentos. Como seu movimento pode ser extremamente lento, aquíferos profundos conseguem armazenar água por milhares — ou até centenas de milhares — de anos.',
  shareSummary: 'Aquíferos funcionam mais como uma esponja geológica do que como rios subterrâneos. A USGS explica que a água pode levar dezenas, centenas ou milhares de anos atravessando um aquífero; algumas águas antigas chegam a centenas de milhares de anos.',
  readTime: '8 MIN READ',
  badge: 'PLANET / HIDDEN WATER',
  stats: [
    { label: 'MOVIMENTO RÁPIDO', value: '30 CM/DIA', note: 'aprox.; já é rápido para água subterrânea' },
    { label: 'ÁGUA ANTIGA', value: '>1.000 ANOS' },
    { label: 'DATAÇÃO', value: 'ISÓTOPOS', note: 'C-14, Kr-81 e outros traçadores' },
  ],
  sections: [
    { title: 'O aquífero não é uma piscina gigante', paragraphs: ['A imagem correta é mais parecida com uma esponja: água preenchendo espaços entre grãos de areia, cascalho e fraturas de rocha. Quando esse material armazena e transmite água em quantidade útil, chamamos a formação de aquífero.'] },
    { title: 'Como a água ganha idade', paragraphs: ['A chuva infiltra, alcança a zona saturada e começa uma viagem lenta. Em regiões profundas, áridas ou protegidas por camadas confinantes, a recarga pode ser tão lenta que uma amostra traz água de épocas históricas muito distantes.'] },
    { title: 'Velha não significa automaticamente melhor', paragraphs: ['A idade também muda o tipo de contaminação provável. Água jovem pode refletir pesticidas, nitrato e solventes recentes; água muito antiga passa mais tempo reagindo com minerais e pode acumular elementos naturais.'], bullets: ['Idade ajuda a entender qualidade.', 'Profundidade não garante pureza.', 'Gestão de aquífero precisa considerar o tempo de recarga.'] },
  ],
  sources: [
    { label: 'USGS · Groundwater Age', url: 'https://www.usgs.gov/mission-areas/water-resources/science/groundwater-age' },
    { label: 'USGS · What is groundwater? · atualizado em 20/07/2026', url: 'https://www.usgs.gov/faqs/what-groundwater' },
  ],
});

Object.assign(dailyContent.animais, {
  title: 'Elefantes selvagens parecem usar algo surpreendentemente parecido com nomes',
  summary: 'Um estudo com elefantes-africanos encontrou evidências de chamadas individualmente específicas para o destinatário. Mais interessante: os animais responderam de forma diferente quando ouviram chamadas originalmente dirigidas a eles.',
  shareSummary: 'Pesquisadores encontraram evidências de que elefantes-africanos usam chamadas específicas para determinados indivíduos, semelhantes a “nomes”. Em playback, eles responderam mais às chamadas que haviam sido dirigidas a eles.',
  readTime: '7 MIN READ',
  badge: 'WILDLIFE / COMMUNICATION',
  stats: [
    { label: 'ESPÉCIE', value: 'ELEFANTE-AFRICANO' },
    { label: 'MÉTODO', value: 'ML + PLAYBACK' },
    { label: 'ACHADO', value: 'CHAMADA INDIVIDUAL' },
  ],
  sections: [
    { title: 'O que os pesquisadores testaram', paragraphs: ['O trabalho combinou gravações de vocalizações, análise por machine learning e experimentos de playback em campo. A estrutura acústica continha informação suficiente para prever o receptor da chamada melhor que o acaso.'] },
    { title: 'Por que isso é diferente de simplesmente imitar o outro', paragraphs: ['Golfinhos e alguns papagaios podem usar vocalizações aprendidas associadas a indivíduos. Nos elefantes, a evidência sugere que as chamadas específicas não dependem apenas de copiar o som típico do receptor — uma semelhança intrigante com o princípio de nomes humanos.'] },
    { title: 'O cuidado científico', paragraphs: ['“Elefantes têm nomes exatamente como humanos” seria exagerado. O estudo fala em chamadas “name-like”: um análogo funcional, não uma prova de linguagem humana completa. É justamente essa distinção que torna o achado interessante em vez de sensacionalista.'] },
  ],
  sources: [
    { label: 'Nature Ecology & Evolution · Pardo et al. · 2024', url: 'https://www.nature.com/articles/s41559-024-02420-w' },
  ],
});

Object.assign(dailyContent.tempo, {
  title: 'Existem “rios” invisíveis na atmosfera capazes de transportar água por mais de 1.600 km',
  summary: 'Rios atmosféricos são corredores longos e relativamente estreitos de vapor d’água. Eles podem alimentar chuvas e neve essenciais — ou produzir eventos extremos quando a umidade encontra relevo e sistemas meteorológicos favoráveis.',
  shareSummary: 'Rios atmosféricos são corredores de vapor no céu: costumam ter cerca de 400–600 km de largura e podem passar de 1.600 km de comprimento. Quando chegam à costa e o ar sobe sobre montanhas, parte dessa água cai como chuva ou neve.',
  readTime: '7 MIN READ',
  badge: 'WEATHER / SKY RIVER',
  stats: [
    { label: 'LARGURA', value: '400–600 KM', note: 'faixa aproximada NOAA' },
    { label: 'COMPRIMENTO', value: '>1.600 KM' },
    { label: 'CONTEÚDO', value: 'VAPOR D’ÁGUA' },
  ],
  sections: [
    { title: 'Não é um rio líquido suspenso no céu', paragraphs: ['O nome descreve transporte de vapor. Ventos concentram umidade em uma faixa longa da atmosfera; ao alcançar ar mais frio, frentes ou relevo, esse vapor condensa e precipita.'] },
    { title: 'Por que montanhas mudam tudo', paragraphs: ['Quando o ar úmido é forçado a subir pelo relevo, ele esfria. Isso favorece condensação, chuva e neve. O mesmo corredor de umidade pode ser benéfico para reservatórios e perigoso quando produz precipitação intensa em pouco tempo.'] },
    { title: 'A conexão com previsão do tempo', paragraphs: ['Meteorologistas não observam apenas “chance de chuva”. Eles acompanham de onde vem a umidade, quanto vapor está sendo transportado e como vento, temperatura e relevo vão transformá-lo em precipitação.'] },
  ],
  sources: [
    { label: 'NOAA NESDIS · What Is an Atmospheric River?', url: 'https://www.nesdis.noaa.gov/about/k-12-education/atmosphere/what-atmospheric-river' },
  ],
});

Object.assign(dailyContent.curiosidades, {
  title: 'Por que uma mesa de metal parece mais fria que uma de madeira, mesmo na mesma sala?',
  summary: 'Porque sua pele não mede temperatura como um termômetro. Ela sente a velocidade com que ganha ou perde calor. O metal conduz energia muito mais depressa que a madeira e retira calor da mão mais rapidamente.',
  shareSummary: 'Metal e madeira podem estar exatamente na mesma temperatura ambiente, mas o metal parece mais frio porque conduz calor muito melhor e retira energia da sua mão mais rápido. Seu tato sente fluxo de calor, não apenas “quantos graus” o objeto tem.',
  readTime: '6 MIN READ',
  badge: 'CURIOSITY / PHYSICS',
  stats: [
    { label: 'AÇO', value: '~45,8 W/m·K', note: 'condutividade térmica de referência NIST' },
    { label: 'CARVALHO', value: '~0,17 W/m·K' },
    { label: 'PERCEPÇÃO', value: 'FLUXO DE CALOR' },
  ],
  sections: [
    { title: 'O experimento que você pode fazer em casa', paragraphs: ['Deixe uma colher de metal e um pedaço de madeira na mesma sala por horas. Ambos tendem à mesma temperatura ambiente. Toque nos dois: o metal parece mais frio.'] },
    { title: 'Seu corpo é parte do experimento', paragraphs: ['Sua mão costuma estar mais quente que o objeto. Ao tocar o metal, o calor sai rapidamente da pele porque o material é um bom condutor. Na madeira, a transferência é muito menor; por isso ela parece “mais quente” sem realmente estar a uma temperatura maior.'] },
    { title: 'Onde essa ideia aparece no cotidiano', bullets: ['Panelas usam metal para transportar calor.', 'Cabos usam materiais isolantes para dificultar o fluxo.', 'Pontes térmicas em construções aceleram perdas de calor.', 'A sensação térmica ao toque não substitui uma medição.'] },
  ],
  sources: [
    { label: 'NIST · Fire Dynamics · tabela de condutividade térmica', url: 'https://www.nist.gov/el/fire-research-division-73300/firegov-fire-service/fire-dynamics' },
  ],
});

Object.assign(dailyContent.gravidez, {
  title: '5 semanas + 3 dias: o desenvolvimento está acontecendo antes de qualquer barriga aparecer',
  summary: 'Nesta fase, multiplicação celular e organização embrionária avançam rapidamente. Um ponto particularmente importante é o desenvolvimento muito precoce do tubo neural — estrutura que dará origem ao cérebro e à medula espinhal.',
  shareSummary: 'Com 5 semanas + 3 dias, muita coisa acontece em escala microscópica. O tubo neural, que dará origem ao cérebro e à medula, se forma e fecha muito cedo; por isso o acompanhamento pré-natal e a orientação sobre folato/ácido fólico são importantes desde o início.',
  readTime: '8 MIN READ',
  badge: 'BABY MISSION / 5S3D',
  stats: [
    { label: 'IDADE', value: '5S + 3D' },
    { label: 'DPP', value: '11/04/2027' },
    { label: 'FOCO DO DIA', value: 'TUBO NEURAL' },
  ],
  sections: [
    { title: 'Por que o começo é tão intenso', paragraphs: ['O embrião ainda é minúsculo, mas o plano básico do corpo está sendo organizado. É uma fase em que estruturas precursoras do sistema nervoso, coração e outros órgãos estão em formação. Tamanho pequeno não significa pouca atividade biológica.'] },
    { title: 'Folato e ácido fólico: relacionados, mas não idênticos', paragraphs: ['Folato é o nome geral para formas da vitamina B9; ácido fólico é a forma usada em suplementos e alimentos fortificados. O CDC destaca que ácido fólico em quantidade adequada antes e no início da gestação ajuda a prevenir defeitos do tubo neural.'], bullets: ['Alimentação variada continua importante.', 'Suplementação deve seguir o pré-natal e a orientação profissional.', 'Não aumente doses por conta própria com base em conteúdo da internet.'] },
    { title: 'O que vale fazer hoje', bullets: ['Organizar a primeira consulta ou próximos exames conforme orientação do obstetra.', 'Anotar medicamentos, suplementos e dúvidas para revisão clínica.', 'Priorizar alimentos seguros e bem higienizados.', 'Evitar álcool durante a gestação.'] },
  ],
  sources: [
    { label: 'CDC · Folic Acid: Sources and Recommended Intake · 02/06/2026', url: 'https://www.cdc.gov/folic-acid/about/intake-and-sources.html' },
    { label: 'CDC · Neural Tube Defects', url: 'https://www.cdc.gov/birth-defects/about/neural-tube-defects.html' },
  ],
  disclaimer: 'Conteúdo educativo. Suplementação, sintomas, exames e condutas devem seguir o obstetra e a equipe de pré-natal.',
});

Object.assign(dailyContent.pai, {
  title: 'Missão de hoje: transforme o pré-natal em memória compartilhada, não em improviso',
  summary: 'Uma forma simples de participar da gestação é criar um registro conjunto: datas, exames, dúvidas, orientações, sintomas relevantes e decisões. Isso reduz a carga mental de depender de uma única pessoa para lembrar de tudo.',
  shareSummary: 'Dica de paternidade de hoje: crie um caderno compartilhado do pré-natal. Coloque consultas, exames, dúvidas, orientações e tarefas. Participar não é só estar presente no consultório; é ajudar a carregar a memória e a organização da gestação.',
  readTime: '7 MIN READ',
  badge: 'FATHER MISSION',
  stats: [
    { label: 'MISSÃO', value: 'REGISTRAR' },
    { label: 'TEMPO', value: '10 MIN' },
    { label: 'OBJETIVO', value: 'CARGA COMPARTILHADA' },
  ],
  sections: [
    { title: 'O que colocar no caderno', bullets: ['Próximas consultas e exames.', 'Perguntas para o obstetra.', 'Medicamentos e suplementos em uso.', 'Orientações recebidas.', 'Pendências práticas da casa e da gestação.'] },
    { title: 'Por que isso é paternidade e não secretariado', paragraphs: ['A lógica não é “anotar para ela”. É construir uma memória compartilhada da família. Quando dois adultos conhecem o plano, a gestante deixa de ser a única pessoa responsável por lembrar cada detalhe.'] },
    { title: 'Uma regra útil', paragraphs: ['Pergunte “o que podemos tirar da sua cabeça hoje?” em vez de apenas “precisa de ajuda?”. A primeira pergunta convida a identificar carga mental; a segunda muitas vezes devolve à própria pessoa o trabalho de delegar.'] },
  ],
  sources: [
    { label: 'UNICEF Parenting · relação entre pai e bebê', url: 'https://www.unicef.org/parenting/child-care/relationship-between-father-and-baby' },
  ],
  disclaimer: 'Não existe fórmula para ser “o melhor pai”. A proposta é construir presença, responsabilidade, segurança e vínculo com atitudes consistentes.',
});

Object.assign(dailyContent.carros, {
  title: 'Radar R$ 30–60 mil: Toyota Etios Sedan 2017 — a compra “sem glamour” que pode fazer sentido',
  summary: 'O Etios Sedan X 1.5 manual 2017 aparece com FIPE de R$ 52.378 e média Webmotors de R$ 55.332,86 em julho de 2026. É um ótimo exemplo de como compra racional exige olhar versão, histórico e custo futuro — não só aparência.',
  shareSummary: 'Radar de usados: Toyota Etios Sedan X 1.5 manual 2017. FIPE jul/2026: R$ 52.378; média Webmotors: R$ 55.332,86. Para um carro de 9 anos, algo perto de 90–135 mil km é compatível com 10–15 mil km/ano, mas histórico e estado valem mais que o hodômetro.',
  readTime: '9 MIN READ',
  badge: 'USED CAR / R$ 30–60K',
  stats: [
    { label: 'FIPE JUL/26', value: 'R$ 52.378' },
    { label: 'WEBMOTORS', value: 'R$ 55.333', note: 'média nacional arredondada' },
    { label: 'ANO', value: '2017' },
  ],
  sections: [
    { title: 'Quilometragem: use como contexto, não como sentença', paragraphs: ['Em nove anos, uma referência de 10–15 mil km anuais produziria algo em torno de 90–135 mil km. Um exemplar com 120 mil km e manutenção documentada pode ser uma compra melhor que um “70 mil km” sem histórico confiável.'] },
    { title: 'Checklist antes de decidir', bullets: ['Laudo cautelar para estrutura e histórico.', 'Inspeção mecânica independente.', 'Partida totalmente fria.', 'Arrefecimento e sinais de vazamento.', 'Embreagem e engates na versão manual.', 'Suspensão, pneus e alinhamento.', 'Notas/ordens de serviço quando disponíveis.'] },
    { title: 'O custo que não aparece no anúncio', paragraphs: ['Reserve verba para transferência, revisão inicial, fluidos, pneus ou bateria caso estejam no fim de vida. Comprar no limite do orçamento e ficar sem margem para colocar o carro em dia é um dos erros mais comuns em usados.'] },
  ],
  sources: [
    { label: 'Webmotors/FIPE · Etios X Sedan 1.5 Manual 2017 · jul/2026', url: 'https://www.webmotors.com.br/tabela-fipe/carros/toyota/etios/2017/15-x-sedan-16v-flex-4p-manual' },
  ],
  disclaimer: 'Preços são referências de mercado e variam por estado, conservação, histórico, opcionais e negociação. Sempre faça inspeção independente.',
});

Object.assign(dailyContent.motos, {
  title: 'Usada do dia: Honda XRE 300 2017 — trail precisa ser avaliada como trail',
  summary: 'A XRE 300 2017 aparece com FIPE de R$ 20.037 e média Webmotors de R$ 21.920,53 em julho de 2026. Em uma moto desse tipo, sinais de uso fora do asfalto, quedas e manutenção de suspensão importam tanto quanto motor e quilometragem.',
  shareSummary: 'Honda XRE 300 2017: FIPE jul/2026 de R$ 20.037 e média Webmotors de R$ 21.920,53. Em trail usada, olhe bengalas, rodas, mesa/direção, balança, relação, quadro, sinais de queda e partida fria — não só km.',
  readTime: '8 MIN READ',
  badge: 'USED MOTO / TRAIL',
  stats: [
    { label: 'FIPE JUL/26', value: 'R$ 20.037' },
    { label: 'WEBMOTORS', value: 'R$ 21.921', note: 'média nacional arredondada' },
    { label: 'ANÚNCIOS', value: 'R$ 15,5–26 mil', note: 'faixa observada na página consultada' },
  ],
  sections: [
    { title: 'O que uma trail revela no corpo', paragraphs: ['Uma moto usada em terra pode apresentar marcas coerentes com a proposta sem estar mal cuidada. O ponto é distinguir desgaste normal de dano estrutural: guidão desalinhado, mesa, bengalas, rodas, pedaleiras, balança e pontos do quadro contam a história.'] },
    { title: 'Teste de compra', bullets: ['Veja a moto totalmente fria antes da partida.', 'Procure vazamentos em bengalas e motor.', 'Cheque folga da caixa de direção e rolamentos.', 'Observe disco/pastilha e funcionamento do ABS quando equipado.', 'Avalie kit relação e desgaste irregular dos pneus.', 'Compare numeração e documentação.'] },
    { title: 'Km não anda sozinho', paragraphs: ['Uma moto de estrada pode acumular bastante quilometragem com desgaste previsível; uma de uso urbano severo pode ter menos km e mais ciclos de partida, embreagem e freio. O histórico de manutenção dá contexto ao número do painel.'] },
  ],
  sources: [
    { label: 'Webmotors/FIPE · Honda XRE 300 2017 · jul/2026', url: 'https://www.webmotors.com.br/tabela-fipe/motos/honda/xre-300/2017' },
  ],
  disclaimer: 'Valores são referências de julho/2026 e variam por versão, estado e conservação.',
});

Object.assign(dailyContent.mecanica, {
  title: '“Tira a válvula termostática que para de ferver”: por que essa gambiarra erra o princípio do sistema',
  summary: 'O termostato não existe para atrapalhar a circulação. Ele encurta o aquecimento e depois regula o fluxo para manter o motor na faixa de trabalho. Um motor operando frio demais também trabalha fora do projeto.',
  shareSummary: 'Válvula termostática não é um obstáculo inútil: ela ajuda o motor a aquecer rápido e manter a temperatura correta. Se o carro está superaquecendo, o diagnóstico deve verificar sensor, fluxo de ar, ventoinha, termostato, radiador, bomba e tampa — não simplesmente remover a válvula.',
  readTime: '9 MIN READ',
  badge: 'MECHANIC LAB / COOLING',
  stats: [
    { label: 'TERMOSTATO', value: 'CONTROLA FLUXO' },
    { label: 'CIRCUITO', value: 'PRESSURIZADO' },
    { label: 'DIAGNÓSTICO', value: 'POR ETAPAS' },
  ],
  sections: [
    { title: 'O que o termostato faz enquanto o motor está frio', paragraphs: ['Antes da temperatura de operação, o líquido circula por um caminho curto. Isso reduz o tempo de aquecimento. Ao atingir a faixa prevista pelo projeto, o termostato abre a passagem pelo radiador e passa a regular a dissipação de calor.'] },
    { title: 'Se está esquentando, comece provando o problema', bullets: ['A temperatura indicada é real? Compare sensor/dado de scanner quando aplicável.', 'Há fluxo de ar no radiador?', 'Ventoinha entra no ponto correto?', 'O termostato abre?', 'O radiador tem diferença coerente de temperatura entre entrada e saída?', 'A bomba está movimentando o líquido?', 'A tampa mantém a pressão especificada?'] },
    { title: 'Por que retirar peça pode mascarar e criar outros sintomas', paragraphs: ['Sem regulação, o motor pode demorar a chegar à temperatura projetada. Isso interfere em consumo, emissões, aquecimento interno e estratégias da ECU. Se existe superaquecimento, o objetivo é encontrar a causa — não apagar a função de controle.'] },
  ],
  sources: [
    { label: 'HELLA TechWorld · Arrefecimento do motor', url: 'https://www.hella.com/techworld/pt/tecnica/arrefecimento/arrefecimento-do-motor/' },
    { label: 'HELLA · Cooling system check', url: 'https://www.hella.com/techworld/ae/technical/car-cooling-system/cooling-system-check/' },
  ],
});

Object.assign(dailyContent.nautica, {
  title: 'Navegação segura começa no papel — ou na tela — antes de o barco sair da marina',
  summary: 'A Marinha destaca planejamento, cartas, avisos aos navegantes, rádio, marés e meteorologia como elementos centrais de um passeio seguro. Celular com sinal não deve ser tratado como plano de comunicação marítima.',
  shareSummary: 'Dica náutica: antes de sair, planeje rota, meteorologia, maré, pontos de abrigo, combustível, cartas e comunicação. A Marinha lembra que boa parte da navegação ocorre fora da cobertura celular; VHF e material de salvatagem fazem parte do plano.',
  readTime: '9 MIN READ',
  badge: 'NAUTICAL / PASSAGE PLAN',
  stats: [
    { label: 'PLANO', value: 'ANTES DE SAIR' },
    { label: 'COMUNICAÇÃO', value: 'VHF', note: 'não dependa só do celular' },
    { label: 'APP MARINHA', value: 'NAVSEG' },
  ],
  sections: [
    { title: 'O que um plano de navegação precisa responder', bullets: ['De onde saio e onde pretendo chegar?', 'Quais pontos notáveis confirmam minha posição?', 'Qual a previsão meteorológica e de maré?', 'Quais áreas rasas, restritas ou perigosas existem?', 'Onde posso abrigar ou abortar o passeio?', 'Como peço ajuda se o celular não funcionar?'] },
    { title: 'O barco também precisa estar pronto', paragraphs: ['Estado de conservação, lotação, combustível, bateria, motor, itens de primeiros socorros e equipamentos de salvatagem devem ser compatíveis com a navegação planejada. Coletes precisam ter tamanho adequado para as pessoas embarcadas.'] },
    { title: 'Navegar é controlar incerteza', paragraphs: ['O plano não serve para obrigar você a seguir a rota a qualquer custo. Serve para reconhecer cedo quando vento, visibilidade, maré, combustível ou condição do barco mudaram o suficiente para exigir retorno ou alternativa.'] },
  ],
  sources: [
    { label: 'Marinha do Brasil / DPC · Navegador Amador · atualizado 21/07/2026', url: 'https://www.marinha.mil.br/dpc/navegador-amador' },
    { label: 'Marinha do Brasil / DPC · Para quem já possui habilitação', url: 'https://www.marinha.mil.br/dpc/node/3532' },
  ],
  disclaimer: 'Navegação deve respeitar habilitação, classificação da embarcação, normas da Autoridade Marítima e condições reais de segurança.',
});

Object.assign(dailyContent.viagens, {
  title: 'Paranapiacaba: um dia de ferrovia, história inglesa e Mata Atlântica sem precisar pegar avião',
  summary: 'O Expresso Turístico da CPTM sai da Luz às 8h30 e retorna do destino às 16h30. A tarifa atual publicada é R$ 50 ida e volta para um passageiro. A vila histórica, em Santo André, preserva uma das paisagens ferroviárias mais marcantes de São Paulo.',
  shareSummary: 'Bate-volta perto de SP: Paranapiacaba. O Expresso Turístico sai da Luz às 8h30 e volta às 16h30; tarifa publicada: R$ 50 ida e volta por passageiro. A vila mistura arquitetura ferroviária, museus, trilhas e Mata Atlântica.',
  readTime: '9 MIN READ',
  badge: 'TRIP FILE / SP',
  stats: [
    { label: 'TREM', value: 'R$ 50', note: 'ida e volta / 1 passageiro' },
    { label: 'PARTIDA', value: '08:30', note: 'Estação da Luz' },
    { label: 'RETORNO', value: '16:30' },
  ],
  sections: [
    { title: 'Por que vale ir pelo trem', paragraphs: ['O transporte já faz parte do passeio: locomotiva a diesel e carros históricos criam contexto para uma vila cuja identidade está ligada à expansão ferroviária do século XIX. O destino deixa de ser só “um lugar bonito” e vira continuação da própria viagem.'] },
    { title: 'O que encaixar em um dia', bullets: ['Centro histórico e arquitetura ferroviária.', 'Museu do Castelinho e Casa da Memória, conforme funcionamento.', 'Parque Natural Municipal Nascentes de Paranapiacaba e trilhas compatíveis com tempo e preparo.', 'Almoço e tempo para caminhar sem transformar o passeio em maratona.'] },
    { title: 'Um patrimônio que está recebendo investimento', paragraphs: ['Em junho de 2026, o Iphan anunciou R$ 11,4 milhões para restauração de 34 imóveis históricos. Isso mostra que a vila não é um cenário congelado: preservação exige obra, uso, moradores e financiamento contínuos.'] },
  ],
  sources: [
    { label: 'CPTM · Expresso Turístico · ingressos e horários', url: 'https://www.cptm.sp.gov.br/cptm/sua-viagem/expresso-turistico/ingressos/' },
    { label: 'CPTM · Paranapiacaba', url: 'https://www.cptm.sp.gov.br/cptm/sua-viagem/expresso-turistico/trajetos/paranapiacaba/' },
    { label: 'Iphan · investimentos em Paranapiacaba · 19/06/2026', url: 'https://www.gov.br/iphan/pt-br/assuntos/noticias/iphan-anuncia-r-11-4-milhoes-para-restauracao-de-34-imoveis-em-paranapiacaba-e-lanca-livro-sobre-intervencoes-na-vila' },
  ],
  disclaimer: 'Horários, tarifas, disponibilidade de ingressos, funcionamento de atrações e condições de trilhas devem ser conferidos antes da viagem.',
});

Object.assign(dailyContent.financas, {
  title: 'A parcela é o que cabe no mês; o CET é o que o crédito realmente custa',
  summary: 'Duas propostas podem mostrar taxas parecidas — ou uma parcela menor — e ainda assim ter custos muito diferentes. O Custo Efetivo Total reúne juros, tarifas, impostos e demais despesas para permitir comparação real.',
  shareSummary: 'Dica financeira: ao comparar empréstimo ou financiamento, não olhe só a parcela nem a taxa nominal. Peça o CET. Ele reúne juros, tarifas, impostos e outros custos e deve ser informado pela instituição.',
  readTime: '8 MIN READ',
  badge: 'MONEY / CREDIT',
  stats: [
    { label: 'COMPARE', value: 'CET' },
    { label: 'INCLUI', value: 'JUROS + CUSTOS' },
    { label: 'PARCELA', value: 'NÃO BASTA' },
  ],
  sections: [
    { title: 'Um exemplo simples', paragraphs: ['Imagine R$ 20 mil de crédito. Oferta A: 24 parcelas de R$ 1.050 = R$ 25.200. Oferta B: 36 parcelas de R$ 780 = R$ 28.080. A segunda “cabe melhor” no mês, mas custa R$ 2.880 a mais no total. É um exemplo ilustrativo, não uma cotação.'] },
    { title: 'Por que a taxa anunciada pode enganar', paragraphs: ['Além dos juros, podem existir tarifas, tributos, seguros ou outros custos ligados à operação. O CET transforma esses elementos em uma medida padronizada para comparação.'] },
    { title: 'Perguntas antes de assinar', bullets: ['Qual é o CET anual?', 'Qual é o total pago ao fim do contrato?', 'Existe seguro ou serviço embutido?', 'Há custo para antecipar ou quitar?', 'O orçamento continua saudável se surgir uma emergência?'] },
  ],
  sources: [
    { label: 'Banco Central · Cuidados ao contratar crédito', url: 'https://www.bcb.gov.br/meubc/faqs/p/cuidados-na-hora-de-contratar-uma-operacao-de-credito' },
    { label: 'CMN · Resolução 4.881 · cálculo e informação do CET', url: 'https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?numero=4881&tipo=Resolu%C3%A7%C3%A3o+CMN' },
  ],
});

Object.assign(dailyContent.tecnologia, {
  title: 'A Coreia do Sul está apostando que a próxima corrida tecnológica será maior que “só IA”',
  summary: 'O governo sul-coreano apresentou hoje o programa Seven Major SEED: Lua em 2030, processador quântico de 100 qubits em 2029, reatores modulares, fusão, biotecnologia, interfaces cérebro-computador e cadeia de minerais críticos.',
  shareSummary: 'A Coreia do Sul lançou hoje o plano Seven Major SEED: pouso lunar em 2030, processador quântico de 100 qubits em 2029, SMRs em 2035, BCI comercial em 2035 e investimentos em minerais críticos. A mensagem: tecnologia estratégica agora mistura software, energia, espaço, biologia e indústria.',
  readTime: '8 MIN READ',
  badge: 'TECH / NATIONAL STACK',
  stats: [
    { label: 'LUA', value: '2030' },
    { label: 'QUANTUM', value: '100 QUBITS', note: 'meta para 2029' },
    { label: 'BCI', value: '2035', note: 'meta de comercialização' },
  ],
  sections: [
    { title: 'Por que esse plano é interessante', paragraphs: ['Ele trata tecnologia como um “stack nacional”. Não basta ter modelos de IA se o país depende de energia, minerais, chips, comunicação orbital e laboratórios de terceiros. A política tecnológica passa a cuidar das dependências físicas que sustentam o software.'] },
    { title: 'As sete sementes não amadurecem no mesmo ritmo', paragraphs: ['Pouso lunar, computação quântica tolerante a erro, fusão e interfaces cérebro-computador têm níveis de maturidade muito diferentes. As datas divulgadas são metas governamentais, não garantias de entrega.'] },
    { title: 'A conexão menos óbvia: supply chain', bullets: ['Quantum precisa de manufatura sofisticada.', 'SMRs e energia precisam de materiais e regulação.', 'Espaço exige lançamento, comunicação e componentes.', 'IA e biotecnologia precisam de compute e dados.', 'Minerais críticos atravessam quase todas essas áreas.'] },
  ],
  sources: [
    { label: 'Reuters · South Korea Seven Major SEED · 12/08/2026', url: 'https://www.reuters.com/world/asia-pacific/south-korea-unveils-future-technology-projects-targets-moon-landing-by-2030-2026-08-12/' },
  ],
});

Object.assign(dailyContent.seguranca, {
  title: 'Golden SAML: quando roubar a chave de assinatura é mais poderoso que roubar a senha do administrador',
  summary: 'Mandiant detalhou uma técnica para recuperar a chave ativa de assinatura de ADFS protegida por Machine DPAPI. Com essa chave, um atacante suficientemente privilegiado no servidor pode forjar assertions SAML e se passar por usuários em aplicações federadas.',
  shareSummary: 'Cyber do dia: Mandiant mostrou como uma chave de assinatura ADFS recuperada via Machine DPAPI pode permitir Golden SAML. O risco é enorme porque a assertion forjada pode ser aceita como identidade legítima e contornar MFA. ADFS deve ser tratado como Tier 0.',
  readTime: '11 MIN READ',
  badge: 'IDENTITY / TIER 0',
  stats: [
    { label: 'ALVO', value: 'ADFS' },
    { label: 'TÉCNICA', value: 'GOLDEN SAML' },
    { label: 'CHAVE', value: 'MACHINE DPAPI' },
  ],
  sections: [
    { title: 'Por que a chave muda o jogo', paragraphs: ['Em federação SAML, o serviço confia na assinatura criptográfica do emissor. Se o atacante obtém a chave privada legítima, ele pode fabricar uma assertion que parece ter sido emitida pelo ADFS confiável. Isso desloca o problema de “roubar credencial” para “roubar autoridade de emissão”.'] },
    { title: 'O pré-requisito é importante', paragraphs: ['Isso não é um ataque remoto trivial. A pesquisa envolve acesso altamente privilegiado ao host ADFS e material criptográfico da máquina. O valor defensivo está em reconhecer que uma invasão desse servidor deve ser tratada como comprometimento de identidade de altíssimo impacto.'] },
    { title: 'Detecção e resposta', bullets: ['Trate ADFS como Tier 0.', 'Audite acesso a MachineKeys e material DPAPI.', 'Correlacione emissão ADFS com sign-ins no provedor federado.', 'Investigue Event ID 385 em ambientes com rotação manual.', 'Após suspeita de SYSTEM no ADFS, considere a chave de assinatura comprometida e faça rotação/validação completa.'] },
  ],
  sources: [
    { label: 'Mandiant / Google Cloud · The Ghost in the Database · 07/07/2026', url: 'https://cloud.google.com/blog/topics/threat-intelligence/recovering-active-adfs-signing-keys-machine-dpapi' },
  ],
});

Object.assign(dailyContent['appsec-ssdlc'], {
  title: 'CVE-2026-20262: por que um CVSS 6.5 explorado pode furar a fila de um Critical parado',
  summary: 'A Cisco confirmou exploração limitada de uma falha de escrita arbitrária de arquivos no Catalyst SD-WAN Manager. O atacante precisa de credencial com permissão de escrita, mas uma requisição HTTP especialmente criada pode sobrescrever arquivos no sistema e servir de etapa para privilégio elevado.',
  shareSummary: 'AppSec do dia: CVE-2026-20262 tem CVSS 6.5, mas a Cisco confirmou exploração limitada. A falha permite a usuário autenticado com write access criar/sobrescrever arquivos no SD-WAN Manager; não há workaround. Contexto de exploração e criticidade do control plane valem mais que a cor “Medium”.',
  readTime: '10 MIN READ',
  badge: 'APPSEC / RISK CONTEXT',
  stats: [
    { label: 'CVE', value: '2026-20262' },
    { label: 'CVSS', value: '6.5' },
    { label: 'EXPLOITAÇÃO', value: 'LIMITADA', note: 'confirmada pela Cisco' },
  ],
  sections: [
    { title: 'O bug em linguagem de aplicação', paragraphs: ['A web UI/API não valida adequadamente input durante upload. Um usuário autenticado com acesso de escrita pode enviar uma requisição HTTP criada para fazer o sistema gravar ou sobrescrever arquivo no filesystem. A própria Cisco observa que esse arquivo pode depois ser usado para elevar privilégio.'] },
    { title: 'O que muda na priorização', paragraphs: ['Se você ordenar backlog apenas por CVSS, um 6.5 pode ficar atrás de dezenas de 9.x. Aqui há sinais adicionais: exploração observada, control plane de rede, potencial de escrita no sistema operacional e ausência de workaround. Isso aumenta a urgência operacional.'] },
    { title: 'Como traduzir isso para um programa de AppSec', bullets: ['Enriquecer finding com exploração conhecida.', 'Associar criticidade e função do ativo.', 'Distinguir vulnerabilidade autenticada de exposição real das credenciais.', 'Registrar existência de workaround.', 'Medir caminho até privilégio maior e blast radius.', 'Não bloquear deploy apenas pela severidade numérica; bloquear por risco contextual quando houver evidência.'] },
  ],
  sources: [
    { label: 'Cisco PSIRT · CVE-2026-20262 · atualizado 15/06/2026', url: 'https://www.cisco.com/c/en/us/support/docs/csa/cisco-sa-sdwan-arbfw-c2rZvQ.html' },
  ],
});
