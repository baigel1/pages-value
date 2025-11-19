import { RecommendationsHeader } from "./recommendations-header";
import { AIPoweredInsights } from "./ai-powered-insights";
import { RecommendedActions } from "./recommended-actions";

export function RecommendationsSection() {
  return (
    <div className="px-8 py-6 space-y-4">
      <RecommendationsHeader />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AIPoweredInsights />
        <RecommendedActions />
      </div>
    </div>
  );
}


