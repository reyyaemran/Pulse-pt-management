/*
  Warnings:

  - You are about to drop the `SessionHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "avatar" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SessionHistory";
PRAGMA foreign_keys=on;
