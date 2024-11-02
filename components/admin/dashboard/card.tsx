import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AdminCardProps {
  title: string;
  numberStat: string;
  extraTitle?: string; // Optional extra title
  extraStat?: string; // Optional extra stat
}

export function AdminCard({ title, numberStat }: AdminCardProps) {
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
    </Card>
  );
}
