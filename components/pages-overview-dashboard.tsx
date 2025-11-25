"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TopNav } from "@/components/top-nav";
import { MetricCard } from "@/components/metric-card";

import {
  Line,
  LineChart,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  MousePointer,
  Search,
  CheckCircle,
  ArrowUpRight,
  Star,
  Target,
  Eye,
  Info,
  Bot,
} from "lucide-react";

// Helper function to generate chart data for metric cards
function generateChartData(baseValue: number, days: number = 7) {
  const seed = baseValue % 1000;
  return Array.from({ length: days }, (_, i) => {
    const trend = (i / days) * 0.15;
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

// Mock data for the dashboard
const performanceData = [
  { month: "Jan", impressions: 1200000, clicks: 120000, ctr: 10.0 },
  { month: "Feb", impressions: 1350000, clicks: 135000, ctr: 10.0 },
  { month: "Mar", impressions: 1500000, clicks: 165000, ctr: 11.0 },
  { month: "Apr", impressions: 1650000, clicks: 181500, ctr: 11.0 },
  { month: "May", impressions: 1800000, clicks: 198000, ctr: 11.0 },
  { month: "Jun", impressions: 1940000, clicks: 194000, ctr: 10.0 },
];

const pageViewsOverTimeData = [
  { date: "Jan 1", pageViews: 28000 },
  { date: "Jan 8", pageViews: 32000 },
  { date: "Jan 15", pageViews: 35000 },
  { date: "Jan 22", pageViews: 38000 },
  { date: "Jan 29", pageViews: 42000 },
  { date: "Feb 5", pageViews: 45000 },
  { date: "Feb 12", pageViews: 48000 },
  { date: "Feb 19", pageViews: 52000 },
  { date: "Feb 26", pageViews: 55000 },
  { date: "Mar 5", pageViews: 58000 },
  { date: "Mar 12", pageViews: 62000 },
  { date: "Mar 19", pageViews: 65000 },
];

// Agentic Interactions Over Time Data
const agenticInteractionsData = [
  { date: "Jan 1", "AI Assistant": 450, "AI Crawler": 320, "AI Search": 280 },
  { date: "Jan 8", "AI Assistant": 480, "AI Crawler": 340, "AI Search": 295 },
  { date: "Jan 15", "AI Assistant": 520, "AI Crawler": 360, "AI Search": 310 },
  { date: "Jan 22", "AI Assistant": 550, "AI Crawler": 380, "AI Search": 325 },
  { date: "Jan 29", "AI Assistant": 580, "AI Crawler": 400, "AI Search": 340 },
  { date: "Feb 5", "AI Assistant": 620, "AI Crawler": 420, "AI Search": 360 },
  { date: "Feb 12", "AI Assistant": 650, "AI Crawler": 440, "AI Search": 380 },
  { date: "Feb 19", "AI Assistant": 680, "AI Crawler": 460, "AI Search": 400 },
  { date: "Feb 26", "AI Assistant": 720, "AI Crawler": 480, "AI Search": 420 },
  { date: "Mar 5", "AI Assistant": 750, "AI Crawler": 500, "AI Search": 440 },
  { date: "Mar 12", "AI Assistant": 780, "AI Crawler": 520, "AI Search": 460 },
  { date: "Mar 19", "AI Assistant": 820, "AI Crawler": 540, "AI Search": 480 },
];

// Agentic Interactions Leaderboard Data
const agenticLeaderboardData = [
  {
    pageName: "Yext Roasters - Downtown Raleigh",
    entityId: 49285,
    pageGroup: "Location",
    aiAssistant: 1250,
    aiCrawler: 890,
    aiSearch: 720,
  },
  {
    pageName: "Yext Roasters - Columbia Center",
    entityId: 46175,
    pageGroup: "Location",
    aiAssistant: 980,
    aiCrawler: 720,
    aiSearch: 580,
  },
  {
    pageName: "Yext Roasters - Greenville Plaza",
    entityId: 66063,
    pageGroup: "Location",
    aiAssistant: 850,
    aiCrawler: 620,
    aiSearch: 490,
  },
  {
    pageName: "Yext Roasters - Charlotte Uptown",
    entityId: 52341,
    pageGroup: "Location",
    aiAssistant: 720,
    aiCrawler: 540,
    aiSearch: 420,
  },
  {
    pageName: "Yext Roasters - Wilmington Waterfront",
    entityId: 58792,
    pageGroup: "Location",
    aiAssistant: 680,
    aiCrawler: 510,
    aiSearch: 390,
  },
  {
    pageName: "Yext Roasters - Clemson Campus",
    entityId: 63478,
    pageGroup: "Location",
    aiAssistant: 620,
    aiCrawler: 480,
    aiSearch: 360,
  },
  {
    pageName: "Yext Roasters - Anderson Mall",
    entityId: 71234,
    pageGroup: "Location",
    aiAssistant: 580,
    aiCrawler: 450,
    aiSearch: 340,
  },
  {
    pageName: "Yext Roasters - Franklin Square",
    entityId: 44567,
    pageGroup: "Location",
    aiAssistant: 540,
    aiCrawler: 420,
    aiSearch: 320,
  },
  {
    pageName: "Yext Roasters - Greenwood Center",
    entityId: 82345,
    pageGroup: "Location",
    aiAssistant: 510,
    aiCrawler: 390,
    aiSearch: 300,
  },
  {
    pageName: "Find a Location Near You",
    entityId: 10001,
    pageGroup: "Locator",
    aiAssistant: 2100,
    aiCrawler: 1500,
    aiSearch: 1200,
  },
  {
    pageName: "Store Locator",
    entityId: 10002,
    pageGroup: "Locator",
    aiAssistant: 1800,
    aiCrawler: 1300,
    aiSearch: 1000,
  },
  {
    pageName: "Our Coffee Story",
    entityId: 20001,
    pageGroup: "Latte",
    aiAssistant: 950,
    aiCrawler: 680,
    aiSearch: 520,
  },
  {
    pageName: "Coffee Menu",
    entityId: 20002,
    pageGroup: "Latte",
    aiAssistant: 820,
    aiCrawler: 590,
    aiSearch: 450,
  },
].map((item) => ({
  ...item,
  totalAgenticInteractions: item.aiAssistant + item.aiCrawler + item.aiSearch,
}));

// Search Impressions Leaderboard Data
const searchImpressionsLeaderboardData = [
  {
    pageName: "Yext Roasters - Downtown Raleigh",
    entityId: 49285,
    pageGroup: "Location",
    impressions: 185000,
  },
  {
    pageName: "Yext Roasters - Columbia Center",
    entityId: 46175,
    pageGroup: "Location",
    impressions: 142000,
  },
  {
    pageName: "Yext Roasters - Greenville Plaza",
    entityId: 66063,
    pageGroup: "Location",
    impressions: 118000,
  },
  {
    pageName: "Yext Roasters - Charlotte Uptown",
    entityId: 52341,
    pageGroup: "Location",
    impressions: 98000,
  },
  {
    pageName: "Yext Roasters - Wilmington Waterfront",
    entityId: 58792,
    pageGroup: "Location",
    impressions: 87000,
  },
  {
    pageName: "Yext Roasters - Clemson Campus",
    entityId: 63478,
    pageGroup: "Location",
    impressions: 76000,
  },
  {
    pageName: "Yext Roasters - Anderson Mall",
    entityId: 71234,
    pageGroup: "Location",
    impressions: 68000,
  },
  {
    pageName: "Yext Roasters - Franklin Square",
    entityId: 44567,
    pageGroup: "Location",
    impressions: 62000,
  },
  {
    pageName: "Yext Roasters - Greenwood Center",
    entityId: 82345,
    pageGroup: "Location",
    impressions: 58000,
  },
  {
    pageName: "Find a Location Near You",
    entityId: 10001,
    pageGroup: "Locator",
    impressions: 245000,
  },
  {
    pageName: "Store Locator",
    entityId: 10002,
    pageGroup: "Locator",
    impressions: 198000,
  },
  {
    pageName: "Our Coffee Story",
    entityId: 20001,
    pageGroup: "Latte",
    impressions: 125000,
  },
  {
    pageName: "Coffee Menu",
    entityId: 20002,
    pageGroup: "Latte",
    impressions: 108000,
  },
];

// CTR Leaderboard Data
const ctrLeaderboardData = [
  {
    pageName: "Yext Roasters - Downtown Raleigh",
    entityId: 49285,
    pageGroup: "Location",
    ctr: 12.5,
  },
  {
    pageName: "Yext Roasters - Columbia Center",
    entityId: 46175,
    pageGroup: "Location",
    ctr: 11.8,
  },
  {
    pageName: "Yext Roasters - Greenville Plaza",
    entityId: 66063,
    pageGroup: "Location",
    ctr: 11.2,
  },
  {
    pageName: "Yext Roasters - Charlotte Uptown",
    entityId: 52341,
    pageGroup: "Location",
    ctr: 10.9,
  },
  {
    pageName: "Yext Roasters - Wilmington Waterfront",
    entityId: 58792,
    pageGroup: "Location",
    ctr: 10.5,
  },
  {
    pageName: "Yext Roasters - Clemson Campus",
    entityId: 63478,
    pageGroup: "Location",
    ctr: 10.2,
  },
  {
    pageName: "Yext Roasters - Anderson Mall",
    entityId: 71234,
    pageGroup: "Location",
    ctr: 9.8,
  },
  {
    pageName: "Yext Roasters - Franklin Square",
    entityId: 44567,
    pageGroup: "Location",
    ctr: 9.5,
  },
  {
    pageName: "Yext Roasters - Greenwood Center",
    entityId: 82345,
    pageGroup: "Location",
    ctr: 9.2,
  },
  {
    pageName: "Find a Location Near You",
    entityId: 10001,
    pageGroup: "Locator",
    ctr: 13.8,
  },
  {
    pageName: "Store Locator",
    entityId: 10002,
    pageGroup: "Locator",
    ctr: 12.9,
  },
  {
    pageName: "Our Coffee Story",
    entityId: 20001,
    pageGroup: "Latte",
    ctr: 11.5,
  },
  {
    pageName: "Coffee Menu",
    entityId: 20002,
    pageGroup: "Latte",
    ctr: 10.8,
  },
];

// CTA Clicks Over Time Data
const ctaClicksOverTimeData = [
  {
    date: "2025-01-01",
    "Get Directions": 120,
    Call: 85,
    "Order Online": 65,
    "Book an Appointment": 45,
  },
  {
    date: "2025-01-08",
    "Get Directions": 135,
    Call: 92,
    "Order Online": 72,
    "Book an Appointment": 52,
  },
  {
    date: "2025-01-15",
    "Get Directions": 142,
    Call: 88,
    "Order Online": 78,
    "Book an Appointment": 48,
  },
  {
    date: "2025-01-22",
    "Get Directions": 158,
    Call: 95,
    "Order Online": 82,
    "Book an Appointment": 55,
  },
  {
    date: "2025-01-29",
    "Get Directions": 165,
    Call: 102,
    "Order Online": 88,
    "Book an Appointment": 62,
  },
  {
    date: "2025-02-05",
    "Get Directions": 178,
    Call: 108,
    "Order Online": 95,
    "Book an Appointment": 68,
  },
  {
    date: "2025-02-12",
    "Get Directions": 185,
    Call: 115,
    "Order Online": 102,
    "Book an Appointment": 72,
  },
  {
    date: "2025-02-19",
    "Get Directions": 192,
    Call: 122,
    "Order Online": 108,
    "Book an Appointment": 78,
  },
  {
    date: "2025-02-26",
    "Get Directions": 205,
    Call: 128,
    "Order Online": 115,
    "Book an Appointment": 82,
  },
  {
    date: "2025-03-05",
    "Get Directions": 218,
    Call: 135,
    "Order Online": 122,
    "Book an Appointment": 88,
  },
  {
    date: "2025-03-12",
    "Get Directions": 225,
    Call: 142,
    "Order Online": 128,
    "Book an Appointment": 92,
  },
  {
    date: "2025-03-19",
    "Get Directions": 238,
    Call: 148,
    "Order Online": 135,
    "Book an Appointment": 98,
  },
];

// Search Terms Data
const brandedTermsData = [
  {
    searchTerm: "yext roasters locations",
    impressions: 933,
    clicks: 1,
    ctr: 0.11,
    position: 54.9,
  },
  {
    searchTerm: "yext roasters greenville nc",
    impressions: 867,
    clicks: 1,
    ctr: 0.12,
    position: 8.1,
  },
  {
    searchTerm: "yext roasters franklin nc",
    impressions: 810,
    clicks: 0,
    ctr: 0.0,
    position: 10,
  },
  {
    searchTerm: "yext roasters greenwood sc",
    impressions: 738,
    clicks: 1,
    ctr: 0.14,
    position: 9.3,
  },
  {
    searchTerm: "yext roasters clemson",
    impressions: 609,
    clicks: 0,
    ctr: 0.0,
    position: 11.6,
  },
  {
    searchTerm: "yext roasters raleigh nc",
    impressions: 547,
    clicks: 0,
    ctr: 0.0,
    position: 67.6,
  },
  {
    searchTerm: "yext roasters anderson sc",
    impressions: 515,
    clicks: 0,
    ctr: 0.0,
    position: 8,
  },
  {
    searchTerm: "yext roasters raleigh",
    impressions: 511,
    clicks: 0,
    ctr: 0.0,
    position: 62.2,
  },
  {
    searchTerm: "yext roasters rock hill sc",
    impressions: 427,
    clicks: 0,
    ctr: 0.0,
    position: 8,
  },
];

const unbrandedTermsData = [
  {
    searchTerm: "coffee shop near me",
    impressions: 1579,
    clicks: 6,
    ctr: 0.38,
    position: 11.7,
  },
  {
    searchTerm: "best coffee raleigh",
    impressions: 737,
    clicks: 0,
    ctr: 0.0,
    position: 9.4,
  },
  {
    searchTerm: "artisan coffee charlotte",
    impressions: 636,
    clicks: 0,
    ctr: 0.0,
    position: 84.4,
  },
  {
    searchTerm: "coffee roaster greenville",
    impressions: 617,
    clicks: 4,
    ctr: 0.65,
    position: 8.6,
  },
  {
    searchTerm: "specialty coffee columbia sc",
    impressions: 609,
    clicks: 0,
    ctr: 0.0,
    position: 8.8,
  },
  {
    searchTerm: "coffee delivery raleigh",
    impressions: 564,
    clicks: 0,
    ctr: 0.0,
    position: 67.3,
  },
  {
    searchTerm: "espresso clemson",
    impressions: 513,
    clicks: 1,
    ctr: 0.19,
    position: 9.8,
  },
  {
    searchTerm: "coffee beans wilmington",
    impressions: 482,
    clicks: 0,
    ctr: 0.0,
    position: 87.5,
  },
  {
    searchTerm: "organic coffee columbia sc",
    impressions: 471,
    clicks: 0,
    ctr: 0.0,
    position: 75.4,
  },
  {
    searchTerm: "coffee shop anderson sc",
    impressions: 452,
    clicks: 0,
    ctr: 0.0,
    position: 7.9,
  },
];

// Page Group filter data
const pageGroups = [
  { id: "all", name: "All" },
  { id: "Locator", name: "Locator" },
  { id: "Location", name: "Location" },
  { id: "Latte", name: "Latte" },
];

export function PagesOverviewDashboard() {
  const [selectedPageGroup, setSelectedPageGroup] = React.useState("all");
  const [activeSection, setActiveSection] = React.useState("agentic");

  const navItems = [
    { id: "agentic", label: "Agentic Interactions" },
    { id: "traditional", label: "Traditional Search" },
    { id: "interactions", label: "User Interactions" },
    { id: "pageviews", label: "Page Views" },
  ];

  const handleNavigate = (id: string) => {
    setActiveSection(id);
  };

  // Helper function to aggregate data by page group
  const aggregateByPageGroup = <T extends { pageGroup: string }>(
    data: T[],
    getValue: (item: T) => number
  ) => {
    const grouped = data.reduce((acc, item) => {
      const group = item.pageGroup;
      if (!acc[group]) {
        acc[group] = { pageGroup: group, value: 0 };
      }
      acc[group].value += getValue(item);
      return acc;
    }, {} as Record<string, { pageGroup: string; value: number }>);

    return Object.values(grouped)
      .sort((a, b) => b.value - a.value)
      .map((item) => ({
        pageName: item.pageGroup,
        pageGroup: item.pageGroup,
        value: item.value,
      }));
  };

  // Filter and transform leaderboard data based on selected page group
  const getAgenticLeaderboardData = () => {
    if (selectedPageGroup === "all") {
      // Aggregate by page group
      return aggregateByPageGroup(
        agenticLeaderboardData,
        (item) => item.totalAgenticInteractions
      ).map((item) => ({
        pageName: item.pageName,
        pageGroup: item.pageGroup,
        entityId: undefined as number | undefined,
        aiAssistant: agenticLeaderboardData
          .filter((p) => p.pageGroup === item.pageGroup)
          .reduce((sum, p) => sum + p.aiAssistant, 0),
        aiCrawler: agenticLeaderboardData
          .filter((p) => p.pageGroup === item.pageGroup)
          .reduce((sum, p) => sum + p.aiCrawler, 0),
        aiSearch: agenticLeaderboardData
          .filter((p) => p.pageGroup === item.pageGroup)
          .reduce((sum, p) => sum + p.aiSearch, 0),
        totalAgenticInteractions: item.value,
      }));
    } else {
      // Filter by selected page group
      return agenticLeaderboardData
        .filter((item) => item.pageGroup === selectedPageGroup)
        .sort(
          (a, b) => b.totalAgenticInteractions - a.totalAgenticInteractions
        );
    }
  };

  const getSearchImpressionsLeaderboardData = () => {
    if (selectedPageGroup === "all") {
      // Aggregate by page group
      return aggregateByPageGroup(
        searchImpressionsLeaderboardData,
        (item) => item.impressions
      ).map((item) => ({
        pageName: item.pageName,
        pageGroup: item.pageGroup,
        entityId: undefined as number | undefined,
        impressions: item.value,
      }));
    } else {
      // Filter by selected page group
      return searchImpressionsLeaderboardData
        .filter((item) => item.pageGroup === selectedPageGroup)
        .sort((a, b) => b.impressions - a.impressions);
    }
  };

  const getCtrLeaderboardData = () => {
    if (selectedPageGroup === "all") {
      // Aggregate by page group - calculate weighted average CTR
      const grouped = searchImpressionsLeaderboardData.reduce((acc, item) => {
        const group = item.pageGroup;
        if (!acc[group]) {
          acc[group] = { impressions: 0, clicks: 0 };
        }
        acc[group].impressions += item.impressions;
        // Estimate clicks from CTR (approximate)
        const ctrItem = ctrLeaderboardData.find(
          (c) => c.entityId === item.entityId
        );
        if (ctrItem) {
          acc[group].clicks += (item.impressions * ctrItem.ctr) / 100;
        }
        return acc;
      }, {} as Record<string, { impressions: number; clicks: number }>);

      return Object.entries(grouped)
        .map(([pageGroup, data]) => ({
          pageName: pageGroup,
          pageGroup: pageGroup,
          entityId: undefined as number | undefined,
          ctr:
            data.impressions > 0 ? (data.clicks / data.impressions) * 100 : 0,
        }))
        .sort((a, b) => b.ctr - a.ctr);
    } else {
      // Filter by selected page group
      return ctrLeaderboardData
        .filter((item) => item.pageGroup === selectedPageGroup)
        .sort((a, b) => b.ctr - a.ctr);
    }
  };

  return (
    <div className="space-y-0 max-w-7xl mx-auto w-full overflow-x-hidden">
      {/* Header */}
      <div className="p-6 pb-4 w-full min-w-0">
        <div className="flex items-center justify-between w-full min-w-0">
          <div>
            <h1 className="text-3xl font-bold font-[family-name:var(--font-work-sans)] text-foreground">
              Yext Roasters Pages Overview
            </h1>
            <p className="text-muted-foreground mt-1">
              Performance insights and actionable recommendations for your pages
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label
                htmlFor="page-group-filter"
                className="text-sm font-medium text-foreground"
              >
                Filter by Page Group:
              </label>
              <Select
                value={selectedPageGroup}
                onValueChange={setSelectedPageGroup}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a page group" />
                </SelectTrigger>
                <SelectContent>
                  {pageGroups.map((group) => (
                    <SelectItem key={group.id} value={group.id}>
                      {group.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="bg-secondary/10 text-secondary"
              >
                <CheckCircle className="w-3 h-3 mr-1" />
                All systems operational
              </Badge>
              <Star className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Page Group Filter Badge */}
        {selectedPageGroup !== "all" && (
          <div className="flex items-center gap-2 mt-4">
            <Badge variant="outline" className="text-xs">
              Filtered by:{" "}
              {pageGroups.find((group) => group.id === selectedPageGroup)?.name}
            </Badge>
          </div>
        )}
      </div>
      <TopNav
        items={navItems}
        activeId={activeSection}
        onNavigate={handleNavigate}
      />
      <div className="p-6 space-y-6 w-full min-w-0 overflow-x-hidden">
        {/* Section 1: Agentic Interactions */}
        {activeSection === "agentic" && (
          <div className="space-y-6 w-full min-w-0 section-transition">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-foreground">
                Agentic Interactions
              </h2>
              <Badge variant="outline" className="text-xs">
                AI-Powered Search
              </Badge>
            </div>

            {/* Hero Numbers */}
            {(() => {
              // Calculate values from the latest data point
              const latestData =
                agenticInteractionsData[agenticInteractionsData.length - 1];
              const totalAgenticInteractions =
                latestData["AI Assistant"] +
                latestData["AI Crawler"] +
                latestData["AI Search"];
              const aiCrawlerPercentage =
                totalAgenticInteractions > 0
                  ? (latestData["AI Crawler"] / totalAgenticInteractions) * 100
                  : 0;
              const aiSearchReferrals = latestData["AI Search"];

              // Generate chart data for each metric
              const agenticInteractionsChartData = generateChartData(
                totalAgenticInteractions,
                7
              );
              const aiCrawlerPercentageChartData = generateChartData(
                aiCrawlerPercentage,
                7
              );
              const aiSearchReferralsChartData = generateChartData(
                aiSearchReferrals,
                7
              );

              // Format values for display
              const formatAgenticInteractions =
                totalAgenticInteractions >= 1000
                  ? `${(totalAgenticInteractions / 1000).toFixed(1)}K`
                  : totalAgenticInteractions.toString();
              const formatPercentage = `${aiCrawlerPercentage.toFixed(1)}%`;
              const formatReferrals =
                aiSearchReferrals >= 1000
                  ? `${(aiSearchReferrals / 1000).toFixed(1)}K`
                  : aiSearchReferrals.toString();

              return (
                <div className="grid grid-cols-3 gap-3">
                  <MetricCard
                    title="Agentic Interactions"
                    value={formatAgenticInteractions}
                    chartData={agenticInteractionsChartData}
                    percentageChange={calculatePercentageChange(
                      agenticInteractionsChartData
                    )}
                  />
                  <MetricCard
                    title="Percentage of Traffic from AI Crawlers"
                    value={formatPercentage}
                    chartData={aiCrawlerPercentageChartData}
                    percentageChange={calculatePercentageChange(
                      aiCrawlerPercentageChartData
                    )}
                  />
                  <MetricCard
                    title="Referrals from AI Search"
                    value={formatReferrals}
                    chartData={aiSearchReferralsChartData}
                    percentageChange={calculatePercentageChange(
                      aiSearchReferralsChartData
                    )}
                  />
                </div>
              );
            })()}

            {/* Agentic Interactions Line Graph */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-1">
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Bot className="w-5 h-5 text-primary" />
                    Agentic Interactions Over Time
                  </CardTitle>
                  <div className="relative group">
                    <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                      Breakdown of search interactions across AI Assistant, AI
                      Crawler, and AI Search
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  Daily agentic interaction trends over the past 3 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    "AI Assistant": {
                      label: "AI Assistant",
                      color: "hsl(var(--chart-1))",
                    },
                    "AI Crawler": {
                      label: "AI Crawler",
                      color: "hsl(var(--chart-2))",
                    },
                    "AI Search": {
                      label: "AI Search",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={agenticInteractionsData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="hsl(var(--border))"
                      />
                      <XAxis
                        dataKey="date"
                        stroke="hsl(var(--muted-foreground))"
                      />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <ChartTooltip />
                      <Line
                        type="monotone"
                        dataKey="AI Assistant"
                        stroke="hsl(var(--chart-1))"
                        strokeWidth={3}
                        connectNulls={true}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="AI Crawler"
                        stroke="hsl(var(--chart-2))"
                        strokeWidth={3}
                        connectNulls={true}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="AI Search"
                        stroke="hsl(var(--chart-3))"
                        strokeWidth={3}
                        connectNulls={true}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>

                {/* Legend */}
                <div className="mt-4 flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      AI Assistant
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      AI Crawler
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      AI Search
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Agentic Interactions Leaderboard */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <Bot className="w-5 h-5 text-primary" />
                      Agentic Interactions Leaderboard
                    </CardTitle>
                    <div className="relative group">
                      <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                        Top performing pages ranked by total agentic
                        interactions
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  Table shows the last 30 days of data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto max-w-full">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-2 text-sm font-medium text-foreground">
                          Page Name
                        </th>
                        <th className="text-left py-2 px-2 text-sm font-medium text-foreground">
                          Entity ID
                        </th>
                        <th className="text-left py-2 px-2 text-sm font-medium text-foreground">
                          Page Group
                        </th>
                        <th className="text-right py-2 px-2 text-sm font-medium text-foreground">
                          AI Assistant
                        </th>
                        <th className="text-right py-2 px-2 text-sm font-medium text-foreground">
                          AI Crawler
                        </th>
                        <th className="text-right py-2 px-2 text-sm font-medium text-foreground">
                          AI Search
                        </th>
                        <th className="text-right py-2 px-2 text-sm font-medium text-foreground">
                          Total Agentic Interactions
                          <span className="ml-1 text-muted-foreground">▼</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {getAgenticLeaderboardData().map((item, index) => (
                        <tr
                          key={
                            selectedPageGroup === "all"
                              ? item.pageGroup
                              : item.entityId
                          }
                          className="border-b border-border/50 hover:bg-muted/50"
                        >
                          <td className="py-2 px-2 text-sm text-foreground font-medium">
                            {item.pageName}
                          </td>
                          <td className="py-2 px-2 text-sm text-foreground">
                            {selectedPageGroup === "all" || !item.entityId
                              ? "-"
                              : item.entityId}
                          </td>
                          <td className="py-2 px-2 text-sm text-foreground">
                            {item.pageGroup}
                          </td>
                          <td className="py-2 px-2 text-sm text-foreground text-right">
                            {item.aiAssistant.toLocaleString()}
                          </td>
                          <td className="py-2 px-2 text-sm text-foreground text-right">
                            {item.aiCrawler.toLocaleString()}
                          </td>
                          <td className="py-2 px-2 text-sm text-foreground text-right">
                            {item.aiSearch.toLocaleString()}
                          </td>
                          <td className="py-2 px-2 text-sm text-foreground text-right font-medium">
                            {item.totalAgenticInteractions.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Section 2: Traditional Search Metrics */}
        {activeSection === "traditional" && (
          <div className="space-y-6 w-full min-w-0 section-transition">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-foreground">
                Traditional Search Metrics
              </h2>
              <Badge variant="outline" className="text-xs">
                Google Search Performance
              </Badge>
            </div>

            {/* Search Impressions and CTR Line Graphs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-1">
                    <CardTitle className="text-foreground">
                      Search Impressions Over Time
                    </CardTitle>
                    <div className="relative group">
                      <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                        Shows how your search impressions have changed over the
                        past 6 months
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    Monthly search impressions over the last 6 months
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      impressions: {
                        label: "Impressions",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={performanceData}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="hsl(var(--border))"
                        />
                        <XAxis
                          dataKey="month"
                          stroke="hsl(var(--muted-foreground))"
                        />
                        <YAxis stroke="hsl(var(--muted-foreground))" />
                        <ChartTooltip />
                        <Line
                          type="monotone"
                          dataKey="impressions"
                          stroke="hsl(var(--chart-1))"
                          strokeWidth={3}
                          connectNulls={true}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-1">
                    <CardTitle className="text-foreground">
                      Click-Through Rate Over Time
                    </CardTitle>
                    <div className="relative group">
                      <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                        Shows how your click-through rate has changed over the
                        past 6 months
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    Monthly CTR trends over the last 6 months
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      ctr: {
                        label: "CTR",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={performanceData}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="hsl(var(--border))"
                        />
                        <XAxis
                          dataKey="month"
                          stroke="hsl(var(--muted-foreground))"
                        />
                        <YAxis
                          stroke="hsl(var(--muted-foreground))"
                          tickFormatter={(value) => `${value}%`}
                        />
                        <ChartTooltip
                          formatter={(value: number) => [`${value}%`, "CTR"]}
                        />
                        <Line
                          type="monotone"
                          dataKey="ctr"
                          stroke="hsl(var(--chart-2))"
                          strokeWidth={3}
                          connectNulls={true}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Search Impressions Leaderboard */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <Search className="w-5 h-5 text-primary" />
                      Search Impressions Leaderboard
                    </CardTitle>
                    <div className="relative group">
                      <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                        Top performing pages ranked by search impressions
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  Table shows the last 30 days of data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto max-w-full">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-2 text-sm font-medium text-foreground">
                          Page Name
                        </th>
                        <th className="text-left py-2 px-2 text-sm font-medium text-foreground">
                          Entity ID
                        </th>
                        <th className="text-right py-2 px-2 text-sm font-medium text-foreground">
                          Search Impressions
                          <span className="ml-1 text-muted-foreground">▼</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {getSearchImpressionsLeaderboardData().map((item) => (
                        <tr
                          key={
                            selectedPageGroup === "all"
                              ? item.pageGroup
                              : item.entityId
                          }
                          className="border-b border-border/50 hover:bg-muted/50"
                        >
                          <td className="py-2 px-2 text-sm text-foreground font-medium">
                            {item.pageName}
                          </td>
                          <td className="py-2 px-2 text-sm text-foreground">
                            {selectedPageGroup === "all" || !item.entityId
                              ? "-"
                              : item.entityId}
                          </td>
                          <td className="py-2 px-2 text-sm text-foreground text-right font-medium">
                            {item.impressions.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* CTR Leaderboard */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <MousePointer className="w-5 h-5 text-primary" />
                      Click-Through Rate Leaderboard
                    </CardTitle>
                    <div className="relative group">
                      <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                        Top performing pages ranked by click-through rate
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  Table shows the last 30 days of data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto max-w-full">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-2 text-sm font-medium text-foreground">
                          Page Name
                        </th>
                        <th className="text-left py-2 px-2 text-sm font-medium text-foreground">
                          Entity ID
                        </th>
                        <th className="text-right py-2 px-2 text-sm font-medium text-foreground">
                          Click-Through Rate
                          <span className="ml-1 text-muted-foreground">▼</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {getCtrLeaderboardData().map((item) => (
                        <tr
                          key={
                            selectedPageGroup === "all"
                              ? item.pageGroup
                              : item.entityId
                          }
                          className="border-b border-border/50 hover:bg-muted/50"
                        >
                          <td className="py-2 px-2 text-sm text-foreground font-medium">
                            {item.pageName}
                          </td>
                          <td className="py-2 px-2 text-sm text-foreground">
                            {selectedPageGroup === "all" || !item.entityId
                              ? "-"
                              : item.entityId}
                          </td>
                          <td className="py-2 px-2 text-sm text-foreground text-right font-medium">
                            {item.ctr.toFixed(1)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Branded and Unbranded Terms */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Branded Terms */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <CardTitle className="flex items-center gap-2 text-foreground">
                        <Search className="w-5 h-5 text-primary" />
                        Pages Top Branded Terms
                      </CardTitle>
                      <div className="relative group">
                        <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                          Search terms that include your brand name
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-muted rounded">
                        <span className="text-muted-foreground">⋯</span>
                      </button>
                      <button className="p-1 hover:bg-muted rounded">
                        <span className="text-muted-foreground">↓</span>
                      </button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto max-w-full">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 px-2 text-sm font-medium text-foreground">
                            Search Term
                          </th>
                          <th className="text-right py-2 px-2 text-sm font-medium text-foreground">
                            Impressions
                            <span className="ml-1 text-muted-foreground">
                              ↓
                            </span>
                          </th>
                          <th className="text-right py-2 px-2 text-sm font-medium text-foreground">
                            Clicks
                          </th>
                          <th className="text-right py-2 px-2 text-sm font-medium text-foreground">
                            CTR
                          </th>
                          <th className="text-right py-2 px-2 text-sm font-medium text-foreground">
                            Position
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {brandedTermsData.map((term, index) => (
                          <tr key={index} className="border-b border-border/50">
                            <td className="py-2 px-2 text-sm text-foreground">
                              {term.searchTerm}
                            </td>
                            <td className="py-2 px-2 text-sm text-foreground text-right">
                              {term.impressions.toLocaleString()}
                            </td>
                            <td className="py-2 px-2 text-sm text-foreground text-right">
                              {term.clicks}
                            </td>
                            <td className="py-2 px-2 text-sm text-foreground text-right">
                              {term.ctr.toFixed(2)}%
                            </td>
                            <td className="py-2 px-2 text-sm text-foreground text-right">
                              {term.position}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Unbranded Terms */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <CardTitle className="flex items-center gap-2 text-foreground">
                        <Search className="w-5 h-5 text-primary" />
                        Pages Top Unbranded Terms
                      </CardTitle>
                      <div className="relative group">
                        <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                          Generic search terms that don&apos;t include your
                          brand name
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-muted rounded">
                        <span className="text-muted-foreground">⋯</span>
                      </button>
                      <button className="p-1 hover:bg-muted rounded">
                        <span className="text-muted-foreground">↓</span>
                      </button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto max-w-full">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 px-2 text-sm font-medium text-foreground">
                            Search Term
                          </th>
                          <th className="text-right py-2 px-2 text-sm font-medium text-foreground">
                            Impressions
                            <span className="ml-1 text-muted-foreground">
                              ↓
                            </span>
                          </th>
                          <th className="text-right py-2 px-2 text-sm font-medium text-foreground">
                            Clicks
                          </th>
                          <th className="text-right py-2 px-2 text-sm font-medium text-foreground">
                            CTR
                          </th>
                          <th className="text-right py-2 px-2 text-sm font-medium text-foreground">
                            Position
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {unbrandedTermsData.map((term, index) => (
                          <tr key={index} className="border-b border-border/50">
                            <td className="py-2 px-2 text-sm text-foreground">
                              {term.searchTerm}
                            </td>
                            <td className="py-2 px-2 text-sm text-foreground text-right">
                              {term.impressions.toLocaleString()}
                            </td>
                            <td className="py-2 px-2 text-sm text-foreground text-right">
                              {term.clicks}
                            </td>
                            <td className="py-2 px-2 text-sm text-foreground text-right">
                              {term.ctr.toFixed(2)}%
                            </td>
                            <td className="py-2 px-2 text-sm text-foreground text-right">
                              {term.position}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Section 3: User Interactions */}
        {activeSection === "interactions" && (
          <div className="space-y-6 w-full min-w-0 section-transition">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-foreground">
                User Interactions
              </h2>
              <Badge variant="outline" className="text-xs">
                Engagement Metrics
              </Badge>
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-1">
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Target className="w-5 h-5 text-primary" />
                    CTA Clicks Over Time
                  </CardTitle>
                  <div className="relative group">
                    <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                      Weekly trends of call-to-action clicks across different
                      user actions
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  Weekly CTA click trends over the past 3 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={ctaClicksOverTimeData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis
                        dataKey="date"
                        stroke="#64748b"
                        tickFormatter={(value) => {
                          const date = new Date(value);
                          return date.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          });
                        }}
                      />
                      <YAxis
                        stroke="#64748b"
                        domain={[0, 250]}
                        tickFormatter={(value) => `${value}`}
                      />
                      <ChartTooltip
                        formatter={(value: number) => [
                          `${value} clicks`,
                          "CTA Clicks",
                        ]}
                        labelFormatter={(value) => {
                          const date = new Date(value);
                          return date.toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          });
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Get Directions"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        connectNulls={true}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Call"
                        stroke="#ef4444"
                        strokeWidth={3}
                        connectNulls={true}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Order Online"
                        stroke="#22c55e"
                        strokeWidth={3}
                        connectNulls={true}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Book an Appointment"
                        stroke="#f59e0b"
                        strokeWidth={3}
                        connectNulls={true}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Legend */}
                <div className="mt-4 flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      Get Directions
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Call</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      Order Online
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      Book an Appointment
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Section 4: Page Views */}
        {activeSection === "pageviews" && (
          <div className="space-y-6 w-full min-w-0 section-transition">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-foreground">Page Views</h2>
              <Badge variant="outline" className="text-xs">
                Traffic Metrics
              </Badge>
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-1">
                  <CardTitle className="text-foreground">
                    Page Views Over Time
                  </CardTitle>
                  <div className="relative group">
                    <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                      Shows how your page views have changed over the past 3
                      months
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  Daily page view trends over the past 3 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    pageViews: {
                      label: "Page Views",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={pageViewsOverTimeData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="hsl(var(--border))"
                      />
                      <XAxis
                        dataKey="date"
                        stroke="hsl(var(--muted-foreground))"
                      />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <ChartTooltip />
                      <Line
                        type="monotone"
                        dataKey="pageViews"
                        stroke="#22c55e"
                        strokeWidth={3}
                        connectNulls={true}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
