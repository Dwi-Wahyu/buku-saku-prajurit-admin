import { GarjasSearchParams } from "@/validations/search-params/garjas-search-params";
import { SearchParams } from "nuqs";
import { getGarjasData } from "./queries";

import { Card, CardContent } from "@/components/ui/card";
import { Suspense } from "react";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import { PageTitle } from "@/app/_components/page-title";
import { TabelGarjas } from "./tabel-garjas";

interface IndexPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function PenilaianGarjasPage(props: IndexPageProps) {
  const searchParams = await props.searchParams;
  const search = GarjasSearchParams.parse(searchParams);

  const promises = await getGarjasData(search);

  return (
    <Card>
      <PageTitle title="Tabel Data Garjas" />
      <CardContent>
        <Suspense fallback={<DataTableSkeleton columnCount={3} />}>
          <TabelGarjas promises={promises} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
