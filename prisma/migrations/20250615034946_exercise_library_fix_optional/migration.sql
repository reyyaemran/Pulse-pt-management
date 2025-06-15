/*
  Warnings:

  - You are about to drop the `_ExerciseToExerciseMuscleGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `directions` on the `Exercise` table. All the data in the column will be lost.
  - You are about to drop the column `information` on the `Exercise` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "_ExerciseToExerciseMuscleGroup_B_index";

-- DropIndex
DROP INDEX "_ExerciseToExerciseMuscleGroup_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ExerciseToExerciseMuscleGroup";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Exercise" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL DEFAULT 'beginner',
    "equipment" TEXT,
    "targetMuscles" TEXT,
    "instructions" JSONB,
    "tips" JSONB,
    "variations" JSONB,
    "sets" INTEGER,
    "reps" INTEGER,
    "duration" INTEGER,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "clientId" TEXT,
    CONSTRAINT "Exercise_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Exercise" ("category", "clientId", "createdAt", "description", "difficulty", "duration", "equipment", "id", "name", "notes", "reps", "sets", "updatedAt") SELECT "category", "clientId", "createdAt", "description", "difficulty", "duration", "equipment", "id", "name", "notes", "reps", "sets", "updatedAt" FROM "Exercise";
DROP TABLE "Exercise";
ALTER TABLE "new_Exercise" RENAME TO "Exercise";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
