import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Thread } from "@/type/post";
import { formatDistanceToNow } from "date-fns";

interface ThreadProps {
  thread: Thread;
}

export function ThreadItem({ thread }: ThreadProps) {
  const { id, user, title, createdAt } = thread;
  return (
    <Link href={`./thread/${id}/content`}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>opened by {user}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <p className="text-sm flex">
            {formatDistanceToNow(createdAt, { addSuffix: true })}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
