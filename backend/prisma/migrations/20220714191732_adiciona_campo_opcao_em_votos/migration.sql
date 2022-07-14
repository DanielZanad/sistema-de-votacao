/*
  Warnings:

  - Added the required column `opcao` to the `votos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "votos" ADD COLUMN     "opcao" TEXT NOT NULL;
