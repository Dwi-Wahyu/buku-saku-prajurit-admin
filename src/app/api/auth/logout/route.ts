import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { refreshToken } = body;

    if (!refreshToken) {
      return NextResponse.json(
        { message: "Refresh Token tidak ditemukan dalam permintaan" },
        { status: 400 }
      );
    }

    const jwtSecret = process.env.NEXTAUTH_SECRET;
    if (!jwtSecret) {
      console.error("JWT_SECRET is not defined in environment variables.");
      return NextResponse.json(
        { message: "Server configuration error." },
        { status: 500 }
      );
    }

    let decodedRefreshToken: jwt.JwtPayload;
    try {
      decodedRefreshToken = jwt.verify(
        refreshToken,
        jwtSecret
      ) as jwt.JwtPayload;
    } catch (error) {
      console.error("Invalid or malformed refresh token during logout:", error);
      return NextResponse.json(
        { message: "Token tidak valid saat logout." },
        { status: 200 }
      );
    }

    const updatedToken = await prisma.refreshToken.updateMany({
      where: {
        token: refreshToken,
        userId: decodedRefreshToken.userId,
        revoked: false,
      },
      data: {
        revoked: true,
      },
    });

    if (updatedToken.count === 0) {
      console.warn(
        `Refresh Token for user ${decodedRefreshToken.userId} not found or already revoked.`
      );
    }

    return NextResponse.json(
      { message: "Logout berhasil. Sesi telah diakhiri." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Kesalahan server saat logout:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan pada server saat logout." },
      { status: 500 }
    );
  }
}
