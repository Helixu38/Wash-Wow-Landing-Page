import React from "react";
import Link from "next/link";
import { AppLogoFooter } from "../ui/applogofooter";

export default function Footer() {
  return (
    <div className="z-50 mx-auto flex h-[281px] bg-primary text-primary-foreground">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Main content on the left side */}
        <div className="ml-[58px] flex items-start">
          <Link
            href="/"
            className="flex flex-col items-start max-w-[300px] text-white font-medium text-sm leading-6"
          >
            <AppLogoFooter className="text-xl" />
            <div className="mt-4">
              Wash&Wow là một nền tảng kết nối khách hàng với các cửa hàng giặt
              sấy địa phương. Người dùng có thể kiểm tra tình trạng sẵn có của
              máy giặt theo thời gian thực, đặt dịch vụ giặt sấy và thanh toán
              trực tiếp thông qua ứng dụng.
            </div>
          </Link>
        </div>

        {/* Text aligned to the right and vertically centered */}
        <div className="flex items-center gap-[68px] text-white font-medium mr-[58px]">
          <div className="cursor-pointer">Liên hệ chúng tôi tại</div>
          <div className="cursor-pointer">Thông tin</div>
          <div className="cursor-pointer">Về chúng tôi</div>
        </div>
      </div>
    </div>
  );
}
