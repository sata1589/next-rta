import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");

  const take = 3;
  const res = await prisma.thread.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: take,
    skip: take * (page - 1),
  });
  return NextResponse.json(res);
}
