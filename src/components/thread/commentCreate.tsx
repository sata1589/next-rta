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
import { uploadFile } from "@/actions/comment";

const allowedAudioTypes = ["audio/mpeg", "audio/wav", "audio/ogg"];
const fileSchema = z
  .custom<File>()
  .refine((file) => !file || file.size <= 200 * 1024, {
    message: "ファイルサイズは200KB以下にしてください。",
  })
  .refine((file) => !file || allowedAudioTypes.includes(file.type), {
    message: "音声ファイルのみをアップロードしてください（MP3、WAVなど）。",
  })
  .refine(
    (file) => {
      const hasJapaneseCharacters = /[^\x00-\x7F]/.test(file?.name || "");
      return !hasJapaneseCharacters;
    },
    {
      message: "ファイル名に日本語を含めることはできません。",
    }
  );

export const formSchema = z.object({
  username: z
    .string()
    .max(10, { message: "ユーザー名は10文字以内で入力してください。" }),
  content: z
    .string()
    .min(1, {
      message: "コメントを入力してください。",
    })
    .max(140, { message: "コメントは140文字以内で入力してください。" }),
  file: fileSchema,
});

export function CommentCreateButton({ threadId }: { threadId: string }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      content: "",
      file: undefined,
    },
  });

  async function onSubmit(value: z.infer<typeof formSchema>) {
    await uploadFile({ value, threadId });
    window.location.reload();
  }

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center gap-2 bg-sky-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          コメントを作成
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>コメントを投稿</DialogTitle>
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
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>コメント</FormLabel>
                  <FormControl>
                    <Textarea placeholder="コメント" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>音声ファイル</FormLabel>
                  <FormControl>
                    <Input
                      id="sound"
                      type="file"
                      accept={allowedAudioTypes.join(",")} // MIMEタイプを設定
                      onChange={(e) => {
                        const files = e.target.files;
                        if (files && files.length > 0) {
                          // 最初のファイルを設定
                          field.onChange(files[0]);
                        } else {
                          // ファイルが選択されていない場合
                          field.onChange(undefined);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
