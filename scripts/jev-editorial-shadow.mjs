import { experimental_decide as decide } from 'ai';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const MODEL = 'typesafe-ai/jev';
const MIN_CONFIDENCE = 0.9;
const freshnessSource = readFileSync('lib/editorial-freshness-current.ts', 'utf8');
const editionDate =
  process.env.JEV_SHADOW_DATE ??
  freshnessSource.match(/editorialFreshnessDate\s*=\s*['"]([^'"]+)['"]/)?.[1];

if (!editionDate) {
  console.log('JEV SHADOW: SKIPPED · editorialFreshnessDate não encontrada.');
  process.exit(0);
}

const hasAuth = Boolean(
  process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN,
);

if (!hasAuth) {
  console.log(
    `JEV SHADOW: SKIPPED · ${editionDate} · sem AI_GATEWAY_API_KEY/VERCEL_OIDC_TOKEN.`,
  );
  process.exit(0);
}

const patchPath = `lib/current-reel-patches-${editionDate}.ts`;
let patchSource;
try {
  patchSource = readFileSync(patchPath, 'utf8');
} catch {
  console.log(`JEV SHADOW: SKIPPED · patch corrente ausente: ${patchPath}`);
  process.exit(0);
}

const chunks = patchSource
  .split(/\npatch\('/)
  .slice(1)
  .map((chunk) => {
    const slug = chunk.split("'")[0];
    return { slug, rawPatch: `patch('${chunk}`.slice(0, 12000) };
  })
  .filter((item) => item.slug);

const QUESTIONS = {
  publishability: {
    type: 'choice',
    instructions:
      'Decida se este card pode seguir no fluxo editorial da data informada considerando atualidade, suporte de fontes, coerência temporal e ausência de afirmações não sustentadas.',
    criteria: {
      pass: 'Pode seguir: materialmente atual, sustentado e corretamente classificado.',
      verify:
        'Precisa de verificação adicional por ambiguidade, temporalidade, classificação ou suporte.',
      block:
        'Deve ser bloqueado por conteúdo vencido, contradição, falta de suporte ou afirmação tratada como fato sem evidência.',
    },
  },
  freshness: {
    type: 'choice',
    instructions:
      'Classifique a atualidade editorial do card em relação à data corrente informada.',
    criteria: {
      same_day:
        'Fato ou atualização material confirmada da data corrente.',
      current_update:
        'Fato-base anterior com atualização/reportagem material e corretamente rotulada para hoje.',
      stale:
        'Conteúdo vencido, reciclado ou apresentado como atual sem mudança material.',
      unclear: 'Informação temporal insuficiente.',
    },
  },
  classification: {
    type: 'choice',
    instructions:
      'Escolha a classificação editorial principal mais adequada.',
    criteria: {
      FATO: 'Acontecimento confirmado.',
      AGENDA: 'Evento futuro confirmado.',
      PESQUISA: 'Pesquisa/levantamento identificável.',
      DECLARACAO: 'Fala atribuída e confirmada.',
      APURACAO_REPORTAGEM: 'Apuração ou reportagem.',
      ATUALIZACAO: 'Desdobramento material de fato anterior.',
      RUMOR: 'Informação não confirmada, explicitamente tratada como rumor.',
    },
  },
  sourceSupport: {
    type: 'boolean',
    instructions:
      'As fontes/evidências visíveis no card sustentam suficientemente suas afirmações centrais, sem exigir suposições adicionais?',
  },
};

function selectedConfidence(answer) {
  if (!answer?.choice || !answer?.probabilities) return null;
  const value = answer.probabilities[answer.choice];
  return typeof value === 'number' ? value : null;
}

function recommendation({
  publishabilityChoice,
  publishabilityConfidence,
  freshnessChoice,
  sourceSupportProbability,
}) {
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
    (publishabilityConfidence ?? 0) >= MIN_CONFIDENCE &&
    (sourceSupportProbability ?? 0) >= 0.8 &&
    freshnessChoice !== 'stale' &&
    freshnessChoice !== 'unclear'
  ) {
    return 'PASS';
  }

  return 'VERIFY';
}

async function evaluateOne(candidate) {
  const result = await decide({
    model: MODEL,
    state: {
      policy: {
        currentDate: editionDate,
        shadowMode: true,
        rule:
          'Matéria publicada hoje sobre fato de ontem não vira fato novo de hoje. Use atualização/reportagem quando aplicável. Priorize fonte primária/oficial e jornalismo reconhecido.',
      },
      candidate,
    },
    questions: QUESTIONS,
  });

  const publishability = result.answers.publishability;
  const freshness = result.answers.freshness;
  const classification = result.answers.classification;
  const sourceSupport = result.answers.sourceSupport;
  const publishabilityConfidence = selectedConfidence(publishability);
  const freshnessChoice = freshness?.choice ?? null;
  const sourceSupportProbability =
    typeof sourceSupport?.probability === 'number'
      ? sourceSupport.probability
      : null;

  return {
    slug: candidate.slug,
    model: MODEL,
    enforced: false,
    recommendation: recommendation({
      publishabilityChoice: publishability?.choice ?? null,
      publishabilityConfidence,
      freshnessChoice,
      sourceSupportProbability,
    }),
    publishability: {
      choice: publishability?.choice ?? null,
      confidence: publishabilityConfidence,
      probabilities: publishability?.probabilities ?? null,
    },
    freshness: {
      choice: freshnessChoice,
      confidence: selectedConfidence(freshness),
      probabilities: freshness?.probabilities ?? null,
    },
    classification: {
      choice: classification?.choice ?? null,
      confidence: selectedConfidence(classification),
      probabilities: classification?.probabilities ?? null,
    },
    sourceSupportProbability,
    usage: result.usage ?? null,
  };
}

const concurrency = Math.max(
  1,
  Math.min(Number(process.env.JEV_SHADOW_CONCURRENCY ?? 3), 5),
);
const results = new Array(chunks.length);
let cursor = 0;

async function worker() {
  while (cursor < chunks.length) {
    const index = cursor++;
    const candidate = chunks[index];
    try {
      results[index] = await evaluateOne(candidate);
      console.log(
        `JEV SHADOW · ${candidate.slug} · ${results[index].recommendation} · confidence=${results[index].publishability.confidence ?? 'n/a'}`,
      );
    } catch (error) {
      results[index] = {
        slug: candidate.slug,
        model: MODEL,
        enforced: false,
        recommendation: 'VERIFY',
        error: error instanceof Error ? error.message : String(error),
      };
      console.warn(
        `JEV SHADOW · ${candidate.slug} · ERROR → VERIFY (não bloqueante)`,
      );
    }
  }
}

await Promise.all(Array.from({ length: concurrency }, () => worker()));

const summary = results.reduce(
  (acc, item) => {
    acc[item.recommendation] = (acc[item.recommendation] ?? 0) + 1;
    if (item.error) acc.errors += 1;
    return acc;
  },
  { PASS: 0, VERIFY: 0, BLOCK: 0, errors: 0 },
);

mkdirSync('artifacts', { recursive: true });
writeFileSync(
  'artifacts/jev-shadow.json',
  JSON.stringify(
    {
      editionDate,
      model: MODEL,
      mode: 'SHADOW',
      enforced: false,
      minConfidence: MIN_CONFIDENCE,
      summary,
      results,
    },
    null,
    2,
  ),
);

console.log(
  `JEV SHADOW: COMPLETE · ${editionDate} · PASS=${summary.PASS} VERIFY=${summary.VERIFY} BLOCK=${summary.BLOCK} ERRORS=${summary.errors} · enforcement=false`,
);
