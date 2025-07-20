"use server";

import { successResponse, errorResponse } from "@/helper/action-helpers";
import { prisma } from "@/lib/prisma";
import { LocalStorageService } from "@/services/storage_services";
import { ServerActionReturn } from "@/types/server-action";
import {
  InputPrajuritSchemaType,
  UpdatePrajuritSchemaType,
} from "@/validations/schemas/prajurit";
import { hashSync } from "bcryptjs";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Prisma } from "@/app/generated/prisma";
import { join } from "path";
import { existsSync, unlink } from "fs";
import { revalidatePath } from "next/cache";

export async function uploadAvatar(file: File, username: string) {
  const storageService = new LocalStorageService();

  const avatarUrl = await storageService.uploadImage(file, username, "avatar");

  return avatarUrl;
}

export async function createPrajurit(
  payload: InputPrajuritSchemaType
): Promise<ServerActionReturn<void>> {
  try {
    console.log(payload);

    const create = await prisma.user.create({
      data: {
        name: payload.name,
        username: payload.username,
        password: hashSync(payload.password, 10),
        role: "prajurit",
        avatar: payload.avatar,
        profile: {
          create: {
            golongan: payload.golongan,
            pangkat: payload.pangkat,
            jenisKelamin: payload.jenis_kelamin,
            umur: payload.umur,
            beratBadan: payload.berat_badan,
            tinggiBadan: payload.berat_badan,
          },
        },
      },
    });

    console.log(create);

    return successResponse(undefined, "Prajurit Berhasil Ditambahkan");
  } catch (e: any) {
    console.error("Error creating prajurit:", e);

    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        const targetField =
          (e.meta?.target as string[])?.join(", ") || "Unknown field";
        if (targetField.includes("username")) {
          return errorResponse(
            "Username sudah digunakan. Silakan pilih username lain.",
            "DUPLICATE_USERNAME"
          );
        }
        return errorResponse(
          `Nilai unik sudah ada untuk ${targetField}.`,
          "DUPLICATE_ENTRY"
        );
      }
    }

    return errorResponse(
      "Terjadi kesalahan saat menambahkan prajurit: " + e.message,
      "SERVER_ERROR"
    );
  }
}

export async function updatePrajurit(
  payload: UpdatePrajuritSchemaType
): Promise<ServerActionReturn<void>> {
  try {
    const {
      id,
      password,
      avatar,
      username,
      name,
      pangkat,
      jenis_kelamin,
      umur,
      golongan,
      berat_badan,
      tinggi_badan,
    } = payload;

    const userDataToUpdate: Prisma.UserUpdateInput = {};

    if (name !== undefined) {
      userDataToUpdate.name = name;
    }
    if (username !== undefined) {
      userDataToUpdate.username = username;
    }
    if (password) {
      userDataToUpdate.password = hashSync(password, 10);
    }
    if (avatar !== undefined) {
      userDataToUpdate.avatar = avatar;
    }

    const profileDataToUpdate: Prisma.ProfileUpdateInput = {};

    if (pangkat !== undefined) {
      profileDataToUpdate.pangkat = pangkat;
    }
    if (jenis_kelamin !== undefined) {
      profileDataToUpdate.jenisKelamin = jenis_kelamin;
    }
    if (umur !== undefined) {
      profileDataToUpdate.umur = umur;
    }
    if (golongan !== undefined) {
      profileDataToUpdate.golongan = golongan;
    }
    if (berat_badan !== undefined) {
      profileDataToUpdate.beratBadan = berat_badan;
    }
    if (tinggi_badan !== undefined) {
      profileDataToUpdate.tinggiBadan = tinggi_badan;
    }

    const update = await prisma.user.update({
      where: { id: id },
      data: {
        ...userDataToUpdate,
        profile: {
          update: profileDataToUpdate,
        },
      },
    });

    console.log("Prajurit updated:", update);

    return successResponse(undefined, "Data Prajurit berhasil diperbarui");
  } catch (e: any) {
    console.error("Error updating prajurit:", e);

    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        const targetField =
          (e.meta?.target as string[])?.join(", ") || "Unknown field";
        if (targetField.includes("username")) {
          return errorResponse(
            "NRP sudah digunakan. Silakan pilih NRP lain.",
            "DUPLICATE_USERNAME"
          );
        }
        return errorResponse(
          `Nilai unik sudah ada untuk ${targetField}.`,
          "DUPLICATE_ENTRY"
        );
      } else if (e.code === "P2025") {
        return errorResponse("Prajurit tidak ditemukan.", "NOT_FOUND");
      }
    }
    return errorResponse(
      "Terjadi kesalahan saat memperbarui prajurit: " + e.message,
      "SERVER_ERROR"
    );
  }
}

export async function deleteUser(
  id: string
): Promise<ServerActionReturn<void>> {
  try {
    const prajurit = await prisma.user.findUnique({
      where: { id: id },
      select: {
        id: true,
        avatar: true,
      },
    });

    if (!prajurit) {
      return errorResponse("Prajurit tidak ditemukan.", "NOT_FOUND");
    }

    await prisma.user.update({
      where: { id: id },
      data: {
        deletedAt: new Date(),
      },
    });

    if (
      prajurit.avatar &&
      prajurit.avatar !== "public/uploads/avatar/default-avatar.jpg"
    ) {
      const avatarAbsolutePath = join(process.cwd(), "public", prajurit.avatar);

      if (existsSync(avatarAbsolutePath)) {
        unlink(avatarAbsolutePath, (err) => {
          if (err) {
            console.error(
              `Gagal menghapus file avatar ${avatarAbsolutePath}:`,
              err
            );
          } else {
            console.log(`File avatar berhasil dihapus: ${avatarAbsolutePath}`);
          }
        });
      } else {
        console.warn(
          `File avatar tidak ditemukan di ${avatarAbsolutePath}, melewati penghapusan.`
        );
      }
    }

    revalidatePath("/admin/prajurit");

    return successResponse(
      undefined,
      "Prajurit berhasil dihapus (soft delete)."
    );
  } catch (e: any) {
    console.error("Error soft deleting prajurit:", e);

    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2025") {
        return errorResponse("Prajurit tidak ditemukan.", "NOT_FOUND");
      }
    }
    return errorResponse(
      "Terjadi kesalahan saat menghapus prajurit: " + e.message,
      "SERVER_ERROR"
    );
  }
}
