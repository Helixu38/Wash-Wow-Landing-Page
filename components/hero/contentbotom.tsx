import React from "react";
import Image from "next/image";

export default function ContentBottom() {
  return (
    <>
      <div className="relative flex  w-full h-[1540px]">
        <div className="ml-[263px] max-w-[560px] max-h-[144px] text-primary">
          <Image
            className="absolute mt-[59px]"
            src="/img/hero/phonewallet.png"
            alt="Hero Image"
            width={345}
            height={690}
          />
          <h2 className="text-2xl font-bold mt-[926px]">
            Giặt ở mọi nơi, tìm nơi gần bạn nhất
          </h2>
          <p className="mt-[21px] font-medium">
            Để kết nối khách hàng với các cửa hàng giặt sấy địa phương, Wash&Wow
            mang đến sự tiện lợi và hiệu quả trong việc giặt ủi với chức năng
            định vị tích hợp, ứng dụng cho phép người dùng dễ dàng tìm thấy các
            tiệm giặt ủi gần nhất, không cần tìm kiếm đâu xa.
          </p>
        </div>
        <div className="max-w-[560px] text-primary text-right mr-[255px] mt-[59px]">
          <h1 className="text-5xl font-bold">
            Trở thành đối tác?Đăng ký dễ dàng.
          </h1>

          <div className="mt-[200px] text-right">
            <h2 className="text-2xl font-bold ">
              Thu nhập dễ dàng, rút tiền nhanh chóng
            </h2>
            <p className="mt-[21px] font-medium">
              Wash&Wow không chỉ hỗ trợ khách hàng mà còn mang đến lợi ích cho
              các đối tác giặt sấy. Ứng dụng giúp đối tác dễ dàng quản lý đơn
              hàng, tăng thu nhập, và rút tiền nhanh chóng qua các phương thức
              thanh toán tiện lợi, đảm bảo quy trình minh bạch và an toàn.
            </p>
          </div>

          <Image
            className="absolute mt-[59px]"
            src="/img/hero/laundrystatusphone.png"
            alt="Hero Image"
            width={345}
            height={690}
          />
          <Image
            className="absolute right-16 mt-[59px]"
            src="/img/hero/orderphone.png"
            alt="Hero Image"
            width={345}
            height={690}
          />
        </div>
      </div>
    </>
  );
}
