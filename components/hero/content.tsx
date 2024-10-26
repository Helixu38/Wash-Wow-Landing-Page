import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Content() {
  return (
    <>
      <div className="relative flex flex-col lg:flex-row w-full h-auto lg:h-[1244px] px-6 sm:px-10 lg:px-0">
        {/* Hero Image */}
        <Image
          className="absolute hidden lg:block top-[-120px] right-0 lg:mr-[249px]"
          src="/img/hero/1.png"
          alt="Hero Image"
          width={345}
          height={690}
          unoptimized={true}
        />

        {/* Main Content Text */}
        <div className="lg:ml-[263px] lg:mt-[50px] max-w-full lg:max-w-[560px] text-primary px-4 lg:px-0">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left">
            Cần giặt quần áo? Có chúng tôi.
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mt-4 sm:mt-6 text-center lg:text-left">
            Giặt ở mọi nơi, tìm nơi gần bạn nhất
          </h2>
          <p className="mt-3 sm:mt-5 lg:mt-6 font-medium text-justify lg:text-left">
            Để kết nối khách hàng với các cửa hàng giặt sấy địa phương, Wash&Wow
            mang đến sự tiện lợi và hiệu quả trong việc giặt ủi với chức năng
            định vị tích hợp, ứng dụng cho phép người dùng dễ dàng tìm thấy các
            tiệm giặt ủi gần nhất, không cần tìm kiếm đâu xa.
          </p>
          <Image
            className="mt-6 mx-auto lg:mx-0 "
            src="/img/hero/2.png"
            alt="Hero Image"
            width={345}
            height={690}
            unoptimized={true}
          />
        </div>

        {/* Secondary Content Text */}
        <div className="mt-8 lg:mt-[794px] lg:mr-[249px] lg:max-w-[560px] text-primary text-center lg:text-right px-4 lg:px-0">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mt-4 sm:mt-6">
            Linh hoạt thời gian, nhận hàng bất kỳ lúc nào
          </h2>
          <p className="mt-3 sm:mt-5 lg:mt-6 font-medium text-justify lg:text-right">
            Wash&Wow cho phép người dùng đặt lịch giặt ủi theo thời gian linh
            hoạt, dễ dàng chọn giờ giao nhận phù hợp. Bạn có thể nhận đồ giặt
            sạch vào bất kỳ lúc nào thuận tiện, mang lại sự tiện lợi tối đa.
          </p>
        </div>
      </div>
      <Separator className="w-full lg:w-[1170px] h-[1px] mx-auto mt-8 lg:ml-[135px]" />
    </>
  );
}
