// breadcrumb.ts
// Definisikan mapping rute ke label breadcrumb
const breadcrumbMapping: Record<string, string> = {
  "/": "Home", // Untuk root public
  "/admin": "Dashboard", // Untuk halaman dashboard itu sendiri
  "/admin/kesatuan": "Kesatuan",
};

// Helper function to generate breadcrumbs from path
export function generateBreadcrumbs(
  pathname: string
): { label: string; href: string }[] {
  const breadcrumbs: { label: string; href: string }[] = [];

  // Kasus khusus untuk halaman root publik
  if (pathname === "/") {
    breadcrumbs.push({ label: "Home", href: "/" });
    return breadcrumbs;
  }

  // Selalu mulai dengan "Home" yang mengarah ke "/admin" (Dashboard)
  breadcrumbs.push({ label: "Home", href: "/admin" });

  // Jika pathname adalah "/admin" itu sendiri, kita sudah selesai
  if (pathname === "/admin") {
    return breadcrumbs;
  }

  // Untuk rute yang lebih dalam dari /admin (misalnya /admin/kesatuan)
  // Kita hanya ingin menambahkan segmen terakhir
  const segments = pathname.split("/").filter(Boolean);

  // Cari segmen yang relevan setelah '/admin'
  // Jika pathname adalah /admin/kesatuan, segments = ["admin", "kesatuan"]
  // Kita hanya tertarik pada "kesatuan"
  const lastSegmentIndex = segments.length - 1;
  if (lastSegmentIndex >= 0) {
    const lastSegment = segments[lastSegmentIndex];
    const fullPath = `/${segments.join("/")}`; // Path lengkap saat ini

    // Dapatkan label dari mapping atau kapitalisasi segmen terakhir
    const label =
      breadcrumbMapping[fullPath] ||
      lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

    breadcrumbs.push({ label, href: fullPath });
  }

  return breadcrumbs;
}
