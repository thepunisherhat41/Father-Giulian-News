import { dailyContent, edition, todayDrops } from './daily-content';
import { politicsTracker } from './politics-2026';
import { applyDailyOverride20260821_10h as apply10hBase } from './daily-overrides-2026-08-21-10h-base';

let applied = false;

export function applyDailyOverride20260821_17h(force = false) {
  if (applied && !force) return;
  apply10hBase(true);
  applied = true;

  const set = (slug: string, data: any) => Object.assign(dailyContent[slug], data);
  const replaceDrop = (slug: string, data: any) => {
    const index = todayDrops.findIndex((item) => item.slug === slug);
    if (index >= 0) todayDrops[index] = { ...todayDrops[index], ...data };
  };

  Object.assign(edition, {
    date: '22/08/2026',
    dateLabel: '22 AGO 2026',
    title: 'Daily Intelligence · 22 de agosto',
  });

  Object.assign(politicsTracker, {
    updatedAt: '22/08/2026 · 10h',
    notice: 'A campanha eleitoral segue ativa. A pesquisa Datafolha divulgada em 21/08 é uma fotografia amostral de intenção de voto e não substitui o status jurídico das candidaturas no TSE. Pesquisa, proposta, propaganda e decisão judicial são trilhas diferentes.',
  });

  set('hoje', {
    title: '22 áreas revisadas · atualização das 10h de 22 de agosto',
    summary: 'O hard gate foi refeito nesta manhã. Política, Mundo, Tempo e Clima, Games, Gravidez e Ser Pai receberam mudança material; as outras 16 áreas foram validadas porque continuam corretas e úteis sem rotação artificial.',
    shareSummary: '22/08 · 10h: 22 áreas revisadas. Seis áreas foram atualizadas com fatos ou mudança material; 16 foram validadas hoje.',
    readTime: '22 MISSÕES',
    badge: '10H · REVISÃO COMPLETA',
  });

  set('politica', {
    title: 'Datafolha mostra disputa presidencial competitiva — e margem de erro continua essencial para ler o resultado',
    summary: 'Pesquisa divulgada em 21 de agosto mostra Lula com 47% e Flávio Bolsonaro com 43% em um cenário simulado de segundo turno. A diferença caiu um ponto em relação ao levantamento anterior, mas a variação permanece dentro da margem de erro informada.',
    shareSummary: 'Política 22/08 · 10h: Datafolha mostra 47% a 43% em cenário de segundo turno. É pesquisa amostral, não previsão do resultado nem mudança automática na situação jurídica das candidaturas.',
    readTime: '8 MIN READ',
    badge: 'POLÍTICA · ATUALIZADO 10H',
    sections: [
      { title: 'O que a pesquisa mostrou', paragraphs: ['A Reuters reportou pesquisa Datafolha publicada em 21/08 na qual Lula aparece com 47% e Flávio Bolsonaro com 43% em uma simulação de segundo turno. No levantamento anterior, o placar citado era 48% a 43%.'], bullets: ['A margem de erro informada é de dois pontos percentuais.', 'A redução de um ponto na vantagem de Lula não deve ser tratada isoladamente como tendência definitiva.', 'O levantamento mede intenção declarada de voto em uma amostra, não o resultado futuro da eleição.'] },
      { title: 'Por que importa', paragraphs: ['Pesquisas ajudam a acompanhar competitividade, rejeição, migração de voto e estratégias de campanha. Para o eleitor, o uso mais responsável é observar séries de pesquisas e metodologia, não transformar um único número em certeza.'] },
      { title: 'O que não concluir', bullets: ['Pesquisa não é urna.', 'Diferenças dentro da margem de erro exigem cautela.', 'Intenção de voto não altera deferimento, impugnação ou situação jurídica de candidatura.'] },
      { title: 'O que acompanhar', bullets: ['Próximos levantamentos de institutos diferentes.', 'Mudanças após início do horário eleitoral no rádio e na TV em 28/08.', 'Atualizações oficiais de candidaturas no DivulgaCandContas.'] },
    ],
    sources: [{ label: 'Reuters · Datafolha · 21/08/2026', url: 'https://www.reuters.com/world/americas/lula-retains-lead-over-flavio-bolsonaro-ahead-brazil-election-datafolha-shows-2026-08-21/' }],
  });
  replaceDrop('politica', { title: 'Datafolha: 47% a 43% em cenário de segundo turno; margem de erro pede cautela', detail: 'A nova pesquisa mantém a disputa competitiva. Levantamento é fotografia amostral, não previsão nem status jurídico.' });

  set('mundo', {
    title: 'Irã libera passagem de alguns petroleiros iraquianos por Hormuz, mas fluxo continua muito abaixo do normal',
    summary: 'Teerã concedeu autorização especial para alguns navios iraquianos atravessarem o Estreito de Hormuz. A exceção alivia parte da pressão sobre o Iraque, mas não representa reabertura ampla da rota e o risco geopolítico segue elevado.',
    shareSummary: 'Mundo 22/08 · 10h: alguns petroleiros iraquianos receberam autorização especial para passar por Hormuz. Isso não significa reabertura total; tráfego segue muito reduzido e novas sanções dos EUA são esperadas para segunda-feira.',
    readTime: '8 MIN READ',
    badge: 'MUNDO · ATUALIZADO 10H',
    sections: [
      { title: 'O que aconteceu', paragraphs: ['Segundo a Reuters, o Irã autorizou a passagem de alguns petroleiros iraquianos após pedidos de Bagdá. O Iraque depende fortemente de rotas do Golfo e vem buscando alternativas de exportação por Turquia, Síria e Jordânia.'], bullets: ['A autorização é seletiva, não uma normalização geral do estreito.', 'O tráfego de grandes navios de energia permanece significativamente abaixo do período pré-guerra.', 'Estados Unidos e Irã continuam trocando mensagens hostis antes do anúncio de novas sanções americanas previsto para segunda-feira.'] },
      { title: 'Por que importa', paragraphs: ['Hormuz funciona como gargalo físico para petróleo e gás. Mesmo exceções pontuais podem alterar expectativa de oferta, frete e seguro marítimo, mas o mercado precisa distinguir autorização específica de reabertura estrutural.'] },
      { title: 'O que não concluir', bullets: ['Passagem de navios iraquianos não significa fim do bloqueio efetivo.', 'Uma autorização pontual não garante fluxo estável nos próximos dias.', 'Sanções anunciadas politicamente só devem ser avaliadas pelo texto formal quando publicadas.'] },
      { title: 'O que acompanhar', bullets: ['Detalhes das sanções dos EUA na segunda-feira.', 'Número e tipo de navios autorizados a transitar.', 'Rotas alternativas de exportação do Iraque e impacto no Brent.'] },
    ],
    sources: [
      { label: 'Reuters · Hormuz / Iraque · 22/08/2026', url: 'https://www.reuters.com/business/energy/iran-grants-permission-number-iraqi-oil-tankers-pass-through-hormuz-2026-08-22/' },
      { label: 'Reuters · EUA–Irã · 22/08/2026', url: 'https://www.reuters.com/world/middle-east/us-iran-keep-up-hostile-rhetoric-ahead-new-sanctions-2026-08-22/' },
    ],
  });
  replaceDrop('mundo', { title: 'Irã libera alguns petroleiros iraquianos em Hormuz; rota continua fortemente restrita', detail: 'A exceção ajuda o Iraque, mas não equivale à reabertura do estreito. Novas sanções americanas são esperadas para segunda.' });

  set('tempo', {
    title: 'São Paulo amanhece fria e entra em estado de atenção para baixas temperaturas',
    summary: 'O CGE registrou média de 13°C na madrugada deste sábado e mínima absoluta de 8,9°C em Parelheiros. A Defesa Civil Municipal colocou toda a cidade em estado de atenção para baixas temperaturas desde 0h.',
    shareSummary: 'Tempo 22/08 · 10h: São Paulo amanheceu com média de 13°C e estado de atenção para baixas temperaturas. O CGE prevê máxima perto de 23°C e baixa probabilidade de chuva.',
    readTime: '6 MIN READ',
    badge: 'TEMPO · ATUALIZADO 10H',
    sections: [
      { title: 'O que foi observado', paragraphs: ['O CGE informou às 6h37 que a capital começou o sábado com céu nublado a encoberto e sensação de frio. A média das mínimas foi de 13°C, com sensação térmica até 3°C menor em alguns pontos.'], bullets: ['Parelheiros registrou mínima absoluta de 8,9°C.', 'Pirituba teve a maior mínima entre as estações citadas, com 14,9°C.', 'O estado de atenção para baixas temperaturas vale para toda a cidade.'] },
      { title: 'Como fica o dia', paragraphs: ['A previsão estendida do CGE aponta mínima de 12°C, máxima de 23°C, umidade entre 42% e 95% e baixo potencial para chuva. Ventos do quadrante sul mantêm entrada de ar frio e úmido.'] },
      { title: 'Aplicação prática', bullets: ['Leve camada extra de roupa para manhã e noite.', 'Pessoas em situação de vulnerabilidade podem ser encaminhadas para acolhimento pelo 156.', 'Antes de atividade ao ar livre, confira a atualização do CGE porque sensação térmica varia com vento e bairro.'] },
      { title: 'O que não concluir', paragraphs: ['A mínima de Parelheiros não representa toda a capital, e previsão de máxima é estimativa sujeita a revisão ao longo do dia.'] },
    ],
    sources: [
      { label: 'CGE São Paulo · manhã de 22/08/2026', url: 'https://www.cgesp.org/v3/noticias.jsp?id=55723' },
      { label: 'CGE · Previsão estendida', url: 'https://www.cgesp.org/v3/previsao_estendida.jsp' },
    ],
  });
  replaceDrop('tempo', { title: 'São Paulo entra em atenção para frio; madrugada teve média de 13°C', detail: 'CGE registrou 8,9°C em Parelheiros e prevê máxima perto de 23°C, com baixo potencial de chuva.' });

  set('games', {
    title: 'gamescom entra na reta final: gamescom dev começa amanhã e Opening Night Live será terça-feira',
    summary: 'A semana oficial da gamescom 2026 começa neste domingo, 23/08, com a gamescom dev. A Opening Night Live acontece em 25/08 e a feira principal vai de 26 a 30/08 em Colônia.',
    shareSummary: 'Games 22/08 · 10h: gamescom dev começa amanhã; Opening Night Live é 25/08; feira principal, 26–30/08. Agenda oficial deve ser separada de rumores sobre anúncios.',
    readTime: '6 MIN READ',
    badge: 'GAMES · ATUALIZADO 10H',
    sections: [
      { title: 'Agenda confirmada', bullets: ['gamescom dev: 23–25 de agosto.', 'Opening Night Live: 25 de agosto.', 'gamescom: 26–30 de agosto.', 'A organização informa mais de 1.600 expositores de 67 países e 233 mil m² de área bruta.'] },
      { title: 'O que já é oficial', paragraphs: ['A própria gamescom já lista centenas de jogos e expositores. Entre os conteúdos confirmados há apresentações específicas de empresas, como a CD PROJEKT RED no dia 25.'] },
      { title: 'O que ainda é rumor', paragraphs: ['Listas de supostos trailers, datas ou anúncios que não aparecem nos canais oficiais devem permanecer rotuladas como rumor/hype. Presença de uma empresa na feira não prova que determinado jogo será anunciado.'] },
      { title: 'O que acompanhar', bullets: ['Programação final da Opening Night Live.', 'Trailers e anúncios publicados pelos canais oficiais dos estúdios.', 'Mudanças de data ou plataforma confirmadas pelos próprios publishers.'] },
    ],
    sources: [
      { label: 'gamescom · site oficial', url: 'https://www.gamescom.global/' },
      { label: 'gamescom · expansão e expositores 2026', url: 'https://www.gamescom.global/en/gamescom-2026-expands-leading-position-more-exhibitors-bigger-indie-area-and-strong-international-presence' },
    ],
  });
  replaceDrop('games', { title: 'gamescom dev começa amanhã; Opening Night Live será em 25 de agosto', detail: 'A semana oficial entra na reta final. Agenda confirmada fica separada de rumores de anúncios.' });

  set('gravidez', {
    title: '6 semanas + 6 dias: amanhã começa a 7ª semana gestacional',
    summary: 'A gestação chega hoje a 6 semanas e 6 dias pela DPP de 11/04/2027. Náusea, fadiga e sensibilidade a cheiros podem continuar; o cuidado após cada vômito permanece focado em hidratação gradual, proteção da boca e sinais de desidratação.',
    shareSummary: 'Gravidez 22/08: 6s+6d. Amanhã começa a 7ª semana. Após vômitos: enxaguar a boca, reidratar em pequenos goles, voltar à alimentação aos poucos e observar sinais de desidratação.',
    readTime: '9 MIN READ',
    badge: 'GRAVIDEZ · ATUALIZADO HOJE',
    sections: [
      { title: 'Fase atual', paragraphs: ['Com 6 semanas e 6 dias, o desenvolvimento embrionário segue muito rápido. Em ultrassons precoces, poucos dias podem mudar bastante o que é visível; a interpretação precisa considerar datação e avaliação clínica.'] },
      { title: 'Depois de cada vômito', bullets: ['Enxágue a boca e evite escovar os dentes imediatamente.', 'Quando tolerado, retome líquidos em pequenos goles frequentes.', 'Depois que líquidos permanecerem no estômago, tente pequenas porções de alimentos simples e toleráveis.', 'Observe urina, tontura, fraqueza e capacidade de manter líquidos.'] },
      { title: 'Quando procurar orientação', paragraphs: ['Incapacidade persistente de manter líquidos, urina muito reduzida/escura, desmaio, sangue no vômito, febre, dor importante ou perda de peso justificam contato com a equipe do pré-natal ou avaliação médica.'] },
      { title: 'Próximo marco', paragraphs: ['Amanhã começa a 7ª semana gestacional. Os sintomas podem continuar oscilando e ausência ou intensidade de sintomas, isoladamente, não confirma evolução da gestação.'] },
    ],
    sources: [
      { label: 'ACOG · Morning Sickness', url: 'https://www.acog.org/womens-health/faqs/morning-sickness-nausea-and-vomiting-of-pregnancy' },
      { label: 'NHS · Vomiting and morning sickness', url: 'https://www.nhs.uk/pregnancy/common-symptoms/vomiting-and-morning-sickness/' },
    ],
  });
  replaceDrop('gravidez', { title: '6 semanas + 6 dias: amanhã começa a 7ª semana', detail: 'Desenvolvimento segue acelerado; a aba reforça também o roteiro seguro após cada episódio de vômito.' });

  set('pai', {
    title: 'Ser Pai hoje: monte um kit de recuperação pós-enjoo e mantenha-o sempre pronto',
    summary: 'A ação concreta de hoje é reduzir a fricção depois de um episódio de vômito: deixar água, recipiente limpo, enxágue para a boca, toalha e um lanche simples tolerado acessíveis, sem transformar cuidado em cobrança para ela comer ou beber imediatamente.',
    shareSummary: 'Ser Pai 22/08: deixe um kit pós-enjoo pronto e reponha sozinho. Apoio é facilitar hidratação, higiene e descanso sem pressionar ou decidir por ela.',
    readTime: '5 MIN READ',
    badge: 'SER PAI · AÇÃO DO DIA',
    sections: [
      { title: 'A missão de hoje', bullets: ['Separe água e copo/garrafa limpa.', 'Deixe toalha e recipiente acessíveis.', 'Tenha uma opção de alimento simples que ela já sabe que tolera.', 'Depois do uso, higienize e reponha tudo sem esperar pedido.'] },
      { title: 'O detalhe que muda o cuidado', paragraphs: ['Perguntar o que ela prefere é diferente de delegar toda a organização para ela. A ideia é assumir a logística e preservar autonomia sobre o que comer, beber e quando descansar.'] },
      { title: 'Quando apoio vira segurança', paragraphs: ['Se ela não consegue manter líquidos, está urinando muito pouco, tem tontura importante, desmaio, sangue no vômito ou piora relevante, ajude a contatar a equipe de saúde e organizar deslocamento seguro.'] },
    ],
    sources: [{ label: 'ACOG · Nausea and Vomiting of Pregnancy', url: 'https://www.acog.org/womens-health/faqs/morning-sickness-nausea-and-vomiting-of-pregnancy' }],
  });
  replaceDrop('pai', { title: 'Ser Pai hoje: deixe um kit pós-enjoo pronto antes que ele seja necessário', detail: 'Água, higiene, recipiente e lanche tolerado organizados reduzem carga mental e facilitam recuperação.' });
}
