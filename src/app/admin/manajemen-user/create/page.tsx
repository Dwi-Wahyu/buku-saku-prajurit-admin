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
import { IconChevronLeft, IconLoader, IconPlus } from "@tabler/icons-react";
import { FileUploadImage } from "@/app/_components/file-upload-image";
import { useEffect, useState } from "react";
import { pangkat } from "@/constant/pangkat";
import { NotificationDialog } from "@/components/notification-dialog";

import { getGolongan } from "@/helper/get-golongan";
import { createUser } from "../action";
import { uploadAvatar } from "../../prajurit/action";
import {
  InputUserSchema,
  InputUserSchemaType,
} from "@/validations/schemas/user";

export default function InputUserPage() {
  const [files, setFiles] = useState<File[]>([]);
  const form = useForm<InputUserSchemaType>({
    resolver: zodResolver(InputUserSchema),
    defaultValues: {
      username: "",
      password: "",
      name: "",
      pangkat: "",
      jenis_kelamin: "",
      umur: 0,
      golongan: 0,
      avatar: "public/uploads/avatar/default-avatar.jpg",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Terjadi kesalahan saat menyimpan data prajurit. Silakan coba lagi."
  );

  const umur = form.watch("umur");

  useEffect(() => {
    if (umur !== null) {
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

  const onSubmit = async (payload: InputUserSchemaType) => {
    setIsLoading(true);
    if (files.length > 0) {
      payload.avatar = await uploadAvatar(files[0], payload.username);
    }

    const result = await createUser(payload);

    if (result.success) {
      setIsSuccessOpen(true);
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
        title="Aksi Berhasil!"
        message="Data User telah berhasil disimpan."
        variant="success"
      />

      {/* Dialog Gagal */}
      <NotificationDialog
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        title="Gagal Menyimpan User!"
        message={errorMessage}
        variant="error"
      />

      <Card className="w-full relative max-w-xl shadow-none">
        <Button
          className="top-6 hidden md:inline-flex absolute -left-14"
          variant={"secondary"}
          asChild
        >
          <Link href="/admin/manajemen-user">
            <IconChevronLeft />
          </Link>
        </Button>
        <CardHeader>
          <CardTitle>Input User</CardTitle>
          <CardDescription>Sertakan data yang dibutuhkan</CardDescription>
        </CardHeader>
        <CardContent>
          <h1>{form.formState.errors.root?.type}</h1>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-lg space-y-6"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NRP</FormLabel>
                    <FormControl>
                      <Input
                        id="username_user"
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        id="password_user"
                        placeholder="Gunakan NRP sebagai default"
                        type="password"
                        {...field}
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
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Pilih Role (Superadmin, Admin, Penilai)" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="superadmin">Superadmin</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="penilai">Penilai</SelectItem>
                      </SelectContent>
                    </Select>
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
                      defaultValue={field.value}
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
                          field.value !== null ? field.value.toString() : ""
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
                          field.value !== null ? field.value.toString() : ""
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
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Pilih Pangkat User" />
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

              <div className="w-full">
                <h1 className="mb-2 text-sm">Pasfoto (Opsional)</h1>

                <FileUploadImage
                  multiple={false}
                  onFilesChange={(newFiles) => {
                    setFiles(newFiles);
                  }}
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  className="inline-flex md:hidden"
                  variant={"secondary"}
                  asChild
                >
                  <Link href="/admin/manajemen-user">
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
