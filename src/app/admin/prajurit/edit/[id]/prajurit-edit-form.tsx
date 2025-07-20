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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { IconChevronLeft, IconLoader, IconCheck } from "@tabler/icons-react";
import { FileUploadImage } from "@/app/_components/file-upload-image";
import { useEffect, useState } from "react";
import { pangkat } from "@/constant/pangkat";
import { NotificationDialog } from "@/components/notification-dialog";
import {
  UpdatePrajuritSchema,
  UpdatePrajuritSchemaType,
} from "@/validations/schemas/prajurit";
import { getGolongan } from "@/helper/get-golongan";
import { updatePrajurit, uploadAvatar } from "../../action";
import { Profile, User } from "@/app/generated/prisma";
import { useRouter } from "nextjs-toploader/app";

interface PrajuritEditFormProps {
  prajuritData: (User & { profile: Profile | null }) | null;
  prajuritId: string;
}

export function PrajuritEditForm({
  prajuritData,
  prajuritId,
}: PrajuritEditFormProps) {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const [initialAvatarUrl, setInitialAvatarUrl] = useState<string | null>(null);

  const form = useForm<UpdatePrajuritSchemaType>({
    resolver: zodResolver(UpdatePrajuritSchema),
    defaultValues: {
      id: prajuritId,
      username: prajuritData?.username || "",
      password: "",
      name: prajuritData?.name || "",
      pangkat: prajuritData?.profile?.pangkat || "",
      jenis_kelamin: prajuritData?.profile?.jenisKelamin || "",
      umur: prajuritData?.profile?.umur || 0,
      golongan: prajuritData?.profile?.golongan || 0,
      avatar: prajuritData?.avatar || null,
      berat_badan: prajuritData?.profile?.beratBadan || null,
      tinggi_badan: prajuritData?.profile?.tinggiBadan || null,
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Terjadi kesalahan saat memperbarui data prajurit. Silakan coba lagi."
  );

  const umur = form.watch("umur");

  useEffect(() => {
    if (prajuritData?.avatar) {
      setInitialAvatarUrl(prajuritData.avatar);
    }
  }, [prajuritData?.avatar]);

  useEffect(() => {
    if (umur !== null && umur !== undefined) {
      try {
        const golongan = getGolongan(umur);
        form.setValue("golongan", golongan, { shouldValidate: true });
      } catch (e) {
        form.setValue("golongan", 0, { shouldValidate: true });
      }
    } else {
      form.setValue("golongan", 0, { shouldValidate: true });
    }
  }, [umur, form.setValue]);

  const onSubmit = async (payload: UpdatePrajuritSchemaType) => {
    setIsLoading(true);

    let avatarUrlToSave = payload.avatar;

    if (files.length > 0) {
      avatarUrlToSave = await uploadAvatar(
        files[0],
        payload.username || prajuritData?.username || ""
      );
    } else {
      if (payload.avatar === null) {
        avatarUrlToSave = null;
      }
    }

    const result = await updatePrajurit({
      ...payload,
      avatar: avatarUrlToSave,
      id: prajuritId,
    });

    if (result.success) {
      setIsSuccessOpen(true);
      setTimeout(() => {
        router.push("/admin/prajurit");
      }, 1000);
    } else {
      setErrorMessage(
        result.error?.message || "Terjadi kesalahan yang tidak diketahui."
      );
      setIsErrorOpen(true);
    }

    setIsLoading(false);
  };

  if (!prajuritData) {
    return (
      <NotificationDialog
        isOpen={true}
        onClose={() => router.push("/admin/prajurit")}
        title="Data Tidak Ditemukan!"
        message="Prajurit yang Anda cari tidak ada atau telah dihapus."
        variant="error"
      />
    );
  }

  return (
    <div className="w-full flex justify-center">
      <NotificationDialog
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Aksi Berhasil!"
        message="Data Prajurit telah berhasil diperbarui."
        variant="success"
      />

      <NotificationDialog
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        title="Gagal Memperbarui Prajurit!"
        message={errorMessage}
        variant="error"
      />

      <Card className="w-full relative max-w-xl shadow-none">
        <Button
          className="top-6 hidden md:inline-flex absolute -left-14"
          variant={"secondary"}
          asChild
        >
          <Link href="/admin/prajurit">
            <IconChevronLeft />
          </Link>
        </Button>
        <CardHeader>
          <CardTitle>Edit Prajurit</CardTitle>
          <CardDescription>Perbarui data yang dibutuhkan</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-lg space-y-6"
            >
              {/* Field ID (hidden) */}
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem className="hidden">
                    <FormControl>
                      <Input type="hidden" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NRP</FormLabel>
                    <FormControl>
                      <Input
                        id="username_prajurit"
                        placeholder="Nomor Registrasi Pokok"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Password (Biarkan kosong jika tidak ingin mengubah)
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="password_prajurit"
                        placeholder="********"
                        type="password"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Lengkap</FormLabel>
                    <FormControl>
                      <Input placeholder="Nama Lengkap" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jenis_kelamin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jenis Kelamin</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || ""}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Pilih Jenis Kelamin" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Pria">Pria</SelectItem>
                        <SelectItem value="Wanita">Wanita</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="umur"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Umur</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Umur"
                        {...field}
                        value={
                          field.value !== null && field.value !== undefined
                            ? field.value.toString()
                            : ""
                        }
                        onChange={(e) =>
                          field.onChange(
                            e.target.value === ""
                              ? null
                              : parseInt(e.target.value)
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="golongan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Golongan</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Golongan (otomatis)"
                        disabled
                        {...field}
                        value={
                          field.value !== null && field.value !== undefined
                            ? field.value.toString()
                            : ""
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pangkat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pangkat</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || ""}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Pilih Pangkat Prajurit" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {pangkat.map((value, i) => (
                          <SelectItem value={value} key={i}>
                            {value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="berat_badan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Berat Badan (kg)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Berat Badan"
                        {...field}
                        value={
                          field.value !== null && field.value !== undefined
                            ? field.value.toString()
                            : ""
                        }
                        onChange={(e) =>
                          field.onChange(
                            e.target.value === ""
                              ? null
                              : parseInt(e.target.value)
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tinggi_badan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tinggi Badan (cm)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Tinggi Badan"
                        {...field}
                        value={
                          field.value !== null && field.value !== undefined
                            ? field.value.toString()
                            : ""
                        }
                        onChange={(e) =>
                          field.onChange(
                            e.target.value === ""
                              ? null
                              : parseInt(e.target.value)
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full">
                <h1 className="mb-2 text-sm">Pasfoto (Opsional)</h1>
                <FileUploadImage
                  multiple={false}
                  onFilesChange={(newFiles) => {
                    setFiles(newFiles);
                    if (newFiles.length === 0) {
                      form.setValue("avatar", null, { shouldDirty: true });
                    }
                  }}
                  initialPreviewUrl={initialAvatarUrl}
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  className="inline-flex md:hidden"
                  variant={"secondary"}
                  asChild
                >
                  <Link href="/admin/prajurit">
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
                      <IconCheck />
                      Update
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
