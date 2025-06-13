/*
  Warnings:

  - You are about to drop the `PackageActionLog` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN "directions" TEXT;
ALTER TABLE "Exercise" ADD COLUMN "information" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PackageActionLog";
PRAGMA foreign_keys=on;
