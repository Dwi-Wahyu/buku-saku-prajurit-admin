import { z } from "zod";

// Skema untuk GarjasARequest
export const GarjasARequestSchema = z.object({
  golongan: z.number().int(), // `int` di Go bisa menjadi `number().int()` di Zod
  gender: z.enum(["Pria", "Wanita"]), // Contoh validasi untuk "Pria" atau "Wanita"
  jarak: z.number().int(), // `int64` di Go bisa menjadi `number().int()` di Zod
});

// Tipe TypeScript inferensi dari skema GarjasARequest
export type GarjasARequest = z.infer<typeof GarjasARequestSchema>;

// Skema untuk GarjasAResponse
export const GarjasAResponseSchema = z.object({
  golongan: z.number().int(),
  gender: z.string(),
  jarak: z.number().int(),
  skor_garjas_a: z.number().int(),
});

// Tipe TypeScript inferensi dari skema GarjasAResponse
export type GarjasAResponse = z.infer<typeof GarjasAResponseSchema>;

// Skema untuk GarjasBRequest
export const GarjasBRequestSchema = z.object({
  golongan: z.number().int(),
  gender: z.enum(["Pria", "Wanita"]), // Contoh validasi untuk "Pria" atau "Wanita"
  pull_up: z.number().int(),
  sit_up: z.number().int(),
  push_up: z.number().int(),
  shuttle_run: z.number(), // `float64` di Go bisa menjadi `number()` di Zod
});

// Tipe TypeScript inferensi dari skema GarjasBRequest
export type GarjasBRequest = z.infer<typeof GarjasBRequestSchema>;

// Skema untuk GarjasBResponse
export const GarjasBResponseSchema = z.object({
  golongan: z.number().int(),
  gender: z.string(),
  pull_up: z.number().int(),
  sit_up: z.number().int(),
  push_up: z.number().int(),
  shuttle_run: z.number(),
  skor_garjas_b: z.number().int(),
  skor_garjas_b1: z.number().int(),
  skor_garjas_b2: z.number().int(),
  skor_garjas_b3: z.number().int(),
  skor_garjas_b4: z.number().int(),
});

// Tipe TypeScript inferensi dari skema GarjasBResponse
export type GarjasBResponse = z.infer<typeof GarjasBResponseSchema>;

// Skema untuk GarjasRequest (Gabungan)
export const GarjasRequestSchema = z.object({
  id: z.string().min(1, "Sertakan id prajurit"),
  id_penilai: z.string().min(1, "Sertakan id penilai"),
  golongan: z.number().int(),
  gender: z.enum(["Pria", "Wanita"]), // Contoh validasi untuk "Pria" atau "Wanita"
  jarak_lari: z.number().int(),
  pull_up: z.number().int(),
  sit_up: z.number().int(),
  push_up: z.number().int(),
  shuttle_run: z.number(),
});

// Tipe TypeScript inferensi dari skema GarjasRequest
export type GarjasRequest = z.infer<typeof GarjasRequestSchema>;

// Skema untuk GarjasResponse (Gabungan)
export const GarjasResponseSchema = z.object({
  skor_garjas_a: z.number().int(),
  skor_garjas_b: z.number().int(),
  skor_garjas_b1: z.number().int(),
  skor_garjas_b2: z.number().int(),
  skor_garjas_b3: z.number().int(),
  skor_garjas_b4: z.number().int(),
  skor_akhir: z.number().int(),
});

// Tipe TypeScript inferensi dari skema GarjasResponse
export type GarjasResponse = z.infer<typeof GarjasResponseSchema>;

export type FullGarjas = GarjasRequest & GarjasResponse;
