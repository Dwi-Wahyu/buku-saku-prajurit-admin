// validations/schemas/prajurit.ts
import { z } from "zod";

export const InputPrajuritSchema = z.object({
  username: z.string().min(1, "Tolong isi NRP"),
  password: z.string().min(8, "Password minimal 8 karakter"),
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

  berat_badan: z.int().nullable().optional(),
  tinggi_badan: z.int().nullable().optional(),

  avatar: z.string().nullable().optional(),
});

export type InputPrajuritSchemaType = z.infer<typeof InputPrajuritSchema>;

// --- Skema untuk Update Prajurit ---
export const UpdatePrajuritSchema = z.object({
  id: z.string().min(1, "ID Prajurit diperlukan untuk update."),

  username: z.string().min(1, "Tolong isi NRP").optional(),
  password: z
    .string()
    .transform((val) => (val === "" ? undefined : val))
    .optional()
    .refine((val) => val === undefined || val.length >= 8, {
      message: "Password minimal 8 karakter jika ingin mengubah",
    }),
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

  berat_badan: z.int().nullable().optional(),
  tinggi_badan: z.int().nullable().optional(),

  avatar: z.string().nullable().optional(),
});

export type UpdatePrajuritSchemaType = z.infer<typeof UpdatePrajuritSchema>;
