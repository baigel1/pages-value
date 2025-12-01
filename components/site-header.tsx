import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <div className="flex items-center justify-between px-8 py-6 border-b">
      <h1 className="text-3xl font-bold">Yext Roasters</h1>
      <div className="flex items-center gap-3">
        <Button className="bg-black text-white hover:bg-black/90">
          VIEW PAGE GROUPS
        </Button>
      </div>
    </div>
  );
}
