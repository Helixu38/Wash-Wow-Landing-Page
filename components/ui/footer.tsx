import React from "react";
import Link from "next/link";
import { AppLogoFooter } from "../ui/applogofooter";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full h-[313px] bg-primary">
      <div className="flex flex-row justify-between mx-[61px] pt-[29px]">
        <div className="flex flex-col max-w-[398px]">
          <Link href="/">
            <AppLogoFooter></AppLogoFooter>
          </Link>
          <p className="font-medium text-sm text-white mt-[10px]">
            Wash&Wow là một nền tảng kết nối khách hàng với các cửa hàng giặt
            sấy địa phương. Người dùng có thể kiểm tra tình trạng sẵn có của máy
            giặt theo thời gian thực, đặt dịch vụ giặt sấy và thanh toán trực
            tiếp thông qua ứng dụng.
          </p>
        </div>
        <div className="flex flex-row gap-[44px]">
          <div className="flex flex-col text-xl text-white">
            <h3>Liên hệ chúng tôi tại</h3>
            <div className="flex flex-row mt-[7px] gap-[20px]">
              <Link
                href={
                  "https://www.facebook.com/profile.php?id=61566322670193&mibextid=ZbWKwL"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/img/icon/facebook.png"
                  width={41}
                  height={41}
                  alt="facebook's logo"
                  unoptimized={true}
                ></Image>
              </Link>
              <Link
                href={
                  "https://www.instagram.com/washandwow_?igsh=MWM4NnRrbWw4c2dweA=="
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/img/icon/instagram.png"
                  width={41}
                  height={41}
                  alt="facebook's logo"
                  unoptimized={true}
                ></Image>
              </Link>
            </div>
          </div>
          <div className="flex flex-col text-xl text-white">
            <h3>Thông tin</h3>
            <div className="text-xs font-medium mt-[7px]">
              <Link href={"/question"}>
                <p>Câu hỏi thường gặp</p>
              </Link>
              <Link href={"/partner"}>
                <p className="mt-[6px]">Liên hệ đăng ký đối tác</p>
              </Link>
              <p className="mt-[6px]">Kênh đối tác</p>
              <Link href={"/terms-condition"}>
                <p className="mt-[6px]">Điều khoản sử dụng dịch vụ</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col text-xl text-white">
            <h3>Về chúng tôi</h3>
          </div>
        </div>
      </div>
      <div className="mt-[81px] text-xs text-white text-center">
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
