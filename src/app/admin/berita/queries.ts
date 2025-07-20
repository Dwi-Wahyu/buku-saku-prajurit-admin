"server only";

import { Prisma, Role } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { BeritaSearchParamsType } from "@/validations/search-params/berita-search-params";
import { UserSearchParamsType } from "@/validations/search-params/user-search-params";

export async function getBeritaData(input: BeritaSearchParamsType) {
  type WhereClause = Prisma.BeritaWhereInput;
  let whereClause: WhereClause = {};

  if (input.judul) {
    whereClause["judul"] = {
      contains: input.judul,
    };
  }
  const filtered = await prisma.berita.count({
    where: whereClause,
  });

  const data = await prisma.berita.findMany({
    take: input.perPage,
    skip: (input.page - 1) * input.perPage,
    where: whereClause,
    orderBy: {
      createdAt: "desc",
    },
  });

  const pageCount = Math.ceil(filtered / input.perPage);

  return { data, pageCount, filtered };
}

export async function getBeritaById(id: string) {
  const berita = await prisma.berita.findUnique({
    where: { id },
  });

  return berita;
}
