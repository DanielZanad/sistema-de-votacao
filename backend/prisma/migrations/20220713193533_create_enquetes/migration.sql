-- CreateTable
CREATE TABLE "enquetes" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "opcoes" TEXT NOT NULL,

    CONSTRAINT "enquetes_pkey" PRIMARY KEY ("id")
);
