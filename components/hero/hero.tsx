import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IconDownload } from "@tabler/icons-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
      {/* Background Image */}
      <Image
        src="/img/hero/hero.png"
        alt="Hero Image"
        layout="fill"
        className="object-cover"
        unoptimized={true}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/img/hero/gradient.png"
          alt="Gradient Overlay"
          layout="fill"
          className="object-cover"
          unoptimized={true}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-10 lg:px-20 max-w-full lg:max-w-[580px] space-y-4 ml-0 sm:ml-[40px] lg:ml-[66px] mt-[80px] sm:mt-[100px]">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-medium leading-snug lg:leading-tight">
          Đặt mọi lúc, giặt mọi nơi với{" "}
          <span className="font-extrabold">Wash&Wow</span>
        </h1>
        <p className="text-white text-sm sm:text-base lg:text-lg font-normal leading-relaxed">
          Wash&Wow là một nền tảng kết nối khách hàng với các cửa hàng giặt sấy
          địa phương. Người dùng có thể kiểm tra tình trạng sẵn có của máy giặt
          theo thời gian thực, đặt dịch vụ giặt sấy và thanh toán trực tiếp
          thông qua ứng dụng.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 lg:pt-6">
          <Link href={"/landing_page/download"}>
            <Button
              variant="outline"
              className="w-full sm:w-[180px] h-[40px] bg-transparent border-primary hover:text-primary border-2 font-bold text-sm lg:text-base text-white flex items-center justify-center"
            >
              <span>Trở thành đối tác</span>
            </Button>
          </Link>

          <Link href={"/landing_page/download"}>
            <Button className="w-full sm:w-[180px] h-[40px] text-sm lg:text-base font-bold bg-primary hover:bg-blue-800 flex items-center justify-center space-x-2">
              <IconDownload className="relative" color="white" size={16} />
              <span>Tải app ngay</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
