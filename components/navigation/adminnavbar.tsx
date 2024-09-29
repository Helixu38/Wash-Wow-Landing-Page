import React from "react";
import Link from "next/link";
import { AppLogo } from "../ui/applogo";

export default function AdminNavbar() {
  return (
    <div className="w-full h-[88px] flex flex-row items-end px-4 md:px-[58px] font-medium text-xl text-primary">
      <div className="flex items-end">
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
