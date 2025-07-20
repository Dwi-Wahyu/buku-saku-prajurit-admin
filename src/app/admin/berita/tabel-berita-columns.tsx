"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Eye,
  MoreHorizontal,
  SquarePen,
  Trash,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ConfirmationDialog } from "@/components/confirmation-dialog";
import { useState } from "react";
import { toast } from "sonner";
import { deleteBerita } from "./action";
import { BeritaColumnType } from "./tabel-berita";

export const TabelBeritaColumns: ColumnDef<BeritaColumnType>[] = [
  {
    accessorKey: "thumbnail",
    header: "Thumbnail",
    cell: ({ row }) => {
      const berita = row.original;
      return (
        <div className="flex items-center justify-center size-20 overflow-hidden rounded-md bg-gray-100">
          {berita.thumbnail ? (
            <img
              src={berita.thumbnail}
              alt={berita.judul}
              className="object-cover w-full h-full"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/80x80/cccccc/000000?text=IMG";
              }}
            />
          ) : (
            <Eye className="h-8 w-8 text-muted-foreground" />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "judul",
    header: "Judul",
    cell: ({ row }) => {
      return <p className="font-medium">{row.original.judul}</p>;
    },
  },
  {
    accessorKey: "penulis",
    header: "Penulis",
  },
  {
    accessorKey: "createdAt",
    header: "Tanggal Dipublish",
    cell: ({ row }) => {
      const date = new Date(row.original.createdAt);
      return date.toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
  {
    accessorKey: "like",
    header: "Suka",
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <ThumbsUp className="h-4 w-4 text-green-500" /> {row.original.like}
      </div>
    ),
  },
  {
    accessorKey: "dislike",
    header: "Tidak Suka",
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <ThumbsDown className="h-4 w-4 text-red-500" /> {row.original.dislike}
      </div>
    ),
  },
  {
    id: "actions",
    cell: function Cell({ row }) {
      const berita = row.original;
      const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
      const [isDeleting, setIsDeleting] = useState(false);

      const handleDeleteBerita = async () => {
        setIsDeleting(true);

        try {
          const result = await deleteBerita(berita.id);
          if (result.success) {
            toast.success(result.message || "Berita berhasil dihapus!");
          } else {
            toast.error(result.error?.message || "Gagal menghapus berita.");
          }
        } catch (error) {
          console.error("Error deleting berita:", error);
          toast.error("Terjadi kesalahan tak terduga saat menghapus berita.");
        } finally {
          setIsDeleting(false);
          setIsConfirmDialogOpen(false);
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
                <Link href={`/admin/berita/edit/${berita.id}`}>
                  <SquarePen className="mb-[1px] h-4 w-4" /> Edit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/admin/berita/${berita.id}`}>
                  <Eye className="mb-[1px] h-4 w-4" /> Detail
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setIsConfirmDialogOpen(true)}
                className="text-red-600 focus:text-red-600"
              >
                <Trash className="mb-[1px] h-4 w-4" /> Hapus
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ConfirmationDialog
            isOpen={isConfirmDialogOpen}
            onClose={() => setIsConfirmDialogOpen(false)}
            onConfirm={handleDeleteBerita}
            title="Konfirmasi Penghapusan"
            message={`Apakah Anda yakin ingin menghapus berita "${berita.judul}"? Tindakan ini tidak dapat dibatalkan.`}
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
