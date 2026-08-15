import { dailyContent, edition, todayDrops } from './daily-content';
import { wordOfDay, upcomingWords } from './word-of-day';
import { regionalWords } from './regional-vocabulary';
import { rockTracks, caipiraTracks } from './music-content';

Object.assign(edition, {
  date: '15/08/2026',
  dateLabel: '15 AGO 2026',
  title: 'Daily Intelligence · 15 de agosto',
});

todayDrops.splice(0, todayDrops.length,
  { slug: 'brasil', label: 'Brasil', emoji: '🇧🇷', title: 'ECA Digital entra na fase de adaptação e monitoramento', detail: 'Agosto abre uma etapa prática de aferição de idade e proteção de crianças e adolescentes em serviços digitais.' },
  { slug: 'politica', label: 'Política', emoji: '🏛️', title: 'Hoje, 19h: fecha o prazo de registro das candidaturas', detail: 'O protocolo fecha hoje; a análise jurídica continua. Amanhã começa a propaganda eleitoral geral, inclusive na internet.' },
  { slug: 'mundo', label: 'Mundo', emoji: '🌾', title: 'Comida volta ao radar global de inflação', detail: 'El Niño forte, energia cara, fertilizantes e disrupções no transporte de grãos formam um risco conjunto para os próximos meses.' },
  { slug: 'planeta', label: 'Planeta', emoji: '🏞️', title: 'Como uma curva de rio pode virar um lago isolado', detail: 'Erosão por fora da curva e deposição por dentro fazem meandros migrarem até o rio abrir um atalho e deixar um lago em ferradura.' },
  { slug: 'animais', label: 'Mundo Animal', emoji: '🦦', title: 'Ferramentas não são exclusividade de primatas', detail: 'Animais resolvem problemas físicos usando objetos; o ponto interessante é separar uso oportunista de comportamento aprendido e repetido.' },
  { slug: 'tempo', label: 'Tempo e Clima', emoji: '🌥️', title: 'Sábado nublado em SP; domingo abre caminho para aquecimento e ar mais seco', detail: 'A frente fria ainda deixa muitas nuvens e chance de chuvisco hoje; amanhã o sistema se afasta e começa uma sequência mais quente.' },
  { slug: 'curiosidades', label: 'Curiosidades', emoji: '🌧️', title: 'O cheiro de chuva vem do solo, não da água', detail: 'Petrichor envolve compostos acumulados no período seco e geosmina produzida por microrganismos do solo, lançados ao ar pelas gotas.' },
  { slug: 'musica', label: 'Música', emoji: '🎵', title: 'Chris Cornell no rock; Tião Carreiro na viola', detail: 'Fell on Black Days é o drop de rock; Pagode em Brasília assume a trilha caipira sem mexer no Top 5 histórico.' },
  { slug: 'gravidez', label: 'Gravidez', emoji: '🤰', title: '5 semanas + 6 dias: amanhã começa a semana 6', detail: 'O embrião muda rápido nesta transição; ultrassom muito precoce precisa ser interpretado pela idade gestacional e contexto clínico.' },
  { slug: 'pai', label: 'Ser Pai', emoji: '👨‍🍼', title: 'Missão: transformar dúvidas soltas em perguntas para o pré-natal', detail: 'Uma lista compartilhada de sintomas, medicamentos, exames e perguntas evita esquecer o que importa na consulta.' },
  { slug: 'carros', label: 'Carros', emoji: '🚘', title: 'Usado do dia: Honda City DX manual 2015', detail: 'FIPE de julho em R$ 62.047; o valor pede atenção a histórico, embreagem, suspensão e manutenção documentada.' },
  { slug: 'motos', label: 'Motos', emoji: '🏍️', title: 'Usada do dia: Yamaha FZ25 ABS 2018', detail: 'FIPE de R$ 16.800 e média Webmotors de R$ 18,5 mil em julho; ABS e ciclística não substituem uma inspeção de queda e manutenção.' },
  { slug: 'mecanica', label: 'Mecânica', emoji: '🛑', title: 'Fluido de freio envelhece mesmo sem “baixar”', detail: 'Ele absorve umidade ao longo do tempo, reduz margem contra fervura e pode corroer componentes; aparência no reservatório não conta tudo.' },
  { slug: 'nautica', label: 'Náutica', emoji: '📻', title: 'VHF marítimo: por que o canal 16 não é um grupo de conversa', detail: 'Escuta, chamada e emergência exigem disciplina; comunicação curta e posição clara fazem diferença quando cada segundo importa.' },
  { slug: 'viagens', label: 'Viagens', emoji: '⛪', title: 'Tiradentes: um fim de semana de história, arquitetura e comida mineira', detail: 'Centro histórico, Museu de Sant’Ana e igrejas cabem em um roteiro a pé; de São Paulo são cerca de 483 km por estrada.' },
  { slug: 'financas', label: 'Finanças', emoji: '🛒', title: 'Inflação de alimentos pode voltar antes de aparecer no índice cheio', detail: 'Clima, energia, fertilizante e frete entram em momentos diferentes; orçamento doméstico sente primeiro em itens específicos.' },
  { slug: 'tecnologia', label: 'Tecnologia', emoji: '🔋', title: 'Baterias de sódio: por que “menos densidade” ainda pode ser uma vantagem', detail: 'Sódio é abundante e pode fazer sentido onde custo, segurança e cadeia de suprimento pesam mais que autonomia máxima.' },
  { slug: 'seguranca', label: 'Cyber', emoji: '🛡️', title: 'Supply chain mira a automação: workflow malicioso pode virar roubo de credencial', detail: 'GitHub passou a segurar certos workflows suspeitos para aprovação; o ataque moderno tenta transformar CI em vetor de propagação.' },
  { slug: 'appsec-ssdlc', label: 'AppSec', emoji: '🧬', title: 'Pwn request: quando um PR de fork executa código com confiança demais', detail: 'pull_request_target, checkout de código não confiável e segredos no mesmo job formam uma combinação perigosa; defaults mais seguros já mudaram em 2026.' },
);

Object.assign(dailyContent.hoje, {
  title: '18 leituras novas para sábado, 15 de agosto',
  summary: 'A edição de hoje renova todas as áreas: proteção digital no Brasil, fechamento do registro eleitoral, risco de inflação de alimentos, ciência, música, família, usados, mecânica, viagem, tecnologia e segurança de CI/CD.',
  readTime: '18 MISSÕES',
  badge: '05H BASE EDITION',
  sections: [],
});

Object.assign(dailyContent.brasil, {
  title: 'ECA Digital entra na fase de adaptação: aferição de idade deixa de ser apenas debate regulatório',
  summary: 'A ANPD prevê de agosto a novembro de 2026 um período de adaptação e monitoramento para soluções de aferição de idade no ambiente digital. A lógica não é exigir o mesmo mecanismo de todo serviço, mas vincular proteção ao risco e reduzir exposição inadequada de crianças e adolescentes.',
  shareSummary: 'Agosto marca uma fase prática do ECA Digital: plataformas e serviços digitais entram em período de adaptação e monitoramento de soluções de aferição de idade. Para famílias, a mudança importa porque controles de idade e supervisão tendem a virar parte mais visível do design do produto.',
  readTime: '8 MIN READ', badge: 'BRASIL / DIREITOS DIGITAIS',
  stats: [{ label: 'FASE', value: 'AGO–NOV/26' }, { label: 'FOCO', value: 'AFERIÇÃO DE IDADE' }, { label: 'REGULADOR', value: 'ANPD' }],
  sections: [
    { title: 'O que muda agora', paragraphs: ['A etapa iniciada em agosto é de adaptação e monitoramento. Isso significa observar como fornecedores implementam mecanismos de verificação ou estimativa de idade e se o desenho é proporcional ao risco do serviço.'] },
    { title: 'Por que isso é difícil', bullets: ['Coletar documento demais cria novo risco de privacidade.', 'Autodeclaração simples pode ser fraca para serviços de maior risco.', 'Idade aproximada e supervisão parental podem ser alternativas dependendo do contexto.', 'A solução precisa proteger menores sem transformar todos os usuários em um banco de documentos.'] },
    { title: 'Aplicação no dia a dia', paragraphs: ['Ao configurar contas de crianças e adolescentes, vale revisar idade informada, controles parentais, permissões de compra e privacidade. Para adultos, desconfie de sites que pedem documento sem explicar finalidade, retenção e proteção.'] },
  ],
  sources: [{ label: 'ANPD · ECA Digital', url: 'https://www.gov.br/anpd/pt-br/assuntos/eca-digital/' }],
});

Object.assign(dailyContent.politica, {
  title: 'Eleições 2026: hoje às 19h termina o prazo para os pedidos de registro',
  summary: '15 de agosto é o último dia para partidos, federações e coligações requererem o registro das candidaturas. O marco fecha o protocolo, não o julgamento: a Justiça Eleitoral continua analisando documentação e condições de elegibilidade. Amanhã, 16 de agosto, começa a propaganda eleitoral geral.',
  shareSummary: 'Hoje, 15/08, às 19h termina o prazo legal de registro das candidaturas. Pedido protocolado ainda não é registro deferido. Amanhã começa a propaganda eleitoral geral, inclusive na internet.',
  readTime: '8 MIN READ', badge: 'POLÍTICA / PRAZO HOJE',
  stats: [{ label: 'REGISTRO', value: 'HOJE · 19H' }, { label: 'PROPAGANDA', value: '16 AGO' }, { label: 'SISTEMA', value: 'CANDEX ONLINE' }],
  sections: [
    { title: 'O que fecha às 19h', paragraphs: ['Termina o prazo para apresentar os pedidos aos tribunais competentes. Presidência vai ao TSE; cargos estaduais e federais passam pelos TREs conforme a legislação eleitoral.'] },
    { title: 'O que não fecha', paragraphs: ['Impugnações, diligências e julgamentos continuam. Por isso, um tracker responsável precisa mostrar status processual e data da consulta, sem chamar todo nome protocolado de “candidatura definitivamente aceita”.'] },
    { title: 'A virada de amanhã', paragraphs: ['A partir de 16 de agosto a propaganda eleitoral geral passa a ser permitida, inclusive na internet. Isso aumenta o volume de anúncios, cortes, impulsionamento e mensagens políticas; fonte, autoria e contexto ficam ainda mais importantes.'] },
  ],
  sources: [{ label: 'TSE · Calendário Eleitoral 2026', url: 'https://www.tse.jus.br/eleicoes/calendario-eleitoral/calendario-eleitoral' }, { label: 'TSE · CANDex 2026', url: 'https://www.tse.jus.br/comunicacao/noticias/2026/Julho/saiba-como-registrar-atas-e-candidaturas-no-novo-sistema-da-justica-eleitoral' }],
});

Object.assign(dailyContent.mundo, {
  title: 'O próximo choque pode chegar pelo prato: clima, energia e guerra voltam a pressionar alimentos',
  summary: 'A Reuters destaca a inflação de alimentos como um dos grandes temas para a próxima semana: El Niño forte, energia mais cara, restrições de fertilizantes ligadas ao conflito no Oriente Médio e novas disrupções no transporte de grãos da guerra na Ucrânia podem se somar.',
  shareSummary: 'Radar global: o risco de inflação não está apenas no petróleo. Clima, energia, fertilizantes e rotas de grãos podem se combinar e pressionar comida, especialmente em economias nas quais alimentação pesa mais no orçamento familiar.',
  readTime: '8 MIN READ', badge: 'GLOBAL WATCH',
  stats: [{ label: 'RISCO', value: 'ALIMENTOS' }, { label: 'CLIMA', value: 'EL NIÑO' }, { label: 'TRANSMISSÃO', value: 'ENERGIA + FRETE' }],
  sections: [
    { title: 'Por que quatro choques se somam', paragraphs: ['Seca ou excesso de chuva afeta produção. Energia mexe com irrigação, processamento e transporte. Fertilizante altera custo agrícola. Rotas interrompidas afetam disponibilidade regional e frete.'] },
    { title: 'Por que América Latina sente rápido', paragraphs: ['Famílias que gastam proporção maior da renda em alimentação percebem variações específicas antes de a inflação cheia contar a história completa. Bancos centrais também acompanham se o choque fica restrito a alimentos ou contamina expectativas.'] },
    { title: 'O que observar nas próximas semanas', bullets: ['Preços internacionais de grãos e óleos.', 'Fertilizantes e diesel.', 'Fretes e seguros marítimos.', 'Safras regionais e clima.', 'Repasse para atacado e varejo.'] },
  ],
  sources: [{ label: 'Reuters · Take Five · 14/08/2026', url: 'https://www.reuters.com/business/take-five/global-markets-themes-graphic-2026-08-14/' }],
});

Object.assign(dailyContent.planeta, {
  title: 'Um rio desenha curvas, apaga curvas e deixa lagos para trás',
  summary: 'Em rios meandrantes, a água tende a erodir a margem externa das curvas e depositar sedimento na interna. O canal migra; quando duas partes de uma grande curva se aproximam, o rio pode abrir um caminho mais curto e isolar o meandro antigo como lago em ferradura.',
  shareSummary: 'Lagos em ferradura são cicatrizes de rios antigos: a curva cresce por erosão e deposição até o rio cortar caminho. O antigo meandro vira um corpo d’água separado e, com o tempo, pode se transformar em área úmida.',
  readTime: '7 MIN READ', badge: 'PLANET FILE / RIOS',
  stats: [{ label: 'FORA DA CURVA', value: 'EROSÃO' }, { label: 'DENTRO', value: 'DEPOSIÇÃO' }, { label: 'RESULTADO', value: 'OXBOW' }],
  sections: [
    { title: 'A curva não fica parada', paragraphs: ['Velocidade e circulação do fluxo redistribuem sedimentos. A margem externa tende a perder material; a interna acumula barras de sedimento. Assim o meandro se desloca lateralmente.'] },
    { title: 'Quando o rio cria um atalho', paragraphs: ['Se o pescoço do meandro fica estreito, uma cheia ou a própria evolução do canal pode conectar as duas pontas. O caminho novo é mais curto e a curva antiga perde o fluxo principal.'] },
    { title: 'O lago também envelhece', paragraphs: ['Sem a energia do canal principal, sedimento e matéria orgânica se acumulam. O lago pode ficar raso, virar brejo e, em escalas maiores, desaparecer como superfície de água aberta.'] },
  ],
  sources: [{ label: 'USGS · Oxbow Lakes', url: 'https://eros.usgs.gov/earthshots/oxbow-lakes' }],
});

Object.assign(dailyContent.animais, {
  title: 'Usar uma ferramenta exige mais do que ter mãos',
  summary: 'O uso de objetos para resolver problemas aparece em diferentes grupos animais. A pergunta científica interessante não é apenas “usou uma pedra?”, mas se o comportamento é repetível, adequado ao objetivo, aprendido e flexível diante de situações novas.',
  shareSummary: 'Ferramenta não é sinônimo de mão humana: diferentes espécies usam objetos para obter alimento ou proteção. A inteligência aparece no ajuste entre problema, objeto e resultado — não só na presença do objeto.',
  readTime: '7 MIN READ', badge: 'WILDLIFE / COGNIÇÃO',
  sections: [
    { title: 'Objeto versus ferramenta', paragraphs: ['Um objeto vira ferramenta quando é manipulado para alterar outro objeto, organismo ou condição e alcançar um objetivo. A definição exata varia entre estudos, mas intenção funcional e repetição importam.'] },
    { title: 'Por que isso é cognitivamente interessante', bullets: ['Escolher entre objetos de tamanhos diferentes.', 'Transportar a ferramenta até outro local.', 'Reutilizar o mesmo objeto.', 'Ajustar a estratégia quando o alimento muda.'] },
    { title: 'A conexão menos óbvia', paragraphs: ['Comportamentos semelhantes podem surgir por caminhos evolutivos muito diferentes. Isso impede usar “parece humano” como escala única de inteligência.'] },
  ],
  sources: [{ label: 'Smithsonian Ocean · Sea otters and tool use', url: 'https://ocean.si.edu/ocean-life/marine-mammals/sea-otters' }],
});

Object.assign(dailyContent.tempo, {
  title: 'São Paulo ainda sente a frente fria hoje; domingo começa outra história',
  summary: 'O sábado deve começar com muitas nuvens, temperaturas perto de 16°C na capital e possibilidade de chuviscos, com máxima em torno de 25°C. No domingo, o sistema frontal se afasta, o sol ganha espaço e a temperatura sobe; a tendência dos dias seguintes é de ar mais quente e seco.',
  shareSummary: 'SP neste sábado: muitas nuvens, chance de chuvisco e máxima perto de 25°C. Domingo melhora, com mais sol e aquecimento. Para a próxima sequência de dias, o cuidado muda de guarda-chuva para hidratação e baixa umidade.',
  readTime: '6 MIN READ', badge: 'TEMPO / FIM DE SEMANA',
  stats: [{ label: 'SÁBADO', value: '~16–25°C' }, { label: 'SISTEMA', value: 'FRENTE FRIA' }, { label: 'DOMINGO', value: 'MELHORA' }],
  sections: [
    { title: 'Hoje', paragraphs: ['A frente fria no litoral mantém nebulosidade e vento de sudeste. Chuviscos podem aparecer de forma intermitente, sobretudo no começo e no fim do dia.'] },
    { title: 'A mudança de domingo', paragraphs: ['Com o afastamento do sistema, a cobertura de nuvens diminui. O ar aquece e a umidade tende a cair progressivamente nos dias seguintes.'] },
    { title: 'Aplicação prática', bullets: ['Casaco leve e proteção para chuva fraca hoje.', 'Hidratação reforçada a partir do domingo.', 'Acompanhe a qualidade do ar no QUALAR/CETESB se o período seco persistir.'] },
  ],
  sources: [{ label: 'CGE / previsão reproduzida pela Folha · 15/08/2026', url: 'https://www1.folha.uol.com.br/cotidiano/2026/08/sabado-15-deve-ter-muitas-nuvens-e-temperatura-maxima-de-25c-em-sao-paulo.shtml' }, { label: 'CETESB · QUALAR', url: 'https://www.cetesb.sp.gov.br/cetesb/qualidade_ambiental/dados_abertos' }],
});

Object.assign(dailyContent.curiosidades, {
  title: 'Petrichor: a chuva libera um cheiro que estava esperando no chão',
  summary: 'Aquele aroma terroso depois das primeiras gotas não vem simplesmente da água. Durante períodos secos, compostos se acumulam em solo e superfícies; microrganismos também produzem geosmina. Quando a chuva bate no chão, pequenas partículas e aerossóis levam esses compostos ao ar.',
  shareSummary: 'O “cheiro de chuva” tem nome: petrichor. Parte do aroma vem de geosmina e outros compostos do solo liberados quando as gotas atingem a superfície — por isso a primeira chuva depois de um período seco costuma ser tão marcante.',
  readTime: '6 MIN READ', badge: 'CURIOSIDADE / SENTIDOS',
  sections: [
    { title: 'O cheiro já estava lá', paragraphs: ['Solo, plantas e microrganismos deixam moléculas odoríferas acumularem em períodos secos. A chuva muda umidade e desloca compostos dos poros de rochas e do solo.'] },
    { title: 'Gotas funcionam como lançadores', paragraphs: ['Ao atingir superfícies porosas, gotas podem aprisionar pequenas bolhas; quando elas rompem, partículas microscópicas entram no ar e alcançam nosso olfato.'] },
    { title: 'Por que você percebe tão bem', paragraphs: ['Humanos são muito sensíveis a alguns compostos terrosos, especialmente geosmina. O mesmo composto pode ser percebido em água ou alimentos em concentrações muito baixas.'] },
  ],
  sources: [{ label: 'Geochimica et Cosmochimica Acta · Genesis of petrichor', url: 'https://www.sciencedirect.com/science/article/abs/pii/0016703766900251' }, { label: 'University of Wisconsin · Weather Guys', url: 'https://wxguys.ssec.wisc.edu/2015/06/01/why-does-it-smell-good-after-a-rain-2/' }],
});

Object.assign(dailyContent.musica, {
  title: 'Do peso introspectivo de Chris Cornell ao pagode de viola de Tião Carreiro',
  summary: 'O rock do dia é “Fell on Black Days”, do Soundgarden: peso e melodia sem pressa, com a voz mudando a tensão da faixa. Na trilha caipira, “Pagode em Brasília” mostra a viola como motor rítmico — e o Top 5 histórico permanece intacto.',
  shareSummary: 'Música do dia: no rock, Soundgarden com Fell on Black Days; na viola, Tião Carreiro & Pardinho com Pagode em Brasília. Duas formas muito diferentes de usar ritmo, repetição e timbre para criar identidade.',
  readTime: '2 DISCOS / 10 FAIXAS', badge: 'MUSIC DROP',
  sections: [
    { title: 'Rock · Fell on Black Days', paragraphs: ['Ouça a guitarra menos como “riff para exibir” e mais como clima. A voz de Chris Cornell alterna contenção e pressão, deixando a música pesada sem depender de velocidade.'] },
    { title: 'Raiz · Pagode em Brasília', paragraphs: ['A faixa é uma porta para perceber o pagode de viola como linguagem rítmica própria. A viola não fica apenas decorando a melodia: ela organiza o pulso e conversa com a voz.'] },
    { title: 'O exercício de hoje', paragraphs: ['Escute uma faixa olhando para o ritmo e outra olhando para a voz. Depois repita trocando o foco. O mesmo arranjo revela detalhes diferentes dependendo da pergunta que você faz ao ouvir.'] },
  ],
  sources: [],
});

Object.assign(dailyContent.gravidez, {
  title: '5 semanas + 6 dias: o início da semana 6 acontece em horas, mas o desenvolvimento é contínuo',
  summary: 'Amanhã começa a marca de 6 semanas. Nessa fase, cérebro e sistema nervoso seguem em formação rápida, brotos dos membros começam a aparecer e estruturas iniciais de órgãos continuam se organizando. Em ultrassom muito precoce, poucos dias podem mudar bastante o que é visível.',
  shareSummary: 'Hoje são 5s+6d. A semana 6 começa amanhã: o embrião cresce rápido e estruturas como cérebro, membros e órgãos iniciais avançam. Em ultrassom precoce, “ainda não apareceu” precisa ser interpretado com datação e contexto clínico, não isoladamente.',
  readTime: '8 MIN READ', badge: 'GESTAÇÃO / 5S+6D',
  stats: [{ label: 'IDADE', value: '5S + 6D' }, { label: 'AMANHÃ', value: '6 SEMANAS' }, { label: 'DPP', value: '11/04/2027' }],
  sections: [
    { title: 'O que está mudando', paragraphs: ['Na transição para a semana 6, estruturas embrionárias passam por mudanças rápidas. O NHS descreve crescimento inicial de brotos de braços e pernas e desenvolvimento de cérebro, fígado e sistema musculoesquelético.'] },
    { title: 'Ultrassom: o calendário importa', paragraphs: ['Exames precoces podem ser úteis para localização e datação quando clinicamente indicados, mas a imagem depende de idade gestacional real, equipamento e via do exame. O NHS observa que atividade cardíaca às vezes pode ser detectada por ultrassom vaginal nessa fase, mas isso não significa que precise aparecer em todo exame exatamente no mesmo dia.'] },
    { title: 'Cuidados hoje', bullets: ['Manter pré-natal e medicamentos apenas conforme orientação médica.', 'Evitar álcool e alimentos de maior risco sanitário.', 'Hidratar e fracionar refeições se houver enjoo.', 'Procurar avaliação se houver dor forte, unilateral, sangramento importante, desmaio ou febre.'] },
  ],
  sources: [{ label: 'NHS · Week 6', url: 'https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-6/' }, { label: 'ACOG · Ultrasound Exams', url: 'https://www.acog.org/womens-health/faqs/ultrasound-exams' }],
  disclaimer: 'Informação educativa; não substitui o pré-natal nem interpretação médica de exames.',
});

Object.assign(dailyContent.pai, {
  title: 'Missão de hoje: construa a lista que vai entrar na próxima consulta',
  summary: 'Participar do pré-natal é reduzir carga mental. Hoje, organize em uma nota compartilhada: sintomas novos, medicamentos e suplementos em uso, exames já feitos e perguntas que vocês querem fazer ao obstetra.',
  shareSummary: 'Missão de pai: crie uma nota compartilhada para a próxima consulta com sintomas, remédios/suplementos, exames e perguntas. O objetivo é chegar ao pré-natal com contexto, não tentar lembrar tudo na hora.',
  readTime: '5 MIN READ', badge: 'SER PAI / AÇÃO',
  sections: [
    { title: 'Quatro blocos simples', bullets: ['Sintomas e quando começaram.', 'Medicamentos e suplementos com nome e dose prescrita.', 'Exames realizados e pendentes.', 'Perguntas sobre alimentação, atividade, trabalho, sinais de alerta e próximos exames.'] },
    { title: 'O que não fazer', paragraphs: ['Não transformar a lista em fiscalização do corpo da gestante nem tentar diagnosticar sintomas por conta própria. A função é organizar informação e facilitar a conversa com a equipe de saúde.'] },
    { title: 'Resultado esperado', paragraphs: ['Uma consulta melhor aproveitada e menos trabalho mental concentrado em uma pessoa só.'] },
  ],
  sources: [{ label: 'NHS · Antenatal care and appointments', url: 'https://www.nhs.uk/pregnancy/your-pregnancy-care/your-antenatal-care-and-appointments/' }],
});

Object.assign(dailyContent.carros, {
  title: 'Honda City DX manual 2015: bom sedã usado, mas já encosta acima dos R$ 60 mil',
  summary: 'A versão 1.5 DX manual aparece com FIPE de R$ 62.047 e média Webmotors de R$ 67.233 em julho de 2026. Isso muda a decisão: a fama de confiabilidade não basta para justificar qualquer preço; histórico e estado precisam compensar a idade.',
  shareSummary: 'City DX manual 2015: FIPE R$ 62.047 em jul/26 e média Webmotors R$ 67,2 mil. Vale pela simplicidade mecânica e espaço, mas preço alto para a idade exige histórico excelente e inspeção pré-compra.',
  readTime: '8 MIN READ', badge: 'CARROS / USADO DO DIA',
  stats: [{ label: 'FIPE JUL/26', value: 'R$ 62.047' }, { label: 'WEBMOTORS', value: 'R$ 67.233' }, { label: 'CÂMBIO', value: 'MANUAL' }],
  sections: [
    { title: 'O que ele oferece', paragraphs: ['Sedã compacto com motor 1.5 e configuração manual simples. É interessante para quem prioriza espaço e mecânica conhecida, mas não deve ser comprado apenas pela reputação da marca.'] },
    { title: 'Inspeção que interessa', bullets: ['Embreagem e engates.', 'Suspensão dianteira e ruídos.', 'Ar-condicionado.', 'Histórico de arrefecimento.', 'Estrutura, alinhamento de painéis e sinais de colisão.', 'Pneus com desgaste coerente.'] },
    { title: 'Decisão de compra', paragraphs: ['Com FIPE acima de R$ 62 mil, compare com sedãs e hatches alguns anos mais novos. Um exemplar excelente pode fazer sentido; um carro apenas “bonito” não merece prêmio elevado sem documentação de manutenção.'] },
  ],
  sources: [{ label: 'Webmotors · City DX 2015 · FIPE julho/2026', url: 'https://www.webmotors.com.br/tabela-fipe/carros/honda/city/2015/15-dx-16v-flex-4p-manual' }],
});

Object.assign(dailyContent.motos, {
  title: 'Yamaha FZ25 ABS 2018: preço acessível, mas queda mal reparada aparece na geometria',
  summary: 'A FZ25 2018 está em R$ 16.800 na FIPE de julho e média nacional Webmotors de R$ 18.511,58. O conjunto é simples, mas uma naked usada pede atenção extra a bengalas, mesa, guidão, rodas e pedaleiras — pontos que contam história de queda.',
  shareSummary: 'FZ25 ABS 2018: FIPE R$ 16.800 e média Webmotors R$ 18,5 mil em jul/26. Antes de comprar, olhe alinhamento de frente, bengalas, mesa, rodas, pedaleiras, pneus, relação e ABS.',
  readTime: '8 MIN READ', badge: 'MOTOS / USADA DO DIA',
  stats: [{ label: 'FIPE JUL/26', value: 'R$ 16.800' }, { label: 'WEBMOTORS', value: 'R$ 18.512' }, { label: 'SEGURANÇA', value: 'ABS' }],
  sections: [
    { title: 'Por que é interessante', paragraphs: ['É uma 250 urbana com ABS e custo de entrada bem abaixo de motos maiores. Para deslocamento diário, equilíbrio de consumo, desempenho e manutenção pode ser mais importante que cilindrada.'] },
    { title: 'Checklist de uma naked usada', bullets: ['Guidão centralizado e sem torção.', 'Bengalas secas e paralelas.', 'Aros sem marcas fortes.', 'Pedaleiras/manetes sem assimetria.', 'ABS sem luz de falha.', 'Relação sem pontos duros.', 'Motor frio sem ruídos anormais.'] },
    { title: 'Preço não é diagnóstico', paragraphs: ['Anúncio abaixo da FIPE pode ser oportunidade ou manutenção adiada. Some pneus, relação, bateria, fluidos e documentação ao custo de entrada.'] },
  ],
  sources: [{ label: 'Webmotors · Yamaha FZ25 2018 · FIPE julho/2026', url: 'https://www.webmotors.com.br/tabela-fipe/motos/yamaha/fz25-fazer-abs/2018' }],
});

Object.assign(dailyContent.mecanica, {
  title: 'Fluido de freio pode parecer limpo e ainda estar envelhecido',
  summary: 'Fluidos de freio base glicol são higroscópicos: absorvem umidade ao longo do tempo. Água reduz o ponto de ebulição e favorece corrosão interna; por isso, nível e cor no reservatório não substituem o intervalo de troca especificado pelo fabricante.',
  shareSummary: 'Fluido de freio não é “completar e esquecer”. Ele absorve umidade, perde margem térmica e pode corroer o sistema. Siga o intervalo do manual e investigue qualquer queda de nível — não complete indefinidamente.',
  readTime: '7 MIN READ', badge: 'MECÂNICA / FREIOS',
  sections: [
    { title: 'Por que água no fluido é problema', paragraphs: ['Em frenagens fortes, pinças e fluido aquecem. Se o ponto de ebulição caiu, podem se formar bolhas de vapor, que são compressíveis e pioram a resposta do pedal.'] },
    { title: 'Baixar nível é outra conversa', paragraphs: ['O nível pode cair lentamente conforme pastilhas gastam, mas queda súbita ou abaixo do mínimo exige inspeção de vazamento e desgaste. Fluido não deve “sumir” sem causa.'] },
    { title: 'A regra correta', paragraphs: ['Use a especificação DOT indicada no manual, respeite intervalos e não misture produtos incompatíveis. Sistema de freio é item de segurança: dúvida prática merece avaliação profissional.'] },
  ],
  sources: [{ label: 'NHTSA · Brakes and vehicle maintenance', url: 'https://www.nhtsa.gov/vehicle-safety/brakes' }],
});

Object.assign(dailyContent.nautica, {
  title: 'Canal 16: a disciplina do rádio é parte da segurança no mar',
  summary: 'VHF marítimo é uma ferramenta de coordenação, não apenas comunicação social. O canal 16 é internacionalmente associado a chamada e socorro; conversas rotineiras devem migrar para canal apropriado para não ocupar a frequência crítica.',
  shareSummary: 'VHF no barco: canal 16 é para chamada e emergência. Faça a chamada curta, identifique embarcação e posição quando necessário e mude para canal de trabalho para conversa rotineira.',
  readTime: '7 MIN READ', badge: 'NÁUTICA / COMUNICAÇÃO',
  sections: [
    { title: 'O que uma boa chamada precisa ter', bullets: ['Nome da estação/embarcação chamada.', 'Seu nome de embarcação.', 'Posição ou referência quando relevante.', 'Natureza do contato.', 'Mensagem curta e repetível.'] },
    { title: 'Mayday não é urgência genérica', paragraphs: ['Mayday é reservado a perigo grave e iminente para embarcação ou pessoas. Outras categorias de urgência e segurança têm procedimentos próprios; treinamento e material oficial devem orientar o uso.'] },
    { title: 'Antes de sair', paragraphs: ['Teste rádio, alimentação, antena e conhecimento básico da tripulação. Um equipamento excelente sem procedimento conhecido vira decoração em uma emergência.'] },
  ],
  sources: [{ label: 'Marinha do Brasil · Segurança da Navegação', url: 'https://www.marinha.mil.br/dpc/seguranca-da-navegacao' }],
});

Object.assign(dailyContent.viagens, {
  title: 'Tiradentes em dois dias: caminhar devagar é parte do roteiro',
  summary: 'Tiradentes funciona bem como fim de semana histórico: centro colonial caminhável, igrejas, museus, gastronomia e possibilidade de combinar São João del-Rei. O Museu de Sant’Ana custa R$ 10 inteira e o Museu da Liturgia informa R$ 12 inteira; preços devem ser reconfirmados antes da viagem.',
  shareSummary: 'Ideia de viagem: Tiradentes/MG, cerca de 483 km de São Paulo. Museu de Sant’Ana R$10 e Museu da Liturgia R$12 nas páginas atuais. Faça o centro a pé e deixe margem para igrejas, cafés e São João del-Rei.',
  readTime: '9 MIN READ', badge: 'VIAGEM / MINAS HISTÓRICA',
  stats: [{ label: 'SP → TIRADENTES', value: '~483 KM' }, { label: 'SANT’ANA', value: 'R$ 10' }, { label: 'LITURGIA', value: 'R$ 12' }],
  sections: [
    { title: 'Dia 1 · centro histórico', paragraphs: ['Comece cedo pelas ruas centrais, Museu de Sant’Ana e igrejas. O ganho não é “marcar pontos”, mas reparar em calçamento, fachadas, altares, topografia e como a cidade cresceu em torno da mineração e religião.'] },
    { title: 'Dia 2 · amplie o contexto', paragraphs: ['Use a manhã para o Museu da Liturgia e depois conecte com São João del-Rei, se o deslocamento fizer sentido. Ver as duas cidades lado a lado ajuda a entender escalas urbanas diferentes dentro do mesmo ciclo histórico.'] },
    { title: 'Custos que realmente pesam', bullets: ['Combustível/pedágio ou ônibus.', 'Hospedagem de fim de semana.', 'Estacionamento quando aplicável.', 'Ingressos de museus e igrejas.', 'Restaurantes no centro histórico.'] },
  ],
  sources: [{ label: 'Museu de Sant’Ana · Planeje sua visita', url: 'https://museudesantana.org.br/visite/planeje-sua-visita/' }, { label: 'Visite Museus · Museu da Liturgia', url: 'https://visite.museus.gov.br/instituicoes/museu-da-liturgia/' }],
});

Object.assign(dailyContent.financas, {
  title: 'Seu orçamento sente inflação de alimentos antes de o índice contar a história inteira',
  summary: 'O risco global de nova pressão em alimentos é um lembrete de finanças pessoais: índices de inflação são médias, mas cada casa tem uma cesta própria. Se comida e transporte pesam mais no orçamento, um choque nesses itens aparece muito antes na sensação de custo de vida.',
  shareSummary: 'Finanças do dia: inflação oficial é média; seu orçamento tem pesos próprios. Se alimentos e transporte sobem juntos, vale revisar compras recorrentes, desperdício e reserva mensal antes de reagir com dívida.',
  readTime: '7 MIN READ', badge: 'FINANÇAS / ORÇAMENTO REAL',
  stats: [{ label: 'RISCO GLOBAL', value: 'ALIMENTOS' }, { label: 'DEFESA', value: 'ORÇAMENTO' }, { label: 'ERRO', value: 'FINANCIAR CONSUMO' }],
  sections: [
    { title: 'Inflação pessoal não é o IPCA', paragraphs: ['O índice oficial mede uma cesta média. Sua família pode gastar proporções muito diferentes em mercado, aluguel, combustível, escola e saúde. Por isso a percepção pode divergir do número agregado sem que um dos dois esteja “errado”.'] },
    { title: 'Como reagir sem pânico', bullets: ['Compare preço por unidade, não apenas embalagem.', 'Planeje proteínas e hortifruti com substituições.', 'Reduza desperdício antes de cortar qualidade.', 'Evite financiar supermercado no rotativo.', 'Atualize a reserva para custos essenciais reais.'] },
    { title: 'O que o mercado observa', paragraphs: ['Choques de alimentos e energia ganham importância monetária quando se espalham para expectativas e outros preços. Um pico isolado e uma tendência persistente têm efeitos muito diferentes.'] },
  ],
  sources: [{ label: 'Reuters · Take Five · food inflation risks', url: 'https://www.reuters.com/business/take-five/global-markets-themes-graphic-2026-08-14/' }],
  disclaimer: 'Conteúdo educacional, não recomendação individual de investimento.',
});

Object.assign(dailyContent.tecnologia, {
  title: 'Bateria de sódio não precisa vencer o lítio em tudo para ser útil',
  summary: 'Tecnologias de íons de sódio trocam parte da densidade energética por uma cadeia de materiais potencialmente mais abundante e barata. Isso pode ser atraente em armazenamento estacionário e veículos nos quais custo, segurança e disponibilidade importam mais que autonomia máxima.',
  shareSummary: 'Tecnologia: sódio-ion não é “lítio pior”. É outra otimização. Menor densidade pode ser aceitável se custo, abundância de materiais, segurança e cadeia de suprimento forem mais importantes que peso e autonomia.',
  readTime: '7 MIN READ', badge: 'TECH / ENERGIA',
  sections: [
    { title: 'Por que sódio', paragraphs: ['Sódio é muito mais abundante que lítio. A química das células pode reduzir dependência de alguns materiais críticos, embora desempenho real dependa de cátodo, ânodo, eletrólito e processo industrial.'] },
    { title: 'Onde pode fazer mais sentido', bullets: ['Armazenamento de rede.', 'Backup estacionário.', 'Veículos urbanos de menor autonomia.', 'Aplicações sensíveis a custo e disponibilidade de matéria-prima.'] },
    { title: 'A pergunta correta', paragraphs: ['Não pergunte apenas quantos Wh/kg. Compare ciclo de vida, custo por kWh utilizável, temperatura, segurança, velocidade de carga, disponibilidade e reciclabilidade.'] },
  ],
  sources: [{ label: 'U.S. Department of Energy · Energy storage', url: 'https://www.energy.gov/oe/energy-storage' }],
});

Object.assign(dailyContent.seguranca, {
  title: 'O invasor não precisa atacar sua aplicação se puder convencer o CI a roubar os segredos por ele',
  summary: 'Ataques recentes à supply chain têm explorado contas de mantenedores e workflows para executar código em CI/CD e exfiltrar credenciais. Em julho, o GitHub passou a reter certos workflows potencialmente maliciosos em repositórios públicos até aprovação de um colaborador com acesso de escrita.',
  shareSummary: 'Cyber: CI/CD virou alvo primário. Um workflow comprometido pode ler token, segredo de publicação e credenciais cloud e usar isso para espalhar o ataque. GitHub agora segura certos workflows suspeitos para revisão antes de executar.',
  readTime: '9 MIN READ', badge: 'CYBER / SUPPLY CHAIN',
  stats: [{ label: 'ALVO', value: 'CI/CD' }, { label: 'OBJETIVO', value: 'CREDENCIAIS' }, { label: 'DEFESA', value: 'APROVAÇÃO + LEAST PRIVILEGE' }],
  sections: [
    { title: 'A cadeia do ataque', paragraphs: ['Conta comprometida ou workflow vulnerável dá execução. O atacante procura tokens e segredos. Com credenciais melhores, tenta publicar pacote malicioso, alterar outros repositórios ou acessar cloud e registries.'] },
    { title: 'Por que runner efêmero não resolve sozinho', paragraphs: ['O host pode desaparecer depois do job, mas o token exfiltrado continua válido até expirar ou ser revogado. A segurança precisa atuar em identidade, permissões, egress e detecção.'] },
    { title: 'Controles que quebram a cadeia', bullets: ['Tokens curtos e OIDC em vez de segredo permanente.', 'Permissões mínimas no token do workflow.', 'Revisão de mudanças em workflows.', 'Egress observável/restrito.', 'Revogação rápida de credenciais.', 'Aprovação para execução de origem não confiável.'] },
  ],
  sources: [{ label: 'GitHub · Disrupting supply chain attacks on npm and Actions', url: 'https://github.blog/security/supply-chain-security/disrupting-supply-chain-attacks-on-npm-and-github-actions/' }, { label: 'GitHub · Holds potentially malicious workflows', url: 'https://github.blog/changelog/2026-07-28-github-actions-holds-potentially-malicious-workflows-for-approval/' }],
});

Object.assign(dailyContent['appsec-ssdlc'], {
  title: 'Pwn request: executar código de fork com token privilegiado é transformar revisão em RCE no pipeline',
  summary: 'O evento pull_request_target roda no contexto do repositório base e pode ter token, segredos e cache de confiança elevada. Se o workflow fizer checkout e executar código controlado pelo fork, o atacante ganha um caminho direto para o ambiente privilegiado. Em 2026, o GitHub tornou o actions/checkout mais defensivo contra padrões comuns desse erro.',
  shareSummary: 'AppSec: pull_request_target + checkout do código do fork + execução + token/segredo privilegiado = pwn request. Trate workflow como código de produção: threat model, permissões mínimas, pinning e policy de execução.',
  readTime: '10 MIN READ', badge: 'APPSEC / CI-CD SECURITY',
  stats: [{ label: 'TRIGGER', value: 'pull_request_target' }, { label: 'RISCO', value: 'UNTRUSTED CODE' }, { label: 'IMPACTO', value: 'TOKEN / SECRETS' }],
  sections: [
    { title: 'O erro conceitual', paragraphs: ['O workflow quer comentar em PR, gerar cobertura ou acessar recurso privado e por isso escolhe um trigger privilegiado. Depois faz checkout da contribuição externa e executa testes. O limite de confiança desaparece.'] },
    { title: 'Default mais seguro não elimina o threat model', paragraphs: ['actions/checkout passou a bloquear padrões comuns de checkout inseguro em pull_request_target. Mas um script pode usar git, gh ou outro mecanismo para baixar código não confiável e executá-lo. A proteção não substitui revisão.'] },
    { title: 'Como aplicar no SSDLC', bullets: ['Proibir ou restringir pull_request_target por policy.', 'Executar PR de fork sem secrets e com token read-only.', 'Separar job não confiável de job privilegiado.', 'Pin de Actions em SHA completo.', 'CodeQL/static analysis para workflows.', 'Revisão obrigatória de .github/workflows e equivalentes.'] },
  ],
  sources: [{ label: 'GitHub · Safer pull_request_target defaults', url: 'https://github.blog/changelog/2026-06-18-safer-pull_request_target-defaults-for-github-actions-checkout/' }, { label: 'GitHub · Supply chain security guidance', url: 'https://github.blog/security/supply-chain-security/securing-the-open-source-supply-chain-across-github/' }],
});

Object.assign(wordOfDay, {
  word: 'Diligente', pronunciation: 'di-li-GEN-te', meaning: 'Cuidadoso, aplicado e atento ao que precisa ser feito, especialmente quando existe responsabilidade ou prazo.', naturalUse: '“Ela foi diligente na revisão e encontrou o problema antes da entrega.”', synonyms: ['cuidadoso', 'aplicado', 'zeloso', 'atento'], tone: 'É formal o bastante para relatórios e reuniões, mas ainda soa natural quando você quer elogiar atenção e consistência.', note: 'Diligência também pode significar cuidado ativo na execução de uma tarefa ou investigação.'
});
upcomingWords.splice(0, upcomingWords.length,
  { word: 'Ponderado', hint: 'Que age ou se expressa com equilíbrio e reflexão.' },
  { word: 'Idôneo', hint: 'Adequado, confiável ou moralmente íntegro, conforme o contexto.' },
  { word: 'Ínterim', hint: 'Intervalo entre dois acontecimentos.' },
  { word: 'Prosaico', hint: 'Comum, cotidiano ou pouco elevado.' },
);

const mineiro = regionalWords.find((item) => item.id === 'mineiro');
if (mineiro) Object.assign(mineiro, {
  word: 'Trem', pronunciation: 'trêm', meaning: 'Em Minas, pode funcionar como palavra-curinga para coisa, objeto, situação ou assunto quando o nome exato não é necessário.', naturalUse: '“Que trem é esse na mesa?”', equivalent: 'coisa · negócio · objeto · assunto', nuance: 'O charme está na flexibilidade: o contexto faz quase todo o trabalho. É muito associado à fala mineira, embora o português regional seja diverso e nenhuma palavra represente todo o estado.', note: 'Não confunda o regionalismo com o veículo ferroviário: o sentido muda pelo contexto.', upcoming: ['Uai', 'Sô', 'Custoso', 'Cismado', 'Pelejar', 'Encafifar']
});
const portugal = regionalWords.find((item) => item.id === 'portugal');
if (portugal) Object.assign(portugal, {
  word: 'Giro', pronunciation: 'GI-ro', meaning: 'Bonito, simpático, interessante ou agradável, conforme a situação.', naturalUse: '“O café novo ficou muito giro.”', equivalent: 'bonito · legal · bacana · simpático', nuance: 'No português europeu informal, “giro” aparece com frequência para elogiar aparência, ideia ou situação. No Brasil, “giro” costuma lembrar volta, circulação ou movimento.', note: 'É um bom exemplo de mesma palavra com sentidos cotidianos diferentes entre variedades do português.', upcoming: ['Autocarro', 'Telemóvel', 'Peúgas', 'Pequeno-almoço', 'Casa de banho', 'Comboio', 'Esplanada']
});

if (rockTracks.length) Object.assign(rockTracks[0], {
  title: 'Fell on Black Days', artist: 'Soundgarden', year: '1994', style: 'Grunge / alternative metal', whyListen: 'A guitarra cria peso sem pressa e a voz de Chris Cornell alterna vulnerabilidade e força. É uma aula de como tensão pode vir de dinâmica e harmonia, não apenas de volume.', context: 'Lançada no álbum Superunknown, mostra o lado mais introspectivo do Soundgarden. Ouça primeiro a linha vocal; depois repita prestando atenção na sensação irregular do riff e no espaço do arranjo.', mood: ['introspectiva', 'pesada', 'Cornell'], searchHint: 'Soundgarden Fell on Black Days'
});
if (caipiraTracks.length) Object.assign(caipiraTracks[0], {
  title: 'Pagode em Brasília', artist: 'Tião Carreiro & Pardinho', style: 'Pagode de viola / sertanejo raiz', whyListen: 'É uma porta de entrada para perceber a viola como instrumento rítmico e percussivo, não apenas melódico.', context: 'A dupla ajudou a consolidar o pagode de viola como linguagem própria. Escute o balanço entre viola e voz e compare com uma moda narrativa mais lenta.', mood: ['viola', 'ritmo', 'raiz'], searchHint: 'Tião Carreiro Pardinho Pagode em Brasília'
});
