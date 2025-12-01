import { Button } from "@/components/ui/button";
import { Smartphone, X } from "lucide-react";

export function AppPromotionBanner() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between">
      <p className="text-gray-700 text-sm">
        Get analytics and reports on the go with the Wix app.
      </p>
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          <Smartphone className="w-4 h-4 mr-2" />
          Get the App
        </Button>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

