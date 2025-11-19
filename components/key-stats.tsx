"use client";

import { useState, useMemo } from "react";
import { MetricCard } from "./metric-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Generate mock chart data that varies over time
// Uses a deterministic seed based on baseValue to ensure consistent charts
function generateChartData(baseValue: number, days: number = 7) {
  // Use baseValue as a seed for deterministic randomness
  const seed = baseValue % 1000;

  return Array.from({ length: days }, (_, i) => {
    // Create a trend with some variation
    const trend = (i / days) * 0.15; // Slight upward trend
    // Deterministic "random" variation based on index and seed
    const variation =
      Math.sin((i + seed) * 0.5) * 0.2 + Math.cos((i * 2 + seed) * 0.3) * 0.1;
    const value = baseValue * (1 + trend + variation);
    return { value: Math.max(0, Math.round(value)) };
  });
}

// Calculate percentage change from first to last value in chart data
function calculatePercentageChange(chartData: { value: number }[]): number {
  if (chartData.length < 2) return 0;
  const firstValue = chartData[0].value;
  const lastValue = chartData[chartData.length - 1].value;
  if (firstValue === 0) return 0;
  return ((lastValue - firstValue) / firstValue) * 100;
}

export function KeyStats() {
  const [dateRange, setDateRange] = useState("30");

  // Determine number of data points based on date range
  const getDataPoints = (range: string) => {
    switch (range) {
      case "7":
        return 7;
      case "30":
        return 7; // Show weekly data points for 30 days
      case "90":
        return 12; // Show bi-weekly data points for 90 days
      case "365":
        return 12; // Show monthly data points for a year
      default:
        return 7;
    }
  };

  const dataPoints = getDataPoints(dateRange);

  // Generate different chart data for each metric based on selected date range
  // Use useMemo to ensure data only regenerates when dateRange changes
  const agenticActionsData = useMemo(
    () => generateChartData(4500, dataPoints),
    [dataPoints]
  );
  const searchImpressionsData = useMemo(
    () => generateChartData(280000, dataPoints),
    [dataPoints]
  );
  const ctaClicksData = useMemo(
    () => generateChartData(1050, dataPoints),
    [dataPoints]
  );
  const pageViewsData = useMemo(
    () => generateChartData(127000, dataPoints),
    [dataPoints]
  );

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gray-700">Your key stats for the</span>
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[140px] h-auto py-1 px-2 border-none shadow-none text-blue-600 hover:text-blue-700 font-medium">
              <SelectValue>
                {dateRange === "7" && "last 7 days"}
                {dateRange === "30" && "last 30 days"}
                {dateRange === "90" && "last 90 days"}
                {dateRange === "365" && "last year"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">last 7 days</SelectItem>
              <SelectItem value="30">last 30 days</SelectItem>
              <SelectItem value="90">last 90 days</SelectItem>
              <SelectItem value="365">last year</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <a
          href="#"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          + Add Stats
        </a>
      </div>

      <div className="grid grid-cols-4 gap-3">
        <MetricCard
          title="Agentic Actions"
          value="4.5K"
          chartData={agenticActionsData}
          percentageChange={calculatePercentageChange(agenticActionsData)}
        />
        <MetricCard
          title="Google Search Impressions"
          value="1.94M"
          chartData={searchImpressionsData}
          percentageChange={calculatePercentageChange(searchImpressionsData)}
        />
        <MetricCard
          title="CTA Clicks"
          value="7.3K"
          chartData={ctaClicksData}
          percentageChange={calculatePercentageChange(ctaClicksData)}
        />
        <MetricCard
          title="Page Views"
          value="892K"
          chartData={pageViewsData}
          percentageChange={calculatePercentageChange(pageViewsData)}
        />
      </div>

      <div className="flex items-center justify-end">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Updated 30 minutes ago</span>
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Refresh
          </a>
        </div>
      </div>
    </div>
  );
}
