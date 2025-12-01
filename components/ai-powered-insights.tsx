"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bot, Info } from "lucide-react";

export function AIPoweredInsights() {
  return (
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
  );
}

