"server only";

import { Prisma, Role } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { UserSearchParamsType } from "@/validations/search-params/user-search-params";

export async function getPrajuritData(input: UserSearchParamsType) {
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
    equals: "prajurit",
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

export async function getPrajuritById(id: string) {
  const prajurit = await prisma.user.findUnique({
    where: { id: id },
    include: {
      profile: true,
    },
  });
  return prajurit;
}
