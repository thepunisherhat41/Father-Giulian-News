# Jev Editorial Shadow

Esta integração usa o modelo de decisão `typesafe-ai/jev` via Vercel AI Gateway para avaliar cards editoriais sem substituir os gates atuais.

## Estado atual

- Modo: `SHADOW`
- Enforcement: `false`
- Modelo: `typesafe-ai/jev`
- AI SDK: `7.0.130`
- Runtime do projeto: Node.js 24
- O Jev nunca autoriza ou bloqueia produção sozinho nesta fase.

## O que o Jev avalia

Para cada card da edição ativa:

1. `publishability`: `pass | verify | block`
2. `freshness`: `same_day | current_update | stale | unclear`
3. `classification`: `FATO | AGENDA | PESQUISA | DECLARACAO | APURACAO_REPORTAGEM | ATUALIZACAO | RUMOR`
4. `sourceSupport`: probabilidade de as fontes sustentarem as afirmações centrais.

Os resultados são gravados em:

```
artifacts/jev-shadow.json
```

## Política local de shadow

- `BLOCK`: Jev escolhe `block` com confiança >= 0.85, ou suporte de fonte <= 0.20.
- `PASS`: Jev escolhe `pass` com confiança >= 0.90, suporte de fonte >= 0.80 e freshness não é `stale/unclear`.
- Caso contrário: `VERIFY`.

Essas faixas são apenas para coleta de evidência. Não controlam merge/deploy.

## Autenticação

### Vercel runtime

O AI Gateway pode usar o `VERCEL_OIDC_TOKEN` fornecido pela Vercel.

### GitHub Actions

O workflow procura o secret:

```
AI_GATEWAY_API_KEY
```

Se o secret não existir, o runner imprime `JEV SHADOW: SKIPPED` e termina com sucesso. Nenhuma chave deve ser commitada.

## Execução

```bash
npm run jev:shadow
```

O runner identifica a edição ativa a partir de `editorialFreshnessDate`, lê o patch corrente e avalia os cards. Falha individual de Jev vira `VERIFY` e fica registrada como erro, sem bloquear o gate tradicional.

## Critério para sair de SHADOW

Antes de habilitar qualquer enforcement:

- coletar amostra representativa de cards reais;
- comparar Jev x decisão editorial humana/gate atual;
- medir falso positivo de `BLOCK`;
- medir falso negativo de `PASS`;
- revisar thresholds;
- só então promover para modo assistido;
- enforcement automático só após validação explícita.

## Arquivos

- `lib/ai/jev-editorial-verifier.ts`: integração reutilizável para código server-side.
- `scripts/jev-editorial-shadow.mjs`: runner de CI/shadow.
- `.github/workflows/father-news-quality-gate.yml`: execução não bloqueante.
