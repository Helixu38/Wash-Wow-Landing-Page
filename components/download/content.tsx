"use client";
import React from "react";
import { Button } from "../ui/button";
import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";

export default function Content() {
  const handleDownload = () => {
    const fileUrl = "/file/app-debug.apk"; // Replace with your actual file URL
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "WashAndWow.apk"; // You can set a custom file name here
    link.click();
  };

  return (
    <div className="w-full mt-6 sm:mt-10 lg:mt-20 text-center text-primary">
      <div className="px-4 max-w-7xl mx-auto">
        <h1 className="font-medium text-2xl sm:text-4xl lg:text-6xl space-y-2">
          <div>
            Tải <span className="font-extrabold">Wash&Wow</span> ngay
          </div>
          <div>
            và nhận nhiều <span className="font-extrabold">ưu đãi</span>
          </div>
        </h1>
      </div>

      <div className="relative mt-6 sm:mt-10 lg:mt-12 w-full h-[400px] sm:h-[400px] lg:h-[600px] xl:h-[838px] mb-[172px]">
        <Image
          src="/img/download/download.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#045AD0] to-transparent opacity-30 z-1"></div>

        <div className="absolute inset-0 flex items-center justify-center sm:justify-start px-4 sm:px-8 lg:px-16 xl:px-[101px] max-w-7xl mx-auto left-0 right-0">
          <Button
            onClick={handleDownload}
            className="px-3 py-2 sm:px-4 lg:px-6 bg-white text-primary font-bold rounded-3xl shadow-lg hover:bg-gray-100 small-mobile:mr-[160px] sm:w-auto h-[40px] sm:h-[46px] lg:h-[60px] xl:h-[90px] flex items-center justify-center small-mobile:justify-start sm:justify-start z-10"
          >
            <IconDownload className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            <p className="text-base sm:text-lg lg:text-2xl xl:text-3xl font-bold ml-2 sm:ml-3 lg:ml-4">
              Tải về ngay{" "}
              <span className="text-sm sm:text-base lg:text-xl xl:text-3xl font-normal">
                (.apk)
              </span>
            </p>
          </Button>
        </div>

        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            className="small-mobile:ml-[180px] z-10 w-[150px] sm:w-[180px] lg:w-[300px] xl:w-[345px] h-auto min-[320px]:ml-[150px] max-[425px]:ml-[150px]"
            src="/img/hero/1.png"
            alt="Hero Image"
            width={345}
            height={690}
            sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, (max-width: 1280px) 300px, 345px"
            priority
          />
        </div>
      </div>
    </div>
  );
}
