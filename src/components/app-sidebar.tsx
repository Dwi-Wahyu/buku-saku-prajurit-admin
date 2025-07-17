"use client";

import { useEffect } from "react";
import { IconClipboardText, IconNews } from "@tabler/icons-react";

import { NavPenilaian } from "@/components/nav-penilaian";
import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import IconKesatuan from "./icons/kesatuan";
import { LayoutDashboard } from "lucide-react";
import IconPrajurit from "./icons/prajurit";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Kesatuan",
      url: "/admin/kesatuan",
      icon: IconKesatuan,
    },
    {
      title: "Data Prajurit",
      url: "/admin/prajurit",
      icon: IconPrajurit,
    },
    {
      title: "Berita",
      url: "/admin/berita",
      icon: IconNews,
    },
  ],
  navClouds: [],
  navSecondary: [],
  penilaian: [
    {
      title: "UTP Umum & Jabatan",
      url: "/admin/penilaian/utp-umum-dan-jabatan",
      icon: IconClipboardText,
    },
    {
      title: "Latihan Satuan",
      url: "/admin/penilaian/latihan-satuan",
      icon: IconClipboardText,
    },
    {
      title: "BAK Tepat 100M",
      url: "/admin/penilaian/bak-tepat-100m",
      icon: IconClipboardText,
    },
    {
      title: "BAK Pistol 15M",
      url: "/admin/penilaian/bak-pistol-15m",
      icon: IconClipboardText,
    },
    {
      title: "Kesegaran Jasmani",
      url: "/admin/penilaian/gasjar",
      icon: IconClipboardText,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open, linkActive } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="p-2 pb-0 flex items-center justify-between">
            {open ? (
              <Image
                src="/sidebar-logo.svg"
                width={225}
                height={33}
                alt="sidebar logo"
                priority
              />
            ) : (
              <Image
                src="/sidebar-logo2.svg"
                width={50}
                height={48}
                alt="sidebar logo"
              />
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavPenilaian items={data.penilaian} />

        <div className="flex w-full justify-center">
          <SidebarTrigger />
        </div>
      </SidebarContent>

      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
    </Sidebar>
  );
}
