/*
  Warnings:

  - Added the required column `clientNumber` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientNumber" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "dateOfBirth" DATETIME,
    "address" TEXT,
    "medicalHistory" TEXT,
    "injuries" TEXT,
    "goals" TEXT,
    "notes" TEXT,
    "startDate" DATETIME,
    "expirationDate" DATETIME,
    "sessionPackage" TEXT,
    "sessionsRemaining" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Client_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Client" ("address", "createdAt", "dateOfBirth", "email", "expirationDate", "firstName", "goals", "id", "injuries", "lastName", "medicalHistory", "notes", "phone", "sessionPackage", "sessionsRemaining", "startDate", "updatedAt", "userId") SELECT "address", "createdAt", "dateOfBirth", "email", "expirationDate", "firstName", "goals", "id", "injuries", "lastName", "medicalHistory", "notes", "phone", "sessionPackage", "sessionsRemaining", "startDate", "updatedAt", "userId" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE UNIQUE INDEX "Client_clientNumber_key" ON "Client"("clientNumber");
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
