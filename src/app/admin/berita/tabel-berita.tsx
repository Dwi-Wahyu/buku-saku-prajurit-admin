"use client";

import { useQueryState } from "nuqs";
import { Input } from "@/components/ui/input";
import { useDataTable } from "@/hooks/use-data-table";
import { DataTable } from "@/components/data-table/data-table";
import { DataTableAdvancedToolbar } from "@/components/data-table/data-table-advanced-toolbar";
import { Button } from "@/components/ui/button";
import { FunnelX } from "lucide-react";
import { TabelBeritaColumns } from "./tabel-berita-columns";
import { getBeritaData } from "./queries";

type TableType = Awaited<ReturnType<typeof getBeritaData>>;

export type BeritaColumnType = TableType["data"][number];

export function TabelBerita({ promises }: { promises: TableType }) {
  const { data, filtered, pageCount } = promises;

  const [judul, setJudul] = useQueryState("judul", {
    shallow: false,
    clearOnDefault: true,
    defaultValue: "",
  });

  const { table } = useDataTable({
    data,
    columns: TabelBeritaColumns,
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
    setJudul("");
  }

  return (
    <div>
      <DataTable table={table}>
        <DataTableAdvancedToolbar table={table}>
          <div className="flex items-center justify-between w-full flex-col sm:flex-row">
            <div className="flex gap-2 items-center ">
              <Input
                placeholder="Cari Judul . . ."
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
              />

              <Button variant={"outline"} onClick={handleClear}>
                <FunnelX />
              </Button>
            </div>
          </div>
        </DataTableAdvancedToolbar>
      </DataTable>
    </div>
  );
}
