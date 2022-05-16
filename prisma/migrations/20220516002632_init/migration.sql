/*
  Warnings:

  - Added the required column `state` to the `Fish` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fish" ADD COLUMN     "state" VARCHAR(255) NOT NULL;
