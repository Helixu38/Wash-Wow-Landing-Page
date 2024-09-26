import React from "react";
import { Button } from "../ui/button";
import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";

export default function Content() {
  return (
    <div className="w-full mt-[81px] text-center text-primary font-medium text-6xl">
      <h1>
        Tải <span className="font-extrabold">Wash&Wow</span> ngay
      </h1>
      <h1>
        và nhận nhiều <span className="font-extrabold">ưu đãi</span>
      </h1>

      <div className="relative mt-[49px] w-full h-[838px] bg-cover bg-[url('/img/download/download.png')]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#045AD0] to-transparent opacity-30 z-1"></div>

        <div className="absolute inset-0 flex items-center ml-[101px]">
          <Button className="px-6 py-3 bg-white text-primary font-bold rounded-3xl shadow-lg hover:bg-gray-100 w-[180px] h-[46px] md:w-[348px] md:h-[90px] flex items-center justify-start z-10">
            <IconDownload
              className="relative"
              color="#045AD0"
              size={32}
              style={{ top: "-2px" }}
            />
            <p className="text-xl md:text-3xl font-bold md:ml-[20px]">
              Tải về ngay{" "}
              <span className="text-xl md:text-3xl  font-normal">(.apk)</span>
            </p>
          </Button>
        </div>

        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            className="z-10 w-[300px] h-[606px] md:w-[345px] md:h-[690px]"
            src="/img/hero/1.png"
            alt="Hero Image"
            width={345}
            height={690}
            sizes="(max-width: 640px) 300px, 606px"
            unoptimized={true}
          />
        </div>
      </div>
    </div>
  );
}
