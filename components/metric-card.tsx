"use client";

import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Line, LineChart } from "recharts";
import { ArrowUp, ArrowDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  chartData?: { value: number }[];
  percentageChange?: number;
}

export function MetricCard({ title, value, chartData, percentageChange }: MetricCardProps) {
  // Generate default chart data if not provided
  const defaultChartData = chartData || Array.from({ length: 7 }, (_, i) => ({
    value: Math.random() * 100 + 50,
  }));

  const chartConfig = {
    value: {
      label: title,
      color: "#2563eb", // blue-600
    },
  };

  const isPositive = percentageChange !== undefined && percentageChange >= 0;
  const changeColor = isPositive ? "text-green-600" : "text-red-600";
  const changeBgColor = isPositive ? "bg-green-50" : "bg-red-50";

  return (
    <Card className="bg-white border-gray-200 shadow-sm">
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm text-gray-600 font-medium">{title}</h3>
          {percentageChange !== undefined && (
            <div className={`flex items-center gap-1 px-2 py-1 rounded-md ${changeBgColor}`}>
              {isPositive ? (
                <ArrowUp className={`w-3 h-3 ${changeColor}`} />
              ) : (
                <ArrowDown className={`w-3 h-3 ${changeColor}`} />
              )}
              <span className={`text-xs font-semibold ${changeColor}`}>
                {Math.abs(percentageChange).toFixed(1)}%
              </span>
            </div>
          )}
        </div>
        <div className="text-4xl font-bold text-blue-900">{value}</div>
        <div className="h-[60px] w-full">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <LineChart
              data={defaultChartData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <ChartTooltip
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="rgb(37, 99, 235)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </div>
    </Card>
  );
}

