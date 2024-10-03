import {
  NavLink,
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  IconArrowLeft,
  IconBell,
  IconBrandTabler,
  IconCalendarEvent,
  IconDeviceIpadPin,
  IconPlant,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
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
      </div>
    </div>
  );
}

const links: NavLink[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <IconBrandTabler className="h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Users",
    href: "/dashboard/users",
    icon: <IconUsers className="h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Crops",
    href: "/dashboard/crops",
    icon: <IconPlant className="h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Orders",
    href: "/dashboard/orders",
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
    href: "/logout",
    icon: <IconArrowLeft className="h-5 w-5 flex-shrink-0" />,
  },
];
