"use client";
import { IconTrendingUp } from "@tabler/icons-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart showing monthly revenue data";

const chartData = [
  { month: "January", revenue: 50, estimatedRevenue: 55 },
  { month: "February", revenue: 60, estimatedRevenue: 65 },
  { month: "March", revenue: 58, estimatedRevenue: 62 },
  { month: "April", revenue: 64, estimatedRevenue: 70 },
  { month: "May", revenue: 70, estimatedRevenue: 75 },
  { month: "June", revenue: 65, estimatedRevenue: 68 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#045AD0", // Primary blue color for Revenue
  },
  estimatedRevenue: {
    label: "Estimated Revenue",
    color: "#A5CBFF", // Light blue color for Estimated Revenue
  },
} satisfies ChartConfig;

export function AdminChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Revenue 2024</CardTitle>
        <CardDescription>Amount in million VND</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="revenue" fill="#045AD0" radius={4} />{" "}
            {/* Primary blue for revenue */}
            <Bar dataKey="estimatedRevenue" fill="#A5CBFF" radius={4} />{" "}
            {/* Light blue for estimated revenue */}
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by<span className="text-green-500">5.2%</span> this month{" "}
          <IconTrendingUp className="h-4 w-4 text-green-500" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total revenue and estimated revenue for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
