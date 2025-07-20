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
        { status: 401 }
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
      console.error("Invalid or expired refresh token:", error);
      return NextResponse.json(
        {
          message:
            "Refresh Token tidak valid atau kadaluarsa. Silakan login kembali.",
        },
        { status: 401 }
      );
    }

    const storedRefreshToken = await prisma.refreshToken.findUnique({
      where: {
        token: refreshToken,
        revoked: false,
        expiresAt: {
          gt: new Date(),
        },
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            role: true,
            profile: {
              select: {
                pangkat: true,
                golongan: true,
              },
            },
          },
        },
      },
    });

    if (!storedRefreshToken || !storedRefreshToken.user) {
      return NextResponse.json(
        {
          message:
            "Sesi tidak valid atau telah berakhir. Silakan login kembali.",
        },
        { status: 401 }
      );
    }

    const newAccessTokenPayload = {
      userId: storedRefreshToken.user.id,
      username: storedRefreshToken.user.username,
      role: storedRefreshToken.user.role,
      pangkat: storedRefreshToken.user.profile?.pangkat || null,
      golongan: storedRefreshToken.user.profile?.golongan || null,
    };

    const newAccessToken = jwt.sign(newAccessTokenPayload, jwtSecret, {
      expiresIn: "15m",
    });

    await prisma.refreshToken.update({
      where: { id: storedRefreshToken.id },
      data: { revoked: true },
    });

    const newRefreshToken = jwt.sign(
      { userId: storedRefreshToken.user.id },
      jwtSecret,
      {
        expiresIn: "7d",
      }
    );
    const newRefreshTokenExpiresAt = new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000
    );

    await prisma.refreshToken.create({
      data: {
        token: newRefreshToken,
        userId: storedRefreshToken.user.id,
        expiresAt: newRefreshTokenExpiresAt,
      },
    });

    return NextResponse.json(
      {
        message: "Access Token berhasil diperbarui",
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Kesalahan saat memperbarui token:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan pada server saat memperbarui token." },
      { status: 500 }
    );
  }
}
