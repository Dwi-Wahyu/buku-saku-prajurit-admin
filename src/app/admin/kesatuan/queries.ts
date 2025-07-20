"server only";

import { prisma } from "@/lib/prisma";

export async function getKesatuanData() {
  const kesatuan = await prisma.kesatuan.findFirst();
  return kesatuan;
}
