import { redirect } from "next/navigation";
import LoginForm from "./_components/login-form";
import { auth } from "@/config/auth";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    const now = new Date();
    const expires = new Date(session.expires);

    if (now < expires) {
      redirect("/admin");
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <LoginForm />
    </div>
  );
}
