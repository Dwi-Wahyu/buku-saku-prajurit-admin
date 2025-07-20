import { GarjasRequest, GarjasResponse } from "@/validations/schemas/garjas";

import { hitungNilaiGarjasA } from "@/services/rumus/garjas_a";
import { hitungNilaiGarjasB } from "@/services/rumus/garjas_b";
import { hitungNilaiGarjasB1 } from "@/services/rumus/garjas_b1";
import { hitungNilaiGarjasB2 } from "@/services/rumus/garjas_b2";
import { hitungNilaiGarjasB3 } from "@/services/rumus/garjas_b3";
import { hitungNilaiGarjasB4 } from "@/services/rumus/garjas_b4";
import { hitungNilaiAkhir } from "@/services/rumus/nilaiakhir";
import { prisma } from "@/lib/prisma";
import { errorResponse, successResponse } from "@/helper/action-helpers";
import { ServerActionReturn } from "@/types/server-action";
import { Garjas } from "@/app/generated/prisma";

interface IGarjasService {
  HitungNilaiGarjas(
    payload: GarjasRequest
  ): Promise<ServerActionReturn<Garjas>>;
}

export class GarjasService implements IGarjasService {
  async HitungNilaiGarjas(
    payload: GarjasRequest
  ): Promise<ServerActionReturn<Garjas>> {
    const {
      id,
      id_penilai,
      gender,
      golongan,
      jarak_lari,
      pull_up,
      sit_up,
      push_up,
      shuttle_run,
    } = payload;

    const prajurit = await prisma.user.findFirst({
      where: {
        id,
        role: "prajurit",
      },
      include: {
        profile: {
          select: {
            pangkat: true,
          },
        },
      },
    });
    const penilai = await prisma.user.findFirst({
      where: {
        id: id_penilai,
        role: "penilai",
      },
    });

    if (!prajurit) {
      return errorResponse("Prajurit tidak ditemukan", "404");
    }

    if (!penilai) {
    }

    const skor_garjas_a = hitungNilaiGarjasA(gender, golongan, jarak_lari) ?? 0;
    const skor_garjas_b1 = hitungNilaiGarjasB1(gender, golongan, pull_up) ?? 0;
    const skor_garjas_b2 = hitungNilaiGarjasB2(gender, golongan, sit_up) ?? 0;
    const skor_garjas_b3 = hitungNilaiGarjasB3(gender, golongan, push_up) ?? 0;
    const skor_garjas_b4 =
      hitungNilaiGarjasB4(gender, golongan, shuttle_run) ?? 0;

    const skor_garjas_b = hitungNilaiGarjasB(
      skor_garjas_b1,
      skor_garjas_b2,
      skor_garjas_b3,
      skor_garjas_b4
    );
    const skor_akhir = hitungNilaiAkhir(skor_garjas_a, skor_garjas_b);

    const hasil: GarjasResponse = {
      skor_garjas_a,
      skor_garjas_b,
      skor_garjas_b1,
      skor_garjas_b2,
      skor_garjas_b3,
      skor_garjas_b4,
      skor_akhir,
    };

    // Simpan ke database

    const dataGarjas = await prisma.garjas.create({
      data: {
        garjasA: skor_garjas_a,
        garjasB: skor_garjas_b,
        skorB1: skor_garjas_b1,
        skorB2: skor_garjas_b2,
        skorB3: skor_garjas_b3,
        skorB4: skor_garjas_b4,
        nilaiAkhir: skor_akhir,

        lari: jarak_lari,
        shuttleRun: shuttle_run,
        pushup: push_up,
        situp: sit_up,
        pullup: pull_up,
        pangkat: prajurit.profile?.pangkat ?? "",

        prajuritId: id,
        penilaiId: id_penilai,
      },
    });

    return successResponse(dataGarjas, "Berhasil Input Nilai");
  }
}
