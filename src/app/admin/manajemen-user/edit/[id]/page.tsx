import { getUserById } from "../../queries";
import { PrajuritEditForm } from "./user-edit-form";

interface EditUserPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditUserPage({ params }: EditUserPageProps) {
  const { id: userId } = await params;

  const userData = await getUserById(userId);

  return <PrajuritEditForm userData={userData} userId={userId} />;
}
