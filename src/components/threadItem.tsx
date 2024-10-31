import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Thread } from "@/type/post";
import { format } from "date-fns/fp";
import { formatDistanceToNow } from "date-fns";

interface ThreadProps {
  thread: Thread;
}

export function ThreadItem({ thread }: ThreadProps) {
  const { id, user, title, createdAt } = thread;
  const formatData = format("yyyy-MM-dd HH:mm:ss");
  const createdAtString = formatData(createdAt);
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
