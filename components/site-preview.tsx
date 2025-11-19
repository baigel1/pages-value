"use client";

import { useState } from "react";
import { ExternalLink, Circle, User, GitBranch, GitCommit } from "lucide-react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type PageType = "store" | "latte" | "locator";

const pageTypeImages: Record<PageType, string> = {
  store: "/yext-roasters.png",
  latte: "/latte.png",
  locator: "/locator.png",
};

const pageTypeUrls: Record<PageType, string> = {
  store: "locations.yextroasters.com/ny/new-york/61-9th-avenue",
  latte: "locations.yextroasters.com/ny/new-york/61-9th-avenue/latte",
  locator: "locations.yextroasters.com/stores",
};

export function SitePreview() {
  const [pageType, setPageType] = useState<PageType>("store");

  return (
    <div className="flex gap-6 px-8 py-4">
      {/* Left side - Page Preview */}
      <div className="flex-1">
        <div className="relative w-full h-72 rounded overflow-hidden border bg-white group cursor-pointer transition-shadow duration-200 hover:shadow-lg">
          <Image
            src={pageTypeImages[pageType]}
            alt={`Yext Roasters ${pageType} Preview`}
            fill
            className="object-cover"
          />
          {/* Hover overlay with Edit Layout button */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Button
              variant="default"
              className="shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                // Placeholder for future functionality
              }}
            >
              Edit Layout
            </Button>
          </div>
        </div>
      </div>

      {/* Right side - Deployment Information */}
      <div className="flex-1 space-y-4">
        <div className="space-y-3">
          {/* Domain */}
          <div>
            <div className="text-sm font-medium text-gray-600 mb-0.5">Domain</div>
            <div className="text-sm text-gray-900">
              locations.yextroasters.com
            </div>
          </div>

          {/* View Page Type */}
          <div>
            <div className="text-sm font-medium text-gray-600 mb-0.5 flex items-center gap-2 flex-wrap">
              <span>View</span>
              <Select value={pageType} onValueChange={(value) => setPageType(value as PageType)}>
                <SelectTrigger className="w-auto min-w-[80px] h-7 px-3 py-0 text-sm border border-gray-300 rounded-full bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-offset-0 shadow-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="store">store</SelectItem>
                  <SelectItem value="latte">latte</SelectItem>
                  <SelectItem value="locator">locator</SelectItem>
                </SelectContent>
              </Select>
              <span>page</span>
            </div>
            <div className="mt-1.5">
              <a
                href={`https://${pageTypeUrls[pageType]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-900 hover:underline flex items-center gap-1 w-fit"
              >
                {pageTypeUrls[pageType]}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Status */}
          <div>
            <div className="text-sm font-medium text-gray-600 mb-0.5">Status</div>
            <div className="flex items-center gap-2">
              <Circle className="w-2 h-2 fill-green-500 text-green-500" />
              <span className="text-sm text-gray-900">Ready</span>
              <span className="text-sm text-gray-600">Created Sep 15 by</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-gray-300 flex items-center justify-center">
                  <User className="w-2.5 h-2.5 text-gray-600" />
                </div>
                <span className="text-sm text-gray-900">apav-dev</span>
              </div>
            </div>
          </div>

          {/* Source */}
          <div>
            <div className="text-sm font-medium text-gray-600 mb-0.5">Source</div>
            <div className="flex items-center gap-2 text-sm text-gray-900">
              <GitBranch className="w-4 h-4" />
              <span>main</span>
              <GitCommit className="w-4 h-4 ml-2" />
              <span className="text-gray-600">
                5d80ce4 Refactor polling logic in useAudit hook to simplify conditions and rem...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

