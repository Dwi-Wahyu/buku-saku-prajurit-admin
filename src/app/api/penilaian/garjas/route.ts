import { GarjasService } from "@/services/garjas_services";
import { GarjasRequestSchema } from "@/validations/schemas/garjas";
import { NextResponse } from "next/server";
import z from "zod";

export async function POST(request: Request) {
  console.log(request.body);

  try {
    const body = await request.json();

    const validatedBody = GarjasRequestSchema.parse(body);

    const garjasService = new GarjasService();

    const hasilPenilaian = await garjasService.HitungNilaiGarjas(validatedBody);

    return NextResponse.json(
      {
        message: "Data penilaian garjas berhasil diterima dan divalidasi",
        ...hasilPenilaian,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Kesalahan validasi Zod:", error.message);
      return NextResponse.json(
        { message: "Data tidak valid", errors: error.message },
        { status: 400 }
      );
    }

    console.error("Kesalahan server:", error);
    return NextResponse.json(
      {
        message: "Terjadi kesalahan pada server",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
