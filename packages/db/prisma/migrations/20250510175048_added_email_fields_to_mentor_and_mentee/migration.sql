/*
  Warnings:

  - You are about to drop the column `content` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Meeting` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Meeting` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Meeting` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Meeting` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Mentee` table. All the data in the column will be lost.
  - You are about to drop the column `disabled` on the `Mentee` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Mentee` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Mentor` table. All the data in the column will be lost.
  - You are about to drop the column `disabled` on the `Mentor` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Mentor` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Performance` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Performance` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Performance" DROP CONSTRAINT "Performance_menteeId_fkey";

-- AlterTable
ALTER TABLE "Announcement" DROP COLUMN "content",
DROP COLUMN "createdAt",
DROP COLUMN "title",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Meeting" DROP COLUMN "createdAt",
DROP COLUMN "description",
DROP COLUMN "title",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Mentee" DROP COLUMN "createdAt",
DROP COLUMN "disabled",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Mentor" DROP COLUMN "createdAt",
DROP COLUMN "disabled",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Performance" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ALTER COLUMN "CGPA" DROP DEFAULT,
ALTER COLUMN "otherDetails" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Performance" ADD CONSTRAINT "Performance_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "Mentee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
