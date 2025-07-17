// src/app/_lib/login.ts (pastikan path ini sesuai)
import { LoggedInUser } from "@/types/next-auth"; // Import tipe LoggedInUser

interface LoginPayload {
  username: string;
  password: string;
}

// Akses variabel lingkungan langsung dari process.env
export const BACKEND_API_URL =
  process.env.NEXT_PUBLIC_BACKEND_API_URL || "http://localhost:3001"; // Gunakan NEXT_PUBLIC_ untuk akses di klien, atau hanya di server jika hanya digunakan di RSC

export async function validateLoginPayload(
  payload: LoginPayload
): Promise<LoggedInUser | null> {
  try {
    const response = await fetch(`${BACKEND_API_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      // Jika respons tidak OK (misalnya 401 Unauthorized), log error dan kembalikan null
      const errorData = await response.json(); // Coba baca pesan error dari respons
      console.error("Login failed:", response.status, errorData);
      return null;
    }

    // Parse respons JSON dari backend
    const responseData: {
      token: string;
      user: Omit<LoggedInUser, "accessToken">;
    } = await response.json();

    console.log(responseData.token);

    // Pastikan struktur respons sesuai harapan
    if (!responseData.token || !responseData.user) {
      console.error("Invalid response format from backend:", responseData);
      return null;
    }

    // Bentuk objek LoggedInUser sesuai dengan tipe yang diharapkan NextAuth.js User
    // dan tambahkan accessToken dari 'token' yang diterima dari backend
    const loggedInUser: LoggedInUser = {
      id: String(responseData.user.id), // Pastikan ID adalah string
      username: responseData.user.username,
      name: responseData.user.name,
      profile_pict: responseData.user.profile_pict,
      role: responseData.user.role, // Sesuaikan dengan properti 'role' dari backend
      pangkat: responseData.user.pangkat,
      accessToken: responseData.token, // Ini adalah token JWT dari backend Anda
    };

    return loggedInUser;
  } catch (error) {
    console.error("Error during login payload validation:", error);
    return null;
  }
}
