/*
  Warnings:

  - You are about to drop the column `sessionNumber` on the `Appointment` table. All the data in the column will be lost.
  - Added the required column `packageNumber` to the `Package` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'SCHEDULED',
    "type" TEXT,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "Appointment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Appointment_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Appointment" ("clientId", "createdAt", "endTime", "id", "notes", "startTime", "status", "title", "type", "updatedAt", "userId") SELECT "clientId", "createdAt", "endTime", "id", "notes", "startTime", "status", "title", "type", "updatedAt", "userId" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
CREATE TABLE "new_Package" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "packageNumber" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "sessions" INTEGER NOT NULL,
    "sessionsUsed" INTEGER NOT NULL DEFAULT 0,
    "startDate" DATETIME NOT NULL,
    "expirationDate" DATETIME NOT NULL,
    "paymentStatus" TEXT NOT NULL,
    "amount" REAL,
    "voided" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "Package_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Package" ("amount", "clientId", "createdAt", "expirationDate", "id", "paymentStatus", "sessions", "sessionsUsed", "startDate", "type", "updatedAt", "voided") SELECT "amount", "clientId", "createdAt", "expirationDate", "id", "paymentStatus", "sessions", "sessionsUsed", "startDate", "type", "updatedAt", "voided" FROM "Package";
DROP TABLE "Package";
ALTER TABLE "new_Package" RENAME TO "Package";
CREATE UNIQUE INDEX "Package_packageNumber_key" ON "Package"("packageNumber");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
