// app/_components/tabel-prajurit.tsx
"use client"; // Ini adalah Client Component

import { DataTable } from "@/components/data-table/data-table";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDataTable } from "@/hooks/use-data-table";
import { useSession } from "next-auth/react"; // Import useSession dari NextAuth

import type { Column, ColumnDef } from "@tanstack/react-table";
import {
  CheckCircle, // Mungkin tidak relevan untuk Prajurit
  CheckCircle2, // Mungkin tidak relevan untuk Prajurit
  DollarSign, // Mungkin tidak relevan untuk Prajurit
  MoreHorizontal,
  Text,
  XCircle, // Mungkin tidak relevan untuk Prajurit
} from "lucide-react";
import Link from "next/link";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import * as React from "react";
import { useQuery } from "@tanstack/react-query"; // Import useQuery
import apiClient from "@/lib/api-client";
import { Prajurit } from "../admin/prajurit/page";

// Tambahkan interface untuk props komponen TabelPrajurit
interface TabelPrajuritProps {
  initialData: Prajurit[]; // Menerima data awal dari Server Component
}

// Fungsi fetching data untuk React Query di Client Component
async function fetchPrajuritData(
  accessToken: string | undefined, // Terima accessToken
  params: {
    q?: string;
    page?: number;
    limit?: number;
  }
): Promise<{ data: Prajurit[]; total: number }> {
  // Asumsikan API mengembalikan data dan total
  if (!accessToken) {
    throw new Error("Authentication token not available.");
  }

  const query = new URLSearchParams();
  if (params.q) query.append("q", params.q);
  if (params.page) query.append("page", String(params.page));
  if (params.limit) query.append("limit", String(params.limit));

  // Gunakan apiClient yang sudah kita buat (tanpa interceptor per request jika Anda akan menambahkannya secara manual di sini)
  // Atau lebih baik: buat interceptor di apiClient untuk token jika sering dipakai.
  // Untuk contoh ini, saya akan tambahkan token di setiap request di sini.
  const res = await apiClient.get(`/users/prajurit?${query.toString()}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data; // Asumsikan respons { data: Prajurit[], total: number }
}

export function TabelPrajurit({ initialData }: TabelPrajuritProps) {
  const { data: session, status: sessionStatus } = useSession(); // Dapatkan sesi NextAuth.js
  const accessToken = session?.user?.accessToken; // Ambil accessToken dari sesi

  // State untuk search params menggunakan nuqs
  const [q, setQ] = useQueryState("q", parseAsString.withDefault(""));
  const [page, setPage] = useQueryState("page", parseAsString.withDefault("1")); // Default halaman 1
  const [limit, setLimit] = useQueryState(
    "limit",
    parseAsString.withDefault("10")
  ); // Default 10 item per halaman

  // Parameter yang akan diteruskan ke useQuery
  const queryParams = React.useMemo(
    () => ({
      q: q,
      page: parseInt(page),
      limit: parseInt(limit),
    }),
    [q, page, limit]
  );

  // Gunakan useQuery dari React Query
  const {
    data: prajuritData,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["prajurit", queryParams, accessToken], // Kunci query yang bergantung pada params dan token
    queryFn: () => fetchPrajuritData(accessToken, queryParams),
    initialData: initialData
      ? { data: initialData, total: initialData.length }
      : undefined, // Inisialisasi dengan data dari server
    // ^ initialData harus cocok dengan return type dari queryFn
    placeholderData: (previousData) => previousData, // Tampilkan data sebelumnya saat fetching baru
    staleTime: 1000 * 60 * 5, // Data dianggap 'stale' setelah 5 menit
    enabled: sessionStatus === "authenticated" && !!accessToken, // Hanya aktifkan query jika sudah terautentikasi dan ada token
  });

  const dataToDisplay = prajuritData?.data || [];
  const totalItems = prajuritData?.total || 0;
  const pageCount = Math.ceil(totalItems / (parseInt(limit) || 10)); // Hitung total halaman

  // Kolom Tabel Prajurit (sesuaikan dengan data Prajurit Anda)
  const columns = React.useMemo<ColumnDef<Prajurit>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        size: 32,
        enableSorting: false,
        enableHiding: false,
      },
      {
        id: "name",
        accessorKey: "name",
        header: ({ column }: { column: Column<Prajurit, unknown> }) => (
          <DataTableColumnHeader column={column} title="Nama" />
        ),
        cell: ({ cell }) => <div>{cell.getValue<Prajurit["name"]>()}</div>,
        meta: {
          label: "Nama",
          placeholder: "Cari nama...",
          variant: "text",
          icon: Text,
        },
        enableColumnFilter: true, // Untuk filter teks
      },
      {
        id: "username",
        accessorKey: "username",
        header: ({ column }: { column: Column<Prajurit, unknown> }) => (
          <DataTableColumnHeader column={column} title="NRP" />
        ),
        cell: ({ cell }) => <div>{cell.getValue<Prajurit["username"]>()}</div>,
        meta: {
          label: "NRP",
          placeholder: "Cari NRP...",
          variant: "text",
          icon: Text,
        },
        enableColumnFilter: true,
      },
      {
        id: "pangkat",
        accessorKey: "pangkat",
        header: ({ column }: { column: Column<Prajurit, unknown> }) => (
          <DataTableColumnHeader column={column} title="Pangkat" />
        ),
        cell: ({ cell }) => (
          <Badge variant="secondary" className="capitalize">
            {cell.getValue<Prajurit["pangkat"]>()}
          </Badge>
        ),
        // Jika pangkat adalah dropdown filter, tambahkan meta variant: "multiSelect"
        meta: {
          label: "Pangkat",
          variant: "multiSelect",
          options: [
            { label: "Jenderal", value: "Jenderal" },
            { label: "Letnan Jenderal", value: "Letnan Jenderal" },
            { label: "Mayor Jenderal", value: "Mayor Jenderal" },
            { label: "Brigadir Jenderal", value: "Brigadir Jenderal" },
            { label: "Kolonel", value: "Kolonel" },
            { label: "Letnan Kolonel", value: "Letnan Kolonel" },
            { label: "Mayor", value: "Mayor" },
            { label: "Kapten", value: "Kapten" },
            { label: "Letnan Satu", value: "Letnan Satu" },
            { label: "Letnan Dua", value: "Letnan Dua" },
            { label: "Pembantu Letnan Satu", value: "Pembantu Letnan Satu" },
            { label: "Pembantu Letnan Dua", value: "Pembantu Letnan Dua" },
            { label: "Sersan Mayor", value: "Sersan Mayor" },
            { label: "Sersan Kepala", value: "Sersan Kepala" },
            { label: "Sersan Satu", value: "Sersan Satu" },
            { label: "Sersan Dua", value: "Sersan Dua" },
            { label: "Kopral Kepala", value: "Kopral Kepala" },
            { label: "Kopral Satu", value: "Kopral Satu" },
            { label: "Kopral Dua", value: "Kopral Dua" },
            { label: "Prajurit Kepala", value: "Prajurit Kepala" },
            { label: "Prajurit Satu", value: "Prajurit Satu" },
            { label: "Prajurit Dua", value: "Prajurit Dua" },
          ],
        },
        enableColumnFilter: true,
      },
      {
        id: "actions",
        cell: function Cell() {
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
        size: 32,
        enableSorting: false,
        enableHiding: false,
      },
    ],
    []
  );

  // Hook useDataTable Anda harus diadaptasi untuk server-side pagination/sorting/filtering
  // Anda perlu meneruskan properti yang relevan untuk mengontrol ini.
  const { table } = useDataTable({
    data: dataToDisplay, // Gunakan data yang diambil dari React Query
    columns,
    pageCount: pageCount, // Jumlah halaman dari API
    initialState: {
      columnPinning: { right: ["actions"] },
      // State paginasi dan filtering akan dikelola oleh nuqs dan React Query,
      // bukan oleh initialState di TanStack Table untuk server-side.
    },
    // Handler untuk perubahan paginasi
    onPaginationChange: (updater) => {
      const newPaginationState =
        typeof updater === "function"
          ? updater(table.getState().pagination)
          : updater;
      setPage(String(newPaginationState.pageIndex + 1)); // Set halaman berdasarkan perubahan
      setLimit(String(newPaginationState.pageSize)); // Set limit berdasarkan perubahan
    },
    getRowId: (row) => row.id,
  });

  // Handle loading dan error states
  if (sessionStatus === "loading") {
    return <div className="p-8 text-center">Memuat sesi autentikasi...</div>;
  }

  if (sessionStatus === "unauthenticated") {
    return (
      <div className="p-8 text-red-500">
        Anda tidak terautentikasi. Silakan login.
      </div>
    );
  }

  if (isLoading) {
    return <div className="p-8 text-center">Memuat data prajurit...</div>;
  }

  if (isError) {
    return (
      <div className="p-8 text-red-500">
        Terjadi kesalahan: {error?.message}
      </div>
    );
  }

  return (
    <div className="data-table-container">
      {isFetching && !isLoading && (
        <div className="text-blue-500 mb-2">Memperbarui data...</div>
      )}
      <DataTable table={table}>
        <DataTableToolbar
          inputButtonLabel="Input Prajurit"
          inputButtonLink="/admin/prajurit/create"
          table={table}
          // Teruskan state dan handler untuk filter ke DataTableToolbar
          // DataTableToolbar perlu diadaptasi untuk menerima prop ini
          // Misalnya, untuk input pencarian:
          // searchFilterColumnId="name" // Kolom untuk filter pencarian
          // onSearchChange={(value) => setQ(value)} // Handler untuk perubahan pencarian
        />
      </DataTable>
    </div>
  );
}
