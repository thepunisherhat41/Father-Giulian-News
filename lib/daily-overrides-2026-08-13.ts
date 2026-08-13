import { dailyContent, edition, todayDrops } from './daily-content';

Object.assign(edition, {
  date: '13/08/2026',
  dateLabel: '13 AGO 2026',
  title: 'Daily Intelligence · 13 de agosto',
});

todayDrops.splice(0, todayDrops.length,
  { slug: 'brasil', label: 'Brasil', emoji: '🇧🇷', title: 'Celular Seguro: prepare o bloqueio antes de precisar dele', detail: 'Cadastro prévio, pessoa de confiança, BNCR e a diferença entre Modo Recuperação e Bloqueio Total.' },
  { slug: 'politica', label: 'Política', emoji: '🏛️', title: 'Faltam dois dias para fechar os registros eleitorais', detail: 'O prazo acaba em 15/08 às 19h; depois, o DivulgaCandContas vira a melhor fonte para conferir candidatos e dados oficiais.' },
  { slug: 'mundo', label: 'Mundo', emoji: '🌍', title: 'Petróleo recua, mas Hormuz ainda segura o risco geopolítico', detail: 'Estoques americanos subiram forte e o Brent caiu; a rota do Golfo continua severamente limitada.' },
  { slug: 'planeta', label: 'Planeta', emoji: '🌊', title: 'Quase metade do oxigênio produzido na Terra nasce no oceano', detail: 'Fitoplâncton microscópico sustenta uma parte gigantesca da fotossíntese do planeta.' },
  { slug: 'animais', label: 'Mundo Animal', emoji: '🐢', title: 'Tartarugas-marinhas aprendem um mapa magnético do oceano', detail: 'Experimentos indicam que elas memorizam assinaturas do campo magnético associadas a regiões geográficas.' },
  { slug: 'tempo', label: 'Tempo e Clima', emoji: '🌫️', title: 'Por que o inverno seco de SP pode prender poluição perto do chão', detail: 'Pouca chuva, ar seco e inversões térmicas podem reduzir a dispersão; a CETESB mantém monitoramento horário da RMSP.' },
  { slug: 'curiosidades', label: 'Curiosidades', emoji: '✨', title: 'As “cruzes” em torno das estrelas muitas vezes pertencem ao telescópio', detail: 'Os famosos diffraction spikes surgem da interação da luz com estruturas do sistema óptico.' },
  { slug: 'gravidez', label: 'Gravidez', emoji: '🤰', title: '5 semanas + 4 dias: hora de organizar a primeira consulta do pré-natal', detail: 'A recomendação brasileira é iniciar o acompanhamento assim que a gravidez é descoberta, preferencialmente até a 12ª semana.' },
  { slug: 'pai', label: 'Ser Pai', emoji: '👨‍🍼', title: 'Missão de hoje: chegue ao pré-natal preparado, não como espectador', detail: 'Histórico familiar, medicamentos, dúvidas e logística também podem ser responsabilidade do pai.' },
  { slug: 'carros', label: 'Carros', emoji: '🚙', title: 'Radar R$ 30–60 mil: Renault Duster 2.0 2015', detail: 'A Tech Road II 4x2 manual está em R$ 52.388 de FIPE em julho; a 4x4 manual fica perto de R$ 54,8 mil.' },
  { slug: 'motos', label: 'Motos', emoji: '🏍️', title: 'Usada do dia: Yamaha MT-03 2018', detail: 'FIPE de R$ 20.925 e média Webmotors de R$ 23,5 mil; uma naked esportiva pede inspeção cuidadosa de sinais de queda.' },
  { slug: 'mecanica', label: 'Mecânica', emoji: '🛞', title: 'Frio derruba a pressão dos pneus — e o pneu não precisa estar furado', detail: 'A pressão deve ser conferida a frio e pelo valor recomendado pelo fabricante do veículo, não pelo máximo escrito no pneu.' },
  { slug: 'nautica', label: 'Náutica', emoji: '⛽', title: 'A regra de 1/3 evita uma das panes mais bobas e perigosas no mar', detail: 'Um terço para ir, um terço para voltar e um terço de reserva: vento, correnteza e carga podem mudar o consumo real.' },
  { slug: 'viagens', label: 'Viagens', emoji: '☕', title: 'Santos histórico: um passeio barato para entender como o café mudou SP', detail: 'Museu do Café, Centro Histórico e uma exposição temporária criam um roteiro de um dia a cerca de 80 km da capital.' },
  { slug: 'financas', label: 'Finanças', emoji: '📉', title: 'Mercado muda expectativa antes de o banco central mudar os juros', detail: 'Petróleo recuou e os dados americanos elevaram a chance de pausa do Fed; entenda por que ativos se mexem antes da decisão oficial.' },
  { slug: 'tecnologia', label: 'Tecnologia', emoji: '🏗️', title: 'IA virou obra de infraestrutura: um único data center de US$ 1,57 bilhão', detail: 'A L&T recebeu um pedido da Together AI para hospedar infraestrutura com chips Nvidia na Índia.' },
  { slug: 'seguranca', label: 'Cyber', emoji: '☎️', title: 'Extorsão sem ransomware: vishing, Quick Assist e ferramentas legítimas', detail: 'UNC3753 mostra como roubar dados usando suporte falso, RMM e screen sharing sem depender de malware clássico.' },
  { slug: 'appsec-ssdlc', label: 'AppSec', emoji: '🚨', title: 'PeopleSoft: CVE-2026-35273 foi explorada como zero-day antes do patch', detail: 'RCE pré-auth CVSS 9.8, PSEMHUB exposto e campanha ShinyHunters: um caso perfeito de priorização por exploitability e exposição.' },
);

Object.assign(dailyContent.hoje, {
  title: '18 leituras novas para 13 de agosto',
  summary: 'A edição-base de hoje troca todos os temas de ontem e combina serviço útil, ciência, mobilidade, família, mercado, tecnologia e segurança. Às 10h e 17h, o radar revisa as notícias para substituir o que envelhecer durante o dia.',
  readTime: '18 MISSÕES',
  badge: '05H BASE EDITION',
  sections: [],
});

Object.assign(dailyContent.brasil, {
  title: 'Celular Seguro: a melhor hora para preparar o bloqueio é antes do roubo',
  summary: 'O programa Celular Seguro permite cadastrar aparelho e pessoa de confiança, emitir alerta de roubo/furto e consultar gratuitamente o IMEI de aparelhos usados no banco nacional de restrições. A diferença entre Modo Recuperação e Bloqueio Total muda o que acontece com o IMEI.',
  shareSummary: 'Dica prática: cadastre seu celular e uma pessoa de confiança no Celular Seguro antes de precisar. O serviço também permite consultar o IMEI de um aparelho usado para verificar restrições por roubo, furto ou extravio.',
  readTime: '8 MIN READ',
  badge: 'BRASIL / SEGURANÇA PESSOAL',
  stats: [
    { label: 'CONSULTA IMEI', value: 'GRÁTIS', note: 'BNCR' },
    { label: 'MODO RECUPERAÇÃO', value: 'IMEI ATIVO', note: 'linha/contas são bloqueadas conforme parceiros' },
    { label: 'BLOQUEIO TOTAL', value: 'IMEI BLOQUEADO' },
  ],
  sections: [
    { title: 'Configure antes do incidente', paragraphs: ['A utilidade do Celular Seguro aumenta muito quando o aparelho e uma pessoa de confiança já estão cadastrados. Em um roubo, você pode estar sem acesso ao próprio telefone; a pessoa autorizada consegue emitir o alerta por você.'], bullets: ['Cadastre o aparelho.', 'Escolha uma pessoa de confiança.', 'Guarde o IMEI também fora do celular.', 'Revise senhas, autenticação e recuperação das contas mais importantes.'] },
    { title: 'Modo Recuperação x Bloqueio Total', paragraphs: ['No Modo Recuperação, o IMEI permanece ativo, o que permite que a polícia identifique o aparelho caso outra linha seja instalada. No Bloqueio Total, o IMEI também é bloqueado, dificultando a reutilização do dispositivo. A escolha não deve ser tratada como um botão sem consequência.'] },
    { title: 'Vai comprar celular usado?', paragraphs: ['O Banco Nacional de Celulares com Restrição permite consultar gratuitamente se o IMEI possui alerta de roubo, furto ou extravio. Isso não substitui nota fiscal, procedência e avaliação física, mas elimina uma parte importante do risco.'], bullets: ['Digite *#06# para consultar o IMEI do aparelho.', 'Compare o número com caixa e nota, quando disponíveis.', 'Faça a consulta antes de pagar.'] },
  ],
  sources: [
    { label: 'MJSP · Celular Seguro', url: 'https://www.gov.br/mj/pt-br/acesso-a-informacao/acoes-e-programas/celular-seguro/celular-seguro/' },
    { label: 'MJSP · Levaram meu celular', url: 'https://www.gov.br/mj/pt-br/acesso-a-informacao/acoes-e-programas/sofri-um-golpe-e-agora/levaram-meu-celular/' },
  ],
});

Object.assign(dailyContent.politica, {
  title: 'Eleições 2026: faltam dois dias para o prazo final de registro das candidaturas',
  summary: 'Partidos, federações e coligações têm até 15 de agosto, às 19h, para transmitir os pedidos de registro. Depois disso, o DivulgaCandContas se torna uma ferramenta central para conferir quem efetivamente pediu registro, situação, dados declarados e contas.',
  shareSummary: 'O prazo para registro das candidaturas de 2026 termina em 15/08 às 19h. Depois, vale conferir os nomes no DivulgaCandContas do TSE em vez de depender apenas de material de campanha ou redes sociais.',
  readTime: '8 MIN READ',
  badge: 'POLÍTICA / RADAR ELEITORAL',
  stats: [
    { label: 'PRAZO FINAL', value: '15 AGO', note: '19h' },
    { label: 'PRESIDENTE', value: 'TSE' },
    { label: 'CARGOS DE SP', value: 'TRE-SP' },
  ],
  sections: [
    { title: 'Convenção não é o mesmo que registro', paragraphs: ['Um partido pode anunciar e escolher um nome em convenção, mas a candidatura passa por pedido formal de registro e análise da Justiça Eleitoral. Por isso, nesta semana, é importante separar “nome anunciado” de “pedido de registro apresentado” e de “registro deferido”.'] },
    { title: 'Como conferir candidatos de SP de forma mais limpa', paragraphs: ['Após a transmissão dos registros, o sistema oficial DivulgaCandContas permite consultar candidaturas e contas eleitorais. Esse será o ponto de referência da página para Presidência, Governo de São Paulo, Senado, Câmara dos Deputados e Assembleia Legislativa.'], bullets: ['Nome e número.', 'Partido/federação.', 'Situação do registro.', 'Ocupação e informações declaradas.', 'Receitas e despesas de campanha conforme forem reportadas.'] },
    { title: 'Uma pergunta para avaliar qualquer promessa', paragraphs: ['Antes de discutir se uma proposta é boa ou ruim, pergunte se o cargo disputado possui competência para executá-la. Presidente, governador, senador, deputado federal e deputado estadual têm poderes diferentes; promessas incompatíveis com o cargo merecem cautela.'] },
  ],
  sources: [
    { label: 'TSE · Registro de candidatos', url: 'https://www.tse.jus.br/eleicoes/historia/processo-eleitoral-brasileiro/candidaturas/registro-de-candidatos' },
    { label: 'TSE · Resolução 23.609', url: 'https://www.tse.jus.br/legislacao/compilada/res/2019/resolucao-no-23-609-de-18-de-dezembro-de-2019' },
  ],
});

Object.assign(dailyContent.mundo, {
  title: 'Petróleo recua com estoques americanos, mas o risco em Hormuz ainda não desapareceu',
  summary: 'O Brent caiu nesta quinta após seis altas consecutivas. Estoques de petróleo nos EUA tiveram uma forte alta semanal, enquanto o tráfego no Estreito de Hormuz continua severamente limitado e as negociações entre EUA e Irã seguem sem solução definitiva.',
  shareSummary: 'O petróleo recuou hoje após forte alta dos estoques nos EUA, mas Hormuz continua severamente limitado. É um bom exemplo de como preço de energia responde ao mesmo tempo a oferta, demanda, estoques e risco geopolítico.',
  readTime: '8 MIN READ',
  badge: 'GLOBAL WATCH / 08H',
  stats: [
    { label: 'BRENT', value: '~US$ 87–88', note: 'manhã de 13/08; sujeito a oscilação' },
    { label: 'ESTOQUES EUA', value: '+17,4 mi', note: 'barris na semana, segundo dados citados pela Reuters' },
    { label: 'HORMUZ', value: 'LIMITADO', note: 'tráfego ainda severamente reduzido' },
  ],
  sections: [
    { title: 'Por que o petróleo caiu hoje', paragraphs: ['O mercado recebeu dois sinais baixistas: estoques americanos subiram fortemente e houve preocupação com demanda global. Isso reduz parte do prêmio que havia empurrado o barril para cima.'] },
    { title: 'Por que a geopolítica ainda importa', paragraphs: ['O Estreito de Hormuz continua sendo um gargalo físico da energia. Mesmo com estoques altos, uma rota severamente limitada mantém risco sobre frete, seguro e capacidade de movimentação. Uma notícia de negociação pode derrubar o prêmio; uma escalada pode reconstruí-lo rapidamente.'] },
    { title: 'O que observar no Brasil', bullets: ['Brent e derivados.', 'Dólar/real.', 'Política de preços da Petrobras.', 'Frete e diesel.', 'Expectativas de inflação e juros.'], paragraphs: ['Nenhum desses canais age sozinho e o preço no posto não acompanha o Brent de forma instantânea.'] },
  ],
  sources: [
    { label: 'Reuters · Wall Street e petróleo · 13/08/2026', url: 'https://www.reuters.com/business/retail-consumer/wall-st-futures-tick-higher-oil-retreats-ahead-inflation-data-2026-08-13/' },
  ],
});

Object.assign(dailyContent.planeta, {
  title: 'Quase metade do oxigênio produzido na Terra vem do oceano — graças a organismos que você quase nunca vê',
  summary: 'A NOAA estima que aproximadamente metade da produção de oxigênio do planeta ocorre no oceano, principalmente por fitoplâncton, algas e bactérias fotossintéticas. O mesmo oceano também consome uma quantidade enorme desse oxigênio.',
  shareSummary: 'Uma das fábricas de oxigênio mais importantes do planeta é microscópica: fitoplâncton, algas e bactérias do oceano respondem por aproximadamente metade da produção de oxigênio da Terra.',
  readTime: '9 MIN READ',
  badge: 'PLANET / OCEAN BIOSPHERE',
  stats: [
    { label: 'PRODUÇÃO O₂', value: '~50%', note: 'estimativa global associada ao oceano' },
    { label: 'MOTOR', value: 'FITOPLÂNCTON' },
    { label: 'PROCHLOROCOCCUS', value: 'ATÉ 20%', note: 'da produção de O₂ da biosfera segundo NOAA' },
  ],
  sections: [
    { title: 'A floresta invisível do mar', paragraphs: ['Na superfície iluminada dos oceanos vivem organismos microscópicos capazes de fotossíntese. Eles usam luz e carbono para produzir matéria orgânica e liberam oxigênio como parte do processo. Como os oceanos cobrem uma área imensa, a soma dessa atividade é gigantesca.'] },
    { title: 'A nuance que evita uma conclusão errada', paragraphs: ['Dizer que o oceano produz cerca de metade do oxigênio não significa que metade de cada respiração de hoje “acabou de sair do mar”. A atmosfera possui um enorme estoque de oxigênio e o próprio oceano consome grande parte do que produz por respiração e decomposição.'] },
    { title: 'Por que satélites olham a cor do oceano', paragraphs: ['Concentrações de pigmentos como clorofila alteram a cor da água. Satélites ajudam cientistas a mapear produtividade e blooms de fitoplâncton em grande escala, conectando biologia, clima e ciclos de carbono.'] },
  ],
  sources: [
    { label: 'NOAA Ocean Service · How much oxygen comes from the ocean?', url: 'https://oceanservice.noaa.gov/facts/ocean-oxygen.html' },
  ],
});

Object.assign(dailyContent.animais, {
  title: 'Tartarugas-marinhas podem aprender “endereços” no campo magnético da Terra',
  summary: 'Um estudo na Nature mostrou que tartarugas-cabeçudas juvenis aprenderam a associar assinaturas magnéticas que simulavam regiões oceânicas específicas a locais onde recebiam alimento. O resultado sugere um mapa magnético aprendido, além de um mecanismo separado de bússola.',
  shareSummary: 'Tartarugas-cabeçudas conseguem aprender assinaturas do campo magnético de diferentes regiões oceânicas. O estudo sugere que elas possuem algo parecido com um mapa magnético e uma bússola magnética baseados em mecanismos diferentes.',
  readTime: '9 MIN READ',
  badge: 'WILDLIFE / NAVIGATION',
  stats: [
    { label: 'ESPÉCIE', value: 'CARETTA CARETTA' },
    { label: 'CAPACIDADE', value: 'MAPA MAGNÉTICO' },
    { label: 'OUTRO SISTEMA', value: 'BÚSSOLA', note: 'mecanismo distinto' },
  ],
  sections: [
    { title: 'Como se testa um mapa sem levar a tartaruga ao oceano inteiro', paragraphs: ['Pesquisadores reproduziram em laboratório campos magnéticos semelhantes aos encontrados em regiões oceânicas reais. As tartarugas recebiam comida em um campo e não em outro; com o tempo, passaram a reagir de forma diferente ao “endereço” associado à alimentação.'] },
    { title: 'Mapa e bússola não são a mesma coisa', paragraphs: ['Uma bússola responde “para que direção devo ir?”. Um mapa responde “onde estou ou que região reconheço?”. O estudo encontrou evidências de que essas duas capacidades podem depender de mecanismos de magnetorrecepção diferentes.'] },
    { title: 'A conexão fascinante', paragraphs: ['A Terra possui variações previsíveis de intensidade e inclinação do campo magnético conforme a posição. Para um animal migratório, essas diferenças funcionam como coordenadas naturais que não dependem de GPS, estrelas visíveis ou marcos no horizonte.'] },
  ],
  sources: [
    { label: 'Nature · Learned magnetic map cues in turtles', url: 'https://www.nature.com/articles/s41586-024-08554-y' },
  ],
});

Object.assign(dailyContent.tempo, {
  title: 'Inverno seco em São Paulo: por que algumas manhãs parecem “segurar” a poluição perto do chão',
  summary: 'O inverno é climatologicamente mais seco no Sudeste. Em certas situações, uma camada de ar mais quente acima de ar frio próximo ao solo reduz a mistura vertical: é a inversão térmica. A CETESB monitora qualidade do ar e frequência de inversões na RMSP.',
  shareSummary: 'No inverno de SP, pouca chuva e certas inversões térmicas podem reduzir a dispersão de poluentes. A CETESB mantém dados horários e boletins de qualidade do ar para a RMSP — mais útil do que julgar apenas pela aparência do céu.',
  readTime: '8 MIN READ',
  badge: 'SP / ATMOSPHERE',
  stats: [
    { label: 'ESTAÇÃO', value: 'INVERNO' },
    { label: 'SUDESTE', value: 'MAIS SECO', note: 'padrão climatológico' },
    { label: 'MONITOR', value: 'CETESB QUALAR' },
  ],
  sections: [
    { title: 'O ar normalmente mistura; na inversão, mistura menos', paragraphs: ['Perto do solo, o ar aquecido tende a subir e favorecer a mistura. Em uma inversão, existe ar relativamente mais quente acima de uma camada fria próxima ao chão, criando uma configuração estável que dificulta a dispersão vertical.'] },
    { title: 'Por que o inverno favorece episódios ruins', paragraphs: ['O INMET descreve o inverno no Sudeste como período menos chuvoso e mais sujeito a massas de ar seco. Menos chuva significa menos remoção úmida de partículas, e condições estáveis podem permitir acúmulo local de poluentes. Isso não significa que todo dia seco terá ar ruim.'] },
    { title: 'Como acompanhar em vez de adivinhar', paragraphs: ['A CETESB mantém o sistema QUALAR com índice em tempo real, dados horários, boletins e informações meteorológicas. Para quem está na Zona Leste, essa leitura é mais confiável do que concluir a qualidade apenas pela visibilidade ou cheiro.'] },
  ],
  sources: [
    { label: 'INMET · Inverno 2026', url: 'https://portal.inmet.gov.br/noticias/inverno-2026-confira-a-previs%C3%A3o-para-a-esta%C3%A7%C3%A3o' },
    { label: 'CETESB · Qualidade do Ar', url: 'https://www.cetesb.sp.gov.br/cetesb/qualidade_ambiental/ar' },
  ],
});

Object.assign(dailyContent.curiosidades, {
  title: 'As estrelas com “pontas” em fotos espaciais não são estrelas pontudas',
  summary: 'Os famosos riscos em forma de cruz ao redor de estrelas brilhantes podem ser diffraction spikes: padrões produzidos pela natureza ondulatória da luz ao interagir com estruturas do telescópio, como suportes do espelho secundário.',
  shareSummary: 'Curiosidade: aquelas “cruzes” perfeitas em torno de estrelas brilhantes em muitas fotos não são braços da estrela. São padrões de difração produzidos pelo sistema óptico do telescópio.',
  readTime: '7 MIN READ',
  badge: 'CURIOSITY / OPTICS',
  stats: [
    { label: 'FENÔMENO', value: 'DIFRAÇÃO' },
    { label: 'ORIGEM', value: 'ÓPTICA' },
  ],
  sections: [
    { title: 'A estrela continua aproximadamente pontual', paragraphs: ['Estrelas estão tão distantes que, para um telescópio, muitas se comportam como fontes quase pontuais. A luz, porém, é uma onda e não atravessa uma abertura ou obstáculos sem produzir padrões.'] },
    { title: 'De onde vêm as pontas', paragraphs: ['Em telescópios refletores, estruturas que sustentam o espelho secundário podem difratar parte da luz. O padrão depende da geometria dessas estruturas, por isso telescópios diferentes podem produzir assinaturas visuais diferentes.'] },
    { title: 'Uma ferramenta de leitura de imagem', paragraphs: ['Isso ajuda a separar “objeto astronômico” de “artefato instrumental”. Astronomia moderna não é apenas olhar uma foto bonita: é entender como detector, espelho, abertura e processamento transformaram fótons em imagem.'] },
  ],
  sources: [
    { label: 'NASA APOD · Diffraction Spikes', url: 'https://apod.nasa.gov/apod/ap010415.html' },
  ],
});

Object.assign(dailyContent.gravidez, {
  title: '5 semanas + 4 dias: transforme a primeira consulta do pré-natal em um bom ponto de partida',
  summary: 'O Ministério da Saúde recomenda iniciar o pré-natal assim que a gravidez for descoberta ou suspeitada, preferencialmente até a 12ª semana. Nesta fase, organizar informações e perguntas é mais útil do que tentar interpretar cada sintoma isoladamente.',
  shareSummary: 'Com 5 semanas + 4 dias, um passo útil é organizar a primeira consulta do pré-natal: histórico de saúde, medicamentos e suplementos em uso, vacinas, exames anteriores e dúvidas. O pré-natal deve começar cedo, preferencialmente até a 12ª semana.',
  readTime: '9 MIN READ',
  badge: 'BABY MISSION / 5S4D',
  stats: [
    { label: 'IDADE GESTACIONAL', value: '5S + 4D' },
    { label: 'DPP', value: '11/04/2027' },
    { label: 'PRÉ-NATAL', value: 'INICIAR CEDO', note: 'preferencialmente até 12 semanas' },
  ],
  sections: [
    { title: 'O que levar para a consulta', bullets: ['Data da última menstruação e resultado dos testes.', 'Lista de medicamentos, vitaminas e suplementos em uso.', 'Histórico de doenças, cirurgias, alergias e gestações anteriores, quando houver.', 'Carteira de vacinação e exames recentes disponíveis.', 'Dúvidas anotadas em vez de depender da memória na hora.'] },
    { title: 'A Caderneta Brasileira da Gestante', paragraphs: ['A caderneta oficial é gratuita e reúne registro de consultas, exames, vacinas, direitos, orientações e sinais de alerta. Ela funciona também como instrumento de comunicação entre a gestante e diferentes profissionais ao longo do cuidado.'] },
    { title: 'O que não fazer com a ansiedade da fase inicial', paragraphs: ['Sintomas podem variar muito entre gestantes e até de um dia para outro. Aplicativos e textos educativos ajudam a entender a fase, mas não servem para confirmar se uma gestação está evoluindo normalmente. Essa avaliação pertence ao pré-natal e aos exames indicados pela equipe.'] },
  ],
  sources: [
    { label: 'Ministério da Saúde · Pré-natal', url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/g/gravidez/pre-natal' },
    { label: 'Ministério da Saúde · Caderneta Brasileira da Gestante', url: 'https://www.gov.br/saude/pt-br/composicao/saps/publicacoes/cadernetas-e-cartoes' },
  ],
  disclaimer: 'Conteúdo educativo. Não substitui avaliação individual com obstetra/equipe de pré-natal. Dor forte, sangramento importante, desmaio, febre ou sintomas intensos exigem orientação profissional.',
});

Object.assign(dailyContent.pai, {
  title: 'Ser pai no pré-natal: chegue com informações, perguntas e responsabilidade própria',
  summary: 'Participar do pré-natal não é apenas acompanhar fisicamente uma consulta. É assumir uma parte concreta da preparação: histórico familiar, documentos, dúvidas, exames, agenda e logística.',
  shareSummary: 'Uma ação simples para o pai hoje: prepare junto uma lista de dúvidas, histórico familiar relevante, medicamentos/suplementos e exames para a consulta. Participação começa antes da sala do obstetra.',
  readTime: '8 MIN READ',
  badge: 'FATHER MISSION / ACTIVE CARE',
  stats: [
    { label: 'MISSÃO', value: 'PRÉ-NATAL' },
    { label: 'POSTURA', value: 'ATIVA' },
    { label: 'OBJETIVO', value: 'REDUZIR CARGA MENTAL' },
  ],
  sections: [
    { title: 'Assuma uma parte que tenha dono', paragraphs: ['Em vez de perguntar “quer que eu faça alguma coisa?”, escolha uma responsabilidade útil e combine: organizar documentos, anotar perguntas, acompanhar datas, guardar resultados ou cuidar do deslocamento. A diferença parece pequena, mas reduz a necessidade de uma pessoa gerenciar a outra.'] },
    { title: 'Seu histórico também pode importar', paragraphs: ['Informações familiares dos dois lados podem ser relevantes para o cuidado. Se houver doenças hereditárias conhecidas, condições importantes ou dúvidas sobre histórico familiar, anote para discutir com a equipe — sem tentar interpretar geneticamente por conta própria.'] },
    { title: 'Presença não é desempenho', paragraphs: ['Não é necessário saber tudo sobre gravidez para ser um pai presente. O que constrói confiança é consistência: comparecer quando possível, ouvir, dividir tarefas e aprender junto sem transformar a gestação numa prova de conhecimento.'] },
  ],
  sources: [
    { label: 'Ministério da Saúde · Saúde da Criança e participação da família', url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-crianca' },
    { label: 'UNICEF Parenting · Father and baby', url: 'https://www.unicef.org/parenting/child-care/relationship-between-father-and-baby' },
  ],
});

Object.assign(dailyContent.carros, {
  title: 'Radar R$ 30–60 mil: Renault Duster 2.0 2015 coloca espaço e robustez perto de R$ 52 mil',
  summary: 'Em julho de 2026, a Duster 2.0 Tech Road II 4x2 manual aparece com FIPE de R$ 52.388 e média Webmotors de R$ 53.120. A versão 4x4 manual aparece em R$ 54.794 de FIPE. É um SUV interessante quando espaço e piso ruim pesam mais que consumo e refinamento.',
  shareSummary: 'Radar de usado: Duster 2.0 Tech Road II 2015 manual está em R$ 52.388 de FIPE; a 4x4 manual, R$ 54.794. Antes de comprar, histórico, arrefecimento, suspensão, pneus, embreagem e inspeção de estrutura valem mais que um “km baixo” isolado.',
  readTime: '10 MIN READ',
  badge: 'USED CAR / R$ 30–60K',
  stats: [
    { label: '4X2 MANUAL', value: 'R$ 52.388', note: 'FIPE jul/2026' },
    { label: 'WEBMOTORS', value: 'R$ 53.120', note: 'média nacional 4x2 manual' },
    { label: '4X4 MANUAL', value: 'R$ 54.794', note: 'FIPE jul/2026' },
  ],
  sections: [
    { title: 'Para quem faz sentido', paragraphs: ['A Duster desta geração é interessante para quem valoriza cabine/porta-malas, altura do solo e tolerância a vias ruins. Se a prioridade for acabamento sofisticado ou consumo baixo, outros modelos podem fazer mais sentido.'] },
    { title: 'Quilometragem: use como contexto, não sentença', paragraphs: ['Um 2015 em 2026 já tem mais de uma década. Uma faixa de 100–160 mil km não é automaticamente ruim se manutenção e uso forem coerentes; um exemplar com odômetro baixo e histórico nebuloso pode ser pior. Compare desgaste de volante, pedais, bancos, pneus e registros de serviço.'] },
    { title: 'Checklist antes de fechar negócio', bullets: ['Partida a frio e marcha lenta.', 'Nível/estado do líquido de arrefecimento e sinais de vazamento.', 'Suspensão dianteira e traseira em piso irregular.', 'Embreagem e engates nas manuais.', 'Pneus iguais e desgaste uniforme.', 'Assoalho e pontos estruturais, especialmente em exemplares 4x4/off-road.', 'Laudo cautelar + inspeção mecânica independente.', 'Cotação de seguro antes de comprar.'] },
  ],
  sources: [
    { label: 'Webmotors/FIPE · Duster Tech Road II 4x2 manual 2015', url: 'https://www.webmotors.com.br/tabela-fipe/carros/renault/duster/2015/20-tech-road-ii-4x2-16v-flex-4p-manual' },
    { label: 'Webmotors/FIPE · Duster Tech Road II 4x4 manual 2015', url: 'https://www.webmotors.com.br/tabela-fipe/carros/renault/duster/2015/20-tech-road-ii-4x4-16v-flex-4p-manual' },
  ],
});

Object.assign(dailyContent.motos, {
  title: 'Yamaha MT-03 2018: uma naked divertida por ~R$ 21–23 mil, mas o exemplar importa muito',
  summary: 'A MT-03 2018 aparece com FIPE de R$ 20.925 em julho de 2026 e média Webmotors de R$ 23.466,67. O perfil esportivo torna histórico de quedas, pneus, freios e manutenção mais importante que olhar apenas o preço.',
  shareSummary: 'MT-03 2018: FIPE R$ 20.925 e média Webmotors ~R$ 23,5 mil em julho/2026. Na inspeção, procure sinais de queda, bengalas, mesa/guidão, discos, pneus, relação, partida a frio e histórico de revisões.',
  readTime: '9 MIN READ',
  badge: 'USED BIKE / NAKED',
  stats: [
    { label: 'FIPE', value: 'R$ 20.925', note: 'jul/2026' },
    { label: 'WEBMOTORS', value: 'R$ 23.466', note: 'média nacional' },
    { label: 'ANÚNCIOS', value: '~R$ 20–24,9K', note: 'faixa observada na página' },
  ],
  sections: [
    { title: 'O que muda numa moto de perfil esportivo', paragraphs: ['Uma naked de desempenho costuma convidar a acelerações e uso mais agressivo. Isso não torna a moto ruim, mas aumenta a importância de descobrir como o exemplar foi tratado, se sofreu quedas e se consumíveis foram trocados com qualidade.'] },
    { title: 'Inspeção que vale fazer', bullets: ['Bengalas sem óleo e alinhadas.', 'Guidão/mesa e manetes sem sinais incoerentes de queda.', 'Discos e pastilhas.', 'Pneus com desgaste regular.', 'Relação sem dentes “puxados” e com folga correta.', 'Partida a frio e funcionamento uniforme.', 'Radiador, mangueiras e nível do sistema de arrefecimento.', 'Documentação e histórico.'] },
    { title: 'Preço de anúncio não é preço de referência', paragraphs: ['FIPE, média de anúncios e preço negociado respondem a coisas diferentes. A decisão deve considerar estado real, acessórios, região, documentação, pneus e manutenção imediata que você terá de fazer após a compra.'] },
  ],
  sources: [
    { label: 'Webmotors/FIPE · Yamaha MT-03 2018', url: 'https://www.webmotors.com.br/tabela-fipe/motos/yamaha/mt-03/2018' },
  ],
});

Object.assign(dailyContent.mecanica, {
  title: 'O pneu “perde pressão” no frio mesmo sem vazamento: aprenda a medir antes de culpar um furo',
  summary: 'A pressão do gás varia com a temperatura. Em manhãs frias, a leitura pode cair; depois de rodar, o pneu aquece e a pressão sobe. Por isso a calibragem correta é baseada na pressão a frio indicada pelo fabricante do veículo.',
  shareSummary: 'Dica de mecânica: calibre pneus frios, usando a etiqueta do carro/manual. A pressão máxima escrita no flanco do pneu não é a recomendação do veículo. No frio, a leitura pode cair sem existir um furo.',
  readTime: '8 MIN READ',
  badge: 'MECHANIC / TIRES',
  stats: [
    { label: 'MEDIR', value: 'A FRIO', note: 'idealmente após ~3h sem rodar' },
    { label: 'REFERÊNCIA', value: 'ETIQUETA DO CARRO' },
    { label: 'NÃO USAR', value: 'MÁX. DO PNEU', note: 'como calibragem recomendada' },
  ],
  sections: [
    { title: 'Por que a pressão muda', paragraphs: ['Dentro do pneu existe gás em um volume quase fixo. Quando a temperatura cai, a energia cinética média das moléculas diminui e a pressão medida tende a cair. Ao dirigir, flexão da carcaça e atrito elevam a temperatura e a leitura aumenta.'] },
    { title: 'O erro clássico no posto', paragraphs: ['Calibrar imediatamente após rodar e “corrigir” para o valor de pressão fria pode deixar o pneu subcalibrado quando ele esfriar. O fabricante informa a pressão desejada para condição fria justamente para padronizar a referência.'] },
    { title: 'Quando desconfiar de vazamento', bullets: ['Um pneu cai muito mais que os outros.', 'A queda se repete em poucos dias.', 'Há parafuso/prego, dano lateral ou válvula com fuga.', 'TPMS reaparece mesmo após ajuste correto.'], paragraphs: ['Perda natural existe, mas diferenças rápidas ou assimétricas merecem inspeção.'] },
  ],
  sources: [
    { label: 'NHTSA · Tire Safety', url: 'https://www.nhtsa.gov/vehicle-safety/tires' },
    { label: 'NHTSA · Winter Driving Tips', url: 'https://www.nhtsa.gov/winter-driving-tips' },
  ],
});

Object.assign(dailyContent.nautica, {
  title: 'Combustível náutico: a regra de um terço é simples porque o mar não respeita sua estimativa perfeita',
  summary: 'A Marinha recomenda planejar um terço do combustível para a ida, um terço para a volta e um terço como reserva. Vento, maré, correnteza, carga e estado do casco podem elevar o consumo real e transformar “dá certinho” em pane seca.',
  shareSummary: 'Regra útil para embarcação: 1/3 do combustível para ir, 1/3 para voltar e 1/3 de reserva. A Marinha recomenda esse planejamento porque vento, correnteza, carga e consumo real podem desmontar uma conta apertada.',
  readTime: '9 MIN READ',
  badge: 'NAUTICAL / FUEL PLAN',
  stats: [
    { label: 'IDA', value: '1/3' },
    { label: 'VOLTA', value: '1/3' },
    { label: 'RESERVA', value: '1/3' },
  ],
  sections: [
    { title: 'Por que não usar 50% para ir e 50% para voltar', paragraphs: ['Essa conta pressupõe que ida e volta terão exatamente o mesmo consumo e que nada sairá do plano. No ambiente náutico, corrente contrária, vento, ondas, desvio de rota e aumento de carga podem mudar consumo e velocidade.'] },
    { title: 'O marcador de combustível não é o plano', paragraphs: ['A Marinha alerta que confiar apenas no nível indicado e não conhecer consumo do motor é uma causa evitável de pane seca. O ideal é conhecer litros por hora ou consumo por trecho em condições reais da sua embarcação.'] },
    { title: 'Antes de soltar as amarras', bullets: ['Abastecimento suficiente.', 'Mangueiras, filtros e conexões revisados.', 'Previsão meteorológica.', 'Plano de viagem registrado/informado.', 'VHF ou outro meio de comunicação.', 'Coletes homologados e material de salvatagem.'] },
  ],
  sources: [
    { label: 'Agência Marinha · Pane seca no mar', url: 'https://www.agencia.marinha.mil.br/seguranca-da-navegacao/pane-seca-no-mar-marinha-alerta-para-riscos-da-falta-de-combustivel-em' },
    { label: 'DPC · Recomendações de Segurança para a Navegação', url: 'https://www.marinha.mil.br/dpc/node/3551' },
  ],
});

Object.assign(dailyContent.viagens, {
  title: 'Santos histórico: um dia para entender como café, ferrovia e porto ajudaram a construir São Paulo',
  summary: 'O Museu do Café funciona no edifício da antiga Bolsa Oficial de Café, no Centro Histórico de Santos. A entrada custa R$ 16 e a cidade mantém atrações próximas como bonde turístico e Museu Pelé. Há ainda exposição temporária sobre Brasil, China e café até 13 de setembro.',
  shareSummary: 'Ideia de bate-volta perto de SP: Centro Histórico de Santos + Museu do Café. O ingresso do museu custa R$ 16 e há exposição temporária sobre Brasil, China e café até 13/09. Dá para combinar com bonde e Valongo.',
  readTime: '10 MIN READ',
  badge: 'SP / HISTORIC DAY TRIP',
  stats: [
    { label: 'MUSEU DO CAFÉ', value: 'R$ 16' },
    { label: 'TER–SÁB', value: '9H–18H' },
    { label: 'DOM', value: '10H–18H' },
  ],
  sections: [
    { title: 'Por que vale ir pelo contexto, não só pela foto', paragraphs: ['Santos não foi apenas um porto por onde café passou. A riqueza e a logística do grão influenciaram ferrovia, armazéns, companhias de navegação, arquitetura e urbanização. A antiga Bolsa de Café mostra como uma commodity pode moldar uma cidade inteira.'] },
    { title: 'Roteiro enxuto de um dia', bullets: ['Comece pelo Museu do Café.', 'Caminhe pela Rua XV/Valongo e observe a arquitetura ligada ao comércio.', 'Considere a Linha Turística de Bonde para conectar marcos do centro.', 'Complete com Museu Pelé ou Monte Serrat conforme interesse e tempo.', 'Deixe a orla para o fim se quiser combinar história e mar.'] },
    { title: 'Exposição temporária', paragraphs: ['A exposição “Ouro Negro e o Dragão” está anunciada até 13 de setembro de 2026 e usa o café para discutir conexões contemporâneas entre Brasil e China. É um bom exemplo de museu histórico que também tenta ligar passado econômico a relações atuais.'] },
  ],
  sources: [
    { label: 'Visite Museus · Museu do Café', url: 'https://visite.museus.gov.br/instituicoes/museu-do-cafe-2/' },
    { label: 'Prefeitura de Santos · Ouro Negro e o Dragão', url: 'https://www.santos.sp.gov.br/?q=node%2F171505' },
  ],
});

Object.assign(dailyContent.financas, {
  title: 'Mercado não espera a decisão do banco central: ele negocia probabilidades antes',
  summary: 'Nesta manhã, dados mais suaves de inflação ao consumidor nos EUA e a queda do petróleo aumentaram a expectativa de que o Federal Reserve mantenha os juros na próxima reunião. A Reuters citou probabilidade de aproximadamente 66% de pausa no mercado futuro.',
  shareSummary: 'Finanças do dia: mercados precificam decisões antes de elas acontecerem. Hoje, petróleo mais baixo e inflação americana mais branda aumentaram a chance implícita de pausa do Fed. Isso não é uma decisão — é uma probabilidade negociada.',
  readTime: '9 MIN READ',
  badge: 'MONEY / EXPECTATIONS',
  stats: [
    { label: 'FED HOLD', value: '~66%', note: 'probabilidade de mercado citada pela Reuters; não é decisão' },
    { label: 'PETRÓLEO', value: '↓', note: 'manhã de 13/08' },
    { label: 'LIÇÃO', value: 'PREÇO ≠ FATO' },
  ],
  sections: [
    { title: 'Mercado negocia cenários', paragraphs: ['Um contrato futuro de juros reflete o preço que participantes aceitam pagar hoje para diferentes cenários. Quando dados de inflação, emprego ou energia mudam, essas probabilidades também mudam — antes de qualquer reunião oficial.'] },
    { title: 'Como isso chega ao Brasil', paragraphs: ['Expectativas sobre juros americanos afetam o apetite por dólar, títulos, ações e risco de países emergentes. O canal não é mecânico: política doméstica, inflação brasileira e fluxo comercial também importam.'] },
    { title: 'Dica prática: não transforme manchete em ordem de investimento', paragraphs: ['Uma notícia de manhã pode ser parcialmente revertida à tarde. Para dinheiro de curto prazo ou reserva, liquidez e segurança devem pesar mais que tentar capturar cada movimento. Para decisões de investimento, horizonte e objetivo são melhores âncoras que uma única manchete.'] },
  ],
  sources: [
    { label: 'Reuters · Wall Street futures / Fed · 13/08/2026', url: 'https://www.reuters.com/business/retail-consumer/wall-st-futures-tick-higher-oil-retreats-ahead-inflation-data-2026-08-13/' },
    { label: 'Banco Central · Entenda os juros e CET', url: 'https://www.bcb.gov.br/cidadaniafinanceira/entendajuro' },
  ],
});

Object.assign(dailyContent.tecnologia, {
  title: 'A IA está virando uma indústria de concreto, energia e refrigeração — não apenas software',
  summary: 'A indiana Larsen & Toubro anunciou um pedido de até US$ 1,57 bilhão da Together AI para hospedar um data center de IA com chips Nvidia. O negócio mostra como a corrida por modelos está puxando engenharia civil, energia, redes e cooling junto com GPUs.',
  shareSummary: 'IA não é só modelo: a L&T recebeu um pedido de até US$ 1,57 bilhão da Together AI para infraestrutura de data center com chips Nvidia. A próxima disputa tecnológica passa por energia, refrigeração, rede e construção.',
  readTime: '9 MIN READ',
  badge: 'TECH / AI INFRA',
  stats: [
    { label: 'PEDIDO', value: 'ATÉ US$ 1,57 BI' },
    { label: 'CLIENTE', value: 'TOGETHER AI' },
    { label: 'CHIPS', value: 'NVIDIA' },
  ],
  sections: [
    { title: 'Por que isso é tecnologia, mesmo sendo obra', paragraphs: ['Treinar e servir modelos grandes exige densidade de computação, energia elétrica estável, refrigeração e interconexões de alta capacidade. A infraestrutura física virou parte do produto de IA.'] },
    { title: 'O gargalo pode mudar de lugar', paragraphs: ['Em um momento o gargalo é GPU; depois pode ser transformador elétrico, conexão à rede, água/cooling, fibra ou terreno com capacidade energética. A vantagem competitiva deixa de ser apenas “ter o melhor modelo”.'] },
    { title: 'Conexão com o cotidiano', paragraphs: ['A expansão desses centros pode influenciar demanda de energia, cadeias de semicondutores, preços de cloud e localização de empregos de engenharia. Também aumenta a importância de eficiência: cada melhoria de uso de GPU ou inferência reduz pressão física sobre a infraestrutura.'] },
  ],
  sources: [
    { label: 'Reuters · L&T / Together AI · 13/08/2026', url: 'https://www.reuters.com/world/india/indias-larsen-toubro-secures-order-build-ai-factory-nvidia-2026-08-13/' },
  ],
});

Object.assign(dailyContent.seguranca, {
  title: 'UNC3753 mostra um “ransomware” que não precisa criptografar nada',
  summary: 'A Mandiant descreveu uma campanha contra serviços jurídicos, profissionais e financeiros em que atacantes se passam por suporte de TI, convencem vítimas a abrir sessões de tela e instalar ferramentas legítimas de acesso remoto, roubam documentos sensíveis e partem para extorsão por vazamento.',
  shareSummary: 'Radar Cyber: UNC3753 usa vishing e ferramentas legítimas como Quick Assist, Teams, AnyDesk e outros RMM para roubar dados. O modelo de extorsão pode funcionar sem criptografar arquivos e sem malware tradicional.',
  readTime: '11 MIN READ',
  badge: 'CYBER / HUMAN ACCESS',
  stats: [
    { label: 'ATOR', value: 'UNC3753' },
    { label: 'ACESSO', value: 'VISHING' },
    { label: 'MONETIZAÇÃO', value: 'DATA EXTORTION' },
  ],
  sections: [
    { title: 'A cadeia começa na voz, não no exploit', paragraphs: ['O atacante telefona fingindo ser help desk ou segurança, cria um pretexto e orienta o usuário a entrar numa sessão de compartilhamento ou suporte remoto. Isso atravessa controles que esperam um anexo malicioso ou link de phishing clássico.'] },
    { title: 'Ferramenta legítima vira canal de ataque', paragraphs: ['Teams, Zoom, Quick Assist, AnyDesk, Bomgar e outros produtos podem ter uso legítimo. O problema é a autorização concedida ao interlocutor errado. Depois, os atacantes pesquisam diretórios, OneDrive, repositórios jurídicos e arquivos com alto valor de extorsão.'] },
    { title: 'Defesa prática', bullets: ['Help desk nunca deve depender só da narrativa do solicitante.', 'Restrinja instalação/execução de RMM não autorizado.', 'Monitore criação de sessões remotas incomuns.', 'Treine usuários para interromper chamadas e retornar por canal oficial.', 'Proteja VDI/BYOD como caminho para dados internos.', 'Detecte exfiltração com WinSCP, Rclone e cloud storage incomum.'] },
  ],
  sources: [
    { label: 'Google Threat Intelligence / Mandiant · UNC3753', url: 'https://cloud.google.com/blog/topics/threat-intelligence/targeted-campaign-us-law-firms' },
  ],
});

Object.assign(dailyContent['appsec-ssdlc'], {
  title: 'CVE-2026-35273: quando um componente de administração exposto vira RCE pré-auth e zero-day',
  summary: 'Oracle PeopleSoft PeopleTools 8.61 e 8.62 foram afetados por uma vulnerabilidade de execução remota sem autenticação no componente Environment Management. A Mandiant observou exploração entre 27/05 e 09/06, antes do advisory da Oracle em 10/06, atribuindo a campanha ao cluster UNC6240/ShinyHunters.',
  shareSummary: 'Radar AppSec: CVE-2026-35273 no PeopleSoft é RCE pré-auth CVSS 9.8 e foi explorada como zero-day. A lição: interfaces administrativas “auxiliares” expostas à internet entram no attack surface tanto quanto a aplicação principal.',
  readTime: '12 MIN READ',
  badge: 'APPSEC / ACTIVE EXPLOIT',
  stats: [
    { label: 'CVE', value: '2026-35273' },
    { label: 'CVSS', value: '9.8' },
    { label: 'AUTH', value: 'NÃO' },
    { label: 'EXPLOIT', value: 'CONFIRMADO', note: 'zero-day observado antes do advisory' },
  ],
  sections: [
    { title: 'O que torna este caso prioritário', paragraphs: ['Não é apenas o CVSS. Existe exploração real, a falha é remota e não autenticada, o resultado pode ser RCE e o alvo é infraestrutura de aplicação corporativa. Isso combina probabilidade alta com blast radius potencialmente elevado.'] },
    { title: 'O “componente esquecido” no perímetro', paragraphs: ['A atividade observada estava alinhada a endpoints PSEMHUB. Componentes de gestão, atualização, integração e diagnóstico frequentemente recebem menos atenção que o front-end principal, embora possam executar com privilégios fortes e possuir rotas próprias.'] },
    { title: 'Ação para um programa de AppSec', bullets: ['Inventariar interfaces administrativas e auxiliares, não só URLs de negócio.', 'Marcar internet-facing e autenticação por endpoint/componente.', 'Cruzar CVE com KEV/exploit status, exposição e criticidade.', 'Ter owners claros para middleware e produtos comerciais.', 'Quando patch imediato não for possível, remover/bloquear PSEMHUB externamente conforme orientação do fornecedor.', 'Fazer hunting retroativo: patch não prova ausência de comprometimento anterior.'] },
  ],
  sources: [
    { label: 'Oracle · Security Alert CVE-2026-35273', url: 'https://www.oracle.com/security-alerts/alert-cve-2026-35273.html' },
    { label: 'Mandiant/GTIG · ShinyHunters targets PeopleSoft', url: 'https://cloud.google.com/blog/topics/threat-intelligence/shinyhunters-targets-education-sector-oracle-exploit/' },
  ],
});
