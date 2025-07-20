import { getBeritaById } from "../../queries";
import EditBeritaForm from "./edit-berita-form";

export default async function CreateBeritaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const berita = await getBeritaById(id);

  return <EditBeritaForm berita={berita} />;
}
