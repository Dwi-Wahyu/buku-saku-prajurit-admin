"use server";

import { successResponse, errorResponse } from "@/helper/action-helpers";
import { prisma } from "@/lib/prisma";
import { LocalStorageService } from "@/services/storage_services";
import { ServerActionReturn } from "@/types/server-action";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { join } from "path";
import { existsSync, unlink } from "fs";
import { revalidatePath } from "next/cache";
import {
  InputBeritaSchemaType,
  UpdateBeritaSchemaType,
} from "@/validations/schemas/berita";

export async function uploadThumbnail(file: File, judul: string) {
  const storageService = new LocalStorageService();

  const avatarUrl = await storageService.uploadImage(file, judul, "berita");

  return avatarUrl;
}

export async function createBerita(
  payload: InputBeritaSchemaType
): Promise<ServerActionReturn<void>> {
  try {
    const { content, deskripsi, judul, penulis, thumbnail } = payload;

    const berita = await prisma.berita.create({
      data: {
        content,
        deskripsi,
        penulis,
        thumbnail,
        judul,
      },
    });

    console.log(berita);

    return successResponse(undefined, "Berita Berhasil Ditambahkan");
  } catch (e: any) {
    console.error("Error creating berita:", e);

    return errorResponse(
      "Terjadi kesalahan saat input berita: " + e.message,
      "SERVER_ERROR"
    );
  }
}

export async function updateBerita(
  payload: UpdateBeritaSchemaType
): Promise<ServerActionReturn<void>> {
  try {
    const { content, deskripsi, judul, penulis, thumbnail } = payload;

    const berita = await prisma.berita.create({
      data: {
        content,
        deskripsi,
        penulis,
        thumbnail,
        judul,
      },
    });

    console.log(berita);

    return successResponse(undefined, "Berita Berhasil Ditambahkan");
  } catch (e: any) {
    console.error("Error creating berita:", e);

    return errorResponse(
      "Terjadi kesalahan saat input berita: " + e.message,
      "SERVER_ERROR"
    );
  }
}

export async function deleteBerita(
  id: string
): Promise<ServerActionReturn<void>> {
  try {
    const berita = await prisma.berita.findFirst({
      where: { id },
      select: {
        id: true,
        thumbnail: true,
      },
    });

    if (!berita) {
      return errorResponse("Prajurit tidak ditemukan.", "NOT_FOUND");
    }

    await prisma.berita.delete({
      where: { id },
    });

    if (berita.thumbnail) {
      const thumbnailAbsolutePath = join(
        process.cwd(),
        "public",
        berita.thumbnail
      );

      if (existsSync(thumbnailAbsolutePath)) {
        unlink(thumbnailAbsolutePath, (err) => {
          if (err) {
            console.error(
              `Gagal menghapus file thumbnail ${thumbnailAbsolutePath}:`,
              err
            );
          } else {
            console.log(
              `File thumbnail berhasil dihapus: ${thumbnailAbsolutePath}`
            );
          }
        });
      } else {
        console.warn(
          `File thumbnail tidak ditemukan di ${thumbnailAbsolutePath}, melewati penghapusan.`
        );
      }
    }

    revalidatePath("/admin/berita");

    return successResponse(undefined, "Berita berhasil dihapus.");
  } catch (e: any) {
    console.error("Error deleting berita:", e);

    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2025") {
        return errorResponse("Berita tidak ditemukan.", "NOT_FOUND");
      }
    }
    return errorResponse(
      "Terjadi kesalahan saat menghapus berita: " + e.message,
      "SERVER_ERROR"
    );
  }
}
