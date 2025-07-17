"use client";

import { ConfirmationDialog } from "@/components/confirmation-dialog";
import { NotificationDialog } from "@/components/notification-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function DialogDemo() {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  return (
    <div>
      {/* Dialog Sukses */}
      <NotificationDialog
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Aksi Berhasil!"
        message="Data Anda telah berhasil disimpan."
        variant="success"
      />

      {/* Dialog Gagal */}
      <NotificationDialog
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        title="Aksi Gagal!"
        message="Terjadi kesalahan saat menyimpan data. Silakan coba lagi."
        variant="error"
      />

      {/* Dialog Info */}
      <NotificationDialog
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        title="Informasi Penting"
        message="Ini adalah pesan informasi umum."
        variant="info"
      />

      <ConfirmationDialog
        isOpen={isConfirmDialogOpen}
        onClose={() => setIsConfirmDialogOpen(false)} // Dipanggil saat dialog ditutup tanpa konfirmasi
        onConfirm={() => setIsConfirmDialogOpen(false)} // Dipanggil saat tombol konfirmasi ditekan
        title="Simpan Perubahan"
        message="Apakah Anda yakin ingin menghapus item ini? Tindakan ini tidak dapat dibatalkan."
        confirmButtonText="Simpan"
        cancelButtonText="Tidak"
      />

      <div className="space-x-4 mb-8">
        <Button onClick={() => setIsSuccessOpen(true)}>Tampilkan Sukses</Button>
        <Button onClick={() => setIsErrorOpen(true)} variant="destructive">
          Tampilkan Gagal
        </Button>
        <Button onClick={() => setIsInfoOpen(true)} variant="outline">
          Tampilkan Info
        </Button>

        <Button
          onClick={() => setIsConfirmDialogOpen(true)}
          variant="destructive"
        >
          Hapus Item
        </Button>
      </div>
    </div>
  );
}
