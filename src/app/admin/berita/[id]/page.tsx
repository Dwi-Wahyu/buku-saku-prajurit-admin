import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2, ThumbsUp, ThumbsDown } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function DetailBeritaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const berita = await prisma.berita.findFirst({
    where: {
      id,
    },
  });

  if (!berita) {
    return (
      <Card className="max-w-3xl mx-auto py-8 text-center">
        <CardHeader>
          <CardTitle>Berita Tidak Ditemukan</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            Berita dengan ID "{id}" tidak ada.
          </p>
          <Button asChild className="mt-4">
            <Link href="/admin/berita">
              <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Daftar Berita
            </Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-3xl mx-auto py-8">
      <CardHeader>
        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/admin/berita">
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali
          </Link>
        </Button>
        <CardTitle className="text-3xl font-bold">{berita.judul}</CardTitle>
        <CardDescription className="text-lg text-muted-foreground">
          {berita.deskripsi || "Tidak ada deskripsi."}
        </CardDescription>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <span>Oleh: {berita.penulis}</span>
          <span className="mx-2">•</span>
          <span>
            Diunggah:{" "}
            {new Date(berita.createdAt).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {berita.thumbnail && (
          <div className="w-full h-80 overflow-hidden rounded-lg">
            <img
              src={berita.thumbnail}
              alt={`Thumbnail ${berita.judul}`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <ThumbsUp className="h-5 w-5" /> {berita.like} Suka
          </div>
          <div className="flex items-center gap-1">
            <ThumbsDown className="h-5 w-5" /> {berita.dislike} Tidak Suka
          </div>
        </div>

        <div className="prose max-w-none dark:prose-invert">
          {/* Menampilkan konten berita. Asumsi konten adalah HTML. */}
          <div dangerouslySetInnerHTML={{ __html: berita.content }} />
        </div>
      </CardContent>
    </Card>
  );
}
