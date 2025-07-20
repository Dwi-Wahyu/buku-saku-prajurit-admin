/*
  Warnings:

  - You are about to drop the column `tipe_media` on the `media_berita` table. All the data in the column will be lost.
  - Added the required column `keterangan` to the `media_berita` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `media_berita` DROP COLUMN `tipe_media`,
    ADD COLUMN `keterangan` VARCHAR(191) NOT NULL;
