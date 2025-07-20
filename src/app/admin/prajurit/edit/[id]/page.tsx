import { getPrajuritById } from "../../queries";
import { PrajuritEditForm } from "./prajurit-edit-form";

interface EditPrajuritPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditPrajuritPage({
  params,
}: EditPrajuritPageProps) {
  const { id: prajuritId } = await params;

  const prajuritData = await getPrajuritById(prajuritId);

  return (
    <PrajuritEditForm prajuritData={prajuritData} prajuritId={prajuritId} />
  );
}
