// C:\Programming\Next js\buku-saku-admin\src\app\api\penilaian\garjas\route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Log untuk debugging: Pastikan kode ini dieksekusi
  console.log("API GARJAS: GET request received!");
  return NextResponse.json(
    { message: "GET /api/penilaian/garjas success" },
    { status: 200 }
  );
}

export async function POST(request: Request) {
  // Log untuk debugging: Pastikan kode ini dieksekusi
  console.log("API GARJAS: POST request received!");
  const body = await request.json(); // Contoh: baca body
  return NextResponse.json(
    { message: "POST /api/penilaian/garjas success", data: body },
    { status: 201 }
  );
}
