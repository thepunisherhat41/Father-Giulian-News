# Father News 6.0 — RFC: edições imutáveis e publicação atômica
**Status:** arquitetura proposta, **não ativada** | **Data:** 2026-10-20 | **Código atual de referência:** \`fdaf2f62ac4dafb75524a212d62f77276d8c0680\`

## 1. Decisão
A interface Father News 5.x continua com seu pipeline de código independente. Conteúdo e mídia são publicados por release editorial imutável após Chromium QA no **mesmo snapshot** e na **mesma revisão de app**. A mudança visível aos leitores ocorre exclusivamente através do ponteiro transacional \`production\`. Não criar ou sobrescrever um arquivo mutável \`current.json\` em CDN.

A rota lógica \`GET /api/edition/current\` resolve o ponteiro e devolve **uma edição coerente**. Publicar uma revisão editorial não exige rebuild do Next.js. A revisão inicial 6.0 do app exigirá **um** deploy de código, com o pipeline rigoroso existente, para trocar imports hardcoded por fetch dinâmico.

## 2. Situação observada no repositório
- \`app/page.tsx\` importa \`data/current-edition.json\` diretamente.
- \`components/NewsReels.tsx\` importa \`data/media-2026-10-20.json\` e \`data/reader-insights-2026-10-20.json\`.
- \`scripts/quality-v2.mjs\` compara \`editionDate\` com o dia corrente durante o build.
- \`vercel.json\` contém \`git.deploymentEnabled=false\`.
- Não presumir que Vercel Global Config esteja conectado: a listagem pela integração retornou 403. Uma conta Supabase existe, mas NÃO está identificada como exclusiva deste site; não usá-la nem aplicar migrations sem estabelecer o escopo apropriado.

## 3. Desenho geral
\`\`\`mermaid
flowchart TD
 R[Pesquisa oficial + curadoria] --> V[Validação editorial / freshness 7d]
 V --> I[Upload imutável: mídia + manifest]
 I --> P[Prévia fixada em release ID + app SHA]
 P --> Q[Chromium: 25/25 Reels + todos os cards + mídia]
 Q --> E{Todos os gates e attestation aprovados?}
 E -- Não --> B[Preservar ponteiro; bloquear release]
 E -- Sim --> C[PostgreSQL: compare-and-swap de production em transação]
 C --> D[/api/edition/current: no-store]
 D --> U[App nativo/PWA: fetch e edição consistente]
 C --> O[HTTP/DOM/probe + auditoria]
 O -- Falha --> F[Rollback: nova troca atômica do ponteiro]
\`\`\`

### Fontes de verdade
- **PostgreSQL dedicado à aplicação** (ou instância explicitamente isolada): controle da publicação e auditoria. A única operação mutável usada para publicar é a alteração de **uma linha** do ponteiro.
- **Storage de objetos** (Supabase Storage, Vercel Blob ou equivalente): \`edition.json\`, \`media-catalog.json\`, vídeos/fotos/artes em **caminhos que contêm releaseId/content hash**, nunca \`upsert\`.
- **GitHub**: código do aplicativo, políticas, JSON Schema, workflow de QA e evidências de build; não é o banco de “edição atual”.
- **Vercel**: serve o frontend estável e APIs \`/api/edition/current\` e \`/api/editions/{releaseId}\`. Segredos de escrita **somente no servidor/CI**.

## 4. Contrato dos dados

### \`edition.json\` (imutável)
O contrato normativo inicial está em \`schemas/father-news-edition-v6.schema.json\`. A revisão da edição é independente da revisão do app:
\`\`\`json
{
  "schemaVersion": 6,
  "editionId": "2026-10-21-r01",
  "editionDate": "2026-10-21",
  "timezone": "America/Sao_Paulo",
  "revision": 1,
  "generatedAt": "2026-10-21T07:00:00-03:00",
  "appMinSchemaVersion": 6,
  "cards": [{
    "id": "papo",
    "section": "Papo de hoje",
    "order": 1,
    "kind": "ATIVIDADE",
    "title": "...",
    "summary": "...",
    "details": ["...", "..."],
    "eventDate": null,
    "reportedAt": null,
    "sourceRefs": [],
    "mediaId": "papo-cover"
  }],
  "mediaCatalog": {
    "papo-cover": {
      "kind": "art",
      "url": "https://storage.example/editions/2026-10-21-r01/assets/<sha256>.webp",
      "sha256": "<sha256>",
      "mimeType": "image/webp",
      "alt": "Arte específica do desafio do dia",
      "credit": "Father News"
    }
  },
  "omissions": [{ "section": "Zona Leste", "reason": "Sem fato datado da edição" }]
}
\`\`\`
O exemplo acima é ilustrativo (campos abreviados) e **não pode ser promovido** como dado editorial real.

**Campos por notícia:** \`eventDate\` = data do fato, \`reportedAt\` = publicação da reportagem, \`kind\` = FATO / AGENDA / PESQUISA / DECLARAÇÃO / APURAÇÃO/REPORTAGEM / ATUALIZAÇÃO / RUMOR; incluir \`sources[]\` com URL, título e \`publishedAt\`. Em uma reportagem nova sobre evento antigo, **não** reclassificar a data do evento para hoje.

**Campos por mídia:** referência estável \`mediaId\`, \`kind\` (video/image/art), URL HTTPS imutável, SHA-256 do arquivo, MIME real, dimensões 9:16 quando arte, texto alternativo sem quebrar, licença/crédito e fonte quando externa. Catálogo pertencente ao release; **não usar imports versionados por data no componente**.

### Registro de release (metadados administrativos)
\`\`\`json
{
  "releaseId": "2026-10-21-r01",
  "editionDate": "2026-10-21",
  "revision": 1,
  "schemaVersion": 6,
  "manifestUrl": "https://storage.example/editions/2026-10-21-r01/<manifest-sha>/edition.json",
  "manifestSha256": "<64 hex>",
  "appCommitSha": "<40 hex>",
  "qaManifestSha256": "<mesmo hash>",
  "qaRunUrl": "https://github.com/.../actions/runs/...",
  "qaVerifiedAt": "ISO 8601",
  "status": "VALIDATED"
}
\`\`\`
\`manifestSha256\` é o SHA-256 dos **bytes do objeto JSON armazenado**, e não um hash recursivo embutido nele. Registrar em DB/attestation, fora do JSON.

### Ponteiro \`production\` (único, mutável)
\`\`\`json
{
  "channel": "production",
  "generation": 42,
  "releaseId": "2026-10-21-r01",
  "publishedAt": "2026-10-21T09:05:00-03:00"
}
\`\`\`
\`GET /api/edition/current\` consulta o ponteiro, resolve **um** manifesto imutável e responde de uma vez com \`releaseId\`, \`generation\`, \`manifestSha256\`, \`edition\` e URLs da mídia do próprio release, ou retorna ponteiro+URL pinada sem misturar revisões. Resposta \`Cache-Control: no-store\`; para assets versionados: \`public, max-age=31536000, immutable\` quando adequado.

## 5. Publicação atômica / CAS
1. Editor cria \`candidate\` do dia ou revisão \`r02\` quando há fato material novo. Histórico da semana compara títulos, perguntas, imagens e curiosidades.
2. Publicador faz upload de objetos **novos** com nomes versionados por hash, \`upsert=false\`. Confere HEAD/GET, checksum, tipo MIME, conteúdo, fonte e créditos. Jamais altera objetos vinculados a releases anteriores.
3. Registra release e executa validação editorial, policy, teste por card do Chromium 390×844, screenshots dos 25 (ou contagem efetiva), 320/360/412, UX, prévia com **exato app SHA + releaseId**.
4. CI produz attestation \`qaRunUrl + appCommitSha + manifestSha256 + cardCount + mediaSha256s\`; verificador consulta o status real do workflow antes de marcar \`VALIDATED\`.
5. A API administrativa (autenticada, não pública) promove por uma transação PostgreSQL:
   \`\`\`sql
   BEGIN;
   SELECT release_id, generation FROM father_news_publication
    WHERE channel = 'production' FOR UPDATE;
   -- confirmar generation = expectedGeneration
   -- confirmar candidato VALIDATED e SHA do QA = SHA armazenado,
   -- confirmação do workflow e media inventory já registrados
   UPDATE father_news_publication
      SET release_id = :validatedId,
          generation = generation + 1,
          updated_at = clock_timestamp()
    WHERE channel = 'production' AND generation = :expectedGeneration;
   -- exigir exatamente 1 row updated
   INSERT INTO father_news_publication_audit(...);
   COMMIT;
   \`\`\`
6. O ponteiro tem **linearização em uma transação**: leitores podem visualizar a edição anterior ou a nova, mas a API **nunca mistura mídias/textos entre elas** porque tudo é pinado por release.
7. Após publicar, probe confirma \`/api/edition/current\`, \`releaseId\`, hash, contagem, primeiras e últimas manchetes e a renderização de mídias. Falha real -> rollback com **outra transação CAS** para o último release saudável; auditar motivo e geração.
8. O app busca atualizações ao entrar/voltar ao primeiro plano, com polling moderado (ex.: 5 min). Nunca mostrar edição antiga como “hoje”; se falhar, exibir **Última edição validada [DATA]**. Não cachear API atual no PWA/service worker.

**Concorrência:** dois robôs tentam publicar? Apenas o que passar \`expectedGeneration\` promove; o outro recebe conflito e reavalia fonte/atualidade. Reexecução idempotente do mesmo release = sem nova promoção. Não notificar nem criar commit apenas para gerar atividade.

**Limite importante:** transação no PostgreSQL é atômica, mas observação pelos leitores pode ter atraso de rede/polling; não afirmar propagação instantânea mundial. Não usar arquivo \`current.json\` com TTL alto.

## 6. Gates mínimos antes de CAS
- Horário BRT, ordem exata, omissões justificadas; 7 dias sem repetição de Papo/Desafio/Curiosidades e conceitos visuais; fatos novos da data e classificações corretas; fontes com datas reais.
- Carros até R$70 mil; nunca “Náutica” nem romance artificial.
- **Todo** card com mídia funcional contextual; vídeo reproduzível ou imagem real ou arte 9:16 limpa; proibição de sprite, placeholder, imagem errada, black frame ou texto quebrado.
- DAST/segurança de URLs: allowlist de origem, prevenção de SSRF ao verificar mídias; tamanho de arquivo, hash, domínio e formato validados.
- QA Chromium **25/25 ou todos os Reels renderizados**, viewport 390×844 e layouts adicionais. Testar clique/rolagem, screenshot por Reel, imagem visível \`naturalWidth > 0\`, vídeo reproduzível e sem overflow, safe-area, nav e modal. A imagem ser *semanticamente relacionada* requer curadoria verificável; naturalWidth não comprova.
- Preview de **artefatos imutáveis** usando a mesma build do app; o teste em \`main\` somente para mudanças no aplicativo, sem rebuild diário para simples notícias.
- Release auditável: links de fontes, hashes, QA, approver/policy automation, geração anterior.

## 7. Falhas, migração e compatibilidade
- **Bootstrap:** exportar a atual edição 20/10 para um release legado imutável; conferir bytes/fotos e QA. A primeira API 6.0 pode servir fallback hardcoded de forma rotulada até a configuração do DB estar saudável.
- **Migração segura em fases:** primeiro DB e Storage em ambiente isolado; API com preview; QA; PR + gates do app; único deploy de código 6.0; então ativação controlada do ponteiro. **Não** habilitar antes de testar a compatibilidade do app com \`schemaVersion\`.
- **Queda de DB/API:** mantém último snapshot saudável no leitor **com data explícita**, sem afirmar ser a edição atual; rotas de saúde e alerta.
- **Falha de mídia:** não publicar; ou fallback pré-validado dentro da **mesma** edição.
- **Rollback:** reativar último release validado sem deletar o candidato nem sobrescrever mídia. Preservar evidências, histórico e geração; nunca reutilizar nome imutável.
- **Segurança:** RLS e grants estritos; leituras públicas via API sanitizada; publicação via segredo exclusivamente server/CI, credenciais nunca no navegador. Desabilitar exportação de dados privados.
- **Acompanhamento:** \`publication_generation\`, \`last_editorial_update\`, \`failed_gates\`, \`media_failures\`, \`rollback_count\` e validade das fontes.
- **Condição de sucesso:** no mesmo dia, editar somente cards materialmente alterados no novo snapshot imutável (outros conservam id e hash), QA **da edição completa**, CAS e DOM real pós-release.

## 8. Fora de escopo desta PR (intencional)
Nenhum banco de dados alterado; nenhum storage criado ou modificado; nenhum deploy ou mudança de domínio; nenhuma credencial coletada. Esta PR é **somente arquitetura e contratos**. Não promover os contratos para \`main\` como se a integração estivesse concluída; a implementação será outro PR com gates.
