import type { EditorialDossier } from './editorial-dossier-types';

export const editorialDaily20260815_17h: Record<string, EditorialDossier> = {
  politica: {
    readingTime: '8 MIN DE LEITURA',
    title: 'Duas horas para o prazo; semanas para o processo terminar',
    deck: 'O relógio das 19h fecha uma etapa administrativa. A validade jurídica de cada candidatura continua sendo construída depois dela.',
    opening: [
      'No fim do prazo eleitoral, a tentação é tratar a lista de nomes como definitiva.',
      'O procedimento correto é acompanhar o pedido e, depois, o status processual publicado pela Justiça Eleitoral.',
    ],
    sections: [
      { kicker: '17H', title: 'O relógio agora mede transmissão', paragraphs: ['Até as 19h, o ponto crítico é a apresentação do pedido pelo CANDex. O recibo registra o horário em que a transmissão foi concluída.'] },
      { kicker: '19H+', title: 'Depois do prazo entra o trabalho jurídico', paragraphs: ['Documentação, elegibilidade, impugnações, diligências e recursos continuam. “Pedido apresentado” e “registro deferido” são estados diferentes.'] },
      { kicker: 'TRACKER', title: 'Um bom comparador precisa de data e status', paragraphs: ['Trajetória e propostas podem permanecer estáveis; a situação eleitoral pode mudar. Por isso cada perfil deve separar fonte política de fonte jurídica e registrar a data da consulta.'] },
    ],
    callout: { label: 'REGRA DO TRACKER', title: 'Nome na campanha não equivale a deferimento', text: 'Use DivulgaCandContas/TSE para situação processual e plano/entrevista oficial para propostas.' },
    takeaways: ['19h fecha a transmissão.', 'Julgamento continua.', 'Status precisa ser datado e atribuído à fonte oficial.'],
    sources: [
      { label: 'TSE · Calendário Eleitoral 2026', url: 'https://www.tse.jus.br/eleicoes/calendario-eleitoral/calendario-eleitoral' },
      { label: 'TSE · DivulgaCandContas', url: 'https://www.tse.jus.br/administracao/painel/divulgacao-de-candidaturas-e-contas-eleitorais' },
    ],
  },
  tempo: {
    readingTime: '7 MIN DE LEITURA',
    title: 'Alerta meteorológico também precisa de “validade” na manchete',
    deck: 'O evento severo da manhã aconteceu, mas não deve continuar parecendo ativo horas depois. Boa informação meteorológica atualiza intensidade, área e janela de risco.',
    opening: [
      'Às 8h a pergunta era onde buscar abrigo. Às 17h a pergunta já é outra: o que ainda resta da instabilidade e como muda o domingo?',
      'Esse é um bom exemplo de por que dados meteorológicos precisam de horário explícito.',
    ],
    sections: [
      { kicker: 'MANHÃ', title: 'A fase mais crítica foi curta', paragraphs: ['O estado de atenção para alagamentos durou de 7h45 a 8h55. Houve alertas severos para chuva forte, raios, vento e possibilidade de granizo.'] },
      { kicker: 'FIM DO DIA', title: 'Risco residual não é o mesmo que alerta severo', paragraphs: ['Pancadas isoladas ou chuvisco ainda podem ocorrer, mas a comunicação correta não deve prolongar o rótulo de severidade além da janela observada.'] },
      { kicker: 'DOMINGO', title: 'O perigo muda de natureza', paragraphs: ['O afastamento da frente favorece mais sol e aquecimento. Nos dias seguintes, baixa umidade e calor passam a importar mais que chuva forte.'] },
    ],
    callout: { label: 'LEITURA PRÁTICA', title: 'Previsão é uma linha do tempo', text: 'Condição passada, risco atual e tendência futura devem aparecer separados.' },
    takeaways: ['O alerta forte foi da manhã.', 'Ainda pode haver chuva isolada.', 'Domingo começa a transição para calor e ar mais seco.'],
    sources: [{ label: 'UOL · Defesa Civil/CGE · 15/08/2026', url: 'https://noticias.uol.com.br/cotidiano/ultimas-noticias/2026/08/15/alerta-chuva-sao-paulo.ghtm' }],
  },
  tecnologia: {
    readingTime: '9 MIN DE LEITURA',
    title: 'A corrida de IA está descendo do software para minas, fábricas e rotas comerciais',
    deck: 'Quando chips e minerais críticos viram ativos estratégicos, arquitetura tecnológica e geopolítica deixam de ser assuntos separados.',
    opening: [
      'Modelos de IA parecem digitais, mas sua cadeia é profundamente física.',
      'Sem litografia, memória, energia, rede, data center e minerais críticos, não existe escala de treinamento ou inferência.',
    ],
    sections: [
      { kicker: 'CADEIA', title: 'O gargalo pode estar longe do modelo', paragraphs: ['GPU é apenas uma camada. Equipamentos de fabricação, HBM, interconexão, energia e matérias-primas podem definir capacidade disponível e custo.'] },
      { kicker: 'ALIANÇAS', title: 'Pax Silica transforma supply chain em política externa', paragraphs: ['Reuters relata que uma minuta dos EUA pressiona parceiros por alinhamento exclusivo frente à iniciativa chinesa concorrente. Como é uma minuta reportada, o correto é tratá-la como estratégia em preparação, não como regra definitiva.'] },
      { kicker: 'EMPRESAS', title: 'Dependência geopolítica também é risco tecnológico', paragraphs: ['Arquitetura de fornecedor único, contratos sem alternativa e componentes sujeitos a sanções podem virar risco de continuidade mesmo sem falha técnica.'] },
    ],
    callout: { label: 'CONEXÃO', title: 'Supply chain é arquitetura', text: 'O desenho técnico precisa incluir dependência por país, fornecedor, capacidade industrial e possibilidade real de substituição.' },
    takeaways: ['IA depende de infraestrutura física.', 'Alianças podem restringir fornecedores.', 'Minuta reportada não é política final.'],
    sources: [{ label: 'Reuters · Pax Silica e disputa EUA–China · 14/08/2026', url: 'https://www.reuters.com/world/china/us-tell-partners-they-must-pick-sides-ai-race-with-china-2026-08-14/' }],
  },
};
