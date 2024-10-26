import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconArrowNarrowDown, IconArrowNarrowUp } from "@tabler/icons-react";

interface AdminCardProps {
  title: string;
  numberStat: string;
  growthStat: string;
  growthBool: boolean; // true for up, false for down
}

export function AdminCard({
  title,
  numberStat,
  growthStat,
  growthBool,
}: AdminCardProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-black font-normal text-xl">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-[#045AD0] font-extrabold text-5xl">
        {numberStat}
      </CardContent>
      <CardFooter className="flex items-center gap-2 text-gray-600">
        {growthBool ? (
          <div className="flex items-center text-green-500">
            <IconArrowNarrowUp />
            <p>
              {growthStat}{" "}
              <span className="text-gray-400">from last month</span>
            </p>
          </div>
        ) : (
          <div className="flex items-center text-red-500">
            <IconArrowNarrowDown />
            <p>
              {growthStat}{" "}
              <span className="text-gray-400">from last month</span>
            </p>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
