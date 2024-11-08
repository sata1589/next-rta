import { getThreads } from "@/actions/thread";
import { ThreadItemList } from "@/components/threadItemList";

export default async function Home() {
  const firstThreads = await getThreads(1);
  return (
    <main className="pb-4">
      <ThreadItemList firstThreads={firstThreads} />
    </main>
  );
}
