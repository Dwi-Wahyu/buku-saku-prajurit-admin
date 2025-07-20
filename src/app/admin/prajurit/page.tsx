import { PageTitle } from "@/app/_components/page-title";
import { TabelPrajurit } from "@/app/admin/prajurit/tabel-prajurit";
import { Card, CardContent } from "@/components/ui/card";
import { Suspense } from "react";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import { SearchParams } from "nuqs";
import { UserSearchParams } from "@/validations/search-params/user-search-params";
import { getPrajuritData } from "./queries";

interface IndexPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function PrajuritPage(props: IndexPageProps) {
  const searchParams = await props.searchParams;
  const search = UserSearchParams.parse(searchParams);

  const updatedSearch = {
    ...search,
    role: "prajurit" as const,
  };

  const promises = await getPrajuritData(updatedSearch);

  return (
    <Card>
      <PageTitle title="Tabel Data Prajurit" />
      <CardContent>
        <Suspense fallback={<DataTableSkeleton columnCount={3} />}>
          <TabelPrajurit promises={promises} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
