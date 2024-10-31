/*
  Warnings:

  - You are about to drop the column `fileURL` on the `ThreadContent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ThreadContent" DROP COLUMN "fileURL",
ADD COLUMN     "filePath" TEXT;
