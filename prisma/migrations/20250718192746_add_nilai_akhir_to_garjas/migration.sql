/*
  Warnings:

  - You are about to drop the column `userId` on the `profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nilai_akhir` to the `garjas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `profile_userId_fkey`;

-- DropIndex
DROP INDEX `profile_userId_key` ON `profile`;

-- AlterTable
ALTER TABLE `garjas` ADD COLUMN `nilai_akhir` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `profile` DROP COLUMN `userId`,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `profile_user_id_key` ON `profile`(`user_id`);

-- AddForeignKey
ALTER TABLE `profile` ADD CONSTRAINT `profile_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
