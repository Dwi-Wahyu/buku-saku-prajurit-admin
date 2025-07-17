// app/prajurit/page.tsx
import { PageTitle } from "@/app/_components/page-title";
import { TabelPrajurit } from "@/app/_components/tabel-prajurit"; // Ini akan jadi Client Component
import { Card, CardContent } from "@/components/ui/card";
import apiServer from "@/lib/api-server";

export interface Prajurit {
  id: string;
  name: string;
  username: string;
  pangkat: string;
}

// Fungsi untuk fetching data prajurit menggunakan apiServer (dengan token)
async function getInitialPrajuritData(): Promise<Prajurit[]> {
  try {
    // Gunakan apiServer yang sudah diintersep dengan token
    const response = await apiServer.get("/users/prajurit"); // Ganti dengan URL API Anda

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Gagal mengambil data prajurit:", error);
    // Tangani error, mungkin mengarahkan pengguna atau menampilkan pesan
    return []; // Kembalikan array kosong atau lempar error lagi
  }
}

export default async function PrajuritPage() {
  const initialData = await getInitialPrajuritData();

  return (
    <Card>
      <PageTitle title="Tabel Data Prajurit" />
      <CardContent>
        {/* Teruskan initialData ke TabelPrajurit (sekarang sebagai Client Component) */}
        <TabelPrajurit initialData={initialData} />
      </CardContent>
    </Card>
  );
}
