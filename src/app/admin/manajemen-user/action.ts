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
import {
  InputUserSchemaType,
  UpdateUserSchemaType,
} from "@/validations/schemas/user";

export async function createUser(
  payload: InputUserSchemaType
): Promise<ServerActionReturn<void>> {
  try {
    console.log(payload);

    const create = await prisma.user.create({
      data: {
        name: payload.name,
        username: payload.username,
        password: hashSync(payload.password, 10),
        role: payload.role,
        avatar: payload.avatar,
        profile: {
          create: {
            golongan: payload.golongan,
            pangkat: payload.pangkat,
            jenisKelamin: payload.jenis_kelamin,
            umur: payload.umur,
          },
        },
      },
    });

    console.log(create);

    return successResponse(undefined, "User Berhasil Ditambahkan");
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

export async function updateUser(
  payload: UpdateUserSchemaType
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
