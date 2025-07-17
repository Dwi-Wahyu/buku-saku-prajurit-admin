"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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
import { IconChevronLeft, IconPlus } from "@tabler/icons-react"; // Hapus IconPlane
import { FileUploadImage } from "@/app/_components/file-upload-image";
import { useEffect, useState } from "react";
import { pangkat } from "@/constant/pangkat"; // Pastikan path ini benar
import { NotificationDialog } from "@/components/notification-dialog"; // Pastikan path ini benar
import {
  InputPrajuritSchema,
  InputPrajuritSchemaType,
} from "@/validations/schemas/prajurit"; // Import tipe
import { getGolongan } from "@/helper/get-golongan"; // Pastikan path ini benar

import { useMutation, useQueryClient } from "@tanstack/react-query"; // Import useMutation dan useQueryClient
import apiClient from "@/lib/api-client";

export default function InputPrajurit() {
  const queryClient = useQueryClient(); // Dapatkan query client

  const [files, setFiles] = useState<File[]>([]); // State untuk file yang diupload

  const form = useForm<InputPrajuritSchemaType>({
    // Gunakan tipe yang diimport
    resolver: zodResolver(InputPrajuritSchema),
    defaultValues: {
      username: "",
      password: "",
      nama: "",
      pangkat: "",
      jenis_kelamin: "",
      umur: 0,
      golongan: 0,
      avatar: null,
      berat_badan: null,
      tinggi_badan: null,
    },
  });

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

  const createPrajuritMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiClient.post("/users", data, {
        headers: {
          "Content-Type": "multipart/form-data", // PENTING: Set header ini
        },
      });
      return response.data;
    },
    onSuccess: () => {
      // Notifikasi sukses
      setIsSuccessOpen(true);
      // Opsional: invalidate cache untuk daftar prajurit agar tabel di halaman lain refresh
      queryClient.invalidateQueries({ queryKey: ["prajurit"] });
      // Reset form
      form.reset();
      setFiles([]); // Reset file state juga
    },
    onError: (error: any) => {
      // Tangani error
      setIsErrorOpen(true);
      console.error(
        "Failed to create prajurit:",
        error.response?.data || error.message
      );
    },
  });

  const onSubmit = async (values: InputPrajuritSchemaType) => {
    // Buat FormData object
    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("password", values.password);
    formData.append("nama", values.nama);
    formData.append("pangkat", values.pangkat);
    formData.append("jenis_kelamin", values.jenis_kelamin);
    if (values.umur !== null) formData.append("umur", values.umur.toString()); // Konversi kembali ke string jika tidak null
    if (values.golongan !== null)
      formData.append("golongan", values.golongan.toString()); // Konversi kembali ke string jika tidak null

    // Tambahkan file jika ada
    if (files.length > 0) {
      formData.append("avatar", files[0]); // Asumsikan hanya satu file
    }

    // Jika ada BB/TB
    if (values.berat_badan !== null)
      formData.append("berat_badan", values.berat_badan?.toString() ?? "");
    if (values.tinggi_badan !== null)
      formData.append("tinggi_badan", values.tinggi_badan?.toString() ?? "");

    // Panggil mutation
    createPrajuritMutation.mutate(formData);
  };

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <NotificationDialog
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Aksi Berhasil!"
        message="Data Prajurit telah berhasil disimpan."
        variant="success"
      />

      {/* Dialog Gagal */}
      <NotificationDialog
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        title="Aksi Gagal!"
        message="Terjadi kesalahan saat menyimpan data prajurit. Silakan coba lagi."
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
          <CardTitle>Input Prajurit</CardTitle>
          <CardDescription>Sertakan data yang dibutuhkan</CardDescription>
        </CardHeader>
        <CardContent>
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        id="password_prajurit"
                        placeholder="Gunakan NRP sebagai default"
                        type="password" // Gunakan type="password" untuk keamanan
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nama"
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
                        // Konversi nilai dari number/null ke string untuk input
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

              {/* Tambahkan field Berat Badan dan Tinggi Badan jika ada di skema */}
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
                          field.value !== null ? field.value?.toString() : ""
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
                          field.value !== null ? field.value?.toString() : ""
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
                <h1 className="mb-2">Pasfoto (Opsional)</h1>
                <FormField
                  control={form.control}
                  name="avatar" // Tambahkan Field untuk file
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FileUploadImage
                          multiple={false}
                          onFilesChange={(newFiles) => {
                            setFiles(newFiles);
                            field.onChange(
                              newFiles.length > 0 ? newFiles[0] : null
                            ); // Update form hook state
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
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

                <Button
                  type="submit"
                  disabled={createPrajuritMutation.isPending}
                >
                  {createPrajuritMutation.isPending ? (
                    "Mengirim..."
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
