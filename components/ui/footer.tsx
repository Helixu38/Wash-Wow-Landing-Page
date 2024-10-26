import React from "react";
import Link from "next/link";
import { AppLogoFooter } from "../ui/applogofooter";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-primary py-8 px-4 md:px-8 lg:py-10">
      <div className="flex flex-col lg:flex-row justify-between lg:mx-[61px] lg:pt-[29px] space-y-8 lg:space-y-0">
        {/* Logo and Description */}
        <div className="flex flex-col max-w-full lg:max-w-[398px]">
          <Link href="/">
            <AppLogoFooter />
          </Link>
          <p className="font-medium text-sm text-white mt-4 lg:mt-[10px]">
            Wash&Wow là một nền tảng kết nối khách hàng với các cửa hàng giặt
            sấy địa phương. Người dùng có thể kiểm tra tình trạng sẵn có của máy
            giặt theo thời gian thực, đặt dịch vụ giặt sấy và thanh toán trực
            tiếp thông qua ứng dụng.
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-[44px] text-white">
          <div className="flex flex-col text-xl">
            <h3>Liên hệ chúng tôi tại</h3>
            <div className="flex flex-row mt-4 gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61566322670193&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/img/icon/facebook.png"
                  width={41}
                  height={41}
                  alt="facebook's logo"
                  unoptimized={true}
                />
              </Link>
              <Link
                href="https://www.instagram.com/washandwow_?igsh=MWM4NnRrbWw4c2dweA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/img/icon/instagram.png"
                  width={41}
                  height={41}
                  alt="instagram's logo"
                  unoptimized={true}
                />
              </Link>
            </div>
          </div>

          {/* Information Links */}
          <div className="flex flex-col text-xl">
            <h3>Thông tin</h3>
            <div className="text-xs font-medium mt-4 space-y-2">
              <Link href="/landing_page/question">
                <p>Câu hỏi thường gặp</p>
              </Link>
              <Link href="/landing_page/partner">
                <p>Liên hệ đăng ký đối tác</p>
              </Link>
              <p>Kênh đối tác</p>
              <Link href="/landing_page/terms-condition">
                <p>Điều khoản sử dụng dịch vụ</p>
              </Link>
            </div>
          </div>

          {/* About Us Section */}
          <div className="flex flex-col text-xl">
            <h3>Về chúng tôi</h3>
          </div>
        </div>
      </div>

      {/* Address and Contact Info */}
      <div className="mt-8 lg:mt-10 text-xs text-white text-center space-y-2 lg:px-[61px]">
        <p>
          Địa chỉ: Lô E2a-7, Đường D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
          phố Hồ Chí Minh, Việt Nam
        </p>
        <p>Điện thoại: 0813547139</p>
        <p>Email: hello.washnwow@gmail.com</p>
      </div>
    </div>
  );
}
