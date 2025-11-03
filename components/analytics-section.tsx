import { AnalyticsHeader } from "./analytics-header";
import { KeyStats } from "./key-stats";
import { AppPromotionBanner } from "./app-promotion-banner";

export function AnalyticsSection() {
  return (
    <div className="px-8 py-8 space-y-6">
      <AnalyticsHeader />
      <KeyStats />
      <AppPromotionBanner />
    </div>
  );
}

