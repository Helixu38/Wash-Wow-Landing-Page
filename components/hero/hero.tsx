import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IconDownload } from "@tabler/icons-react";

export default function Hero() {
  return (
    <div className="relative w-screen h-[500px]">
      <Image
        src="/img/hero/hero.png"
        alt="Hero Image"
        layout="fill"
        className="xl:bg-cover"
        unoptimized={true}
      />

      <div className="absolute inset-0">
        <Image
          src="/img/hero/gradient.png"
          alt="Gradient Overlay"
          layout="fill"
          unoptimized={true}
        />
      </div>

      <div className="absolute inset-0 flex-col items-start justify-start max-h-[144px] max-w-[580px] ml-[66px] mt-[100px] space-y-4">
        <h1 className="text-white text-4xl sm:text-5xl font-medium leading-10">
          Đặt mọi lúc, giặt mọi nơi với{" "}
          <span className="font-extrabold">Wash&Wow</span>
        </h1>
        <p className="text-white text-base sm:text-lg font-normal leading-6">
          Wash&Wow là một nền tảng kết nối khách hàng với các cửa hàng giặt sấy
          địa phương. Người dùng có thể kiểm tra tình trạng sẵn có của máy giặt
          theo thời gian thực, đặt dịch vụ giặt sấy và thanh toán trực tiếp
          thông qua ứng dụng.
        </p>

        <div className="flex space-x-[46px] pt-[25px]">
          <Button
            variant="outline"
            className="w-[189px] h-[40px] bg-transparent border-primary hover:text-primary border-2 font-bold text-[16px] text-white flex items-center justify-center space-x-2"
          >
            <span>Trở thành đối tác</span>
          </Button>

          <Button className="w-[189px] h-[40px] text-[16px] font-bold bg-primary hover:bg-blue-800 flex items-center justify-center space-x-2">
            <IconDownload
              className="relative"
              color="white"
              size={16}
              style={{ top: "-2px" }}
            />
            <span>Tải app ngay</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
