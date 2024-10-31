"use client";

import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import { createThread } from "@/actions/thread";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const threadFormSchema = z.object({
  username: z
    .string()
    .max(10, { message: "ユーザー名は10文字以内で入力してください。" }),
  title: z
    .string()
    .min(1, {
      message: "タイトルを入力してください。",
    })
    .max(30, { message: "タイトルは30文字以内で入力してください。" }),
});

export function ThreadCreateButton() {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm({
    resolver: zodResolver(threadFormSchema),
    defaultValues: {
      username: "",
      title: "",
    },
  });

  const router = useRouter();
  async function onSubmit(value: z.infer<typeof threadFormSchema>) {
    const newId = await createThread(value);
    router.replace(`/thread/${newId}/content`);
    setIsOpen(false);
    form.reset();
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-gray-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          スレッドを作成
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>新しいスレッド</DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ユーザー名</FormLabel>
                  <FormControl>
                    <Input placeholder="匿名希望" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>タイトル</FormLabel>
                  <FormControl>
                    <Textarea placeholder="タイトル" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">作成</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
