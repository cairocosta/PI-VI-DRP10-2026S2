/*
  Warnings:

  - You are about to drop the `system_configs` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "leads" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Novo';

-- DropTable
DROP TABLE "system_configs";
