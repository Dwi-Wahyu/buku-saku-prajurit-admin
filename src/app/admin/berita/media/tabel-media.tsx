"use client";

import { parseAsIsoDate, useQueryState } from "nuqs";
import { Input } from "@/components/ui/input";
import { useDataTable } from "@/hooks/use-data-table";
import { DataTable } from "@/components/data-table/data-table";
import { DataTableAdvancedToolbar } from "@/components/data-table/data-table-advanced-toolbar";
import { pangkat } from "@/constant/pangkat";

import { Button } from "@/components/ui/button";
import { FunnelX } from "lucide-react";
import Link from "next/link";
import { IconPlus } from "@tabler/icons-react";
import { TabelMediaBeritaColumns } from "./tabel-media-columns";
import { getMediaBeritaData } from "./queries";
import { FilterDatePicker } from "@/components/filter-date-picker";
import { useSidebar } from "@/components/ui/sidebar";

type TableType = Awaited<ReturnType<typeof getMediaBeritaData>>;

export type MediaBeritaColumnType = TableType["data"][number];

export function TabelMediaBerita({ promises }: { promises: TableType }) {
  const { data, filtered, pageCount } = promises;
  const { linkActive, setLinkActive } = useSidebar();

  const [date, setDate] = useQueryState("tanggal", {
    shallow: false,
    clearOnDefault: true,
    ...parseAsIsoDate,
  });

  const { table } = useDataTable({
    data,
    columns: TabelMediaBeritaColumns,
    pageCount: pageCount,
    shallow: false,
    clearOnDefault: true,
    initialState: {
      pagination: {
        pageSize: 5,
        pageIndex: 0,
      },
    },
  });

  function handleClear() {
    setDate(null);
  }

  return (
    <div>
      <DataTable table={table}>
        <DataTableAdvancedToolbar table={table}>
          <div className="flex items-center justify-between w-full flex-col sm:flex-row">
            <div className="flex gap-2 items-center ">
              <FilterDatePicker
                placeholder="Pilih tanggal diunggah"
                date={date}
                setDate={setDate}
              />

              <Button variant={"outline"} onClick={handleClear}>
                <FunnelX />
              </Button>
            </div>

            <Button
              asChild
              onClick={() => setLinkActive("/admin/berita/media/create")}
            >
              <Link href="/admin/berita/media/create">
                <IconPlus /> Input Media
              </Link>
            </Button>
          </div>
        </DataTableAdvancedToolbar>
      </DataTable>
    </div>
  );
}
