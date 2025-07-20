"use client";

import { ColumnDef } from "@tanstack/react-table";
import { PrajuritColumnType } from "./tabel-prajurit";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye, MoreHorizontal, SquarePen, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ConfirmationDialog } from "@/components/confirmation-dialog";
import { useState } from "react";
import { toast } from "sonner";
import { deleteUser } from "./action";

export const TabelPrajuritColumns: ColumnDef<PrajuritColumnType>[] = [
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    accessorKey: "username",
    header: "NRP",
  },
  {
    accessorKey: "profile.umur",
    header: "Umur",
    cell({ row }) {
      return <h1>{row.original.profile?.umur} Tahun</h1>;
    },
  },
  {
    accessorKey: "profile.golongan",
    header: "Golongan",
  },
  {
    accessorKey: "profile.pangkat",
    header: "Pangkat",
  },
  {
    accessorKey: "profile.tinggiBadan",
    header: "TB",
    cell({ row }) {
      if (!row.original.profile?.tinggiBadan) {
        return "-";
      }
      return <h1>{row.original.profile?.tinggiBadan} CM</h1>;
    },
  },
  {
    accessorKey: "profile.beratBadan",
    header: "BB",
    cell({ row }) {
      if (!row.original.profile?.beratBadan) {
        return "-";
      }
      return <h1>{row.original.profile?.beratBadan} KG</h1>;
    },
  },
  {
    id: "actions",
    cell: function Cell({ row }) {
      const prajurit = row.original;
      const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
      const [isDeleting, setIsDeleting] = useState(false);

      const handleDeletePrajurit = async () => {
        setIsDeleting(true);
        setIsConfirmDialogOpen(false);

        try {
          const result = await deleteUser(prajurit.id);
          if (result.success) {
            toast.success(result.message || "Prajurit berhasil dihapus!");
          } else {
            toast.error(result.error?.message || "Gagal menghapus prajurit.");
          }
        } catch (error) {
          console.error("Error deleting prajurit:", error);
          toast.error("Terjadi kesalahan tak terduga saat menghapus prajurit.");
        } finally {
          setIsDeleting(false);
        }
      };

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" disabled={isDeleting}>
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={`/admin/prajurit/edit/${prajurit.id}`}>
                  <SquarePen className="mb-[1px] h-4 w-4" /> Edit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/admin/prajurit/${prajurit.id}`}>
                  <Eye className="mb-[1px] h-4 w-4" /> Detail
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setIsConfirmDialogOpen(true)}>
                <Trash className="mb-[1px] h-4 w-4" /> Hapus
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ConfirmationDialog
            isOpen={isConfirmDialogOpen}
            onClose={() => setIsConfirmDialogOpen(false)}
            onConfirm={handleDeletePrajurit}
            title="Konfirmasi Penghapusan"
            message={`Apakah Anda yakin ingin menghapus prajurit "${prajurit.name}" (NRP: ${prajurit.username})? Tindakan ini tidak dapat dibatalkan.`}
            confirmButtonText={isDeleting ? "Menghapus..." : "Hapus"}
            cancelButtonText="Batal"
            isLoading={isDeleting}
          />
        </>
      );
    },
    size: 5,
  },
];
