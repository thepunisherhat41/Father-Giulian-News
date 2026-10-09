import { experimental_decide as decide } from 'ai';

export const JEV_EDITORIAL_MODEL = 'typesafe-ai/jev' as const;
export const JEV_EDITORIAL_MIN_CONFIDENCE = 0.9;

export type EditorialClassification =
  | 'FATO'
  | 'AGENDA'
  | 'PESQUISA'
  | 'DECLARACAO'
  | 'APURACAO_REPORTAGEM'
  | 'ATUALIZACAO'
  | 'RUMOR';

export type EditorialCandidate = {
  slug: string;
  title: string;
  summary: string;
  currentDate: string;
  badge?: string;
  classification?: EditorialClassification | string;
  publishedAt?: string;
  sourceLabels?: string[];
  sourceUrls?: string[];
  evidence?: string;
};

export type JevShadowRecommendation = 'PASS' | 'VERIFY' | 'BLOCK';

export type JevEditorialShadowResult = {
  model: string;
  enforced: false;
  recommendation: JevShadowRecommendation;
  confidence: number | null;
  publishability: {
    choice: string | null;
    confidence: number | null;
    probabilities?: Record<string, number>;
  };
  freshness: {
    choice: string | null;
    confidence: number | null;
    probabilities?: Record<string, number>;
  };
  classification: {
    choice: string | null;
    confidence: number | null;
    probabilities?: Record<string, number>;
  };
  sourceSupportProbability: number | null;
};

function selectedConfidence(answer: {
  choice?: string;
  probabilities?: Record<string, number>;
} | undefined) {
  if (!answer?.choice || !answer.probabilities) return null;
  const value = answer.probabilities[answer.choice];
  return typeof value === 'number' ? value : null;
}

export function deriveJevShadowRecommendation(input: {
  publishabilityChoice?: string | null;
  publishabilityConfidence?: number | null;
  freshnessChoice?: string | null;
  sourceSupportProbability?: number | null;
}): JevShadowRecommendation {
  const {
    publishabilityChoice,
    publishabilityConfidence,
    freshnessChoice,
    sourceSupportProbability,
  } = input;

  if (
    publishabilityChoice === 'block' &&
    (publishabilityConfidence ?? 0) >= 0.85
  ) {
    return 'BLOCK';
  }

  if (
    typeof sourceSupportProbability === 'number' &&
    sourceSupportProbability <= 0.2
  ) {
    return 'BLOCK';
  }

  if (
    publishabilityChoice === 'pass' &&
    (publishabilityConfidence ?? 0) >= JEV_EDITORIAL_MIN_CONFIDENCE &&
    (sourceSupportProbability ?? 0) >= 0.8 &&
    freshnessChoice !== 'stale' &&
    freshnessChoice !== 'unclear'
  ) {
    return 'PASS';
  }

  return 'VERIFY';
}

export async function verifyEditorialCandidateWithJev(
  candidate: EditorialCandidate,
): Promise<JevEditorialShadowResult> {
  const result = await decide({
    model: JEV_EDITORIAL_MODEL,
    state: {
      policy: {
        currentDate: candidate.currentDate,
        sameDayRule:
          'A matéria publicada hoje sobre fato ocorrido ontem não deve ser chamada de fato novo de hoje. Pode ser ATUALIZACAO ou APURACAO_REPORTAGEM se ainda for material.',
        allowedClassifications: [
          'FATO',
          'AGENDA',
          'PESQUISA',
          'DECLARACAO',
          'APURACAO_REPORTAGEM',
          'ATUALIZACAO',
          'RUMOR',
        ],
        sourceRule:
          'Priorizar fonte oficial/primária e jornalismo reconhecido. Não inventar confirmação ausente.',
      },
      candidate,
    },
    questions: {
      publishability: {
        type: 'choice',
        instructions:
          'Decida se este card pode seguir no fluxo editorial de hoje considerando atualidade, suporte das fontes, coerência temporal e ausência de afirmações não sustentadas.',
        criteria: {
          pass: 'Pode seguir: está materialmente atual, sustentado e classificado de modo coerente.',
          verify:
            'Precisa de verificação adicional antes de publicação por ambiguidade, temporalidade, classificação ou suporte.',
          block:
            'Deve ser bloqueado porque está vencido, contraditório, sem suporte suficiente ou apresenta afirmação como fato sem evidência.',
        },
      },
      freshness: {
        type: 'choice',
        instructions:
          'Classifique a atualidade editorial do card em relação à data corrente informada.',
        criteria: {
          same_day:
            'O acontecimento material ocorreu na data corrente ou há atualização material confirmada da data corrente.',
          current_update:
            'O fato-base é anterior, mas existe atualização/reportagem materialmente relevante e corretamente rotulada para hoje.',
          stale:
            'Conteúdo vencido, reciclado ou apresentado como atual sem mudança material.',
          unclear:
            'Não há informação temporal suficiente para decidir.',
        },
      },
      classification: {
        type: 'choice',
        instructions:
          'Escolha a classificação editorial que melhor descreve o conteúdo principal do card.',
        criteria: {
          FATO: 'Acontecimento confirmado.',
          AGENDA: 'Evento futuro confirmado ou compromisso agendado.',
          PESQUISA: 'Levantamento/pesquisa com metodologia ou registro identificável.',
          DECLARACAO: 'Fala atribuída e confirmada de pessoa ou instituição.',
          APURACAO_REPORTAGEM:
            'Informação jornalística apurada/reportada, sem equivaler necessariamente a ocorrência originada hoje.',
          ATUALIZACAO:
            'Desdobramento material de fato anterior, corretamente apresentado como atualização.',
          RUMOR: 'Informação não confirmada que deve permanecer explicitamente como rumor.',
        },
      },
      sourceSupport: {
        type: 'boolean',
        instructions:
          'As fontes e evidências fornecidas sustentam de forma suficiente as afirmações centrais do card sem exigir suposições adicionais?',
      },
    },
  });

  const publishability = result.answers.publishability;
  const freshness = result.answers.freshness;
  const classification = result.answers.classification;
  const sourceSupport = result.answers.sourceSupport;

  const publishabilityConfidence = selectedConfidence(publishability);
  const freshnessConfidence = selectedConfidence(freshness);
  const classificationConfidence = selectedConfidence(classification);
  const sourceSupportProbability =
    typeof sourceSupport?.probability === 'number'
      ? sourceSupport.probability
      : null;

  const recommendation = deriveJevShadowRecommendation({
    publishabilityChoice: publishability?.choice ?? null,
    publishabilityConfidence,
    freshnessChoice: freshness?.choice ?? null,
    sourceSupportProbability,
  });

  return {
    model: JEV_EDITORIAL_MODEL,
    enforced: false,
    recommendation,
    confidence: publishabilityConfidence,
    publishability: {
      choice: publishability?.choice ?? null,
      confidence: publishabilityConfidence,
      probabilities: publishability?.probabilities,
    },
    freshness: {
      choice: freshness?.choice ?? null,
      confidence: freshnessConfidence,
      probabilities: freshness?.probabilities,
    },
    classification: {
      choice: classification?.choice ?? null,
      confidence: classificationConfidence,
      probabilities: classification?.probabilities,
    },
    sourceSupportProbability,
  };
}
