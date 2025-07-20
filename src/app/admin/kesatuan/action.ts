"use server";

import { PrismaClientKnownRequestError } from "@/app/generated/prisma/runtime/library";
import { successResponse, errorResponse } from "@/helper/action-helpers";
import { prisma } from "@/lib/prisma";
import { LocalStorageService } from "@/services/storage_services";
import { ServerActionReturn } from "@/types/server-action";
import { InputKesatuanSchemaType } from "@/validations/schemas/kesatuan";

import { unlink, existsSync } from "fs";
import { join } from "path";

const storageService = new LocalStorageService();

export async function uploadKesatuanLogo(formData: FormData) {
  const file = formData.get("logo") as File;
  const kesatuanName = (formData.get("kesatuanName") as string) || "default";

  if (!file || typeof file === "string" || file.size === 0) {
    return errorResponse("Tidak ada file yang diunggah.", "NO_FILE_UPLOADED");
  }

  try {
    const logoUrl = await storageService.uploadImage(
      file,
      `kesatuan_${kesatuanName}`,
      "kesatuan"
    );
    return successResponse({ logoUrl }, "Logo berhasil diunggah.");
  } catch (e: any) {
    console.error("Error uploading kesatuan logo in server action:", e);
    return errorResponse(e.message, "UPLOAD_FAILED");
  }
}

export async function updateKesatuan(
  id: string,
  payload: InputKesatuanSchemaType
): Promise<ServerActionReturn<void>> {
  try {
    const { nama, motto, logo } = payload;

    const existingKesatuan = await prisma.kesatuan.findUnique({
      where: { id: id },
      select: { logo: true },
    });

    if (!existingKesatuan) {
      return errorResponse("Kesatuan tidak ditemukan.", "NOT_FOUND");
    }

    const updatedKesatuan = await prisma.kesatuan.update({
      where: { id: id },
      data: {
        nama: nama,
        motto: motto,
        logo: logo,
      },
    });

    const defaultLogoPath = "public/uploads/kesatuan/default-logo.svg";

    if (existingKesatuan.logo && existingKesatuan.logo !== defaultLogoPath) {
      if (logo === null || (logo && logo !== existingKesatuan.logo)) {
        const oldLogoAbsolutePath = join(process.cwd(), existingKesatuan.logo);

        if (existsSync(oldLogoAbsolutePath)) {
          unlink(oldLogoAbsolutePath, (err) => {
            if (err) {
              console.error(
                `Gagal menghapus logo lama ${oldLogoAbsolutePath}:`,
                err
              );
            } else {
              console.log(`Logo lama berhasil dihapus: ${oldLogoAbsolutePath}`);
            }
          });
        } else {
          console.warn(
            `Logo lama tidak ditemukan di ${oldLogoAbsolutePath}, melewati penghapusan.`
          );
        }
      }
    }

    console.log("Kesatuan updated:", updatedKesatuan);

    return successResponse(undefined, "Data Kesatuan berhasil diperbarui.");
  } catch (e: any) {
    console.error("Error updating kesatuan:", e);

    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        const targetField =
          (e.meta?.target as string[])?.join(", ") || "Unknown field";
        if (targetField.includes("nama")) {
          return errorResponse(
            "Nama kesatuan sudah digunakan.",
            "DUPLICATE_NAME"
          );
        }
        return errorResponse(
          `Nilai unik sudah ada untuk ${targetField}.`,
          "DUPLICATE_ENTRY"
        );
      } else if (e.code === "P2025") {
        return errorResponse("Kesatuan tidak ditemukan.", "NOT_FOUND");
      }
    }
    return errorResponse(
      "Terjadi kesalahan saat memperbarui kesatuan: " + e.message,
      "SERVER_ERROR"
    );
  }
}

export async function createInitialKesatuan(
  payload: InputKesatuanSchemaType
): Promise<ServerActionReturn<{ id: string }>> {
  try {
    const newKesatuan = await prisma.kesatuan.create({
      data: {
        nama: payload.nama,
        motto: payload.motto,
        logo: payload.logo,
      },
      select: {
        id: true,
      },
    });
    return successResponse({ id: newKesatuan.id }, "Kesatuan berhasil dibuat.");
  } catch (e: any) {
    console.error("Error creating initial kesatuan:", e);
    if (e.code === "P2002") {
      return errorResponse("Nama kesatuan sudah ada.", "DUPLICATE_NAME");
    }
    return errorResponse(
      "Gagal membuat kesatuan: " + e.message,
      "SERVER_ERROR"
    );
  }
}
