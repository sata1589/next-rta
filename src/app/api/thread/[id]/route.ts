import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const res = await prisma.threadContent.findMany({
    where: {
      threadId: parseInt(id),
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  return NextResponse.json(res);
}
