import { z } from "zod";

export const BeritaSchema = z.object({
  judul: z.string().min(1, "Judul berita tidak boleh kosong."),
  deskripsi: z.string().nullable(),
  thumbnail: z.string().min(1, "URL thumbnail tidak boleh kosong."),
  penulis: z.string().min(1, "Nama penulis tidak boleh kosong."),
  content: z
    .string()
    .min(10, "Konten berita terlalu pendek. Minimal 10 karakter."),
});

export type BeritaSchemaType = z.infer<typeof BeritaSchema>;

// Contoh Schema untuk input saat membuat berita baru
export const InputBeritaSchema = z.object({
  judul: z
    .string()
    .min(1, "Judul berita tidak boleh kosong.")
    .max(255, "Judul berita terlalu panjang."),
  deskripsi: z.string().min(1, "Deskripsi singkat tidak boleh kosong."),
  thumbnail: z.string(),
  penulis: z.string().min(1, "Nama penulis tidak boleh kosong."),
  content: z
    .string()
    .min(10, "Konten berita terlalu pendek. Minimal 10 karakter."),
});

export type InputBeritaSchemaType = z.infer<typeof InputBeritaSchema>;

export const UpdateBeritaSchema = z.object({
  id: z.string(),
  judul: z
    .string()
    .min(1, "Judul berita tidak boleh kosong.")
    .max(255, "Judul berita terlalu panjang."),
  deskripsi: z.string().min(1, "Deskripsi singkat tidak boleh kosong."),
  thumbnail: z.string(),
  penulis: z.string().min(1, "Nama penulis tidak boleh kosong."),
  content: z
    .string()
    .min(10, "Konten berita terlalu pendek. Minimal 10 karakter."),
});

export type UpdateBeritaSchemaType = z.infer<typeof UpdateBeritaSchema>;
