// validations/schemas/prajurit.ts
import { z } from "zod";

export const InputPrajuritSchema = z.object({
  username: z.string().min(1, "Tolong isi NRP"),
  password: z.string().min(1, "Tolong isi Password"),
  nama: z.string().min(1, {
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

  avatar: z.any().nullable().optional(),
});

export type InputPrajuritSchemaType = z.infer<typeof InputPrajuritSchema>;
