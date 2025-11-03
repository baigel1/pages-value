import { Globe } from "lucide-react";
import Image from "next/image";

export function SitePreview() {
  return (
    <div className="flex gap-8 px-8 py-8">
      <div className="flex-1 space-y-6">
        <div>
          <div className="flex gap-4">
            <div className="relative w-full h-64 rounded overflow-hidden border">
              <Image
                src="/yext-roasters.png"
                alt="Yext Roasters Store Preview"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded overflow-hidden border bg-gray-50 flex flex-col justify-center items-center p-6">
              <h3 className="text-xl font-bold mb-2">Yext Roasters</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Globe className="w-4 h-4" />
                <a href="#" className="underline hover:text-gray-800">
                  cone-plums-tr42.squarespace.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

