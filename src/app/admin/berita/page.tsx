import { PageTitle } from "@/app/_components/page-title";
import { TabelPrajurit } from "@/app/admin/prajurit/tabel-prajurit";
import { Card, CardContent } from "@/components/ui/card";
import { Suspense } from "react";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import { SearchParams } from "nuqs";
import { UserSearchParams } from "@/validations/search-params/user-search-params";
import { getBeritaData } from "./queries";
import { TabelBerita } from "./tabel-berita";
import { BeritaSearchParams } from "@/validations/search-params/berita-search-params";

interface IndexPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function BeritaPage(props: IndexPageProps) {
  const searchParams = await props.searchParams;
  const search = BeritaSearchParams.parse(searchParams);

  const promises = await getBeritaData(search);

  return (
    <Card>
      <PageTitle title="Tabel Berita" />
      <CardContent>
        <Suspense fallback={<DataTableSkeleton columnCount={6} />}>
          <TabelBerita promises={promises} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
