import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  const res = await prisma.post.findMany();
  return NextResponse.json(res);
}
