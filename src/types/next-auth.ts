// next-auth.ts
import NextAuth, { DefaultSession, User } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      username: string;
      name: string;
      role: string;
      profile_pict: string;
      pangkat: string;
      accessToken: string; // Sudah ada
    };
  }

  interface User {
    id: string;
    username: string;
    name: string;
    role: string;
    profile_pict: string;
    pangkat: string;
    accessToken: string; // <-- Ini yang perlu konsisten dengan backend. Kita akan buat ini.
  }

  interface JWT {
    id: string;
    username: string;
    name: string;
    role: string;
    profile_pict: string;
    pangkat: string;
    accessToken: string; // Sudah ada
  }
}

export type LoggedInUser = {
  id: string;
  username: string;
  name: string;
  role: string;
  profile_pict: string;
  pangkat: string;
  accessToken: string; // Sudah ada
};
