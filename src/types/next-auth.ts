import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      username: string;
      name: string;
      pangkat: string;
      avatar: string;
      role: string;
    };
  }

  interface User {
    id: string;
    username: string;
    name: string;
    pangkat: string;
    avatar: string;
    role: string;
  }
}
