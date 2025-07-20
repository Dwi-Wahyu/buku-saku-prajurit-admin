"use server";

import { successResponse, errorResponse } from "@/helper/action-helpers";
import { prisma } from "@/lib/prisma";
import { LocalStorageService } from "@/services/storage_services";
import { ServerActionReturn } from "@/types/server-action";

import { revalidatePath } from "next/cache";
import { MediaBeritaUploadInputSchemaType } from "@/validations/schemas/media-berita";
import { unlinkSync } from "fs";
import { join } from "path";

export async function uploadMedia(file: File, filename: string) {
  const storageService = new LocalStorageService();

  const mediaUrl = await storageService.uploadMedia(file, filename, "berita");

  return mediaUrl;
}

export async function createMediaBerita(
  payload: MediaBeritaUploadInputSchemaType
): Promise<ServerActionReturn<{ urlMedia: string }>> {
  try {
    const { urlMedia, keterangan } = payload;

    const media = await prisma.mediaBerita.create({
      data: {
        urlMedia,
        keterangan,
      },
    });

    revalidatePath("/admin/berita/media");

    return successResponse(
      { urlMedia: media.urlMedia },
      "Berita Berhasil Ditambahkan"
    );
  } catch (e: any) {
    console.error("Error creating berita:", e);

    return errorResponse(
      "Terjadi kesalahan saat input berita: " + e.message,
      "SERVER_ERROR"
    );
  }
}

export async function deleteMediaBerita(
  id: string
): Promise<ServerActionReturn<void>> {
  try {
    const mediaBerita = await prisma.mediaBerita.findFirst({
      where: {
        id,
      },
    });

    if (!mediaBerita) {
      return errorResponse("Media Berita Tidak Ditemukan", "SERVER_ERROR");
    }

    const absolutePath = join(process.cwd(), "public", mediaBerita.urlMedia);

    unlinkSync(absolutePath);

    await prisma.mediaBerita.delete({
      where: {
        id,
      },
    });

    revalidatePath("/admin/berita/media");

    return successResponse(undefined, "Media Berita berhasil dihapus.");
  } catch (e) {
    console.error("Error deleting media berita:", e);

    return errorResponse(
      "Terjadi kesalahan saat media berita: " + e,
      "SERVER_ERROR"
    );
  }
}
