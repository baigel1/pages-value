import { Badge } from "@/components/ui/badge";

export function AnalyticsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h2 className="text-3xl font-bold text-blue-900">Analytics</h2>
        <Badge
          variant="outline"
          className="bg-white border-gray-300 text-gray-600 font-normal"
        >
          No visitors at the moment
        </Badge>
      </div>
      <a
        href="#"
        className="text-blue-600 hover:underline text-sm font-medium"
      >
        View Your Site Analytics
      </a>
    </div>
  );
}

