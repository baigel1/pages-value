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
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Line,
  LineChart,
  Bar,
  BarChart,
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
  Bot,
  AlertCircle,
  CheckCircle,
  ArrowUpRight,
  Star,
  Users,
  Clock,
  Target,
  Eye,
  Info,
} from "lucide-react";

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

const aiVisibilityData = [
  { model: "ChatGPT", visibilityScore: 50 },
  { model: "Gemini", visibilityScore: 58 },
  { model: "Perplexity", visibilityScore: 67 },
];

const ctaClicksData = [
  { type: "Get Directions", clicks: 2840, percentage: 39 },
  { type: "Call", clicks: 1820, percentage: 25 },
  { type: "Order Online", clicks: 1460, percentage: 20 },
  { type: "Book an Appointment", clicks: 1160, percentage: 16 },
];

// Page Health Data
const pageSpeedData = {
  performance: 87,
  accessibility: 92,
  bestPractices: 89,
  seo: 95,
  firstContentfulPaint: 1.2,
  largestContentfulPaint: 2.8,
  cumulativeLayoutShift: 0.08,
  firstInputDelay: 0.15,
};

const wcagData = {
  overallScore: 88,
  issues: [
    { severity: "high", description: "Missing alt text on 3 images", count: 3 },
    {
      severity: "medium",
      description: "Color contrast ratio below 4.5:1",
      count: 2,
    },
    {
      severity: "low",
      description: "Missing ARIA labels on form inputs",
      count: 1,
    },
  ],
};

const schemaData = {
  types: [
    { type: "Organization", status: "valid", implemented: true },
    { type: "LocalBusiness", status: "valid", implemented: true },
    { type: "Restaurant", status: "valid", implemented: true },
    { type: "Menu", status: "warning", implemented: true },
    { type: "Review", status: "error", implemented: false },
    { type: "Event", status: "valid", implemented: true },
  ],
  validationStatus: "valid",
  totalTypes: 6,
  implementedTypes: 5,
};

const analyticsData = {
  enabled: true,
  tags: [
    { name: "Google Analytics 4", status: "active", id: "G-XXXXXXXXXX" },
    { name: "Google Tag Manager", status: "active", id: "GTM-XXXXXXX" },
    { name: "Facebook Pixel", status: "active", id: "123456789" },
    { name: "Bing Ads", status: "inactive", id: "BING-XXXXX" },
  ],
};

// Search Terms Data
const brandedTermsData = [
  {
    searchTerm: "daniel's ice cream locations",
    impressions: 933,
    clicks: 1,
    ctr: 0.11,
    position: 54.9,
  },
  {
    searchTerm: "daniel's ice cream greenville nc",
    impressions: 867,
    clicks: 1,
    ctr: 0.12,
    position: 8.1,
  },
  {
    searchTerm: "daniel's ice cream franklin nc",
    impressions: 810,
    clicks: 0,
    ctr: 0.0,
    position: 10,
  },
  {
    searchTerm: "daniel's ice cream greenwood sc",
    impressions: 738,
    clicks: 1,
    ctr: 0.14,
    position: 9.3,
  },
  {
    searchTerm: "daniel's ice cream clemson",
    impressions: 609,
    clicks: 0,
    ctr: 0.0,
    position: 11.6,
  },
  {
    searchTerm: "daniel's ice cream raleigh nc",
    impressions: 547,
    clicks: 0,
    ctr: 0.0,
    position: 67.6,
  },
  {
    searchTerm: "daniel's ice cream anderson sc",
    impressions: 515,
    clicks: 0,
    ctr: 0.0,
    position: 8,
  },
  {
    searchTerm: "daniel's ice cream raleigh",
    impressions: 511,
    clicks: 0,
    ctr: 0.0,
    position: 62.2,
  },
  {
    searchTerm: "daniel's ice cream rock hill sc",
    impressions: 427,
    clicks: 0,
    ctr: 0.0,
    position: 8,
  },
];

const unbrandedTermsData = [
  {
    searchTerm: "ice cream shop near me",
    impressions: 1579,
    clicks: 6,
    ctr: 0.38,
    position: 11.7,
  },
  {
    searchTerm: "best ice cream raleigh",
    impressions: 737,
    clicks: 0,
    ctr: 0.0,
    position: 9.4,
  },
  {
    searchTerm: "homemade ice cream charlotte",
    impressions: 636,
    clicks: 0,
    ctr: 0.0,
    position: 84.4,
  },
  {
    searchTerm: "ice cream parlor greenville",
    impressions: 617,
    clicks: 4,
    ctr: 0.65,
    position: 8.6,
  },
  {
    searchTerm: "gelato shop columbia sc",
    impressions: 609,
    clicks: 0,
    ctr: 0.0,
    position: 8.8,
  },
  {
    searchTerm: "ice cream delivery raleigh",
    impressions: 564,
    clicks: 0,
    ctr: 0.0,
    position: 67.3,
  },
  {
    searchTerm: "frozen yogurt clemson",
    impressions: 513,
    clicks: 1,
    ctr: 0.19,
    position: 9.8,
  },
  {
    searchTerm: "ice cream cakes wilmington",
    impressions: 482,
    clicks: 0,
    ctr: 0.0,
    position: 87.5,
  },
  {
    searchTerm: "dairy free ice cream columbia sc",
    impressions: 471,
    clicks: 0,
    ctr: 0.0,
    position: 75.4,
  },
  {
    searchTerm: "ice cream sundae anderson sc",
    impressions: 452,
    clicks: 0,
    ctr: 0.0,
    position: 7.9,
  },
];

const trafficSourceData = [
  {
    source: "Google Search",
    week1: 8500,
    week2: 9200,
    week3: 8800,
    week4: 9500,
  },
  { source: "Bing Search", week1: 1200, week2: 1350, week3: 1400, week4: 1600 },
  { source: "ChatGPT", week1: 2800, week2: 3200, week3: 3800, week4: 4200 },
  { source: "Claude", week1: 800, week2: 950, week3: 1100, week4: 1350 },
  {
    source: "Direct Traffic",
    week1: 3200,
    week2: 3400,
    week3: 3600,
    week4: 3800,
  },
  {
    source: "Social Media",
    week1: 1500,
    week2: 1700,
    week3: 1900,
    week4: 2100,
  },
];

// Date ranges for the weeks
const weekDates = [
  "Week of 9/7/2025",
  "Week of 9/14/2025",
  "Week of 9/21/2025",
  "Week of 9/28/2025",
];

// Site filter data
const sites = [
  { id: "all", name: "All Sites" },
  { id: "main", name: "Main Site" },
];

export function PagesOverviewDashboard() {
  const [selectedSite, setSelectedSite] = React.useState("all");
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-[family-name:var(--font-work-sans)] text-foreground">
            Daniel&apos;s Ice Cream Chain Pages Overview
          </h1>
          <p className="text-muted-foreground mt-1">
            Performance insights and actionable recommendations for your pages
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label
              htmlFor="site-filter"
              className="text-sm font-medium text-foreground"
            >
              Filter by Site:
            </label>
            <Select value={selectedSite} onValueChange={setSelectedSite}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a site" />
              </SelectTrigger>
              <SelectContent>
                {sites.map((site) => (
                  <SelectItem key={site.id} value={site.id}>
                    {site.name}
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

      {/* Key Metrics Grid */}
      {selectedSite !== "all" && (
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs">
            Filtered by: {sites.find((site) => site.id === selectedSite)?.name}
          </Badge>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center gap-1">
              <CardTitle className="text-sm font-medium text-card-foreground">
                Search Impressions
              </CardTitle>
              <div className="relative group">
                <Info className="h-3 w-3 text-muted-foreground cursor-help hover:text-foreground" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  Search impressions track the number of times your pages appear
                  in Google search results
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
            <Search className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1.94M</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3 mr-1 text-secondary" />
              +2% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center gap-1">
              <CardTitle className="text-sm font-medium text-card-foreground">
                Click-Through Rate
              </CardTitle>
              <div className="relative group">
                <Info className="h-3 w-3 text-muted-foreground cursor-help hover:text-foreground" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  Click-through rate measures the percentage of users who click
                  on your pages after seeing them in search results
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
            <MousePointer className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">10.8%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3 mr-1 text-secondary" />
              +0.8% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center gap-1">
              <CardTitle className="text-sm font-medium text-card-foreground">
                CTA Clicks
              </CardTitle>
              <div className="relative group">
                <Info className="h-3 w-3 text-muted-foreground cursor-help hover:text-foreground" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  CTA (Call-to-Action) clicks track how many users click on
                  buttons, links, or other action elements on your pages
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">7.3K</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3 mr-1 text-secondary" />
              +15% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center gap-1">
              <CardTitle className="text-sm font-medium text-card-foreground">
                Page Views
              </CardTitle>
              <div className="relative group">
                <Info className="h-3 w-3 text-muted-foreground cursor-help hover:text-foreground" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  Page views count the total number of times your pages have
                  been viewed by visitors
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
            <Eye className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">892K</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3 mr-1 text-secondary" />
              +12% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-1">
              <CardTitle className="text-foreground">
                Search Performance Trend
              </CardTitle>
              <div className="relative group">
                <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  Shows how your search impressions and clicks have changed over
                  the past 6 months
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
            <CardDescription className="text-muted-foreground">
              Impressions and clicks over the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                impressions: {
                  label: "Impressions",
                  color: "hsl(var(--chart-1))",
                },
                clicks: {
                  label: "Clicks",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
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
                  <Area
                    type="monotone"
                    dataKey="impressions"
                    stackId="1"
                    stroke="hsl(var(--chart-1))"
                    fill="hsl(var(--chart-1))"
                    fillOpacity={0.3}
                  />
                  <Area
                    type="monotone"
                    dataKey="clicks"
                    stackId="2"
                    stroke="hsl(var(--chart-2))"
                    fill="hsl(var(--chart-2))"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-1">
              <CardTitle className="text-foreground">
                Page Views Over Time
              </CardTitle>
              <div className="relative group">
                <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  Shows how your page views have changed over the past 3 months
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
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
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

      {/* Traffic Sources Heat Map and CTA Clicks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-1">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Search className="w-5 h-5 text-primary" />
                Traffic Sources Heat Map
              </CardTitle>
              <div className="relative group">
                <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  Visual representation of traffic volume from different sources
                  over the past 4 weeks
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
            <CardDescription className="text-muted-foreground">
              Traffic intensity by source over the last 4 weeks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Heat Map Legend */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Lower</span>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-blue-100 rounded"></div>
                  <div className="w-4 h-4 bg-blue-200 rounded"></div>
                  <div className="w-4 h-4 bg-blue-300 rounded"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded"></div>
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                </div>
                <span className="text-muted-foreground">Higher</span>
              </div>

              {/* Heat Map Grid */}
              <div className="space-y-2">
                {/* Header Row */}
                <div className="grid grid-cols-5 gap-2">
                  <div className="text-sm font-medium text-foreground"></div>
                  <div className="text-center text-sm font-medium text-foreground">
                    {weekDates[0]}
                  </div>
                  <div className="text-center text-sm font-medium text-foreground">
                    {weekDates[1]}
                  </div>
                  <div className="text-center text-sm font-medium text-foreground">
                    {weekDates[2]}
                  </div>
                  <div className="text-center text-sm font-medium text-foreground">
                    {weekDates[3]}
                  </div>
                </div>

                {/* Data Rows */}
                {(() => {
                  // Calculate global min/max across all sources and weeks
                  const allValues = trafficSourceData.flatMap((item) => [
                    item.week1,
                    item.week2,
                    item.week3,
                    item.week4,
                  ]);
                  const globalMax = Math.max(...allValues);
                  const globalMin = Math.min(...allValues);
                  const globalRange = globalMax - globalMin;

                  const getIntensity = (value: number) => {
                    // Simple linear scale: higher value = darker color (1-6)
                    const normalized = (value - globalMin) / globalRange;
                    return Math.ceil(normalized * 5) + 1;
                  };

                  return trafficSourceData.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="grid grid-cols-5 gap-2 items-center"
                      >
                        <div className="text-sm font-medium text-foreground truncate pr-2">
                          {item.source}
                        </div>
                        <div
                          className={`h-8 rounded flex items-center justify-center text-xs font-medium text-white bg-blue-${
                            getIntensity(item.week1) * 100
                          } hover:scale-105 transition-transform cursor-pointer`}
                          title={`${item.source} - ${
                            weekDates[0]
                          }: ${item.week1.toLocaleString()} visits`}
                        >
                          {item.week1.toLocaleString()}
                        </div>
                        <div
                          className={`h-8 rounded flex items-center justify-center text-xs font-medium text-white bg-blue-${
                            getIntensity(item.week2) * 100
                          } hover:scale-105 transition-transform cursor-pointer`}
                          title={`${item.source} - ${
                            weekDates[1]
                          }: ${item.week2.toLocaleString()} visits`}
                        >
                          {item.week2.toLocaleString()}
                        </div>
                        <div
                          className={`h-8 rounded flex items-center justify-center text-xs font-medium text-white bg-blue-${
                            getIntensity(item.week3) * 100
                          } hover:scale-105 transition-transform cursor-pointer`}
                          title={`${item.source} - ${
                            weekDates[2]
                          }: ${item.week3.toLocaleString()} visits`}
                        >
                          {item.week3.toLocaleString()}
                        </div>
                        <div
                          className={`h-8 rounded flex items-center justify-center text-xs font-medium text-white bg-blue-${
                            getIntensity(item.week4) * 100
                          } hover:scale-105 transition-transform cursor-pointer`}
                          title={`${item.source} - ${
                            weekDates[3]
                          }: ${item.week4.toLocaleString()} visits`}
                        >
                          {item.week4.toLocaleString()}
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-1">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Target className="w-5 h-5 text-primary" />
                CTA Clicks by Type
              </CardTitle>
              <div className="relative group">
                <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  Distribution of call-to-action clicks across different user
                  actions
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
            <CardDescription className="text-muted-foreground">
              Total: 7,280 clicks across all CTA types
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ctaClicksData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="type" stroke="#64748b" />
                  <YAxis
                    stroke="#64748b"
                    domain={[0, 3000]}
                    tickFormatter={(value) => `${value.toLocaleString()}`}
                  />
                  <ChartTooltip
                    formatter={(value: number) => [
                      `${value.toLocaleString()} clicks`,
                      "CTA Clicks",
                    ]}
                  />
                  <Bar dataKey="clicks" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Summary Stats */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              {ctaClicksData.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-semibold text-foreground">
                    {item.percentage}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.type}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-1">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Bot className="w-5 h-5 text-primary" />
                AI-Powered Insights
              </CardTitle>
              <div className="relative group">
                <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  AI-generated insights and recommendations based on your page
                  performance data
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
            <CardDescription className="text-muted-foreground">
              Automated analysis of your pages performance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-muted rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium text-foreground">
                    Strong Search Visibility
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your pages are performing 18% above industry average for
                    search impressions. The &ldquo;Daniel&apos;s Ice Cream
                    locations&rdquo; page is your top performer with 340K
                    monthly impressions.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-chart-4 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium text-foreground">
                    CTA Optimization Opportunity
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Product pages have 12% conversion rate vs 7% on blog posts.
                    Consider adding more prominent CTAs to blog content to
                    capture reader interest.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium text-foreground">
                    Growing AI Citation Authority
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your content is being cited 28% more by AI systems this
                    month. This indicates high content quality and relevance for
                    user queries.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-1">
              <CardTitle className="text-foreground">
                Recommended Actions
              </CardTitle>
              <div className="relative group">
                <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  Prioritized action items to improve your page performance and
                  user experience
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
            <CardDescription className="text-muted-foreground">
              Priority improvements for your pages
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-chart-4" />
                  <span className="text-sm font-medium text-foreground">
                    Optimize Blog CTAs
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">
                  High Impact
                </Badge>
              </div>
              <Progress value={75} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Add compelling CTAs to blog posts to match product page
                performance
              </p>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-chart-2" />
                  <span className="text-sm font-medium text-foreground">
                    Improve Load Speed
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">
                  Medium Impact
                </Badge>
              </div>
              <Progress value={45} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Optimize images and scripts to reduce page load time by 0.8s
              </p>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-foreground">
                    Mobile Experience
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">
                  Low Impact
                </Badge>
              </div>
              <Progress value={25} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Enhance mobile navigation for better user engagement
              </p>
            </div>

            <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              <ArrowUpRight className="w-4 h-4 mr-2" />
              View All Recommendations
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Page Health Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold text-foreground">Page Health</h2>
          <Badge variant="outline" className="text-xs">
            Overall Score: 89/100
          </Badge>
        </div>

        {/* Page Speed Metrics */}
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-1">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Clock className="w-5 h-5 text-primary" />
                Page Speed Metrics
              </CardTitle>
              <div className="relative group">
                <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  Lighthouse performance metrics and Core Web Vitals
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
            <CardDescription className="text-muted-foreground">
              Lighthouse scores and Core Web Vitals performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
                  {pageSpeedData.performance}
                </div>
                <div className="text-sm text-muted-foreground">Performance</div>
                <Progress value={pageSpeedData.performance} className="mt-2" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
                  {pageSpeedData.accessibility}
                </div>
                <div className="text-sm text-muted-foreground">
                  Accessibility
                </div>
                <Progress
                  value={pageSpeedData.accessibility}
                  className="mt-2"
                />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
                  {pageSpeedData.bestPractices}
                </div>
                <div className="text-sm text-muted-foreground">
                  Best Practices
                </div>
                <Progress
                  value={pageSpeedData.bestPractices}
                  className="mt-2"
                />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
                  {pageSpeedData.seo}
                </div>
                <div className="text-sm text-muted-foreground">SEO</div>
                <Progress value={pageSpeedData.seo} className="mt-2" />
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-lg font-semibold text-foreground">
                  {pageSpeedData.firstContentfulPaint}s
                </div>
                <div className="text-xs text-muted-foreground">FCP</div>
                <Badge
                  variant={
                    pageSpeedData.firstContentfulPaint < 1.8
                      ? "default"
                      : "destructive"
                  }
                  className="text-xs mt-1"
                >
                  {pageSpeedData.firstContentfulPaint < 1.8
                    ? "Good"
                    : "Needs Improvement"}
                </Badge>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-lg font-semibold text-foreground">
                  {pageSpeedData.largestContentfulPaint}s
                </div>
                <div className="text-xs text-muted-foreground">LCP</div>
                <Badge
                  variant={
                    pageSpeedData.largestContentfulPaint < 2.5
                      ? "default"
                      : "destructive"
                  }
                  className="text-xs mt-1"
                >
                  {pageSpeedData.largestContentfulPaint < 2.5
                    ? "Good"
                    : "Needs Improvement"}
                </Badge>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-lg font-semibold text-foreground">
                  {pageSpeedData.cumulativeLayoutShift}
                </div>
                <div className="text-xs text-muted-foreground">CLS</div>
                <Badge
                  variant={
                    pageSpeedData.cumulativeLayoutShift < 0.1
                      ? "default"
                      : "destructive"
                  }
                  className="text-xs mt-1"
                >
                  {pageSpeedData.cumulativeLayoutShift < 0.1
                    ? "Good"
                    : "Needs Improvement"}
                </Badge>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-lg font-semibold text-foreground">
                  {pageSpeedData.firstInputDelay}s
                </div>
                <div className="text-xs text-muted-foreground">FID</div>
                <Badge
                  variant={
                    pageSpeedData.firstInputDelay < 0.1
                      ? "default"
                      : "destructive"
                  }
                  className="text-xs mt-1"
                >
                  {pageSpeedData.firstInputDelay < 0.1
                    ? "Good"
                    : "Needs Improvement"}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* WCAG Accessibility and Schema Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center gap-1">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  WCAG Accessibility
                </CardTitle>
                <div className="relative group">
                  <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    Web Content Accessibility Guidelines compliance
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </div>
              <CardDescription className="text-muted-foreground">
                Overall Score: {wcagData.overallScore}/100
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">
                    {wcagData.overallScore}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Accessibility Score
                  </div>
                  <Progress value={wcagData.overallScore} className="mt-2" />
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Issues Found:</h4>
                  {wcagData.issues.map((issue, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-muted rounded-lg"
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${
                          issue.severity === "high"
                            ? "bg-destructive"
                            : issue.severity === "medium"
                            ? "bg-chart-4"
                            : "bg-secondary"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">
                          {issue.description}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {issue.count} instances
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs capitalize">
                        {issue.severity}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center gap-1">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Search className="w-5 h-5 text-primary" />
                  Schema Information
                </CardTitle>
                <div className="relative group">
                  <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    Structured data markup validation and implementation
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </div>
              <CardDescription className="text-muted-foreground">
                {schemaData.implementedTypes}/{schemaData.totalTypes} schema
                types implemented
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      schemaData.validationStatus === "valid"
                        ? "default"
                        : "destructive"
                    }
                  >
                    {schemaData.validationStatus === "valid"
                      ? "Valid"
                      : "Errors Found"}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Schema validation status
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Schema Types:</h4>
                  {schemaData.types.map((schema, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-muted rounded"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            schema.status === "valid"
                              ? "bg-secondary"
                              : schema.status === "warning"
                              ? "bg-chart-4"
                              : "bg-destructive"
                          }`}
                        ></div>
                        <span className="text-sm font-medium text-foreground">
                          {schema.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={schema.implemented ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {schema.implemented ? "Implemented" : "Missing"}
                        </Badge>
                        <Badge
                          variant={
                            schema.status === "valid"
                              ? "default"
                              : schema.status === "warning"
                              ? "outline"
                              : "destructive"
                          }
                          className="text-xs"
                        >
                          {schema.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Tracking */}
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-1">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Target className="w-5 h-5 text-primary" />
                Analytics Tracking
              </CardTitle>
              <div className="relative group">
                <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  Analytics tools and tracking tags implementation status
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
            <CardDescription className="text-muted-foreground">
              Analytics {analyticsData.enabled ? "enabled" : "disabled"} -{" "}
              {
                analyticsData.tags.filter((tag) => tag.status === "active")
                  .length
              }{" "}
              active tags
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge
                  variant={analyticsData.enabled ? "default" : "destructive"}
                >
                  {analyticsData.enabled
                    ? "Analytics Enabled"
                    : "Analytics Disabled"}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Tracking status
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {analyticsData.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          tag.status === "active"
                            ? "bg-secondary"
                            : "bg-muted-foreground"
                        }`}
                      ></div>
                      <div>
                        <div className="font-medium text-foreground">
                          {tag.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {tag.id}
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant={
                        tag.status === "active" ? "default" : "secondary"
                      }
                      className="text-xs"
                    >
                      {tag.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search Terms Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold text-foreground">
            Search Terms Performance
          </h2>
          <Badge variant="outline" className="text-xs">
            Top Performing Keywords
          </Badge>
        </div>

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
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 text-sm font-medium text-foreground">
                        Search Term
                      </th>
                      <th className="text-right py-2 px-2 text-sm font-medium text-foreground">
                        Impressions
                        <span className="ml-1 text-muted-foreground">↓</span>
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
                      Generic search terms that don&apos;t include your brand
                      name
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
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 text-sm font-medium text-foreground">
                        Search Term
                      </th>
                      <th className="text-right py-2 px-2 text-sm font-medium text-foreground">
                        Impressions
                        <span className="ml-1 text-muted-foreground">↓</span>
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

      {/* AI Visibility Score */}
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center gap-1">
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Bot className="w-5 h-5 text-primary" />
              AI Visibility Score
            </CardTitle>
            <div className="relative group">
              <Info className="h-4 w-4 text-muted-foreground cursor-help hover:text-foreground" />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                How frequently AI models are mentioning your brand in answers to
                unbranded queries that are relevant to your business
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>
          <CardDescription className="text-muted-foreground">
            Visibility scores across different AI models
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              visibilityScore: {
                label: "Visibility Score",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[200px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={aiVisibilityData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                />
                <XAxis dataKey="model" stroke="hsl(var(--muted-foreground))" />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  domain={[0, 100]}
                  tickFormatter={(value) => `${value}%`}
                />
                <ChartTooltip
                  formatter={(value: number) => [
                    `${value}%`,
                    "Visibility Score",
                  ]}
                />
                <Bar
                  dataKey="visibilityScore"
                  fill="hsl(var(--chart-1))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
