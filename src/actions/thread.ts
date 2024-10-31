"use server";

import { threadFormSchema } from "@/components/thread/createThreadButton";
import prisma from "@/lib/db";
import { z } from "zod";

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
