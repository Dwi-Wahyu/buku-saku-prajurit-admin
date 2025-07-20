"server only";

import { Prisma, Role } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { GarjasSearchParamsType } from "@/validations/search-params/garjas-search-params";

export async function getGarjasData(input: GarjasSearchParamsType) {
  type WhereClause = Prisma.GarjasWhereInput;
  let whereClause: WhereClause = {};

  if (input.nama) {
    whereClause["prajurit"] = {
      name: {
        contains: input.nama,
      },
    };
  }

  const filtered = await prisma.garjas.count({
    where: whereClause,
  });

  const data = await prisma.garjas.findMany({
    take: input.perPage,
    skip: (input.page - 1) * input.perPage,
    where: whereClause,
    orderBy: {
      tanggal: "desc",
    },
    include: {
      prajurit: {
        select: {
          name: true,
        },
      },
      penilai: {
        select: {
          name: true,
        },
      },
    },
  });

  const pageCount = Math.ceil(filtered / input.perPage);

  return { data, pageCount, filtered };
}

export async function getGarjasById(id: number) {
  const garjas = await prisma.garjas.findUnique({
    where: { id: id },
    include: {
      penilai: {
        include: {
          kesatuan: true,
        },
      },
      prajurit: {
        include: {
          kesatuan: true,
        },
      },
    },
  });
  return garjas;
}
