import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getGarjasById } from "../queries";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconChevronLeft, IconEye } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function DetailGarjasPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const garjasData = await getGarjasById(parseInt(id));

  if (!garjasData) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <h1 className="text-2xl font-bold text-destructive">
          Data Garjas tidak ditemukan.
        </h1>
      </div>
    );
  }

  const formatDate = (dateString: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Card className="shadow-lg animate-in fade-in duration-500">
        <CardHeader className="rounded-t-lg">
          <CardTitle className="text-3xl text-secondary font-extrabold text-center">
            Detail Penilaian Kesegaran Jasmani
          </CardTitle>
          <p className="text-center text-lg mt-2 opacity-90">
            Informasi Lengkap Hasil Garjas
          </p>
        </CardHeader>
        <CardContent className="p-8 space-y-8">
          {/* Informasi Umum */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="text-xl font-semibold text-secondary mb-3">
                Data Penilaian
              </h2>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">
                  ID Penilaian:
                </span>{" "}
                {garjasData.id}
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Tanggal:</span>{" "}
                {formatDate(garjasData.tanggal)}
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Pangkat:</span>{" "}
                <Badge variant="outline">{garjasData.pangkat}</Badge>
              </p>
              {garjasData.prajurit.kesatuan != null && (
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Tanggal:</span>{" "}
                  {garjasData.prajurit.kesatuan.nama}
                </p>
              )}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-secondary mb-3">
                Informasi Prajurit
              </h2>
              <div className="flex items-center gap-3 mb-2">
                <Avatar className="h-12 w-12 border-2 border-primary-foreground shadow-sm">
                  <AvatarImage
                    src={
                      garjasData.prajurit.avatar || "/placeholder-avatar.jpg"
                    }
                    alt={garjasData.prajurit.name || "Prajurit Avatar"}
                  />
                  <AvatarFallback className="bg-muted text-muted-foreground font-semibold">
                    {garjasData.prajurit.name
                      ? garjasData.prajurit.name.charAt(0).toUpperCase()
                      : "PJ"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center">
                    <h1>{garjasData.prajurit.name}</h1>

                    <Link href={`/admin/prajurit/${garjasData.prajuritId}`}>
                      <IconEye
                        className="text-muted-foreground ml-1"
                        width={19}
                        height={19}
                      />
                    </Link>
                  </div>
                  <h1 className="text-muted-foreground text-sm mt-1">
                    {garjasData.prajurit.username}
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-secondary mb-3">
                Informasi Penilai
              </h2>

              <div className="flex items-center gap-3 mb-2">
                <Avatar className="h-12 w-12 border-2 border-secondary-foreground shadow-sm">
                  <AvatarImage
                    src={garjasData.penilai.avatar || "/placeholder-avatar.jpg"}
                    alt={garjasData.penilai.name || "Penilai Avatar"}
                  />
                  <AvatarFallback className="bg-muted text-muted-foreground font-semibold">
                    {garjasData.penilai.name
                      ? garjasData.penilai.name.charAt(0).toUpperCase()
                      : "PN"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center">
                    <h1>{garjasData.penilai.name}</h1>

                    <Link href={`/admin/user/${garjasData.penilaiId}`}>
                      <IconEye
                        className="text-muted-foreground ml-1"
                        width={19}
                        height={19}
                      />
                    </Link>
                  </div>
                  <h1 className="text-muted-foreground text-sm mt-1">
                    {garjasData.penilai.username}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6 bg-border" />

          <h2 className="text-xl font-semibold text-secondary mb-4">
            Hasil Garjas A (Lari 12 Menit)
          </h2>
          <Table className="w-full">
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead className="w-[150px] text-muted-foreground font-bold">
                  Jarak Lari (Meter)
                </TableHead>
                <TableHead className="text-muted-foreground font-bold">
                  Nilai Garjas A
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-foreground">
                  {garjasData.lari} m
                </TableCell>
                <TableCell>{garjasData.garjasA.toFixed(2)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Separator className="my-6 bg-border" />

          {/* Hasil Garjas B */}
          <h2 className="text-xl font-semibold text-secondary mb-4">
            Hasil Garjas B
          </h2>
          <Table className="w-full">
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead className="text-muted-foreground font-bold">
                  Kategori
                </TableHead>
                <TableHead className="text-muted-foreground font-bold">
                  Jumlah/Waktu
                </TableHead>
                <TableHead className="text-muted-foreground font-bold">
                  Skor
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-foreground">
                  Pull Up
                </TableCell>
                <TableCell>
                  {garjasData.pullup !== null
                    ? `${garjasData.pullup} kali`
                    : "Tidak ada data"}
                </TableCell>
                <TableCell>
                  {garjasData.skorB1 !== null
                    ? garjasData.skorB1.toFixed(2)
                    : "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-foreground">
                  Sit Up
                </TableCell>
                <TableCell>
                  {garjasData.situp !== null
                    ? `${garjasData.situp} kali`
                    : "Tidak ada data"}
                </TableCell>
                <TableCell>
                  {garjasData.skorB4 !== null
                    ? garjasData.skorB4.toFixed(2)
                    : "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-foreground">
                  Push Up
                </TableCell>
                <TableCell>
                  {garjasData.pushup !== null
                    ? `${garjasData.pushup} kali`
                    : "Tidak ada data"}
                </TableCell>
                <TableCell>
                  {garjasData.skorB3 !== null
                    ? garjasData.skorB3.toFixed(2)
                    : "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-foreground">
                  Shuttle Run
                </TableCell>
                <TableCell>
                  {garjasData.shuttleRun !== null
                    ? `${garjasData.shuttleRun} detik`
                    : "Tidak ada data"}
                </TableCell>
                <TableCell>
                  {garjasData.skorB2 !== null
                    ? garjasData.skorB2.toFixed(2)
                    : "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-foreground">
                  Renang
                </TableCell>
                <TableCell>
                  {garjasData.renang !== null
                    ? `${garjasData.renang} detik`
                    : "Tidak ada data"}
                </TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="mt-6 text-right">
            <p className="text-lg font-bold text-secondary">
              Nilai Keseluruhan Garjas B :{" "}
              <Badge className="text-lg" variant={"outline"}>
                {garjasData.garjasB.toFixed(2)}
              </Badge>
            </p>
          </div>

          <Separator className="my-6 bg-border" />

          {/* Nilai Akhir */}
          <div className="flex justify-between items-center bg-accent/20 p-4 rounded-md animate-in fade-in slide-in-from-bottom-2 duration-700">
            <h2 className="text-xl font-bold text-accent-foreground">
              Nilai Akhir
            </h2>
            <Badge className="text-xl" variant={"outline"}>
              {garjasData.nilaiAkhir.toFixed(2)}
            </Badge>
          </div>

          <div className="flex justify-center ">
            <Button asChild variant={"secondary"}>
              <Link href={"/admin/penilaian/kesegaran-jasmani"}>
                <IconChevronLeft /> Kembali
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
