// test-decode.mjs (perhatikan ekstensi .mjs)
import { decode } from "next-auth/jwt"; // Gunakan import

async function testDecode() {
  const sessionToken = "SALIN_NILAI_LENGKAP_AUTHJS_SESSION_TOKEN_DI_SINI";
  const secret = "SALIN_NILAI_LENGKAP_NEXTAUTH_SECRET_ANDA_DI_SINI";

  try {
    const decoded = await decode({
      token: sessionToken,
      secret: secret,
      salt: "",
    });
    console.log("Successfully decoded:", decoded);
  } catch (error) {
    console.error("Failed to decode:", error);
  }
}

testDecode();
