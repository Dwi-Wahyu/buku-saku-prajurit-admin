-- CreateTable
CREATE TABLE `garjas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lari` INTEGER NOT NULL,
    `garjas_a` DOUBLE NOT NULL,
    `pullup` INTEGER NULL,
    `shuttle_run` DOUBLE NOT NULL,
    `renang` INTEGER NULL,
    `situp` INTEGER NULL,
    `pushup` INTEGER NULL,
    `pangkat` VARCHAR(191) NOT NULL,
    `skor_b1` DOUBLE NOT NULL,
    `skor_b2` DOUBLE NOT NULL,
    `skor_b3` DOUBLE NOT NULL,
    `skor_b4` DOUBLE NOT NULL,
    `garjas_b` DOUBLE NOT NULL,
    `penilai_id` INTEGER NOT NULL,
    `prajurit_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `last_login` DATETIME(3) NULL,
    `role` ENUM('superadmin', 'admin', 'penilai', 'prajurit') NOT NULL,

    UNIQUE INDEX `user_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `umur` INTEGER NOT NULL,
    `jenis_kelamin` VARCHAR(191) NOT NULL,
    `golongan` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `pangkat` VARCHAR(191) NOT NULL,
    `berat_badan` INTEGER NULL,
    `tinggi_badan` INTEGER NULL,

    UNIQUE INDEX `profile_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `garjas` ADD CONSTRAINT `garjas_penilai_id_fkey` FOREIGN KEY (`penilai_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `garjas` ADD CONSTRAINT `garjas_prajurit_id_fkey` FOREIGN KEY (`prajurit_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `profile` ADD CONSTRAINT `profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
