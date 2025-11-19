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
import {
  AlertCircle,
  ArrowUpRight,
  Clock,
  Users,
  Info,
} from "lucide-react";

export function RecommendedActions() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center gap-1">
          <CardTitle className="text-foreground">Recommended Actions</CardTitle>
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
  );
}


