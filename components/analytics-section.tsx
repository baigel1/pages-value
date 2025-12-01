import { AnalyticsHeader } from "./analytics-header";
import { KeyStats } from "./key-stats";

export function AnalyticsSection() {
  return (
    <div className="px-8 py-6 space-y-4">
      <AnalyticsHeader />
      <KeyStats />
    </div>
  );
}
