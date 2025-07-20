"server only";

import { Prisma, Role } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { MediaBeritaSearchParamsType } from "@/validations/search-params/media-berita-search-params";

export async function getMediaBeritaData(input: MediaBeritaSearchParamsType) {
  type WhereClause = Prisma.MediaBeritaWhereInput;
  let whereClause: WhereClause = {};

  if (input.tanggal) {
    const start = new Date(input.tanggal);
    start.setHours(0, 0, 0, 0);

    const end = new Date(input.tanggal);
    end.setHours(23, 59, 59, 999);

    whereClause.createdAt = {
      gte: start,
      lte: end,
    };
  }

  const filtered = await prisma.mediaBerita.count({
    where: whereClause,
  });

  const data = await prisma.mediaBerita.findMany({
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
