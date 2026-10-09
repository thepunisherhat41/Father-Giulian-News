import { NextRequest, NextResponse } from 'next/server';
import {
  verifyEditorialCandidateWithJev,
  type EditorialCandidate,
} from '@/lib/ai/jev-editorial-verifier';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function previewOnly() {
  return process.env.VERCEL_ENV !== 'production';
}

const smokeCandidate: EditorialCandidate = {
  slug: 'jev-smoke',
  title: 'Incidente publicado hoje, mas ocorrido ontem',
  summary:
    'ATUALIZAÇÃO · A matéria foi publicada hoje, porém descreve um incidente confirmado ocorrido ontem. O card está explicitamente rotulado como atualização e cita a fonte primária.',
  currentDate: '2026-10-08',
  classification: 'ATUALIZACAO',
  publishedAt: '2026-10-08T18:00:00-03:00',
  sourceLabels: ['Fonte oficial · boletim do incidente'],
  sourceUrls: ['https://example.com/official-incident'],
  evidence:
    'O fato-base ocorreu em 07/10/2026. Em 08/10/2026 houve publicação de atualização oficial material. O card não chama o fato-base de novo acontecimento de hoje.',
};

export async function GET() {
  if (!previewOnly()) {
    return new NextResponse(null, { status: 404 });
  }

  try {
    const result = await verifyEditorialCandidateWithJev(smokeCandidate);
    return NextResponse.json({
      ok: true,
      mode: 'SHADOW',
      environment: process.env.VERCEL_ENV ?? 'unknown',
      candidate: smokeCandidate,
      result,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        mode: 'SHADOW',
        environment: process.env.VERCEL_ENV ?? 'unknown',
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  if (!previewOnly()) {
    return new NextResponse(null, { status: 404 });
  }

  try {
    const candidate = (await request.json()) as EditorialCandidate;
    if (!candidate?.slug || !candidate?.title || !candidate?.summary || !candidate?.currentDate) {
      return NextResponse.json(
        { ok: false, error: 'slug, title, summary e currentDate são obrigatórios.' },
        { status: 400 },
      );
    }

    const result = await verifyEditorialCandidateWithJev(candidate);
    return NextResponse.json({
      ok: true,
      mode: 'SHADOW',
      environment: process.env.VERCEL_ENV ?? 'unknown',
      result,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        mode: 'SHADOW',
        environment: process.env.VERCEL_ENV ?? 'unknown',
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
