import { regionalWords as regionalVocabulary } from './regional-vocabulary';

export const regionalWords = {
  mineires: regionalVocabulary.find((item) => item.id === 'mineiro'),
  portugal: regionalVocabulary.find((item) => item.id === 'portugal'),
};
