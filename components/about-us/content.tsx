import React from "react";
import { Button } from "@/components/ui/button";
import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";

export default function Content() {
  return (
    <>
      <div className="flex flex-col mt-[50px] md:mt-[80px] lg:mt-[130px] justify-center mx-auto text-start text-primary px-4 md:px-8 lg:px-0 max-w-[90%] md:max-w-[800px]">
        <h1 className="font-medium text-3xl md:text-5xl lg:text-6xl">
          Xin chào, chúng tôi là{" "}
          <span className="font-extrabold">Wash&Wow</span>
        </h1>
        <p className="my-4 md:my-6 lg:my-[34px] text-sm md:text-base lg:text-lg">
          Wash&Wow là một nền tảng đa diện được thiết kế để kết nối liền mạch
          khách hàng với các cửa hàng giặt là địa phương.
        </p>
        <p className="my-4 md:my-6 lg:my-[34px] text-sm md:text-base lg:text-lg">
          Người dùng có thể kiểm tra tình trạng sẵn có của máy giặt theo thời
          gian thực, đặt dịch vụ giặt là và thanh toán an toàn trực tiếp thông
          qua ứng dụng. Ngoài ra, khách hàng có thể theo dõi tiến trình giặt của
          mình từ đầu đến cuối, đảm bảo họ biết chính xác khi nào quần áo của họ
          sẽ sẵn sàng để nhận.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-[44px] mb-8 md:mb-[61px]">
          <Button
            variant="outline"
            className="w-full md:w-[189px] h-[40px] bg-transparent border-primary hover:text-primary border-2 font-bold text-[14px] md:text-[16px] text-primary flex items-center justify-center space-x-2"
          >
            <span>Tìm hiểu thêm</span>
          </Button>

          <Button className="w-full md:w-[189px] h-[40px] text-[14px] md:text-[16px] font-bold bg-primary hover:bg-blue-800 flex items-center justify-center space-x-2">
            <IconDownload
              className="relative"
              color="white"
              size={16}
              style={{ top: "-2px" }}
            />
            <span>Tải app ngay</span>
          </Button>
        </div>
        <h1 className="font-medium text-3xl md:text-5xl lg:text-6xl text-end mb-4 md:mb-6 lg:mb-[32px]">
          <span className="font-extrabold">Sứ mệnh </span>của chúng tôi
        </h1>
        <p className="mt-4 md:mt-6 lg:mt-[32px] mb-8 md:mb-10 lg:mb-[115px] text-end text-sm md:text-base lg:text-lg">
          Người dùng có thể kiểm tra tình trạng sẵn có của máy giặt theo thời
          gian thực, đặt dịch vụ giặt là và thanh toán an toàn trực tiếp thông
          qua ứng dụng. Ngoài ra, khách hàng có thể theo dõi tiến trình giặt của
          mình từ đầu đến cuối, đảm bảo họ biết chính xác khi nào quần áo của họ
          sẽ sẵn sàng để nhận.
        </p>
      </div>
      <div className="w-full overflow-hidden mb-8 md:mb-10 lg:mb-[61px]">
        <Image
          src="/img/about us/Group 7.png"
          alt="Hero Image"
          width={1920}
          height={1080}
          unoptimized={true}
        />
      </div>
    </>
  );
}
