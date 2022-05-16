/*
  Warnings:

  - Added the required column `dateEnd` to the `Fish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateStart` to the `Fish` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fish" ADD COLUMN     "dateEnd" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dateStart" TIMESTAMP(3) NOT NULL;
