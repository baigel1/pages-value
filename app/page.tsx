import { SiteHeader } from "@/components/site-header";
import { SitePreview } from "@/components/site-preview";
import { AnalyticsSection } from "@/components/analytics-section";

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <SitePreview />
      <AnalyticsSection />
    </div>
  );
}
