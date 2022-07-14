/*
  Warnings:

  - A unique constraint covering the columns `[enqueteTitulo]` on the table `votos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "votos_enqueteTitulo_key" ON "votos"("enqueteTitulo");
