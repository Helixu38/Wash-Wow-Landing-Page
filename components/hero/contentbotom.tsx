import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ContentBottom() {
  return (
    <div className="flex items-center justify-center px-4 text-primary">
      <div className="flex flex-col">
        {/* Section 3 */}
        <div className="flex flex-row items-start max-w-4xl mx-auto space-x-4 p-4 mb-[19px] mt-[35px]">
          <Image
            src="/img/hero/3.png"
            alt="Hero Image"
            width={134.4}
            height={266}
            unoptimized={true}
            className="object-cover w-[134.4px] h-[266px] sm:w-[200px] sm:h-[400px] md:w-[345px] md:h-[690px]"
          />
          <div className="flex flex-col space-y-2 text-right">
            <h2 className="text-lg font-bold sm:text-4xl sm:mb-[149px] ">
              Trở thành đối tác? <br />
              Đăng ký dễ dàng.
            </h2>
            <p className="text-base font-bold sm:text-lg">
              Thu nhập dễ dàng, <br /> rút tiền nhanh chóng
            </p>
            <p className="text-sm font-medium sm:text-base sm:pl-10">
              Wash&Wow không chỉ hỗ trợ khách hàng mà còn mang đến lợi ích cho
              các đối tác giặt sấy. Ứng dụng giúp đối tác dễ dàng quản lý đơn
              hàng, tăng thu nhập, và rút tiền nhanh chóng qua các phương thức
              thanh toán tiện lợi, đảm bảo quy trình minh bạch và an toàn.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-row items-start max-w-4xl mx-auto space-x-4 p-4 mb-[234px]">
          <div className="flex flex-col small-mobile:space-y-3 text-left sm:mt-[54px] md:mt-[174px]">
            <p className="text-base font-bold sm:text-lg sm:mb-[37px] md:text-3xl">
              Theo dõi tình trạng <br /> và đơn hàng tiện lợi
            </p>
            <p className="text-sm font-medium sm:text-base md:pr-[62px]">
              Wash&Wow cung cấp cho đối tác công cụ theo dõi tình trạng và quản
              lý đơn hàng một cách tiện lợi. Đối tác có thể dễ dàng cập nhật
              trạng thái giặt sấy, quản lý các đơn hàng và phục vụ khách hàng
              hiệu quả, giúp tối ưu hóa quy trình làm việc và tăng cường chất
              lượng dịch vụ.
            </p>
            <Button className="bg-primary text-lg md:mr-[62px] md:mt-[24px] h-[45px] rounded-xl mb-[61px]">
              Đăng ký ngay
            </Button>
          </div>
          <Image
            src="/img/hero/1.png"
            alt="Hero Image"
            width={134.4}
            height={266}
            unoptimized={true}
            className="object-cover w-[134.4px] h-[266px] sm:w-[200px] sm:h-[400px] md:w-[345px] md:h-[690px] "
          />
        </div>
      </div>
    </div>
  );
}
