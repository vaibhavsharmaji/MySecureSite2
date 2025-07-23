import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const resolved = url.searchParams.get('resolved') === 'true';

  const incidents = await prisma.incident.findMany({
    where: { resolved },
    orderBy: { tsStart: 'desc' },
    include: { camera: true },
  });

  return NextResponse.json(incidents);
}
