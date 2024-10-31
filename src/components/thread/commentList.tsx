import { ThreadContent } from "@/type/post";
import CommentItem from "./commentItem";
import { CommentCreateButton } from "./commentCreate";

interface CommentsProps {
  comments: ThreadContent[];
  threadId: string;
}

export function CommentList({ comments, threadId }: CommentsProps) {
  return (
    <div className="max-w-7xl m-auto px-4">
      {comments.map((comment, index) => (
        <CommentItem key={index} comment={comment} index={index + 1} />
      ))}

      <div className="flex justify-center my-4">
        <CommentCreateButton threadId={threadId} />
      </div>
    </div>
  );
}
