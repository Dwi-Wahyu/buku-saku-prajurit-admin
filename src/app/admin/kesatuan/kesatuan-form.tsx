"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
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
import {
  IconCheck,
  IconLoader,
  IconPlus,
  IconTargetArrow,
} from "@tabler/icons-react";
import { FileUploadImage } from "@/app/_components/file-upload-image";
import { NotificationDialog } from "@/components/notification-dialog";
import {
  InputKesatuanSchema,
  InputKesatuanSchemaType,
} from "@/validations/schemas/kesatuan";

import {
  updateKesatuan,
  uploadKesatuanLogo,
  createInitialKesatuan,
} from "./action";
import { getKesatuanData } from "./queries";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface KesatuanFormProps {
  initialData: (InputKesatuanSchemaType & { id?: string }) | null;
}

export function KesatuanForm({ initialData }: KesatuanFormProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [initialLogoUrl, setInitialLogoUrl] = useState<string | null>(null);

  const form = useForm<InputKesatuanSchemaType>({
    resolver: zodResolver(InputKesatuanSchema),
    defaultValues: {
      nama: initialData?.nama || "",
      motto: initialData?.motto || "",
      logo: initialData?.logo || null,
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Terjadi kesalahan saat menyimpan data kesatuan. Silakan coba lagi."
  );

  useEffect(() => {
    if (initialData?.logo) {
      setInitialLogoUrl(initialData.logo);
    }
  }, [initialData?.logo]);

  const onSubmit = async (payload: InputKesatuanSchemaType) => {
    setIsLoading(true);

    let logoUrlToSave = payload.logo;

    if (files.length > 0) {
      const formData = new FormData();
      formData.append("logo", files[0]);
      formData.append("kesatuanName", payload.nama);

      const uploadResult = await uploadKesatuanLogo(formData);
      if (uploadResult.success && uploadResult.data?.logoUrl) {
        logoUrlToSave = uploadResult.data.logoUrl;
      } else {
        setErrorMessage("Gagal mengunggah logo.");
        setIsErrorOpen(true);
        setIsLoading(false);
        return;
      }
    } else {
      if (payload.logo === null) {
        logoUrlToSave = null;
      }
    }

    let result;
    if (initialData?.id) {
      result = await updateKesatuan(initialData.id, {
        ...payload,
        logo: logoUrlToSave,
      });
    } else {
      result = await createInitialKesatuan({
        ...payload,
        logo: logoUrlToSave,
      });
    }

    if (result.success) {
      setIsSuccessOpen(true);
    } else {
      setErrorMessage(
        result.error?.message || "Terjadi kesalahan yang tidak diketahui."
      );
      setIsErrorOpen(true);
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full flex justify-center">
      <NotificationDialog
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Aksi Berhasil!"
        message="Data Kesatuan telah berhasil diperbarui."
        variant="success"
      />

      <NotificationDialog
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        title="Gagal Menyimpan Kesatuan!"
        message={errorMessage}
        variant="error"
      />

      <Card className="w-full relative max-w-xl shadow-none">
        <CardHeader>
          <CardTitle>Data Kesatuan</CardTitle>
          <CardDescription>Perbarui informasi Kesatuan Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-lg space-y-6"
            >
              <div className="w-full">
                <Label className="mb-2 text-sm">Logo Kesatuan</Label>
                <FileUploadImage
                  multiple={false}
                  onFilesChange={(newFiles) => {
                    setFiles(newFiles);
                    if (newFiles.length === 0) {
                      form.setValue("logo", null, { shouldDirty: true });
                    }
                  }}
                  initialPreviewUrl={initialLogoUrl}
                />
              </div>

              <FormField
                control={form.control}
                name="nama"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Kesatuan</FormLabel>
                    <FormControl>
                      <Input placeholder="Nama Kesatuan" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="motto"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="w-full space-y-2">
                        <Label htmlFor={"motto"}>Motto Kesatuan</Label>
                        <div className="relative">
                          <div className="text-muted-foreground pointer-events-none absolute end-0 top-2.5 flex items-center justify-center pe-3 peer-disabled:opacity-50">
                            <IconTargetArrow className="size-4" />
                            <span className="sr-only">Motto</span>
                          </div>
                          <Textarea
                            id={"motto"}
                            value={field.value ?? ""}
                            onChange={field.onChange}
                            placeholder="Motto Kesatuan"
                            className="peer pe-9"
                          />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-2">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <IconLoader className="animate-spin" />
                      Loading
                    </>
                  ) : (
                    <>
                      <IconCheck />
                      Update Data
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

export default async function KesatuanPage() {
  const kesatuan = await getKesatuanData();

  if (!kesatuan) {
    return <KesatuanForm initialData={null} />;
  }

  return <KesatuanForm initialData={kesatuan} />;
}
