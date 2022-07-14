/*
  Warnings:

  - A unique constraint covering the columns `[opcao]` on the table `votos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "votos_opcao_key" ON "votos"("opcao");
