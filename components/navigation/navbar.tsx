"use client";
import React from "react";
import Link from "next/link";
import { AppLogo } from "../ui/applogo";
import { IconQuestionMark } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <div className="w-full h-[88px] flex flex-row justify-between items-center px-4 md:px-[58px] font-medium text-xl text-primary shadow-md">
      <div className="flex items-center">
        <Link href="/">
          <AppLogo />
        </Link>
      </div>

      <div className="flex flex-row items-center gap-4 md:gap-[68px] font-medium small-mobile:text-lg">
        <Link href={"/landing_page/download"}>
          <p className="md:block">Tải app ngay</p>
        </Link>
        <Link href={"/landing_page/about-us"}>
          <p className=" md:block">Về chúng tôi</p>
        </Link>
        <Link href={"/landing_page/question"}>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
            <IconQuestionMark color="white" size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
}
