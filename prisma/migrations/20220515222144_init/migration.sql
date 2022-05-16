-- CreateTable
CREATE TABLE "Fish" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" VARCHAR(255) NOT NULL,
    "tonnesPerYear" VARCHAR(255) NOT NULL,
    "endangered" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Fish_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Fish_name_key" ON "Fish"("name");
