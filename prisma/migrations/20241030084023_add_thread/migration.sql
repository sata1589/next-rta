-- CreateTable
CREATE TABLE "Thread" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL DEFAULT '匿名希望',
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Thread_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ThreadContent" (
    "id" SERIAL NOT NULL,
    "threadId" INTEGER NOT NULL,
    "user" TEXT NOT NULL DEFAULT '匿名希望',
    "content" TEXT NOT NULL,
    "fileURL" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ThreadContent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ThreadContent" ADD CONSTRAINT "ThreadContent_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "Thread"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
