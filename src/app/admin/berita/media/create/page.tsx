"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import { IconChevronLeft, IconLoader, IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import { NotificationDialog } from "@/components/notification-dialog";
import {
  MediaBeritaUploadInputSchema,
  MediaBeritaUploadInputSchemaType,
} from "@/validations/schemas/media-berita";
import { createMediaBerita, uploadMedia } from "../action";
import { FileUploadMedia } from "@/app/_components/file-upload-media";

export default function InputMediaBeritaPage() {
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<MediaBeritaUploadInputSchemaType>({
    resolver: zodResolver(MediaBeritaUploadInputSchema),
    defaultValues: {
      urlMedia: "urlMedia",
      keterangan: "",
    },
  });

  const [urlMedia, setUrlMedia] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Terjadi kesalahan saat menyimpan media. Silakan coba lagi."
  );

  const ADMIN_URL =
    process.env.NEXT_PUBLIC_ADMIN_URL ?? "http://localhost:3000";

  const onSubmit = async (payload: MediaBeritaUploadInputSchemaType) => {
    setUrlMedia("");

    setIsLoading(true);
    if (!files.length) {
      form.setError("urlMedia", { message: "Tolong pilih file media" });
      return;
    }

    payload.urlMedia = await uploadMedia(files[0], payload.keterangan);

    const result = await createMediaBerita(payload);

    if (result.success) {
      setIsSuccessOpen(true);
      setUrlMedia(`${ADMIN_URL}/${result.data?.urlMedia}`);
    } else {
      setErrorMessage(result.error.message);
      setIsErrorOpen(true);
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full flex justify-center">
      <NotificationDialog
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Berhasil"
        message="Media telah berhasil disimpan. Salin Tautan Dibawah Ini"
        url={urlMedia}
        variant="success"
      />

      <NotificationDialog
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        title="Penyimpanan Gagal"
        message={errorMessage || "Terjadi kesalahan saat menyimpan media."}
        variant="error"
      />

      <Card className="w-full relative max-w-xl shadow-none">
        <Button
          className="top-6 hidden md:inline-flex absolute -left-14"
          variant={"secondary"}
          asChild
        >
          <Link href="/admin/berita/media">
            <IconChevronLeft />
          </Link>
        </Button>
        <CardHeader>
          <CardTitle>Tambah Media Berita</CardTitle>
          <CardDescription>
            Ekstensi media yang diperbolehkan hanyalah gambar dan video dengan
            ukuran dibawah 1GB
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-lg space-y-6"
            >
              <FormField
                control={form.control}
                name="urlMedia"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>File Media</FormLabel>
                    <FormControl>
                      <FileUploadMedia
                        multiple={false}
                        onFilesChange={(newFiles) => {
                          setFiles(newFiles);
                          if (newFiles.length) {
                            console.log(newFiles[0].name);

                            field.value = newFiles[0].name;
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="keterangan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keterangan</FormLabel>
                    <FormControl>
                      <Input placeholder="Keterangan Media" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-2">
                <Button
                  className="inline-flex md:hidden"
                  variant={"secondary"}
                  asChild
                >
                  <Link href="/admin/berita/media">
                    <IconChevronLeft />
                    Kembali
                  </Link>
                </Button>

                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <IconLoader className="animate-spin" />
                      Loading
                    </>
                  ) : (
                    <>
                      <IconPlus />
                      Submit
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
