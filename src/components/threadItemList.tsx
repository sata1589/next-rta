"use client";
import { Thread } from "@/type/post";
import { ThreadItem } from "./threadItem";
import { assert } from "console";
import { useEffect, useState } from "react";

interface ThreadProps {
  threads: Thread[];
}

export function ThreadItemList() {
  async function fetchThreads(page: number) {
    const res = await fetch(`http://localhost:3000/api/thread?page=${page}`, {
      cache: "no-store",
    });

    const newData = await res.json();
    if (newData.length !== 0) {
      setThreads((prevThreads) => [...prevThreads, ...newData]);
    } else {
      setIsEnd(true);
    }
  }
  const [threads, setThreads] = useState<Thread[]>([]);
  const [page, setPage] = useState(1);
  const [isEnd, setIsEnd] = useState(false);
  useEffect(() => {
    fetchThreads(page);
  }, [page]);
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <>
      <div className="p-4 lg:grid-cols-3 grid gap-4 max-w-screen-2xl m-auto">
        {threads.map((thread) => (
          <ThreadItem key={thread.id} thread={thread} />
        ))}
      </div>
      {isEnd ? (
        <></>
      ) : (
        <div
          onClick={handleLoadMore}
          className="flex m-auto max-w-lg  justify-center text-center items-center gap-2 bg-sky-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          もっと見る
        </div>
      )}
    </>
  );
}
