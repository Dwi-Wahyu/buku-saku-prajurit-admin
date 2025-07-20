/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `garjas` DROP FOREIGN KEY `garjas_penilai_id_fkey`;

-- DropForeignKey
ALTER TABLE `garjas` DROP FOREIGN KEY `garjas_prajurit_id_fkey`;

-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `profile_userId_fkey`;

-- DropIndex
DROP INDEX `garjas_penilai_id_fkey` ON `garjas`;

-- DropIndex
DROP INDEX `garjas_prajurit_id_fkey` ON `garjas`;

-- AlterTable
ALTER TABLE `garjas` MODIFY `penilai_id` VARCHAR(191) NOT NULL,
    MODIFY `prajurit_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `profile` MODIFY `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `garjas` ADD CONSTRAINT `garjas_penilai_id_fkey` FOREIGN KEY (`penilai_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `garjas` ADD CONSTRAINT `garjas_prajurit_id_fkey` FOREIGN KEY (`prajurit_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `profile` ADD CONSTRAINT `profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
