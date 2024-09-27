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
                <IconQuestionMark className="text-primary" />
              </div>
              <span className="ml-[28.5px] flex-grow text-left">
                Quy trình giặt ủi đặt qua ứng dụng được hoạt động như thế nào?
              </span>
              <IconChevronDown className="text-primary" />
            </ul>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>Trả lời</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Quy trình giặt ủi được hoạt động bằng cách bạn đặt đơn qua ứng
              dụng và lựa chọn tiệm gần nhất để xử lý đơn hàng. Đội ngũ sẽ đến
              lấy đồ và giao trả đúng giờ.
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
                Quy trình nhận đơn và thanh toán dành cho đối tác như thế nào?
              </span>
              <IconChevronDown className="text-primary" />
            </ul>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>Trả lời</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Quy trình giặt ủi được hoạt động bằng cách bạn đặt đơn qua ứng
              dụng và lựa chọn tiệm gần nhất để xử lý đơn hàng. Đội ngũ sẽ đến
              lấy đồ và giao trả đúng giờ.
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
              Quy trình giặt ủi được hoạt động bằng cách bạn đặt đơn qua ứng
              dụng và lựa chọn tiệm gần nhất để xử lý đơn hàng. Đội ngũ sẽ đến
              lấy đồ và giao trả đúng giờ.
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
              Quy trình giặt ủi được hoạt động bằng cách bạn đặt đơn qua ứng
              dụng và lựa chọn tiệm gần nhất để xử lý đơn hàng. Đội ngũ sẽ đến
              lấy đồ và giao trả đúng giờ.
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
