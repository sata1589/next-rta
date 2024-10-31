"use server";

import { supabase } from "@/lib/supabase";
import { formSchema } from "@/components/thread/commentCreate";
import { z } from "zod";
import prisma from "@/lib/db";

async function getMaxId(threadId: number) {
  const result = await prisma.threadContent.aggregate({
    where: {
      threadId: threadId,
    },
    _max: {
      id: true,
    },
  });

  return result._max.id; // 最大IDを返す
}

export async function uploadFile({
  value,
  threadId,
}: {
  value: z.infer<typeof formSchema>;
  threadId: string;
}) {
  const id = parseInt(threadId);
  const maxId = await getMaxId(id);
  const { username, content, file } = value;
  if (file) {
    const filePath = `post/${threadId}-${maxId}-${file.name}`;
    const { error } = await supabase.storage
      .from("sound")
      .upload(filePath, file);
    if (error) {
      console.log(error);
    }
    const { data } = supabase.storage.from("sound").getPublicUrl(filePath);
    const soundUrl = data.publicUrl;
    await prisma.threadContent.create({
      data: {
        user: username && username.trim() !== "" ? username : "匿名希望",
        content: content,
        filePath: soundUrl,
        threadId: id,
      },
    });
  } else {
    await prisma.threadContent.create({
      data: {
        user: username && username.trim() !== "" ? username : "匿名希望",
        content: content,
        threadId: id,
      },
    });
  }
}

export async function getAllCommentByThread() {}
