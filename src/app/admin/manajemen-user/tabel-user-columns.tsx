"use client";

import { ColumnDef } from "@tanstack/react-table";
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
import { deleteUser } from "../prajurit/action";
import { UserColumnType } from "./tabel-user";

export const TabelUserColumns: ColumnDef<UserColumnType>[] = [
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
    accessorKey: "profile.pangkat",
    header: "Pangkat",
  },
  {
    accessorKey: "role",
    header: "Peran",
    cell({ row }) {
      return <h1>{row.original.role}</h1>;
    },
  },
  {
    id: "actions",
    cell: function Cell({ row }) {
      const user = row.original;
      const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
      const [isDeleting, setIsDeleting] = useState(false);

      const handleDeletePrajurit = async () => {
        setIsDeleting(true);
        setIsConfirmDialogOpen(false);

        try {
          const result = await deleteUser(user.id);
          if (result.success) {
            toast.success(result.message || "Prajurit berhasil dihapus!");
          } else {
            toast.error(result.error?.message || "Gagal menghapus user.");
          }
        } catch (error) {
          console.error("Error deleting user:", error);
          toast.error("Terjadi kesalahan tak terduga saat menghapus user.");
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
                <Link href={`/admin/manajemen-user/edit/${user.id}`}>
                  <SquarePen className="mb-[1px] h-4 w-4" /> Edit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/admin/manajemen-user/${user.id}`}>
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
            message={`Apakah Anda yakin ingin menghapus user "${user.name}" (NRP: ${user.username})? Tindakan ini tidak dapat dibatalkan.`}
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
