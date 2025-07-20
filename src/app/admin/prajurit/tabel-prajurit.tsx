"use client";

import { useQueryState } from "nuqs";
import { getPrajuritData } from "./queries";
import { Input } from "@/components/ui/input";
import { useDataTable } from "@/hooks/use-data-table";
import { DataTable } from "@/components/data-table/data-table";
import { DataTableAdvancedToolbar } from "@/components/data-table/data-table-advanced-toolbar";
import { TabelPrajuritColumns } from "./tabel-prajurit-columns";
import { pangkat } from "@/constant/pangkat";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FunnelX } from "lucide-react";
import Link from "next/link";
import { IconPlus } from "@tabler/icons-react";

type TableType = Awaited<ReturnType<typeof getPrajuritData>>;

export type PrajuritColumnType = TableType["data"][number];

export function TabelPrajurit({ promises }: { promises: TableType }) {
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
    columns: TabelPrajuritColumns,
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

              <Select
                onValueChange={(val) => setFilterPangkat(val)}
                value={filterPangkat}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter Pangkat Prajurit" />
                </SelectTrigger>
                <SelectContent>
                  {pangkat.map((value, i) => (
                    <SelectItem value={value} key={i}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant={"outline"} onClick={handleClear}>
                <FunnelX />
              </Button>
            </div>

            <Button asChild>
              <Link href="/admin/prajurit/create">
                <IconPlus /> Input Prajurit
              </Link>
            </Button>
          </div>
        </DataTableAdvancedToolbar>
      </DataTable>
    </div>
  );
}
