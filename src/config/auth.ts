// src/config/AuthConfig.ts
import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { validateLoginPayload } from "@/app/_lib/login"; // Ini adalah fungsi yang memanggil backend Anda
import { loginSchema } from "@/validations/schemas/auth";

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;

        const parsed = loginSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const { username, password } = parsed.data;

        // validateLoginPayload sekarang mengembalikan LoggedInUser (yang memiliki accessToken)
        const loggedInUser = await validateLoginPayload({ username, password });

        // loggedInUser sekarang sudah dalam format yang benar untuk NextAuth.js User
        // karena sudah diolah di login.ts
        if (!loggedInUser) {
          return null; // Autentikasi gagal atau ada masalah di login.ts
        }

        // Kembalikan objek `User` NextAuth.js.
        // Properti 'accessToken' di `loggedInUser` akan secara otomatis dipetakan ke `token.accessToken`
        // di callback `jwt` karena kita sudah mendefinisikan tipenya.
        return loggedInUser;
      },
    }),
  ],
  pages: {
    signIn: "/",
    signOut: "/logout",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.username = token.username as string;
        session.user.name = token.name as string;
        session.user.role = token.role as string;
        session.user.profile_pict = token.profile_pict as string;
        session.user.pangkat = token.pangkat as string;
        session.user.accessToken = token.accessToken as string; // Mengambil dari JWT token
      }
      return session;
    },
    async jwt({ token, user }) {
      // 'user' di sini adalah objek `LoggedInUser` yang dikembalikan dari authorize()
      // Kita hanya perlu menyalin propertinya ke objek `token` internal NextAuth.js
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.name = user.name;
        token.role = user.role;
        token.profile_pict = user.profile_pict;
        token.pangkat = user.pangkat;
        token.accessToken = user.accessToken; // Langsung gunakan accessToken dari user
      }
      return token;
    },
  },
};

export const { auth, handlers, signIn, signOut } = NextAuth(authConfig);
