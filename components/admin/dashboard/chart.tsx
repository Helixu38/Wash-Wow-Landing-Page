// AdminChart.tsx
import { IconTrendingUp, IconTrendingDown } from "@tabler/icons-react";
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

interface MonthlyRevenueGrowth {
  month: string;
  revenue: number;
  growthPercentage: number;
}

interface AdminChartProps {
  monthlyRevenueGrowth: MonthlyRevenueGrowth[];
}

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

export function AdminChart({ monthlyRevenueGrowth }: AdminChartProps) {
  const chartData = monthlyRevenueGrowth.map((item) => ({
    month: item.month.slice(0, 7), // Format month as YYYY-MM
    revenue: item.revenue,
    estimatedRevenue: item.revenue * 1.1, // Example estimated revenue calculation
  }));

  // Get the latest growth percentage from the last month's data
  const latestGrowth =
    monthlyRevenueGrowth[monthlyRevenueGrowth.length - 1]?.growthPercentage;

  // Determine display text based on growth percentage
  const growthText =
    latestGrowth !== undefined
      ? `Trending ${latestGrowth >= 0 ? "up" : "down"} by ${Math.abs(latestGrowth).toFixed(2)}% this month`
      : "No growth data available";

  // Determine the number of months and adjust the footer text accordingly
  const monthCount = monthlyRevenueGrowth.length;
  const footerText =
    monthCount > 0
      ? `Showing total revenue and estimated revenue for the last ${monthCount} month${monthCount > 1 ? "s" : ""}`
      : "No data available";

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
              tickFormatter={(value) => value.slice(5, 7)} // Display only month
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="revenue" fill="#045AD0" radius={4} />
            <Bar dataKey="estimatedRevenue" fill="#A5CBFF" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {latestGrowth !== undefined && (
            <>
              {latestGrowth >= 0 ? (
                <>
                  {growthText}
                  <IconTrendingUp className="h-4 w-4 text-green-500" />
                </>
              ) : (
                <>
                  {growthText}
                  <IconTrendingDown className="h-4 w-4 text-red-500" />
                </>
              )}
            </>
          )}
        </div>
        <div className="leading-none text-muted-foreground">{footerText}</div>
      </CardFooter>
    </Card>
  );
}
