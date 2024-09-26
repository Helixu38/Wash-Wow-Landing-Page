import React from "react";
import { Button } from "@/components/ui/button";
import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";

export default function Content() {
  return (
    <>
      <div className="flex flex-col mt-[130px] justify-center mx-auto text-start text-primary max-w-[800px]">
        <h1 className="font-medium text-6xl">
          Xin chào, chúng tôi là{" "}
          <span className="font-extrabold">Wash&Wow</span>
        </h1>
        <p className="my-[34px]">
          Wash&Wow là một nền tảng đa diện được thiết kế để kết nối liền mạch
          khách hàng với các cửa hàng giặt là địa phương.
        </p>
        <p className="my-[34px]">
          Người dùng có thể kiểm tra tình trạng sẵn có của máy giặt theo thời
          gian thực, đặt dịch vụ giặt là và thanh toán an toàn trực tiếp thông
          qua ứng dụng. Ngoài ra, khách hàng có thể theo dõi tiến trình giặt của
          mình từ đầu đến cuối, đảm bảo họ biết chính xác khi nào quần áo của họ
          sẽ sẵn sàng để nhận.
        </p>
        <div className="flex flex-row gap-[44px] mb-[61px]">
          <Button
            variant="outline"
            className="w-[189px] h-[40px] bg-transparent border-primary hover:text-primary border-2 font-bold text-[16px] text-primary flex items-center justify-center space-x-2"
          >
            <span>Tìm hiểu thêm</span>
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
        <h1 className="font-medium text-6xl text-end mb-[32px]">
          <span className="font-extrabold">Sứ mệnh </span>của chúng tôi
        </h1>
        <p className="mt-[32px] mb-[115px] text-end">
          Người dùng có thể kiểm tra tình trạng sẵn có của máy giặt theo thời
          gian thực, đặt dịch vụ giặt là và thanh toán an toàn trực tiếp thông
          qua ứng dụng. Ngoài ra, khách hàng có thể theo dõi tiến trình giặt của
          mình từ đầu đến cuối, đảm bảo họ biết chính xác khi nào quần áo của họ
          sẽ sẵn sàng để nhận.
        </p>
      </div>
      <Image
        className="mb-[61px]"
        src="/img/about us/Group 7.png"
        alt="Hero Image"
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
        unoptimized={true}
      />
    </>
  );
}
