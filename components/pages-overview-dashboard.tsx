"use client";

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

const ctaPerformanceData = [
  { page: "Homepage", clicks: 2400, conversions: 240, rate: 10.0 },
  { page: "Product Pages", clicks: 1800, conversions: 216, rate: 12.0 },
  { page: "Blog Posts", clicks: 1200, conversions: 84, rate: 7.0 },
  { page: "Landing Pages", clicks: 900, conversions: 108, rate: 12.0 },
];

const aiCitationsData = [
  { week: "Week 1", citations: 45, sources: 12 },
  { week: "Week 2", citations: 52, sources: 15 },
  { week: "Week 3", citations: 61, sources: 18 },
  { week: "Week 4", citations: 58, sources: 16 },
];

export function PagesOverviewDashboard() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-[family-name:var(--font-work-sans)] text-foreground">
            Daniel's Ice Cream Chain Pages Overview
          </h1>
          <p className="text-muted-foreground mt-1">
            Performance insights and actionable recommendations for your pages
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-secondary/10 text-secondary">
            <CheckCircle className="w-3 h-3 mr-1" />
            All systems operational
          </Badge>
          <Star className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">
              Search Impressions
            </CardTitle>
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
            <CardTitle className="text-sm font-medium text-card-foreground">
              Click-Through Rate
            </CardTitle>
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
            <CardTitle className="text-sm font-medium text-card-foreground">
              CTA Clicks
            </CardTitle>
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
            <CardTitle className="text-sm font-medium text-card-foreground">
              AI Citations
            </CardTitle>
            <Bot className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">216</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3 mr-1 text-secondary" />
              +28% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">
              Search Performance Trend
            </CardTitle>
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
            <CardTitle className="text-foreground">
              CTA Performance by Page Type
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Click-through rates and conversions across different page types
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                clicks: {
                  label: "Clicks",
                  color: "hsl(var(--chart-3))",
                },
                conversions: {
                  label: "Conversions",
                  color: "hsl(var(--chart-4))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ctaPerformanceData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                  />
                  <XAxis dataKey="page" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip />
                  <Bar
                    dataKey="clicks"
                    fill="hsl(var(--chart-3))"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="conversions"
                    fill="hsl(var(--chart-4))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Bot className="w-5 h-5 text-primary" />
              AI-Powered Insights
            </CardTitle>
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
                    search impressions. The "Daniel's Ice Cream locations" page
                    is your top performer with 340K monthly impressions.
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
            <CardTitle className="text-foreground">
              Recommended Actions
            </CardTitle>
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

      {/* AI Citations Trend */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Bot className="w-5 h-5 text-primary" />
            AI Citations Trend
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            How often your content is being referenced by AI systems
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              citations: {
                label: "Citations",
                color: "hsl(var(--chart-5))",
              },
              sources: {
                label: "Unique Sources",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[200px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={aiCitationsData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                />
                <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <ChartTooltip />
                <Line
                  type="monotone"
                  dataKey="citations"
                  stroke="hsl(var(--chart-5))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--chart-5))", strokeWidth: 2, r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="sources"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
