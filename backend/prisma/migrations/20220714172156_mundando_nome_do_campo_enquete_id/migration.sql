/*
  Warnings:

  - You are about to drop the column `enqueteId` on the `votos` table. All the data in the column will be lost.
  - Added the required column `enqueteTitulo` to the `votos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "votos" DROP CONSTRAINT "votos_enqueteId_fkey";

-- AlterTable
ALTER TABLE "votos" DROP COLUMN "enqueteId",
ADD COLUMN     "enqueteTitulo" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "votos" ADD CONSTRAINT "votos_enqueteTitulo_fkey" FOREIGN KEY ("enqueteTitulo") REFERENCES "enquetes"("titulo") ON DELETE RESTRICT ON UPDATE CASCADE;
