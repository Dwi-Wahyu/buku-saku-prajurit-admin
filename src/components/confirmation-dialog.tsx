// components/ConfirmationDialog.tsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react"; // Menggunakan ikon peringatan untuk konfirmasi

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void; // Fungsi untuk menutup dialog tanpa konfirmasi
  onConfirm: () => void; // Fungsi yang dipanggil saat tombol konfirmasi ditekan
  title: string;
  message: string;
  confirmButtonText?: string; // Teks opsional untuk tombol konfirmasi
  cancelButtonText?: string; // Teks opsional untuk tombol batal
}

export function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmButtonText = "Konfirmasi", // Nilai default
  cancelButtonText = "Batal", // Nilai default
}: ConfirmationDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-card text-card-foreground border-border">
        <DialogHeader className="flex flex-col items-center text-center">
          <AlertCircle className="h-8 w-8 text-secondary" />{" "}
          {/* Ikon peringatan */}
          <DialogTitle className="text-xl font-bold mt-2">{title}</DialogTitle>
          <DialogDescription className="text-base text-center">
            {message}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-center sm:space-x-2">
          {" "}
          {/* Tata letak tombol */}
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full sm:w-auto rounded-full bg-card-foreground text-card hover:text-background hover:bg-card-foreground/90"
          >
            {cancelButtonText}
          </Button>
          <Button
            onClick={onConfirm}
            className="w-full sm:w-auto rounded-full mb-2 sm:mb-0 bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            {confirmButtonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
