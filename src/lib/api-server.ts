// utils/api-server.ts atau lib/api.ts (untuk Server Components)
import axios from "axios";
import { cookies } from "next/headers"; // Khusus Next.js untuk membaca cookies di Server Components

const apiServer = axios.create({
  baseURL: process.env.BACKEND_API_URL || "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor untuk menyertakan token dari cookies
apiServer.interceptors.request.use(
  async (config) => {
    const nextCookies = await cookies(); // Dapatkan instance cookies dari Next.js headers
    const sessionTokenCookie = nextCookies.get("authjs.session-token");

    if (sessionTokenCookie && sessionTokenCookie.value) {
      try {
        config.headers["Authorization"] = `Bearer ${sessionTokenCookie}`;
      } catch (error) {
        console.error("Failed to decode NextAuth.js session token:", error);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiServer;
