import { KesatuanForm } from "./kesatuan-form";
import { getKesatuanData } from "./queries";

export default async function KesatuanPage() {
  const kesatuan = await getKesatuanData();

  if (!kesatuan) {
    return <KesatuanForm initialData={null} />;
  }

  return <KesatuanForm initialData={kesatuan} />;
}
