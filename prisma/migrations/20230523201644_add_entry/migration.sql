/*
  Warnings:

  - You are about to drop the column `gamesListId` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `gamesListId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the `_GameToGamesList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_gamesListId_fkey";

-- DropForeignKey
ALTER TABLE "_GameToGamesList" DROP CONSTRAINT "_GameToGamesList_A_fkey";

-- DropForeignKey
ALTER TABLE "_GameToGamesList" DROP CONSTRAINT "_GameToGamesList_B_fkey";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "gamesListId";

-- AlterTable
ALTER TABLE "GamesList" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "gamesListId";

-- DropTable
DROP TABLE "_GameToGamesList";

-- CreateTable
CREATE TABLE "GamesListEntry" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER,
    "status" TEXT,
    "gameId" INTEGER NOT NULL,
    "gamesListId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GamesListEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GamesListEntry_id_key" ON "GamesListEntry"("id");

-- AddForeignKey
ALTER TABLE "GamesListEntry" ADD CONSTRAINT "GamesListEntry_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GamesListEntry" ADD CONSTRAINT "GamesListEntry_gamesListId_fkey" FOREIGN KEY ("gamesListId") REFERENCES "GamesList"("id") ON DELETE SET NULL ON UPDATE CASCADE;
