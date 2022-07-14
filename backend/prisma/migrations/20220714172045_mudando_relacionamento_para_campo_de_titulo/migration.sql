-- DropForeignKey
ALTER TABLE "votos" DROP CONSTRAINT "votos_enqueteId_fkey";

-- AddForeignKey
ALTER TABLE "votos" ADD CONSTRAINT "votos_enqueteId_fkey" FOREIGN KEY ("enqueteId") REFERENCES "enquetes"("titulo") ON DELETE RESTRICT ON UPDATE CASCADE;
