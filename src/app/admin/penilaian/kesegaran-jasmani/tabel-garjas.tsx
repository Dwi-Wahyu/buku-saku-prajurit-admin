"use client";

import { useQueryState } from "nuqs";
import { Input } from "@/components/ui/input";
import { useDataTable } from "@/hooks/use-data-table";
import { DataTable } from "@/components/data-table/data-table";
import { DataTableAdvancedToolbar } from "@/components/data-table/data-table-advanced-toolbar";
import { Button } from "@/components/ui/button";
import { FunnelX } from "lucide-react";
import { TabelGarjasColumns } from "./tabel-garjas-columns";
import { getGarjasData } from "./queries";

type TableType = Awaited<ReturnType<typeof getGarjasData>>;

export type GarjasColumnType = TableType["data"][number];

export function TabelGarjas({ promises }: { promises: TableType }) {
  const { data, filtered, pageCount } = promises;

  const [nama, setNama] = useQueryState("nama", {
    shallow: false,
    clearOnDefault: true,
    defaultValue: "",
  });

  const [filterPangkat, setFilterPangkat] = useQueryState("pangkat", {
    shallow: false,
    clearOnDefault: true,
    defaultValue: "",
  });

  const { table } = useDataTable({
    data,
    columns: TabelGarjasColumns,
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
    setFilterPangkat("");
    setNama("");
  }

  return (
    <div>
      <DataTable table={table}>
        <DataTableAdvancedToolbar table={table}>
          <div className="flex items-center justify-between w-full flex-col sm:flex-row">
            <div className="flex gap-2 items-center ">
              <Input
                placeholder="Cari Nama . . ."
                value={nama}
                onChange={(e) => setNama(e.target.value)}
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
