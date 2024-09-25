import React from "react";
import Image from "next/image";

export default function Content() {
  return (
    <div className="relative flex  w-full h-[1244px]">
      <Image
        className="absolute top-[-120px] right-0 mr-[249px]"
        src="/img/hero/laundryphone.png"
        alt="Hero Image"
        width={345}
        height={690}
      />
      <div className="ml-[263px] mt-[50px] max-w-[560px] max-h-[144px] text-primary">
        <h1 className="text-6xl font-bold">Cần giặt quần áo? Có chúng tôi.</h1>
        <h2 className="text-2xl font-bold mt-[37px]">
          Giặt ở mọi nơi, tìm nơi gần bạn nhất
        </h2>
        <p className="mt-[21px] font-medium">
          Để kết nối khách hàng với các cửa hàng giặt sấy địa phương, Wash&Wow
          mang đến sự tiện lợi và hiệu quả trong việc giặt ủi với chức năng định
          vị tích hợp, ứng dụng cho phép người dùng dễ dàng tìm thấy các tiệm
          giặt ủi gần nhất, không cần tìm kiếm đâu xa.
        </p>
        <Image
          className="absolute mt-[55px]"
          src="/img/hero/timeslotphone.png"
          alt="Hero Image"
          width={345}
          height={690}
        />
      </div>
      <div className="ml-auto mt-[794px] max-w-[560px] text-primary text-right mr-[255px] ">
        <h2 className="text-2xl font-bold mt-[37px]">
          Linh hoạt thời gian, nhận hàng bất kỳ lúc nào
        </h2>
        <p className="mt-[21px] font-medium">
          Wash&Wow cho phép người dùng đặt lịch giặt ủi theo thời gian linh
          hoạt, dễ dàng chọn giờ giao nhận phù hợp. Bạn có thể nhận đồ giặt sạch
          vào bất kỳ lúc nào thuận tiện, mang lại sự tiện lợi tối đa.
        </p>
      </div>
    </div>
  );
}
