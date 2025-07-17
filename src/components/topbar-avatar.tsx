"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconBell, IconDoorExit } from "@tabler/icons-react";
import { CircleUser } from "lucide-react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

export default function TopbarAvatar() {
  function handleLogout() {
    signOut({
      redirectTo: "/",
    });
  }

  return (
    <div className="flex gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-2 items-center">
          <h1 className="hidden md:block font-semibold text-sm">
            Akun SuperAdmin
          </h1>
          <Avatar className="size-8">
            <AvatarImage
              src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png"
              alt="Hallie Richards"
            />
            <AvatarFallback className="text-xs">HR</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <CircleUser />
            Profil
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <IconDoorExit />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button size="icon" variant="ghost">
        <IconBell />
      </Button>
    </div>
  );
}
