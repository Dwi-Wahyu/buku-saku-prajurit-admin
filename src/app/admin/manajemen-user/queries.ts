"server only";

import { Prisma, Role } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { UserSearchParamsType } from "@/validations/search-params/user-search-params";

export async function getUserData(input: UserSearchParamsType) {
  type WhereClause = Prisma.UserWhereInput;
  let whereClause: WhereClause = {};

  if (input.nama) {
    whereClause["name"] = {
      contains: input.nama,
    };
  }

  if (input.pangkat) {
    whereClause["profile"] = {
      pangkat: {
        contains: input.pangkat,
      },
    };
  }

  whereClause["role"] = {
    not: "prajurit",
  };

  const filtered = await prisma.user.count({
    where: whereClause,
  });

  const data = await prisma.user.findMany({
    take: input.perPage,
    skip: (input.page - 1) * input.perPage,
    where: whereClause,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      profile: true,
    },
  });

  const pageCount = Math.ceil(filtered / input.perPage);

  return { data, pageCount, filtered };
}

export async function getUserById(id: string) {
  const user = await prisma.user.findFirst({
    where: { id: id },
    include: {
      profile: true,
      kesatuan: {
        select: {
          nama: true,
        },
      },
      penilaianGarjasDibuat: {
        select: {
          id: true,
          tanggal: true,
          garjasA: true,
          garjasB: true,
          nilaiAkhir: true,
          prajurit: {
            select: {
              name: true,
            },
          },
        },
        orderBy: {
          tanggal: "desc",
        },
        take: 5,
      },
      penilaianGarjasDidapatkan: {
        select: {
          id: true,
          tanggal: true,
          garjasA: true,
          garjasB: true,
          nilaiAkhir: true,
          penilai: {
            select: {
              name: true,
            },
          },
        },
        orderBy: {
          tanggal: "desc",
        },
        take: 5,
      },
    },
  });
  return user;
}
