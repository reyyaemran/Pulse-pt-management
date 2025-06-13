-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Package" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
INSERT INTO "new_Package" ("amount", "clientId", "createdAt", "expirationDate", "id", "paymentStatus", "sessions", "sessionsUsed", "startDate", "type", "updatedAt") SELECT "amount", "clientId", "createdAt", "expirationDate", "id", "paymentStatus", "sessions", "sessionsUsed", "startDate", "type", "updatedAt" FROM "Package";
DROP TABLE "Package";
ALTER TABLE "new_Package" RENAME TO "Package";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
