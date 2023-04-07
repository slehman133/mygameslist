/*
  Warnings:

  - You are about to drop the column `featured` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "featured",
ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false;
