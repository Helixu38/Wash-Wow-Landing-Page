import React from "react";
import Link from "next/link";
import { AppLogo } from "../ui/applogo";

export default function AdminNavbar() {
  return (
    <div className="w-full container fixed flex md:px-[58px] font-medium text-xl text-primary">
      <div className="flex items-end pt-2">
        <Link href={"/admin"}>
          <AppLogo />
        </Link>
      </div>

      <div className="flex flex-row items-end gap-4 md:gap-[68px] ml-[13px]">
        <p className="hidden md:block">Admin</p>
      </div>
    </div>
  );
}
