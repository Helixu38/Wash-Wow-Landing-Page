"use client";
import React, { ReactNode, useEffect, useState } from "react";
import {
  NavLink,
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  IconArrowLeft,
  IconBell,
  IconBrandTabler,
  IconCalendarEvent,
  IconDeviceIpadPin,
  IconWashTemperature2,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ fullName: string; role: string } | null>(
    null,
  );

  useEffect(() => {
    const fullName = localStorage.getItem("fullName");
    const role = localStorage.getItem("role");

    if (fullName && role) {
      setUser({ fullName, role });
    }

    // Debugging log
    console.log("User state:", { fullName, role });
  }, []);

  return (
    <div
      className={cn(
        "mx-auto mt-16 flex w-full flex-1 flex-col overflow-hidden border border-neutral-200 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800 md:flex-row",
        "h-screen",
      )}
    >
      <Sidebar>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden pt-5 md:pt-0">
            <Logo user={user} />
            <div className="mt-8 flex h-[calc(100vh-6rem)] flex-col gap-2 overflow-y-auto ps-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex h-[calc(100vh-4rem)] w-full flex-1 flex-col gap-2 overflow-y-auto rounded-tl-2xl border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-neutral-900 md:p-10">
        {children}
        <Toaster />
      </div>
    </div>
  );
}

const links: NavLink[] = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: <IconBrandTabler className="h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Applications",
    href: "/admin/dashboard/applications",
    icon: <IconUsers className="h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Laundry Shop",
    href: "/admin/dashboard/laundry_shop",
    icon: <IconWashTemperature2 className="h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Orders",
    href: "/admin/dashboard/order",
    icon: <IconDeviceIpadPin className="h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Booking",
    href: "/dashboard/booking",
    icon: <IconCalendarEvent className="h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Notifications",
    href: "/dashboard/notifications",
    icon: <IconBell className="h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: <IconSettings className="h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Logout",
    href: "/",
    icon: <IconArrowLeft className="h-5 w-5 flex-shrink-0" />,
  },
];

const Logo = ({
  user,
}: {
  user: { fullName: string; role: string } | null;
}) => {
  return (
    <div className="flex items-center">
      <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full bg-black dark:bg-white md:h-10 md:w-10">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="ms-2 flex flex-col">
        <span className="line-clamp-1 text-primary opacity-70">
          {user?.fullName || "User not found"}
        </span>
        <span className="line-clamp-1 text-lg font-bold uppercase text-primary">
          {user?.role || "No role assigned"}
        </span>
      </div>
    </div>
  );
};
