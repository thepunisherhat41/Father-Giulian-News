import type { EditorialDossier } from './editorial-dossier-types';

export const editorialDaily20260815: Record<string, EditorialDossier> = {
  brasil: {
    readingTime: '9 MIN DE LEITURA', title: 'Verificar idade sem criar um novo problema de privacidade', deck: 'Proteção infantil no ambiente digital parece simples até a solução começar a exigir documentos, biometria ou dados demais de todo mundo.',
    opening: ['Aferição de idade é um problema de engenharia de risco, não apenas um campo “data de nascimento”.', 'O sistema precisa reconhecer quando a proteção deve aumentar sem transformar cada acesso em coleta permanente de identidade.'],
    sections: [
      { kicker: 'RISCO', title: 'Nem todo serviço exige a mesma certeza sobre idade', paragraphs: ['Um jogo casual, um serviço financeiro e uma plataforma com conteúdo adulto têm riscos diferentes. O mecanismo de aferição deve acompanhar a criticidade e o tipo de dano possível.'] },
      { kicker: 'PRIVACIDADE', title: 'Mais prova de identidade também cria mais superfície de ataque', paragraphs: ['Documento, selfie e biometria podem melhorar certeza, mas criam dados valiosos para vazamento e fraude. Minimização e retenção limitada entram no desenho.'] },
      { kicker: 'FAMÍLIA', title: 'Controle parental funciona melhor quando não depende apenas da criança', paragraphs: ['Configuração do sistema operacional, loja de aplicativos, conta familiar e limites de compra formam uma defesa em camadas.'] },
    ], callout: { label: 'IDEIA CENTRAL', title: 'Proteção proporcional ao risco', text: 'A melhor solução não é a que coleta mais identidade; é a que reduz o risco com a menor invasão necessária.' },
    takeaways: ['Aferição de idade é problema de risco e privacidade.', 'Minimização de dados continua importante.', 'Controles no dispositivo e na plataforma se complementam.'],
    sources: [{ label: 'ANPD · ECA Digital', url: 'https://www.gov.br/anpd/pt-br/assuntos/eca-digital/' }],
  },
  politica: {
    readingTime: '9 MIN DE LEITURA', title: '19h é uma linha de protocolo, não uma linha de chegada', deck: 'O calendário eleitoral separa atos partidários, registros formais e julgamentos porque cada etapa responde a uma pergunta diferente.',
    opening: ['Hoje é fácil ver um nome publicado em rede social e assumir que a situação eleitoral está encerrada.', 'O método mais seguro é acompanhar o status processual na Justiça Eleitoral e separar isso de propaganda, proposta e pesquisa.'],
    sections: [
      { kicker: 'HOJE', title: 'O prazo termina às 19h', paragraphs: ['Partidos, federações e coligações devem transmitir os pedidos até o horário legal. O CANDex de 2026 opera integralmente on-line.'] },
      { kicker: 'DEPOIS', title: 'A Justiça continua trabalhando', paragraphs: ['Documentos, elegibilidade, impugnações e recursos continuam sendo analisados. A palavra “registrado” precisa de contexto.'] },
      { kicker: 'AMANHÃ', title: 'A propaganda muda o ambiente informacional', paragraphs: ['Com propaganda geral permitida, aumenta a mistura entre conteúdo orgânico, anúncios, cortes e material partidário. Autoria e fonte passam a valer ainda mais.'] },
    ], callout: { label: 'MÉTODO', title: 'Status jurídico ≠ campanha', text: 'Use o TSE/TRE para situação processual; use programa e entrevistas para propostas. Não misture as duas fontes.' },
    takeaways: ['15/08 às 19h fecha o pedido.', 'Julgamento continua.', '16/08 abre a propaganda geral.'],
    sources: [{ label: 'TSE · Calendário Eleitoral 2026', url: 'https://www.tse.jus.br/eleicoes/calendario-eleitoral/calendario-eleitoral' }],
  },
  mundo: {
    readingTime: '9 MIN DE LEITURA', title: 'Quando quatro choques diferentes chegam ao mesmo carrinho de compras', deck: 'Clima, energia, fertilizante e logística não precisam subir juntos; basta se encadearem para o alimento ficar mais caro.',
    opening: ['Uma safra ruim é um choque agrícola. Diesel caro é um choque de energia. Fertilizante escasso é um choque de insumo. Guerra em rota de grãos é um choque logístico.', 'Quando eles se sobrepõem, o preço final incorpora problemas de etapas diferentes.'],
    sections: [
      { kicker: 'CADEIA', title: 'A fazenda é só o começo', paragraphs: ['Produção, secagem, armazenamento, processamento e transporte consomem energia e capital. O custo pode subir mesmo quando a colheita local é boa.'] },
      { kicker: 'CLIMA', title: 'El Niño altera probabilidade, não garante desastre', paragraphs: ['Fenômenos climáticos mudam padrões de chuva e temperatura por região. A consequência agrícola depende de cultura, local e momento da safra.'] },
      { kicker: 'POLÍTICA MONETÁRIA', title: 'Banco central observa o segundo efeito', paragraphs: ['O problema fica maior quando um choque de comida muda salários, expectativas e outros preços, deixando de ser temporário.'] },
    ], callout: { label: 'PARA GUARDAR', title: 'Inflação de comida é uma cadeia', text: 'Olhar apenas o preço da commodity perde energia, insumo, câmbio, frete e varejo.' },
    takeaways: ['Choques diferentes podem se somar.', 'Clima muda probabilidades regionais.', 'Persistência importa mais que um pico isolado.'],
    sources: [{ label: 'Reuters · Take Five · 14/08/2026', url: 'https://www.reuters.com/business/take-five/global-markets-themes-graphic-2026-08-14/' }],
  },
  planeta: {
    readingTime: '8 MIN DE LEITURA', title: 'Rios guardam versões antigas de si mesmos na paisagem', deck: 'Um lago em ferradura é quase um arquivo geológico: água parada ocupando uma curva que já foi corrente principal.',
    opening: ['Mapas de planícies aluviais parecem cheios de cicatrizes curvas porque canais migram.', 'A paisagem plana dá espaço para o rio erodir um lado, depositar no outro e redesenhar lentamente o próprio caminho.'],
    sections: [
      { kicker: 'DINÂMICA', title: 'Erosão externa, deposição interna', paragraphs: ['A margem externa recebe fluxo mais energético; a interna tende a acumular sedimento. O canal se desloca.'] },
      { kicker: 'CORTE', title: 'Cheias podem acelerar o atalho', paragraphs: ['Quando o pescoço da curva fica estreito, o rio pode conectar dois trechos e abandonar o arco antigo.'] },
      { kicker: 'ECOLOGIA', title: 'O canal abandonado vira outro habitat', paragraphs: ['Com menos corrente, profundidade e oxigênio mudam. Sedimento e matéria orgânica transformam o lago ao longo dos anos.'] },
    ], callout: { label: 'VISÃO DE SATÉLITE', title: 'Curvas são memória', text: 'O formato da planície revela por onde a água já passou.' },
    takeaways: ['Meandros migram.', 'Cutoffs criam oxbow lakes.', 'O lago continua mudando depois do corte.'],
    sources: [{ label: 'USGS · Oxbow Lakes', url: 'https://eros.usgs.gov/earthshots/oxbow-lakes' }],
  },
  animais: {
    readingTime: '8 MIN DE LEITURA', title: 'Inteligência animal não cabe numa escada com humanos no topo', deck: 'Uso de ferramenta é valioso porque força a perguntar qual problema o animal resolve — e com quais recursos do próprio corpo e ambiente.',
    opening: ['Uma mão com polegar facilita certas ferramentas. Um bico, uma pata ou um corpo marinho oferecem outras possibilidades.', 'Comparar espécies exige olhar para tarefas ecológicas reais, não aplicar a mesma prova a todas.'],
    sections: [
      { kicker: 'FUNÇÃO', title: 'Ferramenta é objeto usado para produzir efeito', paragraphs: ['Quebrar concha, alcançar alimento ou proteger uma parte do corpo pode envolver seleção e manipulação deliberada de objetos.'] },
      { kicker: 'APRENDIZADO', title: 'Repetição ajuda a separar acaso de estratégia', paragraphs: ['Pesquisadores observam frequência, escolha do objeto, ajuste à tarefa e transmissão por aprendizagem.'] },
      { kicker: 'EVOLUÇÃO', title: 'Soluções parecidas podem surgir longe umas das outras', paragraphs: ['Pressões semelhantes podem levar linhagens distintas a comportamentos funcionalmente parecidos.'] },
    ], callout: { label: 'MUDANÇA DE LENTE', title: 'Pergunte “para que serve?”', text: 'A função ecológica explica mais que a semelhança visual com comportamento humano.' },
    takeaways: ['Ferramentas aparecem em grupos diversos.', 'Flexibilidade é mais informativa que um ato isolado.', 'Cognição deve ser lida no contexto da espécie.'],
    sources: [{ label: 'Smithsonian Ocean', url: 'https://ocean.si.edu/ocean-life/marine-mammals/sea-otters' }],
  },
  tempo: {
    readingTime: '7 MIN DE LEITURA', title: 'Frente fria hoje, veranico depois: o risco muda em 24 horas', deck: 'O fim de semana em São Paulo ilustra por que previsão útil é sequência, não apenas ícone de nuvem.',
    opening: ['Hoje o desconforto pode ser vento, nebulosidade e chuvisco. Amanhã, com a frente se afastando, o problema começa a migrar para calor e ar seco.', 'Planejar dois dias exige olhar a tendência, não extrapolar o sábado para o domingo.'],
    sections: [
      { kicker: 'SÁBADO', title: 'Muitas nuvens seguram a temperatura', paragraphs: ['O leste paulista ainda recebe influência marítima e vento de sudeste, mantendo máxima mais contida.'] },
      { kicker: 'DOMINGO', title: 'O sistema se afasta', paragraphs: ['Mais sol aumenta a temperatura e começa a derrubar a umidade no período da tarde.'] },
      { kicker: 'SEMANA', title: 'Ar seco muda saúde e incêndio', paragraphs: ['Hidratação, conforto respiratório e risco de queimadas passam a ser mais relevantes se o padrão quente e seco persistir.'] },
    ], callout: { label: 'PREVISÃO ÚTIL', title: 'Leia a transição', text: 'O melhor planejamento vem de saber como o sistema está evoluindo, não apenas da máxima do dia.' },
    takeaways: ['Hoje ainda há frente fria.', 'Domingo melhora e aquece.', 'Baixa umidade ganha importância depois.'],
    sources: [{ label: 'CGE / Folha · 15/08/2026', url: 'https://www1.folha.uol.com.br/cotidiano/2026/08/sabado-15-deve-ter-muitas-nuvens-e-temperatura-maxima-de-25c-em-sao-paulo.shtml' }],
  },
  curiosidades: {
    readingTime: '8 MIN DE LEITURA', title: 'O nariz percebe uma tempestade de química microscópica', deck: 'Petrichor transforma uma cena comum — primeiras gotas no chão — em encontro entre microbiologia, superfície mineral e aerossóis.',
    opening: ['Chuva quase pura tem pouco cheiro próprio. O aroma marcante vem do que a água desloca e lança no ar.', 'Isso explica por que uma garoa depois de dias secos pode cheirar mais forte que uma chuva longa em solo já molhado.'],
    sections: [
      { kicker: 'SOLO', title: 'Compostos se acumulam no seco', paragraphs: ['Óleos vegetais e produtos de atividade microbiana aderem a superfícies e poros.'] },
      { kicker: 'MICRÓBIOS', title: 'Geosmina é uma assinatura terrosa', paragraphs: ['Bactérias do solo produzem geosmina; o nariz humano consegue percebê-la em concentrações muito baixas.'] },
      { kicker: 'GOTA', title: 'Impacto cria aerossol', paragraphs: ['Pequenas bolhas podem se formar quando gotas atingem material poroso e liberar partículas ao romper.'] },
    ], callout: { label: 'PALAVRA BONITA', title: 'Petrichor', text: 'O nome foi cunhado para descrever o odor característico que acompanha a primeira chuva após período seco.' },
    takeaways: ['O cheiro vem do solo e de seus organismos.', 'Geosmina é parte importante.', 'A chuva funciona como mecanismo de liberação.'],
    sources: [{ label: 'Genesis of petrichor', url: 'https://www.sciencedirect.com/science/article/abs/pii/0016703766900251' }],
  },
  musica: {
    readingTime: '8 MIN DE LEITURA', title: 'Duas tradições, a mesma lição: identidade nasce do ritmo', deck: 'Soundgarden e Tião Carreiro & Pardinho parecem mundos distantes, mas ambos mostram como uma levada reconhecível define a personalidade antes mesmo da letra.',
    opening: ['No rock, peso não precisa ser velocidade. Na viola, virtuosismo não precisa ser excesso de nota.', 'As duas faixas do dia funcionam melhor quando você escuta a relação entre pulso, espaço e voz.'],
    sections: [
      { kicker: 'ROCK', title: 'Fell on Black Days', paragraphs: ['A guitarra cria um chão instável e hipnótico. Cornell canta por cima com uma melodia que alterna contenção e explosão.'] },
      { kicker: 'VIOLA', title: 'Pagode em Brasília', paragraphs: ['A viola articula ritmo e fraseado de forma inseparável. É uma boa entrada para o pagode caipira como linguagem própria.'] },
      { kicker: 'EXERCÍCIO', title: 'Ouça duas vezes', paragraphs: ['Na primeira, siga a voz. Na segunda, ignore a voz e acompanhe apenas o instrumento que sustenta o pulso. A música muda sem mudar.'] },
    ], callout: { label: 'TOP 5', title: 'O arquivo raiz permanece', text: 'Tonico & Tinoco, Tião Carreiro & Pardinho, Liu & Léu, Pena Branca & Xavantinho e Cascatinha & Inhana seguem fixos como mapa histórico.' },
    takeaways: ['Ritmo define identidade.', 'Peso não é sinônimo de velocidade.', 'Viola pode ser motor rítmico.'], sources: [],
  },
  gravidez: {
    readingTime: '9 MIN DE LEITURA', title: 'Na gravidez inicial, um intervalo de dias pode ser biologicamente enorme', deck: 'A passagem de 5s+6d para 6 semanas parece pequena no calendário, mas ocorre numa fase em que estruturas embrionárias mudam rapidamente.',
    opening: ['No início, comparar um exame com uma fotografia de referência pode gerar ansiedade desnecessária.', 'Datação, via do ultrassom, qualidade do equipamento e desenvolvimento individual mudam o que aparece.'],
    sections: [
      { kicker: 'DESENVOLVIMENTO', title: 'Semana 6 é construção acelerada', paragraphs: ['Brotos de membros, cérebro e sistemas internos seguem se organizando. O embrião ainda mede poucos milímetros.'] },
      { kicker: 'ULTRASSOM', title: '“Pode aparecer” não significa “tem obrigação de aparecer”', paragraphs: ['Atividade cardíaca às vezes é detectável por via vaginal nessa fase, mas um exame isolado muito precoce precisa de interpretação clínica e, quando indicado, acompanhamento.'] },
      { kicker: 'DATAÇÃO', title: 'Primeiro trimestre é a melhor janela para confirmar idade', paragraphs: ['Medições ultrassonográficas no primeiro trimestre são as mais precisas para confirmar ou estabelecer idade gestacional.'] },
    ], callout: { label: 'SEGURANÇA', title: 'Exame é contexto', text: 'Resultado precoce deve ser interpretado pelo obstetra junto com sintomas, datação e evolução.' },
    takeaways: ['Amanhã começa a semana 6.', 'Poucos dias mudam a imagem.', 'Datação do primeiro trimestre é valiosa.'],
    sources: [{ label: 'NHS · Week 6', url: 'https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-6/' }, { label: 'ACOG · Methods for Estimating Due Date', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date' }],
  },
  pai: {
    readingTime: '7 MIN DE LEITURA', title: 'Ser presente também é ser o sistema de memória do casal', deck: 'Uma boa consulta depende menos de “lembrar na hora” e mais de chegar com as perguntas já organizadas.',
    opening: ['Sintomas, exames, nomes de suplementos e dúvidas aparecem em momentos diferentes do dia.', 'Colocar tudo numa nota compartilhada transforma informação espalhada em contexto clínico utilizável.'],
    sections: [
      { kicker: 'ORGANIZAÇÃO', title: 'Capture na hora em que surgir', paragraphs: ['Uma dúvida anotada em dez segundos hoje vale mais que tentar reconstruí-la na sala de espera.'] },
      { kicker: 'RESPONSABILIDADE', title: 'Assuma a manutenção da lista', paragraphs: ['O parceiro pode organizar documentos e atualizar perguntas sem controlar decisões sobre o corpo da gestante.'] },
      { kicker: 'CONSULTA', title: 'Priorize o que muda conduta', paragraphs: ['Sintomas novos, medicamentos, exames e sinais de alerta vêm antes de curiosidades gerais.'] },
    ], callout: { label: 'MISSÃO', title: 'Uma nota, quatro blocos', text: 'Sintomas · remédios/suplementos · exames · perguntas.' },
    takeaways: ['Anotar reduz carga mental.', 'Organizar não é vigiar.', 'Perguntas melhores melhoram a consulta.'],
    sources: [{ label: 'NHS · Antenatal appointments', url: 'https://www.nhs.uk/pregnancy/your-pregnancy-care/your-antenatal-care-and-appointments/' }],
  },
  carros: {
    readingTime: '9 MIN DE LEITURA', title: 'Confiabilidade histórica não autoriza comprar um exemplar ruim', deck: 'O City é conhecido por durabilidade, mas em um carro de 11 anos o histórico individual pesa mais que a reputação média do modelo.',
    opening: ['Dois carros iguais na tabela podem ter custos futuros completamente diferentes.', 'Um recebeu fluidos, pneus e suspensão no tempo certo. O outro viveu de manutenção corretiva e estética. A FIPE não enxerga essa diferença.'],
    sections: [
      { kicker: 'PREÇO', title: 'O DX manual já passou dos R$ 60 mil', paragraphs: ['Com FIPE de R$ 62.047, ele entra numa zona em que vale comparar carros mais novos e versões de outros segmentos.'] },
      { kicker: 'HISTÓRICO', title: 'Nota fiscal vale mais que “carro de senhor”', paragraphs: ['Documentação de revisão, pneus coerentes e inspeção estrutural são evidência; narrativa de vendedor não é.'] },
      { kicker: 'PRIMEIRO ANO', title: 'Reserve dinheiro para zerar manutenção', paragraphs: ['Óleo, filtros, fluidos, pneus, suspensão e bateria podem transformar um preço de compra “bom” em custo alto rapidamente.'] },
    ], callout: { label: 'COMPRA USADA', title: 'Exemplar > modelo', text: 'Depois de uma década, estado e histórico vencem ficha técnica.' },
    takeaways: ['FIPE é referência, não laudo.', 'Histórico documentado tem valor.', 'Compare custo do primeiro ano.'],
    sources: [{ label: 'Webmotors · City DX 2015', url: 'https://www.webmotors.com.br/tabela-fipe/carros/honda/city/2015/15-dx-16v-flex-4p-manual' }],
  },
  motos: {
    readingTime: '8 MIN DE LEITURA', title: 'Queda de moto deixa pistas em linha reta', deck: 'Uma naked pode receber manete novo e pintura bonita; geometria de bengala, mesa e roda costuma contar uma história mais difícil de esconder.',
    opening: ['Motos leves caem. Isso não condena automaticamente uma usada.', 'O problema é quando um impacto mais forte foi reparado cosmeticamente sem devolver alinhamento e integridade ao conjunto.'],
    sections: [
      { kicker: 'FRENTE', title: 'Olhe o eixo como um sistema', paragraphs: ['Guidão, mesa, bengalas, eixo e roda precisam trabalhar alinhados. Desvio pequeno pode aparecer como direção torta ou desgaste irregular.'] },
      { kicker: 'CONSUMÍVEIS', title: 'Pneu e relação já são parte do preço', paragraphs: ['Uma moto barata com dois pneus, kit relação e bateria vencidos pode custar mais que outra anunciada acima da FIPE.'] },
      { kicker: 'ABS', title: 'Luz de falha não deve ser normalizada', paragraphs: ['ABS é item de segurança; falha exige diagnóstico, não gambiarra para apagar indicador.'] },
    ], callout: { label: 'TESTE', title: 'Motor frio + linha reta', text: 'Peça partida fria e faça teste de direção em baixa velocidade antes de se encantar com estética.' },
    takeaways: ['Geometria revela impactos.', 'Consumíveis entram no custo real.', 'ABS precisa estar funcional.'],
    sources: [{ label: 'Webmotors · FZ25 2018', url: 'https://www.webmotors.com.br/tabela-fipe/motos/yamaha/fz25-fazer-abs/2018' }],
  },
  mecanica: {
    readingTime: '8 MIN DE LEITURA', title: 'Freio hidráulico precisa de líquido que continue líquido quando tudo esquenta', deck: 'A água absorvida pelo fluido é perigosa porque reduz a margem térmica exatamente quando o sistema é mais exigido.',
    opening: ['No trânsito leve, fluido degradado pode parecer perfeito.', 'Numa serra, descida longa ou frenagem repetida, temperatura cresce e a diferença entre fluido novo e contaminado aparece.'],
    sections: [
      { kicker: 'FÍSICA', title: 'Líquido transmite pressão; vapor comprime', paragraphs: ['Bolhas de vapor tornam o pedal mais esponjoso e reduzem a capacidade de transmitir pressão de forma firme.'] },
      { kicker: 'QUÍMICA', title: 'Umidade também favorece corrosão', paragraphs: ['Água dentro do circuito pode atacar cilindros, linhas e módulos ao longo do tempo.'] },
      { kicker: 'MANUTENÇÃO', title: 'Manual define o intervalo', paragraphs: ['Especificação DOT e prazo variam por veículo. A regra correta é seguir fabricante, não a cor observada no reservatório.'] },
    ], callout: { label: 'ERRO COMUM', title: '“Está cheio, então está bom”', text: 'Nível não mede teor de água nem ponto de ebulição.' },
    takeaways: ['Fluido absorve umidade.', 'Calor expõe o problema.', 'Siga especificação e intervalo.'], sources: [],
  },
  nautica: {
    readingTime: '8 MIN DE LEITURA', title: 'Em uma emergência, falar direito é parte do equipamento', deck: 'VHF transforma posição, situação e intenção em coordenação. Um rádio potente com mensagem confusa perde valor.',
    opening: ['No mar, celular depende de cobertura e infraestrutura terrestre. VHF conecta embarcações e estações próximas diretamente.', 'A disciplina de canal existe para preservar espaço de chamada e socorro quando ele realmente for necessário.'],
    sections: [
      { kicker: 'CANAL 16', title: 'Chame e libere', paragraphs: ['Comunicação rotineira deve migrar para canal adequado depois do contato inicial.'] },
      { kicker: 'SOCORRO', title: 'Posição é informação de alto valor', paragraphs: ['Coordenadas, referência geográfica, natureza da emergência e número de pessoas reduzem ambiguidade.'] },
      { kicker: 'TREINO', title: 'Tripulação precisa saber usar', paragraphs: ['Procedimento deve ser praticado antes da emergência, incluindo localização do rádio, botão de transmissão e leitura da posição.'] },
    ], callout: { label: 'REGRA', title: 'Curto, claro, repetível', text: 'Uma mensagem boa pode ser compreendida sob ruído, estresse e distância.' },
    takeaways: ['Canal 16 é crítico.', 'Posição precisa estar pronta.', 'Treino precede emergência.'],
    sources: [{ label: 'Marinha do Brasil · Segurança da Navegação', url: 'https://www.marinha.mil.br/dpc/seguranca-da-navegacao' }],
  },
  viagens: {
    readingTime: '9 MIN DE LEITURA', title: 'Tiradentes recompensa quem não transforma patrimônio em checklist', deck: 'A escala pequena do centro permite trocar “quantos pontos vi?” por “o que esta rua conta sobre o período colonial?”.',
    opening: ['Calçamento, igrejas, museus e morros fazem parte da mesma narrativa urbana.', 'Ficar duas noites permite caminhar sem pressa e ainda conectar a cidade a São João del-Rei.'],
    sections: [
      { kicker: 'ROTA', title: 'Faça o centro por camadas', paragraphs: ['Comece por rua e arquitetura, depois museu e igreja; assim cada interior ganha contexto externo.'] },
      { kicker: 'CUSTO', title: 'Ingresso é a menor parte', paragraphs: ['Museus têm valores baixos; combustível, pedágio, hospedagem e alimentação centralizam o orçamento real.'] },
      { kicker: 'TEMPO', title: 'Fim de semana não precisa ser correria', paragraphs: ['Reserve pausas para café e deslocamento a pé. Patrimônio histórico funciona melhor quando existe tempo para observar detalhe.'] },
    ], callout: { label: 'IDEIA', title: 'Tiradentes + São João', text: 'A combinação mostra duas escalas urbanas complementares do mesmo circuito histórico mineiro.' },
    takeaways: ['Centro é caminhável.', 'Museus custam pouco frente à viagem.', 'Duas noites dão ritmo melhor.'],
    sources: [{ label: 'Museu de Sant’Ana', url: 'https://museudesantana.org.br/visite/planeje-sua-visita/' }],
  },
  financas: {
    readingTime: '8 MIN DE LEITURA', title: 'A sua inflação começa na distribuição do seu salário', deck: 'Se metade do orçamento vai para itens que estão subindo e o índice médio pesa esses itens menos, a experiência doméstica diverge naturalmente da manchete.',
    opening: ['Índices são essenciais para comparar economia, mas não substituem uma planilha familiar.', 'A defesa prática contra choque de alimentos começa sabendo quanto mercado, transporte e moradia consomem da renda.'],
    sections: [
      { kicker: 'PESO', title: 'Cada casa tem sua cesta', paragraphs: ['Duas famílias com mesma renda podem ter inflação percebida muito diferente por localização, transporte e composição alimentar.'] },
      { kicker: 'REAÇÃO', title: 'Substituição é melhor que privação cega', paragraphs: ['Trocar marca, corte, sazonalidade e local de compra pode preservar nutrição e reduzir custo.'] },
      { kicker: 'DÍVIDA', title: 'Rotativo transforma inflação em juros', paragraphs: ['Quando consumo essencial é financiado sem plano, o choque temporário pode virar obrigação permanente.'] },
    ], callout: { label: 'MÉTRICA', title: 'Acompanhe 5 categorias', text: 'Moradia · alimentação · transporte · saúde · dívida. Elas explicam mais sua sensação de custo do que um número isolado.' },
    takeaways: ['IPCA é média.', 'Orçamento pessoal revela exposição.', 'Evite transformar choque em dívida cara.'],
    sources: [{ label: 'Reuters · Take Five', url: 'https://www.reuters.com/business/take-five/global-markets-themes-graphic-2026-08-14/' }],
  },
  tecnologia: {
    readingTime: '8 MIN DE LEITURA', title: 'Tecnologia vencedora é a que otimiza o problema certo', deck: 'Baterias de sódio mostram por que comparar apenas a melhor métrica pode esconder aplicações economicamente superiores.',
    opening: ['Um carro de longa distância valoriza energia por peso. Uma bateria estacionária não se importa tanto com dezenas de quilos extras.', 'Quando o requisito muda, a tecnologia “inferior” em densidade pode ser melhor em custo e cadeia de suprimento.'],
    sections: [
      { kicker: 'QUÍMICA', title: 'Sódio e lítio carregam trade-offs diferentes', paragraphs: ['Ambos movem íons entre eletrodos, mas materiais e estruturas cristalinas resultam em densidades, ciclos e custos diferentes.'] },
      { kicker: 'SISTEMA', title: 'Custo por kWh instalado vale mais que célula isolada', paragraphs: ['Pack, refrigeração, controle eletrônico, ciclo de vida e manutenção determinam economia real.'] },
      { kicker: 'CADEIA', title: 'Abundância também é tecnologia', paragraphs: ['Material disponível em mais lugares reduz exposição a concentração geopolítica e gargalos de mineração.'] },
    ], callout: { label: 'PERGUNTA', title: 'Qual requisito manda?', text: 'Peso? custo? ciclo? segurança? disponibilidade? A resposta define a química mais adequada.' },
    takeaways: ['Densidade não é a única métrica.', 'Aplicação define o trade-off.', 'Cadeia de suprimento também pesa.'],
    sources: [{ label: 'DOE · Energy Storage', url: 'https://www.energy.gov/oe/energy-storage' }],
  },
  seguranca: {
    readingTime: '10 MIN DE LEITURA', title: 'O pipeline é uma máquina com chaves de produção', deck: 'Atacantes tratam CI/CD como infraestrutura de identidade: comprometer um workflow pode valer mais do que explorar a aplicação final.',
    opening: ['Um runner pode ter acesso a registry, cloud, artefatos, package manager e deploy.', 'Se um workflow malicioso consegue falar com a internet, basta ler um segredo e exfiltrá-lo para transformar automação em ponto de pivô.'],
    sections: [
      { kicker: 'ACESSO', title: 'Comprometa a automação, herde os privilégios', paragraphs: ['O atacante ganha tudo o que o job pode acessar. Isso torna permissões do token e segredos herdados parte do blast radius.'] },
      { kicker: 'PROPAGAÇÃO', title: 'Credencial roubada sobrevive ao job', paragraphs: ['Runner efêmero desaparece; token persistente pode continuar útil até revogação.'] },
      { kicker: 'DEFESA', title: 'Identidade curta + egress controlado', paragraphs: ['OIDC, tokens mínimos, approval gates e telemetria de rede quebram etapas diferentes da cadeia.'] },
    ], callout: { label: 'THREAT MODEL', title: 'CI/CD é Tier 0 de software', text: 'Quem controla o build pode controlar o que todos os usuários recebem.' },
    takeaways: ['Workflow é superfície de ataque.', 'Segredo longo amplia impacto.', 'Egress e revogação importam.'],
    sources: [{ label: 'GitHub · Disrupting supply chain attacks', url: 'https://github.blog/security/supply-chain-security/disrupting-supply-chain-attacks-on-npm-and-github-actions/' }],
  },
  'appsec-ssdlc': {
    readingTime: '11 MIN DE LEITURA', title: 'Pwn request é uma quebra de trust boundary escrita em YAML', deck: 'O problema não é o evento isolado; é misturar código controlado pelo atacante com credenciais e contexto privilegiados no mesmo caminho de execução.',
    opening: ['pull_request_target existe para tarefas que precisam do contexto do repositório base.', 'O risco nasce quando alguém decide executar a contribuição externa dentro desse mesmo contexto.'],
    sections: [
      { kicker: 'BOUNDARY', title: 'PR de fork é input não confiável', paragraphs: ['Código, nome de branch, título, comentários e arquivos podem ser controlados por terceiros. Tudo precisa ser tratado como dado até passar por uma fronteira explícita de confiança.'] },
      { kicker: 'ARQUITETURA', title: 'Separe análise de privilégio', paragraphs: ['Um job sem segredos pode compilar e testar o fork. Outro job privilegiado opera somente sobre artefatos ou metadados validados, sem executar código arbitrário da contribuição.'] },
      { kicker: 'GOVERNANÇA', title: 'Policy ganha de revisão manual infinita', paragraphs: ['Bloquear triggers de alto risco, exigir pinning e limitar permissões por padrão transforma boas práticas em guardrails.'] },
    ], callout: { label: 'REGRA DE OURO', title: 'Untrusted code + privileged token = desenho inválido', text: 'Se você precisa dos dois, redesenhe a fronteira antes de procurar um workaround.' },
    takeaways: ['PR de fork é input hostil.', 'Separe jobs por confiança.', 'Policy e least privilege reduzem risco sistêmico.'],
    sources: [{ label: 'GitHub · Safer pull_request_target defaults', url: 'https://github.blog/changelog/2026-06-18-safer-pull_request_target-defaults-for-github-actions-checkout/' }],
  },
};
