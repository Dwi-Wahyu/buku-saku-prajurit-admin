// src/schemas/user-schema.ts
import { z } from "zod";

// --- ENUMS ---
export const UserRole = z.enum(["superadmin", "admin", "penilai", "prajurit"]);

// --- Profile Schema ---
// Merepresentasikan struktur data Profile dari database
export const ProfileSchema = z.object({
  id: z.number().int().positive(), // gorm.Model ID
  createdAt: z.string().datetime(), // gorm.Model CreatedAt
  updatedAt: z.string().datetime(), // gorm.Model UpdatedAt
  deletedAt: z.string().datetime().nullable().optional(), // gorm.Model DeletedAt

  umur: z.number().int(),
  jenis_kelamin: z.string(),
  golongan: z.number().int(),
  userId: z.number().int().positive(), // UserID di Go menjadi userId di JS/TS
  pangkat: z.string(),
  berat_badan: z.number().int().nullable().optional(), // *int di Go menjadi number | null | undefined
  tinggi_badan: z.number().int().nullable().optional(), // *int di Go menjadi number | null | undefined
});

export type Profile = z.infer<typeof ProfileSchema>;

// --- User Schema ---
// Merepresentasikan struktur data User dari database
export const UserSchema = z.object({
  id: z.number().int().positive(), // gorm.Model ID
  createdAt: z.string().datetime(), // gorm.Model CreatedAt
  updatedAt: z.string().datetime(), // gorm.Model UpdatedAt
  deletedAt: z.string().datetime().nullable().optional(), // gorm.Model DeletedAt

  name: z.string(),
  username: z.string(),
  password: z.string(), // Biasanya tidak disertakan dalam respons API yang dikirim ke klien
  avatar: z.string().nullable().optional(), // string di Go menjadi string | null | undefined
  last_login: z.string().datetime().nullable().optional(), // *time.Time di Go menjadi string | null | undefined
  role: UserRole, // Menggunakan enum yang didefinisikan di atas

  // Relasi Profile, akan dimuat jika eager loaded di backend
  // Perhatikan bahwa Profile adalah objek bersarang, bukan hanya ID
  profile: ProfileSchema.optional(), // Profile bisa ada atau tidak (jika tidak eager loaded)
});

export type User = z.infer<typeof UserSchema>;

// --- UserResponse Schema (dari `models.UserResponse` Go) ---
// Merepresentasikan respons data user yang dikirim ke klien
export const UserResponseSchema = z.object({
  id: z.number().int().positive(),
  name: z.string(),
  username: z.string(),
  avatar: z.string().nullable().optional(), // Avatar bisa string atau null (jika default.jpg tidak dianggap string)
  role: UserRole,
  pangkat: z.string(), // Pangkat ini biasanya dari Profile, tapi ada di UserResponse Go Anda
});

export type UserResponse = z.infer<typeof UserResponseSchema>;
