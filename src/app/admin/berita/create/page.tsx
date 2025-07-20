"use client";
import RichTextEditor from "@/components/rich-text-editor";
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileUploadImage } from "@/app/_components/file-upload-image";
import {
  InputBeritaSchema,
  InputBeritaSchemaType,
} from "@/validations/schemas/berita";
import { createBerita, uploadThumbnail } from "../action";
import { NotificationDialog } from "@/components/notification-dialog";

export default function CreateBeritaPage() {
  const [files, setFiles] = useState<File[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Terjadi kesalahan saat menyimpan media. Silakan coba lagi."
  );

  const form = useForm<InputBeritaSchemaType>({
    resolver: zodResolver(InputBeritaSchema),
    defaultValues: {
      judul: "",
      deskripsi: "",
      thumbnail: "thumbnail",
      penulis: "",
      content: "<p>Detail Berita</p>",
    },
  });

  const [content, setContent] = useState<string>("<p>Detail Berita . . .</p>");

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    form.setValue("content", newContent, { shouldValidate: true });
  };

  const onSubmit = async (payload: InputBeritaSchemaType) => {
    setIsLoading(true);

    if (!files.length) {
      form.setError("thumbnail", { message: "Tolong pilih thumbnail" });
      return;
    }

    payload.thumbnail = await uploadThumbnail(files[0], payload.judul);

    const result = await createBerita(payload);

    if (result.success) {
      setIsSuccessOpen(true);
    } else {
      setErrorMessage(result.error.message);
      setIsErrorOpen(true);
    }

    setIsLoading(false);
  };

  return (
    <Card className="max-w-3xl mx-auto py-8">
      <NotificationDialog
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Aksi Berhasil!"
        message="Berita berhasil dipublish."
        variant="success"
      />

      <NotificationDialog
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        title="Gagal menyimpan berita!"
        message={errorMessage}
        variant="error"
      />

      <CardHeader>
        <CardTitle>Tambah Berita</CardTitle>
        <CardDescription>
          Isi detail berita secara lengkap dan akurat.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            {/* Field Judul */}
            <FormField
              control={form.control}
              name="judul"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Judul Berita</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan judul berita" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Field Deskripsi */}
            <FormField
              control={form.control}
              name="deskripsi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deskripsi Singkat</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Masukkan deskripsi singkat berita (opsional)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thumbnail Berita</FormLabel>
                  <FormControl>
                    <FileUploadImage
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

            {/* Field Penulis */}
            <FormField
              control={form.control}
              name="penulis"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Penulis</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan nama penulis" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel>Konten Berita</FormLabel>
              <FormControl>
                <RichTextEditor
                  content={content}
                  onChange={handleContentChange}
                />
              </FormControl>
              <FormMessage>
                {/* Menampilkan error untuk konten jika ada */}
                {form.formState.errors.content && (
                  <p className="text-sm font-medium text-destructive">
                    {form.formState.errors.content.message}
                  </p>
                )}
              </FormMessage>
            </FormItem>

            <div className="flex justify-end">
              <Button
                type="submit"
                className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Menyimpan..." : "Simpan Berita"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
