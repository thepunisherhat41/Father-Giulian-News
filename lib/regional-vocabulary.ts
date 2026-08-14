export type RegionalWord = {
  id: string;
  region: string;
  label: string;
  emoji: string;
  word: string;
  pronunciation?: string;
  meaning: string;
  naturalUse: string;
  equivalent: string;
  nuance: string;
  note?: string;
  upcoming: string[];
};

export const regionalWords: RegionalWord[] = [
  {
    id: 'mineiro',
    region: 'Minas Gerais',
    label: 'MINEIRÊS DO DIA',
    emoji: '⛰️',
    word: 'Arreda',
    pronunciation: 'a-RRE-da',
    meaning: 'Afasta, chega um pouco para o lado ou dê espaço. É uma forma muito associada à fala cotidiana mineira, embora também exista em outras variedades do português brasileiro.',
    naturalUse: '“Arreda um pouquinho pra eu sentar aqui.”',
    equivalent: 'afasta · chega para o lado · dá espaço',
    nuance: 'É informal e muito natural em conversa. O interessante não é “imitar sotaque”, e sim perceber como palavras antigas ou menos comuns no português urbano de outras regiões continuam vivas no uso mineiro.',
    note: 'Regionalismos não obedecem fronteiras perfeitas: uma palavra pode ser muito característica de Minas e também aparecer em estados vizinhos ou em outras gerações de falantes.',
    upcoming: ['Trem', 'Uai', 'Sô', 'Custoso', 'Cismado', 'Pelejar', 'Arredar', 'Encafifar'],
  },
  {
    id: 'portugal',
    region: 'Portugal',
    label: 'PORTUGUÊS DE PORTUGAL',
    emoji: '🇵🇹',
    word: 'Fixe',
    pronunciation: 'FÍ-che',
    meaning: 'Legal, bacana, muito bom ou agradável. É uma palavra extremamente comum no português europeu informal.',
    naturalUse: '“O restaurante é mesmo fixe.”',
    equivalent: 'legal · bacana · muito bom',
    nuance: 'Em Portugal, “fixe” aparece naturalmente para elogiar uma ideia, pessoa, lugar, objeto ou experiência. Para um brasileiro, o sentido costuma ser entendido pelo contexto mesmo quando a palavra soa diferente.',
    note: 'O português do Brasil e o de Portugal compartilham a mesma língua, mas desenvolveram escolhas de vocabulário, pronúncia e construções diferentes. A proposta aqui é comparar sem tratar uma variedade como mais “correta” que a outra.',
    upcoming: ['Giro', 'Autocarro', 'Telemóvel', 'Peúgas', 'Pequeno-almoço', 'Casa de banho', 'Comboio', 'Esplanada'],
  },
];
