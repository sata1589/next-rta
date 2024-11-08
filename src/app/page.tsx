import { ThreadItemList } from "@/components/threadItemList";
import { Thread } from "@/type/post";

async function GetFirstThreads() {
  const res = await fetch(`http://localhost:3000/api/thread`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return [];
  }
  const data: Thread[] = await res.json();
  console.log();
  return data;
}

export default async function Home() {
  const firstThreads = await GetFirstThreads();
  return (
    <main className="pb-4">
      <ThreadItemList firstThreads={firstThreads} />
    </main>
  );
}
