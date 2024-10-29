import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Content() {
  return (
    <div className="flex items-center justify-center px-4 text-primary">
      <div className="flex flex-col">
        {/* Section 1 */}
        <div className="flex flex-row items-start max-w-4xl mx-auto space-x-4 p-4">
          <div className="flex flex-col small-mobile:space-y-2 text-left sm:mt-[54px]">
            <h2 className="text-lg font-bold sm:mb-[37px] sm:text-4xl">
              Cần giặt quần áo? <br /> Có chúng tôi.
            </h2>
            <p className="text-base font-bold sm:text-lg sm:mb-[37px]">
              Giặt ở mọi nơi, tìm nơi gần bạn nhất
            </p>
            <p className="text-sm font-medium sm:text-base">
              Để kết nối khách hàng với các cửa hàng giặt sấy địa phương,
              Wash&Wow mang đến sự tiện lợi và hiệu quả trong việc giặt ủi với
              chức năng định vị tích hợp, ứng dụng cho phép người dùng dễ dàng
              tìm thấy các tiệm giặt ủi gần nhất, không cần tìm kiếm đâu xa.
            </p>
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

        {/* Section 2 */}
        <div className="flex flex-row  max-w-4xl mx-auto space-x-4 p-4">
          <Image
            src="/img/hero/2.png"
            alt="Hero Image"
            width={134.4}
            height={266}
            unoptimized={true}
            className="object-cover w-[134.4px] h-[266px] sm:w-[200px] sm:h-[400px] md:w-[345px] md:h-[690px]"
          />
          <div className="flex flex-col space-y-2 text-right max-w-xs sm:max-w-full justify-end sm:mb-[174px]">
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

        <Separator className="w-full my-10" />
      </div>
    </div>
  );
}
