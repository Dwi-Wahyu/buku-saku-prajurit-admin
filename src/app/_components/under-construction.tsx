import Link from "next/link";
import { Home, Construction, CircleDotDashed } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UnderConstructionPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br p-4 sm:p-6">
      <div className="bg-primary rounded-2xl shadow-xl p-8 sm:p-10 lg:p-12 text-center max-w-md w-full transform transition-all duration-300 hover:scale-105">
        <div className="mb-6">
          <Construction className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-background mx-auto drop-shadow-lg animate-bounce-slow" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-background mb-4 leading-tight">
          Halaman Sedang Dalam Pengerjaan
        </h1>

        <p className="text-base text-background mb-6">
          Kami sedang bekerja keras untuk menghadirkan fitur ini. Mohon
          bersabar, halaman ini akan segera tersedia!
        </p>

        <div className="flex items-center justify-center text-background mb-8">
          <CircleDotDashed className="h-5 w-5 mr-2 animate-spin" />
          <span className="font-semibold text-lg">
            Pembaruan sedang berlangsung...
          </span>
        </div>

        <div className="flex flex-col space-y-3">
          <Link href="/admin" passHref>
            <Button variant={"outline"}>
              <Home className="w-5 h-5" /> Kembali ke Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
