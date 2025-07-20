-- AlterTable
ALTER TABLE `user` ADD COLUMN `kesatuanId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `kesatuan` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `motto` VARCHAR(191) NULL,
    `logo` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `kesatuan_nama_key`(`nama`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_kesatuanId_fkey` FOREIGN KEY (`kesatuanId`) REFERENCES `kesatuan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
