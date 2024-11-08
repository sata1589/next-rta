import { getAllCommentByThread } from "@/actions/comment";
import { CommentList } from "@/components/thread/commentList";

export default async function Thread({ params }: { params: { id: string } }) {
  const { id } = await params;
  const allComments = await getAllCommentByThread(id);
  return (
    <main>
      {allComments ? (
        <CommentList comments={allComments} threadId={id} />
      ) : (
        <></>
      )}
    </main>
  );
}
