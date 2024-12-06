import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const body = await request.json();
  const { title, content, excerpt } = body;

  const post = await prisma.post.create({
    data: { title, content, excerpt },
  });

  return NextResponse.json(post);
}
