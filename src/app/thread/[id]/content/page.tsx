import { CommentList } from "@/components/thread/commentList";
import { ThreadContent } from "@/type/post";

async function GetAllComment(id: string) {
  const res = await fetch(`http://localhost:3000/api/thread/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return undefined;
  }
  const data: ThreadContent[] = await res.json();
  console.log();
  return data;
}

export default async function Thread({ params }: { params: { id: string } }) {
  const { id } = await params;
  const allComments = await GetAllComment(id);
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
