import React from "react";
import Link from "next/link";
import { AppLogoFooter } from "../ui/applogofooter";
import Image from "next/image";

export default function Footer() {
  return (
    <div className=" bg-primary">
      <div className="flex flex-row justify-between md:gap-5">
        <div className="flex flex-col md:mt-[21px] md:ml-[51px] small-mobile:mt-[29px] small-mobile:ml-[18px]">
          <Link href={"/"}>
            <AppLogoFooter></AppLogoFooter>
          </Link>
          <p className="font-medium text-white text-base pr-10 md:mt-[10px] small-mobile:mt-[20px]">
            Wash&Wow là một nền tảng kết nối khách hàng với các cửa hàng giặt{" "}
            <br /> sấy địa phương. Người dùng có thể kiểm tra tình trạng sẵn có
            của <br /> máy giặt theo thời gian thực, đặt dịch vụ giặt sấy và
            thanh toán trực <br /> tiếp thông qua ứng dụng.
          </p>
        </div>
        <div className="min-w-[158px] flex flex-row small-mobile:mr-[18px] small-mobile:flex-col small-mobile:mt-[29px] md:mt-[21px] md:mr-[51px] gap-[41px] font-medium text-white text-xl">
          <div className="flex flex-col">
            <p className="mb-2">Liên hệ chúng tôi tại</p>
            <div className="flex flex-row gap-[20px]">
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
          <div className="flex flex-col">
            <p>Thông tin</p>
            <div className="text-base">
              <Link href="/landing_page/question">
                <p className="my-2">Câu hỏi thường gặp</p>{" "}
              </Link>
              <Link href="/landing_page/partner">
                <p className="mb-2">Liên hệ đăng ký đối tác</p>{" "}
              </Link>
              <p className="mb-2">Kênh đối tác</p> {/* Add margin-bottom */}
              <Link href="/landing_page/terms-condition">
                <p>Điều khoản sử dụng dịch vụ</p>{" "}
              </Link>
            </div>
          </div>
          <div className="flex flex-col text-xl">
            <p>Về chúng tôi</p>
          </div>
        </div>
      </div>
      <div className="text-center text-white font-medium mt-[102px]">
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
