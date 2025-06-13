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
    "sets" INTEGER NOT NULL,
    "reps" INTEGER NOT NULL,
    "duration" INTEGER,
    "notes" TEXT,
    "directions" TEXT,
    "information" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "clientId" TEXT,
    CONSTRAINT "Exercise_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Exercise" ("category", "clientId", "createdAt", "description", "difficulty", "directions", "duration", "equipment", "id", "information", "name", "notes", "reps", "sets", "updatedAt") SELECT "category", "clientId", "createdAt", "description", "difficulty", "directions", "duration", "equipment", "id", "information", "name", "notes", "reps", "sets", "updatedAt" FROM "Exercise";
DROP TABLE "Exercise";
ALTER TABLE "new_Exercise" RENAME TO "Exercise";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
