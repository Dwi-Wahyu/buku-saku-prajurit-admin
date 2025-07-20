import { prisma } from "@/lib/prisma";
import { loginSchema } from "@/validations/schemas/auth";
import { compareSync } from "bcryptjs";
import { NextResponse } from "next/server";
import z from "zod";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedBody = loginSchema.parse(body);
    const { username, password } = validatedBody;

    const user = await prisma.user.findFirst({
      where: {
        username,
      },
      include: {
        kesatuan: {
          select: {
            nama: true,
            logo: true,
            motto: true,
          },
        },
        profile: {
          select: {
            pangkat: true,
            umur: true,
            jenisKelamin: true,
            golongan: true,
            beratBadan: true,
            tinggiBadan: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Username atau Password tidak valid" },
        { status: 401 }
      );
    }

    const isValidPassword = compareSync(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { message: "Username atau Password tidak valid" },
        { status: 401 }
      );
    }

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        lastLogin: new Date(),
      },
    });

    const jwtSecret = process.env.NEXTAUTH_SECRET;
    if (!jwtSecret) {
      console.error("JWT_SECRET is not defined in environment variables.");
      return NextResponse.json(
        { message: "Server configuration error." },
        { status: 500 }
      );
    }

    const accessTokenPayload = {
      userId: user.id,
      username: user.username,
      role: user.role,
      pangkat: user.profile?.pangkat,
      golongan: user.profile?.golongan,
      jenisKelamin: user.profile?.jenisKelamin,
    };

    const accessToken = jwt.sign(accessTokenPayload, jwtSecret, {
      expiresIn: "15m",
    });

    const refreshTokenPayload = {
      userId: user.id,
    };

    const refreshToken = jwt.sign(refreshTokenPayload, jwtSecret, {
      expiresIn: "7d",
    });

    const refreshTokenExpiresAt = new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000
    );

    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: refreshTokenExpiresAt,
      },
    });

    const { password: userPassword, ...userWithoutPassword } = user;

    return NextResponse.json(
      {
        message: "Login berhasil",
        accessToken,
        refreshToken,
        user: userWithoutPassword,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Kesalahan validasi Zod:", error.message);
      return NextResponse.json(
        { message: "Data tidak valid", errors: error.issues },
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
