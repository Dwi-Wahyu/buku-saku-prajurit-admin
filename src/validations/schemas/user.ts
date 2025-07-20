// src/schemas/user-schema.ts
import { z } from "zod";

// --- ENUMS ---
export const UserRole = z.enum(["superadmin", "admin", "penilai", "prajurit"]);

export const InputUserSchema = z.object({
  username: z.string().min(1, "Tolong isi NRP"),
  password: z.string().min(8, "Password minimal 8 karakter"),
  role: UserRole,
  name: z.string().min(1, {
    message: "Tolong isi nama.",
  }),
  pangkat: z.string().min(1, {
    message: "Tolong pilih pangkat.",
  }),
  jenis_kelamin: z.string().min(1, {
    message: "Tolong pilih jenis kelamin.",
  }),

  umur: z.number().min(18, { message: "Umur tidak boleh kurang dari 18." }),
  golongan: z.number(),

  avatar: z.string().nullable().optional(),
});

export type InputUserSchemaType = z.infer<typeof InputUserSchema>;

export const UpdateUserSchema = z.object({
  id: z.string().min(1, "ID User diperlukan untuk update."),

  username: z.string().min(1, "Tolong isi NRP").optional(),
  password: z
    .string()
    .transform((val) => (val === "" ? undefined : val))
    .optional()
    .refine((val) => val === undefined || val.length >= 8, {
      message: "Password minimal 8 karakter jika ingin mengubah",
    }),
  role: UserRole,
  name: z
    .string()
    .min(1, {
      message: "Tolong isi nama.",
    })
    .optional(),
  pangkat: z
    .string()
    .min(1, {
      message: "Tolong pilih pangkat.",
    })
    .optional(),
  jenis_kelamin: z
    .string()
    .min(1, {
      message: "Tolong pilih jenis kelamin.",
    })
    .optional(),

  umur: z
    .number()
    .min(18, { message: "Umur tidak boleh kurang dari 18." })
    .optional(),
  golongan: z.number().optional(),

  avatar: z.string().nullable().optional(),
});

export type UpdateUserSchemaType = z.infer<typeof UpdateUserSchema>;
