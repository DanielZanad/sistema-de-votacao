-- CreateTable
CREATE TABLE "enquetes" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "opcoes" TEXT NOT NULL,

    CONSTRAINT "enquetes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "votos" (
    "id" TEXT NOT NULL,
    "votos" INTEGER NOT NULL,
    "enqueteId" TEXT NOT NULL,

    CONSTRAINT "votos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "votos" ADD CONSTRAINT "votos_enqueteId_fkey" FOREIGN KEY ("enqueteId") REFERENCES "enquetes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
