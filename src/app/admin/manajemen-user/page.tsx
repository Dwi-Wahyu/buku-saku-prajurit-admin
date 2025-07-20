import { PageTitle } from "@/app/_components/page-title";
import { Card, CardContent } from "@/components/ui/card";
import { Suspense } from "react";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import { SearchParams } from "nuqs";
import { UserSearchParams } from "@/validations/search-params/user-search-params";
import { TabelUser } from "./tabel-user";
import { getUserData } from "./queries";

interface IndexPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function ManajemenUserPage(props: IndexPageProps) {
  const searchParams = await props.searchParams;
  const search = UserSearchParams.parse(searchParams);

  const promises = await getUserData(search);

  return (
    <Card>
      <PageTitle title="Tabel Data User" />
      <CardContent>
        <Suspense fallback={<DataTableSkeleton columnCount={5} />}>
          <TabelUser promises={promises} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
