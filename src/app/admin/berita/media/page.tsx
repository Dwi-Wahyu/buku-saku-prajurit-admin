import { SearchParams } from "nuqs";
import { MediaBeritaSearchParams } from "@/validations/search-params/media-berita-search-params";
import { PageTitle } from "@/app/_components/page-title";
import { Card, CardContent } from "@/components/ui/card";
import { Suspense } from "react";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconPlus } from "@tabler/icons-react";
import { TabelMediaBerita } from "./tabel-media";
import { getMediaBeritaData } from "./queries";

interface IndexPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function MediaBeritaPage(props: IndexPageProps) {
  const searchParams = await props.searchParams;
  const search = MediaBeritaSearchParams.parse(searchParams);

  const promises = await getMediaBeritaData(search);

  return (
    <Card>
      <PageTitle title="Tabel Media Berita" />

      <CardContent>
        <Suspense fallback={<DataTableSkeleton columnCount={3} />}>
          <TabelMediaBerita promises={promises} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
