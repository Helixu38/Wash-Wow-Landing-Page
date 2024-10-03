import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconQuestionMark } from "@tabler/icons-react";
import { IconChevronDown } from "@tabler/icons-react";

export default function Content() {
  return (
    <>
      <div className="w-full my-[63px] text-center text-primary font-bold text-6xl">
        <h1>Câu hỏi thường gặp</h1>
      </div>
      <div className="w-full text-center justify-center content-center text-3xl font-bold text-primary">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <ul className="flex flex-row justify-center items-center cursor-pointer w-[800px] mx-auto mb-[35px]">
              <div className="border-primary border-3 rounded-full flex justify-center items-center">
                <IconQuestionMark className="text-primary flex-shrink-0" />
              </div>
              <span className="ml-[28.5px] flex-grow text-left">
                Quy trình giặt ủi đặt qua ứng dụng được hoạt động như thế nào?
              </span>
              <IconChevronDown className="text-primary flex-shrink-0" />
            </ul>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>Trả lời</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <ol className="list-none pl-5">
                <li>
                  Bước 1: Khách hàng chọn cửa hàng giặt sấy gần vị trí của mình.
                </li>
                <li>Bước 2: Chọn cửa hàng mà mình muốn đặt.</li>
                <li>Bước 3: Chọn khung giờ và máy trống để sử dụng.</li>
                <li>Bước 4: Điền các thông tin cần thiết vào mẫu.</li>
                <li>Bước 5: Thanh toán qua ứng dụng để hoàn tất đặt đơn.</li>
              </ol>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <ul className="flex flex-row justify-center items-center cursor-pointer w-[800px] mx-auto mb-[35px]">
              <div className="border-primary border-3 rounded-full flex justify-center items-center">
                <IconQuestionMark className="text-primary" />
              </div>
              <span className="ml-[28.5px] flex-grow text-left">
                [Quý đối tác] Quy trình nhận đơn và thanh toán
              </span>
              <IconChevronDown className="text-primary" />
            </ul>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>Trả lời</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <ol className="list-none pl-5">
                <li>Bước 1: Thông báo sẽ được chuyển đến quý đối tác.</li>
                <li>
                  Bước 2: Quý đối tác nhấn vào thông báo đơn và xác nhận thông
                  tin đặt thời gian.
                </li>
                <li>Bước 3: Khách hàng mang quần áo đến.</li>
                <li>
                  Bước 4: Quý đối tác nhận và tiến hành giặt ủi cho khách hàng.
                </li>
                <li>Bước 5: Quý đối tác cập nhật trạng thái đơn hàng.</li>
                <li>Bước 6: Khách hàng đến và nhận quần áo.</li>
              </ol>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <ul className="flex flex-row justify-center items-center cursor-pointer w-[800px] mx-auto mb-[35px]">
              <div className="border-primary border-3 rounded-full flex justify-center items-center">
                <IconQuestionMark className="text-primary" />
              </div>
              <span className="ml-[28.5px] flex-grow text-left">
                Mất bao lâu mới nhận được quần áo?
              </span>
              <IconChevronDown className="text-primary" />
            </ul>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>Trả lời</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Với việc hứa hẹn sẽ nâng cao và thúc đẩy quy trình, Wash&Wow mang
              đến cho quý khách hàng thời gian nhận quần áo trong vòng 4 tiếng
              kể từ khi gửi đồ
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <ul className="flex flex-row justify-center items-center cursor-pointer w-[800px] mx-auto mb-[63px]">
              <div className="border-primary border-3 rounded-full flex justify-center items-center">
                <IconQuestionMark className="text-primary" />
              </div>
              <span className="ml-[28.5px] flex-grow text-left">
                Các phương thức thanh toán của Wash&Wow
              </span>
              <IconChevronDown className="text-primary" />
            </ul>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>Trả lời</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Hiện tại Wash&Wow cho phép khách hàng có thể thanh toán qua các
              cổng thanh toán điện tử như: E-banking, Momo, Zalopay
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
