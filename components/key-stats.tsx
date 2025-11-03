import { ChevronDown, Sparkles } from "lucide-react";
import { MetricCard } from "./metric-card";

export function KeyStats() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gray-700">Your key stats for the</span>
          <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium">
            last 30 days
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        <a
          href="#"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          + Add Stats
        </a>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard title="Site sessions" value="0" />
        <MetricCard title="Total sales" value="$0.00" />
        <MetricCard title="Total orders" value="0" />
        <MetricCard title="New subscriptions" value="0" />
      </div>

      <div className="flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 text-blue-600 hover:underline text-sm font-medium"
        >
          <Sparkles className="w-4 h-4 text-blue-400" />
          Help me grow my site traffic
        </a>
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

