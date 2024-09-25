import React from "react";
import Link from "next/link";
import { AppLogo } from "../ui/applogo";
import { IconQuestionMark } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <div className="z-50 mx-auto mb-8 flex h-16 w-screen bg-white text-primary-foreground">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="ml-[58px] flex items-center gap-8">
          <Link href="/">
            <AppLogo className="text-xl" />
          </Link>
        </div>
        <div className="items-center gap-[68px] sm:flex mr-[58px] text-primary font-medium">
          <div className="cursor-pointer">Tải app ngay</div>
          <div className="cursor-pointer">Về chúng tôi</div>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
            <IconQuestionMark color="white" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
