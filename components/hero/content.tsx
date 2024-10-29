import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Content() {
  return (
    <div className="flex items-center justify-center px-4 text-primary">
      <div className="flex flex-col">
        <div className="flex flex-col small-mobile:flex-row items-center max-w-4xl mx-auto space-y-6 small-mobile:space-y-0 small-mobile:space-x-8 p-4">
          <div className="flex flex-col space-y-4 text-center small-mobile:text-left">
            <h2 className="small-mobile:text-xl text-2xl font-bold ">
              Cần giặt quần áo? Có chúng tôi.
            </h2>
            <p className="small-mobile:text-base text-lg font-bold">
              Giặt ở mọi nơi, tìm nơi gần bạn nhất
            </p>
            <p className="small-mobile:text-xs text-base font-medium">
              Để kết nối khách hàng với các cửa hàng giặt sấy địa phương,
              Wash&Wow mang đến sự tiện lợi và hiệu quả trong việc giặt ủi với
              chức năng định vị tích hợp, ứng dụng cho phép người dùng dễ dàng
              tìm thấy các tiệm giặt ủi gần nhất, không cần tìm kiếm đâu xa.
            </p>
          </div>
          <Image
            src="/img/hero/5.png"
            alt="Hero Image"
            width={345}
            height={690}
            unoptimized={true}
            className="object-cover w-[134.4px] h-[266px] small-mobile:w-[200px] small-mobile:h-[400px] md:w-[345px] md:h-[690px]"
          />
        </div>
        <div className="flex flex-col small-mobile:flex-row items-center max-w-4xl mx-auto space-y-6 small-mobile:space-y-0 small-mobile:space-x-8 p-4">
          <Image
            src="/img/hero/5.png"
            alt="Hero Image"
            width={345}
            height={690}
            unoptimized={true}
            className="object-cover w-[134.4px] h-[266px] small-mobile:w-[200px] small-mobile:h-[400px] md:w-[345px] md:h-[690px]"
          />
          <div className="flex flex-col space-y-4 text-center small-mobile:text-right">
            <h2 className="small-mobile:text-xl text-2xl font-bold ">
              Cần giặt quần áo? Có chúng tôi.
            </h2>
            <p className="small-mobile:text-base text-lg font-bold">
              Giặt ở mọi nơi, tìm nơi gần bạn nhất
            </p>
            <p className="small-mobile:text-xs text-base font-medium">
              Để kết nối khách hàng với các cửa hàng giặt sấy địa phương,
              Wash&Wow mang đến sự tiện lợi và hiệu quả trong việc giặt ủi với
              chức năng định vị tích hợp, ứng dụng cho phép người dùng dễ dàng
              tìm thấy các tiệm giặt ủi gần nhất, không cần tìm kiếm đâu xa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
