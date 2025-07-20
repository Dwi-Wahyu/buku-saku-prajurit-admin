import bcrypt from "bcryptjs";
import { getGolongan } from "../src/helper/get-golongan";
import { pangkat } from "../src/constant/pangkat";
import { PrismaClient, Role } from "@/app/generated/prisma";

const prisma = new PrismaClient();

const DEFAULT_AVATAR = "uploads/avatar/default-avatar.jpg";

async function main() {
  console.log("Memulai seeding database...");

  const roles: Role[] = ["superadmin", "admin", "penilai", "prajurit"];

  for (let i = 0; i < roles.length; i++) {
    const role = roles[i];

    let usernameNum = "";
    for (let j = 0; j < 14; j++) {
      usernameNum += Math.floor(Math.random() * 10);
    }
    const username = usernameNum;

    const hashedPassword = await bcrypt.hash(username, 10);

    let name = "";
    switch (role) {
      case "superadmin":
        name = "Super Admin User";
        break;
      case "admin":
        name = "Admin User";
        break;
      case "penilai":
        name = "Penilai User";
        break;
      case "prajurit":
        name = "Prajurit User";
        break;
    }

    const jenisKelamin = Math.random() < 0.5 ? "Pria" : "Wanita";

    const umur = Math.floor(Math.random() * (50 - 18 + 1)) + 18;

    let golongan: number;
    try {
      golongan = getGolongan(umur);
    } catch (e) {
      console.warn(
        `Peringatan: Usia ${umur} di luar rentang valid untuk golongan. Menggunakan golongan default 1.`
      );
      golongan = 1;
    }

    const randomPangkat = pangkat[Math.floor(Math.random() * pangkat.length)];

    const beratBadan =
      Math.random() < 0.7
        ? Math.floor(Math.random() * (90 - 50 + 1)) + 50
        : null;
    const tinggiBadan =
      Math.random() < 0.7
        ? Math.floor(Math.random() * (190 - 150 + 1)) + 150
        : null;

    console.log(`Membuat user: ${name} (${username}) dengan role ${role}...`);

    try {
      const user = await prisma.user.create({
        data: {
          name: name,
          username: username,
          password: hashedPassword,
          avatar: DEFAULT_AVATAR,
          role: role,
          profile: {
            create: {
              umur: umur,
              jenisKelamin: jenisKelamin,
              golongan: golongan,
              pangkat: randomPangkat,
              beratBadan: beratBadan,
              tinggiBadan: tinggiBadan,
            },
          },
        },
      });
      console.log(
        `User created: ${user.name} (ID: ${user.id}, Role: ${user.role})`
      );
    } catch (e: any) {
      if (e.code === "P2002") {
        console.error(`Gagal membuat user '${username}': Username sudah ada.`);
      } else {
        console.error(`Gagal membuat user '${username}':`, e.message);
      }
    }
  }

  console.log("Seeding selesai.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
