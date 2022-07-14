/*
  Warnings:

  - A unique constraint covering the columns `[titulo]` on the table `enquetes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "enquetes_titulo_key" ON "enquetes"("titulo");
