import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getUserById } from "../queries";
import { DetailUserContent } from "@/app/_components/detail-user";

export default async function DetailUserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const userData = await getUserById(id);

  if (!userData) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <h1 className="text-2xl font-bold text-destructive">
          Data Pengguna tidak ditemukan.
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Card className="shadow-lg animate-in fade-in duration-500">
        <CardHeader className="rounded-t-lg">
          <CardTitle className="text-3xl text-secondary font-extrabold text-center">
            Detail Pengguna
          </CardTitle>
          <p className="text-center text-lg mt-2 opacity-90">
            Informasi Lengkap Profil Pengguna
          </p>
        </CardHeader>

        <DetailUserContent userData={userData} />
      </Card>
    </div>
  );
}
