"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Eye, MoreHorizontal, Trash, Copy } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ConfirmationDialog } from "@/components/confirmation-dialog";
import { useState } from "react";
import { toast } from "sonner";
import { deleteMediaBerita } from "./action";
import { getMediaTypeFromMime } from "@/validations/schemas/media-berita";
import { MediaBeritaColumnType } from "./tabel-media";

export const TabelMediaBeritaColumns: ColumnDef<MediaBeritaColumnType>[] = [
  {
    accessorKey: "urlMedia",
    header: "Media",
    cell: ({ row }) => {
      const media = row.original;
      const mediaType = getMediaTypeFromMime(media.urlMedia.split(".")[1]);

      const mediaUrl = media.urlMedia;

      return (
        <div className="flex items-center justify-center size-20 overflow-hidden rounded-md bg-gray-100">
          {mediaType === "image" ? (
            <img
              src={mediaUrl}
              alt="Media Preview"
              className="object-cover w-full h-full"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/80x80/cccccc/000000?text=IMG";
              }}
            />
          ) : mediaType === "video" ? (
            <video
              src={mediaUrl}
              controls={false}
              className="object-cover w-full h-full"
              preload="metadata"
              onError={(e) => {
                e.currentTarget.src = "";
                e.currentTarget.poster =
                  "https://placehold.co/80x80/cccccc/000000?text=VID";
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
    accessorKey: "keterangan",
    header: "Keterangan",
    cell: ({ row }) => {
      return <p className="line-clamp-2">{row.original.keterangan}</p>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Tanggal Unggah",
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
    id: "actions",
    cell: function Cell({ row }) {
      const media = row.original;
      const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
      const [isDeleting, setIsDeleting] = useState(false);

      const ADMIN_URL =
        process.env.NEXT_PUBLIC_ADMIN_URL ?? "http://localhost:3000";

      async function copyToClipboard() {
        try {
          await navigator.clipboard.writeText(ADMIN_URL + media.urlMedia);
          toast.success("Tautan media berhasil disalin!");
        } catch (err) {
          console.error("Failed to copy: ", err);
          toast.error("Tidak ada tautan media untuk disalin.");
        }
      }

      const handleDeleteMedia = async () => {
        setIsDeleting(true);

        try {
          const result = await deleteMediaBerita(media.id);
          if (result.success) {
            toast.success(result.message || "Media berita berhasil dihapus!");
            setIsConfirmDialogOpen(false);
          } else {
            toast.error(
              result.error?.message || "Gagal menghapus media berita."
            );
          }
        } catch (error) {
          console.error("Error deleting media berita:", error);
          toast.error(
            "Terjadi kesalahan tak terduga saat menghapus media berita."
          );
        } finally {
          setIsConfirmDialogOpen(false);
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
              <DropdownMenuItem onClick={copyToClipboard}>
                <Copy className="mb-[1px] h-4 w-4" /> Salin Tautan
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
            onConfirm={handleDeleteMedia}
            title="Konfirmasi Penghapusan"
            message={`Apakah Anda yakin ingin menghapus media ini? Tindakan ini tidak dapat dibatalkan.`}
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
