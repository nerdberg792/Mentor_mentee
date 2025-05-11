/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Mentee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Mentor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `content` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Mentee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Mentee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Mentor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Performance" DROP CONSTRAINT "Performance_menteeId_fkey";

-- AlterTable
ALTER TABLE "Announcement" ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Meeting" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "title" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Mentee" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "disabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Mentor" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "disabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Performance" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ALTER COLUMN "CGPA" SET DEFAULT ARRAY[0, 0, 0, 0, 0, 0, 0, 0]::DOUBLE PRECISION[],
ALTER COLUMN "otherDetails" SET DEFAULT ARRAY[]::TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "Mentee_email_key" ON "Mentee"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_email_key" ON "Mentor"("email");

-- AddForeignKey
ALTER TABLE "Performance" ADD CONSTRAINT "Performance_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "Mentee"("id") ON DELETE CASCADE ON UPDATE CASCADE;
