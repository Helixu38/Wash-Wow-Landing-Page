import React from "react";
import Image from "next/image";

export default function ContentBottom() {
  return (
    <div className="flex items-center justify-center px-4 text-primary">
      <div className="flex flex-col">
        {/* Section 3 */}
        <div className="flex flex-row items-center max-w-4xl mx-auto space-x-4 p-4">
          <Image
            src="/img/hero/3.png"
            alt="Hero Image"
            width={134.4}
            height={266}
            unoptimized={true}
            className="object-cover w-[134.4px] h-[266px] sm:w-[200px] sm:h-[400px] md:w-[345px] md:h-[690px]"
          />
          <div className="flex flex-col space-y-2 text-right">
            <h2 className="text-lg font-bold sm:text-2xl">
              Trở thành đối tác? <br />
              Đăng ký dễ dàng.
            </h2>
            <p className="text-base font-bold sm:text-lg">
              Thu nhập dễ dàng, <br /> rút tiền nhanh chóng
            </p>
            <p className="text-sm font-medium sm:text-base">
              Wash&Wow không chỉ hỗ trợ khách hàng mà còn mang đến lợi ích cho
              các đối tác giặt sấy. Ứng dụng giúp đối tác dễ dàng quản lý đơn
              hàng, tăng thu nhập, và rút tiền nhanh chóng qua các phương thức
              thanh toán tiện lợi, đảm bảo quy trình minh bạch và an toàn.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-row  max-w-4xl mx-auto space-x-4 p-4">
          <Image
            src="/img/hero/2.png"
            alt="Hero Image"
            width={134.4}
            height={266}
            unoptimized={true}
            className="object-cover w-[134.4px] h-[266px] sm:w-[200px] sm:h-[400px] md:w-[345px] md:h-[690px]"
          />
          <div className="flex flex-col space-y-2 text-right max-w-xs sm:max-w-full justify-end">
            <h2 className="text-lg font-bold sm:text-2xl">
              Linh hoạt thời gian, <br /> nhận hàng bất kỳ lúc nào.
            </h2>
            <p className="text-sm font-medium sm:text-base">
              Wash&Wow cho phép người dùng đặt lịch giặt ủi theo thời gian linh
              hoạt, dễ dàng chọn giờ giao nhận phù hợp. Bạn có thể nhận đồ giặt
              sạch vào bất kỳ lúc nào thuận tiện, mang lại sự tiện lợi tối đa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
