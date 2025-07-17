// components/NotificationDialog.tsx
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
import { CheckCircle, XCircle, Info } from "lucide-react"; // Impor ikon

type NotificationVariant = "success" | "error" | "info";

interface NotificationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  variant: NotificationVariant;
}

export function NotificationDialog({
  isOpen,
  onClose,
  title,
  message,
  variant,
}: NotificationDialogProps) {
  const getVariantStyles = (variant: NotificationVariant) => {
    switch (variant) {
      case "success":
        return "bg-primary text-primary-foreground border-primary";
      case "error":
        return "bg-destructive text-destructive-foreground border-destructive";
      case "info":
        return "bg-muted text-muted-foreground border-muted";
      default:
        return "bg-background text-foreground border-border";
    }
  };

  const getVariantIcon = (variant: NotificationVariant) => {
    switch (variant) {
      case "success":
        return <CheckCircle className="h-16 w-16 text-primary-foreground" />; // Ikon centang untuk sukses
      case "error":
        return <XCircle className="h-16 w-16 text-destructive-foreground" />; // Ikon silang untuk gagal
      case "info":
        return <Info className="h-16 w-16 text-muted-foreground" />; // Ikon info untuk info
      default:
        return null;
    }
  };

  const variantStyles = getVariantStyles(variant);
  const variantIcon = getVariantIcon(variant);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`sm:max-w-[425px] ${variantStyles}`}>
        <DialogHeader className="flex flex-col items-center text-center">
          <DialogTitle className="text-xl font-bold mt-2">{title}</DialogTitle>
          {variantIcon} {/* Tampilkan ikon di sini */}
          <DialogDescription className="text-white">
            {message}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-center">
          <Button
            onClick={onClose}
            className={`mt-4 ${
              variant === "success"
                ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                : variant === "error"
                ? "bg-destructive-foreground text-destructive hover:bg-destructive-foreground/90"
                : "bg-muted-foreground text-muted hover:bg-muted-foreground/90"
            }`}
          >
            Tutup
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
