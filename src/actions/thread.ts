"use server";

import { threadFormSchema } from "@/components/thread/createThreadButton";
import prisma from "@/lib/db";
import { z } from "zod";

export async function getThreads(page: number) {
  const take = 3;
  return await prisma.thread.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: take,
    skip: take * (page - 1),
  });
}

export async function createThread(value: z.infer<typeof threadFormSchema>) {
  const { title, username } = value;
  const createdThread = await prisma.thread.create({
    data: {
      title: title,
      user: username && username.trim() !== "" ? username : "匿名希望",
    },
  });
  return createdThread.id;
}
