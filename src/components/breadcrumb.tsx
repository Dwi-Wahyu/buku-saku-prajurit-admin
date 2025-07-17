// breadcrumb.tsx
"use client";

import { Home } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useSidebar } from "./ui/sidebar";
import { generateBreadcrumbs } from "@/helper/generate-breadcrumbs";
import { Fragment } from "react"; // Pastikan Fragment diimpor
import { IconNews } from "@tabler/icons-react";
import IconKesatuan from "./icons/kesatuan";
import IconPrajurit from "./icons/prajurit";

export function BreadCrumbs() {
  const { linkActive } = useSidebar();

  const breadcrumbs = generateBreadcrumbs(linkActive);

  return (
    <Breadcrumb>
      <BreadcrumbList className="h-8 bg-sidebar gap-2 rounded-md border px-3 text-sm">
        {breadcrumbs.map((item, index) => (
          <Fragment key={item.href}>
            <BreadcrumbItem>
              {item.label === "Home" && (
                <Home
                  style={{ marginBottom: 1, marginRight: 1 }}
                  width={13}
                  height={13}
                />
              )}
              {item.label === "Kesatuan" && (
                <IconKesatuan isBreadcrumbLogo width={"13"} height={"13"} />
              )}
              {item.label === "Berita" && (
                <IconNews
                  style={{ marginBottom: 1, marginRight: 1 }}
                  width={13}
                  height={13}
                />
              )}
              {item.label === "Prajurit" && (
                <IconPrajurit isBreadcrumbLogo width={"13"} height={"13"} />
              )}
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            </BreadcrumbItem>
            {/* Jangan tampilkan separator setelah item terakhir */}
            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
