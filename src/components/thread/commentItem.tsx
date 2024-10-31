import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ThreadContent } from "@/type/post";
import { formatDistanceToNow } from "date-fns";

interface CommentProps {
  comment: ThreadContent;
  index: number;
}

export default function CommentItem({ comment, index }: CommentProps) {
  const { user, content, filePath, createdAt } = comment;
  return (
    <Card className="w-full mx-auto">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <p>{index}</p>
        <div>
          <h3 className="text-sm font-semibold">{user}</h3>
          <time className="text-xs text-muted-foreground">
            {formatDistanceToNow(createdAt, { addSuffix: true })}
          </time>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm mb-4">{content}</p>
        {filePath ? (
          <div className="bg-muted rounded-md p-2">
            <audio controls className="w-full">
              <source src={filePath} type="audio/mpeg" />
              <source src={filePath} type="audio/wav" />
              <source src={filePath} type="audio/ogg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ) : (
          <></>
        )}
      </CardContent>
    </Card>
  );
}
