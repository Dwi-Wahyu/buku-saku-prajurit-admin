// validations/schemas/kesatuan.ts
import { z } from "zod";

export const InputKesatuanSchema = z.object({
  nama: z.string().min(1, "Nama kesatuan wajib diisi."),
  motto: z.string().nullable().optional(),
  logo: z.string().nullable().optional(), // Ini akan menyimpan URL logo
});

export type InputKesatuanSchemaType = z.infer<typeof InputKesatuanSchema>;
