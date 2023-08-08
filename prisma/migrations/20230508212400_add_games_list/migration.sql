/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Game` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Game` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "gamesListId" INTEGER;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "gamesListId" INTEGER,
ADD COLUMN     "rating" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "gamesListId" INTEGER;

-- CreateTable
CREATE TABLE "GamesList" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "GamesList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GameToGamesList" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "GamesList_id_key" ON "GamesList"("id");

-- CreateIndex
CREATE UNIQUE INDEX "GamesList_username_key" ON "GamesList"("username");

-- CreateIndex
CREATE UNIQUE INDEX "_GameToGamesList_AB_unique" ON "_GameToGamesList"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToGamesList_B_index" ON "_GameToGamesList"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Game_id_key" ON "Game"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Game_slug_key" ON "Game"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_gamesListId_fkey" FOREIGN KEY ("gamesListId") REFERENCES "GamesList"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GamesList" ADD CONSTRAINT "GamesList_username_fkey" FOREIGN KEY ("username") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToGamesList" ADD CONSTRAINT "_GameToGamesList_A_fkey" FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToGamesList" ADD CONSTRAINT "_GameToGamesList_B_fkey" FOREIGN KEY ("B") REFERENCES "GamesList"("id") ON DELETE CASCADE ON UPDATE CASCADE;
