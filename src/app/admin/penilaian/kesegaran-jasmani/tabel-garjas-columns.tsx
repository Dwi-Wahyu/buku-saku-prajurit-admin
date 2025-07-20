"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, SquarePen } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GarjasColumnType } from "./tabel-garjas";
import { IconEye } from "@tabler/icons-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

export const TabelGarjasColumns: ColumnDef<GarjasColumnType>[] = [
  {
    accessorKey: "tanggal",
    header: "Tanggal",
    cell: function Cell({ row }) {
      const tanggal = new Date(row.original.tanggal);
      const formatted = format(tanggal, "dd MMMM yyyy", { locale: id });
      return <span>{formatted}</span>;
    },
  },
  {
    accessorKey: "prajurit.name",
    header: "Prajurit",
  },
  {
    accessorKey: "penilai.name",
    header: "Penilai",
  },
  {
    accessorKey: "garjasA",
    header: "Skor Garjas A",
  },
  {
    accessorKey: "garjasB",
    header: "Skor Garjas B",
  },
  {
    accessorKey: "nilaiAkhir",
    header: "Nilai Akhir",
  },
  {
    id: "actions",
    cell: function Cell({ row }) {
      const garjas = row.original;

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {/* <DropdownMenuItem asChild>
                <Link
                  href={`/admin/penilaian/kesegaran-jasmani/edit/${garjas.id}`}
                >
                  <SquarePen className="mb-[1px] h-4 w-4" /> Edit
                </Link>
              </DropdownMenuItem> */}
              <DropdownMenuItem asChild>
                <Link href={`/admin/penilaian/kesegaran-jasmani/${garjas.id}`}>
                  <IconEye className="mb-[1px] h-4 w-4" /> Detail
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      );
    },
    size: 5,
  },
];
